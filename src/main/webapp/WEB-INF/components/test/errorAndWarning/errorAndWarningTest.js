({
	testFailOnWarning: {
        failOnWarning: true,
        test: function(cmp) {
        	//order matters!
            $A.test.expectAuraWarning("Expected warning from testFailOnWarning");
            $A.warning("Expected warning from testFailOnWarning");
        }
    },

    testExpectedWarningDuringInit: {
    	failOnWarning: true,
    	attributes: { "throwWarningInInit": true },
        auraWarningsExpectedDuringInit: ["Expected warning from controller's init"],
        test: function(cmp) {
            //this test is for check the expected warning during init, do nothing here
        }
    },

    testExpectedError: {
    	test: function(cmp) {
    		$A.test.expectAuraError("Expected error from testExpectedError");
    		$A.error("Expected error from testExpectedError");
    	}
    }
})