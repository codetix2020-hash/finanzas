// HOOKS VIRALES PROBADOS (fórmulas que funcionan)
export const VIRAL_HOOKS = {
  problema: [
    "¿Todavía {problema}? 😰",
    "El error que comete el 90% de {audiencia}...",
    "Si {problema}, necesitas ver esto 👇",
    "POV: {situacion_problema}",
    "Nadie te dice esto sobre {tema}...",
    "¿Por qué {audiencia} sigue {problema}?",
    "STOP ✋ Si {problema}, lee esto",
    "La razón por la que {problema} (y cómo solucionarlo)",
  ],
  solucion: [
    "Así es como {solucion} en {tiempo} ⚡",
    "El truco que usan {expertos} para {beneficio}",
    "3 formas de {beneficio} sin {objecion}",
    "Descubrí cómo {beneficio} y cambió todo",
    "La forma más fácil de {beneficio} 👇",
    "Cómo pasar de {antes} a {despues}",
  ],
  curiosidad: [
    "Lo que nadie te cuenta sobre {tema}...",
    "Esto va a cambiar cómo ves {tema}",
    "No vas a creer lo que descubrí sobre {tema}",
    "El secreto de {expertos} para {beneficio}",
    "Por qué {cosa_contraintuitiva} funciona mejor",
  ],
  social_proof: [
    "{numero}+ {audiencia} ya {beneficio}",
    "De {antes} a {despues} en {tiempo}",
    "Cómo {cliente} logró {resultado}",
    "Resultados reales: {estadistica}",
  ],
  urgencia: [
    "Si no {accion} ahora, {consecuencia}",
    "Última oportunidad para {beneficio}",
    "Solo {numero} plazas disponibles",
    "Esto no va a durar mucho tiempo...",
  ]
};

// ESTRUCTURAS DE POST POR TIPO
export const POST_STRUCTURES = {
  educativo: {
    estructura: "Hook + 3 tips + CTA",
    ejemplo: `{hook}

✅ {tip1}
✅ {tip2}
✅ {tip3}

{cta}

{hashtags}`,
  },
  problema_solucion: {
    estructura: "Problema + Agitación + Solución + CTA",
    ejemplo: `{hook_problema}

{agitacion}

La solución: {solucion}

{cta}

{hashtags}`,
  },
  testimonio: {
    estructura: "Resultado + Historia corta + CTA",
    ejemplo: `{resultado_impactante}

{historia_corta}

{cta}

{hashtags}`,
  },
  carrusel_hook: {
    estructura: "Hook intrigante + Promesa + CTA",
    ejemplo: `{hook_curiosidad}

En este post te cuento:
📌 {punto1}
📌 {punto2}
📌 {punto3}

{cta}

{hashtags}`,
  },
  promotional: {
    estructura: "Beneficio + Features + Oferta + CTA",
    ejemplo: `{beneficio_principal} 🚀

{feature1}
{feature2}
{feature3}

{oferta}

{cta}

{hashtags}`,
  }
};

// CTAs EFECTIVOS
export const CTAS = {
  engagement: [
    "¿Te identificas? Comenta 👇",
    "Guarda este post para después 📌",
    "Comparte con alguien que necesite esto",
    "¿Cuál es tu mayor reto con esto? 👇",
    "Dale ❤️ si te sirvió",
  ],
  conversion: [
    "Link en bio para empezar gratis 🔗",
    "Prueba gratis → link en bio",
    "DM 'INFO' y te cuento más",
    "Reserva tu demo gratis → bio",
    "Empieza hoy → link en bio",
  ],
  seguimiento: [
    "Síguenos para más tips ✨",
    "Activa notificaciones 🔔",
    "Más contenido así → síguenos",
  ]
};

// HASHTAGS POR NICHO
export const HASHTAGS = {
  peluqueria: [
    "#peluqueria", "#salonbelleza", "#hairstylist", "#barberia",
    "#cortedepelo", "#belleza", "#estilista", "#hairsalon",
    "#peluqueriamadrid", "#peluqueriabarcelona", "#cabellosano",
    "#tendenciascabello", "#coloracion", "#mechas", "#peinadosdeboda"
  ],
  reservas: [
    "#reservasonline", "#gestioncitas", "#agendaonline", "#citasprevias",
    "#softwarepeluqueria", "#digitalizacion", "#negociolocal",
    "#emprendedores", "#autonomos", "#pymes"
  ],
  business: [
    "#emprendimiento", "#negocio", "#exito", "#motivacion",
    "#tips", "#consejos", "#aprendizaje", "#crecimiento"
  ]
};

// ADAPTACIÓN POR PLATAFORMA
export const PLATFORM_RULES = {
  instagram: {
    maxLength: 2200,
    idealLength: 150, // para feed
    hashtagCount: 10,
    style: "Visual, emojis moderados, espaciado",
    formato: "Párrafos cortos, saltos de línea"
  },
  tiktok: {
    maxLength: 300,
    idealLength: 100,
    hashtagCount: 5,
    style: "Directo, casual, trending",
    formato: "Una línea gancho, muy corto"
  },
  twitter: {
    maxLength: 280,
    idealLength: 200,
    hashtagCount: 3,
    style: "Conciso, controversial, thread-worthy",
    formato: "Tweet único o inicio de thread"
  }
};

