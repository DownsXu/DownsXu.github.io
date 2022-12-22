var percentFlag = false; // 节流阀
function essayScroll() {
    let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
    const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
    result <= 99 || (result = 99);

    if (
        !percentFlag &&
        waterfallResult + 100 >= document.documentElement.clientHeight &&
        document.querySelector("#waterfall")
    ) {
        // console.info(waterfallResult, document.documentElement.clientHeight);
        setTimeout(() => {
            waterfall("#waterfall");
        }, 500);
    } else {
        setTimeout(() => {
            document.querySelector("#waterfall") && waterfall("#waterfall");
        }, 500);
    }

    const r = window.scrollY + document.documentElement.clientHeight;

    let p = document.getElementById("post-comment") || document.getElementById("footer");

    (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}
function replaceAll(e, n, t) {
    return e.split(n).join(t);
}
var anzhiyu = {
    diffDate: function (d, more = false) {
        const dateNow = new Date();
        const datePost = new Date(d);
        const dateDiff = dateNow.getTime() - datePost.getTime();
        const minute = 1000 * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const month = day * 30;

        let result;
        if (more) {
            const monthCount = dateDiff / month;
            const dayCount = dateDiff / day;
            const hourCount = dateDiff / hour;
            const minuteCount = dateDiff / minute;

            if (monthCount >= 1) {
                result = datePost.toLocaleDateString().replace(/\//g, "-");
            } else if (dayCount >= 1) {
                result = parseInt(dayCount) + " " + GLOBAL_CONFIG.date_suffix.day;
            } else if (hourCount >= 1) {
                result = parseInt(hourCount) + " " + GLOBAL_CONFIG.date_suffix.hour;
            } else if (minuteCount >= 1) {
                result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.date_suffix.min;
            } else {
                result = GLOBAL_CONFIG.date_suffix.just;
            }
        } else {
            result = parseInt(dateDiff / day);
        }
        return result;
    },
    changeTimeInEssay: function () {
        document.querySelector("#bber") &&
        document.querySelectorAll("#bber time").forEach(function (e) {
            var t = e,
                datetime = t.getAttribute("datetime");
            (t.innerText = anzhiyu.diffDate(datetime, true)), (t.style.display = "inline");
        });
    },
    reflashEssayWaterFall: function () {
        document.querySelector("#waterfall") &&
        setTimeout(function () {
            waterfall("#waterfall");
            document.getElementById("waterfall").classList.add("show");
        }, 500);
    },
    commentText: function (e) {
        if (e == "undefined" || e == "null") e = "好棒！";
        var n = document.getElementsByClassName("el-textarea__inner")[0],
            t = document.createEvent("HTMLEvents");
        if (!n) return;
        t.initEvent("input", !0, !0);
        var o = replaceAll(e, "\n", "\n> ");
        (n.value = "> " + o + "\n\n"), n.dispatchEvent(t);
        var i = document.querySelector("#post-comment").offsetTop;
        window.scrollTo(0, i - 80),
            n.focus(),
            n.setSelectionRange(-1, -1),
        document.getElementById("comment-tips") && document.getElementById("comment-tips").classList.add("show");
    },
    initIndexEssay: function () {
        setTimeout(() => {
            let essay_bar_swiper = new Swiper(".essay_bar_swiper_container", {
                passiveListeners: true,
                direction: "vertical",
                loop: true,
                autoplay: {
                    disableOnInteraction: true,
                    delay: 3000,
                },
                mousewheel: true,
            });

            let essay_bar_comtainer = document.getElementById("bbtalk");
            if (essay_bar_comtainer !== null) {
                essay_bar_comtainer.onmouseenter = function () {
                    essay_bar_swiper.autoplay.stop();
                };
                essay_bar_comtainer.onmouseleave = function () {
                    essay_bar_swiper.autoplay.start();
                };
            }
        }, 100);
    },
};

anzhiyu.initIndexEssay();
anzhiyu.changeTimeInEssay();
anzhiyu.reflashEssayWaterFall();


document.addEventListener('pjax:complete', fps);
document.addEventListener('DOMContentLoaded', fps);
function fps(){
if(window.localStorage.getItem("fpson")=="1"){
//如果要使博客设置上面的设置项能生效，就把上面一行取消注释
    var rAF = function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
        );
    }();
    var frame = 0;
    var allFrameCount = 0;
    var lastTime = Date.now();
    var lastFameTime = Date.now();
    var loop = function () {
        var now = Date.now();
        var fs = (now - lastFameTime);
        var fps = Math.round(1000 / fs);

        lastFameTime = now;
        // 不置 0，在动画的开头及结尾记录此值的差值算出 FPS
        allFrameCount++;
        frame++;

        if (now > 1000 + lastTime) {
            var fps = Math.round((frame * 1000) / (now - lastTime));
            if(fps<=6){
                var kd=`<span style="color:#bd0000">卡成ppt</span>`
            }
            else if(fps<=10){
                var kd=`<span style="color:red">电竞级帧率</span>`
            }
            else if(fps<=14){
                var kd=`<span style="color:yellow">难受</span>`
            }
            else if(fps<24){
                var kd=`<span style="color:orange">卡</span>`
            }
            else if(fps<=40){
                var kd=`<span style="color:green">...</span>`
            }
            else{
                var kd=`<span style="color:#425aef">正常</span>`
            }
            document.getElementById("fps").innerHTML=`FPS:${fps} ${kd}`;
            frame = 0;
            lastTime = now;
        };

        rAF(loop);
    }

    loop();
}
else{$("#fps").hide()}

//如果要使博客设置上面的设置项能生效，就把上面两行取消注释
}

//樱花
//樱花

// var stop, staticx;
// var img = new Image();
// img.src = "https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/1071/uTools_1671592154037.png";
//
// function Sakura(x, y, s, r, fn) {
//     this.x = x;
//     this.y = y;
//     this.s = s;
//     this.r = r;
//     this.fn = fn;
// }
//
// Sakura.prototype.draw = function(cxt) {
//     cxt.save();
//     var xc = 40 * this.s / 4;
//     cxt.translate(this.x, this.y);
//     cxt.rotate(this.r);
//     cxt.drawImage(img, 0, 0, 35 * this.s, 35 * this.s)
//     //樱花大小
//     cxt.restore();
// }
//
// Sakura.prototype.update = function() {
//     this.x = this.fn.x(this.x, this.y);
//     this.y = this.fn.y(this.y, this.y);
//     this.r = this.fn.r(this.r);
//     if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) {
//         this.r = getRandom('fnr');
//         if (Math.random() > 0.4) {
//             this.x = getRandom('x');
//             this.y = 0;
//             this.s = getRandom('s');
//             this.r = getRandom('r');
//         } else {
//             this.x = window.innerWidth;
//             this.y = getRandom('y');
//             this.s = getRandom('s');
//             this.r = getRandom('r');
//         }
//     }
// }
//
// SakuraList = function() {
//     this.list = [];
// }
// SakuraList.prototype.push = function(sakura) {
//     this.list.push(sakura);
// }
// SakuraList.prototype.update = function() {
//     for (var i = 0, len = this.list.length; i < len; i++) {
//         this.list[i].update();
//     }
// }
// SakuraList.prototype.draw = function(cxt) {
//     for (var i = 0, len = this.list.length; i < len; i++) {
//         this.list[i].draw(cxt);
//     }
// }
// SakuraList.prototype.get = function(i) {
//     return this.list[i];
// }
// SakuraList.prototype.size = function() {
//     return this.list.length;
// }
//
// function getRandom(option) {
//     var ret, random;
//     switch (option) {
//         case 'x':
//             ret = Math.random() * window.innerWidth;
//             break;
//         case 'y':
//             ret = Math.random() * window.innerHeight;
//             break;
//         case 's':
//             ret = Math.random();
//             break;
//         case 'r':
//             ret = Math.random() * 6;
//             break;
//         case 'fnx':
//             random = -0.5 + Math.random() * 1;
//             ret = function(x, y) {
//                 return x + 0.5 * random - 0.6;
//                 //x轴速度
//             }
//             ;
//             break;
//         case 'fny':
//             random = 0.8 + Math.random() * 0.7
//             //y轴速度
//             ret = function(x, y) {
//                 return y + random;
//             }
//             ;
//             break;
//         case 'fnr':
//             random = Math.random() * 0.03;
//             ret = function(r) {
//                 return r + random;
//             }
//             ;
//             break;
//     }
//     return ret;
// }
//
// function startSakura() {
//
//     requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
//     var canvas = document.createElement('canvas'), cxt;
//     staticx = true;
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
//     canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;');
//     canvas.setAttribute('id', 'canvas_sakura');
//     document.getElementsByTagName('body')[0].appendChild(canvas);
//     cxt = canvas.getContext('2d');
//     var sakuraList = new SakuraList();
//     for (var i = 0; i < 10; i++) {
//         //樱花数量
//         var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
//         randomX = getRandom('x');
//         randomY = getRandom('y');
//         randomR = getRandom('r');
//         randomS = getRandom('s');
//         randomFnx = getRandom('fnx');
//         randomFny = getRandom('fny');
//         randomFnR = getRandom('fnr');
//         sakura = new Sakura(randomX,randomY,randomS,randomR,{
//             x: randomFnx,
//             y: randomFny,
//             r: randomFnR
//         });
//         sakura.draw(cxt);
//         sakuraList.push(sakura);
//     }
//     stop = requestAnimationFrame(function() {
//         cxt.clearRect(0, 0, canvas.width, canvas.height);
//         sakuraList.update();
//         sakuraList.draw(cxt);
//         stop = requestAnimationFrame(arguments.callee);
//     })
// }
//
// window.onresize = function() {
//     var canvasSnow = document.getElementById('canvas_snow');
//     canvasSnow.width = window.innerWidth;
//     canvasSnow.height = window.innerHeight;
// }
//
// function stopp(e) {
//     if (!e && document.getElementById("canvas_sakura")) {
//         var child = document.getElementById("canvas_sakura");
//         child.parentNode.removeChild(child);
//         window.cancelAnimationFrame(stop);
//     } else if (e && !document.getElementById("canvas_sakura")) {
//         startSakura();
//     }
// }
// window.addEventListener("DOMContentLoaded",
//     startSakura);