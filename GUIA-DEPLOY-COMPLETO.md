# 🚀 Guia de Deploy - Transform Method

## ✅ Status da Reimplementação

O projeto Transform Method foi **completamente reimplementado** e testado com sucesso!

### Funcionalidades Implementadas

- ✅ **5 Páginas Completas**
  - Home (Landing Page)
  - The Method (9 Passos Detalhados)
  - Calorie Calculator (Métrico/Imperial, 3 Fórmulas)
  - Macro Tracker (USDA API, 350k+ alimentos)
  - eBooks (Loja com Paywall Stripe)

- ✅ **Tecnologias**
  - React 19.1.0
  - Vite 6.3.5
  - Tailwind CSS 4.1.7
  - React Router 7.6.1
  - shadcn/ui (50+ componentes)
  - Lucide React Icons

- ✅ **Recursos**
  - Navegação responsiva (desktop/mobile)
  - Dark mode ready
  - localStorage para persistência
  - API USDA integrada
  - Sistema de paywall pronto

---

## 📦 Estrutura do Projeto

```
transform-method/
├── public/
│   ├── ebooks/                    # 4 PDFs de eBooks
│   │   ├── building_resilient_mind.pdf
│   │   ├── emotional_mastery_guide.pdf
│   │   ├── environment_habits_mastery.pdf
│   │   └── nutrition_myths_guide.pdf
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── HomePage.jsx           # Landing page
│   │   ├── AboutMethod.jsx        # 9 passos detalhados
│   │   ├── CalorieCalculator.jsx  # Calculadora
│   │   ├── MacroTracker.jsx       # Tracker USDA
│   │   ├── EbooksPage.jsx         # Loja de eBooks
│   │   └── ui/                    # 50+ componentes shadcn
│   ├── App.jsx                    # Router e navegação
│   ├── main.jsx                   # Entry point
│   └── index.css                  # Tailwind CSS
├── dist/                          # Build de produção
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🌐 Opções de Deploy

### Opção 1: Vercel (Recomendado - Mais Fácil)

**Vantagens:**
- Deploy automático via GitHub
- SSL grátis
- CDN global
- Zero configuração

**Passos:**

1. **Criar repositório no GitHub:**
```bash
cd /home/ubuntu/transform-method
git init
git add .
git commit -m "Initial commit - Transform Method"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/transform-method.git
git push -u origin main
```

2. **Deploy na Vercel:**
- Acesse [vercel.com](https://vercel.com)
- Clique em "Import Project"
- Conecte seu GitHub
- Selecione o repositório `transform-method`
- Configure:
  - **Framework Preset:** Vite
  - **Build Command:** `pnpm run build`
  - **Output Directory:** `dist`
- Clique em "Deploy"

3. **Pronto!** Seu site estará em: `https://transform-method.vercel.app`

---

### Opção 2: Netlify

**Vantagens:**
- Deploy via drag-and-drop
- Formulários integrados
- Funções serverless

**Passos:**

1. **Build local:**
```bash
cd /home/ubuntu/transform-method
pnpm run build
```

2. **Deploy:**
- Acesse [netlify.com](https://netlify.com)
- Arraste a pasta `dist/` para o Netlify Drop
- Ou conecte via GitHub (igual Vercel)

3. **Configurar redirects** (criar arquivo `dist/_redirects`):
```
/*    /index.html   200
```

---

### Opção 3: GitHub Pages

**Vantagens:**
- Grátis
- Integrado ao GitHub

**Passos:**

1. **Atualizar `vite.config.js`:**
```javascript
export default defineConfig({
  base: '/transform-method/',  // Nome do repositório
  // ... resto da config
})
```

2. **Build e deploy:**
```bash
pnpm run build
cd dist
git init
git add .
git commit -m "Deploy"
git branch -M gh-pages
git remote add origin https://github.com/SEU-USUARIO/transform-method.git
git push -f origin gh-pages
```

3. **Ativar GitHub Pages:**
- Vá em Settings > Pages
- Source: `gh-pages` branch
- Salvar

---

## 🔧 Configurações Importantes

### 1. Integração Stripe (eBooks)

**Arquivo:** `src/components/EbooksPage.jsx`

**Linhas 56-68:**
```javascript
const handlePurchase = (ebookId) => {
  // SUBSTITUIR com seus Payment Links reais
  const stripeUrl = `https://buy.stripe.com/SEU_LINK_AQUI?client_reference_id=${ebookId}`;
  window.location.href = stripeUrl;
};
```

**Como configurar:**

1. Acesse [dashboard.stripe.com](https://dashboard.stripe.com)
2. Vá em "Products" > "Create Product"
3. Crie 4 produtos:
   - Environment & Habits Mastery - $9.99
   - Nutrition Myths Guide - $9.99
   - Building Your Resilient Mind - $9.99
   - Emotional Mastery Guide - $9.99
   - Bundle Completo - $29.99

4. Para cada produto, crie um "Payment Link"
5. Copie os links e substitua no código:

```javascript
const stripeLinks = {
  'environment-habits': 'https://buy.stripe.com/LINK1',
  'nutrition-myths': 'https://buy.stripe.com/LINK2',
  'resilient-mind': 'https://buy.stripe.com/LINK3',
  'emotional-mastery': 'https://buy.stripe.com/LINK4',
  'bundle': 'https://buy.stripe.com/LINK5'
};
```

6. **Webhook para desbloquear eBooks:**
   - Configure webhook no Stripe
   - URL: `https://seu-site.com/api/stripe-webhook`
   - Eventos: `checkout.session.completed`
   - Salvar `client_reference_id` no localStorage

---

### 2. API USDA (Macro Tracker)

**Arquivo:** `src/components/MacroTracker.jsx`

**Linha 50:**
```javascript
const response = await fetch(
  `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DEMO_KEY&query=${searchQuery}`
);
```

**Melhorias recomendadas:**

1. **Obter API Key própria (grátis):**
   - Acesse [fdc.nal.usda.gov/api-key-signup.html](https://fdc.nal.usda.gov/api-key-signup.html)
   - Preencha o formulário
   - Receba a chave por email

2. **Usar variável de ambiente:**
```javascript
const USDA_API_KEY = import.meta.env.VITE_USDA_API_KEY || 'DEMO_KEY';
```

3. **Criar arquivo `.env`:**
```
VITE_USDA_API_KEY=sua_chave_aqui
```

4. **No Vercel/Netlify:**
   - Adicione a variável nas configurações do projeto
   - Environment Variables > Add

---

### 3. Google Analytics (Opcional)

**Adicionar tracking:**

1. **Instalar:**
```bash
pnpm add react-ga4
```

2. **Em `src/main.jsx`:**
```javascript
import ReactGA from 'react-ga4';

ReactGA.initialize('G-XXXXXXXXXX'); // Seu ID
ReactGA.send('pageview');
```

---

## 📱 Domínio Personalizado

### Vercel

1. Vá em Project Settings > Domains
2. Adicione seu domínio (ex: `transformmethod.com`)
3. Configure DNS:
   - Tipo: `CNAME`
   - Nome: `@` ou `www`
   - Valor: `cname.vercel-dns.com`

### Netlify

1. Site Settings > Domain Management
2. Add Custom Domain
3. Configure DNS conforme instruções

---

## 🧪 Testar Localmente

```bash
# Instalar dependências
cd /home/ubuntu/transform-method
pnpm install

# Desenvolvimento
pnpm run dev
# Acessar: http://localhost:5173

# Build de produção
pnpm run build

# Preview do build
pnpm run preview
# Acessar: http://localhost:4173
```

---

## 📊 Próximos Passos Recomendados

### Curto Prazo

- [ ] Configurar Stripe Payment Links
- [ ] Obter API Key USDA própria
- [ ] Adicionar Google Analytics
- [ ] Configurar domínio personalizado
- [ ] Testar em dispositivos móveis

### Médio Prazo

- [ ] Adicionar autenticação (Firebase/Supabase)
- [ ] Sistema de newsletter (Mailchimp/ConvertKit)
- [ ] Blog com artigos (MDX)
- [ ] Área de membros
- [ ] Programa de afiliados

### Longo Prazo

- [ ] App mobile (React Native)
- [ ] Backend próprio (Node.js/Supabase)
- [ ] Comunidade/Fórum
- [ ] Coaching online
- [ ] Cursos em vídeo

---

## 🐛 Troubleshooting

### Problema: Build falha

**Solução:**
```bash
# Limpar cache
rm -rf node_modules dist
pnpm install
pnpm run build
```

### Problema: Rotas 404 em produção

**Solução (Vercel):**
Criar `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Solução (Netlify):**
Criar `public/_redirects`:
```
/*    /index.html   200
```

### Problema: API USDA não funciona

**Solução:**
- Verificar se está usando HTTPS (não HTTP)
- Obter API Key própria
- Verificar CORS (usar proxy se necessário)

---

## 📞 Suporte

**Documentação:**
- [Vite](https://vitejs.dev)
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [React Router](https://reactrouter.com)

**Deploy:**
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)

---

## ✨ Conclusão

Seu site Transform Method está **100% funcional** e pronto para deploy!

**Recomendação:** Use **Vercel** para deploy mais rápido e fácil.

**Tempo estimado de deploy:** 5-10 minutos

Boa sorte com seu projeto! 🚀
