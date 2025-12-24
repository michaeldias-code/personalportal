import React, { useState } from 'react';
import { Search, ExternalLink, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const projects = [
    { id: 1, title: 'Sistemas', category: 'programacao', tags: ['React', 'Node.js'], link: '#' },
    { id: 2, title: 'Jogos', category: 'jogos', tags: ['Unity', 'C#'], link: '#' },
    { id: 3, title: 'Utilidades', category: 'ferramentas', tags: ['Python'], link: '#' },
    { id: 4, title: 'Composição Musical', category: 'musica', tags: ['Ableton', 'MIDI'], link: '#' },
    { id: 5, title: 'Análise de Vulnerabilidades', category: 'seguranca', tags: ['Penetration Test'], link: '#' },
    { id: 6, title: 'Web Scraper', category: 'dataminer', tags: ['Python', 'BeautifulSoup'], link: '#' },
  ];

  const categories = [
    { id: 'todos', name: 'Todos', count: projects.length },
    { id: 'jogos', name: 'Jogos', count: projects.filter(p => p.category === 'jogos').length },
    { id: 'ferramentas', name: 'Ferramentas', count: projects.filter(p => p.category === 'ferramentas').length },
    { id: 'musica', name: 'Música', count: projects.filter(p => p.category === 'musica').length },
    { id: 'seguranca', name: 'Segurança da Informação', count: projects.filter(p => p.category === 'seguranca').length },
    { id: 'dataminer', name: 'Análise de Dados', count: projects.filter(p => p.category === 'dataminer').length },
    { id: 'programacao', name: 'Programação', count: projects.filter(p => p.category === 'programacao').length },
    { id: 'outros', name: 'Outros', count: projects.filter(p => p.category === 'outros').length },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'todos' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section com foto à direita */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Conteúdo à esquerda */}
            <div>
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                Disponível para projetos
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Olá, eu sou<br />
                <span className="text-blue-600">Michael Dias</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Exploro ideias através de tecnologia e design. 
                Aqui você encontra projetos, experimentos e algumas reflexões sobre o que ando construindo.
              </p>

              {/* Links sociais discretos */}
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Foto à direita - sutil e elegante */}
            <div className="flex justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl transform rotate-3"></div>
                <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-2 border-white shadow-xl">
                  <img 
                    /*src="https://via.placeholder.com/400x500"*/
					src="/src/foto.jpg"
                    alt="Foto" 
                    className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Barra de pesquisa e filtros */}
      <section className="border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Busca */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar projetos, tecnologias..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Categorias */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat.name}
                <span className="ml-2 text-xs opacity-75">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de projetos */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <a
              key={project.id}
              href={project.link}
              className="group block bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                  {project.title.charAt(0)}
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Nenhum projeto encontrado com esses critérios.</p>
          </div>
        )}
      </section>

      {/* Seção "Sobre" sutil */}
      <section className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Um pouco sobre o que faço</h2>
            <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              Trabalho na interseção entre tecnologia e criatividade, sempre buscando formas 
              de transformar ideias complexas em soluções simples e elegantes.
            </p>
            <p>
              Minha abordagem é exploratória e iterativa - acredito que os melhores projetos 
              surgem da experimentação contínua e da atenção aos detalhes.
            </p>
            <p>
              Quando não estou codificando, você provavelmente me encontrará explorando novas 
              tecnologias, lendo sobre design ou contribuindo com comunidades open source.
            </p>
          </div>

          <div className="mt-12 text-center">
            <a
              href="mailto:michaelrpdias@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Entrar em contato
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer minimalista */}
      <footer className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Michael Dias. Construído com atenção aos detalhes.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">GitHub</a>
              <a href="#" className="hover:text-blue-600 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}