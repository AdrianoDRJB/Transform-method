# 🏋️ Transform Method - Site Oficial

> Um sistema completo e baseado em ciência para transformação total de vida.

[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.7-38B2AC)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## 📋 Sobre o Projeto

O **Transform Method** é um manual completo e baseado em ciência para transformação total de vida. Este site apresenta o método de 9 passos que combina neurociência, psicologia comportamental e experiência do mundo real para criar mudanças duradouras.

### ✨ Funcionalidades

- 🏠 **Landing Page** - Apresentação do método TRANSFORM
- 📖 **The Method** - 9 passos detalhados com fundamentos científicos
- 🧮 **Calculadora de Calorias** - Sistema métrico/imperial com 3 fórmulas
- 📊 **Macro Tracker** - Busca em 350k+ alimentos via API USDA
- 📚 **Loja de eBooks** - 4 eBooks com sistema de paywall Stripe

## 🚀 Tecnologias

- **Frontend:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Styling:** Tailwind CSS 4.1.7
- **Router:** React Router 7.6.1
- **UI Components:** shadcn/ui (50+ componentes)
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod
- **API:** USDA FoodData Central

## 📦 Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/transform-method.git

# Entrar no diretório
cd transform-method

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev
```

O site estará disponível em `http://localhost:5173`

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
pnpm run dev

# Build de produção
pnpm run build

# Preview do build
pnpm run preview

# Lint
pnpm run lint
```

## 📁 Estrutura do Projeto

```
transform-method/
├── public/
│   ├── ebooks/              # PDFs dos eBooks
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── HomePage.jsx
│   │   ├── AboutMethod.jsx
│   │   ├── CalorieCalculator.jsx
│   │   ├── MacroTracker.jsx
│   │   ├── EbooksPage.jsx
│   │   └── ui/              # Componentes shadcn
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🌐 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/seu-usuario/transform-method)

1. Conecte seu repositório GitHub
2. Configure:
   - **Framework:** Vite
   - **Build Command:** `pnpm run build`
   - **Output Directory:** `dist`
3. Deploy!

### Netlify

1. Build: `pnpm run build`
2. Publish directory: `dist`
3. Adicione `_redirects` em `public/`:
   ```
   /*    /index.html   200
   ```

## ⚙️ Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz:

```env
# API USDA (opcional - usa DEMO_KEY por padrão)
VITE_USDA_API_KEY=sua_chave_aqui

# Google Analytics (opcional)
VITE_GA_ID=G-XXXXXXXXXX
```

### Stripe Integration

Para ativar os pagamentos dos eBooks, configure os Payment Links no arquivo `src/components/EbooksPage.jsx`:

```javascript
const stripeLinks = {
  'environment-habits': 'https://buy.stripe.com/SEU_LINK',
  'nutrition-myths': 'https://buy.stripe.com/SEU_LINK',
  'resilient-mind': 'https://buy.stripe.com/SEU_LINK',
  'emotional-mastery': 'https://buy.stripe.com/SEU_LINK',
  'bundle': 'https://buy.stripe.com/SEU_LINK'
};
```

## 📱 Páginas

### 1. Home (`/`)
Landing page com apresentação do método, benefícios e depoimento.

### 2. The Method (`/method`)
Explicação detalhada dos 9 passos do método TRANSFORM com fundamentos científicos.

### 3. Calculator (`/calculator`)
Calculadora de calorias e macros com:
- Sistema métrico e imperial
- 3 fórmulas (Mifflin-St Jeor, Katch-McArdle, Adjusted)
- Níveis de atividade
- Objetivos (perder/manter/ganhar peso)

### 4. Macro Tracker (`/tracker`)
Sistema de tracking nutricional com:
- Busca em 350k+ alimentos (USDA API)
- Tracking de macros e calorias
- Metas diárias personalizáveis
- Persistência em localStorage

### 5. eBooks (`/ebooks`)
Loja de eBooks com:
- 4 eBooks individuais ($9.99 cada)
- Bundle completo ($29.99)
- Sistema de paywall com Stripe
- Download após compra

## 🎨 Customização

### Cores

Edite `src/index.css` para alterar o tema:

```css
@theme {
  --color-primary: oklch(0.6 0.25 250);
  --color-secondary: oklch(0.5 0.2 280);
}
```

### Componentes UI

Os componentes shadcn/ui estão em `src/components/ui/`. Customize conforme necessário.

## 📊 Performance

- ⚡ **Lighthouse Score:** 95+
- 📦 **Bundle Size:** ~320KB (gzipped: ~97KB)
- 🚀 **First Contentful Paint:** <1s
- 🎯 **Time to Interactive:** <2s

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👤 Autor

**Transform Method Team**

- Website: [transformmethod.com](https://transformmethod.com)
- GitHub: [@seu-usuario](https://github.com/seu-usuario)

## 🙏 Agradecimentos

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [USDA FoodData Central](https://fdc.nal.usda.gov)
- [Lucide Icons](https://lucide.dev)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
