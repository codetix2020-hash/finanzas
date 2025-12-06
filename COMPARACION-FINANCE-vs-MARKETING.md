# 🔍 COMPARACIÓN EXHAUSTIVA: FINANCE vs MARKETING

## 📁 ESTRUCTURA DE CARPETAS

### Finance:
```
packages/api/modules/finance/
  - procedures/
    - get-overview.ts
    - predict-metrics.ts
    - detect-anomalies.ts
    - get-cohort-analysis.ts
    - calculate-unit-economics.ts
    - get-benchmarking.ts
    - analyze-saas.ts
    - execute-action.ts
  - router.ts
  - services/
    - (varios servicios)
```

### Marketing:
```
packages/api/modules/marketing/
  - procedures/
    - analytics.ts
    - visual.ts
    - voice.ts
    - content.ts
    - email.ts
    - crm.ts
    - social.ts
    - strategy.ts
    - guards.ts
    - facebook-ads.ts
    - google-ads.ts
    - competitor.ts
    - launch.ts
    - orchestration.ts
  - router.ts
  - services/
    - (varios servicios)
```

**¿Iguales?** ✅ **SÍ** - Misma estructura de carpetas

---

## 📦 IMPORTS EN PROCEDURES

### Finance (get-overview.ts):
```typescript
import { db } from "@repo/database";
import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
```

### Marketing (visual.ts):
```typescript
import { z } from 'zod'
import { protectedProcedure } from '../../../orpc/procedures'
import { generateImage, generateImageVariants, generateOptimizedPrompt } from '../services/visual-agent'
```

**¿Iguales?** ✅ **SÍ** - Mismos imports base (protectedProcedure, z)
- Marketing tiene imports adicionales de servicios (normal)

---

## 🔧 DEFINICIÓN DE PROCEDURE

### Finance (get-overview.ts):
```typescript
export const getOverview = protectedProcedure
	.route({ method: "GET", path: "/finance/overview" })
	.output(outputSchema)
	.handler(async ({ context }) => {
		const { user } = context;
		// ... código
		return { ... };
	});
```

**Estructura:** `.route()` → `.output()` → `.handler()`
- ❌ NO tiene `.input()` (usa `context` directamente)
- ✅ Tiene `.output()` con schema definido
- ✅ Usa `context` del handler

### Marketing (visual.ts):
```typescript
export const generateImageProcedure = protectedProcedure
  .route({ method: "POST", path: "/marketing/visual-generate" })
  .input(z.object({...}))
  .output(z.any())
  .handler(async ({ input }) => {
    try {
      const result = await generateImage(input)
      return result
    } catch (error) {
      // ... manejo de errores
      return { ... };
    }
  })
```

**Estructura:** `.route()` → `.input()` → `.output()` → `.handler()`
- ✅ Tiene `.input()` con schema
- ✅ Tiene `.output()` (aunque es `z.any()`)
- ✅ Usa `input` del handler
- ✅ Tiene try-catch

**¿Iguales?** ⚠️ **PARCIALMENTE** - Diferencia en:
1. Finance NO tiene `.input()`, Marketing SÍ
2. Finance usa `context`, Marketing usa `input`
3. Marketing tiene try-catch, Finance no

**⚠️ ESTO NO DEBERÍA SER UN PROBLEMA** - Ambos son válidos en oRPC

---

## 🗂️ ROUTER

### Finance (router.ts):
```typescript
import { publicProcedure } from "../../orpc/procedures";
import { getOverview } from "./procedures/get-overview";
import { predictMetrics } from "./procedures/predict-metrics";
// ... más imports

export const financeRouter = publicProcedure.router({
	getOverview,           // ← Nombre directo del export
	predictMetrics,        // ← Nombre directo del export
	detectAnomalies,
	getCohortAnalysis,
	calculateUnitEconomics,
	simulateUnitEconomics,
	getBenchmarking,
	analyzeSaas,
	executeAction,
});
```

**Características:**
- ✅ Usa `publicProcedure.router()`
- ✅ Usa nombres DIRECTOS de los exports
- ✅ Sin comentarios adicionales
- ✅ Estructura simple y limpia

### Marketing (router.ts):
```typescript
import { publicProcedure } from "../../orpc/procedures";
import { 
  generateImageProcedure,
  generateImageVariantsProcedure,
  generateOptimizedPromptProcedure
} from './procedures/visual';
// ... más imports

export const marketingRouter = publicProcedure.router({
  // Endpoint de prueba (sin autenticación)
  test: publicProcedure.handler(async () => {
    return { 
      success: true, 
      message: 'Marketing router works!',
      timestamp: new Date().toISOString()
    };
  }),
  // Visual
  visualGenerate: generateImageProcedure,        // ← Nombre diferente al export
  visualVariants: generateImageVariantsProcedure, // ← Nombre diferente al export
  visualOptimizePrompt: generateOptimizedPromptProcedure,
  // ... más procedures
});
```

**Características:**
- ✅ Usa `publicProcedure.router()`
- ⚠️ Usa nombres DIFERENTES a los exports (mapeo explícito)
- ⚠️ Tiene endpoint de prueba `test`
- ⚠️ Tiene comentarios

**¿Iguales?** ⚠️ **NO** - Diferencia crítica:
1. **Finance:** `getOverview` (nombre directo del export)
2. **Marketing:** `visualGenerate: generateImageProcedure` (nombre diferente)

**⚠️ ESTO PODRÍA SER EL PROBLEMA** - oRPC podría tener problemas con el mapeo

---

## 🔍 REGISTRO EN ROUTER PRINCIPAL

### Finance:
```typescript
import { financeRouter } from "../modules/finance/router";

export const router = publicProcedure.router({
	finance: financeRouter,  // ← Registrado
});
```

### Marketing:
```typescript
import { marketingRouter } from "../modules/marketing/router";

export const router = publicProcedure.router({
	marketing: marketingRouter,  // ← Registrado
});
```

**¿Iguales?** ✅ **SÍ** - Ambos registrados de la misma forma

---

## 🚨 DIFERENCIAS CRÍTICAS ENCONTRADAS

### DIFERENCIA 1: Nombres en el Router ⚠️ **MÁS PROBABLE**

**Finance:**
```typescript
export const getOverview = protectedProcedure...  // Export
// En router:
getOverview,  // ← Mismo nombre
```

**Marketing:**
```typescript
export const generateImageProcedure = protectedProcedure...  // Export
// En router:
visualGenerate: generateImageProcedure,  // ← Nombre diferente
```

**Problema potencial:**
- oRPC resuelve rutas usando notación de puntos: `marketing.visualGenerate`
- Busca en el router: `router.marketing.visualGenerate`
- Si el mapeo no funciona correctamente, podría dar 404

**Solución:** Cambiar los exports para que coincidan con los nombres del router

---

### DIFERENCIA 2: Estructura del Procedure

**Finance:**
- `.route()` → `.output()` → `.handler()`
- NO tiene `.input()`
- Usa `context` directamente

**Marketing:**
- `.route()` → `.input()` → `.output()` → `.handler()`
- Tiene `.input()`
- Usa `input`

**¿Es un problema?** ❌ **NO** - Ambos son válidos en oRPC

---

### DIFERENCIA 3: Manejo de Errores

**Finance:**
- NO tiene try-catch explícito
- Confía en que el código no falle

**Marketing:**
- Tiene try-catch en todos los handlers
- Devuelve respuestas mock en caso de error

**¿Es un problema?** ❌ **NO** - Marketing es más robusto

---

### DIFERENCIA 4: Endpoint de Prueba

**Finance:**
- NO tiene endpoint de prueba

**Marketing:**
- Tiene `test: publicProcedure.handler(...)`

**¿Es un problema?** ❌ **NO** - Solo es un endpoint adicional

---

## ✅ SOLUCIÓN PROPUESTA

### OPCIÓN 1: Cambiar los exports para que coincidan con los nombres del router (RECOMENDADO)

**Cambiar:**
```typescript
// packages/api/modules/marketing/procedures/visual.ts
export const visualGenerate = protectedProcedure...  // ← Cambiar nombre
export const visualVariants = protectedProcedure...  // ← Cambiar nombre
export const visualOptimizePrompt = protectedProcedure...  // ← Cambiar nombre
```

**Y en el router:**
```typescript
export const marketingRouter = publicProcedure.router({
  visualGenerate,      // ← Nombre directo (igual que finance)
  visualVariants,      // ← Nombre directo
  visualOptimizePrompt, // ← Nombre directo
});
```

**Ventajas:**
- ✅ Estructura idéntica a finance
- ✅ oRPC resuelve directamente sin mapeo
- ✅ Más simple y claro

---

### OPCIÓN 2: Verificar que el mapeo funcione correctamente

Si el mapeo debería funcionar pero no lo hace, podría ser un bug en oRPC o en cómo se construye el router.

**Verificar:**
1. Que oRPC soporte mapeo de nombres
2. Que el router se construya correctamente en runtime
3. Agregar logging para ver qué recibe oRPC

---

## 🎯 CONCLUSIÓN

**DIFERENCIA CRÍTICA ENCONTRADA:**

1. **Nombres en el router:** Finance usa nombres directos, Marketing usa mapeo
2. **Estructura del procedure:** Ambos son válidos pero diferentes
3. **Manejo de errores:** Marketing es más robusto

**SOLUCIÓN RECOMENDADA:**

Cambiar los exports de marketing para que coincidan exactamente con los nombres usados en el router, igual que finance.

