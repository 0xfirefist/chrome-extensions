# HELLO CHROME 

## STEP 1

### Every extension has a *JSON*-formatted manifest file, named manifest.json, that provides important information.

#### MANIFEST.JSON

We have entered some data in [manifest.json](manifest.json) file let's understand what it is.
 - **REQUIRED**:
   - manifest_version -> This key's value tells the version of manifest.json used by the extension, currently this must be always 2.
   - name -> This tells the name of your app
   - version -> You have to specify the version of your extensions, say for example '1.0'.

 - **RECOMMENDED**:
   - description -> This key's value contain the description about the extension
   - icons -> You have to specify the icons you want to use for your extensions see in [manifest.json](manifest.json) file, how i have done it.	

 - **OPTIONAL**:
   - browser_action -> This key adds a button to browser's toolbar. The button has an icon, and may optionally have a popup page.
     - default_icon -> This key is a part of browser_actions whose value will be the icon of the extension
     - default_popup -> This key tells the information about the popup page

#### As of now, you need to know only these manifest keys  

## STEP 2 
In this commit you have to add icons which we specify in manifest file. For relative path ,specified for the icons in manifest.json, to be correct icons must be in the same folder.
  
## STEP 3
Now, we have added a [popup page](popup.html), which will popup whenever you will click on the extension button in the browser's toolbar.

