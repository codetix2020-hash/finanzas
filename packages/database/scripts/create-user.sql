-- ================================================
-- Script para crear usuario en Railway
-- ================================================
-- Email: codetix2020@gmail.com
-- Password: FinanzOS2025!Secure#
-- ================================================

-- IMPORTANTE: Este hash es para la contraseña "FinanzOS2025!Secure#"
-- Generado con bcrypt, salt rounds: 10

-- Paso 1: Crear el usuario
INSERT INTO "user" (
    id,
    email,
    name,
    "emailVerified",
    "createdAt",
    "updatedAt",
    "onboardingComplete"
) VALUES (
    gen_random_uuid()::text,  -- Genera un ID único
    'codetix2020@gmail.com',
    'Bruno Finance',
    true,  -- Email ya verificado
    NOW(),
    NOW(),
    false
)
ON CONFLICT (email) DO NOTHING
RETURNING id;

-- Paso 2: Crear la cuenta (credential provider)
-- NOTA: Reemplaza 'USER_ID_AQUI' con el ID generado en el paso anterior
INSERT INTO "account" (
    id,
    "userId",
    "accountId",
    "providerId",
    password,
    "createdAt",
    "updatedAt"
) VALUES (
    gen_random_uuid()::text,
    (SELECT id FROM "user" WHERE email = 'codetix2020@gmail.com'),
    (SELECT id FROM "user" WHERE email = 'codetix2020@gmail.com'),
    'credential',
    '$2b$10$TXpfCTEGVVaiaEzQZUc3SuoJGC0TRXne/UV/N7Z39PUb1OJqlZiB6',  -- Hash de "FinanzOS2025!Secure#"
    NOW(),
    NOW()
);

-- Verificación: Mostrar el usuario creado
SELECT id, email, name, "emailVerified", "createdAt" 
FROM "user" 
WHERE email = 'codetix2020@gmail.com';

