# Budget Manager 

## The goal of this extension is to get you started with using the chrome apis in your extensions. 

## step 1

#### Manifest Json
You should have learned the basics about the manifest.json file. Lets talk about the change in this file, what we have added is a key named as "permission" what it tells the browser is what the extension can access. And most Chrome APIs are determined by these permissions.
In this example we will use an API named chrome storage. 


## step 2

#### Popup Html
As explained in the last examples we have added the popup.html file. This take the input from user for the amount to be spent and shows the total money spent.

## step 3

#### Popup js
if you see [popup.js](popup.js) file there is one new thing you might don't know is this chrome.storage..... .It is the api we are using to use the storage provided by the browser. You can follow the [link](https://developer.chrome.com/extensions/storage) to know more about it. If have any doubt do ask on discord.
