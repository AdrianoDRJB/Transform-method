# 🚀 Início Rápido - Transform Method

## ⚡ Deploy em 5 Minutos

### Opção 1: Vercel (Mais Fácil)

1. **Criar conta no Vercel:**
   - Acesse: https://vercel.com
   - Faça login com GitHub

2. **Fazer upload do código:**
   ```bash
   # No seu computador local
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/SEU-USUARIO/transform-method.git
   git push -u origin main
   ```

3. **Importar no Vercel:**
   - Clique em "Import Project"
   - Selecione o repositório
   - Deploy automático!

4. **Pronto!** 🎉
   - Seu site estará em: `https://transform-method.vercel.app`

---

## 🧪 Testar Localmente

```bash
# Instalar dependências
pnpm install

# Iniciar servidor
pnpm run dev

# Abrir: http://localhost:5173
```

---

## ⚙️ Configurações Essenciais

### 1. Stripe (Para vender eBooks)

Edite: `src/components/EbooksPage.jsx` (linha 59)

```javascript
// Substituir com seus Payment Links
const stripeUrl = `https://buy.stripe.com/SEU_LINK_AQUI`;
```

### 2. API USDA (Para Macro Tracker)

Criar arquivo `.env`:

```
VITE_USDA_API_KEY=sua_chave_aqui
```

Obter chave em: https://fdc.nal.usda.gov/api-key-signup.html

---

## 📚 Documentação Completa

- **README.md** - Visão geral do projeto
- **GUIA-DEPLOY-COMPLETO.md** - Guia detalhado de deploy
- **CHECKLIST-DEPLOY.md** - Checklist completo
- **RESUMO-REIMPLEMENTACAO.md** - Resumo executivo

---

## 🆘 Problemas?

### Build falha?
```bash
rm -rf node_modules
pnpm install
pnpm run build
```

### Rotas 404 em produção?
Criar `vercel.json` (já incluído):
```json
{
  "rewrites": [{"source": "/(.*)", "destination": "/"}]
}
```

---

## ✅ Checklist Rápido

- [ ] Deploy no Vercel
- [ ] Configurar Stripe
- [ ] Obter API Key USDA
- [ ] Testar todas as páginas
- [ ] Configurar domínio (opcional)

---

**Tempo estimado:** 5-10 minutos  
**Dificuldade:** Fácil ⭐

Boa sorte! 🚀
