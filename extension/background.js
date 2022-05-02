let 简陋代码补齐 = {
    tabs: [
        {
            active: true,
            audible: false,
            autoDiscardable: true,
            discarded: false,
            favIconUrl: "http://www.example.com/favicon.ico",
            groupId: -1,
            height: 898,
            highlighted: true,
            id: 109,
            incognito: false,
            index: 3,
            mutedInfo: { muted: false },
            pinned: false,
            selected: true,
            status: "loading",
            title: "example",
            url: "http://www.example.com/",
            width: 1680,
            windowId: 20,
        },
    ],
};
let 匹配域名 = [
    ".17yy.com",
    ".4399.com",
    ".7k7k.com",
    ".aiwan4399.com",
    ".iwan4399.com",
    ".zxwyouxi.com",
    ".5054399.net",
    ".5054399.com",
    "h5.07073.com",
    ".7724.com",
    ".u7u9.com",
    ".gamedog.cn",
    ".9377.com",
    ".37.com",
    ".4366.com",
];
/**
 *
 * @param {String} 网址
 * @returns String
 */
function 获取域名(网址) {
    let 域名 = 网址.split("/");
    if (域名[2]) {
        域名 = 域名[2];
    } else {
        域名 = "";
    }
    return 域名;
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.notifications.create("第一次安装", {
        type: "basic",
        iconUrl: "/icon/128.png",
        title: "欢迎使用防沉迷终结者",
        message: "游戏虽好, 但不能贪玩哦",
    });
});
chrome.runtime.onMessage.addListener((消息, 发送者, 回复) => {
    switch (消息.操作) {
        case "通用规则破解":
            chrome.storage.local.set({ 通用规则破解: Math.random() }, () => {});
            回复({ 结果: "通用规则破解 - 成功" });
            break;

        default:
            回复({ 结果: null });
            break;
    }
});