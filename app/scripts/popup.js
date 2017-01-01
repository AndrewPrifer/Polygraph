import $ from 'jquery';
import mustache from 'mustache';
import popup from 'raw-loader!./templates/content.hbs';

$('#root').text('Loading...');

chrome.tabs.query({active: true, currentWindow: true}, tabs => {
  chrome.tabs.sendMessage(tabs[0].id, {}, response => {
    console.log('log '+mustache.render(popup, { analysis: response.analysis }))

    // timeout to fix incorrect popup size
    setTimeout(() => {
      $('#root').html(mustache.render(popup, { analysis: response.analysis }));
    }, 200);
  });
});
