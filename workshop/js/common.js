/**
 * Created by pengyuting on 2016/4/12 0012.
 */
$(document).ready(function () {
    $("#bgmusic")[0].play();
})
$('.music').click(function () {
    if ($(this).hasClass("play")) {
        $(this).removeClass("play");
        $("#bgmusic")[0].pause();
    }
    else {
        $(this).addClass("play");
        $("#bgmusic")[0].play();
    }
});
var is_weixin = (function() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
})();
window.onload = function(){
        var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;
        var btn = document.getElementById('openApp');
        var tip = document.getElementById('weixin-tip');
        var close = document.getElementById('close');
        if(is_weixin){
            btn.onclick = function(e){
                tip.style.height = winHeight + 'px';
                tip.style.display = 'block';
                return false;
            }
            tip.onclick = function(){
                tip.style.display = 'none';
            }
        }
    }
~(function(doc) {
    var FallingLeaves = function(num, id) {
        this.body = doc.body;
        this.support = false;
        this.container = id ? doc.getElementById('id') : this.body;
        this.num = num ? num : 5;
        this.init()
    };
    FallingLeaves.prototype = {
        init: function() {
            this.supportNot();
            if (this.support != false) {
                for (var i = 0; i < this.num; i++) {
                    this.container.appendChild(this.createLeaf())
                }
            }
        },
        supportNot: function() {
            var domPrefixes = 'Webkit Moz O ms a'.split(' ');
            for (var i = 0; i < domPrefixes.length; i++) {
                if (this.container.style[domPrefixes[i] + 'AnimationName'] !== undefined) {
                    this.support = domPrefixes[i];
                    break
                }
                if (domPrefixes[i] == "a") {
                    if (this.container.style.animationName !== undefined) {
                        this.support = domPrefixes[i];
                        break
                    }
                }
            }
        },
        randomInteger: function(low, high) {
            return low + Math.floor(Math.random() * (high - low))
        },
        randomFloat: function(low, high) {
            return low + Math.random() * (high - low)
        },
        pixelValue: function(value) {
            return value + 'px'
        },
        durationValue: function(value) {
            return value + 's'
        },
        createLeaf: function() {
            var self = this,
                leafDiv = doc.createElement('div'),
                image = doc.createElement('img'),
                spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip',
                fadeAndDropDuration = self.durationValue(self.randomFloat(5, 11)),
                spinDuration = self.durationValue(self.randomFloat(4, 8)),
                leafDelay = self.durationValue(self.randomFloat(0, 5));
            leafDiv.className = "leave";
            image.src = "http://sandbox.runjs.cn/uploads/rs/475/ao7egt7f/" + self.randomInteger(1, self.num) + '.png';
            leafDiv.style.top = self.pixelValue(30);
            leafDiv.style.right = self.pixelValue(self.randomInteger(0, 50));
            if (self.container.style[self.support + 'AnimationName'] !== undefined) {
                image.style[self.support + 'AnimationName'] = spinAnimationName;
                image.style[self.support + 'AnimationDuration'] = spinDuration;
                leafDiv.style[self.support + 'AnimationName'] = 'fade, drop';
                leafDiv.style[self.support + 'AnimationDelay'] = leafDelay + ', ' + leafDelay;
                leafDiv.style[self.support + 'AnimationDuration'] = fadeAndDropDuration + ', ' + fadeAndDropDuration
            }
            if (this.support == "a") {
                image.style.animationName = spinAnimationName;
                image.style.animationDuration = spinDuration;
                leafDiv.style.animationName = 'fade, drop';
                leafDiv.style.animationDelay = leafDelay + ', ' + leafDelay;
                leafDiv.style.animationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration
            }
            leafDiv.appendChild(image);
            return leafDiv
        }
    };
    new FallingLeaves();
})(document);