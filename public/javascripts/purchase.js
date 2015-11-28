$(document).ready(function() {

	$(".options").each(function() {
		$(this).change(function()
		{
		    $(".options").prop('checked',false);
		    $(this).prop('checked',true);

		    $(".options-group .btn").removeClass('active');
		    $(this).parent().addClass('active');
		});
	});

});