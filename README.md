# TS-Product Tour

The [ThoughtSpot Product tour](https://thoughtspot.com/preview/) is built using the [ThoughtSpot Everywhere SDK](https://developers.thoughtspot.com/docs/?pageid=visual-embed-sdk) for React. You are now exploring a CodeSandbox version of the app. You can use this as a great learning tool and jumping off point for your own development and quickly create your own embedded app experiences using Liveboards, Search, and much more. 


## Set up
To get started, clone this sandbox, then change the gbl_thoughtSpotHost constant in config.js to point to your own ThoughtSpot instance. The app is designed to start at /preview/. If this is your first time developing with the ThoughtSpot Everywhere SDK, check out the [getting started](https://developers.thoughtspot.com/getstarted) guide on [developers.thoughtspot.com](https://developers.thoughtspot.com). 

If you don't already have a free trial, you will need this to authenticate against your version of the app.  you can [sign up for a free 30 day account here](https://www.thoughtspot.com/trial?tsref=producttour). 

## Configuration
All of the app level configuration is included in config.js. Most importantly, you will need to change the gbl_thoughtSpotHost constant to point to your instance (my*.thoughtspot.com)

## Authentication
The [ThoughtSpot Product tour](https://thoughtspot.com/preview/) uses a different type of authentication approach that you will use in your own app instance. To make it work for your instance, replace the contents of App.js with that of App-standard.js. App-standard.js uses OOTB ThoughtSpot Everywhere SDK authentication mechanisms. 


