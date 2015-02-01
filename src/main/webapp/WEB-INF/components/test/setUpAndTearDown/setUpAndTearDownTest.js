({

    setUp: function() {
        this._sharedList = ["A", "B", "C"];
    },

    tearDown : function(component){
        this._sharedList = null;
        delete this._sharedList;
    },

    testUseSharedList:{
        test: [ 
            function(cmp) {            
                $A.test.assertEquals("A", this._sharedList[0]);
                this._sharedList[0] = "D";
            }, function(cmp) {
                $A.test.assertEquals("D", this._sharedList[0]);
            }
        ]
    },

    testUseShareList2: {
         test: [ 
            function(cmp) {            
                $A.test.assertEquals("A", this._sharedList[0]);
            }
        ]
    }
})

