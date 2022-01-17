window.onload=function(){
	$('nav>a:first-of-type').on('click',function(event){
		event.preventDefault();//Stop the navigating default action of a hyperlink
		//take all the non-first <a> elements under <nav> and apply the toggle() function
		$('nav>a:not(:first-of-type').toggle(400);
		//this= clicked first <a> element under <nav>; toggleClass()=add/remove a class name.
		$(this).toggleClass('close');
	});
};