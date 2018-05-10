import { Constants } from './constants.js';

"use strict";

//Elements
let $toolbar = $('#toolbar-main');
let $toolbarIcon = $('#toolbar-main #ic-hamburger');
let $toolbarTitle = $('#toolbar-main .title');
let $toolbarMenu = $('#toolbar-main .menu');
let $drawer = $('#drawer-main');
let $drawerMenu = $('#drawer-main .menu');

let $container = $('#include-body');
let $pageContainer = $('.main-page');

let $fab = $('#fab-go-top');

let drawerMenuItems = $drawerMenu.children();
let toolbarMenuItems = $toolbarMenu.children();


//VALIDA EL FIXED DEL TOOLBAR
if ($toolbar.hasClass('toolbar-fixed') ||
    $toolbar.hasClass('toolbar-absolute')) {
    $container.addClass("inset-top");
} else {
    $container.removeClass("inset-top");
}
//FIN VALIDA EL FIXED DEL TOOLBAR

//MUESTRA EL MENU DRAWER
$toolbarIcon.on('click', function () {
    $drawer.toggleClass('show-drawer');
    $pageContainer.toggleClass('collapse-page');
    //$toolbar.toggleClass("toolbar-fixed");
    //$container.toggleClass("custom-scroll");

    if ($pageContainer.hasClass('collapse-page')) {
        localStorage.setItem(Constants.PREF_COLLAPSE_PAGE, true);
    } else {
        localStorage.setItem(Constants.PREF_COLLAPSE_PAGE, false);
    }
});
//FIN MUESTRA EL MENU DRAWER

//CIERRA EL MENU DRAWER AL PRESIONAR LA TECLA ESCAPE
$(document).keydown(function (e) {
    if (e.keyCode == 27) {
        $drawer.removeClass('show-drawer');
        $pageContainer.removeClass('collapse-page');
        $dimScreenDrawer.removeClass('show-dim-screen-transparent');
        //$container.removeClass("custom-scroll");
    }
});
//FIN CIERRA EL MENU DRAWER AL PRESIONAR LA TECLA ESCAPE


//SUBE EL BOTON ARRIBA
$fab.click(function () {
    $('.container-main').animate({
        scrollTop: '0px'
    }, 1000);
    $('body, html').animate({
        scrollTop: '0px'
    }, 1000);
});

$('.container-main').scroll(function () {
    if ($(this).scrollTop() > 500) {
        //$fab.slideDown(300);
        //$fab.show();
        //$fab.css("display", "block");
        //$fab.css("bottom", "1rem");
        $fab.addClass('show-fab');
    } else {
        //$fab.slideUp(300);
        //$fab.hide();
        //$fab.css("display", "none");
        //$fab.css("bottom", "-4rem");
        $fab.removeClass('show-fab');
    };
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
        //$fab.slideDown(300);
        //$fab.show();
        //$fab.css("display", "block");
        //$fab.css("bottom", "1rem");
        $fab.addClass('show-fab');
    } else {
        //$fab.slideUp(300);
        //$fab.hide();
        //$fab.css("display", "none");
        //$fab.css("bottom", "-4rem");
        $fab.removeClass('show-fab');
    };
});
//FIN SUBE EL BOTON ARRIBA


//DIALOG VARIABLES
let $dimScreenDialog = $('#dim-screen-dialog');
let $dialog = $('.dialog');
let $modal = $('.modal');

//CIERRA EL DIALOG AL HACER CLICK FUERA DEL DIALOG
$dimScreenDialog.on('click', function (e) {
    if (!$dialog.is(e.target) && $dialog.has(e.target).length === 0) {
        $dialog.removeClass('dialog-show');
        $modal.removeClass('show');
        $dimScreenDialog.removeClass('show-dim-screen');
    }
});
//FIN CIERRA EL DIALOG AL HACER CLICK FUERA DEL DIALOG

//CIERRA EL DIALOG EN BTN NEGATIVE DEL DIALOGO
let $btnDialogNegative = $('.btn-dialog-negative');

$btnDialogNegative.on('click', function (event) {
    $dialog.removeClass('dialog-show');
    $dimScreenDialog.removeClass('show-dim-screen');
});
//FIN CIERRA EL DIALOG EN BTN NEGATIVE DEL DIALOGO


//EFECTO PARALLAX
$(window).scroll(function () {
    let barra = $(window).scrollTop() - 850;
    let posicion = barra * 0.15;

    $('.img-background-parallax').css({
        //'background-position': 'center -'+posicion+'px'
    });
});

//IR A UN ID ESPECIFICO - ANCLA (elemento <a>)
function moveScrollTo(id) {
    //event.preventDefault();
    let posicion = $("#content-image-background-" + id).position().top;
    $('html,body').animate({
        scrollTop: posicion
    }, 1000);
}
//FIN A UN ID ESPECIFICO


//EVITANDO EL MENU CONTEXTUAL DEL NAVEGADOR
/*$(document).on('contextmenu', function (event) {
    event.preventDefault();
});*/
//FIN EVITANDO EL MENU CONTEXTUAL DEL NAVEGADOR


//CIERRA EL SNACKBAR AL HACER CLICK FUERA DEL CONTEXTO
let $snackbar = $('.snackbar');
let $dimScreenSnackBar = $('#dim-screen-snackbar');
$dimScreenSnackBar.on('click', function (e) {
    if (!$snackbar.is(e.target) && $snackbar.has(e.target).length === 0) {
        $dimScreenSnackBar.removeClass('show-dim-screen-transparent');
        $snackbar.hide();
    }
});
//FIN CIERRA EL SNACKBAR AL HACER CLICK FUERA DEL CONTEXTO




$.each(drawerMenuItems, function (index, value) {
    value.addEventListener('click', function (e) {
        e.preventDefault();
        cleanItems();
        $("#container-inflate").find('#include-body').remove();
        $("#container-inflate").load($(this).data("load"), null);
        localStorage.setItem(Constants.PREF_LAST_SELECTED_ITEM, index);
        $(this).addClass('active');
        //toolbarMenuItems[index].addClass('active');
        $toolbarTitle.text('Home');
    }, false);
});

function cleanItems() {
    $.each(drawerMenuItems, function () {
        $(this).removeClass('active');
    });
    $.each(toolbarMenuItems, function () {
        $(this).removeClass('active');
    });
}


/**
 * Obtiene el shared storage y valida.
 * @return {[type]} [description]
 */
function onProcessCollapsePage() {
    var valueCollapsePage = localStorage.getItem(Constants.PREF_COLLAPSE_PAGE);
    var $drawer = $('#drawer-main');
    var $container = $('#include-body');
    var $pageContainer = $('.main-page');
    var $toolbar = $('.toolbar');
    if (valueCollapsePage == 'true') {
        $drawer.addClass('show-drawer');
        $pageContainer.addClass('collapse-page');
        //$toolbar.removeClass("toolbar-fixed");
        //$container.addClass("custom-scroll");
    } else if (valueCollapsePage == 'false') {
        $drawer.removeClass('show-drawer');
        $pageContainer.removeClass('collapse-page');
        //$toolbar.addClass("toolbar-fixed");
        //$container.removeClass("custom-scroll");
    } else {
        return;
    }
}

/**
 * Obtiene el shared storage y valida.
 * @return {[type]} [description]
 */
function onProcessLastSelectedItem() {
    var valueLastSelectedItem = localStorage.getItem(Constants.PREF_LAST_SELECTED_ITEM);
    if (valueLastSelectedItem === null || valueLastSelectedItem.length === 0) {
        localStorage.setItem(Constants.PREF_LAST_SELECTED_ITEM, 0);
    }

    var $itemDrawerHome = $('#drawer-menu').find('li:eq(0)').has('a').children();
    var $itemDrawerAbout = $('#drawer-menu').find('li:eq(2)').has('a').children();
    var $itemDrawerSkills = $('#drawer-menu').find('li:eq(4)').has('a').children();
    var $itemDrawerProjects = $('#drawer-menu').find('li:eq(6)').has('a').children();
    var $itemDrawerBlog = $('#drawer-menu').find('li:eq(8)').has('a').children();
    var $itemDrawerContact = $('#drawer-menu').find('li:eq(10)').has('a').children();

    var $itemToolbarHome = $('.toolbar .menu').find('a:eq(0)');
    var $itemToolbarAbout = $('.toolbar .menu').find('a:eq(1)');
    var $itemToolbarSkills = $('.toolbar .menu').find('a:eq(2)');
    var $itemToolbarProjects = $('.toolbar .menu').find('a:eq(3)');
    var $itemToolbarBlog = $('.toolbar .menu').find('a:eq(4)');
    var $itemToolbarContact = $('.toolbar .menu').find('a:eq(5)');

    var $toolbarTitle = $('.toolbar .title');

    function cleanItems() {
        $.each([0, 2, 4, 6, 8, 10], function (index, value) {
            $('#drawer-menu').find('li:eq(' + value + ')').has('a').children().removeClass('active');
        });
        $.each([0, 1, 2, 3, 4, 5], function (index, value) {
            $('.toolbar .menu').find('a:eq(' + value + ')').removeClass('active');
        });
    }

    cleanItems();

    if (valueLastSelectedItem == "0") {
        $itemDrawerHome.addClass('active');
        $itemToolbarHome.addClass('active');
        $("#container-inflate").find('#include-body').remove();
        $("#container-inflate").load("/pages/home.html");
        $toolbarTitle.text('Home');
    } else if (valueLastSelectedItem == "1") {
        $itemDrawerAbout.addClass('active');
        $itemToolbarAbout.addClass('active');
        $("#container-inflate").find('#include-body').remove();
        $("#container-inflate").load("/pages/about.html");
        $toolbarTitle.text('About');
    } else if (valueLastSelectedItem == "2") {
        $itemDrawerSkills.addClass('active');
        $itemToolbarSkills.addClass('active');
        $("#container-inflate").find('#include-body').remove();
        $("#container-inflate").load("/pages/skills.html");
        $toolbarTitle.text('Skills');
    } else if (valueLastSelectedItem == "3") {
        $itemDrawerProjects.addClass('active');
        $itemToolbarProjects.addClass('active');
        $("#container-inflate").find('#include-body').remove();
        $("#container-inflate").load("/pages/projects.html");
        $toolbarTitle.text('Projects');
    } else if (valueLastSelectedItem == "4") {
        $itemDrawerBlog.addClass('active');
        $itemToolbarBlog.addClass('active');
        $("#container-inflate").find('#include-body').remove();
        $("#container-inflate").load("/pages/blog.html");
        $toolbarTitle.text('Blog');
    } else if (valueLastSelectedItem == "5") {
        $itemDrawerContact.addClass('active');
        $itemToolbarContact.addClass('active');
        $("#container-inflate").find('#include-body').remove();
        $("#container-inflate").load("/pages/contact.html");
        $toolbarTitle.text('Contact');
    } else {
        return;
    }
}

function loadShared() {
    window.addEventListener('storage', onProcessCollapsePage, false);
    onProcessCollapsePage();
    window.addEventListener('storage', onProcessLastSelectedItem, false);
    onProcessLastSelectedItem();
    //localStorage.clear();
}

window.addEventListener('load', loadShared, false);