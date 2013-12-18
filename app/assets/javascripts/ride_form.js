$(function($){
  $('#new_ride_form').hide();

  $('.btn-primary').on('click', function(){
    $('#new_ride_form').show();
    $('.btn-primary').hide();
  });

  $('#ride_ride_time').datetimepicker({
    timeFormat: "hh:mm tt",
    alwaysSetTime: true
  });

});