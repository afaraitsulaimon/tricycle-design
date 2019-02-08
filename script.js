//TO DE-ASSEMBLE THE PARTS

var theScatterBtn = document.getElementById('scatter-btn');

function scatterAll() {
	
	$('#scatter-btn'). click(function(){

   $('.part1A, .part1B').css({

       'margin-left':'100px',
       'margin-top':'30px',
   });


});



$('#scatter-btn'). click(function(){

   $('.part2A, .part3A, .part5A').css({

       'margin-left':'50px',

   });


});


$('#scatter-btn'). click(function(){

   $('.part3B').css({

       'margin-top':'180px',

   });


});


$('#scatter-btn'). click(function(){

   $('.part4A, .part5A').css({

       'margin-bottom':'80px',

   });


});


$('#scatter-btn'). click(function(){

   $('.part5C, .part5D2').css({

       'margin-bottom':'80px',

   });


});


$('#scatter-btn'). click(function(){

   $('.part5D4').css({

       'margin-top':'80px',

   });


});


$('#scatter-btn'). click(function(){

   $('.part6A, .part6B').css({

       'margin-right':'80px',
       'margin-top':'20px',

   });


});


$('#scatter-btn'). click(function(){

   $('.tyresB').css({

      
       'margin-top':'50px',

   });


});



}

theScatterBtn.addEventListener('click',scatterAll(),false);


//TO RE-ASSEMBLE THE PARTS AFTER DE-ASSEMBLE
var assembleTricycle = document.getElementById('reset-btn');
function reArrangeAll() {

	$('#reset-btn'). click(function(){

	$('[style]'). removeAttr('style');
});

}


assembleTricycle.addEventListener('click', reArrangeAll(),false);


//TO ADD MULTICOLOR TO THE TRICYCLE

var changeColor = document.getElementById('color-btn');

function selectMultiColor(){
   	
   	var element1 = document.querySelector('.part1A');

    // STORE THE NUMBER OF EACH COLOR
    //BY SELECTING THE NUMBERS RANDOMLY 
    //AND APPROXIMATE IT TO A WHOLE NUMBER
	var r = Math.floor(Math.random()* 255);
	var g = Math.floor(Math.random()* 255);
	var b = Math.floor(Math.random()* 255);

	var theColor = "rgb("+ r + ", "+ g +", "+ b + ")"; 

	element1.style.backgroundColor = theColor;



}

changeColor.addEventListener('click',selectMultiColor,false);


