<?php
    $input = $_POST["input"];
    $engine = $_POST["engine"];

    switch($engine) {
        case "google":
            header('Location: https://google.com/search?q=' . $input);
            break;
        case "yandex":
            header('Location: https://yandex.com/search/?text=' . $input);
            break;
        case "github":
            header('Location: https://github.com/search?q=' . $input . '&ref=opensearch');
            break;
        case "youtube":
            header('Location: https://www.youtube.com/results?search_query=' . $input);
            break;
        case "soundcloud":
            header('Location: https://soundcloud.com/search?q=' . $input);
            break;
        case "url":
            header('Location: ' . $input);
            break;
        case "twitter":
            header('Location: https://twitter.com/search?q=' . $input);
            break;
        case "spotify":
            header('Location: https://open.spotify.com/search/' . $input);
            break;
        case "ytmusic":
            header('Location: https://music.youtube.com/search?q=' . $input);
            break;
        case "4chan":
            header('Location: https://find.4chan.org/?q=' . $input);
            break;
        case "bing":
            header('Location: https://www.bing.com/search?q=' . $input);
            break;
        case "duckduckgo":
            header('Location: https://duckduckgo.com/?q=' . $input);
            break;
    }
?>