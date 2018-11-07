(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/javascript/Main.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'd6abcYsE0JIxZq8OCMIWUtV', 'Main', __filename);
// javascript/Main.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

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

				onLoad: function onLoad() {
								this.actionType == -1;
								this.part1 = cc.find("Canvas/switching/part1");
								this.part2 = cc.find("Canvas/switching/part2");
								this.part2.active = true;
								var anim = this.part2.getComponent(cc.Animation);
								this.actionType = 9;
								anim.on('finished', this.stopAnim, this);
								anim.play('switching2');
				},
				start: function start() {},
				startNewGame: function startNewGame() {
								this.part1.active = true;
								var anim = this.part1.getComponent(cc.Animation);
								this.actionType = 0;
								anim.on('finished', this.stopAnim, this);
								anim.play('switching1');
				},
				producer: function producer() {
								this.part1.active = true;
								var anim = this.part1.getComponent(cc.Animation);
								this.actionType = 1;
								anim.on('finished', this.stopAnim, this);
								anim.play('switching1');
				},


				stopAnim: function stopAnim() {
								this.part1.active = false;
								if (this.actionType == 0) {
												cc.director.loadScene("MainPage");
								}
								if (this.actionType == 1) {
												cc.director.loadScene("producer");
								}
								this.actionType == -1;
				}

				// update (dt) {},
});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Main.js.map
        