/**
 * 此代码在 GPL-3.0 下获得许可, 请查看 COPYING.txt 或 <https://www.gnu.org/licenses/gpl-3.0.txt>
 * Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
 * 您还可以在这里找到源码 <https://github.com/dsy4567/Anti-addiction-terminator>
 */

/* global chrome */


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



// chrome.runtime.onMessage.addListener(function (请求, 发送者, 发送回复) {
//     if (typeof 请求 == "object") {
//         console.log(请求, 发送者);
//         switch (请求.操作) {
//             case "0":
//                 chrome.tabs.create({
//                     url: chrome.runtime.getURL("/report.html"),
//                     active: true,
//                 });
//                 chrome.tabs.remove(发送者.tab.id, () => {});
//             default:
//                 break;
//         }
//         发送回复("ok");
//     }
// });

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
