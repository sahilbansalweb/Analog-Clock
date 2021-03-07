setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hdeg = 30*htime + mtime/2 + stime/120;
    mdeg = 6*mtime + stime/10;
    sdeg = 6*stime;
    hour.style.transform = `rotate(${hdeg}deg)`;
    min.style.transform = `rotate(${mdeg}deg)`;
    sec.style.transform = `rotate(${sdeg}deg)`;

}, 1000);