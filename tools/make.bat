@echo off

echo  ‰»Î∞Ê±æ∫≈
set /p ver=

cd ..

cd aat-dev\mv3
..\..\tools\7-Zip\7z.exe a ..\..\extension_v%ver%.zip     .\*

cd ..\mv2
..\..\tools\7-Zip\7z.exe a ..\..\extension_v%ver%_mv2.zip .\*

cd ..\ff
..\..\tools\7-Zip\7z.exe a ..\..\extension_v%ver%_ff.zip  .\*

cd ..\..\tools