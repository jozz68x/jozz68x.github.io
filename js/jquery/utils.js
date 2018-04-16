/*
Util Jquery
 */

$(document).ready(function () {

    //CONSTANTS TEMP
    var PREF_COLLAPSE_PAGE = 'PREF_COLLAPSE_PAGE';

    //VALIDA EL FIXED DEL TOOLBAR
    var $toolbar = $('.toolbar');
    var $container = $('#include-body');

    if ($toolbar.hasClass('toolbar-fixed') || $toolbar.hasClass('toolbar-absolute')) {
        $container.addClass("inset-top");
    } else {
        $container.removeClass("inset-top");
    }
    //FIN VALIDA EL FIXED DEL TOOLBAR

    //MUESTRA EL MENU DRAWER
    var $toolbarIcon = $('.toolbar-icon');
    var $drawer = $('#drawer-main');
    var $dimScreenDrawer = $('#dim-screen-drawer');
    var $pageContainer = $('.main-page');

    $toolbarIcon.on('click', function () {
        $drawer.toggleClass('show-drawer');
        $pageContainer.toggleClass('collapse-page');
        $dimScreenDrawer.toggleClass('show-dim-screen-transparent');
        //$toolbar.toggleClass("toolbar-fixed");
        //$container.toggleClass("custom-scroll");

        if ($pageContainer.hasClass('collapse-page')) {
            localStorage.setItem(PREF_COLLAPSE_PAGE, true);
        } else {
            localStorage.setItem(PREF_COLLAPSE_PAGE, false);
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
    var $fab = $('#fab-go-top');

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
    var $dimScreenDialog = $('#dim-screen-dialog');
    var $dialog = $('.dialog');
    var $modal = $('.modal');

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
    var $btnDialogNegative = $('.btn-dialog-negative');

    $btnDialogNegative.on('click', function (event) {
        $dialog.removeClass('dialog-show');
        $dimScreenDialog.removeClass('show-dim-screen');
    });
    //FIN CIERRA EL DIALOG EN BTN NEGATIVE DEL DIALOGO


    //MUESTRA TAB
    /*var $tabInfo = $('#tabs-about').find('a:first');
    var $tabDev = $('#tabs-about').find('a:last');
    var $contentInfo = $('#content-info');
    var $contentDev = $('#content-dev');

    $tabInfo.on('click', function (event) {
        event.preventDefault();
        $contentDev.removeClass('visible');
        $contentInfo.addClass('visible');
        $tabDev.removeClass('active-tab');
        $tabInfo.addClass('active-tab');
    });
    $tabDev.on('click', function (event) {
        event.preventDefault();
        $contentInfo.removeClass('visible');
        $contentDev.addClass('visible');
        $tabInfo.removeClass('active-tab');
        $tabDev.addClass('active-tab');
    });

    function toggleTab(id) {
        var $tabs = $("#tabs-about");
        var $tab = $("#" + id);
        var $contentTabs = $('.container-content-tabs');
        var $contentTab = $("#content-" + id);
        $tabs.children().removeClass('active-tab');
        $contentTabs.children().removeClass('visible');
        $contentTab.addClass('visible');
        $tab.addClass('active-tab');
    }*/
    //FIN MUESTRA TAB


    //EFECTO PARALLAX
    $(window).scroll(function () {
        var barra = $(window).scrollTop()-850;
        var posicion = barra * 0.15;

        $('.img-background-parallax').css({
            //'background-position': 'center -'+posicion+'px'
        });
    });

    //IR A UN ID ESPECIFICO - ANCLA (elemento <a>)
    function moveScrollTo(id) {
        //event.preventDefault();
        var posicion = $("#content-image-background-" + id).position().top;
        $('html,body').animate({ scrollTop: posicion }, 1000);
    }
    //FIN A UN ID ESPECIFICO


    //EVITANDO EL MENU CONTEXTUAL DEL NAVEGADOR
    /*$(document).on('contextmenu', function (event) {
        event.preventDefault();
    });*/
    //FIN EVITANDO EL MENU CONTEXTUAL DEL NAVEGADOR


    //CIERRA EL SNACKBAR AL HACER CLICK FUERA DEL CONTEXTO
    var $snackbar = $('.snackbar');
    var $dimScreenSnackBar = $('#dim-screen-snackbar');
    $dimScreenSnackBar.on('click', function (e) {
        if (!$snackbar.is(e.target) && $snackbar.has(e.target).length === 0) {
            $dimScreenSnackBar.removeClass('show-dim-screen-transparent');
            $snackbar.hide();
        }
    });
    //FIN CIERRA EL SNACKBAR AL HACER CLICK FUERA DEL CONTEXTO

});