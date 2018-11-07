(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/javascript/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '66a6024i/JFM50UEDN990JV', 'Game', __filename);
// javascript/Game.js

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
		textFrame: {
			default: null,
			type: cc.Prefab
		},
		normalButton: {
			default: null,
			type: cc.Prefab
		}
	},

	// LIFE-CYCLE CALLBACKS:

	onLoad: function onLoad() {
		this.part1 = cc.find("Canvas/switching/part1");
		this.part2 = cc.find("Canvas/switching/part2");
		this.options = cc.find("Canvas/Options");
		this.textFrameContent = cc.find("Canvas/GUI/Middle/view/content");
		this.normalButtonContent = cc.find("Canvas/GUI/Bottom/scrollview/view/content");
		this.fuck = "1-1-1-text";
		this.actionType == -1;
		this.part2.active = true;
		var anim = this.part2.getComponent(cc.Animation);
		this.actionType = 0;
		anim.on('finished', this.stopAnim, this);
		anim.play('switching2');
		this.data = null;

		var self = this;
		cc.loader.loadRes('game', function (err, res) {
			if (err) {
				return;
			}
			self.data = res;
			self.selectKey(self.fuck);
		});
	},

	selectKey: function selectKey(key) {
		var _this = this;

		cc.log("selectKey=" + key);
		var self = this;
		for (var item in this.data) {
			var json = this.data[item];
			if (json.key == key) {
				if (json.key.indexOf("text") != -1) {
					var s;
					var item2;

					(function () {
						var node1 = cc.instantiate(_this.textFrame);
						node1.parent = _this.textFrameContent;
						var rithText = node1.getChildByName("richtext").getComponent(cc.RichText);
						rithText.string = json.content;
						if (json.buttons == null) {
							node1.getChildByName("button").getChildByName("label").getComponent(cc.RichText).string = "下一个事件";
						} else {
							_this.normalButtonContent.removeAllChildren();
							for (s in json.buttons.split(",")) {
								for (item2 in _this.data) {
									if (_this.data[item2].key == json.buttons.split(",")[s]) {
										(function () {
											var node2 = cc.instantiate(_this.normalButton);
											node2.parent = _this.normalButtonContent;
											var RichText = node2.getChildByName("RichText").getComponent(cc.RichText);
											RichText.string = _this.data[item2].content;
											var v = item2;
											node2.once('mousedown', function (e) {
												node1.getChildByName("button").getChildByName("label").getComponent(cc.RichText).string = self.data[v].content;
												self.selectKey(self.data[v].next);
											});
										})();
									}
								}
							}
							node1.getChildByName("button").getChildByName("label").getComponent(cc.RichText).string = "请做出你的选择…";
						}
					})();
				}
				if (json.key.indexOf("end") != -1) {
					var node1 = cc.instantiate(this.textFrame);
					node1.parent = this.textFrameContent;
					var rithText = node1.getChildByName("richtext").getComponent(cc.RichText);
					rithText.string = json.content;
					this.normalButtonContent.removeAllChildren();
					var node2 = cc.instantiate(this.normalButton);
					node2.parent = this.normalButtonContent;
					var RichText = node2.getChildByName("RichText").getComponent(cc.RichText);
					RichText.string = "The End…";
					node2.once('mousedown', function (e) {
						self.part1.active = true;
						var anim = self.part1.getComponent(cc.Animation);
						self.actionType = 1;
						anim.on('finished', self.stopAnim, self);
						anim.play('switching1');
					});
				}
			}

			// cc.log(res[item]);//注意：此处的item不是数组项，而是数组项的索引

		}
	},

	onSelectKey: function onSelectKey(node, json) {
		node.getChildByName("button").getChildByName("label").getComponent(cc.RichText).string = json.content;
		this.selectKey(json.next);
	},

	backToIndex: function backToIndex() {
		this.part1.active = true;
		var anim = this.part1.getComponent(cc.Animation);
		this.actionType = 2;
		anim.on('finished', this.stopAnim, this);
		anim.play('switching1');
	},
	openOption: function openOption() {
		this.options.active = true;
		var anim = this.options.getComponent(cc.Animation);
		var animState = anim.play('setting');
		animState.wrapMode = cc.WrapMode.Normal;
	},
	closeOption: function closeOption() {
		var anim = this.options.getComponent(cc.Animation);
		this.actionType = 3;
		anim.on('finished', this.stopAnim, this);
		var animState = anim.play('setting');
		animState.wrapMode = cc.WrapMode.Reverse;
	},
	start: function start() {},


	stopAnim: function stopAnim() {
		if (this.actionType == 0) {
			this.part2.active = false;
		} else if (this.actionType == 1) {
			this.part1.active = false;
			cc.director.loadScene("GameOver");
		} else if (this.actionType == 2) {
			this.part1.active = false;
			cc.director.loadScene("Index");
		} else if (this.actionType == 3) {
			this.options.active = false;
			var anim = this.options.getComponent(cc.Animation);
			anim.off('finished', this.stopAnim, this);
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
        //# sourceMappingURL=Game.js.map
        