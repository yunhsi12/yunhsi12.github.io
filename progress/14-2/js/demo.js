var menuOpen=false; //the default state of the floating menu

window.onload=function(){
	$('body').on('click',function(){
		//try to close a menu when the menu is open
		if(menuOpen){
			let menuItems=$('nav>a:not(:first-of-type)');
			let delay=0;
			menuItems.each(function(index){
				setTimeout(function(){
					menuItems.eq(index).animate({'opacity':0},300, function(){
						menuItems.eq(index).css({'display':'none'});
				});
			},delay +(50*index));
			});
			//cannot use 'this' here since 'this' corresponds to <body>
			$('nav> a:first-of-type').removeClass('close');
			menuOpen=false;
		}
	});


	$('nav>a:first-of-type').on('click',function(event){
		event.preventDefault();//Stop the navigating default action of a hyperlink
		event.stopPropagation();//stop prpagating the event to <nav>
		//Get all the non-first <a> elements under <nav> and stored them into menuItems
		let menuItems=$('nav>a:not(:first-of-type)');
		//set up a variable for creating a different length of animation delay
		let delay=0;
		if(menuOpen){
			menuItems.each(function(index){
				setTimeout(function(){
					menuItems.eq(index).animate({'opacity':0},300, function(){
						menuItems.eq(index).css({'display':'none'});
				});
			},delay +(50*index));
			});
			$(this).removeClass('close');
			menuOpen=false;
		}
		//when menuOpen is false, try to show the entire menu.
		else{
			//run a function with the index informatipm for every items stored in menuItems
			menuItems.each(function(index){
				//use setTimeout to delay an animation for every single menuItems
				setTimeout(function(){
					menuItems.eq(index).css({'display': 'inline'});
					menuItems.eq(index).animate({'opacity':0.6},300);
				},delay + (50*index));

			});
			//Add the class name 'close' to the clicked first <a> under <nav>
			$(this).addClass('close');
			menuOpen=true;
		};
	});
};