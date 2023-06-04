


//fin de la theorie

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');
  
    btn.addEventListener('click', () => {
      header.classList.toggle('show-nav');
    });
  
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        header.classList.remove('show-nav');
        const target = event.target.getAttribute('href');
        window.location.href = target;
      });
    });
  }
  
  menuMobile();



  const filters = document.querySelectorAll('.portfolio-filters a');
const cards = document.querySelectorAll('.grid__item .card');

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener('click', function(e) {
    e.preventDefault();

    const selectedFilter = this.getAttribute('data-filter');

    // Ajouter la classe "active" au lien de catégorie sélectionné
    for (let j = 0; j < filters.length; j++) {
      filters[j].classList.remove('active');
    }
    this.classList.add('active');

    // Filtrer les projets en fonction de la catégorie sélectionnée
    for (let k = 0; k < cards.length; k++) {
      const card = cards[k];
      const cardCategory = card.getAttribute('data-category');

      if (selectedFilter === 'all' || selectedFilter === cardCategory) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    }
  });
}



// Récupération des éléments nécessaires
const projects = document.querySelectorAll('.project');
const prevBtns = document.querySelectorAll('.prev-btn');
const nextBtns = document.querySelectorAll('.next-btn');

// Ajout des événements pour le défilement des images
projects.forEach((project, index) => {
  const projectImages = project.querySelector('.project-images');
  const images = project.querySelectorAll('.project-images img');
  const prevBtn = prevBtns[index];
  const nextBtn = nextBtns[index];
  
  let scrollAmount = 0;
  const scrollStep = 300;
  
  // Fonction pour faire défiler les images vers la droite
  const scrollRight = () => {
    projectImages.scrollTo({
      top: 0,
      left: (scrollAmount += scrollStep),
      behavior: "smooth"
    });
    
    if (scrollAmount > projectImages.scrollWidth - projectImages.clientWidth) {
      scrollAmount = projectImages.scrollWidth - projectImages.clientWidth;
    }
  };
  
  // Fonction pour faire défiler les images vers la gauche
  const scrollLeft = () => {
    projectImages.scrollTo({
      top: 0,
      left: (scrollAmount -= scrollStep),
      behavior: "smooth"
    });
    
    if (scrollAmount < 0) {
      scrollAmount = 0;
    }
  };
  
  // Ajout des événements pour les boutons de défilement
  nextBtn.addEventListener('click', scrollRight);
  prevBtn.addEventListener('click', scrollLeft);
  
  // Ajout de la surbrillance au survol
  project.addEventListener('mouseover', () => {
    projectImages.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.5)";
  });
  
  project.addEventListener('mouseout', () => {
    projectImages.style.boxShadow = "none";
  });
  
  // Désactivation des boutons de défilement si nécessaire
  projectImages.addEventListener('scroll', () => {
    if (projectImages.scrollLeft === 0) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }
    
    if (projectImages.scrollLeft === (projectImages.scrollWidth - projectImages.clientWidth)) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.classList.remove('disabled');
    }
  });
});


const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    alert('Veuillez remplir tous les champs');
    return;
  }

  const body = `De: ${name}\nE-mail: ${email}\nMessage:\n${message}`;
  const mailto = `mailto:morcirecisse81@gmail.com?subject=Nouveau message de ${name}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  
  alert('Votre message a été envoyé avec succès');
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
});

  
// Cacher le lien de téléchargement si le navigateur ne prend pas en charge l'attribut "download"
var downloadLink = document.querySelector('.cv-section a');
if (typeof downloadLink.download === "undefined") {
  downloadLink.style.display = "none";
}


