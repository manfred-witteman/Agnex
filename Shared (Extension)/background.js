chrome.browserAction.onClicked.addListener(function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    var currentTab = tabs[0];
    var currentUrl = currentTab.url;
    var encodedUrl = encodeURIComponent(currentUrl);
    var redirectUrl = "https://archive.is/submit/?url=" + encodedUrl;
    chrome.tabs.update(currentTab.id, { url: redirectUrl });
  });
});
