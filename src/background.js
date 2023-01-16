/*
Copyright (C) 2022 dsy4567 <https://github.com/dsy4567 | dsy4567@outlook.com>
View License at <https://www.gnu.org/licenses/gpl-3.0.html>
Source code: <https://github.com/dsy4567/Anti-addiction-terminator>
*/
var background = {
    通用规则破解: function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { 操作: "1" }, function (回复) {
                console.log("收到回复: " + 回复);
            });
        });
    },
    大人来了: function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { 操作: "2" }, function (回复) {
                console.log("收到回复: " + 回复);
            });
        });
    }
};
chrome.commands.onCommand.addListener(function (命令) {
    switch (命令) {
        case "1":
            console.log(chrome.i18n.getMessage("btn0"));
            background.通用规则破解();
            break;
        case "2":
            console.log(chrome.i18n.getMessage("btn1"));
            background.大人来了();
            break;
        default:
            break;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJhY2tncm91bmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTtBQUVGLElBQUksVUFBVSxHQUFHO0lBQ2IsTUFBTTtRQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUNiLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQ3JDLFVBQVUsSUFBSTtZQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUNuQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUNWLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUNYLFVBQVUsRUFBRTtnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQ0osQ0FBQztRQUNOLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUNELElBQUk7UUFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FDYixFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxFQUNyQyxVQUFVLElBQUk7WUFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FDbkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFDVixFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFDWCxVQUFVLEVBQUU7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUNKLENBQUM7UUFDTixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7Q0FDSixDQUFDO0FBRUYsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLFVBQUEsRUFBRTtJQUNwQyxRQUFRLEVBQUUsRUFBRTtRQUNSLEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1QyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEIsTUFBTTtRQUVWLEtBQUssR0FBRztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1QyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsTUFBTTtRQUVWO1lBQ0ksTUFBTTtLQUNiO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==