/**
 * 此代码采用 GPL-3.0 开源许可证, 请查看 LICENSE.txt 或 https://www.gnu.org/licenses/gpl-3.0.txt
 * Copyright (C) 2022 dsy4567 (https://github.com/dsy4567 | dsy4567@outlook.com)
 */

/**
 *  ________ ___  ___  ________  ___  __            ___  _________
 * |\  _____\\  \|\  \|\   ____\|\  \|\  \         |\  \|\___   ___\     |
 * \ \  \__/\ \  \\\  \ \  \___|\ \  \/  /|_       \ \  \|___ \  \_|     |
 *  \ \   __\\ \  \\\  \ \  \    \ \   ___  \       \ \  \   \ \  \      |
 *   \ \  \_| \ \  \\\  \ \  \____\ \  \\ \  \       \ \  \   \ \  \     |
 *    \ \__\   \ \_______\ \_______\ \__\\ \__\       \ \__\   \ \__\   \|/
 *     \|__|    \|_______|\|_______|\|__| \|__|        \|__|    \|__|    v
 *
 * ________________________________________________________________
 * |                                                              |
 * |                       未成年限制登录提醒                     |
 * |                                                              |
 * |您使用的是未成年账号，仅周五、周六、周日及法定节假日晚上8:00- |
 * |9:00可以游戏！当前已被限制！                                  |
 * |                                                              |
 * |            --------------------------------------            |
 * |            |           下次可玩游戏时段         |            |
 * |            |                                    |            |
 * |            |         本周五晚上8:00-9:00        |            |
 * |            |____________________________________|            |
 * |                                                              |
 * |温馨提示：                                                    |
 * |1.如果身份信息有误，请点击》》申请修改《《                    |
 * |2.如果您身份信息已经变动，可点击》》刷新身份《《              |
 * |                ____________    ____________                  |
 * |                |          |    |          |                  |
 * |                | 更换账号 |    |   确定   |                  |
 * |                |__________|    |__________|                  |
 * |______________________________________________________________|
 */

const 网址 = location.href;

function 破解() {
    if (网址.includes("4399.com/flash")) {
        // 搞破坏
        try {
            Object.defineProperty(window, "isLoadingAntiindulgence", {
                value: 0,
                writable: false,
            });
        } catch (e) {}
        try {
            Object.defineProperty(window, "isIniframe", {
                value: "", // 原来是Function, 这样做可以使防沉迷报错
                writable: false,
            });
        } catch (e) {}
        try {
            Object.defineProperty(window, "getBizid", {
                value: "", // 原来是Function, 这样做可以使防沉迷报错
                writable: false,
            });
        } catch (e) {}
    } else if (window.play22 && 网址.includes("7k7k.com")) {
        // 7k7k获取游戏直链
        try {
            console.log("[防沉迷减点料] 尝试7k7k防沉迷减料");
            // window.Play24.prototype.playLoading();
            window.play22.playLoading();
            window.play22.playLoading = () => {}; // 防止重复调用
            // window.Play24.prototype.playLoading = ()=> {};
        } catch (err) {
            console.error(err);
        }
    } else if (网址.includes("//i.7724.com/user/danjilogin?url=")) {
        try {
            console.log("[防沉迷减点料] 尝试7724防沉迷减料");
            location.href = 网址.substring(
                网址.indexOf("danjilogin?url=") + "danjilogin?url=".length
            );
        } catch (err) {}
    } else if (网址.includes("wvw.9377.com/game_login.php")) {
        try {
            console.log("[防沉迷减点料] 尝试9377防沉迷减料");
            $.get(网址, (html) => {
                location.href = html.substring(
                    html.indexOf('id="iframe" src="') + 'id="iframe" src="'.length,
                    html.indexOf('" name="mainFrame" scrolling="auto"')
                );
            });
        } catch (err) {}
    } else if (网址.includes("game.37.com/play.php")) {
        try {
            console.log("[防沉迷减点料] 尝试37防沉迷减料");
            $.get(网址, (html) => {
                location.href = html.substring(
                    html.indexOf('src="//gameapp.37.com/controller/enter_game.php') +
                        'src="'.length,
                    html.indexOf('" id="mainFrame"')
                );
            });
        } catch (err) {}
    } else if (网址.includes("wvw.4366.com/game_login.php")) {
        try {
            console.log("[防沉迷减点料] 尝试4366防沉迷减料");
            $.get(网址, (html) => {
                location.href = html.substring(
                    html.indexOf('align="left" id="iframe" src="') +
                        'align="left" id="iframe" src="'.length,
                    html.indexOf('" name="mainFrame" scrolling="auto"')
                );
            });
        } catch (err) {}
    }
}

function load() {
    破解();
    setTimeout(破解, 3000);
    addEventListener(
        "load",
        () => {
            破解();
            setTimeout(破解, 3000);

            if (网址.includes("ptlogin.4399.com")) {
                setTimeout(() => {
                    if (document.querySelector(".ptlogin_btn")) {
                        document.querySelector(".ptlogin_btn").addEventListener("mouseup", () => {
                            alert("请在稍后刷新网页");
                        });
                    }
                }, 1000);
            }
        },
        true
    );
    console.log("[防沉迷终结者] 开始执行");
}

try {
    window.$.get;
} catch (e) {
    window.$ = {
        get: (url, call) => {
            let xhr = new XMLHttpRequest();
            let response = "";
            xhr.open("get", url);
            xhr.send(null);
            xhr.onload = () => {
                response = xhr.responseText;
                call(response);
            };
        },
    };
}

load();
