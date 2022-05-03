var i18n = {
    "沉迷于游戏不利于身心健康, 请合理安排游戏时间, 适度游戏": {
        zh: "沉迷于游戏不利于身心健康, 请合理安排游戏时间, 适度游戏",
        "zh-CN": "沉迷于游戏不利于身心健康, 请合理安排游戏时间, 适度游戏",
        en: "Indulging in games is not conducive to physical and mental health. Please arrange the game time reasonably and play appropriately",
        "en-US":
            "Indulging in games is not conducive to physical and mental health. Please arrange the game time reasonably and play appropriately",
        "en-GB":
            "Indulging in games is not conducive to physical and mental health. Please arrange the game time reasonably and play appropriately",
        "zh-TW": "沉迷於遊戲不利於身心健康，請合理安排遊戲時間，適度遊戲",
        "zh-HK": "沉迷於遊戲不利於身心健康，請合理安排遊戲時間，適度遊戲",
    },
    "使用 / 取消通用规则破解": {
        zh: "使用 / 取消通用规则破解",
        "zh-CN": "使用 / 取消通用规则破解",
        en: "Use / cancel general rule cracking",
        "en-US": "Use / cancel general rule cracking",
        "en-GB": "Use / cancel general rule cracking",
        "zh-TW": "使用 / 取消通用規則破解",
        "zh-HK": "使用 / 取消通用規則破解",
    },
    "大人来了 / 走了": {
        zh: "大人来了 / 走了",
        "zh-CN": "大人来了 / 走了",
        en: "The adult is coming / leaving",
        "en-US": "The adult is coming / leaving",
        "en-GB": "The adult is coming / leaving",
        "zh-TW": "大人來了 / 走了",
        "zh-HK": "大人來了 / 走了",
    },
    防沉迷终结者: {
        zh: "防沉迷终结者",
        "zh-CN": "防沉迷终结者",
        en: "Anti-addiction Terminator",
        "en-US": "Anti-addiction Terminator",
        "en-GB": "Anti-addiction Terminator",
        "zh-TW": "防沉迷終結者",
        "zh-HK": "防沉迷終結者",
    },
};

function 国际化(文字) {
    let 翻译后 = i18n[文字][navigator.language];
    if (!翻译后) 翻译后 = 文字;
    return 翻译后;
}
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
        $(名字).html(国际化($(名字).html()));
        $(使用通用规则破解).html(国际化($(使用通用规则破解).html()));
        $(使用通用规则破解).on("click", () => {
            通用规则破解();
        });
        $(大人来了按钮).html(国际化($(大人来了按钮).html()));
        $(大人来了按钮).on("click", () => {
            大人来了();
        });
        创建警告(国际化("沉迷于游戏不利于身心健康, 请合理安排游戏时间, 适度游戏"));
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
