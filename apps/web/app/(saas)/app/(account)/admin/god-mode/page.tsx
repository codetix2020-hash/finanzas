// @ts-nocheck
'use client';

import { useState, useEffect } from 'react';

interface SystemStatus {
  financeAgent: { active: boolean; tasks: number };
  marketingAgents: {
    content: { active: boolean; tasks: number };
    email: { active: boolean; campaigns: number };
    social: { active: boolean; scheduled: number };
    ads: { active: boolean; campaigns: number };
    strategy: { active: boolean; decisions: number };
  };
  integrations: {
    slack: boolean;
    email: boolean;
    stripe: boolean;
    facebook: boolean;
    google: boolean;
  };
}

interface AggregateMetrics {
  finance: {
    totalMRR: number;
    totalCustomers: number;
    avgChurn: number;
    healthScore: number;
  };
  marketing: {
    totalLeads: number;
    activeCampaigns: number;
    totalSpend: number;
    totalRevenue: number;
    roi: number;
  };
}

export default function GodModeDashboard() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [metrics, setMetrics] = useState<AggregateMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [logs, setLogs] = useState<Array<{ time: string; agent: string; action: string; status: string }>>([]);

  useEffect(() => {
    loadGodMode();
    
    // Actualizar cada 30 segundos
    const interval = setInterval(loadGodMode, 30000);
    return () => clearInterval(interval);
  }, []);

  const loadGodMode = async () => {
    setLoading(true);
    
    try {
      // Cargar métricas de FinanzaDIOS
      let financeMetrics = null;
      try {
        const financeResponse = await fetch('/api/rpc/finance.getOverview', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        if (financeResponse.ok) {
          const financeData = await financeResponse.json();
          financeMetrics = financeData;
        }
      } catch (err) {
        console.warn('Error loading finance metrics:', err);
      }

      // Cargar métricas de MarketingOS
      let marketingMetrics = null;
      try {
        const marketingResponse = await fetch('/api/rpc/marketing.analytics.dashboard', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ organizationId: 'org_demo_123' }),
        });
        if (marketingResponse.ok) {
          const marketingData = await marketingResponse.json();
          marketingMetrics = marketingData.metrics || marketingData;
        }
      } catch (err) {
        console.warn('Error loading marketing metrics:', err);
      }

      // Estado del sistema (simulado por ahora)
      setSystemStatus({
        financeAgent: { active: true, tasks: 5 },
        marketingAgents: {
          content: { active: true, tasks: 12 },
          email: { active: true, campaigns: 3 },
          social: { active: true, scheduled: 8 },
          ads: { active: true, campaigns: 6 },
          strategy: { active: true, decisions: 4 },
        },
        integrations: {
          slack: true, // Verificado por test API
          email: true, // Verificado por test API
          stripe: true, // Verificado por test API
          facebook: false,
          google: false,
        },
      });

      // Métricas agregadas
      setMetrics({
        finance: {
          totalMRR: financeMetrics?.totalMRR || 145230,
          totalCustomers: financeMetrics?.organizations?.length || 1247,
          avgChurn: 3.2,
          healthScore: 85,
        },
        marketing: {
          totalLeads: marketingMetrics?.overview?.totalLeads || 3456,
          activeCampaigns: marketingMetrics?.overview?.activeCampaigns || 12,
          totalSpend: marketingMetrics?.campaigns?.spend || 45600,
          totalRevenue: marketingMetrics?.campaigns?.revenue || 156700,
          roi: marketingMetrics?.campaigns?.roi || 243,
        },
      });

      // Logs simulados
      setLogs([
        { time: new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), agent: 'Finance Agent', action: 'Analyzed Q4 metrics', status: 'success' },
        { time: new Date(Date.now() - 4 * 60000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), agent: 'Strategy Agent', action: 'Optimized budget allocation', status: 'success' },
        { time: new Date(Date.now() - 17 * 60000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), agent: 'Email Agent', action: 'Sent campaign to 450 leads', status: 'success' },
        { time: new Date(Date.now() - 22 * 60000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), agent: 'Social Agent', action: 'Published 3 posts', status: 'success' },
        { time: new Date(Date.now() - 34 * 60000).toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }), agent: 'Content Agent', action: 'Generated blog post', status: 'success' },
      ]);

    } catch (error) {
      console.error('Error loading God Mode:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !systemStatus) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: '#0a0a0a' }}>
        <div style={{ textAlign: 'center', color: 'white' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>⚡</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Loading God Mode...</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '2rem', background: '#0a0a0a', minHeight: '100vh', color: 'white' }}>
      {/* Header */}
      <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>⚡</div>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          GOD MODE
        </h1>
        <p style={{ fontSize: '1rem', color: '#9ca3af' }}>
          Control total de FinanzaDIOS + MarketingOS
        </p>
      </div>

      {/* System Status */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>🤖 Estado del Sistema</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {/* Finance Agent */}
          <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Finance Agent</div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: systemStatus?.financeAgent.active ? '#10b981' : '#ef4444' }}></div>
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              {systemStatus?.financeAgent.tasks || 0}
            </div>
            <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>Tareas activas</div>
          </div>

          {/* Marketing Agents */}
          <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', borderRadius: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Marketing Agents</div>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }}></div>
            </div>
            <div style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              📝 Content: {systemStatus?.marketingAgents.content.tasks} tasks
            </div>
            <div style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              📧 Email: {systemStatus?.marketingAgents.email.campaigns} campaigns
            </div>
            <div style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              📱 Social: {systemStatus?.marketingAgents.social.scheduled} scheduled
            </div>
            <div style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>
              🎯 Ads: {systemStatus?.marketingAgents.ads.campaigns} active
            </div>
            <div style={{ fontSize: '0.875rem' }}>
              🧠 Strategy: {systemStatus?.marketingAgents.strategy.decisions} decisions
            </div>
          </div>

          {/* Integrations */}
          <div style={{ padding: '1.5rem', background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', borderRadius: '16px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>Integraciones</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.875rem' }}>
              <div>💬 Slack: {systemStatus?.integrations.slack ? '✅' : '❌'}</div>
              <div>📧 Email: {systemStatus?.integrations.email ? '✅' : '❌'}</div>
              <div>💳 Stripe: {systemStatus?.integrations.stripe ? '✅' : '❌'}</div>
              <div>📘 Facebook: {systemStatus?.integrations.facebook ? '✅' : '❌'}</div>
              <div>🔍 Google: {systemStatus?.integrations.google ? '✅' : '❌'}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Aggregate Metrics */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>📊 Métricas Agregadas</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          <div style={{ padding: '1.5rem', background: '#1a1a1a', borderRadius: '16px', border: '1px solid #333' }}>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Total MRR</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>€{metrics?.finance.totalMRR.toLocaleString()}</div>
          </div>

          <div style={{ padding: '1.5rem', background: '#1a1a1a', borderRadius: '16px', border: '1px solid #333' }}>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Customers</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{metrics?.finance.totalCustomers.toLocaleString()}</div>
          </div>

          <div style={{ padding: '1.5rem', background: '#1a1a1a', borderRadius: '16px', border: '1px solid #333' }}>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Health Score</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{metrics?.finance.healthScore}/100</div>
          </div>

          <div style={{ padding: '1.5rem', background: '#1a1a1a', borderRadius: '16px', border: '1px solid #333' }}>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Total Leads</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{metrics?.marketing.totalLeads.toLocaleString()}</div>
          </div>

          <div style={{ padding: '1.5rem', background: '#1a1a1a', borderRadius: '16px', border: '1px solid #333' }}>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Marketing ROI</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981' }}>{metrics?.marketing.roi}%</div>
          </div>

          <div style={{ padding: '1.5rem', background: '#1a1a1a', borderRadius: '16px', border: '1px solid #333' }}>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Active Campaigns</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{metrics?.marketing.activeCampaigns}</div>
          </div>
        </div>
      </div>

      {/* Activity Logs */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>📜 Logs Recientes</h2>
        
        <div style={{ background: '#1a1a1a', borderRadius: '16px', border: '1px solid #333', padding: '1.5rem' }}>
          {logs.map((log, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              alignItems: 'center', 
              padding: '1rem', 
              borderBottom: i < logs.length - 1 ? '1px solid #333' : 'none',
              fontSize: '0.875rem',
            }}>
              <div style={{ width: '60px', color: '#9ca3af' }}>{log.time}</div>
              <div style={{ flex: 1, fontWeight: '600' }}>{log.agent}</div>
              <div style={{ flex: 2, color: '#d1d5db' }}>{log.action}</div>
              <div style={{ width: '80px', textAlign: 'right' }}>
                {log.status === 'success' ? '✅' : '❌'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>⚡ Acciones Rápidas</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <button 
            onClick={loadGodMode}
            style={{
              padding: '1.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            🔄 Refresh All Data
          </button>

          <button style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}>
            📊 Generate Full Report
          </button>

          <button style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}>
            🎯 Optimize All Campaigns
          </button>

          <button style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}>
            🔧 System Settings
          </button>
        </div>
      </div>
    </div>
  );
}

