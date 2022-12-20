var now = new Date;
function createtime() {
    now.setTime(now.getTime() + 1e3);
    var e = new Date("12/01/2022 00:00:00")
        , t = Math.trunc(234e8 + (now - e) / 1e3 * 17)
        , a = (t / 1496e5).toFixed(6)
        , o = new Date("12/01/2022 00:00:00")
        , r = (now - o) / 1e3 / 60 / 60 / 24
        , i = Math.floor(r)
        , n = (now - o) / 1e3 / 60 / 60 - 24 * i
        , s = Math.floor(n);
    1 == String(s).length && (s = "0" + s);
    var l = (now - o) / 1e3 / 60 - 1440 * i - 60 * s
        , g = Math.floor(l);
    1 == String(g).length && (g = "0" + g);
    var d = (now - o) / 1e3 - 86400 * i - 3600 * s - 60 * g
        , c = Math.round(d);
    1 == String(c).length && (c = "0" + c);
    let h = "";
    h = s < 21 && s >= 7 ? `<img class='boardsign' src='https://img.shields.io/badge/DX%E7%9A%84%E5%B0%8F%E7%AA%9D-%E5%BC%80%E6%94%BE%E4%B8%AD%20%F0%9F%91%80-1ade23?logo=42&style=social' title='什么时候能够实现财富自由呀~'><br> 本站居然运行了 ${i} 天 ${s} 小时 ${g} 分 ${c} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀` : `<img class='boardsign' src='https://img.shields.io/badge/DX%E7%9A%84%E5%B0%8F%E7%AA%9D-%E5%85%B3%E9%97%A8%E5%96%BD%20%F0%9F%8E%9B-1ade23?logo=42&style=social' title='下班了就该开开心心地玩耍~'><br> 本站居然运行了 ${i} 天 ${s} 小时 ${g} 分 ${c} 秒 <i id="heartbeat" class='fas fa-heartbeat'></i> <br> 旅行者 1 号当前距离地球 ${t} 千米，约为 ${a} 个天文单位 🚀`,
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = h)
}
setInterval((()=>{
        createtime()
    }
), 1e3);
