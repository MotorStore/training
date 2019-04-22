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

    http://www.ruanyifeng.com/blog/2017/04/emoji.html
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
            template = template || "";
            data = data || [""];
            var re = /{{((?:(?!}}).)+)}}/g, reExp = /(^( )?(var|if|for|else|switch|case|break|{|}))(.*)?/g, code = 'var r=[];\n', cursor = 0;
            var add = function(line, js) {
                js? (code += line.match(reExp) ? line + '\n' : 'r.push(' + line + ');\n') :
                    (code += line != '' ? 'r.push("' + line.replace(/"/g, '\\"') + '");\n' : '');
                return add;
            }
            var match;
            while(match = re.exec(template)) {
                add(template.slice(cursor, match.index))(match[1], true);
                cursor = match.index + match[0].length;
            }
            add(template.substr(cursor, template.length - cursor));
            code += 'return r.join("");';

            data = isNaN(data.length) ? [data] : data;
            var html = "";
            for(var i = 0, length = data.length; i < length; i++) {
                html += new Function(code.replace(/[\r\t\n]/g, '')).apply(data[i]);
            }
            return html;    
        },

        /*
        emojiUnicode = "u1F600";
        */
        getEmoji : function(emojiUnicode){
            var emojiUnicode = "u1F600";
            var code = "0x" + emojiUnicode.replace("u","");
            var emoji = String.fromCodePoint(code);
            return emoji;
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

            var api = "http://error.rongcloud.cn?data="
            var data = JSON.stringify(error);
            console.log(api + encodeURIComponent(data));
        }
    };

    var isSupport = (function(){
        return Math.random() > 0.5 ? true : false;
    })();

    /*emoji支持 白名单*/ 
    var supportList = {
        "windows" : {
            "Chrome41+" : true,  /* Chrome 41 开始支持 Emoji 显示（全平台) */
            "Firefox50+" : true,    /*Firefox 50 开始支持 emoji 支持 */
            "Chrome" : false
        },
        "Mac" : {
            "Chrome41+" : true,
            "Firefox50+" : true, 
            "Chrome" : false
        },
        "Android" : true,   //小米有问题
        "iPhone" : true
    };    

    function getEmojiImage(emojiUnicode){
        return '<span class="emoji-1f600">[大笑]</span>';
    }

    function getEmojiName(emojiUnicode){
        return {
            "en" : "[grinning]",
            "cn" : "[大笑]"
        };
    }

    function getEmojiAuto(emojiUnicode){
        if(isSupport){
            return utils.getEmoji(emojiUnicode);
        }else{
            return getEmojiImage(emojiUnicode);
        }
    }

    return {
        utils : utils,
        getName : getEmojiName,

        // getEmojiAuto : getEmojiAuto,
        // getEmojiImage : getEmojiImage,


        /*
        type = "auto/image/emoji"
        */
        show : function(emojiUnicode,type){

            if(type && type!= "auto" && type!= "image" && type!= "emoji"){
                var error = {
                    "module" : "emoji",
                    "code" : 10001,
                    "info" : "wrong type,type only can be auto,image,emoji,empty-string"
                };
                utils.errorReport(error);
            }

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
emoji.show("u1F600","auto");
emoji.show("u1F600");
emoji.getName("u1F600").en;
*/