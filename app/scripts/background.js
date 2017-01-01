// Enable chromereload by uncommenting this line:
import 'chromereload/devonly';

import mustache from 'mustache';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  let title = request.analysis;

  // calculate score

  // chrome.pageAction.setIcon({ tabId: sender.tab.id, <icon> });
  chrome.pageAction.show(sender.tab.id);
});
