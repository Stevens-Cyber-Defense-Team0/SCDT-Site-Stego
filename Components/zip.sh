#!/bin/sh

# This zips the "top secret documents"
7z a -p"" -mhe=on TOP_SECRET_CLASSIFIED.7z ./Clownstrike/clownstrike.sys spoof.js README.md SCDT.nfc

# This steghides everything with our logo
zip hidden.zip TOP_SECRET_CLASSIFIED.7z ./mascotNothingToSeeHere.jpg foreword
steghide embed -cf logo2.jpg -ef hidden.zip -sf ducklink.jpeg
exiftool -config exif.config -EXIF:Password="Cheese" ducklink.jpeg

rm TOP_SECRET_CLASSIFIED.7z
rm hidden.zip