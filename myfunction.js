$(document).ready(function() {
    let root = document.querySelector(':root');
    let time = new Date();
    $.getJSON('apps.json', function(data) {
        data.apps.forEach(element => {
            $('#apps').append("<a href='" + element.link + "'><div class='app'><div class='imgWrapper'><img src='" + element.image + "' title='" + element.name + "'></div><p>" + element.name + "</p></div></a>");
        });
    });
    $('header h1').text(pad(time.getHours()) + ":" + pad(time.getMinutes()) + ":" + pad(time.getSeconds()));
    setInterval(function() {
        time = new Date();
        $('header h1').text(pad(time.getHours()) + ":" + pad(time.getMinutes()) + ":" + pad(time.getSeconds()));
    }, 1000);
    function pad(value) {
        if(value < 10) {
            return '0' + value;
        } else {
            return value;
        }
    }
    switch(localStorage.theme) {
        case "darkmode":
            SetDarkmode();
            break;
        case "lightmode":
            SetLightmode();
            break;
        case "photomode":
            SetPhotomode();
            break;
        default:
            localStorage.setItem("theme","darkmode");
            SetDarkmode();
            break;
    }
    $('.lightmode').click(function() {
        localStorage.setItem("theme","lightmode");
        SetLightmode();
    });
    $('.darkmode').click(function() {
        localStorage.setItem("theme","darkmode");
        SetDarkmode();
    });
    $('.photomode').click(function() {
        localStorage.setItem("theme","photomode");
        SetPhotomode();
    });
    function SetDarkmode() {
        root.style.setProperty('--background', "#1e1e1e");
        root.style.setProperty('--h1-background', "linear-gradient(90deg, transparent 0%, #393939 50%, transparent 100%)");
        root.style.setProperty('--text-color', "#fff");
        root.style.setProperty('--text-color-faded', "#ddd");
        root.style.setProperty('--light-contrast', "#282828");
        root.style.setProperty('--light-contrast-fixed', "#282828");
        root.style.setProperty('--high-contrast', "#393939");
        root.style.setProperty('--darkmode-btn', "url(img/design_buttons/dark_white.png)");
        root.style.setProperty('--lightmode-btn', "url(img/design_buttons/light_white.png)");
        root.style.setProperty('--photomode-btn', "url(img/design_buttons/photo_white.png)");
    }
    function SetLightmode() {
        root.style.setProperty('--background', "#fff");
        root.style.setProperty('--h1-background', "linear-gradient(90deg, transparent 0%, #ddd 50%, transparent 100%)");
        root.style.setProperty('--text-color', "#000");
        root.style.setProperty('--text-color-faded', "#444");
        root.style.setProperty('--light-contrast', "#eee");
        root.style.setProperty('--light-contrast-fixed', "#eee");
        root.style.setProperty('--high-contrast', "#ddd");
        root.style.setProperty('--darkmode-btn', "url(img/design_buttons/dark_black.png)");
        root.style.setProperty('--lightmode-btn', "url(img/design_buttons/light_black.png)");
        root.style.setProperty('--photomode-btn', "url(img/design_buttons/photo_black.png)");
    }
    function SetPhotomode() {
        root.style.setProperty('--background', "url(https://source.unsplash.com/user/andersjilden)");
        root.style.setProperty('--h1-background', "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.5) 50%, transparent 100%)");
        root.style.setProperty('--text-color', "#fff");
        root.style.setProperty('--text-color-faded', "#ddd");
        root.style.setProperty('--light-contrast', "rgba(0,0,0,0.3)");
        root.style.setProperty('--light-contrast-fixed', "#282828");
        root.style.setProperty('--high-contrast', "rgba(0,0,0,0.5)");
        root.style.setProperty('--darkmode-btn', "url(img/design_buttons/dark_white.png)");
        root.style.setProperty('--lightmode-btn', "url(img/design_buttons/light_white.png)");
        root.style.setProperty('--photomode-btn', "url(img/design_buttons/photo_white.png)");
    }
});