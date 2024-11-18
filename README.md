# Projeto de Plataforma de Fidelização e Gamificação

**Cliente:** PlugowTech

**Objetivos do projeto:** 
- Desenvolver uma plataforma de gamificação direcionada à fidelização de profissionais nas áreas de arquitetura, engenharia, design e construção, utilizando métodos de incentivo para fortalecer o engajamento e a participação desses profissionais.
- Promover parcerias estratégicas e incentivar a recorrência de compras nas lojas parceiras, criando um ecossistema de fidelidade onde profissionais podem acumular pontos e resgatar recompensas.
- Estabelecer a plataforma como um elo entre profissionais e fornecedores, facilitando a fidelização e retenção dos profissionais e ampliando as oportunidades de parceria e crescimento no setor.

**Links do projeto:**
- Figma: https://www.figma.com/design/aVS1a4ZKe3MNysV0vikc7G/PlugowTech?node-id=102-638&node-type=canvas&t=RxaXQ94d9AXL5BZu-0
- Canva: https://www.canva.com/design/DAGVbRCEQOY/fjmZj6aYsPCUbyF1yaHkGg/edit?utm_content=DAGVbRCEQOY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton                                                                            
- Notion: https://www.notion.so/95651e770d4d44e7847dccf00f21159f?v=1365c7e1798380839f13000c02b0f8ea&pvs=4     
- GitHub: https://github.com/elasoares/plugowTech

##
### Backend (Django): Organizando os aplicativos por funcionalidade

Com base nos requisitos do cliente, os aplicativos (apps) criados no projeto Django foram os seguintes:

**a) Core:**

Responsável pelas funcionalidades centrais e compartilhadas, como:
- Página inicial pública (home.html).
- Gerenciamento de templates gerais e estáticos.
- Configurações globais, como termos de uso, privacidade, ou suporte.

**b) Usuarios:**

Gerencia os usuários do sistema, suas informações e perfis. Inclui:
- Cadastro e autenticação (Profissionais, Consultores, Clientes).
- Gestão de dados específicos, como CPF, profissão, registro profissional, e data de aniversário.
- Dashboard personalizado.

**c) Lojas:**

Focado no cadastro e gerenciamento das lojas parceiras. Inclui:
- Cadastro de lojas.
- Visualização e manutenção das informações das lojas (endereço, contato, etc.).
- Listagem para consulta.

**d) Pontos:**

Gerencia o acúmulo, histórico e validade de pontos. Inclui:
- Registro de transações de pontos.
- Validade dos pontos (18 meses padrão, configurável).
- Relatórios e visualização do saldo.

**e) Recompensas:**

Focado no catálogo e resgate de recompensas. Inclui:
- Cadastro e gestão de experiências (viagens, workshops, cashbacks, etc.).
- Resgate de pontos por recompensas.
- Histórico de resgates realizados.

**f) Notificacoes:**

Gerencia as notificações e campanhas de comunicação do sistema. Inclui:
- Envio de notificações por e-mail, SMS ou WhatsApp.
- Configuração de campanhas promocionais (ex.: Acelera Partnership).
- Histórico e relatórios de notificações enviadas.

![image](https://github.com/user-attachments/assets/dee05ca3-a57b-4a23-8b04-65540e6afbc4)

