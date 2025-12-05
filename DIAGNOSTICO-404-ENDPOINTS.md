# Diagnóstico: Endpoints 404 en MarketingOS

## RESPUESTAS A LAS PREGUNTAS

### 1. ¿Existe /apps/web/app/api/[[...rest]]/route.ts o /apps/web/app/api/rpc/[[...rest]]/route.ts?

✅ **SÍ existe**: `apps/web/app/api/[[...rest]]/route.ts`
- Usa Hono con `handle(app)` de `@repo/api`
- Exporta GET, POST, PUT, PATCH, DELETE, OPTIONS

❌ **NO existe**: `apps/web/app/api/rpc/[[...rest]]/route.ts`
- No hay carpeta `rpc` separada
- Todo se maneja a través de `[[...rest]]/route.ts`

### 2. ¿Qué formato de ruta usa test-finance? 

**Formato usado:**
- `/api/rpc/finance.getOverview` (funciona)
- `/api/rpc/marketing.analytics.dashboard` (funciona según god-mode)

**Formato que NO funciona:**
- `/api/rpc/marketing.visual.variants` (404)

### 3. ¿El router de marketing está registrado en el router principal?

✅ **SÍ está registrado**: 
- `packages/api/orpc/router.ts` línea 25: `marketing: marketingRouter`

### 4. ¿Cuál es la estructura exacta del handler de API?

**Estructura:**
1. `apps/web/app/api/[[...rest]]/route.ts` → Usa Hono
2. `packages/api/index.ts` → Define `app` con Hono
3. `packages/api/orpc/handler.ts` → Define `rpcHandler` con `RPCHandler(router)`
4. `packages/api/index.ts` línea 37: Detecta si path incluye `/rpc/`
5. Si es `/rpc/`, usa `rpcHandler` con prefix `/api/rpc`

## PROBLEMA IDENTIFICADO

### Diferencia entre routers que funcionan y que no funcionan:

**Finance Router (FUNCIONA):**
```typescript
export const financeRouter = publicProcedure.router({
  getOverview,  // Procedimiento directo
  predictMetrics,
  // ...
});
```
- Endpoint: `/api/rpc/finance.getOverview` ✅

**Marketing Router (MIXTO):**
```typescript
export const marketingRouter = publicProcedure.router({
  analytics: {
    dashboard: getDashboardMetricsProcedure,  // ✅ FUNCIONA
  },
  visual: {
    variants: generateImageVariantsProcedure,  // ❌ 404
  }
});
```

### Análisis:

1. **`marketing.analytics.dashboard` FUNCIONA** (según god-mode)
2. **`marketing.visual.variants` NO FUNCIONA** (404)

**Ambos tienen:**
- Misma estructura de router anidado
- Mismo tipo de procedimiento (`protectedProcedure`)
- Mismo router padre (`publicProcedure.router`)

### Posibles causas:

1. **Problema de autenticación**: Los procedimientos usan `protectedProcedure` pero el router usa `publicProcedure.router`
2. **Problema de routing en oRPC**: Puede que oRPC no resuelva correctamente rutas anidadas de 3 niveles
3. **Problema de registro**: El procedimiento puede no estar correctamente registrado en el router

## PRÓXIMOS PASOS

1. Verificar si `marketing.analytics.dashboard` realmente funciona probándolo
2. Comparar la estructura exacta de `analytics` vs `visual` en el router
3. Verificar si hay algún problema con el import de `generateImageVariantsProcedure`
4. Probar cambiar `protectedProcedure` a `publicProcedure` en los procedimientos de visual

