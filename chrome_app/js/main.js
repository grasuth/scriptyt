chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('html/player.html', {
    'outerBounds': {
      'width': 800,
  'height': 600
    }
  });
});
