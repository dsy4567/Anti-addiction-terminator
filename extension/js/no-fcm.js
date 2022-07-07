/**
 * 此代码在 GPL-3.0 下获得许可, 请查看 COPYING.txt 或 <https://www.gnu.org/licenses/gpl-3.0.txt>
 * Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
 * 您还可以在这里找到源码 <https://github.com/dsy4567/Anti-addiction-terminator>
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

/* global $:false */

const 网址 = location.href;
var 成功 = 0;
var 游戏真实地址_17yy = "";
var 正在玩17yy = 0;
var 已全屏 = 0;
var _playLoading;

/**
 *
 * @param {*} 选择器
 * @returns document.querySelector("div")
 */
function _qs(选择器) {
    return document.querySelector(选择器);
}
/**
 *
 * @param {*} 选择器
 * @returns document.querySelector("div")
 */
// function _qsa(选择器) {
//     return document.querySelectorAll(选择器);
// }
/**
 *
 * @param {String} 开始
 * @param {String} 结束
 * @param {String} 值
 * @param {String} 类型 "1": url, "2": 字母+数字, "3": 数字
 * @param {String} 前面追加
 * @returns {String}
 */
function 获取中间(开始, 结束, 值, 类型, 前面追加) {
    if (开始 && !值.indexOf(开始) != -1) {
        值 = 值.substring(值.indexOf(开始) + 开始.length);
    }
    if (结束) {
        值 = decodeURI(值.substring(0, 值.indexOf(结束)));
    }
    if (前面追加) {
        值 = 前面追加 + 值;
    }
    switch (类型) {
        case "1":
            if (
                !(
                    值.substring(0, 2) == "//" ||
                    值.substring(0, 7) == "http://" ||
                    值.substring(0, 8) == "https://"
                )
            ) {
                throw new Error("不正确的字符串");
            }
            break;
        case "2":
            if (!/^[0-9a-zA-Z]*$/g.test(值)) {
                throw new Error("不正确的字符串");
            }
            break;
        case "3":
            if (isNaN(Number(值))) {
                throw new Error("不正确的字符串");
            }
            break;

        default:
            break;
    }
    return 值;
}

function 破解() {
    if (成功) return;
    let $full_screen_frame = _qs("#full_screen_frame");
    let $app_canvas_frame = _qs("#app_canvas_frame");
    let $ifm = _qs("#ifm");

    if (window.play22 && 网址.includes("7k7k.com")) {
        // 7k7k获取游戏直链1
        try {
            console.log("[防沉迷减点料] 尝试7k7k防沉迷减料");
            // window.Play24.prototype.playLoading();
            window.play22.playLoading();
            if (!_playLoading) {
                _playLoading = window.play22.playLoading;
            }
            window.play22.playLoading = () => {}; // 防止重复调用
            成功 = 1;
            // window.Play24.prototype.playLoading = ()=> {};
        } catch (err) {
            console.error(err);
        }
    } else if ($ifm && 网址.includes("m.7k7k.com/player")) {
        if ($ifm.src != location.href && $ifm.src) {
            // 7k7k获取游戏直链2
            try {
                console.log("[防沉迷减点料] 尝试7k7k手机端防沉迷减料");
                成功 = 1;
                location.href = $ifm.src;
            } catch (err) {
                console.error(err);
            }
        }
    } else if (网址.includes("h5.7k7k.com/web/H5GAMES.html")) {
        // 7k7k获取游戏直链3
        try {
            console.log("[防沉迷减点料] 尝试7k7k h5页游防沉迷减料");

            $.get(
                "http://h5.7k7k.com/api_redirect/game/start/?client=0&account=" +
                    获取中间("userid=", ";", document.cookie, "2") +
                    "&appkey=" +
                    获取中间("gid=", "&", 网址, "2") +
                    "&uid=" +
                    获取中间("userid=", ";", document.cookie, "2") +
                    "&tid=" +
                    获取中间("tid=", "&", 网址, "2"),
                (json) => {
                    location.href = JSON.parse(json).url;
                }
            );
            成功 = 1;
        } catch (err) {
            console.error(err);
        }
    } else if ($app_canvas_frame) {
        try {
            if ($app_canvas_frame.src && $app_canvas_frame.src != 网址) {
                console.log("[防沉迷减点料] 尝试阻止QQ空间自动跳转1");
                成功 = 1;
                location.href = $app_canvas_frame.src;
            }
        } catch (err) {
            console.error(err);
        }
    } else if ($full_screen_frame) {
        try {
            if ($full_screen_frame.src && $full_screen_frame.src != 网址) {
                console.log("[防沉迷减点料] 尝试阻止QQ空间自动跳转2");
                成功 = 1;
                location.href = $full_screen_frame.src;
            }
        } catch (err) {
            console.error(err);
        }
    } else if (网址.includes("//i.7724.com/user/danjilogin?url=")) {
        try {
            console.log("[防沉迷减点料] 尝试7724防沉迷减料");
            // var url = 网址.substring(网址.indexOf("danjilogin?url=") + "danjilogin?url=".length);
            // if (
            //     url.substring(0, 2) == "//" ||
            //     url.substring(0, 7) == "http://" ||
            //     url.substring(0, 8) == "https://"
            // ) {
            // }
            let url = 获取中间("danjilogin?url=", undefined, 网址, "1");
            location.href = url;
            成功 = 1;
        } catch (err) {}
    } else if (网址.includes("wvw.9377.com/game_login.php")) {
        try {
            console.log("[防沉迷减点料] 尝试9377防沉迷减料");
            $.get(网址, (html) => {
                // var url = html.substring(
                //     html.indexOf('id="iframe" src="') + 'id="iframe" src="'.length,
                //     html.indexOf('" name="mainFrame" scrolling="auto"')
                // );
                let url = 获取中间(
                    'id="iframe" src="',
                    '" name="mainFrame" scrolling="auto"',
                    html,
                    "1"
                );
                location.href = url;
            });
            成功 = 1;
        } catch (err) {}
    } else if (网址.includes("game.37.com/play.php")) {
        try {
            console.log("[防沉迷减点料] 尝试37防沉迷减料");
            $.get(网址, (html) => {
                // var url = html.substring(
                //     html.indexOf('src="//gameapp.37.com/controller/enter_game.php') +
                //         'src="'.length,
                //     html.indexOf('" id="mainFrame"')
                // );
                let url = 获取中间(
                    'src="//gameapp.37.com/controller/enter_game.php',
                    '" id="mainFrame"',
                    html,
                    "1",
                    "//gameapp.37.com/controller/enter_game.php"
                );
                location.href = url;
            });
            成功 = 1;
        } catch (err) {}
    } else if (网址.includes("wvw.4366.com/game_login.php")) {
        try {
            console.log("[防沉迷减点料] 尝试4366防沉迷减料");
            $.get(网址, (html) => {
                // var url = html.substring(
                //     html.indexOf('align="left" id="iframe" src="') +
                //         'align="left" id="iframe" src="'.length,
                //     html.indexOf('" name="mainFrame" scrolling="auto"')
                // // );
                // if (
                //     url.substring(0, 2) == "//" ||
                //     url.substring(0, 7) == "http://" ||
                //     url.substring(0, 8) == "https://"
                // ) {
                //     location.href = url;
                // }
                let url = 获取中间(
                    'align="left" id="iframe" src="',
                    '" name="mainFrame" scrolling="auto"',
                    html,
                    "1"
                );
                location.href = url;
            });
            成功 = 1;
        } catch (err) {}
    } else if (网址.includes("www.17yy.com/f/play")) {
        try {
            正在玩17yy = 1;
            try {
                if (_qs("#flashgame").src == 游戏真实地址_17yy) return;
            } catch (e) {}
            try {
                if (_qs("#flash_frame").src == 游戏真实地址_17yy) return;
            } catch (e) {}

            $.ajax({
                url: "http://www.17yy.com/e/payapi/vip_ajax.php",
                data: {
                    action: "getStatus",
                    id: 获取中间("/f/play/", ".html", 网址, "3"),
                },
                type: "POST",
                dataType: "json",
                success: function (resp) {
                    try {
                        _qs("#flashgame").src = 游戏真实地址_17yy =
                            "http://" +
                            window.server +
                            "/" +
                            window.classes +
                            "/" +
                            window.date +
                            "/" +
                            resp.data.game_path;
                    } catch (e) {}
                    try {
                        _qs("#flash_frame").src = 游戏真实地址_17yy =
                            "http://" +
                            window.server +
                            "/" +
                            window.classes +
                            "/" +
                            window.date +
                            "/" +
                            resp.data.game_path;
                    } catch (e) {}
                },
            });
            成功 = 1;
        } catch (err) {}
    }
}

function load() {
    破解();
    setTimeout(破解, 3000);
    if (网址.includes("ptlogin.4399.com")) {
        setTimeout(() => {
            if (_qs(".ptlogin_btn")) {
                _qs(".ptlogin_btn").addEventListener("mouseup", () => {
                    alert("请在稍后刷新网页");
                });
            }
        }, 1000);
    }
    console.log("[防沉迷终结者] 开始执行");
}

load();

document.body.addEventListener("mousedown", () => {
    if (已全屏 == 0 && 正在玩17yy == 1) {
        try {
            _qs("#flash_frame").requestFullscreen();
        } catch (e) {
            try {
                _qs("#flashgame").requestFullscreen();
            } catch (ee) {}
        }
    }
    已全屏 = 1;
});

try {
    $.get;
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
