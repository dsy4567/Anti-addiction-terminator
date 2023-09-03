/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
View License at <https://www.gnu.org/licenses/gpl-3.0.html>
Source code: <https://github.com/dsy4567/Anti-addiction-terminator>
*/

function reportError(e) {
    console.error(e);
}
try {
    var $script = document.createElement("script");
    $script.charset = "utf-8";
    $script.src = chrome.runtime.getURL("/js/crackAnti-4399.js");
    (document.body || document.head || document.documentElement).appendChild($script);
} catch (e) {
    reportError(e);
}
