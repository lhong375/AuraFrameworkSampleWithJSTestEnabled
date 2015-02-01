({

	browsers:["GOOGLECHROME", "ANDROID_PHONE", "ANDROID_TABLET"],

    setUp: function() {
        this._sharedList = ["A", "B", "C"];
    },

    testUseSharedList:{
        test: [ 
            function(cmp) {            
                $A.test.assertEquals("A", this._sharedList[0]);
                this._sharedList[0] = "D";
            }, function(cmp) {
                $A.test.assertEquals("A", this._sharedList[0]);
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

