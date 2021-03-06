// ==UserScript==
// @name         Firefly Autologin
// @namespace    https://shuof123.wixsite.com/pixelworld/programming
// @version      1.0
// @description  Automatic login tool for Firefly intranet
// @author       David Feng
// @match        https://intranet.shrewsbury.org.uk/*
// @match        http://intranet.shrewsbury.org.uk/*
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @grant        none
// ==/UserScript==

(function() {
    // TEMP SETTINGS
    var ffUsername = "fengs"; // your username here, leave blank if autofill is used
    var ffPassword = "fs123456"; // your password here, leave blank if autofill is used
    var useAutoFill = false; // true if autofill is used, false otherwise
    // FUNCTIONS
    function slicedURL(url,sub){
        if (url[-1] != "/"){
            var goodurl = url + "/";
        }
        else {
            goodurl = url;
        }
        for (var i = 0, x = 0; i < goodurl.length; i++){
            if (goodurl[i] == "/"){
                x += 1;
                switch (x){
                    case sub:
                        var startIndex = i + 1;
                        break;
                    case sub + 1:
                        var stopIndex = i;
                        break;
                }
            }
        }
        return goodurl.slice(startIndex,stopIndex);
    }
    function modifyLogout(){
        var btnElement = document.querySelector("#userbar-react-component > div > nav > ul > li.item__1vcOo.item--user__3oPzg > div > ul > li:nth-child(6) > a");
        if (btnElement) {
            if (btnElement.innerHTML != "<b>Autologin Settings</b>"){ // if button exists and is not modified
            	console.log("%cBUTTON MODIFIED SUCUESSFULLY","color:green;font-weight:bold");
                btnElement.href = "https://intranet.shrewsbury.org.uk/autologin";
                btnElement.innerHTML = "<b>Autologin Settings</b>";
            }
        }
    }
    function injectHTML(){
    	var injHTML = '<html lang=\"en\"><head><style>ytd-live-chat-frame#chat { display: none; }<\/style><style>#watch-discussion, #watch7-discussion, ytd-comments { display: none; }<\/style><title>Firefly Autologin Settings<\/title><meta charset=\"utf-8\"\/><style type=\"text\/css\">@font-face{font-family:\"Source Sans Pro\";src:url(\"https:\/\/intranet.shrewsbury.org.uk\/Templates\/Melody\/css\/_inc\/_fonts\/SourceSansPro-Regular.woff\") format(\'woff\')}@font-face{font-family:\"Source Sans Pro\";src:url(\"https:\/\/intranet.shrewsbury.org.uk\/Templates\/Melody\/css\/_inc\/_fonts\/SourceSansPro-Bold.woff\") format(\'woff\');font-weight:bold}.lgd{position:relative;right:10px;bottom:10px;padding:10px;background-color:#DA291C;color:#FFF;width:100%;font-weight:lighter;font-size:20;border-top-left-radius:10px;border-top-right-radius:10px}.fs{background-color:#FFF;margin-bottom:30px;border-radius:10px;padding:10px}.textbox{border-radius:4px;border-width:1px;border-color:#CCC;border-style:solid;height:30px;width:200px}.checkText{margin-left:5px}#saveBtn{background-color:#1189E6}#saveBtn:hover{background-color:#0F7BCF}body{font-family:\"Source Sans Pro\",serif}.switch{position:relative;bottom:10px;display:inline-block;width:30px;height:17px}.switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition: .4s;transition: .4s;border-radius:34px}.slider:before{position:absolute;content:\"\";height:13px;width:13px;left:2px;bottom:2px;background-color:white;-webkit-transition: .4s;transition: .4s;border-radius:50%}input:checked+.slider{background-color:#2196F3}input:focus+.slider{box-shadow:0 0 1px #2196F3}input:checked+.slider:before{-webkit-transform:translateX(13px);-ms-transform:translateX(13px);transform:translateX(13px)}<\/style><\/head><body style=\"background-position:center;background-image:url(https:\/\/intranet.shrewsbury.org.uk\/Templates\/Melody\/custom\/background.png);background-attachment:fixed;margin:0px;\"><h1 style=\"background-color:#636363;padding:10px;width:calc(100% - 20px);\"> <svg style=\"height:50px;width:60px;vertical-align:middle\"> <path class=\"svg__fill\" style=\"fill:#D8D8D8\" d=\"M41,11.6c-2.6,2.6-4.6,5.8-6.4,9.2C29,21.2,9.1,22.8,5.8,23.1c-4.7,0.4,3,10.1,7,9.6c7.5-1,15.6-5.2,19.8-7.7c-0.2,0.4-0.4,0.8-0.5,1.2c-2.5,5.6-4.8,11.6-8,17.1c-0.2,0.4-0.5,0.8-0.8,1.2c-8,0.6-14-0.6-16.7-2.8C-0.9,35.6-2.9,5.3,5.5,1.4C11.3-1.3,29.7,1.3,45,8.6C43.5,9.4,42.1,10.4,41,11.6z M16,8.3c-2.9-1.3-2,9.5,0.6,10.4c2.8,1,14.3,0.4,16.1,0.3c1.1-0.1,1.7-2.2,1.7-2.2S17.5,9,16,8.3z M31.7,41.4c3.3-5.7,5.6-11.8,7.9-17.7c1.1-2.8,2.1-5.5,3.4-8.1c1.1-2.1,2.4-4.3,4.3-6c7.5,4,14.2,9.5,12.9,15c-2.3,9.9-17.3,16.5-29.8,18.8C30.8,42.9,31.3,42.2,31.7,41.4z\"><\/path> <\/svg> <span style=\"margin-left:10px;color:#FFFFFF;\">Firefly Autologin Settings<\/span><div style=\"margin-top:13px;margin-right:10px;float:right;cursor:pointer;\" id=\"closeBtn\"> <svg width=\"24px\" height=\"24px\" viewPort=\"0 0 24 24\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\"> <line x1=\"2\" y1=\"22\" x2=\"22\" y2=\"2\" stroke=\"#D8D8D8\" stroke-width=\"3\"\/> <line x1=\"2\" y1=\"2\" x2=\"22\" y2=\"22\" stroke=\"#D8D8D8\" stroke-width=\"3\"\/> <\/svg><\/div><\/h1><div style=\"margin:30px;\"><h3 style=\"background-color:#DAA520;color:#FFFFFF;padding:10px;font-weight:lighter;border-radius:10px;\">You can change the settings of Firefly Autologin Extension here. You can also view more information about this extension.<\/h3> <section class=\"fs\"> <header class=\"lgd\">\u2699\uFE0FSettings<\/header> <label class=\"switch\"> <input type=\"checkbox\" id=\"useAutoFill\" onclick=\"autofillClick()\"> <span class=\"slider\"><\/span> <\/label> <span class=\"checkText\">Use Browser Autofill<\/span><p style=\"margin-bottom:10px\">Username: <input type=\"text\" id=\"username\" class=\"textbox\"><\/p><p style=\"margin-bottom:10px\">Password: <input type=\"password\" id=\"password\" class=\"textbox\"><\/p><p><b>Experimental Features:<\/b><\/p> <label class=\"switch\"> <input type=\"checkbox\" id=\"socsLogin\" onclick=\"taskBtnClick()\"> <span class=\"slider\"><\/span> <\/label> <span class=\"checkText\">Tasks Page Buttons<\/span><br> <label class=\"switch\"> <input type=\"checkbox\" id=\"socsLogin\" onclick=\"socsClick()\"> <span class=\"slider\"><\/span> <\/label> <span class=\"checkText\">SOCS Autologin<\/span><br> <label class=\"switch\"> <input type=\"checkbox\" id=\"socsLogin\" onclick=\"myfilesClick()\"> <span class=\"slider\"><\/span> <\/label> <span class=\"checkText\">MyFiles Autologin<\/span><br> <label class=\"switch\"> <input type=\"checkbox\" id=\"socsLogin\" onclick=\"portalClick()\"> <span class=\"slider\"><\/span> <\/label> <span class=\"checkText\">Pupil Portal Autologin<\/span><br> <input id=\"saveBtn\" style=\"margin-top:10px;margin-bottom:10px;color:#FFFFFF;border-width:0px;border-radius:6px;padding:8px;\" type=\"button\" value=\"Save changes\" onclick=\"saveClick()\"> <\/section> <section class=\"fs\"> <header class=\"lgd\">\u2139\uFE0FAbout<\/header><p>This is a Userscript program written by David Feng in 2019, aiming to automate the process of logging into School Intranet.<\/p><p>This program can be modified to work with other Firefly Learning school VLEs as well.<\/p><p>Version: beta build 0.5 @ 2019\/02\/04 for Shrewsbury School Intranet<\/p><p>Update: New functions of Tasks Page \"Mark as Done\" button; other website autologin functions work in progress; Settings Page redesigned.<\/p><p><a href=\"mailto:fengshuo2004@163.com\">Email me<\/a> to give compliments, offer suggestions or report bugs<\/p> <\/section> <section class=\"fs\"> <header class=\"lgd\">\uD83D\uDD12Security<\/header><p><b>You should never install this extension on a public machine!<\/b><\/p><p>Any machine with this extension set up will be linked to that person\'s firefly.<\/p><p>If you install this extension on any public computer, not only that you caused inconvenience among others because they are constantly logged onto your account, your account login password may also be exposed to others.<\/p> <\/section> <section class=\"fs\"> <header class=\"lgd\">\uD83D\uDC41\uFE0FPrivacy Policy<\/header><p>We do not collect any of your personal information using this software.<\/p><p>Your account login we collected from the section above is only stored in YOUR computer locally and is only acquired when accessing the Firefly login page.<\/p><p>In future versions, we might also implement collecting data about your Internet browser type and version to provide better service.<\/p> <\/section> <section class=\"fs\"> <header class=\"lgd\">\uD83D\uDCDDDisclaimer<\/header><p>By using this software (Firefly Autologin Extension), you agree to take the following risks:<\/p><p>Your account access or information being stolen, VIA but not BY this software, due to virus infected computer or your wrongful actions described in the Security section.<\/p><p>Malfunction of Firefly pages or even your computer due to unofficial modifications to our source code.<\/p> <\/section> <section class=\"fs\"> <header class=\"lgd\">\u00A9\uFE0FCopyright<\/header><p>This program is open source and is under the license of <a href=\"https:\/\/creativecommons.org\/licenses\/by\/4.0\/\">Creative Commons Attribution 4.0 International.<\/a><\/p><p>Which means you can copy and redistribute it, you can also adapt upon it, both as long as you give me credit and don\'t apply other licenses but CC BY 4.0 for your adapted work.<\/p><p>Copyright David Feng 2019 <svg style=\"vertical-align:middle;\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" version=\"1.0\" id=\"Layer_1\" x=\"0px\" y=\"0px\" width=\"20px\" height=\"20px\" viewBox=\"5.5 -3.5 64 64\" enable-background=\"new 5.5 -3.5 64 64\" xml:space=\"preserve\"> <g> <circle fill=\"#FFFFFF\" cx=\"37.785\" cy=\"28.501\" r=\"28.836\"\/> <path d=\"M37.441-3.5c8.951,0,16.572,3.125,22.857,9.372c3.008,3.009,5.295,6.448,6.857,10.314 c1.561,3.867,2.344,7.971,2.344,12.314c0,4.381-0.773,8.486-2.314,12.313c-1.543,3.828-3.82,7.21-6.828,10.143 c-3.123,3.085-6.666,5.448-10.629,7.086c-3.961,1.638-8.057,2.457-12.285,2.457s-8.276-0.808-12.143-2.429 c-3.866-1.618-7.333-3.961-10.4-7.027c-3.067-3.066-5.4-6.524-7-10.372S5.5,32.767,5.5,28.5c0-4.229,0.809-8.295,2.428-12.2 c1.619-3.905,3.972-7.4,7.057-10.486C21.08-0.394,28.565-3.5,37.441-3.5z M37.557,2.272c-7.314,0-13.467,2.553-18.458,7.657 c-2.515,2.553-4.448,5.419-5.8,8.6c-1.354,3.181-2.029,6.505-2.029,9.972c0,3.429,0.675,6.734,2.029,9.913 c1.353,3.183,3.285,6.021,5.8,8.516c2.514,2.496,5.351,4.399,8.515,5.715c3.161,1.314,6.476,1.971,9.943,1.971 c3.428,0,6.75-0.665,9.973-1.999c3.219-1.335,6.121-3.257,8.713-5.771c4.99-4.876,7.484-10.99,7.484-18.344 c0-3.543-0.648-6.895-1.943-10.057c-1.293-3.162-3.18-5.98-5.654-8.458C50.984,4.844,44.795,2.272,37.557,2.272z M37.156,23.187 l-4.287,2.229c-0.458-0.951-1.019-1.619-1.685-2c-0.667-0.38-1.286-0.571-1.858-0.571c-2.856,0-4.286,1.885-4.286,5.657 c0,1.714,0.362,3.084,1.085,4.113c0.724,1.029,1.791,1.544,3.201,1.544c1.867,0,3.181-0.915,3.944-2.743l3.942,2 c-0.838,1.563-2,2.791-3.486,3.686c-1.484,0.896-3.123,1.343-4.914,1.343c-2.857,0-5.163-0.875-6.915-2.629 c-1.752-1.752-2.628-4.19-2.628-7.313c0-3.048,0.886-5.466,2.657-7.257c1.771-1.79,4.009-2.686,6.715-2.686 C32.604,18.558,35.441,20.101,37.156,23.187z M55.613,23.187l-4.229,2.229c-0.457-0.951-1.02-1.619-1.686-2 c-0.668-0.38-1.307-0.571-1.914-0.571c-2.857,0-4.287,1.885-4.287,5.657c0,1.714,0.363,3.084,1.086,4.113 c0.723,1.029,1.789,1.544,3.201,1.544c1.865,0,3.18-0.915,3.941-2.743l4,2c-0.875,1.563-2.057,2.791-3.541,3.686 c-1.486,0.896-3.105,1.343-4.857,1.343c-2.896,0-5.209-0.875-6.941-2.629c-1.736-1.752-2.602-4.19-2.602-7.313 c0-3.048,0.885-5.466,2.658-7.257c1.77-1.79,4.008-2.686,6.713-2.686C51.117,18.558,53.938,20.101,55.613,23.187z\"\/> <\/g> <\/svg> <svg style=\"vertical-align:middle;\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\" version=\"1.0\" id=\"Layer_1\" x=\"0px\" y=\"0px\" width=\"20px\" height=\"20px\" viewBox=\"5.5 -3.5 64 64\" enable-background=\"new 5.5 -3.5 64 64\" xml:space=\"preserve\"> <g> <circle fill=\"#FFFFFF\" cx=\"37.637\" cy=\"28.806\" r=\"28.276\"\/> <g> <path d=\"M37.443-3.5c8.988,0,16.57,3.085,22.742,9.257C66.393,11.967,69.5,19.548,69.5,28.5c0,8.991-3.049,16.476-9.145,22.456 C53.879,57.319,46.242,60.5,37.443,60.5c-8.649,0-16.153-3.144-22.514-9.43C8.644,44.784,5.5,37.262,5.5,28.5 c0-8.761,3.144-16.342,9.429-22.742C21.101-0.415,28.604-3.5,37.443-3.5z M37.557,2.272c-7.276,0-13.428,2.553-18.457,7.657 c-5.22,5.334-7.829,11.525-7.829,18.572c0,7.086,2.59,13.22,7.77,18.398c5.181,5.182,11.352,7.771,18.514,7.771 c7.123,0,13.334-2.607,18.629-7.828c5.029-4.838,7.543-10.952,7.543-18.343c0-7.276-2.553-13.465-7.656-18.571 C50.967,4.824,44.795,2.272,37.557,2.272z M46.129,20.557v13.085h-3.656v15.542h-9.944V33.643h-3.656V20.557 c0-0.572,0.2-1.057,0.599-1.457c0.401-0.399,0.887-0.6,1.457-0.6h13.144c0.533,0,1.01,0.2,1.428,0.6 C45.918,19.5,46.129,19.986,46.129,20.557z M33.042,12.329c0-3.008,1.485-4.514,4.458-4.514s4.457,1.504,4.457,4.514 c0,2.971-1.486,4.457-4.457,4.457S33.042,15.3,33.042,12.329z\"\/> <\/g> <\/g> <\/svg><\/p> <\/section><\/div> <script>function autofillClick(){var cbele=document.getElementById(\"useAutoFill\");var unele=document.getElementById(\"username\");var pwele=document.getElementById(\"password\");if(cbele.checked){unele.disabled=true;pwele.disabled=true;}else{unele.disabled=false;pwele.disabled=false;}} autofillClick();var closeEle=document.getElementById(\"closeBtn\");closeEle.onclick=function(){window.history.back();};<\/script> <\/body><\/html>';
        document.write(injHTML);
        console.log("%cDOCUMENT INJECTED SUCESSFULLY","color:green;font-weight:bold");
    }
    // For Task AJAX
    function getGuid(){
    	return document.getElementsByName('ff:userGuid')[0].getAttribute('content');
    }
    function getDate(){
    	return new Date().toISOString();
    }

    // MAIN
    if (slicedURL(document.URL) == "login"){ // the login page
        // ELEMENTS
        var displayDiv = document.getElementsByClassName("ff-login-sitename")[0];
        var loginMessage = document.getElementsByClassName("ff-login-instruction")[0];
        var button = document.getElementsByClassName("ff-login-submit")[0];
        var usernameField = document.getElementById('username');
        var passwordField = document.getElementById('password');
        console.log("%cAUTOLOGIN>LOGIN","color:orange;font-weight:bold");
        // ACTIONS
        displayDiv.style.backgroundColor = "#40AD47"; // change color of banner
        displayDiv.innerHTML += " (Autologin Active)"; // append text
        if (!useAutoFill){
            usernameField.value = ffUsername;
            passwordField.value = ffPassword;
        }
        loginMessage.innerHTML = "Welcome back, " + usernameField.value + "!" // replace with welcome message
        button.click(); // click the login button
    }
    else if (slicedURL(document.URL,3) == "autologin"){ // setting page
        console.log("%cAUTOLOGIN>SETTINGS","color:orange;font-weight:bold");
        injectHTML();
    }
    else { // other firefly pages
        console.log("%cAUTOLOGIN>GENERALFF","color:orange;font-weight:bold");
        setInterval(modifyLogout,200);
    }
})();