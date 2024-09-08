class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  musicVolume = 0.12;
  musicFadeIn = 4000;
  skippedIntro = false;
  backgroundToggler = false;
  shouldIgnoreVideo = false;
  effects = ['fade'];
  brandDescription = [ 'ай фак ю пушит шит', '<i>psilo</i> - kill again', '+11° Heavy rain shower', ' <a href="https://steamcommunity.com/id/yovrah/"target="_blank"><i class="fab fa-steam"></i><a>ᅠ</a><a href="https://www.instagram.com/horsefuckergay?igsh=MTN5Z2dnbzV4aWszYQ%3D%3D&utm_source=qr"target="_blank"><i class="fab fa-instagram"></i></a>ᅠ<b></b><a href="https://open.spotify.com/playlist/2IPxk1wYaHBHNXVlp8Rzkp?si=fc1be45345c84e12" target="_blank"><i class="fab fa-spotify"></i></a>ᅠ<a href="https://t.me/im2sexy" target="_blank"><i class="fab fa-telegram"></i></a></a> ', ];
  titleChanger = (text, delay) => {
    if (!text) return;

    delay = delay || 300;

    let counter = 0;

    setInterval(() => {
      if (counter < text.length) document.title = text[counter++];
      else document.title = text[(counter = 0)];
    }, delay);
  };

  iconChanger = (urls, delay) => {
    if (!urls) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < urls.length) {
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');

        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = urls[counter];

        document.getElementsByTagName('head')[0].appendChild(link);
      } else counter = 0;

      ++counter;
    }, delay);
  };
  
}

const app = new _app();
