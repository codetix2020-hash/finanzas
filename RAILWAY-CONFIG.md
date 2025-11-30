# Configuración Railway para Supastarter + Neon

Esta guía te ayudará a deployar tu aplicación Supastarter en Railway usando Neon como base de datos externa.

---

## 📋 Tabla de Contenidos

1. [Variables de Entorno Requeridas](#variables-de-entorno-requeridas)
2. [Configuración Inicial de Railway](#configuración-inicial-de-railway)
3. [Build Configuration](#build-configuration)
4. [Conectividad con Neon](#conectividad-con-neon)
5. [Pasos de Deployment](#pasos-de-deployment)
6. [Verificación Post-Deployment](#verificación-post-deployment)
7. [Troubleshooting](#troubleshooting)

---

## 🔐 Variables de Entorno Requeridas

### Base de Datos

```env
DATABASE_URL="postgresql://user:password@host:port/database?sslmode=require"
```

**Importante**: Usa la connection string de Neon con `sslmode=require`. Ejemplo:
```
postgresql://neondb_owner:npg_xxxxx@ep-red-bush-xxxxx-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require
```

### URLs Públicas

```env
NEXT_PUBLIC_SITE_URL="https://tu-app.railway.app"
PORT="3000"
```

**Nota**: Railway asignará automáticamente una URL. Puedes configurar un dominio personalizado después.

### Autenticación (Better Auth)

```env
BETTER_AUTH_SECRET="tu-secret-key-muy-larga-y-segura"
BETTER_AUTH_URL="https://tu-app.railway.app"
```

**Generar BETTER_AUTH_SECRET**:
```bash
openssl rand -base64 32
```

### OAuth Providers (Opcional)

**Google OAuth**:
```env
GOOGLE_CLIENT_ID="tu-google-client-id"
GOOGLE_CLIENT_SECRET="tu-google-client-secret"
```

**GitHub OAuth**:
```env
GITHUB_CLIENT_ID="tu-github-client-id"
GITHUB_CLIENT_SECRET="tu-github-client-secret"
```

**Nota**: Configura las URLs de callback en los dashboards de OAuth:
- Google: `https://tu-app.railway.app/api/auth/callback/google`
- GitHub: `https://tu-app.railway.app/api/auth/callback/github`

### Stripe (Si usas pagos)

```env
STRIPE_SECRET_KEY="sk_live_xxxxx"
STRIPE_WEBHOOK_SECRET="whsec_xxxxx"
NEXT_PUBLIC_PRICE_ID_PRO_MONTHLY="price_xxxxx"
NEXT_PUBLIC_PRICE_ID_PRO_YEARLY="price_xxxxx"
NEXT_PUBLIC_PRICE_ID_LIFETIME="price_xxxxx"
```

**Webhook URL en Stripe**: `https://tu-app.railway.app/api/webhooks/payments`

### Storage (S3 - Opcional)

Si usas S3 para almacenar avatares/archivos:

```env
S3_ENDPOINT="https://s3.amazonaws.com"
S3_REGION="us-east-1"
S3_ACCESS_KEY_ID="tu-access-key"
S3_SECRET_ACCESS_KEY="tu-secret-key"
NEXT_PUBLIC_AVATARS_BUCKET_NAME="avatars"
```

### Email Provider

**Plunk** (recomendado):
```env
PLUNK_API_KEY="tu-plunk-api-key"
```

**Otras opciones**:

**Resend**:
```env
RESEND_API_KEY="re_xxxxx"
```

**Postmark**:
```env
POSTMARK_SERVER_TOKEN="tu-postmark-token"
```

**Mailgun**:
```env
MAILGUN_DOMAIN="tu-dominio.mailgun.org"
MAILGUN_API_KEY="tu-mailgun-api-key"
```

**Nodemailer** (SMTP):
```env
MAIL_HOST="smtp.gmail.com"
MAIL_PORT="587"
MAIL_USER="tu-email@gmail.com"
MAIL_PASS="tu-app-password"
```

### Payment Providers Alternativos (Opcional)

**Polar**:
```env
POLAR_ACCESS_TOKEN="tu-polar-token"
POLAR_WEBHOOK_SECRET="tu-webhook-secret"
```

**Lemon Squeezy**:
```env
LEMONSQUEEZY_API_KEY="tu-api-key"
LEMONSQUEEZY_STORE_ID="tu-store-id"
LEMONSQUEEZY_WEBHOOK_SECRET="tu-webhook-secret"
```

**Dodo Payments**:
```env
DODO_PAYMENTS_API_KEY="tu-api-key"
```

---

## 🚀 Configuración Inicial de Railway

### 1. Crear Proyecto en Railway

1. Ve a [railway.app](https://railway.app)
2. Inicia sesión con GitHub
3. Haz clic en **"New Project"**
4. Selecciona **"Deploy from GitHub repo"**
5. Conecta tu repositorio de Supastarter

### 2. Configurar Variables de Entorno

1. En tu proyecto de Railway, ve a la pestaña **"Variables"**
2. Añade todas las variables de entorno listadas arriba
3. **Importante**: Usa el formato `DATABASE_URL` (sin comillas en Railway)

---

## 🔨 Build Configuration

### Opción 1: Usando Nixpacks (Recomendado)

Railway detectará automáticamente el proyecto Next.js y usará Nixpacks. Asegúrate de tener estos archivos:

**`package.json` en la raíz** (ya existe):
```json
{
  "engines": {
    "node": ">=20"
  },
  "packageManager": "pnpm@10.14.0"
}
```

### Opción 2: Configuración Manual

Si necesitas configuración personalizada, crea `railway.json` en la raíz:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "pnpm install && pnpm build"
  },
  "deploy": {
    "startCommand": "pnpm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

### Configuración del Monorepo

**Importante**: Este proyecto usa **Turbo** para el build del monorepo. Railway debe ejecutar desde la raíz del proyecto.

**Variables de Build**:
- **Root Directory**: `.` (raíz del monorepo)
- **Build Command**: `pnpm build` 
  - Esto ejecuta `turbo build` que:
    1. Primero ejecuta `generate` en `packages/database` (Prisma Client)
    2. Luego ejecuta `build` en todos los packages dependientes
    3. Finalmente ejecuta `build` en `apps/web`
- **Start Command**: `pnpm start`
  - Esto ejecuta `turbo start` que inicia el servidor Next.js

**Nota sobre dotenv-cli**: Los scripts locales usan `dotenv -c`, pero en Railway no es necesario ya que las variables de entorno están disponibles automáticamente. Railway ejecutará los comandos de Turbo directamente sin necesidad de dotenv-cli.

---

## 🗄️ Conectividad con Neon

### Configurar DATABASE_URL

1. **Obtén la connection string de Neon**:
   - Ve a tu proyecto en [neon.tech](https://neon.tech)
   - Ve a **"Connection Details"**
   - Copia la connection string (usa la versión con pooler si está disponible)

2. **Añádela a Railway**:
   - Formato: `postgresql://user:password@host:port/database?sslmode=require`
   - Railway espera la URL sin comillas

3. **Verifica la conexión**:
   - Railway intentará conectarse durante el build
   - Si hay errores, verifica que el SSL esté configurado correctamente

### Migraciones de Prisma

Las migraciones se ejecutarán automáticamente si configuras un **build hook**:

```bash
cd packages/database && pnpm prisma migrate deploy
```

**O añade un script de post-build**:

En `package.json`:
```json
{
  "scripts": {
    "postbuild": "cd packages/database && pnpm prisma migrate deploy"
  }
}
```

**Nota**: En producción, usa `prisma migrate deploy` en lugar de `prisma db push`.

---

## 📦 Pasos de Deployment

### 1. Preparar el Repositorio

```bash
# Asegúrate de que tu código esté en GitHub
git add .
git commit -m "Prepare for Railway deployment"
git push origin main
```

### 2. Conectar Railway con GitHub

1. En Railway, haz clic en **"New Project"**
2. Selecciona **"Deploy from GitHub repo"**
3. Autoriza Railway a acceder a tu repositorio
4. Selecciona el repositorio de Supastarter

### 3. Configurar Variables de Entorno

Ve a **Settings** → **Variables** y añade todas las variables necesarias.

**Lista rápida de variables críticas**:
- ✅ `DATABASE_URL` (de Neon)
- ✅ `NEXT_PUBLIC_SITE_URL` (se actualizará después del primer deploy)
- ✅ `BETTER_AUTH_SECRET`
- ✅ `BETTER_AUTH_URL` (igual que NEXT_PUBLIC_SITE_URL)
- ✅ Variables de OAuth (si usas)
- ✅ Variables de Stripe (si usas)
- ✅ Variables de Email provider

### 4. Configurar Build Settings

1. Ve a **Settings** → **Build & Deploy**
2. Verifica:
   - **Root Directory**: `.` (raíz del proyecto)
   - **Build Command**: `pnpm build` (o deja en automático)
   - **Start Command**: `pnpm start` (o deja en automático)

### 5. Generar Cliente de Prisma

Railway necesita generar el cliente de Prisma durante el build. Esto debería ocurrir automáticamente con el script `build` en `packages/database/package.json`.

**Verifica que `packages/database/package.json` tenga**:
```json
{
  "scripts": {
    "generate": "prisma generate --no-hints --schema=./prisma/schema.prisma"
  }
}
```

### 6. Deploy Inicial

1. Railway comenzará el deploy automáticamente
2. Revisa los logs en tiempo real
3. Espera a que termine el build (puede tardar 5-10 minutos la primera vez)

### 7. Actualizar URLs Post-Deployment

Una vez que Railway asigne una URL:

1. Copia la URL de tu servicio (ej: `https://tu-app.up.railway.app`)
2. Actualiza estas variables:
   - `NEXT_PUBLIC_SITE_URL`
   - `BETTER_AUTH_URL`
   - URLs de callback en OAuth providers
   - Webhook URL en Stripe

3. Haz un **redeploy** para que los cambios surtan efecto

---

## ✅ Verificación Post-Deployment

### 1. Verificar Health Check

Visita: `https://tu-app.railway.app/api/health`

Deberías ver una respuesta JSON.

### 2. Verificar Base de Datos

1. Ve a Prisma Studio localmente (con la misma `DATABASE_URL`)
2. O ejecuta una query de prueba desde Railway logs

### 3. Verificar Autenticación

1. Intenta registrarte en `/auth/signup`
2. Verifica que recibas el email de verificación
3. Completa el registro

### 4. Verificar Build Logs

En Railway, revisa los logs para asegurar:
- ✅ Prisma Client generado correctamente
- ✅ Build de Next.js completado
- ✅ Sin errores de conexión a base de datos
- ✅ Variables de entorno cargadas

---

## 🔧 Troubleshooting

### Error: "DATABASE_URL is not set"

**Solución**: Verifica que la variable esté en Railway con el nombre exacto `DATABASE_URL` (sin comillas).

### Error: "Prisma schema validation failed"

**Solución**: 
1. Verifica que `DATABASE_URL` tenga `sslmode=require`
2. Ejecuta `pnpm prisma generate` localmente para verificar el schema

### Error: "Module not found" durante build

**Solución**: 
- Verifica que estés usando pnpm (no npm/yarn)
- Railway debería detectar `packageManager: "pnpm@10.14.0"` automáticamente

### Error: "Connection refused" a base de datos

**Solución**:
1. Verifica que la connection string de Neon sea correcta
2. Asegúrate de usar el pooler endpoint si está disponible
3. Verifica que Neon permita conexiones desde Railway (normalmente sí)

### Build tarda demasiado

**Solución**:
- Es normal que el primer build tarde 5-10 minutos
- Los builds subsecuentes serán más rápidos gracias al cache de Railway

### Variables NEXT_PUBLIC_* no se actualizan

**Solución**:
- Las variables `NEXT_PUBLIC_*` se inyectan durante el build
- Necesitas hacer un **redeploy** completo para que surtan efecto
- No basta con reiniciar el servicio

### Error: "Out of memory" durante build

**Solución**:
- Railway tiene límites de memoria
- Considera optimizar el build (remover dependencias no usadas)
- Contacta a Railway support para aumentar recursos

---

## 📝 Checklist de Deployment

Antes de hacer deploy, verifica:

- [ ] Todas las variables de entorno están configuradas en Railway
- [ ] `DATABASE_URL` apunta a tu base de datos Neon
- [ ] `BETTER_AUTH_SECRET` está generado y configurado
- [ ] URLs de OAuth callbacks están actualizadas (si usas OAuth)
- [ ] Webhook de Stripe está configurado (si usas Stripe)
- [ ] Email provider está configurado y funcionando
- [ ] El repositorio está conectado a Railway
- [ ] Build settings están correctos (raíz del monorepo)

Después del deploy:

- [ ] Health check responde correctamente
- [ ] Base de datos está conectada
- [ ] Registro de usuarios funciona
- [ ] Emails se envían correctamente
- [ ] OAuth funciona (si está configurado)
- [ ] Pagos funcionan (si está configurado)

---

## 🔗 Recursos Útiles

- [Railway Documentation](https://docs.railway.app)
- [Neon Documentation](https://neon.tech/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Prisma Deployment](https://www.prisma.io/docs/guides/deployment)

---

## 💡 Tips Adicionales

1. **Dominio Personalizado**: Después del primer deploy, puedes configurar un dominio personalizado en Railway → Settings → Domains

2. **Environment Variables por Environment**: Railway permite tener diferentes variables para `production`, `staging`, etc.

3. **Logs en Tiempo Real**: Usa `railway logs` CLI para ver logs en tiempo real:
   ```bash
   npm i -g @railway/cli
   railway login
   railway logs
   ```

4. **Backups de Base de Datos**: Neon tiene backups automáticos, pero puedes configurar backups adicionales si es necesario

5. **Monitoring**: Considera integrar Railway con servicios de monitoring como Sentry para errores

---

¿Necesitas ayuda? Abre un issue en el repositorio o consulta la documentación de Railway.

