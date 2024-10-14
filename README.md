# Boleto Manager

**Boleto Manager** é um aplicativo simples para gerenciar boletos, que permite adicionar, listar e marcar boletos como pagos. Também permite anexar comprovantes em PDF e visualizar o status dos boletos diretamente em um calendário.

## Funcionalidades

- Adicionar boletos com descrição, data de vencimento, status (pendente ou pago), e opção de anexar um PDF.
- Visualizar todos os boletos em um calendário, destacando os boletos pendentes.
- Notificações de boletos a vencer nos próximos 7 dias.
- Alterar o status de um boleto para "pago" e anexar um comprovante de pagamento.
- Exibir a lista de boletos do dia clicado no calendário.

## Instalação

### Pré-requisitos

- Node.js (>=12.0.0)
- npm ou yarn

### Passos

1. Clone o repositório:

```bash
bash
Copiar código
git clone https://github.com/omiguelgoulart/boleto-manager.git
```

1. Navegue até o diretório do projeto:

```bash
bash
Copiar código
cd boleto-manager

```

1. Instale as dependências:

```bash
bash
Copiar código
npm install
# ou
yarn install

```

1. Inicie o servidor de desenvolvimento:

```bash
bash
Copiar código
npm start

```

1. Abra o aplicativo em http://localhost:3000.

## Estrutura de Arquivos

A estrutura básica do projeto é a seguinte:

```bash
bash
Copiar código
/src
  ├── /components
  │   ├── BoletoForm.tsx        # Componente para o formulário de adicionar boletos
  │   ├── BoletoList.tsx        # Componente que exibe a lista de boletos
  │   ├── CalendarView.tsx      # Componente do calendário
  │   └── NotificationList.tsx  # Componente que exibe os boletos a vencer
  ├── BoletoManager.tsx         # Componente principal
  ├── index.tsx                 # Entrada principal do aplicativo
  └── App.tsx                   # Componente App que integra o projeto

```

## Como Usar

### Adicionar Boleto

1. Clique no botão **Adicionar Boleto**.
2. Preencha os campos de descrição, data de vencimento e status.
3. (Opcional) Anexe um arquivo PDF do boleto.
4. Clique em **Adicionar Boleto**.

### Marcar Boleto como Pago

1. Selecione uma data no calendário.
2. Se houver boletos pendentes, eles serão listados.
3. Clique em **Marcar como Pago** e, se necessário, faça upload de um comprovante em PDF.

### Visualizar Boletos

- Os boletos são exibidos no calendário. Você pode clicar em uma data para visualizar os boletos do dia.

## Tecnologias Usadas

- **React**: Biblioteca JavaScript para construção de interfaces.
- **React Calendar**: Componente de calendário para exibir boletos por data.
- **React Responsive Modal**: Componente de modal para adicionar e visualizar boletos.
- **Tailwind CSS**: Framework CSS utilitário para estilização rápida e responsiva.

## Melhorias Futuras

- Adicionar autenticação de usuários.
- Implementar armazenamento em banco de dados.
- Enviar notificações via email para boletos a vencer.
- Implementar a exportação de boletos em PDF.

## Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir um **pull request** ou relatar problemas no [issues](https://github.com/seu-usuario/boleto-manager/issues).

1. Fork este repositório.
2. Crie um branch para sua feature (`git checkout -b feature/sua-feature`).
3. Commit suas mudanças (`git commit -m 'Adicionar nova feature'`).
4. Envie para o branch (`git push origin feature/sua-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a MIT License.