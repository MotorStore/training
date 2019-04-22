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
    emoji参考资料：

    https://github.com/maicong/Twitter-Emoji
    http://blog.getemoji.com/post/57054354336/which-browsers-support-emoji

    http://caniemoji.com/
    https://gist.github.com/mwunsch/4710561

    http://www.fileformat.info/info/unicode/char/1f436/index.htm
    */

    /* 工具类 */ 
    var utils = {
        /*
        template = '<p>{{this.key2}}, <b>{{this.key1.key11}}</b></p>';
        data = {
            "key1": {
                "key11" : "value11"    
            },
            "key2" : "value2"
        };
        data = [data,data]
        */
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

    var isSupport = (function(){
    })();

    /*emoji支持 白名单*/ 
    var supportList = {
    };    

    function getEmojiImage(emojiUnicode){
    }

    function getEmojiName(emojiUnicode){
    }

    function getEmojiAuto(emojiUnicode){
    }

    return {
        utils : utils,
        getName : getEmojiName,

        /*
        type = "auto/image/emoji"
        */
        show : function(emojiUnicode,type){
            if(type == "emoji"){
                return utils.getEmoji(emojiUnicode);
            }else if(type == "image"){
                return getEmojiImage(emojiUnicode);                
            }else{
                return getEmojiAuto(emojiUnicode);
            }
        },
        init : function(config){
            /*
            config = {
                emojis : {
                    "u1F600":{
                        "en":"grinning",
                        "cn":"狂笑",
                        "position":"0px 0px"
                        "image" : "1f600.svg"
                    },
                },
                size : "20px",
                type : "auto/image/emoji"
            }
            */ 
        }
    }
}, "emoji");

/*
emoji.show("u26A1","auto");
emoji.show("u26A1");
emoji.getName("u26A1").en;
*/