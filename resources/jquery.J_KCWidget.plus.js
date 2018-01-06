/*其它定制方法*/

/*开关灯效果*/
/*
if(J_KCWidget) $.extend(J_KCWidget, {
	J_Switchlights:function(o,$config){
		var s = {
			'trigger': '.trigger',
			'opacity': 7
		};
		if($config) $.extend(s, $config);
		var active = "ks-i",
			t = $(s.trigger,o),
			p = parseInt( (s.opacity>9) ? 9 : ( (s.opacity<1) ? 1 : s.opacity )) / 10 ;
		t.hover(function() {
			$(this).addClass(active);
			t.not("."+active).css("opacity",p);
		},function() {
			t.removeClass(active).css("opacity",1);
		});
	}
});*/

if(J_KCWidget) $.extend(J_KCWidget, {
	/*
		playlist: [{
			image: "/assets/sintel.jpg",
			file: "/assets/sintel.mp4",
			title: "Sintel Movie Trailer"
		},{
			image: "/assets/bunny.jpg",
			file: "/assets/bunny.mp4",
			title: "Big Buck Bunny Movie Trailer"
		}]
	*/
	J_Player:function(o,$config){
		var s = $.extend({
				id:"kcdns"+Math.floor(Math.random()*1000000),
				playlist:null,
				file: "",
				image: "",
				width: 480,
				height: "",
				title: "",
				listbar: {
					position: '',
					size: 0
				},
				logo: {
					file: '',
					link: ''
				},
				autostart: false,
				aspectratio: "",
				analytics: {
					enabled: false
				}
				},$config || {});
		function init(l){
			if (typeof jwplayer!="undefined"){
				o.attr("id",s.id);
				jwplayer(s.id).setup(s);
			}else{
				if (!l){
					jQuery.getScript(J_KCWidget.Path +"jwplayer.js",function(){init(true);})
				}
			}
		}
		init();
	}
});
