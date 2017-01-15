import $ from 'jquery';
import { some } from 'lodash';
import mustache from 'mustache';
import analyze from './analyzer';
import notification from 'raw-loader!./templates/notification.hbs';

const title = $('meta[property="og:title"]').attr('content');
let analysis = null;

if (title) {
  analysis = analyze(title);

  // if (some(analysis)) {
  //   $('body').append(mustache.render(notification, {message: '<strong>Careful!</strong> Questionable content ahead.'}));
  //   $('.Polygraph_alert').fadeIn();
  //   $('.Polygraph_closebtn').click(() => $('.Polygraph_alert').fadeOut());
  // }

  // send analysis to background to set pageaction icon
  chrome.runtime.sendMessage({ analysis });
}

// liston for requests for analysis
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  sendResponse({ analysis });
});
