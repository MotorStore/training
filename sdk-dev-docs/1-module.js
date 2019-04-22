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
    从这里开始写代码
    */
}, namespace);


//更高级的玩法，这部分通过编译器自动搞，后话