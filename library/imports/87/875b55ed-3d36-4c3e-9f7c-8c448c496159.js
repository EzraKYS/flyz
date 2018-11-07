"use strict";
cc._RF.push(module, '875b5XtPTZMPp98jESMSWFZ', 'index');
// javascript/index.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var tools = require("tools.js");

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    onLoad: function onLoad() {},
    start: function start() {
        this.abc = "2222";
        cc.log(this.abc);
    },


    //退出游戏
    exit: function exit() {
        cc.game.end();
    },
    //制作组
    producer: function producer() {
        tools.loadScene("producer");
    },
    //新游戏
    newGame: function newGame() {}
    //判断游戏是否有存档，有则询问是否要开始新的游戏并覆盖之前的存档

    // update (dt) {},
});

cc._RF.pop();