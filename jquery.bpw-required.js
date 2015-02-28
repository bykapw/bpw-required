// version 1.4
(function($) {
  $.fn.extend({
	  require: function(options) {
      options=options||{};
		  var check=options.ctl;
      if(!check){
        check=($(this).find('span.check'))[0];
      }

      function check_item(ctl){
        var val=$(ctl).val();
        var re=$(ctl).attr('req-format') || '';
        if((re != '' && val.match(re)) || (re == '' && val != '')){
          $(ctl).addClass('req_ok').removeClass('req_error');
        }else{
          $(ctl).addClass('req_error').removeClass('req_ok');
        }
      };

			var arr=$(this).find('.required');
			for(var i=0;i<arr.length;i++){
        $(arr[i]).change(function(){
          check_item(this);
        });
        $(arr[i]).keyup(function(){
          check_item(this);
        });
      }

		  $(this).submit(function(){
			  $(check).text('');
			  var arr=$(this).find('.required:visible');
			  var ret=true;
			  for(var i=0;i<arr.length;i++){
          check_item(arr[i]);
			  }
			  var errs=$(this).find('.req_error');
				if(errs.length > 0 && check){
            var str=options.text||'Some fields required!';
					  $(check).text(str);
				}
			  return ret;
		  });
	  }
  });
})(jQuery);

