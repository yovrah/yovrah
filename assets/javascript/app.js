class _app {
    id = 0;
    videoElement = null;
    audioElement = null;
    musicVolume = 0.15;
    musicFadeIn = 10000;
    skippedIntro = false;
    backgroundToggler = false;
    shouldIgnoreVideo = false;
    effects = ['fade'];
    brandDescription = ['made with <i>love</i> by <u>yovrah</u>','everybody lies','22 december 2006','<i>Mxmtoon</i> - Falling For U (Extended Mix)','+16° bad weather','<a href="https://steamcommunity.com/id/yovrah/"target="_blank"><i class="fab fa-steam fa-fw"></i><a>ᅠ</a><a href="https://www.instagram.com/yovrah/"target="_blank"><i class="fab fa-instagram fa-fw"></i></a>ᅠ<b></b><a href="https://open.spotify.com/playlist/2IPxk1wYaHBHNXVlp8Rzkp?si=fc1be45345c84e12" target="_blank"><i class="fab fa-spotify fa-fw"></i></a>ᅠ<a href="https://github.com/yovrah" target="_blank"><i class="fab fa-github fa-fw"></i></a></a>', ];


    titleChanger = (text, delay) => {
        if (!text) return;

        delay = delay || 500;

        let counter = 0;

        setInterval(() => {
            if (counter < text.length) document.title = text[counter++];
            else document.title = text[(counter = 0)];
        }, delay);
    };

    iconChanger = (urls, delay) => {
        if (!urls) return;

        delay = delay || 1;

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
