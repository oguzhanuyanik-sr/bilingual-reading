$("#button").on('click', function () {
    create();
});

function create() {
    let input = document.getElementById("textarea").value;

    input = input.replace("...", ".").replace("!", ".").replace("?", ".").replace("\n", ".").replace("  ", " ");

    let multiFile = Math.ceil(input.length / 227000);

    for (; multiFile >= 1; multiFile--) {
        let total = "";

        total += (`<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="utf-8">
            <title class="notranslate">Bilingual Reading</title>
            <link href='https://fonts.googleapis.com/css?family=Open Sans' rel='stylesheet'>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
                crossorigin="anonymous">
            <script src="https://code.jquery.com/jquery-3.5.0.min.js"></script>
            <style>
                body {
                    font-family: 'Open Sans';
                    font-size: 16px;
                    font-weight: bold;
                }
        
                .line {
                    float: left;
                    list-style-type: none;
                    border: 1px solid #92A8D1;
                    padding: 0px;
                    margin-top: 0px;
                    margin-right: 5px;
                    margin-bottom: 5px;
                    text-align: center;
                }
        
                .text-one {
                    font-size: 18px;
                    float: left;
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 0px;
                    margin-left: -10px;
                    clear: both;
                    color: #343434;
                }
        
                .text-two {
                    font-size: 18px;
                    float: left;
                    width: 100%;
                    padding: 10px;
                    margin-bottom: 0px;
                    margin-left: -10px;
                    clear: both;
                    color: blue;
                }
        
                .item-one {
                    font-size: 18px;
                    color: #B60024;
                    margin-top: 9px;
                    vertical-align: super;
                    padding-right: 3px;
                    padding-left: 3px;
                    padding-bottom: 1px;
                }
        
                .item-two {
                    font-size: 13px;
                    color: #006700;
                    padding-right: 3px;
                    padding-left: 3px;
                    padding-top: 1px;
                }
        
                #download {
                    clear: left;
                }
        
                #download a {
                    width: 100%;
                    text-decoration: none;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    color: white;
                }
        
                #pagedown {
                    margin-top: 10px;
                    width: 100%;
                }
            </style>
        </head>
        
        <body>
            <div class="container">
                <button type="button" class="btn btn-success notranslate pagedown" id="pagedown">Auto Page Scroll</button>
                <script>
                    $("#pagedown").on('click', function () {
                        scrollPage();
                    });
        
                    function scrollPage() {
                        setInterval(function () {
                            let counter = 0;
        
                            window.scrollBy(counter, (counter += 500));
                        }, 700);
                    }
                </script>`);

        let counterOne = 0;
        let counterTwo = 1;
        let counterThree = counterTwo * 227000;
        let sliceText = input.slice(counterOne, counterThree);

        counterOne += 227000;
        sliceText = sliceText.split(".");

        for (let i in sliceText) {
            if (sliceText[i] == "" || sliceText[i] == " ") {
                continue;
            }

            total = total + (`<p class='text-one notranslate'>` + sliceText[i] + "</p>") +
                (`<p class='text-two'>` + sliceText[i] + "</p>");

            let keywords = sliceText[i].split(" ");

            for (let j in keywords) {
                if (keywords[j] == "" || keywords[j] == " ") {
                    continue;
                }

                total += (`<ul class="line"><li class='item-one notranslate'>` + keywords[j] +
                    "</li><li class='item-two'>" + keywords[j] + "</li></ul>");
            }
        }

        total += (`<div id="download">
                       <a class="btn btn-success notranslate" onclick="this.href='data:text/html;charset=UTF-8,` +
            `'+encodeURIComponent(document.documentElement.outerHTML)" download="Translated-Text-` + counterTwo +
            `.html">Download</a>
                   </div>
                </div>
            </body>
        </html>`);

        let element = document.createElement('a');

        element.style.display = 'none';
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(total));
        element.setAttribute('download', "Original-Text-" + counterTwo + ".html");
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        counterTwo += 1
    }
}