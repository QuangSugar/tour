jQuery(document).ready(function(){
// Tooltip
// Back to Top
// ---------------------------------------------------------
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 35) {
			jQuery('#back-top').fadeIn();
			jQuery('.midle_header').addClass('fixed_active');
		} else {
			jQuery('#back-top').fadeOut();
			jQuery('.midle_header').removeClass('fixed_active');
		}
	});
	jQuery('#back-top a').click(function () {
		jQuery('body,html').stop(false, false).animate({
			scrollTop: 0
		}, 800);
		return false;
	});
// ---------------------------------------------------------
jQuery(function(){
	jQuery('#menu_mobile_full ul li.menu-item-has-children').append("<span>+</span>");
	jQuery('#menu_mobile_full ul li.menu-item-has-children span').click(function(){
		jQuery(this).closest("li.menu-item-has-children").find('ul.sub-menu').slideUp(300);
				if (!jQuery(this).closest("li.menu-item-has-children").hasClass('active')) {
				  jQuery(this).closest("li.menu-item-has-children").removeClass('active');
				  jQuery(this).closest("li.menu-item-has-children").addClass('active');
				  jQuery(this).html("-");
				  jQuery('#menu_mobile_full ul .active').find('ul:first').stop().slideDown(300);
				}
				else
				  if (jQuery(this).closest("li.menu-item-has-children").hasClass('active')) {
				  	jQuery(this).html("+");
					  jQuery(this).closest("li.menu-item-has-children").find('ul').slideUp(300);
					  jQuery(this).closest("li.menu-item-has-children").removeClass('active');
				}
	});
});
jQuery(function(){
	jQuery(".icon_mobile_click").click(function(){
		jQuery(this).fadeOut(300);
		jQuery('.close_menu').fadeIn(300);
		jQuery('.bg_menu_mobile').fadeIn(300);
		jQuery(".icon_mobile_active").fadeIn(300);
		jQuery("#page_wapper").addClass('page_wapper_active');
		jQuery("#menu_mobile_full").addClass('menu_show').stop().animate({left: "0px"},260);
	});
	jQuery(".close_menu").click(function(){
		jQuery(this).fadeOut(100);
		jQuery('.bg_menu_mobile').fadeOut(300);
		jQuery('.icon_mobile_active').fadeOut(300);
		jQuery(".icon_mobile_click").fadeIn(300);
		jQuery("#menu_mobile_full").animate({left: "-260px"},260).removeClass('menu_show');
		jQuery("#page_wapper").removeClass('page_wapper_active');
	});
	jQuery(".bg_menu_mobile").click(function(){
		jQuery(this).fadeOut(300);
		jQuery('.close_menu').fadeOut(300);
		jQuery('.icon_mobile_active').fadeOut(300);
		jQuery(".icon_mobile_click").fadeIn(300);
		jQuery("#menu_mobile_full").animate({left: "-260px"},260).removeClass('menu_show');
		jQuery("#page_wapper").removeClass('page_wapper_active');
	});
});
// ---------------------------------------------------------
// images loader
// ---------------------------------------------------------
	var MSIE8 = (jQuery.browser.msie) && (jQuery.browser.version == 8);
	jQuery('img[data-src]').bind('load', img_load_complete);
	jQuery(window).bind('resize', img_loader).bind('scroll', img_loader).trigger('scroll');
	
	function img_loader(){
		var get_img = jQuery('img[data-src]').eq(0)
		if(get_img[0]){
			var visible_height = jQuery(window).scrollTop() + jQuery(window).height(),
				img_top_position = get_img.offset().top;
			if(img_top_position<visible_height){
				get_img.attr({'src':get_img.attr('data-src')}).removeAttr('data-src');
				if(!MSIE8){
					get_img.fadeOut(0)
				}
			};
		}else{
			jQuery(window).unbind('resize', img_loader).unbind('scroll', img_loader);
		}
	}
	function img_load_complete(){
		jQuery(this).unbind('load');
		if(!MSIE8){
			jQuery(this).fadeIn(500)
		}
		if(jQuery('body.blog')[0]){
			isotope_holder.isotope('reLayout');
		}
		img_loader();
	}
// ---------------------------------------------------------
/*-----------------*/
// set voting post JS
// ---------------------------------------------------------
	jQuery('.ajax_voting').bind('click', voitng);
	function voitng(){
		var item= jQuery(this),
			item_parent = item.parents('[class*="meta_type"]'),
			type = item.attr('date-type'),
			item_class='user_'+type,
			count = parseInt(jQuery('.voting_count', item).text()),
			top_position = (type==='like') ? -18 : 18 ,
			mark = (type==='like') ? '+' : '-', 
			post_url = item.attr('href');
		jQuery('.post_like>a, .post_dislike>a', item_parent).unbind('click', voitng).removeAttr('href date-type').removeClass('ajax_voting').addClass('user_voting');
		item.removeClass('user_voting').addClass(item_class).find('.voting_count').text(++count).append('<span class="animation_item">'+mark+'1</span>');
		jQuery('.animation_item', item).stop(true).animate({'top':top_position, opacity:'0'}, 500, 'easeOutCubic', function(){jQuery(this).remove()});
		jQuery.post(post_url);
		return false;
	}
// ---------------------------------------------------------
jQuery(function(){
	jQuery('.sidebar_left ul li.menu-item-has-children').append("<span>+</span>");
	var url = window.location.href;
	jQuery('.sidebar_left .menu-danh-muc-san-pham li a[href="'+ url +'"]').parents('li').addClass('better-active active').find('span').html("-").closest('li').find('ul:first').stop().slideDown(300);
	jQuery('.sidebar_left .menu-danh-muc-san-pham li a').filter(function() {return this.href == url;}).closest('li').addClass('better-active active');
	jQuery('.sidebar_left ul li.menu-item-has-children span').click(function(){
		jQuery(this).closest("li.menu-item-has-children").find('ul.sub-menu').slideUp(300);
				if (!jQuery(this).closest("li.menu-item-has-children").hasClass('active')) {
				  jQuery(this).closest("li.menu-item-has-children").removeClass('active');
				  jQuery(this).closest("li.menu-item-has-children").addClass('active');
				  jQuery(this).html("-");
				  jQuery('.sidebar_left ul .active').find('ul:first').stop().slideDown(300);
				}
				else
				  if (jQuery(this).closest("li.menu-item-has-children").hasClass('active')) {
				  	jQuery(this).html("+");
					  jQuery(this).closest("li.menu-item-has-children").find('ul').slideUp(300);
					  jQuery(this).closest("li.menu-item-has-children").removeClass('active');
				}
	});
});
// Contact form loader
// ---------------------------------------------------------
	jQuery('.wpcf7-submit').after('<div class="ajax-loader"></div>');
	jQuery('.wpcf7-submit').click(function(){
		var listener = setInterval(
				function(){
					if(jQuery('img.ajax-loader').css('visibility')=='visible'){
						jQuery('div.ajax-loader').css({'display':'inline-block'});
					}else{
						jQuery('div.ajax-loader').css({'display':'none'});
						clearInterval(listener);
					}
				},100);
	})
// ---------------------------------------------------------
// Contact form notvalid tip fadeOut
// ---------------------------------------------------------
jQuery(function() {
  // clear cf7 error msg on mouseover
	jQuery(".wpcf7-form-control-wrap").on("mouseover", function(){
		jQuery("span.wpcf7-not-valid-tip", this).fadeOut();
	});
});
////////////
jQuery(window).load(function(){
	if(jQuery('.box_loaitour select').val()==0){
		jQuery('.box_diemden #tour-trongnuoc').addClass('active');
  		jQuery('.box_diemden #tour-nuocngoai').removeClass('active');
	}
	else{
		jQuery('.box_diemden #tour-nuocngoai').addClass('active');
  		jQuery('.box_diemden #tour-trongnuoc').removeClass('active');
	}
});
jQuery('.box_loaitour select').on('change', function() {
  var value = this.value ;
  if (value==0){
  	jQuery('.box_diemden #tour-trongnuoc').addClass('active');
  	jQuery('.box_diemden #tour-nuocngoai').removeClass('active');
  }
  else{
  	jQuery('.box_diemden #tour-nuocngoai').addClass('active');
  	jQuery('.box_diemden #tour-trongnuoc').removeClass('active');
  }
});
////////
});
function scroll_to(div){
	jQuery('html, body').animate({scrollTop: jQuery(div).offset().top},1000);
}