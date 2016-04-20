(function (window) {
    var document = window.document,
        docEl = document.documentElement,
        psd =640,
        dpr = 1,
        scale = 1 / dpr,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var metaEl = document.createElement('meta');
    metaEl.name = 'viewport';
    metaEl.content = 'initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale;

    if (window.navigator.userAgent.indexOf('MSIE')!=-1)
    {
       document.querySelector('head').appendChild(metaEl);
    }
    else
    {
        docEl.firstElementChild.appendChild(metaEl);
    }
   
    var recalc = function () {
        var width = docEl.clientWidth;
        if (width / dpr > psd)
        {
            width = psd * dpr;
        }
        if (window.navigator.userAgent.indexOf('MSIE')==-1)
        {
            docEl.dataset.width = width;
            docEl.dataset.percent = 100 * (width / psd);
        }
        docEl.style.fontSize = 100 * (width / psd) + 'px';
    };
    recalc()
    if (!document.addEventListener) return;
    window.addEventListener(resizeEvt, recalc, false);
})(window);
//fontSize/100=设备宽/psd图大小