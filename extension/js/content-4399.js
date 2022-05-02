/**
 * 此代码采用 GPL-3.0 开源许可证, 请查看 LICENSE.txt 或 https://www.gnu.org/licenses/gpl-3.0.txt
 * Copyright (C) 2022 dsy4567 (https://github.com/dsy4567 | dsy4567@outlook.com)
 */

try {
    var $script = document.createElement("script");
    $script.charset = "utf-8";
    $script.src = chrome.runtime.getURL("/js/no-fcm-4399.js");
    (document.body || document.head || document.documentElement).appendChild($script);
} catch (e) {
    console.error(e);
}
