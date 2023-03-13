// zoeken naar het menu-wrap en kijken of ik kan zien waar geklikt is 

menus = document.querySelectorAll('.menu_choice');

toggler = document.querySelector('.toggler'); 

/*  Maak een eventlistener voor alle menu-keuze's */ 

menus.forEach( (menu) => {
    menu.addEventListener('click', () => {
        toggler.checked = false; 
    }); 
})











