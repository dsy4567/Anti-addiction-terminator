/*
此代码在 GPL-3.0 下获得许可, 请查看 COPYING.txt 或 <https://www.gnu.org/licenses/gpl-3.0.txt>
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
您可以在这里找到源码 <https://github.com/dsy4567/Anti-addiction-terminator>
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

try {
    Object.defineProperty(window, "smevent", {
        value: null, // 原来是Function, 这样做可以使防沉迷报错
        writable: false,
    });
} catch (e) {}
try {
    Object.defineProperty(window, "PageWebApiSdkConf", {
        value: null,
        writable: false,
    });
} catch (e) {}
try {
    Object.defineProperty(window, "PageWebApiSdk", {
        value: null,
        writable: false,
    });
} catch (e) {}
try {
    Object.defineProperty(window, "getBizid", {
        value: null,
        writable: false,
    });
} catch (e) {}
