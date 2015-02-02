({
	testWithOnlyOneStage : {
		test : function(cmp) {
			$A.test.assertEquals("default value", cmp.get("v.strAttributeWithDefaultValue"));
		}
	},

	testWithMultipluStages : {
		test: [function(cmp) {
			//change the attribute to trigger re-render
			$A.test.clickOrTouch( cmp.find("button1").getElement() );
			//debugger;
		}, function(cmp) {
			console.log("the re-render happen when previous test stage finished");
			$A.test.assertEquals("string attribute = new value from controller", 
				$A.test.getText(cmp.find("div1").getElement()));
		}, function(cmp) {
			//something else 
		}]
	},

	testWithAttributePassedIn : {
		attributes: {strAttributeWithDefaultValue : "newValueInTest"},
		test : function(cmp) {
			$A.test.assertEquals("newValueInTest",cmp.get("v.strAttributeWithDefaultValue"));
		}
	},

	//This won't work
	_testWithObjAttributePassedIn : {
		attributes: {objAttribute : {"key" : "hey"}},
		test : function(cmp) {
			console.log(cmp.get("v.objAttribute.key"));
			$A.test.assertEquals("hey", cmp.get("v.objAttribute.key"));
		}
	}

})