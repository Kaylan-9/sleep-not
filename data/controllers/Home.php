<?php

namespace MAIN\controllers;

class Home extends Controller{
    public function __construct(){
        $this->content="<!DOCTYPE html>
        <html lang='pt-br'>
            <head>
                <meta charset='UTF-8'>
                <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <link rel='stylesheet' href='public/style/style.css'>
                <title>Sleepnot</title>
            </head>
            <body></body>
            <script src='public/core/main.js'></script>
            <script src='public/core/page_maker.js'></script>
            <script src='public/script/page.js'></script>
            <script src='public/core/ajax.js'></script>
            <script src='public/script/load_content.js'></script>
            <script src='public/script/imgs.js'></script>
        </html>";
    }

    public function show_content(){
        echo $this->content;
    }
}