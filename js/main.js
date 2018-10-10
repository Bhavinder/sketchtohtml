new WOW().init();

$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$("html").offset().top},"1000");return false})})


$(document).ready(function () {
  $('#dtBasicExample').DataTable({
    "searching": false, // false to disable search (or any other option)
	"paging": true,
	"bLengthChange": false,
  });
  $('.dataTables_length').addClass('bs-select');
});	
	
