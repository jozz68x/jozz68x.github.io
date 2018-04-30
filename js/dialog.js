"use strict";

/**
 * Muestra la ventana modal.
 * @return {[type]} Visibilidad del modal.
 */
function showModal() {
    let $dimScreenDialog = $('#dim-screen-dialog');
    let $modal = $('.modal');

    $modal.toggleClass('show');
    $dimScreenDialog.addClass('show-dim-screen');
}

/**
 * Muestra el dialogo de alerta.
 * @param  {string} title   Titulo del dialogo a mostrar.
 * @param  {string} message Mensaje del dialogo a mostrar.
 * @return {[type]}         Visibilidad del dialogo.
 */
function showDialogAlert(title, message) {
    let $dimScreenDialog = $('#dim-screen-dialog');
    let $dialog = $('.dialog-alert');
    let $dialogTitle = $('.dialog-title');
    let $dialogMessage = $('.dialog-message');

    $dialogTitle.html(title);
    $dialogMessage.html(message);
    $dialog.toggleClass('dialog-show');
    $dimScreenDialog.addClass('show-dim-screen');
}

/**
 * Muestra el dialogo de confirmación.
 * @param  {string} title   Titulo del dialogo a mostrar.
 * @param  {string} message Mensaje del dialogo a mostrar.
 * @return {[type]}         Visibilidad del dialogo.
 */
function showDialogConfirm(title, message) {
    let $dimScreenDialog = $('#dim-screen-dialog');
    let $dialog = $('.dialog-confirm');
    let $dialogTitle = $('.dialog-title');
    let $dialogMessage = $('.dialog-message');

    $dialogTitle.html(title);
    $dialogMessage.html(message);
    $dialog.toggleClass('dialog-show');
    $dimScreenDialog.addClass('show-dim-screen');
}