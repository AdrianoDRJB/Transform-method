# 🚀 Guia de Deploy - Transform Method Site

## ✅ Site Pronto para Deploy!

O site está **100% funcional** e compilado para produção. Você tem 3 opções para fazer o deploy permanente:

---

## 📦 Opção 1: Netlify Drop (Mais Fácil - Recomendado!)

**Tempo:** 2 minutos | **Custo:** Grátis | **Domínio:** Gratuito (.netlify.app)

### Passos:

1. **Baixe o arquivo ZIP:**
   - Arquivo: `transform-method-site-deploy.zip` (já criado na pasta do projeto)
   - Ou baixe a pasta `dist/` completa

2. **Acesse:** https://app.netlify.com/drop

3. **Arraste e solte:**
   - Descompacte o ZIP
   - Arraste a pasta `dist/` para a área de drop do Netlify
   - OU arraste o ZIP diretamente

4. **Pronto!**
   - Netlify vai gerar uma URL como: `https://seu-site-123abc.netlify.app`
   - Você pode personalizar o nome depois

---

## 🔗 Opção 2: Vercel (Profissional)

**Tempo:** 5 minutos | **Custo:** Grátis | **Domínio:** Gratuito (.vercel.app)

### Passos:

1. **Crie conta no Vercel:** https://vercel.com/signup

2. **Instale Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

3. **Faça login:**
   ```bash
   vercel login
   ```

4. **Deploy:**
   ```bash
   cd /home/ubuntu/transform-method-site
   vercel --prod
   ```

5. **Siga as instruções** no terminal

---

## 🌐 Opção 3: Cloudflare Pages

**Tempo:** 5 minutos | **Custo:** Grátis | **Domínio:** Gratuito (.pages.dev)

### Passos:

1. **Crie conta:** https://dash.cloudflare.com/sign-up

2. **Vá para Pages:** https://dash.cloudflare.com/pages

3. **Clique em "Upload assets"**

4. **Arraste a pasta `dist/`**

5. **Publique!**

---

## 📂 Arquivos para Deploy

**Pasta compilada:** `/home/ubuntu/transform-method-site/dist/`

**Conteúdo:**
```
dist/
├── index.html
├── favicon.ico
└── assets/
    ├── index-Db7uoQdp.css (110 KB)
    └── index-FiGBXiUD.js (311 KB)
```

**Arquivo ZIP:** `transform-method-site-deploy.zip` (já criado)

---

## 🔧 Configurações Importantes

### Build Settings (se usar GitHub):

- **Build Command:** `pnpm run build`
- **Output Directory:** `dist`
- **Install Command:** `pnpm install`
- **Node Version:** 22.x

### Variáveis de Ambiente:

Nenhuma necessária! O site é 100% frontend.

---

## 🌍 URL Temporária (Sandbox)

Enquanto você não faz o deploy permanente, o site está rodando em:

**🔗 https://8081-i5uzahe1ox2w7vola4vlk-424bf37c.manusvm.computer**

⚠️ **Atenção:** Esta URL é temporária e expira quando o sandbox for desligado.

---

## 📊 Estatísticas do Build

- **Total comprimido:** ~112 KB
- **CSS:** 17 KB (gzip)
- **JavaScript:** 95 KB (gzip)
- **Performance:** Excelente
- **Lighthouse Score:** 95+ (estimado)

---

## ✨ Funcionalidades Implementadas

✅ **4 Páginas:**
- Home (`/`)
- The Method (`/method`)
- **Calorie Calculator** (`/calculator`) ← NOVO!
- Macro Tracker (`/tracker`)

✅ **Calculadora de Calorias:**
- Sistema métrico/imperial
- 3 fórmulas de cálculo
- Cálculo de macros
- Design moderno

✅ **Macro Tracker:**
- Busca em 350.000+ alimentos
- API USDA integrada
- Rastreamento de macros

---

## 🎯 Recomendação

**Para deploy rápido:** Use **Netlify Drop** (Opção 1)
- Sem configuração
- Sem linha de comando
- Apenas arrastar e soltar
- URL em 30 segundos

**Para projeto profissional:** Use **Vercel** (Opção 2)
- Melhor performance
- Analytics grátis
- Domínio customizado fácil
- CI/CD automático

---

## 📞 Suporte

Se precisar de ajuda com o deploy, posso:
- Criar um repositório GitHub para você
- Configurar CI/CD automático
- Ajudar com domínio customizado
- Configurar SSL/HTTPS

---

**Criado em:** 15 de Novembro de 2025
**Status:** ✅ Pronto para Deploy
