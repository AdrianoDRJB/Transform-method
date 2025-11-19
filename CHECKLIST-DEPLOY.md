# ✅ Checklist de Deploy - Transform Method

Use esta checklist para garantir que tudo está configurado antes do deploy.

## 📋 Pré-Deploy

### Código e Configuração

- [x] ✅ Projeto reimplementado completamente
- [x] ✅ Todas as 5 páginas funcionando
- [x] ✅ Build de produção testado (`pnpm run build`)
- [x] ✅ Navegação responsiva (desktop/mobile)
- [x] ✅ localStorage funcionando
- [ ] ⚠️ Configurar Stripe Payment Links
- [ ] ⚠️ Obter API Key USDA própria
- [ ] ⚠️ Adicionar Google Analytics (opcional)

### Arquivos Criados

- [x] ✅ `README.md` - Documentação do projeto
- [x] ✅ `GUIA-DEPLOY-COMPLETO.md` - Guia de deploy detalhado
- [x] ✅ `CHECKLIST-DEPLOY.md` - Esta checklist
- [x] ✅ `.gitignore` - Arquivos ignorados pelo Git
- [x] ✅ `.env.example` - Exemplo de variáveis de ambiente
- [x] ✅ `vercel.json` - Configuração Vercel
- [x] ✅ `public/_redirects` - Configuração Netlify

### Conteúdo

- [x] ✅ 4 PDFs de eBooks em `public/ebooks/`
- [x] ✅ Favicon configurado
- [x] ✅ Textos revisados
- [x] ✅ Links funcionando

---

## 🚀 Deploy

### Opção 1: Vercel (Recomendado)

- [ ] Criar conta no [Vercel](https://vercel.com)
- [ ] Criar repositório no GitHub
- [ ] Push do código para GitHub
- [ ] Importar projeto no Vercel
- [ ] Configurar variáveis de ambiente (se necessário)
- [ ] Deploy automático
- [ ] Testar site em produção
- [ ] Configurar domínio personalizado (opcional)

### Opção 2: Netlify

- [ ] Criar conta no [Netlify](https://netlify.com)
- [ ] Build local: `pnpm run build`
- [ ] Deploy via drag-and-drop ou GitHub
- [ ] Configurar variáveis de ambiente (se necessário)
- [ ] Testar site em produção
- [ ] Configurar domínio personalizado (opcional)

### Opção 3: GitHub Pages

- [ ] Atualizar `base` em `vite.config.js`
- [ ] Build e push para branch `gh-pages`
- [ ] Ativar GitHub Pages nas configurações
- [ ] Testar site em produção

---

## 🔧 Pós-Deploy

### Configurações Essenciais

- [ ] **Stripe Payment Links**
  - [ ] Criar 5 produtos no Stripe
  - [ ] Gerar Payment Links
  - [ ] Atualizar `src/components/EbooksPage.jsx`
  - [ ] Testar compra em modo teste
  - [ ] Ativar modo produção

- [ ] **API USDA**
  - [ ] Obter API Key em [fdc.nal.usda.gov](https://fdc.nal.usda.gov/api-key-signup.html)
  - [ ] Adicionar em variáveis de ambiente
  - [ ] Testar busca de alimentos

- [ ] **Analytics (Opcional)**
  - [ ] Criar propriedade no Google Analytics
  - [ ] Adicionar código de tracking
  - [ ] Verificar eventos

### SEO e Performance

- [ ] **Meta Tags**
  - [ ] Título da página
  - [ ] Descrição
  - [ ] Open Graph (Facebook/LinkedIn)
  - [ ] Twitter Cards
  - [ ] Favicon

- [ ] **Performance**
  - [ ] Testar Lighthouse Score
  - [ ] Otimizar imagens (se necessário)
  - [ ] Verificar tempo de carregamento
  - [ ] Testar em dispositivos móveis

- [ ] **SEO**
  - [ ] Sitemap.xml
  - [ ] Robots.txt
  - [ ] Google Search Console
  - [ ] Bing Webmaster Tools

### Segurança

- [ ] SSL/HTTPS ativado (automático Vercel/Netlify)
- [ ] Headers de segurança configurados
- [ ] CORS configurado (se necessário)
- [ ] Rate limiting (se necessário)

---

## 📱 Testes

### Funcionalidades

- [ ] **Home**
  - [ ] Hero section carrega
  - [ ] Navegação funciona
  - [ ] Links funcionam
  - [ ] Responsivo

- [ ] **The Method**
  - [ ] 9 passos exibidos
  - [ ] Cards de ciência
  - [ ] Estatísticas
  - [ ] Responsivo

- [ ] **Calculator**
  - [ ] Toggle métrico/imperial
  - [ ] Cálculo de calorias
  - [ ] 3 fórmulas funcionam
  - [ ] Resultados corretos
  - [ ] Responsivo

- [ ] **Macro Tracker**
  - [ ] Busca USDA funciona
  - [ ] Adicionar alimentos
  - [ ] Remover alimentos
  - [ ] Metas personalizáveis
  - [ ] localStorage persiste
  - [ ] Responsivo

- [ ] **eBooks**
  - [ ] 4 eBooks exibidos
  - [ ] Bundle exibido
  - [ ] Botões de compra funcionam
  - [ ] Download funciona (após compra)
  - [ ] Responsivo

### Navegadores

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Dispositivos

- [ ] Desktop (1920x1080)
- [ ] Laptop (1366x768)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)

---

## 📊 Monitoramento

### Ferramentas Recomendadas

- [ ] **Uptime Monitoring**
  - [ ] UptimeRobot
  - [ ] Pingdom
  - [ ] StatusCake

- [ ] **Error Tracking**
  - [ ] Sentry
  - [ ] LogRocket
  - [ ] Rollbar

- [ ] **Analytics**
  - [ ] Google Analytics
  - [ ] Plausible
  - [ ] Fathom

---

## 🎯 Marketing e Lançamento

### Pré-Lançamento

- [ ] Testar todos os fluxos de usuário
- [ ] Preparar materiais de marketing
- [ ] Criar posts para redes sociais
- [ ] Preparar email de lançamento
- [ ] Configurar pixel do Facebook (opcional)

### Lançamento

- [ ] Anunciar nas redes sociais
- [ ] Enviar email para lista
- [ ] Postar em comunidades relevantes
- [ ] Criar anúncios (opcional)
- [ ] Monitorar feedback

### Pós-Lançamento

- [ ] Responder feedback
- [ ] Corrigir bugs reportados
- [ ] Otimizar conversão
- [ ] Adicionar novos recursos
- [ ] Atualizar conteúdo

---

## 📝 Notas

### Prioridades

**Alta:**
1. Deploy básico funcionando
2. Stripe configurado
3. API USDA com chave própria

**Média:**
4. Google Analytics
5. SEO otimizado
6. Domínio personalizado

**Baixa:**
7. Error tracking
8. Uptime monitoring
9. Marketing avançado

### Próximos Passos

Após completar esta checklist:

1. **Semana 1:** Monitorar métricas e corrigir bugs
2. **Semana 2-4:** Otimizar conversão e SEO
3. **Mês 2:** Adicionar novos recursos (blog, newsletter)
4. **Mês 3+:** Escalar marketing e vendas

---

## ✅ Status Final

- [x] Projeto reimplementado ✅
- [x] Build de produção funcionando ✅
- [x] Documentação completa ✅
- [ ] Deploy em produção ⏳
- [ ] Stripe configurado ⏳
- [ ] Testes completos ⏳

**Próximo passo:** Fazer deploy no Vercel! 🚀

---

**Última atualização:** 19/11/2025
