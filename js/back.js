//Showing blog items
	$('#blog-items .more-info').click(function(e){
		e.preventDefault();
		var targetId = $(this).attr('href');
		$('#blog-items').hide();
		$(targetId+', #full-blog-items #blog-back').hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
	});
	
	$('#blog-back').click(function(e){
		e.preventDefault();
		$('.blogitem-content:visible, #blog-back').hide().addClass('hidden');
		$('#blog-items').fadeIn('400', 'easeInOutCubic');
		var documentBody = (($.browser.chrome)||($.browser.safari)) ? document.body : document.documentElement;
		$(documentBody).animate({scrollTop: $('#blog').offset().top}, 1000,'easeInOutCubic');
	});
	
	//Blog item nav
	$('.blogitem-content .pager a').click(function(e){
		e.preventDefault();
		var targetId = $(this).attr('href');
		$('.blogitem-content:visible').hide().addClass('hidden');
		$(targetId).hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
	});
	
	//Showing portfolio items
	$('#portfolio-items .more-info').click(function(e){
		e.preventDefault();
		var targetId = $(this).attr('href');
		$('#portfolio-items, #portfolio-filters').hide();
		$(targetId+', #portfolio-back').hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
	});
	
	$('#portfolio-back').click(function(e){
		e.preventDefault();
		$('.portfolioitem-content:visible, #portfolio-back').hide().addClass('hidden');
		$('#portfolio-items, #portfolio-filters').fadeIn('400', 'easeInOutCubic');
		var documentBody = (($.browser.chrome)||($.browser.safari)) ? document.body : document.documentElement;
		$(documentBody).animate({scrollTop: $('#portfolio').offset().top}, 1000,'easeInOutCubic');
	});
	
	//portfolio item nav
	$('.portfolioitem-content .pager a').click(function(e){
		e.preventDefault();
		var targetId = $(this).attr('href');
		$('.portfolioitem-content:visible').hide().addClass('hidden');
		$(targetId).hide().removeClass('hidden').fadeIn('400', 'easeInOutCubic');
	});


	
	//Isotop related actions
	var $containerblog = $('#blog-items');
	// initialize isotope
	$containerblog.imagesLoaded( function(){
		$containerblog.isotope({
	 		itemSelector : '.blogitem',
	 		layoutMode : 'fitRows'
		});
		
	});

	var $container = $('#portfolio-items');
	// initialize isotope
	$container.imagesLoaded( function(){
		$container.isotope({
	 		itemSelector : '.portfolioitem',
	 		layoutMode : 'fitRows'
		});
	});
	
	// filter items when filter link is clicked
	$('#portfolio-filters a').click(function(){
		$('#portfolio-filters a').parent('li').removeClass('active');
	  	var selector = $(this).attr('data-filter');
	  	$container.isotope({ filter: selector });
	  	$(this).parent('li').addClass('active');
	  	return false;
	});
		
	
	//Timeline
	$('.timeline-item-trigger span').click(function(){
		if($(this).hasClass('circle_plus')){$(this).removeClass('circle_plus').addClass('circle_minus');}
		else{$(this).removeClass('circle_minus').addClass('circle_plus');}
	});
	
	$('.timeline-item-title').click(function(){
		$trigger = $(this).parent().parent().find('.timeline-item-trigger span');
		if($trigger.hasClass('circle_plus')){$trigger.removeClass('circle_plus').addClass('circle_minus');}
		else{$trigger.removeClass('circle_minus').addClass('circle_plus');}
	});
	
