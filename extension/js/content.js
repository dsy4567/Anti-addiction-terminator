/**
 * 此代码采用 GPL-3.0 开源许可证, 请查看 LICENSE.txt 或 https://www.gnu.org/licenses/gpl-3.0.txt
 * Copyright (C) 2022 dsy4567 (https://github.com/dsy4567 | dsy4567@outlook.com)
 */

function 使用通用规则破解() {
    // 与内容脚本通信("使用通用规则破解 - 成功");
}

try {
    var $script = document.createElement("script");
    $script.charset = "utf-8";
    $script.src = chrome.runtime.getURL("/js/no-fcm.js");
    (document.body || document.head || document.documentElement).appendChild($script);
} catch (e) {
    console.error(e);
}

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     console.log("[防沉迷终结者] 收到内容脚本请求: ", response, sender);
//     switch (request.操作) {
//         case 使用通用规则破解:
//             使用通用规则破解();
//             console.log("使用通用规则破解 - 成功");
//             sendResponse("使用通用规则破解 - 成功");
//             break;
//         default:
//             sendResponse(null);
//             break;
//     }
// });
chrome.storage.onChanged.addListener(function (变化, 名称空间) {
    for (let [值, { 旧值, 新值 }] of Object.entries(变化)) {
        if (值 == "通用规则破解") {
            console.log("ggg")
        }
        switch (值) {
            case "通用规则破解":
                console.log("vvvvv");
                break;

            default:
                break;
        }
    }
});
