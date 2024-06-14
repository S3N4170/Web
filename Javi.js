document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Por favor, completa todos los campos.');
    } else {
        alert('Mensaje enviado. Gracias por contactarme, ' + name + '!');
        document.getElementById('contactForm').reset();
    }
});

// Menú de navegación desplegable
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('show-menu');
});

// Filtro de portafolio
document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', function() {
        var filter = this.getAttribute('data-filter');
        document.querySelectorAll('.portfolio-items li').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

//Funcion para mostrar/ocultar contenido
function toggleContent(id){
    var element=document.getElementById(id);
    if (element.style.display==="none") {
        element.style.display="block";
    } else {
        element.style.display="none";
    }
}

// Botón para volver al principio
var scrollTopBtn = document.getElementById('scrollTopBtn');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 100) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});
scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function initMap() {
    var location = {lat: -34.397, lng: 150.644}; // Reemplaza con tus coordenadas
    var map = new google.maps.Map(document.getElementById('googleMap'), {
        zoom: 8,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
