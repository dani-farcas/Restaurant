const toggleButton = document.getElementById('toggle-button');
const navUl = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a'); 

toggleButton.addEventListener('click', () => {
  navUl.classList.toggle('active');  
  toggleButton.classList.toggle('active');  

  if (toggleButton.innerHTML === '☰') {
    toggleButton.innerHTML = '✕';
  } else {
    toggleButton.innerHTML = '☰';
  }
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); //stop the browser

        navUl.classList.remove('active'); // close the menu
        toggleButton.classList.remove('active'); // reset the button
        toggleButton.innerHTML = '☰'; // put the burger back

        const href = link.getAttribute('href');
        window.location.href = href; // navigate to the page
    });

    document.addEventListener("DOMContentLoaded", function () {
      const header = document.querySelector("header");
      const sections = document.querySelectorAll("section"); // Selectăm toate secțiunile
    
      // Funcție care calculează luminositatea unei culori
      function calculateBrightness(color) {
        const rgb = color.match(/\d+/g); // Extragem valorile RGB din stringul de culoare
        const r = parseInt(rgb[0], 10);
        const g = parseInt(rgb[1], 10);
        const b = parseInt(rgb[2], 10);
        
        // Formula pentru calcularea luminosității
        return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      }
    
      // Funcție care obține culoarea de fundal a secțiunii
      function getBackgroundColor(section) {
        const style = window.getComputedStyle(section);
        return style.backgroundColor;
      }
    
      // Funcție pentru a schimba culoarea textului din header în funcție de fundal
      function updateHeaderTextColor() {
        const section = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2);
        
        if (section && section.tagName === "SECTION") {
          const bgColor = getBackgroundColor(section);
          const brightness = calculateBrightness(bgColor);
          
          if (brightness < 0.5) { // Fundal închis
            header.classList.add("dark-header");
            header.classList.remove("light-header");
          } else { // Fundal deschis
            header.classList.add("light-header");
            header.classList.remove("dark-header");
          }
        }
      }
    
      // Monitorizează schimbările de scroll și actualizează stilul header-ului
      window.addEventListener("scroll", updateHeaderTextColor);
      
      // Initializăm culoarea la încărcarea paginii
      updateHeaderTextColor();
    });
});

