/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
View License at <https://www.gnu.org/licenses/gpl-3.0.html>
Source code: <https://github.com/dsy4567/Anti-addiction-terminator>
*/

var background = {
    useGeneralRules: function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "useGeneralRules" }, function (resp) {
                console.log("received: " + resp);
            });
        });
    },
    hideGame: function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "hideGame" }, function (resp) {
                console.log("received: " + resp);
            });
        });
    },
};

chrome.commands.onCommand.addListener(command => {
    switch (command) {
        case "useGeneralRules":
            console.log(chrome.i18n.getMessage("useGeneralRules"));
            background.useGeneralRules();
            break;
        case "hideGame":
            console.log(chrome.i18n.getMessage("hideGame"));
            background.hideGame();
            break;
        default:
            break;
    }
});
