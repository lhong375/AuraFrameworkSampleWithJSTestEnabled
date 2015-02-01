AuraFrameworkSampleWithJSTestEnabled
====================================

This is a project template created follow instructions from https://github.com/forcedotcom/aura (Generate a Template). However, running component test with test mode (aura.mode=JSTEST) was not possible, i change things a little bit for it to work.

====================================

Step 1: Build 

mvn clean install

Step 2:

Start the Jetty server on port 8080.

mvn jetty:run

To use another port, append: -Djetty.port=portNumber. For example, mvn jetty:run -Djetty.port=9877.

Test your app in a browser by navigating to:

http://localhost:8080/helloWorld/helloWorld.app
You should see a simple greeting in your browser.

To stop the Jetty server and free up the port when you are finished, press CTRL+C on the command line.

Note: the helloWorld/pom.xml file has a <dependencies> section, which lists the <version> of each Aura artifact in your project. They define the version of Aura that your project is using and each artifact should use the same version.