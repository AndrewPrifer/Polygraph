import $ from 'jquery';
import analyze from './analyzer';

const title = $('meta[property="og:title"]').attr('content');
let analysis = null;

if (title) {
  analysis = analyze(title);

  // send analysis to background to set pageaction icon
  chrome.runtime.sendMessage({ analysis });
}

// liston for requests for analysis
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({ analysis });
});
