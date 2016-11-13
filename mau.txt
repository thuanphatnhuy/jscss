//please contact me thuannhuy.vn@gmail.com
//website http://suanhatphcm.com/son-sua-nha-tai-tphcm/ or http://suadiennuoc24gio.com/dich-vu-sua-chua-nha-tron-goi-tphcm/

(function(JQuery) {
    JQuery.fn.Thuanphatnhuy = function(options) {        
        var defaults = {  
	    	animation: 'fadeAndPop', //fade, fadeAndPop, none
		    animationspeed: 300, //how fast animtions are
		    closeonbackgroundclick: true, //if you click background will modal close?
		    dismissmodalclass: 'close-Thuanphatnhuy-modal' //the class of a button or element that will close an open modal
    	}; 

        var options = JQuery.extend({}, defaults, options); 
	
        return this.each(function() {
        	var modal = JQuery(this),
        		topMeasure  = parseInt(modal.css('top')),
				topOffset = modal.height() + topMeasure,
          		locked = false,
				modalBG = JQuery('.Thuanphatnhuy-modal-bg');

			if(modalBG.length == 0) {
				modalBG = JQuery('<div class="Thuanphatnhuy-modal-bg" />').insertAfter(modal);
			}		    
			modal.bind('Thuanphatnhuy:open', function () {
			  modalBG.unbind('click.modalEvent');
				JQuery('.' + options.dismissmodalclass).unbind('click.modalEvent');
				if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modal.css({'top': JQuery(document).scrollTop()-topOffset, 'opacity' : 0, 'visibility' : 'visible'});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"top": JQuery(document).scrollTop()+topMeasure + 'px',
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					}
					if(options.animation == "fade") {
						modal.css({'opacity' : 0, 'visibility' : 'visible', 'top': JQuery(document).scrollTop()+topMeasure});
						modalBG.fadeIn(options.animationspeed/2);
						modal.delay(options.animationspeed/2).animate({
							"opacity" : 1
						}, options.animationspeed,unlockModal());					
					} 
					if(options.animation == "none") {
						modal.css({'visibility' : 'visible', 'top':JQuery(document).scrollTop()+topMeasure});
						modalBG.css({"display":"block"});	
						unlockModal()				
					}
				}
				modal.unbind('Thuanphatnhuy:open');
			}); 	

			modal.bind('Thuanphatnhuy:close', function () {
			  if(!locked) {
					lockModal();
					if(options.animation == "fadeAndPop") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"top":  JQuery(document).scrollTop()-topOffset + 'px',
							"opacity" : 0
						}, options.animationspeed/2, function() {
							modal.css({'top':topMeasure, 'opacity' : 1, 'visibility' : 'hidden'});
							unlockModal();
						});					
					}  	
					if(options.animation == "fade") {
						modalBG.delay(options.animationspeed).fadeOut(options.animationspeed);
						modal.animate({
							"opacity" : 0
						}, options.animationspeed, function() {
							modal.css({'opacity' : 1, 'visibility' : 'hidden', 'top' : topMeasure});
							unlockModal();
						});					
					}  	
					if(options.animation == "none") {
						modal.css({'visibility' : 'hidden', 'top' : topMeasure});
						modalBG.css({'display' : 'none'});	
					}		
				}
				modal.unbind('Thuanphatnhuy:close');
			});     
   	
    	modal.trigger('Thuanphatnhuy:open')
			
			//Close Modal Listeners
			var closeButton = JQuery('.' + options.dismissmodalclass).bind('click.modalEvent', function () {
			  modal.trigger('Thuanphatnhuy:close')
			});
			
			if(options.closeonbackgroundclick) {
				modalBG.css({"cursor":"pointer"})
				modalBG.bind('click.modalEvent', function () {
				  modal.trigger('Thuanphatnhuy:close')
				});
			}
			JQuery('body').keyup(function(e) {
        		if(e.which===27){ modal.trigger('Thuanphatnhuy:close'); } // 27 is the keycode for the Escape key
			});
			
			function unlockModal() { 
				locked = false;
			}
			function lockModal() {
				locked = true;
			}	
			
        });//each call
    }//orbit plugin call
})(jQuery);
        
jQuery(window).load(function() {
		if(document.cookie.indexOf("adf") == -1)
		{
			document.cookie = "adfpopunder1=adf";
			var divpopup = document.createElement("div");
			jQuery(divpopup).attr('id', 'myModal');
			jQuery(divpopup).attr('class', 'Thuanphatnhuy-modal');
			jQuery( "body" ).append(divpopup);
			jQuery("#myModal").html("<a href='https://goo.gl/M96m5O' target='_blank'><img src='https://lh3.googleusercontent.com/-4gVs8JhZqlc/WCh2y7gZXPI/AAAAAAAABIM/oOgew_ayhU8gwUtA67a51GHPqPb1KIq1QCJoC/w716-h323-p-rw/sua-chua-nha-gia-re.gif' width='500px'/><br/>Dịch Vụ Sơn Sửa Nhà Giá Rẻ</a>. LH O9O7588586. <h2><a class='close-Thuanphatnhuy-modal'>X</a></h2>");
			jQuery('#myModal').Thuanphatnhuy(jQuery('#myModal').data());
		}
});