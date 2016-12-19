$(document).ready(function() {
    $('input').focus(
    function(){
        $(this).css({'background-color' : '#FFFFEE'});
	});

 	$('input').blur(
    function(){
        $(this).css({'background-color' : ''});
    });
});