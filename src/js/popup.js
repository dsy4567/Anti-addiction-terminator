/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
View License at <https://www.gnu.org/licenses/gpl-3.0.html>
Source code: <https://github.com/dsy4567/Anti-addiction-terminator>
*/

var 提示错误次数 = 0;
var 已提示错误太多 = 0;
var 最近一次错误;

window.onerror = (事件, 源, 行, c, 错误) => {
    if (错误) {
        处理错误(错误);
    } else {
        处理错误(String(事件));
    }
};
function 处理错误(e: string | Error, 友好错误信息?: string) {
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
            创建横幅("" + e, 0);
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
function 创建横幅(内容: string, 类型 = 1, 关闭时回调 = () => {}) {
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
        $横幅.style.borderColor = 颜色[类型];
        $横幅图标.className = "横幅图标 图标 不点击";
        $横幅图标.src = 图标[类型];
        $横幅图标.title = 描述[类型];
        $横幅内容.innerText = 内容;
        $关闭横幅.className = "关闭横幅 图标 iconButton";
        $关闭横幅.title = chrome.i18n.getMessage("btn7");
        $关闭横幅.type = "button";
        $关闭横幅.onclick = () => {
            关闭时回调();
            $横幅.remove();
        };
        $横幅.append($横幅图标);
        $横幅.append($横幅内容);
        $横幅.append($关闭横幅);
        document.querySelector("#notifications").append($横幅);
    }
}
function 通用规则破解() {
    chrome.tabs
        .query({ active: true, currentWindow: true })
        .then(tabs => {
            try {
                chrome.tabs.sendMessage(tabs[0].id, { 操作: "1" }, resp => {
                    console.log("received: " + resp);
                });
            } catch (e) {
                处理错误(new Error(e), chrome.i18n.getMessage("msg3"));
            }
        })
        .catch(e => 处理错误(new Error(e), chrome.i18n.getMessage("msg3")));
}
function 大人来了被按下() {
    chrome.tabs
        .query({ active: true, currentWindow: true })
        .then(tabs => {
            try {
                chrome.tabs.sendMessage(tabs[0].id, { 操作: "2" }, resp => {
                    console.log("received: " + resp);
                });
            } catch (e) {
                处理错误(new Error(e), chrome.i18n.getMessage("msg3"));
            }
        })
        .catch(e => 处理错误(new Error(e), chrome.i18n.getMessage("msg3")));
}
function 显示返回按钮() {
    打开设置.toggle();
    打开关于.toggle();
    返回.toggle();
}

const 隐私策略最后修改日期 = "2022.7.18";
var appVersion = $("#appVersion"),
    打开关于 = $("#打开关于"),
    tools = $("#tools"),
    关于 = $("#关于"),
    appName = $("#appName"),
    使用通用规则破解按钮 = $("#使用通用规则破解"),
    大人来了按钮 = $("#大人来了按钮"),
    给个好评 = $("#给个好评"),
    登录7k7k = $("#登录7k7k"),
    快捷键 = $("#快捷键"),
    快捷键文本 = $("#快捷键 span"),
    快捷键图标 = $("#快捷键 img"),
    设置 = $("#设置"),
    打开设置 = $("#打开设置"),
    返回 = $("#返回"),
    重启 = $("#重启"),
    重启文本 = $("#重启 span"),
    重启图标 = $("#重启 img"),
    主题 = $("#主题"),
    背景色: JQuery<HTMLInputElement> = $("#背景色"),
    强调色: JQuery<HTMLInputElement> = $("#强调色"),
    主题文本 = $("#主题 span"),
    主题图标 = $("#主题 img"),
    高对比度主题: JQuery<HTMLLinkElement> = $("#高对比度主题"),
    高对比度 = $("#高对比度"),
    高对比度_文本 = $("#高对比度 span"),
    高对比度_复选框: JQuery<HTMLInputElement> = $("#高对比度 input"),
    自动获取游戏真实地址 = $("#自动获取游戏真实地址"),
    自动获取游戏真实地址_文本 = $("#自动获取游戏真实地址 span"),
    自动获取游戏真实地址_复选框: JQuery<HTMLInputElement> =
        $("#自动获取游戏真实地址 input");

$(function () {
    返回.on("click", () => {
        关于.hide();
        设置.hide();
        显示返回按钮();
        tools.show();
    });
    打开关于.on("click", () => {
        tools.hide();
        设置.hide();
        显示返回按钮();
        关于.css("display", "flex");
    });
    打开设置.on("click", () => {
        tools.hide();
        关于.hide();
        显示返回按钮();
        设置.css("display", "flex");
    });
    使用通用规则破解按钮.on("click", () => {
        通用规则破解();
    });
    大人来了按钮.on("click", 大人来了被按下);
    登录7k7k.on("click", () => {
        chrome.tabs
            .create({
                url: "http://www.7k7k.com/swf/204220.htm#AIT-doLogin",
                active: true,
            })
            .catch(e => 处理错误(new Error(e), chrome.i18n.getMessage("msg4")));
    });
    快捷键.on("click", () => {
        chrome.tabs
            .create({
                url: "chrome://extensions/shortcuts",
                active: true,
            })
            .catch(e => 处理错误(new Error(e), chrome.i18n.getMessage("msg4")));
    });
    重启.on("click", () => {
        chrome.runtime.reload();
    });
    高对比度.on("click", () => {
        if (高对比度_复选框[0].checked) {
            高对比度_复选框[0].checked = false;
            localStorage.setItem("启用高对比度主题", "0");
            高对比度主题[0].rel = "";
        } else {
            高对比度_复选框[0].checked = true;
            localStorage.setItem("启用高对比度主题", "1");
            高对比度主题[0].rel = "stylesheet";
        }
    });
    高对比度_复选框.on("click", () => {
        return false;
    });

    自动获取游戏真实地址.on("click", () => {
        if (自动获取游戏真实地址_复选框[0].checked) {
            自动获取游戏真实地址_复选框[0].checked = false;
            chrome.storage.local.set({ 自动获取游戏真实地址: false });
        } else {
            自动获取游戏真实地址_复选框[0].checked = true;
            chrome.storage.local.set({ 自动获取游戏真实地址: true });
        }
    });
    自动获取游戏真实地址_复选框.on("click", () => {
        return false;
    });

    打开关于.children().attr("alt", chrome.i18n.getMessage("alt0"));
    打开设置.children().attr("alt", chrome.i18n.getMessage("alt1"));
    快捷键图标.attr("alt", chrome.i18n.getMessage("btn3"));
    重启图标.attr("alt", chrome.i18n.getMessage("alt5"));
    返回.children().attr("alt", chrome.i18n.getMessage("alt3"));

    打开关于.attr("title", chrome.i18n.getMessage("alt0"));
    打开设置.attr("title", chrome.i18n.getMessage("alt1"));
    快捷键.attr("title", chrome.i18n.getMessage("btn3"));
    重启.attr("title", chrome.i18n.getMessage("alt5"));
    返回.attr("title", chrome.i18n.getMessage("alt3"));
    高对比度.attr("title", chrome.i18n.getMessage("btn4"));
    自动获取游戏真实地址.attr("title", chrome.i18n.getMessage("msg8"));
    $("input[type='checkbox']").attr("title", chrome.i18n.getMessage("msg9"));

    document.title = chrome.i18n.getMessage("name");
    appName.text(chrome.i18n.getMessage("name"));
    appVersion.text(chrome.runtime.getManifest().version);
    关于.html(chrome.i18n.getMessage("about"));
    使用通用规则破解按钮.text(chrome.i18n.getMessage("useGeneralRules"));
    大人来了按钮.text(chrome.i18n.getMessage("btn1"));
    登录7k7k.text(chrome.i18n.getMessage("btn2"));
    快捷键文本.text(chrome.i18n.getMessage("btn3"));
    重启文本.text(chrome.i18n.getMessage("alt5"));
    高对比度_文本.text(chrome.i18n.getMessage("btn4"));
    自动获取游戏真实地址_文本.text(chrome.i18n.getMessage("btn6"));

    创建横幅(chrome.i18n.getMessage("msg0"));

    if (localStorage.getItem("启用高对比度主题") === "0") {
        高对比度_复选框[0].checked = false;
    } else if (localStorage.getItem("启用高对比度主题") === "1") {
        高对比度_复选框[0].checked = true;
        高对比度主题[0].rel = "stylesheet";
    } else {
        localStorage.setItem("启用高对比度主题", "0");
        高对比度_复选框[0].checked = false;
    }
    chrome.storage.local.get(["自动获取游戏真实地址"]).then(数据 => {
        if (typeof 数据.自动获取游戏真实地址 === "undefined") {
            chrome.storage.local.set({ 自动获取游戏真实地址: true });
            自动获取游戏真实地址_复选框[0].checked = true;
        } else if (数据.自动获取游戏真实地址) {
            自动获取游戏真实地址_复选框[0].checked = true;
        } else if (!数据.自动获取游戏真实地址) {
            自动获取游戏真实地址_复选框[0].checked = false;
        }
    });
    if (localStorage.getItem("隐私策略最后修改日期") != 隐私策略最后修改日期) {
        创建横幅(
            chrome.i18n.getMessage("msg6") + `(${隐私策略最后修改日期})`,
            1,
            () => {
                localStorage.setItem(
                    "隐私策略最后修改日期",
                    隐私策略最后修改日期
                );
            }
        );
    }

    $("html").show();
});
