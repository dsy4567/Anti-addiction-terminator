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
