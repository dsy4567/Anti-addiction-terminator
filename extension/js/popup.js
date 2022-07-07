/**
 * 此代码在 GPL-3.0 下获得许可, 请查看 COPYING.txt 或 <https://www.gnu.org/licenses/gpl-3.0.txt>
 * Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
 * 您还可以在这里找到源码 <https://github.com/dsy4567/Anti-addiction-terminator>
 */

/* global chrome $ */

var 提示错误次数 = 0;
var 已提示错误太多 = 0;
// eslint-disable-next-line no-unused-vars
var 最近一次错误;

/**
 * @param {string | Event} 事件
 * @param {string | undefined} 源
 * @param {number | undefined} 行
 * @param {number | undefined} c
 * @param {Error | undefined} 错误
 */
window.onerror = (事件, 源, 行, c, 错误) => {
    if (错误) {
        处理错误(错误);
    } else {
        处理错误(String(事件));
    }
};
/**
 * @param {string} e
 * @param {string} 友好错误信息
 */
function 处理错误(e, 友好错误信息) {
    if (
        !e ||
        e.toString().includes("Possible side-effect in debug-evaluate") ||
        e.toString().includes("SyntaxError")
    )
        return;

    console.error(e);
    最近一次错误 = e;
    提示错误次数++;
    if (提示错误次数 <= 10) {
        if (友好错误信息) {
            创建横幅(友好错误信息, 0);
        } else {
            创建横幅(e, 0);
        }
    } else if (已提示错误太多 == 0) {
        已提示错误太多 = 1;
        创建横幅(chrome.i18n.getMessage("msg1"), 0);
    }

    document.documentElement.style.display = "block";
}
/**
 *
 * @param {string} 内容
 * @param {number} 类型 0: 警告 1: 提示(默认)
 */
function 创建横幅(内容, 类型 = 1, 关闭时回调 = () => {}) {
    if (内容) {
        let 图标 = ["/icon/warn.svg", "/icon/smile.svg"];
        let 颜色 = ["var(--red)", "var(--green)"];
        let 描述 = ["警告", "提示"];

        let $横幅 = document.createElement("div");
        let $横幅图标 = document.createElement("img");
        let $横幅内容 = document.createElement("span");
        let $关闭横幅 = document.createElement("button");
        $横幅.className = "横幅";
        $横幅.style.backgroundColor = 颜色[类型];
        $横幅图标.className = "横幅图标 图标 不点击";
        $横幅图标.src = 图标[类型];
        $横幅图标.title = 描述[类型];
        $横幅内容.innerText = 内容;
        // $关闭横幅.src = "/icon/close.svg";
        $关闭横幅.className = "关闭横幅 图标";
        $关闭横幅.title = "关闭";
        $关闭横幅.onclick = () => {
            关闭时回调();
            $横幅.remove();
        };
        $横幅.append($横幅图标);
        $横幅.append($横幅内容);
        $横幅.append($关闭横幅);
        document.querySelector("#一些横幅").append($横幅);
    }
}
function 通用规则破解() {
    chrome.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs) => {
            chrome.tabs
                .sendMessage(tabs[0].id, { 操作: "1" })
                .then((回复) => {
                    console.log("收到回复: " + 回复);
                })
                .catch((e) => 处理错误(new Error(e), chrome.i18n.getMessage("msg3")));
        })
        .catch((e) => 处理错误(new Error(e), chrome.i18n.getMessage("msg3")));
}
function 大人来了() {
    chrome.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs) => {
            chrome.tabs
                .sendMessage(tabs[0].id, { 操作: "2" })
                .then((回复) => {
                    console.log("收到回复: " + 回复);
                })
                .catch((e) => 处理错误(new Error(e), chrome.i18n.getMessage("msg3")));
        })
        .catch((e) => 处理错误(new Error(e), chrome.i18n.getMessage("msg3")));
}
function 显示返回按钮() {
    $(打开设置).toggle();
    $(打开关于).toggle();
    // $(打开通知).toggle();
    $(返回).toggle();
}

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
var 快捷键文本 = $("#快捷键 span")[0];
var 快捷键图标 = $("#快捷键 img")[0];
var 设置 = $("#设置")[0];
var 打开设置 = $("#打开设置")[0];
var 返回 = $("#返回")[0];
// var 打开通知 = $("#打开通知")[0];
// var 通知 = $("#通知")[0];
var 重启 = $("#重启")[0];
var 重启文本 = $("#重启 span")[0];
var 重启图标 = $("#重启 img")[0];
var isFF = navigator.userAgent.includes("Firefox");
版本.innerText = chrome.runtime.getManifest().version;

$(function () {
    $(返回).on("click", () => {
        $(关于).hide();
        $(设置).hide();
        // $(通知).hide();
        显示返回按钮();
        $(工具).show();
    });
    $(打开关于).on("click", () => {
        $(工具).hide();
        $(设置).hide();
        // $(通知).hide();
        显示返回按钮();
        $(关于).css("display", "flex");
    });
    $(打开设置).on("click", () => {
        $(工具).hide();
        $(关于).hide();
        // $(通知).hide();
        显示返回按钮();
        $(设置).css("display", "flex");
    });
    // $(打开通知).on("click", () => {
    //     $(工具).hide();
    //     $(关于).hide();
    //     $(设置).hide();
    //     显示返回按钮();
    //     // $(通知).css("display", "flex");
    // });
    $(使用通用规则破解).on("click", () => {
        通用规则破解();
    });
    $(大人来了按钮).on("click", () => {
        大人来了();
    });
    $(登录7k7k).on("click", () => {
        chrome.tabs
            .create({
                url: "http://www.7k7k.com/swf/204220.htm#aat-doLogin",
                active: true,
            })
            .catch((e) => 处理错误(new Error(e)), chrome.i18n.getMessage("msg4"));
    });
    $(快捷键).on("click", () => {
        if (isFF) {
            return alert("请在设置中配置快捷键");
        }
        chrome.tabs
            .create({
                url: "chrome://extensions/shortcuts",
                active: true,
            })
            .catch((e) => 处理错误(new Error(e), chrome.i18n.getMessage("msg4")));
    });
    $(重启).on("click", () => {
        chrome.runtime.reload();
    });

    $(打开关于).children().attr("alt", chrome.i18n.getMessage("alt0"));
    $(打开设置).children().attr("alt", chrome.i18n.getMessage("alt1"));
    // $(打开通知).children().attr("alt", chrome.i18n.getMessage("alt4"));
    $(快捷键图标).attr("alt", chrome.i18n.getMessage("btn3"));
    $(重启图标).attr("alt", chrome.i18n.getMessage("alt5"));
    $(返回).children().attr("alt", chrome.i18n.getMessage("alt3"));

    $(打开关于).attr("title", chrome.i18n.getMessage("alt0"));
    $(打开设置).attr("title", chrome.i18n.getMessage("alt1"));
    // $(打开通知).attr("title", chrome.i18n.getMessage("alt4"));
    $(快捷键).attr("title", chrome.i18n.getMessage("btn3"));
    $(重启).attr("title", chrome.i18n.getMessage("alt5"));
    $(返回).attr("title", chrome.i18n.getMessage("alt3"));

    $(名字).text(chrome.i18n.getMessage("name"));
    $(使用通用规则破解).text(chrome.i18n.getMessage("btn0"));
    $(大人来了按钮).text(chrome.i18n.getMessage("btn1"));
    $(登录7k7k).text(chrome.i18n.getMessage("btn2"));
    $(快捷键文本).text(chrome.i18n.getMessage("btn3"));
    $(重启文本).text(chrome.i18n.getMessage("alt5"));
    $(关于).html(chrome.i18n.getMessage("about"));

    if (isFF) {
        给个好评.setAttribute(
            "href",
            "https://addons.mozilla.org/zh-CN/firefox/addon/anti-addiction-terminator/"
        );
    }

    创建横幅(chrome.i18n.getMessage("msg0"));

    const 隐私策略最后修改日期 = "2022.7.7";
    if (localStorage.getItem("隐私策略最后修改日期") != 隐私策略最后修改日期) {
        创建横幅(chrome.i18n.getMessage("msg6"), 1, () => {
            localStorage.setItem("隐私策略最后修改日期", 隐私策略最后修改日期);
        });
    }

    $("html").show();
});

console.log(`
    #############           
   ##          # ##              欢迎使用防沉迷终结者
  ##          #    ##            ~快乐没有年龄之分~
 ##          #      ##       Copyright (C) 2022 dsy4567
##  ### ### #     #  ##     
##  #   #  ###   ##  ##     
##  ### # # # # # #  ##     
##  #   ### #  #  #  ##     
 ##     #           ##            防沉迷终结者 popup 界面
  ##   #           ##       
   ## #           ##        
    ##############          
`);
