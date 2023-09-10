/*
    Copyright (C) 2022 - 2023 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
    View License at <https://www.gnu.org/licenses/gpl-3.0.html>
    Source code: <https://github.com/dsy4567/Anti-addiction-terminator>
*/

window.onerror = ev => {
    reportError(String(ev));
};

const svgIcons = await (await fetch("/icon/icon.json")).json();

let errorCount = 0;
let tooManyErrors = false;

const lastModificationDateOfPrivacyPolicy = "2022.7.18",
    $appName = $("#appName"),
    $appVersion = $("#appVersion"),
    $b_settings = $("#b_settings"),
    $b_goBack = $("#b_goBack"),
    $notifications = $("#notifications"),
    $tools = $("#tools"),
    $b_useGeneralRules = $("#b_useGeneralRules"),
    $b_hideGame = $("#b_hideGame"),
    $b_login7k7k = $("#b_login7k7k"),
    $about = $("#about"),
    $settings = $("#settings"),
    $shortcuts = $("#shortcuts"),
    $shortcuts_text = $("#shortcuts span"),
    $reload = $("#reload"),
    $reload_text = $("#reload span");

function $(selector) {
    return document.querySelector(selector);
}

function reportError(e, friendlyMessage) {
    if (
        !e ||
        e.toString().includes("Possible side-effect in debug-evaluate") ||
        e.toString().includes("SyntaxError")
    )
        return;

    console.error(e);

    errorCount++;
    if (errorCount <= 10) {
        if (friendlyMessage) {
            createNotification(friendlyMessage, 0);
        } else {
            createNotification("" + e, 0);
        }
    } else if (tooManyErrors == false) {
        tooManyErrors = true;
        createNotification(chrome.i18n.getMessage("tooManyErrors"), 0);
    }

    document.documentElement.style.display = "block";
}
/**
 *
 * @param {string} content
 * @param {number} type 0: 警告 1: 提示(默认)
 */
function createNotification(content, type = 1, onclose = () => {}) {
    if (content) {
        let icons = [svgIcons["warn"], svgIcons["smile"]];
        let colors = ["var(--red)", "var(--green)"];

        let $notification = document.createElement("div");
        let $svgIcon = document.createElement("svg");
        let $content = document.createElement("span");
        let $close = document.createElement("button");
        $notification.append($svgIcon, $content, $close);

        $notification.className = "notification";
        $notification.style.backgroundColor = colors[type];
        $notification.style.borderColor = colors[type];
        $svgIcon.outerHTML = icons[type];
        $content.innerText = content;
        $close.className = "iconButton";
        $close.innerHTML = svgIcons["close"];
        $close.title = chrome.i18n.getMessage("close");
        $close.role = "button";
        $close.onclick = () => {
            onclose();
            $notification.remove();
        };
        $notifications.append($notification);
    }
}

window.createNotification = createNotification;

function useGeneralRules() {
    chrome.tabs
        .query({ active: true, currentWindow: true })
        .then(tabs => {
            try {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    { action: "useGeneralRules" },
                    resp => {
                        console.log("received: " + resp);
                    }
                );
            } catch (e) {
                reportError(
                    new Error(e),
                    chrome.i18n.getMessage("operationFailed")
                );
            }
        })
        .catch(e =>
            reportError(new Error(e), chrome.i18n.getMessage("operationFailed"))
        );
}
function hideGame() {
    chrome.tabs
        .query({ active: true, currentWindow: true })
        .then(tabs => {
            try {
                chrome.tabs.sendMessage(
                    tabs[0].id,
                    { action: "hideGame" },
                    resp => {
                        console.log("received: " + resp);
                    }
                );
            } catch (e) {
                reportError(
                    new Error(e),
                    chrome.i18n.getMessage("operationFailed")
                );
            }
        })
        .catch(e =>
            reportError(new Error(e), chrome.i18n.getMessage("operationFailed"))
        );
}

function hideElement(/** @type {HTMLDivElement[]} */ ...elem) {
    for (const el of elem) el.classList.add("hide");
}
function showElement(/** @type {HTMLDivElement[]} */ ...elem) {
    for (const el of elem) el.classList.remove("hide");
}

$b_goBack.addEventListener("click", () => {
    hideElement($settings, $b_goBack);
    showElement($tools, $about, $b_settings);
});
$b_settings.addEventListener("click", () => {
    hideElement($tools, $about, $b_settings);
    showElement($settings, $b_goBack);
});
$b_useGeneralRules.addEventListener("click", () => {
    useGeneralRules();
});
$b_hideGame.addEventListener("click", hideGame);
$b_login7k7k.addEventListener("click", () => {
    createNotification("将在 3 秒后打开游戏，请手动登录");
    setTimeout(() => {
        chrome.tabs
            .create({
                url: "http://www.7k7k.com/swf/204220.htm#AIT-doLogin",
                active: true,
            })
            .catch(e =>
                reportError(new Error(e), chrome.i18n.getMessage("tabError"))
            );
    }, 3000);
});
$shortcuts.addEventListener("click", () => {
    chrome.tabs
        .create({
            url: "chrome://extensions/shortcuts",
            active: true,
        })
        .catch(e =>
            reportError(new Error(e), chrome.i18n.getMessage("tabError"))
        );
});
$reload.addEventListener("click", () => {
    chrome.runtime.reload();
});

document.title = chrome.i18n.getMessage("name");

$appName.innerText = chrome.i18n.getMessage("name");
$appVersion.innerText = chrome.runtime.getManifest().version;

$b_useGeneralRules.innerText = chrome.i18n.getMessage("b_useGeneralRules");
$b_hideGame.innerText = chrome.i18n.getMessage("b_hideGame");
$b_login7k7k.innerText = chrome.i18n.getMessage("b_login7k7k");

$about.innerHTML = chrome.i18n.getMessage("aboutHtml");

$b_settings.setAttribute("title", chrome.i18n.getMessage("b_settings"));
$b_goBack.setAttribute("title", chrome.i18n.getMessage("b_goBack"));

$shortcuts.setAttribute(
    "title",
    ($shortcuts_text.innerText = chrome.i18n.getMessage("shortcuts"))
);
$reload.setAttribute(
    "title",
    ($reload_text.innerText = chrome.i18n.getMessage("reload"))
);

document.querySelectorAll("svg[data-icon]").forEach(el => {
    const icon = svgIcons[el.dataset.icon];
    if (icon) el.outerHTML = icon;
});

if (
    localStorage.getItem("隐私策略最后修改日期") !=
    lastModificationDateOfPrivacyPolicy
) {
    createNotification(
        chrome.i18n.getMessage("policyUpdated") +
            `(${lastModificationDateOfPrivacyPolicy})`,
        1,
        () => {
            localStorage.setItem(
                "隐私策略最后修改日期",
                lastModificationDateOfPrivacyPolicy
            );
        }
    );
}
