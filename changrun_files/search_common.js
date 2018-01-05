	function setmodel(value, id, siteid, q) {
		$("#typeid").val(value);
		$("#search a").removeClass();
		id.addClass('on');
		if(q!=null && q!='') {
			window.location='?m=search&c=index&a=init&siteid='+siteid+'&typeid='+value+'&q='+q;
		}
	}
        $("input[name='q']").bind("focus", function () {
            $(".search").addClass("active");
        }).blur(function () {
            $(".search").removeClass("active");
        });
        $(function(){
          $("#submit").click(function(){
            var q=$('input[name="q"]').val().trim();
            if(q=="")
            {
               $('input[name="q"]').focus();
               return false; 
            }
            return true;
         });
        });
