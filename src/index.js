document.addEventListener('DOMContentLoaded', () => {

    //Variables
    const openMenu = document.querySelector('#open-menu')
    const menu = document.querySelector('#menu')
    const closeMenu = document.querySelector('#close-menu')

    //Events Listeners
    cargarFunciones()

    function cargarFunciones(){
        openMenu.addEventListener('click', abrirMenu)
        closeMenu.addEventListener('click', cerrarMenu)
    }

    //Functions
    function abrirMenu(){
        menu.classList.add('show')
        console.log('Abriendo el menu')
    }

    function cerrarMenu(){
        if(menu.classList.contains('show')){
            menu.classList.remove('show')
        }
        console.log('Cerrando el menu')
    }
})