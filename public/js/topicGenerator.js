$(function () {
    $('.name').textillate();
    //init();
})
    

var init = function()
{
	$('#foo').slotMachine({
    randomize : function(activeElementIndex){
        return 0;
    }
	});

	$(".name").slotMachine({
		active	: 1,
		delay	: 450,
		auto	: 1500
	});
}


$(document).ready(function(){
	var machine = $("#planeMachine").slotMachine({
	    active  : 1,
	    delay   : 450,
	    
	    spins	: 10,
	    direction: 'down'
	});
	machine.shuffle(10);
});
