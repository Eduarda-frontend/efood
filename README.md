# 🍔 Efood – Plataforma de Restaurantes e Delivery

Aplicação web para exibição de cardápios e simulação de pedidos em restaurantes. Construída com foco em boas práticas de Front‑end, usabilidade e performance.

---

## 📚 Sumário

* [✨ Funcionalidades](#-funcionalidades)
* [✅ Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [🏗️ Arquitetura & Estrutura de Pastas](#️-arquitetura--estrutura-de-pastas)
* [🚧 Desenvolvimento & Boas Práticas](#-desenvolvimento--boas-pr%C3%A1ticas)
* [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
* [📦 Scripts Disponíveis](#-scripts-disponíveis)
* [🛒 Carrinho e Modal](#-carrinho-e-modal)  
* [🔌 API e Endpoints](#-api-e-endpoints)  
* [🌐 Deploy](#-deploy)  
* [👨‍💻 Autor](#-autor)

---

## ✨ Funcionalidades

* Navegação entre páginas: Home e Menu.
* Carrinho de compras com exibição
* Apresentação do prato exibido em modal flutuante
* Listagem de restaurantes e pratos com filtros por categorias.
* Simulação de carrinho de compras.
* Resposta visual responsiva para desktop e mobile.
* Consumo de dados via API com chamadas AJAX.

---

## 📸 Capturas de Tela

### 🏠 Página Inicial
[Página inicial] ![Captura de tela 2025-06-28 084358](https://github.com/user-attachments/assets/cfa1104b-1554-4886-9ae0-7bd2ea5dc599)

### 🍽️ Página de Cardápio
[Página do cardápio] ![Captura de tela 2025-06-28 084421](https://github.com/user-attachments/assets/e764281b-51c1-42b7-8f4b-616b7ea44829)

### 🛒  Carrinho
[Carrinho] ![Captura de tela 2025-06-28 084442](https://github.com/user-attachments/assets/9baa2842-6e55-449d-aa39-5f5188d4a2bf)


### 🪟 Modal
[Modal] ![Captura de tela 2025-06-28 084432](https://github.com/user-attachments/assets/5c8b3e63-a419-4d20-8a2c-027b43f319f1)

---

## ✅ Tecnologias Utilizadas

* **React 18** + **TypeScript**
* **React Router DOM** para navegação
* **Redux** para gerenciamento de estado
* **Formik** e **Yup** para aplicação da lógica nos formulários
* **Styled Components** para estilização CSS-in-JS
* **ESLint** para padronização de código
* **Fetch/AJAX** para requisição de dados
* Utilização de **Git** com controle de versão via GitHub (e histórico limpo)

---

## 🏗️ Arquitetura & Estrutura de Pastas

Estrutura:

```
efood/
├── src/
│   ├── assets/           # Imagens e recursos estáticos
│   ├── components/       # Botões, cards, header, footer, etc
│   ├── pages/            # Rotas como Homee Menu
│   ├── services/         # Requisições API
│   ├── store/            # Gerenciamento de estado
│   ├── Tag/              # Componente
│   ├── utils/            # Utils como formatação de preço
│   ├── App.tsx           # Configuração de rotas e contexto
│   ├── main.tsx/
│   ├── routes.tsx        # Rotas de navegação
│   ├── styles.tsx        # Global e módulos Styled Components
│   └──vite-env.d.ts 
├── .eslint.config.js
├── index.html
├── package-lock.json   
├── package.json
├──  README.md
├── tsconfig.app.json
├── tsconfig.json
├── vite.config.json
└── tsconfig.node.json
```

---

## 🚧 Desenvolvimento & Boas Práticas

* Projeto desenvolvido por **Maria Eduarda Soares Silva Rezende** (junior front‑end) [www.linkedin.com/in/eduarda-rezende-front](https://www.linkedin.com/in/eduarda-rezende-front)  
* Enfrentou o desafio de **fazer requisições API**, garantindo que dados fossem exibidos corretamente com retries e tratamento de erros;
* Uso de **Styled Components** para manter CSS modular, organizado e tematizado
* Ferramentas de qualidade de código (ESLint) aplicadas no pipeline.
* Uso de **Git para versionamento**, repositório limpo com commits semânticos.

---

## 🚀 Como Executar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/Eduarda-frontend/efood.git
   cd efood
   ```
2. Instale dependências:

   ```bash
   npm install
   ```
3. Inicie o servidor local:

   ```bash
   npm run dev
   ```
4. Acesse em `http://localhost:3000`

---

## 📦 Scripts Disponíveis

* `npm run dev` – Inicia modo de desenvolvimento
* `npm run build` – Empacota para produção
* `npm run lint` – Executa ESLint

---

##  🛒 Carrinho e Modal

O carrinho é exibido em um modal lateral, acessível em qualquer página. Os itens adicionados ao carrinho permanecem visíveis até que o usuário finalize ou feche o modal.

* Funcionalidades do Carrinho:
* Adicionar/remover pratos
* Cálculo automático do total
* Responsivo e acessível por teclado
* Exibição modal com animação

---

##  🔌 API e Endpoints

A aplicação consome dados estáticos de um backend simulado, estruturado como um mock de API utilizando JSON (ex: via `json-server`). Isso permite simular requisições reais mesmo sem um backend completo.

📍 Endpoints principais:

### 🏠 Restaurantes

`GET /restaurantes` - Retorna a lista de restaurantes, incluindo:

* `id`, `titulo`, `tipo`, `avaliacao`, `escricao`, `capa`, `destacado`, `cardapio`: array de pratos disponíveis no restaurante

### 🍽️ Pratos por Restaurante

`GET /restaurantes/:id` - Retorna detalhes de um restaurante específico e seu cardápio.

📌 Observação: o carrinho é gerenciado inteiramente no front-end (React) e armazenado localmente na sessão do usuário, sem persistência em banco de dados nesta versão.

📁 Exemplo de resposta para /`restaurantes`

```
[
  {
    "id": 1,
    "titulo": "La Dolce Vita",
    "tipo": "Italiana",
    "avaliacao": 4.8,
    "descricao": "Especialidades italianas clássicas...",
    "capa": "/imagens/italiana.png",
    "destacado": true,
    "cardapio": [
      {
        "id": 101,
        "nome": "Spaghetti alla Carbonara",
        "descricao": "Massa ao molho de ovos, queijo...",
        "foto": "/imagens/carbonara.png",
        "preco": 45
      }
    ]
  }
]

``` 

## 🌐 Deploy

Hospedado via **Vercel** (deploy automático em cada push). Estatisticamente rápido e otimizado.

---

## 👨‍💻 Autor

**Maria Eduarda Soares Silva Rezende**

* GitHub: [Eduarda-frontend](https://github.com/Eduarda-frontend)
