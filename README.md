# 🌱 FluvIA — Interface Web (Protótipo)

---

## 💧 Sobre o Projeto
**FluvIA** é um protótipo de interface web inspirada em um aplicativo de **irrigação inteligente**.  
O sistema permite **monitorar plantas, visualizar gráficos de consumo de água e gerenciar dados locais** de forma simples e visual.  
Ele simula um app mobile utilizando **React + TypeScript**, com foco em uma **experiência fluida e responsiva**.

---

## 🧠 Principais Funcionalidades
- 🔐 **Login com persistência** via `localStorage`  
- 🏠 **Tela Home** com carrossel horizontal de plantas e gráfico (Recharts)  
- 🌿 **Plantas:** listagem, busca e adição dinâmica via modal  
- 📊 **Detalhes da planta** (`/plantas/:id`) com imagem, dados e gráfico individual  
- 👤 **Usuário:** editar nome e sair da conta  
- 📱 **Design responsivo**, simulando layout mobile  
- 📌 **TabBar fixa** com navegação principal  

---

## 🧩 Tecnologias Utilizadas
- ⚛️ **React + TypeScript**  
- 🌐 **React Router DOM**  
- 📊 **Recharts**  
- 🎨 **CSS puro (modularizado)**  
- 🔣 **Lucide-react (ícones)**  

---

## 📁 Estrutura do Projeto
```
src/
├─ assets/          # imagens e gráficos
├─ components/
│  └─ TabBar.tsx
├─ pages/
│  ├─ Home.tsx
│  ├─ Plants.tsx
│  ├─ Detalhes.tsx
│  ├─ Ia.tsx
│  ├─ User.tsx
│  └─ Login.tsx
├─ styles/
│  ├─ Home.css
│  ├─ Plants.css
│  └─ Ia.css
├─ App.tsx
└─ main.tsx
```

---

## ⚙️ Instalação e Execução

### 🔹 1. Clonar o repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd fluvia
```

### 🔹 2. Instalar dependências
```bash
npm install
# ou
yarn
```

### 🔹 3. Executar o projeto
```bash
npm run dev
# ou
yarn dev
```

Abra o navegador e acesse **http://localhost:5173**

---

## 🌿 Como Adicionar Novas Plantas

1. Coloque as imagens em `src/assets/`  
2. Importe-as no arquivo `Plants.tsx`  
3. Adicione um novo objeto no array `plantas`:

```ts
{
  id: 4,
  nome: "Nova Planta",
  imagem: novaPlanta,
  imagemInfo: novaPlantaInfo,
  ajusteText: "Ajuste automático em +15% de água",
  grafico: novaPlantaGraf,
  especie: "Nome científico",
  localizacao: "Lote Y",
  umidadeSolo: "42%",
  necessidade: "Moderada",
  irrigacao: "10:00 12/11"
}
```

---

## 📱 Modo Mobile
O layout foi otimizado para **modo mobile responsivo** e testado pelo **DevTools (F12)**.