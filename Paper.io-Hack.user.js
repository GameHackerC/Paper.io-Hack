// ==UserScript==
// @name         Paper.io ZOOM HACK - Paperio Hacks - Best Paper Cheat 2019
// @description  Paperio Mods Features: Zoom Hack, Unlock All Skins, Change Everything, Auto Turn Bot, FPS paper-io.com
// @namespace    iomods.org
// @author       iomods.org
// @version      1.1
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/paperio.user.js
// @downloadURL  https://iomods.org/mods/paperio.user.js
// @match        *://paper-io.com/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// @run-at document-idle
// ==/UserScript==

setTimeout(function() {
//tanitim belgeseli
var colorize,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "IOGAMESLIST.ORG", "IOMODS.ORG", "IO-OYUNLAR.COM"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "SLITHERE.COM" || value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET") { colorize = true; } else { colorize = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
if(colorize == false){ministyler = "color:white;font-size:12px;padding:3px;";} else {ministyler = "color:yellow;font-size:12px;padding:3px;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+'</a> - ';
}

//genel isimlendirme ve ayarlar
 this.settings = {
            feature1: "Show FPS",
            feature2: "See All Game",
            feature3: "Unlock All Skins",
            feature4: "Change Highest Score",
            feature5: "Change Server",
            feature6: "Change SkinIndex",
            feature7: "Change Saved Username",
            feature8: "Auto Turn Bot",
            feature9: "Extra Features+",
            feature10: "Adblock Plus+",
            feature11: "Zoom In/Out",
            feature12: "Rainbow BG",
            feature13: "Change BG",
     l1: "slithere.com",
     l2: "krunkerio.net",
     l3: "krunkerio.org",
     l4: "zombsroyaleio.org",
     l5: "survivio.info",
     l6: "skribbl-io.net",
     l7: "mope-io.net",
     l8: "moomooioplay.com",
     l9: "shellshockio.org",
     l10: "iogameslist.org",
     l11: "shellshockio.org",
     l12: "diepioplay.com",
     l13: "diepioplay.org",
     string: "<a style=\"padding-right: 2px;\"></a><font color=\"black\">-</font><a style=\"padding-left: 6px;\"></a>",
     buttonpadder: "padding-left: 2px;",
     locationer: "location=yes,scrollbars=yes,status=yes,height=570,width=520",
     locationer2: "location=yes,scrollbars=yes,status=yes,left=800,height=570,width=520",
	 optionstyler: "font-weight:bold;color:black;font-size:14px;",
     optionstyler2: "font-weight:bold;color:black;font-size:14px;",
     optionstyler3: "color:black;font-size:11px;",
     facebooker: '<div id="fb-root" style="display: inline-block;"></div><script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_EN/sdk.js#xfbml=1&version=v3.2"></script><div class="fb-like" style="display: inline-block;" data-href="https://facebook.com/slitherecom" data-layout="button_count" data-action="like" data-size="small" data-show-faces="false" data-share="false"></div>',
     youtuber: "<script src=\"https://apis.google.com/js/platform.js\"></script><div class=\"g-ytsubscribe\" data-channelid=\"UCy6xGaMhm74YeHMDGgEr7kg\" data-layout=\"default\" style=\"display: inline-block;\" data-count=\"default\"></div>",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     tablostyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(255, 255, 255, 0.3);",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
   	 imagelist: '<a href="https://instagram.com/aecicekdagi" target="_blank"><img src="https://iomods.org/mods/instagram.jpg"></a> <a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg"></a> <a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg"></a></br>',
};

//degisenkisimlar
$('#bottom').prepend('<div style="'+this.settings.fpsstyle+'" id="fps" class="fps"></div>');
$('#links').html('<div style="'+this.settings.formstyle+'"><div class="option1"></div>'+this.settings.imagelist+''+this.settings.youtuber+''+this.settings.facebooker+'</div>');
$('#bottom').prepend('<div class="list1"></div>');
//general
$('.option1').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l1+'" target="blank">'+this.settings.feature1+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\'http://'+this.settings.l1+'\', \'_blank\', \''+this.settings.locationer+'\');" checked></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l2+'" target="blank">'+this.settings.feature2+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="allgame" onchange="window.open(\'http://'+this.settings.l2+'\', \'_blank\', \''+this.settings.locationer+'\');"><span class=\'slider\'></span></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option1').on('click', '.allgame', function() { zoomhackuser(); });
$('.option2').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l3+'" target="blank">'+this.settings.feature3+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="allskins" onchange="window.open(\'http://'+this.settings.l3+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l4+'" target="blank">'+this.settings.feature4+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="highestscore" onchange="window.open(\'http://'+this.settings.l4+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option3"></div>');
$('.option2').on('click', '.allskins', function() { getskin(); });
$('.option2').on('click', '.highestscore', function() { edithighs(); });
$('.option3').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l5+'" target="blank">'+this.settings.feature5+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="serverch" onchange="window.open(\'http://'+this.settings.l5+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l6+'" target="blank">'+this.settings.feature6+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="skinindexer" onchange="window.open(\'http://'+this.settings.l6+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option4"></div>');
$('.option3').on('click', '.serverch', function() { editserver(); });
$('.option3').on('click', '.skinindexer', function() { editskinstate(); });
$('.option4').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l7+'" target="blank">'+this.settings.feature7+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="susername" onchange="window.open(\'http://'+this.settings.l7+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l8+'" target="blank">'+this.settings.feature8+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l8+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option5"></div>');
$('.option4').on('click', '.susername', function() { editsname(); });
$('.option5').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l9+'" target="blank">'+this.settings.feature9+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l9+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l10+'" target="blank">'+this.settings.feature10+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'http://'+this.settings.l10+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l12+'" target="blank">'+this.settings.feature12+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\'http://'+this.settings.l12+'\', \'_blank\', \''+this.settings.locationer+'\');"></label>'+this.settings.string+'<a style="'+this.settings.optionstyler2+'" href="http://'+this.settings.l13+'" target="blank">'+this.settings.feature13+'</a> <label style="'+this.settings.buttonpadder+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\'http://'+this.settings.l13+'\', \'_blank\', \''+this.settings.locationer+'\');"></label><div class="option7"></div>');
$('.option6').on('change', '.renkcont', function() { colorfulmod(); });
$('.option6').on('change', '.bgcont', function() { changebackground(); });
$('.option7').html('<a style="'+this.settings.optionstyler+'" href="http://'+this.settings.l11+'" target="blank">'+this.settings.feature11+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\'http://'+this.settings.l11+'\', \'_blank\', \''+this.settings.locationer2+'\');"> <a style="'+this.settings.optionstyler3+'" href="http://'+this.settings.l11+'" target="blank">(Min: 70-Max: 140)</a>');
$('.option7').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.settings.liststyler+'">'+text+'</div>');
    }, 0);
	
//fps counter
var before,now,fps
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
    $('#pre_game').css('background-color',''+changecolor+'');
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["transparent"];
    }
      setInterval(function() {
                 var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
                 var selectedcolor = colorsrain[bodybgarrayno];
                $("#pre_game").css("background-color",selectedcolor);

      }, 3000);
}

//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}

var zoomHackUsed = false;
function zoomhackuser() {
	            if (zoomHackUsed==false){
                addGlobalStyle("div#outer_grid {display: block;position: fixed;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;width: 100% !important;height: 100% !important;align-content: center;vertical-align: middle;}");
                addGlobalStyle("div#the_game {position: fixed;top: 0 !important;left: 0 !important;right: 0 !important;bottom: 0 !important;zoom: 0.3 !important;}");
                addGlobalStyle("#paperio #grid .crown:before {top: -120px !important;left: -86px !important;right: 0 !important;border: solid transparent;border-width: 100px !important;border-top: 100px solid rgba(255, 0, 0, 0.25) !important;width: 0px !important;content: close-quote !important;}");
                zoomHackUsed = true;}
}

(function() {
    'use strict';
    inject_rawjs("function copyTextToClipboard(text) { var textArea = document.createElement('textarea'); textArea.style.position = 'fixed'; textArea.style.top = 0; textArea.style.left = 0; textArea.style.height = '2em'; textArea.style.padding = 0; textArea.style.border = 'none'; textArea.style.outline = 'none'; textArea.style.boxShadow = 'none'; textArea.style.background = 'transparent'; textArea.value = text; document.body.appendChild(textArea); textArea.focus(); textArea.select(); try {var successful = document.execCommand('copy');} catch (err) {} document.body.removeChild(textArea); }");
    inject_rawjs("function setCookie(cname, cvalue, exdays) {var d = new Date();d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));var expires = 'expires='+d.toUTCString();document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';}");
    inject_rawjs("function dataimp(){var input = prompt('Paste an exported string here.');var fields = input.split('*');setCookie('paperio_topscore',fields[0] ,'365');setCookie('paperio_share',fields[1] ,'365');setCookie('paperio_username',fields[2] ,'365');window.location.reload(true);}");
    inject_rawjs("function dataexp(){ var newhtm = getCookie('paperio_topscore') + '*' + getCookie('paperio_share') + '*' + getCookie('paperio_username');document.getElementById('exported').innerHTML = '<i>Exported Data: ' + newhtm + '</i><br><sub>Copied to clipboard.</sub>';copyTextToClipboard(newhtm); }")
    inject_rawjs("function getCookie(name){var re = new RegExp(name + '=([^;]+)');var value = re.exec(document.cookie);return (value != null) ? unescape(value[1]) : null;}");
    inject_rawjs("function edithighs(){Cookies.set('paperio_topscore', prompt('Highscore in % (ex: 34.44 or 54)'), { expires: 365 });window.location.reload(true);};");
    inject_rawjs("function editsname(){Cookies.set('paperio_username', prompt('Edit Username-Cookie'), { expires: 365 });window.location.reload(true);};");
    inject_rawjs("function getskin(){Cookies.set('skin','skin_00', { expires: 365 });window.location.reload(true);};");
    inject_rawjs("function editskinstate(){Cookies.set('skin', prompt('Edit Skinindex (skin_00 = No skin, skin_01 = Nyan Cat, ...)'), { expires: 365 });window.location.reload(true);};");
    inject_rawjs("function editserver(){Cookies.set('paperio_server', prompt('Change Server (ex.: CH1, CH7, ...)'), { expires: 365 });window.location.reload(true);};");
    inject_rawjs("function hideskins(){$('#skins').hide();};");
    inject_rawjs("function showskins(){$('#skins').show();};");
    inject_rawjs("function showfooter(){$('#block_links').show();};");
    inject_rawjs("function showsns(){$('#share').show();};");
    inject_rawjs("function ulight(){$('#skins').hide();$('div#message').hide();$('#block_links').hide();};");
    $("#locked").remove();
    $("#share").remove();
    $("#rightbanner").remove();
    $("#theme>div").remove();
    $("#block_links").hide();
    var initFn = function() {

        $("<div class='button dark' style='margin-bottom:30px' onclick='shop_open();'>SKINS</div>").appendTo("#theme");
        $("<div class='button dark' onclick='about_open();'>Plugin Settings</div>").appendTo("#theme");

        $(".text").remove();

        $("<p style='font-size:23px'>Edit cookies</p>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='edithighs()'>Edit Highscore</div>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='editsname()'>Edit Saved Username</div>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='editskinstate()'>Edit Skinindex</div>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='editserver()'>Change Server (Cookie)</div>").appendTo("#text");
        $("<p>").appendTo("#text");
        $("<p style='font-size:23px'>Unlocker</p>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='getskin()'>Unlock Skins</div>").appendTo("#text");
        $("<p>").appendTo("#text");
        $("<p style='font-size:23px'>Misc</p>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='ulight()'>Ultra-Light Mode</div>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='showfooter()'>Show Footer</div>").appendTo("#text");
        $("<p>").appendTo("#text");
        $("<p style='font-size:23px'>Save Data</p>").appendTo("#text");
        $("<div class='button' style='right: 0px;color: gray' onclick='dataimp()'>Import</div>").appendTo("#text");
        $("<div id='exported' class='button' style='right: 0px;color: gray' onclick='dataexp()'>Export</div>").appendTo("#text");

        $("<p>").appendTo("#text");
        $("<p style='font-size:23px'>In-Game Mods:</p>").appendTo("#text");
        $("<div style='right: 0px;color: gray'><i>Press [CTRL] to zoom out. Reload page to reset</i></div>").appendTo("#text");
    }

    setTimeout(initFn, 2000);
    document.getElementById("zoom").outerHTML = "";
    document.addEventListener('keyup', doc_keyUp, false);
})();
var zoomHackUsed = false;
function doc_keyUp(e) {
    switch (e.keyCode) {
        case 17:
            if (zoomHackUsed==false){
                addGlobalStyle("div#outer_grid {display: block;position: fixed;left: 0 !important;right: 0 !important;top: 0 !important;bottom: 0 !important;width: 100% !important;height: 100% !important;align-content: center;vertical-align: middle;}");
                addGlobalStyle("div#the_game {position: fixed;top: 0 !important;left: 0 !important;right: 0 !important;bottom: 0 !important;zoom: 0.3 !important;}");
                addGlobalStyle("#paperio #grid .crown:before {top: -120px !important;left: -86px !important;right: 0 !important;border: solid transparent;border-width: 100px !important;border-top: 100px solid rgba(255, 0, 0, 0.25) !important;width: 0px !important;content: close-quote !important;}");
                zoomHackUsed = true;}
        default:
            break;
    }
}

function inject_rawjs(jsstring) {$('<script type="text/javascript">' + jsstring + '</script>').appendTo($('head'));}
function inject_srcjs(link) {$('<script type="text/javascript" src="' + link + '"/>').appendTo($('head'));}
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) {
        return;
    }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
