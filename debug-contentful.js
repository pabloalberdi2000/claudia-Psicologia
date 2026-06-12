/**
 * Script para debuggear conexión a Contentful
 * Ejecutar: node debug-contentful.js
 */

require('dotenv').config({ path: '.env.local' });
const { createClient } = require('contentful');

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

console.log('🔍 Verificando conexión a Contentful...\n');
console.log('📌 Space ID:', spaceId);
console.log('📌 Token:', accessToken ? '✅ Configurado' : '❌ No encontrado');
console.log('');

if (!spaceId || !accessToken) {
  console.error('❌ Error: Faltan credenciales en .env.local');
  process.exit(1);
}

const client = createClient({
  space: spaceId,
  accessToken,
});

async function debugContentful() {
  try {
    console.log('⏳ Consultando Contentful...\n');

    // Obtener los posts
    const entries = await client.getEntries({
      content_type: 'blogPost',
      limit: 100,
      order: '-fields.publishedAt',
    });

    console.log(`✅ Conexión exitosa a Contentful\n`);
    console.log(`📊 Total de posts encontrados: ${entries.items.length}\n`);

    if (entries.items.length === 0) {
      console.log('⚠️  No hay posts publicados en Contentful');
      console.log('💡 Verifica que en Contentful hagas click en "Publish"\n');
      return;
    }

    console.log('📝 Posts encontrados:\n');
    entries.items.forEach((post, index) => {
      console.log(`${index + 1}. "${post.fields.title}"`);
      console.log(`   Slug: ${post.fields.slug}`);
      console.log(`   Categoría: ${post.fields.category || '(sin categoría)'}`);
      console.log(`   Publicado: ${post.fields.publishedAt}`);
      console.log(`   ID: ${post.sys.id}\n`);
    });

    // Obtener categorías únicas
    const categories = new Set();
    entries.items.forEach((post) => {
      if (post.fields.category) {
        categories.add(post.fields.category);
      }
    });

    console.log('🏷️  Categorías detectadas:');
    Array.from(categories).sort().forEach((cat) => {
      console.log(`   - ${cat}`);
    });
    console.log('');

  } catch (error) {
    console.error('❌ Error conectando a Contentful:\n');

    if (error.status === 401) {
      console.error('❌ Error 401: Token inválido o expirado');
      console.error('💡 Solución: Verifica que el token sea correcto en .env.local');
    } else if (error.status === 404) {
      console.error('❌ Error 404: Space ID no encontrado');
      console.error('💡 Solución: Verifica que el Space ID sea correcto en .env.local');
    } else {
      console.error(error.message);
    }

    console.error('\n📋 Detalles:');
    console.error(`Status: ${error.status}`);
    console.error(`Message: ${error.message}`);
  }
}

debugContentful();
