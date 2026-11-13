# Política de Privacidade — Lex Calendário

**Última atualização:** 25 de outubro de 2026

Esta Política explica como o **Lex Calendário** ("aplicativo") trata dados pessoais, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD), o Marco Civil da Internet (Lei nº 12.965/2014) e a Política de Dados do Usuário dos Serviços de API do Google.

O aplicativo é desenvolvido por **Carlos Alexandre Albuquerque Oliveira** ("desenvolvedor"), advogado, Belém/PA, Brasil.

## 1. Resumo

- O Lex Calendário **funciona no seu computador, sem conta e sem servidor do desenvolvedor**. Compromissos, clientes, processos, comunicações, anexos e configurações ficam gravados apenas no seu dispositivo (no macOS, em `~/Library/Application Support/Lex Calendário/dados`; no Windows e no Linux, em `Documentos/Lex Calendário/dados`). As cópias de segurança automáticas ficam em `Documentos/Lex Calendário/backups`.
- **O desenvolvedor não recebe, não vê e não armazena** os seus dados nem os dados dos seus clientes.
- Entrar com Google é **opcional** e serve **somente para sincronizar a sua agenda** com o Google Agenda.
- Não vendemos dados, não exibimos anúncios e não usamos rastreadores ou cookies de publicidade.

## 2. Quais dados são tratados e onde ficam

| Dado | Origem | Onde fica | Finalidade |
|---|---|---|---|
| Compromissos, prazos, checklists, comentários e anexos | Você | Seu computador | Funcionamento da agenda |
| Cadastro de clientes (nome, CPF/CNPJ, contatos, endereço) e processos | Você | Seu computador | Gestão do escritório |
| Eventos do Google Agenda | Conta Google que você conectar | Seu computador | Sincronização bidirecional da agenda |
| Endereço de e-mail da conta conectada | Google | Seu computador | Identificar a conta conectada |
| Tokens de acesso (OAuth) | Google | Seu computador, **criptografados** (AES-256-GCM) | Manter a sincronização ativa |
| Comunicações a clientes (e-mails, ofícios, mensagens) e seus anexos | Você | Seu computador | Envio e histórico do cliente |
| Dados da sua conta de e-mail de envio (servidor, usuário e senha de app) | Você | Seu computador, senha **criptografada** (AES-256-GCM) | Enviar, a seu pedido, e-mails aos seus clientes |
| Movimentações processuais | Sistemas públicos dos tribunais (TJPA, PJe, DataJud/CNJ) | Seu computador | Monitoramento processual e sugestões de prazos |

Na **versão web opcional** (quando hospedada por um escritório em servidor próprio), os mesmos dados ficam no banco de dados contratado por esse escritório, que passa a ser o responsável por eles.

## 3. Uso de dados das APIs do Google

Ao clicar em **Entrar com Google**, você autoriza o Lex Calendário a acessar o escopo `https://www.googleapis.com/auth/calendar.events` (ver e editar eventos da sua agenda) e seu endereço de e-mail.

- Esses dados são usados **exclusivamente** para exibir seus eventos do Google Agenda no Lex Calendário e para enviar ao Google Agenda os compromissos criados no Lex Calendário.
- Os dados ficam **somente no seu dispositivo**; não são transmitidos ao desenvolvedor nem a terceiros.
- Não usamos dados do Google para publicidade, para treinar modelos de inteligência artificial nem para qualquer finalidade alheia à sincronização da agenda.
- Nenhuma pessoa tem acesso a esses dados, exceto você.

**O uso e a transferência, pelo Lex Calendário, de informações recebidas das APIs do Google para qualquer outro aplicativo seguirão a [Política de Dados do Usuário dos Serviços de API do Google](https://developers.google.com/terms/api-services-user-data-policy), incluindo os requisitos de Uso Limitado.**


## 4. Inteligência artificial

As sugestões automáticas de prazos e audiências são feitas **no seu computador**, por regras próprias e, se você instalar, por um modelo de linguagem de código aberto executado localmente (Ollama). Nenhum texto é enviado a serviços externos de IA, salvo se você configurar expressamente um provedor externo.

## 4-A. Comunicações com clientes

Quando você envia um e-mail a um cliente pelo Lex Calendário, a mensagem e os anexos saem **da sua própria conta de e-mail** (servidor SMTP que você configurar, como Gmail, Outlook ou iCloud), diretamente do seu computador para o seu provedor. Mensagens de WhatsApp são abertas no WhatsApp para você enviar. O desenvolvedor não recebe nem armazena essas mensagens.

A geração de textos pela inteligência artificial usa, por padrão, um modelo de código aberto executado no seu computador (Ollama). Só há envio a um provedor externo de IA se você configurar expressamente um.

## 4-B. Gmail, convidados e outras instalações do Lex

- **Envio pelo Gmail:** se você conectar o Gmail, o Lex usa a permissão `gmail.send` apenas para enviar as mensagens que você mandar enviar (comunicações, avisos a responsáveis e comentários).
- **Respostas como comentários:** com a permissão `gmail.readonly`, o Lex lê **somente as conversas de e-mail que ele mesmo iniciou** (os e-mails de comentário) para registrar as respostas como comentários do compromisso. Nenhuma outra mensagem é lida, copiada ou armazenada.
- **Eventos com convidados:** para que a instalação do Lex de um convidado mostre os mesmos comentários, checklist, tipo e situação, esses dados acompanham o evento no Google Agenda (propriedades do evento visíveis aos convidados). Os comentários do convidado voltam ao organizador pela observação da resposta ao convite. Convide apenas quem deve ter acesso a essas informações.
- **Busca de processos e intimações:** as consultas por OAB, nome ou CPF são feitas no Diário de Justiça Eletrônico Nacional (DJEN/CNJ), que só contém publicações de processos públicos. O CPF não é enviado ao CNJ: serve para localizar a pessoa no seu cadastro e destacar publicações.

## 5. Compartilhamento com terceiros

Não compartilhamos dados. O aplicativo só se comunica, **a seu pedido**, com:

- **Google**, para sincronizar a agenda da conta que você conectar;
- **Tribunais e CNJ** (WebService do TJPA, PJe/MNI e API Pública do DataJud), enviando apenas o número do processo, para consultar movimentações públicas;
- **ViaCEP**, enviando apenas o CEP digitado, para preencher endereços;
- **o seu provedor de e-mail (Gmail ou outro)**, para entregar as comunicações que você enviar aos seus clientes;

Esses serviços têm políticas próprias de privacidade.

## 6. Segurança

- O servidor do aplicativo aceita conexões apenas do próprio computador (`127.0.0.1`).
- Tokens e senhas de integrações são criptografados com AES-256-GCM e uma chave gerada na sua instalação.

Recomendamos proteger o computador com senha, criptografia de disco (FileVault, BitLocker) e cópias de segurança (Configurações → Backup).

## 7. Retenção e exclusão

Os dados permanecem no seu computador até que você os apague. Para excluir tudo:

1. No app, menu com seu nome → **Sair do Lex Calendário**.
2. Apague a pasta de dados (no macOS, `~/Library/Application Support/Lex Calendário`; nos demais sistemas, `Documentos/Lex Calendário`) e a pasta `Documentos/Lex Calendário/backups`.
3. Revogue o acesso das contas conectadas:
   - Google: <https://myaccount.google.com/permissions>
   - Senha de app do e-mail de envio: revogue-a no seu provedor de e-mail

Desconectar uma conta em **Configurações → Integrações** apaga do seu computador os tokens dessa conta.

## 8. Seus direitos (LGPD, art. 18)

Como os dados ficam sob seu controle, você pode acessá-los, corrigi-los, exportá-los (backup completo, histórico de cada cliente em planilha ou PDF e agenda em `.ics`) e excluí-los diretamente no aplicativo. Para dúvidas sobre esta Política ou para exercer direitos perante o desenvolvedor, entre em contato diretamente com ele.

## 9. Dados de clientes do advogado

Ao cadastrar dados de clientes e de processos, **o escritório usuário é o controlador** desses dados perante a LGPD e o Código de Ética e Disciplina da OAB, cabendo-lhe a base legal, o sigilo profissional e o atendimento aos titulares. O Lex Calendário é a ferramenta que permite esse tratamento no próprio computador do usuário.

## 10. Crianças e adolescentes

O aplicativo é destinado a profissionais do Direito e não se dirige a menores de 18 anos.

## 11. Alterações

Esta Política pode ser atualizada. A versão vigente estará sempre neste endereço, com a data da última atualização, e o histórico de mudanças fica registrado no GitHub.

## 12. Contato

**Carlos Alexandre Albuquerque Oliveira** — Belém/PA, Brasil
Solicitações: diretamente ao desenvolvedor, pelo mesmo canal em que você recebeu o aplicativo.
