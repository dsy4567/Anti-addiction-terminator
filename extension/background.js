/**
 * 此代码在 GPL-3.0 下获得许可, 请查看 LICENSE.txt 或 <https://www.gnu.org/licenses/gpl-3.0.txt>
 * Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
 * 您还可以在这里找到源码 <https://github.com/dsy4567/Anti-addiction-terminator>
 */

/* global chrome */

function 通用规则破解() {
    // chrome.storage.local.set({ 通用规则破解: Math.random() }, () => {});

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 操作: "1" }, function (回复) {
            console.log("收到回复: " + 回复);
        });
    });
}
function 大人来了() {
    // chrome.storage.local.set({ 大人来了: Math.random() }, () => {});

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 操作: "2" }, function (回复) {
            console.log("收到回复: " + 回复);
        });
    });
}

// eslint-disable-next-line
function 存储警告(警告内容) {
    // chrome.storage.local.get(["一堆警告"], (存储) => {
    //     if (!警告内容) 警告内容 = "w";
    //     try {
    //         if (!存储.一堆警告[0]) {
    //             throw "";
    //         }
    //     } catch (e) {
    //         return chrome.storage.local.set({ 一堆警告: ["w", 警告内容] }, () => {});
    //     }
    //     let 一堆警告 = 存储.一堆警告;
    //     一堆警告.push(警告内容);
    //     return chrome.storage.local.set({ 一堆警告: 一堆警告 }, () => {});
    //     });
}

存储警告();
chrome.runtime.onInstalled.addListener(() => {
    chrome.notifications.create("第一次安装", {
        type: "basic",
        iconUrl: "/icon/128.png",
        title: "欢迎使用防沉迷终结者",
        message: "游戏虽好, 但不能贪玩哦",
    });
});

chrome.commands.onCommand.addListener((命令) => {
    switch (命令) {
        case "1":
            console.log(chrome.i18n.getMessage("3"));
            通用规则破解();
            break;

        case "2":
            console.log(chrome.i18n.getMessage("2"));
            大人来了();
            break;

        default:
            break;
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request) sender.tab.id;
    sendResponse("");
});

chrome.runtime.onMessage.addListener(function (请求, 发送者, 发送回复) {
    if (typeof 请求 == "object") {
        console.log(请求, 发送者);
        switch (请求.操作) {
            case "0":
                chrome.tabs.create({
                    url: chrome.runtime.getURL("/report.html"),
                    active: true,
                });
                chrome.tabs.remove(发送者.tab.id, () => {});
            default:
                break;
        }
        发送回复("ok");
    }
});

/*eslint-disable */
// chrome.storage.onChanged.addListener(function (变化, 名称空间) {
//     for (let [值, { 旧值, 新值 }] of Object.entries(变化)) {
//         switch (值) {
//             case "发出警告":
//                 chrome.storage.local.get((存储) => {
//                     存储警告(存储.警告内容);
//                 });
//                 break;

//             default:
//                 break;
//         }
//     }
// });
