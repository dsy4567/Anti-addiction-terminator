@echo off
echo ����汾��
set /p ver=
del ..\extension_v*.zip

cd ..\extension\
rmdir /q /s _metadata
..\tools\7-Zip\7z.exe a ..\extension_v%ver%.zip  .\*
cd..\tools