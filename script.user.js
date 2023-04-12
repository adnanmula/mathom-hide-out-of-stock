// ==UserScript==
// @name         Ocultar productos sin stock en Mathom
// @author       adnanmula
// @namespace    adnanmula
// @version      0.1
// @description  try to take over the world!
// @match        https://mathom.es/*
// @icon         https://mathom.es/img/favicon.ico?1666175835
// @grant        none
// @require https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    $('.out-of-stock').parent().parent().parent().parent().parent().hide();
    $('.ajax_block_product').removeClass('first-item-of-desktop-line');
})();
