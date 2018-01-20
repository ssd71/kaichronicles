## Kai Chronicles

Kai Chronicles is a game player for Lone Wolf game books. Only books 1 - 8 are
curently playable. The game player can run as a website or Android app. You can play it at 
[https://www.projectaon.org/staff/toni](https://www.projectaon.org/staff/toni) or download
the app from [Google Play](https://play.google.com/store/apps/details?id=org.projectaon.kaichronicles).

This repository does not contain game books data. Data must be downloaded from the 
[Project Aon web site](https://www.projectaon.org). 
**REMEMBER** that game books data is under the
[Project Aon license](https://www.projectaon.org/en/Main/License), so:

* You cannot put this application on a public web server (only on your local machine, for
  your own use). The only place where this game can be published is on the Project Aon 
  web site
* You cannot redistribute the game books data in any way

The Android older version supported is the 4.4.2 (API 19). The web is tested with the 
latest version of Chrome and Firefox. Other browsers or/and older versions may don't 
work.

## Setup

Compile Typescript
```bash
    npm install
    npm run ts
```

Download the Project Aon game data:
```bash
    npm run downloaddata
```
This will require Node.js (any recent version), zip command and the SVN client on your path

### Setup web site

* Put the folder src/www on your private web server
* Open http://localhost/[dir-for-src-www]/index.html

You are now done. If you have Firefox, you dont need a web server. You can open
directly the file src/www/index.html. This will not work with Chrome (see 
http://stackoverflow.com/questions/10752055/cross-origin-requests-are-only-supported-for-http-error-when-loading-a-local)

### Setup Android app

Install Cordova (https://cordova.apache.org/) and the Android requeriments
(https://cordova.apache.org/docs/en/latest/guide/platforms/android/index.html). Then:
```bash
    cd src
    cordova platform add android
    cordova build android
```

This will generate a file src/platforms/android/build/outputs/apk/android-debug.apk with the
Android app.

You can test the app with the emulator:

```bash
    cd src
    cordova emulate android
```

There is a bug with Android on Cordova 6.4 with the app icons. If the app icon don't appear,
read this:
http://stackoverflow.com/questions/40351434/cordova-android-6-4-0-creates-res-folder-top-level-not-inside-platforms-android


### Developing 

Game rules for each book are located at [src/www/data](src/www/data). "mechanics-X" are the game rules
for the book X. "objects.xml" are the game objects

There is (unfished) documentation for [rules](doc/README-mechanics.md) and 
[object formats](doc/README-objects.md).

The game rules implementation are at src/ts/controller/mechanics and src/www/controller/mechanics/.

If you add "?debug=true" to the game URL, some debug tools will appear.
You also can use the browser Developer Tools to prepare the Action Chart to test individual sections.
For example, in the console you can execute things like:
```javascript
actionChartController.pick('axe')
actionChartController.increaseMoney(-10)
```

There are some scripts for development:

```bash
    npm run downloaddata [booknumber] # Download books data from the Project Aon. Specify "booknumber" to download a single book
    npm run lint          # Runs jshint over the javascript code
    npm run prepareversion -- [--debug] [KEYSTOREPASSWORD] # Prepare a version to upload on "dist" dir.
    npm run cleandist     # Delete the "dist" dir
    npm run ts            # Compile Typescript code
    npm run cleants       # Remove code generated by the Typescript compiler
```

"npm run prepareversion" will generate a version to upload to the Google Play and the Project Aon 
website on the "dist" directory. If you are me (probably not), you will have the keystore to sign the 
apk to upload to the Google Play. Then "KEYSTOREPASSWORD" is the password for the keystore. If 
it's not specified, an unsigned .apk will be generated. I suspect it's not a good idea to publish 
keystores on github. Option "--debug" will generate a debuggable version

A "guide" to develop new books can be found at [doc/README-developing.md](doc/README-developing.md)

### License

MIT. This application uses the following third-party code / resources:

* The HTML rendering, books XML processing and Project Aon license HTML contains code
  taken from [Lone Wolf Adventures](https://lonewolfadventures.projectaon.org/), 
  by Liquid State Limited
* The Lone Wolf logo and splashes are taken directly, or adapted, from the 
  [Spanish Project Aon](https://projectaon.org/es)
* Button icons are create by [Delapouite](http://delapouite.com/), 
  [Lorc](http://lorcblog.blogspot.com/) and [Willdabeast](http://wjbstories.blogspot.com/),
  and distributed from [http://game-icons.net/](http://game-icons.net/) 
  ([CC License](https://creativecommons.org/licenses/by/3.0/))
* [Bootstrap](http://getbootstrap.com/) (MIT)
* [Toastr](https://github.com/CodeSeven/toastr) (MIT)
* [FileSaver.js](https://github.com/eligrey/FileSaver.js/) (MIT)
* [jQuery](https://jquery.com/) (jQuery license)
* [Apache Cordova](https://cordova.apache.org/) (Apache license)
* [xml.js](https://github.com/kripken/xml.js/), code taken from 
  [http://syssgx.github.io/xml.js/](http://syssgx.github.io/xml.js/) ([CC License](https://creativecommons.org/licenses/by/3.0/))
* [cordova-plugin-zip](https://github.com/MobileChromeApps/cordova-plugin-zip) ([License](https://github.com/MobileChromeApps/cordova-plugin-zip/blob/master/LICENSE))
* [cordova-plugin-zeep](https://github.com/FortuneN/cordova-plugin-zeep) (Apache License 2.0)
* [cordova-filechooser](https://github.com/don/cordova-filechooser) (Apache License 2.0)
* [cordova-plugin-copytodownload](https://github.com/tonib/cordova-plugin-copytodownload) (MIT)
* [cordova-plugin-document-contract](https://github.com/danjarvis/cordova-plugin-document-contract) (MIT)

Thanks to [LSI](http://www.lsisoluciones.com) for letting us use its Google Play account for this app.
