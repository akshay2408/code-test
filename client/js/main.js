$(function(){
	var win = $(window),
		doc = $(document),
		body = $('body'),
		$self = $(this);
		
	// File upload
    $('.file-upload').change(function() {
        var filepath = this.value;
        var m = filepath.match(/([^\/\\]+)$/);
        var filename = m[1];
        $(this).parent('label').siblings('span').html(filename);
    });

  $(document).on('click', "button.navbar-toggle", function(){
    if ($("body").hasClass("open-menu")) {
      $(this).closest("body").removeClass("open-menu");
    }else{
      $(this).closest("body").addClass("open-menu");
    }
  });

  $(document).on("click", ".close-icon-btn", function(){
    $('body').removeClass('open-menu');
  });

  $(document).on("click", ".custom-nav-menu li", function(){
    $(".custom-nav-menu li").removeClass('active');
    
    if(!$(this).children().hasClass('menu-link-btn'))
      $(this).addClass('active');
  });
});