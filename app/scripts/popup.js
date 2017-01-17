import $ from 'jquery';
import mustache from 'mustache';
import popup from './templates/content.hbs';

chrome.tabs.query({
  active: true,
  currentWindow: true,
}, (tabs) => {
  const tabId = tabs[0].id;
  chrome.tabs.sendMessage(tabId, {}, (response) => {
    const analysis = response.analysis;

    const clear = Object.values(analysis).every(e => !e);

    // timeout to fix incorrect popup size
    setTimeout(() => {
      $('#root').html(mustache.render(popup, {
        analysis: response.analysis,
        clear,
      }));
      $('.expander-trigger').click(function () {
        $(this).toggleClass('expander-hidden');
      });
    }, 200);
  });
});
