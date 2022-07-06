/**
 * 此代码在 GPL-3.0 下获得许可, 请查看 LICENSE.txt 或 <https://www.gnu.org/licenses/gpl-3.0.txt>
 * Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
 * 您还可以在这里找到源码 <https://github.com/dsy4567/Anti-addiction-terminator>
 */

/* global chrome $ */

window.onerror = 错误;
var 提示错误次数 = 0;
var 已提示错误太多 = 0;
// eslint-disable-next-line no-unused-vars
var 最近一次错误;

// var 一些横幅 = $("#一些横幅")[0];
var 版本 = $("#版本")[0];
var 打开关于 = $("#打开关于")[0];
var 工具 = $("#工具")[0];
var 关于 = $("#关于")[0];
var 名字 = $("#名字")[0];
var 使用通用规则破解 = $("#使用通用规则破解")[0];
var 大人来了按钮 = $("#大人来了按钮")[0];
var 给个好评 = $("#给个好评")[0];
var 登录7k7k = $("#登录7k7k")[0];
var 快捷键 = $("#快捷键")[0];
var 设置 = $("#设置")[0];
var 打开设置 = $("#打开设置")[0];
var 返回 = $("#返回")[0];

/**
 * @param {Error} e
 */
function 错误(e) {
    console.error(e);
    最近一次错误 = e;
    提示错误次数++;
    if (提示错误次数 <= 10) {
        创建横幅(e.stack, 0);
    } else if (已提示错误太多 == 0) {
        已提示错误太多 = 1;
        创建横幅("错误太多, 请单击右键 > 检查 > 控制台(console), 然后查看更多错误信息", 0);
    }
    document.documentElement.style.display = "block";
}
function 通用规则破解() {
    // chrome.storage.local.set({ 通用规则破解: Math.random() }, () => {});

    chrome.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs) => {
            chrome.tabs
                .sendMessage(tabs[0].id, { 操作: "1" })
                .then((回复) => {
                    console.log("收到回复: " + 回复);
                })
                .catch((e) => 错误(new Error(e)));
        })
        .catch((e) => 错误(new Error(e)));
}
function 大人来了() {
    // chrome.storage.local.set({ 大人来了: Math.random() }, () => {});

    chrome.tabs
        .query({ active: true, currentWindow: true })
        .then(function (tabs) {
            chrome.tabs
                .sendMessage(tabs[0].id, { 操作: "2" }, function (回复) {
                    console.log("收到回复: " + 回复);
                })
                .catch((e) => 错误(new Error(e)));
        })
        .catch((e) => 错误(new Error(e)));
}

/**
 *
 * @param {string} 内容
 * @param {number} 类型 0: 警告 1: 提示(默认)
 */
function 创建横幅(内容, 类型 = 1) {
    if (内容) {
        let 图标 = ["/icon/warn.svg", "/icon/smile.svg"];
        let 颜色 = ["var(--red)", "var(--green)"];
        let 描述 = ["警告", "提示"];

        let $横幅 = document.createElement("div");
        let $横幅图标 = document.createElement("img");
        let $横幅内容 = document.createElement("span");
        let $关闭横幅 = document.createElement("img");
        $横幅.className = "横幅";
        $横幅.style.backgroundColor = 颜色[类型];
        $横幅图标.className = "横幅图标 图标 不点击";
        $横幅图标.src = 图标[类型];
        $横幅图标.title = 描述[类型];
        $横幅内容.innerText = 内容;
        $关闭横幅.src = "/icon/close.svg";
        $关闭横幅.className = "关闭横幅 图标";
        $关闭横幅.title = "关闭";
        $关闭横幅.onclick = () => {
            $横幅.remove();
        };
        $横幅.append($横幅图标);
        $横幅.append($横幅内容);
        $横幅.append($关闭横幅);
        document.querySelector("#一些横幅").append($横幅);
    }
}
function 显示返回按钮() {
    if ($(返回).css("display") == "none") {
        $(打开设置).hide();
        $(打开关于).hide();
        $(返回).show();
    } else {
        $(返回).hide();
        $(打开设置).show();
        $(打开关于).show();
    }
}

var isFF = navigator.userAgent.includes("Firefox");
版本.innerText = chrome.runtime.getManifest().version;
$(function () {
    $(快捷键).on("click", () => {
        if (isFF) {
            return alert("请在设置中配置快捷键");
        }
        chrome.tabs
            .create({
                url: "chrome://extensions/shortcuts",
                active: true,
            })
            .catch((e) => 错误(new Error(e)));
    });
    $(返回).on("click", () => {
        $(关于).hide();
        $(设置).hide();
        显示返回按钮();
        $(工具).show();
    });
    $(打开关于).on("click", () => {
        $(工具).hide();
        $(设置).hide();
        显示返回按钮();
        $(关于).css("display", "flex");
    });
    $(打开设置).on("click", () => {
        $(工具).hide();
        $(关于).hide();
        显示返回按钮();
        $(设置).css("display", "flex");
    });
    $(打开关于).attr("alt", chrome.i18n.getMessage("0"));
    $(打开关于).attr("title", chrome.i18n.getMessage("0"));
    $(名字).html(chrome.i18n.getMessage("name"));
    $(使用通用规则破解).html(chrome.i18n.getMessage("3"));
    $(使用通用规则破解).on("click", () => {
        通用规则破解();
    });
    $(大人来了按钮).html(chrome.i18n.getMessage("2"));
    $(大人来了按钮).on("click", () => {
        大人来了();
    });
    $(登录7k7k).on("click", () => {
        chrome.tabs
            .create({
                url: "http://www.7k7k.com/swf/204220.htm#aat-doLogin",
                active: true,
            })
            .catch((e) => 错误(new Error(e)));
    });
    $(关于).html(chrome.i18n.getMessage("about"));
    if (isFF) {
        给个好评.setAttribute(
            "href",
            "https://addons.mozilla.org/zh-CN/firefox/addon/anti-addiction-terminator/"
        );
    }
    $(登录7k7k).html(chrome.i18n.getMessage("4"));
    创建横幅(chrome.i18n.getMessage("1"));
    $("html").show();
});
