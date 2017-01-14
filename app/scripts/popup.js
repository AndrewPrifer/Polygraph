import $ from 'jquery';
import mustache from 'mustache';
import popup from 'raw-loader!./templates/content.hbs';

$('#root').text('Loading...');

chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
  chrome.tabs.sendMessage(tabs[0].id, {}, response => {
    const analysis = response.analysis;
    let clear = true;

    for (let i in analysis) {
      if (analysis[i] === true) {
        clear = false;
        break;
      }
    }

    // timeout to fix incorrect popup size
    setTimeout(() => {
      $('#root').html(mustache.render(popup, { analysis: response.analysis, clear }));
      $('.expander-trigger').click(function () {
        console.log('toggle');
        $(this).toggleClass("expander-hidden");
      });
    }, 200);
  });
});
