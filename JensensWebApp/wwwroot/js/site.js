﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

document.getElementById('changeBackground').addEventListener('click', function changeBackground(){
    var element = document.body;

    element.classList.toggle("dark-mode")
})