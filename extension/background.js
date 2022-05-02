
chrome.runtime.onInstalled.addListener(() => {
    chrome.notifications.create("第一次安装", {
        type: "basic",
        iconUrl: "/icon/128.png",
        title: "欢迎使用防沉迷终结者",
        message: "游戏虽好, 但不能贪玩哦",
    });
});