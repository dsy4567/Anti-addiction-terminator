var 回复 = [];

try {
    var $script = document.createElement("script");
    $script.charset = "utf-8";
    $script.src = chrome.runtime.getURL("/js/no-fcm.js");
    (document.body || document.head || document.documentElement).appendChild($script);
} catch (e) {
    console.error(e);
}
