var changeValue = function(positive = true, field = 0) {
  let myValue = 0;

  if (field == 1) myValue = document.querySelector('#percent1').value;
  else if (field == 2) myValue = document.querySelector('#percent2').value;
  else {}

  myValue = parseInt(myValue);
  if (myValue > 0 && myValue < 100) {
    if (positive) myValue += 1;
    else myValue -= 1;
  } else if (myValue == 0 && positive) myValue += 1;
  else if (myValue == 100 && !positive) myValue -= 1;
  else if (myValue < 0) myValue = 0;
  else if (myValue > 100) myValue = 100;
  else {}

  if (field == 1) document.querySelector('#percent1').value = myValue + ' %';
  else if (field == 2) document.querySelector('#percent2').value = myValue + ' %';
  else {}
}

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
