(function($){
	$(function(){
		var $window = $(window),
			body = $('body');

		$window.load(function() {

			var x = parseInt($('.wrap').first().css('padding-top')) - 15;

			$('#1 a, .scrolly').scrolly({
				speed:2000,
				offset:x
			});
		});
	});
})(jQuery);