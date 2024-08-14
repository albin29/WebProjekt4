// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

window.onload = function() {
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
}

document.getElementById('changeBackground').addEventListener('click', function changeBackground(){
    var element = document.body;

    element.classList.toggle("dark-mode")

    if(element.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    }
    else{localStorage.removeItem('dark-mode')}
})