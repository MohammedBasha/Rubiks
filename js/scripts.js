$(function () {
    'use strict';
    
    // Stop click for every anchor has a # href
    $("a[href='#']").click(function (e) {
        e.preventDefault();
    });
    
    $('.product-images').slick({
        dots: true,
        mobileFirst: true
      });
    
    try {
        $("body select").msDropDown();
    } catch(e) {
        alert(e.message);
    }
        
});