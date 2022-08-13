@echo off
echo  ‰»Î∞Ê±æ∫≈
set /p ver=
del ..\extension2_v*.zip

cd ..\extension2\
rmdir /q /s _metadata
..\tools\7-Zip\7z.exe a ..\extension2_v%ver%.zip  .\*
cd..\tools
