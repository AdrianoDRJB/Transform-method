# Checkout do Team: cobranca unica de $259 no dia 31

Como funciona
1. O botao do /team abre `/api/team-checkout` (arquivo `api/team-checkout.js`).
2. A funcao cria um checkout do Stripe em modo "setup": salva o cartao, nao cobra nada hoje e nao cria assinatura.
3. O cliente volta para `/team/welcome` (a conversao do Google continua igual).
4. Uma tarefa agendada ("Team 259: cobrar uma vez no dia 31") cobra $259 uma unica vez, 30 dias depois, no cartao salvo.
5. Se qualquer coisa falhar na funcao (sem chave, erro do Stripe), o cliente vai para o link de pagamento antigo. A venda nunca fica sem destino.

Para ligar (so voce pode fazer, 5 minutos)
1. Stripe > Desenvolvedores > Chaves de API > "Criar chave restrita". Permissao unica: **Checkout Sessions: Write**.
2. Vercel > projeto > Settings > Environment Variables > nome `STRIPE_SECRET_KEY`, valor = a chave (rk_live_...). Marque Production e Preview.
3. Faca o merge do pull request e espere o deploy terminar.
4. Teste: abra adrianonutrition.com/team, clique no botao e confira o texto abaixo do botao de pagar.

Cancelar um cliente antes do dia 31
No Stripe, abra o cliente e coloque o metadado `team259_status` = `cancelled` (ou apague o cliente). A tarefa pula esse cliente.

Sem a chave configurada o site continua funcionando pelo link antigo, mas o texto da pagina /team ja diz "nao e assinatura". Por isso so faca o merge depois de colocar a chave.
