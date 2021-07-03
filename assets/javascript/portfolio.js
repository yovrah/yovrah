'use strict';

const ipgeolocation = 'https://api.ipgeolocation.io/ipgeo?apiKey=1785ed53312f42c7b5ef89f65c3faa1a';

const timeouts = [];

const mobileAndTabletCheck = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

$(document).ready(() => {
    const links = [
        {
            name: 'made with ❤ by yovrah',
            link: '76561198439688262',
    }
  ];

    for (let i in links) {
        let link = links[i];

        $('#marquee').append(`<a href="https://steamcommunity.com/profiles/${link.link}" target="_BLANK">${link.name}</a>`);

        link = $('#marquee').children('a').last();

        if (i != links.length - 1) $('#marquee').append(' <img class="emoticon" src="assets/others/mgh_17.png"> ');
    }

    if (mobileAndTabletCheck()) {
        $('#background').replaceWith('<div id="background" style="background-image: url(assets/images/mobile-background.jpg);"></div>');

        app.shouldIgnoreVideo = false;
    }

    app.titleChanger(['yovrah.github.io','y', 'yo', 'yov', 'yovr', 'yovra', 'yovrah', 'Mxmtoon - Falling For U (Extended Mix)']);
    app.iconChanger(['assets/icons/red-roses-axz.png']);
});

if ($.cookie('videoTime')) {
    app.videoElement.currentTime = $.cookie('videoTime');
    app.audioElement.currentTime = $.cookie('videoTime');
}

document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

document.body.onkeyup = (event) => {
    if (event.keyCode == 32 && app.skippedIntro) {
        if (app.backgroundToggler) {
            app.videoElement.play();
            app.audioElement.play();
        } else {
            app.videoElement.pause();
            app.audioElement.pause();
        }

        return (app.backgroundToggler = !app.backgroundToggler);
    }
};

$('html').on('contextmenu', (event) => {
    const img = document.createElement('img');

    const trollfaceLight = app.skippedIntro ? '' : 'trollface-light';

    img.src = 'assets/others/trollface.jpg';
    img.width = 40;
    img.height = 50;
    img.alt = 'yovrah';
    img.style = `position: absolute; left: ${event.pageX}px; top: ${event.pageY}px; z-index: 10`;
    img.className = `troll ${trollfaceLight}`;

    document.body.appendChild(img);
});

setInterval(() => {
    $('.troll').remove();
}, 1000000000);

$('.skip').click(() => {
    skipIntro();
});

$.fn.extend({
    animateCss: function (animationName) {
        const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

        this.addClass(`animated ${animationName}`).one(animationEnd, () => {
            $(this).removeClass(`animated ${animationName}`);
        });

        return this;
    },
});

const writeLine = (text, speed, timeout, callback) => {
    timeout = typeof timeout === 'number' ? timeout : [0, (callback = timeout)];

    const lineNumber = app.id !== 2 ? ++app.id : (app.id += 2);

    setTimeout(() => {
        const typed = new Typed(`#line${lineNumber}`, {
            strings: text,
            typeSpeed: speed,
            onComplete: callback,
        });
    }, timeout);
};

$.getJSON(ipgeolocation, (data) => {
    writeLine(["<a style='color: #f5ff00'>use auxiliary/scanner/ssh/ssh_login</a>", '<i style="color: #0f0">Authentication...</i>', "Предоставление доступа к <i><span style='font-size: 14px; color: #ff0000;'>[unknown]</span></i>...", ], 30, 500, () => {
        if (app.skippedIntro) return;
        clearCursor();

        const usernames = ['user', 'dude'];

        const ip = data.ip ? data.ip : usernames[Math.floor(Math.random() * usernames.length)];
        const country = data.country_name ? data.country_name : 'your country';

        writeLine([`<b style='color: #0f0'>login: yovrah</b>`, `<b style='color: #0f0'>password: abfz36fN3bv5nP2a;</b>`, `Доступ разрешен! <span style='font-size: 14px; color: #0f0;'><i>[success]</i></span>`, `Добро пожаловать обратно, <i style='color: #00fff5'>${ip}</i>! Кстати, приятно видеть кого-то из <i style='color: #0f0'>${country}!</i>`], 30, 300, () => {
            if (app.skippedIntro) return;
            clearCursor();

            writeLine(["<a style='color: #ff00e2';>Mxmtoon - Falling For U (Extended Mix)</a>", `<a style='color: #ff00e2'; font-size: 20px;>/id/yovrah</a>`], 50, 200, () => {

                timeouts.push(
                    setTimeout(() => {
                        if (app.skippedIntro) return;

                        clearCursor();

                        setTimeout(() => {
                            skipIntro();
                        }, 500);
                    }, 1000)
                );

            });

        });
    });
});

const skipIntro = () => {
    if (app.skippedIntro) return;

    app.skippedIntro = true;

    timeouts.forEach((timeout) => {
        clearTimeout(timeout);
    });

    $('.top-right').remove();

    $('#main').fadeOut(100, () => {
        $('#main').remove();

        $('#marquee').marquee({
            duration: 15000,
            gap: 420,
            delayBeforeStart: 1000,
            direction: 'left',
            duplicated: true,
        });

        setTimeout(() => {
            $('.brand-header').animateCss(app.effects[Math.floor(Math.random() * app.effects.length)]);
        }, 200);

        setTimeout(() => {
            const typed = new Typed('#brand', {
                strings: app.brandDescription,
                typeSpeed:50,

                onComplete: () => {
                    clearCursor();
                },
            });
        }, 1350);

        setTimeout(() => {
            if (!app.shouldIgnoreVideo) {
                app.videoElement.play();
                app.audioElement.play();
            }

            app.videoElement.addEventListener(
                'timeupdate',
                () => {
                    $.cookie('videoTime', app.videoElement.currentTime, {
                        expires: 1
                    });
                },
                false
            );

            $('.marquee-container').css('visibility', 'visible').hide().fadeIn(100);

            $('.marquee-container').animateCss('zoomIn');

            $('.container').fadeIn();

            $('.background').fadeIn(4000, () => {
                if (!app.shouldIgnoreVideo) $('#audio').animate({
                    volume: app.musicVolume
                }, app.musicFadeIn);
            });
        }, 200);
    });
};

const clearCursor = () => {
    return $('span').siblings('.typed-cursor').css('opacity', '0');
};
