// let 简陋代码补齐 = {
//     tabs: [
//         {
//             active: false,
//             audible: false,
//             autoDiscardable: true,
//             discarded: false,
//             favIconUrl: "https://www.example.com/favicon.ico",
//             groupId: -1,
//             height: 0,
//             highlighted: false,
//             id: 1,
//             incognito: false,
//             index: 0,
//             mutedInfo: {
//                 muted: false,
//             },
//             pinned: false,
//             selected: false,
//             status: "",
//             title: "example",
//             url: "https://www.example.com/",
//             width: 0,
//             windowId: 1,
//         },
//     ],
// };

// function 与后台通信(操作) {
//     chrome.runtime.sendMessage({ 操作: 操作 });
// }
function 通用规则破解() {
    chrome.storage.local.set({ 通用规则破解: Math.random() }, () => {});
}
function 大人来了() {
    chrome.storage.local.set({ 大人来了: Math.random() }, () => {});
}
function 创建警告(警告) {
    try {
        if (警告) {
            $(一些警告).append(`
            <div class="警告">
                <img class="警告图标" src="/icon/warn.svg" alt="警告" title="警告" />
                <div class="警告信息">${警告}</div>
                <img class="图标 关闭警告" src="/icon/close.svg" alt="关闭" title="关闭" />
            </div>
        `);
            for (let i = 0; i < $(".关闭警告").length; i++) {
                const el = $(".关闭警告")[i];
                $(el).on("click", () => {
                    $(el).parent().remove();
                });
            }
        }
    } catch (e) {}
}
function 错误(e) {
    console.error(e);
    创建警告(e);
}

try {
    $(function () {
        $(打开关于).on("click", () => {
            $(工具).toggle();
            $(关于).toggle();
        });
        $(使用通用规则破解).on("click", () => {
            通用规则破解();
        });
        $(大人来了按钮).on("click", () => {
            大人来了();
        });
        创建警告("沉迷于游戏不利于身心健康, 请合理安排游戏时间, 适度游戏");
    });
} catch (e) {
    错误(e);
}

try {
    chrome.storage.local.get(["一堆警告"], (存储) => {
        存储.一堆警告.forEach((警告内容) => {
            if (警告内容 == "w") return;
            创建警告(警告内容);
        });
        chrome.storage.local.set({ 一堆警告: [] }, () => {});
    });
} catch (e) {
    错误(e);
}
