# Supastarter Next.js - Blueprint del Proyecto

Este documento mapea todas las utilidades, componentes y convenciones existentes en el proyecto Supastarter.

---

## 1. ESTRUCTURA DE CARPETAS CLAVE

### `/apps/web/app` - Rutas principales (Next.js App Router)

- **`(marketing)/[locale]/`** - Páginas de marketing con internacionalización
  - `(home)/page.tsx` - Página principal
  - `blog/` - Blog posts
  - `docs/` - Documentación
  - `changelog/` - Changelog
  - `contact/` - Formulario de contacto
  - `legal/` - Términos y privacidad

- **`(saas)/`** - Aplicación SaaS
  - `app/` - Dashboard principal
    - `(account)/` - Rutas de cuenta de usuario
      - `admin/` - Panel de administración
      - `settings/` - Configuración de usuario
      - `chatbot/` - Chat con IA
    - `(organizations)/[organizationSlug]/` - Rutas de organización
      - `settings/` - Configuración de organización
      - `chatbot/` - Chat con IA por organización
  - `choose-plan/` - Selección de plan
  - `new-organization/` - Crear organización
  - `onboarding/` - Onboarding de usuarios
  - `organization-invitation/[invitationId]/` - Aceptar invitaciones

- **`auth/`** - Autenticación
  - `login/` - Iniciar sesión
  - `signup/` - Registrarse
  - `forgot-password/` - Recuperar contraseña
  - `reset-password/` - Restablecer contraseña
  - `verify/` - Verificar email

- **`api/`** - API Routes
  - `[[...rest]]/route.ts` - Handler principal de API (Hono)
  - `docs-search/route.ts` - Búsqueda en documentación

### `/apps/web/modules` - Módulos compartidos

- **`shared/lib/`** - Utilidades compartidas
- **`ui/components/`** - Componentes UI de shadcn
- **`saas/`** - Módulos SaaS
  - `auth/` - Autenticación SaaS
  - `organizations/` - Gestión de organizaciones
  - `payments/` - Pagos y suscripciones
  - `settings/` - Configuraciones
  - `admin/` - Panel de admin
  - `ai/` - Integración con IA
- **`marketing/`** - Módulos de marketing
- **`analytics/`** - Analytics

### `/packages` - Backend y utilidades compartidas

- **`database/`** - Base de datos (Prisma + Drizzle)
  - `prisma/schema.prisma` - Schema de Prisma
  - `prisma/client.ts` - Cliente de Prisma
  - `queries/` - Queries reutilizables

- **`api/`** - API backend (oRPC)
  - `modules/` - Módulos de API
  - `orpc/` - Configuración de oRPC

- **`auth/`** - Autenticación (Better Auth)
  - `auth.ts` - Configuración de Better Auth
  - `lib/` - Helpers de autenticación

- **`payments/`** - Proveedores de pago
  - `provider/stripe/` - Stripe
  - `provider/lemonsqueezy/` - Lemon Squeezy
  - `provider/polar/` - Polar
  - `provider/dodopayments/` - Dodo Payments

- **`mail/`** - Envío de emails
  - `emails/` - Templates de email
  - `src/provider/` - Proveedores de email

- **`storage/`** - Almacenamiento de archivos
  - `provider/s3/` - Amazon S3

- **`ai/`** - Integración con IA
- **`i18n/`** - Internacionalización
- **`logs/`** - Logging
- **`utils/`** - Utilidades generales

### `/config` - Configuración global

- `index.ts` - Configuración centralizada
- `types.ts` - Tipos de configuración

---

## 2. UTILIDADES YA CREADAS EN /lib

### `/apps/web/modules/shared/lib/`

- **`server.ts`** → `export const getServerQueryClient` - Cliente de query para server components
- **`cache.ts`** → Funciones de caché
- **`content.ts`** → Utilidades para contenido
- **`orpc-client.ts`** → `export const orpcClient` - Cliente oRPC para llamadas API
- **`orpc-query-utils.ts`** → `export const orpc` - Utilidades de TanStack Query para oRPC
- **`query-client.ts`** → Cliente de TanStack Query

### `/packages/database/prisma/`

- **`client.ts`** → `export { prisma as db }` - Cliente de Prisma singleton
- **`index.ts`** → Re-exports de client, queries y zod

### `/packages/auth/`

- **`auth.ts`** → `export const auth` - Instancia de Better Auth
  - `export type Session`
  - `export type ActiveOrganization`
  - `export type Organization`
  - `export type OrganizationMemberRole`
- **`lib/organization.ts`** → Helpers de organizaciones

### `/packages/api/`

- **`index.ts`** → `export const app` - Aplicación Hono

### `/packages/payments/`

- **`index.ts`** → Funciones de pago
  - `createCheckoutLink`
  - `createCustomerPortalLink`
  - `cancelSubscription`
  - `setSubscriptionSeats`
  - `webhookHandler`

### `/packages/mail/`

- **`index.ts`** → `export { sendEmail }` - Función principal para enviar emails

### `/packages/storage/`

- **`index.ts`** → Re-exports de providers

### `/packages/utils/`

- **`index.ts`** → `export { getBaseUrl }` - Obtener URL base de la aplicación

### `/packages/i18n/`

- **`index.ts`** → Funciones de internacionalización

### `/packages/logs/`

- **`index.ts`** → `export { logger }` - Logger configurado

### `/config/`

- **`index.ts`** → `export const config` - Configuración global de la app
- **`types.ts`** → `export type Config` - Tipos de configuración

---

## 3. COMPONENTES UI DISPONIBLES

Componentes de shadcn/ui en `/apps/web/modules/ui/components/`:

- `accordion.tsx`
- `alert.tsx`
- `alert-dialog.tsx`
- `avatar.tsx`
- `badge.tsx`
- `button.tsx`
- `card.tsx`
- `dialog.tsx`
- `dropdown-menu.tsx`
- `form.tsx`
- `input.tsx`
- `input-otp.tsx`
- `label.tsx`
- `password-input.tsx`
- `progress.tsx`
- `select.tsx`
- `sheet.tsx`
- `skeleton.tsx`
- `table.tsx`
- `tabs.tsx`
- `textarea.tsx`
- `toast.tsx`
- `tooltip.tsx`

---

## 4. CONFIGURACIÓN DE SERVICIOS

### **Stripe**

- **Inicialización**: `packages/payments/provider/stripe/index.ts`
  - Función `getStripeClient()` - Singleton del cliente de Stripe
  - Se inicializa con `process.env.STRIPE_SECRET_KEY`
  - Webhook secret: `process.env.STRIPE_WEBHOOK_SECRET`

- **Uso**: Funciones exportadas en `packages/payments/index.ts`
  - `createCheckoutLink()`
  - `createCustomerPortalLink()`
  - `cancelSubscription()`
  - `setSubscriptionSeats()`
  - `webhookHandler()`

### **Auth (Better Auth)**

- **Provider**: Better Auth (no NextAuth)
- **Configuración**: `packages/auth/auth.ts`
  - Base URL automática con `getBaseUrl()`
  - Adaptador Prisma para PostgreSQL
  - Plugins: username, admin, passkey, magicLink, organization, openAPI, twoFactor
  - Social providers: Google, GitHub
  - Account linking habilitado
  - Email verification configurado

- **Session**: Se obtiene con `auth.api.getSession({ headers })`
- **Server helpers**: `@saas/auth/lib/server` → `getSession()`, `getOrganizationList()`

### **Email**

- **Provider**: Plunk (configurable en `packages/mail/src/provider/`)
- **Función principal**: `sendEmail()` en `packages/mail/index.ts`
- **Templates disponibles**:
  - `emailVerification` - Verificación de email
  - `forgotPassword` - Recuperación de contraseña
  - `magicLink` - Magic link
  - `newsletterSignup` - Newsletter
  - `newUser` - Nuevo usuario
  - `organizationInvitation` - Invitación a organización

- **From address**: Configurado en `config.mails.from`

### **Storage**

- **Provider**: Amazon S3 (`packages/storage/provider/s3/`)
- **Buckets configurados**:
  - `avatars` - Para avatares de usuario (configurable en `config.storage.bucketNames.avatars`)

- **Variables de entorno**:
  - `S3_ENDPOINT`
  - `S3_REGION`
  - `S3_ACCESS_KEY_ID`
  - `S3_SECRET_ACCESS_KEY`

---

## 5. CONVENCIONES DE CÓDIGO

### **Importar Prisma Client**

```typescript
import { db } from "@repo/database";

// Usar db directamente
const user = await db.user.findUnique({ where: { id } });
```

### **Server Action (oRPC en lugar de Server Actions tradicionales)**

Este proyecto usa **oRPC** para las llamadas API, no Server Actions tradicionales.

**En el servidor** (procedimientos):
```typescript
// packages/api/modules/[module]/procedures/[procedure].ts
import { protectedProcedure } from "../../../orpc/procedures";

export const myProcedure = protectedProcedure
  .route({ method: "POST", path: "/my-endpoint" })
  .input(mySchema)
  .handler(async ({ input, context: { session } }) => {
    // lógica
  });
```

**En el cliente**:
```typescript
import { orpcClient } from "@shared/lib/orpc-client";

const result = await orpcClient.myModule.myProcedure({ input });
```

**Con TanStack Query**:
```typescript
import { orpc } from "@shared/lib/orpc-query-utils";

const { data } = useQuery(
  orpc.myModule.myProcedure.queryOptions({ input })
);
```

### **Proteger una ruta con auth**

**Opción 1: En el layout/página (Server Component)**
```typescript
import { getSession } from "@saas/auth/lib/server";
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  // Renderizar contenido protegido
}
```

**Opción 2: Middleware en `apps/web/proxy.ts`**
- Las rutas `/app/**` requieren sesión automáticamente
- Si no hay sesión, redirige a `/auth/login?redirectTo=...`

**Opción 3: Procedimiento protegido (oRPC)**
```typescript
import { protectedProcedure } from "../../orpc/procedures";

export const myProcedure = protectedProcedure
  .handler(async ({ context: { session, user } }) => {
    // session y user disponibles
  });
```

### **Usar Stripe**

```typescript
import { createCheckoutLink } from "@repo/payments";

const checkoutUrl = await createCheckoutLink({
  type: "subscription",
  productId: "price_xxx",
  redirectUrl: "https://example.com/success",
  organizationId: orgId,
  customerId: customerId,
  seats: 5,
  trialPeriodDays: 7,
});
```

---

## 6. VARIABLES DE ENTORNO NECESARIAS

### **Base de Datos**
- `DATABASE_URL` - URL de conexión PostgreSQL

### **Auth**
- `GOOGLE_CLIENT_ID` - OAuth Google
- `GOOGLE_CLIENT_SECRET` - OAuth Google
- `GITHUB_CLIENT_ID` - OAuth GitHub
- `GITHUB_CLIENT_SECRET` - OAuth GitHub

### **Stripe**
- `STRIPE_SECRET_KEY` - Clave secreta de Stripe
- `STRIPE_WEBHOOK_SECRET` - Secreto para webhooks
- `NEXT_PUBLIC_PRICE_ID_PRO_MONTHLY` - ID de precio mensual Pro
- `NEXT_PUBLIC_PRICE_ID_PRO_YEARLY` - ID de precio anual Pro
- `NEXT_PUBLIC_PRICE_ID_LIFETIME` - ID de precio lifetime

### **Storage (S3)**
- `S3_ENDPOINT` - Endpoint de S3
- `S3_REGION` - Región de S3
- `S3_ACCESS_KEY_ID` - Access key ID
- `S3_SECRET_ACCESS_KEY` - Secret access key
- `NEXT_PUBLIC_AVATARS_BUCKET_NAME` - Nombre del bucket de avatares

### **URLs**
- `NEXT_PUBLIC_SITE_URL` - URL pública del sitio (prioritaria)
- `NEXT_PUBLIC_VERCEL_URL` - URL de Vercel (fallback)
- `PORT` - Puerto del servidor (default: 3000)

### **Email (Plunk)**
- Variables de Plunk configuradas en el provider

### **Otros Payment Providers (opcionales)**
- `POLAR_ACCESS_TOKEN` - Para Polar
- `POLAR_WEBHOOK_SECRET` - Para Polar
- `LEMONSQUEEZY_API_KEY` - Para Lemon Squeezy
- `LEMONSQUEEZY_STORE_ID` - Para Lemon Squeezy
- `LEMONSQUEEZY_WEBHOOK_SECRET` - Para Lemon Squeezy
- `DODO_PAYMENTS_API_KEY` - Para Dodo Payments

---

## 7. APIS EXISTENTES EN /app/api

### **Rutas API principales**

- **`/api/[[...rest]]`** - Handler catch-all para todas las rutas API
  - Usa Hono framework
  - Incluye: auth, webhooks, oRPC, OpenAPI

### **Rutas específicas**

- **`/api/auth/**`** - Better Auth endpoints (manejado por Better Auth)
- **`/api/webhooks/payments`** - Webhook de pagos (Stripe, etc.)
- **`/api/rpc/**`** - Endpoints oRPC para llamadas RPC
- **`/api/**`** - Endpoints OpenAPI
- **`/api/health`** - Health check
- **`/api/docs-search`** - Búsqueda en documentación

### **Módulos oRPC disponibles** (`/api/rpc/` o `/api/`)

- **`admin`** - Administración
  - `users.list` - Listar usuarios
  - `users.find` - Buscar usuario
  - `organizations.list` - Listar organizaciones
  - `organizations.find` - Buscar organización

- **`organizations`** - Gestión de organizaciones
  - `createLogoUploadUrl` - Crear URL de subida de logo
  - `generateOrganizationSlug` - Generar slug único

- **`users`** - Gestión de usuarios
  - `createAvatarUploadUrl` - Crear URL de subida de avatar

- **`payments`** - Pagos
  - `createCheckoutLink` - Crear link de checkout
  - `createCustomerPortalLink` - Crear link del portal de cliente
  - `listPurchases` - Listar compras

- **`ai`** - Chat con IA
  - `createChat` - Crear chat
  - `listChats` - Listar chats
  - `findChat` - Buscar chat
  - `addMessageToChat` - Añadir mensaje
  - `updateChat` - Actualizar chat
  - `deleteChat` - Eliminar chat

- **`contact`** - Formulario de contacto
  - `submitContactForm` - Enviar formulario

- **`newsletter`** - Newsletter
  - `subscribeToNewsletter` - Suscribirse

---

## ESTRUCTURA DE PROCEDIMIENTOS oRPC

Los procedimientos pueden ser:

- **`publicProcedure`** - Público, no requiere autenticación
- **`protectedProcedure`** - Requiere sesión activa
- **`adminProcedure`** - Requiere rol de admin

Ejemplo de uso en cliente:
```typescript
import { orpc } from "@shared/lib/orpc-query-utils";

const { data } = useQuery(
  orpc.admin.users.list.queryOptions({
    input: { itemsPerPage: 10, currentPage: 1 }
  })
);
```

---

## NOTAS IMPORTANTES

1. **No hay `.env.example`** - Las variables se documentan en este archivo y en el código

2. **Mono-repo**: El proyecto usa pnpm workspaces con múltiples packages

3. **oRPC vs Server Actions**: Este proyecto prefiere oRPC sobre Server Actions tradicionales

4. **Better Auth**: No usa NextAuth, usa Better Auth con adaptador Prisma

5. **Prisma + Drizzle**: El proyecto soporta ambos ORMs, pero Prisma es el principal

6. **Internacionalización**: Usa `next-intl` con locales configurados en `config/i18n`

7. **Configuración centralizada**: Todo se configura en `config/index.ts`

---

**Última actualización**: Basado en la estructura actual del proyecto

