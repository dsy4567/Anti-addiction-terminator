/**
 * 此代码在 GPL-3.0 下获得许可, 请查看 COPYING.txt 或 <https://www.gnu.org/licenses/gpl-3.0.txt>
 * Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
 * 您还可以在这里找到源码 <https://github.com/dsy4567/Anti-addiction-terminator>
 */

/* global chrome:false */

function 创建警告(警告) {
    // if (self == top)
    //     chrome.storage.local.set(
    //         {
    //             警告内容: 警告,
    //             发出警告: Math.random(),
    //         },
    //         () => {}
    //     );
}
function 错误(e) {
    console.error(e);
    创建警告(e.stack);
}
try {
    var $script = document.createElement("script");
    $script.charset = "utf-8";
    $script.src = chrome.runtime.getURL("/js/no-fcm-4399.js");
    (document.body || document.head || document.documentElement).appendChild($script);
} catch (e) {
    错误(e);
}
