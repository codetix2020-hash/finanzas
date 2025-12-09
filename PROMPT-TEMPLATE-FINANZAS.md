# 🎯 TEMPLATE DE PROMPT PARA TRABAJAR EN FINANZAS

## ⚠️ REGLAS ABSOLUTAS - COPIA ESTO AL INICIO DE CADA PROMPT

```
==========================================
🚫 RESTRICCIONES CRÍTICAS
==========================================

NO TOCAR BAJO NINGUNA CIRCUNSTANCIA:
- packages/api/modules/marketing/ (TODO EL MÓDULO)
- packages/api/modules/autosaas/ (solo si no es necesario para finanzas)
- apps/web/app/(marketing)/ (TODO EL DIRECTORIO)
- Cualquier archivo relacionado con marketing, contenido, ads, CRM, etc.

ÁREAS PERMITIDAS PARA MODIFICAR:
✅ packages/api/modules/finance/ (TODO)
✅ apps/web/modules/saas/finance/ (frontend de finanzas)
✅ packages/database/prisma/schema.prisma (solo si es necesario para finanzas)
✅ packages/api/lib/track-api-usage.ts (solo si es necesario para tracking de costos de APIs de finanzas)

IMPORTANTE:
- Si necesitas importar algo de marketing, NO LO HAGAS
- Si necesitas datos de marketing, usa solo los que ya están en la BD
- NO modifiques routers, procedures o services de marketing
```

## 📋 ESTRUCTURA DEL PROMPT

```
==========================================
💰 [TÍTULO DE LA TAREA EN FINANZAS]
==========================================

CONTEXTO:
=========
[Describe qué quieres hacer en el sistema de finanzas]

OBJETIVO:
=========
[Describe el objetivo específico]

RESTRICCIONES:
==============
🚫 NO TOCAR:
- packages/api/modules/marketing/ (NUNCA)
- apps/web/app/(marketing)/ (NUNCA)
- Cualquier archivo relacionado con marketing

✅ PERMITIDO:
- packages/api/modules/finance/ (TODO)
- apps/web/modules/saas/finance/ (frontend)
- packages/database/ (solo si es necesario para finanzas)

ESTRUCTURA ACTUAL DE FINANZAS:
===============================
Procedures (endpoints):
- get-overview.ts
- predict-metrics.ts
- detect-anomalies.ts
- get-cohort-analysis.ts
- calculate-unit-economics.ts
- simulate-unit-economics.ts
- get-benchmarking.ts
- analyze-saas.ts
- execute-action.ts

Services (lógica):
- finance-agent.ts
- unit-economics.ts
- cohort-analyzer.ts
- anomaly-detector.ts
- benchmarking.ts
- action-executor.ts

Router:
- router.ts (exporta financeRouter)

TAREAS:
=======
[Describe las tareas específicas paso a paso]

FASE 1: [Descripción]
---------------------
[Pasos específicos]

FASE 2: [Descripción]
---------------------
[Pasos específicos]

...

COMMIT Y PUSH:
==============
```bash
git add packages/api/modules/finance/
git add apps/web/modules/saas/finance/  # si modificaste frontend
git commit -m "feat: [descripción del cambio]" --no-verify
git push origin main
```

REPORTE REQUERIDO:
==================
[Describe qué información necesitas en el reporte]
```

## 📝 EJEMPLO DE PROMPT COMPLETO

```
==========================================
💰 AGREGAR NUEVO ENDPOINT DE ANÁLISIS DE CASH FLOW
==========================================

CONTEXTO:
=========
Necesito agregar un nuevo endpoint al sistema de finanzas que analice el cash flow
de una organización y prediga problemas de liquidez.

OBJETIVO:
=========
Crear un endpoint POST /finance/cash-flow-analysis que:
1. Analice el cash flow de los últimos 6 meses
2. Prediga el cash flow de los próximos 3 meses
3. Identifique posibles problemas de liquidez
4. Genere recomendaciones

RESTRICCIONES:
==============
🚫 NO TOCAR:
- packages/api/modules/marketing/ (NUNCA)
- apps/web/app/(marketing)/ (NUNCA)
- Cualquier archivo relacionado con marketing

✅ PERMITIDO:
- packages/api/modules/finance/ (TODO)
- packages/database/ (solo si es necesario)

TAREAS:
=======

FASE 1: CREAR PROCEDURE
-----------------------
1. Crear: packages/api/modules/finance/procedures/analyze-cash-flow.ts
2. Definir input schema con Zod:
   - organizationId: string
   - monthsHistory: number (default 6)
   - monthsForecast: number (default 3)
3. Definir output schema con:
   - currentCashFlow: number
   - projectedCashFlow: number[]
   - liquidityRisk: 'low' | 'medium' | 'high' | 'critical'
   - recommendations: string[]
4. Implementar handler que:
   - Obtenga transacciones de los últimos N meses
   - Calcule cash flow mensual
   - Use FinanceAgent para predecir futuro
   - Genere recomendaciones

FASE 2: AGREGAR AL ROUTER
--------------------------
1. Modificar: packages/api/modules/finance/router.ts
2. Importar analyzeCashFlow
3. Agregar al financeRouter

FASE 3: TESTEAR
---------------
1. Probar endpoint con curl
2. Verificar respuesta

COMMIT Y PUSH:
==============
```bash
git add packages/api/modules/finance/
git commit -m "feat: Add cash flow analysis endpoint" --no-verify
git push origin main
```

REPORTE REQUERIDO:
==================
- ¿Se creó el procedure correctamente?
- ¿Se agregó al router?
- ¿Qué responde el endpoint de prueba?
```

## 🔍 VERIFICACIÓN ANTES DE EJECUTAR

Antes de ejecutar cualquier comando, verifica:

1. ✅ ¿Estás modificando solo archivos en `packages/api/modules/finance/`?
2. ✅ ¿Estás modificando solo archivos en `apps/web/modules/saas/finance/`?
3. ❌ ¿Estás tocando algo en `packages/api/modules/marketing/`? → DETENTE
4. ❌ ¿Estás tocando algo en `apps/web/app/(marketing)/`? → DETENTE

## 📚 REFERENCIAS ÚTILES

**Estructura de un procedure de finanzas:**
```typescript
import { protectedProcedure } from "../../../orpc/procedures";
import { z } from "zod";
import { FinanceAgent } from "../services/finance-agent";

export const analyzeCashFlow = protectedProcedure
  .route({ method: "POST", path: "/finance/cash-flow-analysis" })
  .input(z.object({
    organizationId: z.string(),
    monthsHistory: z.number().optional().default(6),
    monthsForecast: z.number().optional().default(3),
  }))
  .output(z.object({
    currentCashFlow: z.number(),
    projectedCashFlow: z.array(z.number()),
    liquidityRisk: z.enum(['low', 'medium', 'high', 'critical']),
    recommendations: z.array(z.string()),
  }))
  .handler(async ({ input, context }) => {
    // Implementación aquí
  });
```

**Agregar al router:**
```typescript
import { analyzeCashFlow } from "./procedures/analyze-cash-flow";

export const financeRouter = publicProcedure.router({
  // ... otros procedures
  analyzeCashFlow,
});
```

