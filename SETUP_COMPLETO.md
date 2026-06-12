# ✅ Setup Completo: Blog + Contentful

## 📊 Status: Listo para Testear

Tu `.env.local` ya tiene las credenciales configuradas:

```env
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=jlug4h8mu7lz
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=Z4PzQ88TlofYKBTl4DPWd8_tlgcluM9j7QILteE3QI
```

✅ **Todo está configurado. Ahora falta solo TESTEAR.**

---

## 🚀 Pasos para Testear

### 1️⃣ Crear un Artículo de Prueba en Contentful

Ve a Contentful Dashboard → **Content** → **Create Entry** → **blogPost**

```
Field                Value
─────────────────────────────────────────────────────────
title                "Ansiedad Online: Mi Primer Post"
slug                 "ansiedad-online-primer-post"
category             "Salud Mental"
excerpt              "Descubre cómo manejar la ansiedad con terapia online"
content              [Copia este contenido Rich Text abajo]
publishedAt          [Hoy]
author               "Claudia González Álvarez"
readTime             "6 min"
keywords             "ansiedad, online, terapia, estrés"
tags                 ["ansiedad", "terapia", "online"]
```

**Contenido Rich Text a Copiar:**
```
Puedes escribir directamente en el editor Rich Text de Contentful:

# Ansiedad Online: Guía Práctica

La ansiedad es una respuesta natural del cuerpo ante el estrés. Sin embargo, cuando se convierte en una reacción constante, puede afectar significativamente tu calidad de vida.

## ¿Por qué la terapia online funciona?

- Acceso inmediato sin desplazamientos
- Mayor privacidad y comodidad
- Horarios flexibles adaptados a ti
- Costo generalmente más accesible

## Técnicas que te enseñaremos

### 1. Respiración Diafragmática
La respiración consciente es fundamental para calmar el sistema nervioso.

### 2. Reestructuración Cognitiva
Identificar y cambiar patrones de pensamiento ansioso.

### 3. Mindfulness
Desarrollar presencia consciente para reducir rumiación.

## Conclusión

La ansiedad es tratable. Con apoyo profesional y técnicas prácticas, puedes recuperar tu bienestar.
```

### 2️⃣ IMPORTANTE: Publicar el Artículo

En Contentful, arriba a la derecha, hay un botón **"Publish"** 

✅ **Hazlo ANTES de continuar**

### 3️⃣ Ejecutar en Desarrollo Local

En tu terminal:

```bash
cd /Users/alberdi/Desktop/claudia-Psicologia
npm run dev
```

Debería ver:
```
> next dev

  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  
Ready in 2.5s
```

### 4️⃣ Ir al Blog

Abre tu navegador: **http://localhost:3000/blog**

**Esperado:**
- ✅ El nuevo artículo aparece en la lista
- ✅ Categoría "Salud Mental" visible
- ✅ Resumen mostrado
- ✅ "6 min lectura" aparece

**Si no aparece:**
→ Lee "Troubleshooting" abajo

### 5️⃣ Abre el Artículo Individual

Haz click en tu artículo o ve a:
**http://localhost:3000/blog/ansiedad-online-primer-post**

**Esperado:**
- ✅ Título completo
- ✅ Rich Text renderizado correctamente (headings, listas, etc)
- ✅ Metadata: autor, fecha, tiempo de lectura
- ✅ Tags mostrados al final
- ✅ CTA "Reservar sesión gratuita"

### 6️⃣ Verifica que los Defaults Siguen Funcionando

Los 5 artículos hardcodeados deberían aparecer TAMBIÉN:
- "Ansiedad y Terapia Online: Cómo la TCC..."
- "Comunicación Efectiva en Parejas..."
- etc.

**Comprobación:**
- ✅ Total 6 artículos (1 nuevo + 5 defaults)
- ✅ Ordenados por fecha (más reciente primero)
- ✅ Al hacer click en defaults se abren correctamente

---

## 🔍 Troubleshooting

### ❌ "No veo el artículo en el blog"

**Checklist:**

1. **¿Está publicado en Contentful?**
   ```
   Content → Tu artículo → Review "Published" (debe estar en verde)
   ```

2. **¿Esperaste 5 segundos?**
   - A veces la API de Contentful tiene latencia
   - Recarga la página: F5

3. **¿Las env vars son correctas?**
   ```bash
   cat /Users/alberdi/Desktop/claudia-Psicologia/.env.local
   ```
   Debe mostrar:
   ```
   NEXT_PUBLIC_CONTENTFUL_SPACE_ID=jlug4h8mu7lz
   NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=Z4PzQ88TlofYKBTl4DPWd8_...
   ```

4. **¿Reiniciaste el dev server?**
   ```bash
   # En la terminal:
   # Ctrl+C para detener
   npm run dev  # Reinicia
   ```

5. **Abre la consola del navegador (F12)**
   - Busca errores rojos
   - Abre Network → busca requests a `cdn.contentful.com`
   - Debería haber una request successful

### ❌ "El Rich Text no se renderiza bien"

**Posible causa:** El campo `content` no es Rich Text

**Verificar:**
1. Contentful → Settings → Content Types → blogPost
2. Busca campo `content`
3. Verifica que sea `Type: RichText`
4. Si es `Text`, cámbialo a `RichText`

### ❌ "Veo un error en la terminal"

**Pasos:**
1. Para el dev server: `Ctrl+C`
2. Limpia cache: `rm -rf .next`
3. Reinstala: `npm install`
4. Reinicia: `npm run dev`

---

## 📝 Próximos Pasos (Después de Testear)

Una vez que todo funcione:

### 1. Crear más artículos en Contentful
- Mínimo 3-5 artículos para que se vea bien
- Variar categorías (Salud Mental, Relaciones, Crecimiento Personal)

### 2. Migrar los defaults a Contentful (Opcional)
Los 5 artículos hardcodeados puedes:
- Dejarlos (van a coexistir)
- Copiarlos a Contentful manualmente
- Crear un script de migración

### 3. Build y Deploy
```bash
# Local
npm run build
npm run start

# O deploy a Vercel
vercel deploy
```

### 4. Sitemap Dinámico
El script `scripts/generate-sitemap.js` incluirá automáticamente todos tus posts de Contentful:

```bash
npm run build  # Genera sitemap automáticamente
```

### 5. Verificar en Google Search Console
- Envía el nuevo sitemap
- Solicita indexación de los artículos
- Espera 1-2 semanas

---

## 🎯 Checklist Final

- [ ] `.env.local` tiene las credenciales de Contentful
- [ ] Creé un artículo de prueba en Contentful
- [ ] Publiqué el artículo (Publish button)
- [ ] Ejecuté `npm run dev`
- [ ] Vi el artículo en `/blog`
- [ ] Hice click y vi el contenido renderizado
- [ ] Los artículos defaults siguen apareciendo
- [ ] No hay errores en la consola

**Si todo esto está hecho → ¡Felicidades! 🎉**

---

## 📚 Archivos Relevantes

```
src/
├── lib/contentful.ts          ← Funciones para fetch de Contentful
├── types/contentful.ts        ← Tipos TypeScript
├── app/
│   └── blog/
│       ├── page.tsx           ← Lista de blog (ya existía)
│       └── [slug]/page.tsx    ← Detalle (NUEVO)
└── components/
    ├── RichTextRenderer.tsx   ← Renderiza Rich Text
    └── MarkdownRenderer.tsx   ← Renderiza markdown (NUEVO)

.env.local                      ← Variables de entorno (NUEVO)
scripts/generate-sitemap.js     ← Genera sitemap dinámico (NUEVO)
```

---

## 💡 Tips

**Para ver logs de debugging:**

En `src/lib/contentful.ts`, agrega logging:
```typescript
export async function getBlogPosts(limit: number = 10) {
  try {
    const client = getClient()
    console.log('📚 Fetching from Contentful...')
    const entries = await client.getEntries({
      content_type: 'blogPost',
      limit: 100,
      order: '-fields.publishedAt',
    })
    console.log(`✅ Got ${entries.items.length} posts from Contentful`)
    // ... resto del código
  }
}
```

Abre la consola del navegador (F12) y verás los logs.

---

## 🔐 Seguridad

⚠️ **Importante:** Tu `.env.local` está en `.gitignore`, así que no se subirá a Git.

Pero ten cuidado:
- ✅ Usa `NEXT_PUBLIC_*` para variables públicas (es seguro)
- ❌ NO compartas tus tokens en público
- ❌ Si expones un token, revócalo en Contentful

Si accidentalmente los expusiste en Git:
1. Ve a Contentful → Settings → API keys
2. Regenera los tokens
3. Actualiza tu `.env.local`

---

**¿Necesitas ayuda con algo específico?** Cuéntame en qué paso te atascas. 🚀
