$(function(){
	
    /*(function(){
	   	var MobileUA = (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
		//SmartPhone 
		if (MobileUA) {
			document.getElementsByTagName('body')[0].style.cursor="pointer";
		}else{
			document.getElementsByTagName('body')[0].style.cursor="inherit";
		}
    })();*/
	
	
	//顶部菜单控制器
	/*;(function(){
		$('.menu-toggle').bind('click',function(){
			$('.kc_20130626_nav').stop(true,true).slideToggle();	
			return false;
		});
		
		$(document).click(function(e){
			var target = $(e.target);
			if($('.menu-toggle').css('display')=='block'){
				if(target.closest('.kc_20130626_nav').length == 0 && target.closest('.menu-toggle').length == 0){
					$('.kc_20130626_nav').stop().slideUp();	
				}
			}
		})
		
		
	})();*/
	
	//动态改变底部的marginTop和bd的paddingBottom;
	;(function(){
		var w = (screen.width > 0) ? (window.innerWidth >= screen.width || window.innerWidth == 0) ? screen.width : window.innerWidth : window.innerWidth
		var h= window.innerHeight;
		function ftMarginTop(){
			var $ft=$("#content > #ft");
			var $bd=$("#content > #bd");
			var fH=$ft.height();
			$ft.css('marginTop',-fH);
			$bd.css({
				'paddingBottom':fH+'px'
			});
		}
		if(w<=640){
			ftMarginTop();
			$(window).resize(function(){
				ftMarginTop();
			})
		}
		
		setTimeout(function(){
			if(document.getElementById('ucf_list_imgText')){
				var wWidth=(document.documentElement.scrollWidth>document.documentElement.clientWidth) ? document.documentElement.scrollWidth : document.documentElement.scrollWidth; 
				var href=window.location.hash.substr(1);
	        	var el=document.getElementsByClassName(href)[0];
				if(wWidth<=640){
	        		window.scrollTo(0,getElementTop(el)-110);
	    		}else{
	    			window.scrollTo(0,getElementTop(el));
	    		}
		        
	        	function getElementTop(element){
			　　　　var actualTop = element.offsetTop;
			　　　　var current = element.offsetParent;
			　　　　while (current !== null){
			　　　　　　actualTop += current.offsetTop;
			　　　　　　current = current.offsetParent;
			　　　　}
			　　　　return actualTop;
			　　}
			}
		},300)

		
	})()
})
	


