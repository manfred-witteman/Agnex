chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var currentTab = tabs[0];
        var currentUrl = currentTab.url;
        
        // Check if the current URL is from the "archive.is" domain
        if (currentUrl.includes("archive.is")) {
            // Do not perform the redirect if the URL is from the "archive.is" domain
            return;
        }
        
        var encodedUrl = encodeURIComponent(currentUrl);
        var redirectUrl = "https://archive.is/submit/?url=" + encodedUrl;
        chrome.tabs.update(currentTab.id, { url: redirectUrl });
    });
});

