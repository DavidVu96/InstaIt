var hp = chrome.contextMenus.create({"title": "InstaIt"});

chrome.contextMenus.create({title:"Find on Instagram for '%s'",contexts: ["all"], "onclick": onRequest});

function onRequest(info, tab) {
    chrome.tabs.create({url: "https://www.instagram.com/" + info.selectionText + "/"});
    };