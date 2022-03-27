var 回复 = [];

try {
    if (
        location.href.includes("7k7k.com/swf") ||
        location.href.includes("4399.com/flash")
    ) {
        var $script = document.createElement("script");
        $script.charset = "utf-8";
        $script.src = chrome.runtime.getURL("/js/no-fcm.js");
        (
            document.body ||
            document.head ||
            document.documentElement
        ).appendChild($script);
    }
} catch (e) {
    console.error(e);
}
