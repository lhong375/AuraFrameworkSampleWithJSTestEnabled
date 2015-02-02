package org.auraframework.demo.controller;

import org.auraframework.Aura;
import org.auraframework.def.ComponentDef;
import org.auraframework.instance.Component;
import org.auraframework.system.Annotations.AuraEnabled;
import org.auraframework.system.Annotations.BackgroundAction;
import org.auraframework.system.Annotations.CabooseAction;
import org.auraframework.system.Annotations.Controller;
import org.auraframework.system.Annotations.Key;
import org.auraframework.test.TestContextAdapter;
import org.auraframework.throwable.AuraRuntimeException;
import org.auraframework.throwable.quickfix.QuickFixException;
import org.auraframework.util.json.Json;
import org.auraframework.util.json.JsonSerializable;

@Controller
public class exampleController {
	@AuraEnabled
    public static String fetchDataRecord(@Key("testName") String testName) throws Exception {
       return "Test";
    }
}

