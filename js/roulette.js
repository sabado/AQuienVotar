
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('src', 'sound/boton.mp3');
       
        var welldone = document.createElement('audio');
        welldone.setAttribute('src', 'sound/exito.mp3');

  

        //audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('.play').click(function() {
            audioElement.play();
            
        });

        $('.pause').click(function() {
            audioElement.pause();
        });






var $r = $('.roulette').fortune({
  prices:3,
  duration: 7000, // The amount of milliseconds the roulette to spin

  min_spins: 10, // The minimum number of spins 
  max_spins: 15, // The maximum number of spins
});








var clickHandler = function() {
  audioElement.play();
  $('.spinner').off('click');
  
  $('.spinner span').hide();
  $r.spin().done(function(price) {
      $('.spinner').on('click', clickHandler);
      $('.spinner span').show();

      var candidates = ["Voto en Blanco","Daniel Scioli","Mauricio Macri",];
      var descriptions = ["Aguante Marx vieja: Empezá por leer el manifiesto comunista pero si te da paja podes colgarte escuchando a esos viejos barbudos que no paran de hablar. Si te ofrecen de fumar asegurate que no sea cigarrillo y dale para adelante. Fundamental, ante la mínima duda es tu deber cortar una calle.",
                     "La vida es buena: Mientras todo sigue derrumbandose para la corpo, anotate en La Campora. con suerte y si haces todas las tramollas que te pidan, vas a pasar los próximos cuatro años sin laburar llevandote un sueldo de arriba.",
                     "Crisis es oportunidad: Empezá vendiendo todo lo que puedas vender, y con eso, comprando todos los dolares que puedas.Mientras, mirá repetidamente todos los videos de Micky Vainilla hasta que te produzcan una risita nerviosa de placer."];
      $(".WinnerName").text(candidates[price]);
      $(".WinnerDesc").text(descriptions[price]);
      welldone.play();
      sleep(1000);

      $(".containerResult").show(100);
    });
};

$('.spinner').on('click', clickHandler);

$('.close').click(function() {
  $(".containerResult").hide(100);
});


$('.acerca').click(function() {
     $(".WinnerName").text("¿A QUIEN VOTAR?");
      $(".WinnerDesc").html("Esta aplicación es una broma, prohibido llorar... </br> Todo bajo CC o Public Domain</br> www.freepik.com </br> www.SoundJay.com</br> www.google.com/fonts</br> github.com/tehsis/jfortune</br>\n Desarrollo Creative Commons Public Domain Nov,2015");
  $(".containerResult").show(100);
});


function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}