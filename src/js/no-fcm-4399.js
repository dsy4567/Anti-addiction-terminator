/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
View License at <https://www.gnu.org/licenses/gpl-3.0.html>
Source code: <https://github.com/dsy4567/Anti-addiction-terminator>
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
