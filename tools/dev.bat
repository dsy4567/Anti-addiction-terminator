@echo off

cd             ..

rmdir /s /q    extension\_metadata
rmdir /s /q    aat-dev
mkdir          aat-dev

robocopy /mir  extension                     aat-dev\mv3\
del            aat-dev\mv3\manifest-v2.json
del            aat-dev\mv3\manifest-ff.json

robocopy /mir  extension                     aat-dev\mv2\
rmdir /s /q    aat-dev\mv2\rule
del            aat-dev\mv2\manifest.json
del            aat-dev\mv2\manifest-ff.json
rename         aat-dev\mv2\manifest-v2.json  manifest.json

robocopy /mir  extension                     aat-dev\ff\
rmdir /s /q    aat-dev\ff\rule
del            aat-dev\ff\manifest.json
del            aat-dev\ff\manifest-v2.json
rename         aat-dev\ff\manifest-ff.json   manifest.json

cd tools