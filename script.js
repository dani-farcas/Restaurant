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
});