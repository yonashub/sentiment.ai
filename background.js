chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
});

function handleContextMenuClick(info, tab) {
    //const linkUrl = info["linkUrl"];
    alert("checking sentiment of selection: ");
    //checkselectionsentiment(selectedtext);
}

chrome.contextMenus.create({
    "title": "check selection sentiment",
    "contexts": ["selection"],
    "onclick": handleContextMenuClick
});
