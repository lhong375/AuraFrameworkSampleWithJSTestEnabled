({
	testActionMocked : {
        mocks : [{
            type : "ACTION",
                stubs : [{
                    method : { name : "fetchDataRecord" },
                    answers : [{
                        value : "anything really"
                    },{
                        error : "java.lang.IllegalStateException"
                    },{
                        value : "anything really, but something new"
                    }]
                }]
        }],
        test : [function(cmp) {
        	$A.test.setTestTimeout(300000);
            $A.test.addWaitFor(false, $A.test.isActionPending);
        },function(cmp) {
        	var a = cmp.get("c.fetchDataRecord");
            a.setParams({testName : "testRefreshErrorResponseNotStored"});
            a.setCallback(cmp, function(action){
                debugger;
            	$A.test.assertEquals(action.getReturnValue(), "anything really", "we are not using the correct stub");
            });
            $A.test.enqueueAction(a);
        }, function(cmp) {
            var a = cmp.get("c.fetchDataRecord");
            a.setParams({testName : "testActionMocked"});
            a.setCallback(cmp, function(action){
                debugger;
                $A.test.assertEquals(action.getReturnValue(), null, "we are not using the correct stub #2");
            });
            $A.test.enqueueAction(a);
        }, function(cmp) {
            var a = cmp.get("c.fetchDataRecord");
            a.setParams({testName : "testActionMocked"});
            a.setCallback(cmp, function(action){
                debugger;
                $A.test.assertEquals(action.getReturnValue(),"anything really, but something new","we are not using the correct stub");
            });
            $A.test.enqueueAction(a);
        } ]
    }
})