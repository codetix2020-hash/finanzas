"use client";

import { useState, useEffect } from "react";

interface ContentItem {
  id: string;
  producto: string;
  tipo: string;
  fecha: string;
  instagram: {
    texto: string;
    hashtags: string;
    textoCompleto: string;
  };
  tiktok: {
    texto: string;
    hashtags: string;
    textoCompleto: string;
  };
  hook: string;
  estado: string;
}

export default function ContentDashboard() {
  const [content, setContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const res = await fetch("/api/marketing/content-ready");
      const data = await res.json();
      if (data.success) {
        setContent(data.content);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string, id: string, platform: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(`${id}-${platform}`);
    setTimeout(() => setCopied(null), 2000);
  };

  const markAsPublished = async (id: string, platform: string) => {
    await fetch("/api/marketing/content-ready", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contentId: id, platform })
    });
    fetchContent();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8 flex items-center justify-center">
        <div className="text-xl">Cargando contenido...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            📱 Contenido Listo para Publicar
          </h1>
          <p className="text-gray-400 mt-2">
            Copia el contenido y pégalo en Instagram/TikTok
          </p>
        </div>

        {/* Botón generar nuevo */}
        <button
          onClick={async () => {
            setLoading(true);
            await fetch("/api/cron/social-publish");
            await fetchContent();
          }}
          className="mb-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition"
        >
          🚀 Generar Nuevo Contenido
        </button>

        {/* Lista de contenido */}
        <div className="space-y-6">
          {content.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              {/* Header del card */}
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-sm text-purple-400 font-semibold uppercase">
                    {item.tipo}
                  </span>
                  <span className="text-sm text-gray-500 ml-3">
                    {new Date(item.fecha).toLocaleString("es-ES")}
                  </span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  item.estado === "PUBLISHED" 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-yellow-500/20 text-yellow-400"
                }`}>
                  {item.estado === "PUBLISHED" ? "✅ Publicado" : "⏳ Pendiente"}
                </span>
              </div>

              {/* Contenido Instagram */}
              <div className="mb-4 p-4 bg-gray-900 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-pink-400 font-semibold">📸 Instagram</span>
                  <div className="space-x-2">
                    <button
                      onClick={() => copyToClipboard(item.instagram.textoCompleto, item.id, "instagram")}
                      className={`px-3 py-1 rounded text-sm ${
                        copied === `${item.id}-instagram`
                          ? "bg-green-500 text-white"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {copied === `${item.id}-instagram` ? "✅ Copiado!" : "📋 Copiar"}
                    </button>
                    <button
                      onClick={() => markAsPublished(item.id, "instagram")}
                      className="px-3 py-1 rounded text-sm bg-pink-500/20 text-pink-400 hover:bg-pink-500/30"
                    >
                      Marcar publicado
                    </button>
                  </div>
                </div>
                <p className="text-white whitespace-pre-wrap">{item.instagram.texto}</p>
                <p className="text-blue-400 mt-2 text-sm">{item.instagram.hashtags}</p>
              </div>

              {/* Contenido TikTok */}
              <div className="p-4 bg-gray-900 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-cyan-400 font-semibold">🎵 TikTok</span>
                  <div className="space-x-2">
                    <button
                      onClick={() => copyToClipboard(item.tiktok.textoCompleto, item.id, "tiktok")}
                      className={`px-3 py-1 rounded text-sm ${
                        copied === `${item.id}-tiktok`
                          ? "bg-green-500 text-white"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                    >
                      {copied === `${item.id}-tiktok` ? "✅ Copiado!" : "📋 Copiar"}
                    </button>
                    <button
                      onClick={() => markAsPublished(item.id, "tiktok")}
                      className="px-3 py-1 rounded text-sm bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30"
                    >
                      Marcar publicado
                    </button>
                  </div>
                </div>
                <p className="text-white whitespace-pre-wrap">{item.tiktok.texto}</p>
                <p className="text-blue-400 mt-2 text-sm">{item.tiktok.hashtags}</p>
              </div>
            </div>
          ))}
        </div>

        {content.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No hay contenido generado. Haz clic en "Generar Nuevo Contenido".
          </div>
        )}
      </div>
    </div>
  );
}

