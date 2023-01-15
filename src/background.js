/*
此代码在 GPL-3.0 下获得许可, 请查看 COPYING.txt 或 <https://www.gnu.org/licenses/gpl-3.0.txt>
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
您可以在这里找到源码 <https://github.com/dsy4567/Anti-addiction-terminator>
*/

/* global chrome */

var 发通知次数 = 0;
var 已接收通知 = false;

function 通用规则破解() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 操作: "1" }, function (回复) {
            console.log("收到回复: " + 回复);
        });
    });
}
function 大人来了() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { 操作: "2" }, function (回复) {
            console.log("收到回复: " + 回复);
        });
    });
}
/**
 * @param { { id: String, date?:string, t? :String, u?: String, n?:[ { l: String, t: String, m: String } ] } } 通知
 */
function 发通知(通知) {
    if (发通知次数 < 5) {
        发通知次数++;

        if (通知.n) {
            for (let 索引 = 0; 索引 < 通知.n.length; 索引++) {
                const 多语言通知 = 通知.n[索引];

                if (chrome.i18n.getUILanguage().includes(多语言通知.l)) {
                    chrome.notifications.create(
                        null,
                        {
                            type: "basic",
                            iconUrl: "/icon/128.png",
                            title: 多语言通知.t
                                ? 多语言通知.t
                                : chrome.i18n.getMessage("name"),
                            message: 多语言通知.m ? 多语言通知.m : "😜😜😜",
                        },
                        (_id) => {
                            chrome.notifications.onClicked.addListener((id) => {
                                if (id == _id) {
                                    通知.u
                                        ? (() => {
                                              chrome.tabs.create({
                                                  url: 通知.u,
                                                  active: true,
                                              });
                                          })()
                                        : undefined;
                                }
                            });
                        }
                    );
                }
            }
        }
    } else {
        console.log("发通知次数过多", 发通知次数);
    }
}
/**
 *            版本        隐私策略更新日期 通知   id          类型         链接        多语言通知 语言(如: zh-CN) 标题 内容
 * @param { { v: String, date?:string, n: [ { id: String, t? :String, u?: String, n?:[ { l: String, t: String, m: String } ] } ] } } json
 */
function 处理通知(json) {
    console.log(json);
    chrome.storage.local.get(["已读通知id"], (数据) => {
        /**
         * @type { string[] | undefined }
         */
        let 已读通知id = 数据.已读通知id;

        if (json.v == chrome.runtime.getManifest().version) {
            if (!已读通知id) {
                已读通知id = [];
                json.n.forEach((通知) => {
                    已读通知id.push(通知.id);
                    chrome.storage.local.set({
                        已读通知id: 已读通知id,
                    });
                    发通知(通知);
                });
            } else {
                json.n.forEach((通知) => {
                    if (!已读通知id.includes(通知.id)) {
                        已读通知id.push(通知.id);
                        chrome.storage.local.set({
                            已读通知id: 已读通知id,
                        });
                        发通知(通知);
                    }
                });
            }
        } else {
            console.log("版本不一致, 无法处理通知");
            chrome.storage.local.remove(["已读通知id"]);
        }
    });
}
function 接收通知() {
    chrome.storage.local.get(["接收通知", "上次接收通知时间"], (数据) => {
        if (typeof 数据.接收通知 === "undefined") {
            chrome.storage.local.set({ 接收通知: true });
            数据.接收通知 = true;
        }

        let 本次接收通知时间 = String(
            Math.floor(new Date().getTime() / 1000 / 60 / 60 / 24)
        );
        if (数据.接收通知 && 本次接收通知时间 != 数据.上次接收通知时间) {
            chrome.storage.local.set({
                上次接收通知时间: 本次接收通知时间,
            });
            fetch("https://fcmsb250.github.io/api/n.json?r=" + Math.random(), {
                method: "get",
            })
                .then((响应) => {
                    return 响应.json();
                })
                .then(处理通知);
        } else if (!数据.接收通知) {
            console.log("用户已禁用接收通知");
        } else if (本次接收通知时间 == 数据.上次接收通知时间) {
            console.log("今日已接收通知");
        }
    });
}

chrome.runtime.onUpdateAvailable.addListener(() => {
    chrome.notifications.create(null, {
        type: "basic",
        iconUrl: "/icon/128.png",
        title: chrome.i18n.getMessage("name"),
        message: chrome.i18n.getMessage("msg7"),
    });
});

chrome.commands.onCommand.addListener((命令) => {
    switch (命令) {
        case "1":
            console.log(chrome.i18n.getMessage("btn0"));
            通用规则破解();
            break;

        case "2":
            console.log(chrome.i18n.getMessage("btn1"));
            大人来了();
            break;

        default:
            break;
    }
});

setTimeout(() => {
    if (!已接收通知) {
        已接收通知 = true;
        接收通知();
    }
}, 3000);
chrome.permissions;

console.log(`
    #############           
   ##          # ##              欢迎使用防沉迷终结者
  ##          #    ##            ~快乐没有年龄之分~
 ##          #      ##       Copyright (C) 2022 dsy4567
##  ### ### #     #  ##     
##  #   #  ###   ##  ##     
##  ### # # # # # #  ##     
##  #   ### #  #  #  ##     
 ##     #           ##            防沉迷终结者 后台
  ##   #           ##       
   ## #           ##        
    ##############          
`);
