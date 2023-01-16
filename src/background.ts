/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
View License at <https://www.gnu.org/licenses/gpl-3.0.html>
Source code: <https://github.com/dsy4567/Anti-addiction-terminator>
*/

var background = {
    通用规则破解() {
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    { 操作: "1" },
                    function (回复) {
                        console.log("收到回复: " + 回复);
                    }
                );
            }
        );
    },
    大人来了() {
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    { 操作: "2" },
                    function (回复) {
                        console.log("收到回复: " + 回复);
                    }
                );
            }
        );
    },
};

chrome.commands.onCommand.addListener(命令 => {
    switch (命令) {
        case "1":
            console.log(chrome.i18n.getMessage("btn0"));
            background.通用规则破解();
            break;

        case "2":
            console.log(chrome.i18n.getMessage("btn1"));
            background.大人来了();
            break;

        default:
            break;
    }
});
