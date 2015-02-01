AuraFrameworkSampleWithJSTestEnabled
====================================

This is a project template created follow instructions from https://github.com/forcedotcom/aura (Generate a Template). However, running component test with test mode (aura.mode=JSTEST) was not possible, i change things a little bit for it to work.

====================================

Step 1: Generate a Template from the Aura Archetype

Open a command line window.
Navigate to the directory where you want to create your project template and run:

mvn archetype:generate -DarchetypeCatalog=http://repo.auraframework.org/libs-release-local/archetype-catalog.xml

When prompted to choose an archetype, enter 1.

Select the latest archetype version, or press enter for the default version. The archetype is downloaded to your machine.
Enter these values:

Define value for property 'groupId': org.myGroup
Define value for property 'artifactId': helloWorld
Define value for property 'version': 1.0-SNAPSHOT
Define value for property 'package': org.myGroup
Note: The artifactId can only contain alphanumeric characters.
When prompted to confirm properties configuration, enter Y. The following output confirms that your template has been generated successfully.

[INFO] ----------------------------------------------------------------------------
[INFO] Using following parameters for creating project from Archetype: aura-archetype:0.0.1-SNAPSHOT
[INFO] ----------------------------------------------------------------------------
[INFO] Parameter: groupId, Value: org.myGroup
[INFO] Parameter: artifactId, Value: helloWorld
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] Parameter: package, Value: org.myGroup
[INFO] Parameter: packageInPathFormat, Value: org.myGroup
[INFO] Parameter: package, Value: org.myGroup
[INFO] Parameter: version, Value: 1.0-SNAPSHOT
[INFO] Parameter: groupId, Value: org.myGroup
[INFO] Parameter: artifactId, Value: foo
[INFO] project created from Archetype in dir: /home/
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 33.656s
[INFO] Finished at: Tue Jul 16 14:39:07 PST 2013
[INFO] Final Memory: 10M/180M
[INFO] ------------------------------------------------------------------------
Step 2: Build and Run Your Project

On the command line, navigate to the directory for your new app.

cd helloWorld

Build the app.

mvn clean install

Start the Jetty server on port 8080.

mvn jetty:run

To use another port, append: -Djetty.port=portNumber. For example, mvn jetty:run -Djetty.port=9877.

Test your app in a browser by navigating to:

http://localhost:8080/helloWorld/helloWorld.app
You should see a simple greeting in your browser.

To stop the Jetty server and free up the port when you are finished, press CTRL+C on the command line.

Note: the helloWorld/pom.xml file has a <dependencies> section, which lists the <version> of each Aura artifact in your project. They define the version of Aura that your project is using and each artifact should use the same version.