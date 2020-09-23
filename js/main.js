jQuery(document).ready(function($) {
  $(".rounded").click(function() {
      $(this).toggleClass('on off');
  });

  $(".open-button").click(function() {
      $("#myPopup").toggleClass('block none');
  });


  $(".btn-outline-secondary").click(function() {
      $("#myPopup").addClass('none');
  });
  $(".btn-primary").click(function() {
      $("#myPopup").addClass('none');
  });






});
