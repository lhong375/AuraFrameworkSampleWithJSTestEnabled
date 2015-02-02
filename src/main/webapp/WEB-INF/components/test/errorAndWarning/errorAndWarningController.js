({
    onInit: function(cmp) {
    	if(cmp.get("v.throwWarningInInit") == true ) 
        {
        		$A.warning("Expected warning from controller's init");
        }
    }
})