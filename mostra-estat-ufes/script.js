// Efeito de Interatividade Suave ao Rolar e Animação dos Gráficos

document.addEventListener('DOMContentLoaded', () => {
  console.log('Site da Mostra de Ciências UFES carregado com sucesso!');

  // Destaque do Link Ativo no Menu de Navegação ao Rolar
  const sections = document.querySelectorAll('section, footer');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Efeito Dinâmico sutil no gráfico de barras do Dashboard ao passar o mouse
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => {
    bar.addEventListener('mouseenter', () => {
      bar.style.filter = 'brightness(1.5)';
      bar.style.boxShadow = '0 0 10px #00d2ff';
    });
    
    bar.addEventListener('mouseleave', () => {
      bar.style.filter = 'brightness(1)';
      bar.style.boxShadow = 'none';
    });
  });
});