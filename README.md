# 📚 Book Garden — Sua Livraria Online Premium

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

O **Book Garden** é um e-commerce conceitual de livros projetado para oferecer uma experiência de navegação visualmente deslumbrante, fluida e intuitiva. Com uma curadoria especial de gêneros que vão de ficção científica a terror gótico, o site conecta o leitor às suas próximas grandes leituras por meio de um design moderno com estética aconchegante e refinada.

---

## 🎨 Identidade Visual & Design

O projeto segue um guia de estilo cuidadosamente planejado para remeter à sensação de uma biblioteca física aconchegante combinada com a sofisticação das interfaces modernas:

- **Paleta de Cores**: 
  - **Fundo**: Tons suaves de âmbar e creme (`bg-amber-50`) que reduzem o cansaço visual e simulam o papel envelhecido de páginas clássicas.
  - **Destaques**: Verde esmeralda escuro (`text-emerald-700` / `bg-emerald-600`) representando a vivacidade e o conceito de "jardim".
  - **Tipografia**: Uso integrado das fontes **Barlow** (para títulos marcantes e dinâmicos em caixa alta) e **Inter** (para textos corridos e legibilidade limpa).
- **Micro-interações**: Efeitos de zoom e transição ao passar o mouse em botões, links de navegação e nas capas dos livros, criando uma sensação de profundidade e feedback imediato para o usuário.

---

## ✨ Funcionalidades Principais

* 🎠 **Carrossel Hero Interativo**: Banners rotativos de alta definição com transições responsivas adequadas para telas de celulares e desktops de alta resolução.
* 🔍 **Busca em Tempo Real**: Campo de pesquisa inteligente integrado que permite filtrar livros por título ou autor simultaneamente à digitação.
* 🏷️ **Filtros por Gênero**: Navegação facilitada através de botões dinâmicos que listam os gêneros presentes no acervo (Ficção Científica, Fantasia, Romance, Suspense, Terror).
* 🏷️ **Livros em Destaque**: Identificação visual imediata de obras com selo especial de "★ Destaque" na página inicial.
* 💬 **Formulário de Contato**: Página de atendimento estruturada com campos validados para o envio de mensagens e dúvidas.
* 📱 **Layout 100% Responsivo**: Layout grid fluido adaptável desde telas pequenas (`xs:grid-cols-2`) até monitores ultra-wide (`lg:grid-cols-4`).

---

## 🛠️ Tecnologias Utilizadas

- **Next.js 16 (App Router)**: Framework para renderização híbrida, gerenciamento eficiente de rotas e otimização automatizada.
- **React 19**: Biblioteca de interfaces reativa baseada em componentes funcionais e hooks nativos (`useState`, `useRef`).
- **Tailwind CSS v4**: Processamento de estilos via CSS utility-first de alta performance.
- **Embla Carousel**: Biblioteca robusta e leve para a construção do carrossel com suporte a autoplay e arraste por toque.
- **Lucide React**: Biblioteca de ícones modernos e minimalistas em formato vetorial (SVG).

---

## 📦 Estrutura de Pastas

A organização do projeto segue a arquitetura de pastas recomendada pelo Next.js:

```text
Book-garden/
├── public/              # Arquivos estáticos servidos diretamente
│   ├── carrossel/       # Banners promocionais do carrossel principal
│   ├── logo/            # Logotipos institucionais da Book Garden
│   └── produtos/        # Imagens das capas de todos os livros catalogados
├── src/
│   ├── app/             # Rotas do Next.js (App Router)
│   │   ├── contato/     # Página de contato institucional e atendimento
│   │   ├── produtos/    # Página principal de busca e filtros de produtos
│   │   ├── globals.css  # Folha de estilos globais e variáveis de tema
│   │   ├── layout.tsx   # Estrutura base da página (HTML, Fontes, Metadados)
│   │   └── page.tsx     # Página inicial (Home) contendo destaques e carrossel
│   ├── components/      # Componentes reutilizáveis do sistema
│   │   ├── ui/          # Componentes menores e atômicos (ex: CardProduto)
│   │   ├── Header.tsx   # Cabeçalho global com menu de navegação responsivo
│   │   ├── Footer.tsx   # Rodapé global com dados institucionais e links rápidos
│   │   └── carrossel.tsx# Componente de controle do slider de banners
│   └── lib/             # Arquivos de configuração e utilidades internas
├── produtos.json        # Base de dados em formato JSON contendo o catálogo de livros
├── package.json         # Dependências do projeto, bibliotecas e scripts npm
└── tsconfig.json        # Arquivo de configuração do compilador TypeScript
```

---

## 🎨 Ajustes & Otimizações Realizadas Recentemente

Durante o ciclo recente de polimento da aplicação, focamos nos seguintes aspectos de refinamento estético e de código:

### 1. Ajuste e Exibição das Capas (`aspect-[3/4]`)
Anteriormente, os livros eram renderizados em proporção quadrada (`aspect-square`) e com corte centralizado (`object-cover`). Isso causava a perda de títulos e nomes dos autores nas artes das capas dos livros.
- **Solução**: Ajustamos a proporção nos arquivos [CardProduto.tsx](file:///c:/Users/SENAI%20DS%202025/Documents/ReactNext/Book-garden/src/components/ui/CardProduto.tsx) e [produtos/page.tsx](file:///c:/Users/SENAI%20DS%202025/Documents/ReactNext/Book-garden/src/app/produtos/page.tsx) para retrato (`aspect-[3/4]`). Agora a imagem é contida integralmente (`object-contain`), recebe uma borda suave e sombra projetada (`shadow-md`) para simular o volume tridimensional de um livro físico sobre a prateleira.

### 2. Correção de Metadados e Nome da Aba
O projeto possuía referências residuais de templates antigos na aba do navegador.
- **Solução**: Atualizamos o arquivo [layout.tsx](file:///c:/Users/SENAI%20DS%202025/Documents/ReactNext/Book-garden/src/app/layout.tsx) injetando o título semântico **"Book Garden — Sua Livraria Online"** e adicionando uma meta descrição otimizada para buscadores (SEO).

### 3. Redimensionamento do Cabeçalho (Header)
Para dar mais presença à marca e melhorar a legibilidade em telas grandes, o cabeçalho passou por melhorias:
- A altura útil da barra de navegação subiu de **h-16** (64px) para **h-20** (80px).
- A logo principal teve sua escala aumentada para **h-11**, mantendo o alinhamento centralizado.
- Os links de navegação tiveram as fontes aumentadas de `text-xs` para `text-sm`, ampliando a área clicável.

---

## 🚀 Como Iniciar o Projeto Localmente

### Pré-requisitos
Ter o **Node.js** (versão 18 ou superior) instalado em seu computador.

### Passo a Passo

1. **Clonar ou baixar** o repositório em sua máquina.
2. Abrir o terminal dentro da pasta raiz do projeto.
3. **Instalar as dependências do projeto**:
   ```bash
   npm install
   ```
4. **Executar o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```
5. **Visualizar o resultado**:
   Acesse no seu navegador o endereço [http://localhost:3000](http://localhost:3000).

### Compilar para Produção (Build)
Para testar a otimização máxima dos arquivos estáticos e verificar erros de sintaxe ou tipagem:
```bash
npm run build
```

---

## 📈 SEO & Boas Práticas Implementadas

- **Acessibilidade**: Imagens com atributos descritivos `alt` claros e botões móveis com tags de acessibilidade `aria-label` adequadas para leitores de tela.
- **Tags Semânticas**: Uso correto de elementos do HTML5 como `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>`, o que facilita a indexação por mecanismos de busca (Google, Bing, etc.).
- **Carregamento Otimizado**: Imagens de produtos utilizam a propriedade `loading="lazy"` nativa para carregar apenas as imagens que estão visíveis no campo de visão do usuário, economizando largura de banda e acelerando o tempo de carregamento da página.


Link da Vercel: https://bookgarden.vercel.app
