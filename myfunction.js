$(document).ready(function() {
    let root = document.querySelector(':root');
    let time = new Date();
    $.getJSON('apps.json', function(data) {
        data.apps.forEach(element => {
            $('#apps').append("<a href='" + element.link + "'><div class='app shadow rounded'><div class='imgWrapper shadow rounded-full'><img src='" + element.image + "' title='" + element.name + "'></div><p>" + element.name + "</p></div></a>");
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
        root.style.setProperty('--fallback-background', "#1e1e1e");
        root.style.setProperty('--background', "#1e1e1e");
        root.style.setProperty('--h1-background', "linear-gradient(90deg, transparent 0%, #282828 50%, transparent 100%)");
        root.style.setProperty('--text-color', "#fff");
        root.style.setProperty('--text-color-faded', "#ddd");
        root.style.setProperty('--light-contrast', "#282828");
        root.style.setProperty('--light-contrast-fixed', "#282828");
        root.style.setProperty('--high-contrast', "#393939");
        root.style.setProperty('--arrow', "url(img/arrow/arrow_drop_down_white_24dp.svg)");
        
        $(".lightmode img").attr("src","img/design_buttons/light_white.png");
        $(".darkmode img").attr("src","img/design_buttons/dark_white.png");
        $(".photomode img").attr("src","img/design_buttons/photo_white.png");
    }
    function SetLightmode() {
        root.style.setProperty('--fallback-background', "#f7f7f7");
        root.style.setProperty('--background', "#f7f7f7");
        root.style.setProperty('--h1-background', "linear-gradient(90deg, transparent 0%, #fff 50%, transparent 100%)");
        root.style.setProperty('--text-color', "#000");
        root.style.setProperty('--text-color-faded', "#444");
        root.style.setProperty('--light-contrast', "#fff");
        root.style.setProperty('--light-contrast-fixed', "#fff");
        root.style.setProperty('--high-contrast', "#ebebeb");
        
        $(".lightmode img").attr("src","img/design_buttons/light_black.png");
        $(".darkmode img").attr("src","img/design_buttons/dark_black.png");
        $(".photomode img").attr("src","img/design_buttons/photo_black.png");
        root.style.setProperty('--arrow', "url(img/arrow/arrow_drop_down_black_24dp.svg)");
    }
    function SetPhotomode() {
        root.style.setProperty('--fallback-background', "#1e1e1e");
        root.style.setProperty('--background', "url(https://source.unsplash.com/collection/3672442/1920x1080/daily)");
        root.style.setProperty('--h1-background', "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 50%, transparent 100%)");
        root.style.setProperty('--text-color', "#fff");
        root.style.setProperty('--text-color-faded', "#ddd");
        root.style.setProperty('--light-contrast', "rgba(0,0,0,0.3)");
        root.style.setProperty('--light-contrast-fixed', "#282828");
        root.style.setProperty('--high-contrast', "rgba(0,0,0,0.5)");
        root.style.setProperty('--arrow', "url(img/arrow/arrow_drop_down_white_24dp.svg)");

        $(".lightmode img").attr("src","img/design_buttons/light_white.png");
        $(".darkmode img").attr("src","img/design_buttons/dark_white.png");
        $(".photomode img").attr("src","img/design_buttons/photo_white.png");
    }
});
