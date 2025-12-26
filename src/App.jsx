import React, { useState, useEffect } from 'react';
import { Search, ExternalLink, Github, Linkedin, Mail, ArrowRight, Sparkles, Home as HomeIcon, Briefcase, User, X, Wrench, Gamepad2, Music, Shield, Globe, BookOpen, BarChart3 } from 'lucide-react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [language, setLanguage] = useState('pt');
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

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
      contactTitle: 'Vamos conversar?',
      contactSubtitle: 'Preencha o formulário abaixo e entrarei em contato o mais breve possível.',
      nameLabel: 'Nome',
      namePlaceholder: 'Seu nome completo',
      emailLabel: 'Email',
      emailPlaceholder: 'seu@email.com',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Conte-me sobre seu projeto ou dúvida...',
      sendButton: 'Enviar mensagem',
      sending: 'Enviando...',
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
      contactTitle: "Let's talk?",
      contactSubtitle: 'Fill out the form below and I will get back to you as soon as possible.',
      nameLabel: 'Name',
      namePlaceholder: 'Your full name',
      emailLabel: 'Email',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about your project or question...',
      sendButton: 'Send message',
      sending: 'Sending...',
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

  // CATEGORIAS DO HUB - Agora o foco é nas categorias, não nos projetos individuais
  const categoriesHub = [
    {
      id: 'ferramentas',
      title: language === 'pt' ? 'Ferramentas' : 'Tools',
      icon: Wrench,
      description: language === 'pt'
        ? 'Comparador de arquivos para identificar diferenças, conversor universal para múltiplos formatos, e outras utilidades práticas para o dia a dia.'
        : 'File comparator to identify differences, universal converter for multiple formats, and other practical utilities for daily use.',
      keywords: ['comparador', 'arquivos', 'conversor', 'universal', 'diff', 'utils', 'ferramentas', 'tools']
    },
    {
      id: 'jogos',
      title: language === 'pt' ? 'Jogos' : 'Games',
      icon: Gamepad2,
      description: language === 'pt'
        ? 'Xadrez online com inteligência artificial, damas clássicas, campo minado desafiador e sudoku para exercitar a mente.'
        : 'Online chess with artificial intelligence, classic checkers, challenging minesweeper and sudoku to exercise the mind.',
      keywords: ['xadrez', 'chess', 'damas', 'checkers', 'campo minado', 'minesweeper', 'sudoku', 'jogos', 'games']
    },
    {
      id: 'musica',
      title: language === 'pt' ? 'Recursos Musicais' : 'Music Resources',
      icon: Music,
      description: language === 'pt'
        ? 'Piano virtual interativo, editor de partituras completo, metrônomo preciso e afinador profissional para músicos de todos os níveis.'
        : 'Interactive virtual piano, complete score editor, precise metronome and professional tuner for musicians of all levels.',
      keywords: ['piano', 'virtual', 'partituras', 'editor', 'metrônomo', 'metronome', 'afinador', 'tuner', 'musica', 'music', 'recursos musicais']
    },
    {
      id: 'seguranca',
      title: language === 'pt' ? 'Segurança' : 'Security',
      icon: Shield,
      description: language === 'pt'
        ? 'Top 10 vulnerabilidades OWASP explicadas, analisador de senhas robusto e ferramentas para conscientização em cibersegurança.'
        : 'Top 10 OWASP vulnerabilities explained, robust password analyzer and tools for cybersecurity awareness.',
      keywords: ['owasp', 'vulnerabilidades', 'senhas', 'analisador', 'segurança', 'security', 'password', 'analyzer']
    },
    {
      id: 'idiomas',
      title: language === 'pt' ? 'Idiomas' : 'Languages',
      icon: Globe,
      description: language === 'pt'
        ? 'Teste de nível de inglês personalizado e flashcards interativos para aprendizagem de vocabulário em múltiplos idiomas.'
        : 'Customized English level test and interactive flashcards for vocabulary learning in multiple languages.',
      keywords: ['inglês', 'english', 'teste', 'test', 'flashcards', 'vocabulário', 'vocabulary', 'idiomas', 'languages']
    },
    {
      id: 'cursos',
      title: language === 'pt' ? 'Cursos' : 'Courses',
      icon: BookOpen,
      description: language === 'pt'
        ? 'Plataforma completa de cursos online com acompanhamento de progresso, certificados e conteúdo educacional diversificado.'
        : 'Complete online course platform with progress tracking, certificates and diverse educational content.',
      keywords: ['cursos', 'courses', 'plataforma', 'platform', 'educação', 'education', 'online']
    },
    {
      id: 'dados',
      title: language === 'pt' ? 'Ciência de Dados' : 'Data Science',
      icon: BarChart3,
      description: language === 'pt'
        ? 'Web scraper inteligente, visualizador de dados interativo e ferramentas para análise e processamento de dados.'
        : 'Intelligent web scraper, interactive data visualizer and tools for data analysis and processing.',
      keywords: ['dados', 'data', 'scraper', 'visualizador', 'visualizer', 'ciência', 'science', 'análise', 'analysis']
    }
  ];
  const getProjectIcon = (iconName) => {
    const icons = {
      wrench: Wrench,
      gamepad: Gamepad2,
      music: Music,
      shield: Shield,
      globe: Globe,
      book: BookOpen,
      chart: BarChart3
    };
    return icons[iconName] || Wrench;
  };

// 1. Filtragem das Categorias do Hub (Agora filtra pelas categorias, não pelos projetos individuais)
  const filteredCategories = categoriesHub.filter(category => {
    const matchesSearch = category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         category.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'todos' || category.id === selectedCategory;

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
              <button 
                onClick={() => setCurrentPage('home')}
                className={`transition-colors font-medium ${
                  currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t.home}
              </button>
              <button 
                onClick={() => setCurrentPage('projects')}
                className={`transition-colors font-medium ${
                  currentPage === 'projects' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t.projects}
              </button>
              <button 
                onClick={() => setCurrentPage('about')}
                className={`transition-colors font-medium ${
                  currentPage === 'about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {t.about}
              </button>
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

      {/* Página Home */}
      {currentPage === 'home' && (
        <>
          {/* Hero Section */}
          <header className="pt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Conteúdo à esquerda */}
                <div className="space-y-6 order-2 md:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-blue-700 text-sm font-medium">{t.available}</span>
                  </div>
                  
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                    {t.hello}<br />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Michael Dias
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                    {t.description}
                  </p>

                  {/* Links sociais */}
                  <div className="flex flex-wrap gap-3 pt-4">
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
                      onClick={(e) => {
                        e.preventDefault();
                        setShowContactModal(true);
                      }}
                    >
                      <Mail className="w-5 h-5" />
                      <span className="font-medium">Email</span>
                    </a>
                  </div>
                </div>

                {/* Foto à direita */}
                <div className="flex justify-center md:justify-end order-1 md:order-2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                    <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                      <img 
                        src="/foto.jpg" 
                        alt="Michael Dias" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://via.placeholder.com/400x500?text=Michael+Dias";
                        }}
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </>
      )}

      {/* Página de Projetos */}
      {currentPage === 'projects' && (
        <>
          {/* Barra de pesquisa e filtros */}
          <section className="bg-white/50 backdrop-blur-sm border-y border-gray-200 mt-20">
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
              <button
                onClick={() => setSelectedCategory('todos')}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm ${
                  selectedCategory === 'todos'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {t.all}
              </button>
              {categoriesHub.map(cat => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all shadow-sm ${
                      selectedCategory === cat.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white scale-105'
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
            </div>
          </section>

          {/* Grid de Categorias do Hub */}
          <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCategories.map(category => {
                const IconComponent = category.icon;
                return (
                  <div
                    key={category.id}
                    className="group relative bg-white border border-gray-200 rounded-2xl p-7 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 overflow-hidden cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all shadow-sm hover:shadow-md">
                      {language === 'pt' ? 'Explorar categoria' : 'Explore category'}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredCategories.length === 0 && (
              <div className="text-center py-20">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-12 h-12 text-gray-400" />
                </div>
                <p className="text-gray-500 text-xl">{t.noResults}</p>
              </div>
            )}
          </section>
        </>
      )}

      {/* Página Sobre */}
      {currentPage === 'about' && (
        <section className="pt-32 pb-24 min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
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
              <button
                onClick={() => setShowContactModal(true)}
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:shadow-xl transition-all transform hover:scale-105"
              >
                {t.contact}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Modal de Contato */}
      {showContactModal && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowContactModal(false)}
        >
          <div 
            className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão fechar */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900">{t.contactTitle}</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <p className="text-gray-600 mb-8">{t.contactSubtitle}</p>

            <form
              action="https://formsubmit.co/michaelrpdias@gmail.com"
              method="POST"
              onSubmit={() => setIsSubmitting(true)}
              className="space-y-6"
            >
              <input type="hidden" name="_next" value="https://michaeldias.vercel.app" />
              {/* Configurações do FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="Nova mensagem do portfólio!" />
              
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder={t.namePlaceholder}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t.emailPlaceholder}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Mensagem */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  {t.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder={t.messagePlaceholder}
                  className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                ></textarea>
              </div>

              {/* Botão de envio */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl hover:shadow-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? t.sending : t.sendButton}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-600">
              © 2024 <span className="font-semibold text-gray-900">Michael Dias</span>. {t.footer}
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

