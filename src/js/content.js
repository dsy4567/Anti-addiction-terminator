/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
View License at <https://www.gnu.org/licenses/gpl-3.0.html>
Source code: <https://github.com/dsy4567/Anti-addiction-terminator>
*/
var _a;
var 已有通用规则破解样式 = false;
var 已有一个弹窗的样式 = false;
var 一个弹窗;
var 遮罩;
function guid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
function 首字母大写(str) {
    str = str[0].toUpperCase() + str.substring(1, str.length);
    return str;
}
/**
 * 类型: "1"(通用规则破解) | "2"(大人来了)
 */
function 添加样式(css, 类型) {
    var $style = document.createElement("style");
    $style.innerHTML = css;
    $style.setAttribute("AAT-style-guid", guid());
    $style.setAttribute("AAT-style-type", 类型);
    (document.body || document.head || document.documentElement).appendChild($style);
    return true;
}
/**
 * 类型: "1"(通用规则破解) | "2"(大人来了)
 */
function 移除样式(类型) {
    document
        .querySelectorAll("style[AAT-style-type='" + 类型 + "']")
        .forEach(function (el) { return el.remove(); });
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
    }
    catch (e) { }
    var 游戏元素id或class = ["flash", "game", "play", "youxi", "swf", "flash"];
    var 防沉迷元素id或class = [
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
    var 临时数组 = [];
    var 样式表 = "";
    游戏元素id或class.forEach(function (str) {
        临时数组.push("iframe[id*='" + str + "'],", "iframe[class*='" + str + "'],", "iframe[id*='" + str.toUpperCase() + "'],", "iframe[class*='" + str.toUpperCase() + "'],", "iframe[id*='" + 首字母大写(str) + "'],", "iframe[class*='" + 首字母大写(str) + "'],");
    });
    临时数组.forEach(function (str) {
        样式表 += str;
    });
    样式表 += "#ctmdfcm\n            {\n                display: block !important;\n                left: 0 !important;\n                top: 0 !important;\n                position: absolute !important;\n                z-index: 999999 !important;\n            }";
    临时数组 = [];
    防沉迷元素id或class.forEach(function (str) {
        临时数组.push("[id*='" + str + "'],", "[class*='" + str + "'],", "[id*='" + str.toUpperCase() + "'],", "[class*='" + str.toUpperCase() + "'],", "[id*='" + 首字母大写(str) + "'],", "[class*='" + 首字母大写(str) + "'],");
    });
    临时数组.forEach(function (str) {
        样式表 += str;
    });
    样式表 += "#ctmdfcm\n            {\n                display: none !important;\n                min-width: 0 !important;\n                width: 0 !important;\n                max-width: 0 !important;\n                min-height: 0 !important;\n                height: 0 !important;\n                max-height: 0 !important;\n                z-index: -999 !important;\n                font-size: 0 !important;\n                overflow: hidden !important;\n            }";
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
        }
        catch (e) { }
    }
    已有通用规则破解样式 = 移除样式("1");
    已有一个弹窗的样式 = 添加样式('*{margin:0;padding:0}ul{list-style:none;}.fl{float:left;}.fr{float:right;}.mysdkDialog{position:absolute;left:50%;top:50vh;margin:-210px 0 0 -309px;width:618px;z-index:99999}.mysdkDialog .myfcmdialog{color:black;position:absolute;left:0;top:0;width:620px;padding-bottom:30px;font-family:"microsoft yahei";font-size:14px;background:#fff;border-radius:8px;}.mysdkDialog .myfcmdialog .close-btn{position:absolute;right:0;top:0;width:40px;height:40px;background-color:red;line-height:40px;cursor:pointer;display:none}.mysdkDialog .myfcmdialog .title{line-height:30px;text-align:center;font-size:22px;font-weight:700;padding:25px 0 0;margin:0 40px;color:#454545;border:0;height:auto;float:none;width:auto;text-indent:0;}.mysdkDialog .myfcmdialog .stitle{text-align:left;line-height:1.6;margin:15px 40px 0;font-size:16px;}.mysdkDialog .myfcmdialog .stitle span{color:#ffa92d;}.mysdkDialog .myfcmdialog .mod-tip{margin:20px 40px 0;background:#F0F0F0;padding:12px 15px;border-radius:4px;color:#333;text-align:left}.mysdkDialog .myfcmdialog .tip-title{font-size:16px;font-weight:400;}.mysdkDialog .myfcmdialog .tip-info{margin-top:5px;line-height:26px;font-size:14px;}.mysdkDialog .myfcmdialog .tip-info li{font-size:16px;line-height:26px}.mysdkDialog .myfcmdialog .tip-info a{color:#FAA61B;text-decoration:underline;margin:0 4px;cursor:pointer;}.mysdkDialog .myfcmdialog .mod-btn{text-align:center;font-size:0;line-height:0;margin:25px 40px 0;}.mysdkDialog .myfcmdialog .mod-btn .btn-fcmprimary{display:inline-block;width:140px;height:38px;line-height:38px;border:1px solid #69bb01;color:#69bb01;font-size:14px;margin:0 15px;border-radius:5px;cursor:pointer;}.mysdkDialog .myfcmdialog .mod-btn .fr,.mysdkDialog .myfcmdialog .mod-btn .fl{width:250px;margin:0;}.mysdkDialog .myfcmdialog .mod-btn .btn-fcmprimary:hover{-webkit-filter:brightness(1);filter:brightness(1)}.mysdkDialog .myfcmdialog .mod-btn .btn-identity{background-color:#69bb01;color:#f8ffef}.fcmIframe{position:absolute;left:50%;top:270px;margin:0 0 0 -309px;width:618px;height:354px;z-index:99997;border:0 none;background-color:#000}.countDown{background:#eee;border-radius:3px;padding:10px;text-align:center;margin:20px 40px 0;font-size:16px;color:#666}.countDown .txt1{font-size:16px;height:28px;line-height:28px;color:#717171;}.countDown .txt2{height:40px;line-height:40px;font-size:26px;font-weight:bold;color:#54ba3d;}.mycmMask{display:none;width:100%;position:absolute;left:0;top:0;background:rgb(0,0,0);}', "2"); // 不知道从哪借(chao)鉴(xi)来的
    一个弹窗 = document.createElement("div");
    一个弹窗.className = "mysdkDialog";
    一个弹窗.innerHTML +=
        '<div class="myfcmdialog"><span class="close-btn">关闭</span><h2 class="title">未成年限制登录提醒</h2><div class="stitle">您使用的是未成年账号，仅周五、周六、周日及法定节假日晚上8:00-9:00可以游戏！当前已被限制！</div><div class="countDown" style=""><p class="txt1">下次可玩游戏时段</p><p class="txt2">本周五晚上8:00-9:00</p></div><div class="countDown" style="display:none">当前已限制游戏</div><div class="mod-tip" style=""><h3 class="tip-title">温馨提示：</h3><ul class="tip-info">1.如果身份信息有误，请点击<a href="#" target="_self">》》申请修改《《</a><br>2.如果您身份信息已经变动，可点击<a target="_self" href="#">》》刷新身份《《</a></ul></div><div class="mod-btn" style=""><span class="btn-fcmprimary">更换账号</span><span class="btn-fcmprimary">确定</span></div></div>';
    // 不知道从哪借(chao)鉴(xi)来的
    document.body.appendChild(一个弹窗);
    遮罩 = document.createElement("div");
    遮罩.className = "mycmMask";
    遮罩.style.cssText =
        "height: " +
            document.documentElement.offsetHeight +
            "px; z-index: 99998; display: block";
    遮罩.innerHTML = "";
    document.body.appendChild(遮罩);
}
function 错误(e) {
    console.error(e);
}
function 注入脚本() {
    var $script = document.createElement("script");
    $script.charset = "utf-8";
    $script.src = chrome.runtime.getURL("/js/no-fcm.js");
    (document.body || document.head || document.documentElement).appendChild($script);
}
try {
    chrome.storage.local.get(["自动获取游戏真实地址"], function (数据) {
        if (typeof 数据.自动获取游戏真实地址 === "undefined") {
            chrome.storage.local.set({ 自动获取游戏真实地址: true });
            注入脚本();
        }
        else if (数据.自动获取游戏真实地址) {
            注入脚本();
        }
        else if (!数据.自动获取游戏真实地址) {
            console.log("[防沉迷终结者] 用户已禁用自动获取游戏真实地址");
        }
    });
}
catch (e) {
    错误(e);
}
try {
    chrome.runtime.onMessage.addListener(function (请求, 发送者, 发送回复) {
        if (typeof 请求 == "object" && !document.hidden) {
            console.log(请求);
            switch (请求.操作) {
                case "1":
                    使用通用规则破解();
                    break;
                case "2":
                    if (self == top) {
                        大人来了();
                    }
                    break;
                default:
                    break;
            }
            发送回复("ok");
        }
    });
}
catch (e) {
    错误(e);
}
try {
    if (location.host == "www.7k7k.com") {
        try {
            document.querySelector("div.login_no").title =
                chrome.i18n.getMessage("msg2");
        }
        catch (e) { }
        if (location.href.includes("aat-doLogin"))
            (_a = document.querySelector("div.login_no > div.h_login.login_btn > span")) === null || _a === void 0 ? void 0 : _a.click();
    }
}
catch (e) {
    错误(e);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTs7QUFFRixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUM7QUFDdkIsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLElBQUksSUFBb0IsQ0FBQztBQUN6QixJQUFJLEVBQWtCLENBQUM7QUFFdkIsU0FBUyxJQUFJO0lBQ1QsT0FBTyxzQ0FBc0MsQ0FBQyxPQUFPLENBQ2pELE9BQU8sRUFDUCxVQUFVLENBQUM7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQzVCLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN2QyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUNKLENBQUM7QUFDTixDQUFDO0FBQ0QsU0FBUyxLQUFLLENBQUMsR0FBVztJQUN0QixHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRCxPQUFPLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFDRDs7R0FFRztBQUNILFNBQVMsSUFBSSxDQUFDLEdBQVcsRUFBRSxFQUFhO0lBQ3BDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0MsTUFBTSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDdkIsTUFBTSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FDcEUsTUFBTSxDQUNULENBQUM7SUFDRixPQUFPLElBQUksQ0FBQztBQUNoQixDQUFDO0FBQ0Q7O0dBRUc7QUFDSCxTQUFTLElBQUksQ0FBQyxFQUFhO0lBQ3ZCLFFBQVE7U0FDSCxnQkFBZ0IsQ0FBQyx3QkFBd0IsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO1NBQ3RELE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxNQUFNLEVBQUUsRUFBWCxDQUFXLENBQUMsQ0FBQztJQUNoQyxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBQ0QsU0FBUyxRQUFRO0lBQ2IsSUFBSSxVQUFVLEVBQUU7UUFDWixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU87S0FDVjtJQUVELElBQUk7UUFDQSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWixTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3pCO0lBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtJQUVkLElBQUksWUFBWSxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN0RSxJQUFJLGFBQWEsR0FBRztRQUNoQixNQUFNO1FBQ04sS0FBSztRQUNMLFFBQVE7UUFDUixNQUFNO1FBQ04sU0FBUztRQUNULFFBQVE7UUFDUixPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87S0FDVixDQUFDO0lBQ0YsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ2QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBRWIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FDTCxjQUFjLEdBQUcsR0FBRyxHQUFHLEtBQUssRUFDNUIsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLEtBQUssRUFDL0IsY0FBYyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLEVBQzFDLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLEVBQzdDLGNBQWMsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUNuQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUN6QyxDQUFDO0lBQ04sQ0FBQyxDQUFDLENBQUM7SUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUEsR0FBRztRQUNaLEdBQUcsSUFBSSxHQUFHLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQztJQUNILEdBQUcsSUFBSSwwUEFPRyxDQUFDO0lBQ1gsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUVWLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQ0wsUUFBUSxHQUFHLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLFdBQVcsR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUN6QixRQUFRLEdBQUcsR0FBRyxDQUFDLFdBQVcsRUFBRSxHQUFHLEtBQUssRUFDcEMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxLQUFLLEVBQ3ZDLFFBQVEsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxFQUM3QixXQUFXLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FDbkMsQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7UUFDWixHQUFHLElBQUksR0FBRyxDQUFDO0lBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDSCxHQUFHLElBQUksNmNBWUcsQ0FBQztJQUNYLElBQUksR0FBRyxFQUFFLENBQUM7SUFFVixVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoQyxDQUFDO0FBQ0QsU0FBUyxJQUFJO0lBQ1QsSUFBSSxTQUFTLEVBQUU7UUFDWCxJQUFJO1lBQ0EsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2QsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN0QixPQUFPO1NBQ1Y7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO0tBQ2pCO0lBRUQsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUV2QixTQUFTLEdBQUcsSUFBSSxDQUNaLHE2RUFBcTZFLEVBQ3I2RSxHQUFHLENBQ04sQ0FBQyxDQUFDLHNCQUFzQjtJQUV6QixJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztJQUMvQixJQUFJLENBQUMsU0FBUztRQUNWLDJvQkFBMm9CLENBQUM7SUFDaHBCLHNCQUFzQjtJQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVoQyxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxFQUFFLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU87UUFDWixVQUFVO1lBQ1YsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZO1lBQ3JDLG9DQUFvQyxDQUFDO0lBQ3pDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ2xDLENBQUM7QUFDRCxTQUFTLEVBQUUsQ0FBQyxDQUFNO0lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyQixDQUFDO0FBQ0QsU0FBUyxJQUFJO0lBQ1QsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMvQyxPQUFPLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMxQixPQUFPLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ3JELENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLENBQ3BFLE9BQU8sQ0FDVixDQUFDO0FBQ04sQ0FBQztBQUVELElBQUk7SUFDQSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxVQUFBLEVBQUU7UUFDdkMsSUFBSSxPQUFPLEVBQUUsQ0FBQyxVQUFVLEtBQUssV0FBVyxFQUFFO1lBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQy9DLElBQUksRUFBRSxDQUFDO1NBQ1Y7YUFBTSxJQUFJLEVBQUUsQ0FBQyxVQUFVLEVBQUU7WUFDdEIsSUFBSSxFQUFFLENBQUM7U0FDVjthQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztTQUMzQztJQUNMLENBQUMsQ0FBQyxDQUFDO0NBQ047QUFBQyxPQUFPLENBQUMsRUFBRTtJQUNSLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUNUO0FBRUQsSUFBSTtJQUNBLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSTtRQUN4RCxJQUFJLE9BQU8sRUFBRSxJQUFJLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQixRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ1gsS0FBSyxHQUFHO29CQUNKLFFBQVEsRUFBRSxDQUFDO29CQUNYLE1BQU07Z0JBQ1YsS0FBSyxHQUFHO29CQUNKLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTt3QkFDYixJQUFJLEVBQUUsQ0FBQztxQkFDVjtvQkFDRCxNQUFNO2dCQUNWO29CQUNJLE1BQU07YUFDYjtZQUNELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNkO0lBQ0wsQ0FBQyxDQUFDLENBQUM7Q0FDTjtBQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ1IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ1Q7QUFFRCxJQUFJO0lBQ0EsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLGNBQWMsRUFBRTtRQUNqQyxJQUFJO1lBQ0MsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQW9CLENBQUMsS0FBSztnQkFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDdEM7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBRWQsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUM7WUFDckMsTUFDSSxRQUFRLENBQUMsYUFBYSxDQUNsQiw2Q0FBNkMsQ0FFcEQsMENBQUUsS0FBSyxFQUFFLENBQUM7S0FDbEI7Q0FDSjtBQUFDLE9BQU8sQ0FBQyxFQUFFO0lBQ1IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ1QifQ==