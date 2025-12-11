# 📊 INFORME: Error 500 en API de Publer

**Fecha:** 2025-12-11  
**Endpoint probado:** `POST /api/v1/posts/schedule/publish`  
**Estado:** ❌ Error 500 - Internal Server Error

---

## 🔍 DIAGNÓSTICO

### ✅ Lo que SÍ funciona:
1. **Autenticación:** ✅ La API key y Workspace ID son válidos
2. **Endpoint existe:** ✅ `/posts/schedule/publish` devuelve 500 (no 404)
3. **Obtener cuentas:** ✅ `GET /api/v1/accounts` funciona correctamente
4. **Headers correctos:** ✅ `Authorization: Bearer-API` y `Publer-Workspace-Id` están presentes

### ❌ Lo que NO funciona:
1. **Crear posts:** ❌ Todos los formatos probados devuelven 500
2. **Formato del body:** ❓ El formato puede ser incorrecto o incompleto

---

## 🧪 FORMATOS PROBADOS

### Formato 1: Con `bulk` wrapper
```json
{
  "bulk": {
    "state": "published",
    "post": [{
      "type": "status",
      "text": "Test desde API"
    }],
    "account": [{
      "id": "693895d8e1c0d09477dafbe5"
    }]
  }
}
```
**Resultado:** ❌ 500 Internal Server Error

### Formato 2: Sin `bulk` wrapper
```json
{
  "state": "published",
  "post": [{
    "type": "status",
    "text": "Test 2"
  }],
  "account": [{
    "id": "693895d8e1c0d09477dafbe5"
  }]
}
```
**Resultado:** ❌ 500 Internal Server Error

### Formato 3: Con `account_ids` array
```json
{
  "bulk": {
    "state": "published",
    "post": [{
      "type": "status",
      "text": "Test 3"
    }],
    "account_ids": ["693895d8e1c0d09477dafbe5"]
  }
}
```
**Resultado:** ❌ 500 Internal Server Error

### Formato 4: Con `network` provider
```json
{
  "bulk": {
    "state": "published",
    "post": [{
      "type": "status",
      "text": "Test con network"
    }],
    "account": [{
      "id": "693895d8e1c0d09477dafbe5"
    }],
    "network": [{
      "provider": "instagram"
    }]
  }
}
```
**Resultado:** ❌ 500 Internal Server Error

---

## 🔑 INFORMACIÓN DE CUENTAS

### Cuenta Instagram:
```json
{
  "id": "693895d8e1c0d09477dafbe5",
  "provider": "instagram",
  "name": "Reservafacil_1",
  "type": "ig_business",
  "username": "reservafacil_1",
  "permissions": {
    "can_access": true,
    "approval_needed": false
  }
}
```

### Cuenta TikTok:
```json
{
  "id": "693895f732bac1c78199104a",
  "provider": "tiktok",
  "name": "reservafacil_1",
  "type": "tiktok",
  "permissions": {
    "can_access": true,
    "approval_needed": false
  }
}
```

---

## 🎯 POSIBLES CAUSAS DEL ERROR 500

### 1. **Permisos de API Key**
- ❓ La API key puede no tener permisos de escritura para `posts`
- ✅ Tiene permisos de lectura (puede obtener cuentas)
- ⚠️ Verificar en Publer: Configuración → Claves API → Permisos

### 2. **Plan de Publer**
- ❓ El plan actual puede no incluir acceso a la API de creación de posts
- 📋 Según documentación, puede requerir plan **Ambassador** o **Enterprise**
- ⚠️ Verificar plan actual en Publer

### 3. **Formato del Body**
- ❓ El formato puede requerir campos adicionales no documentados
- ❓ Puede necesitar validación específica por plataforma
- ❓ Puede requerir media pre-uploaded para posts con imágenes

### 4. **Estado de la Cuenta**
- ✅ Las cuentas están conectadas y autorizadas
- ✅ `can_access: true` y `approval_needed: false`
- ❓ Puede haber restricciones específicas de Instagram/TikTok

---

## 📋 PRÓXIMOS PASOS RECOMENDADOS

### 1. **Verificar Permisos de API Key**
```
1. Ir a Publer → Configuración → Claves API
2. Verificar que la clave tenga:
   ✅ posts (Acceso de lectura y escritura)
   ✅ media (Acceso de lectura y escritura)
   ✅ accounts (Acceso de lectura)
```

### 2. **Verificar Plan de Publer**
```
1. Ir a Publer → Configuración → Plan
2. Confirmar que el plan incluya acceso a API
3. Si es necesario, actualizar a plan Ambassador o Enterprise
```

### 3. **Contactar Soporte de Publer**
```
Email: support@publer.com
Asunto: Error 500 al crear posts via API
Incluir:
- API Key (últimos 4 caracteres)
- Workspace ID
- Endpoint probado: /api/v1/posts/schedule/publish
- Formato del body usado
- Error recibido: 500 Internal Server Error
```

### 4. **Probar con Postman Collection**
```
1. Descargar Postman Collection de Publer
2. Importar en Postman
3. Probar endpoint con ejemplos oficiales
4. Comparar formato con nuestro código
```

---

## 💻 CÓDIGO ACTUAL

### Endpoint usado:
```typescript
const endpoint = params.scheduleAt 
  ? `${PUBLER_BASE_URL}/posts/schedule`
  : `${PUBLER_BASE_URL}/posts/schedule/publish`;
```

### Body enviado:
```typescript
const postData = {
  bulk: {
    state: params.scheduleAt ? "scheduled" : "published",
    post: [{
      type: params.imageUrl ? "photo" : "status",
      text: params.content
    }],
    account: accountIds.map(id => ({ id }))
  }
};
```

### Headers:
```typescript
{
  "Authorization": `Bearer-API ${PUBLER_API_KEY}`,
  "Content-Type": "application/json",
  "Publer-Workspace-Id": PUBLER_WORKSPACE_ID
}
```

---

## 📝 CONCLUSIÓN

El endpoint `/posts/schedule/publish` **existe y es accesible** (devuelve 500, no 404), lo que indica que:
- ✅ La autenticación es correcta
- ✅ El endpoint está disponible
- ❌ Hay un problema con el formato del body o los permisos

**Recomendación principal:** Contactar a soporte de Publer con esta información para obtener el formato exacto del body o verificar permisos/plan.

---

## 🔗 REFERENCIAS

- Documentación Publer: https://publer.com/docs/api-reference/posts/create-post
- Soporte Publer: support@publer.com
- Postman Collection: Disponible en la documentación de Publer

