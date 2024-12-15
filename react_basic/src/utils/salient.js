window.addEventListener("DOMContentLoaded", (event) => {
    const hbmenu = document.querySelector('.hamburger')
    const toggle_nav = document.querySelector('.navlinks');
    const navbar = document.querySelector('.navbar');

    hbmenu.addEventListener('click', () => {
        hbmenu.classList.toggle('active');
        if(navbar.getAttribute('data-effect')=='shift'){
          navbar.classList.toggle('sd-shift-navbar');
        }
        toggle_nav.classList.toggle('nav-collapse');
    });

    const toggle_search = document.querySelector(`[data-toggle="hide"]`);
    const search_bar = document.querySelector('.search-box');
    const isHidden = () => search_bar.classList.contains('hide');
    

    //https://dev.to/tylerlwsmith/leveraging-javascript-to-implement-css-transitions-that-use-display-none-4hhb
    toggle_search.addEventListener('click', () => {
      if(toggle_search.classList.contains('search')){
        toggle_search.classList.remove('search');
        toggle_search.classList.add('arrow-left');
      } else {
        toggle_search.classList.add('search');
        toggle_search.classList.remove('arrow-left');
      }

      if(isHidden()){
        search_bar.style.removeProperty('display');
        setTimeout(() => {
          search_bar.classList.remove('hide')
        }, 0)
      } else {
        search_bar.classList.add('hide')
      }   
    });

    search_bar.addEventListener('transitionend', () => {
      if(isHidden()){
        search_bar.style.display="none";
      }
      
    });           
});