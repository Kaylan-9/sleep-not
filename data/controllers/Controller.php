<?php

namespace MAIN\controllers;
use MAIN\structures\Conn;

class Controller extends Conn{
    public function __construct(){
        $this->content="<!DOCTYPE html>
        <html lang='pt-br'>
            <head>
                <meta charset='UTF-8'>
                <meta http-equiv='X-UA-Compatible' content='IE=edge'>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                <link rel='stylesheet' href='public/style/style.css'>
                <title>Loop</title>
            </head>
            <body></body>
            <script src='public/core/main.js'></script>
            <script src='public/core/page_create.js'></script>
            <script src='public/script/page.js'></script>
            <script src='public/script/loadcontent.js'></script>
            <script src='public/script/imgs.js'></script>
        </html>";
    }

    public function show_content(){
        echo $this->content;
    }
}