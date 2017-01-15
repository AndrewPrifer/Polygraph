// Enable chromereload by uncommenting this line:
import 'chromereload/devonly';

import mustache from 'mustache';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const analysis = request.analysis;
  const tab = sender.tab.id;

  let count = 0;

  for (let i in analysis) {
    if (analysis[i] === true) {
      count++;
    }
  }

  setPageActionIcon(count, 19, tab);
  chrome.pageAction.show(tab);
});

function setPageActionIcon(badgeText, size, tab) {
  const canvas = document.createElement('canvas');
  const img = document.createElement('img');
  const imgScale = 0.8;
  const badgeRatio = 0.5;

  const badgeX = size * (1 - badgeRatio);
  const badgeY = badgeX;
  const badgeSize = size * badgeRatio;
  img.onload = function () {
    const context = canvas.getContext('2d');

    const imgSize = size * imgScale;
    const imgOffset = (size - imgSize)/2;
    context.drawImage(img, imgOffset, imgOffset, imgSize, imgSize);

    context.fillStyle = "rgba(255,0,0,1)";
    const radius = badgeSize / 2;
    context.arc(badgeX + radius, badgeY + radius, radius, 0, 2 * Math.PI, false);
    context.fill();

    context.fillStyle = "white";
    context.font = `${badgeSize}px Arial`;
    context.textAlign = "center"
    context.textBaseline = "middle";
    context.fillText(`${badgeText}`, badgeX + radius, badgeY + radius);

    chrome.pageAction.setIcon({
      imageData: context.getImageData(0, 0, size, size),
      tabId: tab,
    });
  };
  img.src = "../images/icon-19.png";
}
