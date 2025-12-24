# 📦 Portfolio Profissional - Arquivos Completos

## 🎯 Como usar:

1. Copie cada arquivo abaixo
2. Crie-os no GitHub conforme a estrutura
3. Deploy no Vercel

---

## 📁 Estrutura de pastas:

```
meu-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── index.css
    ├── main.jsx
    └── App.jsx
```

---

## 📄 **package.json**

```json
{
  "name": "portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "lucide-react": "^0.284.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.0.8",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16"
  }
}
```

---

## 📄 **vite.config.js**

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

---

## 📄 **tailwind.config.js**

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

## 📄 **postcss.config.js**

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

## 📄 **index.html**

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Meu Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 📄 **src/index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📄 **src/main.jsx**

```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## 📄 **src/App.jsx**

```javascript
import React, { useState } from 'react';
import { User, Briefcase, Code, Award, Mail, FileText, ChevronRight } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const sections = [
    { id: 'sobre', name: 'Sobre Mim', icon: User, description: 'Conheça minha trajetória' },
    { id: 'experiencia', name: 'Experiência', icon: Briefcase, description: 'Histórico profissional' },
    { id: 'projetos', name: 'Projetos', icon: Code, description: 'Trabalhos realizados' },
    { id: 'habilidades', name: 'Habilidades', icon: Award, description: 'Competências técnicas' },
    { id: 'curriculo', name: 'Currículo', icon: FileText, description: 'Baixar CV completo' },
    { id: 'contato', name: 'Contato', icon: Mail, description: 'Entre em contato' },
  ];

  const renderHome = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <header className="pt-20 pb-12">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="relative inline-block mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img 
                src="https://via.placeholder.com/400" 
                alt="Foto Profissional" 
                className="w-full h-full object-cover filter brightness-105 contrast-105"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Seu Nome Completo
          </h1>
          <p className="text-xl text-gray-600 mb-3 font-light">
            Cargo ou Área de Atuação Principal
          </p>
          <p className="text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Breve descrição profissional destacando sua expertise e objetivos. 
            Uma frase que captura sua essência profissional.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setCurrentPage(section.id)}
                className="group bg-white rounded-2xl p-8 text-left transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {section.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {section.description}
                </p>
              </button>
            );
          })}
        </div>

        <footer className="mt-20 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © 2024 Seu Nome. Todos os direitos reservados.
          </p>
        </footer>
      </main>
    </div>
  );

  const renderSection = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <button
          onClick={() => setCurrentPage('home')}
          className="mb-8 flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5 rotate-180 mr-2" />
          Voltar ao início
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-12 border border-gray-100">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            {sections.find(s => s.id === currentPage)?.name}
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed mb-6">
              Esta seção está pronta para você adicionar seu conteúdo.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg mt-8">
              <p className="text-gray-700 text-sm">
                💡 <strong>Dica:</strong> Personalize esta página com seu conteúdo específico. 
                Você pode adicionar textos, listas, links e muito mais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return currentPage === 'home' ? renderHome() : renderSection();
}
```

---

## 🚀 **Passos para criar no GitHub:**

### Opção A: Criar arquivo por arquivo
1. Vá em https://github.com/new
2. Crie repositório `meu-portfolio`
3. Para cada arquivo, clique em **Add file** → **Create new file**
4. Digite o caminho completo (ex: `src/App.jsx`)
5. Cole o conteúdo
6. Clique em **Commit changes**

### Opção B: Upload em massa
1. Crie uma pasta local com todos os arquivos
2. No GitHub, clique em **Add file** → **Upload files**
3. Arraste a pasta inteira
4. Commit

---

## 🎯 **Deploy no Vercel:**

1. Acesse https://vercel.com/new
2. Conecte seu GitHub
3. Selecione o repositório `meu-portfolio`
4. Framework Preset: **Vite**
5. Clique em **Deploy**
6. Aguarde 2-3 minutos
7. Seu site estará no ar! 🎉

---

## 📝 **Personalizações:**

- Trocar nome, cargo e descrição no `src/App.jsx`
- Adicionar sua foto (substitua a URL no código)
- Desenvolver cada seção aos poucos
- Customizar cores alterando as classes Tailwind

---

## ❓ **Dúvidas comuns:**

**Q: Como adicionar minha foto?**
A: Suba a foto no repositório GitHub (pasta `public/foto.jpg`) e mude a URL no código para `/foto.jpg`

**Q: Como editar o conteúdo das seções?**
A: Edite o arquivo `src/App.jsx` diretamente no GitHub ou localmente

**Q: O deploy falhou, o que fazer?**
A: Verifique se todos os arquivos estão na estrutura correta. O Vercel mostra logs de erro detalhados.