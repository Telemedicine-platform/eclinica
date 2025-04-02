# eClínica

## Visão Geral

eClínica é uma plataforma de telemedicina que conecta pacientes, médicos e instituições de saúde através de consultas online, agendamentos, pagamentos digitais e muito mais. A plataforma é composta por um frontend em React e um backend em Node.js com Express e MySQL.

## Funcionalidades

- **Teleconsulta**: Permite que pacientes agendem e realizem consultas médicas online.
- **Cadastro de Médicos**: Médicos podem se cadastrar na plataforma, fornecendo suas credenciais e especialidades.
- **Autenticação**: Sistema de login e registro para pacientes e médicos.
- **Agendamentos**: Pacientes podem agendar, cancelar e visualizar consultas.
- **Histórico Médico**: Armazena o histórico de consultas dos pacientes.

## Estrutura do Projeto

### Frontend

O frontend é construído com React e Vite, utilizando componentes funcionais e hooks para gerenciar o estado e os efeitos colaterais.

```plaintext
/eclinica 
│── frontend
│── └──/src                     → Pasta com arquivos principais do projeto  
│   ├──    ├── /assets              → Arquivos estáticos como imagens e ícones
│   ├──    ├── /components          → Componentes reutilizáveis da aplicação
│   │      │   ├── /header              → Componentes do cabeçalho
│   │      │   ├── /footer              → Componentes do rodapé
│   │      │   ├── /home_components     → Componentes da página inicial
│   │      │   ├── /loginEcadastro_components → Componentes de login e cadastro
│   │      │   ├── /dashboard            → Componentes do dashboard do médico
│   │      │   ├── /dashboard_paciente    → Componentes do dashboard do paciente
│   │      │   ├── /sobre_components      → Componentes da página sobre
│   │      │   ├── /pagamento      → Componentes da página de pagamento PIX
│   │      │   ├── /cards      → Componentes para notificações de erro ou sucesso
│   │      │   ├── /configuracoes_medico      → Componentes para configurar a conta do médico
│   │      │   ├── /configuracoes      → Componentes para configurar a conta do paciente
│   ├──    ├── /pages                → Páginas da aplicação
│   │      │   ├── Home.jsx              → Página inicial
│   │      │   ├── LoginECadastro.jsx    → Página de login e cadastro
│   │      │   ├── Dashboard.jsx         → Página do dashboard médico
│   │      │   ├── Dashboard_Paciente.jsx     → Página do dashboard paciente
│   │      │   ├── Cadastro_Medico.jsx   → Página de cadastro de médicos
│   │      │   ├── RedefinirSenha.jsx    → Página de redefinição de senha
│   │      │   ├── Sobre.jsx             → Página sobre
│   │      │   ├── Contato.jsx           → Página de contato
│   │      │   ├── _NotFound.jsx         → Página de erro 404
│   ├──    ├── /services            → Serviços que contêm funções auxiliares
│   │      │   └── authService.js       → Serviço de autenticação
│   ├──    ├── /styles              → Arquivos CSS para estilização dos componentes
│   │      │   └── global.css           → Estilos globais da aplicação
│   ├──    ├── App.jsx              → Componente principal da aplicação
│   ├──    ├── main.jsx             → Ponto de entrada da aplicação React
│   ├──    ├── main.css             → Estilos principais da aplicação
│   ├──    ├── vite.config.js       → Configuração do Vite
│   ├──    ├── .env                 → Variáveis de ambiente
│   └──    └── index.html           → Arquivo HTML principal
```

### Backend

O backend é construído com Node.js e Express, utilizando MySQL para armazenamento de dados.

```plaintext
/eclinica 
│── backend
│── └──/src                     → Pasta com arquivos principais do projeto  
│   ├──    ├── /config              → Configurações do projeto
│   │      │   ├── db.js            → Configuração da conexão com o banco de dados
│   │      │   └── jwt.js           → Configuração do JWT para autenticação
│   ├──    ├── /controllers         → Controladores que contêm a lógica de negócios
│   │      │   ├── appointmentController.js → Controlador de agendamentos
│   │      │   ├── authController.js        → Controlador de autenticação
│   │      │   └── userController.js        → Controlador de usuários
│   ├──    ├── /middlewares         → Middlewares para validação e autenticação
│   │      │   ├── authMiddleware.js       → Middleware de autenticação
│   │      │   └── validateMiddleware.js   → Middleware de validação
│   ├──    ├── /models              → Modelos que definem as estruturas de dados
│   │      │   ├── Appointment.js   → Modelo de agendamentos
│   │      │   └── User.js          → Modelo de usuários
│   ├──    ├── /routes              → Rotas da API
│   │      │   ├── appointmentRoutes.js → Rotas de agendamentos
│   │      │   ├── authRoutes.js        → Rotas de autenticação
│   │      │   └── userRoutes.js        → Rotas de usuários
│   ├──    ├── /services            → Serviços que contêm funções auxiliares
│   │      │   └── userService.js       → Serviço de usuários
│   ├──    ├── .env                 → Variáveis de ambiente
│   └──    └── app.js               → Arquivo principal da aplicação backend
```

## Configuração e Execução

### Pré-requisitos

- Node.js
- MySQL

### Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/seu-usuario/eclinica.git
   cd eclinica
   ```

2. Instale as dependências do frontend:

   ```sh
   cd frontend
   npm install
   ```

3. Instale as dependências do backend:
   ```sh
   cd ../backend
   npm install
   ```

### Configuração

1. Crie um arquivo `.env` no diretório `backend` com as seguintes variáveis:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=sua_senha
   DB_NAME=eclinica
   DB_PORT=3306
   JWT_SECRET=sua_chave_secreta
   JWT_EXPIRES_IN=1h
   ```

2. Crie um arquivo `.env` no diretório `frontend` com as seguintes variáveis:

   ```env
   VITE_API_URL="http://localhost:3001"
   REACT_APP_API_URL="http://localhost:3001/api/auth"
   ```

### Explicação para usar o banco de dados:



### Execução

1. Inicie o backend:

   ```sh
   cd backend
   npx nodemon app.js
   ```

2. Inicie o frontend:
   ```sh
   cd ../frontend
   npm run dev
   ```

Acesse a aplicação em `http://localhost:3000`.

### Projeto feito em grupo para a matéria database application, ciência da computação 3º semestre, Uninassau, Aracaju-SE - 2025
