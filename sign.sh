#!/bin/bash



jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ANDROID_KEY.keystore app-release-unsigned.apk my-alias
zipalign -v 4 app-release-unsigned.apk HelloWorld.apk
apksigner verify HelloWorld.apk