@echo off
echo ver
set /p ver=
del ..\extension_v*.zip

robocopy src out /mir
del /s out\*.ts

cd ..\out\
rmdir /q /s _metadata
..\tools\7-Zip\7z.exe a ..\extension_v%ver%.zip  .\*
cd..\tools