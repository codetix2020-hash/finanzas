'use client'

import { useState, useEffect } from 'react'

export default function MarketingDashboardPage() {
  const [dashboardData, setDashboardData] = useState<any>(null)
  const [leadStats, setLeadStats] = useState<any>(null)
  const [guardsStatus, setGuardsStatus] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [runningGuards, setRunningGuards] = useState(false)

  // Organization ID demo (en producción vendría de la sesión)
  const organizationId = 'org_demo_123'

  useEffect(() => {
    loadDashboard()
  }, [])

  const loadDashboard = async () => {
    setLoading(true)
    setError(null)

    try {
      // Cargar métricas del dashboard
      const metricsResponse = await fetch('/api/rpc/marketing.analytics.dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organizationId }),
      })

      if (!metricsResponse.ok) {
        throw new Error('Error al cargar métricas')
      }

      const metricsData = await metricsResponse.json()
      // Los procedimientos devuelven { success: true, metrics: ... } o directamente los datos
      setDashboardData(metricsData.metrics || metricsData)

      // Cargar estadísticas de leads
      try {
        const leadsResponse = await fetch('/api/rpc/marketing.crm.getStats', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ organizationId }),
        })

        if (leadsResponse.ok) {
          const leadsData = await leadsResponse.json()
          // Los procedimientos devuelven { success: true, stats: ... } o directamente los datos
          setLeadStats(leadsData.stats || leadsData)
        }
      } catch (err) {
        console.warn('Error al cargar stats de leads:', err)
      }
    } catch (err) {
      console.error('Error al cargar dashboard:', err)
      setError(err instanceof Error ? err.message : 'Error desconocido')
    } finally {
      setLoading(false)
    }
  }

  const runAllGuards = async () => {
    setRunningGuards(true)
    try {
      const response = await fetch('/api/rpc/marketing.guards.runAll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ organizationId }),
      })

      const result = await response.json()
      setGuardsStatus(result)
      alert('✅ Guardias ejecutadas. Revisa la consola para detalles.')
    } catch (err) {
      console.error('Error ejecutando guardias:', err)
      alert('❌ Error al ejecutar guardias. Verifica la consola.')
    } finally {
      setRunningGuards(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">⏳</div>
          <div className="text-xl font-semibold">Cargando MarketingOS...</div>
          <div className="text-sm text-gray-500 mt-2">Conectando con las APIs...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6">
          <h2 className="text-xl font-bold text-red-800 dark:text-red-200 mb-2">❌ Error al cargar dashboard</h2>
          <p className="text-red-600 dark:text-red-300">{error}</p>
          <button
            onClick={loadDashboard}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            🔄 Reintentar
          </button>
        </div>
      </div>
    )
  }

  const metrics = dashboardData?.overview || {}
  const content = dashboardData?.content || {}
  const campaigns = dashboardData?.campaigns || {}
  const leads = dashboardData?.leads || {}
  const stats = leadStats || {}

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">🚀 MarketingOS - God Mode</h1>
          <p className="text-gray-600 dark:text-gray-400">Dashboard completo con datos en tiempo real</p>
        </div>
        <button
          onClick={loadDashboard}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          🔄 Actualizar
        </button>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-sm font-medium opacity-90 mb-2">Total Content</h3>
          <p className="text-4xl font-bold">{metrics.totalContent || content.total || 0}</p>
          <p className="text-xs opacity-75 mt-1">
            {content.published || 0} publicados, {content.draft || 0} borradores
          </p>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-sm font-medium opacity-90 mb-2">Active Campaigns</h3>
          <p className="text-4xl font-bold">{metrics.activeCampaigns || campaigns.total || 0}</p>
          <p className="text-xs opacity-75 mt-1">
            {campaigns.total || 0} totales
          </p>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-sm font-medium opacity-90 mb-2">Hot Leads</h3>
          <p className="text-4xl font-bold">{metrics.hotLeads || leads.byTemperature?.hot || stats.byTemperature?.hot || 0}</p>
          <p className="text-xs opacity-75 mt-1">
            {metrics.totalLeads || leads.total || stats.total || 0} totales
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-sm font-medium opacity-90 mb-2">Conversion Rate</h3>
          <p className="text-4xl font-bold">{leads.conversionRate || 0}%</p>
          <p className="text-xs opacity-75 mt-1">
            ROI: {campaigns.ctr || 0}% CTR
          </p>
        </div>
      </div>

      {/* Métricas secundarias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Total Spend</h3>
          <p className="text-2xl font-bold">€{campaigns.spend?.toLocaleString() || 0}</p>
          <p className="text-xs text-gray-500 mt-1">Últimos 30 días</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Impressions</h3>
          <p className="text-2xl font-bold">{campaigns.impressions?.toLocaleString() || 0}</p>
          <p className="text-xs text-gray-500 mt-1">CTR: {campaigns.ctr || 0}%</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Conversions</h3>
          <p className="text-2xl font-bold">{campaigns.conversions || 0}</p>
          <p className="text-xs text-gray-500 mt-1">CPA: €{campaigns.cpa || 0}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Agents Status */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">🤖 Agentes IA</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Orquestador</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">Activo</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Content Generator</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">Activo</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Visual Agent</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">Activo</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Email Agent</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">Activo</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Voice Agent</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">Activo</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Competitor Analyzer</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">Activo</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Facebook Ads</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">Activo</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Google Ads</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">Activo</span>
            </div>
            <div className="flex justify-between items-center">
              <span>CRM</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">Activo</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Analytics</span>
              <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded text-sm">Activo</span>
            </div>
          </div>
        </div>

        {/* Guards Status */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">🛡️ Guardias</h2>
            <button
              onClick={runAllGuards}
              disabled={runningGuards}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {runningGuards ? '⏳ Ejecutando...' : '▶️ Ejecutar'}
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Guardia Financiera</span>
              <span className={`px-2 py-1 rounded text-sm ${
                guardsStatus?.financial?.status === 'critical' 
                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  : guardsStatus?.financial?.status === 'warning'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              }`}>
                {guardsStatus?.financial?.status?.toUpperCase() || 'OK'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Guardia Reputacional</span>
              <span className={`px-2 py-1 rounded text-sm ${
                guardsStatus?.reputation?.status === 'critical' 
                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  : guardsStatus?.reputation?.status === 'warning'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              }`}>
                {guardsStatus?.reputation?.status?.toUpperCase() || 'OK'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Guardia Legal</span>
              <span className={`px-2 py-1 rounded text-sm ${
                guardsStatus?.legal?.status === 'critical' 
                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  : guardsStatus?.legal?.status === 'warning'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              }`}>
                {guardsStatus?.legal?.status?.toUpperCase() || 'OK'}
              </span>
            </div>
          </div>
          {guardsStatus && (
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded text-xs">
              <div className="font-semibold mb-1">Última ejecución:</div>
              <div>Total alertas: {guardsStatus.totalAlerts || 0}</div>
            </div>
          )}
        </div>
      </div>

      {/* Leads por temperatura */}
      {stats.byTemperature && (
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">📊 Leads por Temperatura</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stats.byTemperature.cold || 0}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Cold</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {stats.byTemperature.warm || 0}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Warm</div>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {stats.byTemperature.hot || 0}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Hot</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {stats.byTemperature.qualified || 0}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Qualified</div>
            </div>
          </div>
        </div>
      )}

      {/* API Endpoints */}
      <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">📡 Endpoints Disponibles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm font-mono">
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">marketing.guards.*</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">marketing.facebookAds.*</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">marketing.googleAds.*</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">marketing.crm.*</div>
          <div className="p-2 bg-gray-100 dark:bg-gray-700 rounded">marketing.analytics.*</div>
        </div>
      </div>
    </div>
  )
}

