# Indexación en Google Search Console - Cambios Realizados

## 📋 Resumen de Cambios

Se han realizado cambios para mejorar la indexación de cgapsicologia.com en Google Search Console. El problema raíz era que Google estaba rastreando múltiples variantes de la URL (www, HTTP, HTTPS) sin una canonicalización clara.

---

## ✅ Cambios Implementados

### 1. **Sitemap.xml Mejorado** (`public/sitemap.xml`)
- ✅ Actualizado a HTTPS sin www (URL canónica)
- ✅ Actualizado lastmod a fecha actual (2026-06-12)
- ✅ Organizado por secciones (Homepage, Servicios, Blog)
- ✅ Añadidas descripciones para claridad

**Antes:**
```xml
<loc>https://cgapsicologia.com</loc>
<lastmod>2026-05-31</lastmod>
```

**Después:**
```xml
<loc>https://cgapsicologia.com/</loc>
<lastmod>2026-06-12</lastmod>
```

---

### 2. **Robots.txt Mejorado** (`public/robots.txt`)
- ✅ Especificada la URL canónica con `Host:`
- ✅ Actualizada referencia al sitemap
- ✅ Bloqueados crawlers agresivos (AhrefsBot, SemrushBot, etc.)
- ✅ Configurado para permitir rastreo estándar

```txt
Host: https://cgapsicologia.com
Sitemap: https://cgapsicologia.com/sitemap.xml
```

---

### 3. **Next.js Configuration** (`next.config.js`)
- ✅ Añadidos **redirects 301** permanentes:
  - `www.cgapsicologia.com` → `cgapsicologia.com`
- ✅ Añadidos security headers:
  - Strict-Transport-Security (HSTS)
  - X-Content-Type-Options
- ✅ Cache-Control para assets de Next.js

```javascript
redirects: async () => {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.cgapsicologia.com' }],
      destination: 'https://cgapsicologia.com/:path*',
      permanent: true, // 301 redirect
    },
  ]
}
```

---

### 4. **Script Dinámico de Sitemap** (`scripts/generate-sitemap.js`)
- ✅ Genera sitemap automáticamente desde Contentful
- ✅ Incluye blog posts dinámicamente
- ✅ Se ejecuta en cada build

**Uso:**
```bash
npm run sitemap          # Generar sitemap manualmente
npm run build            # Build que genera sitemap automáticamente
node scripts/generate-sitemap.js  # Ejecución directa
```

---

### 5. **Package.json Actualizado**
- ✅ Script `build` ahora ejecuta generación de sitemap
- ✅ Nuevo script `sitemap` para regenerar manualmente

```json
"scripts": {
  "build": "node scripts/generate-sitemap.js && next build"
}
```

---

## 🔍 Problemas Corregidos

| Problema | Causa | Solución |
|----------|-------|----------|
| URLs con www no se indexan | Falta canonicalización | Redirect 301 en next.config.js |
| URLs HTTP indexadas | Protocolo incorrecto | HSTS header + redirect |
| Sitemap desactualizado | Generación manual estática | Script dinámico en build |
| Blog posts dinámicos no en sitemap | Sitemap estático | Script que incluye Contentful |

---

## 🚀 Próximos Pasos

### 1. **Redeploy la Aplicación**
```bash
npm run build    # Genera nuevo sitemap
npm run start    # o deploy a producción
```

### 2. **Verificar en Google Search Console**
- Acceder a: https://search.google.com/search-console
- Ir a "Sitemaps"
- Enviar nueva versión: `https://cgapsicologia.com/sitemap.xml`
- Hacer clic en "Solicitar indexación"

### 3. **Verificar Redirects**
Probar que www se redirige correctamente:
```bash
curl -I https://www.cgapsicologia.com
# Debería responder con 301 Moved Permanently
# Location: https://cgapsicologia.com
```

### 4. **Monitorear Índice de Google**
- Cobertura → Ver todas las URLs detectadas
- Asegurar que las URLs www y HTTP han sido reemplazadas
- Blog posts deberían aparecer automáticamente

---

## 📝 Configuración de Contentful

El script de sitemap dinámico requiere las siguientes variables de entorno:

```bash
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=tu_space_id
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=tu_access_token
```

Si no están configuradas, el script usará solo las páginas estáticas.

---

## 🔐 Security Headers Añadidos

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-DNS-Prefetch-Control: on
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
```

Estos headers mejoran tanto la seguridad como el SEO.

---

## 📊 Verificación

### Sitemap válido
```bash
# Probar validación
curl https://cgapsicologia.com/sitemap.xml | head -20
```

### Robots.txt correcto
```bash
curl https://cgapsicologia.com/robots.txt
```

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué los cambios no aparecen inmediatamente en Google?**
- R: Google puede tardar días/semanas en rerastrear. Usa "Solicitar indexación" para acelerar.

**P: ¿Qué pasa si agrego un nuevo blog post?**
- R: Se incluirá automáticamente en el próximo build.

**P: ¿Necesito hacer algo manual?**
- R: No, todo es automático en builds futuros. Solo redeploy la app.

---

## 📞 Soporte

Si después de 2 semanas los cambios no se reflejan:
1. Verificar que las variables de entorno están configuradas
2. Manualmente solicitar indexación en Search Console
3. Revisar si hay errores en "Cobertura" del Search Console
