@echo off

echo  ‰»Î∞Ê±æ∫≈
set /p ver=

cd ..

tools\7-Zip\7z.exe a extension_v%ver%.zip aat-dev\mv3\*
tools\7-Zip\7z.exe a extension_v%ver%_mv2.zip aat-dev\mv2\*
tools\7-Zip\7z.exe a extension_v%ver%_ff.zip aat-dev\ff\*

cd tools