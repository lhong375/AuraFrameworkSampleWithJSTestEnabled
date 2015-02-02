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
                    }
                    ]
                }]
        }],
        test : [
            function(cmp) {
            	$A.test.setTestTimeout(300000);
                $A.test.addWaitFor(false, $A.test.isActionPending);
            },function(cmp) {
            	var a = cmp.get("c.fetchDataRecord");
                a.setParams({testName : "testRefreshErrorResponseNotStored"});
                a.setCallback(cmp, function(action){
                    //debugger;
                	$A.test.assertEquals(action.getReturnValue(), "anything really", "we are not using the correct stub");
                });
                $A.test.enqueueAction(a);
            }, function(cmp) {
                var a = cmp.get("c.fetchDataRecord");
                a.setParams({testName : "testActionMocked"});
                a.setCallback(cmp, function(action){
                    //debugger;
                    //check what we do under bad database connection?
                    $A.test.assertEquals(action.getReturnValue(), null, "we are not using the correct stub #2");
                });
                $A.test.enqueueAction(a);
            }, function(cmp) {
                var a = cmp.get("c.fetchDataRecord");
                a.setParams({testName : "testActionMocked"});
                a.setCallback(cmp, function(action){
                    //debugger;
                    $A.test.assertEquals(action.getReturnValue(), "anything really, but something new","we are not using the correct stub");
                });
                $A.test.enqueueAction(a);
            } 
        ]
    },

    testFunctionMocked : {
        test : [
            function(cmp) {            
                var helper = cmp.getDef().getHelper();
                $A.test.overrideFunction(helper, "functionInHelper",
                    function (cmp) {
                        //debugger;
                        cmp.set("v.strAttributeWithDefaultValue", "new value from override function");
                    }
                );
                $A.test.clickOrTouch(cmp.find("button1").getElement());
            }, function(cmp) {
                $A.test.assertEquals("new value from override function", cmp.get("v.strAttributeWithDefaultValue"));
            }
        ]
    },

    testGlobalFunctionMocked : {
        test : [
            function(cmp) {
                $A.test.overrideFunction($A, "error", 
                    function(dispMsg) {
                        $A.message("!!! My Extra Message Added !!! "+dispMsg);
                    });
                $A.error("Let's throw some error.");
            }
        ]
    }
})