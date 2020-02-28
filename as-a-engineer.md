# 像产品经理一样思考，像程序一样执行

## 仅限于本文的约定

***产品经理***：负责产品设计、面对业务问题的人

***程序员***：精通写代码的人

***工程师***：精通写代码并且能做出好产品的人

![workspace](res/workspace.jpg)

做过软件研发及研发管理的我，更喜欢“工程师”这个叫法，也认为绝大部分软件研发从业者都是工程师。工程师，顾名思义就是工程层面的专业人士，核心是解决工程应用层面的问题。工程师是机器算法与现实世界的中间件，更多需要考虑的是用技术来解决现实世界问题。举例，工程师并不需要研发 md5 等算法，但必须掌握如何开发安全的登录功能。云服务的时代，工程师拥有了更强大的能力。

请注意：下文里都统一用工程师来称呼***软件产品***的***研发人员***。



回到软件研发本身，工程师就是要做出好产品。软件产品是由代码构成的，好产品一定来自于好代码，但要写出一份好代码，可不仅仅是只懂得写代码就可以的。任何一位工程师，都应该像产品经理一样思考产品需求问题，只能充分掌握了需求，并对于业务的变化有一定的预判，才能写出好的实现。下面用一个工作中出现过的例子来详细解释一下。



# 问题：Emoji 表情渲染差异

曾经做通讯产品研发时，各种iOS、Android、浏览器等对于 Emoji  渲染有很多差异，同一个 Emoji 表情在不同设备会有较大显示差异，有些老旧设备设置不支持，会直接出现 “**口**”，。

要解决问题，首先得搞清楚 Emoji  渲染差异到底是什么问题。



## 1. Emoji 是什么？

Emoji 是什么？Emoji 是文字，只是长得像图，从提出后，因为表现形式的丰富，越来越流程，Android、iOS、Web等平台也都逐渐进行了支持，同时 Emoji 的数量也在不断的扩充中。

根据标准协议，每个 Emoji 都有唯一的 unicode 码，但是渲染后长什么样子，都是各平台自行实现，苹果、安卓以及各浏览器都分别设计了自己的图标并内置渲染使用，如下图，都不太一样。

V11.0 Lists http://unicode.org/emoji/charts/full-emoji-list.html 

还了解到不同图标有着不同的版权声明，学习了很多 Emoji 的掌故，比如小人表情的肤色争议、裸露身体表情与伊斯兰世界禁忌等。



### 几个需要用到的结论：

1. Android、iOS 都支持原生 Emoji 渲染

2. 大部分桌面浏览器都支持原生 Emoji 渲染
3. 输入法里使用的图标只能是平台默认的
4. 移动浏览器、小程序环境都支持 原生 Emoji 渲染



## 2. 设计解决思路

**限于篇幅和专业方向仅 web 部分**

1. 使用 unicode 作为 Emoji 唯一标识
2. 对于支持 Emoji 渲染
3. 对于不支持 Emoji 的老浏览器，使用图片填充（因为 Emoji 数量太多，只处理常用的 100多个，并对使用者提供新增 Emoji 表情图片的扩展方法），**版权是务必要注意的问题**
4. 解决方案分离出来，处理成通用的 sdk，并支持 AMD、CMD协议



工作到这个环节，具体的问题可以搞清楚了，也确定有了解决思路，就我工作中的观察，这恰恰是最确实的一部分，几乎没人做或者推诿给产品经理。

但凡这个环节没有认真对外的，几乎必然进入无法交付的灾难，问题会蔓延到 QA 等其他团队。



## 3. 开发准备工作阶段
先处理好 sdk 的加载调用方法

```
"use strict"; //严格模式

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
    	global[namespace] = factory();
    }
})(window, function(){
    /*
    从这里开始写代码
    */
}, namespace);
```



## 4. 定义

通过注释把之前的思路落实到纸面，个人习惯通过注释加入必要的参考链接

定义需要实现的方法，对外提供的方法，脑补实现过程做必要的补充，用 return 写一些伪实现

根据业务逻辑粗略定义参数，不需要拘泥于具体的数据类型，只需要跑业务逻辑

```
emoji参考资料：

https://github.com/maicong/Twitter-Emoji
http://blog.getemoji.com/post/57054354336/which-browsers-support-emoji

http://caniemoji.com/
https://gist.github.com/mwunsch/4710561

http://www.fileformat.info/info/unicode/char/1f436/index.htm
*/

/* 工具类 */ 
var utils = {
    subs : function(template, data) {
    },
    getEmoji : function(emojiUnicode){
    },
    errorReport : function(error){
        console.log(error);
    }
};

var isSupport = (function(){
})();

/*emoji支持情况*/ 
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
                "u1F600":{},
            },
            size : "20px",
            type : "auto/image/emoji"
        }
        */ 
    }
}
```



## 5. 复核，完成精准定义

复核所有的函数、参数、变量的定义与命名，通过代码+注释明确落实到纸面

有实现的逻辑直接 copy 贴入，无实现的逻辑可以用伪代码实现，确保调用

配合必要的调用示例或单元测试等

到这步，需要输入一份可以运行的代码，通过运行调试**确保所有工作的正确与合理**

```
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

            var api = "http://domain?data="
            var data = JSON.stringify(error);
            console.log(api + encodeURIComponent(data));
        }
    };

    var isSupport = (function(){
        return Math.random() > 0.5 ? true : false;
    })();

    /*emoji支持情况*/ 
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
}, "Emoji");

/*
Emoji.show("u1F600","auto");
Emoji.show("u1F600");
Emoji.getName("u1F600").en;
*/
```



至此，才进入真正的代码实现，但顺着看下来，不难发现，其实大部分的工作已经做完了，剩下的就只是具体已经定义好输入输出方法的实现，不管谁来实现，都不会影响整体调用。

开发里有句话叫“依赖于接口，不依赖于实现”，在这儿，我想说，设计和流程大于实现，实现可以差一点，可以随时改进，但**整体的解决方法、调用流程是应该第一时间既定**的，定义好后就可以同步开始做文档、调用示例、测试验证等工作，同时又极大的降低了沟通成本。

------

PS：本文着重于工程师的工作流程与方法，选择性的忽略掉了组件设计与开发、相关的设计模式等技术性内容，模块化虽然专业但属于范式，只有第 5 步是专业的代码研发，前 4 步只要懂产品技术的常识就可以完成这样的设计，关键是方法论。



又关于方法论的成功案例：

1. 教会产品人员直接对着代码做颜色间距等 UI 调整
2. 教会产品人员写接口文档（有时是汉字做key）
3. 教会产品人员熟练的用 git + markdown 协作



------

*It is said the fruit of actions performed in the mode of goodness bestow pure results. Actions done in the mode of passion result in pain, while those performed in the mode of ignorance result in darkness.*
