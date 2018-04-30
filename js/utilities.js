"use strict";

/*
Util Javascript
 */

// SIMULACION DE CARGA AL INICIR LA PAGINA
function cargarAlIniciarPagina() {
    //let load_screem = document.getElementById('load-screem')
    //document.body.removeChild(load_screem);
}

window.addEventListener('load', cargarAlIniciarPagina, false);
// FIN SIMULACION DE CARGA AL INICIR LA PAGINA

/**
 * Comparte el sitio web en una nueva ventana(pop-up).
 * @param  {string} url La URL de la pagina a compartir.
 * @return {[type]}           [description]
 */
function shareWebSite(url) {
    window.open(urlShared + encodeURIComponent(location.href), 'facebook-share-dialog', 'width=626,height=436,left=300,top=150');
    return false;
}

/**
 * Agrega el sitio web a los favoritos del navegador.
 */
function addToFavorites() {
    let title = "GameStore-Tu mundo Digital";
    let url = "http://shop-gamestore.somee.com";
    //para firefox
    if (window.sidebar)
        window.sidebar.addPanel(title, url, "");
    //para Internet Explorer
    else if (window.external)
        window.external.AddFavorite(url, title)
    // Opera Hotlist
    else if (window.opera && window.print) {
        return true;
    };
}


//EFECTO RIPPLE
let rippleFlat = document.querySelectorAll('.ripple-container-flat'); //Guardamos un array con todos los botones. Para compatibilidad con navegadores antiguos puedes reemplazar el querySelectorAll con un getElementsByClassName
[].forEach.call(rippleFlat, function(e) {
  e.addEventListener('click', function(e) {
    /*Esto se activará cada vez que haya un click en un botón*/
    let offset = this.parentNode.getBoundingClientRect(); //Toma los limites del padre (el padre es el <button> para los botones, o el <div> principal en la imagen
    let effect = this.querySelector('.ripple-effect-flat'); //Toma SOLO el span ripple-effect que está dentro del boton clicado
    /*pageX y pageY devuelven el punto de la página en el cual se hizo clic, siendo el origen la esquina superior izquierda. En offset.top y offset.left tenemos almacenados la distancia al origen de la esquina superior izquierda del botón. La resta de estos elementos nos indicará el punto en el cual se hizo clic, teniendo como origen la esquina superior izquierda del botón*/
    effect.style.top = (e.pageY - offset.top) + "px";
    effect.style.left = (e.pageX - offset.left) + "px";

    this.classList.add('ripple-effect-animation'); //Agregamos la clase con la animación

  }, false);

  /*Cuando la animación finalice, se disparan eventos llamando a removeAnimation, este método eliminará la clase ripple-effect-animation*/
  e.addEventListener('animationend', removeAnimation);
  e.addEventListener('webkitAnimationEnd', removeAnimation);
  e.addEventListener('oanimationend', removeAnimation);
  e.addEventListener('MSAnimationEnd', removeAnimation);
});

let rippleWidget = document.querySelectorAll('.ripple-container-widget'); //Guardamos un array con todos los botones. Para compatibilidad con navegadores antiguos puedes reemplazar el querySelectorAll con un getElementsByClassName
[].forEach.call(rippleWidget, function(e) {
  e.addEventListener('click', function(e) {
    /*Esto se activará cada vez que haya un click en un botón*/
    let offset = this.parentNode.getBoundingClientRect(); //Toma los limites del padre (el padre es el <button> para los botones, o el <div> principal en la imagen
    let effect = this.querySelector('.ripple-effect-widget'); //Toma SOLO el span ripple-effect que está dentro del boton clicado
    /*pageX y pageY devuelven el punto de la página en el cual se hizo clic, siendo el origen la esquina superior izquierda. En offset.top y offset.left tenemos almacenados la distancia al origen de la esquina superior izquierda del botón. La resta de estos elementos nos indicará el punto en el cual se hizo clic, teniendo como origen la esquina superior izquierda del botón*/
    effect.style.top = (e.pageY - offset.top) + "px";
    effect.style.left = (e.pageX - offset.left) + "px";

    this.classList.add('ripple-effect-animation'); //Agregamos la clase con la animación

  }, false);

  /*Cuando la animación finalice, se disparan eventos llamando a removeAnimation, este método eliminará la clase ripple-effect-animation*/
  e.addEventListener('animationend', removeAnimation);
  e.addEventListener('webkitAnimationEnd', removeAnimation);
  e.addEventListener('oanimationend', removeAnimation);
  e.addEventListener('MSAnimationEnd', removeAnimation);
});

function removeAnimation() {
  if (this.classList) {
    this.classList.remove('ripple-effect-animation');
  } else {
    this.className = this.className.replace(new RegExp('(^|\\b)' + 'ripple-effect-animation'.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
}
//FIN EFECTO RIPPLE