cmd.exe /c copy ..\extension\popup.html  ..\extension_MV2\
cmd.exe /c copy ..\extension\js\*  ..\extension_MV2\js\
cmd.exe /c copy ..\extension\css\*  ..\extension_MV2\css\
cmd.exe /c copy ..\extension\icon\*  ..\extension_MV2\icon\
cmd.exe /c copy ..\extension\rule\*  ..\extension_MV2\rule\
cmd.exe /c copy ..\extension\lib\*  ..\extension_MV2\lib\
cmd.exe /c copy ..\extension\_locales\zh_CN\*  ..\extension_MV2\_locales\zh_CN\

.\7-Zip\7z.exe a ..\extension.zip ..\extension\*
.\7-Zip\7z.exe a ..\extension_MV2.zip ..\extension_MV2\*