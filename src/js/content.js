/*
    Copyright (C) 2022 - 2023 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
    View License at <https://www.gnu.org/licenses/gpl-3.0.html>
    Source code: <https://github.com/dsy4567/Anti-addiction-terminator>
*/

let generalRulesStyle = false;
let popupStyle = false;
let /** @type {HTMLDivElement} */ popup;
let /** @type {HTMLDivElement} */ mask;

function reportError(e) {
    console.error(e);
}
function capitalizeFirstLetter(/** @type {string} */ str) {
    str = str[0].toUpperCase() + str.substring(1, str.length);
    return str;
}

function addStyle(/** @type {string} */ css, /** @type {Action} */ type) {
    let $style = document.createElement("style");
    $style.innerHTML = css;
    $style.setAttribute("AIT-style-id", ("" + Math.random()).split(".")[1]);
    $style.setAttribute("AIT-style-type", type);
    (document.body || document.head || document.documentElement).appendChild(
        $style
    );
    return true;
}
function removeStyle(/** @type {Action} */ type) {
    document
        .querySelectorAll("style[AIT-style-type='" + type + "']")
        .forEach(el => el.remove());
    return false;
}

function useGeneralRules() {
    if (generalRulesStyle) {
        generalRulesStyle = removeStyle("useGeneralRules");
        return;
    }

    try {
        popup.remove();
        mask.remove();
        popupStyle = removeStyle("hideGame");
    } catch (e) {}

    const idOrClassNameOfGame = [
        "flash",
        "game",
        "play",
        "youxi",
        "swf",
        "flash",
    ];
    const idOrClassNameOfAnti = [
        "anti",
        "fcm",
        "verify",
        "mask",
        "certify",
        "dialog",
        "popup",
        "login",
        "cover",
    ];
    let temp = [];
    let style = "";

    idOrClassNameOfGame.forEach(str => {
        temp.push(
            "iframe[id*='" + str + "'],",
            "iframe[class*='" + str + "'],",
            "iframe[id*='" + str.toUpperCase() + "'],",
            "iframe[class*='" + str.toUpperCase() + "'],",
            "iframe[id*='" + capitalizeFirstLetter(str) + "'],",
            "iframe[class*='" + capitalizeFirstLetter(str) + "'],"
        );
    });
    temp.forEach(str => {
        style += str;
    });
    style += `#qwqawaqaq
            {
                display: block !important;
                left: 0 !important;
                top: 0 !important;
                position: absolute !important;
                z-index: 999999 !important;
            }`;
    temp = [];

    idOrClassNameOfAnti.forEach(str => {
        temp.push(
            "[id*='" + str + "'],",
            "[class*='" + str + "'],",
            "[id*='" + str.toUpperCase() + "'],",
            "[class*='" + str.toUpperCase() + "'],",
            "[id*='" + capitalizeFirstLetter(str) + "'],",
            "[class*='" + capitalizeFirstLetter(str) + "'],"
        );
    });
    temp.forEach(str => {
        style += str;
    });
    style += `#qwqawaqaq
            {
                display: none !important;
                min-width: 0 !important;
                width: 0 !important;
                max-width: 0 !important;
                min-height: 0 !important;
                height: 0 !important;
                max-height: 0 !important;
                z-index: -999 !important;
                font-size: 0 !important;
                overflow: hidden !important;
            }`;
    temp = [];

    generalRulesStyle = addStyle(style, "useGeneralRules");
}
function hideGame() {
    if (popupStyle) {
        try {
            popup.remove();
            mask.remove();
            popupStyle = removeStyle("hideGame");
            return;
        } catch (e) {}
    }

    generalRulesStyle = removeStyle("useGeneralRules");

    popupStyle = addStyle(
        '*{margin:0;padding:0}ul{list-style:none;}.fl{float:left;}.fr{float:right;}.mysdkDialog{position:absolute;left:50%;top:50vh;margin:-210px 0 0 -309px;width:618px;z-index:99999}.mysdkDialog .myfcmdialog{color:black;position:absolute;left:0;top:0;width:620px;padding-bottom:30px;font-family:"microsoft yahei";font-size:14px;background:#fff;border-radius:8px;}.mysdkDialog .myfcmdialog .close-btn{position:absolute;right:0;top:0;width:40px;height:40px;background-color:red;line-height:40px;cursor:pointer;display:none}.mysdkDialog .myfcmdialog .title{line-height:30px;text-align:center;font-size:22px;font-weight:700;padding:25px 0 0;margin:0 40px;color:#454545;border:0;height:auto;float:none;width:auto;text-indent:0;}.mysdkDialog .myfcmdialog .stitle{text-align:left;line-height:1.6;margin:15px 40px 0;font-size:16px;}.mysdkDialog .myfcmdialog .stitle span{color:#ffa92d;}.mysdkDialog .myfcmdialog .mod-tip{margin:20px 40px 0;background:#F0F0F0;padding:12px 15px;border-radius:4px;color:#333;text-align:left}.mysdkDialog .myfcmdialog .tip-title{font-size:16px;font-weight:400;}.mysdkDialog .myfcmdialog .tip-info{margin-top:5px;line-height:26px;font-size:14px;}.mysdkDialog .myfcmdialog .tip-info li{font-size:16px;line-height:26px}.mysdkDialog .myfcmdialog .tip-info a{color:#FAA61B;text-decoration:underline;margin:0 4px;cursor:pointer;}.mysdkDialog .myfcmdialog .mod-btn{text-align:center;font-size:0;line-height:0;margin:25px 40px 0;}.mysdkDialog .myfcmdialog .mod-btn .btn-fcmprimary{display:inline-block;width:140px;height:38px;line-height:38px;border:1px solid #69bb01;color:#69bb01;font-size:14px;margin:0 15px;border-radius:5px;cursor:pointer;}.mysdkDialog .myfcmdialog .mod-btn .fr,.mysdkDialog .myfcmdialog .mod-btn .fl{width:250px;margin:0;}.mysdkDialog .myfcmdialog .mod-btn .btn-fcmprimary:hover{-webkit-filter:brightness(1);filter:brightness(1)}.mysdkDialog .myfcmdialog .mod-btn .btn-identity{background-color:#69bb01;color:#f8ffef}.fcmIframe{position:absolute;left:50%;top:270px;margin:0 0 0 -309px;width:618px;height:354px;z-index:99997;border:0 none;background-color:#000}.countDown{background:#eee;border-radius:3px;padding:10px;text-align:center;margin:20px 40px 0;font-size:16px;color:#666}.countDown .txt1{font-size:16px;height:28px;line-height:28px;color:#717171;}.countDown .txt2{height:40px;line-height:40px;font-size:26px;font-weight:bold;color:#54ba3d;}.mycmMask{display:none;width:100%;position:absolute;left:0;top:0;background:rgb(0,0,0);}',
        "hideGame"
    );

    popup = document.createElement("div");
    popup.className = "mysdkDialog";
    popup.innerHTML +=
        '<div class="myfcmdialog"><span class="close-btn">关闭</span><h2 class="title">未成年限制登录提醒</h2><div class="stitle">您使用的是未成年账号，仅周五、周六、周日及法定节假日晚上8:00-9:00可以游戏！当前已被限制！</div><div class="countDown" style=""><p class="txt1">下次可玩游戏时段</p><p class="txt2">本周五晚上8:00-9:00</p></div><div class="countDown" style="display:none">当前已限制游戏</div><div class="mod-tip" style=""><h3 class="tip-title">温馨提示：</h3><ul class="tip-info">1.如果身份信息有误，请点击<a href="#" target="_self">》》申请修改《《</a><br>2.如果您身份信息已经变动，可点击<a target="_self" href="#">》》刷新身份《《</a></ul></div><div class="mod-btn" style=""><span class="btn-fcmprimary">更换账号</span><span class="btn-fcmprimary">确定</span></div></div>';
    document.body.appendChild(popup);

    mask = document.createElement("div");
    mask.className = "mycmMask";
    mask.style.cssText =
        "height: " +
        document.documentElement.offsetHeight +
        "px; z-index: 99998; display: block";
    mask.innerHTML = "";
    document.body.appendChild(mask);
}
function injectsScript() {
    let $script = document.createElement("script");
    $script.charset = "utf-8";
    $script.src = chrome.runtime.getURL("/js/crackAnti.js");
    (document.body || document.head || document.documentElement).appendChild(
        $script
    );
}

try {
    chrome.storage.local.get(["自动获取游戏真实地址"], data => {
        if (typeof data.自动获取游戏真实地址 === "undefined") {
            chrome.storage.local.set({ 自动获取游戏真实地址: true });
            injectsScript();
        } else if (data.自动获取游戏真实地址) {
            injectsScript();
        } else if (!data.自动获取游戏真实地址) {
            console.log("[防沉迷终结者] 用户已禁用自动获取游戏真实地址");
        }
    });
} catch (e) {
    reportError(e);
}

try {
    chrome.runtime.onMessage.addListener(function (req, sender, sendResp) {
        if (typeof req == "object" && !document.hidden) {
            console.log(req);
            switch (req.action) {
                case "useGeneralRules":
                    useGeneralRules();
                    break;
                case "hideGame":
                    if (self == top) {
                        hideGame();
                    }
                    break;
                default:
                    break;
            }
            sendResp("ok");
        }
    });
} catch (e) {
    reportError(e);
}
