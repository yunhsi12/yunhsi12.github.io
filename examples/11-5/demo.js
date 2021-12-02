window.onload=function(){
	$('body > div'.on('click',function(){
		//change one CSS property only
		//$(this).css('background-color','red');

		//change multiple CSS properties
		let newCSS={
			'background-color':'red';
			'font-size': '200%';
		};
		$(this).css(newCSS);
	});

	$('div> button').on('click',function(event){
		event.stopPropagation();
		alert('button clicked!!');
	})
};