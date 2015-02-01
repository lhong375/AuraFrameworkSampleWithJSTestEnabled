({
	testAttributeValue : {
		attributes: {strAttributeWithDefaultValue : "newValueInTest"},
		test : function(cmp) {
			$A.test.assertEquals("newValueInTest",cmp.get("v.strAttributeWithDefaultValue"));
		}
	}

})