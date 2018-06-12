$(function() {
  $('#texteJQ').html('Hello world. Ce texte est affiché par jQuery.');
});


$(function () {
  testFadeOut();
});



function testFadeIn (vitesse) {
  if (arguments.length == 0)
  {
    vitesse = "slow";
    }
    else
    {

    }
    $(".rouge").fadeIn(vitesse,testFadeOut);
  
}


function testFadeOut() {
    $(".rouge").fadeOut("slow", testFadeIn); 
}
