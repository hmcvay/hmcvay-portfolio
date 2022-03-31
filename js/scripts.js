$(document).ready(function() {

  $("#about").click(function() {
    $(".splash-main").hide();
    $(".projects").hide();
    $(".other").hide();
    $(".resume").hide();
    $(".about").show();
  })

  $("#projects").click(function() {
    $(".splash-main").hide();
    $(".about").hide();
    $(".other").hide();
    $(".resume").hide();
    $(".projects").show();
  })

  $("#other").click(function() {
    $(".splash-main").hide();
    $(".about").hide();
    $(".projects").hide();
    $(".resume").hide();
    $(".other").show();
  })

  $("#resume").click(function() {
    $(".splash-main").hide();
    $(".about").hide();
    $(".projects").hide();
    $(".other").hide();
    $(".resume").show();
  })

});