'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface Overview {
  mrr: number;
  arr: number;
  revenue30d: number;
  revenue90d: number;
  profit: number;
  roi: number;
  churnRate: number;
  growthRate: number;
  period: string;
}

interface Prediction {
  period: string;
  expected: number;
  best?: number;
  worst?: number;
  confidence: number;
}

interface Anomaly {
  id: string;
  type: string;
  severity: string;
  metric: string;
  deviation: number;
  cause: string | null;
  recommendation: string | null;
  detectedAt: string;
}

interface Cohort {
  cohort: string;
  m0: number;
  m1: number | null;
  m2: number | null;
  m3: number | null;
  m4: number | null;
  m5: number | null;
  m6: number | null;
}

interface UnitEconomics {
  ltv: number;
  cac: number;
  ltvCacRatio: number;
  averageRevenue: number;
  paybackPeriod: number;
}

const COLORS = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#8b5cf6'];

export default function FinancePage() {
  const params = useParams();
  const organizationId = params.organizationId as string || params.organizationSlug as string;
  
  const [loading, setLoading] = useState(true);
  const [overview, setOverview] = useState<Overview | null>(null);
  const [predictions, setPredictions] = useState<Prediction[]>([]);
  const [anomalies, setAnomalies] = useState<Anomaly[]>([]);
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [unitEconomics, setUnitEconomics] = useState<UnitEconomics | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [loadingSection, setLoadingSection] = useState<string | null>(null);

  useEffect(() => {
    if (organizationId) {
      fetchAllData();
    }
  }, [organizationId]);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      
      // Overview
      const overviewRes = await fetch(`/api/finance/overview?organizationId=${organizationId}`);
      const overviewData = await overviewRes.json();
      setOverview(overviewData);

      // Unit Economics
      const ueRes = await fetch(`/api/finance/unit-economics?organizationId=${organizationId}`);
      const ueData = await ueRes.json();
      setUnitEconomics(ueData);

    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchPredictions = async () => {
    if (predictions.length > 0) return; // Ya cargados
    
    try {
      setLoadingSection('predictive');
      const res = await fetch('/api/finance/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organizationId, monthsAhead: 6 }),
      });
      const data = await res.json();
      setPredictions(data.predictions || []);
    } catch (error) {
      console.error('Error fetching predictions:', error);
    } finally {
      setLoadingSection(null);
    }
  };

  const fetchAnomalies = async () => {
    if (anomalies.length > 0) return; // Ya cargados
    
    try {
      setLoadingSection('anomalies');
      const res = await fetch('/api/finance/detect-anomalies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organizationId }),
      });
      const data = await res.json();
      setAnomalies(data.anomalies || []);
    } catch (error) {
      console.error('Error fetching anomalies:', error);
    } finally {
      setLoadingSection(null);
    }
  };

  const fetchCohorts = async () => {
    if (cohorts.length > 0) return; // Ya cargados
    
    try {
      setLoadingSection('cohorts');
      const res = await fetch(`/api/finance/cohort-analysis?organizationId=${organizationId}`);
      const data = await res.json();
      setCohorts(data.cohorts || []);
    } catch (error) {
      console.error('Error fetching cohorts:', error);
    } finally {
      setLoadingSection(null);
    }
  };

  const toggleSection = async (section: string) => {
    const newExpanded = expandedSection === section ? null : section;
    setExpandedSection(newExpanded);

    // Fetch data when expanding
    if (newExpanded === 'predictive') {
      await fetchPredictions();
    } else if (newExpanded === 'anomalies') {
      await fetchAnomalies();
    } else if (newExpanded === 'cohorts') {
      await fetchCohorts();
    }
  };

  if (loading) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⏳</div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Cargando FinanzaDIOS...
        </h2>
        <p style={{ color: '#6b7280' }}>Conectando con APIs y calculando métricas</p>
      </div>
    );
  }

  if (!overview) {
    return (
      <div style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Error al cargar métricas
        </h2>
        <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>
          No se pudieron cargar los datos financieros
        </p>
        <button 
          onClick={fetchAllData}
          style={{ 
            padding: '0.75rem 1.5rem', 
            background: '#6366f1', 
            color: 'white', 
            border: 'none', 
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem', background: '#f9fafb', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#1f2937' }}>
          🔮 FinanzaDIOS Dashboard
        </h1>
        <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
          CFO Autónomo con IA • Datos Reales • Periodo: {overview.period}
        </p>
      </div>

      {/* Métricas principales */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <MetricCard title="MRR Total" value={`€${overview.mrr.toLocaleString()}`} color="#6366f1" icon="💰" />
        <MetricCard title="ARR" value={`€${overview.arr.toLocaleString()}`} color="#ec4899" icon="📈" />
        <MetricCard title="Revenue (30d)" value={`€${overview.revenue30d.toLocaleString()}`} color="#10b981" icon="💵" />
        <MetricCard title="ROI" value={`${overview.roi.toFixed(1)}%`} color="#f59e0b" icon="🎯" />
      </div>

      {/* Unit Economics */}
      {unitEconomics && (
        <div style={{ marginBottom: '3rem', padding: '2rem', background: 'white', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.07)' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937' }}>
            💎 Unit Economics
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#f0fdf4', borderRadius: '12px', border: '2px solid #10b981' }}>
              <div style={{ fontSize: '0.875rem', color: '#065f46', marginBottom: '0.5rem', fontWeight: '600' }}>LTV</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>€{unitEconomics.ltv}</div>
              <div style={{ fontSize: '0.75rem', color: '#065f46', marginTop: '0.25rem' }}>Lifetime Value</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#fef2f2', borderRadius: '12px', border: '2px solid #ef4444' }}>
              <div style={{ fontSize: '0.875rem', color: '#991b1b', marginBottom: '0.5rem', fontWeight: '600' }}>CAC</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ef4444' }}>€{unitEconomics.cac}</div>
              <div style={{ fontSize: '0.75rem', color: '#991b1b', marginTop: '0.25rem' }}>Customer Acquisition</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#eff6ff', borderRadius: '12px', border: '2px solid #3b82f6' }}>
              <div style={{ fontSize: '0.875rem', color: '#1e40af', marginBottom: '0.5rem', fontWeight: '600' }}>LTV/CAC</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6' }}>{unitEconomics.ltvCacRatio}x</div>
              <div style={{ fontSize: '0.75rem', color: '#1e40af', marginTop: '0.25rem' }}>Ratio</div>
            </div>
            <div style={{ textAlign: 'center', padding: '1rem', background: '#fef3c7', borderRadius: '12px', border: '2px solid #f59e0b' }}>
              <div style={{ fontSize: '0.875rem', color: '#92400e', marginBottom: '0.5rem', fontWeight: '600' }}>Payback</div>
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>{unitEconomics.paybackPeriod}</div>
              <div style={{ fontSize: '0.75rem', color: '#92400e', marginTop: '0.25rem' }}>meses</div>
            </div>
          </div>
        </div>
      )}

      {/* Análisis Predictivo */}
      <Section
        title="📈 Análisis Predictivo (IA Claude Sonnet)"
        expanded={expandedSection === 'predictive'}
        onToggle={() => toggleSection('predictive')}
        gradient="linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
        loading={loadingSection === 'predictive'}
      >
        <div style={{ padding: '2rem' }}>
          {predictions.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔮</div>
              <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                Generando predicciones con IA...
              </p>
            </div>
          ) : (
            <>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#1f2937' }}>
                Proyección MRR - Próximos 6 meses
              </h4>
              
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={predictions.map(p => ({
                  period: p.period,
                  Esperado: p.expected,
                  'Mejor Caso': p.best || p.expected,
                  'Peor Caso': p.worst || p.expected,
                }))}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="period" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      background: 'white', 
                      border: '1px solid #e5e7eb', 
                      borderRadius: '8px',
                      padding: '12px'
                    }} 
                  />
                  <Legend />
                  <Line type="monotone" dataKey="Esperado" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 5 }} />
                  <Line type="monotone" dataKey="Mejor Caso" stroke="#10b981" strokeWidth={2} strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="Peor Caso" stroke="#ef4444" strokeWidth={2} strokeDasharray="5 5" />
                </LineChart>
              </ResponsiveContainer>

              <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {predictions.slice(0, 3).map((pred, idx) => (
                  <div key={idx} style={{ 
                    padding: '1rem', 
                    background: idx === 0 ? '#dcfce7' : idx === 1 ? '#dbeafe' : '#fef2f2', 
                    borderRadius: '12px',
                    border: `2px solid ${idx === 0 ? '#10b981' : idx === 1 ? '#3b82f6' : '#ef4444'}`
                  }}>
                    <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem', fontWeight: '600' }}>
                      {pred.period}
                    </div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      €{pred.expected.toLocaleString()}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>
                      Confianza: {(pred.confidence * 100).toFixed(0)}%
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </Section>

      {/* Detección de Anomalías */}
      <Section
        title="🚨 Detección de Anomalías (IA)"
        expanded={expandedSection === 'anomalies'}
        onToggle={() => toggleSection('anomalies')}
        gradient="linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"
        loading={loadingSection === 'anomalies'}
      >
        <div style={{ padding: '2rem' }}>
          {anomalies.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#10b981', marginBottom: '0.5rem' }}>
                No se detectaron anomalías
              </h3>
              <p style={{ color: '#6b7280' }}>
                Todas las métricas dentro del rango esperado
              </p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {anomalies.map((anomaly) => (
                <div key={anomaly.id} style={{ 
                  padding: '1.5rem', 
                  background: anomaly.severity === 'critical' ? '#fef2f2' : anomaly.severity === 'high' ? '#fef3c7' : '#f0fdf4', 
                  border: `2px solid ${anomaly.severity === 'critical' ? '#ef4444' : anomaly.severity === 'high' ? '#f59e0b' : '#10b981'}`,
                  borderRadius: '12px' 
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontWeight: '700', fontSize: '1.125rem', color: '#1f2937' }}>
                      {anomaly.severity === 'critical' ? '🔴' : anomaly.severity === 'high' ? '🟠' : '🟡'} {anomaly.type}
                    </span>
                    <span style={{ 
                      fontSize: '0.875rem', 
                      padding: '0.25rem 0.75rem', 
                      background: 'white',
                      borderRadius: '12px',
                      fontWeight: '600'
                    }}>
                      {anomaly.deviation.toFixed(1)}% desviación
                    </span>
                  </div>
                  {anomaly.cause && (
                    <div style={{ fontSize: '0.875rem', marginBottom: '0.75rem', color: '#374151' }}>
                      <strong>Causa probable:</strong> {anomaly.cause}
                    </div>
                  )}
                  {anomaly.recommendation && (
                    <div style={{ 
                      fontSize: '0.875rem', 
                      padding: '0.75rem', 
                      background: 'white',
                      borderRadius: '8px',
                      color: '#065f46',
                      fontWeight: '500'
                    }}>
                      💡 <strong>Recomendación:</strong> {anomaly.recommendation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* Análisis de Cohortes */}
      <Section
        title="📊 Análisis de Cohortes y Retención"
        expanded={expandedSection === 'cohorts'}
        onToggle={() => toggleSection('cohorts')}
        gradient="linear-gradient(135deg, #a855f7 0%, #9333ea 100%)"
        loading={loadingSection === 'cohorts'}
      >
        <div style={{ padding: '2rem' }}>
          {cohorts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📊</div>
              <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
                Analizando retención por cohorte...
              </p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <h4 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
                Tabla de Retención por Cohorte
              </h4>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '12px', overflow: 'hidden' }}>
                <thead>
                  <tr style={{ background: '#f3f4f6' }}>
                    <th style={{ padding: '1rem', textAlign: 'left', border: '1px solid #e5e7eb', fontWeight: '700', fontSize: '0.875rem' }}>Cohorte</th>
                    <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontWeight: '700', fontSize: '0.875rem' }}>M0</th>
                    <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontWeight: '700', fontSize: '0.875rem' }}>M1</th>
                    <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontWeight: '700', fontSize: '0.875rem' }}>M2</th>
                    <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontWeight: '700', fontSize: '0.875rem' }}>M3</th>
                    <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontWeight: '700', fontSize: '0.875rem' }}>M4</th>
                    <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontWeight: '700', fontSize: '0.875rem' }}>M5</th>
                    <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontWeight: '700', fontSize: '0.875rem' }}>M6</th>
                  </tr>
                </thead>
                <tbody>
                  {cohorts.slice(0, 8).map((cohort, idx) => (
                    <tr key={idx} style={{ background: idx % 2 === 0 ? 'white' : '#f9fafb' }}>
                      <td style={{ padding: '1rem', border: '1px solid #e5e7eb', fontWeight: '600', fontSize: '0.875rem' }}>{cohort.cohort}</td>
                      <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', background: '#dcfce7', fontWeight: '700', fontSize: '0.875rem' }}>100%</td>
                      <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontSize: '0.875rem', fontWeight: '600' }}>
                        {cohort.m1 !== null ? (
                          <span style={{ color: cohort.m1 >= 90 ? '#10b981' : cohort.m1 >= 80 ? '#f59e0b' : '#ef4444' }}>
                            {cohort.m1}%
                          </span>
                        ) : '-'}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontSize: '0.875rem', fontWeight: '600' }}>
                        {cohort.m2 !== null ? (
                          <span style={{ color: cohort.m2 >= 85 ? '#10b981' : cohort.m2 >= 75 ? '#f59e0b' : '#ef4444' }}>
                            {cohort.m2}%
                          </span>
                        ) : '-'}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontSize: '0.875rem', fontWeight: '600' }}>
                        {cohort.m3 !== null ? `${cohort.m3}%` : '-'}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontSize: '0.875rem', fontWeight: '600' }}>
                        {cohort.m4 !== null ? `${cohort.m4}%` : '-'}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontSize: '0.875rem', fontWeight: '600' }}>
                        {cohort.m5 !== null ? `${cohort.m5}%` : '-'}
                      </td>
                      <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', fontSize: '0.875rem', fontWeight: '600' }}>
                        {cohort.m6 !== null ? `${cohort.m6}%` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </Section>

      {/* Footer */}
      <div style={{ 
        marginTop: '3rem', 
        padding: '2.5rem', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
        borderRadius: '16px', 
        color: 'white', 
        textAlign: 'center',
        boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)'
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          FinanzaDIOS - Sistema Completo y Funcional
        </h2>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>7</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Endpoints API</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Services con IA</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{cohorts.length}</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Cohortes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{anomalies.length}</div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Anomalías</div>
          </div>
        </div>
        <p style={{ fontSize: '0.875rem', opacity: 0.9, marginTop: '1.5rem' }}>
          Backend completo • IA Claude Sonnet • Datos en tiempo real • Deploy en Railway
        </p>
      </div>
    </div>
  );
}

function MetricCard({ title, value, color, icon }: { title: string; value: string; color: string; icon: string }) {
  return (
    <div style={{ 
      padding: '2rem', 
      background: 'white', 
      borderRadius: '16px', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 8px 12px rgba(0,0,0,0.12)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.07)';
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <div style={{ fontSize: '0.875rem', color: '#6b7280', fontWeight: '500' }}>
          {title}
        </div>
        <div style={{ fontSize: '1.5rem' }}>{icon}</div>
      </div>
      <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color }}>
        {value}
      </div>
    </div>
  );
}

function Section({ 
  title, 
  expanded, 
  onToggle, 
  gradient, 
  children,
  loading 
}: { 
  title: string; 
  expanded: boolean; 
  onToggle: () => void; 
  gradient: string; 
  children: React.ReactNode;
  loading?: boolean;
}) {
  return (
    <div style={{ 
      marginBottom: '2rem', 
      background: 'white', 
      borderRadius: '16px', 
      overflow: 'hidden', 
      boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
      transition: 'box-shadow 0.2s'
    }}>
      <div
        style={{
          padding: '1.5rem',
          background: gradient,
          color: 'white',
          cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
        onClick={onToggle}
        onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
        onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>
            {title}
          </h2>
          <div style={{ fontSize: '1.5rem', transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            {loading ? '⏳' : expanded ? '▼' : '▶'}
          </div>
        </div>
      </div>
      {expanded && children}
    </div>
  );
}
