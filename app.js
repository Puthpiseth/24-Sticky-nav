const nav = document.querySelector('#main');
  const navTop = nav.offsetTop;
  const  logo = document.querySelector(".logo");
  

  function fixNav() {
    if (window.scrollY >= navTop) {
      nav.classList.add('fixed-nav');
      logo.style.maxWidth="200px";
    } else {
      nav.classList.remove('fixed-nav');
      logo.style.maxWidth="0px";
    }
  }

  window.addEventListener('scroll', fixNav);