// Scroll suave al hacer clic en los enlaces del menú
document.querySelectorAll('#nav h4').forEach(function(link) {
    link.addEventListener('click', function(event) {
      const sectionID = link.getAttribute('data-section');
      const targetSection = document.querySelector(`#${sectionID}`);
  
      if (targetSection) {
        event.preventDefault();
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Animación al    hacer scroll (fade-in effect)
  const sections = document.querySelectorAll('section');
  
  function animateSections() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (sectionTop < windowHeight - 100) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      } else {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
      }
    });
  }
  
  window.addEventListener('scroll', animateSections);
  animateSections(); // Llamar a la función una vez para asegurarse de que las secciones visibles se animen inicialmente
  
  // Pausar o reproducir el video de fondo al hacer clic
  const video = document.querySelector('video');
  video.addEventListener('click', function() {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
  