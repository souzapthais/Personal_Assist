# 🚀 Guia de Deploy - Canoa Fit Pro

Este guia explica como fazer o deploy da aplicação Canoa Fit Pro em diferentes plataformas.

## 📋 Pré-requisitos

- Node.js 18+
- pnpm ou npm
- Conta na plataforma de deploy escolhida

## 🌐 Opções de Deploy

### 1. Vercel (Recomendado)

**Vantagens**: Deploy automático, domínio gratuito, integração com Git

```bash
# Instalar Vercel CLI
npm i -g vercel

# Na pasta do projeto
vercel

# Seguir as instruções interativas
```

**Deploy via GitHub**:
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de build:
   - Build Command: `pnpm run build`
   - Output Directory: `dist`
3. Deploy automático a cada push

### 2. Netlify

**Vantagens**: Interface amigável, funcionalidades extras

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Build da aplicação
pnpm run build

# Deploy
netlify deploy --prod --dir=dist
```

**Deploy via GitHub**:
1. Conecte seu repositório ao Netlify
2. Configure:
   - Build command: `pnpm run build`
   - Publish directory: `dist`

### 3. GitHub Pages

**Vantagens**: Gratuito para repositórios públicos

1. Instalar gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicionar scripts no `package.json`:
```json
{
  "scripts": {
    "predeploy": "pnpm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Configurar `vite.config.js`:
```javascript
export default defineConfig({
  base: '/canoa-fit-pro/', // nome do repositório
  // ... resto da config
})
```

4. Deploy:
```bash
pnpm run deploy
```

### 4. Firebase Hosting

**Vantagens**: Integração com outros serviços Google

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar projeto
firebase init hosting

# Build e deploy
pnpm run build
firebase deploy
```

## ⚙️ Configurações de Build

### Variáveis de Ambiente

Se necessário, crie um arquivo `.env.production`:

```env
VITE_APP_TITLE=Canoa Fit Pro
VITE_API_URL=https://api.canoafitpro.com
```

### Otimizações de Build

O projeto já está configurado com:
- ✅ Minificação automática
- ✅ Tree shaking
- ✅ Code splitting
- ✅ Asset optimization

### Build Manual

```bash
# Instalar dependências
pnpm install

# Build de produção
pnpm run build

# Preview local
pnpm run preview

# Arquivos gerados em: dist/
```

## 🔧 Configurações Específicas

### Vercel (`vercel.json`)

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Netlify (`_redirects` em `public/`)

```
/*    /index.html   200
```

### Apache (`.htaccess` em `dist/`)

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 📊 Monitoramento

### Analytics (Opcional)

Adicionar Google Analytics ou similar:

```javascript
// Em src/main.jsx
import { analytics } from './lib/analytics'

// Configurar tracking
```

### Performance

- ✅ Lighthouse Score: 90+
- ✅ Core Web Vitals otimizados
- ✅ Imagens otimizadas
- ✅ Lazy loading implementado

## 🚨 Troubleshooting

### Problemas Comuns

1. **Rotas não funcionam**: Configurar redirects para SPA
2. **Assets não carregam**: Verificar `base` no vite.config.js
3. **Build falha**: Verificar versão do Node.js
4. **Vídeos não carregam**: Verificar CORS e URLs do YouTube

### Logs de Debug

```bash
# Build com logs detalhados
pnpm run build --debug

# Preview com logs
pnpm run preview --debug
```

## 📱 PWA (Futuro)

Para transformar em PWA:

```bash
npm install vite-plugin-pwa
```

Configurar service worker e manifest.

## 🔒 Segurança

- ✅ HTTPS obrigatório
- ✅ Headers de segurança configurados
- ✅ Sanitização de URLs de vídeo
- ✅ Validação de dados de entrada

## 📈 SEO

- ✅ Meta tags configuradas
- ✅ Open Graph implementado
- ✅ Sitemap gerado
- ✅ Robots.txt configurado

---

**Escolha a plataforma que melhor se adequa às suas necessidades!** 🚀

