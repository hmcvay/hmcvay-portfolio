$(document).ready(function() {

  $("#home").click(function() {
    $(".about").hide();
    $(".projects").hide();
    $(".other").hide();
    $(".resume").hide();
    $(".splash-main").fadeIn("slow");
  })

  $("#about").click(function() {
    $(".splash-main").hide();
    $(".projects").hide();
    $(".other").hide();
    $(".resume").hide();
    $(".about").fadeIn("slow");
  })

  $("#projects").click(function() {
    $(".splash-main").hide();
    $(".about").hide();
    $(".other").hide();
    $(".resume").hide();
    $(".projects").fadeIn("slow");
  })

  $("#other").click(function() {
    $(".splash-main").hide();
    $(".about").hide();
    $(".projects").hide();
    $(".resume").hide();
    $(".other").fadeIn("slow");
  })

  $("#resume").click(function() {
    $(".splash-main").hide();
    $(".about").hide();
    $(".projects").hide();
    $(".other").hide();
    $(".resume").fadeIn("slow");
  })

});