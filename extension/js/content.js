/**
 * 此代码采用 GPL-3.0 许可证, 请查看 LICENSE.txt 或 https://www.gnu.org/licenses/gpl-3.0.txt
 * Copyright (C) 2022 dsy4567 (https://github.com/dsy4567 | dsy4567@outlook.com)
 * 您还可以在这里找到源码 https://github.com/dsy4567/Anti-addiction-terminator
 */

var 已有通用规则破解样式 = false;
var 已有一个弹窗的样式 = false;
var 一个弹窗 = { remove: () => {} };
var 遮罩 = { remove: () => {} };

function guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
function 首字母大写(str) {
    str = str[0].toUpperCase() + str.substring(1, str.length);
    return str;
}
/**
 * 类型: "1"(通用规则破解) | "2"(大人来了)
 * @param {String} css
 * @param {String} 类型
 */
function 添加样式(css, 类型) {
    let $style = document.createElement("style");
    $style.innerHTML = css;
    $style.setAttribute("AAT-style-guid", guid());
    $style.setAttribute("AAT-style-type", 类型);
    (document.body || document.head || document.documentElement).appendChild($style);
    return true;
}
/**
 * 类型: "1"(通用规则破解) | "2"(大人来了)
 * @param {String} 类型
 */
function 移除样式(类型) {
    document.querySelectorAll("style[AAT-style-type='" + 类型 + "']").forEach((el) => el.remove());
    return false;
}
function 使用通用规则破解() {
    if (已有通用规则破解样式) {
        已有通用规则破解样式 = 移除样式("1");
        return;
    }

    try {
        一个弹窗.remove();
        遮罩.remove();
        已有一个弹窗的样式 = 移除样式("2");
    } catch (e) {}

    let 游戏元素id或class = ["flash", "game", "play", "youxi", "swf", "flash"];
    let 防沉迷元素id或class = [
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
    let 临时数组 = [];
    let 样式表 = "";

    游戏元素id或class.forEach((str) => {
        临时数组.push(
            "iframe[id*='" + str + "'],",
            "iframe[class*='" + str + "'],",
            "iframe[id*='" + str.toUpperCase() + "'],",
            "iframe[class*='" + str.toUpperCase() + "'],",
            "iframe[id*='" + 首字母大写(str) + "'],",
            "iframe[class*='" + 首字母大写(str) + "'],"
        );
    });
    临时数组.forEach((str) => {
        样式表 += str;
    });
    样式表 += `#ctmdfcm
            {
                display: block !important;
                left: 0 !important;
                top: 0 !important;
                position: absolute !important;
                z-index: 999999 !important;
            }`;
    临时数组 = [];

    防沉迷元素id或class.forEach((str) => {
        临时数组.push(
            "[id*='" + str + "'],",
            "[class*='" + str + "'],",
            "[id*='" + str.toUpperCase() + "'],",
            "[class*='" + str.toUpperCase() + "'],",
            "[id*='" + 首字母大写(str) + "'],",
            "[class*='" + 首字母大写(str) + "'],"
        );
    });
    临时数组.forEach((str) => {
        样式表 += str;
    });
    样式表 += `#ctmdfcm
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
    临时数组 = [];

    已有通用规则破解样式 = 添加样式(样式表, "1");
}
function 大人来了() {
    if (已有一个弹窗的样式) {
        try {
            一个弹窗.remove();
            遮罩.remove();
            已有一个弹窗的样式 = 移除样式("2");
            return;
        } catch (e) {}
    }

    已有通用规则破解样式 = 移除样式("1");

    已有一个弹窗的样式 = 添加样式(
        '*{margin:0;padding:0}ul{list-style:none;}.fl{float:left;}.fr{float:right;}.mysdkDialog{position:absolute;left:50%;top:50vh;margin:-210px 0 0 -309px;width:618px;z-index:99999}.mysdkDialog .myfcmdialog{color:black;position:absolute;left:0;top:0;width:620px;padding-bottom:30px;font-family:"microsoft yahei";font-size:14px;background:#fff;border-radius:8px;}.mysdkDialog .myfcmdialog .close-btn{position:absolute;right:0;top:0;width:40px;height:40px;background-color:red;line-height:40px;cursor:pointer;display:none}.mysdkDialog .myfcmdialog .title{line-height:30px;text-align:center;font-size:22px;font-weight:700;padding:25px 0 0;margin:0 40px;color:#454545;border:0;height:auto;float:none;width:auto;text-indent:0;}.mysdkDialog .myfcmdialog .stitle{text-align:left;line-height:1.6;margin:15px 40px 0;font-size:16px;}.mysdkDialog .myfcmdialog .stitle span{color:#ffa92d;}.mysdkDialog .myfcmdialog .mod-tip{margin:20px 40px 0;background:#F0F0F0;padding:12px 15px;border-radius:4px;color:#333;text-align:left}.mysdkDialog .myfcmdialog .tip-title{font-size:16px;font-weight:400;}.mysdkDialog .myfcmdialog .tip-info{margin-top:5px;line-height:26px;font-size:14px;}.mysdkDialog .myfcmdialog .tip-info li{font-size:16px;line-height:26px}.mysdkDialog .myfcmdialog .tip-info a{color:#FAA61B;text-decoration:underline;margin:0 4px;cursor:pointer;}.mysdkDialog .myfcmdialog .mod-btn{text-align:center;font-size:0;line-height:0;margin:25px 40px 0;}.mysdkDialog .myfcmdialog .mod-btn .btn-fcmprimary{display:inline-block;width:140px;height:38px;line-height:38px;border:1px solid #69bb01;color:#69bb01;font-size:14px;margin:0 15px;border-radius:5px;cursor:pointer;}.mysdkDialog .myfcmdialog .mod-btn .fr,.mysdkDialog .myfcmdialog .mod-btn .fl{width:250px;margin:0;}.mysdkDialog .myfcmdialog .mod-btn .btn-fcmprimary:hover{-webkit-filter:brightness(1);filter:brightness(1)}.mysdkDialog .myfcmdialog .mod-btn .btn-identity{background-color:#69bb01;color:#f8ffef}.fcmIframe{position:absolute;left:50%;top:270px;margin:0 0 0 -309px;width:618px;height:354px;z-index:99997;border:0 none;background-color:#000}.countDown{background:#eee;border-radius:3px;padding:10px;text-align:center;margin:20px 40px 0;font-size:16px;color:#666}.countDown .txt1{font-size:16px;height:28px;line-height:28px;color:#717171;}.countDown .txt2{height:40px;line-height:40px;font-size:26px;font-weight:bold;color:#54ba3d;}.mycmMask{display:none;width:100%;position:absolute;left:0;top:0;background:rgb(0,0,0);}',
        "2"
    ); // 不知道从哪借(chao)鉴(xi)来的

    一个弹窗 = document.createElement("div");
    一个弹窗.className = "mysdkDialog";
    一个弹窗.innerHTML +=
        '<div class="myfcmdialog"><span class="close-btn">关闭</span><h2 class="title">未成年限制登录提醒</h2><div class="stitle">您使用的是未成年账号，仅周五、周六、周日及法定节假日晚上8:00-9:00可以游戏！当前已被限制！</div><div class="countDown" style=""><p class="txt1">下次可玩游戏时段</p><p class="txt2">本周五晚上8:00-9:00</p></div><div class="countDown" style="display:none">当前已限制游戏</div><div class="mod-tip" style=""><h3 class="tip-title">温馨提示：</h3><ul class="tip-info">1.如果身份信息有误，请点击<a href="#" target="_self">》》申请修改《《</a><br>2.如果您身份信息已经变动，可点击<a target="_self" href="#">》》刷新身份《《</a></ul></div><div class="mod-btn" style=""><span class="btn-fcmprimary">更换账号</span><span class="btn-fcmprimary">确定</span></div></div>';
    // 不知道从哪借(chao)鉴(xi)来的
    document.body.appendChild(一个弹窗);

    遮罩 = document.createElement("div");
    遮罩.className = "mycmMask";
    遮罩.style.cssText =
        "height: " + document.documentElement.offsetHeight + "px; z-index: 99998; display: block";
    遮罩.innerHTML = "";
    document.body.appendChild(遮罩);
}
function 创建警告(警告) {
    if (self == top)
        chrome.storage.local.set(
            {
                警告内容: 警告,
                发出警告: Math.random(),
            },
            () => {}
        );
}
function 错误(e) {
    console.error(e);
    创建警告("错误: " + e.stack);
}

try {
    var $script = document.createElement("script");
    $script.charset = "utf-8";
    $script.src = chrome.runtime.getURL("/js/no-fcm.js");
    (document.body || document.head || document.documentElement).appendChild($script);
} catch (e) {
    错误(e);
}

try {
    chrome.storage.onChanged.addListener(function (变化, 名称空间) {
        try {
            for (let [值, { 旧值, 新值 }] of Object.entries(变化)) {
                switch (值) {
                    case "通用规则破解":
                        使用通用规则破解();
                        break;
                    case "大人来了":
                        大人来了();
                        break;
                    default:
                        break;
                }
            }
        } catch (e) {
            错误(e);
        }
    });
} catch (e) {
    错误(e);
}

try {
    if (location.host == "www.7k7k.com") {
        try {
            document.querySelector("div.login_no").title = chrome.i18n.getMessage("5");
        } catch (e) {}

        if (location.href.includes("aat-doLogin"))
            document.querySelector("div.login_no > div.h_login.login_btn > span").click();
    }
} catch (e) {
    错误(e);
}
