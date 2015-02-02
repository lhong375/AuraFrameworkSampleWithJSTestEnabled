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
        attributes : {
            defaultExpiration : 60,
            defaultAutoRefreshInterval : 0 // refresh every action
        },
        test : [function(cmp) {
        	$A.test.setTestTimeout(300000);
            this.resetCounter(cmp, "testRefreshErrorResponseNotStored");
            $A.test.addWaitFor(false, $A.test.isActionPending);
        },function(cmp) {
        	var a = cmp.get("c.fetchDataRecord");
            a.setParams({testName : "testRefreshErrorResponseNotStored"});
            a.setStorable();
            a.setCallback(cmp, function(action){
            	//sanity check
            	$A.test.assertEquals(action.getReturnValue(),"anything really","we are not using the correct stub");
                cmp.getDef().getHelper().findAndSetText(cmp, "callbackCounter",
                    parseInt(cmp.find("callbackCounter").getElement().innerHTML,10)+1);
            });
            $A.test.enqueueAction(a);
            $A.test.addWaitFor("1", function(){return $A.test.getText(cmp.find("callbackCounter").getElement())},
                function(){
                    $A.storageService.getStorage("actions").adapter.getItem(a.getStorageKey(),
                        function(item){cmp._originalExpiration = item.expires});
                });
        }, function(cmp) {
            var a = cmp.get("c.fetchDataRecord");
            a.setParams({testName : "testRefreshErrorResponseNotStored"});
            a.setStorable();
            a.setCallback(cmp, function(action){
            	cmp.getDef().getHelper().findAndSetText(cmp, "callbackCounter",
                    parseInt(cmp.find("callbackCounter").getElement().innerHTML,10)+1);
            });
            $A.test.enqueueAction(a);
            $A.test.addWaitFor("3", function(){return $A.test.getText(cmp.find("callbackCounter").getElement())},
                function(){
                    $A.storageService.getStorage("actions").adapter.getItem(a.getStorageKey(),
                        function(item){
                            $A.test.assertEquals(cmp._originalExpiration, item.expires,
                                "stored item should not have had expiration modified");
                        });
                });
            // wait for the timer to tick over
            var now = new Date().getTime();
            $A.test.addWaitFor(true, function() { return now < new Date().getTime(); }, function(){});
        }, function(cmp) {
            var a = cmp.get("c.fetchDataRecord");
            a.setParams({testName : "testRefreshErrorResponseNotStored"});
            a.setStorable();
            a.setCallback(cmp, function(action){
                var newCount = parseInt(cmp.find("callbackCounter").getElement().innerHTML,10) + 1;
                cmp.getDef().getHelper().findAndSetText(cmp, "callbackCounter", newCount);
                // first action run will be stored refresh action
                if (newCount == 4) {
                    $A.storageService.getStorage("actions").adapter.getItem(a.getStorageKey(),
                        function(item){
                            $A.test.assertEquals(cmp._originalExpiration, item.expires, "Refresh action not run");
                        });
                }
            });
            $A.test.enqueueAction(a);
            $A.test.addWaitFor("5", function(){return $A.test.getText(cmp.find("callbackCounter").getElement())},
                function(){
                    $A.storageService.getStorage("actions").adapter.getItem(a.getStorageKey(),
                        function(item){
                            // after new action is run, it is stored with new expires time
                            $A.test.assertTrue(cmp._originalExpiration < item.expires,
                                    "storage expiration was not updated after refresh");
                        });
                });
        } ]
    }
})