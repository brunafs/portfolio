$(document).ready(function(){

   // NAV MENU SCROLL
   $(document).on("scroll", onScroll);
   navControl();

   // Skills section
   $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
   });
   
   // BOTAO VOLTAR PARA O TOPO
   $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
         $('.back-to-top').fadeIn('slow');
      } else {
         $('.back-to-top').fadeOut('slow');
      }
   });
   $('.back-to-top').click(function() {
      $('html, body').animate({
         scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
   });
   // BOTAO VOLTAR PARA O TOPO

   // // TYPING EFFECT NA HOME PAGE 
   // var i = 0;
   // var txt = 'Programadora, Engenheira, Designer, Freelancer';
   // var speed = 300;

   // function initPage(){
   //    if (i < txt.length) {
   //       if (txt.charAt(i) == ',') {
   //          document.getElementById("typing").innerHTML = '';
   //          i++;
   //       }
   //       document.getElementById("typing").innerHTML += txt.charAt(i);
   //       i++;
   //       if (i == txt.length){
   //          i = 0;
   //          document.getElementById("typing").innerHTML = '';
   //       }
   //       setTimeout(initPage, speed);
   //    }
   // }
   // initPage();
   // // TYPING EFFECT NA HOME PAGE 

   // SUBMIT FORMULARIO
   $('#formContato').submit(function(e){
      e.preventDefault();
      validar();

      var nome = $('#name').val();
      var email = $('#email').val();
      var assunto = $('#subject').val();
      var msg = $('#message').val();

      $.ajax({
            url: 'contato.php',
            data: {
               email:email,
               nome:nome,
               assunto:assunto,
               msg:msg
            },
            dataType: "json",
            type: "POST",
            success: function(data){
               if(data.status == 'sucess'){
                  $('#load').html('');
                  $('.mensagem').html(data.mensagem).addClass('field-sucess').fadeIn(300);
                  $('.form-control').val('');
               } else {
                  $('#load').html('');
                  $('.mensagem').html(data.mensagem).addClass('field-error').fadeIn(300);
               }
            },
            error: function(data){
               if(data.status == 'sucess'){
                  $('#load').html('');
                  $('.mensagem').html(data.mensagem).addClass('field-sucess').fadeIn(300);
                  $('.form-control').val('');
               } else {
                  $('#load').html('');
                  $('.mensagem').html(data.mensagem).addClass('field-error').fadeIn(300);
               }
            }
      });
   });
});

// VALIDA CAMPOS FORMULARIO
function validar(){
   var status = 0;
   // $("span.field-error").remove();
   $("span.field-error").html('');

   $('.form-control').each(function(){
      if( $(this).val() == '' ){
         status = 1;
         var mss = $(this).attr('data-msg');
         $(this).after('<span class="field-error">'+mss+'</span>').fadeIn(300);
      }
   });
   if (status == 1){
      return false;
   }else {
      $('#load').html('Enviando...');
      return true;
   }
}
// VALIDA CAMPOS FORMULARIO
// SUBMIT FORMULARIO

// NAV MENU SCROLL
function navControl() {
   $('.nav-menu a[href^="#"]').click(function() {
      $('li').removeClass('active');
      $(this).closest('li').addClass('active');
   });

   $('.nav-menu').hover(function() {
      // alert('hehe');
   });


}
function onScroll(event){
   var scrollPos = $(document).scrollTop();
   $('.nav-menu a[href^="#"]').each(function () {
       var currLink = $(this);
       var refElement = $(currLink.attr("href"));
       if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
           $('li').removeClass("active");
           currLink.closest('li').addClass("active");
       }
       else{
           currLink.removeClass("active");
       }
   });
}
// NAV MENU SCROLL

