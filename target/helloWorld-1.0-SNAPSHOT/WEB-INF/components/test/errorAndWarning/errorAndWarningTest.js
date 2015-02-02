({
	testFailOnWarning: {
        failOnWarning: true,
        test: function(cmp) {
            $A.warning("Expected warning from testFailOnWarning");
            $A.test.expectAuraWarning("Expected warning from testFailOnWarning");
        }
    },

    testExpectedWarningDuringInit: {
    	failOnWarning: true,
        auraWarningsExpectedDuringInit: ["Expected warning from auraWarningTestController init"],
        test: function(cmp) {
            //this test is for check the expected warning during init, do nothing here
        }
    },
})