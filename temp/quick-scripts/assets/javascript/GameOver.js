(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/javascript/GameOver.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'ca19dT23U5LtbJF5P0Y4+Z5', 'GameOver', __filename);
// javascript/GameOver.js

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
								this.actionType = 0;
								anim.on('finished', this.stopAnim, this);
								anim.play('switching2');
				},
				start: function start() {},
				backToIndex: function backToIndex() {
								this.part1.active = true;
								var anim = this.part1.getComponent(cc.Animation);
								this.actionType = 1;
								anim.on('finished', this.stopAnim, this);
								anim.play('switching1');
				},

				stopAnim: function stopAnim() {
								if (this.actionType == 0) this.part2.active = false;
								if (this.actionType == 1) {
												this.part1.active = false;
												cc.director.loadScene("Index");
								}
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
        //# sourceMappingURL=GameOver.js.map
        