var hp = chrome.contextMenus.create({"title": "InstaIt"});

chrome.contextMenus.create({title:"Find %s on Instagram",contexts: ["all"], "onclick": onRequest});

function onRequest(info, tab) {
    chrome.tabs.create({url: "https://www.instagram.com/" + info.selectionText + "/"});
    };