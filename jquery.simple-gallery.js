/*
* jQuery Simple Gallery Plugin
* @author Zhussupov Zhassulan <zhzhussupovkz@gmail.com>
* @version: 1.0
* MADE IN KAZAKHSTAN
*/
(function ($){
	jQuery.fn.simpleGallery = function (options){

		var options = $.extend({
			speed : 'slow'
		},options);

		var make = function(){
			$(this).click(function(){
				$('#box img').hide();
				$('#box img').attr('src', $(this).attr('src'));
				$('#box img').slideDown(options.speed);
			});
		};

		return this.each(make);
	};
})(jQuery)