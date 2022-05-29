/**
 * 此代码采用 GPL-3.0 许可证, 请查看 LICENSE.txt 或 https://www.gnu.org/licenses/gpl-3.0.txt
 * Copyright (C) 2022 dsy4567 (https://github.com/dsy4567 | dsy4567@outlook.com)
 * 您还可以在这里找到源码 https://github.com/dsy4567/Anti-addiction-terminator
 */

/* global chrome 一些警告 版本 打开关于 工具 关于 名字 使用通用规则破解 大人来了按钮 给个好评 登录7k7k $*/

function 通用规则破解() {
    // chrome.storage.local.set({ 通用规则破解: Math.random() }, () => {});

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 操作: "1" }, function (回复) {
            console.log("收到回复：" + 回复);
        });
    });
}
function 大人来了() {
    // chrome.storage.local.set({ 大人来了: Math.random() }, () => {});

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 操作: "2" }, function (回复) {
            console.log("收到回复：" + 回复);
        });
    });
}
function 创建警告(警告) {
    try {
        if (警告) {
            $(一些警告).append(`
            <div class="警告">
                <img class="警告图标" src="/icon/warn.svg" alt="警告" title="警告" />
                <div class="警告信息">${警告}</div>
                <img class="图标 关闭警告" src="/icon/close.svg" alt="关闭" title="关闭" />
            </div>
        `);
            for (let i = 0; i < $(".关闭警告").length; i++) {
                const el = $(".关闭警告")[i];
                $(el).on("click", () => {
                    $(el).parent().remove();
                });
            }
        }
    } catch (e) {}
}
// function 温馨提示(提示) {
//     try {
//         if (提示) {
//             $(一些警告).append(`
//             <div class="提示">
//                 <img class="警告图标" src="/icon/smile.svg" alt="提示" title="提示" />
//                 <div class="警告信息">${提示}</div>
//                 <img class="图标 关闭警告" src="/icon/close.svg" alt="关闭" title="关闭" />
//             </div>
//         `);
//             for (let i = 0; i < $(".关闭警告").length; i++) {
//                 const el = $(".关闭警告")[i];
//                 $(el).on("click", () => {
//                     $(el).parent().remove();
//                 });
//             }
//         }
//     } catch (e) {}
// }
// function 特别提示(提示) {
//     try {
//         if (提示) {
//             $(一些警告).append(`
//             <div class="提示">
//                 <div class="警告图标" alt="提示" title="提示">✨</div>
//                 <div class="警告信息">${提示}</div>
//                 <img class="图标 关闭警告" src="/icon/close.svg" alt="关闭" title="关闭" />
//             </div>
//         `);
//             for (let i = 0; i < $(".关闭警告").length; i++) {
//                 const el = $(".关闭警告")[i];
//                 $(el).on("click", () => {
//                     $(el).parent().remove();
//                 });
//             }
//         }
//     } catch (e) {}
// }
function 错误(e) {
    console.error(e);
    创建警告(e.stack);
}

try {
    版本.innerText = chrome.runtime.getManifest().version;
    $(function () {
        $(打开关于).on("click", () => {
            $(工具).toggle();
            $(关于).toggle();
        });
        $(名字).html(chrome.i18n.getMessage("name"));
        $(使用通用规则破解).html(chrome.i18n.getMessage("3"));
        $(使用通用规则破解).on("click", () => {
            通用规则破解();
        });
        $(大人来了按钮).html(chrome.i18n.getMessage("2"));
        $(大人来了按钮).on("click", () => {
            大人来了();
        });
        $(关于).html(chrome.i18n.getMessage("about"));
        if (navigator.userAgent.includes("Firefox")) {
            给个好评.setAttribute(
                "href",
                "https://addons.mozilla.org/zh-CN/firefox/addon/anti-addiction-terminator/"
            );
        }
        $(登录7k7k).html(chrome.i18n.getMessage("4"));
        创建警告(chrome.i18n.getMessage("1"));
    });
} catch (e) {
    错误(e);
}

try {
    chrome.storage.local.get(["一堆警告"], (存储) => {
        存储.一堆警告.forEach((警告内容) => {
            if (警告内容 == "w") return;
            创建警告(警告内容);
        });
        chrome.storage.local.set({ 一堆警告: [] }, () => {});
    });
} catch (e) {
    错误(e);
}
