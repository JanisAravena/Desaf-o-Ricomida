const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('carouselExample');
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000, 
    });
  });

$('#enviarCorreo').click(function() {
    alert('El correo fue enviado correctamente...');
});

$(document).ready(function() {
    $('h5').on('dblclick', function() {
        $(this).css('color', 'red');
    });
});

$(document).ready(function() {
    $('.card-title').click(function() {
        var cardContent = $(this).next('.card-content');
        cardContent.toggle();
    });
});
