({
	testAttributeValue : {
		//attributes: {strAttributeWithDefaultValue : "newValueInTest"},
		test : function(cmp) {
			$A.test.assertEquals("newValueInTest",cmp.getValue("v.strAttributeWithDefaultValue"));
		}
	}

})