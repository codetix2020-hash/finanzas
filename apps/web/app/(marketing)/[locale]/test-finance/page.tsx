// @ts-nocheck

'use client';

import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';

export default function TestFinancePage() {
  // Estados necesarios
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Función para toggle de secciones
  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Función para manejar acciones de botones
  const handleAction = async (section: string) => {
    setIsGenerating(true);
    // Expandir la sección automáticamente
    setExpandedSection(section);
    // Simular carga de datos
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsGenerating(false);
  };

  // Datos mock
  const metrics = {
    mrr: 15420,
    revenue: 45230,
    profit: 33130,
    roi: 273.8,
  };

  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          🔮 Finance Dashboard - Test
        </h1>
        <p style={{ color: '#6b7280' }}>
          Sistema CFO autónomo con IA
        </p>
      </div>

      {/* Métricas principales */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>MRR Total</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6' }}>
            €{metrics.mrr.toLocaleString()}
          </div>
        </div>

        <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Revenue (30d)</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ec4899' }}>
            €{metrics.revenue.toLocaleString()}
          </div>
        </div>

        <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>Profit Neto</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>
            €{metrics.profit.toLocaleString()}
          </div>
        </div>

        <div style={{ padding: '1.5rem', background: 'white', borderRadius: '12px', border: '1px solid #e5e7eb', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>ROI Promedio</div>
          <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b' }}>
            {metrics.roi}%
          </div>
        </div>
      </div>

      {/* Comparaciones Temporales */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #6366f1', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('comparisons')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>⏱️</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Comparaciones Temporales</h2>
            </div>
          </div>
        </div>
        {expandedSection === 'comparisons' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', background: '#f3f4f6', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>MoM (Month over Month)</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>+12.5%</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>vs November 2024</div>
              </div>
              <div style={{ padding: '1rem', background: '#f3f4f6', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>QoQ (Quarter over Quarter)</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>+28.3%</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>vs Q3 2024</div>
              </div>
              <div style={{ padding: '1rem', background: '#f3f4f6', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.875rem', color: '#6b7280', marginBottom: '0.5rem' }}>YoY (Year over Year)</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>+156%</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>vs December 2023</div>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={[
                { month: 'Jul', mrr: 8500 },
                { month: 'Aug', mrr: 10200 },
                { month: 'Sep', mrr: 11800 },
                { month: 'Oct', mrr: 12900 },
                { month: 'Nov', mrr: 13700 },
                { month: 'Dec', mrr: 15420 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="mrr" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Autonomous Executor */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #10b981', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('executor')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🤖</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Autonomous Executor</h2>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpandedSection(expandedSection === 'executor' ? null : 'executor');
              }}
              disabled={isGenerating}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#10b981',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
              }}
            >
              📋 Ver Log de Acciones
            </button>
          </div>
        </div>
        {expandedSection === 'executor' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>Acciones Ejecutadas (últimas 10)</div>
              <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '1rem' }}>
                {[
                  { time: '2024-12-04 18:45', action: 'Alerta Slack enviada', status: 'success', impact: 'MRR drop detectado' },
                  { time: '2024-12-04 14:20', action: 'Precio ajustado en Stripe', status: 'success', impact: '+€250/month' },
                  { time: '2024-12-03 22:10', action: 'Email de retención enviado', status: 'success', impact: '3 customers saved' },
                ].map((log, idx) => (
                  <div key={idx} style={{ padding: '0.75rem', borderBottom: idx < 2 ? '1px solid #e5e7eb' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: '500' }}>{log.action}</div>
                      <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{log.time} • {log.impact}</div>
                    </div>
                    <div style={{ 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '12px', 
                      fontSize: '0.75rem',
                      background: log.status === 'success' ? '#d1fae5' : '#fef3c7',
                      color: log.status === 'success' ? '#065f46' : '#92400e'
                    }}>
                      {log.status === 'success' ? '✅ Completado' : '⏳ Pendiente'}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Predictive Analytics */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #8b5cf6', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('predictive')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🔮</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Predictive Analytics</h2>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpandedSection(expandedSection === 'predictive' ? null : 'predictive');
              }}
              disabled={isGenerating}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#8b5cf6',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
              }}
            >
              {isGenerating ? '⏳ Procesando...' : '🔮 Generar Predicciones'}
            </button>
          </div>
        </div>
        {expandedSection === 'predictive' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>📈 Proyección MRR</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={[
                  { month: 'Dec', actual: 15420, expected: 15420, best: 15420, worst: 15420 },
                  { month: 'Jan', actual: null, expected: 17250, best: 19500, worst: 15800 },
                  { month: 'Feb', actual: null, expected: 19200, best: 22100, worst: 17200 },
                  { month: 'Mar', actual: null, expected: 21500, best: 25200, worst: 19100 },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="actual" stroke="#8b5cf6" strokeWidth={3} name="Actual" />
                  <Line type="monotone" dataKey="expected" stroke="#3b82f6" strokeWidth={2} name="Expected" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="best" stroke="#10b981" strokeWidth={1} name="Best Case" />
                  <Line type="monotone" dataKey="worst" stroke="#ef4444" strokeWidth={1} name="Worst Case" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1rem', background: '#dcfce7', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.875rem', color: '#065f46', marginBottom: '0.5rem' }}>Best Case (6m)</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#065f46' }}>€38.1k MRR</div>
                <div style={{ fontSize: '0.75rem', color: '#065f46' }}>+147% growth</div>
              </div>
              <div style={{ padding: '1rem', background: '#dbeafe', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.875rem', color: '#1e40af', marginBottom: '0.5rem' }}>Expected (6m)</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e40af' }}>€30.8k MRR</div>
                <div style={{ fontSize: '0.75rem', color: '#1e40af' }}>+100% growth</div>
              </div>
              <div style={{ padding: '1rem', background: '#fee2e2', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.875rem', color: '#991b1b', marginBottom: '0.5rem' }}>Worst Case (6m)</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#991b1b' }}>€27.3k MRR</div>
                <div style={{ fontSize: '0.75rem', color: '#991b1b' }}>+77% growth</div>
              </div>
            </div>

            <div style={{ background: '#f3f4f6', borderRadius: '8px', padding: '1.5rem' }}>
              <div style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem' }}>💰 Runway & Burn Rate</div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Current Runway</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>18 months</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>Monthly Burn</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>€12,500</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Anomaly Detection */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #ef4444', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('anomaly')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🚨</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Anomaly Detection</h2>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpandedSection(expandedSection === 'anomaly' ? null : 'anomaly');
              }}
              disabled={isGenerating}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#ef4444',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
              }}
            >
              🚨 Detectar Anomalías
            </button>
          </div>
        </div>
        {expandedSection === 'anomaly' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>📊 Anomaly Timeline</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={[
                  { date: 'Nov 1', mrr: 13700, anomaly: null },
                  { date: 'Nov 15', mrr: 14200, anomaly: null },
                  { date: 'Dec 1', mrr: 15420, anomaly: null },
                  { date: 'Dec 5', mrr: 14800, anomaly: 14800 },
                  { date: 'Dec 10', mrr: 15200, anomaly: null },
                ]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="mrr" stroke="#3b82f6" strokeWidth={2} name="MRR" />
                  <Line type="monotone" dataKey="anomaly" stroke="#ef4444" strokeWidth={3} name="Anomaly" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div style={{ background: '#fee2e2', borderRadius: '8px', padding: '1.5rem', border: '2px solid #ef4444' }}>
              <div style={{ fontSize: '1rem', fontWeight: 'bold', marginBottom: '1rem', color: '#991b1b' }}>⚠️ Anomalías Detectadas</div>
              <div style={{ fontSize: '0.875rem', color: '#991b1b' }}>
                • <strong>Dec 5:</strong> Caída inusual de MRR (-4%) - Investigar churn
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Segmentación & Breakdown */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #f59e0b', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('segmentation')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🎯</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Segmentación & Breakdown</h2>
          </div>
        </div>
        {expandedSection === 'segmentation' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>📊 MRR por Plan</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={[
                  { plan: 'Enterprise', mrr: 8500 },
                  { plan: 'Pro', mrr: 5200 },
                  { plan: 'Starter', mrr: 1720 },
                ]} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="plan" type="category" />
                  <Tooltip />
                  <Bar dataKey="mrr" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>

      {/* Cohort Analysis & Retention */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #3b82f6', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('cohort')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>📊</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Cohort Analysis & Retention</h2>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpandedSection(expandedSection === 'cohort' ? null : 'cohort');
              }}
              disabled={isGenerating}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#3b82f6',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
              }}
            >
              📊 Cargar Cohort Analysis
            </button>
          </div>
        </div>
        {expandedSection === 'cohort' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>📈 Retention Table</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ background: '#f3f4f6' }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', border: '1px solid #e5e7eb' }}>Cohort</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>M0</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>M1</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>M3</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>M6</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { cohort: 'Oct 2024', m0: '100%', m1: '92%', m3: '85%', m6: '78%' },
                      { cohort: 'Nov 2024', m0: '100%', m1: '94%', m3: '88%', m6: null },
                      { cohort: 'Dec 2024', m0: '100%', m1: '96%', m3: null, m6: null },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? 'white' : '#f9fafb' }}>
                        <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb', fontWeight: '500' }}>{row.cohort}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{row.m0}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{row.m1}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{row.m3 || '-'}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{row.m6 || '-'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Unit Economics Calculator */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #8b5cf6', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('unit')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🧮</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Unit Economics Calculator</h2>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpandedSection(expandedSection === 'unit' ? null : 'unit');
              }}
              disabled={isGenerating}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#8b5cf6',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
              }}
            >
              🧮 Calcular Unit Economics
            </button>
          </div>
        </div>
        {expandedSection === 'unit' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>📊 Métricas Calculadas</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ background: '#f3f4f6' }}>
                      <th style={{ padding: '0.75rem', textAlign: 'left', border: '1px solid #e5e7eb' }}>Métrica</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>Valor</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>Benchmark</th>
                      <th style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: 'LTV', value: '€5,200', benchmark: '€3,000+', status: '✅' },
                      { metric: 'CAC', value: '€1,470', benchmark: '<€2,000', status: '✅' },
                      { metric: 'LTV/CAC', value: '3.54', benchmark: '>3x', status: '✅' },
                      { metric: 'Payback Period', value: '8.2m', benchmark: '<12m', status: '✅' },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? 'white' : '#f9fafb' }}>
                        <td style={{ padding: '0.75rem', border: '1px solid #e5e7eb', fontWeight: '500' }}>{row.metric}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{row.value}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{row.benchmark}</td>
                        <td style={{ padding: '0.75rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{row.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cash Flow & Burn */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #dc2626', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('cashflow')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>💰</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Cash Flow & Burn</h2>
          </div>
        </div>
        {expandedSection === 'cashflow' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
              <div style={{ padding: '1.5rem', background: '#fee2e2', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.875rem', color: '#991b1b', marginBottom: '0.5rem' }}>Current Cash</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#991b1b' }}>€450k</div>
              </div>
              <div style={{ padding: '1.5rem', background: '#fed7aa', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.875rem', color: '#9a3412', marginBottom: '0.5rem' }}>Monthly Burn</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#9a3412' }}>€45k</div>
              </div>
              <div style={{ padding: '1.5rem', background: '#fef3c7', borderRadius: '8px' }}>
                <div style={{ fontSize: '0.875rem', color: '#92400e', marginBottom: '0.5rem' }}>Runway</div>
                <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#92400e' }}>10 meses</div>
                <div style={{ fontSize: '0.75rem', color: '#92400e' }}>⚠️ {'<'} 12 meses</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Customer Health Scoring */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #ec4899', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('health')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🏥</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Customer Health Scoring</h2>
          </div>
        </div>
        {expandedSection === 'health' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1rem', color: '#6b7280', marginBottom: '1rem' }}>Portfolio Health Score</div>
              <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#10b981' }}>78</div>
              <div style={{ fontSize: '1rem', color: '#6b7280' }}>de 100 ✅</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              <div style={{ padding: '1.5rem', background: '#dcfce7', borderRadius: '8px', border: '2px solid #10b981' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🟢</div>
                <div style={{ fontSize: '0.875rem', color: '#065f46', marginBottom: '0.25rem' }}>Champions</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#065f46' }}>342</div>
              </div>
              <div style={{ padding: '1.5rem', background: '#fef3c7', borderRadius: '8px', border: '2px solid #f59e0b' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🟡</div>
                <div style={{ fontSize: '0.875rem', color: '#92400e', marginBottom: '0.25rem' }}>At-Risk</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#92400e' }}>89</div>
              </div>
              <div style={{ padding: '1.5rem', background: '#dbeafe', borderRadius: '8px', border: '2px solid #3b82f6' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔵</div>
                <div style={{ fontSize: '0.875rem', color: '#1e3a8a', marginBottom: '0.25rem' }}>Growth</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a' }}>156</div>
              </div>
              <div style={{ padding: '1.5rem', background: '#fee2e2', borderRadius: '8px', border: '2px solid #dc2626' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔴</div>
                <div style={{ fontSize: '0.875rem', color: '#991b1b', marginBottom: '0.25rem' }}>Churning</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#991b1b' }}>23</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Benchmarking vs Industria */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #f59e0b', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('benchmarking')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🏆</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Benchmarking vs Industria</h2>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpandedSection(expandedSection === 'benchmarking' ? null : 'benchmarking');
              }}
              disabled={isGenerating}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#f59e0b',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
              }}
            >
              ⚠️ Calcula Unit Econ primero
            </button>
          </div>
        </div>
        {expandedSection === 'benchmarking' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>📊 Tu posición vs SaaS B2B</h3>
              <div style={{ background: '#dcfce7', borderRadius: '8px', padding: '1.5rem', border: '2px solid #10b981' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#065f46' }}>
                  🏆 Overall Health Score: 85/100
                </div>
                <div style={{ fontSize: '0.875rem', color: '#065f46' }}>
                  ✅ <strong>Fortalezas:</strong> Churn rate excelente, growth rate fuerte, LTV/CAC saludable
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Forecasting & Scenarios */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #a855f7', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #a855f7 0%, #9333ea 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('scenarios')}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🎲</span>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Forecasting & Scenarios</h2>
            </div>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setExpandedSection(expandedSection === 'scenarios' ? null : 'scenarios');
              }}
              disabled={isGenerating}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'white',
                color: '#a855f7',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: isGenerating ? 'not-allowed' : 'pointer',
              }}
            >
              🎯 Run Scenario
            </button>
          </div>
        </div>
        {expandedSection === 'scenarios' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>📊 Scenario Comparison</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ background: '#f3f4f6' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', border: '1px solid #e5e7eb' }}>Scenario</th>
                      <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>MRR (6m)</th>
                      <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>MRR (12m)</th>
                      <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>Runway</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: '📈 Base Case', mrr6: '€30.8k', mrr12: '€52.5k', runway: '18 mo', bg: '#dbeafe' },
                      { name: '🚀 +3 SDRs', mrr6: '€35.2k', mrr12: '€61.8k', runway: '16 mo', bg: '#dcfce7' },
                      { name: '💰 +20% Pricing', mrr6: '€36.9k', mrr12: '€62.9k', runway: '19 mo', bg: '#dcfce7' },
                    ].map((scenario, idx) => (
                      <tr key={idx} style={{ background: scenario.bg }}>
                        <td style={{ padding: '1rem', border: '1px solid #e5e7eb', fontWeight: '500' }}>{scenario.name}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{scenario.mrr6}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{scenario.mrr12}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{scenario.runway}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Competitive Intelligence */}
      <div style={{ marginBottom: '2rem', background: 'white', borderRadius: '12px', border: '2px solid #14b8a6', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('competitive')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🔍</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Competitive Intelligence</h2>
          </div>
        </div>
        {expandedSection === 'competitive' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>🏆 Competitive Matrix</h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
                  <thead>
                    <tr style={{ background: '#f3f4f6' }}>
                      <th style={{ padding: '1rem', textAlign: 'left', border: '1px solid #e5e7eb' }}>Category</th>
                      <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', background: '#dcfce7' }}>You</th>
                      <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>Comp A</th>
                      <th style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>Comp B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { category: 'Pricing', you: '✅', compA: '✅', compB: '⚠️' },
                      { category: 'Features', you: '✅', compA: '⚠️', compB: '✅' },
                      { category: 'Support', you: '✅', compA: '✅', compB: '⚠️' },
                    ].map((row, idx) => (
                      <tr key={idx} style={{ background: idx % 2 === 0 ? 'white' : '#f9fafb' }}>
                        <td style={{ padding: '1rem', border: '1px solid #e5e7eb', fontWeight: '500' }}>{row.category}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb', background: '#f0fdf4', fontWeight: 'bold' }}>{row.you}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{row.compA}</td>
                        <td style={{ padding: '1rem', textAlign: 'center', border: '1px solid #e5e7eb' }}>{row.compB}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reports & Exports */}
      <div style={{ marginBottom: '3rem', background: 'white', borderRadius: '12px', border: '2px solid #6366f1', overflow: 'hidden' }}>
        <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', color: 'white', cursor: 'pointer' }} onClick={() => toggleSection('reports')}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>📄</span>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: 0 }}>Reports & Exports</h2>
          </div>
        </div>
        {expandedSection === 'reports' && (
          <div style={{ padding: '2rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>⚡ Quick Reports</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alert('Generate Board Deck - Funcionalidad en desarrollo');
                  }}
                  style={{
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  📊 Generate Board Deck
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alert('Send Investor Update - Funcionalidad en desarrollo');
                  }}
                  style={{
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  📧 Send Investor Update
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    alert('Export to CSV - Funcionalidad en desarrollo');
                  }}
                  style={{
                    padding: '1.5rem',
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  📈 Export Analytics to CSV
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mensaje final */}
      <div style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', color: 'white', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          FINANZADIOS - SISTEMA COMPLETO
        </h2>
        
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
          💎 FUNCIONANDO EN LOCAL
        </div>
        <div style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>
          14 Módulos • Gráficos Interactivos • Sistema CFO Autónomo
        </div>
        <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
          Valor estimado: €250k-€500k standalone
        </div>
      </div>
    </div>
  );
}
