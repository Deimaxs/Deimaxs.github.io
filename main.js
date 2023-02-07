// Get the button
var mybutton = document.getElementById("btn-scroll-to-top");

// When the user scrolls down 50px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", scrollToTop);

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function toggleModal(modal_id) {
  document.getElementById(modal_id).classList.toggle("hidden");
}

function sendMail() {
  nombre = $("#form-nombre").val();
  asunto = $("#form-asunto").val();
  mensaje = $("#form-mensaje").val();
  email = $("#form-email").val();

  $.ajax({
    url: 'http://3.237.199.101/mail/mTemplate',
    method: 'GET',
    data: {
      nombre: nombre,
      asunto: asunto,
      mensaje: mensaje,
      email: email,
    }
  }).done(function(res){
    //
  }).fail( function( jqXHR, textStatus, errorThrown ) {
    console.log(jqXHR.responseText + "   -   " + errorThrown);
  });
}