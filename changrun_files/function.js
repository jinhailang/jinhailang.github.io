function png_bg_fixed(obj){
	var bg = obj.currentStyle.backgroundImage.toUpperCase();
	if (!bg) return;
	if (bg.match(/.PNG/i) != null){
		obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+bg.substring(5,bg.length-2)+"', sizingMethod='scale')";
		obj.style.backgroundImage = "url('')";
	}
}
function png_tag_fixed(obj){
	var imgName = obj.src.toUpperCase();
	if (imgName.substring(imgName.length-3, imgName.length) != 'PNG') return ;
	var imgStyle =  'width:' + obj.width + 'px; height:' + obj.height + 'px;'
		+((obj.align == 'left')?'float:left;':'')
		+((obj.align == 'right')?"float:right;":'')
		+((obj.parentElement.href)?'cursor:hand;':'')
		+'display:inline-block;' + obj.style.cssText
		+'filter:progid:DXImageTransform.Microsoft.AlphaImageLoader'
		+"(src=\'" + obj.src + "\', sizingMethod='scale');";
	$("<span "
		+ ((obj.id) ? "id='" + obj.id + "' " : "")
		+ ((obj.className) ? "class='" + obj.className + "' " : "")
		+ ((obj.title) ? "title='" + obj.title + "' " : "title='" + obj.alt + "' ")
		+ " style=\"" + imgStyle + "\"></span>").replaceAll(o);
}

//搜索框效果
var isfocus = false;
function checktopsearch(type){
	if (type=='in'){
		isfocus = true;
		$(".search").addClass("search_focus").animate({
			width: "230px"
		   }, 390 ).siblings().animate({
			width: "150px"
		   }, 400 );
	}else{
		setTimeout(function(){
			if (isfocus){
				$(".search").removeClass("search_focus").animate({
					width: "170px"
				   }, 400 ).siblings().animate({
					width: "162px"
				   }, 400 );
				isfocus = false;
			}
		},300);
	}
}


$(document).ready(function() {
	if (!J_KCWidget.Path){J_KCWidget.Path = "/statics/js/kc/";}
	$(".J_KCWidget").J_KCWidget();
	if(!window.XMLHttpRequest){
		$(".pngbg").each(function(){
				png_bg_fixed($(this)[0]);
		});
		$(".pngtag").each(function(){
				png_tag_fixed($(this)[0]);
		});
	}
	$(".search_l").click(function(){
		$(".search_l .text").focus();
	});
	if ($(".jinrong_right")[0]){
		if ($(".jinrong_right").height()<550)$(".jinrong_right").height(550);
	}
});


function getClassMenu(t,o){
	$(o).bind("mouseleave",function(){
		J_KCWidget.$['pop1'].fn.close()
	})
}

/***处理手机的****/
function phone_kc(obj){
		var img_w=obj.width();
		var img_h=obj.height();
		var ping_w=$(window).width();
		if(img_w>ping_w){
			var img_wn=ping_w/2;
			var bili=img_wn/img_w;
			var img_hn=img_h*bili;
			obj.width(img_wn);
			obj.height(img_hn);
		}
	}
	
/**
 *	video_url 视频地址
 *	img_path  开场图片地址
 *	js_path   js路径
 *	width, height  播放器宽高
*/
function video(video_url, img_path, js_path, width, height)
{
	var flashvars={
		p:'0',
		f:video_url,
		s:'0',
		c:'0',
		i:img_path,
		t:'0|1',
		e:'5',
		v:'80',
		h:'4',
		m:'1',
		wh:'16:9',
		ct:'2',
		my_url:encodeURIComponent(window.location.href)
		};
	var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always'};
	var attributes={id:'ckplayer_a1',name:'ckplayer_a1',menu:'false'};
	
	CKobject.embedSWF(js_path+'ckplayer/ckplayer.swf','a1','ckplayer_a1',width,height,flashvars,params);
	
	var video=[video_url+'->video/mp4'];
	var support=['iPad','iPhone','ios','android+false','msie10+false'];
	CKobject.embedHTML5('video','ckplayer_a1',width,height,video,flashvars,support);
}
