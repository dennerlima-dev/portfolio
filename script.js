// Cursor customizado
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Movimento do cursor
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

function mostrarTextoAlternativo() {
  document.getElementById("foto-perfil").style.display = "none";
  document.getElementById("textoAlternativoFoto").style.display = "block";
}

// Traduções
const traducoes = {
  pt: {
    titulo: `OLÁ, EU SOU <span class="glitch" data-text="DENNER">DENNER LIMA</span>`,
    inicio: "Início",
    sobre: "Sobre Mim",
    projetos: "Meus Projetos",
    contato: "Contato",
    descricao: "Programador Full Stack | Codificador Criativo | Python | Javascript | HTML | CSS",
    sobreTexto: "Sou um programador full stack apaixonado por transformar ideias em experiências digitais criativas. Com foco em Python, JavaScript e design moderno, trago soluções elegantes e funcionais para o mundo web.",
    tituloProjetos: "Meus Projetos",
    tituloSobre: "Sobre Mim",
    tituloContato: "Entre em Contato",
    projeto1Titulo: "Sistema de Gerenciamento de Segurança — Projeto Full Stack com Flask e SQL",
    projeto1Desc: "Aplicação web robusta para as Indústrias Wayne (empresa fictícia), focada em controle de acesso, gerenciamento de recursos internos e visualização de dados estratégicos. Implementada autenticação com controle de níveis de acesso (funcionários, gerentes e administradores de segurança), sistema completo de CRUD para inventário de equipamentos, veículos e dispositivos de segurança, além de um dashboard dinâmico que centraliza informações operacionais em tempo real. O projeto foi estruturado com Flask, SQLite, Jinja2, HTML, CSS e JavaScript, seguindo boas práticas de modularização, segurança (CSRF, login seguro) e organização do código.<br><br><em>Acesso Administrador:<br>usuário: </em>admin<br><em>senha: </em> senha123",
    projeto1Botao: "Ver",
    textoAlternativoFoto: "Foto de Denner Lima",
    logoFone: "Ícone de telefone",
    logoMail: "Ícone de email",
    logoLinkedin: "Ícone do LinkedIn",
    botaoCV: "Baixar Currículo",
    linkCV: "docs/CV_PT.pdf"
  },
  en: {
    titulo: `HEY, I AM <span class="glitch" data-text="DENNER">DENNER LIMA</span>`,
    inicio: "Home",
    sobre: "About Me",
    projetos: "My Projects",
    contato: "Contact",
    descricao: "Full Stack Developer | Creative Coder | Python | Javascript | HTML | CSS",
    sobreTexto: "I'm a full stack developer passionate about turning ideas into creative digital experiences. With a focus on Python, JavaScript and modern design, I deliver elegant and functional web solutions.",
    tituloProjetos: "My Projects",
    tituloSobre: "About Me",
    tituloContato: "Get in Touch",
    projeto1Titulo: "Security Management System — Full Stack Project with Flask and SQL (Availabe in Portuguese only)",
    projeto1Desc: "A robust web application for Wayne Industries (fictional company), focused on access control, internal resource management, and real-time data visualization. The system features role-based authentication (employees, managers, security admins), a full CRUD interface for managing inventory (equipment, vehicles, security devices), and a dynamic dashboard displaying key operational data. Built with Flask, SQLite, Jinja2, HTML, CSS, and JavaScript, the project follows best practices in code organization, security (CSRF protection, secure login), and modular design.<br><br><em>Administrator Access:<br>user: </em>admin<br><em>password: </em> senha123",
    projeto1Botao: "View",
    textoAlternativoFoto: "Denner Lima's picture",
    logoFone: "Fone Icon",
    logoMail: "Mail Icon",
    logoLinkedin: "LinkedIn Icon",
    botaoCV: "Download Resume",
    linkCV: "docs/CV_EN.pdf"
  }
};

// Trocar idioma
function trocarIdioma(idioma) {
  document.getElementById("titulo").innerHTML = traducoes[idioma].titulo;
  document.getElementById("link-inicio").innerText = traducoes[idioma].inicio;
  document.getElementById("descricao").innerText = traducoes[idioma].descricao;
  document.getElementById("link-sobre").innerText = traducoes[idioma].sobre;
  document.getElementById("link-projetos").innerText = traducoes[idioma].projetos;
  document.getElementById("link-contato").innerText = traducoes[idioma].contato;
  document.getElementById("sobre-texto").innerText = traducoes[idioma].sobreTexto;
  document.getElementById("foto-perfil").alt = traducoes[idioma].altFoto;
  document.getElementById("tituloSobre").innerText = traducoes[idioma].tituloSobre;
  document.getElementById("tituloProjetos").innerText = traducoes[idioma].tituloProjetos;
  document.getElementById("tituloContato").innerText = traducoes[idioma].tituloContato;
  document.getElementById("projeto1Titulo").innerText = traducoes[idioma].projeto1Titulo;
  document.getElementById("projeto1Desc").innerHTML = traducoes[idioma].projeto1Desc;
  document.getElementById("projeto1Botao").innerText = traducoes[idioma].projeto1Botao;
  document.getElementById("textoAlternativoFoto").innerText = traducoes[idioma].textoAlternativoFoto;
  document.getElementById("logoMail").alt = traducoes[idioma].logoMail;
  document.getElementById("logoFone").alt = traducoes[idioma].logoFone;
  document.getElementById("logoLinkedin").alt = traducoes[idioma].logoLinkedin;
  document.getElementById("botaoCV").innerText = traducoes[idioma].botaoCV;
  document.getElementById("botaoCV").setAttribute("href", traducoes[idioma].linkCV);
}

// Eventos de troca de idioma
document.getElementById("lang-pt").addEventListener("click", () => trocarIdioma("pt"));
document.getElementById("lang-en").addEventListener("click", () => trocarIdioma("en"));

// Scroll suave e interação com links
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-links a');
  const menuBtn = document.querySelector('.menu-toggle');
  const navbar = document.getElementById('navbar');

  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(2)';
    });
    link.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
    });

    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      navbar.classList.remove('active');
    });
  });

  if (menuBtn && navbar) {
    menuBtn.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }
});

// ParticlesJS - carregar configuração externa
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('Particles.js carregado com sucesso.');
});

// Repassar a posição do mouse para o particles.js manualmente
document.addEventListener('mousemove', function(event) {
  if (window.pJSDom && window.pJSDom.length > 0) {
    const pJS = window.pJSDom[0].pJS;
    if (pJS.interactivity.events.onhover.enable) {
      pJS.interactivity.mouse.pos_x = event.clientX;
      pJS.interactivity.mouse.pos_y = event.clientY;
    }
  }
});

// Limpar posição ao sair da tela (corrigido de 'mouseout' para 'mouseleave')
document.addEventListener('mouseleave', function() {
  if (window.pJSDom && window.pJSDom.length > 0) {
    const pJS = window.pJSDom[0].pJS;
    pJS.interactivity.mouse.pos_x = null;
    pJS.interactivity.mouse.pos_y = null;
  }
});

// ScrollReveal configurações
ScrollReveal({ reset: true });

ScrollReveal().reveal('.section h2', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.card', {
  delay: 300,
  interval: 200,
  distance: '30px',
  origin: 'bottom',
  duration: 800,
  easing: 'ease-in-out'
});

ScrollReveal().reveal('.content', {
  delay: 300,
  distance: '40px',
  origin: 'top',
  duration: 1000
});

ScrollReveal().reveal('.reveal-top', { origin: 'top', distance: '50px', duration: 800 });
ScrollReveal().reveal('.reveal-left', { origin: 'left', distance: '50px', duration: 800 });
ScrollReveal().reveal('.reveal-right', { origin: 'right', distance: '50px', duration: 800 });
ScrollReveal().reveal('.reveal-bottom', { origin: 'bottom', distance: '50px', duration: 800 });
