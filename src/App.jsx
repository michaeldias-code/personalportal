import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [language, setLanguage] = useState('pt');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translations = {
    pt: {
      available: 'Explorando novas ideias',
      hello: 'Olá, eu sou',
      description: 'Gerente de Sistemas em multinacional francesa. Apaixonado por tecnologia, desenvolvo projetos paralelos que exploram desde jogos educativos até ferramentas de produtividade e segurança.',
      searchPlaceholder: 'Buscar projetos, tecnologias...',
      all: 'Todos',
      aboutTitle: 'Sobre mim',
      aboutText1: 'Sou apaixonado por transformar ideias em realidade através do código. Como Gerente de Sistemas, lido diariamente com desafios complexos, e nos momentos livres canalizo essa experiência em projetos pessoais que exploram diferentes áreas da tecnologia.',
      aboutText2: 'Meu portfólio reflete essa diversidade: desde ferramentas práticas do dia a dia até jogos que estimulam o raciocínio lógico, passando por recursos musicais e soluções de segurança. Cada projeto é uma oportunidade de experimentar novas tecnologias e compartilhar conhecimento.',
      aboutText3: 'Acredito que a melhor forma de aprender é construindo. Seja explorando ciência de dados, desenvolvendo plataformas educacionais ou criando jogos clássicos, o importante é manter a curiosidade sempre ativa.',
      contact: 'Entre em contato',
      footer: 'Desenvolvido com React e Tailwind CSS.',
      noResults: 'Nenhum projeto encontrado.',
      home: 'Início',
      projects: 'Projetos',
      about: 'Sobre',
      viewProject: 'Ver projeto',
      comingSoon: 'Em breve',
    },
    en: {
      available: 'Exploring new ideas',
      hello: "Hi, I'm",
      description: 'Systems Manager at a French multinational. Technology enthusiast, I develop side projects ranging from educational games to productivity tools and security solutions.',
      searchPlaceholder: 'Search projects, technologies...',
      all: 'All',
      aboutTitle: 'About me',
      aboutText1: "I'm passionate about turning ideas into reality through code. As a Systems Manager, I deal with complex challenges daily, and in my free time I channel this experience into personal projects that explore different areas of technology.",
      aboutText2: 'My portfolio reflects this diversity: from practical everyday tools to games that stimulate logical thinking, through musical resources and security solutions. Each project is an opportunity to experiment with new technologies and share knowledge.',
      aboutText3: 'I believe the best way to learn is by building. Whether exploring data science, developing educational platforms, or creating classic games, the important thing is to keep curiosity always active.',
      contact: 'Get in touch',
      footer: 'Built with React and Tailwind CSS.',
      noResults: 'No projects found.',
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      viewProject: 'View project',
      comingSoon: 'Coming soon',
    }
  };

  const t = translations[language];

  const projects = [
    // Ferramentas
    { id: 1, title: language === 'pt' ? 'Comparador de Arquivos' : 'File Comparator', category: 'ferramentas', tags: ['React', 'Diff'], link: '#', status: 'active' },
    { id: 2, title: language === 'pt' ? 'Conversor Universal' : 'Universal Converter', category: 'ferramentas', tags: ['JavaScript', 'Utils'], link: '#', status: 'active' },
    
    // Jogos
    { id: 3, title: language === 'pt' ? 'Xadrez Online' : 'Online Chess', category: 'jogos', tags: ['React', 'Game Logic'], link: '#', status: 'active' },
    { id: 4, title: language === 'pt' ? 'Damas' : 'Checkers', category: 'jogos', tags: ['JavaScript', 'Canvas'], link: '#', status: 'active' },
    { id: 5, title: language === 'pt' ? 'Campo Minado' : 'Minesweeper', category: 'jogos', tags: ['React', 'Algorithms'], link: '#', status: 'active' },
    { id: 6, title: 'Sudoku', category: 'jogos', tags: ['React', 'Logic'], link: '#', status: 'active' },
    
    // Recursos Musicais
    { id: 7, title: language === 'pt' ? 'Editor de Partituras' : 'Score Editor', category: 'musica', tags: ['Web Audio', 'MIDI'], link: '#', status: 'active' },
    { id: 8, title: language === 'pt' ? 'Piano Virtual' : 'Virtual Piano', category: 'musica', tags: ['Web Audio', 'React'], link: '#', status: 'active' },
    { id: 9, title: language === 'pt' ? 'Metrônomo' : 'Metronome', category: 'musica', tags: ['JavaScript', 'Audio'], link: '#', status: 'active' },
    { id: 10, title: language === 'pt' ? 'Afinador' : 'Tuner', category: 'musica', tags: ['Web Audio API'], link: '#', status: 'active' },
    
    // Segurança
    { id: 11, title: language === 'pt' ? 'Top 10 Vulnerabilidades OWASP' : 'OWASP Top 10 Vulnerabilities', category: 'seguranca', tags: ['Security', 'Education'], link: '#', status: 'active' },
    { id: 12, title: language === 'pt' ? 'Analisador de Senhas' : 'Password Analyzer', category: 'seguranca', tags: ['Security', 'React'], link: '#', status: 'active' },
    
    // Idiomas
    { id: 13, title: language === 'pt' ? 'Teste de Inglês' : 'English Level Test', category: 'idiomas', tags: ['React', 'Education'], link: '#', status: 'active' },
    { id: 14, title: language === 'pt' ? 'Flashcards de Vocabulário' : 'Vocabulary Flashcards', category: 'idiomas', tags: ['React', 'Learning'], link: '#', status: 'soon' },
    
    // Cursos
    { id: 15, title: language === 'pt' ? 'Plataforma de Cursos' : 'Course Platform', category: 'cursos', tags: ['React', 'Education'], link: '#', status: 'soon' },
    
    // Ciência de Dados
    { id: 16, title: language === 'pt' ? 'Web Scraper' : 'Web Scraper', category: 'dados', tags: ['Python', 'BeautifulSoup'], link: '#', status: 'active' },
    { id: 17, title: language === 'pt' ? 'Visualizador de Dados' : 'Data Visualizer', category: 'dados', tags: ['D3.js', 'React'], link: '#', status: 'active' },
  ];

  const categories = [
    { id: 'todos', name: language === 'pt' ? 'Todos' : 'All', emoji: '📚', count: projects.length },
    { id: 'ferramentas', name: language === 'pt' ? 'Ferramentas' : 'Tools', emoji: '🔧', count: projects.filter(p => p.category === 'ferramentas').length },
    { id: 'jogos', name: language === 'pt' ? 'Jogos' : 'Games', emoji: '🎮', count: projects.filter(p => p.category === 'jogos').length },
    { id: 'musica', name: language === 'pt' ? 'Recursos Musicais' : 'Music Resources', emoji: '🎵', count: projects.filter(p => p.category === 'musica').length },
    { id: 'seguranca', name: language === 'pt' ? 'Segurança da Informação' : 'Information Security', emoji: '🔒', count: projects.filter(p => p.category === 'seguranca').length },
    { id: 'idiomas', name: language === 'pt' ? 'Idiomas' : 'Languages', emoji: '🌍', count: projects.filter(p => p.category === 'idiomas').length },
    { id: 'cursos', name: language === 'pt' ? 'Cursos' : 'Courses', emoji: '📖', count: projects.filter(p => p.category === 'cursos').length },
    { id: 'dados', name: language === 'pt' ? 'Ciência de Dados' : 'Data Science', emoji: '📊', count: projects.filter(p => p.category === 'dados').length },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'todos' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
      {/* Navbar elegante */}
      <nav className={`fixed top-0 w-full backdrop-blur-md z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 shadow-sm border-b border-gray-200' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Links de navegação */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.home}
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.projects}
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                {t.about}
              </a>
            </div>

            {/* Seletor de idioma */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                onClick={() => setLanguage('pt')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  language === 'pt'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  language === 'en'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Conteúdo à esquerda */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 text-sm font-medium">{t.available}</span>
              </div>
              
              <h1 className="text-6xl font-bold text-gray-900 leading-tight">
                {t.hello}<br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Michael Dias
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                {t.description}
              </p>

              {/* Links sociais */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="https://github.com/michaeldias-code/personalportal" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all shadow-md hover:shadow-lg"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/dias-michael/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a 
                  href="mailto:michaelrpdias@gmail.com"
                  className="group flex items-center gap-2 px-5 py-2.5 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">Email</span>
                </a>
              </div>
            </div>

            {/* Foto à direita */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative w-80 h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="/foto.jpg" 
                    alt="Michael Dias" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Barra de pesquisa e filtros */}
      <section id="projects" className="bg-white/50 backdrop-blur-sm border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          {/* Busca */}
          <div className="relative mb-8 max-w-2xl mx-auto">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-6 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm text-lg"
            />
          </div>

          {/* Categorias */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm hover:shadow-md ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <span className="text-lg">{cat.emoji}</span>
                <span>{cat.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === cat.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de projetos */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 overflow-hidden"
            >
              {/* Badge de status */}
              {project.status === 'soon' && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">
                  {t.comingSoon}
                </div>
              )}

              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-md group-hover:scale-110 transition-transform">
                  {project.title.charAt(0)}
                </div>
                {project.status === 'active' && (
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-xs font-medium rounded-full border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.status === 'active' && project.link !== '#' && (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md"
                >
                  {t.viewProject}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <p className="text-gray-500 text-xl">{t.noResults}</p>
          </div>
        )}
      </section>

      {/* Seção "Sobre" */}
      <section id="about" className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.aboutTitle}</h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p className="text-center md:text-left">{t.aboutText1}</p>
            <p className="text-center md:text-left">{t.aboutText2}</p>
            <p className="text-center md:text-left">{t.aboutText3}</p>
          </div>

          <div className="mt-16 text-center">
            <a
              href="mailto:michaelrpdias@gmail.com"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
            >
              {t.contact}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600">
              © 2025 <span className="font-semibold text-gray-900">Michael Dias</span>. {t.footer}
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/michaeldias-code/personalportal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/dias-michael/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                LinkedIn
              </a>
              <a href="mailto:michaelrpdias@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
