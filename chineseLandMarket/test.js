function stringToHex(str) {
    var val = "";
    for (var i = 0; i < str.length; i++) {
        if (val == "") val = str.charCodeAt(i).toString(16); else val += str.charCodeAt(i).toString(16);
    }
    return val;
}

function YunSuoAutoJump() {
    var width = "1920";
    var height = "1080";
    var screendate = width + "," + height;
    // var curlocation = window.location.href;
    // if (-1 == curlocation.indexOf("security_verify_")) {
    //     document.cookie = "srcurl=" + stringToHex(window.location.href) + ";path=/;";
    // }
    url = "/default.aspx?tabid=226&security_verify_data=" + stringToHex(screendate);
    return url
}

result = YunSuoAutoJump();
console.log(result);