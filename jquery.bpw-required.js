// version 1.2
(function($) {
  $.fn.extend({
	  require: function(options) {
      options=options||{};
		  var check=options.ctl;
      if(!check){
        check=($(this).find('span.check'))[0];
      }
		  $(this).submit(function(){
			  $(check).text('');
			  var arr=$(this).find('.required:visible');
			  var ret=true;
			  for(var i=0;i<arr.length;i++){
				  var val=$(arr[i]).val();
				  if(val==''){
					  $(arr[i]).addClass('req_error');
					  ret=false;
				  }else{
					  $(arr[i]).removeClass('req_error');
				  }
				  if(!ret && check){
            var str=options.text||'Some fields required!';
					  $(check).text(str);
				  }
			  }
			  return ret;
		  });
	  }
  });
})(jQuery);

