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



//CHANGING COLOR FOR DIV PART1A, PART2A, PART5A, PART4A, 4B2,tyresB

$('#color-btn') .click(function(){

	var element1 = document.querySelector('.part1A');
	var element2 = document.querySelector('.part2A');
	var element3 = document.querySelector('.part5A');
	var element4 = document.querySelector('.part4A');
	var element5 = document.querySelector('.part4B2');
	var element6 = document.querySelector('.tyresB');




    // STORE THE NUMBER OF EACH COLOR
    //BY SELECTING THE NUMBERS RANDOMLY 
    //AND APPROXIMATE IT TO A WHOLE NUMBER
	var r = Math.floor(Math.random()* 255);
	var g = Math.floor(Math.random()* 255);
	var b = Math.floor(Math.random()* 255);

 	var theColor = "rgb("+ r + ", "+ g +", "+ b + ")"; 

 
 		   element1.style.backgroundColor = theColor;
 		   element2.style.backgroundColor = theColor;
 		   element3.style.backgroundColor = theColor;
 		   element4.style.backgroundColor = theColor;
 		   element5.style.backgroundColor = theColor;
 		   element6.style.backgroundColor = theColor;







});



//CHANGING COLOR FOR DIV PART3A
$('#color-btn') .click(function(){

	var element1a = document.querySelector('.part3A');
	


    // STORE THE NUMBER OF EACH COLOR
    //BY SELECTING THE NUMBERS RANDOMLY 
    //AND APPROXIMATE IT TO A WHOLE NUMBER
	var r1 = Math.floor(Math.random()* 255);
	var g1 = Math.floor(Math.random()* 255);
	var b1 = Math.floor(Math.random()* 255);

 	var theColor = "rgb("+ r1 + ", "+ g1 +", "+ b1 + ")"; 

 
 		   element1a.style.backgroundColor = theColor;



});





//CHANGING COLOR FOR DIV PART5C,5D2,2C1,4B1,tyresA
$('#color-btn') .click(function(){

	var element1b = document.querySelector('.part5C');
	var element1c = document.querySelector('.part5D2');
	var element1d = document.querySelector('.part2C1');
	var element1e = document.querySelector('.part4B1');
	var element1f = document.querySelector('.tyresA');




	


    // STORE THE NUMBER OF EACH COLOR
    //BY SELECTING THE NUMBERS RANDOMLY 
    //AND APPROXIMATE IT TO A WHOLE NUMBER
	var r2 = Math.floor(Math.random()* 255);
	var g2 = Math.floor(Math.random()* 255);
	var b2 = Math.floor(Math.random()* 255);

 	var theColor = "rgb("+ r2 + ", "+ g2 +", "+ b2 + ")"; 

 
 		   element1b.style.backgroundColor = theColor;
 		   element1c.style.backgroundColor = theColor;
 		   element1d.style.backgroundColor = theColor;
 		   element1e.style.backgroundColor = theColor;
 		   element1f.style.backgroundColor = theColor;







});



//CHANGING COLOR FOR DIV PART1B,1C,6B
$('#color-btn') .click(function(){

	var element2a = document.querySelector('.part1B');
	var element2b = document.querySelector('.part1C');
	var element2c = document.querySelector('.part6B');



	


    // STORE THE NUMBER OF EACH COLOR
    //BY SELECTING THE NUMBERS RANDOMLY 
    //AND APPROXIMATE IT TO A WHOLE NUMBER
	var r3 = Math.floor(Math.random()* 255);
	var g3 = Math.floor(Math.random()* 255);
	var b3 = Math.floor(Math.random()* 255);

 	var theColor = "rgb("+ r3 + ", "+ g3 +", "+ b3 + ")"; 

 
 		   element2a.style.backgroundColor = theColor;
 		   element2b.style.backgroundColor = theColor;
 		   element2c.style.backgroundColor = theColor;

});


//CHANGING COLOR FOR DIV PART4new2,5D4
$('#color-btn') .click(function(){

	var element3a = document.querySelector('.PART4new2');
	var element3b = document.querySelector('.part5D4');
		var element3c = document.querySelector('.PART4new1');




	


    // STORE THE NUMBER OF EACH COLOR
    //BY SELECTING THE NUMBERS RANDOMLY 
    //AND APPROXIMATE IT TO A WHOLE NUMBER
	var r4 = Math.floor(Math.random()* 255);
	var g4 = Math.floor(Math.random()* 255);
	var b4 = Math.floor(Math.random()* 255);

 	var theColor = "rgb("+ r4 + ", "+ g4 +", "+ b4 + ")"; 

 
 		   element3a.style.backgroundColor = theColor;
 		   element3b.style.backgroundColor = theColor;
 		   element3c.style.backgroundColor = theColor;


});


//CHANGING COLOR FOR DIV PART3B,6A1
$('#color-btn') .click(function(){

	var element4a = document.querySelector('.PART3B');
	var element4b = document.querySelector('.part6A1');
	var element4c = document.querySelector('.part2');
	var element4d = document.querySelector('.tyresC');





	


    // STORE THE NUMBER OF EACH COLOR
    //BY SELECTING THE NUMBERS RANDOMLY 
    //AND APPROXIMATE IT TO A WHOLE NUMBER
	var r5 = Math.floor(Math.random()* 255);
	var g5 = Math.floor(Math.random()* 255);
	var b5 = Math.floor(Math.random()* 255);

 	var theColor = "rgb("+ r5 + ", "+ g5 +", "+ b5 + ")"; 

 
 		   element4a.style.backgroundColor = theColor;
 		   element4b.style.backgroundColor = theColor;
 		   element4c.style.backgroundColor = theColor;
 		   element4d.style.backgroundColor = theColor;



});


$(function () {
	$("#mleft-btn").click(function () {
		moveRight();		
	});

	function moveRight() {
		$("#kekeNapep").animate({
			left: 400
		}, 500, moveDown);
	}
	function moveDown() {
		$("#kekeNapep").animate({
			top: 400
		}, 1000, moveLeft);
	}

	function moveLeft() {
		$("#kekeNapep").animate({
			left: 0
		}, 2000, moveUp);
	}

	function moveUp() {
		$("#kekeNapep").animate({
			top: 0
		}, 500, moveRight);
	}
});



$(function(){

   $('#mforward-btn') .click(function()  {
         moveToRight();
   });

   function moveToRight(){

      $("#kekeNapep") .animate({

      	 left:500
      }, 500 , moveToLeft);

   }

   function moveToLeft(){

   	$("#kekeNapep") .animate({

   		left:0
   	},1000);

   }

});
