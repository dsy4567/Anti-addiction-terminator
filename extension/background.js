/**
 * 此代码采用 GPL-3.0 许可证, 请查看 LICENSE.txt 或 https://www.gnu.org/licenses/gpl-3.0.txt
 * Copyright (C) 2022 dsy4567 (https://github.com/dsy4567 | dsy4567@outlook.com)
 * 您还可以在这里找到源码 https://github.com/dsy4567/Anti-addiction-terminator
 */

/* global chrome:false */

function 存储警告(警告内容) {
    chrome.storage.local.get(["一堆警告"], (存储) => {
        if (!警告内容) 警告内容 = "w";
        try {
            if (!存储.一堆警告[0]) {
                throw "";
            }
        } catch (e) {
            return chrome.storage.local.set({ 一堆警告: ["w", 警告内容] }, () => {});
        }
        let 一堆警告 = 存储.一堆警告;
        一堆警告.push(警告内容);
        return chrome.storage.local.set({ 一堆警告: 一堆警告 }, () => {});
    });
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

/*eslint-disable */
chrome.storage.onChanged.addListener(function (变化, 名称空间) {
    for (let [值, { 旧值, 新值 }] of Object.entries(变化)) {
        switch (值) {
            case "发出警告":
                chrome.storage.local.get((存储) => {
                    存储警告(存储.警告内容);
                });
                break;

            default:
                break;
        }
    }
});
