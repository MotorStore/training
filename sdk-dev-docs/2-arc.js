"use strict";

/*
模块化: http://www.ruanyifeng.com/blog/2012/10/javascript_module.html

es6 module: http://es6.ruanyifeng.com/#docs/module
CMD规范: https://github.com/seajs/seajs/issues/242
AMD规范: https://github.com/amdjs/amdjs-api/wiki/AMD

requirejs: http://requirejs.org/docs/whyamd.html
*/

;(function (global, factory,namespace) {
    if(typeof exports === 'object' && typeof module !== 'undefined'){
        module.exports = factory();
    }else if(typeof define === 'function' && define.amd){
        define(factory);
    }else{
        //namespace = "g.p.c";
        global[namespace] = factory();
    }
})(window, function(){
    /*
    工具类 方法，用途
    也许会单拆一个文件
    */
    var utils = {
        subs : function(template, data) {
        },

        /*
        emojiUnicode = "u26A1";
        */
        getEmoji : function(emojiUnicode){
        },

        /*
        error = {
            "module" : "voip/emoji/voice/sdk"
            "code" : -1,
            "info" : "网络超时 timeout"
        };
        */
        errorReport : function(error){
            console.log(error);
        }
    };

    /*emoji渲染支持探测*/
    var isSupport = (function(){
    })();


    /*emoji支持 白名单*/
    var supportList = {
    };

    /*emoji 各种转化*/
    function getEmojiImage(emojiUnicode){
    }

    function getName(emojiUnicode){
    }

    function getEmojiAuto(emojiUnicode){
    }

    /*返回暴露*/
    return {
    };
}, "emoji");
