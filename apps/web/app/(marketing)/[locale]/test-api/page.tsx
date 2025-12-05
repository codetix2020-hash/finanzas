'use client'

import { useState } from 'react'

export default function TestAPIPage() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testEndpoint = async (endpoint: string) => {
    setLoading(true)
    setResult(null)
    
    try {
      const response = await fetch(`/api/rpc/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ organizationId: 'test' })
      })
      
      const text = await response.text()
      
      setResult({
        endpoint,
        status: response.status,
        statusText: response.statusText,
        body: text.substring(0, 500)
      })
    } catch (error) {
      setResult({ endpoint, error: String(error) })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-8 bg-gray-900 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-8">🧪 Test de Endpoints</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-green-400">Finance (debería funcionar):</h2>
        <button 
          onClick={() => testEndpoint('finance.getOverview')}
          className="px-4 py-2 bg-green-600 rounded mr-2"
          disabled={loading}
        >
          finance.getOverview
        </button>
        
        <h2 className="text-xl font-bold text-blue-400 mt-8">Marketing (nuevos endpoints):</h2>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => testEndpoint('marketing.analyticsDashboard')}
            className="px-4 py-2 bg-blue-600 rounded"
            disabled={loading}
          >
            marketing.analyticsDashboard
          </button>
          <button 
            onClick={() => testEndpoint('marketing.orchestrationMaster')}
            className="px-4 py-2 bg-blue-600 rounded"
            disabled={loading}
          >
            marketing.orchestrationMaster
          </button>
          <button 
            onClick={() => testEndpoint('marketing.visualGenerate')}
            className="px-4 py-2 bg-blue-600 rounded"
            disabled={loading}
          >
            marketing.visualGenerate
          </button>
          <button 
            onClick={() => testEndpoint('marketing.crmGetLeads')}
            className="px-4 py-2 bg-blue-600 rounded"
            disabled={loading}
          >
            marketing.crmGetLeads
          </button>
        </div>

        <h2 className="text-xl font-bold text-purple-400 mt-8">Autosaas:</h2>
        <button 
          onClick={() => testEndpoint('autosaas.processInbox')}
          className="px-4 py-2 bg-purple-600 rounded"
          disabled={loading}
        >
          autosaas.processInbox
        </button>
      </div>

      {loading && <p className="mt-8 text-yellow-400">Cargando...</p>}
      
      {result && (
        <div className="mt-8 p-4 bg-gray-800 rounded">
          <h3 className="font-bold mb-2">Resultado: {result.endpoint}</h3>
          <p>Status: {result.status} {result.statusText}</p>
          <pre className="mt-2 p-2 bg-black rounded text-sm overflow-auto">
            {result.body || result.error}
          </pre>
        </div>
      )}
    </div>
  )
}

