"use strict";
var anzhiyu_musicPlaying = !1
    , anzhiyu_musicStretch = !1
    , anzhiyu_musicFirst = !1
    , themeColorMeta = document.querySelector('meta[name="theme-color"]')
    , pageHeaderEl = document.getElementById("page-header")
    , navMusicEl = document.getElementById("nav-music")
    , consoleEl = document.getElementById("console")
    , anzhiyu = {
    changeThemeColor: function(e) {
        null !== themeColorMeta && themeColorMeta.setAttribute("content", e)
    },
    initThemeColor: function() {
        var e = getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-bar-background").trim().replace('"', "").replace('"', "");
        56 < (window.scrollY || document.documentElement.scrollTop) && anzhiyu.is_Post() && (e = getComputedStyle(document.documentElement).getPropertyValue("--anzhiyu-meta-theme-post-color").trim().replace('"', "").replace('"', "")),
        themeColorMeta.getAttribute("content") !== e && this.changeThemeColor(e)
    },
    is_Post: function() {
        return 0 <= window.location.href.indexOf("/posts/")
    },
    addNavBackgroundInit: function() {
        var e = 0
            , t = 0;
        0 != (0 < (e = document.body ? document.body.scrollTop : e) - (t = document.documentElement ? document.documentElement.scrollTop : t) ? e : t) && (pageHeaderEl.classList.add("nav-fixed"),
            pageHeaderEl.classList.add("nav-visible")),
        pageHeaderEl.querySelector(".bili-banner") && (pageHeaderEl.classList.add("nav-fixed"),
            pageHeaderEl.classList.add("nav-visible"))
    },
    downloadImage: function(e, o) {
        rm.hideRightMenu(),
            0 == rm.downloadimging ? (rm.downloadimging = !0,
                btf.snackbarShow("正在下载中，请稍后", !1, 1e4),
                setTimeout(function() {
                    var a = new Image;
                    a.setAttribute("crossOrigin", "anonymous"),
                        a.onload = function() {
                            var e = document.createElement("canvas");
                            e.width = a.width,
                                e.height = a.height;
                            e.getContext("2d").drawImage(a, 0, 0, a.width, a.height);
                            var e = e.toDataURL("image/png")
                                , t = document.createElement("a")
                                , n = new MouseEvent("click");
                            t.download = o || "photo",
                                t.href = e,
                                t.dispatchEvent(n)
                        }
                        ,
                        a.src = e,
                        btf.snackbarShow("图片已添加盲水印，请遵守版权协议"),
                        rm.downloadimging = !1
                }, "10000")) : btf.snackbarShow("有正在进行中的下载，请稍后再试")
    },
    stopImgRightDrag: function() {
        $("img").on("dragstart", function() {
            return !1
        })
    },
    scrollTo: function(e) {
        e = document.querySelector(e).offsetTop;
        window.scrollTo(0, e - 80)
    },
    showLoading: function() {
        document.querySelector("#loading-box").classList.remove("loaded")
    },
    hideLoading: function() {
        document.querySelector("#loading-box").classList.add("loaded")
    },
    hideAsideBtn: function() {
        var e = document.documentElement.classList;
        e.contains("hide-aside") ? saveToLocal.set("aside-status", "show", 2) : saveToLocal.set("aside-status", "hide", 2),
            e.toggle("hide-aside"),
            e.contains("hide-aside") ? document.querySelector("#consoleHideAside").classList.add("on") : document.querySelector("#consoleHideAside").classList.remove("on")
    },
    switchCommentBarrage: function() {
        document.querySelector(".comment-barrage") && ($(".comment-barrage").is(":visible") ? ($(".comment-barrage").hide(),
            btf.snackbarShow("✨ 已关闭评论弹幕"),
            $(".menu-commentBarrage-text").text("显示热评"),
            document.querySelector("#consoleCommentBarrage").classList.remove("on"),
            localStorage.setItem("commentBarrageSwitch", "false")) : $(".comment-barrage").is(":hidden") && ($(".comment-barrage").show(),
            $(".menu-commentBarrage-text").text("关闭热评"),
            document.querySelector("#consoleCommentBarrage").classList.add("on"),
            btf.snackbarShow("✨ 已开启评论弹幕"),
            localStorage.removeItem("commentBarrageSwitch"))),
            rm.hideRightMenu()
    },
    initIndexEssay: function() {
        document.querySelector(".essay_bar_swiper_container") && setTimeout(function() {
            var e = new Swiper(".essay_bar_swiper_container",{
                passiveListeners: !0,
                direction: "vertical",
                loop: !0,
                autoplay: {
                    disableOnInteraction: !0,
                    delay: 3e3
                },
                mousewheel: !0
            })
                , t = document.getElementById("bbtalk");
            null !== t && (t.onmouseenter = function() {
                    e.autoplay.stop()
                }
                    ,
                    t.onmouseleave = function() {
                        e.autoplay.start()
                    }
            )
        }, 100)
    },
    diffDate: function(e) {
        var t, n, a = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], o = new Date, e = new Date(e), o = o.getTime() - e.getTime(), i = 864e5;
        return a ? (a = o / i,
            t = o / 36e5,
            n = o / 6e4,
            1 <= o / 2592e6 ? e.toLocaleDateString().replace(/\//g, "-") : 1 <= a ? parseInt(a) + " " + GLOBAL_CONFIG.date_suffix.day : 1 <= t ? parseInt(t) + " " + GLOBAL_CONFIG.date_suffix.hour : 1 <= n ? parseInt(n) + " " + GLOBAL_CONFIG.date_suffix.min : GLOBAL_CONFIG.date_suffix.just) : parseInt(o / i)
    },
    changeTimeInEssay: function() {
        document.querySelector("#bber") && document.querySelectorAll("#bber time").forEach(function(e) {
            var t = e.getAttribute("datetime");
            e.innerText = anzhiyu.diffDate(t, !0),
                e.style.display = "inline"
        })
    },
    changeTimeInAlbumDetail: function() {
        document.querySelector("#album_detail") && document.querySelectorAll("#album_detail time").forEach(function(e) {
            var t = e.getAttribute("datetime");
            e.innerText = anzhiyu.diffDate(t, !0),
                e.style.display = "inline"
        })
    },
    reflashEssayWaterFall: function() {
        document.querySelector("#waterfall") && setTimeout(function() {
            waterfall("#waterfall"),
                document.getElementById("waterfall").classList.add("show")
        }, 500)
    },
    commentText: function(e) {
        "undefined" != e && "null" != e || (e = "好棒！");
        var t = document.getElementsByClassName("el-textarea__inner")[0]
            , n = document.createEvent("HTMLEvents");
        t && (n.initEvent("input", !0, !0),
            e = replaceAll(e, "\n", "\n> "),
            t.value = "> " + e + "\n\n",
            t.dispatchEvent(n),
            e = document.querySelector("#post-comment").offsetTop,
            window.scrollTo(0, e - 80),
            t.focus(),
            t.setSelectionRange(-1, -1),
        document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show"))
    },
    sayhi: function() {
        var e = document.getElementById("author-info__sayhi");
        e && (e.innerHTML = getTimeState() + "！我是")
    },
    addFriendLink: function() {
        var e, t = document.getElementsByClassName("el-textarea__inner")[0];
        t && ((e = document.createEvent("HTMLEvents")).initEvent("input", !0, !0),
            t.value = "昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n站点截图（可选）：\n",
            t.dispatchEvent(e),
            t.focus(),
            t.setSelectionRange(-1, -1))
    },
    musicToggle: function() {
        var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
        anzhiyu_musicFirst || (musicBindEvent(),
            anzhiyu_musicFirst = !0);
        anzhiyu_musicStretch = anzhiyu_musicPlaying ? (document.querySelector("#nav-music").classList.remove("playing"),
            document.getElementById("menu-music-toggle").innerHTML = '<i class="fa-solid fa-play"></i><span>播放音乐</span>',
            document.getElementById("nav-music-hoverTips").innerHTML = "音乐已暂停",
            document.querySelector("#consoleMusic").classList.remove("on"),
            anzhiyu_musicPlaying = !1,
            document.querySelector("#nav-music").classList.remove("stretch"),
            !1) : (document.querySelector("#nav-music").classList.add("playing"),
            document.getElementById("menu-music-toggle").innerHTML = '<i class="fa-solid fa-pause"></i><span>暂停音乐</span>',
            document.querySelector("#consoleMusic").classList.add("on"),
            anzhiyu_musicPlaying = !0,
            document.querySelector("#nav-music").classList.add("stretch"),
            !0),
        e && document.querySelector("#nav-music meting-js").aplayer.toggle()
    },
    musicTelescopic: function() {
        anzhiyu_musicStretch = anzhiyu_musicStretch ? (document.querySelector("#nav-music").classList.remove("stretch"),
            !1) : (document.querySelector("#nav-music").classList.add("stretch"),
            !0)
    },
    musicSkipBack: function() {
        navMusicEl.querySelector("meting-js").aplayer.skipBack()
    },
    musicSkipForward: function() {
        navMusicEl.querySelector("meting-js").aplayer.skipForward()
    },
    musicGetName: function() {
        for (var e = $(".aplayer-title"), t = [], n = e.length - 1; 0 <= n; n--)
            t[n] = e[n].innerText;
        return t[0]
    },
    darkModeStatus: function() {
        "light" == ("dark" === document.documentElement.getAttribute("data-theme") ? "dark" : "light") ? $(".menu-darkmode-text").text("深色模式") : $(".menu-darkmode-text").text("浅色模式")
    },
    initConsoleState: function() {
        document.documentElement.classList.contains("hide-aside") ? document.querySelector("#consoleHideAside").classList.add("on") : document.querySelector("#consoleHideAside").classList.remove("on")
    },
    rewardShowConsole: function() {
        consoleEl.classList.add("reward-show"),
            anzhiyu.initConsoleState()
    },
    hideConsole: function() {
        consoleEl.classList.contains("show") ? consoleEl.classList.remove("show") : consoleEl.classList.contains("reward-show") && consoleEl.classList.remove("reward-show")
    }
}
    , getTimeState = function() {
    var e = (new Date).getHours()
        , t = "";
    return 0 <= e && e <= 5 ? t = "晚安😴" : 5 < e && e <= 10 ? t = "早上好👋" : 10 < e && e <= 14 ? t = "中午好👋" : 14 < e && e <= 18 ? t = "下午好👋" : 18 < e && e <= 24 && (t = "晚上好👋"),
        t
};
document.addEventListener("pjax:send", function() {
    anzhiyu.showLoading
}),
    document.getElementById("page-name").innerText = document.title.split(" | 安知鱼")[0],
    anzhiyu.initIndexEssay(),
    anzhiyu.changeTimeInEssay(),
    anzhiyu.changeTimeInAlbumDetail(),
    anzhiyu.reflashEssayWaterFall(),
    anzhiyu.sayhi(),
    anzhiyu.stopImgRightDrag(),
    anzhiyu.addNavBackgroundInit(),
    addRightMenuClickEvent(),
    coverColor(),
    anzhiyuScrollFn();
