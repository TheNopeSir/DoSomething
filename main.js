$(document).ready(function(){
	$("#edit").on("click", function(){
        $(".addTsk").attr("contenteditable","true");
	});
	
});

$('button').on('click', function(){
	var todoText = $('.form-control').val();
	if (todoText !== '') {
	$('input').val(""); 
	$('ul').append('<li>' + '<input type="checkbox" class="checkbox">' + '<span class="text">' + todoText + '</span>' + '<span class="remove">&#10008;</span>' + '</li>');
	};
});

$('.form-control').keypress(function(event){
	var addTaskKey = $('.form-control').val();
	if((event.which === 13)&&(addTaskKey !=='')){
		$('.form-control').val("");
		$('ul').append('<li>' + '<input type="checkbox" class="checkbox">' + '<span class="text">' + addTaskKey + '</span>'  + '<span class="remove">&#10008;</span>' +  '</li>');
	}
});



  $('ul').on('click', ".remove" , function(event){ 
	$(this).parent().fadeOut(500, function(){ 
	$(this).remove(); 
	}); 
	}); 

$('ul').on('click', ".checkbox", function(event){
	$(this).siblings(".text").toggleClass('line').fadeIn(100);
});

$('ul').on('mouseenter', '.text', function(){
	$(this).attr('contenteditable', 'true');
	});

$('ul').on('mouseout', '.text', function(){
	$(this).removeAttr('contenteditable');
	});