$(function($){
  $('#new_ride_form').hide();

  $('.btn-warning').on('click', function(){
    $('#new_ride_form').show();
    $('.btn-warning').hide();
  });

  $('#ride_ride_time').datetimepicker({
    timeFormat: "hh:mm tt",
    alwaysSetTime: true
  });

});