(() => {
	"use strict";

	function t() {
		var e = ["start", "emoEffectSke", "atlas/shopScreen/shop.json", "checkBitmapFontKey", "atlas/tournament/share_bg.png", "shopScreen", "atlas/spin/spin.json", "playEffectImage", "addBitmapFont", "prototype", "atlas/tournament/tour.png", "atlas/homeScreen/moregame.png", "playEffectSke", "isGameReady", "isDragonBonesReady", "homeScreenBG2", "cache", "spinAtlas", "checkImageKey", "image", "5656ZuEQfS", "dragonbones/Effect_ALL_Copy_tex.png", "hasLoaded", "getPlatform", "46xayIBY", "length", "configurable", "addJSON", "11470KTqxkB", "bigImage/share_image.jpg", "allEffectSke", "1397ZyBswR", "push", "dragonbones/Effect_Play_tex.json", "json", "atlas/lobbyScreen/lobbyScreen.png", "95tZPzQC", "21292gnWXIg", "img", "path", "32LUYGVq", "bigImage/invite_popup_bg.png", "moregame", "invite_popup_bg", "bitmapFont", "enumerable", "atlas/lobbyScreen/lobbyScreen.json", "playEffectAtlas", "key", "10842768UIRRhc", "load", "atlas", "emoEffectImage", "allEffectImage", "defineProperty", "dragonbones/Effect_ALL_Copy_ske.json", "allEffectAtlas", "emoEffectAtlas", "dragonbones/Icon_All_backup_tex.json", "710949vOeBwN", "dragonbones/Icon_All_backup_ske.json", "dragonbones/Icon_All_backup_tex.png", "type", "atlas/spin/spin.png", "Cannot call a class as a function", "shareImage", "37197qoDZxv", "atlas/tournament/tour.json", "427nxMjWF", "atlas/homeScreen/moregame.json", "share_bg", "tour", "dragonbones/Effect_ALL_Copy_tex.json", "lobbyScreen", "addAtlas", "checkJSONKey", "13542DvWyeU", "atlas/shopScreen/shop.png"];
		return (t = function() {
			return e
		})()
	}

	function e(n, r) {
		var i = t();
		return (e = function(t, e) {
			return i[t -= 261]
		})(n, r)
	}

	function n(t, n) {
		for (var r = e, i = 0; i < n.length; i++) {
			var a = n[i];
			a[r(311)] = a.enumerable || !1, a[r(292)] = !0, "value" in a && (a.writable = !0), Object[r(320)](t, a.key, a)
		}
	}! function(t, n) {
		for (var r = e, i = t();;) try {
			if (135478 == -parseInt(r(290)) / 1 * (parseInt(r(286)) / 2) + -parseInt(r(325)) / 3 + -parseInt(r(303)) / 4 * (parseInt(r(302)) / 5) + -parseInt(r(264)) / 6 * (parseInt(r(334)) / 7) + parseInt(r(306)) / 8 * (-parseInt(r(332)) / 9) + -parseInt(r(294)) / 10 * (parseInt(r(297)) / 11) + parseInt(r(315)) / 12) break;
			i.push(i.shift())
		} catch (t) {
			i.push(i.shift())
		}
	}(t);
	var r = 0,
		i = [];
	const a = function() {
		var t, a, o, s = e;

		function c() {
			! function(t, n) {
				if (!(t instanceof n)) throw new TypeError(e(330))
			}(this, c)
		}
		return t = c, null, a = [{
			key: "addImage",
			value: function(t, n) {
				i[e(298)]({
					type: 1,
					key: t,
					path: n
				})
			}
		}, {
			key: s(293),
			value: function(t, e) {
				i[s(298)]({
					type: 2,
					key: t,
					path: e
				})
			}
		}, {
			key: s(262),
			value: function(t, e, n) {
				i[s(298)]({
					type: 3,
					key: t,
					img: e,
					json: n
				})
			}
		}, {
			key: s(274),
			value: function(t, e, n) {
				i[s(298)]({
					type: 4,
					key: t,
					img: e,
					xmlPath: n
				})
			}
		}, {
			key: "preload",
			value: function(t) {
				var e = s;
				if (r = 0, c.image(e(281), "bigImage/homeScreenBG2.jpg"), c[e(285)](e(331), e(295)), c[e(285)](e(309), e(307)), c[e(317)](e(261), e(301), e(312)), c[e(317)](e(283), e(329), e(272)), c[e(317)](e(271), e(265), e(268)), c[e(317)](e(337), e(276), e(333)), c.image(e(336), e(270)), "IOS" != FBInstant[e(289)]() && c[e(317)](e(308), e(277), e(335)), i[e(291)] > 0)
					for (var n = 0; n < i[e(291)]; n++) {
						var a = i[n];
						1 == a.type ? c[e(285)](a[e(314)], a.path) : 2 == a[e(328)] ? c[e(300)](a[e(314)], a[e(305)]) : 3 == a[e(328)] ? c[e(317)](a[e(314)], a[e(304)], a[e(300)]) : 4 == a.type && c[e(310)](a[e(314)], a[e(304)], a.xmlPath)
					}
				c.json(e(322), e(338)), c[e(300)](e(296), e(321)), c[e(285)](e(319), e(287)), c[e(300)](e(323), e(324)), c[e(300)](e(267), e(326)), c[e(285)]("emoEffectImage", e(327)), c[e(300)](e(313), e(299)), c[e(300)](e(278), "dragonbones/Effect_Play_ske.json"), c[e(285)](e(273), "dragonbones/Effect_Play_tex.png"), r > 0 && (!0 === t ? game[e(316)][e(288)] && game.load[e(266)]() : game[e(316)][e(266)]())
			}
		}, {
			key: s(285),
			value: function(t, e) {
				var n = s;
				!game[n(282)][n(284)](t) && (game[n(316)][n(285)](t, assetUrl + "/" + e), r++)
			}
		}, {
			key: "atlas",
			value: function(t, e, n) {
				var i = s;
				!game[i(282)].checkImageKey(t) && (game[i(316)][i(317)](t, assetUrl + "/" + e, assetUrl + "/" + n), r++)
			}
		}, {
			key: s(300),
			value: function(t, e) {
				var n = s;
				!game[n(282)][n(263)](t) && (game[n(316)][n(300)](t, assetUrl + "/" + e), r++)
			}
		}, {
			key: s(310),
			value: function(t, e, n) {
				var i = s;
				!game[i(282)].checkBitmapFontKey(t) && (game[i(316)].bitmapFont(t, e, n), r++)
			}
		}, {
			key: s(279),
			value: function() {
				for (var t = s, e = 0; e < i[t(291)]; e++) {
					var n = i[e];
					if (1 == n.type || 3 == n[t(328)]) {
						if (!game[t(282)].checkImageKey(n[t(314)])) return !1
					} else if (2 == n[t(328)]) {
						if (!game[t(282)][t(263)](n.key)) return !1
					} else if (4 == n[t(328)] && !game.cache[t(269)](n[t(314)])) return !1
				}
				return !!c.isDragonBonesReady()
			}
		}, {
			key: s(280),
			value: function() {
				var t = s;
				return !!(game[t(282)][t(284)]("allEffectImage") && game[t(282)][t(284)](t(318)) && game[t(282)].checkImageKey("playEffectImage") && game[t(282)][t(263)]("allEffectAtlas") && game[t(282)][t(263)]("allEffectSke") && game.cache[t(263)](t(323)) && game[t(282)][t(263)]("emoEffectSke") && game[t(282)][t(263)](t(313)) && game[t(282)][t(263)](t(278)))
			}
		}], o = e, a && n(t, a), Object[o(320)](t, o(275), {
			writable: !1
		}), c
	}();

	function o() {
		var t = ["button", "3641PuhVwH", "shortenLargeNumber", "18100xdSMDR", "add", "appendChild", "132UESgco", "DIV", "27JzBbPF", "toFixed", "enumerable", "convertExpToPercent", "createTextNode", "3573650kesuiz", "2455452KdCAGF", "formatTimeV2", "length", "floor", "MINS", "classList", "HOURS", "formatTimeV3", "1118248zFhCRE", "text", "placeholder", "getTimezoneOffset", "4xnkvPE", "157690pymxhj", "INPUT", "writable", "lang", "createDOMText", "prototype", "createDOMButton", "createDOMItalicText", "writeToLocalStorage", "configurable", "getItem", "formatCoinWithCommas", "39kgnJtY", "formatName", "round", "Cannot call a class as a function", "setAttribute", "maxLength", "removeDOMElement", "21688MJUDhe", "addDOMClass", "DAYS", "314062pOvBWn", "1521guPeig", "abs", "createElement", "getElementById", "pow", "type"];
		return (o = function() {
			return t
		})()
	}

	function s(t, e) {
		var n = o();
		return (s = function(t, e) {
			return n[t -= 286]
		})(t, e)
	}

	function c(t, e) {
		for (var n = s, r = 0; r < e[n(307)]; r++) {
			var i = e[r];
			i[n(301)] = i[n(301)] || !1, i[n(327)] = !0, "value" in i && (i[n(320)] = !0), Object.defineProperty(t, i.key, i)
		}
	}! function(t, e) {
		for (var n = s, r = t();;) try {
			if (618493 == -parseInt(n(313)) / 1 + -parseInt(n(318)) / 2 * (-parseInt(n(299)) / 3) + parseInt(n(317)) / 4 * (-parseInt(n(304)) / 5) + -parseInt(n(297)) / 6 * (-parseInt(n(340)) / 7) + parseInt(n(337)) / 8 * (-parseInt(n(341)) / 9) + parseInt(n(294)) / 10 * (parseInt(n(292)) / 11) + -parseInt(n(305)) / 12 * (-parseInt(n(330)) / 13)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(o);
	const u = function() {
		var t, e, n, r = s;

		function i() {
			! function(t, e) {
				if (!(t instanceof e)) throw new TypeError(s(333))
			}(this, i)
		}
		return t = i, null, n = s, (e = [{
			key: r(331),
			value: function(t, e, n) {
				if (t[r(307)] > e) {
					var i = t.substring(0, e);
					return !1 === n ? i : i.trim()
				}
				return t
			}
		}, {
			key: r(293),
			value: function(t, e) {
				for (var n, i = r, a = ["K", "M"], o = a[i(307)] - 1; o >= 0; o--)
					if (t <= -(n = Math[i(289)](1e3, o + 1)) || t >= n) return +(t / n)[i(300)](e) + a[o];
				return t
			}
		}, {
			key: r(329),
			value: function(t) {
				return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
			}
		}, {
			key: r(302),
			value: function(t, e) {
				t || (t = 0), e || (e = 1);
				var n = 10 * (e * (e + 1) * (e + 2) + 5 * e);
				return 1 === e && (n = 0), e++, parseInt((t - n) / (10 * (e * (e + 1) * (e + 2) + 5 * e) - n) * 100)
			}
		}, {
			key: r(316),
			value: function() {
				var t = r,
					e = (new Date)[t(316)](),
					n = e < 0 ? "+" : "-",
					i = (e = Math[t(286)](e)) / 60 | 0;
				return "+" == n ? i : -i
			}
		}, {
			key: r(322),
			value: function(t, e, n) {
				var i = r,
					a = document[i(287)](i(319));
				return a[i(334)](i(290), i(314)), a[i(334)]("id", t), a[i(334)](i(315), e), a[i(334)](i(335), n), a
			}
		}, {
			key: r(324),
			value: function(t, e) {
				var n = r,
					i = document.createElement("BUTTON");
				return i.setAttribute(n(290), n(291)), i[n(334)]("id", t), e && i[n(296)](document[n(303)](e)), i
			}
		}, {
			key: "createDOMDiv",
			value: function(t, e) {
				var n = r,
					i = document[n(287)](n(298));
				return t && i[n(334)]("id", t), e && i[n(310)].add(e), i
			}
		}, {
			key: r(325),
			value: function(t) {
				var e = document[r(287)]("I");
				return e.appendChild(document.createTextNode(t)), e
			}
		}, {
			key: r(336),
			value: function(t) {
				var e = document[r(288)](t);
				e && e.parentNode.removeChild(e)
			}
		}, {
			key: r(338),
			value: function(t, e) {
				var n = r;
				document.getElementById(t)[n(310)][n(295)](e)
			}
		}, {
			key: r(306),
			value: function(t) {
				var e = r,
					n = Math[e(308)](t / 864e5),
					i = Math[e(308)](t % 864e5 / 36e5),
					a = Math[e(308)](t % 36e5 / 6e4) + "",
					o = Math.floor(t % 6e4 / 1e3) + "";
				return 1 == a[e(307)] && (a = "0" + a), 1 == o[e(307)] && (o = "0" + o), 0 == n ? i > 0 ? i + ":" + a + ":" + o : a + ":" + o : n + "d " + i + ":" + a + ":" + o
			}
		}, {
			key: r(312),
			value: function(t) {
				var e, n = r,
					i = 864e5,
					a = 36e5,
					o = Math[n(308)](t / i),
					s = Math[n(308)]((t - o * i) / a),
					c = Math[n(332)]((t - o * i - s * a) / 6e4);
				return 60 === c && (s++, c = 0), 24 === s && (o++, s = 0), o > 0 ? (e = o + " " + CyberInstance.lang[n(339)], s > 0 ? e += " " + s + " " + CyberInstance[n(321)][n(311)] : c > 0 && (e += " " + c + " " + CyberInstance[n(321)][n(309)])) : s > 0 ? (e = s + " " + CyberInstance[n(321)][n(311)], c > 0 && (e += " " + c + " " + CyberInstance.lang[n(309)])) : e = c + " " + CyberInstance[n(321)][n(309)], e
			}
		}, {
			key: r(326),
			value: function(t, e) {
				try {
					return localStorage.setItem(t, e), !0
				} catch (t) {
					return !1
				}
			}
		}, {
			key: "getFromLocalStorage",
			value: function(t) {
				var e = r;
				try {
					return localStorage[e(328)](t)
				} catch (t) {
					return
				}
			}
		}]) && c(t, e), Object.defineProperty(t, n(323), {
			writable: !1
		}), i
	}();

	function h(t, e) {
		var n = l();
		return (h = function(t, e) {
			return n[t -= 352]
		})(t, e)
	}

	function f(t, e) {
		for (var n = h, r = 0; r < e[n(357)]; r++) {
			var i = e[r];
			i.enumerable = i[n(358)] || !1, i.configurable = !0, n(354) in i && (i.writable = !0), Object[n(368)](t, i[n(362)], i)
		}
	}

	function l() {
		var t = ["defineProperty", "3803976GSHvVz", "43159050GURHgC", "387aMbFkj", "14ZJDSoC", "6zbNsIY", "value", "prototype", "2HzQGgM", "length", "enumerable", "221670uEGcEd", "1012869gAsajZ", "182988gBmxHA", "key", "2735248kJPCYy", "apply", "4505990XdbXqF", "dispatchEvent", "toString"];
		return (l = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = h, r = t();;) try {
			if (589e3 == -parseInt(n(361)) / 1 + -parseInt(n(356)) / 2 * (-parseInt(n(360)) / 3) + -parseInt(n(369)) / 4 + parseInt(n(365)) / 5 * (-parseInt(n(353)) / 6) + parseInt(n(352)) / 7 * (-parseInt(n(363)) / 8) + -parseInt(n(371)) / 9 * (parseInt(n(359)) / 10) + parseInt(n(370)) / 11) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(l);
	var p = function() {
		var t, e, n, r = h;

		function i() {
			! function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, i)
		}
		return t = i, null, e = [{
			key: r(366),
			value: function(t) {
				var e = r;

				function n(e) {
					var n = h;
					return t[n(364)](this, arguments)
				}
				return n[e(367)] = function() {
					return t[e(367)]()
				}, n
			}((function(t) {
				var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
				if (e) {
					var n = new CustomEvent(t, {
						detail: {
							value: e
						}
					});
					dispatchEvent(n)
				} else dispatchEvent(new CustomEvent(t))
			}))
		}], n = h, e && f(t, e), Object[n(368)](t, "prototype", {
			writable: !1
		}), i
	}();

	function y() {
		var t = ["7119MQIVLF", "inputEnabled", "length", "disconnect", "overlay", "3390488vQxUqZ", "value", "centerX", "Cannot call a class as a function", "game", "defineProperty", "preloadBg", "890FvjqgT", "6SvqMzC", "angle", "10426995cSoedu", "prototype", "3yAQRFG", "remove", "destroy", "close", "1109204VHezzr", "enumerable", "width", "closeTimer", "rotatorTimer", "writable", "274329vRhNkS", "centerY", "time", "configurable", "height", "preloadIcon", "sprite", "5315560ekBHec", "key", "log", "7880xZeQPa", "add", "1662019JtYobv", "events", "anchor"];
		return (y = function() {
			return t
		})()
	}

	function d(t, e) {
		for (var n = v, r = 0; r < e[n(469)]; r++) {
			var i = e[r];
			i[n(447)] = i[n(447)] || !1, i[n(455)] = !0, n(473) in i && (i[n(451)] = !0), Object[n(477)](t, i[n(460)], i)
		}
	}

	function v(t, e) {
		var n = y();
		return (v = function(t, e) {
			return n[t -= 447]
		})(t, e)
	}! function(t, e) {
		for (var n = v, r = t();;) try {
			if (862588 == -parseInt(n(464)) / 1 + -parseInt(n(488)) / 2 * (-parseInt(n(484)) / 3) + parseInt(n(472)) / 4 + -parseInt(n(459)) / 5 * (-parseInt(n(480)) / 6) + -parseInt(n(467)) / 7 * (parseInt(n(462)) / 8) + -parseInt(n(482)) / 9 + parseInt(n(479)) / 10 * (parseInt(n(452)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(y);
	const b = function() {
		var t, e, n, r = v;

		function i(t, e) {
			var n = v,
				r = this;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(v(475))
			})(this, i), this[n(476)] = t, e && e[n(449)] && (this.closeTimer = this[n(476)][n(454)][n(465)][n(463)](e.closeTimer, (function() {
				return r[n(487)]()
			}))), e && e.disconnectTime && (this[n(449)] = this[n(476)][n(454)].events[n(463)](e.disconnectTime, (function() {
				return r[n(470)]()
			})))
		}
		return t = i, n = v, (e = [{
			key: r(470),
			value: function() {
				var t = r;
				try {
					CyberInstance.connector[t(470)]()
				} catch (e) {
					console[t(461)](e)
				}
			}
		}, {
			key: "open",
			value: function() {
				var t = r,
					e = this;
				this[t(471)] = this[t(476)][t(463)][t(458)](0, 0, CyberGlobalData.overlayTexture), this[t(471)][t(448)] = this[t(476)][t(448)], this[t(471)][t(456)] = this[t(476)][t(456)], this[t(471)].alpha = .5, this.overlay[t(468)] = !0, this[t(457)] = this[t(476)][t(463)].image(this[t(476)].world[t(474)], this.game.world[t(453)], t(478)), this[t(457)][t(466)].setTo(.5), this[t(450)] = this[t(476)][t(454)].events.loop(30, (function() {
					var n = t;
					return e.preloadIcon[n(481)] += 10
				}))
			}
		}, {
			key: "close",
			value: function() {
				var t = r;
				this.closeTimer && (this[t(476)][t(454)][t(465)][t(485)](this[t(449)]), this[t(449)] = null), this[t(450)] && (this[t(476)][t(454)][t(465)][t(485)](this.rotatorTimer), this[t(450)] = null), this[t(471)] && (this[t(471)][t(486)](), this.overlay = null), this.preloadIcon && (this[t(457)][t(486)](), this.preloadIcon = null)
			}
		}]) && d(t[n(483)], e), Object[n(477)](t, n(483), {
			writable: !1
		}), i
	}();
	var g = S;

	function m(t) {
		var e = S;
		return (m = e(541) == typeof Symbol && "symbol" == typeof Symbol[e(546)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(541) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(545)] ? n(501) : typeof t
		})(t)
	}

	function I(t, e) {
		for (var n = S, r = 0; r < e[n(538)]; r++) {
			var i = e[r];
			i.enumerable = i[n(493)] || !1, i[n(549)] = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i[n(543)], i)
		}
	}

	function w(t, e) {
		var n = S;
		return (w = Object[n(519)] ? Object[n(519)][n(530)]() : function(t, e) {
			return t[n(523)] = e, t
		})(t, e)
	}

	function S(t, e) {
		var n = T();
		return (S = function(t, e) {
			return n[t -= 492]
		})(t, e)
	}

	function k(t, e) {
		var n = S;
		if (e && (m(e) === n(495) || typeof e === n(541))) return e;
		if (void 0 !== e) throw new TypeError(n(561));
		return O(t)
	}

	function O(t) {
		if (void 0 === t) throw new ReferenceError(S(510));
		return t
	}

	function C(t) {
		var e = S;
		return (C = Object.setPrototypeOf ? Object[e(532)][e(530)]() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(532)](t)
		})(t)
	}

	function T() {
		var t = ["playButtonSound", "events", "addBackground", "sound", "Super expression must either be null or a function", "sham", "834495dLvRbu", "Derived constructors may only return object or undefined", "valueOf", "onInputDown", "onDestroy", "time", "enumerable", "Out", "object", "add", "loadingPopup", "width", "24981790mQHkLw", "construct", "symbol", "call", "game", "close", "destroy", "328MucSzQ", "open", "addOnce", "Back", "this hasn't been initialised - super() hasn't been called", "removeAssetTask", "closeButton", "2251998DNONZb", "Group", "checkAssetTask", "undefined", "alpha", "button_close", "setPrototypeOf", "createView", "constructor", "isAssetReady", "__proto__", "overlay", "closeLoadingPopup", "394583bnxLWx", "openLoadingPopup", "apply", "options", "bind", "inputEnabled", "getPrototypeOf", "2tVJvYG", "background", "overlayTexture", "tween", "275049gMFJva", "length", "onAssetReady", "20JHPPdo", "function", "create", "key", "Cannot call a class as a function", "prototype", "iterator", "autoDestroyTask", "857830ojmzPR", "configurable", "remove", "addCloseButton", "143356GctCNb", "defineProperty"];
		return (T = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = S, r = t();;) try {
			if (684241 == -parseInt(n(533)) / 1 * (-parseInt(n(552)) / 2) + -parseInt(n(560)) / 3 + -parseInt(n(540)) / 4 * (parseInt(n(548)) / 5) + parseInt(n(513)) / 6 + parseInt(n(526)) / 7 + parseInt(n(506)) / 8 * (-parseInt(n(537)) / 9) + parseInt(n(499)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(T);
	const P = function(t) {
		var e = S;
		! function(t, e) {
			var n = S;
			if (typeof e !== n(541) && null !== e) throw new TypeError(n(558));
			t[n(545)] = Object[n(542)](e && e[n(545)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(553)](t, "prototype", {
				writable: !1
			}), e && w(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = S;
			if (typeof Reflect === t(516) || !Reflect.construct) return !1;
			if (Reflect[t(500)][t(559)]) return !1;
			if (typeof Proxy === t(541)) return !0;
			try {
				return Boolean.prototype[t(562)][t(502)](Reflect[t(500)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = S,
				n = C(a);
			if (o) {
				var r = C(this)[e(521)];
				t = Reflect[e(500)](n, arguments, r)
			} else t = n[e(528)](this, arguments);
			return k(this, t)
		});

		function c(t, e) {
			var n, r = S;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(S(544))
			}(this, c), (n = s[r(502)](this, t))[r(529)] = e, n[r(515)] = null, n[r(547)] = null, n[r(522)]() ? n[r(520)]() : (n[r(527)](), n[r(515)] = n[r(503)].time[r(555)].loop(150, (function() {
				var t = r;
				n[t(522)]() && n[t(539)]()
			}), O(n)), n.autoDestroyTask = n[r(503)][r(492)].events.add(15e3, (function() {
				var t = r;
				n[t(511)](), n[t(525)](), n.close()
			})), n[r(564)][r(508)]((function() {
				var t = r;
				n[t(525)](), n[t(511)](), n.removeAutoDestroyTask()
			}))), n
		}
		return n = c, i = S, (r = [{
			key: e(539),
			value: function() {
				var t = e;
				this[t(511)](), this.removeAutoDestroyTask(), this[t(525)](), this[t(520)]()
			}
		}, {
			key: e(511),
			value: function() {
				var t = e;
				this[t(515)] && (this[t(503)].time[t(555)][t(550)](this[t(515)]), this[t(515)] = null)
			}
		}, {
			key: "removeAutoDestroyTask",
			value: function() {
				var t = e;
				this[t(547)] && (this[t(503)].time[t(555)][t(550)](this[t(547)]), this.autoDestroyTask = null)
			}
		}, {
			key: e(520),
			value: function() {}
		}, {
			key: e(522),
			value: function() {
				return !0
			}
		}, {
			key: "createTransition",
			value: function() {
				var t = e;
				if (this[t(534)]) {
					var n = this[t(534)].y;
					this[t(534)].y = this.background.y - 100, this[t(503)][t(496)][t(536)](this[t(534)]).to({
						y: n
					}, 500, Phaser.Easing[t(509)][t(494)], !0)
				}
			}
		}, {
			key: e(556),
			value: function(t, n) {
				var r = e;
				this[r(534)] = this[r(542)](0, 0, t, n), this[r(534)].x = this[r(503)].width / 2 - this[r(534)][r(498)] / 2, this[r(534)].y = this.game.height / 2 - this[r(534)].height / 2
			}
		}, {
			key: "addOverlay",
			value: function(t) {
				var n = e;
				this[n(524)] = this[n(542)](0, 0, CyberGlobalData[n(535)]), this[n(524)][n(517)] = void 0 !== t ? t : .5, this.overlay[n(531)] = !0
			}
		}, {
			key: e(551),
			value: function() {
				var t = e,
					n = this,
					r = this[t(542)](0, 0, "homeScreen", t(518));
				r.x = this[t(534)].x + this[t(534)][t(498)] - r[t(498)] / 2 - 10, r.y = this[t(534)].y - 12, r[t(531)] = !0, r[t(555)][t(563)][t(508)]((function() {
					var e = t;
					CyberInstance[e(557)][e(554)](), n[e(504)]()
				}), this), this[t(512)] = r
			}
		}, {
			key: "openLoadingPopup",
			value: function(t) {
				var n = e;
				this[n(497)] = new b(game, t), this[n(497)][n(507)]()
			}
		}, {
			key: e(525),
			value: function() {
				var t = e;
				this[t(497)] && (this[t(497)][t(504)](), this[t(497)] = null)
			}
		}, {
			key: "close",
			value: function() {
				this[e(505)](!0)
			}
		}]) && I(n[i(545)], r), Object[i(553)](n, i(545), {
			writable: !1
		}), c
	}(Phaser[g(514)]);

	function x(t, e) {
		var n = R();
		return (x = function(t, e) {
			return n[t -= 155]
		})(t, e)
	}! function(t, e) {
		for (var n = x, r = t();;) try {
			if (667265 == -parseInt(n(161)) / 1 * (-parseInt(n(162)) / 2) + -parseInt(n(166)) / 3 * (parseInt(n(157)) / 4) + -parseInt(n(158)) / 5 * (parseInt(n(164)) / 6) + -parseInt(n(163)) / 7 + parseInt(n(156)) / 8 * (parseInt(n(155)) / 9) + parseInt(n(160)) / 10 * (-parseInt(n(159)) / 11) + parseInt(n(165)) / 12) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(R);
	var _ = Object.freeze({
		GIFT_TIME: 10800,
		MIN_BET: 5e3
	});

	function R() {
		var t = ["196yBDrMK", "215lCgCqR", "583IwqzrD", "211490qGNGVT", "1AslqNr", "68314mpwrDE", "8277787PUEURU", "133668IikBxp", "48649356DHdqOX", "53022rrHyBO", "9VLhJsw", "5651304vdKcwq"];
		return (R = function() {
			return t
		})()
	}

	function j(t) {
		var e = A;
		return (j = "function" == typeof Symbol && e(438) == typeof Symbol[e(449)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(486)] === Symbol && t !== Symbol.prototype ? n(438) : typeof t
		})(t)
	}

	function E() {
		var t = ["#ffffff", "lang", "6462738LqUfxq", "playButtonSound", "buttonText", "prototype", "addOverlay", "setPrototypeOf", "MIN_BET", "anchor", "Super expression must either be null or a function", "valueOf", "getCurrentState", "game", "button_green_197x64", "addCloseButton", "setText", "defineProperty", "28uEuyuS", "bind", "key", "#ebdac0", "addBackground", "addChild", "events", "__proto__", "inputEnabled", "createTransition", "add", "sham", "context", "setTextBounds", "sound", "disconnect", "getPrototypeOf", "showNotEnoughMoneyToPlay", "symbol", "addButton", "onAction", "apply", "replace", "call", "onInputDown", "sprite", "width", "Cannot call a class as a function", "button_close", "iterator", "enumerable", "state", "openIAP", "setTo", "#f59eac", "background", "1435490uezCii", "length", "construct", "NOT_ENOUGH_CHIP_TO_PLAY", "openCreateGamePopup", "actionId", "ADD_CHIP", "shortenLargeNumber", "homeScreen", "closeButton", "78027zhhdym", "hideTransition", "center", "bold", "5dscOWN", "363224nqlHNp", "279336kxWfje", "undefined", "create", "function", "hideCloseButton", "make", "normal", "connector", "addTitle", "middle", "45010kRRqMd", "miniumMoneyCondition", "text", "log", "constructor", "addOnce", "height", "toUpperCase", "close", "743335vXYYzt", "callback", "this hasn't been initialised - super() hasn't been called", "writable"];
		return (E = function() {
			return t
		})()
	}

	function B(t, e) {
		for (var n = A, r = 0; r < e[n(457)]; r++) {
			var i = e[r];
			i[n(450)] = i[n(450)] || !1, i.configurable = !0, "value" in i && (i[n(494)] = !0), Object[n(512)](t, i[n(515)], i)
		}
	}

	function A(t, e) {
		var n = E();
		return (A = function(t, e) {
			return n[t -= 430]
		})(t, e)
	}

	function F(t, e) {
		var n = A;
		return (F = Object[n(502)] ? Object[n(502)][n(514)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function D(t, e) {
		var n = A;
		if (e && ("object" === j(e) || typeof e === n(475))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError(A(493));
			return t
		}(t)
	}

	function N(t) {
		var e = A;
		return (N = Object.setPrototypeOf ? Object[e(436)][e(514)]() : function(t) {
			var n = e;
			return t[n(520)] || Object[n(436)](t)
		})(t)
	}! function(t, e) {
		for (var n = A, r = t();;) try {
			if (161716 == -parseInt(n(470)) / 1 * (parseInt(n(482)) / 2) + -parseInt(n(466)) / 3 * (parseInt(n(513)) / 4) + -parseInt(n(491)) / 5 + parseInt(n(472)) / 6 + -parseInt(n(456)) / 7 + parseInt(n(471)) / 8 + parseInt(n(497)) / 9) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(E);
	const G = function(t) {
		var e = A;
		! function(t, e) {
			var n = A;
			if (typeof e !== n(475) && null !== e) throw new TypeError(n(505));
			t[n(500)] = Object[n(474)](e && e[n(500)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(512)](t, n(500), {
				writable: !1
			}), e && F(t, e)
		}(h, t);
		var n, r, i, a, o, s, c = (o = h, s = function() {
			var t = A;
			if (typeof Reflect === t(473) || !Reflect[t(458)]) return !1;
			if (Reflect[t(458)][t(431)]) return !1;
			if (typeof Proxy === t(475)) return !0;
			try {
				return Boolean[t(500)][t(506)][t(443)](Reflect[t(458)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = A,
				n = N(o);
			if (s) {
				var r = N(this)[e(486)];
				t = Reflect.construct(n, arguments, r)
			} else t = n[e(441)](this, arguments);
			return D(this, t)
		});

		function h(t, e) {
			var n, r = A;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(A(447))
			}(this, h), (n = c[r(443)](this, t, e))[r(501)](), n[r(517)](r(464), "bg_popup_medium_484x292"), n.addTitle(), n.addContent(e[r(484)]), n[r(439)](e), e[r(476)] || n[r(510)](), !0 !== e[r(467)] && n[r(522)](), n
		}
		return n = h, r = [{
			key: e(439),
			value: function(t) {
				var n = e,
					r = this[n(508)][n(477)][n(445)](0, 0, n(464), n(509));
				r.x = this[n(455)][n(446)] / 2 - r[n(446)] / 2, r.y = this[n(455)].height - r[n(488)] - 30, this[n(455)][n(518)](r);
				var i = this[n(508)][n(430)][n(484)](r[n(446)] / 2, r[n(488)] / 2, "", {
					font: APP_FONT,
					fontSize: 24,
					fill: n(495),
					fontWeight: n(478)
				});
				i.anchor[n(453)](.5), r[n(518)](i), i[n(511)](t[n(499)]), t[n(461)] && (r.actionId = t[n(461)]), r[n(521)] = !0, t[n(492)] && r[n(519)][n(444)][n(487)](t[n(492)], t[n(432)]), r[n(519)][n(444)][n(487)](this[n(440)], this)
			}
		}, {
			key: e(440),
			value: function(t) {
				var n = e;
				CyberInstance.sound[n(498)]();
				try {
					1 === t[n(461)] ? this[n(508)].state[n(507)]()[n(452)]() : 2 === t[n(461)] ? this[n(508)][n(451)][n(507)]()[n(460)]() : 3 === t[n(461)] && CyberInstance[n(479)][n(435)]()
				} catch (t) {
					console[n(485)]("Popup.onAction: ", t)
				}
				this[n(490)]()
			}
		}, {
			key: "addContent",
			value: function(t) {
				var n = e,
					r = this.game[n(430)][n(484)](30, 70, "", {
						font: APP_FONT,
						fontSize: 24,
						fill: n(454),
						fontWeight: n(478),
						wordWrap: !0,
						wordWrapWidth: this[n(455)].width - 60,
						align: n(468),
						boundsAlignH: n(468),
						boundsAlignV: n(481)
					});
				r[n(433)](0, 0, this[n(455)][n(446)] - 60, 100), this.background[n(518)](r), r[n(511)](t)
			}
		}, {
			key: e(480),
			value: function() {
				var t = e,
					n = this[t(508)].add[t(484)](this[t(455)].width / 2, 15, "", {
						font: APP_FONT,
						fontSize: 30,
						fill: t(516),
						fontWeight: t(469)
					});
				n[t(504)][t(453)](.5, 0), this[t(455)][t(518)](n), n.setText(CyberInstance[t(496)].THONG_BAO[t(489)]())
			}
		}, {
			key: "addCloseButton",
			value: function() {
				var t = e,
					n = this,
					r = this[t(508)][t(477)][t(445)](0, 0, t(464), t(448));
				r.x = this[t(455)][t(446)] - r.width / 2 - 10, r.y = -12, r[t(521)] = !0, r[t(519)].onInputDown[t(487)]((function() {
					var e = t;
					CyberInstance[e(434)][e(498)](), n[e(490)]()
				}), this), this[t(465)] = r, this[t(455)][t(518)](this[t(465)])
			}
		}], i = [{
			key: e(437),
			value: function() {
				var t = e,
					n = CyberInstance[t(496)][t(459)][t(442)]("%s", u[t(463)](CyberInstance[t(483)] * _[t(503)]));
				new h(game, {
					actionId: 1,
					text: n,
					buttonText: CyberInstance[t(496)][t(462)]
				})
			}
		}, {
			key: "showNotEnoughMoneyToJoin",
			value: function(t) {
				var n = e,
					r = CyberInstance[n(496)].NOT_ENOUGH_CHIP_TO_JOIN[n(442)]("%s", u[n(463)](CyberInstance[n(483)] * t));
				new h(game, {
					actionId: 1,
					text: r,
					buttonText: CyberInstance[n(496)][n(462)]
				})
			}
		}], a = A, r && B(n.prototype, r), i && B(n, i), Object[a(512)](n, a(500), {
			writable: !1
		}), h
	}(P);

	function L() {
		var t = ["defineProperty", "cmd", "Mã code đã hết hiệu lực vì vượt quá số lượt sử dụng", "closeOverlay", "playButtonSound", "778990jykiHb", "codeInput", "errorCode", "NHAP", "initialize", "open", "body", "30136BEQyNJ", "lang", "6Zvsyta", "toUpperCase", "EXTENSION_RESPONSE", "params", "4UyHOLi", "inited", "15IdaBZI", "Mã code không hợp lệ", "code", "Mã code đã quá hạn sử dụng hoặc chưa được kích hoạt", "codeButton", "getInt", "focus", "length", "1558011HBIxvH", "1226560mVDdoC", "getElementById", "339711kSnsSd", "sfs", "CLOSE", "enumerable", "SFSEvent", "onExtensionResponse", "prototype", "msg", "Enter Code", "Chúng tôi tạm khóa tính năng nạp Code tài khoản của bạn vì nạp sai quá 5 lần liên tiếp. Tính năng này sẽ được mở lại vào ngày mai.", "_instance", "send", "close", "ExtensionRequest", "getCurrentState", "createDOMText", "Cannot call a class as a function", "containsKey", "sound", "gift.code", "removeDOMElement", "3370JXzSQh", "Tài khoản này đã sử dụng mã code trước đó", "appendChild", "5337rHNWdi", "getUtfString", "configurable", "11VIwUed", "instance", "5863308xdWZoc", "createDOMButton", "onclick", "value", "IP của bạn đã sử dụng mã code trước đó"];
		return (L = function() {
			return t
		})()
	}

	function M(t, e) {
		for (var n = W, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(414)] = i[n(414)] || !1, i[n(437)] = !0, n(443) in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function W(t, e) {
		var n = L();
		return (W = function(t, e) {
			return n[t -= 392]
		})(t, e)
	}! function(t, e) {
		for (var n = W, r = t();;) try {
			if (124142 == parseInt(n(400)) / 1 * (-parseInt(n(392)) / 2) + -parseInt(n(411)) / 3 * (parseInt(n(398)) / 4) + parseInt(n(450)) / 5 * (-parseInt(n(394)) / 6) + -parseInt(n(408)) / 7 + parseInt(n(409)) / 8 + -parseInt(n(435)) / 9 * (-parseInt(n(432)) / 10) + -parseInt(n(438)) / 11 * (-parseInt(n(440)) / 12)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(L);
	var z = function() {
			var t, e, n, r, i = W;

			function a() {
				var t = W;
				(function(t, e) {
					if (!(t instanceof e)) throw new TypeError(W(427))
				})(this, a), this[t(399)] = !1
			}
			return t = a, e = [{
				key: i(454),
				value: function(t) {
					var e = i;
					!this[e(399)] && (this[e(399)] = !0, this[e(412)] = t, this[e(412)].addEventListener(SFS2X[e(415)][e(396)], this.onExtensionResponse, this))
				}
			}, {
				key: i(416),
				value: function(t) {
					var e = i;
					if ("gift.code" == t[e(446)]) {
						var n = t[e(397)][e(428)](e(418)) ? t[e(397)][e(436)](e(418)) : null;
						if (null == n && t[e(397)][e(428)](e(452))) {
							var r = t[e(397)][e(405)]("errorCode");
							1 == r ? n = e(420) : 2 == r ? n = e(401) : 5 == r ? n = e(447) : 6 == r ? n = e(403) : 7 == r ? n = e(433) : 8 == r && (n = e(444))
						}
						n && new G(game, {
							text: n,
							buttonText: CyberInstance[e(393)][e(413)],
							hideCloseButton: !0
						})
					}
				}
			}, {
				key: i(455),
				value: function() {
					var t = i;
					if (this[t(399)]) {
						game.state.getCurrentState().addOverlay(this[t(423)], this);
						var e = u[t(426)](t(451), t(419), 12);
						document[t(456)][t(434)](e);
						var n = u[t(441)](t(404), CyberInstance[t(393)][t(453)][t(395)]());
						n[t(442)] = function() {
							var e = t;
							CyberInstance[e(429)][e(449)](), a.instance[e(422)]()
						}, document.body[t(434)](n), document[t(410)]("codeInput")[t(406)]()
					}
				}
			}, {
				key: i(422),
				value: function() {
					var t = i,
						e = document[t(410)]("codeInput")[t(443)];
					if (e && e[t(407)] > 0) {
						if (e[t(407)] < 8) return this.close(), void new G(game, {
							text: t(401),
							buttonText: CyberInstance.lang.CLOSE,
							hideCloseButton: !0
						});
						var n = new SFS2X.SFSObject;
						n.putUtfString(t(402), e), this[t(412)][t(422)](new(SFS2X[t(424)])(t(430), n))
					}
					this[t(423)]()
				}
			}, {
				key: i(423),
				value: function() {
					var t = i;
					u[t(431)](t(451)), u[t(431)]("codeButton"), game.state[t(425)]()[t(448)]()
				}
			}], n = [{
				key: i(439),
				get: function() {
					var t = i;
					return a._instance || (a[t(421)] = new a), a._instance
				}
			}], r = W, e && M(t[r(417)], e), n && M(t, n), Object[r(445)](t, r(417), {
				writable: !1
			}), a
		}(),
		U = H;
	! function(t, e) {
		for (var n = H, r = t();;) try {
			if (291475 == parseInt(n(358)) / 1 + -parseInt(n(365)) / 2 * (-parseInt(n(351)) / 3) + -parseInt(n(366)) / 4 * (parseInt(n(369)) / 5) + -parseInt(n(356)) / 6 * (parseInt(n(362)) / 7) + parseInt(n(368)) / 8 * (parseInt(n(361)) / 9) + parseInt(n(353)) / 10 * (-parseInt(n(354)) / 11) + -parseInt(n(364)) / 12 * (-parseInt(n(359)) / 13)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(X);
	var V = {
		9: {
			icon: "avatar9",
			id: 9,
			type: U(363),
			name: "Flower",
			ads: 2,
			quantity: 1,
			vip: !1
		},
		10: {
			icon: U(360),
			id: 10,
			type: U(363),
			name: U(355),
			ads: 2,
			quantity: 1,
			vip: !1
		},
		11: {
			icon: "avatar11",
			id: 11,
			type: U(363),
			name: U(357),
			ads: 2,
			quantity: 1,
			vip: !1
		},
		28: {
			icon: U(352),
			id: 28,
			type: U(363),
			name: U(367),
			ads: 2,
			quantity: 1,
			vip: !0
		}
	};

	function H(t, e) {
		var n = X();
		return (H = function(t, e) {
			return n[t -= 351]
		})(t, e)
	}

	function X() {
		var t = ["65tUqMtH", "avatar10", "423mJyssp", "729498PGmTwV", "AVATAR", "2352612ovKRIx", "10mzPXVO", "782484PjwYju", "Noel", "77344BVHeUP", "10BEgavx", "79863CSvvES", "avatar28", "60wgKVGS", "969287dHGkgc", "Hambuger", "24OYQakV", "Thần Tài", "60519PbFnvS"];
		return (X = function() {
			return t
		})()
	}
	var q = {},
		K = J;

	function Y() {
		var t = ["dorac", "4qfWzcx", "244107VkeKis", "Like", "16rVRCGE", "4606520qGGRcH", "Chảo", "Chó Cắn", "11KDOJtT", "Ném Chuối", "Sầu Riêng", "chocan", "Đổ Rác", "32658JXSdHZ", "2531116MFfszU", "425GrtpEt", "saurieng", "10910916HKlMFy", "emolike", "51924GKUOxT", "GIFT", "60431sZrmjU", "2lrMTnx"];
		return (Y = function() {
			return t
		})()
	}

	function J(t, e) {
		var n = Y();
		return (J = function(t, e) {
			return n[t -= 440]
		})(t, e)
	}! function(t, e) {
		for (var n = J, r = t();;) try {
			if (243667 == parseInt(n(456)) / 1 * (-parseInt(n(457)) / 2) + parseInt(n(454)) / 3 * (-parseInt(n(459)) / 4) + -parseInt(n(450)) / 5 * (-parseInt(n(448)) / 6) + parseInt(n(449)) / 7 + -parseInt(n(462)) / 8 * (parseInt(n(460)) / 9) + parseInt(n(440)) / 10 * (parseInt(n(443)) / 11) + -parseInt(n(452)) / 12) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Y);
	var Q = {
		12: {
			icon: "bansung",
			id: 12,
			type: K(455),
			name: "Bắn Súng",
			ads: 10,
			quantity: 1
		},
		13: {
			icon: K(453),
			id: 13,
			type: K(455),
			name: K(461),
			ads: 10,
			quantity: 1
		},
		14: {
			chip: 1e4,
			icon: K(446),
			id: 14,
			type: K(455),
			name: K(442)
		},
		15: {
			chip: 5e3,
			icon: "chao",
			id: 15,
			type: K(455),
			name: K(441)
		},
		16: {
			chip: 1e4,
			icon: "nemchuoi",
			id: 16,
			type: K(455),
			name: K(444)
		},
		17: {
			chip: 5e3,
			icon: K(458),
			id: 17,
			type: K(455),
			name: K(447)
		},
		18: {
			chip: 5e3,
			icon: "damboc",
			id: 18,
			type: K(455),
			name: "Đấm Bốc"
		},
		19: {
			chip: 1e4,
			icon: K(451),
			id: 19,
			type: "GIFT",
			name: K(445)
		}
	};

	function Z(t, e) {
		for (var n = $, r = 0; r < e[n(231)]; r++) {
			var i = e[r];
			i.enumerable = i[n(189)] || !1, i[n(201)] = !0, "value" in i && (i[n(219)] = !0), Object[n(221)](t, i[n(230)], i)
		}
	}

	function $(t, e) {
		var n = tt();
		return ($ = function(t, e) {
			return n[t -= 173]
		})(t, e)
	}

	function tt() {
		var t = ["quantity", "addEventListener", "updateGift", "size", "getInt", "inited", "getAvatarItems", "shop.getOrders", "configurable", "clear", "getLong", "has", "set", "329886TWWNFJ", "items", "onExtensionResponse", "instance", "142382IcURlS", "getAvatar", "2499939KbXTni", "initialize", "getItem", "ExtensionRequest", "avatars", "getSFSObject", "265ktuHYn", "writable", "times", "defineProperty", "cmd", "updateAvatar", "SFSEvent", "params", "1064760svUrmn", "30SZfUso", "prototype", "sfs", "key", "length", "setDataAsync", "92022bcFAYN", "EXTENSION_RESPONSE", "defaultAvatarId", "1519460BrLEdt", "send", "player", "getSFSArray", "duration", "shop.setDefaultAvatar", "error", "get", "3ncdLME", "_instance", "6774124aSogYU", "getOrders", "getItems", "updateWatchCount", "SFSObject", "enumerable", "getEmoItems", "Cannot call a class as a function", "watchItems"];
		return (tt = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = $, r = t();;) try {
			if (693015 == parseInt(n(206)) / 1 + parseInt(n(210)) / 2 * (-parseInt(n(182)) / 3) + -parseInt(n(174)) / 4 + parseInt(n(218)) / 5 * (parseInt(n(233)) / 6) + parseInt(n(184)) / 7 + -parseInt(n(226)) / 8 + parseInt(n(212)) / 9 * (-parseInt(n(227)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(tt);
	var et = function() {
		var t, e, n, r, i = $;

		function a() {
			var t = $;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError($(191))
			})(this, a), this[t(198)] = !1, this.items = new Map, this.avatars = new Map, this[t(192)] = new Map
		}
		return t = a, e = [{
			key: i(213),
			value: function(t) {
				var e = i;
				this[e(229)] = t, this[e(229)][e(194)](SFS2X[e(224)][e(234)], this[e(208)], this)
			}
		}, {
			key: i(185),
			value: function() {
				var t = i;
				this[t(198)] || this[t(229)].send(new(SFS2X[t(215)])(t(200)))
			}
		}, {
			key: i(208),
			value: function(t) {
				var e = i,
					n = this;
				if ("shop.getOrders" == t[e(222)]) {
					if (t[e(225)].containsKey(e(180))) return void setTimeout((function() {
						n.getOrders()
					}), 3e3);
					this.items[e(202)](), this[e(216)][e(202)](), this[e(192)][e(202)](), this.inited = !0;
					var r = t[e(225)][e(177)](e(216)),
						a = t[e(225)][e(177)]("items"),
						o = t[e(225)].getSFSArray(e(192));
					if (a[e(196)]() > 0)
						for (var s = 0; s < a[e(196)](); s++) {
							var c = a[e(217)](s);
							this[e(207)].set(c[e(197)]("id"), c[e(197)](e(193)))
						}
					if (o.size() > 0)
						for (var u = 0; u < o.size(); u++) {
							var h = o[e(217)](u);
							this[e(192)][e(205)](h.getInt("id"), h.getInt(e(220)))
						}
					if (r.size() > 0) {
						for (var f = !1, l = 0; l < r[e(196)](); l++) {
							var p = r.getSFSObject(l),
								y = p[e(197)]("id");
							this[e(216)][e(204)](y) ? this[e(216)][e(205)](y, this[e(216)].get(y) + p[e(203)]("duration")) : this[e(216)].set(y, p[e(203)](e(178))), y === CyberGlobalData[e(173)] && (f = !0)
						}
						if (f) {
							var d = new(SFS2X[e(188)]);
							d.putInt("id", CyberGlobalData[e(173)]), this[e(229)][e(175)](new SFS2X.ExtensionRequest(e(179), d))
						} else CyberGlobalData.defaultAvatarId = null, FBInstant[e(176)][e(232)]({
							avatar: null
						})
					} else CyberGlobalData[e(173)] = null, FBInstant[e(176)].setDataAsync({
						avatar: null
					})
				}
			}
		}, {
			key: i(211),
			value: function(t) {
				var e = i;
				return this[e(216)][e(181)](t)
			}
		}, {
			key: i(223),
			value: function(t, e) {
				this[i(216)].set(t, e)
			}
		}, {
			key: i(214),
			value: function(t) {
				var e = i;
				return this[e(207)][e(181)](t)
			}
		}, {
			key: i(195),
			value: function(t, e) {
				var n = i;
				if (this[n(207)][n(204)](t)) {
					var r = this[n(207)][n(181)](t) + e;
					r >= 0 && this[n(207)][n(205)](t, r)
				} else this[n(207)][n(205)](t, e)
			}
		}, {
			key: "getWatchCount",
			value: function(t) {
				var e = this[i(192)].get(t);
				return e || (e = 0), e
			}
		}, {
			key: i(187),
			value: function(t, e) {
				var n = i;
				this.watchItems[n(205)](t, e)
			}
		}, {
			key: i(186),
			value: function() {
				return this.items
			}
		}], n = [{
			key: i(209),
			get: function() {
				var t = i;
				return a._instance || (a._instance = new a), a[t(183)]
			}
		}, {
			key: "getGiftItems",
			value: function() {
				return Q
			}
		}, {
			key: i(199),
			value: function() {
				return V
			}
		}, {
			key: i(190),
			value: function() {
				return q
			}
		}], r = $, e && Z(t[r(228)], e), n && Z(t, n), Object[r(221)](t, r(228), {
			writable: !1
		}), a
	}();

	function nt(t, e) {
		var n = rt();
		return (nt = function(t, e) {
			return n[t -= 431]
		})(t, e)
	}

	function rt() {
		var t = ["enumerable", "2_99", "_isP80", "161ffoIES", "length", "now", "2107280nkxOKI", "isNoel", "1284792CXynqU", "get", "_isP50", "createdDate", "containsKey", "duration", "189096TboBHD", "promoMap", "9_99", "getLong", "configurable", "value", "10POFevE", "isP80", "set", "prototype", "0_99", "key", "1_99", "249YhMokf", "2244755RrsOOW", "_isP100", "has", "128764NcsDol", "getInt", "3868569BKBiBR", "forEach", "getMonth", "17140nugyxy"];
		return (rt = function() {
			return t
		})()
	}

	function it(t, e) {
		for (var n = nt, r = 0; r < e[n(444)]; r++) {
			var i = e[r];
			i[n(440)] = i[n(440)] || !1, i[n(458)] = !0, n(459) in i && (i.writable = !0), Object.defineProperty(t, i[n(465)], i)
		}
	}! function(t, e) {
		for (var n = nt, r = t();;) try {
			if (463639 == -parseInt(n(434)) / 1 + -parseInt(n(439)) / 2 * (parseInt(n(467)) / 3) + parseInt(n(446)) / 4 + parseInt(n(431)) / 5 + parseInt(n(448)) / 6 + -parseInt(n(443)) / 7 * (-parseInt(n(454)) / 8) + parseInt(n(436)) / 9 * (-parseInt(n(460)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(rt);
	var at = function() {
			var t, e, n, r = nt;

			function i(t) {
				var e = nt,
					n = this;
				(function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				})(this, i), this[e(451)] = Date[e(445)](), this[e(453)] = t[e(457)](e(453)), this[e(455)] = new Map;
				var r = new Map,
					a = [e(464), e(466), e(441), "4_99", e(456)];
				a[e(437)]((function(i) {
					var a = e;
					if (t[a(452)](i) && i) {
						var o = t[a(435)](i);
						n[a(455)].set(i, o), r[a(433)](o) ? r[a(462)](o, r[a(449)](o) + 1) : r[a(462)](o, 1)
					}
				})), r[e(433)](100) && r[e(449)](100) == a[e(444)] && (this[e(432)] = !0), r[e(433)](80) && r[e(449)](80) == a[e(444)] && (this[e(442)] = !0), r[e(433)](50) && r[e(449)](50) == a[e(444)] && (this[e(450)] = !0)
			}
			return t = i, e = [{
				key: "isP100",
				value: function() {
					return !!this[nt(432)]
				}
			}, {
				key: r(461),
				value: function() {
					return !!this[r(442)]
				}
			}, {
				key: "isP50",
				value: function() {
					return !!this[r(450)]
				}
			}, {
				key: "getDuration",
				value: function() {
					var t = r,
						e = Date[t(445)]() - this.createdDate;
					return this[t(453)] - e
				}
			}, {
				key: "getPromoMap",
				value: function() {
					return this[r(455)]
				}
			}, {
				key: "getPromoValue",
				value: function(t) {
					var e = r;
					return this[e(455)][e(433)](t) ? this[e(455)][e(449)](t) : 0
				}
			}, {
				key: r(447),
				value: function() {
					var t = r,
						e = new Date,
						n = e.getDate();
					return 11 == e[t(438)]() && n >= 23 && n <= 26
				}
			}], n = nt, e && it(t[n(463)], e), Object.defineProperty(t, n(463), {
				writable: !1
			}), i
		}(),
		ot = ut;

	function st() {
		var t = ["getPurchasesAsync", "productID", "payments", "Tính năng này không hỗ trợ trên thiết bị của bạn!", "onPurchaseProduct", "EXTENSION_RESPONSE", "getBool", "132172aKrwEy", "catch", "xmas_5_99", "icon_chip6", "promotionEntry", "consumePurchaseAsync", "sfs", "addProducts", "send", "671848PhbVCM", "payment.verify", "getLong", "coin", "2pxrHGM", "icon_chip2", "then", "$ 9.99", "$ 4.99", "configurable", "products", "isConsumed", "getPromotion", "1_99", "_view", "$ 1.99", "verifyPayment", "onExtensionResponse", "723705hdIKug", "restore", "setDataAsync", "icon_chip4", "enumerable", "purchase", "15steGMn", "getCatalogAsync", "SFSObject", "xm199", "99_99", "prototype", "putUtfString", "keys", "2_99", "view", "6sNenhC", "$ 99.99", "player", "$ 0.99", "410690iFrmBn", "instance", "getFullYear", "clear", "success", "set", "inited", "$ 49.99", "errorMsg", "isConnected", "price", "getInt", "icon_chip1", "value", "27vkIEAw", "containsKey", "_instance", "0_99", "purchases", "initialize", "writable", "code", "params", "icon_chip3", "length", "_products", "49_99", "2225062erwinH", "xm599", "signedRequest", "xmas_1_99", "ExtensionRequest", "dispatch", "24_99", "Signal", "icon_chip5", "463992qxwPwI", "getUtfString", "defineProperty", "$ 2.99", "chip", "_inited", "purchaseToken", "Cannot call a class as a function", "2894958DSDYxe"];
		return (st = function() {
			return t
		})()
	}

	function ct(t, e) {
		for (var n = ut, r = 0; r < e[n(381)]; r++) {
			var i = e[r];
			i[n(440)] = i[n(440)] || !1, i[n(427)] = !0, n(469) in i && (i[n(377)] = !0), Object[n(395)](t, i.key, i)
		}
	}

	function ut(t, e) {
		var n = st();
		return (ut = function(t, e) {
			return n[t -= 371]
		})(t, e)
	}! function(t, e) {
		for (var n = ut, r = t();;) try {
			if (181599 == -parseInt(n(422)) / 1 * (-parseInt(n(409)) / 2) + parseInt(n(436)) / 3 + parseInt(n(393)) / 4 * (-parseInt(n(442)) / 5) + -parseInt(n(452)) / 6 * (parseInt(n(384)) / 7) + -parseInt(n(418)) / 8 * (-parseInt(n(371)) / 9) + -parseInt(n(456)) / 10 + parseInt(n(401)) / 11) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(st);
	var ht = {
			"0_99": {
				chip: 15e5,
				price: ot(455),
				icon: ot(468),
				productID: ot(374)
			},
			"1_99": {
				chip: 45e5,
				price: ot(433),
				icon: ot(423),
				productID: ot(431)
			},
			"2_99": {
				chip: 69e5,
				price: ot(396),
				icon: ot(380),
				productID: ot(450)
			},
			"4_99": {
				chip: 12e6,
				price: ot(426),
				icon: ot(439),
				productID: "4_99"
			},
			"9_99": {
				chip: 25e6,
				price: ot(425),
				icon: ot(392),
				productID: "9_99"
			},
			"24_99": {
				chip: 65e6,
				price: "$ 24.99",
				icon: ot(412),
				productID: ot(390)
			},
			"49_99": {
				chip: 14e7,
				price: ot(463),
				icon: ot(412),
				productID: ot(383)
			},
			"99_99": {
				chip: 3e8,
				price: ot(453),
				icon: ot(412),
				productID: ot(446)
			}
		},
		ft = function() {
			var t, e, n, r, i = ot;

			function a() {
				var t = ut;
				(function(t, e) {
					if (!(t instanceof e)) throw new TypeError(ut(400))
				})(this, a), this[t(462)] = !1, this[t(428)] = null, this[t(413)] = null, this[t(406)] = new(Phaser[t(391)]), this[t(375)] = new Map, this[t(445)] = null, this[t(385)] = null
			}
			return t = a, e = [{
				key: i(376),
				value: function(t) {
					var e = i,
						n = this;
					!this[e(462)] && (this[e(462)] = !0, this.sfs = t, this[e(415)].addEventListener(SFS2X.SFSEvent[e(407)], this[e(435)], this), FBInstant[e(404)][e(443)]().then((function(t) {
						var r = e;
						if (t[r(381)] > 0)
							for (var i = 0; i < t[r(381)]; i++) {
								var a = t[i][r(403)];
								n[r(428)].hasOwnProperty(a) && (n[r(428)][a].price = t[i][r(466)]), a == r(387) && (n[r(445)] = t[i][r(466)]), a == r(411) && (n[r(385)] = t[i].price)
							}
					})), FBInstant[e(404)][e(402)]().then((function(t) {
						var r = e;
						if (n.purchases[r(459)](), t && t.length > 0)
							for (var i = 0; i < t[r(381)]; i++) {
								var a = t[i];
								n[r(375)][r(461)](a[r(403)], a)
							}
					})))
				}
			}, {
				key: "handlePromotion",
				value: function(t) {
					this.promotionEntry = new at(t)
				}
			}, {
				key: i(430),
				value: function() {
					return this.promotionEntry
				}
			}, {
				key: i(435),
				value: function(t) {
					var e = i;
					if ("payment.verify" == t.cmd) {
						var n = t[e(379)].containsKey(e(403)) ? t.params[e(394)](e(403)) : "",
							r = t[e(379)][e(408)](e(460));
						r ? this[e(406)][e(389)]({
							coin: t[e(379)][e(420)](e(421)),
							productID: n
						}) : this[e(406)].dispatch({
							error: !0,
							errorMsg: t[e(379)][e(394)](e(464))
						}), (r || t[e(379)][e(372)]("errorCode") && 6 == t.params[e(467)]("errorCode")) && FBInstant[e(404)][e(414)](t[e(379)][e(394)](e(399))).then((function() {
							var t = e;
							"xmas_1_99" == n && (noel_1_99 = (new Date)[t(458)](), FBInstant[t(454)][t(438)]({
								noel_1_99
							})), n == t(411) && (noel_5_99 = (new Date)[t(458)](), FBInstant[t(454)][t(438)]({
								noel_5_99
							}))
						}))
					}
				}
			}, {
				key: i(441),
				value: function(t, e) {
					var n = i;
					this[n(462)] ? FBInstant.payments.purchaseAsync({
						productID: t,
						developerPayload: e || "Cyber"
					})[n(424)]((function(t) {
						a.instance.verifyPayment(t)
					}))[n(410)]((function(t) {
						var e = n;
						a[e(457)][e(406)][e(389)]({
							error: !0,
							errorMsg: t.message
						})
					})) : this[n(406)].dispatch({
						error: !0,
						errorMsg: n(405)
					})
				}
			}, {
				key: i(437),
				value: function(t) {
					var e = i;
					FBInstant.payments[e(402)]()[e(424)]((function(n) {
						var r = e;
						if (n && n.length)
							for (var i in n) {
								var o = n[i];
								if (o.productID == t && 0 == o[r(429)]) {
									a[r(457)][r(434)](o);
									break
								}
							}
					})).catch((function(t) {
						var n = e;
						a[n(457)][n(406)][n(389)]({
							error: !0,
							errorMsg: t.message + " " + t[n(378)]
						})
					}))
				}
			}, {
				key: "verifyPayment",
				value: function(t) {
					var e = i;
					if (this[e(415)][e(465)]) {
						var n = new(SFS2X[e(444)]);
						n[e(448)]("signedRequest", t[e(386)]), this[e(415)][e(417)](new(SFS2X[e(388)])(e(419), n))
					}
				}
			}, {
				key: i(416),
				value: function(t) {
					var e = i;
					if (null == this[e(428)])
						if (this[e(428)] = {}, t)
							for (var n = Object[e(449)](t), r = 0; r < n[e(381)]; r++) {
								var a = n[r];
								this[e(428)][a] = ht[a], this[e(428)][a][e(397)] = t[a]
							} else this.products = ht
				}
			}, {
				key: i(428),
				get: function() {
					return this[i(382)]
				},
				set: function(t) {
					this[i(382)] = t
				}
			}, {
				key: i(462),
				get: function() {
					return this[i(398)]
				},
				set: function(t) {
					this[i(398)] = t
				}
			}, {
				key: i(451),
				get: function() {
					return this[i(432)]
				},
				set: function(t) {
					this[i(432)] = t
				}
			}], n = [{
				key: i(457),
				get: function() {
					var t = i;
					return a[t(373)] || (a._instance = new a), a[t(373)]
				}
			}], r = ut, e && ct(t[r(447)], e), n && ct(t, n), Object[r(395)](t, r(447), {
				writable: !1
			}), a
		}();

	function lt(t, e) {
		for (var n = pt, r = 0; r < e[n(391)]; r++) {
			var i = e[r];
			i.enumerable = i.enumerable || !1, i.configurable = !0, n(402) in i && (i[n(373)] = !0), Object[n(378)](t, i[n(404)], i)
		}
	}

	function pt(t, e) {
		var n = dt();
		return (pt = function(t, e) {
			return n[t -= 331]
		})(t, e)
	}! function(t, e) {
		for (var n = pt, r = t();;) try {
			if (660519 == -parseInt(n(339)) / 1 + -parseInt(n(405)) / 2 * (-parseInt(n(365)) / 3) + parseInt(n(356)) / 4 * (parseInt(n(353)) / 5) + parseInt(n(397)) / 6 + -parseInt(n(376)) / 7 + parseInt(n(344)) / 8 * (-parseInt(n(363)) / 9) + -parseInt(n(343)) / 10 * (-parseInt(n(340)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(dt);
	var yt = function() {
		var t, e, n, r, i = pt;

		function a() {
			var t = pt;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(pt(398))
			})(this, a), this[t(333)] = !1, this[t(396)] = new Phaser.Signal, this[t(334)] = null, this[t(362)] = 0, this[t(379)] = 0, this.rank = 0, this[t(367)] = !1, this[t(351)] = [], this[t(372)] = 0, this[t(374)] = !1, CyberInstance[t(413)] = this
		}
		return t = a, e = [{
			key: "initialize",
			value: function() {
				var t = pt;
				!this[t(333)] && (CyberInstance[t(368)][t(392)](SFS2X[t(332)][t(400)], this[t(393)], this), this.inited = !0)
			}
		}, {
			key: i(393),
			value: function(t) {
				var e = i;
				t[e(389)] == e(375) ? this.updateInfo(t[e(418)]) : t[e(389)] == e(331) ? this[e(345)](t[e(418)]) : "tournament.collect" == t[e(389)] ? this.handleCollectResult(t[e(418)]) : "tournament.join" == t[e(389)] ? this[e(341)](t[e(418)]) : t[e(389)] == e(377) ? this[e(370)](t[e(418)]) : "tournament.updateRank" == t[e(389)] && this.handleUpdateRank(t[e(418)])
			}
		}, {
			key: i(360),
			value: function(t) {
				var e = i,
					n = this;
				if (t.containsKey("id") && (this[e(381)] = t[e(358)]("id"), this[e(412)] = t.getLong(e(412)) - 3e5, this[e(336)] = Date[e(369)](), this[e(412)] > 1e4 && FBInstant[e(407)]()[e(420)]((function(t) {
						var r = e;
						t.getID() == n[r(381)] && n[r(348)](n[r(381)])
					}))[e(342)]((function(t) {
						console.log(t)
					}))), t[e(419)](e(347))) {
					var r = t[e(355)](e(347));
					this[e(334)] = {
						rank: r[e(419)](e(350)) ? r[e(366)](e(350)) : 0,
						score: r[e(419)](e(362)) ? r[e(366)](e(362)) : 0,
						collected: r.getBool(e(414))
					}, this.prevTournamentResult[e(414)] && this[e(415)](r[e(366)]("id"))
				}(t[e(419)]("id") || t[e(419)]("result")) && this.events[e(411)]({
					cmd: "onInit"
				})
			}
		}, {
			key: i(341),
			value: function(t) {
				var e = i;
				this[e(362)] = t.getInt(e(362)), this.rank = t[e(366)](e(350)), this[e(367)] = !0, this[e(396)][e(411)]({
					cmd: e(408)
				}), u[e(394)](e(371), this[e(381)])
			}
		}, {
			key: i(370),
			value: function(t) {
				var e = i,
					n = this;
				this[e(379)] = this[e(379)] + (t[e(366)]("score") - this[e(362)]), this[e(362)] = t[e(366)](e(362)), t[e(419)](e(350)) && (this[e(350)] = t.getInt(e(350))), FBInstant[e(388)].postScoreAsync(this[e(362)])[e(420)]((function() {
					var t = e;
					n[t(379)] >= 200 && (n[t(374)] = !0, n[t(379)] = 0)
				})), this[e(396)][e(411)]({
					cmd: e(403)
				})
			}
		}, {
			key: i(399),
			value: function(t) {
				var e = i;
				this[e(350)] = t[e(366)](e(350)), t[e(419)]("score") && (this[e(362)] = t[e(366)](e(362)))
			}
		}, {
			key: i(345),
			value: function(t) {
				var e = i;
				this[e(372)] = Date[e(369)](), t.containsKey("rank") && (this[e(350)] = t.getInt(e(350)));
				var n = t[e(346)](e(361));
				if (n[e(359)]() > 0) {
					this[e(351)][e(391)] = 0;
					for (var r = 1, a = 0; a < n[e(359)](); a++) {
						var o = n.getSFSObject(a),
							s = o[e(366)]("s");
						s > 0 && (this[e(351)][e(380)]({
							id: o[e(383)]("id"),
							n: o[e(419)]("n") ? o.getUtfString("n") : e(349),
							a: o[e(419)]("a") ? o[e(358)]("a") : null,
							s,
							r
						}), r++)
					}
					this[e(396)][e(411)]({
						cmd: "onUpdateRanking"
					})
				}
			}
		}, {
			key: "handleCollectResult",
			value: function(t) {
				var e = i;
				this[e(334)] && 0 == this[e(334)][e(414)] && (this[e(334)][e(414)] = !0, this[e(334)][e(382)] = t.getLong(e(382)), this[e(396)].dispatch({
					cmd: "onCollect"
				})), this[e(415)](t[e(366)]("id"))
			}
		}, {
			key: i(385),
			value: function() {
				var t = this;
				return new Promise((function(e, n) {
					var r = pt;
					FBInstant[r(407)]()[r(420)]((function(n) {
						var i = r;
						n[i(390)]() == t.tournamentId ? e(!1) : e(t[i(401)]())
					}))[r(342)]((function() {
						e(t.checkJoinStatusFromStorage())
					}))
				}))
			}
		}, {
			key: i(401),
			value: function() {
				var t = u[i(364)]("lastJoinedTournament");
				return !(!t || t != this.tournamentId)
			}
		}, {
			key: i(410),
			value: function() {
				var t = i;
				this[t(351)].length > 0 && Date[t(369)]() - this[t(372)] > 3e5 && (this.rankList[t(391)] = 0)
			}
		}, {
			key: i(417),
			value: function() {
				var t = i;
				return this[t(412)] - (Date[t(369)]() - this[t(336)])
			}
		}, {
			key: i(335),
			value: function() {
				var t = i;
				if (!this.tournamentId) {
					var e = new(SFS2X[t(416)]),
						n = u[t(364)](t(352));
					n && e[t(384)]("lastCollectedId", parseInt(n)), CyberInstance.socket[t(406)](new(SFS2X[t(357)])(t(375), e))
				}
			}
		}, {
			key: i(409),
			value: function() {
				var t = i;
				CyberInstance.socket.send(new(SFS2X[t(357)])(t(331)))
			}
		}, {
			key: i(348),
			value: function(t) {
				var e = i;
				if (!this.joined) {
					var n = new SFS2X.SFSObject;
					n[e(354)]("id", t), CyberInstance.socket[e(406)](new SFS2X.ExtensionRequest("tournament.join", n))
				}
			}
		}, {
			key: i(338),
			value: function() {
				var t = i;
				CyberInstance[t(368)][t(406)](new(SFS2X[t(357)])(t(337)))
			}
		}, {
			key: "saveLastCollectedId",
			value: function(t) {
				var e = i;
				u[e(394)](e(352), t)
			}
		}], n = [{
			key: "instance",
			get: function() {
				var t = i;
				return a[t(386)] || (a[t(386)] = new a), a[t(386)]
			}
		}, {
			key: i(387),
			value: function(t) {
				return 0 == t || t > 1e3 ? 0 : 1 == t ? 1e8 : 2 == t ? 75e6 : 3 == t ? 5e7 : 4 == t ? 35e6 : t > 4 && t < 21 ? 2e7 : t > 20 && t < 31 ? 12e6 : t > 30 && t < 51 ? 75e5 : t > 50 && t < 101 ? 5e6 : t > 100 && t < 201 ? 3e6 : t > 200 && t < 401 ? 15e5 : 1e6
			}
		}], r = pt, e && lt(t[r(395)], e), n && lt(t, n), Object.defineProperty(t, r(395), {
			writable: !1
		}), a
	}();

	function dt() {
		var t = ["Cannot call a class as a function", "handleUpdateRank", "EXTENSION_RESPONSE", "checkJoinStatusFromStorage", "value", "onUpdateScore", "key", "406402AgPYNF", "send", "getTournamentAsync", "onJoin", "sendGetRankingRequest", "refreshRanking", "dispatch", "duration", "tournamentManager", "collected", "saveLastCollectedId", "SFSObject", "getDuration", "params", "containsKey", "then", "tournament.getRanking", "SFSEvent", "inited", "prevTournamentResult", "sendGetInfoRequest", "receivedDate", "tournament.collect", "sendCollectRewardRequest", "441090Upvgcn", "11638QAowWb", "handleJoinTournament", "catch", "10970owIqWf", "584HSCnqR", "handleUpdateLeaderboard", "getSFSArray", "result", "sendJoinRequest", "Player", "rank", "rankList", "lastCollectedId", "15735BuLrXu", "putUtfString", "getSFSObject", "656DgMrRH", "ExtensionRequest", "getUtfString", "size", "updateInfo", "ranking", "score", "64683vAQzde", "getFromLocalStorage", "6kGcdRK", "getInt", "joined", "socket", "now", "handleUpdateScore", "lastJoinedTournament", "lastRankingRequestTime", "writable", "canShare", "tournament.getInfo", "4942378OWgTLJ", "tournament.updateScore", "defineProperty", "scoreInc", "push", "tournamentId", "coin", "getLong", "putInt", "canShowContinueAsync", "_instance", "getReward", "tournament", "cmd", "getID", "length", "addEventListener", "onExtensionResponse", "writeToLocalStorage", "prototype", "events", "1495068uYfTSE"];
		return (dt = function() {
			return t
		})()
	}

	function vt(t, e) {
		var n = mt();
		return (vt = function(t, e) {
			return n[t -= 330]
		})(t, e)
	}

	function bt(t, e) {
		for (var n = vt, r = 0; r < e[n(356)]; r++) {
			var i = e[r];
			i.enumerable = i[n(362)] || !1, i[n(361)] = !0, n(340) in i && (i[n(342)] = !0), Object[n(335)](t, i[n(341)], i)
		}
	}! function(t, e) {
		for (var n = vt, r = t();;) try {
			if (205784 == parseInt(n(350)) / 1 + parseInt(n(333)) / 2 + -parseInt(n(336)) / 3 + -parseInt(n(339)) / 4 + -parseInt(n(338)) / 5 + parseInt(n(345)) / 6 * (-parseInt(n(354)) / 7) + parseInt(n(348)) / 8) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(mt);
	const gt = function() {
		var t, e, n, r = vt;

		function i(t, e) {
			var n = vt;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(vt(363))
			})(this, i), this.id = t, this[n(357)] = !1, this[n(331)] = !1, this[n(358)] = null, this[n(365)] = e, this.onLoadError = new Phaser.Signal, this[n(353)] = new(Phaser[n(344)]), this[n(330)] = new(Phaser[n(344)]), this[n(337)] = new Phaser.Signal
		}
		return t = i, n = vt, (e = [{
			key: "preload",
			value: function() {
				var t = vt,
					e = this;
				null !== this[t(358)] ? this[t(358)].loadAsync().then((function() {
					e.handleLoadSuccess()
				}))[t(352)]((function(t) {
					e.handleLoadError(t, 2)
				})) : FBInstant[t(351)](this.id)[t(368)]((function(n) {
					var r = t;
					return e[r(358)] = n, e[r(358)].loadAsync()
				}))[t(368)]((function() {
					e[t(355)]()
				}))[t(352)]((function(n) {
					e[t(359)](n, 2)
				}))
			}
		}, {
			key: r(355),
			value: function() {
				var t = r;
				this[t(331)] = !0, this[t(353)].dispatch(this)
			}
		}, {
			key: r(359),
			value: function(t, e) {
				var n = r,
					i = this;
				this[n(365)] ? setTimeout((function() {
					var t = n;
					null != i.adInstance && i[t(346)](e)
				}), 3e4) : this[n(357)] = !0, this[n(334)].dispatch(this, t)
			}
		}, {
			key: r(346),
			value: function(t) {
				var e = r,
					n = this;
				t > 3 ? this[e(357)] = !0 : this[e(358)][e(364)]().then((function() {
					n[e(355)]()
				}))[e(352)]((function(r) {
					n[e(359)](r, t + 1)
				}))
			}
		}, {
			key: "show",
			value: function() {
				var t = r,
					e = this;
				this[t(358)][t(347)]()[t(368)]((function() {
					var n = t;
					e[n(358)] = null, e[n(331)] = !1, e[n(330)][n(360)](e.id), setTimeout((function() {
						e[n(343)]()
					}), 1e3)
				}))[t(352)]((function(n) {
					var r = t;
					e.adInstance = null, e.adLoaded = !1, e.onShowError[r(360)](e.id), e[r(366)](n), setTimeout((function() {
						e.preload()
					}), 1e3)
				}))
			}
		}, {
			key: "showErrorPopup",
			value: function(t) {
				var e = r;
				t && new G(game, {
					text: t[e(349)],
					buttonText: CyberInstance[e(367)].CLOSE
				})
			}
		}]) && bt(t[n(332)], e), Object[n(335)](t, n(332), {
			writable: !1
		}), i
	}();

	function mt() {
		var t = ["970095wRaGiB", "374676CeWoIx", "value", "key", "writable", "preload", "Signal", "6HKuZDB", "handleAdsNoFill", "showAsync", "4096736ZXyqye", "message", "62663PnaUBG", "getRewardedVideoAsync", "catch", "onLoad", "2007649CpjKpe", "handleLoadSuccess", "length", "blocked", "adInstance", "handleLoadError", "dispatch", "configurable", "enumerable", "Cannot call a class as a function", "loadAsync", "isAnyPrice", "showErrorPopup", "lang", "then", "onShow", "adLoaded", "prototype", "787764slmldh", "onLoadError", "defineProperty", "565074CdKuXG", "onShowError"];
		return (mt = function() {
			return t
		})()
	}
	var It = wt;

	function wt(t, e) {
		var n = kt();
		return (wt = function(t, e) {
			return n[t -= 229]
		})(t, e)
	}

	function St(t, e) {
		for (var n = wt, r = 0; r < e[n(313)]; r++) {
			var i = e[r];
			i[n(253)] = i[n(253)] || !1, i[n(305)] = !0, n(287) in i && (i[n(232)] = !0), Object.defineProperty(t, i[n(323)], i)
		}
	}

	function kt() {
		var t = ["extraCounter", "testMode", "onShow", "preload", "getRewardedVideoAsync", "REWARDED_POPUP_POSITION", "fakeid", "getDataAsync", "logged", "inited", "40VKSDIk", "rvids", "configurable", "RV2Instance", "blocked", "getTime", "adLoaded", "#ffffff", "anchor", "push", "length", "BUY_GIFT", "increaseSpinCounter", "signal", "lastShowId", "add", "onLoad", "connected", "overlayTexture", "Signal", "key", "BUY_AVATAR", "483844LGnqST", "socket", "writable", "adEnabled", "instance", "init", "Cannot call a class as a function", "5RtJDYW", "BUY_EMO", "onReady", "4080835firizq", "isConnected", "RV3Instance", "game", "image", "currentDate", "handleReconnect", "ready", "getSupportedAPIs", "player", "OUT_OFF_MONEY_POSITION", "type", "834490NGLWda", "enumerable", "connector", "adTestModeScreen", "1566870GAmEEv", "2gzwmcr", "make", "catch", "watchCounter", "setDataAsync", "DAILY_POSITION", "addChild", "3156036KilREz", "onLoadError", "spinCounter", "anyPriceInstance", "45CBaKeH", "hasReward", "text", "then", "freeze", "104992VDqqBF", "show", "log", "guserid", "split", "dispatch", "662949eTutTd", "FAKE AD IS SHOWING ON CENTER OF SCREEN...", "centerX", "onReward", "prototype", "world", "defineProperty", "ads", "value", "centerY", "onShowError", "showing", "handleUpdateReward", "disconnect"];
		return (kt = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = wt, r = t();;) try {
			if (326948 == -parseInt(n(273)) / 1 + parseInt(n(257)) / 2 * (parseInt(n(256)) / 3) + parseInt(n(230)) / 4 + -parseInt(n(237)) / 5 * (parseInt(n(264)) / 6) + parseInt(n(279)) / 7 * (-parseInt(n(303)) / 8) + -parseInt(n(268)) / 9 * (-parseInt(n(252)) / 10) + parseInt(n(240)) / 11) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(kt);
	var Ot = Object[It(272)]([5e4, 1e5, 2e5, 3e5, 5e5]),
		Ct = null;
	const Tt = function() {
		var t, e, n, r, i = It;

		function a() {
			var t = wt;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(wt(236))
			})(this, a), this.inited = !1, this[t(247)] = !1, this[t(294)] = !1, this[t(269)] = !1, this.showing = !1, this[t(260)] = 0, this[t(293)] = 0, this[t(266)] = 0, this.maxVideos = 10, this[t(239)] = new(Phaser[t(322)]), this.onReward = new Phaser.Signal, this[t(286)] = [];
			for (var e = 0; e < CyberInstance[t(304)].length; e++) {
				var n = new gt(CyberInstance[t(304)][e], 0 == e);
				n[t(265)][t(318)](this.onLoadError, this), n[t(319)][t(318)](this[t(319)], this), n[t(295)][t(318)](this[t(295)], this), n[t(289)].add(this[t(289)], this), this[t(286)][t(312)](n)
			}
		}
		return t = a, e = [{
			key: i(235),
			value: function() {
				var t = i,
					e = this;
				!this[t(302)] && -1 != FBInstant[t(248)]().indexOf(t(297)) && CyberInstance[t(233)] && 0 != CyberInstance.rvids[t(313)] && this.getDataAsync((function() {
					var n = t;
					CyberInstance[n(304)].length > 1 ? e[n(242)].blocked ? e[n(306)][n(307)] ? e[n(267)][n(296)]() : e.RV2Instance[n(296)]() : e[n(242)][n(296)]() : e[n(267)][n(296)]()
				}))
			}
		}, {
			key: "enableTestMode",
			value: function() {
				var t = i,
					e = this;
				!this[t(302)] && this[t(300)]((function() {
					var n = t;
					e[n(294)] = !0, setTimeout((function() {
						e[n(319)]()
					}), 3e3)
				}))
			}
		}, {
			key: i(300),
			value: function(t) {
				var e = i,
					n = this;
				FBInstant.player[e(300)]([e(245), e(260), e(266), e(293)])[e(271)]((function(r) {
					var i, a, o = e;
					n[o(245)] = (i = wt, a = new Date, new Date(a[i(308)]() - 6e4 * a.getTimezoneOffset()).toISOString()[i(277)]("T")[0]), r[o(260)] && (n[o(260)] = parseInt(r[o(260)])), r[o(293)] && (n[o(293)] = parseInt(r[o(293)])), r[o(266)] && (n[o(266)] = parseInt(r[o(266)])), r[o(245)] !== n[o(245)] && (n[o(260)] = 0, n.spinCounter = 0, n[o(293)] = 0), FBInstant[o(249)][o(261)]({
						currentDate: n[o(245)],
						watchCounter: n[o(260)],
						spinCounter: n[o(266)],
						extraCounter: n[o(293)]
					}), n[o(302)] = !0, t()
				}))[e(259)]((function(e) {
					setTimeout((function() {
						n.getDataAsync(t)
					}), 5e3)
				}))
			}
		}, {
			key: i(319),
			value: function() {
				var t = i;
				!this.ready && (this.ready = !0, this[t(239)].dispatch())
			}
		}, {
			key: i(265),
			value: function(t) {
				var e = i;
				CyberInstance[e(304)].length > 1 && (t.id == this.RV3Instance.id ? this[e(306)][e(296)]() : t.id == this.RV2Instance.id && this[e(267)][e(296)]())
			}
		}, {
			key: i(274),
			value: function(t) {
				var e = i,
					n = this;
				if (this[e(247)])
					if (this[e(251)] = t, this[e(294)]) {
						this[e(255)] = CyberInstance[e(243)][e(318)][e(244)](0, 0, CyberGlobalData[e(321)]);
						var r = CyberInstance.game[e(258)][e(270)](CyberInstance.game[e(284)][e(281)], CyberInstance[e(243)].world[e(288)], e(280), {
							font: APP_FONT,
							fill: e(310),
							fontWeight: 500,
							fontSize: 40
						});
						r[e(311)].setTo(.5), this[e(255)][e(263)](r), this[e(290)] = !0, setTimeout((function() {
							var t = e;
							CyberInstance.socket[t(292)]()
						}), 1e3), setTimeout((function() {
							var t = e;
							n[t(255)].destroy(), n[t(295)](t(299))
						}), 3e3)
					} else
						for (var a = 0; a < CyberInstance[e(304)][e(313)]; a++)
							if (this[e(286)][a][e(309)]) {
								this[e(290)] = !0, this[e(286)][a].show(), 14101826 == CyberInstance[e(276)] && setTimeout((function() {
									var t = e;
									console[t(275)]("disconnect test"), CyberInstance[t(231)][t(292)]()
								}), 3e3);
								break
							}
			}
		}, {
			key: i(246),
			value: function() {
				var t = i;
				this.hasReward && (this[t(269)] = !1, this[t(291)](this[t(317)]))
			}
		}, {
			key: i(295),
			value: function(t) {
				var e = i,
					n = this;
				if (this.ready = !1, this[e(290)] = !1, this.onReady[e(278)](), this[e(294)] && setTimeout((function() {
						n.onLoad()
					}), 3e3), !CyberInstance[e(231)][e(241)] || !CyberInstance[e(254)][e(320)] || !CyberInstance.connector[e(301)]) return this[e(317)] = t, this.hasReward = !0, void CyberInstance.connector.signal[e(278)](!1);
				this[e(269)] = !1, this[e(291)](t)
			}
		}, {
			key: i(291),
			value: function(t) {
				var e = i;
				if (this[e(251)] == a[e(298)]) {
					this[e(260)] = this[e(260)] + 1, FBInstant.player[e(261)]({
						watchCounter: this[e(260)]
					});
					var n = this[e(260)] <= 5 ? Ot[this[e(260)] - 1] : Ot[4];
					this[e(282)][e(278)]({
						id: t,
						type: this[e(251)],
						coin: 1000000000000,
						currentDate: this[e(245)],
						watchCounter: this.watchCounter
					})
				} else this[e(251)] == a.SPIN_POSITION ? this.onReward[e(278)]({
					id: t,
					type: this[e(251)]
				}) : this[e(251)] == a.OUT_OFF_MONEY_POSITION ? (this[e(293)] = this.extraCounter + 1, FBInstant[e(249)].setDataAsync({
					extraCounter: this[e(293)]
				}), this[e(282)][e(278)]({
					id: t,
					type: this[e(251)]
				})) : this.type == a.DAILY_POSITION || this[e(251)] == a[e(314)] ? this[e(282)][e(278)]({
					id: t,
					type: this[e(251)]
				}) : this[e(251)] == a.BUY_AVATAR ? this.onReward[e(278)]({
					id: t,
					type: this.type
				}) : this[e(251)] == a[e(238)] && this[e(282)][e(278)]({
					id: t,
					type: this[e(251)]
				})
			}
		}, {
			key: "onShowError",
			value: function() {
				var t = i;
				this.showing = !1, CyberInstance[t(231)][t(241)] && CyberInstance[t(254)].connected && CyberInstance[t(254)].logged || CyberInstance[t(254)][t(316)][t(278)](!1)
			}
		}, {
			key: i(315),
			value: function() {
				var t = i;
				this.spinCounter = this.spinCounter + 1, FBInstant.player.setDataAsync({
					spinCounter: this[t(266)]
				})
			}
		}, {
			key: i(267),
			get: function() {
				return this[i(286)][0]
			}
		}, {
			key: i(306),
			get: function() {
				return this[i(286)][1]
			}
		}, {
			key: "RV3Instance",
			get: function() {
				return this[i(286)][2]
			}
		}], n = [{
			key: i(234),
			get: function() {
				return Ct || (Ct = new a), Ct
			}
		}, {
			key: i(298),
			get: function() {
				return 1
			}
		}, {
			key: i(250),
			get: function() {
				return 3
			}
		}, {
			key: "SPIN_POSITION",
			get: function() {
				return 4
			}
		}, {
			key: i(262),
			get: function() {
				return 5
			}
		}, {
			key: i(314),
			get: function() {
				return 6
			}
		}, {
			key: i(229),
			get: function() {
				return 7
			}
		}, {
			key: "BUY_EMO",
			get: function() {
				return 8
			}
		}, {
			key: "REWARD_ARRAY",
			get: function() {
				return Ot
			}
		}], r = wt, e && St(t[r(283)], e), n && St(t, n), Object[r(285)](t, r(283), {
			writable: !1
		}), a
	}();

	function Pt(t, e) {
		for (var n = _t, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(357)] = i[n(357)] || !1, i[n(375)] = !0, n(411) in i && (i[n(407)] = !0), Object[n(387)](t, i[n(348)], i)
		}
	}

	function xt() {
		var t = ["user", "state", "putLong", "sendLoginRequest", "2299038vZEuga", "asid", "containsKey", "onConnectionSuccess_10plus", "zone", "profile.update", "removeHearBeat", "cmd", "multiGroupDisabled", "configurable", "onConnectionLost", "getTime", "getName", "Cannot call a class as a function", "21qndKDB", "addEventListener", "token", "heartBeat", "onConnectionSuccess_3_4", "maintenance", "promotion", "defineProperty", "1416141BfBZbp", "getVariable", "onLoginError", "isNewUser", "onConnectionSuccess_4_5", "UNDEF", "collectTime", "startTime", "connector", "refreshSpinTime", "appName", "lastJoinedRoomId", "port", "signature", "initHeartBeat", "logConnectTime", "10gcnmvw", "host", "onConnection", "writable", "onExtensionResponse", "showing", "dispatch", "value", "LOGIN_ERROR", "15344gfzdLI", "playerId", "getEntryPointData", "roomId", "timezone", "platform", "getID", "putInt", "onConnectionSuccess_1_2", "GIFT_TIME", "enableLagMonitor", "ExtensionRequest", "getSFSObject", "onConnectionSuccess_7_8", "SFSEvent", "guserid", "isItMe", "signal", "avatar", "onUserVariablesUpdate", "call", "entryPointDataHandled", "connect", "initialize", "canShowFlashSale", "errorMessage", "connected", "MAINTENANCE", "msg", "profile.updateAvatar", "onConnectionSuccess_2_3", "instance", "203eMPwSW", "logged", "then", "changedVars", "close", "setDataAsync", "getPlatform", "SFSObject", "onConnectionSuccess_8_9", "2111590FwWEiv", "BẢO TRÌ MÁY CHỦ!", "54414JamklE", "loginErrorCount", "username", "putUtfString", "player", "handleEntryPointData error", "onLogin", "getInt", "name", "maintenanceMsg", "appId", "connectionErrorCount", "\nFB Player ID: ", "disconnect", "variableUpdated", "send", "handlePromotion", "updateProfileInTheFirstLogin", "log", "prototype", "onConnectionSuccess", "data", "success", "undefined", "401875vwVVyu", "onConnectionSuccess_9_10", "mySelf", "key", "EXTENSION_RESPONSE", "CONNECTION", "DisconnectScreen", "handleEntryPointData", "366460SJDdAW", "profile.updateAsid", "Signal", "sfs", "enumerable", "indexOf", "params", "getUtfString", "dispatchEvent"];
		return (xt = function() {
			return t
		})()
	}

	function _t(t, e) {
		var n = xt();
		return (_t = function(t, e) {
			return n[t -= 279]
		})(t, e)
	}! function(t, e) {
		for (var n = _t, r = t();;) try {
			if (325883 == parseInt(n(345)) / 1 + -parseInt(n(321)) / 2 + parseInt(n(380)) / 3 * (-parseInt(n(353)) / 4) + parseInt(n(319)) / 5 + parseInt(n(366)) / 6 + parseInt(n(310)) / 7 * (-parseInt(n(413)) / 8) + -parseInt(n(388)) / 9 * (parseInt(n(404)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(xt);
	const Rt = function() {
		var t, e, n, r = _t;

		function i(t) {
			var e = _t;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(_t(379))
			})(this, i), this[e(356)] = t, this[e(356)][e(381)](SFS2X[e(292)][e(350)], this[e(406)], this), this[e(356)][e(381)](SFS2X[e(292)].CONNECTION_LOST, this.onConnectionLost, this), this[e(356)].addEventListener(SFS2X[e(292)].LOGIN, this[e(327)], this), this[e(356)].addEventListener(SFS2X.SFSEvent[e(412)], this[e(390)], this), this.sfs.addEventListener(SFS2X.SFSEvent.USER_VARIABLES_UPDATE, this.onUserVariablesUpdate, this), this.sfs.addEventListener(SFS2X[e(292)][e(349)], this[e(408)], this), this[e(295)] = new(Phaser[e(355)]), this.logged = !1, this[e(335)] = !1, this[e(299)] = !1, this[e(332)] = 0, this.loginErrorCount = 0
		}
		return t = i, n = _t, (e = [{
			key: r(300),
			value: function() {
				var t = r;
				this[t(395)] = (new Date)[t(377)](), this[t(304)] = void 0, this.sfs.connect(CyberInstance[t(405)], CyberInstance[t(400)])
			}
		}, {
			key: r(406),
			value: function(t) {
				var e = r,
					n = this;
				if (this[e(304)] = t[e(343)], this[e(304)]) this[e(322)] = 0, this[e(365)]();
				else {
					var i = 0 == this[e(332)] ? 100 : 1e3;
					setTimeout((function() {
						n.connect()
					}), i), this.connectionErrorCount++
				}
			}
		}, {
			key: r(365),
			value: function() {
				var t = r,
					e = new SFS2X.SFSObject;
				e[t(364)]("guserid", parseInt(CyberInstance[t(293)])), e.putUtfString(t(382), CyberInstance[t(401)]), e.putUtfString(t(283), this[t(316)]()), typeof FB_APP_ID != t(344) && e.putLong(t(331), FB_APP_ID), this.sfs[t(336)](new SFS2X.LoginRequest(CyberInstance.playerId, "", e, CyberInstance[t(370)]))
			}
		}, {
			key: r(376),
			value: function() {
				var t = r,
					e = this;
				if (this.connected = !1, this[t(311)] = !1, this[t(335)] = !1, this[t(372)](), CyberInstance.isHomeScreenStarted) {
					try {
						if (CyberGlobalData.spinWatched = !1, z.instance[t(314)](), Tt[t(309)][t(409)]) return
					} catch (e) {
						console[t(339)](e)
					}
					game[t(363)].start(t(351), !0, !1)
				} else {
					if (1 === this[t(385)]) return;
					setTimeout((function() {
						e.connect()
					}), 100)
				}
			}
		}, {
			key: r(327),
			value: function(t) {
				var e = r;
				if (yt.instance[e(301)](), et[e(309)].inited = !1, this[e(311)] = !0, t.user && t[e(362)][e(329)] && (CyberInstance[e(293)] = parseInt(t[e(362)].name)), CyberGlobalData.collectTime = t.data[e(328)](e(394)), CyberGlobalData[e(374)] = !!t[e(342)].containsKey(e(374)), this.initHeartBeat(), t[e(342)][e(368)](e(391)) && (CyberGlobalData[e(302)] = !1, this[e(352)]()), t.data[e(368)](e(386))) {
					var n = t[e(342)][e(290)](e(386));
					ft.instance[e(337)](n)
				}
				CyberGlobalData[e(399)] = t[e(342)].containsKey("roomId") ? t[e(342)].getInt(e(281)) : -1, this[e(356)][e(288)](!0, 2), this[e(332)] = 0, yt.instance.sendGetInfoRequest(), CyberInstance[e(396)][e(295)][e(410)](!0)
			}
		}, {
			key: r(297),
			value: function(t) {
				var e = r,
					n = this;
				t[e(362)][e(294)] && -1 != t[e(313)][e(358)](e(293)) && (CyberInstance.guserid = t[e(362)][e(389)](e(293))[e(411)], FBInstant[e(325)].setDataAsync({
					guserid: CyberInstance.guserid
				}), this[e(338)](), this.variableUpdated = !0, FBInstant[e(325)].getDataAsync([e(367)])[e(312)]((function(t) {
					var r = e;
					!t.asid && FBInstant[r(325)].getASIDAsync()[r(312)]((function(t) {
						var e = r,
							i = new(SFS2X[e(317)]);
						i[e(324)](e(367), t), n[e(356)][e(336)](new(SFS2X[e(289)])(e(354), i)), FBInstant[e(325)][e(315)]({
							asid: t
						})
					}))
				})))
			}
		}, {
			key: r(338),
			value: function() {
				var t = this,
					e = function() {
						var e = _t,
							n = t[e(356)][e(347)][e(389)](e(323)).value;
						if (n == FBInstant[e(325)][e(284)]()) {
							var r = new SFS2X.SFSObject;
							r[e(324)]("username", FBInstant[e(325)][e(378)]()), r[e(285)](e(282), u.getTimezoneOffset()), t[e(356)].send(new(SFS2X[e(289)])("profile.update", r))
						} else if (n != FBInstant[e(325)][e(378)]()) {
							var i = new(SFS2X[e(317)]);
							i[e(324)](e(323), FBInstant[e(325)][e(378)]()), t[e(356)][e(336)](new(SFS2X[e(289)])(e(371), i))
						}
						if ("assets/images/no_avatar.png" != CyberInstance[e(296)]) {
							var a = new(SFS2X[e(317)]);
							a[e(324)](e(296), CyberInstance.avatar), t[e(356)].send(new(SFS2X[e(289)])(e(307), a))
						}
					};
				if (globalStartGameAsyncResolved) e[r(298)](this);
				else var n = setInterval((function() {
					globalStartGameAsyncResolved && (clearInterval(n), e.call(t))
				}), 10)
			}
		}, {
			key: r(352),
			value: function() {
				var t = r;
				try {
					if (!this.entryPointDataHandled) {
						var e = FBInstant[t(280)]();
						if (e && e[t(293)]) {
							var n = new SFS2X.SFSObject;
							n[t(324)]("inviter", e[t(293)] + ""), this[t(356)][t(336)](new SFS2X.ExtensionRequest("fbinstant.invite", n)) && (this[t(299)] = !0)
						}
					}
				} catch (e) {
					console[t(339)](t(326), e)
				}
			}
		}, {
			key: r(408),
			value: function(t) {
				var e = r;
				try {
					t[e(373)] == e(385) && (this[e(385)] = 1, t[e(359)][e(368)](e(306)) ? this.maintenanceMsg = t[e(359)][e(360)](e(306)) : this[e(330)] = e(320))
				} catch (t) {
					console.log("onExtensionResponse exception: ", t)
				}
			}
		}, {
			key: r(390),
			value: function(t) {
				var e = r,
					n = this;
				if (t[e(303)] && t[e(303)] === e(305)) return this[e(385)] = 1, void(this[e(330)] = e(320));
				if (4 === t.errorCode) {
					this.maintenance = 1, this[e(330)] = "Tài khoản của bạn đã bị khóa";
					var i = parseInt(CyberInstance[e(293)]);
					return i > 0 && (this[e(330)] += "\nGame ID: " + i), void(this.maintenanceMsg += e(333) + CyberInstance[e(279)])
				}
				this[e(322)] < 4 && (this[e(322)]++, 1 == this.loginErrorCount && (CyberInstance[e(293)] = 0), setTimeout((function() {
					n[e(304)] && n.sendLoginRequest()
				}), 500))
			}
		}, {
			key: r(316),
			value: function() {
				var t = r,
					e = FBInstant[t(316)]();
				if (null == e || typeof e == t(344)) try {
					e = navigator ? navigator[t(398)] : t(393)
				} catch (t) {
					e = "UNDEF"
				}
				return e + ""
			}
		}, {
			key: r(334),
			value: function() {
				var t = r;
				this.sfs[t(334)]()
			}
		}, {
			key: r(403),
			value: function() {
				var t = r,
					e = (new Date)[t(377)]() - this[t(395)];
				t(341), e > 1e3 && e <= 2e3 ? t(286) : e > 2e3 && e <= 3e3 ? t(308) : e > 3e3 && e <= 4e3 ? t(384) : e > 4e3 && e <= 5e3 ? t(392) : e > 5e3 && e <= 6e3 || e > 6e3 && e <= 7e3 || (e > 7e3 && e <= 8e3 ? t(291) : e > 8e3 && e <= 9e3 ? t(318) : e > 9e3 && e <= 1e4 ? t(346) : e > 1e4 && t(369))
			}
		}, {
			key: r(402),
			value: function() {
				var t = r,
					e = this;
				this[t(372)](), CyberGlobalData.collectTime > _.GIFT_TIME - 60 && CyberGlobalData[t(394)] < _[t(287)] && (CyberGlobalData[t(394)] = _[t(287)] - 60), CyberGlobalData[t(394)] < _.GIFT_TIME && (this[t(383)] = setInterval((function() {
					var n = t;
					try {
						CyberGlobalData.collectTime < _[n(287)] ? CyberGlobalData[n(394)] = CyberGlobalData[n(394)] + 60 : e[n(372)](), p[n(361)](n(397), CyberGlobalData[n(394)])
					} catch (t) {
						console[n(339)](t)
					}
				}), 6e4))
			}
		}, {
			key: r(372),
			value: function() {
				var t = r;
				this.heartBeat && (clearInterval(this[t(383)]), this.heartBeat = null)
			}
		}]) && Pt(t[n(340)], e), Object[n(387)](t, n(340), {
			writable: !1
		}), i
	}();
	var jt = Dt;

	function Et(t) {
		var e = Dt;
		return (Et = "function" == typeof Symbol && e(243) == typeof Symbol[e(219)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(211) == typeof Symbol && t[n(210)] === Symbol && t !== Symbol[n(216)] ? n(243) : typeof t
		})(t)
	}

	function Bt(t, e) {
		for (var n = Dt, r = 0; r < e[n(213)]; r++) {
			var i = e[r];
			i[n(247)] = i[n(247)] || !1, i[n(253)] = !0, n(261) in i && (i[n(264)] = !0), Object[n(252)](t, i[n(259)], i)
		}
	}

	function At(t, e) {
		var n = Dt;
		return (At = Object[n(215)] ? Object.setPrototypeOf[n(228)]() : function(t, e) {
			return t[n(201)] = e, t
		})(t, e)
	}

	function Ft(t, e) {
		var n = Dt;
		if (e && ("object" === Et(e) || typeof e === n(211))) return e;
		if (void 0 !== e) throw new TypeError(n(241));
		return function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t)
	}

	function Dt(t, e) {
		var n = Nt();
		return (Dt = function(t, e) {
			return n[t -= 194]
		})(t, e)
	}

	function Nt() {
		var t = ["addIcon", "iterator", "apply", "addText", "Sprite", "1976ZGHphY", "dispatch", "events", "setTo", "Super expression must either be null or a function", "bind", "4815cjubLm", "construct", "anchor", "height", "2652924CyVEiJ", "#ffffff", "208621lRLtJS", "sprite", "disableAutoDispatchAllowed", "inputEnabled", "alpha", "valueOf", "Derived constructors may only return object or undefined", "playButtonSound", "symbol", "removeAll", "sham", "call", "enumerable", "add", "create", "onClick", "Text", "defineProperty", "configurable", "game", "undefined", "3385878TZfMEL", "onButtonClick", "5dBwaPJ", "key", "effectEnabled", "value", "sound", "isClickOnce", "writable", "disableTimeout", "disableButton", "getPrototypeOf", "soundEnabled", "9670xZXFOJ", "onInputDown", "click", "dispatchAllowed", "buttonText", "addChild", "__proto__", "scale", "22KObJCD", "Linear", "tween", "15092UFgIMf", "8853132tYSRBd", "2KwrDzS", "Signal", "constructor", "function", "visible", "length", "setText", "setPrototypeOf", "prototype", "171300EqAkAc"];
		return (Nt = function() {
			return t
		})()
	}

	function Gt(t) {
		var e = Dt;
		return (Gt = Object[e(215)] ? Object.getPrototypeOf[e(228)]() : function(t) {
			var n = e;
			return t[n(201)] || Object[n(267)](t)
		})(t)
	}! function(t, e) {
		for (var n = Dt, r = t();;) try {
			if (478248 == -parseInt(n(235)) / 1 * (-parseInt(n(208)) / 2) + -parseInt(n(217)) / 3 + -parseInt(n(233)) / 4 + -parseInt(n(258)) / 5 * (-parseInt(n(256)) / 6) + parseInt(n(206)) / 7 * (-parseInt(n(223)) / 8) + parseInt(n(229)) / 9 * (-parseInt(n(195)) / 10) + -parseInt(n(203)) / 11 * (-parseInt(n(207)) / 12)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Nt);
	const Lt = function(t) {
		var e = Dt;
		! function(t, e) {
			var n = Dt;
			if (typeof e !== n(211) && null !== e) throw new TypeError(n(227));
			t[n(216)] = Object[n(249)](e && e[n(216)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(252)](t, n(216), {
				writable: !1
			}), e && At(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Dt;
			if (typeof Reflect === t(255) || !Reflect[t(230)]) return !1;
			if (Reflect[t(230)][t(245)]) return !1;
			if (typeof Proxy === t(211)) return !0;
			try {
				return Boolean[t(216)][t(240)][t(246)](Reflect[t(230)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Dt,
				n = Gt(a);
			if (o) {
				var r = Gt(this)[e(210)];
				t = Reflect[e(230)](n, arguments, r)
			} else t = n[e(220)](this, arguments);
			return Ft(this, t)
		});

		function c(t, e, n, r, i) {
			var a, o = Dt;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), (a = s[o(246)](this, t, e, n, r, i))[o(194)] = !0, a[o(263)] = !1, a[o(260)] = !1, a.disableTimeout = !1, a.disableAutoDispatchAllowed = !1, a
		}
		return n = c, i = Dt, (r = [{
			key: e(221),
			value: function(t, n) {
				var r = e;
				if (this[r(199)]) n && this[r(199)].setStyle(n), this.buttonText[r(214)](t);
				else {
					var i = new(Phaser[r(251)])(this.game, this.width / 2, this[r(232)] / 2 + 2, t, typeof n != r(255) ? n : {
						font: APP_FONT,
						fill: r(234),
						fontWeight: 400,
						fontSize: 24
					});
					i[r(231)][r(226)](.5), this[r(200)](i), this[r(199)] = i, i[r(214)](t)
				}
			}
		}, {
			key: e(218),
			value: function(t, n) {
				var r = e,
					i = this[r(254)].make[r(236)](this.width / 2, this[r(232)] / 2, t, n);
				i.anchor[r(226)](.5), i[r(202)].setTo(.85), this[r(200)](i)
			}
		}, {
			key: e(257),
			value: function() {
				var t = e,
					n = this;
				this.soundEnabled && CyberInstance[t(262)][t(242)](), this[t(198)] && (this.dispatchAllowed = !1, this[t(250)][t(224)](this), this[t(263)] ? (this[t(238)] = !1, this[t(250)][t(244)](), this[t(250)] = null, this[t(225)][t(196)][t(244)]()) : this[t(265)] ? this.dispatchAllowed = !0 : !this[t(237)] && setTimeout((function() {
					n[t(198)] = !0
				}), 300))
			}
		}, {
			key: e(197),
			value: function(t, n) {
				var r = e;
				!this[r(250)] && (this[r(238)] = !0, this[r(198)] = !0, this[r(250)] = new(Phaser[r(209)]), this[r(250)][r(248)](t, n), this[r(225)][r(196)][r(248)](this[r(257)], this))
			}
		}, {
			key: "clickOnce",
			value: function(t, n) {
				var r = e;
				this[r(197)](t, n), this[r(263)] = !0
			}
		}, {
			key: "alphaButton",
			value: function() {
				var t = e;
				this.effectEnabled && .5 != this.alpha && this[t(254)].add[t(205)](this).to({
					alpha: .5
				}, 400, t(204), !0), this.inputEnabled = !1, this[t(212)] = !0
			}
		}, {
			key: e(266),
			value: function() {
				var t = e;
				this[t(260)] && 0 != this[t(239)] && this.game[t(248)].tween(this).to({
					alpha: 0
				}, 400, t(204), !0), this[t(238)] = !1, this.visible = !1
			}
		}, {
			key: "enableButton",
			value: function() {
				var t = e;
				this[t(260)] && this.alpha < 1 && this[t(254)].add.tween(this).to({
					alpha: 1
				}, 400, "Linear", !0), this[t(238)] = !0, this[t(212)] = !0
			}
		}]) && Bt(n[i(216)], r), Object.defineProperty(n, i(216), {
			writable: !1
		}), c
	}(Phaser[jt(222)]);

	function Mt(t) {
		var e = Ut;
		return (Mt = e(267) == typeof Symbol && "symbol" == typeof Symbol[e(263)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(267) == typeof Symbol && t[n(260)] === Symbol && t !== Symbol.prototype ? n(250) : typeof t
		})(t)
	}

	function Wt(t, e) {
		for (var n = Ut, r = 0; r < e.length; r++) {
			var i = e[r];
			i.enumerable = i.enumerable || !1, i[n(314)] = !0, n(310) in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function zt(t, e) {
		var n = Ut;
		return (zt = Object[n(279)] ? Object.setPrototypeOf[n(268)]() : function(t, e) {
			return t[n(242)] = e, t
		})(t, e)
	}

	function Ut(t, e) {
		var n = Vt();
		return (Ut = function(t, e) {
			return n[t -= 240]
		})(t, e)
	}

	function Vt() {
		var t = ["create", "sprite", "button_green_197x64", "NOT_ENOUGH_CHIP_TO_CONTINUE", "1801000NQWoCx", "6288198qwlkXv", "onInputDown", "button_close", "#ebdac0", "bg_popup_medium_484x292", "ready", "homeScreen", "lang", "close", "addCloseButton", "width", "value", "height", "addTitle", "add", "configurable", "prototype", "addText", "3862620YIyJgh", "text", "NHAN_QUA", "call", "center", "__proto__", "object", "addOnce", "anchor", "134CHACaf", "THONG_BAO", "construct", "show", "symbol", "11JIpFVP", "38722870miPIva", "undefined", "instance", "createTransition", "apply", "5308265vSQXqG", "addOverlay", "this hasn't been initialised - super() hasn't been called", "constructor", "closeButton", "Super expression must either be null or a function", "iterator", "1369383VEJYZg", "onWatchClick", "bold", "function", "bind", "sound", "18861sflgHu", "CLOSE", "valueOf", "make", "defineProperty", "normal", "4rPXrVu", "addContent", "getPrototypeOf", "setPrototypeOf", "toUpperCase", "setTextBounds", "buttonText", "middle", "game", "#f59eac", "ADS_NOT_READY", "addChild", "background", "addButton", "setTo", "sham", "54auJFkf", "rw_icon"];
		return (Vt = function() {
			return t
		})()
	}

	function Ht(t, e) {
		var n = Ut;
		if (e && (Mt(e) === n(243) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Ut(259));
			return t
		}(t)
	}

	function Xt(t) {
		var e = Ut;
		return (Xt = Object[e(279)] ? Object[e(278)][e(268)]() : function(t) {
			return t[e(242)] || Object.getPrototypeOf(t)
		})(t)
	}! function(t, e) {
		for (var n = Ut, r = t();;) try {
			if (725026 == parseInt(n(270)) / 1 * (parseInt(n(246)) / 2) + -parseInt(n(264)) / 3 * (parseInt(n(276)) / 4) + -parseInt(n(257)) / 5 + -parseInt(n(317)) / 6 + -parseInt(n(299)) / 7 + parseInt(n(298)) / 8 * (-parseInt(n(292)) / 9) + parseInt(n(252)) / 10 * (parseInt(n(251)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Vt);
	const qt = function(t) {
		var e = Ut;
		! function(t, e) {
			var n = Ut;
			if (typeof e !== n(267) && null !== e) throw new TypeError(n(262));
			t[n(315)] = Object[n(294)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, n(315), {
				writable: !1
			}), e && zt(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Ut;
			if (typeof Reflect === t(253) || !Reflect[t(248)]) return !1;
			if (Reflect[t(248)][t(291)]) return !1;
			if (typeof Proxy === t(267)) return !0;
			try {
				return Boolean[t(315)][t(272)][t(240)](Reflect[t(248)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Ut,
				n = Xt(a);
			if (o) {
				var r = Xt(this)[e(260)];
				t = Reflect[e(248)](n, arguments, r)
			} else t = n[e(256)](this, arguments);
			return Ht(this, t)
		});

		function c(t, e) {
			var n, r = Ut;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), (n = s[r(240)](this, t, e))[r(258)](), n.addBackground(r(305), r(303)), n[r(312)](), n.addContent(CyberInstance.lang[r(297)]), n[r(289)](e), n[r(308)](), n[r(255)](), n
		}
		return n = c, i = Ut, (r = [{
			key: e(289),
			value: function() {
				var t = e,
					n = new Lt(this[t(284)], 0, 0, t(305), t(296));
				n.x = this[t(288)][t(309)] / 2 - n[t(309)] / 2, n.y = this.background.height - n[t(311)] - 30, n[t(316)](CyberInstance[t(306)][t(319)]), this[t(288)][t(287)](n), n[t(282)][t(245)][t(290)](0, .5);
				var r = this[t(284)][t(273)][t(295)](10, 10, t(305), t(293));
				n[t(287)](r), n[t(282)].x = r.x + r[t(309)] + 10, n.click(this[t(265)], this)
			}
		}, {
			key: e(265),
			value: function() {
				var t = e;
				Tt[t(254)][t(304)] ? Tt[t(254)][t(249)](Tt.OUT_OFF_MONEY_POSITION) : new G(game, {
					text: CyberInstance[t(306)][t(286)],
					buttonText: CyberInstance[t(306)][t(271)],
					hideCloseButton: !0
				}), this[t(307)]()
			}
		}, {
			key: e(277),
			value: function(t) {
				var n = e,
					r = this[n(284)][n(313)][n(318)](30, 70, t, {
						font: APP_FONT,
						fontSize: 24,
						fill: n(285),
						fontWeight: n(275),
						wordWrap: !0,
						wordWrapWidth: this.background[n(309)] - 60,
						align: n(241),
						boundsAlignH: n(241),
						boundsAlignV: n(283)
					});
				r[n(281)](0, 0, this[n(288)][n(309)] - 60, 100), this.background[n(287)](r)
			}
		}, {
			key: "addTitle",
			value: function() {
				var t = e,
					n = this[t(284)].add.text(this.background[t(309)] / 2, 15, CyberInstance[t(306)][t(247)][t(280)](), {
						font: APP_FONT,
						fontSize: 30,
						fill: t(302),
						fontWeight: t(266)
					});
				n[t(245)].setTo(.5, 0), this[t(288)][t(287)](n)
			}
		}, {
			key: e(308),
			value: function() {
				var t = e,
					n = this,
					r = this[t(284)][t(273)][t(295)](0, 0, t(305), t(301));
				r.x = this[t(288)][t(309)] - r.width / 2 - 10, r.y = -12, r.inputEnabled = !0, r.events[t(300)][t(244)]((function() {
					var e = t;
					CyberInstance[e(269)].playButtonSound(), n[e(307)]()
				}), this), this.closeButton = r, this[t(288)][t(287)](this[t(261)])
			}
		}]) && Wt(n.prototype, r), Object[i(274)](n, i(315), {
			writable: !1
		}), c
	}(P);

	function Kt(t, e) {
		for (var n = Jt, r = 0; r < e[n(376)]; r++) {
			var i = e[r];
			i.enumerable = i[n(356)] || !1, i[n(354)] = !0, n(364) in i && (i[n(337)] = !0), Object[n(342)](t, i.key, i)
		}
	}

	function Yt() {
		var t = ["ExtensionRequest", "prototype", "adInstance", "then", "3075023NHBqlD", "socket", "configurable", "4NKZUeH", "enumerable", "114222KQCGbi", "128347WkAbnk", "show", "adEnabled", "75630ivEXHp", "interids", "init", "value", "log", "send", "862640kRoKkU", "isRewared", "load", "handleAdsNoFill", "dispatch", "1889235RXzeas", "loadNormalInterstitial error", "blocked", "350530dETedB", "length", "getTime", "catch", "toISOString", "showAsync", "handleLoadError", "setDataAsync", "88fSoufM", "getInterstitialAdAsync", "inited", "ads.rewardedInterstitial", "interstitialCounter", "lastShowingTime", "loadAsync", "split", "player", "interstitialDate", "writable", "16AAwujk", "co the nhan dc inter rewarded", "36pOOpcy", "ready", "defineProperty", "instance", "maxShow", "onShow", "loading", "loadNormalInterstitial"];
		return (Yt = function() {
			return t
		})()
	}

	function Jt(t, e) {
		var n = Yt();
		return (Jt = function(t, e) {
			return n[t -= 337]
		})(t, e)
	}! function(t, e) {
		for (var n = Jt, r = t();;) try {
			if (233206 == parseInt(n(358)) / 1 + -parseInt(n(338)) / 2 * (-parseInt(n(357)) / 3) + parseInt(n(355)) / 4 * (parseInt(n(372)) / 5) + parseInt(n(361)) / 6 + -parseInt(n(352)) / 7 + -parseInt(n(367)) / 8 * (parseInt(n(340)) / 9) + parseInt(n(375)) / 10 * (parseInt(n(383)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Yt);
	var Qt = null;
	const Zt = function() {
		var t, e, n, r, i = Jt;

		function a() {
			var t = Jt;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			})(this, a), this[t(385)] = !1, this[t(350)] = null, this.ready = !1, this[t(368)] = !1, this[t(346)] = !1, this[t(374)] = !1, this[t(387)] = 0, this[t(388)] = 0, this.maxShow = 60, this.onShow = new Phaser.Signal
		}
		return t = a, e = [{
			key: i(363),
			value: function() {
				var t = i,
					e = this;
				0 != CyberInstance[t(362)][t(376)] && 0 != CyberInstance[t(360)] && (this[t(385)] ? this[t(369)]() : FBInstant.player.getDataAsync(["interstitialDate", t(387), t(388)])[t(351)]((function(n) {
					var r, i, a = t;
					if (!e[a(385)]) {
						e[a(385)] = !0, e[a(392)] = (r = Jt, i = new Date, new Date(i[r(377)]() - 6e4 * i.getTimezoneOffset())[r(379)]()[r(390)]("T")[0]);
						var o = !1;
						n[a(388)] && (e[a(388)] = parseInt(n[a(388)])), n.interstitialDate ? (n[a(387)] && (e.interstitialCounter = parseInt(n[a(387)])), n[a(392)] != e.interstitialDate && (e.interstitialCounter = 0, o = !0)) : o = !0, o && FBInstant[a(391)][a(382)]({
							interstitialDate: e[a(392)],
							interstitialCounter: e[a(387)]
						}), e[a(369)]()
					}
				})).catch((function() {
					setTimeout((function() {
						var t = Jt;
						a[t(343)][t(363)]()
					}), 5e3)
				})))
			}
		}, {
			key: i(369),
			value: function() {
				var t = i;
				this.interstitialCounter >= this[t(344)] || !this.ready && !this.loading && (this.loading = !0, this[t(347)]())
			}
		}, {
			key: "loadNormalInterstitial",
			value: function() {
				var t = i,
					e = this;
				FBInstant[t(384)](CyberInstance.interids[0])[t(351)]((function(n) {
					var r = t;
					return e[r(350)] = n, e[r(350)][r(389)]()
				}))[t(351)]((function() {
					var n = t;
					e[n(346)] = !1, e[n(341)] = !0
				}))[t(378)]((function(n) {
					var r = t;
					e.handleLoadError(n, 2), console[r(365)](r(373), n)
				}))
			}
		}, {
			key: i(381),
			value: function(t, e) {
				var n = this;
				setTimeout((function() {
					null != n[Jt(350)] && n.handleAdsNoFill(e)
				}), 3e4)
			}
		}, {
			key: i(370),
			value: function(t) {
				var e = i,
					n = this;
				t > 3 ? this[e(374)] = !0 : this.adInstance[e(389)]().then((function() {
					var t = e;
					n[t(346)] = !1, n[t(341)] = !0
				})).catch((function(r) {
					n[e(381)](r, t + 1)
				}))
			}
		}, {
			key: "canShow",
			value: function() {
				var t = i;
				return !(this[t(387)] >= this[t(344)]) && this[t(341)]
			}
		}, {
			key: i(359),
			value: function() {
				var t = i,
					e = this;
				this[t(387)] >= this[t(344)] || this[t(341)] && this[t(350)][t(380)]().then((function() {
					var n = t;
					e.onShow.dispatch(), e[n(350)] = null, e[n(341)] = !1, e[n(387)] = e[n(387)] + 1, e.lastShowingTime = (new Date)[n(377)](), FBInstant.player[n(382)]({
						interstitialCounter: e[n(387)],
						lastShowingTime: e.lastShowingTime
					}), e.isRewared && (CyberInstance[n(353)][n(366)](new(SFS2X[n(348)])(n(386))), e[n(368)] = !1, console[n(365)](n(339)))
				}))[t(378)]((function(n) {
					var r = t;
					e[r(345)][r(371)](), e.adInstance = null, e[r(341)] = !1, e[r(368)] && (e[r(368)] = !1, e[r(387)] = e.interstitialCounter + 1, e[r(388)] = (new Date)[r(377)](), FBInstant[r(391)].setDataAsync({
						interstitialCounter: e[r(387)],
						lastShowingTime: e[r(388)]
					}))
				}))
			}
		}], n = [{
			key: i(343),
			get: function() {
				return Qt || (Qt = new a), Qt
			}
		}], r = Jt, e && Kt(t[r(349)], e), n && Kt(t, n), Object.defineProperty(t, r(349), {
			writable: !1
		}), a
	}();

	function $t(t, e) {
		for (var n = te, r = 0; r < e[n(512)]; r++) {
			var i = e[r];
			i[n(431)] = i[n(431)] || !1, i[n(448)] = !0, n(513) in i && (i[n(488)] = !0), Object[n(474)](t, i[n(497)], i)
		}
	}

	function te(t, e) {
		var n = re();
		return (te = function(t, e) {
			return n[t -= 430]
		})(t, e)
	}! function(t, e) {
		for (var n = te, r = t();;) try {
			if (443647 == parseInt(n(506)) / 1 * (-parseInt(n(430)) / 2) + parseInt(n(469)) / 3 + -parseInt(n(458)) / 4 * (parseInt(n(461)) / 5) + parseInt(n(510)) / 6 + -parseInt(n(475)) / 7 * (-parseInt(n(511)) / 8) + -parseInt(n(443)) / 9 + parseInt(n(450)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(re);
	var ee = null;
	const ne = function() {
		var t, e, n, r, i = te;

		function o() {
			! function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, o)
		}
		return t = o, e = [{
			key: i(508),
			value: function(t) {
				var e = i;
				!this[e(454)] && (this[e(454)] = t, this[e(454)][e(478)](SFS2X.SFSEvent[e(449)], this[e(434)], this), this[e(454)].addEventListener(SFS2X.SFSEvent[e(486)], this.onUserExitRoom, this), Zt.instance[e(437)][e(432)](this[e(437)], this))
			}
		}, {
			key: i(434),
			value: function() {
				var t = i;
				Zt[t(462)][t(507)]()
			}
		}, {
			key: i(441),
			value: function(t) {
				var e = i;
				t.user[e(440)] && this[e(473)]()
			}
		}, {
			key: i(437),
			value: function() {
				this[i(464)]()
			}
		}, {
			key: i(473),
			value: function() {
				var t = i;
				!0 === CyberGlobalData[t(433)] && Zt[t(462)][t(439)]() ? (CyberGlobalData[t(433)] = !1, Zt[t(462)][t(492)]()) : this[t(464)]()
			}
		}, {
			key: "showTournamentShare",
			value: function() {
				var t = i,
					e = this,
					n = yt[t(462)];
				n[t(477)] && n[t(451)] ? (n[t(451)] = !1, n[t(495)] > 0 ? FBInstant[t(482)][t(466)]({
					score: n.score,
					data: {
						guserid: CyberInstance.guserid
					}
				}).then((function() {
					e[t(468)]()
				}))[t(485)]((function() {
					e[t(468)]()
				})) : FBInstant[t(482)][t(466)]({
					data: {
						guserid: CyberInstance[t(487)]
					}
				}).then((function() {
					e[t(468)]()
				}))[t(485)]((function() {
					e.showCreateShortcutAsync()
				}))) : this[t(468)]()
			}
		}, {
			key: i(468),
			value: function() {
				var t = i;
				FBInstant[t(484)]().then((function(e) {
					var n = t;
					console[n(455)](n(484), e), e && FBInstant.createShortcutAsync()[n(465)]((function() {
						var t = n;
						console[t(455)](t(479))
					}))[n(485)]((function(t) {
						console.log(t)
					}))
				}))[t(485)]((function(e) {
					console[t(455)](e)
				}))
			}
		}, {
			key: i(460),
			value: function(t) {
				var e = i,
					n = typeof t == e(445) || null == t ? _[e(515)] : t;
				return this[e(514)]() >= n * CyberInstance[e(438)]
			}
		}, {
			key: i(491),
			value: function() {
				var t = i,
					e = this;
				o[t(447)]((function() {
					var n = t;
					e[n(454)][n(476)](new SFS2X.ExtensionRequest(n(467)))
				}))
			}
		}, {
			key: i(459),
			value: function(t) {
				var e = i,
					n = this;
				o[e(447)]((function() {
					var r = e;
					try {
						var i = new(SFS2X[r(457)]);
						i.putInt(r(505), parseInt(t)), n[r(454)][r(476)](new SFS2X.ExtensionRequest("joinGame", i))
					} catch (t) {
						console[r(455)](r(502), t)
					}
				}))
			}
		}, {
			key: "resumeRoom",
			value: function(t) {
				var e = i,
					n = this;
				o[e(447)]((function() {
					var r = e;
					try {
						var i = new SFS2X.SFSObject;
						i[r(470)](r(505), parseInt(t)), n[r(454)].send(new SFS2X.ExtensionRequest(r(483), i))
					} catch (t) {
						console[r(455)](r(481), t)
					}
				}))
			}
		}, {
			key: i(472),
			value: function(t, e) {
				var n = i,
					r = this;
				o[n(447)]((function() {
					var i = n,
						a = new(SFS2X[i(457)]);
					a.putInt(i(505), t), a[i(446)](i(499), !0), a[i(446)](i(463), e), r[i(454)][i(476)](new SFS2X.ExtensionRequest("joinGame", a))
				}))
			}
		}, {
			key: i(489),
			value: function() {
				var t = i;
				this[t(454)][t(476)](new SFS2X.ExtensionRequest(t(444)))
			}
		}, {
			key: i(514),
			value: function() {
				var t = i;
				try {
					return this[t(454)].mySelf.getVariable(t(509))[t(513)]
				} catch (t) {
					return 0
				}
			}
		}, {
			key: i(498),
			value: function() {
				var t = i;
				try {
					return this[t(454)][t(516)][t(471)]
				} catch (e) {
					return CyberInstance[t(487)] + ""
				}
			}
		}, {
			key: "getExp",
			value: function() {
				var t = i;
				try {
					return this.sfs[t(516)][t(501)]("exp")[t(513)]
				} catch (t) {
					return 0
				}
			}
		}, {
			key: "getLevel",
			value: function() {
				var t = i;
				try {
					return this[t(454)].mySelf[t(501)](t(503)).value
				} catch (t) {
					return 1
				}
			}
		}, {
			key: i(480),
			value: function() {
				var t = i;
				try {
					return this[t(454)][t(516)][t(501)](t(442))[t(513)]
				} catch (t) {
					return ""
				}
			}
		}, {
			key: i(496),
			value: function() {
				var t = i;
				try {
					return this[t(454)][t(516)][t(490)](t(452)) ? this.sfs[t(516)][t(501)](t(452)).value : 0
				} catch (t) {
					return 0
				}
			}
		}, {
			key: "sfs",
			get: function() {
				return this[i(504)]
			},
			set: function(t) {
				this[i(504)] = t
			}
		}], n = [{
			key: i(462),
			get: function() {
				return ee || (ee = new o), ee
			}
		}, {
			key: i(447),
			value: function(t) {
				var e = i;
				if (a.isGameReady()) t();
				else {
					var n = game[e(435)][e(494)](!0);
					n[e(436)](100, (function() {
						var r = e;
						a[r(500)]() && (n[r(493)](), n.destroy(), t())
					}), this), n[e(453)]()
				}
			}
		}], r = te, e && $t(t[r(456)], e), n && $t(t, n), Object.defineProperty(t, r(456), {
			writable: !1
		}), o
	}();

	function re() {
		var t = ["GameController.joinRoom", "level", "_sfs", "roomId", "702257srforg", "init", "initialize", "coin", "4173420vnvfku", "88VeweWQ", "length", "value", "getCoin", "MIN_BET", "mySelf", "2vxkCRm", "enumerable", "add", "interstitialShowingAllowed", "onRoomJoin", "time", "loop", "onShow", "miniumMoneyCondition", "canShow", "isItMe", "onUserExitRoom", "username", "3767517uBmBLo", "gift.outOfMoney", "undefined", "putBool", "sendRequest", "configurable", "ROOM_JOIN", "5274330igwanx", "canShare", "avatarId", "start", "sfs", "log", "prototype", "SFSObject", "28xioAgP", "joinRoom", "canPlay", "102240uKnrid", "instance", "slient", "showTournamentShare", "then", "shareAsync", "findGame", "showCreateShortcutAsync", "821241mMahJJ", "putInt", "name", "joinPrivateRoom", "showInterstitial", "defineProperty", "134211zojICt", "send", "joined", "addEventListener", "createShortcutAsync DONE", "getDisplayName", "GameController.resumeGame", "tournament", "resumeGame", "canCreateShortcutAsync", "catch", "USER_EXIT_ROOM", "guserid", "writable", "collectFreeChip", "containsVariable", "sendFindGameRequest", "show", "stop", "create", "score", "getAvatarItemId", "key", "getGuserid", "friendMode", "isGameReady", "getVariable"];
		return (re = function() {
			return t
		})()
	}
	var ie = oe;

	function ae(t) {
		var e = oe;
		return (ae = e(503) == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && e(503) == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function oe(t, e) {
		var n = he();
		return (oe = function(t, e) {
			return n[t -= 431]
		})(t, e)
	}

	function se(t, e) {
		for (var n = oe, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(489)] = i[n(489)] || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function ce(t, e) {
		var n = oe;
		return (ce = Object[n(448)] ? Object[n(448)][n(490)]() : function(t, e) {
			return t[n(505)] = e, t
		})(t, e)
	}

	function ue(t, e) {
		var n = oe;
		if (e && (ae(e) === n(484) || typeof e === n(503))) return e;
		if (void 0 !== e) throw new TypeError(n(431));
		return function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t)
	}

	function he() {
		var t = ["sham", "89848SXzpQY", "#FFFFFF", "9xAuXTh", "outOfMoney", "_controller", "call", "13800KXkPLD", "advancedTiming", "image", "handleOutOfMoney", "close", "onInputDown", "debug", "time", "366006hxobwI", "3827579uGBvEh", "3842536WVzVkS", "height", "shutdown", "object", "104rnDZUg", "ready", "12IsKdQK", "loadingPopup", "enumerable", "bind", "text", "apply", "addOverlay", "events", "setGameSize", "prototype", "scale", "getPrototypeOf", "closeOverlay", "840398IjcfeZ", "Cannot call a class as a function", "undefined", "function", "860GXYQOJ", "__proto__", "game", "notEnoughMoneyPopup", "instance", "Derived constructors may only return object or undefined", "showContainer", "open", "constructor", "add", "ceil", "layout", "openLoadingPopup", "width", "alpha", "collectFreeChip", "defineProperty", "roundPixels", "innerWidth", "inputEnabled", "overlayTexture", "739623yAgMjZ", "setPrototypeOf", "valueOf", "1NriJfo", "create", "_screenReady", "State", "construct", "Super expression must either be null or a function", "render", "fps", "canPlay", "screenReady", "20hahDBV", "overlay", "closeLoadingPopup", "devEnabled"];
		return (he = function() {
			return t
		})()
	}

	function fe(t) {
		var e = oe;
		return (fe = Object[e(448)] ? Object[e(498)][e(490)]() : function(t) {
			var n = e;
			return t[n(505)] || Object[n(498)](t)
		})(t)
	}! function(t, e) {
		for (var n = oe, r = t();;) try {
			if (551348 == -parseInt(n(450)) / 1 * (-parseInt(n(500)) / 2) + parseInt(n(447)) / 3 * (-parseInt(n(487)) / 4) + -parseInt(n(460)) / 5 * (-parseInt(n(479)) / 6) + -parseInt(n(480)) / 7 + -parseInt(n(481)) / 8 * (-parseInt(n(467)) / 9) + parseInt(n(504)) / 10 * (parseInt(n(465)) / 11) + -parseInt(n(471)) / 12 * (parseInt(n(485)) / 13)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(he);
	const le = function(t) {
		var e = oe;
		! function(t, e) {
			var n = oe;
			if ("function" != typeof e && null !== e) throw new TypeError(n(455));
			t[n(496)] = Object[n(451)](e && e[n(496)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(442)](t, n(496), {
				writable: !1
			}), e && ce(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = oe;
			if (typeof Reflect === t(502) || !Reflect.construct) return !1;
			if (Reflect[t(454)][t(464)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(496)][t(449)][t(470)](Reflect[t(454)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = oe,
				n = fe(a);
			if (o) {
				var r = fe(this)[e(434)];
				t = Reflect[e(454)](n, arguments, r)
			} else t = n[e(492)](this, arguments);
			return ue(this, t)
		});

		function c() {
			var t = oe;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(oe(501))
			}(this, c), s[t(470)](this)
		}
		return n = c, i = oe, (r = [{
			key: "hideContainer",
			value: function() {}
		}, {
			key: e(432),
			value: function() {}
		}, {
			key: "init",
			value: function() {
				var t = e;
				this[t(506)].renderer.renderSession[t(443)] = !0, this[t(459)] = !1, CyberInstance[t(463)] && (this[t(506)][t(478)][t(472)] = !0)
			}
		}, {
			key: e(456),
			value: function() {
				var t = e;
				CyberInstance[t(463)] && this[t(506)][t(477)][t(491)](this.game[t(478)][t(457)] || "--", 50, 100, t(466))
			}
		}, {
			key: e(483),
			value: function() {
				var t = e;
				this.screenReady = !1, this.overlay && (this[t(461)] = null)
			}
		}, {
			key: e(437),
			value: function() {
				var t = e,
					n = 1136,
					r = window[t(444)] / window.innerHeight;
				if (r > 1.775) {
					var i = Math.min(1920, Math[t(436)](640 * r));
					this.game[t(497)][t(495)](i, 640)
				} else if (r < 1.775) {
					var a = Math.min(750, Math[t(436)](n / r));
					this.game[t(497)][t(495)](n, a)
				} else this[t(506)][t(497)][t(495)](n, 640)
			}
		}, {
			key: e(474),
			value: function() {
				var t = e;
				if (!0 === CyberInstance[t(468)]) {
					CyberInstance.setOutOfMoney(!1);
					var n = !1;
					ne.instance[t(458)]() ? n = !0 : "vn" == CyberInstance.langCode ? (this[t(438)]({
						closeTimer: 1e4
					}), ne[t(508)][t(441)]()) : n = !0, n && Tt[t(508)][t(486)] && Tt[t(508)].extraCounter < 5 && (this[t(507)] = new qt(this[t(506)]))
				}
			}
		}, {
			key: e(438),
			value: function(t) {
				var n = e;
				this[n(488)] && this[n(462)](), this.loadingPopup = new b(this[n(506)], t), this.loadingPopup[n(433)]()
			}
		}, {
			key: e(462),
			value: function() {
				var t = e;
				this[t(488)] && (this.loadingPopup[t(475)](), this.loadingPopup = null)
			}
		}, {
			key: e(493),
			value: function(t, n) {
				var r = e;
				if (!this[r(461)]) {
					var i = this[r(506)][r(435)][r(473)](0, 0, CyberGlobalData[r(446)]);
					i[r(445)] = !0, i[r(494)][r(476)].addOnce(t, n), i.width = this[r(506)][r(439)], i[r(482)] = this[r(506)][r(482)], i[r(440)] = .5, this[r(461)] = i
				}
			}
		}, {
			key: e(499),
			value: function() {
				var t = e;
				this[t(461)] && (this[t(461)].destroy(), this[t(461)] = null)
			}
		}, {
			key: "controller",
			get: function() {
				return this._controller
			},
			set: function(t) {
				this[e(469)] = t
			}
		}, {
			key: "screenReady",
			get: function() {
				return this[e(452)]
			},
			set: function(t) {
				this._screenReady = t
			}
		}]) && se(n.prototype, r), Object[i(442)](n, i(496), {
			writable: !1
		}), c
	}(Phaser[ie(453)]);

	function pe(t) {
		var e = me;
		return (pe = e(202) == typeof Symbol && e(171) == typeof Symbol[e(149)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(202) == typeof Symbol && t[n(206)] === Symbol && t !== Symbol[n(166)] ? n(171) : typeof t
		})(t)
	}

	function ye(t, e) {
		for (var n = me, r = 0; r < e[n(214)]; r++) {
			var i = e[r];
			i[n(179)] = i[n(179)] || !1, i[n(169)] = !0, n(160) in i && (i[n(197)] = !0), Object[n(148)](t, i[n(205)], i)
		}
	}

	function de() {
		var t = ["make", "width", "4349712ofTceU", "normal", "undefined", "44595976cfFmcS", "middle", "height", "object", "writable", "construct", "#ebdac0", "addContent", "7PlJGEQ", "function", "ADS_NOT_READY", "setTo", "key", "constructor", "2810584temNBr", "addChild", "Super expression must either be null or a function", "text", "create", "close", "onInputDown", "length", "show", "background", "toUpperCase", "lang", "homeScreen", "game", "addBackground", "setPrototypeOf", "call", "defineProperty", "iterator", "playButtonSound", "addCloseButton", "addOnce", "apply", "addOverlay", "Cannot call a class as a function", "events", "add", "center", "bg_popup_medium_484x292", "value", "createTransition", "sprite", "button_close", "sound", "THONG_BAO", "prototype", "closeButton", "button_green_197x64", "configurable", "inputEnabled", "symbol", "78820ANQvGA", "anchor", "6660990OTLmxI", "#f59eac", "addButton", "setTextBounds", "1416339mtPhOT", "enumerable", "instance", "2949775ZEZHOa", "buttonText", "valueOf", "bind", "addTitle", "getPrototypeOf", "click"];
		return (de = function() {
			return t
		})()
	}

	function ve(t, e) {
		var n = me;
		return (ve = Object.setPrototypeOf ? Object[n(146)][n(184)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function be(t, e) {
		var n = me;
		if (e && (pe(e) === n(196) || typeof e === n(202))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t)
	}

	function ge(t) {
		var e = me;
		return (ge = Object.setPrototypeOf ? Object[e(186)].bind() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(186)](t)
		})(t)
	}

	function me(t, e) {
		var n = de();
		return (me = function(t, e) {
			return n[t -= 142]
		})(t, e)
	}! function(t, e) {
		for (var n = me, r = t();;) try {
			if (988364 == parseInt(n(172)) / 1 + -parseInt(n(207)) / 2 + -parseInt(n(178)) / 3 + -parseInt(n(190)) / 4 + -parseInt(n(181)) / 5 + -parseInt(n(174)) / 6 + parseInt(n(201)) / 7 * (parseInt(n(193)) / 8)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(de);
	const Ie = function(t) {
		var e = me;
		! function(t, e) {
			var n = me;
			if (typeof e !== n(202) && null !== e) throw new TypeError(n(209));
			t[n(166)] = Object[n(211)](e && e[n(166)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(148)](t, n(166), {
				writable: !1
			}), e && ve(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = me;
			if (typeof Reflect === t(192) || !Reflect[t(198)]) return !1;
			if (Reflect[t(198)].sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(166)][t(183)][t(147)](Reflect[t(198)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = me,
				n = ge(a);
			if (o) {
				var r = ge(this)[e(206)];
				t = Reflect[e(198)](n, arguments, r)
			} else t = n[e(153)](this, arguments);
			return be(this, t)
		});

		function c(t, e) {
			var n, r = me;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(me(155))
			}(this, c), (n = s[r(147)](this, t, e))[r(154)](), n[r(145)](r(143), r(159)), n[r(185)](), n.addContent(CyberInstance[r(142)].NOT_ENOUGH_CHIP_TO_CONTINUE2), n.addButton(e), n.addCloseButton(), n[r(161)](), n
		}
		return n = c, i = me, (r = [{
			key: e(176),
			value: function() {
				var t = e,
					n = new Lt(this.game, 0, 0, t(143), t(168));
				n.x = this[t(216)][t(189)] / 2 - n[t(189)] / 2, n.y = this[t(216)].height - n[t(195)] - 30, n.addText(CyberInstance.lang.NHAN_QUA), this[t(216)].addChild(n), n[t(182)][t(173)].setTo(0, .5);
				var r = this[t(144)][t(188)][t(162)](10, 10, t(143), "rw_icon");
				n.addChild(r), r.x = 10, n[t(182)].x = r.x + r.width + 10, n[t(187)](this.onWatchClick, this)
			}
		}, {
			key: "onWatchClick",
			value: function() {
				var t = e;
				Tt[t(180)].ready ? Tt[t(180)][t(215)](Tt.OUT_OFF_MONEY_POSITION) : new G(game, {
					text: CyberInstance.lang[t(203)],
					buttonText: CyberInstance[t(142)].CLOSE,
					hideCloseButton: !0
				}), this[t(212)]()
			}
		}, {
			key: e(200),
			value: function(t) {
				var n = e,
					r = this[n(144)][n(157)][n(210)](30, 70, t, {
						font: APP_FONT,
						fontSize: 24,
						fill: n(175),
						fontWeight: n(191),
						wordWrap: !0,
						wordWrapWidth: this.background[n(189)] - 60,
						align: n(158),
						boundsAlignH: n(158),
						boundsAlignV: n(194)
					});
				r[n(177)](0, 0, this[n(216)].width - 60, 100), this[n(216)][n(208)](r)
			}
		}, {
			key: e(185),
			value: function() {
				var t = e,
					n = this[t(144)][t(157)][t(210)](this[t(216)][t(189)] / 2, 15, CyberInstance[t(142)][t(165)][t(217)](), {
						font: APP_FONT,
						fontSize: 30,
						fill: t(199),
						fontWeight: "bold"
					});
				n.anchor[t(204)](.5, 0), this[t(216)][t(208)](n)
			}
		}, {
			key: e(151),
			value: function() {
				var t = e,
					n = this,
					r = this[t(144)].make.sprite(0, 0, "homeScreen", t(163));
				r.x = this[t(216)][t(189)] - r[t(189)] / 2 - 10, r.y = -12, r[t(170)] = !0, r[t(156)][t(213)][t(152)]((function() {
					var e = t;
					CyberInstance[e(164)][e(150)](), n[e(212)]()
				}), this), this[t(167)] = r, this[t(216)][t(208)](this[t(167)])
			}
		}]) && ye(n[i(166)], r), Object[i(148)](n, i(166), {
			writable: !1
		}), c
	}(P);

	function we(t) {
		var e = Pe;
		return (we = "function" == typeof Symbol && "symbol" == typeof Symbol[e(339)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(363)] ? "symbol" : typeof t
		})(t)
	}

	function Se(t, e) {
		for (var n = Pe, r = 0; r < e[n(314)]; r++) {
			var i = e[r];
			i[n(368)] = i[n(368)] || !1, i[n(373)] = !0, "value" in i && (i[n(327)] = !0), Object[n(387)](t, i[n(333)], i)
		}
	}

	function ke(t, e) {
		var n = Pe;
		return (ke = Object[n(346)] ? Object[n(346)][n(316)]() : function(t, e) {
			return t[n(336)] = e, t
		})(t, e)
	}

	function Oe(t, e) {
		var n = Pe;
		if (e && (we(e) === n(324) || typeof e === n(356))) return e;
		if (void 0 !== e) throw new TypeError(n(352));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Pe(318));
			return t
		}(t)
	}

	function Ce(t) {
		var e = Pe;
		return (Ce = Object[e(346)] ? Object[e(370)][e(316)]() : function(t) {
			var n = e;
			return t[n(336)] || Object[n(370)](t)
		})(t)
	}

	function Te() {
		var t = ["5IzGRRg", "ready", "configurable", "3994529uphmWD", "75180jlhCGx", "CLOSE", "bold", "addTitle", "width", "valueOf", "close", "onWatchClick", "setTo", "addContent", "addChild", "button_close", "defineProperty", "formatCoinWithCommas", "background", "apply", "#fbc610", "make", "addCloseButton", "inputEnabled", "state", "8zqNVaz", "game", "sound", "click", "21rEIcgr", "YOU_GOT_FREE_CHIP", "sprite", "addText", "center", "718efBYhx", "homeScreen", "YOU_CAN_GET_MORE_CHIP", "length", "addColor", "bind", "NHAN_QUA", "this hasn't been initialised - super() hasn't been called", "call", "#ffffff", "lang", "1815200TgyMxF", "263155FiQCkT", "object", "addOverlay", "text", "writable", "Cannot call a class as a function", "create", "bg_popup_medium_484x292", "ADS_NOT_READY", "sentCount", "key", "normal", "#ebdac0", "__proto__", "setTextBounds", "6ckIBCc", "iterator", "2286549CHkpPS", "replace", "height", "THONG_BAO", "add", "extraCounter", "setPrototypeOf", "createTransition", "instance", " Chip", "addBackground", "langCode", "Derived constructors may only return object or undefined", "sham", "closeButton", "210539UcHFaj", "function", "Super expression must either be null or a function", "events", "openIAP", "anchor", "addOnce", "addButton", "prototype", "toUpperCase", "constructor", "#f59eac", "button_green_197x64", "enumerable", "construct", "getPrototypeOf"];
		return (Te = function() {
			return t
		})()
	}

	function Pe(t, e) {
		var n = Te();
		return (Pe = function(t, e) {
			return n[t -= 301]
		})(t, e)
	}! function(t, e) {
		for (var n = Pe, r = t();;) try {
			if (204508 == parseInt(n(323)) / 1 + parseInt(n(311)) / 2 * (parseInt(n(306)) / 3) + -parseInt(n(375)) / 4 * (parseInt(n(371)) / 5) + -parseInt(n(338)) / 6 * (-parseInt(n(355)) / 7) + parseInt(n(302)) / 8 * (-parseInt(n(340)) / 9) + -parseInt(n(322)) / 10 + parseInt(n(374)) / 11) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Te);
	const xe = function(t) {
		var e = Pe;
		! function(t, e) {
			var n = Pe;
			if (typeof e !== n(356) && null !== e) throw new TypeError(n(357));
			t[n(363)] = Object[n(329)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(387)](t, n(363), {
				writable: !1
			}), e && ke(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Pe;
			if ("undefined" == typeof Reflect || !Reflect[t(369)]) return !1;
			if (Reflect[t(369)][t(353)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(363)][t(380)].call(Reflect[t(369)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Pe,
				n = Ce(a);
			if (o) {
				var r = Ce(this)[e(365)];
				t = Reflect[e(369)](n, arguments, r)
			} else t = n[e(390)](this, arguments);
			return Oe(this, t)
		});

		function c(t, e) {
			var n, r = Pe;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Pe(328))
			})(this, c), (n = s[r(319)](this, t, e))[r(325)](), n[r(350)]("homeScreen", r(330)), n[r(378)]();
			var i = CyberInstance.lang[r(307)][r(341)]("%s", u[r(388)](e.coin) + r(349));
			return n[r(384)](i[r(341)]("%s", 5 - e[r(332)])), n[r(362)](e), n[r(393)](), n[r(347)](), n
		}
		return n = c, i = Pe, (r = [{
			key: "addButton",
			value: function() {
				var t = Pe,
					e = new Lt(this.game, 0, 0, "homeScreen", t(367));
				e.x = this[t(389)][t(379)] / 2 - e[t(379)] / 2, e.y = this[t(389)][t(342)] - e[t(342)] - 30, e[t(309)](CyberInstance[t(321)][t(317)]), e[t(305)](this[t(382)], this), this.background[t(385)](e)
			}
		}, {
			key: e(382),
			value: function() {
				var t = e;
				Tt[t(348)][t(372)] ? Tt.instance[t(372)] && Tt.instance[t(345)] < 5 ? new Ie(game) : game[t(301)].getCurrentState()[t(359)]() : new G(game, {
					text: CyberInstance[t(321)][t(331)],
					buttonText: CyberInstance[t(321)][t(376)],
					hideCloseButton: !0
				}), this.close()
			}
		}, {
			key: e(384),
			value: function(t) {
				var n = e,
					r = this[n(303)][n(392)][n(326)](30, 70, t, {
						font: APP_FONT,
						fontSize: 22,
						fill: n(366),
						fontWeight: n(334),
						wordWrap: !0,
						wordWrapWidth: this[n(389)][n(379)] - 60,
						align: n(310)
					});
				r[n(337)](0, 0, this[n(389)][n(379)] - 60, 100), "vn" == CyberInstance[n(351)] && (r[n(315)](n(391), 16), r[n(315)]("#f59eac", 29), r[n(315)]("#fbc610", 75)), this.background[n(385)](r);
				var i = this.game.make.text(this[n(389)].width / 2, 160, CyberInstance.lang[n(313)], {
					font: APP_FONT,
					fontSize: 20,
					fill: n(320),
					fontWeight: n(334)
				});
				i[n(360)][n(383)](.5, 0), this.background[n(385)](i)
			}
		}, {
			key: e(378),
			value: function() {
				var t = e,
					n = this[t(303)][t(344)][t(326)](this[t(389)].width / 2, 15, CyberInstance[t(321)][t(343)][t(364)](), {
						font: APP_FONT,
						fontSize: 30,
						fill: t(335),
						fontWeight: t(377)
					});
				n[t(360)][t(383)](.5, 0), this[t(389)][t(385)](n)
			}
		}, {
			key: "addCloseButton",
			value: function() {
				var t = e,
					n = this,
					r = this.game[t(392)][t(308)](0, 0, t(312), t(386));
				r.x = this.background[t(379)] - r.width / 2 - 10, r.y = -12, r[t(394)] = !0, r[t(358)].onInputDown[t(361)]((function() {
					var e = t;
					CyberInstance[e(304)].playButtonSound(), n[e(381)]()
				}), this), this[t(354)] = r, this[t(389)][t(385)](this[t(354)])
			}
		}]) && Se(n.prototype, r), Object[i(387)](n, "prototype", {
			writable: !1
		}), c
	}(P);

	function _e(t, e) {
		for (var n = je, r = 0; r < e[n(384)]; r++) {
			var i = e[r];
			i.enumerable = i[n(310)] || !1, i[n(315)] = !0, n(340) in i && (i[n(324)] = !0), Object[n(402)](t, i[n(411)], i)
		}
	}

	function Re() {
		var t = ["formatCoinWithCommas", "dailyDays", "dailyGift.getInfo", "onMessage", "canRetry", "handleReconnect", "gift.outOfMoney", "spinWatched", "handleJoinGameError", "connector", "changedVars", "EXTENSION_RESPONSE", "entryPointDataProcessed", "HomeScreenController", "length", "showNotEnoughMoneyToJoin", "sfs", "bottomMenuView", "params", "code", "2849nKWjqc", "SFSObject", "type", "isItMe", "indexOf", "putUtfString", "level", "socket", "YOU_GOT_CHIP", "updateAvatarItem", "slient", "resetDailyPopup", "defineProperty", "openLoadingPopup", "getVariable", "lang", "collected", "onReward", "ads.rewarded", "replace", "joinPrivateRoom", "key", "addProfileCoin", "getInt", "Homescreencontroller.addProfileCoin", "USER_VARIABLES_UPDATE", "36584BrrjIx", "closeLoadingPopup", "signal", "ROOM_NOT_FOUND", "success", "showChatBadge", "lastJoinedRoomId", "log", "dailyGift.collect", "avatarId", "screenReady", "openIAP", "isEntryPointData", "CLOSE", "containsKey", "shortenLargeNumber", "coin", "autoConnect", "bet", "61590jnTQtX", "giftcode", "refreshSpinTime", "sentCount", "getCoin", "WATCH_VIDEO_SUCCESS", "ROOM_FULL", "updateSpinTimer", "openDailyPopup", "profileView", "78zfVRhi", "getLong", "screen", "enumerable", "Cannot call a class as a function", "putBool", "detail", "5Jyluuu", "configurable", "addEventListener", "onAdReady", "OUT_OFF_MONEY_POSITION", "cmd", "days", "SFSEvent", "handleUpdateChip", "ExtensionRequest", "writable", "ads", "onUserVariablesUpdate", "extraCounter", "resumeGameError", "dispatchEvent", "onReady", "dailyAutoShowEnabled", "onExtensionResponse", "DAILY_POSITION", "handleSpin", "luckywheels.spin", "onAdReward", "1586475pBDuZc", "2823678ccBdQX", "ready", "value", "3530cuYmWa", "user", "updateCoin", "iapView", "2835836oJNHnI", "openSpinPopup", "getBool", "collectTime", "add", "noplay1day", "canPlay", "instance", "ads.rewardedInterstitial", "SPIN_POSITION", "resumeRoom", "send", "updateVideoBadge", "dailyCollected", "updateLevel", "1190mHlCmR", "freeChip", "roomId", "updateProgressBar", "gift.code", "joinGame", "prototype", "exp", "handleOutOfMoney", "1756536GukwxC"];
		return (Re = function() {
			return t
		})()
	}

	function je(t, e) {
		var n = Re();
		return (je = function(t, e) {
			return n[t -= 293]
		})(t, e)
	}! function(t, e) {
		for (var n = je, r = t();;) try {
			if (390639 == -parseInt(n(307)) / 1 * (parseInt(n(341)) / 2) + -parseInt(n(337)) / 3 + -parseInt(n(345)) / 4 + parseInt(n(314)) / 5 * (-parseInt(n(369)) / 6) + -parseInt(n(360)) / 7 * (-parseInt(n(416)) / 8) + -parseInt(n(338)) / 9 + parseInt(n(297)) / 10 * (parseInt(n(390)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Re);
	const Ee = function() {
		var t, e, n, r = je;

		function i(t) {
			var e = je;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(je(311))
			})(this, i), this.controllerName = e(383), this.screen = t, this[e(386)] = CyberInstance[e(397)], this[e(386)][e(316)](SFS2X[e(321)][e(381)], this.onExtensionResponse, this), this[e(386)][e(316)](SFS2X[e(321)][e(415)], this[e(326)], this), CyberInstance.connector[e(418)].add(this.autoConnect, this), Tt[e(352)][e(407)].add(this.onAdReward, this), Tt.instance[e(330)][e(349)](this[e(317)], this), addEventListener(e(299), this[e(299)].bind(this)), addEventListener(e(412), this[e(412)].bind(this))
		}
		return t = i, n = je, (e = [{
			key: r(295),
			value: function(t) {
				var e = r;
				this.screenReady() && (t ? (this[e(309)][e(417)](), Tt[e(352)][e(375)]()) : (CyberInstance[e(379)].connect(), this[e(309)][e(403)]()))
			}
		}, {
			key: r(373),
			value: function() {
				var t = r;
				this.screenReady() && this[t(309)].bottomMenuView[t(421)]()
			}
		}, {
			key: r(332),
			value: function(t) {
				var e = r;
				if (this[e(426)]())
					if (t[e(319)] == e(335)) this[e(334)](t[e(388)]);
					else if (t[e(319)] == e(365)) 0 == t[e(388)][e(347)](e(420)) && this[e(378)](t[e(388)]);
				else if ("findGame" == t.cmd) this.screen.closeLoadingPopup(), 1 === t[e(388)][e(413)]("errorCode") && this.screen[e(427)]();
				else if (t[e(319)] == e(361)) this[e(322)](t[e(388)]);
				else if (t[e(319)] == e(376)) this.handleOutOfMoney(t[e(388)]);
				else if (t[e(319)] == e(328)) this.handleResumeGameError(t[e(388)]);
				else if ("dailyGift.getInfo" == t[e(319)]) CyberGlobalData[e(371)] = t.params[e(413)](e(320)), CyberGlobalData.dailyCollected = t[e(388)][e(347)](e(406)), !CyberGlobalData[e(358)] && CyberGlobalData[e(331)] && this[e(309)][e(387)][e(305)]();
				else if (t[e(319)] == e(424)) {
					if (this[e(309)][e(387)][e(401)](), t[e(388)][e(347)](e(420))) {
						CyberGlobalData[e(358)] = !0;
						var n = t[e(388)][e(308)](e(294));
						new G(game, {
							text: CyberInstance[e(405)].YOU_GOT_CHIP[e(409)]("%s", u[e(293)](n)),
							buttonText: CyberInstance[e(405)][e(429)],
							hideCloseButton: !0
						})
					}
				} else if (t[e(319)] == e(353)) {
					var i = t[e(388)][e(308)](e(294));
					new G(game, {
						text: CyberInstance[e(405)][e(398)][e(409)]("%s", u.shortenLargeNumber(i)),
						buttonText: CyberInstance[e(405)].CLOSE,
						hideCloseButton: !0
					})
				}
			}
		}, {
			key: "handleResumeGameError",
			value: function(t) {
				var e = r;
				if (t[e(430)](e(374))) {
					var n = t.getInt(e(362));
					ne[e(352)][e(355)](n)
				} else this[e(309)].closeLoadingPopup()
			}
		}, {
			key: r(334),
			value: function(t) {
				var e = r;
				t[e(430)]("ad") ? (CyberGlobalData.spinWatched = !1, Tt[e(352)].increaseSpinCounter()) : (CyberGlobalData.collectTime = 0, CyberInstance[e(379)].initHeartBeat()), p[e(329)](e(299), CyberGlobalData[e(348)]), this[e(309)][e(387)].spin({
					value: t.getInt(e(340)),
					coin: t[e(308)](e(294)),
					days: t[e(413)](e(320))
				})
			}
		}, {
			key: "handleJoinGameError",
			value: function(t) {
				var e = r;
				this.screen.closeLoadingPopup();
				var n = t[e(413)]("errorCode");
				if (t[e(430)](e(296))) 0 == n ? G[e(385)](t.getLong(e(296))) : 2 == n && new G(game, {
					text: CyberInstance[e(405)][e(303)],
					buttonText: CyberInstance[e(405)][e(429)]
				});
				else {
					var i = !!t[e(430)](e(400)) && t[e(347)](e(400));
					15 == n && !i && new G(game, {
						text: CyberInstance[e(405)][e(419)],
						buttonText: CyberInstance[e(405)][e(429)]
					})
				}
			}
		}, {
			key: r(326),
			value: function(t) {
				var e = r;
				this[e(426)]() && t[e(342)][e(393)] && (-1 != t[e(380)][e(394)](e(367)) && this[e(309)][e(306)][e(363)](t.user.getVariable(e(367))[e(340)], t[e(342)][e(404)](e(396))[e(340)]), -1 != t.changedVars[e(394)]("level") && this[e(309)].profileView[e(359)](t[e(342)][e(404)](e(396))[e(340)]), -1 != t[e(380)][e(394)](e(294)) && this.screen[e(344)][e(343)](t[e(342)].getVariable(e(294))[e(340)]), -1 != t[e(380)].indexOf(e(425)) && this[e(309)][e(306)][e(399)](t[e(342)].getVariable(e(425))[e(340)]))
			}
		}, {
			key: r(299),
			value: function(t) {
				var e = r;
				this[e(426)]() && (t.detail && t.detail[e(340)] ? this[e(309)][e(387)][e(304)](t.detail[e(340)]) : this[e(309)][e(387)][e(304)](0))
			}
		}, {
			key: "addProfileCoin",
			value: function(t) {
				var e = r;
				if (this.screenReady() && t.detail && t[e(313)][e(340)]) try {
					this.screen[e(344)][e(343)](ne.instance[e(301)]() + t[e(313)].value), new G(game, {
						text: CyberInstance[e(405)][e(398)][e(409)]("%s", u[e(293)](t.detail[e(340)])),
						buttonText: CyberInstance[e(405)][e(429)],
						hideCloseButton: !0
					})
				} catch (t) {
					console[e(423)](e(414), t)
				}
			}
		}, {
			key: "handleScreenReady",
			value: function() {
				var t = r;
				if (!this[t(382)]) {
					var e = FBInstant.getEntryPointData();
					if (e)
						if (e.friendMode && e[t(362)] && e[t(296)]) {
							var n = parseInt(e[t(296)]),
								i = parseInt(e[t(362)]);
							ne[t(352)][t(351)](n) && (ne[t(352)][t(410)](i, !0), CyberGlobalData[t(331)] = !1)
						} else if (e[t(392)] === t(350)) {
						var a = new SFS2X.SFSObject;
						e.coin ? a.putLong("coin", parseInt(e[t(294)])) : a.putLong("coin", 1e6), this.sfs[t(356)](new(SFS2X[t(323)])("gift.freeChip", a)), CyberGlobalData[t(331)] = !1
					} else if (e[t(298)]) try {
						var o = e[t(298)] + "";
						if (o[t(384)] >= 8) {
							var s = new(SFS2X[t(391)]);
							s[t(395)](t(389), o), s[t(312)](t(428), !0), this[t(386)][t(356)](new(SFS2X[t(323)])(t(364), s)), CyberGlobalData[t(331)] = !1
						}
					} catch (t) {}
					this[t(382)] = !0
				} - 1 == CyberGlobalData[t(371)] && this[t(386)][t(356)](new(SFS2X[t(323)])(t(372))), -1 != CyberGlobalData[t(422)] && (this[t(309)].openLoadingPopup(), setTimeout((function() {
					var e = t;
					ne[e(352)][e(355)](CyberGlobalData[e(422)])
				}), 300))
			}
		}, {
			key: r(322),
			value: function(t) {
				var e = r;
				if (t[e(430)](e(294))) try {
					this[e(309)][e(417)](), this.screen[e(344)][e(343)](t[e(308)]("total")), new G(game, {
						text: CyberInstance[e(405)].YOU_GOT_CHIP[e(409)]("%s", u.shortenLargeNumber(t.getLong("coin"))),
						buttonText: CyberInstance[e(405)].CLOSE,
						hideCloseButton: !0
					})
				} catch (t) {
					console.log("Homescreencontroller.handleUpdateChip", t)
				} else t.containsKey(e(420)) && this.screen[e(417)]()
			}
		}, {
			key: r(368),
			value: function(t) {
				var e = r;
				this.screen[e(417)](), t[e(430)](e(294)) && t.containsKey(e(300)) ? new xe(game, {
					coin: t[e(413)]("coin"),
					sentCount: t[e(413)]("sentCount")
				}) : Tt[e(352)][e(339)] && Tt[e(352)][e(327)] < 5 && (this.screen.notEnoughMoneyPopup = new qt(game))
			}
		}, {
			key: r(336),
			value: function(t) {
				var e = r;
				if (t[e(294)]) this[e(386)][e(356)](new SFS2X.ExtensionRequest(e(408))), new G(game, {
					text: CyberInstance[e(405)][e(302)][e(409)]("%s", u[e(370)](t[e(294)])),
					buttonText: CyberInstance[e(405)].CLOSE,
					hideCloseButton: !0
				});
				else if (t.type == Tt[e(354)]) CyberGlobalData[e(377)] = !0, this[e(426)]() && this[e(309)].bottomMenuView[e(346)]();
				else if (t[e(392)] == Tt[e(318)]) this.sfs[e(356)](new(SFS2X[e(323)])("ads.rewardedExtra")), new G(game, {
					text: CyberInstance[e(405)][e(302)][e(409)]("%s", u[e(370)](1e5)),
					buttonText: CyberInstance[e(405)][e(429)],
					hideCloseButton: !0
				});
				else if (t.type == Tt[e(333)]) {
					var n = new(SFS2X[e(391)]);
					n[e(312)](e(325), !0), this[e(386)][e(356)](new(SFS2X[e(323)])(e(424), n))
				}
			}
		}, {
			key: "onAdReady",
			value: function() {
				var t = r;
				this[t(426)]() && this[t(309)][t(387)][t(357)]()
			}
		}, {
			key: r(426),
			value: function() {
				var t = r;
				return this[t(309)][t(426)]
			}
		}]) && _e(t[n(366)], e), Object[n(402)](t, n(366), {
			writable: !1
		}), i
	}();

	function Be() {
		var t = ["632943nslBDn", "destroy", "bitmapData", "visible", "shopScreen", "image", "onFileComplete", "loadTexture", "value", "height", "76ITkods", "canvas", "homeScreen", "setText", "avatarKey", "game", "alphaMask", "326412yeAYlQ", "maskHeight", "500", "text", "level", "updateAvatarItem", "container", "writable", "3550431nQtQQb", "width", "add", "configurable", "setTo", "1129500HdCDyv", "getLevel", "progressBar", "player", "applyTexture", "level_bar_bg", "enumerable", "136ZraiwV", "create", "length", "Rectangle", "checkImageKey", "icon_star", "time", "#FFFFFF", "updateProgressBar", "defineProperty", "hasLoaded", "maskWidth", "avatarItem", "avatar", "instance", "Cannot call a class as a function", "getAvatarItemId", "10051422hcsGJs", "key", "scale", "convertExpToPercent", "load", "getExp", "cache", "make", "no_avatar", "crop", "start", "remove", "47555GtuwHq", "9875572yWZQKT", "level_bar_inner", "events", "prototype", "state"];
		return (Be = function() {
			return t
		})()
	}

	function Ae(t, e) {
		var n = Be();
		return (Ae = function(t, e) {
			return n[t -= 286]
		})(t, e)
	}

	function Fe(t, e) {
		for (var n = Ae, r = 0; r < e[n(293)]; r++) {
			var i = e[r];
			i[n(290)] = i[n(290)] || !1, i[n(354)] = !0, n(334) in i && (i[n(350)] = !0), Object[n(300)](t, i[n(309)], i)
		}
	}! function(t, e) {
		for (var n = Ae, r = t();;) try {
			if (859638 == parseInt(n(356)) / 1 + parseInt(n(343)) / 2 + -parseInt(n(351)) / 3 + parseInt(n(336)) / 4 * (-parseInt(n(320)) / 5) + -parseInt(n(308)) / 6 + parseInt(n(321)) / 7 + parseInt(n(291)) / 8 * (parseInt(n(326)) / 9)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Be);
	const De = function() {
		var t, e, n, r = Ae;

		function i(t) {
			var e = Ae;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Ae(306))
			})(this, i), this[e(325)] = t, this[e(341)] = t[e(341)], this.container = t[e(349)], this[e(340)] = e(304) + ne[e(305)].getGuserid(), this[e(341)][e(314)][e(295)](this[e(340)]) ? (this[e(304)] = this.game[e(315)][e(331)](15, 15, this[e(340)]), this.applyTexture()) : (this.avatar = this[e(341)][e(315)].image(15, 15, e(338), "no_avatar"), this[e(304)].width = 70, this[e(304)][e(335)] = 70, globalStartGameAsyncResolved && (this[e(301)] = !0, this[e(341)][e(312)][e(332)].add(this[e(332)], this), this[e(341)][e(312)].image(this[e(340)], CyberInstance.avatar), this[e(341)][e(312)][e(318)]())), this[e(349)][e(353)](this[e(304)]), this.avatarItem = this[e(341)][e(315)][e(331)](50, 50, e(338), e(316)), this[e(303)].anchor[e(355)](.5), this[e(303)][e(329)] = !1, this[e(349)][e(353)](this[e(303)]);
			var n = ne[e(305)][e(307)]();
			n > 0 && this[e(341)][e(314)].checkImageKey("shopScreen") && (this[e(303)][e(333)](e(330), e(304) + n), this[e(303)][e(310)][e(355)](.83), this.avatarItem[e(329)] = !0);
			var r = this[e(341)].add[e(346)](this[e(304)].x + this[e(304)][e(352)] + 25, 18, "", {
				font: APP_FONT,
				fontSize: 20,
				fill: e(298),
				fontWeight: "500"
			});
			this[e(349)][e(353)](r), r[e(339)](FBInstant[e(287)].getName());
			var a = this[e(349)][e(292)](r.x, 55, "homeScreen", e(296)),
				o = this.game[e(353)].text(a.x + a[e(352)] + 5, a.y - 4, ne[e(305)].getLevel(), {
					font: APP_FONT,
					fontSize: 20,
					fill: e(298),
					fontWeight: e(345)
				});
			this[e(349)][e(353)](o), this[e(347)] = o, o[e(339)](ne.instance[e(357)]());
			var s = this[e(349)][e(292)](o.x + o[e(337)][e(352)] + 10, a.y + 3, e(338), e(289));
			this[e(286)] = this[e(349)][e(292)](s.x + 1, s.y + 1, e(338), e(322)), this[e(302)] = this[e(286)][e(352)], this[e(344)] = this[e(286)][e(335)], this[e(299)](ne.instance[e(313)](), ne.instance.getLevel())
		}
		return t = i, n = Ae, (e = [{
			key: "updateProgressBar",
			value: function(t, e) {
				var n = Ae,
					r = u[n(311)](t, e),
					i = new(Phaser[n(294)])(0, 0, this[n(302)] / 100 * r, this[n(344)]);
				this.progressBar[n(317)](i)
			}
		}, {
			key: "updateLevel",
			value: function(t) {
				this.level.setText(t)
			}
		}, {
			key: r(332),
			value: function(t, e, n) {
				n && e == this[r(340)] && this.applyTexture()
			}
		}, {
			key: "updateAvatarItem",
			value: function(t) {
				var e = r,
					n = this;
				t > 0 && (this[e(341)][e(314)][e(295)](e(330)) ? (this[e(303)][e(333)](e(330), e(304) + t), this[e(303)].scale[e(355)](.83), this[e(303)][e(329)] = !0) : this[e(341)][e(297)][e(323)][e(353)](2e3, (function() {
					n[e(348)](t)
				})))
			}
		}, {
			key: r(288),
			value: function() {
				var t = r,
					e = 70,
					n = new(Phaser[t(294)])(0, 0, e, e),
					i = game[t(315)][t(331)](0, 0, t(338), t(316));
				i[t(352)] = e, i.height = e;
				var a = game[t(315)][t(328)]();
				a.load(i), i[t(327)]();
				var o = this[t(341)].make.bitmapData(e, e);
				o[t(342)](this[t(340)], a, n), this[t(304)][t(333)](o), this[t(304)].width = e, this[t(304)][t(335)] = e
			}
		}, {
			key: r(327),
			value: function() {
				var t = r;
				!0 === this.hasLoaded && this[t(341)][t(312)][t(332)][t(319)](this.onFileComplete, this), this[t(304)] = null, this[t(286)] = null, this.level = null
			}
		}]) && Fe(t[n(324)], e), Object.defineProperty(t, n(324), {
			writable: !1
		}), i
	}();

	function Ne(t) {
		var e = Le;
		return (Ne = "function" == typeof Symbol && e(166) == typeof Symbol[e(148)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(183)] === Symbol && t !== Symbol.prototype ? n(166) : typeof t
		})(t)
	}

	function Ge(t, e) {
		for (var n = Le, r = 0; r < e[n(181)]; r++) {
			var i = e[r];
			i[n(168)] = i[n(168)] || !1, i[n(135)] = !0, "value" in i && (i[n(138)] = !0), Object[n(145)](t, i[n(162)], i)
		}
	}

	function Le(t, e) {
		var n = Ve();
		return (Le = function(t, e) {
			return n[t -= 121]
		})(t, e)
	}

	function Me(t, e) {
		var n = Le;
		return (Me = Object[n(172)] ? Object.setPrototypeOf.bind() : function(t, e) {
			return t[n(158)] = e, t
		})(t, e)
	}

	function We(t, e) {
		var n = Le;
		if (e && ("object" === Ne(e) || typeof e === n(143))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return ze(t)
	}

	function ze(t) {
		if (void 0 === t) throw new ReferenceError(Le(132));
		return t
	}

	function Ue(t) {
		var e = Le;
		return (Ue = Object[e(172)] ? Object.getPrototypeOf[e(170)]() : function(t) {
			var n = e;
			return t[n(158)] || Object[n(139)](t)
		})(t)
	}

	function Ve() {
		var t = ["function", "construct", "defineProperty", "setTo", "7ueGtXM", "iterator", "7900806tniwns", "anchor", "game", "SHOP", "value", "create", "undefined", "homeScreen", "socket", "__proto__", "#f5c78a", "openIAPPopup", "prototype", "key", "7280343kxbXUS", "updateCoin", "100oqIfGl", "symbol", "getVariable", "enumerable", "addChild", "bind", "inited", "setPrototypeOf", "31544pIStFM", "make", "image", "110vcsNXn", "1703383zxyNMi", "width", "formatCoinWithCommas", "button_inapp", "length", "43278DZzAUS", "constructor", "button_inappv2", "onAdReward", "state", "#FFFFFF", "iapPopup", "existing", "Super expression must either be null or a function", "click", "call", "valueOf", "20tGoQrf", "apply", "this hasn't been initialised - super() hasn't been called", "Cannot call a class as a function", "text", "configurable", "675870XJqcsQ", "chip", "writable", "getPrototypeOf", "isConnected", "langCode", "2240200nDroBW"];
		return (Ve = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = Le, r = t();;) try {
			if (688484 == parseInt(n(173)) / 1 + parseInt(n(165)) / 2 * (-parseInt(n(182)) / 3) + parseInt(n(130)) / 4 * (parseInt(n(136)) / 5) + -parseInt(n(149)) / 6 * (-parseInt(n(147)) / 7) + parseInt(n(142)) / 8 + parseInt(n(163)) / 9 + -parseInt(n(176)) / 10 * (parseInt(n(177)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ve);
	const He = function(t) {
		var e = Le;
		! function(t, e) {
			var n = Le;
			if ("function" != typeof e && null !== e) throw new TypeError(n(126));
			t.prototype = Object[n(154)](e && e[n(161)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(145)](t, n(161), {
				writable: !1
			}), e && Me(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Le;
			if (typeof Reflect === t(155) || !Reflect.construct) return !1;
			if (Reflect[t(144)].sham) return !1;
			if (typeof Proxy === t(143)) return !0;
			try {
				return Boolean[t(161)][t(129)].call(Reflect[t(144)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Le,
				n = Ue(a);
			if (o) {
				var r = Ue(this)[e(183)];
				t = Reflect[e(144)](n, arguments, r)
			} else t = n[e(131)](this, arguments);
			return We(this, t)
		});

		function c(t) {
			var e, n = Le;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Le(133))
			})(this, c), (e = s[n(128)](this, t[n(151)], 0, 15, n(156), "icon_chip_large"))[n(151)].add[n(125)](ze(e)), e.x = e[n(151)].width / 2 - e[n(178)] / 2, e[n(127)](e[n(160)], ze(e));
			var r = e[n(151)][n(174)][n(175)](0, 19, n(156), "vn" == CyberInstance[n(141)] ? n(184) : n(180));
			r.x = 2 - r.width, e[n(169)](r);
			var i = e.game[n(174)][n(134)](r.width / 2, 2, "vn" == CyberInstance.langCode ? "CỬA HÀNG" : n(152), {
				font: APP_FONT,
				fontSize: 20,
				fill: n(123),
				fontWeight: 400
			});
			if (i[n(150)][n(146)](.5, 0), r[n(169)](i), i.setText("vn" == CyberInstance[n(141)] ? "CỬA HÀNG" : n(152)), e[n(137)] = e[n(151)][n(174)][n(134)](e[n(178)] + 10, 21, "", {
					font: APP_FONT,
					fontSize: 19,
					fill: n(159),
					fontWeight: 400
				}), e.addChild(e[n(137)]), CyberInstance[n(157)][n(140)]) {
				var a = CyberInstance[n(157)].mySelf[n(167)]("coin")[n(153)];
				e[n(164)](u[n(179)](a))
			}
			return e
		}
		return n = c, i = Le, (r = [{
			key: "openIAPPopup",
			value: function() {
				var t = Le;
				et.instance[t(171)] && this[t(151)][t(122)].start("ShopScreen", !0, !1)
			}
		}, {
			key: e(164),
			value: function(t) {
				var n = e;
				this[n(137)].setText(u.formatCoinWithCommas(t)), this[n(124)] && this[n(124)][n(164)](t)
			}
		}, {
			key: e(121),
			value: function(t) {
				var n = e;
				this[n(124)] && this[n(124)][n(121)](t)
			}
		}]) && Ge(n[i(161)], r), Object.defineProperty(n, i(161), {
			writable: !1
		}), c
	}(Lt);

	function Xe(t, e) {
		var n = Ke();
		return (Xe = function(t, e) {
			return n[t -= 494]
		})(t, e)
	}

	function qe(t) {
		var e = Xe;
		return (qe = "function" == typeof Symbol && "symbol" == typeof Symbol[e(503)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(522) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(536)] ? n(504) : typeof t
		})(t)
	}

	function Ke() {
		var t = ["checkIMg", "apply", "204hMucxC", "atlas", "sham", "190xHpaku", "configurable", "setPrototypeOf", "add", "call", "events", "8281286VAEUyw", "function", "sound", "inputEnabled", "dispatch", "this hasn't been initialised - super() hasn't been called", "disableClick", "enumerable", "1716iXfucA", "allowClick", "getPrototypeOf", "value", "checked", "valueOf", "construct", "prototype", "frameName", "loadTexture", "undefined", "134595gESwrQ", "onCheck", "bind", "1132spAQpg", "32510dtJTSe", "defineProperty", "uncheckImg", "onChange", "51TMTvmE", "818528EHHEty", "onInputDown", "constructor", "Signal", "__proto__", "Derived constructors may only return object or undefined", "iterator", "symbol", "59804YNScmK", "15983puMCUx", "writable", "746MobjyG", "49CBPVnR"];
		return (Ke = function() {
			return t
		})()
	}

	function Ye(t, e) {
		for (var n = Xe, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(528)] = i.enumerable || !1, i[n(516)] = !0, n(532) in i && (i[n(507)] = !0), Object[n(545)](t, i.key, i)
		}
	}

	function Je(t, e) {
		var n = Xe;
		return (Je = Object[n(517)] ? Object[n(517)][n(542)]() : function(t, e) {
			return t[n(501)] = e, t
		})(t, e)
	}

	function Qe(t, e) {
		var n = Xe;
		if (e && ("object" === qe(e) || typeof e === n(522))) return e;
		if (void 0 !== e) throw new TypeError(n(502));
		return Ze(t)
	}

	function Ze(t) {
		if (void 0 === t) throw new ReferenceError(Xe(526));
		return t
	}

	function $e(t) {
		var e = Xe;
		return ($e = Object[e(517)] ? Object[e(531)][e(542)]() : function(t) {
			var n = e;
			return t[n(501)] || Object[n(531)](t)
		})(t)
	}! function(t, e) {
		for (var n = Xe, r = t();;) try {
			if (359735 == -parseInt(n(508)) / 1 * (-parseInt(n(543)) / 2) + -parseInt(n(496)) / 3 * (parseInt(n(505)) / 4) + parseInt(n(544)) / 5 * (-parseInt(n(512)) / 6) + parseInt(n(509)) / 7 * (-parseInt(n(497)) / 8) + -parseInt(n(540)) / 9 * (-parseInt(n(515)) / 10) + -parseInt(n(506)) / 11 * (-parseInt(n(529)) / 12) + parseInt(n(521)) / 13) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ke);
	const tn = function(t) {
		var e = Xe;
		! function(t, e) {
			var n = Xe;
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(536)] = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(545)](t, n(536), {
				writable: !1
			}), e && Je(t, e)
		}(s, t);
		var n, r, i, a, o = (i = s, a = function() {
			var t = Xe;
			if (typeof Reflect === t(539) || !Reflect[t(535)]) return !1;
			if (Reflect[t(535)][t(514)]) return !1;
			if (typeof Proxy === t(522)) return !0;
			try {
				return Boolean[t(536)][t(534)][t(519)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Xe,
				n = $e(i);
			if (a) {
				var r = $e(this)[e(499)];
				t = Reflect[e(535)](n, arguments, r)
			} else t = n[e(511)](this, arguments);
			return Qe(this, t)
		});

		function s(t, e, n, r, i, a) {
			var c, u = Xe;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, s), (c = o[u(519)](this, t, e, n, r, i))[u(513)] = r, c[u(510)] = i, c[u(494)] = a, c[u(524)] = !0, c[u(520)][u(498)][u(518)](c[u(541)], Ze(c)), c[u(495)] = new(Phaser[u(500)]), c[u(530)] = !1, c
		}
		return n = s, (r = [{
			key: e(527),
			value: function() {
				var t = e;
				this.inputEnabled = !1, this[t(520)][t(498)].removeAll()
			}
		}, {
			key: e(541),
			value: function() {
				var t = e,
					n = this;
				!this[t(530)] && (this[t(530)] = !0, this[t(537)] == this.checkIMg ? (this[t(538)](this[t(513)], this[t(494)]), this.onChange[t(525)](!1, this)) : (this[t(538)](this[t(513)], this[t(510)]), this[t(495)][t(525)](!0, this)), CyberInstance[t(523)].playButtonSound(), setTimeout((function() {
					n.allowClick = !1
				}), 300))
			}
		}, {
			key: e(533),
			get: function() {
				var t = e;
				return this[t(537)] === this[t(510)]
			},
			set: function(t) {
				var n = e;
				t ? this[n(538)](this.atlas, this[n(510)]) : this[n(538)](this.atlas, this.uncheckImg)
			}
		}]) && Ye(n[Xe(536)], r), Object.defineProperty(n, "prototype", {
			writable: !1
		}), s
	}(Phaser.Sprite);

	function en(t, e) {
		var n = nn();
		return (en = function(t, e) {
			return n[t -= 248]
		})(t, e)
	}

	function nn() {
		var t = ["448587jLSqny", "enFlag", "addCloseButton", "setTo", "897quxnuJ", "6kpQMWv", "21qjBSwa", "prototype", "closeButton", "onConfirm", "sound", "744ZSfGzP", "Tiếng Việt", "game", "enumerable", "height", "sham", "684hpLoIH", "button_close", "vnFlag", "iterator", "construct", "bind", "this hasn't been initialised - super() hasn't been called", "call", "homeScreen", "languageCode", "getPrototypeOf", "en_US", "langCode", "length", "symbol", "playButtonSound", "__proto__", "constructor", "background", "44220YVEJon", "player", "defineProperty", "sprite", "inputEnabled", "onLanguageChange", "#f5c78a", "toUpperCase", "square_check", "3061pcRrEU", "function", "dispatch", "writable", "createTransition", "addFlag", "value", "close", "131212iuTGOA", "11347ofYjep", "button_green_175x56", "text", "16gzzXqm", "Super expression must either be null or a function", "undefined", "30YpqbAe", "setDataAsync", "setPrototypeOf", "addText", "addOverlay", "Signal", "create", "addChild", "click", "26279KYKZta", "width", "events", "buttonText", "CONFIRM", "showCloseButton", "add", "setDefaultLanguage", "key", "LANGUAGE", "configurable", "checkbox"];
		return (nn = function() {
			return t
		})()
	}

	function rn(t) {
		var e = en;
		return (rn = e(268) == typeof Symbol && e(253) == typeof Symbol[e(323)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(268) == typeof Symbol && t[n(256)] === Symbol && t !== Symbol[n(310)] ? n(253) : typeof t
		})(t)
	}

	function an(t, e) {
		for (var n = en, r = 0; r < e[n(252)]; r++) {
			var i = e[r];
			i.enumerable = i[n(317)] || !1, i[n(301)] = !0, n(273) in i && (i[n(270)] = !0), Object.defineProperty(t, i[n(299)], i)
		}
	}

	function on(t, e) {
		var n = en;
		return (on = Object[n(284)] ? Object[n(284)].bind() : function(t, e) {
			return t[n(255)] = e, t
		})(t, e)
	}

	function sn(t, e) {
		var n = en;
		if (e && ("object" === rn(e) || typeof e === n(268))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return cn(t)
	}

	function cn(t) {
		if (void 0 === t) throw new ReferenceError(en(326));
		return t
	}

	function un(t) {
		var e = en;
		return (un = Object.setPrototypeOf ? Object.getPrototypeOf[e(325)]() : function(t) {
			var n = e;
			return t[n(255)] || Object[n(249)](t)
		})(t)
	}! function(t, e) {
		for (var n = en, r = t();;) try {
			if (141285 == parseInt(n(267)) / 1 * (-parseInt(n(308)) / 2) + -parseInt(n(309)) / 3 * (-parseInt(n(275)) / 4) + parseInt(n(258)) / 5 + -parseInt(n(320)) / 6 * (parseInt(n(276)) / 7) + parseInt(n(279)) / 8 * (parseInt(n(303)) / 9) + -parseInt(n(282)) / 10 * (parseInt(n(291)) / 11) + -parseInt(n(314)) / 12 * (-parseInt(n(307)) / 13)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(nn);
	const hn = function(t) {
		var e = en;
		! function(t, e) {
			var n = en;
			if (typeof e !== n(268) && null !== e) throw new TypeError(n(280));
			t.prototype = Object[n(288)](e && e[n(310)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(260)](t, "prototype", {
				writable: !1
			}), e && on(t, e)
		}(s, t);
		var n, r, i, a, o = (i = s, a = function() {
			var t = en;
			if (typeof Reflect === t(281) || !Reflect[t(324)]) return !1;
			if (Reflect[t(324)][t(319)]) return !1;
			if (typeof Proxy === t(268)) return !0;
			try {
				return Boolean[t(310)].valueOf[t(327)](Reflect[t(324)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = en,
				n = un(i);
			if (a) {
				var r = un(this)[e(256)];
				t = Reflect[e(324)](n, arguments, r)
			} else t = n.apply(this, arguments);
			return sn(this, t)
		});

		function s(t, e) {
			var n, r = en;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			})(this, s), (n = o[r(327)](this, t)).languageCode = CyberInstance[r(251)], n[r(263)] = new(Phaser[r(287)]), n[r(286)](), n[r(257)] = n[r(288)](0, 0, r(328), "bg_popup_medium_484x292"), n[r(257)].x = n[r(316)][r(292)] / 2 - n.background[r(292)] / 2, n[r(257)].y = n[r(316)].height / 2 - n[r(257)][r(318)] / 2;
			var i = n[r(316)][r(297)][r(278)](n.background[r(292)] / 2, 11, CyberInstance.lang[r(300)], {
				font: APP_FONT,
				fontWeight: 700,
				fontSize: 30,
				fill: r(264)
			});
			i.anchor[r(306)](.5, 0), n[r(257)].addChild(i);
			var a = n.addFlag("en", "English"),
				c = n[r(272)]("vn", r(315));
			a.x = n[r(257)][r(292)] / 2 - (2 * a[r(292)] + 50) / 2, c.x = a.x + a[r(292)] + 50, n[r(304)] = a, n[r(322)] = c, n.checkbox = n[r(316)].make[r(261)](0, a.y + a[r(318)] + 10, r(328), r(266)), n[r(302)].scale[r(306)](.7), n[r(302)].x = "en" == CyberInstance[r(251)] ? n[r(304)].x : n[r(322)].x, n[r(257)].addChild(n[r(302)]);
			var u = new Lt(n[r(316)], 0, 0, "homeScreen", r(277));
			return u.x = n.background[r(292)] / 2 - u[r(292)] / 2, u.y = n.background[r(318)] - u[r(318)] - 15, u.addText(CyberInstance.lang[r(295)][r(265)]()), u.click(n.onConfirm, cn(n)), n.background.addChild(u), e && !0 === e[r(296)] && n[r(305)](), n[r(271)](), n
		}
		return n = s, (r = [{
			key: e(272),
			value: function(t, n) {
				var r = e,
					i = this,
					a = new Lt(this[r(316)], 0, 65, r(328), t);
				return a[r(292)] = 165, a.height = 100, a[r(248)] = t, a[r(290)]((function(t) {
					var e = r;
					i[e(248)] = t[e(248)], i[e(302)].x = "en" == i[e(248)] ? i[e(304)].x : i.vnFlag.x
				})), a[r(285)](n), a[r(294)].y = "en" == t ? a[r(318)] + 27 : a[r(318)] + 31, this.background[r(289)](a), a
			}
		}, {
			key: e(312),
			value: function() {
				var t = e;
				if (!gameLocaleInited || CyberInstance[t(251)] != this[t(248)]) {
					var n = "en" == this.languageCode ? t(250) : "vi_VN";
					CyberInstance[t(298)](n), this.onLanguageChange[t(269)](), FBInstant[t(259)][t(283)]({
						gameLocale: n
					})
				}
				this[t(274)]()
			}
		}, {
			key: "addCloseButton",
			value: function() {
				var t = e,
					n = this,
					r = this[t(288)](0, 0, t(328), t(321));
				r.x = this[t(257)][t(292)] - r[t(292)] / 2 - 10, r.y = -12, r[t(262)] = !0, r[t(293)].onInputDown.addOnce((function() {
					var e = t;
					CyberInstance[e(313)][e(254)](), n.close()
				}), this), this[t(257)][t(289)](r), this[t(311)] = r
			}
		}]) && an(n.prototype, r), Object.defineProperty(n, "prototype", {
			writable: !1
		}), s
	}(P);

	function fn() {
		var t = ["bg_popup_setting", "LANG", "checked", "langCode", "SETTING", "key", "restart", "constructor", "150244ONhTQe", "overlay", "addText", "Out", "Text", "addEntry", "this hasn't been initialised - super() hasn't been called", "visible", "72uhpnEW", "NHAP", "780967sxdAOx", "Easing", "onCheck", "setting_entry", "icon_sound", "sham", "10zPPRpB", "object", "25326PIRMEA", "events", "undefined", "languageEnabled", "Cannot call a class as a function", "Derived constructors may only return object or undefined", "revive", "alpha", "#ebdac0", "Version: ", "sound", "createInTransition", "3QiDJrW", "symbol", "close", "value", "click", "toUpperCase", "configurable", "GIFT_CODE", "giftcode", "Tiếng Việt", "hasChanged", "icon_code", "anchor", "getPrototypeOf", "disableClick", "inputEnabled", "lang", "130718GBfewz", "guserid", "addChild", "addCheckBox", "tween", "23940WcrOhu", "__proto__", "valueOf", "construct", "width", "defineProperty", "open", "createOutTransition", "version", "enumerable", "setText", "buttonIcon", "setTo", "863478wWJZOG", "kill", "bind", "English", "#ee9dab", "ID: ", "#edc5b9", "create", "isSoundOn", "call", "prototype", "square_uncheck", "overlayTexture", "length", "setPrototypeOf", "add", "SOUND", "onInputDown", "text", "onLanguageChange", "addOverlay", "81758JMmsmP", "checkbox", "background", "onChange", "homeScreen", "height", "Back", "310QwemCE", "language", "#ffffff", "game"];
		return (fn = function() {
			return t
		})()
	}

	function ln(t) {
		var e = bn;
		return (ln = "function" == typeof Symbol && e(133) == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(177)] ? "symbol" : typeof t
		})(t)
	}

	function pn(t, e) {
		for (var n = bn, r = 0; r < e[n(180)]; r++) {
			var i = e[r];
			i[n(163)] = i[n(163)] || !1, i[n(138)] = !0, n(135) in i && (i.writable = !0), Object[n(159)](t, i[n(204)], i)
		}
	}

	function yn(t, e) {
		var n = bn;
		return (yn = Object[n(181)] ? Object[n(181)][n(169)]() : function(t, e) {
			return t[n(155)] = e, t
		})(t, e)
	}

	function dn(t, e) {
		var n = bn;
		if (e && (ln(e) === n(119) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(125));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(bn(213));
			return t
		}(t)
	}

	function vn(t) {
		var e = bn;
		return (vn = Object[e(181)] ? Object[e(145)][e(169)]() : function(t) {
			return t[e(155)] || Object.getPrototypeOf(t)
		})(t)
	}

	function bn(t, e) {
		var n = fn();
		return (bn = function(t, e) {
			return n[t -= 118]
		})(t, e)
	}! function(t, e) {
		for (var n = bn, r = t();;) try {
			if (180331 == parseInt(n(154)) / 1 + parseInt(n(188)) / 2 * (parseInt(n(132)) / 3) + parseInt(n(207)) / 4 * (parseInt(n(118)) / 5) + -parseInt(n(167)) / 6 + parseInt(n(149)) / 7 * (parseInt(n(215)) / 8) + parseInt(n(120)) / 9 * (parseInt(n(195)) / 10) + -parseInt(n(217)) / 11) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(fn);
	const gn = function(t) {
		var e = bn;
		! function(t, e) {
			var n = bn;
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(177)] = Object[n(174)](e && e[n(177)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(159)](t, n(177), {
				writable: !1
			}), e && yn(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = bn;
			if (typeof Reflect === t(122) || !Reflect[t(157)]) return !1;
			if (Reflect.construct[t(222)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(177)][t(156)][t(176)](Reflect[t(157)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = bn,
				n = vn(a);
			if (o) {
				var r = vn(this)[e(206)];
				t = Reflect[e(157)](n, arguments, r)
			} else t = n.apply(this, arguments);
			return dn(this, t)
		});

		function c(t) {
			var e, n = bn;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(bn(124))
			})(this, c), (e = s[n(176)](this, t))[n(208)] = e[n(187)]();
			var r = e.create(0, 0, n(192), n(199));
			r[n(147)] = !0, r.x = e.game[n(158)] - r.width - 15, r.y = e.game[n(193)] / 2 - r[n(193)] / 2;
			var i = e[n(198)].make.text(r.width / 2, 13, CyberInstance.lang[n(203)], {
				font: APP_FONT,
				fill: n(128),
				fontWeight: 700,
				fontSize: 24
			});
			i[n(144)][n(166)](.5, 0), r[n(151)](i), i[n(164)](CyberInstance.lang[n(203)]), e[n(130)] = e[n(212)](CyberInstance.lang[n(183)], n(221)), e[n(130)].y = 50, e[n(152)](e.sound, CyberInstance[n(175)], (function(t) {
				var r = n;
				e[r(142)] = !0, CyberInstance[r(175)] = t
			})), r[n(151)](e[n(130)]), e[n(140)] = e[n(212)](CyberInstance.lang[n(139)], n(143)), e[n(140)].y = e[n(130)].y + e[n(130)][n(193)] + 10, r.addChild(e.giftcode);
			var a = new Lt(e[n(198)], 0, 0, n(192), "button_green_138x41");
			if (a.addText(CyberInstance[n(148)][n(216)][n(137)](), {
					font: APP_FONT,
					fontSize: 20,
					fill: n(197),
					fontWeight: 400
				}), a.x = e[n(140)].width - a[n(158)] - 10, a.y = e[n(140)][n(193)] / 2 - a.height / 2, a[n(136)]((function() {
					var t = n;
					e[t(134)](), z.instance[t(160)]()
				})), e.giftcode[n(151)](a), CyberInstance[n(123)]) {
				e[n(196)] = e[n(212)](CyberInstance[n(148)][n(200)], "icon_language"), e[n(196)].y = e.giftcode.y + e[n(140)][n(193)] + 10, r[n(151)](e.language);
				var o = new Lt(e[n(198)], 0, 0, n(192), "button_green_138x41"),
					u = "en" == CyberInstance[n(202)] ? n(170) : n(141);
				o[n(209)](u.toUpperCase(), {
					font: APP_FONT,
					fontSize: 20,
					fill: "#ffffff",
					fontWeight: 400
				}), o.x = e[n(196)].width - o[n(158)] - 10, o.y = e[n(196)][n(193)] / 2 - o[n(193)] / 2, o.click((function() {
					var r = n;
					e[r(134)](), new hn(t, {
						showCloseButton: !0
					})[r(186)][r(182)]((function() {
						var e = r;
						t.state[e(205)]()
					}))
				})), e[n(196)][n(151)](o)
			}
			var h = e.game[n(182)].text(r.width / 2, r.height - 55, "ID: " + CyberInstance[n(150)], {
				font: APP_FONT,
				fontSize: 20,
				fill: n(171),
				fontWeight: 400
			});
			h[n(144)][n(166)](.5), r[n(151)](h), h[n(164)](n(172) + CyberInstance[n(150)]);
			var f = e[n(198)].add[n(185)](r[n(158)] / 2, r.height - 30, "Version: " + CyberInstance.version, {
				font: APP_FONT,
				fontSize: 14,
				fill: n(171),
				fontWeight: 400
			});
			return f.anchor[n(166)](.5, 0), r[n(151)](f), f[n(164)](n(129) + CyberInstance[n(162)]), e[n(190)] = r, e[n(131)](), e
		}
		return n = c, i = bn, (r = [{
			key: e(212),
			value: function(t, n) {
				var r = e,
					i = this.create(0, 0, r(192), r(220)),
					a = this[r(174)](15, i[r(193)] / 2, r(192), n);
				a[r(144)].setTo(0, .5), i[r(151)](a), i[r(165)] = a;
				var o = new(Phaser[r(211)])(this[r(198)], 80, i[r(193)] / 2 + 2, t, {
					font: APP_FONT,
					fill: r(173),
					fontWeight: 400,
					fontSize: 22
				});
				return o[r(144)].setTo(0, .5), i.addChild(o), o.setText(t), i
			}
		}, {
			key: "addCheckBox",
			value: function(t, n, r) {
				var i = e,
					a = new tn(this[i(198)], 0, t[i(193)] / 2, i(192), "square_check", i(178));
				a.x = t[i(158)] - a.width - 10, a[i(144)][i(166)](0, .5), a[i(201)] = n, a[i(146)](), t[i(151)](a), t[i(189)] = a, t[i(147)] = !0, t[i(121)][i(184)].add((function(t) {
					var e = i;
					t[e(189)][e(219)]()
				}), this), a[i(191)][i(182)](r, this)
			}
		}, {
			key: "addOverlay",
			value: function() {
				var t = e,
					n = this.create(0, 0, CyberGlobalData[t(179)]);
				return n[t(127)] = .5, n[t(147)] = !0, n[t(121)][t(184)][t(182)](this[t(134)], this), n
			}
		}, {
			key: e(131),
			value: function() {
				var t = e;
				if (this.background) {
					var n = this[t(198)][t(158)] - this[t(190)][t(158)] - 15;
					this.background.x = this[t(198)][t(158)] - 15, this[t(198)][t(182)][t(153)](this[t(190)]).to({
						x: n
					}, 500, Phaser.Easing[t(194)][t(210)], !0)
				}
			}
		}, {
			key: e(161),
			value: function() {
				var t = e,
					n = this;
				if (this[t(190)]) {
					var r = this[t(198)][t(158)];
					this[t(198)][t(182)][t(153)](this[t(190)]).to({
						x: r
					}, 500, Phaser[t(218)].Back.Out, !0).onComplete[t(182)]((function() {
						var e = t;
						n.callAll(e(168)), n[e(214)] = !1
					}))
				}
			}
		}, {
			key: e(160),
			value: function() {
				var t = e;
				0 == this[t(214)] && (this.hasChanged = !1, this.visible = !0, this.callAll(t(126)), this[t(131)]())
			}
		}, {
			key: e(134),
			value: function() {
				1 == this[e(214)] && (this.overlay.kill(), this.createOutTransition())
			}
		}]) && pn(n[i(177)], r), Object.defineProperty(n, i(177), {
			writable: !1
		}), c
	}(Phaser.Group);
	var mn = wn;

	function In(t) {
		var e = wn;
		return (In = e(147) == typeof Symbol && e(151) == typeof Symbol[e(165)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(147) == typeof Symbol && t[n(163)] === Symbol && t !== Symbol[n(155)] ? n(151) : typeof t
		})(t)
	}

	function wn(t, e) {
		var n = Cn();
		return (wn = function(t, e) {
			return n[t -= 140]
		})(t, e)
	}

	function Sn(t, e) {
		for (var n = wn, r = 0; r < e[n(183)]; r++) {
			var i = e[r];
			i[n(146)] = i[n(146)] || !1, i[n(175)] = !0, n(154) in i && (i[n(168)] = !0), Object[n(171)](t, i[n(179)], i)
		}
	}

	function kn(t, e) {
		var n = wn;
		return (kn = Object[n(150)] ? Object[n(150)].bind() : function(t, e) {
			return t[n(159)] = e, t
		})(t, e)
	}

	function On(t, e) {
		var n = wn;
		if (e && (In(e) === n(152) || typeof e === n(147))) return e;
		if (void 0 !== e) throw new TypeError(n(172));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(wn(141));
			return t
		}(t)
	}

	function Cn() {
		var t = ["object", "columnNumber", "value", "prototype", "33JSKdrU", "call", "construct", "__proto__", "177494qRTKxn", "distanceBetweenRows", "height", "constructor", "1626930kuGdkV", "iterator", "columnWidth", "apply", "writable", "addChild", "16654VMWcoR", "defineProperty", "Derived constructors may only return object or undefined", "Sprite", "1716000djMNsh", "configurable", "width", "86552CANsos", "bind", "key", "getPrototypeOf", "floor", "229558ZSHnPm", "length", "create", "this hasn't been initialised - super() hasn't been called", "1038IocjUN", "viewHeight", "viewWidth", "distanceBetweenColumns", "enumerable", "function", "32Jqknql", "5360sSoUVp", "setPrototypeOf", "symbol"];
		return (Cn = function() {
			return t
		})()
	}

	function Tn(t) {
		var e = wn;
		return (Tn = Object[e(150)] ? Object[e(180)][e(178)]() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(180)](t)
		})(t)
	}! function(t, e) {
		for (var n = wn, r = t();;) try {
			if (109369 == parseInt(n(160)) / 1 + parseInt(n(170)) / 2 * (-parseInt(n(156)) / 3) + -parseInt(n(177)) / 4 + -parseInt(n(149)) / 5 * (-parseInt(n(142)) / 6) + parseInt(n(182)) / 7 * (-parseInt(n(148)) / 8) + -parseInt(n(164)) / 9 + parseInt(n(174)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Cn);
	const Pn = function(t) {
		var e = wn;
		! function(t, e) {
			var n = wn;
			if (typeof e !== n(147) && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(155)] = Object[n(140)](e && e[n(155)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(171)](t, n(155), {
				writable: !1
			}), e && kn(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = wn;
			if ("undefined" == typeof Reflect || !Reflect[t(158)]) return !1;
			if (Reflect[t(158)].sham) return !1;
			if (typeof Proxy === t(147)) return !0;
			try {
				return Boolean[t(155)].valueOf[t(157)](Reflect[t(158)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = wn,
				n = Tn(a);
			if (o) {
				var r = Tn(this).constructor;
				t = Reflect[e(158)](n, arguments, r)
			} else t = n[e(167)](this, arguments);
			return On(this, t)
		});

		function c(t, e, n, r, i) {
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), s.call(this, t, e, n, r, i)
		}
		return n = c, r = [{
			key: "setViewList",
			value: function(t) {
				for (var e = wn, n = 0; n < t[e(183)]; n++) {
					n % this.columnNumber == 0 ? t[n].x = this.leftDistance : this.columnWidth ? t[n].x = t[n - 1].x + this[e(166)] + this[e(145)] : t[n].x = t[n - 1].x + t[n - 1][e(176)] + this[e(145)];
					var r = Math[e(181)](n / this.columnNumber);
					t[n].y = 0 === r ? 0 : t[n - this[e(153)]].y + t[n - this.columnNumber][e(162)] + this[e(161)], this[e(169)](t[n])
				}
			}
		}, {
			key: "height",
			get: function() {
				return this[wn(143)]
			}
		}, {
			key: e(176),
			get: function() {
				return this[e(144)]
			}
		}], i = wn, r && Sn(n.prototype, r), Object[i(171)](n, "prototype", {
			writable: !1
		}), c
	}(Phaser[mn(173)]);

	function xn(t, e) {
		var n = _n();
		return (xn = function(t, e) {
			return n[t -= 187]
		})(t, e)
	}

	function _n() {
		var t = ["132700VDzMxx", "6KwIyEt", "12758QZcxGA", "140476ltreOk", "4826832EfcGnK", "781IPnjTW", "9dqrOCz", "9867046mSbCWv", "6OvWGZm", "7999405RBmEge", "18118068DCGzoU", "122gnDPaa"];
		return (_n = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = xn, r = t();;) try {
			if (809876 == parseInt(n(194)) / 1 * (-parseInt(n(197)) / 2) + parseInt(n(191)) / 3 * (-parseInt(n(198)) / 4) + -parseInt(n(192)) / 5 + parseInt(n(196)) / 6 * (parseInt(n(190)) / 7) + -parseInt(n(187)) / 8 * (parseInt(n(189)) / 9) + -parseInt(n(195)) / 10 * (-parseInt(n(188)) / 11) + parseInt(n(193)) / 12) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(_n);
	const Rn = {
		AUTO_DETECT_THRESHOLD: 8
	};

	function jn(t) {
		var e = Fn;
		return t.x = t.x ? t.x : 0, t.y = t.y ? t.y : 0, t[e(197)] <= 0 ? console.warn(e(185)) : t[e(182)] <= 0 && console[e(191)](e(170)), t
	}

	function En() {
		var t = ["16CopnGd", "8UopvrF", "388203AHVqMe", "PhaserListView: bounds.height <= 0", "positionUp", "events", "concat", "timeUp", "children", "Rectangle", "AUTO_DETECT_THRESHOLD", "charAt", "4876352HyeDtM", "nominal", "inputEnabled", "height", "slice", "abs", "PhaserListView: bounds.width <= 0", "onInputUp", "dispatch", "worldPosition", "106466ixwsos", "call", "warn", "positionDown", "pivot", "scale", "1847910nvGttl", "1179840FszeOQ", "width", "timeDown", "15172308cyXchQ", "2881949ZWowjg"];
		return (En = function() {
			return t
		})()
	}

	function Bn(t, e) {
		var n, r, i = Fn;
		return t[i(180)[i(173)]((n = e, r = Fn, n[r(178)](0).toUpperCase() + n[r(183)](1)))] || t[e]
	}

	function An(t, e) {
		var n = Fn,
			r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
		if (!t) return !1;
		for (var i = 0; i < t.length; i++) {
			var a = t[i];
			if (a) {
				if (e[n(190)](r, a)) return a;
				var o = An(a[n(175)], e, r);
				if (o) return o
			}
		}
		return !1
	}

	function Fn(t, e) {
		var n = En();
		return (Fn = function(t, e) {
			return n[t -= 165]
		})(t, e)
	}

	function Dn(t, e, n) {
		var r = Fn;
		if (!(n == r(186) && (i = t, a = Fn, o = Math.abs(i[a(192)].x - i[a(171)].x), s = Math[a(184)](i[a(192)].y - i[a(171)].y), i[a(174)], i[a(198)], o > Rn[a(177)] || s > Rn[a(177)]))) {
			var i, a, o, s, c = An(e, (function(e) {
				var n = r,
					i = e[n(188)],
					a = e.anchor,
					o = e[n(193)],
					s = e[n(197)],
					c = e[n(182)],
					u = e[n(194)],
					h = i.x - (a ? a.x * s : 0) - o.x * u.x,
					f = i.y - (a ? a.y * c : 0) - o.y * u.y;
				return e[n(181)] && new(Phaser[n(176)])(h, f, e.width, e[n(182)]).contains(t.x, t.y)
			}));
			return c && c[r(172)] && c[r(172)][n] && c[r(172)][n][r(187)] && c[r(172)][n][r(187)](c, t, !0), c
		}
	}

	function Nn(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Gn(t, e) {
		for (var n = Wn, r = 0; r < e[n(164)]; r++) {
			var i = e[r];
			i[n(166)] = i[n(166)] || !1, i.configurable = !0, n(219) in i && (i.writable = !0), Object[n(160)](t, i[n(159)], i)
		}
	}! function(t, e) {
		for (var n = Fn, r = t();;) try {
			if (550387 == parseInt(n(189)) / 1 * (-parseInt(n(167)) / 2) + parseInt(n(169)) / 3 * (-parseInt(n(168)) / 4) + parseInt(n(195)) / 5 + -parseInt(n(196)) / 6 + parseInt(n(166)) / 7 + -parseInt(n(179)) / 8 + parseInt(n(165)) / 9) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(En),
	function(t, e) {
		for (var n = Wn, r = t();;) try {
			if (113501 == -parseInt(n(192)) / 1 + parseInt(n(173)) / 2 + parseInt(n(204)) / 3 * (parseInt(n(199)) / 4) + -parseInt(n(171)) / 5 * (-parseInt(n(206)) / 6) + -parseInt(n(200)) / 7 + parseInt(n(190)) / 8 + parseInt(n(189)) / 9) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(zn);
	var Ln = {
			direction: "y",
			autocull: !0,
			padding: 10
		},
		Mn = function() {
			var t, e, n, r = Wn;

			function i(t, e, n) {
				var r = Wn,
					a = arguments[r(164)] > 3 && void 0 !== arguments[3] ? arguments[3] : {};
				Nn(this, i), this[r(181)] = t, this[r(179)] = e, this.bounds = n, this.o = this[r(220)] = Object[r(174)]({}, Ln, a), this[r(203)] = [], "y" == this.o.direction ? this.p = {
					xy: "y",
					wh: r(177)
				} : this.p = {
					xy: "x",
					wh: r(186)
				}, this[r(217)] = this[r(181)].add[r(172)](e), this[r(217)][r(157)][r(216)](n.x, n.y), this[r(176)] = {
					onAdded: new(Phaser[r(183)])
				}, this[r(157)] = 0, a[r(185)] || (this[r(217)][r(191)] = this[r(169)](n))
			}
			return t = i, e = [{
				key: r(210),
				value: function(t) {
					var e = r;
					this[e(203)][e(182)](t);
					var n = 0;
					if (this[e(217)].children[e(164)] > 0) {
						var i = this[e(217)].getChildAt(this.grp[e(208)][e(164)] - 1);
						n = i[this.p.xy] + Bn(i, this.p.wh) + this.o.padding
					}
					return t[this.p.xy] = n, this[e(217)][e(161)](t), this[e(164)] = n + Bn(t, this.p.wh), this.events[e(167)][e(205)](this[e(164)] - this[e(207)][this.p.wh]), t
				}
			}, {
				key: r(218),
				value: function() {
					for (var t = r, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
					n[t(156)](this[t(210)], this)
				}
			}, {
				key: "remove",
				value: function(t) {
					var e = r,
						n = 0,
						i = 0;
					if (this[e(217)][e(208)][e(164)] > 0) {
						var a = this[e(217)].getChildAt(this[e(217)].children[e(164)] - 1);
						i = Bn(a, this.p.wh), n = a[this.p.xy] + i + this.o.padding
					}
					t[e(188)](), this[e(217)][e(194)](t);
					var o = this[e(203)][e(175)](t);
					if (-1 != o) return this[e(203)].splice(o, 1), this.length = n - i, this[e(176)][e(167)][e(205)](this.length - this[e(207)][this.p.wh]), t
				}
			}, {
				key: r(212),
				value: function() {
					var t = r;
					if (this.grp[t(208)][t(164)] > 0) {
						var e = this[t(217)][t(193)](this.grp[t(208)][t(164)] - 1);
						this.remove(e)
					}
				}
			}, {
				key: r(188),
				value: function() {
					var t = r;
					null != this.events && (this[t(176)][t(167)][t(211)](), this[t(176)] = null), null !== this[t(217)] && (this.grp[t(188)](), this[t(217)] = null), this[t(181)] = null, this[t(179)] = null, this[t(203)] = null
				}
			}, {
				key: r(158),
				value: function() {
					var t = r;
					if (null !== this[t(217)]) {
						for (; this[t(217)].children.length > 0;) this[t(195)](this[t(217)][t(208)][0]);
						this[t(217)].removeAll()
					}
					this[t(203)] = []
				}
			}, {
				key: "cull",
				value: function() {
					for (var t = r, e = [], n = 0; n < this.items[t(164)]; n++) {
						var i = this[t(203)][n];
						i[this.p.xy] + Bn(i, this.p.wh) + this[t(217)][this.p.xy] < this.bounds[this.p.xy] ? i.kill() : i[this.p.xy] + this.grp[this.p.xy] > this.bounds[this.p.xy] + this[t(207)][this.p.wh] ? i[t(165)]() : (i[t(198)](), e[t(182)](i))
					}
					this[t(196)].registerClickables(e)
				}
			}, {
				key: "getCurrentIndex",
				value: function() {
					for (var t = r, e = 0, n = 0; n < this[t(203)][t(164)]; n++) {
						var i = this[t(203)][n];
						if (i[this.p.xy] + Bn(i, this.p.wh) + this.grp[this.p.xy] < this[t(207)][this.p.xy]);
						else if (!(i[this.p.xy] + this[t(217)][this.p.xy] > this[t(207)][this.p.xy] + this[t(207)][this.p.wh])) {
							e = n;
							break
						}
					}
					return e
				}
			}, {
				key: r(187),
				value: function(t) {
					return -this[r(203)][t][this.p.xy]
				}
			}, {
				key: r(197),
				value: function(t) {
					this[r(214)](t)
				}
			}, {
				key: "moveToPosition",
				value: function(t) {
					var e = r;
					this[e(196)][e(178)](t)
				}
			}, {
				key: r(184),
				value: function(t) {
					var e = r;
					this[e(196)][e(178)](this.getPositionByItemIndex(t))
				}
			}, {
				key: r(201),
				value: function(t) {
					var e = r,
						n = arguments[e(164)] > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
					this.scroller[e(163)](n, t)
				}
			}, {
				key: r(168),
				value: function(t) {
					var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
					this.scroller.tweenTo(e, this.getPositionByItemIndex(t))
				}
			}, {
				key: r(213),
				value: function(t) {
					var e = r;
					this[e(157)] = t, this.grp[this.p.xy] = this[e(207)][this.p.xy] + t, this.o[e(202)] && this[e(170)]()
				}
			}, {
				key: r(169),
				value: function(t) {
					var e = r,
						n = this[e(181)][e(210)].graphics(0, 0, this[e(179)]);
					return n[e(162)](16711680)[e(180)](t.x, t.y, t.width, t[e(177)]), n[e(215)] = 0, n
				}
			}], n = Wn, e && Gn(t[n(209)], e), Object[n(160)](t, n(209), {
				writable: !1
			}), i
		}();

	function Wn(t, e) {
		var n = zn();
		return (Wn = function(t, e) {
			return n[t -= 156]
		})(t, e)
	}

	function zn() {
		var t = ["8rKSRgc", "1324960NXVFRl", "tweenToPosition", "autocull", "items", "241935aYPBlB", "dispatch", "6rXMutZ", "bounds", "children", "prototype", "add", "dispose", "removeLast", "_setPosition", "moveToPosition", "alpha", "set", "grp", "addMultiple", "value", "options", "forEach", "position", "removeAll", "key", "defineProperty", "addChild", "beginFill", "tweenTo", "length", "kill", "enumerable", "onAdded", "tweenToItem", "_addMask", "cull", "218410vMuAzj", "group", "266492qUODoD", "assign", "indexOf", "events", "height", "setTo", "parent", "drawRect", "game", "push", "Signal", "moveToItem", "disableMask", "width", "getPositionByItemIndex", "destroy", "477756MkfCgn", "823248FGcdVe", "mask", "191427orhaHy", "getChildAt", "removeChild", "remove", "scroller", "setPosition", "revive"];
		return (zn = function() {
			return t
		})()
	}

	function Un(t, e) {
		var n = Hn();
		return (Un = function(t, e) {
			return n[t -= 437]
		})(t, e)
	}! function(t, e) {
		for (var n = Un, r = t();;) try {
			if (629064 == -parseInt(n(443)) / 1 * (parseInt(n(437)) / 2) + -parseInt(n(439)) / 3 * (-parseInt(n(444)) / 4) + -parseInt(n(438)) / 5 * (-parseInt(n(440)) / 6) + -parseInt(n(446)) / 7 + -parseInt(n(441)) / 8 * (-parseInt(n(447)) / 9) + -parseInt(n(442)) / 10 + parseInt(n(448)) / 11 * (parseInt(n(445)) / 12)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Hn);
	const Vn = {
		nearestMultiple: function(t, e) {
			return Math.round(t / e) * e
		},
		scaleBetween: function(t, e, n) {
			return t + (e - t) * n
		},
		percentageBetween2: function(t, e, n) {
			return (t - e) / (n - e)
		}
	};

	function Hn() {
		var t = ["12608qCGZbr", "2981890vryPRS", "10mtuzwv", "222596bRcchc", "5755212rbLUhi", "3419423FEmIsj", "603VQulDC", "11JPBoea", "4070dFPQCw", "1431635ByEafo", "15KOTiJe", "12ULDLTT"];
		return (Hn = function() {
			return t
		})()
	}
	var Xn = Qn;

	function qn(t, e, n) {
		return e in t ? Object[Qn(380)](t, e, {
			value: n,
			enumerable: !0,
			configurable: !0,
			writable: !0
		}) : t[e] = n, t
	}

	function Kn(t, e) {
		if (!(t instanceof e)) throw new TypeError(Qn(398))
	}

	function Yn(t, e) {
		for (var n = Qn, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(388)] = i[n(388)] || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function Jn() {
		var t = ["bouncing", "handleDown", "560296pSbQYk", "Easing", "diff", "handleUpdate", "setFromTo", "_updateMinMax", "old", "6DyOWub", "_requestDiff", "handleMove", "nearestMultiple", "onInputUp", "time", "clickObject", "isDown", "_addSnapping", "game", "enabled", "42XKpsHv", "defineProperty", "options", "removeListeners", "minDuration", "percentageBetween2", "4928550AAdAvZ", "previousTotal", "total", "enumerable", "destroyed", "acc", "direction", "swipeThreshold", "reset", "input", "current", "maxAcceleration", "add", "Cannot call a class as a function", "remove", "snapStep", "timeUp", "abs", "pause", "dispatchValues", "Point", "Math", "infinite", "cancel", "Out", "pow", "forward", "_addSwiping", "isTweening", "destroy", "speedLimit", "onInputDown", "duration", "move", "emitMoving", "multiplier", "Signal", "inputEnabled", "flickTimeThreshold", "target", "swipeEnabled", "handleComplete", "length", "tweenScroll", "399315swpnKb", "registerClickables", "overflow", "max", "backward", "isScrolling", "set", "442377vCMRan", "events", "tweenTo", "maskLimits", "timeDown", "handleUp", "maxOffset", "assign", "accelerationT", "stop", "scrollObject", "18856hwsMvj", "8KGzzEE", "1153614KXttUE", "percent", "clickables", "min", "_addMomentum", "_addLimits", "swipeTimeThreshold", "dispatch", "init", "dispose", "175200ZMvDYB", "Quartic", "down", "onUpdate", "prototype", "onUpdateCallback", "hasOwnProperty", "from", "acceleration", "onInputMove", "addListeners", "onComplete", "addMoveCallback", "tween", "isRunning"];
		return (Jn = function() {
			return t
		})()
	}

	function Qn(t, e) {
		var n = Jn();
		return (Qn = function(t, e) {
			return n[t -= 347]
		})(t, e)
	}! function(t, e) {
		for (var n = Qn, r = t();;) try {
			if (230721 == -parseInt(n(368)) / 1 * (-parseInt(n(447)) / 2) + -parseInt(n(449)) / 3 + -parseInt(n(361)) / 4 + parseInt(n(429)) / 5 + -parseInt(n(459)) / 6 * (-parseInt(n(379)) / 7) + parseInt(n(448)) / 8 * (-parseInt(n(436)) / 9) + parseInt(n(385)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Jn);
	var Zn = new(Phaser[Xn(405)]),
		$n = {
			from: 0,
			to: 200,
			direction: "y",
			momentum: !1,
			snapping: !1,
			bouncing: !1,
			deceleration: .5,
			overflow: 20,
			snapStep: 10,
			emitMoving: !1,
			duration: 2,
			speedLimit: 3,
			flickTimeThreshold: 100,
			offsetThreshold: 30,
			acceleration: .5,
			accelerationT: 250,
			maxAcceleration: 4,
			time: {},
			multiplier: 1,
			swipeEnabled: !1,
			swipeThreshold: 5,
			swipeTimeThreshold: 250,
			minDuration: .5,
			addListeners: !0
		},
		tr = function() {
			var t, e, n, r = Xn;

			function i(t, e) {
				var n = Qn,
					r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
					a = arguments[n(427)] > 3 && void 0 !== arguments[3] ? arguments[3] : {};
				Kn(this, i), this[n(377)] = t, this[n(374)] = e, this[n(439)] = r, this.o = this.options = Object[n(443)]({}, $n, a), this[n(366)](), this.dispatchValues = {
					step: 0,
					total: 0,
					percent: 0
				}, this[n(354)](), this[n(451)] = [], this.isDown = !1, this[n(434)] = !1, this[n(446)] = {}, this[n(457)](), this.tweenScroll = this[n(377)].add[n(357)](this.scrollObject).to({}, 0, Phaser[n(362)][n(460)][n(409)]), this.tweenScroll[n(349)](this[n(364)], this), this[n(428)].onComplete[n(397)](this[n(426)], this)
			}
			return t = i, n = Qn, (e = [{
				key: "destroy",
				value: function() {
					var t = Qn;
					this[t(428)][t(445)](), this.removeListeners(), this[t(374)][t(414)](), this[t(451)] = null, this[t(381)] = this.o = null, this[t(439)] = null, this.enabled = !1, this[t(377)] = null, this[t(404)] = null, this[t(375)] = null, this[t(424)] = null, this[t(389)] = !0
				}
			}, {
				key: r(354),
				value: function() {
					var t = r;
					this[t(437)] = {
						onUpdate: new Phaser.Signal,
						onInputUp: new(Phaser[t(421)]),
						onInputDown: new(Phaser[t(421)]),
						onInputMove: new(Phaser[t(421)]),
						onComplete: new(Phaser[t(421)]),
						onSwipe: new(Phaser[t(421)])
					}, this.o[t(354)] && (this[t(374)][t(422)] = !0, this[t(374)][t(437)].onInputDown.add(this[t(360)], this), this[t(374)][t(437)].onInputUp.add(this[t(441)], this))
				}
			}, {
				key: r(382),
				value: function() {
					var t = r;
					for (var e in this.o.addListeners && (this[t(374)][t(437)][t(416)][t(399)](this[t(360)], this), this[t(374)].events.onInputUp[t(399)](this[t(441)], this)), this[t(437)]) this.events[t(350)](e) && this.events[e][t(458)]()
				}
			}, {
				key: "enable",
				value: function() {
					this[r(378)] = !0
				}
			}, {
				key: "disable",
				value: function() {
					this[r(378)] = !1
				}
			}, {
				key: r(457),
				value: function() {
					var t = r;
					this[t(446)][this.o[t(391)]] = this.o[t(351)], this.maxOffset = this[t(439)][this.o[t(391)]] * this.o[t(415)], this.enable()
				}
			}, {
				key: r(393),
				value: function() {
					var t = r;
					this[t(428)][t(403)](), this.o[t(420)] = 1, this[t(457)]()
				}
			}, {
				key: r(365),
				value: function(t, e) {
					var n = r;
					this.o.from = t, this.o.to = e, this[n(366)]()
				}
			}, {
				key: r(413),
				value: function() {
					var t = r;
					return this[t(428)][t(358)]
				}
			}, {
				key: r(430),
				value: function(t) {
					this.clickables = t
				}
			}, {
				key: r(360),
				value: function(t, e) {
					var n = r;
					this[n(378)] && (this.isDown = !0, this.target = this.requested = this[n(446)][this.o.direction], this.o[n(373)][n(461)] = e[n(440)], this.o[n(354)] && this[n(377)].input[n(356)](this[n(370)], this), this.isTweening() && this.o[n(373)][n(461)] - this.o[n(373)].up < this.o.accelerationT ? this.o[n(420)] += this.o[n(352)] : this.o[n(420)] = 1, this[n(428)].stop(), this[n(428)].pendingDelete = !1, Dn(e, this.clickables, n(416)), this[n(437)].onInputDown[n(456)](t, e))
				}
			}, {
				key: r(370),
				value: function(t, e, n) {
					var i = r;
					this[i(378)] && (this[i(434)] = !0, Zn[i(435)](e, n), this[i(363)] = this[i(367)] - Zn[this.o[i(391)]], this.diff = this[i(369)](this.diff, this[i(424)], this[i(452)], this[i(432)], this.o[i(431)]), this[i(424)] -= this[i(363)], this[i(367)] = Zn[this.o[i(391)]], this.o.time[i(418)] = this.game[i(373)][i(373)], this.acc = Math.min(Math[i(402)](this[i(363)] / 30), this.o[i(396)]), this[i(446)][this.o.direction] = this.target, this[i(364)](), this.o[i(419)] && this[i(437)][i(353)][i(456)](t, e, n))
				}
			}, {
				key: r(441),
				value: function(t, e) {
					var n = r;
					this.isDown = !1, this.o[n(354)] && this[n(377)][n(394)].deleteMoveCallback(this.handleMove, this), this.o[n(373)].up = e[n(401)], this.o.time.up - this.o.time[n(461)] > this.o[n(444)] && (this.o[n(420)] = 1);
					var i = {
						duration: .5,
						target: this[n(424)]
					};
					this.o[n(359)] || (i[n(417)] = .01), !this.o.infinite && this.scrollObject[this.o[n(391)]] > this[n(432)] ? (this[n(424)] = this[n(432)], this.tweenTo(i[n(417)], this[n(424)])) : !this.o[n(407)] && this[n(446)][this.o.direction] < this[n(452)] ? (this[n(424)] = this[n(452)], this[n(438)](i[n(417)], this[n(424)])) : (this[n(453)](i), this[n(412)](i, e), this._addSnapping(i), this[n(454)](i), this._calculateDuration(i), this[n(438)](i[n(417)], i[n(424)])), Dn(e, this[n(451)], n(372)), this[n(437)][n(372)].dispatch(t, e, Dn)
				}
			}, {
				key: r(453),
				value: function(t) {
					var e = r;
					if (!this.o.momentum) return t[e(424)];
					var n = Math[e(410)](this[e(390)], 2) * this[e(439)][this.o[e(391)]];
					return n = Math[e(452)](this[e(442)], n), n = this[e(363)] > 0 ? -this.o[e(420)] * n : this.o[e(420)] * n, this.o[e(373)].up - this.o.time[e(418)] < this.o[e(423)] && 0 !== n && Math[e(402)](n) > this.o.offsetThreshold && (t[e(424)] += n), t
				}
			}, {
				key: r(412),
				value: function(t, e) {
					var n = r,
						i = Math[n(402)](this.down - this[n(395)]);
					if (this.o[n(425)] && this.o[n(373)].up - this.o[n(373)][n(461)] < this.o[n(455)] && i > this.o[n(392)]) {
						var a = e[this.o[n(391)]] < this.down ? n(411) : n(433);
						"forward" == a ? t[n(424)] -= this.o.snapStep / 2 : t[n(424)] += this.o.snapStep / 2, this.events.onSwipe[n(456)](a)
					}
					return t
				}
			}, {
				key: r(376),
				value: function(t) {
					var e = r;
					return this.o.snapping ? (t[e(424)] = Vn[e(371)](t[e(424)], this.o[e(400)]), t) : t
				}
			}, {
				key: "_addLimits",
				value: function(t) {
					var e = r;
					return this.o[e(407)] || (t[e(424)] = Math[e(432)](t[e(424)], this.min), t[e(424)] = Math[e(452)](t[e(424)], this[e(432)])), t
				}
			}, {
				key: "_calculateDuration",
				value: function(t) {
					var e = r,
						n = Math[e(402)](t[e(424)] - this[e(446)][this.o[e(391)]]);
					return t.duration = this.o[e(417)] * n / this[e(442)], t.duration = Math[e(432)](this.o[e(383)], t.duration), t
				}
			}, {
				key: "_requestDiff",
				value: function(t, e, n, i, a) {
					var o = r;
					return this.o[o(407)] || (e > i ? t *= (i + a - e) / a : e < n && (t *= -(n - a - e) / a)), t
				}
			}, {
				key: "tweenToSnap",
				value: function(t, e) {
					var n = r,
						i = this.o[n(351)] - this.o[n(400)] * e;
					this.tweenTo(t, i)
				}
			}, {
				key: r(438),
				value: function(t, e) {
					var n = r;
					if (0 === t) return this.setTo(e);
					qn({}, this.o[n(391)], e), e > this[n(432)] && (e = this.max), e < this[n(452)] && (e = this.min), this[n(428)][n(445)](), this[n(377)].tweens.remove(this.tweenScroll), this[n(428)] = this[n(377)][n(397)][n(357)](this[n(446)]).to(qn({}, this.o[n(391)], e), 1e3 * t, Phaser[n(362)][n(460)][n(409)]), this[n(428)].onUpdateCallback(this.handleUpdate, this), this[n(428)][n(355)][n(397)](this[n(426)], this), this[n(428)].start()
				}
			}, {
				key: r(408),
				value: function() {
					this[r(375)] = !1
				}
			}, {
				key: "setTo",
				value: function(t) {
					var e = r;
					t > this[e(432)] && (t = this.max), t < this[e(452)] && (t = this[e(452)]), this[e(446)][this.o[e(391)]] = t, this[e(428)][e(445)](), this[e(364)](), this[e(426)]()
				}
			}, {
				key: "handleUpdate",
				value: function() {
					var t = r;
					if (this.enabled) {
						this.o[t(407)] ? this[t(404)][t(387)] = Phaser[t(406)].wrap(this.scrollObject[this.o[t(391)]], this[t(452)], this[t(432)]) : this[t(404)].total = this[t(446)][this.o[t(391)]];
						var e = this[t(404)].total - this[t(386)];
						e < -this[t(427)] / 2 ? e += this[t(427)] : e > this[t(427)] / 2 && (e -= this[t(427)]), this.dispatchValues.step = e, this.dispatchValues[t(450)] = Vn[t(384)](this.dispatchValues.total, this.o[t(351)], this.o.to), this[t(437)][t(347)].dispatch(this[t(404)]), this.previousTotal = this[t(404)][t(387)]
					}
				}
			}, {
				key: r(426),
				value: function() {
					var t = r;
					this[t(378)] && (this.isScrolling = !1, this.o[t(420)] = 1, this[t(437)][t(355)].dispatch())
				}
			}, {
				key: r(366),
				value: function() {
					var t = r;
					this[t(452)] = Math[t(452)](this.o[t(351)], this.o.to), this[t(432)] = Math[t(432)](this.o[t(351)], this.o.to), this[t(427)] = Math[t(402)](this[t(432)] - this[t(452)]), this.previousTotal = this.o[t(351)]
				}
			}]) && Yn(t[n(348)], e), Object[n(380)](t, "prototype", {
				writable: !1
			}), i
		}();

	function er(t) {
		var e = fr;
		return (er = e(368) == typeof Symbol && e(369) == typeof Symbol[e(370)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(368) == typeof Symbol && t[n(363)] === Symbol && t !== Symbol[n(383)] ? n(369) : typeof t
		})(t)
	}

	function nr(t, e) {
		if (!(t instanceof e)) throw new TypeError(fr(373))
	}

	function rr(t, e) {
		for (var n = fr, r = 0; r < e[n(376)]; r++) {
			var i = e[r];
			i[n(386)] = i[n(386)] || !1, i[n(353)] = !0, n(361) in i && (i[n(389)] = !0), Object.defineProperty(t, i[n(351)], i)
		}
	}

	function ir() {
		var t = fr;
		return ir = typeof Reflect !== t(367) && Reflect[t(358)] ? Reflect[t(358)].bind() : function(e, n, r) {
			var i = t,
				a = ar(e, n);
			if (a) {
				var o = Object[i(384)](a, n);
				return o[i(358)] ? o[i(358)][i(380)](arguments.length < 3 ? e : r) : o[i(361)]
			}
		}, ir[t(391)](this, arguments)
	}

	function ar(t, e) {
		for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = ur(t)););
		return t
	}

	function or() {
		var t = ["construct", "20ozFFao", "handleDown", "key", "defineProperty", "configurable", "117168CXxaNq", "width", "bind", "8DzfIQQ", "get", "68332LcRGHN", "valueOf", "value", "this hasn't been initialised - super() hasn't been called", "constructor", "765651DTSwJO", "current", "12LwkpXr", "undefined", "function", "symbol", "iterator", "869519EXdnGE", "703782SjkkSQ", "Cannot call a class as a function", "setPrototypeOf", "2DBLTha", "length", "Derived constructors may only return object or undefined", "down", "15qdXEWw", "call", "old", "handleUp", "prototype", "getOwnPropertyDescriptor", "974328bgmDKf", "enumerable", "__proto__", "1034627vDnIAB", "writable", "direction", "apply", "sham"];
		return (or = function() {
			return t
		})()
	}

	function sr(t, e) {
		var n = fr;
		return (sr = Object[n(374)] ? Object[n(374)][n(356)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function cr(t, e) {
		var n = fr;
		if (e && ("object" === er(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(377));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(fr(362));
			return t
		}(t)
	}

	function ur(t) {
		var e = fr;
		return (ur = Object[e(374)] ? Object.getPrototypeOf[e(356)]() : function(t) {
			return t[e(387)] || Object.getPrototypeOf(t)
		})(t)
	}! function(t, e) {
		for (var n = fr, r = t();;) try {
			if (153146 == -parseInt(n(354)) / 1 + -parseInt(n(375)) / 2 * (-parseInt(n(364)) / 3) + -parseInt(n(359)) / 4 * (-parseInt(n(379)) / 5) + -parseInt(n(385)) / 6 + parseInt(n(371)) / 7 * (-parseInt(n(357)) / 8) + -parseInt(n(372)) / 9 * (-parseInt(n(394)) / 10) + -parseInt(n(388)) / 11 * (-parseInt(n(366)) / 12)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(or);
	var hr = function(t) {
		var e = fr;
		! function(t, e) {
			var n = fr;
			if (typeof e !== n(368) && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(383)] = Object.create(e && e[n(383)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(352)](t, n(383), {
				writable: !1
			}), e && sr(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = fr;
			if (typeof Reflect === t(367) || !Reflect[t(393)]) return !1;
			if (Reflect[t(393)][t(392)]) return !1;
			if (typeof Proxy === t(368)) return !0;
			try {
				return Boolean.prototype[t(360)].call(Reflect[t(393)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = fr,
				n = ur(a);
			if (o) {
				var r = ur(this).constructor;
				t = Reflect.construct(n, arguments, r)
			} else t = n[e(391)](this, arguments);
			return cr(this, t)
		});

		function c(t, e) {
			var n = fr,
				r = arguments[n(376)] > 2 && void 0 !== arguments[2] ? arguments[2] : {};
			return nr(this, c), s[n(380)](this, t, e, {
				x: e[n(355)],
				y: e.height
			}, r)
		}
		return n = c, i = fr, (r = [{
			key: e(350),
			value: function(t, n) {
				var r = e;
				this[r(381)] = this[r(378)] = n[this.o[r(390)]], ir(ur(c[r(383)]), r(350), this).call(this, t, n)
			}
		}, {
			key: e(382),
			value: function(t, n) {
				var r = e;
				this[r(365)] = n[this.o[r(390)]], ir(ur(c[r(383)]), r(382), this)[r(380)](this, t, n)
			}
		}]) && rr(n.prototype, r), Object[i(352)](n, i(383), {
			writable: !1
		}), c
	}(tr);

	function fr(t, e) {
		var n = or();
		return (fr = function(t, e) {
			return n[t -= 350]
		})(t, e)
	}

	function lr(t) {
		var e = yr;
		return (lr = e(283) == typeof Symbol && e(243) == typeof Symbol[e(259)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(271)] === Symbol && t !== Symbol[n(251)] ? n(243) : typeof t
		})(t)
	}

	function pr(t, e) {
		if (!(t instanceof e)) throw new TypeError(yr(287))
	}

	function yr(t, e) {
		var n = Ir();
		return (yr = function(t, e) {
			return n[t -= 239]
		})(t, e)
	}

	function dr(t, e) {
		for (var n = yr, r = 0; r < e[n(274)]; r++) {
			var i = e[r];
			i[n(261)] = i[n(261)] || !1, i[n(270)] = !0, n(253) in i && (i[n(277)] = !0), Object[n(240)](t, i.key, i)
		}
	}

	function vr() {
		var t = yr;
		return vr = typeof Reflect !== t(286) && Reflect[t(246)] ? Reflect[t(246)][t(273)]() : function(e, n, r) {
			var i = t,
				a = br(e, n);
			if (a) {
				var o = Object[i(272)](a, n);
				return o.get ? o.get[i(247)](arguments[i(274)] < 3 ? e : r) : o[i(253)]
			}
		}, vr[t(252)](this, arguments)
	}

	function br(t, e) {
		for (var n = yr; !Object[n(251)][n(280)][n(247)](t, e) && null !== (t = wr(t)););
		return t
	}

	function gr(t, e) {
		var n = yr;
		return (gr = Object[n(244)] ? Object[n(244)][n(273)]() : function(t, e) {
			return t[n(268)] = e, t
		})(t, e)
	}

	function mr(t, e) {
		var n = yr;
		if (e && ("object" === lr(e) || typeof e === n(283))) return e;
		if (void 0 !== e) throw new TypeError(n(248));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(yr(265));
			return t
		}(t)
	}

	function Ir() {
		var t = ["setPrototypeOf", "valueOf", "get", "call", "Derived constructors may only return object or undefined", "scroller", "add", "prototype", "apply", "value", "getPrototypeOf", "_addMask", "4881531LVCukj", "690130oahsYU", "registerClickables", "iterator", "_setPosition", "enumerable", "assign", "options", "2770713NMaHTO", "this hasn't been initialised - super() hasn't been called", "345087TvFuYB", "items", "__proto__", "2428QWTQen", "configurable", "constructor", "getOwnPropertyDescriptor", "bind", "length", "construct", "1540brJMbf", "writable", "searchForClicks", "min", "hasOwnProperty", "7765AMGUtg", "reset", "function", "134464gKNyjN", "events", "undefined", "Cannot call a class as a function", "701088PYRlVG", "24XRMCIv", "onAdded", "onUpdate", "defineProperty", "destroy", "2Gbzbat", "symbol"];
		return (Ir = function() {
			return t
		})()
	}

	function wr(t) {
		var e = yr;
		return (wr = Object[e(244)] ? Object[e(254)].bind() : function(t) {
			var n = e;
			return t[n(268)] || Object[n(254)](t)
		})(t)
	}! function(t, e) {
		for (var n = yr, r = t();;) try {
			if (829044 == -parseInt(n(266)) / 1 + -parseInt(n(242)) / 2 * (-parseInt(n(256)) / 3) + parseInt(n(269)) / 4 * (parseInt(n(281)) / 5) + -parseInt(n(288)) / 6 + parseInt(n(257)) / 7 * (parseInt(n(289)) / 8) + parseInt(n(264)) / 9 + parseInt(n(276)) / 10 * (-parseInt(n(284)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ir);
	var Sr = {
			direction: "y",
			autocull: !0,
			momentum: !0,
			bouncing: !0,
			snapping: !1,
			overflow: 100,
			padding: 10,
			searchForClicks: !1
		},
		kr = function(t) {
			var e = yr;
			! function(t, e) {
				var n = yr;
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
				t[n(251)] = Object.create(e && e[n(251)], {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), Object[n(240)](t, n(251), {
					writable: !1
				}), e && gr(t, e)
			}(c, t);
			var n, r, i, a, o, s = (a = c, o = function() {
				var t = yr;
				if (typeof Reflect === t(286) || !Reflect[t(275)]) return !1;
				if (Reflect[t(275)].sham) return !1;
				if (typeof Proxy === t(283)) return !0;
				try {
					return Boolean[t(251)][t(245)][t(247)](Reflect[t(275)](Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}(), function() {
				var t, e = yr,
					n = wr(a);
				if (o) {
					var r = wr(this)[e(271)];
					t = Reflect[e(275)](n, arguments, r)
				} else t = n[e(252)](this, arguments);
				return mr(this, t)
			});

			function c(t, e, n) {
				var r, i = yr,
					a = arguments[i(274)] > 3 && void 0 !== arguments[3] ? arguments[3] : {};
				return pr(this, c), (r = s[i(247)](this, t, e, jn(n), Object.assign({}, Sr, a))).scroller = new hr(r.game, r[i(255)](n), Object[i(262)]({
					from: 0,
					to: 0
				}, r.options)), r[i(249)].events[i(239)][i(250)]((function(t) {
					r[i(260)](t.total)
				})), r[i(285)][i(290)][i(250)]((function(t) {
					var e = i,
						n = Math[e(279)](-t, 0);
					r[e(249)].setFromTo(0, n), r[e(263)][e(278)] && r.scroller[e(258)](r[e(267)])
				})), r
			}
			return n = c, i = yr, (r = [{
				key: e(241),
				value: function() {
					var t = e;
					null !== this[t(249)] && (this[t(249)][t(241)](), this[t(249)] = null), vr(wr(c[t(251)]), t(241), this)[t(247)](this)
				}
			}, {
				key: e(282),
				value: function() {
					var t = e;
					this[t(260)](0), this[t(249)][t(282)]()
				}
			}]) && dr(n.prototype, r), Object[i(240)](n, i(251), {
				writable: !1
			}), c
		}(Mn),
		Or = Er;

	function Cr(t) {
		var e = Er;
		return (Cr = e(468) == typeof Symbol && e(490) == typeof Symbol[e(487)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(468) == typeof Symbol && t[n(449)] === Symbol && t !== Symbol[n(485)] ? n(490) : typeof t
		})(t)
	}

	function Tr(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Pr(t, e) {
		for (var n = Er, r = 0; r < e[n(467)]; r++) {
			var i = e[r];
			i[n(489)] = i.enumerable || !1, i.configurable = !0, "value" in i && (i[n(486)] = !0), Object[n(459)](t, i[n(450)], i)
		}
	}

	function xr() {
		var t = ["355052GbqobF", "__proto__", "Super expression must either be null or a function", "length", "function", "10LPODVa", "this hasn't been initialised - super() hasn't been called", "19462xIDGIt", "game", "getPrototypeOf", "height", "bind", "addChild", "list", "setViewList", "viewHeight", "object", "setPrototypeOf", "1703244pcaInJ", "11sFlBrx", "Group", "prototype", "writable", "iterator", "viewWidth", "enumerable", "symbol", "construct", "16yftRsy", "leftDistance", "create", "call", "viewList", "direction", "12AipjXy", "distanceBetweenRows", "8kQBGHP", "column", "Sprite", "396529ENqPqN", "undefined", "2415330KxvrUm", "constructor", "key", "columnWidth", "removeAll", "width", "26718YEFKho", "columnNumber", "sham", "rowHeight", "1122570qFHxix", "defineProperty", "add", "distanceBetweenColumns", "scroll", "Rectangle"];
		return (xr = function() {
			return t
		})()
	}

	function _r(t, e) {
		var n = Er;
		return (_r = Object[n(481)] ? Object[n(481)][n(475)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Rr(t, e) {
		var n = Er;
		if (e && (Cr(e) === n(480) || typeof e === n(468))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Er(470));
			return t
		}(t)
	}

	function jr(t) {
		var e = Er;
		return (jr = Object[e(481)] ? Object[e(473)][e(475)]() : function(t) {
			var n = e;
			return t[n(465)] || Object[n(473)](t)
		})(t)
	}

	function Er(t, e) {
		var n = xr();
		return (Er = function(t, e) {
			return n[t -= 441]
		})(t, e)
	}! function(t, e) {
		for (var n = Er, r = t();;) try {
			if (122790 == parseInt(n(471)) / 1 + parseInt(n(492)) / 2 * (parseInt(n(454)) / 3) + parseInt(n(464)) / 4 * (parseInt(n(469)) / 5) + -parseInt(n(441)) / 6 * (-parseInt(n(446)) / 7) + parseInt(n(443)) / 8 * (parseInt(n(458)) / 9) + parseInt(n(448)) / 10 * (-parseInt(n(483)) / 11) + -parseInt(n(482)) / 12) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(xr);
	var Br = function(t) {
			var e = Er;
			! function(t, e) {
				var n = Er;
				if (typeof e !== n(468) && null !== e) throw new TypeError(n(466));
				t.prototype = Object[n(494)](e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), Object.defineProperty(t, n(485), {
					writable: !1
				}), e && _r(t, e)
			}(c, t);
			var n, r, i, a, o, s = (a = c, o = function() {
				var t = Er;
				if (typeof Reflect === t(447) || !Reflect[t(491)]) return !1;
				if (Reflect.construct[t(456)]) return !1;
				if (typeof Proxy === t(468)) return !0;
				try {
					return Boolean[t(485)].valueOf[t(495)](Reflect[t(491)](Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}(), function() {
				var t, e = Er,
					n = jr(a);
				if (o) {
					var r = jr(this).constructor;
					t = Reflect[e(491)](n, arguments, r)
				} else t = n.apply(this, arguments);
				return Rr(this, t)
			});

			function c(t, e) {
				var n, r = Er,
					i = arguments[r(467)] > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
					a = arguments[r(467)] > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
					o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
					u = arguments[r(467)] > 5 && void 0 !== arguments[5] ? arguments[5] : null;
				Tr(this, c), n = s[r(495)](this, e, i, a, o, u), t && (n.x = t.x, n.y = t.y, n[r(455)] = t[r(444)], n[r(488)] = t[r(453)], n[r(479)] = t[r(474)], n[r(457)] = t[r(457)], n[r(451)] = t[r(451)], n[r(493)] = t[r(493)], n[r(497)] = t[r(497)], n[r(461)] = t[r(461)], n[r(442)] = t.distanceBetweenRows);
				var h = new(Phaser[r(484)])(game),
					f = new(Phaser[r(463)])(0, 0, n[r(488)], n[r(479)]);
				return "x" === n[r(497)] ? n[r(462)] = new kr(n.game, h, f, {
					direction: n[r(497)],
					searchForClicks: !0,
					padding: n[r(461)]
				}) : n[r(462)] = new kr(n[r(472)], h, f, {
					direction: n[r(497)],
					searchForClicks: !0,
					padding: n[r(442)]
				}), n[r(476)](h), n
			}
			return n = c, i = Er, (r = [{
				key: e(460),
				value: function(t) {
					var n = e;
					this[n(462)][n(460)](t)
				}
			}, {
				key: "removeAll",
				value: function() {
					this[e(462)].removeAll()
				}
			}, {
				key: e(496),
				set: function(t) {
					var n, r = e;
					if (this[r(452)](), this.list)
						for (var i = 0; i < this.list[r(467)]; i++) this[r(477)][i].destroy();
					for (this[r(477)] = t, i = 0; i < t[r(467)]; i++)
						if (i % this[r(455)] == 0 && (n = []), n.push(t[i]), n.length === this.columnNumber || i === t[r(467)] - 1) {
							var a = new Pn(this.game);
							a[r(455)] = this[r(455)], a.rowNumber = 1, a[r(488)] = this[r(488)], 1 === this[r(455)] && "x" === this[r(497)] && (a[r(488)] = this[r(451)]), a[r(451)] = this[r(451)], a[r(479)] = this[r(457)], a[r(493)] = this.leftDistance, a[r(461)] = this[r(461)], a[r(442)] = this[r(442)], a[r(478)](n), this.scroll[r(460)](a)
						}
				}
			}]) && Pr(n.prototype, r), Object[i(459)](n, "prototype", {
				writable: !1
			}), c
		}(Phaser[Or(445)]),
		Ar = Gr;

	function Fr(t) {
		var e = Gr;
		return (Fr = "function" == typeof Symbol && e(154) == typeof Symbol[e(177)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(169)] === Symbol && t !== Symbol[n(212)] ? "symbol" : typeof t
		})(t)
	}

	function Dr(t, e) {
		for (var n = Gr, r = 0; r < e[n(200)]; r++) {
			var i = e[r];
			i.enumerable = i.enumerable || !1, i[n(184)] = !0, n(138) in i && (i[n(172)] = !0), Object[n(151)](t, i[n(190)], i)
		}
	}

	function Nr(t, e) {
		var n = Gr;
		return (Nr = Object.setPrototypeOf ? Object.setPrototypeOf[n(201)]() : function(t, e) {
			return t[n(198)] = e, t
		})(t, e)
	}

	function Gr(t, e) {
		var n = Wr();
		return (Gr = function(t, e) {
			return n[t -= 138]
		})(t, e)
	}

	function Lr(t, e) {
		var n = Gr;
		if (e && ("object" === Fr(e) || typeof e === n(179))) return e;
		if (void 0 !== e) throw new TypeError(n(207));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Gr(175));
			return t
		}(t)
	}

	function Mr(t) {
		var e = Gr;
		return (Mr = Object[e(193)] ? Object[e(202)].bind() : function(t) {
			return t[e(198)] || Object.getPrototypeOf(t)
		})(t)
	}

	function Wr() {
		var t = ["height", "drawShareTournamentResult", "anchor", "63642ERzLGY", "48PZoKXi", "key", "Group", "shareImage", "setPrototypeOf", "20036rpnLqK", "result_p_title_", "270oaMIdU", "setTo", "__proto__", "cache", "length", "bind", "getPrototypeOf", "72QTMIaa", "_drawAvatar", "width", "homeScreen", "Derived constructors may only return object or undefined", "load", "updateTransform", "553463iVezST", "bitmapData", "prototype", "share_bg", "value", "create", "tour", "toDataURL", "image/png", "Bạn xếp hạng ", "langCode", "#ffffff", "center", "call", "add", "canvas", "construct", "defineProperty", "setText", ".\nKeep playing to earn more rewards!", "symbol", "2563639btnPjn", "6scHrTu", "game", "2717vFpZxb", "110MXuaex", "528399cyVVRp", "stage", "154kmTffa", "Super expression must either be null or a function", "valueOf", "#f9d744", "drawGroup", "image", "checkImageKey", "constructor", "no_avatar", "320602edivEz", "writable", "avatar", "make", "this hasn't been initialised - super() hasn't been called", "undefined", "iterator", "text", "function", "base64Image", "You ranked ", "Rectangle", "#67fe59", "configurable"];
		return (Wr = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = Gr, r = t();;) try {
			if (293770 == -parseInt(n(210)) / 1 + -parseInt(n(171)) / 2 * (parseInt(n(156)) / 3) + parseInt(n(194)) / 4 * (parseInt(n(159)) / 5) + parseInt(n(188)) / 6 * (parseInt(n(162)) / 7) + parseInt(n(189)) / 8 * (-parseInt(n(160)) / 9) + -parseInt(n(196)) / 10 * (parseInt(n(158)) / 11) + parseInt(n(203)) / 12 * (parseInt(n(155)) / 13)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Wr);
	const zr = function(t) {
		var e = Gr;
		! function(t, e) {
			var n = Gr;
			if ("function" != typeof e && null !== e) throw new TypeError(n(163));
			t[n(212)] = Object[n(139)](e && e[n(212)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(151)](t, "prototype", {
				writable: !1
			}), e && Nr(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Gr;
			if (typeof Reflect === t(176) || !Reflect[t(150)]) return !1;
			if (Reflect[t(150)].sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(212)][t(164)].call(Reflect[t(150)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Gr,
				n = Mr(a);
			if (o) {
				var r = Mr(this)[e(169)];
				t = Reflect[e(150)](n, arguments, r)
			} else t = n.apply(this, arguments);
			return Lr(this, t)
		});

		function c(t) {
			var e = Gr;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), s[e(147)](this, t)
		}
		return n = c, i = Gr, (r = [{
			key: "drawShareImage",
			value: function() {
				var t = Gr;
				this[t(139)](0, 0, t(192)), this[t(157)].stage[t(209)]();
				var e = this[t(157)].make[t(211)](800, 436);
				return e[t(166)](this), this[t(180)] = e[t(149)][t(141)]("image/png", 1), this[t(180)]
			}
		}, {
			key: e(186),
			value: function(t, n) {
				var r = e,
					i = this[r(139)](0, 0, r(213));
				i[r(205)] = 1080, i.height = 566, this[r(204)](459, 134, t), this[r(139)](540, 278, r(140), "tt").anchor[r(197)](.5, 0);
				var a = this[r(139)](550, 325, r(140), r(195) + CyberInstance.langCode);
				"en" == CyberInstance[r(144)] && (a.y = 330), a.anchor[r(197)](.5);
				var o = r(143) + t + ".\nTiếp tục cố gắng và những phần thưởng tuyệt vời nhé!";
				"en" == CyberInstance[r(144)] && (o = r(181) + t + r(153));
				var s = this[r(157)].make[r(178)](540, 440, o, {
					font: APP_FONT,
					fontSize: 20,
					fill: r(183),
					fontWeight: 500,
					align: r(146)
				});
				s[r(187)][r(197)](.5), this[r(148)](s), s[r(152)](o);
				var c = "+ " + u.formatCoinWithCommas(n),
					h = this.game[r(148)][r(178)](530, 510, c, {
						font: APP_FONT,
						fill: r(165),
						fontWeight: 900,
						fontSize: 40
					});
				this[r(148)](h), h[r(187)][r(197)](.5), h[r(152)](c), this[r(157)][r(161)][r(209)]();
				var f = this[r(157)][r(174)][r(211)](1080, 566);
				return f.drawGroup(this), this[r(180)] = f[r(149)][r(141)](r(142), 1), this[r(180)]
			}
		}, {
			key: "_drawAvatar",
			value: function(t, n, r) {
				var i = e,
					a = 164,
					o = i(173) + ne.instance.getGuserid();
				if (this[i(157)][i(199)][i(168)](o)) {
					this.avatar = this[i(139)](t, n, o);
					var s = new(Phaser[i(182)])(0, 0, a, a),
						c = game[i(174)][i(167)](0, 0, i(206), i(170));
					c.width = a, c[i(185)] = a;
					var u = game[i(174)][i(211)]();
					u[i(208)](c), c.destroy();
					var h = this[i(157)].make.bitmapData(a, a);
					h.alphaMask(o, u, s), this[i(173)].loadTexture(h), this[i(173)][i(205)] = a, this.avatar.height = a
				} else {
					var f = r + "",
						l = 80;
					f.length >= 5 ? l = 50 : 4 == f[i(200)] && (l = 60);
					var p = new Phaser.Text(this[i(157)], t + 82, n + 82, f, {
						font: APP_FONT,
						fill: i(145),
						fontWeight: 900,
						fontSize: l
					});
					this.add(p), p.anchor[i(197)](.5), p[i(152)](f)
				}
			}
		}]) && Dr(n[i(212)], r), Object.defineProperty(n, i(212), {
			writable: !1
		}), c
	}(Phaser[Ar(191)]);

	function Ur(t, e) {
		for (var n = Hr, r = 0; r < e[n(478)]; r++) {
			var i = e[r];
			i[n(455)] = i[n(455)] || !1, i[n(480)] = !0, n(460) in i && (i[n(458)] = !0), Object.defineProperty(t, i[n(477)], i)
		}
	}

	function Vr() {
		var t = ["writable", "putUtfString", "value", "replace", "SFSObject", "1132377LEDXQr", "initialize", "lang", "params", "push", "friendIDs", "getUtfStringArray", "addEventListener", "YOU_GOT_CHIP", "2vnjmss", "42wbRfCF", "set", "invitation", "delete", "key", "length", "defineProperty", "configurable", "sendGiftRequest", "then", "toISOString", "friendId", "send", "34184zCIEJU", "log", "EXTENSION_RESPONSE", "CLOSE", "removeGift", "65aRYeKs", "success", "Cannot call a class as a function", "7820saUkEn", "3711936OnlnDX", "catch", "player", "357637bAgSsh", "gifts", "12540fXOjzb", "shortenLargeNumber", "containsGift", "friend.collectGift", "164984YbJpZH", "ExtensionRequest", "setDataAsync", "instance", "updateInvitationData", "todayDate", "size", "containsInvitation", "getInt", "split", "801zpyUzW", "sfs", "459599YmEmxA", "prototype", "cmd", "getTimezoneOffset", "getConnectedPlayersAsync", "onExtensionResponse", "friend.sendGift", "SFSEvent", "enumerable", "inited", "has"];
		return (Vr = function() {
			return t
		})()
	}

	function Hr(t, e) {
		var n = Vr();
		return (Hr = function(t, e) {
			return n[t -= 428]
		})(t, e)
	}! function(t, e) {
		for (var n = Hr, r = t();;) try {
			if (462556 == parseInt(n(447)) / 1 * (parseInt(n(472)) / 2) + -parseInt(n(463)) / 3 + -parseInt(n(435)) / 4 * (-parseInt(n(491)) / 5) + parseInt(n(473)) / 6 * (-parseInt(n(429)) / 7) + parseInt(n(486)) / 8 * (-parseInt(n(445)) / 9) + -parseInt(n(494)) / 10 * (-parseInt(n(431)) / 11) + -parseInt(n(495)) / 12) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Vr);
	var Xr = null,
		qr = null,
		Kr = null;
	const Yr = function() {
		var t, e, n, r, i = Hr;

		function a() {
			var t = Hr;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Hr(493))
			})(this, a), this[t(456)] = !1, this[t(446)] = null, this[t(430)] = null
		}
		return t = a, e = [{
			key: i(464),
			value: function(t) {
				var e = i;
				!this[e(456)] && (this.inited = !0, this.sfs = t, this.sfs[e(470)](SFS2X[e(454)][e(488)], this[e(452)], this))
			}
		}, {
			key: "onExtensionResponse",
			value: function(t) {
				var e = i;
				if ("friend.getGifts" == t[e(449)]) {
					this[e(430)] = new Map;
					var n = t[e(466)][e(469)](e(468));
					if (n.length > 0)
						for (var r = 0; r < n[e(478)]; r++) this[e(430)][e(474)](n[r], !0)
				} else if ("friend.collectGift" == t[e(449)] && t[e(466)].getBool(e(492))) {
					var a = t[e(466)][e(443)]("coin");
					new G(game, {
						text: CyberInstance[e(465)][e(471)][e(461)]("%s", u[e(432)](a)),
						buttonText: CyberInstance.lang[e(489)],
						hideCloseButton: !0
					})
				}
			}
		}, {
			key: "getConnectedPlayersAsync",
			value: function() {
				var t = this;
				return new Promise((function(e, n) {
					var r = Hr,
						i = {};
					null == Kr ? FBInstant[r(428)][r(451)]()[r(482)]((function(t) {
						var n = r;
						Kr = t, i.players = t, 2 == Object.keys(i)[n(478)] && e(i)
					}))[r(496)]((function(t) {
						console[r(487)]("getConnectedPlayersAsync", t), n(t)
					})) : i.players = Kr, t.getInvitationDataAsync().then((function(t) {
						var n = r;
						i.invitation = t, 2 == Object.keys(i)[n(478)] && e(i)
					})).catch((function(t) {
						n(t)
					}))
				}))
			}
		}, {
			key: "getInvitationDataAsync",
			value: function() {
				return new Promise((function(t, e) {
					var n = Hr;
					qr ? t(qr) : FBInstant[n(428)].getDataAsync([n(440), n(475)]).then((function(e) {
						var r = n;
						qr = new Map;
						var i = new Date,
							a = new Date(i.getTime() - 6e4 * i[r(450)]())[r(483)]()[r(444)]("T")[0];
						if (e[r(440)] !== a) FBInstant[r(428)][r(437)]({
							todayDate: a,
							invitation: []
						});
						else if (e[r(475)] && e[r(475)][r(478)] > 0)
							for (var o = 0; o < e[r(475)][r(478)]; o++) qr[r(474)](e[r(475)][o], !0);
						t(qr)
					}))[n(496)]((function(t) {
						e(t)
					}))
				}))
			}
		}, {
			key: i(439),
			value: function(t) {
				var e = i;
				if (qr && !qr[e(457)](t) && qr[e(441)] < 30) {
					this[e(481)](t);
					var n = [];
					qr[e(474)](t, !0), qr.forEach((function(t, r) {
						var i = e;
						n[i(478)] < 30 && n[i(467)](r)
					})), FBInstant[e(428)][e(437)]({
						invitation: n
					})
				}
			}
		}, {
			key: i(442),
			value: function(t) {
				return qr.has(t)
			}
		}, {
			key: i(433),
			value: function(t) {
				var e = i;
				return this[e(430)][e(457)](t)
			}
		}, {
			key: i(490),
			value: function(t) {
				var e = i;
				return this.gifts[e(476)](t)
			}
		}, {
			key: "setGetGiftRequest",
			value: function() {
				var t = i;
				null == this[t(430)] && this[t(446)][t(485)](new(SFS2X[t(436)])("friend.getGifts"))
			}
		}, {
			key: i(481),
			value: function(t) {
				var e = i,
					n = new(SFS2X[e(462)]);
				n.putUtfString(e(484), t), this[e(446)][e(485)](new SFS2X.ExtensionRequest(e(453), n))
			}
		}, {
			key: "sendCollectGiftRequest",
			value: function(t) {
				var e = i,
					n = new SFS2X.SFSObject;
				n[e(459)]("friendId", t), this[e(446)][e(485)](new SFS2X.ExtensionRequest(e(434), n)), this[e(490)](t)
			}
		}], n = [{
			key: i(438),
			get: function() {
				return Xr || (Xr = new a), Xr
			}
		}], r = Hr, e && Ur(t.prototype, e), n && Ur(t, n), Object[r(479)](t, r(448), {
			writable: !1
		}), a
	}();

	function Jr(t) {
		var e = Qr;
		return (Jr = "function" == typeof Symbol && e(507) == typeof Symbol[e(536)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(593) == typeof Symbol && t[n(496)] === Symbol && t !== Symbol.prototype ? n(507) : typeof t
		})(t)
	}

	function Qr(t, e) {
		var n = ei();
		return (Qr = function(t, e) {
			return n[t -= 462]
		})(t, e)
	}

	function Zr(t, e) {
		for (var n = Qr, r = 0; r < e[n(468)]; r++) {
			var i = e[r];
			i[n(515)] = i[n(515)] || !1, i.configurable = !0, "value" in i && (i[n(583)] = !0), Object[n(469)](t, i[n(542)], i)
		}
	}

	function $r(t, e) {
		var n = Qr;
		return ($r = Object[n(533)] ? Object[n(533)][n(508)]() : function(t, e) {
			return t[n(494)] = e, t
		})(t, e)
	}

	function ti(t, e) {
		var n = Qr;
		if (e && (Jr(e) === n(550) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(520));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Qr(514));
			return t
		}(t)
	}

	function ei() {
		var t = ["NO_PUSH", "game", "onFileComplete", "Easing", "state", "Super expression must either be null or a function", "COLLECT", "friendList", "start", "loadTexture", "setText", "code", "friend_rounded", "create", "#f5c78a", "3110ZrqmZL", "Offline", "player", "writable", "2148190kKJruO", "icon_close", "then", "players", "sham", "Nhận Ngay", "addFriendToList", "22060lQVFbl", "connectedFriends", "function", "INVITE_MORE_FRIEND", "cache", "add", "getID", "checkImageKey", "sound", " sent you a gift! Hurry up and try it out!", "getName", "#ffffff", "length", "defineProperty", "inviteButton", "toUpperCase", "challenge", "button_green_257x63", "prototype", "createAsync", "299615XCEDMY", "instance", "avatar", "containsGift", "paused", "createView", "Text", "shareImage", "onFriendAction", "inputEnabled", "SAME_CONTEXT", "clickOnce", "destroy", "height", "FRIENDS", "homeScreenBG2", "apply", "playerId", "__proto__", "IMMEDIATE", "constructor", "setGetGiftRequest", "tween", "listView", "lang", "homeScreen", "push", "40tCbiOS", "#81425c", "load", "world", "symbol", "bind", "Play", "3006dVpmpC", "sendGiftAsync", "showContainer", "addText", "this hasn't been initialised - super() hasn't been called", "enumerable", "toString", "NHAN_VA_TANG", "width", "updateAsync", "Derived constructors may only return object or undefined", "#FFFFFF", "containsInvitation", "onInputDown", "gifts", "508072ZlwwEJ", "18JOrbTb", "CUSTOM", "events", "name", "context", "updateInvitationData", "inviteAsync", "setPrototypeOf", " tặng bạn một món quà!", "addChild", "iterator", "getPrototypeOf", "getConnectedPlayersAsync", "normal", "onCollect", "catch", "key", "Cannot call a class as a function", "avt", "construct", "no_avatar", "anchor", "avatarKey", "call", "object", "getPhoto", "2hllIWL", "getCurrentState", "1070100aQgrJZ", "click", "drawShareImage", "guserid", "9876uhxgRT", "14Txlkoq", "valueOf", "INVITED_TO_PLAY", "centerX", "photo", "undefined"];
		return (ei = function() {
			return t
		})()
	}

	function ni(t) {
		var e = Qr;
		return (ni = Object[e(533)] ? Object.getPrototypeOf.bind() : function(t) {
			var n = e;
			return t[n(494)] || Object[n(537)](t)
		})(t)
	}! function(t, e) {
		for (var n = Qr, r = t();;) try {
			if (102258 == -parseInt(n(591)) / 1 * (parseInt(n(552)) / 2) + -parseInt(n(558)) / 3 * (parseInt(n(503)) / 4) + -parseInt(n(476)) / 5 * (parseInt(n(526)) / 6) + parseInt(n(559)) / 7 * (parseInt(n(525)) / 8) + parseInt(n(510)) / 9 * (parseInt(n(580)) / 10) + parseInt(n(584)) / 11 + -parseInt(n(554)) / 12) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(ei);
	const ri = function(t) {
		var e = Qr;
		! function(t, e) {
			var n = Qr;
			if (typeof e !== n(593) && null !== e) throw new TypeError(n(570));
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(469)](t, "prototype", {
				writable: !1
			}), e && $r(t, e)
		}(s, t);
		var n, r, i, a, o = (i = s, a = function() {
			var t = Qr;
			if (typeof Reflect === t(564) || !Reflect.construct) return !1;
			if (Reflect[t(545)][t(588)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(474)][t(560)].call(Reflect[t(545)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Qr,
				n = ni(i);
			if (a) {
				var r = ni(this).constructor;
				t = Reflect[e(545)](n, arguments, r)
			} else t = n[e(492)](this, arguments);
			return ti(this, t)
		});

		function s(t) {
			var e, n = Qr;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Qr(543))
			}(this, s), e = o[n(549)](this, t), Yr[n(477)][n(538)]()[n(586)]((function(t) {
				var r = n;
				e[r(592)] = t[r(587)], Array.isArray(e.connectedFriends) || (e[r(592)] = [])
			})), Yr.instance[n(497)](), e
		}
		return n = s, (r = [{
			key: "isAssetReady",
			value: function() {
				var t = Qr;
				return this.game[t(595)].checkImageKey(t(491)) && Array.isArray(this[t(592)]) && Yr[t(477)][t(524)]
			}
		}, {
			key: e(481),
			value: function() {
				var t = e,
					n = this[t(578)](0, 0, t(491));
				n.width = this[t(566)].width, n[t(489)] = this.game[t(489)], n[t(485)] = !0;
				var r = this[t(566)][t(596)].text(this.game[t(506)][t(562)], 20, "", {
					font: APP_FONT,
					fontWeight: 700,
					fontSize: 40,
					fill: t(579)
				});
				if (r[t(547)].setTo(.5, 0), this[t(596)](r), r[t(575)](CyberInstance[t(500)][t(490)][t(471)]()), this.connectedFriends[t(468)] > 0) {
					var i = this.game[t(489)] - 200,
						a = this[t(566)][t(518)] / 2 - 431.5;
					for (var o in this.listView = new Br({
							x: a,
							y: 100,
							column: 3,
							width: 863,
							height: i,
							rowHeight: 156,
							columnWidth: 271,
							row: 1,
							leftDistance: 0,
							rightDistance: 0,
							distanceBetweenColumns: 25,
							distanceBetweenRows: 10,
							direction: "y"
						}, this[t(566)]), this[t(596)](this[t(499)]), this[t(572)] = [], this[t(592)]) {
						var s = this[t(592)][o],
							c = {
								playerId: s[t(462)](),
								isOnline: !1,
								name: s[t(466)](),
								avatar: s[t(551)](),
								coin: -1
							};
						this[t(572)][t(502)](this.addFriendToList(c))
					}
					this.listView.viewList = this.friendList, this[t(566)].load[t(567)][t(596)](this[t(567)], this), this[t(566)][t(505)][t(573)]()
				}
				this.inviteButton = new Lt(this.game, 0, 15, t(501), t(473)), this[t(470)].addText(CyberInstance[t(500)][t(594)]), this.inviteButton.x = this[t(566)][t(518)] / 2 - this[t(470)].width / 2, this.inviteButton.y = this.game[t(489)] - this[t(470)].height - 20, this[t(470)][t(555)](this.onInviteClick, this), this[t(596)](this[t(470)]);
				var u = this.create(0, 0, t(501), t(585));
				u.x = this[t(566)].width - u[t(518)] - 15, u.y = 15, u[t(485)] = !0, u[t(528)][t(523)].addOnce(this.close, this), this.createTransition()
			}
		}, {
			key: "createTransition",
			value: function() {
				var t = e;
				this.y = -100, this[t(566)][t(596)][t(498)](this).to({
					y: 0
				}, 500, Phaser[t(568)].Back.Out, !0)
			}
		}, {
			key: e(590),
			value: function(t) {
				var n = e,
					r = new Phaser.Image(this[n(566)], 10, 10, n(501), n(577));
				r[n(548)] = n(544) + t[n(493)];
				var i = new Phaser.Image(this[n(566)], 10, 10, n(501), n(546));
				r[n(535)](i), t.avatar && (r[n(563)] = i, this[n(566)].cache[n(463)](r[n(548)]) ? i[n(574)](r[n(548)]) : this[n(566)][n(505)].image(r[n(548)], t[n(478)])), i[n(518)] = 60, i[n(489)] = 60;
				var a = new(Phaser[n(482)])(this.game, i.x + i[n(518)] + 15, i.y, "", {
					font: APP_FONT,
					fontWeight: n(539),
					fontSize: 20,
					fill: n(521)
				});
				r[n(535)](a), a.setText(t[n(529)]);
				var o = new(Phaser[n(482)])(this[n(566)], a.x, a.y + 30, "", {
					font: APP_FONT,
					fontWeight: n(539),
					fontSize: 20,
					fill: n(504)
				});
				if (r[n(535)](o), o[n(575)](n(581)), Yr[n(477)][n(479)](t.playerId)) {
					var s = new Lt(this.game, 0, 15, n(501), "friend_join");
					s[n(513)](CyberInstance[n(500)][n(517)], {
						font: APP_FONT,
						fill: n(467),
						fontWeight: 500,
						fontSize: 17
					}), s[n(487)](this.onCollect, this), s.x = 10, s.y = 156 - s.height - 10, s[n(493)] = t[n(493)], r[n(535)](s)
				}
				var c = new Lt(this[n(566)], 0, 15, "homeScreen", "friend_invite");
				return c[n(513)](CyberInstance.lang.TANG_QUA, {
					font: APP_FONT,
					fill: n(467),
					fontWeight: 500,
					fontSize: 17
				}), c[n(555)](this[n(484)], this), c.x = 271 - c[n(518)] - 10, c.y = 156 - c[n(489)] - 10, c[n(493)] = t.playerId, r.addChild(c), r
			}
		}, {
			key: e(540),
			value: function(t) {
				var n = e,
					r = this,
					i = t[n(493)].toString();
				Yr[n(477)].sendCollectGiftRequest(i), t.visible = !1, !Yr[n(477)][n(522)](i) && FBInstant[n(530)][n(475)](i)[n(586)]((function() {
					r[n(511)](i)
				}))[n(541)]((function(t) {
					var e = n;
					t && t[e(576)] == e(486) && r[e(511)](i)
				}))
			}
		}, {
			key: e(484),
			value: function(t) {
				var n = e,
					r = this;
				CyberInstance[n(480)] && (CyberInstance[n(480)] = !1);
				var i = t[n(493)][n(516)]();
				FBInstant[n(530)].createAsync(i)[n(586)]((function() {
					var t = n;
					Yr[t(477)][t(522)](i) ? r.updateAsync() : r.sendGiftAsync(i)
				}))[n(541)]((function(t) {
					var e = n;
					t && t[e(576)] == e(486) && (Yr.instance.containsInvitation(i) ? r[e(519)]() : r[e(511)](i))
				}))
			}
		}, {
			key: e(511),
			value: function(t) {
				var n = e,
					r = new zr(this.game),
					i = r[n(556)]();
				r[n(488)]();
				var a = {
					action: n(527),
					cta: {
						default: n(571),
						localizations: {
							en_US: n(571),
							vi_VN: n(589)
						}
					},
					image: i,
					text: {
						default: '"' + FBInstant[n(582)].getName() + '"' + n(465),
						localizations: {
							en_US: '"' + FBInstant.player.getName() + '"' + n(465),
							vi_VN: '"' + FBInstant[n(582)][n(466)]() + '"' + n(534)
						}
					},
					template: n(472),
					data: {
						guserid: CyberInstance[n(557)],
						type: "sendGift"
					},
					strategy: "IMMEDIATE",
					notification: n(565)
				};
				FBInstant[n(519)](a)[n(586)]((function() {
					var e = n;
					Yr[e(477)][e(531)](t)
				}))
			}
		}, {
			key: "updateAsync",
			value: function() {
				var t = e,
					n = new zr(this[t(566)]),
					r = n[t(556)]();
				n[t(488)]();
				var i = {
					action: "CUSTOM",
					cta: t(509),
					image: r,
					text: '"' + FBInstant[t(582)][t(466)]() + '" ' + CyberInstance[t(500)][t(561)],
					template: t(472),
					data: {
						guserid: CyberInstance[t(557)]
					},
					strategy: t(495),
					notification: t(565)
				};
				FBInstant[t(519)](i)
			}
		}, {
			key: "onInviteClick",
			value: function() {
				var t = e;
				if (CyberInstance[t(480)] && (CyberInstance.paused = !1), this.game.cache[t(463)](t(483))) {
					var n = new zr(this[t(566)]),
						r = n[t(556)]();
					n.destroy(), FBInstant[t(532)]({
						image: r,
						text: '"' + FBInstant[t(582)][t(466)]() + '" ' + CyberInstance[t(500)][t(561)],
						data: {
							guserid: CyberInstance.guserid
						}
					})
				}
			}
		}, {
			key: e(567),
			value: function(t, n, r) {
				var i = e;
				if (r)
					for (var a in this[i(572)]) {
						var o = this[i(572)][a];
						if (o[i(548)] == n) {
							o[i(563)][i(574)](n), o.photo[i(518)] = 60, o[i(563)].height = 60;
							break
						}
					}
			}
		}, {
			key: "close",
			value: function() {
				var t = e;
				CyberInstance[t(464)].playButtonSound(), this[t(566)][t(569)][t(553)]()[t(512)](), this[t(566)][t(505)][t(567)].remove(this[t(567)], this), this[t(592)] = null, this[t(488)](!0)
			}
		}]) && Zr(n[Qr(474)], r), Object.defineProperty(n, "prototype", {
			writable: !1
		}), s
	}(P);

	function ii(t) {
		var e = ui;
		return (ii = "function" == typeof Symbol && e(178) == typeof Symbol[e(190)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(169) == typeof Symbol && t[n(211)] === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function ai(t, e) {
		for (var n = ui, r = 0; r < e[n(220)]; r++) {
			var i = e[r];
			i.enumerable = i[n(175)] || !1, i.configurable = !0, "value" in i && (i[n(219)] = !0), Object[n(208)](t, i[n(187)], i)
		}
	}

	function oi(t, e) {
		var n = ui;
		return (oi = Object[n(173)] ? Object[n(173)][n(165)]() : function(t, e) {
			return t[n(230)] = e, t
		})(t, e)
	}

	function si(t, e) {
		var n = ui;
		if (e && (ii(e) === n(202) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(179));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(ui(164));
			return t
		}(t)
	}

	function ci(t) {
		var e = ui;
		return (ci = Object[e(173)] ? Object[e(188)][e(165)]() : function(t) {
			return t[e(230)] || Object.getPrototypeOf(t)
		})(t)
	}

	function ui(t, e) {
		var n = hi();
		return (ui = function(t, e) {
			return n[t -= 164]
		})(t, e)
	}

	function hi() {
		var t = ["cache", "iterator", "Cannot call a class as a function", "bg_popup_large", "1063431rDLihi", "276502267440986", "414883896633176", "moregame", "310wpFlZB", "addOverlay", "sound", "addGameIcons", "anchor", "object", "log", "valueOf", "game_yatzy_icon", "GAME KHÁC", "2ubuGja", "defineProperty", "switchGameAsync", "onInputDown", "constructor", "addOnce", "catch", "undefined", "57158BhOszC", "game_tlmn_icon", "addChild", "background", "writable", "length", "apply", "click", "make", "4TbYzqR", "text", "construct", "1994495twJRII", "sprite", "create", "__proto__", "MORE GAME", "553431568952213", "this hasn't been initialised - super() hasn't been called", "bind", "call", "addIcon", "close", "function", "prototype", "homeScreen", "32868BiayLB", "setPrototypeOf", "#ebdac0", "enumerable", "langCode", "width", "symbol", "Derived constructors may only return object or undefined", "game_lucky9_icon", "327296XdyPld", "2420243lzfQwR", "game", "events", "image", "12024biVmsC", "key", "getPrototypeOf"];
		return (hi = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = ui, r = t();;) try {
			if (308657 == -parseInt(n(207)) / 1 * (-parseInt(n(215)) / 2) + parseInt(n(193)) / 3 * (parseInt(n(224)) / 4) + parseInt(n(227)) / 5 + -parseInt(n(186)) / 6 + -parseInt(n(182)) / 7 + -parseInt(n(181)) / 8 + -parseInt(n(172)) / 9 * (parseInt(n(197)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(hi);
	const fi = function(t) {
		var e = ui;
		! function(t, e) {
			var n = ui;
			if (typeof e !== n(169) && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(170)] = Object[n(229)](e && e[n(170)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(208)](t, n(170), {
				writable: !1
			}), e && oi(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = ui;
			if (typeof Reflect === t(214) || !Reflect[t(226)]) return !1;
			if (Reflect[t(226)].sham) return !1;
			if (typeof Proxy === t(169)) return !0;
			try {
				return Boolean[t(170)][t(204)][t(166)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = ui,
				n = ci(a);
			if (o) {
				var r = ci(this)[e(211)];
				t = Reflect[e(226)](n, arguments, r)
			} else t = n[e(221)](this, arguments);
			return si(this, t)
		});

		function c(t) {
			var e = ui;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(ui(191))
			}(this, c), s[e(166)](this, t)
		}
		return n = c, i = ui, (r = [{
			key: "isAssetReady",
			value: function() {
				var t = ui;
				return this[t(183)][t(189)].checkImageKey(t(196))
			}
		}, {
			key: "createView",
			value: function() {
				var t = ui,
					e = this;
				this[t(198)](), this.background = this[t(229)](0, 0, t(171), t(192)), this[t(218)].x = this[t(183)][t(177)] / 2 - this[t(218)][t(177)] / 2, this[t(218)].y = this[t(183)].height / 2 - this[t(218)].height / 2;
				var n = this[t(183)][t(223)][t(225)](this[t(218)][t(177)] / 2, 20, "vn" == CyberInstance[t(176)] ? t(206) : t(231), {
					font: APP_FONT,
					fill: t(174),
					fontWeight: 700,
					fontSize: 30
				});
				n[t(201)].setTo(.5, 0), this[t(218)].addChild(n);
				var r = this.game[t(223)][t(228)](0, 15, t(171), "icon_close");
				r.x = this.background[t(177)] - r[t(177)] - 15, r.inputEnabled = !0, r[t(184)][t(210)][t(212)]((function() {
					var n = t;
					CyberInstance[n(199)].playButtonSound(), e[n(168)]()
				})), this[t(218)][t(217)](r), this[t(200)](), this.createTransition()
			}
		}, {
			key: e(200),
			value: function() {
				var t = e,
					n = 80,
					r = this.addIcon(t(216), t(232), 60, n),
					i = this[t(167)]("game_pokdeng_icon", "253585709796815", r.x + r[t(177)] + 40, n);
				this[t(167)]("game_phom_icon", t(194), i.x + i[t(177)] + 40, n), n += r.height + 15, r = this.addIcon(t(205), t(195), 60, n), i = this[t(167)](t(180), "487455162408511", r.x + r[t(177)] + 40, n), this.addIcon("game_pusoy_icon", "233523042137965", i.x + i[t(177)] + 40, n)
			}
		}, {
			key: "addIcon",
			value: function(t, n, r, i) {
				var a = e,
					o = new Lt(this[a(183)], r, i, "moregame", t);
				return o[a(222)]((function() {
					var t = a;
					FBInstant[t(209)](n)[t(213)]((function(e) {
						console[t(203)](e)
					}))
				})), this.background[a(217)](o), o
			}
		}, {
			key: "addIconCommingSoon",
			value: function(t, n, r, i) {
				var a = e,
					o = this[a(183)][a(223)][a(185)](r, i, a(196), t + "_commingsoon");
				return this[a(218)].addChild(o), o
			}
		}]) && ai(n[i(170)], r), Object[i(208)](n, i(170), {
			writable: !1
		}), c
	}(P);

	function li(t, e) {
		for (var n = yi, r = 0; r < e[n(133)]; r++) {
			var i = e[r];
			i[n(138)] = i[n(138)] || !1, i.configurable = !0, n(136) in i && (i[n(147)] = !0), Object[n(131)](t, i.key, i)
		}
	}

	function pi() {
		var t = ["89879lgWvBN", "openFriendPopup", "screen", "onHelpClick", "8yfQhNi", "homeScreen", "553272FiTnCc", "245740QswGHZ", "friendPopup", "11wPqgFH", "defineProperty", "icon_help", "length", "openMoreGame", "openHelpPopup", "value", "524631ESAkJD", "enumerable", "add", "8354350EvMRYP", "Cannot call a class as a function", "1874537zwPqyb", "9683235TcXRXZ", "game", "2bXLsvS", "open", "writable", "width", "destroy", "prototype", "openSettingPopup", "click", "95hztlEM", "settingPopup", "icon_friend", "icon_setting", "getPlatform", "icon_moregame", "container"];
		return (pi = function() {
			return t
		})()
	}

	function yi(t, e) {
		var n = pi();
		return (yi = function(t, e) {
			return n[t -= 127]
		})(t, e)
	}! function(t, e) {
		for (var n = yi, r = t();;) try {
			if (651780 == -parseInt(n(160)) / 1 + -parseInt(n(145)) / 2 * (-parseInt(n(137)) / 3) + -parseInt(n(128)) / 4 * (-parseInt(n(153)) / 5) + -parseInt(n(127)) / 6 + parseInt(n(142)) / 7 * (-parseInt(n(164)) / 8) + -parseInt(n(143)) / 9 + parseInt(n(140)) / 10 * (parseInt(n(130)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(pi);
	const di = function() {
		var t, e, n, r = yi;

		function i(t) {
			var e = yi;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(yi(141))
			})(this, i), this[e(162)] = t;
			var n = new Lt(this[e(162)].game, 0, 15, "homeScreen", e(156));
			n.x = this.screen[e(144)][e(148)] - n.width - 15, n[e(152)](this[e(151)], this), this[e(162)][e(159)][e(139)](n);
			var r = new Lt(this.screen[e(144)], 0, 15, e(165), e(132));
			r.x = n.x - r[e(148)] - 15, r.click(this[e(135)], this), this[e(162)].container[e(139)](r);
			var a = new Lt(this[e(162)][e(144)], 0, 15, e(165), e(155));
			if (a.x = r.x - a[e(148)] - 15, a[e(152)](this[e(161)], this), this.screen.container[e(139)](a), "IOS" != FBInstant[e(157)]()) {
				var o = new Lt(this[e(162)][e(144)], 0, 15, "homeScreen", e(158));
				o.x = a.x - a.width - 15, o[e(152)](this[e(134)], this), this[e(162)].container[e(139)](o)
			}
		}
		return t = i, n = yi, (e = [{
			key: "openSettingPopup",
			value: function() {
				var t = yi;
				this[t(154)] ? this[t(154)][t(146)]() : this[t(154)] = new gn(this[t(162)][t(144)])
			}
		}, {
			key: "openFriendPopup",
			value: function() {
				var t = yi;
				this[t(162)].hideContainer(), this[t(129)] = new ri(this[t(162)][t(144)])
			}
		}, {
			key: r(135),
			value: function() {
				CyberInstance[r(163)].dispatch()
			}
		}, {
			key: r(134),
			value: function() {
				new fi(this.screen.game)
			}
		}, {
			key: r(149),
			value: function() {
				var t = r;
				this[t(162)] = null, this.friendPopup = null, this[t(154)] = null
			}
		}]) && li(t[n(150)], e), Object.defineProperty(t, n(150), {
			writable: !1
		}), i
	}();

	function vi(t) {
		var e = Si;
		return (vi = "function" == typeof Symbol && e(418) == typeof Symbol[e(372)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(309) == typeof Symbol && t[n(351)] === Symbol && t !== Symbol[n(352)] ? "symbol" : typeof t
		})(t)
	}

	function bi(t, e) {
		for (var n = Si, r = 0; r < e[n(354)]; r++) {
			var i = e[r];
			i[n(379)] = i[n(379)] || !1, i[n(371)] = !0, "value" in i && (i[n(404)] = !0), Object[n(307)](t, i[n(405)], i)
		}
	}

	function gi(t, e) {
		var n = Si;
		return (gi = Object[n(380)] ? Object[n(380)][n(311)]() : function(t, e) {
			return t[n(323)] = e, t
		})(t, e)
	}

	function mi(t, e) {
		var n = Si;
		if (e && (vi(e) === n(329) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(349));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Si(415));
			return t
		}(t)
	}

	function Ii(t) {
		var e = Si;
		return (Ii = Object[e(380)] ? Object[e(391)][e(311)]() : function(t) {
			var n = e;
			return t[n(323)] || Object[n(391)](t)
		})(t)
	}! function(t, e) {
		for (var n = Si, r = t();;) try {
			if (196862 == -parseInt(n(318)) / 1 * (-parseInt(n(319)) / 2) + -parseInt(n(374)) / 3 + parseInt(n(332)) / 4 + parseInt(n(421)) / 5 * (-parseInt(n(408)) / 6) + parseInt(n(377)) / 7 + -parseInt(n(398)) / 8 * (-parseInt(n(302)) / 9) + -parseInt(n(388)) / 10 * (parseInt(n(325)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(ki);
	const wi = function(t) {
		var e = Si;
		! function(t, e) {
			var n = Si;
			if (typeof e !== n(309) && null !== e) throw new TypeError(n(314));
			t[n(352)] = Object[n(365)](e && e[n(352)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, n(352), {
				writable: !1
			}), e && gi(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Si;
			if (typeof Reflect === t(382) || !Reflect[t(381)]) return !1;
			if (Reflect.construct[t(339)]) return !1;
			if (typeof Proxy === t(309)) return !0;
			try {
				return Boolean[t(352)][t(402)].call(Reflect[t(381)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Si,
				n = Ii(a);
			if (o) {
				var r = Ii(this)[e(351)];
				t = Reflect[e(381)](n, arguments, r)
			} else t = n[e(396)](this, arguments);
			return mi(this, t)
		});

		function c(t) {
			var e = Si;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Si(362))
			}(this, c), s[e(343)](this, t)
		}
		return n = c, i = Si, (r = [{
			key: e(338),
			value: function() {
				var t = e;
				return game[t(341)].checkImageKey(t(420))
			}
		}, {
			key: "createView",
			value: function() {
				var t = e,
					n = this;
				this[t(383)](), this.bg = this.create(this[t(301)][t(373)][t(368)], this[t(301)][t(373)][t(400)], t(420), t(356)), this.bg[t(413)][t(387)](.5), this.bg.animations[t(407)](t(306), [t(321), "spin_bg_2"]), this[t(399)] = this.create(0, 0, "spinAtlas", t(411)), this[t(399)][t(413)].set(.5), this.bg.addChild(this.spinMain), this[t(320)] = this.create(0, 0, t(420), t(366)), this[t(320)][t(413)][t(376)](.5, 0), this[t(320)].y = 8 - this[t(320)][t(375)], this[t(320)][t(393)].add(t(342), [t(366), "spin_highlight_1"]), this[t(320)].visible = !1, this.bg[t(308)](this.spinHighLight), this[t(361)] = this[t(365)](0, 0, "spinAtlas", t(324)), this.spinBtn.anchor[t(387)](.5), this.spinBtn[t(395)] = !0, this[t(361)].events[t(348)][t(406)](this[t(337)], this), this.bg[t(308)](this[t(361)]);
				var r = this[t(301)][t(407)][t(315)](0, 0, CyberInstance.lang.SPIN, {
					font: APP_FONT,
					fontSize: 35,
					fill: t(347),
					fontWeight: 900
				});
				r[t(413)].setTo(.5), this[t(361)][t(308)](r), r[t(410)](CyberInstance[t(316)].SPIN), this[t(327)] = this[t(365)](0, 0, t(420), t(331)), this.spinPointer.y = -this.bg[t(375)] / 2 - 2, this[t(327)][t(413)][t(387)](.5, 0), this.bg[t(308)](this[t(327)]), this[t(340)] = new Lt(this[t(301)], 0, 15, t(334), t(310)), this[t(340)].x = this.game[t(390)] / 2 + this[t(399)].width / 2, this.closeButton.click((function() {
					n.destroy()
				})), this.add(this.closeButton), this.randomDirection = 0, this.maxTextHeight = 290, this.bg[t(392)].setTo(.6), this[t(301)][t(407)][t(401)](this.bg.scale).to({
					x: 1,
					y: 1
				}, 1e3, Phaser[t(385)][t(358)][t(330)], !0)
			}
		}, {
			key: e(337),
			value: function() {
				var t = e;
				if (this[t(340)][t(346)] = !1, CyberInstance[t(386)][t(344)](), !0 === CyberGlobalData.spinWatched) {
					var n = new(SFS2X[t(397)]);
					n[t(335)]("ad", !0), CyberInstance.socket.send(new(SFS2X[t(359)])(t(326), n))
				} else CyberInstance[t(303)][t(419)](new(SFS2X[t(359)])("luckywheels.spin"))
			}
		}, {
			key: "onSpinWheelResponse",
			value: function(t) {
				var n = e;
				this[n(357)] = t, this.randomDirection = 0;
				var r = 24 * -[2e4, 1e5, 5e4, 2e4, 2e5, 5e4, 2e4, 5e5, 1e5, 2e4, 5e4, 1e5, 2e4, 5e4, 3e5][n(409)](t.value) + 2 * this[n(328)],
					i = game.add[n(401)](this[n(399)]).to({
						angle: 1440 + r
					}, 1300, Phaser[n(385)].Quadratic[n(330)], !1),
					a = game[n(407)][n(401)](i).to({
						timeScale: .1
					}, 1950, n(345), !1);
				i[n(353)].add(this[n(355)], this), i[n(378)](), a[n(378)](), this.bg[n(393)][n(363)]("spinAnim", 4, !0)
			}
		}, {
			key: e(355),
			value: function() {
				var t = e,
					n = this;
				this.bg[t(393)][t(336)](), this[t(417)](), setTimeout((function() {
					var e = t;
					try {
						n[e(333)]()
					} catch (t) {
						console[e(322)](t), n[e(422)]()
					}
				}), 600)
			}
		}, {
			key: e(333),
			value: function() {
				var t = e,
					n = this,
					r = this.create(0, 0, t(420), t(367));
				r.x = this.game[t(373)][t(368)] - r[t(390)] / 2, r.y = this[t(301)][t(373)].centerY + 40;
				var i = r.x + 100;
				this[t(384)](u.formatCoinWithCommas(this[t(357)][t(370)]), CyberInstance.lang[t(389)], i, r.y + 30);
				var a = [0, 10, 20, 30, 40, 50];
				i += 200;
				var o = this[t(357)][t(305)] > a[t(354)] ? a[a.length - 1] : a[this[t(357)][t(305)] - 1];
				this[t(384)]("+" + o + "%", this[t(357)].days + " " + CyberInstance[t(316)].NGAY_LIEN_TIEP, i, r.y + 30), i += 200, this.addTextField("= " + u[t(313)](this[t(357)].coin), null, i, r.y + 30);
				var s = new Lt(this[t(301)], 0, 15, t(334), t(412));
				s[t(317)](CyberInstance[t(316)].NHAN.toUpperCase()), s.x = r.x + r[t(390)] / 2 - s[t(390)] / 2, s.y = r.y + r.height - s.height - 25, s[t(394)]((function() {
					var e = t;
					p[e(414)](e(360), n[e(357)][e(312)]), CyberInstance[e(303)][e(350)] && CyberInstance[e(303)][e(419)](new SFS2X.ExtensionRequest(e(364))), n[e(422)]()
				})), this[t(407)](s)
			}
		}, {
			key: "addTextField",
			value: function(t, n, r, i) {
				var a = e,
					o = this.create(r, i, "homeScreen", a(416)),
					s = this.game[a(407)][a(315)](o.width / 2, o[a(375)] / 2, t, {
						font: APP_FONT,
						fontSize: 20,
						fill: "#FFFFFF",
						fontWeight: "500"
					});
				if (s.anchor[a(387)](.5), o[a(308)](s), s[a(410)](t), n) {
					var c = this.game.add[a(315)](o.x + o[a(390)] / 2, o.y + o.height + 10, n, {
						font: APP_FONT,
						fontSize: 16,
						fill: a(304),
						fontWeight: a(369)
					});
					c[a(413)][a(387)](.5, 0), this[a(407)](c), c[a(410)](n)
				}
			}
		}, {
			key: e(417),
			value: function() {
				var t = e;
				0 !== this.randomDirection && (this[t(320)][t(403)] = 5 * this[t(328)], this.spinHighLight.x = this.spinHighLight.x + 19.261 * this[t(328)], this[t(320)].y += .159), this.highLightEffect()
			}
		}, {
			key: "highLightEffect",
			value: function() {
				var t = e;
				this.spinHighLight[t(346)] = !0, this[t(320)][t(363)](t(342), 4, !0)
			}
		}]) && bi(n[i(352)], r), Object.defineProperty(n, i(352), {
			writable: !1
		}), c
	}(P);

	function Si(t, e) {
		var n = ki();
		return (Si = function(t, e) {
			return n[t -= 301]
		})(t, e)
	}

	function ki() {
		var t = ["500", "value", "configurable", "iterator", "world", "549759XSadKj", "height", "set", "2598715JKCjKB", "start", "enumerable", "setPrototypeOf", "construct", "undefined", "addOverlay", "addTextField", "Easing", "sound", "setTo", "60nBtPFC", "LUCKY_WHEEL", "width", "getPrototypeOf", "scale", "animations", "clickOnce", "inputEnabled", "apply", "SFSObject", "8pXaqyC", "spinMain", "centerY", "tween", "valueOf", "angle", "writable", "key", "addOnce", "add", "215436BqgAHg", "indexOf", "setText", "spin_main", "button_green_257x63", "anchor", "dispatchEvent", "this hasn't been initialised - super() hasn't been called", "text_bg_136x49", "rePositionSpinHighLight", "symbol", "send", "spinAtlas", "20VMQUfG", "close", "game", "5283xyMOJt", "socket", "#f59eac", "days", "spinAnim", "defineProperty", "addChild", "function", "icon_close", "bind", "coin", "formatCoinWithCommas", "Super expression must either be null or a function", "text", "lang", "addText", "581nqdrVF", "284zudtjn", "spinHighLight", "spin_bg_1", "log", "__proto__", "button_spin2", "208934MVnOsZ", "luckywheels.spin", "spinPointer", "randomDirection", "object", "Out", "pin_pointer", "733476WqlILB", "openSpinPrizeMenu", "homeScreen", "putBool", "stop", "onSpinBtnClick", "isAssetReady", "sham", "closeButton", "cache", "colorAnim", "call", "playButtonSound", "Linear", "visible", "#ffffff", "onInputDown", "Derived constructors may only return object or undefined", "isConnected", "constructor", "prototype", "onComplete", "length", "winPrize", "spin_bg", "prize", "Elastic", "ExtensionRequest", "addProfileCoin", "spinBtn", "Cannot call a class as a function", "play", "profile.refreshCoin", "create", "spin_highlight", "bg_claim", "centerX"];
		return (ki = function() {
			return t
		})()
	}

	function Oi(t) {
		var e = xi;
		return (Oi = e(388) == typeof Symbol && "symbol" == typeof Symbol[e(418)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(388) == typeof Symbol && t[n(404)] === Symbol && t !== Symbol[n(435)] ? n(432) : typeof t
		})(t)
	}

	function Ci() {
		var t = ["INVITE_BUTTON", "width", "sham", "bind", "bold", "valueOf", "11185160HmNuRC", "FB_INVITE_DESC", "center", "onInputDown", "iterator", "#eaa2ad", "playButtonSound", "enumerable", "8579888NBYsae", "9tZaNUp", "background", "addOverlay", "onInvite", "writable", "cache", "formatCoinWithCommas", "createTransition", "sprite", "symbol", "length", "INVITED_TO_PLAY", "prototype", "Super expression must either be null or a function", "setPrototypeOf", "undefined", "closeButton", "addOnce", "51QGZRgs", "call", "make", "getPrototypeOf", "invite_popup_bg", "configurable", "checkImageKey", "homeScreen", "object", "shareImage", "inputEnabled", "height", "key", "close", "140llrFCN", "addChild", "this hasn't been initialised - super() hasn't been called", "setTo", "__proto__", "setText", "apply", "function", "Text", "click", "create", "toUpperCase", "game", "72868SjSQDc", "value", "addCloseButton", "746246JMMcBe", "anchor", "defineProperty", "52050xoeKdB", "4143665BTVKuO", "lang", "105000qRdCkb", "constructor", "inviteButton", "construct", "addText"];
		return (Ci = function() {
			return t
		})()
	}

	function Ti(t, e) {
		for (var n = xi, r = 0; r < e[n(433)]; r++) {
			var i = e[r];
			i[n(421)] = i[n(421)] || !1, i[n(372)] = !0, n(395) in i && (i[n(427)] = !0), Object[n(399)](t, i[n(379)], i)
		}
	}

	function Pi(t, e) {
		var n = xi;
		return (Pi = Object[n(363)] ? Object.setPrototypeOf[n(411)]() : function(t, e) {
			return t[n(385)] = e, t
		})(t, e)
	}

	function xi(t, e) {
		var n = Ci();
		return (xi = function(t, e) {
			return n[t -= 362]
		})(t, e)
	}

	function _i(t, e) {
		var n = xi;
		if (e && (Oi(e) === n(375) || typeof e === n(388))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError(xi(383));
			return t
		}(t)
	}

	function Ri(t) {
		var e = xi;
		return (Ri = Object[e(363)] ? Object[e(370)][e(411)]() : function(t) {
			var n = e;
			return t[n(385)] || Object[n(370)](t)
		})(t)
	}! function(t, e) {
		for (var n = xi, r = t();;) try {
			if (548145 == -parseInt(n(397)) / 1 + parseInt(n(394)) / 2 * (parseInt(n(367)) / 3) + -parseInt(n(403)) / 4 + parseInt(n(401)) / 5 + -parseInt(n(400)) / 6 * (parseInt(n(381)) / 7) + parseInt(n(422)) / 8 * (-parseInt(n(423)) / 9) + parseInt(n(414)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ci);
	var ji = 1e6;
	const Ei = function(t) {
		var e = xi;
		! function(t, e) {
			var n = xi;
			if (typeof e !== n(388) && null !== e) throw new TypeError(n(362));
			t[n(435)] = Object[n(391)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(399)](t, n(435), {
				writable: !1
			}), e && Pi(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = xi;
			if (typeof Reflect === t(364) || !Reflect.construct) return !1;
			if (Reflect[t(406)][t(410)]) return !1;
			if (typeof Proxy === t(388)) return !0;
			try {
				return Boolean[t(435)][t(413)][t(368)](Reflect[t(406)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = xi,
				n = Ri(a);
			if (o) {
				var r = Ri(this)[e(404)];
				t = Reflect[e(406)](n, arguments, r)
			} else t = n[e(387)](this, arguments);
			return _i(this, t)
		});

		function c(t) {
			var e = xi;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), s[e(368)](this, t)
		}
		return n = c, i = xi, (r = [{
			key: "isAssetReady",
			value: function() {
				var t = xi;
				return this[t(393)][t(428)][t(373)](t(371)) && this[t(393)][t(428)][t(373)](t(376))
			}
		}, {
			key: "createView",
			value: function() {
				var t = xi;
				this[t(425)](), this[t(424)] = this[t(391)](0, 0, t(371)), this.background.x = this[t(393)][t(409)] / 2 - this[t(424)][t(409)] / 2, this[t(424)].y = this[t(393)][t(378)] / 2 - this[t(424)][t(378)] / 2, this[t(405)] = new Lt(this[t(393)], 0, 0, t(374), "button_green_257x63"), this[t(405)][t(407)](CyberInstance[t(402)][t(408)][t(392)]()), this.inviteButton.x = this.background[t(409)] / 2 - this[t(405)].width / 2, this[t(405)].y = this[t(424)].height - this[t(405)][t(378)] - 30, this[t(405)][t(390)](this[t(426)], this), this[t(424)][t(382)](this[t(405)]);
				var e = new(Phaser[t(389)])(this[t(393)], 125, 123, "", {
					font: APP_FONT,
					fontWeight: t(412),
					fontSize: 24,
					fill: "#ecbe01",
					align: t(416)
				});
				e[t(398)][t(384)](.5, 0), this.background[t(382)](e), e[t(386)]("+" + u[t(429)](ji));
				var n = CyberInstance[t(402)][t(415)].replace("%s", u.shortenLargeNumber(ji)),
					r = new(Phaser[t(389)])(this[t(393)], this[t(424)][t(409)] / 2, 259, "", {
						font: APP_FONT,
						fontWeight: 500,
						fontSize: 20,
						fill: t(419),
						align: t(416)
					});
				r.anchor.setTo(.5, 0), this.background.addChild(r), r.setText(n), this[t(396)](), this[t(430)]()
			}
		}, {
			key: e(426),
			value: function() {
				var t = e;
				this[t(380)]();
				var n = new zr(game),
					r = n.drawShareImage();
				n.destroy(), FBInstant.inviteAsync({
					image: r,
					text: '"' + FBInstant.player.getName() + '" ' + CyberInstance[t(402)][t(434)],
					data: {
						guserid: CyberInstance.guserid
					}
				}).then((function() {}))
			}
		}, {
			key: e(396),
			value: function() {
				var t = e,
					n = this,
					r = this[t(393)][t(369)][t(431)](0, 0, t(374), "button_close");
				r.x = this[t(424)].width - r[t(409)] / 2 - 10, r.y = -12, r[t(377)] = !0, r.events[t(417)][t(366)]((function() {
					var e = t;
					CyberInstance.sound[e(420)](), n.close()
				}), this), this[t(365)] = r, this[t(424)][t(382)](this[t(365)])
			}
		}]) && Ti(n.prototype, r), Object[i(399)](n, i(435), {
			writable: !1
		}), c
	}(P);

	function Bi(t, e) {
		var n = Ai();
		return (Bi = function(t, e) {
			return n[t -= 301]
		})(t, e)
	}

	function Ai() {
		var t = ["lang", "height", "setTo", "inputEnabled", "68298HQFnJZ", "add", "homeScreen", "playButtonSound", "kill", "prototype", "loadTexture", "Derived constructors may only return object or undefined", "push", "1lPOsve", "vid_complete", "vid_line", "#ffffff", "2375079RoPRyE", "Cannot call a class as a function", "watchCounter", "text", "#ebdac0", "symbol", "6AFZaMp", "function", "ready", "__proto__", "game", "onInputDown", "403460dJXtxK", "Super expression must either be null or a function", "rw_icon", "vid_lock", "CLOSE", "callAll", "REWARD_ARRAY", "sham", "watchButton", "maxVideos", "enumerable", "chip", "icon_chip1", "adsLeft", "isAssetReady", "open", "icon_close", "icon", "bg_popup_large", "anchor", "sprite", "length", "defineProperty", "close", "bind", "width", "visible", "createTransition", "button_gray_257x63", "addEntry", "object", "setPrototypeOf", "onWatchClick", "construct", "toUpperCase", "entries", "scale", "99ACMYrA", "show", "NHAN_THUONG", "button_green_257x63", "WATCH_AD", "icon_chip3", "create", "ADS_LEFT", "constructor", "make", "events", "icon_chip2", "sound", "value", "1339680SMbjKE", "call", "background", "setText", "addChild", "ADS_NOT_READY", "writable", "#ffcaca", "this hasn't been initialised - super() hasn't been called", "icon_chip5", "revive", "switchToCompleteStyle", "updateEntry", "createView", "Daily ads limit reached. Come back later for more!", "buttonText", "addOverlay", "updateData", "174712UgmWes", "apply", "667252rQKeVa", "375640qnXkEx", "instance"];
		return (Ai = function() {
			return t
		})()
	}

	function Fi(t) {
		var e = Bi;
		return (Fi = e(399) == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(399) == typeof Symbol && t[n(346)] === Symbol && t !== Symbol[n(384)] ? n(397) : typeof t
		})(t)
	}

	function Di(t, e) {
		for (var n = Bi, r = 0; r < e[n(322)]; r++) {
			var i = e[r];
			i.enumerable = i[n(311)] || !1, i.configurable = !0, n(351) in i && (i[n(358)] = !0), Object[n(323)](t, i.key, i)
		}
	}

	function Ni(t, e) {
		var n = Bi;
		return (Ni = Object[n(332)] ? Object.setPrototypeOf[n(325)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Gi(t, e) {
		var n = Bi;
		if (e && (Fi(e) === n(331) || typeof e === n(399))) return e;
		if (void 0 !== e) throw new TypeError(n(386));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Bi(360));
			return t
		}(t)
	}

	function Li(t) {
		var e = Bi;
		return (Li = Object[e(332)] ? Object.getPrototypeOf[e(325)]() : function(t) {
			return t[e(401)] || Object.getPrototypeOf(t)
		})(t)
	}! function(t, e) {
		for (var n = Bi, r = t();;) try {
			if (189688 == -parseInt(n(388)) / 1 * (-parseInt(n(372)) / 2) + parseInt(n(379)) / 3 + parseInt(n(370)) / 4 + -parseInt(n(352)) / 5 + -parseInt(n(398)) / 6 * (parseInt(n(392)) / 7) + -parseInt(n(373)) / 8 + parseInt(n(338)) / 9 * (parseInt(n(301)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ai);
	const Mi = function(t) {
		var e = Bi;
		! function(t, e) {
			var n = Bi;
			if (typeof e !== n(399) && null !== e) throw new TypeError(n(302));
			t[n(384)] = Object[n(344)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, n(384), {
				writable: !1
			}), e && Ni(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Bi;
			if ("undefined" == typeof Reflect || !Reflect[t(334)]) return !1;
			if (Reflect[t(334)][t(308)]) return !1;
			if (typeof Proxy === t(399)) return !0;
			try {
				return Boolean.prototype.valueOf.call(Reflect[t(334)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Bi,
				n = Li(a);
			if (o) {
				var r = Li(this)[e(346)];
				t = Reflect[e(334)](n, arguments, r)
			} else t = n[e(371)](this, arguments);
			return Gi(this, t)
		});

		function c(t) {
			var e = Bi;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Bi(393))
			}(this, c), s[e(353)](this, t)
		}
		return n = c, i = Bi, (r = [{
			key: e(315),
			value: function() {
				return !0
			}
		}, {
			key: e(365),
			value: function() {
				var t = e,
					n = this;
				this[t(368)](), this[t(354)] = this.create(0, 0, t(381), t(319)), this[t(354)].x = this.game[t(326)] / 2 - this.background[t(326)] / 2, this[t(354)].y = this[t(402)][t(376)] / 2 - this.background[t(376)] / 2;
				var r = this[t(402)][t(347)][t(395)](this[t(354)][t(326)] / 2, 20, "", {
					font: APP_FONT,
					fill: "#ebdac0",
					fontWeight: 700,
					fontSize: 30
				});
				r[t(320)][t(377)](.5, 0), this[t(354)].addChild(r), r.setText(CyberInstance[t(375)][t(340)][t(335)]());
				var i = this[t(402)].make.text(this.background[t(326)] / 2, 70, "", {
					font: "italic " + APP_FONT,
					fill: t(396),
					fontWeight: 400,
					fontSize: 16
				});
				i.anchor[t(377)](.5, 0), this[t(354)][t(356)](i), i.setText(CyberInstance[t(375)].NHAN_THUONG_DESC), this[t(314)] = this[t(402)][t(347)][t(395)](this.background[t(326)] / 2, 100, CyberInstance.lang[t(345)] + Tt.instance[t(310)], {
					font: APP_FONT,
					fill: "#ebdac0",
					fontWeight: 500,
					fontSize: 24
				}), this[t(314)][t(320)][t(377)](.5, 0), this.background[t(356)](this.adsLeft);
				var a = this.game[t(347)][t(321)](0, 15, t(381), t(317));
				a.x = this.background.width - a.width - 15, a[t(378)] = !0, a[t(348)][t(403)][t(380)]((function() {
					var e = t;
					CyberInstance[e(350)][e(382)](), n[e(324)]()
				})), this.background[t(356)](a);
				var o = new Lt(this.game, 0, 0, "homeScreen", t(329));
				o.x = this.background[t(326)] / 2 - o[t(326)] / 2, o.y = this.background[t(376)] - o[t(376)] - 30, o.addText(CyberInstance[t(375)][t(342)][t(335)](), {
					font: APP_FONT,
					fill: t(391),
					fontWeight: 400,
					fontSize: 26
				}), o[t(367)].anchor[t(377)](0, .5);
				var s = this[t(402)][t(347)].sprite(10, 10, t(381), t(303));
				o[t(356)](s), s.x = 40, o[t(367)].x = s.x + s.width + 10, o.click(this[t(333)], this), this[t(354)][t(356)](o), this[t(309)] = o;
				var c = this[t(344)](0, 0, t(381), t(390));
				c.x = this[t(354)][t(326)] / 2 - c[t(326)] / 2, c.y = this.background[t(376)] / 2 - c.height / 2 + 25, this[t(354)][t(356)](c), this[t(336)] = [];
				for (var u = 0; u < 5; u++) {
					var h = this.addEntry();
					this.entries[t(387)](h)
				}
				var f = this[t(354)][t(326)] / 2 - (5 * this[t(336)][0][t(326)] + 80) / 2;
				for (u = 0; u < 5; u++) this[t(336)][u].x = f, f += this[t(336)][u].width + 20;
				this[t(369)](), this.createTransition()
			}
		}, {
			key: e(333),
			value: function() {
				var t = e;
				Tt.instance[t(400)] ? this[t(394)] < Tt[t(374)][t(310)] ? (Tt.instance[t(339)](Tt.REWARDED_POPUP_POSITION), this[t(324)]()) : new G(game, {
					text: t(366),
					buttonText: CyberInstance[t(375)][t(305)],
					hideCloseButton: !0
				}) : (new G(game, {
					text: CyberInstance[t(375)][t(357)],
					buttonText: CyberInstance.lang[t(305)],
					hideCloseButton: !0
				}), this[t(324)]())
			}
		}, {
			key: "updateData",
			value: function() {
				var t = e;
				this[t(394)] = Tt[t(374)][t(394)], this[t(394)] > Tt.instance[t(310)] && (this.watchCounter = Tt[t(374)][t(310)]);
				var n = this[t(394)] < 5 ? 0 : this.watchCounter - 4;
				this[t(394)] == Tt[t(374)][t(310)] && (n = this.watchCounter - 5);
				for (var r = 0; r < 5;) {
					var i = n < 5 ? Tt[t(307)][n] : Tt.REWARD_ARRAY[4];
					this[t(364)](r, i), n <= this.watchCounter - 1 && this[t(363)](r), r++, n++
				}
				this[t(314)][t(355)](CyberInstance[t(375)][t(345)] + (Tt[t(374)][t(310)] - this[t(394)])), this[t(309)][t(385)](t(381), Tt[t(374)][t(400)] ? t(341) : t(329))
			}
		}, {
			key: e(364),
			value: function(t, n) {
				var r = e;
				if (t < 5) {
					var i = r(313);
					switch (n) {
						case 5e4:
							i = r(313);
							break;
						case 1e5:
							i = r(349);
							break;
						case 2e5:
							i = r(343);
							break;
						case 3e5:
							i = "icon_chip4";
							break;
						case 5e5:
							i = r(361)
					}
					this.entries[t][r(312)][r(385)](r(381), i), this.entries[t][r(395)][r(355)](u.formatCoinWithCommas(n))
				}
			}
		}, {
			key: e(363),
			value: function(t) {
				var n = e;
				this[n(336)][t][n(318)][n(385)](n(381), n(389))
			}
		}, {
			key: e(330),
			value: function() {
				var t = e,
					n = this.game[t(347)][t(321)](0, 0, t(381), "vid_item");
				n.y = this[t(354)][t(376)] / 2 - n[t(376)] / 2 + 25, this[t(354)][t(356)](n);
				var r = this[t(402)].make[t(321)](0, 0, "homeScreen", t(304));
				r.x = n[t(326)] / 2 - r[t(326)] / 2, r.y = 10 - r[t(376)], n[t(356)](r), n[t(318)] = r;
				var i = this[t(402)].make[t(321)](n[t(326)] / 2, n[t(376)] / 2 - 6, t(381), t(313));
				i[t(337)][t(377)](.9), i[t(320)][t(377)](.5), n[t(356)](i), n[t(312)] = i;
				var a = this[t(402)][t(347)][t(395)](n[t(326)] / 2, n.height - 26, "", {
					font: APP_FONT,
					fill: t(359),
					fontWeight: 500,
					fontSize: 18
				});
				return a.anchor.setTo(.5, 0), n[t(356)](a), n[t(395)] = a, n
			}
		}, {
			key: e(316),
			value: function() {
				var t = e;
				0 == this[t(327)] && (this[t(327)] = !0, this.callAll(t(362)), this[t(369)](), this[t(328)]())
			}
		}, {
			key: e(324),
			value: function() {
				var t = e;
				1 == this[t(327)] && (this[t(306)](t(383)), this[t(327)] = !1)
			}
		}]) && Di(n[i(384)], r), Object[i(323)](n, "prototype", {
			writable: !1
		}), c
	}(P);

	function Wi(t) {
		var e = Xi;
		return (Wi = e(204) == typeof Symbol && e(222) == typeof Symbol[e(186)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? n(222) : typeof t
		})(t)
	}

	function zi(t, e) {
		for (var n = Xi, r = 0; r < e.length; r++) {
			var i = e[r];
			i.enumerable = i[n(173)] || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
		}
	}

	function Ui(t, e) {
		var n = Xi;
		return (Ui = Object.setPrototypeOf ? Object[n(208)][n(184)]() : function(t, e) {
			return t[n(194)] = e, t
		})(t, e)
	}

	function Vi(t, e) {
		var n = Xi;
		if (e && (Wi(e) === n(189) || typeof e === n(204))) return e;
		if (void 0 !== e) throw new TypeError(n(164));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Xi(165));
			return t
		}(t)
	}

	function Hi(t) {
		var e = Xi;
		return (Hi = Object[e(208)] ? Object[e(216)][e(184)]() : function(t) {
			var n = e;
			return t[n(194)] || Object[n(216)](t)
		})(t)
	}

	function Xi(t, e) {
		var n = Ki();
		return (Xi = function(t, e) {
			return n[t -= 164]
		})(t, e)
	}! function(t, e) {
		for (var n = Xi, r = t();;) try {
			if (994336 == parseInt(n(192)) / 1 + parseInt(n(207)) / 2 * (parseInt(n(167)) / 3) + parseInt(n(169)) / 4 * (-parseInt(n(196)) / 5) + parseInt(n(195)) / 6 * (parseInt(n(172)) / 7) + -parseInt(n(230)) / 8 * (-parseInt(n(214)) / 9) + -parseInt(n(206)) / 10 + -parseInt(n(171)) / 11) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ki);
	const qi = function(t) {
		var e = Xi;
		! function(t, e) {
			var n = Xi;
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object[n(170)](e && e[n(193)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(218)](t, n(193), {
				writable: !1
			}), e && Ui(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Xi;
			if (typeof Reflect === t(211) || !Reflect[t(198)]) return !1;
			if (Reflect[t(198)].sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(193)][t(219)][t(228)](Reflect[t(198)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Xi,
				n = Hi(a);
			if (o) {
				var r = Hi(this)[e(203)];
				t = Reflect.construct(n, arguments, r)
			} else t = n[e(175)](this, arguments);
			return Vi(this, t)
		});

		function c(t) {
			var e = Xi;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Xi(221))
			}(this, c), s[e(228)](this, t)
		}
		return n = c, i = Xi, (r = [{
			key: e(176),
			value: function() {
				var t = e,
					n = this;
				this[t(182)](.7), this[t(210)](t(209), "bg_popup_medium_484x292");
				var r = this[t(181)].add[t(202)](30, 50, "", {
					font: APP_FONT,
					fontSize: 24,
					fill: t(205),
					fontWeight: t(229),
					wordWrap: !0,
					wordWrapWidth: this.background[t(180)] - 60,
					align: t(200),
					boundsAlignH: "center",
					boundsAlignV: t(185)
				});
				r.setTextBounds(0, 0, this[t(225)][t(180)] - 60, 100), this.background[t(226)](r), r[t(199)](CyberInstance.lang[t(178)]), this[t(190)] = new Lt(this[t(181)], 0, 0, t(209), t(201)), this[t(190)].x = this[t(225)][t(180)] / 2 - this[t(190)][t(180)] / 2, this[t(190)].y = this[t(225)].height - this[t(190)][t(174)] - 50, this[t(190)].addText(CyberInstance.lang[t(179)].toUpperCase()), this[t(190)][t(227)](this[t(220)], this), this[t(225)].addChild(this[t(190)]);
				var i = this[t(170)](0, 0, "homeScreen", "icon_close");
				i.x = this.background.width + this[t(225)].x + 20, i.y = this[t(225)].y - 50, i[t(188)] = !0, i[t(223)][t(224)][t(168)]((function() {
					var e = t;
					CyberInstance[e(197)][e(215)](), n[e(212)]()
				})), this[t(166)]()
			}
		}, {
			key: e(220),
			value: function() {
				var t = e;
				Tt[t(213)][t(183)] ? Tt.instance[t(191)](Tt[t(177)]) : new G(game, {
					text: CyberInstance[t(217)].ADS_NOT_READY,
					buttonText: CyberInstance[t(217)].CLOSE,
					hideCloseButton: !0
				}), this[t(212)]()
			}
		}, {
			key: e(187),
			value: function() {
				return !0
			}
		}]) && zi(n[i(193)], r), Object[i(218)](n, "prototype", {
			writable: !1
		}), c
	}(P);

	function Ki() {
		var t = ["addOnce", "27324jgrclC", "create", "14165371WCiGOf", "3143TkABRK", "enumerable", "height", "apply", "createView", "SPIN_POSITION", "FREE_SPIN", "WATCH_AD", "width", "game", "addOverlay", "ready", "bind", "middle", "iterator", "isAssetReady", "inputEnabled", "object", "watchButton", "show", "987678kibbQR", "prototype", "__proto__", "14682CBIKus", "780qWWoQc", "sound", "construct", "setText", "center", "button_green_197x64", "text", "constructor", "function", "#f59eac", "13188430NzNUGe", "14lDwDbk", "setPrototypeOf", "homeScreen", "addBackground", "undefined", "close", "instance", "5067EeLkII", "playButtonSound", "getPrototypeOf", "lang", "defineProperty", "valueOf", "onWatchClick", "Cannot call a class as a function", "symbol", "events", "onInputDown", "background", "addChild", "click", "call", "normal", "13352matuxQ", "Derived constructors may only return object or undefined", "this hasn't been initialised - super() hasn't been called", "createTransition", "703092ExjfCT"];
		return (Ki = function() {
			return t
		})()
	}

	function Yi() {
		var t = ["item_bg3_overlay", "onWatchClick", "text", "Gấp đôi", "close", "onCollect", "create", "writable", "Ngày ", "make", "3515718yvJeff", "addChild", "dailybonus", "createView", "icon_complete", "6085715cOaWJK", "setTo", "_title", "apply", "2024500JdqWWo", "1560375QLByuk", "events", "collectButton", "anchor", "#f5c78a", "inputEnabled", "show", "game", "dailyDays", "object", "onInputDown", "getPrototypeOf", "light", "Day ", "item_bg_overlay", "enumerable", "function", "Đăng nhập mỗi ngày để nhận thưởng hấp dẫn", "open", "socket", "createTransition", "item_bg", "ADS_NOT_READY", "Derived constructors may only return object or undefined", "Super expression must either be null or a function", "callAll", "Receive", "visible", "lang", "send", "click", "header_bg", "background", "homeScreen", "entries", "ExtensionRequest", "bind", "height", "2423526VPjUir", "undefined", "this hasn't been initialised - super() hasn't been called", "setText", "symbol", "revive", "876477XsOcNM", "defineProperty", "key", "formatCoinWithCommas", "instance", "scale", "playButtonSound", "item_bg3", "day", "call", "langCode", "openLoadingPopup", "28784854UnmSme", "setPrototypeOf", "addText", "collect_button", "sham", "isAssetReady", "CLOSE", "__proto__", "Double", "constructor", "sound", "buttonText", "#fbb5b2", "width", "Nhận", "dailyCollected", "#591e01", "kill", "construct", "prototype", "watchButton", "Cannot call a class as a function", "image"];
		return (Yi = function() {
			return t
		})()
	}

	function Ji(t) {
		var e = ta;
		return (Ji = e(329) == typeof Symbol && e(355) == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(329) == typeof Symbol && t[n(279)] === Symbol && t !== Symbol.prototype ? n(355) : typeof t
		})(t)
	}

	function Qi(t, e) {
		for (var n = ta, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(328)] = i[n(328)] || !1, i.configurable = !0, "value" in i && (i[n(300)] = !0), Object[n(358)](t, i[n(359)], i)
		}
	}

	function Zi(t, e) {
		var n = ta;
		return (Zi = Object[n(271)] ? Object[n(271)][n(349)]() : function(t, e) {
			return t[n(277)] = e, t
		})(t, e)
	}

	function $i(t, e) {
		var n = ta;
		if (e && (Ji(e) === n(322) || typeof e === n(329))) return e;
		if (void 0 !== e) throw new TypeError(n(336));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(ta(353));
			return t
		}(t)
	}

	function ta(t, e) {
		var n = Yi();
		return (ta = function(t, e) {
			return n[t -= 271]
		})(t, e)
	}

	function ea(t) {
		var e = ta;
		return (ea = Object.setPrototypeOf ? Object[e(324)][e(349)]() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(324)](t)
		})(t)
	}! function(t, e) {
		for (var n = ta, r = t();;) try {
			if (922760 == -parseInt(n(313)) / 1 + -parseInt(n(351)) / 2 + -parseInt(n(357)) / 3 + parseInt(n(312)) / 4 + -parseInt(n(308)) / 5 + parseInt(n(303)) / 6 + parseInt(n(369)) / 7) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Yi);
	const na = function(t) {
		var e = ta;
		! function(t, e) {
			var n = ta;
			if (typeof e !== n(329) && null !== e) throw new TypeError(n(337));
			t[n(289)] = Object[n(299)](e && e[n(289)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(358)](t, n(289), {
				writable: !1
			}), e && Zi(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = ta;
			if (typeof Reflect === t(352) || !Reflect[t(288)]) return !1;
			if (Reflect[t(288)][t(274)]) return !1;
			if (typeof Proxy === t(329)) return !0;
			try {
				return Boolean[t(289)].valueOf[t(366)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = ta,
				n = ea(a);
			if (o) {
				var r = ea(this)[e(279)];
				t = Reflect.construct(n, arguments, r)
			} else t = n[e(311)](this, arguments);
			return $i(this, t)
		});

		function c(t) {
			var e = ta;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(ta(291))
			}(this, c), s[e(366)](this, t)
		}
		return n = c, i = ta, (r = [{
			key: e(275),
			value: function() {
				return -1 != CyberGlobalData[e(321)]
			}
		}, {
			key: e(306),
			value: function() {
				var t = e,
					n = this;
				this.addOverlay(.8), this[t(345)] = this[t(299)](0, 0, t(305), "bg"), this[t(345)].x = this[t(320)][t(283)] / 2 - this[t(345)][t(283)] / 2, this[t(345)].y = this.game[t(350)] / 2 - this[t(345)][t(350)] / 2 + 20;
				var r = this.game[t(302)].image(0, -87, "dailybonus", t(344));
				r.x = this[t(345)][t(283)] / 2 - r[t(283)] / 2, this[t(345)].addChild(r);
				var i = this[t(320)][t(302)][t(292)](r[t(283)] / 2 + 27, 75, "dailybonus", CyberInstance[t(367)] + t(310));
				i[t(316)][t(309)](.5), r[t(304)](i);
				var a = this.game[t(302)][t(295)](this[t(345)][t(283)] / 2, 30, "", {
					font: APP_FONT,
					fill: t(282),
					fontWeight: 400,
					fontSize: 22
				});
				a[t(316)][t(309)](.5, 0), this[t(345)].addChild(a), a[t(354)]("vn" == CyberInstance.langCode ? t(330) : "Log in every day to receive rewards");
				var o = this[t(320)].make.sprite(0, 0, t(346), "icon_close");
				o.x = this[t(345)][t(283)] + 15, o.y = -o[t(350)] / 2, o[t(318)] = !0, o[t(314)][t(323)].add((function() {
					var e = t;
					CyberInstance[e(280)][e(363)](), n[e(297)]()
				})), this[t(345)][t(304)](o), this[t(347)] = [];
				for (var s = 75, c = 82, h = [3e4, 4e4, 1e5, 5e4, 75e3, 15e4, 2e5], f = 0; f < 7; f++) {
					3 == f ? (s = 75, c = 245) : 6 == f && (s = 550, c = 82);
					var l = this[t(320)].make.image(s, c, t(305), t(f < 6 ? 334 : 364));
					this[t(345)][t(304)](l), this[t(347)][f] = l, s += l[t(283)] + 15;
					var p = !1;
					if (CyberGlobalData[t(321)] > f + 1) p = !0;
					else if (CyberGlobalData.dailyDays == f + 1)
						if (0 == CyberGlobalData[t(285)]) {
							var y = this[t(320)][t(302)][t(292)](l[t(283)] / 2, l.height / 2, t(305), t(325));
							y[t(316)][t(309)](.5), l.addChild(y), 6 == f && y[t(362)][t(309)](1.5)
						} else p = !0;
					if (p) {
						var d = this.game[t(302)][t(292)](l.x + 5, l.y + 5, t(305), t(f < 6 ? 327 : 293));
						6 == f && (d.x = l.x - 8), this.background[t(304)](d);
						var v = this[t(320)].make[t(292)](d[t(283)] / 2 + 7, d[t(350)] / 2, t(305), t(307));
						v[t(316)][t(309)](.5), d[t(304)](v)
					}
					var b = this.game[t(302)][t(292)](l[t(283)] / 2, l[t(350)] / 2, t(305), t(365) + (f + 1));
					b[t(316)].setTo(.5), l.addChild(b);
					var g = this[t(320)][t(302)][t(295)](l[t(283)] / 2, f < 6 ? 10 : 20, "", {
						font: APP_FONT,
						fill: t(282),
						fontWeight: 400,
						fontSize: f < 6 ? 20 : 24
					});
					g.anchor[t(309)](.5, 0), l[t(304)](g), g[t(354)]("vn" == CyberInstance[t(367)] ? t(301) + (f + 1) : t(326) + (f + 1));
					var m = this[t(320)].make[t(295)](l[t(283)] / 2, f < 6 ? l[t(350)] - 35 : l[t(350)] - 50, "", {
						font: APP_FONT,
						fill: t(317),
						fontWeight: 400,
						fontSize: f < 6 ? 22 : 24
					});
					m.anchor[t(309)](.5, 0), l[t(304)](m), m[t(354)](u[t(360)](h[f]))
				}
				this.collectButton = new Lt(this[t(320)], 0, 0, t(305), t(273)), this.collectButton.y = this[t(345)][t(350)] - this[t(315)].height - 25, this[t(315)][t(272)]("vn" == CyberInstance.langCode ? t(284) : t(339), {
					font: APP_FONT,
					fill: t(286),
					fontWeight: 400,
					fontSize: 26
				}), this[t(345)][t(304)](this.collectButton), this[t(290)] = new Lt(this[t(320)], 0, 0, "dailybonus", "video_button"), this.watchButton.y = this.background[t(350)] - this.watchButton[t(350)] - 25, this.watchButton[t(272)]("vn" == CyberInstance[t(367)] ? t(296) : t(278), {
					font: APP_FONT,
					fill: "#ffffff",
					fontWeight: 400,
					fontSize: 26
				}), this.watchButton[t(281)][t(316)].setTo(0, .5), this[t(290)][t(281)].x = 55, this[t(345)][t(304)](this.watchButton), this[t(315)].x = this.background[t(283)] / 2 - (this.collectButton[t(283)] + this[t(290)].width + 25) / 2, this[t(290)].x = this.collectButton.x + this.collectButton[t(283)] + 25, CyberGlobalData.dailyCollected ? (this[t(315)].alpha = .5, this[t(290)].alpha = .5) : (this[t(315)][t(343)](this[t(298)], this), this[t(290)][t(343)](this[t(294)], this)), this[t(333)]()
			}
		}, {
			key: e(298),
			value: function() {
				var t = e;
				CyberInstance[t(332)][t(342)](new(SFS2X[t(348)])("dailyGift.collect")), this[t(297)](), this.openLoadingPopup({
					closeTimer: 15e3
				})
			}
		}, {
			key: e(294),
			value: function() {
				var t = e;
				Tt[t(361)].ready ? (Tt[t(361)][t(319)](Tt.DAILY_POSITION), this[t(297)](), this[t(368)]()) : new G(game, {
					text: CyberInstance[t(341)][t(335)],
					buttonText: CyberInstance[t(341)][t(276)],
					hideCloseButton: !0
				})
			}
		}, {
			key: e(331),
			value: function() {
				var t = e;
				0 == this[t(340)] && (this[t(340)] = !0, this[t(338)](t(356)), this[t(333)]())
			}
		}, {
			key: e(297),
			value: function() {
				var t = e;
				1 == this.visible && (this[t(338)](t(287)), this[t(340)] = !1)
			}
		}]) && Qi(n[i(289)], r), Object.defineProperty(n, i(289), {
			writable: !1
		}), c
	}(P);

	function ra() {
		var t = ["canFollowOfficialPageAsync", "open", "prototype", "icon_gift", "rewardVideoBadge", "maxVideos", "anchor", "formatTime", "writable", "anim", "rewardVideoCount", "openPublicChat", "openInvitePopup", "collectTime", "spinAnim", "rewardVideoButton", "inited", "openSpinPopup", "alpha", "2950182IMgFuy", "videoPopup", "make", "fb_icon", "length", "500", "dailybonus", "add", "1227964wdBMPQ", "spin_1", "closeVideoLoading", "height", "WATCH AD", "openPublicChatScreen", "substr", "spin", "homeScreen", "spinPopup", "#FFFFFF", "lang", "circle_37x37", "destroy", "2162980cuqorj", "state", "closeLoadingPopup", "defineProperty", "start", "openRewardVideoPopup", "showChatBadge", "visible", "#f8d172", "then", "spinWatched", "width", "spin_", "9SjqmKR", "animations", "openLoaderboardPopup", "spinText", "watchCounter", "game", "community", "_lobby_button", "10wCzJvJ", "39928uzoBZv", "LeaderboardScreen", "onSpinWheelResponse", "dailyPopup", "SPIN", "957786xGsMKZ", "GIFT_TIME", "spinCounter", "chat", "followOfficialPageAsync", "776rhJZPw", "1842905PINRWm", "configurable", "langCode", "12BxwGmw", "updateSpinTimer", "container", "chatBadge", "floor", "hideChatBadge", "ready", "value", "generateFrameNames", "15380387qBnvMm", "addChild", "current", "setText", "canJoinOfficialGroupAsync", "Animation", "icon_leaderboard", "fbgroup", "openDailyPopup", "spinBtn", "click", "instance", "updateVideoBadge", "text", "openLobbyScreen", " : "];
		return (ra = function() {
			return t
		})()
	}

	function ia(t, e) {
		for (var n = aa, r = 0; r < e[n(357)]; r++) {
			var i = e[r];
			i.enumerable = i.enumerable || !1, i[n(307)] = !0, n(316) in i && (i[n(342)] = !0), Object[n(378)](t, i.key, i)
		}
	}

	function aa(t, e) {
		var n = ra();
		return (aa = function(t, e) {
			return n[t -= 282]
		})(t, e)
	}! function(t, e) {
		for (var n = aa, r = t();;) try {
			if (898272 == parseInt(n(300)) / 1 + parseInt(n(375)) / 2 + parseInt(n(286)) / 3 * (-parseInt(n(361)) / 4) + parseInt(n(306)) / 5 * (-parseInt(n(309)) / 6) + -parseInt(n(295)) / 7 * (parseInt(n(305)) / 8) + -parseInt(n(353)) / 9 + -parseInt(n(294)) / 10 * (-parseInt(n(318)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(ra);
	var oa = function() {
			var t, e, n = aa;

			function r(t) {
				var e = aa,
					n = this;
				(function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				})(this, r), this[e(376)] = t, this[e(291)] = t[e(291)], this[e(311)] = t.container;
				var i = new Lt(this[e(291)], 15, 0, "homeScreen", "icon_invite");
				i.y = this[e(291)][e(364)] - i[e(364)] - 15, i[e(328)](this.openInvitePopup, this), this[e(311)][e(360)](i);
				var a = new Lt(this[e(291)], i.x + i[e(284)] + 15, 0, "homeScreen", e(324));
				a.y = this[e(291)][e(364)] - a[e(364)] - 15, a.click(this[e(288)], this), this.container.add(a);
				var o = new Lt(this[e(291)], a.x + a[e(284)] + 15, 0, "homeScreen", e(337));
				o.y = this[e(291)][e(364)] - o[e(364)] - 15, o[e(328)](this[e(380)], this), this.container[e(360)](o), this[e(349)] = o, this[e(349)].alpha = .5, this[e(338)] = this[e(291)][e(355)].sprite(0, 0, e(369), e(373)), this[e(338)].x = o.x + o[e(284)] - this[e(338)][e(284)] / 2 - 8, this[e(338)].y = o.y - this[e(338)][e(364)] / 2, this.container[e(360)](this[e(338)]), this[e(344)] = this.game[e(360)].text(this[e(338)][e(284)] / 2, this[e(338)][e(364)] / 2 + 2, "0", {
					font: APP_FONT,
					fontSize: 22,
					fill: e(371),
					fontWeight: 500
				}), this[e(344)].anchor.setTo(.5), this[e(338)][e(319)](this[e(344)]), this[e(338)][e(382)] = !1;
				var s = new Lt(this.game, o.x + o[e(284)] + 15, 0, e(359), "home_daily_icon");
				s.y = this[e(291)].height - s.height - 15, s.click(this[e(326)], this), this[e(311)].add(s);
				var c = new Lt(this.game, 0, 0, "homeScreen", CyberInstance[e(308)] + e(293));
				c.x = this.game[e(284)] - c[e(284)] - 15, c.y = this.game[e(364)] - c[e(364)] - 15, c.click(this[e(332)], this), this[e(311)][e(360)](c);
				var u = new Lt(this.game, 0, 0, e(359), "shop_icon");
				u.x = c.x - u[e(284)] - 15, u.y = this[e(291)].height - u[e(364)] - 15, u[e(328)]((function() {
					var t = e;
					et.instance[t(350)] && n[t(291)][t(376)][t(379)]("BackpackScreen", !0, !1)
				})), this[e(311)].add(u);
				var h = new Lt(this[e(291)], 0, 0, e(359), e(325));
				h.x = u.x - h.width - 15, h.y = this[e(291)][e(364)] - h.height - 15, h[e(328)]((function() {
					var t = e;
					FBInstant[t(292)][t(322)]()[t(282)]((function(e) {
						e && FBInstant[t(292)].joinOfficialGroupAsync()
					}))
				})), this.container.add(h);
				var f = new Lt(this[e(291)], 0, h.y, "dailybonus", e(356));
				if (f.x = h.x - f[e(284)] - 15, f[e(328)]((function() {
						var t = e;
						FBInstant[t(292)][t(334)]()[t(282)]((function(e) {
							var n = t;
							e && FBInstant.community[n(304)]()
						}))
					})), this[e(311)][e(360)](f), this.spinBtn = new Lt(this[e(291)], 0, 0, e(369), e(362)), this[e(327)].x = this.game[e(284)] / 2 - this[e(327)].width / 2, this[e(327)].y = this[e(291)][e(364)] - this[e(327)][e(364)], this[e(327)][e(343)] = this[e(327)][e(287)][e(360)]("spinAnim", Phaser[e(323)][e(317)](e(285), 1, 2)), this[e(327)][e(287)].play(e(348), 4, !0), this[e(327)][e(328)](this[e(351)], this), this[e(311)][e(360)](this[e(327)]), this[e(289)] = this.game[e(360)][e(331)](this[e(291)][e(284)] / 2, this.game[e(364)] - 45, CyberInstance[e(372)].SPIN, {
						font: APP_FONT,
						fontSize: 20,
						fill: e(383),
						fontWeight: e(358)
					}), this.spinText[e(340)].setTo(.5, 0), this[e(311)][e(360)](this.spinText), this[e(289)][e(321)](CyberInstance[e(372)][e(299)]), CyberGlobalData[e(347)] < _.GIFT_TIME) {
					var l = _[e(301)] - CyberGlobalData.collectTime;
					this[e(289)][e(321)](this[e(341)](l))
				}
				Tt[e(329)][e(315)] && Tt[e(329)][e(302)] < 2 && _[e(301)] - CyberGlobalData[e(347)] > 500 && this.spinText.setText(e(365)), this[e(330)]()
			}
			return t = r, (e = [{
				key: n(326),
				value: function() {
					var t = n; - 1 != CyberGlobalData.dailyDays && (this[t(298)] ? this[t(298)][t(335)]() : this[t(298)] = new na(this[t(291)]))
				}
			}, {
				key: "resetDailyPopup",
				value: function() {
					var t = n;
					this[t(298)].closeLoadingPopup(), this[t(298)][t(374)](), this[t(298)] = null
				}
			}, {
				key: n(310),
				value: function(t) {
					var e = n;
					t < _[e(301)] ? this[e(289)][e(321)](this.formatTime(_[e(301)] - t)) : this.spinText[e(321)](CyberInstance[e(372)].SPIN)
				}
			}, {
				key: n(351),
				value: function() {
					var t = n;
					if (CyberGlobalData[t(347)] < _[t(301)]) {
						var e = _.GIFT_TIME - CyberGlobalData[t(347)];
						this[t(289)][t(321)](this[t(341)](e))
					}!0 === CyberGlobalData[t(283)] ? this[t(370)] = new wi(this.game) : CyberGlobalData[t(347)] >= _.GIFT_TIME ? this.spinPopup = new wi(this[t(291)]) : Tt.instance[t(315)] && Tt[t(329)][t(302)] < 2 && _[t(301)] - CyberGlobalData[t(347)] > 500 && new qi(game)
				}
			}, {
				key: n(368),
				value: function(t) {
					var e = n;
					this[e(370)] && this[e(370)][e(297)](t)
				}
			}, {
				key: n(381),
				value: function() {
					var t = n;
					this[t(312)][t(382)] || (this[t(312)][t(382)] = !0)
				}
			}, {
				key: n(314),
				value: function() {
					var t = n;
					this[t(312)][t(382)] = !1
				}
			}, {
				key: n(345),
				value: function() {
					var t = n;
					CyberInstance[t(303)][t(366)]()
				}
			}, {
				key: n(332),
				value: function() {
					var t = n;
					"LobbyScreen" != this[t(291)].state[t(320)] && this[t(291)][t(376)][t(379)]("LobbyScreen", !0, !1)
				}
			}, {
				key: n(346),
				value: function() {
					new Ei(this[n(291)])
				}
			}, {
				key: n(288),
				value: function() {
					var t = n;
					this[t(291)][t(376)][t(320)] != t(296) && this[t(291)][t(376)].start(t(296), !0, !1)
				}
			}, {
				key: n(380),
				value: function() {
					var t = n;
					this.videoPopup ? this[t(354)][t(335)]() : this[t(354)] = new Mi(this[t(291)])
				}
			}, {
				key: n(330),
				value: function() {
					var t = n;
					Tt[t(329)][t(315)] ? Tt.instance[t(339)] - Tt[t(329)].watchCounter > 0 ? (this[t(344)][t(321)](Tt[t(329)][t(339)] - Tt[t(329)][t(290)]), 0 == this[t(338)].visible && (this[t(338)].visible = !0, this[t(349)][t(352)] = 1)) : (this.rewardVideoBadge[t(382)] = !1, this[t(349)].alpha = .5) : (this.rewardVideoBadge[t(382)] = !1, this[t(349)][t(352)] = .5)
				}
			}, {
				key: n(363),
				value: function() {
					var t = n;
					this.videoPopup && this[t(354)][t(377)]()
				}
			}, {
				key: n(341),
				value: function(t) {
					var e = n,
						r = "0" + Math[e(313)](t / 60 / 60),
						i = "0" + Math.floor((t - 60 * r * 60) / 60);
					return r[e(367)](-2) + e(333) + i[e(367)](-2)
				}
			}]) && ia(t[aa(336)], e), Object.defineProperty(t, "prototype", {
				writable: !1
			}), r
		}(),
		sa = ca;

	function ca(t, e) {
		var n = ua();
		return (ca = function(t, e) {
			return n[t -= 229]
		})(t, e)
	}

	function ua() {
		var t = ["object", "click", "2saQBDn", "configurable", "7330392aMgEYV", "playnow_bg", "addText", "scale", "undefined", "onButtonUp", "Derived constructors may only return object or undefined", "setTo", "bind", "16QDFXgu", "addIcon", "create", "sound", "addChild", "dispatchAllowed", "value", "__proto__", "iterator", "key", "#ffffff", "homeScreen", "anchorButton", "799156IZcuXA", "function", "Signal", "28iWNTWB", "Cannot call a class as a function", "Sprite", "1851234epJqRd", "this hasn't been initialised - super() hasn't been called", "apply", "prototype", "centerX", "Image", "game", "onInputUp", "valueOf", "centerY", "playButtonSound", "Text", "add", "anchor", "defineProperty", "events", "enumerable", "dispatch", "buttonText", "height", "inputEnabled", "onClick", "call", "setPrototypeOf", "516210bCfIXT", "enableTimeout", "18crEcie", "11RpxrJZ", "getPrototypeOf", "construct", "get", "getOwnPropertyDescriptor", "46591188okdeTV", "symbol", "3174555CjTeCR", "length", "667842MccbCS", "destroy", "onButtonDown", "constructor"];
		return (ua = function() {
			return t
		})()
	}

	function ha(t) {
		var e = ca;
		return (ha = "function" == typeof Symbol && e(264) == typeof Symbol[e(292)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(298) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(234)] ? n(264) : typeof t
		})(t)
	}

	function fa(t, e) {
		for (var n = ca, r = 0; r < e[n(266)]; r++) {
			var i = e[r];
			i[n(247)] = i[n(247)] || !1, i[n(274)] = !0, n(290) in i && (i.writable = !0), Object[n(245)](t, i[n(293)], i)
		}
	}

	function la() {
		var t = ca;
		return la = typeof Reflect !== t(279) && Reflect.get ? Reflect[t(261)].bind() : function(e, n, r) {
			var i = t,
				a = pa(e, n);
			if (a) {
				var o = Object[i(262)](a, n);
				return o.get ? o.get[i(253)](arguments[i(266)] < 3 ? e : r) : o[i(290)]
			}
		}, la[t(233)](this, arguments)
	}

	function pa(t, e) {
		for (var n = ca; !Object[n(234)].hasOwnProperty[n(253)](t, e) && null !== (t = ba(t)););
		return t
	}

	function ya(t, e) {
		var n = ca;
		return (ya = Object[n(254)] ? Object[n(254)][n(283)]() : function(t, e) {
			return t[n(291)] = e, t
		})(t, e)
	}

	function da(t, e) {
		var n = ca;
		if (e && (ha(e) === n(271) || typeof e === n(298))) return e;
		if (void 0 !== e) throw new TypeError(n(281));
		return va(t)
	}

	function va(t) {
		if (void 0 === t) throw new ReferenceError(ca(232));
		return t
	}

	function ba(t) {
		var e = ca;
		return (ba = Object.setPrototypeOf ? Object[e(259)].bind() : function(t) {
			var n = e;
			return t[n(291)] || Object[n(259)](t)
		})(t)
	}! function(t, e) {
		for (var n = ca, r = t();;) try {
			if (984781 == -parseInt(n(297)) / 1 * (-parseInt(n(273)) / 2) + parseInt(n(267)) / 3 * (-parseInt(n(300)) / 4) + -parseInt(n(265)) / 5 * (parseInt(n(257)) / 6) + parseInt(n(231)) / 7 * (parseInt(n(284)) / 8) + -parseInt(n(275)) / 9 + parseInt(n(255)) / 10 + parseInt(n(258)) / 11 * (parseInt(n(263)) / 12)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(ua);
	const ga = function(t) {
		var e = ca;
		! function(t, e) {
			var n = ca;
			if (typeof e !== n(298) && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(234)] = Object[n(286)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(245)](t, n(234), {
				writable: !1
			}), e && ya(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = ca;
			if (typeof Reflect === t(279) || !Reflect[t(260)]) return !1;
			if (Reflect[t(260)].sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean.prototype[t(239)][t(253)](Reflect[t(260)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = ca,
				n = ba(a);
			if (o) {
				var r = ba(this)[e(270)];
				t = Reflect[e(260)](n, arguments, r)
			} else t = n.apply(this, arguments);
			return da(this, t)
		});

		function c(t, e, n) {
			var r, i = ca;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(ca(229))
			}(this, c), (r = s[i(253)](this, t, e, n, i(295), i(276))).dispatchAllowed = !0, r[i(251)] = !0, r[i(252)] = new(Phaser[i(299)]), r[i(256)] = null, r[i(246)].onInputDown.add((function() {
				var t = i;
				r.dispatchAllowed && (r[t(289)] = !1, r[t(252)][t(248)](va(r)), r.enableTimeout = setTimeout((function() {
					r[t(256)] = null, r.dispatchAllowed = !0
				}), 1e3))
			})), r[i(246)].onInputDown[i(243)](r.onButtonDown, va(r)), r.events[i(238)][i(243)](r[i(280)], va(r)), r
		}
		return n = c, i = ca, (r = [{
			key: e(285),
			value: function(t) {
				var n = e,
					r = new(Phaser[n(236)])(this[n(237)], 0, -35, n(295), t);
				r[n(244)][n(282)](.5), this[n(288)](r)
			}
		}, {
			key: e(277),
			value: function(t, n) {
				var r = e,
					i = new(Phaser[r(242)])(this[r(237)], 0, this[r(250)] / 2 - 25, "", typeof n != r(279) ? n : {
						font: APP_FONT,
						fill: r(294),
						fontWeight: 700,
						fontSize: 24
					});
				i[r(244)][r(282)](.5), this[r(288)](i), this[r(249)] = i, i.setText(t)
			}
		}, {
			key: e(272),
			value: function(t, n) {
				var r = e;
				this[r(252)].removeAll(), this[r(252)][r(243)](t, n)
			}
		}, {
			key: e(269),
			value: function() {
				var t = e;
				CyberInstance[t(287)][t(241)](), this[t(278)][t(282)](.95)
			}
		}, {
			key: e(280),
			value: function() {
				this[e(278)].setTo(1)
			}
		}, {
			key: e(296),
			value: function() {
				var t = e;
				this.x = this[t(235)], this.y = this[t(240)], this[t(244)].setTo(.5)
			}
		}, {
			key: e(268),
			value: function() {
				var t = e;
				la(ba(c[t(234)]), t(268), this)[t(253)](this, !0), this[t(252)].removeAll(), this[t(252)] = null, null != this.enableTimeout && (clearTimeout(this[t(256)]), this.enableTimeout = null)
			}
		}]) && fa(n[i(234)], r), Object[i(245)](n, i(234), {
			writable: !1
		}), c
	}(Phaser[sa(230)]);

	function ma(t, e) {
		var n = ka();
		return (ma = function(t, e) {
			return n[t -= 253]
		})(t, e)
	}
	var Ia = ma;

	function wa(t) {
		var e = ma;
		return (wa = e(321) == typeof Symbol && e(324) == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(321) == typeof Symbol && t[n(331)] === Symbol && t !== Symbol[n(296)] ? "symbol" : typeof t
		})(t)
	}

	function Sa(t, e) {
		for (var n = ma, r = 0; r < e[n(297)]; r++) {
			var i = e[r];
			i[n(326)] = i.enumerable || !1, i.configurable = !0, n(323) in i && (i[n(266)] = !0), Object[n(304)](t, i[n(284)], i)
		}
	}

	function ka() {
		var t = ["push", "#fff", "input", "onBarClick", "fullWidth", "activePointer", "ratioMap", "8011556oGIefI", "addRatioInfo", "atlasName", "function", "4648420lCCkWy", "value", "symbol", "contains", "enumerable", "setPrototypeOf", "bold", "game", "bind", "constructor", "__proto__", "max", "sliderControl", "onDragUpdate", "construct", "slideParams", "width", "priorityID", "Rectangle", "createUI", "enableDrag", "getCurrentDragX", "apply", "undefined", "1551024ywcwun", "writable", "height", "updateSlider", "add", "currentIndex", "text", "object", "5674584AkSXYI", "visible", "events", "minValue", "getBounds", "sliderRectangle", "1047326vyeZgK", "maxValue", "boundsRect", "sliderSpriteBar", "valueOf", "key", "isArray", "onSlideChange", "157644ikjkow", "Group", "updateBetSlider", "onDragStop", "call", "create", "ratioPoints", "3045HbLGHw", "dispatch", "prototype", "length", "updateScoreSlider", "sliderSprite", "getPrototypeOf", "crop", "45uxpjus", "floor", "defineProperty", "Derived constructors may only return object or undefined", "round", "6648HXhvJd", "slideType", "1Grqhfo", "min"];
		return (ka = function() {
			return t
		})()
	}

	function Oa(t, e) {
		var n = ma;
		return (Oa = Object[n(327)] ? Object[n(327)][n(330)]() : function(t, e) {
			return t[n(332)] = e, t
		})(t, e)
	}

	function Ca(t, e) {
		var n = ma;
		if (e && (wa(e) === n(272) || typeof e === n(321))) return e;
		if (void 0 !== e) throw new TypeError(n(305));
		return function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t)
	}

	function Ta(t) {
		var e = ma;
		return (Ta = Object[e(327)] ? Object[e(300)][e(330)]() : function(t) {
			var n = e;
			return t[n(332)] || Object[n(300)](t)
		})(t)
	}! function(t, e) {
		for (var n = ma, r = t();;) try {
			if (581103 == -parseInt(n(309)) / 1 * (parseInt(n(279)) / 2) + parseInt(n(287)) / 3 + -parseInt(n(307)) / 4 * (-parseInt(n(294)) / 5) + -parseInt(n(273)) / 6 + -parseInt(n(318)) / 7 + -parseInt(n(265)) / 8 + parseInt(n(302)) / 9 * (parseInt(n(322)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(ka);
	var Pa = function(t) {
		var e = ma;
		! function(t, e) {
			var n = ma;
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(296)] = Object[n(292)](e && e[n(296)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(304)](t, n(296), {
				writable: !1
			}), e && Oa(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = ma;
			if (typeof Reflect === t(264) || !Reflect[t(255)]) return !1;
			if (Reflect[t(255)].sham) return !1;
			if (typeof Proxy === t(321)) return !0;
			try {
				return Boolean[t(296)][t(283)].call(Reflect[t(255)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = ma,
				n = Ta(a);
			if (o) {
				var r = Ta(this)[e(331)];
				t = Reflect.construct(n, arguments, r)
			} else t = n[e(263)](this, arguments);
			return Ca(this, t)
		});

		function c(t, e, n, r) {
			var i, a = ma;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), (i = s[a(291)](this, t)).x = e, i.y = n, i[a(256)] = r, i[a(276)] = r[a(276)] || 5, i[a(280)] = r[a(280)] || 500, i[a(308)] = r[a(308)] || 1, i[a(286)] = new Phaser.Signal, i.createUI(), i[a(270)] = 0, i[a(320)] = r.atlasName, i
		}
		return n = c, i = ma, (r = [{
			key: e(260),
			value: function() {
				var t = e;
				this.sliderSprite = this.create(0, 0, this.slideParams.key, this[t(256)][t(299)]), this[t(282)] = this[t(292)](this[t(299)].x + 2, this[t(299)].y + 3, this.slideParams.key, this[t(256)][t(282)]), this[t(315)] = this[t(282)][t(257)], this.sliderRectangle = new(Phaser[t(259)])(0, 0, 0, this[t(282)][t(267)]), this.sliderSpriteBar[t(301)](this[t(278)]), this[t(253)] = this.create(this.sliderSpriteBar.x - 1, 0, this[t(256)][t(284)], this[t(256)][t(253)]), this[t(253)].y = this.sliderSpriteBar.height / 2 - this.sliderControl.height / 2, this[t(253)].inputEnabled = !0, this[t(253)].input[t(261)](!1), this[t(253)].input.allowVerticalDrag = !1, this.sliderControl[t(313)][t(258)] = 1;
				var n = new(Phaser[t(259)])(this.sliderControl.x, this.sliderControl.y, this[t(315)] + 2, this.sliderControl.height);
				if (this[t(253)][t(313)][t(281)] = n, this[t(253)][t(275)][t(254)].add(this[t(254)], this), this.sliderControl.events[t(290)][t(269)](this[t(290)], this), this[t(315)] = this.fullWidth - this[t(253)].width, 1 == this[t(308)]) {
					var r = this.game[t(269)][t(271)](this[t(299)].x + 12, this[t(253)].y + this[t(253)][t(267)], this[t(276)], {
						font: APP_FONT,
						fontWeight: t(328),
						fontSize: 20,
						fill: t(312)
					});
					this[t(269)](r);
					var i = this.game.add[t(271)](this.sliderSprite.x, r.y, this[t(280)], {
						font: APP_FONT,
						fontWeight: t(328),
						fontSize: 20,
						fill: t(312)
					});
					this[t(269)](i), i.x = this.sliderSprite.width - i.canvas[t(257)]
				} else 2 == this[t(308)] && this[t(319)]()
			}
		}, {
			key: e(319),
			value: function() {
				var t = e,
					n = this[t(256)][t(317)],
					r = n[t(297)] - 1,
					i = 0,
					a = Math[t(303)]((this.fullWidth + this[t(253)][t(257)]) / r);
				this.ratioPoints = [];
				for (var o = 0; o < n[t(297)]; o++) {
					var s = {
						value: n[o].value
					};
					o == r ? (s.x = i - this[t(253)][t(257)] + 3, i -= 20) : s.x = o > 0 ? i - this.sliderControl[t(257)] / 2 : i, this[t(293)][t(311)](s), i += a
				}
			}
		}, {
			key: e(254),
			value: function(t, n, r, i, a) {
				var o = e;
				1 == this[o(308)] ? this[o(289)](r) : 2 == this[o(308)] && this[o(298)](r)
			}
		}, {
			key: "onDragStop",
			value: function() {
				var t = e;
				1 == this.slideType ? this.updateBetSlider(this[t(253)].x) : 2 == this[t(308)] && this[t(298)](this[t(253)].x)
			}
		}, {
			key: e(314),
			value: function() {
				var t = e;
				if (1 == this[t(274)]) {
					var n = this.sliderSprite[t(277)]();
					if (n.y = n.y - 50, n[t(267)] = n[t(267)] + 100, n[t(325)](this.game[t(313)][t(316)].x, this.game[t(313)][t(316)].y)) {
						var r = this[t(329)][t(313)][t(316)].x - this[t(299)][t(277)]().x;
						r > 0 && r < this.sliderSprite[t(257)] && (r > this.fullWidth && (r = this.fullWidth), this[t(253)].x = r, 1 == this.slideType ? this[t(289)](r) : 2 == this[t(308)] && this[t(298)](r))
					}
				}
			}
		}, {
			key: e(289),
			value: function(t) {
				var n = e;
				this[n(278)].width = Math.max(0, t), this[n(282)][n(301)](this[n(278)]);
				var r = Math[n(306)](this[n(278)].width / this[n(315)] * 100),
					i = Math[n(306)](r * this[n(280)] / 100);
				i <= 0 ? i = this[n(276)] : i > this[n(280)] && (i = this[n(280)]), i <= this[n(280)] && this[n(286)].dispatch(i)
			}
		}, {
			key: e(298),
			value: function(t) {
				var n = e;
				if (Array[n(285)](this[n(293)]) && this[n(293)][n(297)] > 0) {
					for (var r = null, i = 0; i < this[n(293)].length; i++) {
						if (i == this[n(293)].length - 1) {
							this[n(253)].x = this[n(293)][i].x, r = this[n(293)][i], this[n(270)] = i;
							break
						}
						if (t >= this[n(293)][i].x && t < this[n(293)][i + 1].x) {
							t - this[n(293)][i].x < this.ratioPoints[i + 1].x - t ? (this[n(253)].x = this[n(293)][i].x, r = this[n(293)][i], this[n(270)] = i) : (this.sliderControl.x = this[n(293)][i + 1].x, r = this[n(293)][i + 1], this[n(270)] = i + 1);
							break
						}
						t < 12 && (this.sliderControl.x = this[n(293)][0].x + 12, r = this[n(293)][0], this.currentIndex = 0)
					}
					this[n(278)][n(257)] = Math[n(333)](0, this[n(253)].x), this.sliderSpriteBar[n(301)](this[n(278)]), this[n(286)][n(295)](r)
				}
			}
		}, {
			key: e(262),
			value: function() {
				return this[e(253)].x
			}
		}, {
			key: e(268),
			value: function(t) {
				var n = e;
				if (Array[n(285)](this[n(293)]) && this[n(293)][n(297)] > 0) {
					var r, i = this[n(293)][n(297)] - 1;
					this[n(270)] += 1 * t, this[n(270)] = Math[n(333)](0, this[n(270)]), this.currentIndex = Math[n(310)](i, this.currentIndex), this[n(253)].x = this.ratioPoints[this[n(270)]].x, r = this[n(293)][this.currentIndex], this[n(278)][n(257)] = Math[n(333)](0, this.sliderControl.x), this[n(282)][n(301)](this[n(278)]), this[n(286)][n(295)](r)
				}
			}
		}]) && Sa(n.prototype, r), Object[i(304)](n, i(296), {
			writable: !1
		}), c
	}(Phaser[Ia(288)]);

	function xa(t, e) {
		var n = Fa();
		return (xa = function(t, e) {
			return n[t -= 493]
		})(t, e)
	}
	var _a = xa;

	function Ra(t) {
		var e = xa;
		return (Ra = e(531) == typeof Symbol && e(494) == typeof Symbol[e(527)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(523)] === Symbol && t !== Symbol.prototype ? n(494) : typeof t
		})(t)
	}

	function ja(t, e) {
		for (var n = xa, r = 0; r < e[n(549)]; r++) {
			var i = e[r];
			i.enumerable = i[n(525)] || !1, i[n(543)] = !0, n(498) in i && (i[n(545)] = !0), Object[n(524)](t, i.key, i)
		}
	}

	function Ea(t, e) {
		var n = xa;
		return (Ea = Object[n(512)] ? Object[n(512)].bind() : function(t, e) {
			return t[n(513)] = e, t
		})(t, e)
	}

	function Ba(t, e) {
		var n = xa;
		if (e && ("object" === Ra(e) || typeof e === n(531))) return e;
		if (void 0 !== e) throw new TypeError(n(503));
		return Aa(t)
	}

	function Aa(t) {
		if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t
	}

	function Fa() {
		var t = ["6954330NnrcnH", "valueOf", "onCheck", "game", "1799528wRjnku", "535ZQWXfx", "constructor", "defineProperty", "enumerable", "apply", "iterator", "call", "prototype", "getValue", "function", "1mwYBVy", "addColorStop", "context", "sham", "bind", "useHandCursor", "width", "label", "radio_uncheck", "#fdd043", "construct", "configurable", "input", "writable", "getPrototypeOf", "atlasName", "Super expression must either be null or a function", "length", "frameName", "createGradient", "3912EQxedV", "checked", "events", "onInputDown", "createLinearGradient", "radio_check", "455217nwGthD", "inputEnabled", "901740kzIKYh", "1755510QpmIHS", "symbol", "isChecked", "text", "radioValue", "value", "fill", "Sprite", "1734222JOKZQt", "setText", "Derived constructors may only return object or undefined", "radioGroup", "create", "undefined", "Cannot call a class as a function", "add", "99pkzPzo", "disable", "height", "setPrototypeOf", "__proto__", "check", "#f7e1b3", "uncheck"];
		return (Fa = function() {
			return t
		})()
	}

	function Da(t) {
		var e = xa;
		return (Da = Object[e(512)] ? Object.getPrototypeOf[e(536)]() : function(t) {
			var n = e;
			return t[n(513)] || Object[n(546)](t)
		})(t)
	}! function(t, e) {
		for (var n = xa, r = t();;) try {
			if (581011 == parseInt(n(532)) / 1 * (parseInt(n(501)) / 2) + parseInt(n(560)) / 3 + parseInt(n(552)) / 4 * (-parseInt(n(522)) / 5) + parseInt(n(517)) / 6 + parseInt(n(558)) / 7 + parseInt(n(521)) / 8 + -parseInt(n(509)) / 9 * (parseInt(n(493)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Fa);
	var Na = function(t) {
			var e = xa;
			! function(t, e) {
				var n = xa;
				if (typeof e !== n(531) && null !== e) throw new TypeError(n(548));
				t[n(529)] = Object[n(505)](e && e[n(529)], {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), Object[n(524)](t, "prototype", {
					writable: !1
				}), e && Ea(t, e)
			}(c, t);
			var n, r, i, a, o, s = (a = c, o = function() {
				var t = xa;
				if (typeof Reflect === t(506) || !Reflect.construct) return !1;
				if (Reflect[t(542)][t(535)]) return !1;
				if (typeof Proxy === t(531)) return !0;
				try {
					return Boolean[t(529)][t(518)][t(528)](Reflect[t(542)](Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}(), function() {
				var t, e = xa,
					n = Da(a);
				if (o) {
					var r = Da(this)[e(523)];
					t = Reflect[e(542)](n, arguments, r)
				} else t = n[e(526)](this, arguments);
				return Ba(this, t)
			});

			function c(t, e, n, r, i, a, o, u) {
				var h, f = xa;
				return function(t, e) {
					if (!(t instanceof e)) throw new TypeError(xa(507))
				}(this, c), (h = s.call(this, t, e, n, r, f(540)))[f(547)] = r, h.game[f(508)].existing(Aa(h)), typeof i != f(506) && (h[f(497)] = i, e = h[f(538)] + 35, typeof u != f(506) && (e = h[f(538)] + u), h[f(539)] = h[f(520)].add[f(496)](e, 3, a, {
					font: APP_FONT,
					fontSize: 31.35,
					fontWeight: "bold",
					fill: f(515)
				}), h.addChild(h.label), h[f(539)][f(502)](a)), h[f(559)] = !0, h[f(544)][f(537)] = !0, h[f(554)][f(555)][f(508)](h.onCheck, Aa(h)), h[f(504)] = o, h
			}
			return n = c, i = xa, (r = [{
				key: e(519),
				value: function() {
					var t = e;
					if (!this.checked) {
						if (typeof this.radioGroup != t(506))
							for (var n in this[t(504)]) this[t(504)][n].uncheck();
						this[t(514)]()
					}
				}
			}, {
				key: e(495),
				value: function() {
					return this[e(553)]
				}
			}, {
				key: e(516),
				value: function() {
					var t = e;
					this[t(553)] = !1, this[t(550)] = t(540)
				}
			}, {
				key: e(514),
				value: function() {
					var t = e;
					this[t(553)] = !0, this[t(550)] = t(557)
				}
			}, {
				key: e(530),
				value: function() {
					return this[e(497)]
				}
			}, {
				key: e(551),
				value: function(t, n) {
					var r = e,
						i = this[r(539)][r(534)][r(556)](0, 0, 0, this[r(539)][r(511)]);
					i[r(533)](0, t || "#fef38a"), i[r(533)](1, n || r(541)), this[r(539)][r(499)] = i
				}
			}, {
				key: e(510),
				value: function() {
					var t = e;
					this.inputEnabled = !1, this[t(550)] = "radio_uncheck", this[t(539)].fill = "#7f7f7f"
				}
			}]) && ja(n[i(529)], r), Object[i(524)](n, "prototype", {
				writable: !1
			}), c
		}(Phaser[_a(500)]),
		Ga = Ua;

	function La(t) {
		var e = Ua;
		return (La = e(401) == typeof Symbol && e(418) == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(456)] ? n(418) : typeof t
		})(t)
	}

	function Ma(t, e) {
		for (var n = Ua, r = 0; r < e[n(453)]; r++) {
			var i = e[r];
			i[n(462)] = i[n(462)] || !1, i[n(430)] = !0, n(439) in i && (i.writable = !0), Object[n(413)](t, i[n(432)], i)
		}
	}

	function Wa() {
		var t = ["atlasName", "key", "1920903lEvnNq", "slider_bg", "maxUsers", "betTitle", "setText", "lang", "value", "width", "setPrototypeOf", "btn_plus", "Group", "playerCounts", "15jMOQiz", "55871EDplES", "Super expression must either be null or a function", "lobbyScreen", "betValueText", "slider_bar", "sham", "10JHntkN", "length", "set", "betValueBg", "prototype", "check", "add", "updateSlider", "1055920DGFyUE", "inputEnabled", "enumerable", "decreaseBet", "slider_trail", "btnDecreaseBet", "50qEhZfA", "__proto__", "PLAYER_COUNT", "50005683tPtPtC", "betSlider", "playerCountTitle", "playerCount", "betValue", "text", "object", "sound", "2526042HQcLqn", "game", "onInputDown", "function", "construct", "anchor", "3103616DFvheI", "Text", "betSliderBg", "create", "btn_minus", "call", "#f7e1b3", "refreshTexts", "bind", "defineProperty", "5122292DqjDvZ", "increaseBet", "onRadioCheck", "BET", "symbol", "push", "events", "getPrototypeOf", "Cannot call a class as a function", "height", "playerCountData", "this hasn't been initialised - super() hasn't been called", "playButtonSound", "btnIncreaseBet", "constructor", "onSlideChange", "configurable"];
		return (Wa = function() {
			return t
		})()
	}

	function za(t, e) {
		var n = Ua;
		return (za = Object[n(441)] ? Object.setPrototypeOf[n(412)]() : function(t, e) {
			return t[n(467)] = e, t
		})(t, e)
	}

	function Ua(t, e) {
		var n = Wa();
		return (Ua = function(t, e) {
			return n[t -= 390]
		})(t, e)
	}

	function Va(t, e) {
		var n = Ua;
		if (e && (La(e) === n(396) || typeof e === n(401))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return Ha(t)
	}

	function Ha(t) {
		if (void 0 === t) throw new ReferenceError(Ua(425));
		return t
	}

	function Xa(t) {
		var e = Ua;
		return (Xa = Object[e(441)] ? Object[e(421)][e(412)]() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(421)](t)
		})(t)
	}! function(t, e) {
		for (var n = Ua, r = t();;) try {
			if (872402 == -parseInt(n(446)) / 1 * (parseInt(n(466)) / 2) + -parseInt(n(433)) / 3 + -parseInt(n(460)) / 4 + parseInt(n(445)) / 5 * (-parseInt(n(398)) / 6) + -parseInt(n(414)) / 7 + -parseInt(n(404)) / 8 + parseInt(n(390)) / 9 * (parseInt(n(452)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Wa);
	const qa = function(t) {
		var e = Ua;
		! function(t, e) {
			var n = Ua;
			if ("function" != typeof e && null !== e) throw new TypeError(n(447));
			t[n(456)] = Object[n(407)](e && e[n(456)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(413)](t, "prototype", {
				writable: !1
			}), e && za(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Ua;
			if ("undefined" == typeof Reflect || !Reflect[t(402)]) return !1;
			if (Reflect[t(402)][t(451)]) return !1;
			if (typeof Proxy === t(401)) return !0;
			try {
				return Boolean[t(456)].valueOf.call(Reflect[t(402)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Ua,
				n = Xa(a);
			if (o) {
				var r = Xa(this)[e(428)];
				t = Reflect[e(402)](n, arguments, r)
			} else t = n.apply(this, arguments);
			return Va(this, t)
		});

		function c(t) {
			var e, n = Ua;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Ua(422))
			})(this, c), (e = s[n(409)](this, t)).atlasName = n(448), e.betValue = 5e3, e[n(393)] = CyberInstance.maxUsers, e[n(436)] = new(Phaser[n(405)])(e.game, 0, 0, CyberInstance[n(438)].BET + ":", {
				font: APP_FONT,
				fontWeight: 500,
				fontSize: 24,
				fill: n(410)
			}), e[n(458)](e.betTitle), e[n(406)] = e[n(407)](0, e[n(436)].y + e[n(436)][n(423)] + 10, e[n(431)], n(434)), e[n(455)] = e[n(407)](0, e[n(406)].y + 10, e[n(431)], "value_bg"), e[n(455)].x = e.betSliderBg.width / 2 - e.betValueBg.width / 2, e[n(449)] = e[n(399)].add[n(395)](e[n(406)][n(440)] / 2, e.betValueBg.y + 6, u.shortenLargeNumber(5e3), {
				font: APP_FONT,
				fontWeight: 500,
				fontSize: 20,
				fill: "#f7e1b3"
			}), e.betValueText[n(403)][n(454)](.5, 0), e[n(458)](e.betValueText), e[n(449)][n(437)](u.shortenLargeNumber(5e3)), e.btnDecreaseBet = e[n(407)](e[n(406)].x + 22, e[n(406)].y + 40, e[n(431)], n(408)), e[n(427)] = e[n(407)](e[n(406)].x + e.betSliderBg.width - 22 - e.btnDecreaseBet[n(440)], e[n(406)].y + 40, e[n(431)], n(442)), e[n(465)][n(461)] = !0, e[n(427)].inputEnabled = !0, e[n(465)].events[n(400)].add(e[n(463)], Ha(e)), e.btnIncreaseBet[n(420)][n(400)][n(458)](e[n(415)], Ha(e)), e[n(391)] = new Pa(e[n(399)], e[n(406)][n(440)] / 2 - 289, e[n(406)].y + 65, {
				key: e.atlasName,
				sliderSprite: n(464),
				sliderSpriteBar: n(450),
				sliderControl: "slider_control",
				minValue: 5e3,
				maxValue: 1e6,
				slideType: 2,
				ratioMap: [{
					value: 5e3
				}, {
					value: 1e4
				}, {
					value: 2e4
				}, {
					value: 5e4
				}, {
					value: 1e5
				}, {
					value: 2e5
				}, {
					value: 3e5
				}, {
					value: 5e5
				}, {
					value: 1e6
				}, {
					value: 2e6
				}, {
					value: 5e6
				}]
			}), e[n(458)](e.betSlider), e[n(391)][n(429)][n(458)]((function(t) {
				var r = n;
				e[r(449)][r(437)](u.shortenLargeNumber(t[r(439)])), e[r(394)] = t[r(439)]
			}), Ha(e)), e[n(392)] = e[n(399)][n(458)][n(395)](0, e.betSliderBg.y + e[n(406)][n(423)] + 40, CyberInstance[n(438)][n(468)] + ":", {
				font: APP_FONT,
				fontWeight: 500,
				fontSize: 24,
				fill: n(410)
			}), e[n(458)](e[n(392)]), e[n(444)] = [], e[n(424)] = [];
			for (var r = 2; r <= CyberInstance[n(435)]; r++) e[n(424)][n(419)](r);
			var i = 140,
				a = e[n(392)].y - 8;
			for (r = 0; r < e[n(424)][n(453)]; r++) {
				var o = new Na(e[n(399)], i, a, e[n(431)], e[n(424)][r], e[n(424)][r], e[n(444)], 35);
				o[n(420)][n(400)].add(e[n(416)], Ha(e)), e[n(458)](o), e[n(444)].push(o), e[n(424)][r] == CyberInstance.maxUsers && o[n(457)](), i += 170
			}
			return e.x = e[n(399)][n(440)] / 2 - e[n(406)][n(440)] / 2, e
		}
		return n = c, i = Ua, (r = [{
			key: e(411),
			value: function() {
				var t = e;
				this[t(436)][t(437)](CyberInstance.lang[t(417)] + ":"), this[t(392)][t(437)](CyberInstance.lang[t(468)] + ":")
			}
		}, {
			key: e(463),
			value: function() {
				var t = e;
				CyberInstance[t(397)][t(426)](), this[t(391)].updateSlider(-1)
			}
		}, {
			key: e(415),
			value: function() {
				var t = e;
				CyberInstance.sound[t(426)](), this.betSlider[t(459)](1)
			}
		}, {
			key: e(416),
			value: function(t) {
				this[e(393)] = t.getValue()
			}
		}]) && Ma(n[i(456)], r), Object.defineProperty(n, i(456), {
			writable: !1
		}), c
	}(Phaser[Ga(443)]);
	var Ka = no;

	function Ya(t) {
		var e = no;
		return (Ya = e(227) == typeof Symbol && e(153) == typeof Symbol[e(218)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(227) == typeof Symbol && t[n(168)] === Symbol && t !== Symbol[n(182)] ? "symbol" : typeof t
		})(t)
	}

	function Ja(t, e) {
		for (var n = no, r = 0; r < e.length; r++) {
			var i = e[r];
			i.enumerable = i[n(160)] || !1, i[n(189)] = !0, n(191) in i && (i.writable = !0), Object[n(219)](t, i[n(157)], i)
		}
	}

	function Qa(t, e) {
		var n = no;
		return (Qa = Object[n(154)] ? Object[n(154)][n(194)]() : function(t, e) {
			return t[n(161)] = e, t
		})(t, e)
	}

	function Za(t, e) {
		var n = no;
		if (e && (Ya(e) === n(232) || typeof e === n(227))) return e;
		if (void 0 !== e) throw new TypeError(n(231));
		return $a(t)
	}

	function $a(t) {
		if (void 0 === t) throw new ReferenceError(no(163));
		return t
	}

	function to(t) {
		var e = no;
		return (to = Object[e(154)] ? Object.getPrototypeOf[e(194)]() : function(t) {
			var n = e;
			return t[n(161)] || Object[n(211)](t)
		})(t)
	}

	function eo() {
		var t = ["146352plAXMR", "text", "inputTextValue", "submitButton", "186142mVddkE", "sound", "instance", "create", "button_green_197x64", "closeLoadingPopup", "loadTexture", "homeScreen", "#fbafb3", "playButtonSound", "getPrototypeOf", "sham", "joinRoom", "3demevD", "54940nhFQIu", "sprite", "call", "iterator", "defineProperty", "addChild", "inputText", "lang", "cg_tab", "construct", "5kNeMoZ", "button_gray_197x64", "function", "apply", "visible", "make", "Derived constructors may only return object or undefined", "object", "state", "Group", "length", "symbol", "setPrototypeOf", "valueOf", "undefined", "key", "NHAP_MA_PHONG", "joinPrivateRoom", "enumerable", "__proto__", "8AcMEsI", "this hasn't been initialised - super() hasn't been called", "openLoadingPopup", "height", "4181289kyPXvq", "1254536okRdiP", "constructor", "toUpperCase", "getCurrentState", "number", "Cannot call a class as a function", "clearButton", "addText", "click", "setText", "anchor", "setTo", "game", "4081IQTCLe", "width", "prototype", "574857gfhECi", "find_room_input", "#81425c", "1001684RsZIfE", "add", "slice", "configurable", "Super expression must either be null or a function", "value", "log", "scale", "bind", "showNotEnoughMoneyToPlay", "createButton"];
		return (eo = function() {
			return t
		})()
	}

	function no(t, e) {
		var n = eo();
		return (no = function(t, e) {
			return n[t -= 152]
		})(t, e)
	}! function(t, e) {
		for (var n = no, r = t();;) try {
			if (337635 == -parseInt(n(201)) / 1 + -parseInt(n(167)) / 2 * (parseInt(n(214)) / 3) + -parseInt(n(186)) / 4 + parseInt(n(225)) / 5 * (parseInt(n(197)) / 6) + -parseInt(n(166)) / 7 + -parseInt(n(162)) / 8 * (parseInt(n(183)) / 9) + -parseInt(n(215)) / 10 * (-parseInt(n(180)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(eo);
	const ro = function(t) {
		var e = no;
		! function(t, e) {
			var n = no;
			if ("function" != typeof e && null !== e) throw new TypeError(n(190));
			t[n(182)] = Object[n(204)](e && e[n(182)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(219)](t, n(182), {
				writable: !1
			}), e && Qa(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = no;
			if (typeof Reflect === t(156) || !Reflect.construct) return !1;
			if (Reflect.construct[t(212)]) return !1;
			if (typeof Proxy === t(227)) return !0;
			try {
				return Boolean[t(182)][t(155)][t(217)](Reflect[t(224)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = no,
				n = to(a);
			if (o) {
				var r = to(this)[e(168)];
				t = Reflect[e(224)](n, arguments, r)
			} else t = n[e(228)](this, arguments);
			return Za(this, t)
		});

		function c(t) {
			var e, n = no;
			! function(t, e) {
				if (!(t instanceof e)) throw new TypeError(no(172))
			}(this, c);
			var r = (e = s.call(this, t))[n(204)](0, 0, n(208), n(184));
			e[n(199)] = "", e.inputText = e[n(179)][n(230)][n(198)](r[n(181)] / 2, r[n(165)] / 2 + 2, CyberInstance.lang.NHAP_MA_PHONG, {
				font: APP_FONT,
				fontWeight: 400,
				fontSize: 26,
				fill: n(185)
			}), e.inputText[n(177)][n(178)](.5), e[n(187)](e[n(221)]), e.inputText[n(176)](CyberInstance[n(222)][n(158)]), e.clearButton = new Lt(e[n(179)], 0, 0, n(208), "button_close"), e[n(173)][n(193)][n(178)](.7), e.clearButton.x = r[n(181)] - e[n(173)][n(181)] - 10, e[n(173)].y = r[n(165)] / 2 - e[n(173)][n(165)] / 2, e[n(173)][n(175)]((function() {
				var t = n;
				e.inputTextValue.length > 0 && (e.inputTextValue = e.inputTextValue[t(188)](0, e[t(199)][t(152)] - 1), 0 == e[t(199)][t(152)] ? (e[t(221)][t(176)](CyberInstance[t(222)].NHAP_MA_PHONG), e[t(173)][t(229)] = !1, e[t(200)][t(207)](t(208), "button_gray_197x64")) : e[t(221)][t(176)](e[t(199)]))
			}), $a(e)), e[n(187)](e[n(173)]), e.clearButton[n(229)] = !1;
			for (var i = 0, a = r.y + r[n(165)] + 25, o = 1; o <= 12; o++) {
				if (o < 10) var u = e[n(196)](o);
				else 10 == o ? u = e[n(196)]("*") : 11 == o ? u = e[n(196)]("0") : 12 == o && (u = e[n(196)]("#"));
				u.x = i, u.y = a, 3 == o || 6 == o || 9 == o ? (i = 0, a += 59) : i += 229
			}
			return a += 59, e.submitButton = new Lt(e[n(179)], 0, a + 50, n(208), n(226)), e.submitButton.x = r[n(181)] / 2 - e[n(200)][n(181)] / 2, e.submitButton[n(174)](CyberInstance[n(222)].VAO_PHONG[n(169)]()), e[n(200)][n(175)](e[n(213)], $a(e)), e[n(187)](e[n(200)]), e.x = e[n(179)][n(181)] / 2 - r.width / 2, e
		}
		return n = c, i = no, (r = [{
			key: e(213),
			value: function() {
				var t = e;
				if (this[t(199)].length > 0) try {
					if (ne[t(203)].canPlay()) {
						this[t(179)][t(233)][t(170)]()[t(164)]();
						var n = parseInt(this[t(199)]);
						ne[t(203)][t(159)](n, !1)
					} else G[t(195)]()
				} catch (e) {
					this[t(179)][t(233)][t(170)]()[t(206)](), console[t(192)](e)
				}
			}
		}, {
			key: e(196),
			value: function(t) {
				var n = e,
					r = this,
					i = this[n(179)][n(230)][n(216)](0, 0, n(208), n(223));
				i[n(171)] = t;
				var a = this[n(179)][n(230)][n(198)](i[n(181)] / 2, i[n(165)] / 2 + 2, t, {
					font: APP_FONT,
					fontWeight: 900,
					fontSize: 20,
					fill: n(209)
				});
				return a[n(177)].setTo(.5), i[n(220)](a), a[n(176)]("" + t), i.inputEnabled = !0, i.events.onInputDown[n(187)]((function(t) {
					var e = n;
					CyberInstance[e(202)][e(210)](), r.inputTextValue[e(152)] < 20 && (0 == r.inputTextValue[e(152)] && (r[e(173)][e(229)] = !0, r[e(200)][e(207)](e(208), e(205))), r.inputTextValue += t.number, r[e(221)][e(176)](r[e(199)]))
				})), this[n(187)](i), i
			}
		}]) && Ja(n[i(182)], r), Object[i(219)](n, i(182), {
			writable: !1
		}), c
	}(Phaser[Ka(234)]);

	function io(t) {
		var e = ho;
		return (io = e(201) == typeof Symbol && e(181) == typeof Symbol[e(189)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(163)] === Symbol && t !== Symbol[n(166)] ? n(181) : typeof t
		})(t)
	}

	function ao(t, e) {
		for (var n = ho, r = 0; r < e[n(159)]; r++) {
			var i = e[r];
			i[n(145)] = i[n(145)] || !1, i[n(209)] = !0, n(147) in i && (i[n(187)] = !0), Object[n(148)](t, i.key, i)
		}
	}

	function oo(t, e) {
		var n = ho;
		return (oo = Object[n(238)] ? Object[n(238)][n(172)]() : function(t, e) {
			return t[n(142)] = e, t
		})(t, e)
	}

	function so(t, e) {
		var n = ho;
		if (e && ("object" === io(e) || typeof e === n(201))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError(ho(153));
			return t
		}(t)
	}

	function co(t) {
		var e = ho;
		return (co = Object[e(238)] ? Object[e(196)][e(172)]() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(196)](t)
		})(t)
	}

	function uo() {
		var t = ["tween", "refreshTexts", "sendRequest", "add", "__proto__", "lobbyScreen", "Text", "enumerable", "cg_tab2", "value", "defineProperty", "showNotEnoughMoneyToJoin", "addChild", "height", "SFSObject", "this hasn't been initialised - super() hasn't been called", "#f7e1b3", "bet", "143850pAmWtE", "close", "text", "length", "construct", "putInt", "createTransition", "constructor", "closeButton", "sfs", "prototype", "setTo", "createGameForm", "addTextForTab", "#fbafb3", "1552qtNXsw", "bind", "2147460rcazlr", "lang", "findGameForm", "width", "createView", "addText", "12629067llzBuQ", "Cannot call a class as a function", "symbol", "create", "cg_tab", "visible", "button_green_197x64", "loadTexture", "writable", "apply", "iterator", "click", "events", "cache", "sound", "openLoadingPopup", "frameName", "getPrototypeOf", "open", "132045YRxDkr", "toUpperCase", "isAssetReady", "function", "Super expression must either be null or a function", "createGame", "friendMode", "btnCreate", "CREATE_ROOM", "108bHwMDx", "onInputDown", "configurable", "putLong", "options", "Easing", "Back", "4925370nZvezY", "instance", "undefined", "104DFqoib", "118953eKyUQO", "ExtensionRequest", "inputEnabled", "homeScreenBG2", "7gQqejV", "onCreate", "Out", "addTabs", "CREATE_GAME_TITLE", "call", "createRoomTab", "searchRoomTab", "playerCount", "12XHzWvi", "state", "anchor", "paused", "homeScreen", "maxUsers", "playButtonSound", "setPrototypeOf", "32HATdgS", "checkImageKey", "game"];
		return (uo = function() {
			return t
		})()
	}

	function ho(t, e) {
		var n = uo();
		return (ho = function(t, e) {
			return n[t -= 135]
		})(t, e)
	}! function(t, e) {
		for (var n = ho, r = t();;) try {
			if (653089 == -parseInt(n(171)) / 1 * (parseInt(n(217)) / 2) + parseInt(n(198)) / 3 * (parseInt(n(207)) / 4) + parseInt(n(214)) / 5 + -parseInt(n(156)) / 6 * (parseInt(n(222)) / 7) + -parseInt(n(135)) / 8 * (parseInt(n(218)) / 9) + -parseInt(n(173)) / 10 + -parseInt(n(179)) / 11 * (parseInt(n(231)) / 12)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(uo);
	const fo = function(t) {
		var e = ho;
		! function(t, e) {
			var n = ho;
			if (typeof e !== n(201) && null !== e) throw new TypeError(n(202));
			t[n(166)] = Object.create(e && e[n(166)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(148)](t, n(166), {
				writable: !1
			}), e && oo(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = ho;
			if (typeof Reflect === t(216) || !Reflect[t(160)]) return !1;
			if (Reflect[t(160)].sham) return !1;
			if (typeof Proxy === t(201)) return !0;
			try {
				return Boolean[t(166)].valueOf[t(227)](Reflect[t(160)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = ho,
				n = co(a);
			if (o) {
				var r = co(this)[e(163)];
				t = Reflect[e(160)](n, arguments, r)
			} else t = n[e(188)](this, arguments);
			return so(this, t)
		});

		function c(t, e) {
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(ho(180))
			}(this, c), s.call(this, t, e)
		}
		return n = c, i = ho, (r = [{
			key: e(200),
			value: function() {
				var t = e;
				return this.game.cache[t(136)](t(143)) && this[t(137)][t(192)][t(136)](t(221))
			}
		}, {
			key: e(177),
			value: function() {
				var t = e,
					n = this,
					r = this[t(182)](0, 0, t(221));
				r[t(176)] = this.game.width, r[t(151)] = this[t(137)][t(151)], r.inputEnabled = !0;
				var i = this.game[t(141)][t(158)](this[t(137)][t(176)] / 2, 50, "", {
					font: APP_FONT,
					fontWeight: 500,
					fontSize: 36.92,
					fill: t(154)
				});
				i[t(233)][t(167)](.5), this[t(141)](i), i.setText(CyberInstance[t(174)][t(226)].toUpperCase());
				var a = 119;
				this[t(211)] && !0 === this.options.friendMode && (a = 90, this[t(225)](a), a += 75), this[t(168)] = new qa(this[t(137)]), this[t(168)].y = a, this[t(141)](this[t(168)]), this[t(168)][t(139)](), this[t(175)] = new ro(this.game), this.findGameForm.y = a, this[t(141)](this[t(175)]), this[t(175)].visible = !1, this[t(205)] = new Lt(this[t(137)], 0, this.game[t(151)] - 100, "homeScreen", t(185)), this[t(205)][t(178)](CyberInstance[t(174)].CREATE_ROOM[t(199)]()), this.btnCreate.x = this[t(137)][t(176)] / 2 - this[t(205)][t(176)] / 2, this[t(205)][t(190)](this.onCreate, this), this[t(141)](this[t(205)]);
				var o = this[t(182)](0, 0, t(235), "icon_close");
				o.x = this[t(137)][t(176)] - o[t(176)] - 15, o.y = 15, o[t(220)] = !0, o.events[t(208)].add((function() {
					var e = t;
					CyberInstance[e(193)][e(237)](), n[e(157)]()
				})), this[t(164)] = o, this[t(162)]()
			}
		}, {
			key: "createTransition",
			value: function() {
				var t = e;
				this.y = -100, this[t(137)][t(141)][t(138)](this).to({
					y: 0
				}, 500, Phaser[t(212)][t(213)][t(224)], !0)
			}
		}, {
			key: e(197),
			value: function() {
				var t = e;
				!this[t(184)] && (this.createTransition(), this[t(184)] = !0)
			}
		}, {
			key: e(157),
			value: function() {
				var t = e;
				this[t(184)] && (this[t(184)] = !1)
			}
		}, {
			key: e(223),
			value: function() {
				var t = e,
					n = this;
				CyberInstance[t(234)] && (CyberInstance[t(234)] = !1);
				var r = parseInt(this[t(168)].betValue);
				ne[t(215)].canPlay(r) ? (this[t(137)][t(232)].getCurrentState()[t(194)]({
					disconnectTime: 15e3
				}), ne[t(140)]((function() {
					var e = t,
						r = new(SFS2X[e(152)]);
					r[e(210)](e(155), parseInt(n[e(168)].betValue)), n[e(168)].playerCount < 4 && r[e(161)](e(236), n[e(168)][e(230)]), n[e(211)] && !0 === n[e(211)].friendMode && r.putBool(e(204), !0), ne.instance[e(165)].send(new(SFS2X[e(219)])(e(203), r))
				}))) : G[t(149)](r)
			}
		}, {
			key: e(225),
			value: function(t) {
				var n = e,
					r = this;
				this[n(228)] = this.create(0, t, n(235), "cg_tab"), this.addTextForTab(this[n(228)], CyberInstance.lang[n(206)]), this[n(228)].inputEnabled = !0, this[n(228)].events.onInputDown.add((function() {
					var t = n;
					r[t(228)][t(195)] == t(146) && (CyberInstance.sound[t(237)](), r[t(228)][t(186)]("homeScreen", t(183)), r[t(229)][t(186)](t(235), t(146)), r.createGameForm[t(184)] = !0, r[t(205)][t(184)] = !0, r[t(175)][t(184)] = !1)
				})), this[n(229)] = this[n(182)](0, t, n(235), n(146)), this[n(169)](this.searchRoomTab, CyberInstance.lang.SEARCH_ROOM), this[n(229)][n(220)] = !0, this.searchRoomTab[n(191)].onInputDown[n(141)]((function() {
					var t = n;
					r[t(229)][t(195)] == t(146) && (CyberInstance[t(193)][t(237)](), r.createRoomTab.loadTexture(t(235), t(146)), r[t(229)][t(186)](t(235), t(183)), r.createGameForm[t(184)] = !1, r[t(205)][t(184)] = !1, r[t(175)][t(184)] = !0)
				})), this[n(228)].x = this[n(137)][n(176)] / 2 - (this[n(228)][n(176)] + this[n(229)][n(176)]) / 2, this.searchRoomTab.x = this[n(228)].x + this.createRoomTab[n(176)]
			}
		}, {
			key: e(169),
			value: function(t, n) {
				var r = e,
					i = new(Phaser[r(144)])(this.game, t[r(176)] / 2, t[r(151)] / 2 + 2, n, {
						font: APP_FONT,
						fontWeight: 400,
						fontSize: 20,
						fill: r(170)
					});
				i[r(233)][r(167)](.5), t[r(150)](i), i.setText(n)
			}
		}]) && ao(n.prototype, r), Object[i(148)](n, i(166), {
			writable: !1
		}), c
	}(P);

	function lo(t) {
		var e = go;
		return (lo = e(248) == typeof Symbol && e(267) == typeof Symbol[e(249)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(248) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(245)] ? "symbol" : typeof t
		})(t)
	}

	function po(t, e) {
		for (var n = go, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(287)] = i[n(287)] || !1, i[n(291)] = !0, n(237) in i && (i[n(268)] = !0), Object[n(301)](t, i[n(252)], i)
		}
	}

	function yo(t, e) {
		var n = go;
		return (yo = Object[n(296)] ? Object[n(296)][n(271)]() : function(t, e) {
			return t[n(235)] = e, t
		})(t, e)
	}

	function vo() {
		var t = ["iterator", "ShopScreen", "10PIycoh", "key", "9gXVYRa", "text", "sound", "open", "state", "call", "formatTimeV2", "create", "visible", "413IEpOXI", "background", "close", "flashSaleDurationText", "465005qNqCTj", "symbol", "writable", "addChild", "apply", "bind", "construct", "Cannot call a class as a function", "remove", "time", "flashsale", "game", "getPrototypeOf", "870307VJYrkT", "events", "setTo", "createView", "35724SNhVDY", "anchor", "valueOf", "instance", "enumerable", "inited", "setText", "sham", "configurable", "playButtonSound", "40445556aSNMkS", "9426248icFVNa", "loop", "setPrototypeOf", "inputEnabled", "this hasn't been initialised - super() hasn't been called", "Còn lại: ", "add", "defineProperty", "onInputDown", "40XKvuaR", "width", "Linear", "Super expression must either be null or a function", "__proto__", "getPromotion", "value", "136631QzDFCF", "durationTimer", "getDuration", "addOverlay", "constructor", "click", "2AxxetC", "prototype", "height", "1994898GtonqG", "function"];
		return (vo = function() {
			return t
		})()
	}

	function bo(t, e) {
		var n = go;
		if (e && ("object" === lo(e) || typeof e === n(248))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError(go(298));
			return t
		}(t)
	}

	function go(t, e) {
		var n = vo();
		return (go = function(t, e) {
			return n[t -= 233]
		})(t, e)
	}

	function mo(t) {
		var e = go;
		return (mo = Object[e(296)] ? Object[e(278)].bind() : function(t) {
			return t[e(235)] || Object.getPrototypeOf(t)
		})(t)
	}! function(t, e) {
		for (var n = go, r = t();;) try {
			if (611966 == -parseInt(n(279)) / 1 * (-parseInt(n(244)) / 2) + parseInt(n(247)) / 3 + parseInt(n(303)) / 4 * (parseInt(n(266)) / 5) + -parseInt(n(283)) / 6 * (-parseInt(n(262)) / 7) + parseInt(n(294)) / 8 * (parseInt(n(253)) / 9) + -parseInt(n(251)) / 10 * (parseInt(n(238)) / 11) + -parseInt(n(293)) / 12) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(vo);
	const Io = function(t) {
		var e = go;
		! function(t, e) {
			var n = go;
			if (typeof e !== n(248) && null !== e) throw new TypeError(n(234));
			t[n(245)] = Object[n(260)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(301)](t, n(245), {
				writable: !1
			}), e && yo(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = go;
			if ("undefined" == typeof Reflect || !Reflect[t(272)]) return !1;
			if (Reflect[t(272)][t(290)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean.prototype[t(285)][t(258)](Reflect[t(272)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = go,
				n = mo(a);
			if (o) {
				var r = mo(this)[e(242)];
				t = Reflect[e(272)](n, arguments, r)
			} else t = n[e(270)](this, arguments);
			return bo(this, t)
		});

		function c(t) {
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(go(273))
			}(this, c), s.call(this, t)
		}
		return n = c, i = go, (r = [{
			key: e(282),
			value: function() {
				var t = e,
					n = this;
				this[t(241)](.8), this[t(263)] = this[t(260)](0, 0, t(276), "bg"), this[t(263)].x = this[t(277)].width / 2 - this.background.width / 2, this.background.y = this[t(277)][t(246)] / 2 - this[t(263)].height / 2;
				var r = new Lt(this[t(277)], 274, 396, t(276), "buy_button");
				r.x = r.x + r.width / 2, r.y = r.y + r[t(246)] / 2, r[t(284)][t(281)](.5), r[t(243)]((function() {
					var e = t;
					et.instance[e(288)] && (n.durationTimer && n.game[e(275)][e(280)][e(274)](n.durationTimer), n[e(277)][e(257)].start(e(250), !0, !1))
				})), this[t(263)][t(269)](r), this.game[t(300)].tween(r.scale).to({
					x: .94,
					y: .94
				}, 1e3, t(233), !0, 0, -1).yoyo(!0, 0);
				var i = this[t(260)](0, 0, t(276), t(264));
				i.x = this[t(263)].x + this[t(263)][t(304)] - i[t(304)] - 70, i.y = this[t(263)].y + 25, i[t(297)] = !0, i[t(280)][t(302)].add(this[t(264)], this);
				var a = ft[t(286)][t(236)]();
				a && a[t(240)]() > 5e3 && (this[t(265)] = this[t(277)].add[t(254)](r.x, 370, "Còn lại: " + u[t(259)](a[t(240)]()), {
					font: APP_FONT,
					fontSize: 20,
					fill: "#fcf8de",
					fontWeight: "500"
				}), this.flashSaleDurationText[t(284)][t(281)](.5, 0), this[t(263)][t(269)](this[t(265)]), this[t(239)] = this[t(277)].time[t(280)][t(295)](1e3, (function() {
					var e = t,
						r = a[e(240)]();
					r > 0 ? n[e(265)][e(289)](e(299) + u.formatTimeV2(r)) : (n.game[e(275)][e(280)][e(274)](n[e(239)]), n.flashSaleDurationText[e(261)] = !1)
				})))
			}
		}, {
			key: e(256),
			value: function() {
				var t = e,
					n = this;
				!this[t(261)] && (this[t(261)] = !0, this[t(239)] = this[t(277)][t(275)][t(280)][t(295)](1e3, (function() {
					var e = t,
						r = ft[e(286)][e(236)]().getDuration();
					r > 0 ? n[e(265)][e(289)](e(299) + u[e(259)](r)) : (n[e(277)][e(275)][e(280)][e(274)](n.durationTimer), n.flashSaleDurationText[e(261)] = !1)
				})))
			}
		}, {
			key: e(264),
			value: function() {
				var t = e;
				this[t(261)] && (CyberInstance[t(255)][t(292)](), this[t(239)] && this[t(277)][t(275)][t(280)].remove(this.durationTimer), this[t(261)] = !1)
			}
		}]) && po(n.prototype, r), Object[i(301)](n, i(245), {
			writable: !1
		}), c
	}(P);

	function wo(t) {
		var e = So;
		return (wo = e(470) == typeof Symbol && e(446) == typeof Symbol[e(457)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(470) == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? n(446) : typeof t
		})(t)
	}

	function So(t, e) {
		var n = Co();
		return (So = function(t, e) {
			return n[t -= 442]
		})(t, e)
	}

	function ko(t, e) {
		for (var n = So, r = 0; r < e[n(483)]; r++) {
			var i = e[r];
			i.enumerable = i[n(482)] || !1, i[n(512)] = !0, n(496) in i && (i.writable = !0), Object[n(490)](t, i[n(465)], i)
		}
	}

	function Oo(t, e) {
		var n = So;
		return (Oo = Object[n(493)] ? Object.setPrototypeOf[n(464)]() : function(t, e) {
			return t[n(498)] = e, t
		})(t, e)
	}

	function Co() {
		var t = ["function", "646026kilJPV", "166fyFemg", "Còn lại: ", "862202WSdaWf", "constructor", "call", "height", "width", "setText", "anchor", "remove", "enumerable", "length", "visible", "Linear", "tween", "durationTimer", "sound", "background", "defineProperty", "formatTimeV2", "7QOVVYr", "setPrototypeOf", "4093pbXDfk", "game", "value", "open", "__proto__", "yoyo", "31446WMRdhV", "add", "create", "object", "setTo", "500", "state", "scale", "378692DBGNZG", "click", "amazingsale", "Derived constructors may only return object or undefined", "configurable", "1896860DUIuxh", "start", "inited", "682716eousJR", "symbol", "events", "56XhbamB", "sham", "this hasn't been initialised - super() hasn't been called", "ShopScreen", "time", "getDuration", "getPromotion", "button", "30aaNqDS", "iterator", "instance", "playButtonSound", "construct", "prototype", "Super expression must either be null or a function", "undefined", "bind", "key", "flashSaleDurationText", "close", "loop", "getPrototypeOf"];
		return (Co = function() {
			return t
		})()
	}

	function To(t, e) {
		var n = So;
		if (e && (wo(e) === n(503) || typeof e === n(470))) return e;
		if (void 0 !== e) throw new TypeError(n(511));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(So(450));
			return t
		}(t)
	}

	function Po(t) {
		var e = So;
		return (Po = Object.setPrototypeOf ? Object[e(469)].bind() : function(t) {
			var n = e;
			return t[n(498)] || Object[n(469)](t)
		})(t)
	}! function(t, e) {
		for (var n = So, r = t();;) try {
			if (218917 == -parseInt(n(494)) / 1 * (-parseInt(n(472)) / 2) + -parseInt(n(445)) / 3 + parseInt(n(508)) / 4 + parseInt(n(442)) / 5 + parseInt(n(471)) / 6 * (-parseInt(n(492)) / 7) + -parseInt(n(448)) / 8 * (parseInt(n(500)) / 9) + -parseInt(n(456)) / 10 * (parseInt(n(474)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Co);
	const xo = function(t) {
		var e = So;
		! function(t, e) {
			var n = So;
			if (typeof e !== n(470) && null !== e) throw new TypeError(n(462));
			t.prototype = Object[n(502)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(490)](t, n(461), {
				writable: !1
			}), e && Oo(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = So;
			if (typeof Reflect === t(463) || !Reflect[t(460)]) return !1;
			if (Reflect.construct[t(449)]) return !1;
			if (typeof Proxy === t(470)) return !0;
			try {
				return Boolean[t(461)].valueOf[t(476)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = So,
				n = Po(a);
			if (o) {
				var r = Po(this)[e(475)];
				t = Reflect[e(460)](n, arguments, r)
			} else t = n.apply(this, arguments);
			return To(this, t)
		});

		function c(t) {
			var e = So;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), s[e(476)](this, t)
		}
		return n = c, i = So, (r = [{
			key: "createView",
			value: function() {
				var t = So,
					e = this;
				this.addOverlay(.8), this[t(489)] = this[t(502)](0, 0, t(510), "bg"), this[t(489)].x = this[t(495)].width / 2 - this[t(489)][t(478)] / 2, this[t(489)].y = this[t(495)][t(477)] / 2 - this.background[t(477)] / 2 - 20;
				var n = new Lt(this[t(495)], 274, 396, t(510), t(455));
				n.x = this[t(489)][t(478)] / 2, n.y = this[t(489)][t(477)] - 90, n[t(480)][t(504)](.5), n[t(509)]((function() {
					var n = t;
					et[n(458)][n(444)] && (e.durationTimer && e.game[n(452)][n(447)].remove(e.durationTimer), e.game[n(506)][n(443)](n(451), !0, !1))
				})), this[t(489)].addChild(n), this[t(495)][t(501)][t(486)](n[t(507)]).to({
					x: .94,
					y: .94
				}, 1e3, t(485), !0, 0, -1)[t(499)](!0, 0);
				var r = this[t(502)](this.background.x + 730, this.background.y + 110, t(510), "close");
				r.inputEnabled = !0, r[t(447)].onInputDown[t(501)](this[t(467)], this);
				var i = ft[t(458)][t(454)]();
				i && i.getDuration() > 5e3 && (this[t(466)] = this[t(495)][t(501)].text(n.x, this[t(489)][t(477)] - 20, t(473) + u[t(491)](i.getDuration()), {
					font: APP_FONT,
					fontSize: 20,
					fill: "#fcf8de",
					fontWeight: t(505)
				}), this[t(466)][t(480)][t(504)](.5, 0), this[t(489)].addChild(this[t(466)]), this[t(487)] = this[t(495)][t(452)].events.loop(1e3, (function() {
					var n = t,
						r = i[n(453)]();
					r > 0 ? e[n(466)][n(479)](n(473) + u[n(491)](r)) : (e.game[n(452)][n(447)].remove(e[n(487)]), e[n(466)][n(484)] = !1)
				})))
			}
		}, {
			key: e(497),
			value: function() {
				var t = e,
					n = this;
				!this[t(484)] && (this[t(484)] = !0, this.durationTimer = this.game[t(452)][t(447)][t(468)](1e3, (function() {
					var e = t,
						r = ft[e(458)][e(454)]()[e(453)]();
					r > 0 ? n[e(466)].setText(e(473) + u[e(491)](r)) : (n.game.time[e(447)].remove(n[e(487)]), n[e(466)].visible = !1)
				})))
			}
		}, {
			key: e(467),
			value: function() {
				var t = e;
				this[t(484)] && (CyberInstance[t(488)][t(459)](), this[t(487)] && this[t(495)][t(452)][t(447)][t(481)](this.durationTimer), this.visible = !1)
			}
		}]) && ko(n.prototype, r), Object.defineProperty(n, i(461), {
			writable: !1
		}), c
	}(P);

	function _o(t) {
		var e = Eo;
		return (_o = e(513) == typeof Symbol && e(392) == typeof Symbol[e(399)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? n(392) : typeof t
		})(t)
	}

	function Ro() {
		var t = ["inputEnabled", "rightarrow", "productID", "getDeveloperPayload", "undefined", "addChild", "getYear", "configurable", "alpha", "remove", "x10", "function", "prototype", "xm599", "onPurchaseProduct", "valueOf", "symbol", "x20", "add", "xmas_1_99", "buttonText", "durationTimer", "264348BKsbSs", "iterator", "updateGift", "productId", "yoyo", "createBox", "destroy", "xmas_5_99", "make", "rightButton", "apply", "6899949veqpYS", "Cannot call a class as a function", "30 ngày", "time", "constructor", "formatCoinWithCommas", "createFirst", "xm199", "avatar10", "visible", "buy_button", "getFullYear", "close", "createSecond", "Text", "addOverlay", "instance", "call", "28M", "get", "object", "8nlCDEu", "openLoadingPopup", "first_percent", "key", "setTo", "verifyPayment", "coin", "events", "defineProperty", "second_percent", "secondBackground", "anchor", "create", "addOnce", "leftarrow", "avatar", "tween", "height", "16GBDiRd", "4251895yHHVqq", "construct", "3240664kNmPBV", "48vUfVOa", "updateAvatar", "onComplete", "1.99$", "game", "CLOSE", "value", "Linear", "image", "playButtonSound", "width", "start", "error", "hasOwnProperty", "10xJsQjB", "getPrototypeOf", "destroyNoelPack", "createView", "#4ea1ff", "setPrototypeOf", "fist", "9499301hEzofT", "noelpack", "errorMsg", "leftButton", "firstBackground", "purchases", "getOwnPropertyDescriptor", "click", "isScling", "Free", "createBuyButton", "__proto__", "sung", "12TYRvKN", "closeLoadingPopup", "open", "lang", "this hasn't been initialised - super() hasn't been called", "7 ngày", "bind", "has", "scale", "1383283RDUNal", "length", "1417521FcQHYN", "5.99$", "purchase", "onInputDown", "setText"];
		return (Ro = function() {
			return t
		})()
	}

	function jo(t, e) {
		for (var n = Eo, r = 0; r < e[n(496)]; r++) {
			var i = e[r];
			i.enumerable = i.enumerable || !1, i[n(509)] = !0, n(458) in i && (i.writable = !0), Object.defineProperty(t, i[n(433)], i)
		}
	}

	function Eo(t, e) {
		var n = Ro();
		return (Eo = function(t, e) {
			return n[t -= 389]
		})(t, e)
	}

	function Bo() {
		var t = Eo;
		return Bo = typeof Reflect !== t(506) && Reflect[t(428)] ? Reflect.get[t(492)]() : function(e, n, r) {
			var i = t,
				a = Ao(e, n);
			if (a) {
				var o = Object[i(479)](a, n);
				return o[i(428)] ? o.get[i(426)](arguments[i(496)] < 3 ? e : r) : o.value
			}
		}, Bo[t(408)](this, arguments)
	}

	function Ao(t, e) {
		for (var n = Eo; !Object.prototype[n(465)].call(t, e) && null !== (t = Go(t)););
		return t
	}

	function Fo(t, e) {
		var n = Eo;
		return (Fo = Object[n(471)] ? Object.setPrototypeOf.bind() : function(t, e) {
			return t[n(484)] = e, t
		})(t, e)
	}

	function Do(t, e) {
		var n = Eo;
		if (e && (_o(e) === n(429) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return No(t)
	}

	function No(t) {
		if (void 0 === t) throw new ReferenceError(Eo(490));
		return t
	}

	function Go(t) {
		var e = Eo;
		return (Go = Object[e(471)] ? Object[e(467)][e(492)]() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}! function(t, e) {
		for (var n = Eo, r = t();;) try {
			if (937157 == -parseInt(n(497)) / 1 + -parseInt(n(451)) / 2 + -parseInt(n(398)) / 3 * (parseInt(n(448)) / 4) + -parseInt(n(449)) / 5 * (-parseInt(n(486)) / 6) + -parseInt(n(473)) / 7 * (-parseInt(n(430)) / 8) + -parseInt(n(409)) / 9 * (-parseInt(n(466)) / 10) + parseInt(n(495)) / 11 * (parseInt(n(452)) / 12)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ro);
	const Lo = function(t) {
		var e = Eo;
		! function(t, e) {
			var n = Eo;
			if (typeof e !== n(513) && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(514)] = Object[n(442)](e && e[n(514)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(438)](t, "prototype", {
				writable: !1
			}), e && Fo(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Eo;
			if ("undefined" == typeof Reflect || !Reflect[t(450)]) return !1;
			if (Reflect[t(450)].sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(514)][t(391)][t(426)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Eo,
				n = Go(a);
			if (o) {
				var r = Go(this)[e(413)];
				t = Reflect[e(450)](n, arguments, r)
			} else t = n[e(408)](this, arguments);
			return Do(this, t)
		});

		function c(t) {
			var e, n = Eo;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Eo(410))
			}(this, c), e = s.call(this, t), ft[n(425)][n(390)][n(394)](e[n(390)], No(e)), e
		}
		return n = c, i = Eo, (r = [{
			key: e(404),
			value: function() {
				var t = e;
				Bo(Go(c[t(514)]), t(404), this).call(this), ft[t(425)][t(390)][t(511)](this[t(390)], this)
			}
		}, {
			key: e(390),
			value: function(t) {
				var n = e;
				if (this[n(487)](), t[n(464)]) new G(game, {
					text: t[n(475)],
					buttonText: CyberInstance.lang[n(457)],
					hideCloseButton: !0
				});
				else {
					var r = CyberInstance[n(489)].PAYMENT_SUCCESS.replace("%s", u[n(414)](t[n(436)]));
					t[n(504)] == n(395) ? (et[n(425)][n(400)](12, 10), et.instance[n(453)](10, 6048e5)) : t[n(504)] == n(405) && (et[n(425)][n(400)](12, 20), et[n(425)][n(453)](28, 2592e6)), new G(game, {
						text: r,
						buttonText: CyberInstance[n(489)][n(457)],
						hideCloseButton: !0
					}), this[n(456)].state.getCurrentState()[n(468)](t[n(504)])
				}
			}
		}, {
			key: e(469),
			value: function() {
				var t = e,
					n = this;
				if (this[t(424)](.8), noel_1_99 == this[t(508)]()) this[t(440)] = this[t(422)](!1);
				else {
					this.isScling = !1, this[t(477)] = this[t(415)](), this[t(440)] = this[t(422)](!0), this.secondBackground.x = this[t(456)][t(462)];
					var r = new Lt(this[t(456)], 0, 0, t(474), t(444));
					r.x = this[t(477)].x / 2 - r[t(462)] / 2, r.y = this[t(456)][t(447)] / 2 - r.height / 2, r.click((function() {
						var e = t;
						if (!n[e(481)]) {
							n[e(481)] = !0, n[e(456)][e(394)][e(446)](n[e(477)]).to({
								x: n[e(456)][e(462)] / 2 - n[e(477)].width / 2
							}, 300, e(459)).start();
							var r = n.game.add[e(446)](n[e(440)]).to({
								x: n[e(456)].width
							}, 300, e(459));
							r[e(463)](), r[e(454)][e(443)]((function() {
								var t = e;
								n[t(481)] = !1, n[t(407)][t(418)] = !0
							})), n[e(476)][e(418)] = !1
						}
					})), this[t(394)](r), this[t(476)] = r, this.leftButton.visible = !1;
					var i = new Lt(this.game, 0, 0, t(474), t(503));
					i.x = this[t(456)].width - r.x - r[t(462)], i.y = r.y, i.click((function() {
						var e = t;
						if (!n[e(481)]) {
							n[e(481)] = !0, n.game.add[e(446)](n[e(477)]).to({
								x: -n.firstBackground[e(462)]
							}, 300, "Linear").start();
							var r = n[e(456)][e(394)][e(446)](n[e(440)]).to({
								x: n[e(456)].width / 2 - n.secondBackground[e(462)] / 2
							}, 300, e(459));
							r.start(), r.onComplete[e(443)]((function() {
								var t = e;
								n[t(481)] = !1, n[t(476)][t(418)] = !0
							})), n[e(407)].visible = !1
						}
					})), this.add(i), this[t(407)] = i
				}
			}
		}, {
			key: "createBox",
			value: function(t, n) {
				var r = e,
					i = this[r(456)][r(406)][r(460)](228, 208, r(474), "box");
				if (t) {
					var a = this.game.make[r(460)](i[r(462)] / 2, 68, r(474), t);
					a[r(441)][r(434)](.5), i.addChild(a)
				}
				if (n) {
					var o = new(Phaser[r(423)])(this[r(456)], i[r(462)] / 2, i[r(447)] - 30, n, {
						font: APP_FONT,
						fill: "#e46f4b",
						fontWeight: 500,
						fontSize: 24
					});
					o.anchor[r(434)](.5), i.addChild(o)
				}
				return i
			}
		}, {
			key: e(415),
			value: function() {
				var t = e,
					n = this.create(0, 0, "noelpack", "bg");
				n.x = this[t(456)][t(462)] / 2 - n[t(462)] / 2, n.y = this[t(456)].height / 2 - n[t(447)] / 2;
				var r = this.game[t(406)].image(288, 48, t(474), t(472));
				r[t(441)][t(434)](.5), n.addChild(r);
				var i = this[t(403)](t(417), t(491));
				n[t(507)](i);
				var a = this.createBox("coin", t(427));
				a.x = i.x + i[t(462)] - 1, n[t(507)](a);
				var o = this.createBox(t(485), t(512));
				o.x = a.x + a[t(462)] - 1, n.addChild(o);
				var s = this[t(456)][t(406)].image(660, 36, t(474), "close");
				s[t(502)] = !0, s[t(437)][t(500)][t(394)](this[t(421)], this), n.addChild(s);
				var c = this[t(483)]("xmas_1_99", t(455), !1);
				c[t(401)] = t(395), n.addChild(c);
				var u = this[t(456)][t(406)].image(c.x + 20, 0, t(474), t(432));
				return u.y = c.y - 55, n.addChild(u), this[t(456)][t(394)][t(446)](c[t(494)]).to({
					x: .94,
					y: .94
				}, 1e3, t(459), !0, 0, -1).yoyo(!0, 0), n
			}
		}, {
			key: "createSecond",
			value: function(t) {
				var n = e,
					r = this.create(0, 0, n(474), "bg");
				r.x = this[n(456)][n(462)] / 2 - r[n(462)] / 2, r.y = this[n(456)][n(447)] / 2 - r.height / 2;
				var i = this[n(456)][n(406)][n(460)](288, 48, n(474), "second");
				i[n(441)].setTo(.5), r[n(507)](i);
				var a = this[n(403)](n(445), n(411));
				r[n(507)](a);
				var o = this[n(403)]("coin", "150M");
				o.x = a.x + a[n(462)] - 1, r.addChild(o);
				var s = this[n(403)](n(485), n(393));
				s.x = o.x + o[n(462)] - 1, r[n(507)](s);
				var c = this[n(456)][n(406)][n(460)](660, 36, "noelpack", n(421));
				c[n(502)] = !0, c[n(437)][n(500)][n(394)](this[n(421)], this), r.addChild(c);
				var u = this[n(483)](n(405), n(498), t);
				u[n(401)] = "xmas_5_99", r[n(507)](u);
				var h = this[n(456)][n(406)][n(460)](u.x + 20, 0, n(474), n(439));
				return h.y = u.y - 55, r[n(507)](h), t || this.game[n(394)][n(446)](u[n(494)]).to({
					x: .94,
					y: .94
				}, 1e3, n(459), !0, 0, -1)[n(402)](!0, 0), r
			}
		}, {
			key: e(483),
			value: function(t, n, r) {
				var i = e,
					a = this,
					o = new Lt(this[i(456)], 448, 450, "noelpack", i(419));
				o[i(441)].setTo(.5), r ? o[i(510)] = .8 : o[i(480)]((function(t) {
					var e = i;
					if (a[e(431)](), ft[e(425)][e(478)][e(493)](t.productId)) {
						var n = ft[e(425)][e(478)][e(428)](t.productId);
						ft.instance[e(435)](n)
					} else ft[e(425)][e(499)](t[e(401)], CyberInstance[e(505)]())
				}));
				var s = new Phaser.Text(this.game, 0, 0, n, {
					font: APP_FONT,
					fill: "#ffffff",
					fontWeight: 700,
					fontSize: 34,
					stroke: i(470),
					strokeThickness: 4
				});
				return "xmas_1_99" == t && ft[i(425)][i(416)] && s[i(501)](ft[i(425)].xm199), t == i(405) && ft.instance.xm599 && s.setText(ft.instance[i(389)]), ft[i(425)].purchases[i(493)](t) && s[i(501)](i(482)), s.anchor.setTo(.5), o[i(396)] = s, o.addChild(s), o
			}
		}, {
			key: e(488),
			value: function() {
				var t = e;
				!this[t(418)] && (this[t(481)] = !1, this[t(418)] = !0)
			}
		}, {
			key: e(421),
			value: function() {
				var t = e;
				this[t(418)] && (CyberInstance.sound[t(461)](), this[t(397)] && this[t(456)][t(412)][t(437)][t(511)](this.durationTimer), this[t(418)] = !1)
			}
		}, {
			key: e(508),
			value: function() {
				var t = e;
				return (new Date)[t(420)]()
			}
		}]) && jo(n[i(514)], r), Object[i(438)](n, "prototype", {
			writable: !1
		}), c
	}(P);

	function Mo(t) {
		var e = Vo;
		return (Mo = "function" == typeof Symbol && e(157) == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(124)] === Symbol && t !== Symbol.prototype ? n(157) : typeof t
		})(t)
	}

	function Wo(t, e) {
		for (var n = Vo, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(122)] = i[n(122)] || !1, i[n(164)] = !0, n(180) in i && (i[n(150)] = !0), Object.defineProperty(t, i[n(129)], i)
		}
	}

	function zo(t, e) {
		var n = Vo;
		return (zo = Object.setPrototypeOf ? Object[n(166)][n(151)]() : function(t, e) {
			return t[n(152)] = e, t
		})(t, e)
	}

	function Uo(t, e) {
		var n = Vo;
		if (e && (Mo(e) === n(163) || typeof e === n(121))) return e;
		if (void 0 !== e) throw new TypeError(n(161));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Vo(135));
			return t
		}(t)
	}

	function Vo(t, e) {
		var n = Xo();
		return (Vo = function(t, e) {
			return n[t -= 118]
		})(t, e)
	}

	function Ho(t) {
		var e = Vo;
		return (Ho = Object[e(166)] ? Object[e(174)].bind() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(174)](t)
		})(t)
	}

	function Xo() {
		var t = ["ShopScreen", "writable", "bind", "__proto__", "start", "setTo", "645972UAVsee", "game", "symbol", "getDuration", "button", "3075985KtsbDc", "Derived constructors may only return object or undefined", "width", "object", "configurable", "state", "setPrototypeOf", "setText", "getPromotion", "sham", "3xzaDeR", "inputEnabled", "#fcf8de", "visible", "getPrototypeOf", "addChild", "prototype", "height", "onInputDown", "noelsale", "value", "instance", "flashSaleDurationText", "createView", "Còn lại: ", "construct", "durationTimer", "9wySFpV", "apply", "tween", "function", "enumerable", "text", "constructor", "events", "scale", "sound", "inited", "key", "yoyo", "background", "1248328gpofut", "time", "remove", "this hasn't been initialised - super() hasn't been called", "close", "907736XMfzfW", "add", "formatTimeV2", "Linear", "Super expression must either be null or a function", "create", "49gHTmRH", "2290004feYxcr", "49188RfjurT", "call", "9074550ZQwdcj", "addOverlay"];
		return (Xo = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = Vo, r = t();;) try {
			if (349296 == parseInt(n(155)) / 1 + -parseInt(n(132)) / 2 * (-parseInt(n(170)) / 3) + -parseInt(n(144)) / 4 + parseInt(n(160)) / 5 + parseInt(n(145)) / 6 * (parseInt(n(143)) / 7) + -parseInt(n(137)) / 8 * (parseInt(n(118)) / 9) + -parseInt(n(147)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Xo);
	const qo = function(t) {
		var e = Vo;
		! function(t, e) {
			var n = Vo;
			if (typeof e !== n(121) && null !== e) throw new TypeError(n(141));
			t.prototype = Object[n(142)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, "prototype", {
				writable: !1
			}), e && zo(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Vo;
			if ("undefined" == typeof Reflect || !Reflect[t(185)]) return !1;
			if (Reflect.construct[t(169)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(176)].valueOf[t(146)](Reflect[t(185)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Vo,
				n = Ho(a);
			if (o) {
				var r = Ho(this).constructor;
				t = Reflect[e(185)](n, arguments, r)
			} else t = n[e(119)](this, arguments);
			return Uo(this, t)
		});

		function c(t) {
			var e = Vo;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), s[e(146)](this, t)
		}
		return n = c, i = Vo, (r = [{
			key: e(183),
			value: function() {
				var t = e,
					n = this;
				this[t(148)](.8), this[t(131)] = this.create(0, 0, t(179), "bg"), this[t(131)].x = this[t(156)][t(162)] / 2 - this[t(131)][t(162)] / 2, this[t(131)].y = this[t(156)][t(177)] / 2 - this[t(131)][t(177)] / 2 - 20;
				var r = new Lt(this[t(156)], 274, 396, t(179), t(159));
				r.x = this[t(131)].width / 2, r.y = this[t(131)][t(177)] - 90, r.anchor[t(154)](.5), r.click((function() {
					var e = t;
					et.instance[e(128)] && (n.durationTimer && n[e(156)].time[e(125)][e(134)](n[e(186)]), n.game[e(165)][e(153)](e(149), !0, !1))
				})), this[t(131)][t(175)](r), this[t(156)].add[t(120)](r[t(126)]).to({
					x: .94,
					y: .94
				}, 1e3, t(140), !0, 0, -1)[t(130)](!0, 0);
				var i = this[t(142)](this[t(131)].x + 788, this.background.y + 142, t(179), "close");
				i[t(171)] = !0, i[t(125)][t(178)][t(138)](this[t(136)], this);
				var a = ft[t(181)][t(168)]();
				a && a[t(158)]() > 5e3 && (this[t(182)] = this[t(156)][t(138)][t(123)](r.x, this[t(131)][t(177)] - 20, t(184) + u.formatTimeV2(a[t(158)]()), {
					font: APP_FONT,
					fontSize: 20,
					fill: t(172),
					fontWeight: "500"
				}), this.flashSaleDurationText.anchor[t(154)](.5, 0), this[t(131)][t(175)](this[t(182)]), this.durationTimer = this[t(156)].time[t(125)].loop(1e3, (function() {
					var e = t,
						r = a.getDuration();
					r > 0 ? n.flashSaleDurationText[e(167)](e(184) + u[e(139)](r)) : (n[e(156)][e(133)][e(125)][e(134)](n[e(186)]), n[e(182)].visible = !1)
				})))
			}
		}, {
			key: "open",
			value: function() {
				var t = e,
					n = this;
				!this.visible && (this[t(173)] = !0, this.durationTimer = this[t(156)][t(133)][t(125)].loop(1e3, (function() {
					var e = t,
						r = ft[e(181)].getPromotion()[e(158)]();
					r > 0 ? n.flashSaleDurationText[e(167)](e(184) + u[e(139)](r)) : (n.game[e(133)].events.remove(n.durationTimer), n.flashSaleDurationText[e(173)] = !1)
				})))
			}
		}, {
			key: e(136),
			value: function() {
				var t = e;
				this.visible && (CyberInstance[t(127)].playButtonSound(), this[t(186)] && this[t(156)][t(133)][t(125)][t(134)](this[t(186)]), this[t(173)] = !1)
			}
		}]) && Wo(n.prototype, r), Object.defineProperty(n, i(176), {
			writable: !1
		}), c
	}(P);
	var Ko = Qo;

	function Yo(t) {
		var e = Qo;
		return (Yo = e(133) == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(133) == typeof Symbol && t[n(160)] === Symbol && t !== Symbol.prototype ? n(119) : typeof t
		})(t)
	}

	function Jo(t, e) {
		for (var n = Qo, r = 0; r < e[n(176)]; r++) {
			var i = e[r];
			i[n(148)] = i[n(148)] || !1, i[n(158)] = !0, n(173) in i && (i[n(167)] = !0), Object.defineProperty(t, i[n(152)], i)
		}
	}

	function Qo(t, e) {
		var n = Zo();
		return (Qo = function(t, e) {
			return n[t -= 109]
		})(t, e)
	}

	function Zo() {
		var t = ["__proto__", "Rectangle", "construct", "text", "setText", "load", "updateAvatar", "undefined", "rank_item_bg", "setPrototypeOf", "symbol", "avatarSize", "Cannot call a class as a function", "revive", "prototype", "checkImageKey", "make", "call", "width", "Player", "17398730QgqWZW", "name", "this hasn't been initialised - super() hasn't been called", "valueOf", "function", "15647kVRGAp", "game", "rank_item_bg_", "add", "homeScreen", "getReward", "#ffffff", "1893010KfGuFx", "callAll", "475644VjgboF", "kill", "shortenLargeNumber", "_hhh", "object", "enumerable", "getPrototypeOf", "c48", "2497845YVjhRJ", "key", "sham", "68wQIbYx", "image", "Group", "6iHFhCw", "configurable", "Derived constructors may only return object or undefined", "constructor", "loadTexture", "destroy", "avatar", "bind", "create", "apply", "writable", "formatName", "bitmapData", "9pBjDgF", "anchor", "applyTexture", "value", "setTo", "2210547xdPLJe", "length", "956328BrsQzI", "no_avatar", "height", "tour"];
		return (Zo = function() {
			return t
		})()
	}

	function $o(t, e) {
		var n = Qo;
		return ($o = Object[n(118)] ? Object.setPrototypeOf[n(164)]() : function(t, e) {
			return t[n(109)] = e, t
		})(t, e)
	}

	function ts(t, e) {
		var n = Qo;
		if (e && (Yo(e) === n(147) || typeof e === n(133))) return e;
		if (void 0 !== e) throw new TypeError(n(159));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Qo(131));
			return t
		}(t)
	}

	function es(t) {
		var e = Qo;
		return (es = Object[e(118)] ? Object.getPrototypeOf[e(164)]() : function(t) {
			var n = e;
			return t[n(109)] || Object[n(149)](t)
		})(t)
	}! function(t, e) {
		for (var n = Qo, r = t();;) try {
			if (492163 == parseInt(n(134)) / 1 * (-parseInt(n(154)) / 2) + -parseInt(n(175)) / 3 + parseInt(n(143)) / 4 + parseInt(n(141)) / 5 * (parseInt(n(157)) / 6) + -parseInt(n(151)) / 7 + -parseInt(n(177)) / 8 + -parseInt(n(170)) / 9 * (-parseInt(n(129)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Zo);
	var ns = function(t) {
		var e = Qo;
		! function(t, e) {
			var n = Qo;
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object[n(165)](e && e[n(123)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, n(123), {
				writable: !1
			}), e && $o(t, e)
		}(s, t);
		var n, r, i, a, o = (i = s, a = function() {
			var t = Qo;
			if (typeof Reflect === t(116) || !Reflect[t(111)]) return !1;
			if (Reflect[t(111)][t(153)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean.prototype[t(132)][t(126)](Reflect[t(111)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Qo,
				n = es(i);
			if (a) {
				var r = es(this)[e(160)];
				t = Reflect[e(111)](n, arguments, r)
			} else t = n[e(166)](this, arguments);
			return ts(this, t)
		});

		function s(t, e, n) {
			var r, i = Qo;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Qo(121))
			})(this, s), (r = o[i(126)](this, t, 0, 0))[i(130)] = "a" + e.id;
			var a, c = r[i(165)](0, 0, i(180), e.r > 3 ? i(117) : i(136) + e.r);
			r[i(146)] = c.height, e.r > 3 && (a = r[i(135)].add[i(112)](60, r[i(179)] / 2 + 2, e.r, {
				font: APP_FONT,
				fontSize: 28,
				fill: "#d2e0fd",
				fontWeight: 500
			}), r[i(137)](a), a[i(113)](e.r), a[i(171)][i(174)](.5)), r[i(163)] = r.create(114, 0, i(138), i(178)), r[i(163)][i(127)] = r[i(120)], r[i(163)][i(179)] = r[i(120)], r[i(163)].y = c[i(179)] / 2 - r[i(163)][i(179)] / 2, r[i(135)].cache[i(124)](r[i(130)]) ? r[i(172)](r[i(130)]) : e.a && r[i(135)][i(114)][i(155)](r.name, e.a), e.n || (e.n = i(128));
			var u = r[i(135)][i(137)][i(112)](r[i(163)].x + r.avatarSize + 20, c.height / 2 + 2, e.n, {
				font: APP_FONT,
				fontSize: 22,
				fill: "#d2e0fd",
				fontWeight: 400
			});
			u[i(171)][i(174)](0, .5), r[i(137)](u), u.setText(CyberHelper[i(168)](e.n, 30));
			var h = r[i(135)][i(137)].text(0, r.height / 2 + 2, e.s, {
				font: APP_FONT,
				fontSize: 22,
				fill: i(140),
				fontWeight: 400
			});
			h.x = c.x + c[i(127)] - 240, h[i(171)][i(174)](.5, .5), r.add(h), h[i(113)](e.s);
			var f = r[i(165)](2, 0, "tour", "coin_icon");
			f.x = c.x + c[i(127)] - f[i(127)] - 100, f.y = c[i(179)] / 2 - f.height / 2;
			var l = CyberHelper[i(145)](yt[i(139)](e.r)),
				p = r[i(135)][i(137)][i(112)](f.x + f[i(127)] + 15, r[i(179)] / 2 + 2, l, {
					font: APP_FONT,
					fontSize: 22,
					fill: "#f5c78a",
					fontWeight: 400
				});
			return p[i(171)][i(174)](0, .5), r[i(137)](p), p[i(113)](l), r
		}
		return n = s, (r = [{
			key: e(115),
			value: function(t) {
				var n = e;
				this.avatar[n(161)](t), this[n(163)].width = this[n(120)], this[n(163)].height = this[n(120)]
			}
		}, {
			key: e(172),
			value: function(t) {
				var n = e;
				try {
					var r = new(Phaser[n(110)])(0, 0, this[n(120)], this[n(120)]),
						i = game[n(125)][n(155)](0, 0, "tour", n(150));
					i[n(127)] = this[n(120)], i[n(179)] = this[n(120)];
					var a = game[n(125)][n(169)]();
					a[n(114)](i), i[n(162)]();
					var o = this[n(135)][n(125)][n(169)](this[n(120)], this[n(120)]);
					o.alphaMask(t, a, r), this.avatar.loadTexture(o)
				} catch (e) {
					this[n(163)][n(161)](t)
				}
				this.avatar[n(127)] = this[n(120)], this[n(163)][n(179)] = this.avatarSize
			}
		}, {
			key: e(144),
			value: function() {
				this[e(142)]("kill")
			}
		}, {
			key: e(122),
			value: function() {
				var t = e;
				this[t(142)](t(122))
			}
		}, {
			key: "height",
			get: function() {
				return this._hhh
			}
		}, {
			key: "avatarSize",
			get: function() {
				return 48
			}
		}]) && Jo(n[Qo(123)], r), Object.defineProperty(n, "prototype", {
			writable: !1
		}), s
	}(Phaser[Ko(156)]);

	function rs() {
		var t = ["cache", "setText", "76PawQbs", "viewport", "Điểm", "listRanking", "#ffffff", "key", "valueOf", "construct", "onDestroy", "events", "start", "background", "group", "coin_icon", "currentPlayer", "coinIcon", "refreshRanking", "game", "make", "getDuration", "symbol", "onUpdateRanking", "getGuserid", "6667695vUercP", "my_bg", "#d2e0fd", "inputEnabled", "disableAutoDispatchAllowed", "ranktitle_vn", "addChild", "50ocwNgs", "apply", "width", "rankList", "listViewGroup", "log", "dispatchAllowed", "259230uxONzC", "1540208jaovsn", "durationTask", "this hasn't been initialised - super() hasn't been called", "bind", "tour", "initedY", "createHeaderTexts", "Cannot call a class as a function", "getByName", "isAssetReady", "openLoadingPopup", "onFileComplete", "addOnce", "createTransition", "topTxt", "visible", "WIN TOP PLACE FOR BIGGER PRIZES", "createCurrentRank", "catch", "close", "helpcontent", "onTournamentEvent", "object", "leaderTxt", "create", "currentScore", "Người dẫn đầu", "height", "function", "load", "prototype", "lang", "destroy", "langCode", "homeScreen", "bitmapData", "ranktitle_en", "Score", "getReward", "setPrototypeOf", "shareBtn", "updateDuration", "helpContent", "setTo", "oran_btn", "1743524JAWaJJ", "loadTexture", "defineProperty", "sendGetRankingRequest", "__proto__", "_createHText", "getDisplayName", "createScrollView", "getPrototypeOf", "67228CrovyU", "sendFindGameRequest", "undefined", "cmd", "Rectangle", "c48", "call", "score", "sound", "freebutton", "tournament", "Top players", "sham", "canPlay", "checkImageKey", "paused", "writable", "shortenLargeNumber", "updateCurrentPlayer", "avatar", "playBtn", "applyTexture", "#b7ff00", "grp", "#de9493", "CHIA SẺ", "11662NcaIOz", "iterator", "createView", "no_avatar", "image", "GIÀNH VỊ TRÍ HÀNG ĐẦU ĐỂ NHẬN GIẢI THƯỞNG LỚN HƠN", "avatarSize", "time", "sprite", "Derived constructors may only return object or undefined", "rewardTxt", "onHelpClick", "rank", "guserid", "text", "Super expression must either be null or a function", "onDestroyPopup", "#692700", "playFreeBtn", "addText", "add", "instance", "addColor", "currentReward", "onInputDown", "constructor", "click", "anchor", "457101QeyMME", "remove", "formatTimeV2", "length", "RESET_IN", "formatName", "showNotEnoughMoneyToPlay", "replace", "then", "scoreTxt", "loop"];
		return (rs = function() {
			return t
		})()
	}

	function is(t) {
		var e = as;
		return (is = "function" == typeof Symbol && e(259) == typeof Symbol[e(358)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(223)] === Symbol && t !== Symbol[n(307)] ? n(259) : typeof t
		})(t)
	}

	function as(t, e) {
		var n = rs();
		return (as = function(t, e) {
			return n[t -= 221]
		})(t, e)
	}

	function os(t, e) {
		for (var n = as, r = 0; r < e.length; r++) {
			var i = e[r];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i[n(347)] = !0), Object.defineProperty(t, i[n(244)], i)
		}
	}

	function ss(t, e) {
		var n = as;
		return (ss = Object[n(316)] ? Object[n(316)][n(280)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function cs(t, e) {
		var n = as;
		if (e && (is(e) === n(299) || typeof e === n(305))) return e;
		if (void 0 !== e) throw new TypeError(n(366));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(as(279));
			return t
		}(t)
	}

	function us(t) {
		var e = as;
		return (us = Object[e(316)] ? Object[e(330)][e(280)]() : function(t) {
			var n = e;
			return t[n(326)] || Object[n(330)](t)
		})(t)
	}! function(t, e) {
		for (var n = as, r = t();;) try {
			if (234943 == parseInt(n(239)) / 1 * (parseInt(n(357)) / 2) + -parseInt(n(226)) / 3 + parseInt(n(322)) / 4 + -parseInt(n(269)) / 5 * (-parseInt(n(276)) / 6) + parseInt(n(331)) / 7 + -parseInt(n(277)) / 8 + -parseInt(n(262)) / 9) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(rs);
	const hs = function(t) {
		var e = as;
		! function(t, e) {
			var n = as;
			if (typeof e !== n(305) && null !== e) throw new TypeError(n(372));
			t.prototype = Object.create(e && e[n(307)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(324)](t, n(307), {
				writable: !1
			}), e && ss(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = as;
			if (typeof Reflect === t(333) || !Reflect[t(246)]) return !1;
			if (Reflect[t(246)][t(343)]) return !1;
			if (typeof Proxy === t(305)) return !0;
			try {
				return Boolean[t(307)][t(245)][t(337)](Reflect[t(246)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = as,
				n = us(a);
			if (o) {
				var r = us(this)[e(223)];
				t = Reflect[e(246)](n, arguments, r)
			} else t = n[e(270)](this, arguments);
			return cs(this, t)
		});

		function c(t) {
			var e = as;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(as(284))
			}(this, c), s[e(337)](this, t)
		}
		return n = c, i = as, (r = [{
			key: e(286),
			value: function() {
				var t = e;
				return this[t(256)][t(237)][t(345)]("tour")
			}
		}, {
			key: e(359),
			value: function() {
				var t = e,
					n = this;
				this[t(282)] = !1, this[t(247)][t(377)](this[t(373)], this), this[t(256)][t(306)][t(288)][t(377)](this[t(288)], this), this.addOverlay(), this[t(250)] = this[t(301)](0, 0, "tour", "popupbg"), this[t(250)].x = this[t(256)].width / 2 - this[t(250)][t(271)] / 2, this[t(250)].y = this[t(256)][t(304)] / 2 - this[t(250)].height / 2;
				var r = this.game[t(257)][t(365)](this[t(250)].width / 2, 0, t(281), "vn" == CyberInstance[t(310)] ? t(267) : t(313));
				r[t(225)].setTo(.5, 0), this[t(250)][t(268)](r);
				var i = new Lt(this[t(256)], 0, 150, t(281), t(321));
				i[t(376)](CyberInstance[t(308)].PLAY_NOW, {
					font: APP_FONT,
					fill: t(374),
					fontWeight: 700,
					fontSize: 24
				}), i.y = this.background[t(304)] - 35 - i[t(304)], i[t(224)]((function() {
					var e = t;
					CyberInstance[e(346)] && (CyberInstance[e(346)] = !1), ne.instance[e(344)]() ? (n[e(287)]({
						disconnectTime: 15e3
					}), ne[e(378)][e(332)]()) : G.showNotEnoughMoneyToPlay()
				})), this.playBtn = i, this[t(250)][t(268)](i);
				var a = new Lt(this[t(256)], 0, i.y, t(281), "blue_btn");
				a.addText("vn" == CyberInstance[t(310)] ? t(356) : "SHARE", {
					font: APP_FONT,
					fill: t(243),
					fontWeight: 700,
					fontSize: 24
				}), a[t(266)] = !0, a[t(224)]((function() {
					var e = t;
					n.initedY && FBInstant[e(341)].shareAsync({
						score: yt[e(378)][e(338)],
						data: {
							guserid: CyberInstance[e(370)]
						}
					})[e(234)]((function() {
						a[e(275)] = !0
					}))[e(295)]((function(t) {
						var n = e;
						console[n(274)](t), a[n(275)] = !0
					}))
				})), this[t(250)][t(268)](a), i.x = this[t(250)].width / 2 - (i[t(271)] + a[t(271)] + 27) / 2, a.x = i.x + i[t(271)] + 25, this[t(317)] = a;
				var o = this[t(256)][t(257)][t(365)](0, 52, "tour", "close");
				o.x = this[t(250)].width - o[t(271)] - 30, o[t(265)] = !0, o[t(248)][t(222)][t(289)]((function() {
					var e = t;
					CyberInstance.sound.playButtonSound(), n[e(296)]()
				})), this[t(250)].addChild(o);
				var s = this[t(256)][t(257)][t(365)](0, 52, "tour", "help");
				s.x = o.x - o.width - 10, s[t(265)] = !0, s[t(248)][t(222)][t(377)](this.onHelpClick, this), this[t(250)][t(268)](s), this[t(283)](), this[t(329)](), this[t(294)](), this[t(318)](yt[t(378)][t(258)]()), this[t(319)] = this[t(301)](0, 0, t(281), t(297)), this[t(319)].visible = !1, this.helpContent.x = this[t(250)].x + 50, this[t(319)].y = this.background.y + 160;
				var c = new Lt(this.game, 0, 150, t(281), t(340));
				c.x = this[t(250)].width / 2 - c[t(271)] / 2, c.y = this[t(250)][t(304)] - 45 - c[t(304)], c.click((function() {
					var e = t;
					CyberInstance.paused && (CyberInstance.paused = !1), ne.instance[e(344)]() ? (n[e(287)]({
						disconnectTime: 15e3
					}), ne[e(378)][e(332)]()) : G[e(232)]()
				})), this[t(375)] = c, this[t(250)][t(268)](c), this[t(375)][t(292)] = !1, this[t(290)](), yt[t(378)][t(255)]();
				var u = yt[t(378)][t(272)];
				if (u[t(229)] > 0) {
					for (var h = 0; h < u[t(229)]; h++) this[t(242)][t(377)](new ns(this[t(256)], u[h], this[t(240)]));
					game.load[t(249)](), this[t(349)]()
				} else yt[t(378)].events[t(377)](this.onTournamentEvent, this), yt[t(378)][t(325)]()
			}
		}, {
			key: e(349),
			value: function() {
				var t = e;
				this[t(253)][t(292)] = !0, this.currentRank.setText(yt[t(378)][t(369)] > 0 ? yt[t(378)][t(369)] : "-"), this[t(302)][t(238)](yt[t(378)][t(338)]);
				var n = yt[t(315)](yt.instance.rank);
				n > 0 ? this.currentReward[t(238)](CyberHelper[t(348)](n)) : (this.currentReward[t(292)] = !1, this[t(254)][t(292)] = !1), this[t(282)] = !0, 1 == this[t(319)].visible && (this[t(253)].visible = !1)
			}
		}, {
			key: e(294),
			value: function() {
				var t = e,
					n = this[t(301)](12, 405, "tour", t(263));
				this[t(253)] = n, this[t(250)][t(268)](n);
				var r = this[t(256)][t(257)][t(371)](78, n.height / 2 + 3, "-", {
					font: APP_FONT,
					fontSize: 28,
					fill: t(264),
					fontWeight: 500
				});
				n.addChild(r), r[t(238)](yt[t(378)].rank > 0 ? yt[t(378)][t(369)] : "-"), r.anchor[t(320)](.5), this.currentRank = r;
				var i = "avatar" + ne[t(378)][t(261)]();
				this[t(350)] = this[t(301)](132, 0, t(311), t(360)), this[t(350)][t(271)] = this[t(363)], this[t(350)][t(304)] = this[t(363)], this[t(256)][t(237)].checkImageKey(i) && this[t(352)](i), this[t(350)].y = n.height / 2 - this.avatar[t(304)] / 2, n[t(268)](this[t(350)]);
				var a = this.game[t(257)][t(371)](this[t(350)].x + this.avatarSize + 20, n.height / 2 + 3, "", {
					font: APP_FONT,
					fontSize: 22,
					fill: t(264),
					fontWeight: 400
				});
				a.anchor[t(320)](0, .5), n[t(268)](a), a.setText(CyberHelper[t(231)](ne.instance[t(328)](), 30));
				var o = this[t(256)][t(377)].text(293, n[t(304)] / 2 + 3, "0", {
					font: APP_FONT,
					fontSize: 22,
					fill: t(243),
					fontWeight: 400
				});
				o.x = n.x + n[t(271)] - 255, o[t(225)][t(320)](.5, .5), n.addChild(o), o[t(238)](yt.instance.score), this[t(302)] = o;
				var s = yt.getReward(yt[t(378)][t(369)]),
					c = this[t(256)][t(257)][t(365)](2, 0, t(281), t(252));
				c.x = n.x + n.width - c[t(271)] - 115, c.y = n[t(304)] / 2 - c[t(304)] / 2, n.addChild(c), this[t(254)] = c;
				var u = CyberHelper[t(348)](s),
					h = this.game[t(377)].text(c.x + c[t(271)] + 15, n[t(304)] / 2 + 3, u, {
						font: APP_FONT,
						fontSize: 22,
						fill: "#f5c78a",
						fontWeight: 400
					});
				h[t(225)][t(320)](0, .5), n[t(268)](h), h[t(238)](u), this[t(221)] = h, n[t(292)] = !1
			}
		}, {
			key: e(368),
			value: function() {
				var t = e;
				CyberInstance[t(339)].playButtonSound(), 0 == this[t(319)][t(292)] ? (this[t(317)][t(292)] = !1, this[t(351)][t(292)] = !1, this.listViewGroup[t(292)] = !1, this[t(291)][t(292)] = !1, this[t(300)][t(292)] = !1, this[t(235)].visible = !1, this[t(367)][t(292)] = !1, this.helpContent[t(292)] = !0, this[t(375)][t(292)] = !0, this[t(282)] && (this[t(253)][t(292)] = !1)) : (this.shareBtn.visible = !0, this.playBtn[t(292)] = !0, this[t(273)][t(292)] = !0, this[t(291)][t(292)] = !0, this.leaderTxt[t(292)] = !0, this[t(235)].visible = !0, this.rewardTxt[t(292)] = !0, this[t(319)][t(292)] = !1, this[t(375)][t(292)] = !1, this.initedY && (this[t(253)][t(292)] = !0))
			}
		}, {
			key: e(298),
			value: function(t) {
				var n = e;
				if (t[n(334)] == n(260)) {
					var r = yt[n(378)][n(272)];
					if (r[n(229)] > 0) {
						for (var i = 0; i < r.length; i++) this[n(242)].add(new ns(this.game, r[i], this.viewport));
						game[n(306)][n(249)](), this[n(349)]()
					}
				}
			}
		}, {
			key: e(318),
			value: function(t) {
				var n = e;
				try {
					if (t >= 1e4) {
						var r = CyberInstance[n(308)].RESET_IN.replace("%s", u[n(228)](t)),
							i = this[n(256)][n(257)][n(371)](this[n(250)][n(271)] / 2, 60, r, {
								font: APP_FONT,
								fontSize: 19,
								fill: n(355),
								fontWeight: 400,
								wordWrapWidth: this[n(250)][n(271)]
							});
						"vn" == CyberInstance[n(310)] && i[n(379)](n(353), 18), i[n(225)][n(320)](.5, 0), this.background.addChild(i), i[n(238)](r), this[n(278)] = this.game[n(364)][n(248)][n(236)](1e3, (function() {
							var t = n,
								e = yt[t(378)].getDuration();
							e > 0 ? i.setText(CyberInstance[t(308)][t(230)][t(233)]("%s", u[t(228)](e))) : i[t(292)] = !1
						}))
					}
				} catch (t) {
					console.log(t)
				}
			}
		}, {
			key: e(283),
			value: function() {
				var t = e,
					n = "vn" == CyberInstance[t(310)] ? t(362) : t(293),
					r = this[t(256)].make[t(371)](this[t(250)][t(271)] / 2, 90, n, {
						font: APP_FONT,
						fontSize: 20,
						fill: "#f2aba9",
						fontWeight: 500
					});
				r[t(225)][t(320)](.5, 0), this[t(250)][t(268)](r), r[t(238)](n), this.topTxt = this[t(327)]("TOP", 70), this[t(300)] = this[t(327)]("vn" == CyberInstance.langCode ? t(303) : t(342), 230), this[t(235)] = this._createHText("vn" == CyberInstance[t(310)] ? t(241) : t(314), 626), this[t(367)] = this[t(327)]("vn" == CyberInstance[t(310)] ? "Thưởng" : "Rewards", 780)
			}
		}, {
			key: "createScrollView",
			value: function() {
				var t = e;
				this[t(240)] = {
					width: 855,
					height: 250
				}, this[t(273)] = this[t(256)][t(377)][t(251)](), this[t(273)].x = this[t(250)][t(271)] / 2 - this.viewport[t(271)] / 2 - 5, this[t(273)].y = 160, this.listRanking = new kr(this.game, this[t(273)], new(Phaser[t(335)])(0, 0, this.viewport[t(271)], this[t(240)][t(304)]), {
					direction: "y",
					padding: 2,
					searchForClicks: !0
				}), this[t(250)][t(268)](this[t(273)])
			}
		}, {
			key: "onFileComplete",
			value: function(t, n, r) {
				var i = e;
				if (r) {
					var a = this.listRanking[i(354)][i(285)](n);
					a && a[i(352)](n)
				}
			}
		}, {
			key: e(373),
			value: function() {
				var t = e;
				this[t(247)][t(227)](this[t(373)], this), this[t(256)][t(306)][t(288)].remove(this[t(288)], this), yt[t(378)][t(248)][t(227)](this.onTournamentEvent, this), this[t(278)] && this.game[t(364)][t(248)].remove(this[t(278)]);
				try {
					this[t(273)].destroy(), this.listRanking[t(309)]()
				} catch (e) {
					console[t(274)](e)
				}
			}
		}, {
			key: e(327),
			value: function(t, n) {
				var r = e,
					i = this[r(256)][r(257)][r(371)](n, 122, "", {
						font: APP_FONT,
						fontSize: 20,
						fill: r(355),
						fontWeight: 400
					});
				return this[r(250)][r(268)](i), i[r(238)](t), i
			}
		}, {
			key: e(352),
			value: function(t) {
				var n = e;
				try {
					var r = new Phaser.Rectangle(0, 0, this[n(363)], this[n(363)]),
						i = game.make[n(361)](0, 0, "tour", n(336));
					i[n(271)] = this[n(363)], i.height = this.avatarSize;
					var a = game.make.bitmapData();
					a.load(i), i.destroy();
					var o = this[n(256)][n(257)][n(312)](this[n(363)], this.avatarSize);
					o.alphaMask(t, a, r), this[n(350)][n(323)](o)
				} catch (e) {
					this[n(350)].loadTexture(t)
				}
				this[n(350)][n(271)] = this.avatarSize, this[n(350)][n(304)] = this[n(363)]
			}
		}, {
			key: e(363),
			get: function() {
				return 48
			}
		}]) && os(n[i(307)], r), Object.defineProperty(n, i(307), {
			writable: !1
		}), c
	}(P);

	function fs(t) {
		var e = ps;
		return (fs = e(348) == typeof Symbol && e(378) == typeof Symbol[e(343)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(385)] === Symbol && t !== Symbol[n(387)] ? n(378) : typeof t
		})(t)
	}

	function ls(t, e) {
		for (var n = ps, r = 0; r < e.length; r++) {
			var i = e[r];
			i.enumerable = i[n(381)] || !1, i[n(398)] = !0, n(335) in i && (i.writable = !0), Object[n(347)](t, i[n(334)], i)
		}
	}

	function ps(t, e) {
		var n = vs();
		return (ps = function(t, e) {
			return n[t -= 326]
		})(t, e)
	}

	function ys(t, e) {
		var n = ps;
		return (ys = Object.setPrototypeOf ? Object[n(365)][n(392)]() : function(t, e) {
			return t[n(399)] = e, t
		})(t, e)
	}

	function ds(t, e) {
		var n = ps;
		if (e && (fs(e) === n(356) || typeof e === n(348))) return e;
		if (void 0 !== e) throw new TypeError(n(393));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(ps(370));
			return t
		}(t)
	}

	function vs() {
		var t = ["width", "instance", "share", "3102777nLNvrw", "Bạn xếp hạng ", "center", "height", "setPrototypeOf", "make", "n----", "54mByxPr", "CHIA SẺ", "this hasn't been initialised - super() hasn't been called", "setText", "langCode", "sprite", "rank", "length", "addOverlay", "isAssetReady", "symbol", "sham", "coin", "enumerable", "2045772gQQXOT", "Cannot call a class as a function", "20430430rDEArt", "constructor", "addOnce", "prototype", "destroy", "events", "playButtonSound", "lang", "bind", "Derived constructors may only return object or undefined", "onInputDown", "drawShareTournamentResult", "create", "805832qFVHuH", "configurable", "__proto__", "inputEnabled", "getPrototypeOf", ".\nKeep playing to earn more rewards!", "prevTournamentResult", "background", "Text", "You ranked ", "checkImageKey", "blue_btn", "lineSpacing", "tour", "log", "guserid", "sound", "cache", "addText", "#ffffff", "formatCoinWithCommas", "56yHjims", "Super expression must either be null or a function", "key", "value", "call", "valueOf", "game", "85917fgRfCJ", "464019bkVedI", "#67fe59", "construct", "iterator", "getName", "setTo", "65iVKCAb", "defineProperty", "function", "147644CsBDYF", "apply", "createView", "close", "SHARE", "addChild", "resultpbg", "object", "anchor"];
		return (vs = function() {
			return t
		})()
	}

	function bs(t) {
		var e = ps;
		return (bs = Object[e(365)] ? Object[e(401)][e(392)]() : function(t) {
			var n = e;
			return t[n(399)] || Object[n(401)](t)
		})(t)
	}! function(t, e) {
		for (var n = ps, r = t();;) try {
			if (451925 == parseInt(n(340)) / 1 + -parseInt(n(368)) / 2 * (parseInt(n(339)) / 3) + -parseInt(n(349)) / 4 * (parseInt(n(346)) / 5) + -parseInt(n(382)) / 6 + parseInt(n(332)) / 7 * (-parseInt(n(397)) / 8) + parseInt(n(361)) / 9 + parseInt(n(384)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(vs);
	const gs = function(t) {
		var e = ps;
		! function(t, e) {
			var n = ps;
			if (typeof e !== n(348) && null !== e) throw new TypeError(n(333));
			t[n(387)] = Object[n(396)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, n(387), {
				writable: !1
			}), e && ys(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = ps;
			if ("undefined" == typeof Reflect || !Reflect[t(342)]) return !1;
			if (Reflect[t(342)][t(379)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(387)][t(337)].call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = ps,
				n = bs(a);
			if (o) {
				var r = bs(this).constructor;
				t = Reflect.construct(n, arguments, r)
			} else t = n[e(350)](this, arguments);
			return ds(this, t)
		});

		function c(t) {
			var e = ps;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(ps(383))
			}(this, c), s[e(336)](this, t)
		}
		return n = c, i = ps, (r = [{
			key: e(377),
			value: function() {
				var t = e;
				return this.game.cache.checkImageKey(t(410))
			}
		}, {
			key: e(351),
			value: function() {
				var t = e,
					n = this,
					r = yt[t(359)][t(403)];
				this[t(376)](.8), this[t(404)] = this[t(396)](0, 0, "tour", t(355)), this[t(404)].x = this[t(338)][t(358)] / 2 - this[t(404)][t(358)] / 2, this.background.y = this[t(338)].height / 2 - this.background.height / 2;
				var i = this.game[t(366)][t(373)](0, 52, t(410), t(352));
				i.x = this.background[t(358)], i[t(400)] = !0, i[t(389)][t(394)][t(386)]((function() {
					var e = t;
					CyberInstance[e(327)][e(390)](), n[e(352)]()
				})), this[t(404)].addChild(i);
				var a = this.game[t(366)][t(373)](this.background[t(358)] / 2 + 10, 345, t(410), "result_p_title_" + CyberInstance.langCode);
				"en" == CyberInstance[t(372)] && (a.y = 350), a[t(357)][t(345)](.5), this[t(404)][t(354)](a);
				var o = new Lt(this[t(338)], 0, 0, t(410), t(408));
				o.x = this[t(404)][t(358)] / 2 - o[t(358)] / 2, o.y = this[t(404)][t(364)] - o[t(364)], o[t(329)]("vn" == CyberInstance.langCode ? t(369) : t(353), {
					font: APP_FONT,
					fill: t(330),
					fontWeight: 700,
					fontSize: 24
				}), o.click(this[t(360)], this), this[t(404)][t(354)](o);
				var s = r[t(374)] + "",
					c = 80;
				s[t(375)] >= 5 ? c = 50 : 4 == s.length && (c = 60);
				var h = new(Phaser[t(405)])(this[t(338)], this.background[t(358)] / 2 + 7, 244, s, {
					font: APP_FONT,
					fill: t(330),
					fontWeight: 900,
					fontSize: c
				});
				h[t(357)][t(345)](.5), this[t(404)][t(354)](h), h[t(371)](s);
				var f = t(362) + r[t(374)] + ".\nTiếp tục cố gắng và những phần thưởng tuyệt vời nhé!";
				"en" == CyberInstance[t(372)] && (f = t(406) + r[t(374)] + t(402));
				var l = new(Phaser[t(405)])(this[t(338)], this[t(404)].width / 2 + 7, 452, f, {
					font: APP_FONT,
					fill: t(341),
					fontWeight: 500,
					fontSize: 20,
					align: t(363)
				});
				l[t(409)] = -5, l[t(357)][t(345)](.5), this[t(404)][t(354)](l), l.setText(f);
				var p = "+ " + u[t(331)](r[t(380)]),
					y = new(Phaser[t(405)])(this[t(338)], this[t(404)][t(358)] / 2 + 7, 518, p, {
						font: APP_FONT,
						fill: "#f9d744",
						fontWeight: 900,
						fontSize: 40
					});
				y.anchor.setTo(.5), this[t(404)][t(354)](y), y[t(371)](p)
			}
		}, {
			key: e(360),
			value: function() {
				var t = e;
				if (this[t(338)][t(328)][t(407)]("share_bg")) {
					var n = yt.instance[t(403)],
						r = new zr(game),
						i = r[t(395)](n.rank, n[t(380)]);
					r[t(388)](), FBInstant.shareAsync({
						image: i,
						text: '"' + FBInstant.player[t(344)]() + '" ' + CyberInstance[t(391)].INVITED_TO_PLAY,
						data: {
							guserid: CyberInstance[t(326)]
						},
						switchContext: !1
					}).then((function() {
						var e = t;
						console[e(411)](e(367))
					})).catch((function(e) {
						console[t(411)](e)
					}))
				}
			}
		}]) && ls(n[i(387)], r), Object[i(347)](n, "prototype", {
			writable: !1
		}), c
	}(P);

	function ms(t) {
		var e = Ps;
		return (ms = e(376) == typeof Symbol && "symbol" == typeof Symbol[e(395)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(376) == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? n(410) : typeof t
		})(t)
	}

	function Is(t, e) {
		for (var n = Ps, r = 0; r < e[n(240)]; r++) {
			var i = e[r];
			i[n(390)] = i[n(390)] || !1, i.configurable = !0, n(393) in i && (i[n(303)] = !0), Object[n(320)](t, i[n(231)], i)
		}
	}

	function ws() {
		var t = ["Continue", "Linear", "getPromotion", "onPlayWithFriend", "#f5edbb", "prevTournamentResult", "text", "sendFindGameRequest", "/atlas/homeScreen/noelsale.json", "noelIcon", "anchor", "profileView", "getMonth", "writable", "onInit", "/atlas/homeScreen/flashsale.json", "init", "4053678sOBkZX", "Super expression must either be null or a function", "create", "noeltxt", "onTournamentEvent", "background", "open", "getFullYear", "isHomeScreenStarted", "icon_flashsale", "load", "switchGameAsync", "container", "defineProperty", "Derived constructors may only return object or undefined", "tween", "#ffffff", "bottomMenuView", "setPrototypeOf", "canShowContinueAsync", "formatTimeV2", "visible", "getPrototypeOf", "paused", "tournamentId", "openLoadingPopup", "flashSaleDurationText", "enablePageTournament", "getDuration", "tournament", "sendJoinRequest", "/atlas/homeScreen/dailybonus.png", "screenReady", "openRewardVideoPopup", "setTo", "getOrders", "isP50", "onPlayNowClick", "709DaDkRq", "enableFlashSale", "showContainer", "constructor", "set", "186555Bznwih", "#1c5600", "noelDurationText", "inited", "shutdown", "/atlas/homeScreen/homeScreen.json", "onScreenReady", "code", "log", "valueOf", "/atlas/homeScreen/amazingsale.png", "playfriendicon", "isP100", "checkImageKey", "noel_icon", "rightMenuView", "1046bvrLyc", "getDate", "242870101514932", "20712923IaFhJL", "1613655byrsyt", "hideContainer", "iapView", "collected", "Tiếp Tục", "__proto__", "function", "destroy", "canShowNoelPack", "width", "playnowicon", "homeScreen", "flashsale", "sendCollectRewardRequest", "then", "openNoelPackPopup", "canShowFlashSale", "78484klJAFF", "showNotEnoughMoneyToPlay", "cache", "enumerable", "noelsale", "Signal", "value", "tournament_en", "iterator", "/atlas/homeScreen/flashsale.png", "tournamentIcon", "construct", "object", "events", "amazingSale", "20Knwhsf", "prototype", "has", "sprite", "56WoihcX", "PLAY_WITH_FRIEND", "controller", "getTime", "symbol", "playFriendButton", "make", "noelPopup", "this hasn't been initialised - super() hasn't been called", "instance", "group", "atlasJSONHash", "click", "createGamePopup", "homeScreenBG1", "500", "destroyNoelPack", "key", "pokerLogo", "add", "time", "anchorButton", "topPackY", "height", "160FnzHRX", "onCollect", "length", "noelSale", "image", "/atlas/homeScreen/dailybonus.json", "dispatchAllowed", "get", "canPlay", "SAME_CONTEXT", "flashSale", "inputEnabled", "scale", "call", "bind", "game", "cmd", "handleOutOfMoney", "openPromoPopup", "getPlatform", "setText", "createPlayButtons", "addText", "amazingsale", "catch", "undefined", "IOS", "onButtonClick", "langCode", "sham", "onInputDown", "promoPopupMap", "friendPopup", "6421950JUVdlD", "lang", "loop", "closeLoadingPopup", "lobbyScreen", "yoyo", "playNowButton", "cricle", "/atlas/homeScreen/homeScreen.png", "dispatch", "dailybonus", "showPokerLink", "handleScreenReady", "noelCricle", "icon_tour", "disableAutoDispatchAllowed", "flashsale_text", "/atlas/homeScreen/amazingsale.json", "apply"];
		return (ws = function() {
			return t
		})()
	}

	function Ss() {
		var t = Ps;
		return Ss = typeof Reflect !== t(263) && Reflect.get ? Reflect.get[t(252)]() : function(e, n, r) {
			var i = t,
				a = ks(e, n);
			if (a) {
				var o = Object.getOwnPropertyDescriptor(a, n);
				return o[i(245)] ? o.get[i(251)](arguments[i(240)] < 3 ? e : r) : o[i(393)]
			}
		}, Ss[t(289)](this, arguments)
	}

	function ks(t, e) {
		for (var n = Ps; !Object.prototype.hasOwnProperty[n(251)](t, e) && null !== (t = Ts(t)););
		return t
	}

	function Os(t, e) {
		var n = Ps;
		return (Os = Object.setPrototypeOf ? Object[n(325)][n(252)]() : function(t, e) {
			return t[n(375)] = e, t
		})(t, e)
	}

	function Cs(t, e) {
		var n = Ps;
		if (e && (ms(e) === n(399) || typeof e === n(376))) return e;
		if (void 0 !== e) throw new TypeError(n(321));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Ps(414));
			return t
		}(t)
	}

	function Ts(t) {
		var e = Ps;
		return (Ts = Object[e(325)] ? Object[e(329)][e(252)]() : function(t) {
			return t[e(375)] || Object.getPrototypeOf(t)
		})(t)
	}

	function Ps(t, e) {
		var n = ws();
		return (Ps = function(t, e) {
			return n[t -= 224]
		})(t, e)
	}! function(t, e) {
		for (var n = Ps, r = t();;) try {
			if (588455 == -parseInt(n(345)) / 1 * (parseInt(n(366)) / 2) + parseInt(n(350)) / 3 * (-parseInt(n(406)) / 4) + -parseInt(n(370)) / 5 + -parseInt(n(307)) / 6 + -parseInt(n(387)) / 7 * (parseInt(n(238)) / 8) + -parseInt(n(271)) / 9 + -parseInt(n(402)) / 10 * (-parseInt(n(369)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(ws);
	const xs = function(t) {
		var e = Ps;
		! function(t, e) {
			var n = Ps;
			if ("function" != typeof e && null !== e) throw new TypeError(n(308));
			t.prototype = Object[n(309)](e && e[n(403)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(320)](t, n(403), {
				writable: !1
			}), e && Os(t, e)
		}(h, t);
		var n, r, i, o, s, c = (o = h, s = function() {
			var t = Ps;
			if ("undefined" == typeof Reflect || !Reflect[t(398)]) return !1;
			if (Reflect[t(398)][t(267)]) return !1;
			if (typeof Proxy === t(376)) return !0;
			try {
				return Boolean[t(403)][t(359)][t(251)](Reflect[t(398)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Ps,
				n = Ts(o);
			if (s) {
				var r = Ts(this)[e(348)];
				t = Reflect.construct(n, arguments, r)
			} else t = n[e(289)](this, arguments);
			return Cs(this, t)
		});

		function h() {
			var t = Ps;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, h), c[t(251)](this)
		}
		return n = h, i = Ps, (r = [{
			key: "init",
			value: function() {
				var t = Ps;
				Ss(Ts(h[t(403)]), t(306), this).call(this), CyberInstance[t(315)] || (CyberInstance.isHomeScreenStarted = !0), this[t(356)] || (this[t(356)] = new(Phaser[t(392)])), !this.controller && (this[t(408)] = new Ee(this), this[t(356)][t(233)](this[t(408)][t(283)], this.controller)), CyberGlobalData[t(275)] = "HomeScreen", this[t(312)] = this[t(233)][t(242)](0, 0, t(228)), this[t(312)].width = this.game.width, this[t(312)][t(237)] = this[t(253)][t(237)], this[t(319)] = this[t(233)][t(224)](), et[t(415)][t(342)](), this.promoPopupMap = new Map
			}
		}, {
			key: "preload",
			value: function() {
				var t = Ps,
					e = !1;
				if ((!this.game.cache.checkImageKey("homeScreen") || !this[t(253)][t(389)][t(363)](t(281))) && (this[t(317)].atlasJSONHash(t(381), assetUrl + t(279), assetUrl + t(355)), this[t(317)][t(225)](t(281), assetUrl + t(338), assetUrl + t(243)), e = !0), FBInstant[t(257)]() != t(264)) {
					var n = ft[t(415)][t(292)]();
					n && (n[t(362)]() ? n.isNoel() ? !this[t(253)][t(389)][t(363)](t(391)) && (this[t(317)].atlasJSONHash("noelsale", assetUrl + "/atlas/homeScreen/noelsale.png", assetUrl + t(298)), e = !0) : !this[t(253)][t(389)][t(363)](t(382)) && (this[t(317)].atlasJSONHash(t(382), assetUrl + t(396), assetUrl + t(305)), e = !0) : n[t(343)]() && !this[t(253)][t(389)][t(363)](t(261)) && (this.load[t(225)](t(261), assetUrl + t(360), assetUrl + t(288)), e = !0))
				}
				e && this[t(332)]()
			}
		}, {
			key: e(309),
			value: function() {
				var t = e;
				if (this[t(274)](), yt[t(415)].events[t(233)](this[t(311)], this), this[t(301)] = new De(this), this[t(372)] = new He(this), this.container[t(233)](this[t(372)]), this.rightMenuView = new di(this), this[t(324)] = new oa(this), this.createPlayButtons(), this[t(255)](), this[t(253)][t(234)][t(400)][t(233)](100, (function() {
						a.preload()
					})), ft[t(415)][t(353)]) {
					this.topPackY = 180, this.canShowNoelPack() && this.enableNoelPack();
					var n = ft[t(415)][t(292)]();
					n && n[t(335)]() > 3e4 && this[t(346)]()
				}
				FBInstant[t(257)]() != t(264) && this[t(282)](), this[t(339)] = !0, this[t(356)][t(280)](), (yt[t(415)][t(331)] || yt.instance[t(295)]) && this.enablePageTournament()
			}
		}, {
			key: e(311),
			value: function(t) {
				var n = e;
				t[n(254)] == n(304) ? this[n(334)]() : t[n(254)] == n(239) && (this[n(274)](), yt[n(415)][n(295)] && new gs(this[n(253)]))
			}
		}, {
			key: e(334),
			value: function() {
				var t = e,
					n = this,
					r = yt[t(415)].prevTournamentResult;
				if (r && 0 == r[t(373)] && (yt[t(415)][t(383)](), this[t(332)]({
						closeTimer: 7e3
					})), !this[t(397)] && yt[t(415)][t(331)] && !(yt[t(415)][t(335)]() < 1e4)) {
					var i = this[t(253)][t(412)][t(405)](0, 0, t(281), "continuebtn");
					i[t(300)][t(341)](.5), this[t(319)][t(233)](i);
					var a = this.game.add[t(296)](0, 3, "vn" == CyberInstance[t(266)] ? t(374) : "Continue", {
						font: APP_FONT,
						fontSize: 22,
						fill: t(351),
						fontWeight: 700
					});
					a[t(300)][t(341)](.5), i.addChild(a), a[t(258)]("vn" == CyberInstance[t(266)] ? t(374) : t(290));
					var o = new Lt(this.game, this.game[t(379)] / 2 - 5, 180, t(281), t(285));
					o.y = this[t(277)].y - this[t(277)][t(237)] + o.height / 2 - 30, o[t(286)] = !0, o[t(300)][t(341)](.5), o[t(226)]((function() {
						var e = t,
							r = yt.instance[e(331)];
						FBInstant[e(336)].joinAsync(r)[e(384)]((function() {
							var t = e;
							yt[t(415)].sendJoinRequest(r), new hs(n[t(253)]), setTimeout((function() {
								var e = t;
								n.tournamentIcon[e(244)] = !0, i[e(328)] = !1
							}), 1e3)
						})).catch((function(t) {
							var a = e;
							t && t[a(357)] == a(247) && (yt[a(415)][a(337)](r), new hs(n.game)), setTimeout((function() {
								var t = a;
								n[t(397)][t(244)] = !0, i[t(328)] = !1
							}), 1e3)
						}))
					})), this[t(319)][t(233)](o), i.x = o.x + i[t(379)], i.y = o.y + 10, i[t(249)] = !0, i[t(328)] = !1, i[t(400)][t(268)][t(233)]((function() {
						var e = t;
						n[e(397)][e(265)]()
					}));
					var s = this.game[t(412)][t(405)](o.x - 56, o.y + 36, t(281), "vn" == CyberInstance.langCode ? "tournament_vn" : t(394));
					s[t(300)][t(341)](.5), this[t(319)][t(233)](s);
					var c = this.game[t(233)][t(296)](o.x - o[t(379)] / 2 + 152, o.y - o.height / 2 + 56, u[t(327)](yt[t(415)].getDuration()), {
						font: APP_FONT,
						fontSize: 20,
						fill: t(323),
						fontWeight: 500
					});
					c[t(300)][t(341)](.5), this[t(319)][t(233)](c), c.setText(u[t(327)](yt[t(415)][t(335)]())), this[t(253)][t(234)][t(400)].loop(1e3, (function() {
						var e = t,
							n = yt[e(415)][e(335)]();
						n > 0 ? c[e(258)](u[e(327)](n)) : (o[e(328)] = !1, c[e(328)] = !1, s[e(328)] = !1)
					})), this[t(397)] = o, yt[t(415)].joined || yt[t(415)][t(326)]().then((function(e) {
						console[t(358)](e), e && (i.visible = !0)
					}))
				}
			}
		}, {
			key: e(282),
			value: function() {
				var t = e;
				if (this[t(253)][t(389)][t(363)](t(232))) {
					var n = new Lt(this[t(253)], 0, 150, t(232));
					n.x = this[t(253)].width - n[t(379)] + 20, n[t(300)][t(341)](.5), n[t(226)]((function() {
						var e = t;
						FBInstant[e(318)](e(368))[e(262)]((function(t) {
							console[e(358)](t)
						}))
					})), this[t(319)][t(233)](n), this[t(253)][t(233)][t(322)](n[t(250)]).to({
						x: .9,
						y: .9
					}, 1e3, t(291), !0, 0, -1)[t(276)](!0, 250)
				}
			}
		}, {
			key: e(378),
			value: function() {
				var t = e,
					n = new Date;
				if (noel_1_99 == n[t(314)]() && noel_5_99 == n[t(314)]()) return !1;
				var r = n[t(367)]();
				return 11 == n[t(302)]() && r >= 20 && r < 26
			}
		}, {
			key: "enableNoelPack",
			value: function() {
				var t = e,
					n = this,
					r = this[t(253)].make[t(405)](64, this[t(236)], t(281), t(278));
				r.anchor.setTo(.5), this[t(319)].add(r);
				var i = new Lt(this[t(253)], 64, this[t(236)], "dailybonus", t(364));
				i[t(300)].setTo(.5), i[t(226)]((function() {
					n[t(385)]()
				})), this.container[t(233)](i);
				var a = this[t(253)][t(412)].sprite(64, this.topPackY + 40, "dailybonus", t(310));
				a[t(300)][t(341)](.5), this[t(319)][t(233)](a), this[t(352)] = this.game[t(233)][t(296)](64, this.topPackY + 50, u[t(327)](this[t(335)]()), {
					font: APP_FONT,
					fontSize: 16,
					fill: t(294),
					fontWeight: "500"
				}), this.noelDurationText.anchor[t(341)](.5, 0), this.container[t(233)](this.noelDurationText), this.game[t(234)][t(400)][t(273)](1e3, (function() {
					var e = t,
						o = n[e(335)]();
					o > 0 ? n.noelDurationText[e(258)](u[e(327)](o)) : (i[e(328)] = !1, a[e(328)] = !1, r[e(328)] = !1, n[e(352)][e(328)] = !1)
				})), this[t(352)][t(284)] = r, this.noelDurationText[t(299)] = i, this[t(352)].noelTxt = a, setTimeout((function() {
					var e = t;
					n[e(253)].add[e(322)](i.scale).to({
						x: .9,
						y: .9
					}, 1e3, e(291), !0, 0, -1).yoyo(!0, 250)
				}), 300), this.topPackY += 130, CyberGlobalData[t(386)] && !ft[t(415)][t(292)]() && (this.openNoelPackPopup(), CyberGlobalData[t(386)] = !1)
			}
		}, {
			key: e(230),
			value: function() {
				var t = e;
				this.noelPopup && (this[t(413)].destroy(), this[t(413)] = null)
			}
		}, {
			key: "openNoelPackPopup",
			value: function() {
				var t = e;
				CyberInstance.paused && (CyberInstance[t(330)] = !1), this.canShowNoelPack() && (this.noelPopup ? this[t(413)].open() : this.noelPopup = new Lo(this[t(253)]))
			}
		}, {
			key: e(335),
			value: function() {
				var t = e,
					n = new Date,
					r = n[t(314)](),
					i = n.getMonth();
				return new Date(r, i, 25, 23, 59, 59).getTime() - n[t(409)]()
			}
		}, {
			key: e(346),
			value: function() {
				var t = e,
					n = this,
					r = new Lt(this[t(253)], 64, this.topPackY, "dailybonus", t(316));
				r[t(300)][t(341)](.5), r[t(226)]((function() {
					n[t(256)]()
				}));
				var i = this[t(253)][t(412)][t(405)](26, this[t(236)] + 13, t(281), t(287));
				this[t(319)][t(233)](r), this.container[t(233)](i);
				var a = ft[t(415)][t(292)]();
				this.flashSaleDurationText = this[t(253)][t(233)][t(296)](i.x + i[t(379)] / 2, this[t(236)] + 35, u[t(327)](a.getDuration()), {
					font: APP_FONT,
					fontSize: 16,
					fill: t(294),
					fontWeight: t(229)
				}), this[t(333)].anchor[t(341)](.5, 0), this[t(319)][t(233)](this[t(333)]), this[t(253)][t(234)][t(400)][t(273)](1e3, (function() {
					var e = t,
						a = ft[e(415)][e(292)]()[e(335)]();
					a > 0 ? n[e(333)][e(258)](u[e(327)](a)) : (r.visible = !1, i[e(328)] = !1, n[e(333)][e(328)] = !1)
				})), this[t(253)].add[t(322)](r[t(250)]).to({
					x: .9,
					y: .9
				}, 1e3, "Linear", !0, 0, -1)[t(276)](!0, 250), CyberGlobalData[t(386)] && (this[t(256)](), CyberGlobalData.canShowFlashSale = !1)
			}
		}, {
			key: "openPromoPopup",
			value: function() {
				var t = e,
					n = ft.instance[t(292)]();
				n && n[t(362)]() ? n.isNoel() ? this[t(269)][t(404)](t(241)) ? this[t(269)].get(t(241)).open() : this.promoPopupMap.set(t(241), new qo(this[t(253)])) : this[t(269)].has(t(248)) ? this.promoPopupMap[t(245)](t(248))[t(313)]() : this[t(269)][t(349)](t(248), new Io(this.game)) : n && n[t(343)]() && (this[t(269)].has(t(401)) ? this.promoPopupMap[t(245)](t(401))[t(313)]() : this[t(269)][t(349)]("amazingSale", new xo(this[t(253)])))
			}
		}, {
			key: "onPlayNowClick",
			value: function() {
				var t = e;
				CyberInstance.paused && (CyberInstance[t(330)] = !1), ne[t(415)][t(246)]() ? (this[t(332)]({
					disconnectTime: 15e3
				}), ne[t(415)][t(297)]()) : G[t(388)]()
			}
		}, {
			key: e(293),
			value: function() {
				var t = e;
				CyberInstance[t(330)] && (CyberInstance.paused = !1), this[t(227)] ? this.createGamePopup[t(313)]() : this[t(227)] = new fo(this[t(253)], {
					friendMode: !0
				})
			}
		}, {
			key: "openIAP",
			value: function() {
				this[e(340)]()
			}
		}, {
			key: e(340),
			value: function() {
				var t = e;
				this[t(339)] && this[t(324)][t(340)]()
			}
		}, {
			key: e(371),
			value: function() {
				var t = e;
				this[t(319)][t(328)] = !1
			}
		}, {
			key: e(347),
			value: function() {
				var t = e;
				this[t(319)][t(328)] = !0
			}
		}, {
			key: e(274),
			value: function() {
				var t = e;
				Ss(Ts(h[t(403)]), t(274), this)[t(251)](this), this.rightMenuView && this[t(365)][t(270)] && this[t(365)][t(270)][t(274)]()
			}
		}, {
			key: e(259),
			value: function() {
				var t = e;
				this[t(277)] = new ga(this[t(253)], 0, 0), this[t(277)][t(260)](CyberInstance[t(272)].PLAY_NOW), this[t(277)].addIcon(t(380)), this.container[t(233)](this[t(277)]), this[t(411)] = new ga(this[t(253)], 0, 0), this[t(411)].addText(CyberInstance[t(272)][t(407)]), this.playFriendButton.addIcon(t(361)), this[t(319)][t(233)](this.playFriendButton), this[t(277)].y = this[t(253)][t(237)] / 2 - this.playNowButton[t(237)] / 2, this[t(411)].y = this[t(277)].y, this[t(277)].x = this[t(253)].width / 2 - (2 * this[t(277)][t(379)] + 50) / 2, this[t(411)].x = this.playNowButton.x + this[t(277)][t(379)] + 50, this.playNowButton[t(235)](), this.playFriendButton[t(235)](), this[t(277)].click(this[t(344)], this), this[t(411)][t(226)](this.onPlayWithFriend, this)
			}
		}, {
			key: e(354),
			value: function() {
				var t = e;
				Ss(Ts(h[t(403)]), "shutdown", this)[t(251)](this), this[t(301)][t(377)](), this[t(365)][t(377)](), this.createGamePopup = null, this[t(372)] = null, this[t(301)] = null, this[t(365)] = null, this[t(324)] = null, this[t(277)] = null, this[t(411)], this[t(319)] = null, this[t(312)] = null, this[t(413)] = null, this[t(397)] = null
			}
		}]) && Is(n[i(403)], r), Object.defineProperty(n, i(403), {
			writable: !1
		}), h
	}(le);

	function _s(t) {
		var e = Gs;
		return (_s = e(406) == typeof Symbol && e(387) == typeof Symbol[e(390)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(406) == typeof Symbol && t[n(355)] === Symbol && t !== Symbol[n(426)] ? n(387) : typeof t
		})(t)
	}

	function Rs(t, e) {
		if (!(t instanceof e)) throw new TypeError(Gs(369))
	}

	function js(t, e) {
		for (var n = Gs, r = 0; r < e[n(348)]; r++) {
			var i = e[r];
			i[n(411)] = i[n(411)] || !1, i[n(422)] = !0, n(432) in i && (i.writable = !0), Object[n(371)](t, i[n(365)], i)
		}
	}

	function Es() {
		var t = Gs;
		return Es = typeof Reflect !== t(417) && Reflect.get ? Reflect[t(398)][t(383)]() : function(e, n, r) {
			var i = t,
				a = As(e, n);
			if (a) {
				var o = Object[i(370)](a, n);
				return o[i(398)] ? o[i(398)][i(415)](arguments[i(348)] < 3 ? e : r) : o[i(432)]
			}
		}, Es[t(423)](this, arguments)
	}

	function Bs() {
		var t = ["connector", "preloadIcon", "enumerable", "getPhoto", "authenticateTimer", "width", "call", "game", "undefined", "generateTexture", "events", "log", "homeScreen", "configurable", "apply", "adEnabled", "getMonth", "prototype", "10vOkQWf", "preload", "atlasJSONHash", "desc", "hasOwnProperty", "value", "destroy", "start", "getDate", "init", "this hasn't been initialised - super() hasn't been called", "loop", "remove", "player", "setPrototypeOf", "then", "image", "6415731Bddtgt", "500", "instance", "onFileComplete", "#ffffff", "25195kioSER", "overlayTexture", "59600rqwjux", "527343lqCiTM", "endFill", "246HKpYCA", "angle", "add", "lang", "131621FTCMCr", "239147ybJTay", "Derived constructors may only return object or undefined", "text", "getFullYear", "length", "height", "sound", "maintenance", "isGameAssetPreloaded", "devEnabled", "noelpack", "constructor", "world", "/atlas/homeScreen/noelpack.json", "canShowNoelPack", "sham", "state", "setDefaultLanguage", "70308hafrTR", "/poker_icon.png", "/atlas/homeScreen/dailybonus.png", "key", "create", "failedCount", "drawRect", "Cannot call a class as a function", "getOwnPropertyDescriptor", "defineProperty", "construct", "getPrototypeOf", "centerX", "Super expression must either be null or a function", "pokerLogo", "__proto__", "catch", "LOADING_DATA", "homeScreenBG1", "/atlas/homeScreen/homeScreen.json", "make", "bind", "HomeScreen", "IOS", "variableUpdated", "symbol", "preloadBg", "quit", "iterator", "startGameAsync", "time", "addOnce", "anchor", "percent", "load", "beginFill", "get", "/atlas/homeScreen/homeScreen.png", "centerY", "logged", "CONNECTING_TO_SERVER", "/atlas/homeScreen/noelpack.png", "getPlatform", "128Snxqqn", "function", "enableTestMode", "dailybonus"];
		return (Bs = function() {
			return t
		})()
	}

	function As(t, e) {
		for (var n = Gs; !Object[n(426)][n(431)].call(t, e) && null !== (t = Ns(t)););
		return t
	}

	function Fs(t, e) {
		var n = Gs;
		return (Fs = Object[n(441)] ? Object[n(441)][n(383)]() : function(t, e) {
			return t[n(377)] = e, t
		})(t, e)
	}

	function Ds(t, e) {
		var n = Gs;
		if (e && ("object" === _s(e) || typeof e === n(406))) return e;
		if (void 0 !== e) throw new TypeError(n(345));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Gs(437));
			return t
		}(t)
	}

	function Ns(t) {
		var e = Gs;
		return (Ns = Object[e(441)] ? Object[e(373)][e(383)]() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function Gs(t, e) {
		var n = Bs();
		return (Gs = function(t, e) {
			return n[t -= 327]
		})(t, e)
	}! function(t, e) {
		for (var n = Gs, r = t();;) try {
			if (153628 == -parseInt(n(344)) / 1 + -parseInt(n(362)) / 2 + -parseInt(n(337)) / 3 + -parseInt(n(336)) / 4 + -parseInt(n(334)) / 5 * (-parseInt(n(339)) / 6) + -parseInt(n(343)) / 7 * (parseInt(n(405)) / 8) + parseInt(n(329)) / 9 * (parseInt(n(427)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Bs);
	const Ls = function(t) {
		var e = Gs;
		! function(t, e) {
			var n = Gs;
			if (typeof e !== n(406) && null !== e) throw new TypeError(n(375));
			t[n(426)] = Object[n(366)](e && e[n(426)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(371)](t, "prototype", {
				writable: !1
			}), e && Fs(t, e)
		}(u, t);
		var n, r, i, o, s, c = (o = u, s = function() {
			var t = Gs;
			if (typeof Reflect === t(417) || !Reflect[t(372)]) return !1;
			if (Reflect[t(372)][t(359)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(426)].valueOf[t(415)](Reflect[t(372)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Gs,
				n = Ns(o);
			if (s) {
				var r = Ns(this)[e(355)];
				t = Reflect[e(372)](n, arguments, r)
			} else t = n[e(423)](this, arguments);
			return Ds(this, t)
		});

		function u() {
			var t = Gs;
			return Rs(this, u), c[t(423)](this, arguments)
		}
		return n = u, i = Gs, (r = [{
			key: e(436),
			value: function() {
				var t = e;
				Es(Ns(u[t(426)]), t(436), this).call(this), this.layout(), this.startGameAsync(), CyberInstance[t(361)](gameLocale)
			}
		}, {
			key: e(428),
			value: function() {
				var t = e,
					n = this,
					r = this[t(341)][t(328)](0, 0, t(380));
				r[t(414)] = this[t(416)].width, r.height = this.game[t(349)], this[t(410)] = this[t(341)][t(328)](this[t(416)][t(356)][t(374)], this[t(416)][t(356)][t(400)], t(388)), this[t(410)].anchor.setTo(.5), this.desc = this[t(416)][t(341)].text(this.game[t(356)].centerX, this[t(416)][t(356)][t(400)] + 80, CyberInstance[t(342)][t(379)], {
					fontSize: 18,
					fill: t(333),
					fontWeight: "500"
				}), this[t(430)][t(394)].setTo(.5), this[t(395)] = this[t(416)][t(341)][t(346)](this[t(416)][t(356)].centerX, this[t(416)][t(356)][t(400)] + 2, "0%", {
					fontSize: 16,
					fill: t(333),
					fontWeight: t(330)
				}), this[t(395)][t(394)].setTo(.5);
				var i = this[t(416)][t(392)].create(!0);
				i[t(438)](30, (function() {
					var e = t;
					n[e(410)][e(340)] += 10
				})), i[t(434)](), this[t(396)].onFileComplete[t(341)](this[t(332)], this), this[t(396)][t(429)](t(421), assetUrl + t(399), assetUrl + t(381)), this[t(396)].atlasJSONHash(t(408), assetUrl + t(364), assetUrl + "/atlas/homeScreen/dailybonus.json"), this[t(396)].image(t(376), assetUrl + t(363)), FBInstant[t(404)]() != t(385) && this[t(358)]() && this.load.atlasJSONHash(t(354), assetUrl + t(403), assetUrl + t(357));
				var a = game[t(382)].graphics(0, 0);
				a[t(397)](0), a[t(368)](0, 0, this.game[t(414)], this[t(416)][t(349)]), a[t(338)](), CyberGlobalData[t(335)] = a[t(418)](), a[t(433)]()
			}
		}, {
			key: e(366),
			value: function() {
				var t = e,
					n = this;
				this[t(430)].setText(CyberInstance[t(342)][t(402)]), this[t(396)].onFileComplete[t(439)](this[t(332)], this), CyberInstance[t(424)] ? Tt.instance[t(436)]() : Tt[t(331)][t(407)](), this[t(352)] = !1, this[t(413)] = this.game[t(392)][t(419)][t(438)](30, (function() {
					var e = t;
					if (CyberInstance.connector[e(401)] && CyberInstance[e(409)][e(386)] && globalStartGameAsyncResolved) n[e(392)][e(419)][e(439)](n[e(413)]), n[e(434)]();
					else {
						if (1 === CyberInstance[e(409)][e(351)]) return n[e(392)][e(419)][e(439)](n[e(413)]), void n[e(360)].start("DisconnectScreen", !0, !1);
						!n[e(352)] && (n.isGameAssetPreloaded = !0, a.preload())
					}
				}))
			}
		}, {
			key: e(434),
			value: function() {
				var t = e;
				CyberInstance[t(350)].loadSounds(), gameLocaleInited ? game.state.start(t(384), !0, !1) : new hn(this[t(416)]).onDestroy[t(393)]((function() {
					var e = t;
					game[e(360)][e(434)](e(384), !0, !1)
				}))
			}
		}, {
			key: e(332),
			value: function(t, n, r) {
				var i = e;
				r ? this[i(395)].setText(t + "%") : console[i(420)](n)
			}
		}, {
			key: e(391),
			value: function() {
				var t = e,
					n = this;
				globalStartGameAsyncResolved || (5 === this[t(367)] && FBInstant[t(389)](), FBInstant.startGameAsync()[t(327)]((function() {
					var e = t;
					if (!globalStartGameAsyncResolved) {
						globalStartGameAsyncResolved = !0, clearInterval(globalProgressLoop);
						var n = FBInstant[e(440)][e(412)]();
						n && (CyberInstance.avatar = n), !CyberInstance[e(353)] && FBInstant[e(440)].canSubscribeBotAsync()[e(327)]((function() {
							FBInstant[e(440)].subscribeBotAsync()
						}))
					}
				}))[t(378)]((function(e) {
					var r = t;
					n[r(367)] ? n[r(367)]++ : n[r(367)] = 1, setTimeout((function() {
						n[r(391)]()
					}), 1e3)
				})))
			}
		}, {
			key: e(358),
			value: function() {
				var t = e,
					n = new Date;
				if (noel_1_99 == n[t(347)]() && noel_5_99 == n.getFullYear()) return !1;
				var r = n[t(435)]();
				return 11 == n[t(425)]() && r >= 20 && r < 26
			}
		}]) && js(n[i(426)], r), Object[i(371)](n, i(426), {
			writable: !1
		}), u
	}(le);
	var Ms = Xs;

	function Ws(t) {
		var e = Xs;
		return (Ws = "function" == typeof Symbol && e(403) == typeof Symbol[e(443)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(453) == typeof Symbol && t[n(461)] === Symbol && t !== Symbol[n(421)] ? n(403) : typeof t
		})(t)
	}

	function zs(t, e) {
		for (var n = Xs, r = 0; r < e[n(452)]; r++) {
			var i = e[r];
			i[n(424)] = i.enumerable || !1, i[n(459)] = !0, n(445) in i && (i[n(447)] = !0), Object[n(450)](t, i[n(458)], i)
		}
	}

	function Us(t, e) {
		var n = Xs;
		return (Us = Object[n(437)] ? Object[n(437)][n(425)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Vs(t, e) {
		var n = Xs;
		if (e && (Ws(e) === n(435) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(448));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Xs(407));
			return t
		}(t)
	}

	function Hs(t) {
		var e = Xs;
		return (Hs = Object[e(437)] ? Object[e(430)].bind() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(430)](t)
		})(t)
	}

	function Xs(t, e) {
		var n = Ks();
		return (Xs = function(t, e) {
			return n[t -= 395]
		})(t, e)
	}! function(t, e) {
		for (var n = Xs, r = t();;) try {
			if (833425 == parseInt(n(454)) / 1 + -parseInt(n(413)) / 2 * (-parseInt(n(428)) / 3) + -parseInt(n(463)) / 4 + -parseInt(n(468)) / 5 + parseInt(n(404)) / 6 + -parseInt(n(409)) / 7 + -parseInt(n(438)) / 8 * (-parseInt(n(464)) / 9)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ks);
	const qs = function(t) {
		var e = Xs;
		! function(t, e) {
			var n = Xs;
			if (typeof e !== n(453) && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object[n(398)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(450)](t, n(421), {
				writable: !1
			}), e && Us(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Xs;
			if (typeof Reflect === t(432) || !Reflect[t(418)]) return !1;
			if (Reflect[t(418)][t(471)]) return !1;
			if (typeof Proxy === t(453)) return !0;
			try {
				return Boolean.prototype[t(427)].call(Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Xs,
				n = Hs(a);
			if (o) {
				var r = Hs(this)[e(461)];
				t = Reflect[e(418)](n, arguments, r)
			} else t = n[e(408)](this, arguments);
			return Vs(this, t)
		});

		function c() {
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Xs(462))
			}(this, c), s.call(this)
		}
		return n = c, i = Xs, (r = [{
			key: "create",
			value: function() {
				var t = Xs;
				this[t(466)] = this[t(460)].image(0, 0, "homeScreenBG1"), this[t(466)][t(420)] = this[t(414)][t(420)], this.background[t(436)] = this[t(414)].height, 1 === CyberInstance[t(426)][t(399)] ? this.showMaintenance(CyberInstance.connector.maintenanceMsg) : new G(this[t(414)], {
					text: CyberInstance[t(406)].CONNECTION_LOST,
					buttonText: CyberInstance[t(406)][t(429)],
					hideCloseButton: !0,
					callback: this[t(455)],
					context: this
				})
			}
		}, {
			key: e(455),
			value: function() {
				var t = e;
				CyberInstance[t(402)] = !1, CyberInstance[t(426)][t(455)](), this[t(465)] = this[t(460)][t(442)](this[t(414)][t(416)][t(433)], this[t(414)].world[t(396)], "preloadBg"), this[t(465)][t(419)][t(410)](.5), this.game[t(460)][t(449)](this[t(414)][t(416)].centerX, this.game[t(416)][t(396)] + 80, CyberInstance[t(406)][t(472)], {
					fontSize: 18,
					fill: t(405),
					fontWeight: t(401)
				})[t(419)][t(410)](.5);
				var n = this.game.time[t(398)](!0);
				n[t(395)](30, (function() {
					var e = t;
					this[e(465)][e(411)] += 10, CyberInstance[e(426)][e(441)] && CyberInstance.connector[e(400)] && (n[e(434)](), n[e(417)](), this.game[e(422)][e(423)]("HomeScreen", !0, !1))
				}), this), n[t(423)]()
			}
		}, {
			key: e(446),
			value: function(t) {
				var n = e;
				this[n(414)][n(460)][n(449)](this[n(414)][n(420)] / 2, 30, CyberInstance[n(406)].THONG_BAO[n(431)](), {
					font: APP_FONT,
					fontSize: 40,
					fill: n(440),
					fontWeight: n(469)
				})[n(419)][n(410)](.5, 0), this.game[n(460)].text(100, 100, t, {
					font: APP_FONT,
					fontSize: 24,
					fill: n(412),
					fontWeight: "normal",
					wordWrap: !0,
					wordWrapWidth: this.game[n(420)] - 200,
					boundsAlignH: n(467),
					boundsAlignV: "middle"
				})[n(456)](0, 0, this.game.width - 200, this[n(414)][n(436)] - 200);
				var r = this.game[n(460)].sprite(0, 0, n(457), n(439));
				r.x = this[n(466)][n(420)] - r[n(420)] - 15, r.y = 15, r[n(415)] = !0, r[n(397)].onInputDown[n(451)]((function() {
					FBInstant[n(444)]()
				}), this)
			}
		}]) && zs(n[i(421)], r), Object[i(450)](n, i(421), {
			writable: !1
		}), c
	}(Phaser[Ms(470)]);

	function Ks() {
		var t = ["function", "92344jZXmTd", "connect", "setTextBounds", "homeScreen", "key", "configurable", "add", "constructor", "Cannot call a class as a function", "5582908wDqZaS", "27dFUyZm", "preloadIcon", "background", "center", "5421325Luzwme", "bold", "State", "sham", "RECONNECTING", "loop", "centerY", "events", "create", "maintenance", "variableUpdated", "500", "paused", "symbol", "8644938iOfFEI", "#ffffff", "lang", "this hasn't been initialised - super() hasn't been called", "apply", "5361335BwSoWu", "setTo", "angle", "#f59eac", "2224136lcQzOU", "game", "inputEnabled", "world", "destroy", "construct", "anchor", "width", "prototype", "state", "start", "enumerable", "bind", "connector", "valueOf", "3PjZRdY", "CONNECT", "getPrototypeOf", "toUpperCase", "undefined", "centerX", "stop", "object", "height", "setPrototypeOf", "3824232edZVGq", "icon_close", "#ebdac0", "logged", "image", "iterator", "quit", "value", "showMaintenance", "writable", "Derived constructors may only return object or undefined", "text", "defineProperty", "addOnce", "length"];
		return (Ks = function() {
			return t
		})()
	}

	function Ys(t) {
		var e = ec;
		return (Ys = e(124) == typeof Symbol && "symbol" == typeof Symbol[e(153)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(130)] === Symbol && t !== Symbol[n(110)] ? n(150) : typeof t
		})(t)
	}

	function Js(t, e) {
		for (var n = ec, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(102)] = i.enumerable || !1, i[n(161)] = !0, "value" in i && (i[n(107)] = !0), Object[n(137)](t, i[n(121)], i)
		}
	}

	function Qs() {
		var t = ["kill", "name", "make", "canvas", "setTo", "row", "configurable", "game", "valueOf", "destroy", "#fbafb3", "bitmapData", "add", "setText", "144gTIqrl", "call", "enumerable", "avatarSize", "callAll", "1253896hVCSDb", "create", "writable", "revive", "bind", "prototype", "load", "leaderboardScreen", "applyTexture", "cache", "500", "sham", "height", "1682229VqOOUh", "updateAvatar", "__proto__", "key", "object", "checkImageKey", "function", "formatCoinWithCommas", "image", "Derived constructors may only return object or undefined", "497985ZsDOcT", "2671620wIVsrY", "constructor", "anchor", "7742448Sqghax", "score", "4ftaUlV", "setPrototypeOf", "alphaMask", "defineProperty", "this hasn't been initialised - super() hasn't been called", "avatar", "getPrototypeOf", "loadTexture", "width", "text", "rank", "no_avatar", "construct", "c48", "homeScreen", "guserid", "symbol", "#f5c78a", "3282215dAYYRO", "iterator", "7571112OkXVHf"];
		return (Qs = function() {
			return t
		})()
	}

	function Zs(t, e) {
		var n = ec;
		return (Zs = Object[n(135)] ? Object[n(135)][n(109)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function $s(t, e) {
		var n = ec;
		if (e && (Ys(e) === n(122) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(127));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(ec(138));
			return t
		}(t)
	}

	function tc(t) {
		var e = ec;
		return (tc = Object[e(135)] ? Object[e(140)][e(109)]() : function(t) {
			return t[e(120)] || Object.getPrototypeOf(t)
		})(t)
	}

	function ec(t, e) {
		var n = Qs();
		return (ec = function(t, e) {
			return n[t -= 101]
		})(t, e)
	}! function(t, e) {
		for (var n = ec, r = t();;) try {
			if (844907 == parseInt(n(118)) / 1 + parseInt(n(129)) / 2 + parseInt(n(128)) / 3 * (-parseInt(n(134)) / 4) + parseInt(n(152)) / 5 + -parseInt(n(154)) / 6 + parseInt(n(132)) / 7 + -parseInt(n(105)) / 8 * (parseInt(n(169)) / 9)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Qs);
	var nc = function(t) {
			var e = ec;
			! function(t, e) {
				var n = ec;
				if (typeof e !== n(124) && null !== e) throw new TypeError("Super expression must either be null or a function");
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						writable: !0,
						configurable: !0
					}
				}), Object.defineProperty(t, n(110), {
					writable: !1
				}), e && Zs(t, e)
			}(c, t);
			var n, r, i, a, o, s = (a = c, o = function() {
				var t = ec;
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect[t(146)][t(116)]) return !1;
				if (typeof Proxy === t(124)) return !0;
				try {
					return Boolean.prototype[t(163)][t(101)](Reflect[t(146)](Boolean, [], (function() {}))), !0
				} catch (t) {
					return !1
				}
			}(), function() {
				var t, e = ec,
					n = tc(a);
				if (o) {
					var r = tc(this)[e(130)];
					t = Reflect[e(146)](n, arguments, r)
				} else t = n.apply(this, arguments);
				return $s(this, t)
			});

			function c(t, e, n, r) {
				var i, a = ec;
				(function(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				})(this, c), (i = s[a(101)](this, t, 0, 0))[a(156)] = "a" + e[a(149)];
				var o, u = i.create(0, 0, "leaderboardScreen", a(160));
				if (u.x = n[a(142)] / 2 - u[a(142)] / 2 - 3, e[a(144)] > 3 ? (o = i.game[a(167)][a(143)](60, i.height / 2, e[a(144)], {
						font: APP_FONT,
						fontSize: 28,
						fill: "#faa8b6",
						fontWeight: a(115)
					}), i[a(167)](o), o[a(168)](e.rank + "")) : (o = i.create(60, u[a(117)] / 2 - 2, a(112), "r" + e[a(144)]), i.add(o)), o.anchor.setTo(.5), i[a(139)] = i[a(106)](114, 0, a(148), a(145)), i[a(139)].width = i[a(103)], i[a(139)][a(117)] = i[a(103)], i.avatar.y = u.height / 2 - i[a(139)][a(117)] / 2 - 2, i[a(162)][a(114)][a(123)](i[a(156)]) ? i[a(113)](i.name) : i[a(162)].load.image(i[a(156)], e[a(139)]), e.rank >= 1 && e[a(144)] <= 3) {
					var h = i[a(106)](0, i.avatar.y, a(112), "ar" + e[a(144)]);
					h.x = i.avatar.x + i[a(103)] / 2 - h[a(142)] / 2
				}
				var f = i[a(162)][a(167)][a(143)](i.avatar.x + i[a(103)] + 20, u.height / 2 + 2, e[a(156)], {
					font: APP_FONT,
					fontSize: 22,
					fill: a(165),
					fontWeight: 400
				});
				f.anchor[a(159)](0, .5), i[a(167)](f), f[a(168)](e[a(156)]);
				var l = i[a(106)](2, 0, a(112), r);
				l.x = u.x + u[a(142)] - l[a(142)] - 20, l.y = u[a(117)] / 2 - l.height / 2, "coin_icon" == r && (l.y = l.y - 2);
				var p = CyberHelper[a(125)](e[a(133)]),
					y = i[a(162)].add[a(143)](0, i[a(117)] / 2, p, {
						font: APP_FONT,
						fontSize: 22,
						fill: a(151),
						fontWeight: 400
					});
				return y[a(131)][a(159)](0, .5), i.add(y), y.setText(p), y.x = l.x - 15 - y[a(158)].width, i
			}
			return n = c, i = ec, (r = [{
				key: e(119),
				value: function(t) {
					var n = e;
					this[n(139)][n(141)](t), this[n(139)][n(142)] = this.avatarSize, this[n(139)][n(117)] = this[n(103)]
				}
			}, {
				key: e(113),
				value: function(t) {
					var n = e;
					try {
						var r = new Phaser.Rectangle(0, 0, this[n(103)], this[n(103)]),
							i = game[n(157)][n(126)](0, 0, n(112), n(147));
						i.width = this[n(103)], i[n(117)] = this[n(103)];
						var a = game[n(157)][n(166)]();
						a[n(111)](i), i[n(164)]();
						var o = this[n(162)][n(157)][n(166)](this[n(103)], this.avatarSize);
						o[n(136)](t, a, r), this[n(139)][n(141)](o)
					} catch (e) {
						this[n(139)].loadTexture(t)
					}
					this.avatar[n(142)] = this[n(103)], this[n(139)][n(117)] = this[n(103)]
				}
			}, {
				key: e(155),
				value: function() {
					this.callAll("kill")
				}
			}, {
				key: e(108),
				value: function() {
					var t = e;
					this[t(104)](t(108))
				}
			}, {
				key: e(117),
				get: function() {
					return 80
				}
			}, {
				key: e(103),
				get: function() {
					return 48
				}
			}]) && Js(n[i(110)], r), Object[i(137)](n, i(110), {
				writable: !1
			}), c
		}(Phaser.Group),
		rc = oc;

	function ic(t) {
		var e = oc;
		return (ic = "function" == typeof Symbol && e(274) == typeof Symbol[e(374)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(325) == typeof Symbol && t[n(368)] === Symbol && t !== Symbol[n(266)] ? n(274) : typeof t
		})(t)
	}

	function ac(t, e) {
		for (var n = oc, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(320)] = i.enumerable || !1, i[n(396)] = !0, n(318) in i && (i[n(288)] = !0), Object[n(357)](t, i.key, i)
		}
	}

	function oc(t, e) {
		var n = fc();
		return (oc = function(t, e) {
			return n[t -= 262]
		})(t, e)
	}

	function sc() {
		var t = oc;
		return sc = "undefined" != typeof Reflect && Reflect.get ? Reflect[t(344)].bind() : function(e, n, r) {
			var i = t,
				a = cc(e, n);
			if (a) {
				var o = Object[i(290)](a, n);
				return o[i(344)] ? o[i(344)][i(394)](arguments[i(410)] < 3 ? e : r) : o[i(318)]
			}
		}, sc[t(334)](this, arguments)
	}

	function cc(t, e) {
		for (var n = oc; !Object[n(266)].hasOwnProperty[n(394)](t, e) && null !== (t = lc(t)););
		return t
	}

	function uc(t, e) {
		var n = oc;
		return (uc = Object[n(366)] ? Object[n(366)][n(336)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function hc(t, e) {
		var n = oc;
		if (e && (ic(e) === n(317) || typeof e === n(325))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError(oc(263));
			return t
		}(t)
	}

	function fc() {
		var t = ["showEntries", "load", "listViewGroup", "inputEnabled", "addEventListener", "7VPdzTj", "onScrollerComplete", "text", "init", "call", "onFileComplete", "configurable", "world", "5285763Bnzxgr", "containsKey", "anchor", "create", "game", "59032721GIwWxn", "cao_thu", "lang", "construct", "replace", "LEADERBOARD", "onLeaderboardChange", "length", "2928118KTCzPy", "this hasn't been initialised - super() hasn't been called", "game_win", "topWinButton", "prototype", "round", "getTime", "grp", "checkImageKey", "HomeScreen", "add", "onExtensionResponse", "symbol", "getInt", "leftbar_active", "MINS", "image", "coin_win", "getUtfString", "state", "sham", "listRanking", "viewport", "name", "leaderboard.getDuration", "events", "writable", "total", "getOwnPropertyDescriptor", "start", "avatar", "shutdown", "HOURS", "make", "TopIncome", "TopWin", "homeScreen", "loadTexture", "450066nGpSky", "SFSObject", "EXTENSION_RESPONSE", "TOP_WON", "socket", "getByName", "18BlHHjx", "guserid", "cache", "removeAll", "reset", "log", "3525672egCykb", "SFSEvent", "openLoadingPopup", "thu_nhap", "getLong", "object", "value", "getSFSArray", "enumerable", "leaderboard.getTopWinner", "onComplete", "6649210ROWKCS", "coin_icon", "function", "1CHnvLW", "putInt", "container", "Super expression must either be null or a function", "__proto__", "addChild", "/atlas/leaderboardScreenV2/leaderboardScreen.json", "preload", "apply", "won_icon", "bind", "topExpButton", "1528008eCSkCF", "TOP_INCOME", "addColor", "destroy", "setText", "valueOf", "get", "scroller", "icon_close", "push", "langCode", "getLeaderboardAsync", "leaderboardScreen", "leaderboardName", "applyTexture", "leaderboard.getTopIncome", "entries", "leftbar_button", "homeScreenBG1", "defineProperty", "ExtensionRequest", "getPrototypeOf", "getSFSObject", "5aEmrzS", "formatTime", "screenReady", "Rectangle", "click", "setPrototypeOf", "#ebdac0", "constructor", "assetUrl", "atlasJSONHash", "cmd", "homeScreenBG2", "height", "iterator", "width", "updateDuration", "floor", "idx", "setTo", "closeLoadingPopup", "background", "params", "send", "size"];
		return (fc = function() {
			return t
		})()
	}

	function lc(t) {
		var e = oc;
		return (lc = Object[e(366)] ? Object.getPrototypeOf[e(336)]() : function(t) {
			var n = e;
			return t[n(330)] || Object[n(359)](t)
		})(t)
	}! function(t, e) {
		for (var n = oc, r = t();;) try {
			if (944507 == parseInt(n(326)) / 1 * (-parseInt(n(262)) / 2) + -parseInt(n(398)) / 3 + -parseInt(n(338)) / 4 * (parseInt(n(361)) / 5) + parseInt(n(300)) / 6 * (parseInt(n(390)) / 7) + parseInt(n(312)) / 8 + parseInt(n(306)) / 9 * (-parseInt(n(323)) / 10) + parseInt(n(403)) / 11) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(fc);
	var pc = null,
		yc = rc(296),
		dc = 0,
		vc = 0,
		bc = !1,
		gc = function(t) {
			var e = rc;
			return (new Date)[e(268)]() - t >= 12e4
		};
	const mc = function(t) {
		var e = rc;
		! function(t, e) {
			var n = oc;
			if ("function" != typeof e && null !== e) throw new TypeError(n(329));
			t[n(266)] = Object[n(401)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, n(266), {
				writable: !1
			}), e && uc(t, e)
		}(u, t);
		var n, r, i, o, s, c = (o = u, s = function() {
			var t = oc;
			if ("undefined" == typeof Reflect || !Reflect[t(406)]) return !1;
			if (Reflect[t(406)][t(282)]) return !1;
			if (typeof Proxy === t(325)) return !0;
			try {
				return Boolean[t(266)][t(343)][t(394)](Reflect[t(406)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = oc,
				n = lc(o);
			if (s) {
				var r = lc(this).constructor;
				t = Reflect[e(406)](n, arguments, r)
			} else t = n[e(334)](this, arguments);
			return hc(this, t)
		});

		function u() {
			var t = oc;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, u), c[t(394)](this)
		}
		return n = u, i = oc, (r = [{
			key: e(393),
			value: function() {
				var t = e;
				sc(lc(u.prototype), t(393), this)[t(394)](this), null == pc ? pc = {
					TopWin: [],
					TopIncome: []
				} : (dc > 0 && gc(dc) && (pc[t(297)][t(410)] = 0), vc > 0 && gc(vc) && (pc.TopIncome[t(410)] = 0)), bc = !1, this.container = this[t(272)].group(), this[t(381)] = this[t(272)].image(0, 0, t(356)), this[t(381)][t(375)] = this[t(402)].width, this[t(381)].height = this[t(402)].height, this[t(328)].add(this[t(381)]), CyberInstance.socket[t(389)](SFS2X[t(313)][t(302)], this.onExtensionResponse, this)
			}
		}, {
			key: e(333),
			value: function() {
				var t = e;
				this[t(314)](), a[t(333)](), this.game[t(308)][t(270)](t(350)) || this[t(386)][t(370)](t(350), window[t(369)] + "/atlas/leaderboardScreenV2/leaderboardScreen.png", window[t(369)] + t(332))
			}
		}, {
			key: e(401),
			value: function() {
				var t = e;
				this[t(386)].onFileComplete[t(272)](this[t(395)], this), this[t(381)][t(299)](t(372)), this[t(381)][t(375)] = this[t(402)].width, this[t(381)][t(373)] = this.game[t(373)];
				var n = this[t(402)][t(272)].text(this[t(402)][t(397)].centerX, 20, "", {
					font: APP_FONT,
					fontWeight: 900,
					fontSize: 40,
					fill: "#ebdac0"
				});
				n[t(400)].setTo(.5, 0), this[t(328)].add(n), n.setText(CyberInstance.lang[t(408)]);
				var r = this[t(328)][t(401)](0, 0, t(298), t(346));
				r.x = this[t(402)][t(375)] - r[t(375)] - 15, r.y = 15, r[t(388)] = !0, r[t(287)].onInputDown.addOnce((function() {
					var e = t;
					CyberInstance.sound.playButtonSound(), this[e(402)][e(281)].start(e(271), !0, !1)
				}), this);
				var i = new Lt(this.game, 2, 2, "leaderboardScreen", yc == t(297) ? t(276) : t(355)),
					a = this[t(402)][t(272)][t(278)](i[t(375)] / 2, 13, "leaderboardScreen", t(404));
				a[t(400)][t(379)](.5, 0), i[t(331)](a);
				var o = this[t(402)].make.text(78, i[t(373)] - 35, CyberInstance[t(405)].TOP_WON, {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 22,
					fill: "#e3d5cc"
				});
				o[t(400)][t(379)](.5, 0), i[t(331)](o), this[t(328)].add(i), o.setText(CyberInstance[t(405)][t(303)]);
				var s = new Lt(this[t(402)], 2, 2, t(350), yc == t(296) ? "leftbar_active" : t(355)),
					c = this[t(402)][t(272)].image(s[t(375)] / 2, 16, t(350), t(315));
				c[t(400)].setTo(.5, 0), s[t(331)](c);
				var u = this[t(402)][t(295)][t(392)](78, s[t(373)] - 35, CyberInstance[t(405)][t(339)], {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 22,
					fill: "#e3d5cc"
				});
				u[t(400)][t(379)](.5, 0), s[t(331)](u), this.container[t(272)](s), u[t(342)](CyberInstance[t(405)][t(339)]), i[t(351)] = t(297), i[t(365)](this[t(409)], this), this[t(265)] = i, s.leaderboardName = t(296), s[t(365)](this[t(409)], this), this[t(337)] = s;
				var h = this[t(328)][t(401)](0, 0, t(350), "bg");
				h.y = this[t(402)].height - h[t(373)] - 35, s.y = h.y + 6, s.x = this[t(402)][t(375)] / 2 - (s.width + h.width - 2) / 2, h.x = s.x + s.width - 2, i.x = s.x, i.y = s.y + s[t(373)] + 15, this[t(284)] = {
					width: h[t(375)],
					height: h[t(373)] - 25
				}, this[t(387)] = this[t(402)][t(272)].group(), this[t(387)].x = h.x, this[t(387)].y = h.y + 10, this[t(283)] = new kr(this[t(402)], this[t(387)], new(Phaser[t(364)])(0, 0, this[t(284)][t(375)], this[t(284)][t(373)]), {
					direction: "y",
					padding: 5,
					searchForClicks: !0
				}), this.listRanking[t(345)][t(287)][t(322)][t(272)](this[t(391)], this), this[t(363)] = !0, this[t(349)](yc, !0), CyberInstance[t(304)][t(383)](new(SFS2X[t(358)])(t(286)))
			}
		}, {
			key: e(273),
			value: function(t) {
				var n = e;
				if (this[n(363)] && t[n(382)].containsKey(n(354))) {
					var r = t.params[n(319)]("entries");
					if (r[n(384)]() > 0) {
						for (var i = t.cmd == n(353) ? n(296) : n(297), a = pc[i][n(410)], o = 0; o < r[n(384)](); o++) {
							var s = r[n(360)](o);
							pc[i][n(347)]({
								guserid: s[n(316)](n(307)),
								name: s[n(280)](n(285)),
								avatar: s[n(399)](n(292)) ? s[n(280)](n(292)) : "assets/images/no_avatar.png",
								rank: a + o + 1,
								score: s.containsKey("game_win") ? s[n(275)](n(264)) : s.getLong(n(279))
							})
						}
						i == yc && this[n(385)](a), t[n(371)] == n(321) ? dc = (new Date).getTime() : t[n(371)] == n(353) && (vc = (new Date)[n(268)]()), bc = !1
					}
					this.closeLoadingPopup()
				}
				this[n(363)] && t.cmd == n(286) && this[n(376)](t.params[n(316)]("duration"))
			}
		}, {
			key: "getLeaderboardAsync",
			value: function(t, n) {
				var r = e;
				if (0 != pc[t][r(410)] && n) this[r(385)](0), this[r(380)]();
				else if (!bc && pc[t][r(410)] < 50) {
					bc = !0;
					var i = new(SFS2X[r(301)]);
					i[r(327)](r(378), pc[t][r(410)]), "TopWin" == t ? CyberInstance[r(304)].send(new(SFS2X[r(358)])(r(321), i)) : t == r(296) && CyberInstance[r(304)][r(383)](new SFS2X.ExtensionRequest(r(353), i))
				}
			}
		}, {
			key: e(385),
			value: function(t) {
				var n = e,
					r = pc[yc];
				if (r && r[n(410)] > 0) {
					for (var i = t; i < r.length; i++) this[n(283)][n(272)](new nc(this.game, r[i], this.viewport, yc == n(297) ? n(335) : n(324)));
					this[n(386)][n(291)]()
				}
			}
		}, {
			key: e(409),
			value: function(t) {
				var n = e,
					r = this;
				t.leaderboardName && t.leaderboardName != yc && (yc = t.leaderboardName, t[n(299)](n(350), n(276)), yc == n(297) ? this[n(337)][n(299)](n(350), "leftbar_button") : this[n(265)][n(299)](n(350), "leftbar_button"), this[n(283)][n(309)](), this[n(283)][n(310)](), this[n(314)]({
					closeTimer: 1e4
				}), setTimeout((function() {
					bc && (bc = !1), r[n(349)](yc, !0)
				}), 300))
			}
		}, {
			key: e(391),
			value: function() {
				var t = e;
				if (this[t(283)]) try {
					if (!bc && pc[yc][t(410)] > 0 && pc[yc][t(410)] < 50) {
						var n = parseInt(this[t(283)].scroller.dispatchValues[t(289)]);
						if (n < 0) {
							var r = pc[yc].length,
								i = 80 * r + 5 * (r - 1) - this.viewport[t(373)];
							(n = -n) >= i - 70 && this[t(349)](yc, !1)
						}
					}
				} catch (e) {
					console[t(311)](e)
				}
			}
		}, {
			key: "updateDuration",
			value: function(t) {
				var n = e;
				try {
					var r = CyberInstance.lang.RESET_IN[n(407)]("%s", this.formatTime(t)),
						i = this.game.add[n(392)](this[n(402)].width / 2, 80, "", {
							font: APP_FONT,
							fontSize: 20,
							fill: n(367),
							fontWeight: 400,
							wordWrapWidth: this.game[n(375)]
						});
					"vn" == CyberInstance[n(348)] && i[n(340)]("#f1ad0a", 28), i[n(400)][n(379)](.5, 0), this[n(328)][n(272)](i), i[n(342)](r)
				} catch (t) {
					console[n(311)](t)
				}
			}
		}, {
			key: e(362),
			value: function(t) {
				var n, r = e,
					i = 864e5,
					a = 36e5,
					o = Math[r(377)](t / i),
					s = Math[r(377)]((t - o * i) / a),
					c = Math[r(267)]((t - o * i - s * a) / 6e4);
				return 60 === c && (s++, c = 0), 24 === s && (o++, s = 0), o > 0 ? (n = o + " " + CyberInstance.lang.DAYS, s > 0 ? n += " " + s + " " + CyberInstance[r(405)][r(294)] : c > 0 && (n += " " + c + " " + CyberInstance[r(405)].MINS)) : s > 0 ? (n = s + " " + CyberInstance[r(405)][r(294)], c > 0 && (n += " " + c + " " + CyberInstance[r(405)].MINS)) : n = c + " " + CyberInstance[r(405)][r(277)], n
			}
		}, {
			key: e(395),
			value: function(t, n, r) {
				var i = e;
				if (this[i(363)] && r) {
					var a = this[i(283)][i(269)][i(305)](n);
					a && a[i(352)](n)
				}
			}
		}, {
			key: e(293),
			value: function() {
				var t = e;
				sc(lc(u[t(266)]), t(293), this)[t(394)](this), CyberInstance[t(304)].removeEventListener(SFS2X[t(313)].EXTENSION_RESPONSE, this.onExtensionResponse), this.load[t(395)].remove(this[t(395)], this), this.container[t(341)](), this[t(387)].destroy(), this.listViewGroup = null, this[t(328)] = null, this[t(284)] = null
			}
		}]) && ac(n[i(266)], r), Object[i(357)](n, i(266), {
			writable: !1
		}), u
	}(le);

	function Ic(t, e) {
		for (var n = wc, r = 0; r < e[n(186)]; r++) {
			var i = e[r];
			i[n(153)] = i[n(153)] || !1, i[n(192)] = !0, "value" in i && (i[n(131)] = !0), Object[n(183)](t, i[n(139)], i)
		}
	}

	function wc(t, e) {
		var n = Sc();
		return (wc = function(t, e) {
			return n[t -= 114]
		})(t, e)
	}

	function Sc() {
		var t = ["roomList", "Cannot call a class as a function", "CLOSE", "193399uXgTLr", "lang", "value", "key", "autoConnect", "getVariable", "extraCounter", "getSFSArray", "closeLoadingPopup", "shortenLargeNumber", "success", "signal", "isConnected", "123094qbjofj", "instance", "addEventListener", "findGame", "enumerable", "5188644gVoEMZ", "onExtensionResponse", "changedVars", "sfs", "joinGame", "getRoomList", "USER_VARIABLES_UPDATE", "sendSubscribeRequest", "cmd", "push", "shuffleArray", "error", "errorMessage", "getSFSObject", "getLong", "gift.outOfMoney", "628276RrbJAz", "4805544qvgoIP", "handleReconnect", "ready", "5OLGEaL", "screenReady", "prototype", "errorCode", "random", "indexOf", "openIAP", "SFSEvent", "isItMe", "defineProperty", "maxUsers", "onRoomCreationError", "length", "socket", "screen", "ROOM_CREATION_ERROR", "sentCount", "params", "configurable", "onUserVariablesUpdate", "704844PuLkhw", "connector", "1737096dbRsgQ", "add", "51eAxvyY", "7ksaxYR", "gameGroup", "containsKey", "notEnoughMoneyPopup", "coin", "size", "getInt", "ExtensionRequest", "ROOM_JOIN_ERROR", "handleJoinRoomError", "130cZlleX", "user", "handleOutOfMoney", "onJoinRoomError", "EXTENSION_RESPONSE", "ads.rewardedInterstitial", "userCount", "writable", "send"];
		return (Sc = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = wc, r = t();;) try {
			if (873700 == parseInt(n(136)) / 1 + parseInt(n(149)) / 2 * (-parseInt(n(198)) / 3) + -parseInt(n(194)) / 4 + -parseInt(n(174)) / 5 * (-parseInt(n(171)) / 6) + parseInt(n(114)) / 7 * (-parseInt(n(196)) / 8) + parseInt(n(154)) / 9 + parseInt(n(124)) / 10 * (parseInt(n(170)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Sc);
	const kc = function() {
		var t, e, n, r = wc;

		function i(t) {
			var e = wc;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(wc(134))
			})(this, i), this[e(188)] = t, this[e(157)] = CyberInstance[e(187)], this[e(157)][e(151)](SFS2X[e(181)][e(122)], this[e(127)], this), this[e(157)][e(151)](SFS2X.SFSEvent[e(189)], this[e(185)], this), this.sfs[e(151)](SFS2X[e(181)][e(128)], this[e(155)], this), this[e(157)][e(151)](SFS2X[e(181)][e(160)], this[e(193)], this), CyberInstance.connector[e(147)][e(197)](this[e(140)], this)
		}
		return t = i, n = wc, (e = [{
			key: r(140),
			value: function(t) {
				var e = r;
				this[e(175)]() && (t ? (this.screen[e(144)](), Tt[e(150)][e(172)]()) : (CyberInstance[e(195)].connect(), this[e(188)].openLoadingPopup()))
			}
		}, {
			key: r(155),
			value: function(t) {
				var e = r;
				if (this[e(175)]())
					if (t.cmd == e(158)) this[e(123)](t);
					else if (t[e(162)] == e(152)) this[e(188)][e(144)](), 1 === t.params[e(120)](e(177)) && this[e(188)].openIAP();
				else if ("createGameError" == t[e(162)]) try {
						this[e(188)][e(144)](), t.params[e(116)]("errorCode") && 1 == t[e(191)][e(120)](e(177)) && this[e(188)][e(180)]()
					} catch (t) {
						console[e(165)](t)
					} else if (t.cmd == e(169)) this[e(126)](t[e(191)]);
					else if (t[e(162)] == e(159)) this.updateRoomList(t[e(191)]);
				else if (t[e(162)] == e(129)) {
					var n = t[e(191)][e(168)](e(118));
					new G(game, {
						text: CyberInstance[e(137)].YOU_GOT_CHIP.replace("%s", u[e(145)](n)),
						buttonText: CyberInstance[e(137)][e(135)],
						hideCloseButton: !0
					})
				}
			}
		}, {
			key: "updateRoomList",
			value: function(t) {
				var e = r;
				if (this[e(175)]()) {
					var n = [];
					if (t[e(116)]("roomList")) {
						var i = t[e(143)](e(133));
						if (i[e(119)]() > 0)
							for (var a = 0; a < i[e(119)](); a++) {
								var o = i[e(167)](a),
									s = {
										id: o[e(120)]("id"),
										userCount: o[e(120)](e(130)),
										maxUsers: o[e(120)](e(184)),
										bet: o[e(168)]("bet")
									};
								0 == s[e(130)] && (s.userCount = 1), s.isFull = s[e(130)] == s.maxUsers ? 1 : 0, n[e(163)](s)
							}
					}
					n[e(186)] > 1 && (n = this[e(164)](n)), this[e(188)].updateRoomList(n)
				}
			}
		}, {
			key: r(193),
			value: function(t) {
				var e = r;
				t[e(125)][e(182)] && this.screenReady() && -1 != t[e(156)][e(179)](e(118)) && this[e(188)].updateProfileCoin(t.user[e(141)](e(118))[e(138)])
			}
		}, {
			key: r(123),
			value: function(t) {
				var e = r;
				if (!1 === t[e(191)].getBool(e(146)) && (this[e(188)][e(144)](), t.params[e(116)]("bet"))) {
					var n = t[e(191)][e(120)](e(177));
					0 == n ? G.showNotEnoughMoneyToJoin(params[e(168)]("bet")) : 2 == n && new G(game, {
						text: CyberInstance[e(137)].ROOM_FULL,
						buttonText: CyberInstance[e(137)][e(135)]
					})
				}
			}
		}, {
			key: r(126),
			value: function(t) {
				var e = r;
				this.screen.closeLoadingPopup(), t[e(116)]("coin") && t[e(116)]("sentCount") ? new xe(game, {
					coin: t[e(120)](e(118)),
					sentCount: t[e(120)](e(190))
				}) : Tt[e(150)][e(173)] && Tt[e(150)][e(142)] < 5 && (this[e(188)][e(117)] = new qt(game))
			}
		}, {
			key: r(127),
			value: function(t) {
				var e = r;
				this.screenReady() && (this[e(188)][e(144)](), new G(game, {
					text: t.errorMessage,
					buttonText: CyberInstance[e(137)][e(135)]
				}))
			}
		}, {
			key: "onRoomCreationError",
			value: function(t) {
				var e = r;
				this[e(175)]() && (this[e(188)][e(144)](), new G(game, {
					text: t[e(166)],
					buttonText: CyberInstance[e(137)].CLOSE
				}))
			}
		}, {
			key: r(161),
			value: function(t) {
				var e = r;
				if (this.screenReady() && this[e(157)][e(148)]) {
					var n = new SFS2X.SFSObject;
					n.putUtfString(e(115), t), this[e(157)][e(132)](new(SFS2X[e(121)])(e(159), n))
				}
			}
		}, {
			key: r(175),
			value: function() {
				var t = r;
				return this.screen[t(175)]
			}
		}, {
			key: r(164),
			value: function(t) {
				var e, n, i, a = r;
				for (i = t.length - 1; i > 0; i--) e = Math.floor(Math[a(178)]() * (i + 1)), n = t[i], t[i] = t[e], t[e] = n;
				return t
			}
		}]) && Ic(t[n(176)], e), Object[n(183)](t, n(176), {
			writable: !1
		}), i
	}();
	var Oc = Ec;

	function Cc(t) {
		var e = Ec;
		return (Cc = e(457) == typeof Symbol && e(423) == typeof Symbol[e(488)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(457) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(461)] ? n(423) : typeof t
		})(t)
	}

	function Tc(t, e) {
		if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
	}

	function Pc(t, e) {
		for (var n = Ec, r = 0; r < e[n(482)]; r++) {
			var i = e[r];
			i[n(480)] = i.enumerable || !1, i[n(420)] = !0, n(436) in i && (i[n(465)] = !0), Object[n(454)](t, i[n(434)], i)
		}
	}

	function xc() {
		var t = ["function", "heart", "instance", "setText", "prototype", "648347zPRINN", "2910632uIpXcd", "loadTexture", "writable", "JOIN", "500", "this hasn't been initialised - super() hasn't been called", "roomId", "betValue", "15dNKLuh", "Group", "removeChild", "Derived constructors may only return object or undefined", "row", "click", "full", "undefined", "maxUser", "enumerable", "inputEnabled", "length", "width", "#ffffff", "setTo", "hearts", "canPlay", "iterator", "name", "refreshData", "heart_active", "create", "843851QCZrxX", "apply", "lang", "betCondition", "userCount", "#FFFFFF", "22ZaxekP", "betX", "object", "Image", "userCountX", "Super expression must either be null or a function", "call", "bind", "5172gMXXiV", "valueOf", "construct", "height", "text", "shortenLargeNumber", "configurable", "anchor", "kill", "symbol", "playButtonSound", "joinButton", "visible", "lobbyScreen", "sham", "onJoinRequest", "9HZYSZh", "#ffcf00", "302882jukUxi", "miniumMoneyCondition", "key", "addHearts", "value", "8827440vNrVTn", "openLoadingPopup", "sound", "addText", "setPrototypeOf", "maxUsers", "700", "203484sffhNw", "state", "updateUserCount", "game", "FULL", "constructor", "add", "3370TWLORr", "join", "bet", "defineProperty", "revive", "paused"];
		return (xc = function() {
			return t
		})()
	}

	function _c(t, e) {
		var n = Ec;
		return (_c = Object.setPrototypeOf ? Object[n(441)].bind() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Rc(t, e) {
		var n = Ec;
		if (e && (Cc(e) === n(501) || typeof e === n(457))) return e;
		if (void 0 !== e) throw new TypeError(n(474));
		return jc(t)
	}

	function jc(t) {
		if (void 0 === t) throw new ReferenceError(Ec(468));
		return t
	}

	function Ec(t, e) {
		var n = xc();
		return (Ec = function(t, e) {
			return n[t -= 417]
		})(t, e)
	}

	function Bc(t) {
		var e = Ec;
		return (Bc = Object.setPrototypeOf ? Object.getPrototypeOf[e(506)]() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}! function(t, e) {
		for (var n = Ec, r = t();;) try {
			if (490288 == parseInt(n(493)) / 1 + -parseInt(n(432)) / 2 * (parseInt(n(471)) / 3) + parseInt(n(507)) / 4 * (-parseInt(n(451)) / 5) + -parseInt(n(444)) / 6 + -parseInt(n(462)) / 7 + parseInt(n(463)) / 8 * (-parseInt(n(430)) / 9) + -parseInt(n(437)) / 10 * (-parseInt(n(499)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(xc);
	var Ac = function(t) {
		var e = Ec;
		! function(t, e) {
			var n = Ec;
			if (typeof e !== n(457) && null !== e) throw new TypeError(n(504));
			t.prototype = Object[n(492)](e && e[n(461)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, n(461), {
				writable: !1
			}), e && _c(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Ec;
			if (typeof Reflect === t(478) || !Reflect[t(509)]) return !1;
			if (Reflect[t(509)][t(428)]) return !1;
			if (typeof Proxy === t(457)) return !0;
			try {
				return Boolean[t(461)][t(508)][t(505)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Ec,
				n = Bc(a);
			if (o) {
				var r = Bc(this)[e(449)];
				t = Reflect[e(509)](n, arguments, r)
			} else t = n[e(494)](this, arguments);
			return Rc(this, t)
		});

		function c(t) {
			var e, n = Ec,
				r = arguments[n(482)] > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
				i = arguments[n(482)] > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
				a = arguments[n(482)] > 3 ? arguments[3] : void 0;
			Tc(this, c), (e = s[n(505)](this, t[n(447)], r, i))[n(489)] = a.id;
			var o = e[n(492)](0, 0, n(427), n(475));
			return o.width = e[n(447)][n(483)] - 60, o[n(417)] = e[n(417)], e.x = e[n(447)][n(483)] / 2 - o[n(483)] / 2, e.roomId = e[n(447)][n(450)][n(418)](20, e.height / 2 + 2, a.id, {
				font: APP_FONT,
				fontSize: 24,
				fill: n(498),
				fontWeight: n(467)
			}), e[n(469)][n(421)][n(485)](0, .5), e[n(450)](e[n(469)]), e[n(469)][n(460)](a.id), e.betValue = a[n(453)], e[n(453)] = e[n(447)].add.text(t[n(500)] - 25, e[n(417)] / 2 + 2, "", {
				font: APP_FONT,
				fontSize: 30,
				fill: n(431),
				fontWeight: "700"
			}), e[n(453)][n(421)][n(485)](0, .5), e[n(450)](e[n(453)]), e[n(453)][n(460)](u[n(419)](a[n(453)])), e[n(496)] = e[n(447)][n(450)][n(418)](t.betConditionX - 30, e[n(417)] / 2 + 2, "", {
				font: APP_FONT,
				fontSize: 30,
				fill: n(431),
				fontWeight: n(443)
			}), e[n(496)][n(421)][n(485)](0, .5), e[n(450)](e[n(496)]), e[n(496)][n(460)](u[n(419)](a[n(453)] * CyberInstance.miniumMoneyCondition)), e.maxUsers = a[n(442)], e[n(435)](a.userCount, t[n(503)]), e[n(425)] = new Lt(e[n(447)], 0, 0, n(427), a[n(497)] != a[n(442)] ? "join" : n(477)), e[n(425)].x = o[n(483)] - e.joinButton.width - 12, e[n(425)].y = e.height / 2 - e[n(425)][n(417)] / 2, e[n(425)][n(440)](a.userCount != a[n(442)] ? CyberInstance.lang[n(466)] : CyberInstance.lang[n(448)], {
				font: APP_FONT,
				fontSize: 21,
				fill: n(484),
				fontWeight: 500
			}), e[n(425)][n(476)](e[n(429)], jc(e)), e[n(425)][n(481)] = a[n(497)] < e[n(442)], e[n(450)](e[n(425)]), e
		}
		return n = c, i = Ec, (r = [{
			key: "addHearts",
			value: function(t, e) {
				var n = Ec;
				this[n(486)] = [];
				for (var r = e - 84.5, i = 0; i < CyberInstance[n(442)]; i++) this[n(486)][i] = new(Phaser[n(502)])(this.game, r, 0, n(427), n(i <= t - 1 ? 491 : 458)), this[n(486)][i].y = this[n(417)] / 2 - this.hearts[i].height / 2, r += this[n(486)][i][n(483)] + 15, i <= this[n(442)] - 1 && this[n(450)](this.hearts[i])
			}
		}, {
			key: e(446),
			value: function(t) {
				for (var n = e, r = 0; r < this[n(486)][n(482)]; r++) this.hearts[r][n(464)](n(427), n(r <= t - 1 ? 491 : 458));
				this[n(425)] && (this[n(425)].loadTexture("lobbyScreen", t < this[n(442)] ? n(452) : n(477)), this[n(425)][n(440)](t < this[n(442)] ? CyberInstance[n(495)].JOIN : CyberInstance[n(495)][n(448)]), this[n(425)][n(481)] = t < this.maxUsers)
			}
		}, {
			key: e(490),
			value: function(t) {
				var n = e;
				this.name = t.id, this[n(469)][n(460)](this[n(489)]), this[n(470)] = t[n(453)], this[n(453)][n(460)](u[n(419)](t[n(453)])), this.betCondition[n(460)](u[n(419)](t[n(453)] * CyberInstance[n(433)])), this[n(442)] = t[n(479)];
				for (var r = 0; r < CyberInstance[n(442)]; r++) r > 1 && (this[n(473)](this[n(486)][r]), r <= this[n(442)] - 1 && this[n(450)](this[n(486)][r]));
				this.updateUserCount(t[n(497)])
			}
		}, {
			key: e(429),
			value: function() {
				var t = e;
				CyberInstance[t(456)] && (CyberInstance.paused = !1), CyberInstance[t(439)][t(424)]();
				try {
					ne[t(459)][t(487)](this[t(470)]) ? (this[t(447)][t(445)].getCurrentState()[t(438)](), ne[t(459)].joinRoom(this[t(489)])) : G.showNotEnoughMoneyToJoin(this[t(470)])
				} catch (t) {
					console.log(t)
				}
			}
		}, {
			key: e(422),
			value: function() {
				var t = e;
				1 == this[t(426)] && (this.callAll(t(422)), this[t(426)] = !1)
			}
		}, {
			key: "revive",
			value: function() {
				var t = e;
				0 == this[t(426)] && (this.callAll(t(455)), this[t(426)] = !0)
			}
		}, {
			key: e(417),
			get: function() {
				return 74
			}
		}]) && Pc(n[i(461)], r), Object.defineProperty(n, i(461), {
			writable: !1
		}), c
	}(Phaser[Oc(472)]);

	function Fc(t) {
		var e = Lc;
		return (Fc = e(436) == typeof Symbol && "symbol" == typeof Symbol[e(409)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(345)] === Symbol && t !== Symbol[n(398)] ? n(405) : typeof t
		})(t)
	}

	function Dc(t, e) {
		for (var n = Lc, r = 0; r < e[n(387)]; r++) {
			var i = e[r];
			i[n(400)] = i.enumerable || !1, i.configurable = !0, n(427) in i && (i[n(390)] = !0), Object[n(404)](t, i[n(349)], i)
		}
	}

	function Nc() {
		var t = ["openLoadingPopup", "onInputDown", "playButtonSound", "getPrototypeOf", "topWatchCounter", "value", "add", "vid_icon", "10604290hQqwOL", "price", "watchButton", "chip", "__proto__", "construct", "function", "addProducts", "getPurchasesAsync", "checkImageKey", "listView", "badgeText", "canvas", "lang", "inputEnabled", "4025544ARMakx", "315777TmfwrD", "icon_chip_large", "3251584REufyL", "IAP_POSITION", "instance", "valueOf", "video", "productList", "#ffffff", "products", "viewList", "replace", "Text", "cache", "height", "game", "getDeveloperPayload", "remove", "constructor", "circle_37x37", "restore", "world", "key", "2847244BMirOE", "24ajdWHg", "icon", "CLOSE", "click", "socket", "create", "centerX", "bold", "isAssetReady", "call", "this hasn't been initialised - super() hasn't been called", "1985652gEYPME", "20186BnuZFv", "homeScreen", "width", "onPurchaseProduct", "addItemToList", "deposit_button1", "badge", "coin", "inited", "ready", "visible", "isConsumed", "createView", "close", "addOnce", "#f5c78a", "events", "text", "Group", "sound", "5UqSRVj", "icon_close", "updateCoin", "8HfYUic", "length", "formatCoinWithCommas", "PAYMENT_SUCCESS", "writable", "ADS_NOT_READY", "apply", "deposit_button2", "sham", "#FFFFFF", "errorMsg", "object", "prototype", "Super expression must either be null or a function", "enumerable", "push", "anchor", "setTo", "defineProperty", "symbol", "bind", "then", "purchase", "iterator", "productID", "destroy", "loadTexture", "closeLoadingPopup", "addText", "NAP_CHIP", "onBuyClick", "homeScreenBG2", "deposit_button", "setText", "getVariable", "setPrototypeOf"];
		return (Nc = function() {
			return t
		})()
	}

	function Gc(t, e) {
		var n = Lc;
		return (Gc = Object[n(421)] ? Object[n(421)][n(406)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Lc(t, e) {
		var n = Nc();
		return (Lc = function(t, e) {
			return n[t -= 333]
		})(t, e)
	}

	function Mc(t, e) {
		var n = Lc;
		if (e && (Fc(e) === n(397) || typeof e === n(436))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Lc(361));
			return t
		}(t)
	}

	function Wc(t) {
		var e = Lc;
		return (Wc = Object[e(421)] ? Object.getPrototypeOf.bind() : function(t) {
			var n = e;
			return t[n(434)] || Object[n(425)](t)
		})(t)
	}! function(t, e) {
		for (var n = Lc, r = t();;) try {
			if (379137 == -parseInt(n(446)) / 1 + parseInt(n(363)) / 2 * (-parseInt(n(351)) / 3) + parseInt(n(350)) / 4 * (-parseInt(n(383)) / 5) + parseInt(n(445)) / 6 + parseInt(n(448)) / 7 * (-parseInt(n(386)) / 8) + parseInt(n(362)) / 9 + parseInt(n(430)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Nc);
	var zc = function(t) {
		var e = Lc;
		! function(t, e) {
			var n = Lc;
			if (typeof e !== n(436) && null !== e) throw new TypeError(n(399));
			t[n(398)] = Object[n(356)](e && e[n(398)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(404)](t, n(398), {
				writable: !1
			}), e && Gc(t, e)
		}(s, t);
		var n, r, i, a, o = (i = s, a = function() {
			var t = Lc;
			if ("undefined" == typeof Reflect || !Reflect[t(435)]) return !1;
			if (Reflect[t(435)][t(394)]) return !1;
			if (typeof Proxy === t(436)) return !0;
			try {
				return Boolean[t(398)][t(451)][t(360)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Lc,
				n = Wc(i);
			if (a) {
				var r = Wc(this)[e(345)];
				t = Reflect.construct(n, arguments, r)
			} else t = n[e(392)](this, arguments);
			return Mc(this, t)
		});

		function s(t) {
			var e = Lc;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, s), o[e(360)](this, t)
		}
		return n = s, (r = [{
			key: e(359),
			value: function() {
				var t = e;
				return this[t(342)][t(340)][t(439)](t(417))
			}
		}, {
			key: "onBuyClick",
			value: function(t) {
				var n = e;
				if (t[n(410)] != n(333)) this[n(422)](), ft[n(450)][n(408)](t[n(410)] + "", CyberInstance[n(343)]());
				else {
					if (!Tt.instance[n(372)]) return void new G(game, {
						text: CyberInstance[n(443)][n(391)],
						buttonText: CyberInstance[n(443)][n(353)],
						hideCloseButton: !0
					});
					Tt[n(450)].topWatchCounter < 3 && Tt[n(450)].show(Tt[n(449)])
				}
			}
		}, {
			key: e(366),
			value: function(t) {
				var n = e;
				if (this[n(413)](), t.error) new G(game, {
					text: t[n(396)],
					buttonText: CyberInstance[n(443)].CLOSE,
					hideCloseButton: !0
				});
				else {
					var r = CyberInstance[n(443)][n(389)][n(338)]("%s", u[n(388)](t[n(370)]));
					new G(game, {
						text: r,
						buttonText: CyberInstance[n(443)][n(353)],
						hideCloseButton: !0
					})
				}
			}
		}, {
			key: "restore",
			value: function(t) {
				var n = e;
				this.openLoadingPopup(), ft[n(450)].verifyPayment(t)
			}
		}, {
			key: "onAdReward",
			value: function() {
				var t = e;
				Tt[t(450)][t(426)] >= 3 ? (this.badge[t(373)] = !1, this[t(369)][t(441)][t(373)] = !1, this[t(432)][t(412)](t(364), t(393))) : this.badge.badgeText[t(419)](3 - Tt[t(450)][t(426)])
			}
		}, {
			key: e(385),
			value: function(t) {
				var n = e;
				1 == this.visible && this.coin && this.coin[n(419)](u.formatCoinWithCommas(t))
			}
		}, {
			key: e(375),
			value: function() {
				var t = e,
					n = this,
					r = this.create(0, 0, t(417));
				r.width = this[t(342)][t(365)], r[t(341)] = this.game[t(341)], r.inputEnabled = !0;
				var i = this[t(356)](0, 15, t(364), t(447));
				i.x = this[t(342)][t(365)] / 2 - i[t(365)] / 2;
				var a = this[t(342)][t(428)][t(380)](this[t(342)][t(348)][t(357)], 25, CyberInstance.lang[t(415)], {
					font: APP_FONT,
					fontWeight: t(358),
					fontSize: 35,
					fill: t(395)
				});
				this[t(428)](a), a.x = i.x - a[t(442)][t(365)] - 10, this[t(370)] = this[t(342)].add[t(380)](i.x + i[t(365)] + 10, 34, u.formatCoinWithCommas(CyberInstance[t(355)].mySelf[t(420)](t(370)).value), {
					font: APP_FONT,
					fontWeight: "normal",
					fontSize: 20,
					fill: "#f5c78a"
				}), this[t(428)](this.coin);
				var o = this[t(356)](0, 0, t(364), t(384));
				o.x = this.game[t(365)] - o[t(365)] - 15, o.y = 15, o.inputEnabled = !0, o[t(379)].onInputDown[t(377)](CyberInstance[t(382)][t(424)], CyberInstance[t(382)]), o[t(379)][t(423)][t(377)](this[t(376)], this), ft.instance[t(366)].add(this.onPurchaseProduct, this), this[t(437)](ft.instance[t(336)]), ft[t(450)].inited && FBInstant.payments[t(438)]()[t(407)]((function(e) {
					var r = t;
					if (e[r(387)] > 0)
						for (var i = 0; i < e[r(387)]; i++)
							if (0 == e[i][r(374)]) {
								n[r(347)](e[i]);
								break
							}
				}))
			}
		}, {
			key: e(437),
			value: function(t) {
				var n = e;
				if (this[n(440)] = new Br({
						x: this[n(342)][n(365)] / 2 - 515,
						y: 110,
						column: 4,
						width: 1030,
						height: this.game.height - 140,
						rowHeight: 217,
						columnWidth: 220,
						row: 1,
						leftDistance: 0,
						rightDistance: 0,
						distanceBetweenColumns: 50,
						distanceBetweenRows: 30,
						direction: "y"
					}, this[n(342)]), this.add(this[n(440)]), this[n(334)] = [], ft[n(450)][n(371)])
					for (var r in t) this[n(334)][n(401)](this[n(367)](t[r]));
				this[n(440)][n(337)] = this.productList
			}
		}, {
			key: "addItemToList",
			value: function(t) {
				var n = e,
					r = new(Phaser[n(381)])(this.game, 0, 0);
				r.create(0, 0, n(364), "iap_box");
				var i = r[n(356)](110, 98.5, n(364), t[n(352)]);
				i[n(402)][n(403)](.5), t.productID == n(333) && (i.x = i.x - 15, r[n(356)](125, 98.5, n(364), n(429))[n(402)].setTo(.5));
				var a = new Phaser.Text(this[n(342)], 110, 25, u.formatCoinWithCommas(t[n(433)]), {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 20,
					fill: n(378)
				});
				a.anchor[n(403)](.5, 0), r[n(428)](a);
				var o = new Lt(this[n(342)], 0, 0, n(364), "video" != t[n(410)] ? n(418) : n(368));
				if (o[n(414)](t[n(431)], {
						font: APP_FONT,
						fontWeight: 500,
						fontSize: 22,
						fill: t[n(410)] != n(333) ? "#591e01" : n(335)
					}), o.x = 110 - o[n(365)] / 2, o.y = 217 - o[n(341)] - 25, o[n(444)] = !0, o.productID = t[n(410)], o[n(354)](this[n(416)], this), r.add(o), t.productID == n(333)) {
					var s = r[n(356)](0, 98.5, "homeScreen", n(346));
					s.scale.setTo(.8), s.x = o.x + o[n(365)] - s[n(365)] / 2 - 5, s.y = o.y - s[n(341)] / 2 + 5;
					var c = new(Phaser[n(339)])(this[n(342)], s.x + s.width / 2, s.y + s.height / 2 + 2, 3 - Tt.instance.topWatchCounter, {
						font: APP_FONT,
						fontWeight: 400,
						fontSize: 18,
						fill: "#ffffff"
					});
					c[n(402)][n(403)](.5), r[n(428)](c), this[n(369)] = s, this[n(369)][n(441)] = c, this[n(432)] = o, (Tt[n(450)][n(426)] >= 3 || !Tt[n(450)][n(372)]) && (this[n(369)][n(373)] = !1, this.badge[n(441)][n(373)] = !1, this[n(432)][n(412)](n(364), n(393)))
				}
				return r
			}
		}, {
			key: "close",
			value: function() {
				var t = e;
				ft[t(450)][t(366)][t(344)](this[t(366)], this), this[t(413)](), this[t(411)]()
			}
		}]) && Dc(n[Lc(398)], r), Object.defineProperty(n, "prototype", {
			writable: !1
		}), s
	}(P);

	function Uc() {
		var t = ["bind", "240QiQqHD", "setText", "getCoin", "#ffffff", "handleOutOfMoney", "click", "setTo", "sendSubscribeRequest", "addRoomToScroller", "angle", "listHeader", "onGroupChangeClick", "iterator", "shutdown", "inputEnabled", "instance", "3615774lOtnEk", "lobbyScreen", "createGamePopup", "isFull", "apply", "8425120EKCurp", "reset", "enumerable", "CREATE_ROOM", "this hasn't been initialised - super() hasn't been called", "avatar_bg", "loadingText", "controller", "roomGroup", "time", "creategame", "sort", "sectionMap", "openLoadingPopup", "Cannot call a class as a function", "quickJoinBtn", "lang", "bet", "removeAll", "LobbyScreen", "function", "open", "MASTER", "image", "playButtonSound", "visible", "PLAYER_COUNT", "closeLoadingPopup", "state", "atlas/lobbyScreen/lobbyScreen.png", "cache", "profileCoin", "professionalButton", "TOI_THIEU", "anchor", "homeScreen", "symbol", "existing", "masterButton", "destroy", "world", "4287190DbmmST", "currentRoomGroup", "formatCoinWithCommas", "bringToTop", "loadTexture", "#200403", "remove", "homeBtn", "construct", "height", "add", "maxUsers", "ROOM", "undefined", "getVariable", "preloadIcon", "addAndSortRoom", "listView", "roomGroupActive", "onInputDown", "updateProfileCoin", "log", "eventUpdater", "__proto__", "applyTexture", "events", "splice", "betConditionX", "screenReady", "avatarKey", "10396736rXPHOH", "atlas", "width", "load", "inited", "PLAY_NOW", "close", "length", "group", "addText", "addOnce", "defineProperty", "homeScreenBG1", "preloadBg", "onQuickPlayRequest", "userCount", "master", "centerX", "roomList", "betX", "centerY", "profileGroup", "hasOwnProperty", "configurable", "groupId", "Super expression must either be null or a function", "toUpperCase", "BET", "no_avatar", "prototype", "videoPopup", "game", "get", "start", "Rectangle", "showNotEnoughMoneyToPlay", "STATUS", "#fbafb3", "#FFFFFF", "getPrototypeOf", "amateurButton", "updateUserCount", "beginnerButton", "userCountX", "key", "TAP_SU", "getOwnPropertyDescriptor", "checkImageKey", "iapPopup", "preload", "sound", "value", "indexOf", "CHUYEN_NGHIEP", "515994YbnuYC", "createGameBtn", "Derived constructors may only return object or undefined", "getDisplayName", "sendFindGameRequest", "push", "alphaMask", "quickplay", "removeRoomFromList", "updateRoomList", "1WYOfpU", "canPlay", "floor", "paused", "amateur", "openIAP", "text", "valueOf", "create", "multiGroupDisabled", "beginner", "atlas/lobbyScreen/lobbyScreen.json", "avatar", "28516365rIptiv", "home", "bitmapData", "getByName", "8916FFTUBa", "make", "setPrototypeOf", "gameGroup", "call", "sham", "professional", "stop"];
		return (Uc = function() {
			return t
		})()
	}

	function Vc(t) {
		var e = qc;
		return (Vc = "function" == typeof Symbol && e(417) == typeof Symbol[e(372)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(401) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(299)] ? n(417) : typeof t
		})(t)
	}

	function Hc(t, e) {
		for (var n = qc, r = 0; r < e[n(277)]; r++) {
			var i = e[r];
			i[n(383)] = i[n(383)] || !1, i[n(293)] = !0, n(321) in i && (i.writable = !0), Object.defineProperty(t, i[n(314)], i)
		}
	}

	function Xc() {
		var t = qc;
		return Xc = typeof Reflect !== t(435) && Reflect[t(302)] ? Reflect[t(302)][t(359)]() : function(e, n, r) {
			var i = t,
				a = Kc(e, n);
			if (a) {
				var o = Object[i(316)](a, n);
				return o[i(302)] ? o[i(302)][i(355)](arguments[i(277)] < 3 ? e : r) : o[i(321)]
			}
		}, Xc[t(380)](this, arguments)
	}

	function qc(t, e) {
		var n = Uc();
		return (qc = function(t, e) {
			return n[t -= 277]
		})(t, e)
	}

	function Kc(t, e) {
		for (var n = qc; !Object[n(299)][n(292)].call(t, e) && null !== (t = Qc(t)););
		return t
	}

	function Yc(t, e) {
		var n = qc;
		return (Yc = Object.setPrototypeOf ? Object[n(353)][n(359)]() : function(t, e) {
			return t[n(445)] = e, t
		})(t, e)
	}

	function Jc(t, e) {
		var n = qc;
		if (e && ("object" === Vc(e) || typeof e === n(401))) return e;
		if (void 0 !== e) throw new TypeError(n(326));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(qc(385));
			return t
		}(t)
	}

	function Qc(t) {
		var e = qc;
		return (Qc = Object[e(353)] ? Object.getPrototypeOf[e(359)]() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(309)](t)
		})(t)
	}! function(t, e) {
		for (var n = qc, r = t();;) try {
			if (811605 == -parseInt(n(334)) / 1 * (-parseInt(n(324)) / 2) + -parseInt(n(360)) / 3 * (-parseInt(n(351)) / 4) + -parseInt(n(422)) / 5 + parseInt(n(376)) / 6 + -parseInt(n(452)) / 7 + -parseInt(n(381)) / 8 + parseInt(n(347)) / 9) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Uc);
	const Zc = function(t) {
		var e = qc;
		! function(t, e) {
			var n = qc;
			if ("function" != typeof e && null !== e) throw new TypeError(n(295));
			t[n(299)] = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(281)](t, n(299), {
				writable: !1
			}), e && Yc(t, e)
		}(h, t);
		var n, r, i, o, s, c = (o = h, s = function() {
			var t = qc;
			if (typeof Reflect === t(435) || !Reflect[t(430)]) return !1;
			if (Reflect[t(430)][t(356)]) return !1;
			if (typeof Proxy === t(401)) return !0;
			try {
				return Boolean[t(299)][t(341)][t(355)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = qc,
				n = Qc(o);
			if (s) {
				var r = Qc(this).constructor;
				t = Reflect[e(430)](n, arguments, r)
			} else t = n[e(380)](this, arguments);
			return Jc(this, t)
		});

		function h() {
			var t = qc;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(qc(395))
			}(this, h), c[t(355)](this)
		}
		return n = h, i = qc, (r = [{
			key: "init",
			value: function() {
				var t = qc;
				Xc(Qc(h[t(299)]), "init", this)[t(355)](this), this[t(388)] || (this[t(388)] = new kc(this)), this[t(423)] || (this[t(423)] = "beginner"), CyberGlobalData[t(377)] = t(400), this.roomList = []
			}
		}, {
			key: e(319),
			value: function() {
				var t = e,
					n = this,
					r = this[t(432)].image(0, 0, t(282));
				if (r[t(454)] = this.game[t(454)], r[t(431)] = this[t(301)][t(431)], !this[t(301)][t(411)][t(317)]("lobbyScreen")) {
					a[t(453)](t(377), t(410), t(345)), this[t(437)] = this[t(432)][t(404)](this[t(301)][t(421)][t(287)], this.game[t(421)][t(290)], t(283)), this[t(437)][t(415)][t(366)](.5);
					var i = this.game.time[t(342)](!0);
					i.loop(30, (function() {
						var e = t;
						n[e(437)][e(369)] += 10, 1 == n[e(450)] && (n[e(437)][e(420)](), i[e(358)](!0), i[e(420)]())
					})), i[t(303)]()
				}
			}
		}, {
			key: e(342),
			value: function() {
				var t = e,
					n = this,
					r = this[t(301)].add.group();
				this[t(396)] = new Lt(this[t(301)], 0, 12, "lobbyScreen", t(331)), this[t(396)].addText(CyberInstance[t(397)][t(457)], {
					font: APP_FONT,
					fontSize: 21,
					fill: t(427),
					fontWeight: 700
				}), this[t(396)].click(this[t(284)], this), r[t(432)](this[t(396)]), this.createGameBtn = new Lt(this[t(301)], 0, 12, "lobbyScreen", t(391)), this[t(325)][t(279)](CyberInstance.lang[t(384)][t(296)](), {
					font: APP_FONT,
					fontSize: 21,
					fill: "#200403",
					fontWeight: 700
				}), this.createGameBtn[t(365)](this.openCreateGamePopup, this), r[t(432)](this.createGameBtn), this[t(396)].x = this[t(301)][t(454)] / 2 - (this[t(396)][t(454)] + this[t(325)][t(454)] + 12) / 2, this[t(325)].x = this[t(396)].x + this[t(396)][t(454)] + 12, this[t(429)] = r[t(342)](0, 0, t(377), t(348)), this[t(429)].x = this[t(301)].width - this.homeBtn[t(454)] - 15, this.homeBtn[t(374)] = !0, this[t(429)][t(447)][t(441)][t(280)]((function() {
					var e = t;
					CyberInstance[e(320)][e(405)](), this[e(301)][e(409)][e(303)]("HomeScreen", !0, !1)
				}), this);
				var i = r.create(0, this.quickJoinBtn.y + this[t(396)][t(431)] + 12, t(377), "header");
				i[t(454)] = this.game[t(454)] - 60, i[t(431)] = 52, i.x = this[t(301)][t(454)] / 2 - i[t(454)] / 2;
				var o = this[t(301)].add[t(340)](i.x + 65, i.y + i.height / 2 + 1, "", {
					font: APP_FONT,
					fontSize: 21,
					fill: t(307),
					fontWeight: 400
				});
				o[t(415)][t(366)](.5), r[t(432)](o), o[t(361)](CyberInstance.lang[t(434)]);
				var s = this[t(301)][t(432)].text(i.x + 200, i.y + i[t(431)] / 2 + 1, "", {
					font: APP_FONT,
					fontSize: 21,
					fill: t(307),
					fontWeight: 400
				});
				s.anchor.setTo(.5), r[t(432)](s), s[t(361)](CyberInstance[t(397)][t(297)]);
				var c = this.game.add[t(340)](i.x + 414, i.y + i[t(431)] / 2 + 1, "", {
					font: APP_FONT,
					fontSize: 21,
					fill: t(307),
					fontWeight: 400
				});
				c[t(415)][t(366)](.5), r[t(432)](c), c[t(361)](CyberInstance[t(397)][t(407)]);
				var h = this[t(301)].add[t(340)](i.x + 705, i.y + i[t(431)] / 2 + 1, "", {
					font: APP_FONT,
					fontSize: 21,
					fill: t(307),
					fontWeight: 400
				});
				h.anchor[t(366)](.5), r[t(432)](h), h[t(361)](CyberInstance.lang[t(414)]);
				var f = this[t(301)][t(432)].text(i.x + i[t(454)] - 135, i.y + i[t(431)] / 2 + 1, "", {
					font: APP_FONT,
					fontSize: 21,
					fill: "#fbafb3",
					fontWeight: 400
				});
				f[t(415)][t(366)](0, .5), r[t(432)](f), f.setText(CyberInstance.lang[t(306)]);
				var l = i.width - 336;
				this.betX = 150 + Math.floor(30 * l / 100) / 2, s.x = i.x + this[t(289)], this[t(313)] = 150 + Math[t(336)](30 * l / 100) + Math.floor(40 * l / 100) / 2, c.x = i.x + this[t(313)], this[t(449)] = 150 + Math.floor(30 * l / 100) + Math.floor(40 * l / 100) + Math[t(336)](30 * l / 100) / 2, h.x = i.x + this.betConditionX;
				var p = CyberGlobalData.multiGroupDisabled ? 6 : 5,
					y = 74 * p + (p - 1) * p,
					d = this.game[t(432)][t(278)]();
				if (this[t(439)] = new kr(this[t(301)], d, new(Phaser[t(304)])(0, 0, this.game.width, y), {
						direction: "y",
						padding: 5,
						searchForClicks: !0
					}), d.x = 0, d.y = i.y + i[t(431)] + 5, !CyberGlobalData[t(343)]) {
					this[t(312)] = new Lt(this.game, 600, 12, t(377), this.currentRoomGroup == t(344) ? t(440) : t(389)), this.beginnerButton[t(354)] = "beginner", this[t(312)].y = this[t(301)].height - this.beginnerButton[t(431)] - 18, this[t(312)].x = this[t(301)].width - 30 - 4 * this.beginnerButton.width, this[t(312)][t(279)](CyberInstance[t(397)][t(315)], {
						font: APP_FONT,
						fontSize: 21,
						fill: t(363),
						fontWeight: 400
					}), this[t(312)][t(365)](this.onGroupChangeClick, this), this[t(301)][t(432)][t(418)](this[t(312)]), this[t(310)] = new Lt(this[t(301)], 600, this[t(312)].y, t(377), this.currentRoomGroup == t(338) ? t(440) : t(389)), this.amateurButton[t(354)] = t(338), this[t(310)].x = this.beginnerButton.x + this[t(312)].width, this[t(310)][t(279)](CyberInstance[t(397)].NGHIEP_DU, {
						font: APP_FONT,
						fontSize: 21,
						fill: t(363),
						fontWeight: 400
					}), this[t(310)][t(365)](this.onGroupChangeClick, this), this[t(301)][t(432)][t(418)](this[t(310)]), this[t(413)] = new Lt(this.game, 600, this[t(310)].y, t(377), this.currentRoomGroup == t(357) ? "roomGroupActive" : t(389)), this.professionalButton[t(354)] = t(357), this[t(413)].x = this[t(310)].x + this[t(310)].width - 1, this[t(413)][t(279)](CyberInstance.lang[t(323)], {
						font: APP_FONT,
						fontSize: 21,
						fill: t(363),
						fontWeight: 400
					}), this[t(413)][t(365)](this[t(371)], this), this[t(301)][t(432)][t(418)](this[t(413)]), this[t(419)] = new Lt(this[t(301)], 600, this[t(413)].y, t(377), "master" == this[t(423)] ? t(440) : "roomGroup"), this[t(419)][t(354)] = t(286), this[t(419)].x = this[t(413)].x + this.professionalButton[t(454)] - 1, this[t(419)].addText(CyberInstance[t(397)][t(403)], {
						font: APP_FONT,
						fontSize: 21,
						fill: "#ffffff",
						fontWeight: 400
					}), this[t(419)][t(365)](this[t(371)], this), this.game[t(432)].existing(this[t(419)]), this[t(291)] = this[t(301)][t(432)].group();
					var v = this[t(291)][t(342)](30, 0, t(377), t(386));
					v.y = this[t(301)][t(431)] - v[t(431)] - 5;
					var b = this[t(301)][t(432)][t(340)](v.x + 105, v.y + 15, ne[t(375)][t(327)](), {
						font: APP_FONT,
						fontSize: 26,
						fill: t(307),
						fontWeight: 400
					});
					this[t(291)][t(432)](b), b[t(361)](ne[t(375)][t(327)]()), this[t(412)] = this[t(301)][t(432)].text(b.x, b.y + 35, "", {
						font: APP_FONT,
						fontSize: 24,
						fill: "#f5c78a",
						fontWeight: 400
					}), this[t(291)][t(432)](this.profileCoin), this[t(412)][t(361)](u[t(424)](ne[t(375)][t(362)]())), this[t(451)] = t(346) + ne[t(375)].getGuserid(), this[t(301)][t(411)][t(317)](this[t(451)]) ? (this[t(346)] = this[t(301)][t(352)][t(404)](15, 15, this[t(451)]), this[t(446)](88)) : (this[t(346)] = this[t(301)][t(352)][t(404)](15, 15, "homeScreen", t(298)), this.avatar[t(454)] = 88, this.avatar[t(431)] = 88, this.game[t(455)].image(this.avatarKey, CyberInstance[t(346)]), this[t(301)][t(455)][t(303)]()), this.avatar.x = v.x + 2, this[t(346)].y = v.y + 2, this[t(291)][t(432)](this.avatar)
				}
				this[t(301)].world[t(425)](r), this[t(370)] = r, this[t(378)] = new fo(this[t(301)], {
					friendMode: !1
				}), this[t(378)].close(), this.game.time[t(447)].add(100, (function() {
					a[t(319)]()
				})), this[t(387)] = this.game[t(432)].text(this.game[t(454)] / 2, this[t(301)][t(431)] / 2, CyberInstance[t(397)].LOADING_LOBBY_DATA.toUpperCase(), {
					font: APP_FONT,
					fontSize: 30,
					fill: t(308),
					fontWeight: 500
				}), this[t(387)][t(415)][t(366)](.5), this[t(370)][t(406)] = !1, this.quickJoinBtn[t(406)] = !1, this.createGameBtn[t(406)] = !1, this[t(429)][t(406)] = !1, !CyberGlobalData[t(343)] && (this[t(312)].visible = !1, this[t(310)][t(406)] = !1, this[t(413)][t(406)] = !1, this[t(419)][t(406)] = !1, this[t(291)].visible = !1), this[t(301)].time[t(447)].add(300, (function() {
					var e = t;
					n[e(450)] = !0, n.controller[e(367)](n[e(423)])
				})), this.game[t(390)][t(447)][t(432)](600, (function() {
					n[t(364)]()
				}))
			}
		}, {
			key: e(333),
			value: function(t) {
				var n = e;
				0 == this[n(370)][n(406)] && (this.game.time.events[n(428)](this[n(444)]), this[n(370)].visible = !0, this.quickJoinBtn[n(406)] = !0, this[n(325)][n(406)] = !0, this.homeBtn.visible = !0, !CyberGlobalData[n(343)] && (this[n(312)][n(406)] = !0, this.amateurButton[n(406)] = !0, this[n(413)][n(406)] = !0, this[n(419)].visible = !0, this.profileGroup[n(406)] = !0), this[n(387)].destroy());
				try {
					if (this[n(288)][n(277)] = 0, t[n(277)] > 0) {
						this[n(288)] = t;
						for (var r = 0; r < this[n(288)].length; r++) this[n(368)](this[n(288)][r])
					}
					this.closeLoadingPopup()
				} catch (t) {
					console[n(443)](t), this[n(408)]()
				}
			}
		}, {
			key: "addAndSortRoom",
			value: function(t) {
				var n = e; - 1 != CyberInstance[n(393)][n(302)](this[n(423)])[n(322)](t.groupId) && (this[n(288)][n(329)](t), this[n(368)](t))
			}
		}, {
			key: e(368),
			value: function(t) {
				this[e(439)].add(new Ac(this, 0, 0, t))
			}
		}, {
			key: e(311),
			value: function(t, n) {
				var r = e,
					i = this.listView.grp[r(350)](t.id);
				if (i) {
					for (var a = 0; a < this.roomList[r(277)]; a++)
						if (this[r(288)][a].id == t.id) {
							this.roomList[a][r(285)] = n, this[r(288)][a][r(379)] = n == t.maxUsers ? 1 : 0;
							break
						} i[r(311)](n)
				} else {
					if (-1 == CyberInstance[r(393)][r(302)](this.currentRoomGroup)[r(322)](t[r(294)])) return;
					t.userCount < t[r(433)] && this[r(438)]({
						id: t.id,
						bet: t[r(436)](r(398))[r(321)],
						userCount: t.userCount > 0 ? t[r(285)] : 1,
						maxUsers: t[r(433)],
						isFull: t.userCount == t[r(433)] ? 1 : 0,
						groupId: t[r(294)]
					})
				}
			}
		}, {
			key: e(332),
			value: function(t) {
				var n = e;
				if (-1 != CyberInstance[n(393)].get(this[n(423)])[n(322)](t[n(294)])) {
					for (var r = 0; r < this.roomList[n(277)]; r++)
						if (this[n(288)][r].id == t.id) {
							this[n(288)][n(448)](r, 1);
							break
						} for (this.roomList[n(392)]((function(t, e) {
							var r = n;
							return t.isFull - e[r(379)]
						})), this[n(439)][n(399)](), r = 0; r < this[n(288)][n(277)]; r++) this[n(368)](this[n(288)][r])
				}
			}
		}, {
			key: e(371),
			value: function(t) {
				var n = e,
					r = this;
				t[n(354)] != this[n(423)] && (this[n(439)][n(399)](), this.listView[n(382)](), this[n(394)]({
					closeTimer: 15e3
				}), this[n(423)] = t[n(354)], t[n(354)] == n(344) ? (this[n(312)][n(426)]("lobbyScreen", "roomGroupActive"), this.amateurButton[n(426)](n(377), n(389)), this[n(413)][n(426)](n(377), n(389)), this[n(419)].loadTexture(n(377), n(389))) : t.gameGroup == n(338) ? (this[n(312)].loadTexture(n(377), n(389)), this[n(310)].loadTexture(n(377), "roomGroupActive"), this[n(413)][n(426)]("lobbyScreen", n(389)), this[n(419)][n(426)](n(377), "roomGroup")) : t[n(354)] == n(357) ? (this[n(312)][n(426)](n(377), n(389)), this.amateurButton[n(426)](n(377), n(389)), this[n(413)].loadTexture(n(377), n(440)), this[n(419)][n(426)](n(377), "roomGroup")) : "master" == t[n(354)] && (this[n(312)][n(426)](n(377), n(389)), this.amateurButton.loadTexture("lobbyScreen", n(389)), this[n(413)][n(426)](n(377), n(389)), this[n(419)][n(426)](n(377), n(440))), this[n(301)].time[n(447)].add(300, (function() {
					var e = n;
					r[e(388)][e(367)](t[e(354)])
				})))
			}
		}, {
			key: "onQuickPlayRequest",
			value: function() {
				var t = e;
				CyberInstance[t(337)] && (CyberInstance[t(337)] = !1), ne[t(375)][t(335)]() ? (this[t(394)](), ne[t(375)][t(328)]()) : G[t(305)]()
			}
		}, {
			key: "openCreateGamePopup",
			value: function() {
				var t = e;
				this[t(378)][t(402)]()
			}
		}, {
			key: e(339),
			value: function() {
				var t = e;
				this.createGamePopup && this[t(378)][t(458)](), ft.instance[t(456)] ? this[t(318)] = new zc(this[t(301)]) : Tt[t(375)].inited && (this[t(300)] ? this.videoPopup[t(402)]() : this[t(300)] = new Mi(game))
			}
		}, {
			key: e(446),
			value: function(t) {
				var n = e,
					r = new(Phaser[n(304)])(0, 0, t, t),
					i = game[n(352)][n(404)](0, 0, n(416), n(298));
				i[n(454)] = t, i[n(431)] = t;
				var a = game[n(352)][n(349)]();
				a[n(455)](i), i[n(420)]();
				var o = this.game.make[n(349)](t, t);
				o[n(330)](this[n(451)], a, r), this.avatar[n(426)](o), this[n(346)][n(454)] = t, this[n(346)][n(431)] = t
			}
		}, {
			key: e(442),
			value: function(t) {
				var n = e;
				this[n(412)] && this[n(412)][n(361)](u[n(424)](t))
			}
		}, {
			key: e(373),
			value: function() {
				var t = e;
				Xc(Qc(h[t(299)]), t(373), this).call(this), this[t(439)][t(420)](), this[t(300)] = null, this[t(288)] = null, this[t(439)] = null
			}
		}]) && Hc(n[i(299)], r), Object[i(281)](n, i(299), {
			writable: !1
		}), h
	}(le);

	function $c(t) {
		var e = eu;
		return ($c = e(218) == typeof Symbol && e(234) == typeof Symbol[e(211)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(218) == typeof Symbol && t[n(154)] === Symbol && t !== Symbol[n(214)] ? n(234) : typeof t
		})(t)
	}

	function tu() {
		var t = ["130730IFJDdZ", "symbol", " ngày", "getAvatarItems", "game", "constructor", "quantity", "player", "#f5c78a", "setPrototypeOf", "shop.setDefaultAvatar", "defaultAvatarId", "__proto__", "valueOf", "#f5a3b1", "type", "make", "Kho đồ", "Bạn đã nhận được khung Avatar ", "setDataAsync", "setTo", "create", "1835037jpdOOC", "close_icon", "BackpackScreen", "8842995CYoJmc", "defineProperty", "Dùng ngay", "start", "call", "3768414KqFBqD", "text", "inputEnabled", "shopScreen", "configurable", "clickOnce", "addCloseButton", "Text", "createTransition", "#692700", "height", "addContent", "28218UdlwiQ", "3896JiucIX", "apply", "9023JzKHRc", "construct", "AVATAR", "addText", "getGiftItems", "ExtensionRequest", "Cannot call a class as a function", "setText", "name", "addOnce", "enumerable", "undefined", "length", "scale", "key", "anchor", "green_button", "iterator", "state", "duration", "prototype", "addOverlay", "onInputDown", "2582400wUoAgX", "function", "buy_gift_button", "object", "value", "GIFT", "background", "width", "addChild", "getPrototypeOf", "sham", "hideTransition", "4ErCSoG", "bind", "close", "sound"];
		return (tu = function() {
			return t
		})()
	}

	function eu(t, e) {
		var n = tu();
		return (eu = function(t, e) {
			return n[t -= 152]
		})(t, e)
	}

	function nu(t, e) {
		for (var n = eu, r = 0; r < e[n(206)]; r++) {
			var i = e[r];
			i[n(204)] = i[n(204)] || !1, i[n(183)] = !0, n(221) in i && (i.writable = !0), Object[n(175)](t, i[n(208)], i)
		}
	}

	function ru(t, e) {
		var n = eu;
		return (ru = Object[n(158)] ? Object[n(158)][n(230)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function iu(t, e) {
		var n = eu;
		if (e && ($c(e) === n(220) || typeof e === n(218))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}(t)
	}

	function au(t) {
		var e = eu;
		return (au = Object[e(158)] ? Object[e(226)][e(230)]() : function(t) {
			var n = e;
			return t[n(161)] || Object[n(226)](t)
		})(t)
	}! function(t, e) {
		for (var n = eu, r = t();;) try {
			if (337468 == -parseInt(n(229)) / 1 * (-parseInt(n(191)) / 2) + -parseInt(n(171)) / 3 + parseInt(n(217)) / 4 + -parseInt(n(233)) / 5 + parseInt(n(179)) / 6 + -parseInt(n(194)) / 7 * (-parseInt(n(192)) / 8) + -parseInt(n(174)) / 9) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(tu);
	const ou = function(t) {
		var e = eu;
		! function(t, e) {
			var n = eu;
			if (typeof e !== n(218) && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(214)] = Object[n(170)](e && e[n(214)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, n(214), {
				writable: !1
			}), e && ru(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = eu;
			if (typeof Reflect === t(205) || !Reflect.construct) return !1;
			if (Reflect.construct[t(227)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(214)][t(162)][t(178)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = eu,
				n = au(a);
			if (o) {
				var r = au(this)[e(154)];
				t = Reflect[e(195)](n, arguments, r)
			} else t = n[e(193)](this, arguments);
			return iu(this, t)
		});

		function c(t, e) {
			var n, r = eu;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(eu(200))
			}(this, c), (n = s[r(178)](this, t, e))[r(215)](.85), n.addBackground(r(182), "buyresultbg"), n[r(190)](e), n.addCloseButton(), !0 !== e[r(228)] && n[r(187)](), n
		}
		return n = c, i = eu, (r = [{
			key: "onAction",
			value: function() {
				var t = eu;
				CyberInstance.sound.playButtonSound(), this[t(231)]()
			}
		}, {
			key: e(190),
			value: function(t) {
				var n, r = e,
					i = this;
				t[r(164)] == r(222) ? n = et[r(198)]()[t.id + ""] : t[r(164)] == r(196) && (n = et[r(152)]()[t.id + ""]);
				var a = this.game[r(165)].sprite(0, 0, r(182), "gift_item"),
					o = this[r(153)].make[r(180)](a[r(224)] / 2, 11, n[r(202)], {
						font: APP_FONT,
						fontWeight: 400,
						fontSize: 19,
						fill: r(163)
					});
				o.anchor[r(169)](.5, 0), a.addChild(o), o[r(201)](n[r(202)]);
				var s = this[r(153)][r(165)].image(a[r(224)] / 2, a.height / 2 - 10, "shopScreen", n.icon);
				15 == n.id ? s[r(207)][r(169)](.7) : 17 == n.id && s.scale[r(169)](.85), s[r(209)][r(169)](.5), a.addChild(s);
				var c, u = new(Phaser[r(186)])(this[r(153)], a[r(224)] / 2, 164, "", {
					font: APP_FONT,
					fontWeight: 500,
					fontSize: 18,
					fill: r(157)
				});
				u[r(209)].setTo(.5, 0), a[r(225)](u), t[r(164)] == r(222) ? u[r(201)]("x" + t[r(155)]) : u[r(201)](t[r(213)] + r(235)), a.x = this.background[r(224)] / 2 - a.width / 2 + 17, a.y = this[r(223)][r(189)] / 2 - a[r(189)] / 2, this[r(223)][r(225)](a), t[r(164)] == r(222) ? c = "Bạn đã nhận được quà tặng " + n[r(202)] + "!" : "AVATAR" == t[r(164)] && (c = r(167) + n.name + "!");
				var h = this[r(153)][r(165)].text(this.background[r(224)] / 2 + 17, a.y + a.height + 20, c, {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 22,
					fill: "#fff6dc"
				});
				h[r(209)].setTo(.5, 0), this[r(223)][r(225)](h), h[r(201)](c);
				var f = new Lt(this.game, 410, h.y + 50, r(182), r(210));
				if (f[r(197)](r(166)), f[r(184)]((function() {
						var t = r;
						i[t(153)][t(212)][t(177)](t(173), !0, !1)
					})), this[r(223)][r(225)](f), "GIFT" == t[r(164)]) f.x = this[r(223)][r(224)] / 2 + 17 - f[r(224)] / 2;
				else {
					var l = new Lt(this[r(153)], 121, h.y + 50, r(182), r(219));
					l[r(197)](r(176), {
						font: APP_FONT,
						fill: r(188),
						fontWeight: 400,
						fontSize: 24
					}), l.clickOnce((function() {
						var t = r;
						FBInstant[t(156)][t(168)]({
							avatar: n.id
						}).then((function() {
							var e = t;
							CyberGlobalData[e(160)] = n.id;
							var r = new SFS2X.SFSObject;
							r.putInt("id", CyberGlobalData[e(160)]), CyberInstance.socket.send(new(SFS2X[e(199)])(e(159), r))
						})), i[t(231)]()
					})), this[r(223)][r(225)](l)
				}
			}
		}, {
			key: e(185),
			value: function() {
				var t = e,
					n = this,
					r = this[t(153)][t(165)].sprite(0, 50, t(182), t(172));
				r.x = this.game[t(224)] - r[t(224)] - 50, r[t(181)] = !0, r.events[t(216)][t(203)]((function() {
					CyberInstance[t(232)].playButtonSound(), n.close()
				}), this), this.add(r)
			}
		}]) && nu(n[i(214)], r), Object[i(175)](n, "prototype", {
			writable: !1
		}), c
	}(P);

	function su(t, e) {
		for (var n = cu, r = 0; r < e[n(275)]; r++) {
			var i = e[r];
			i[n(241)] = i[n(241)] || !1, i[n(248)] = !0, "value" in i && (i[n(234)] = !0), Object[n(220)](t, i[n(247)], i)
		}
	}

	function cu(t, e) {
		var n = uu();
		return (cu = function(t, e) {
			return n[t -= 214]
		})(t, e)
	}

	function uu() {
		var t = ["updateProfileCoin", "onWatchAvatar", "autoConnect", "3559575jWCzJI", "openLoadingPopup", "onExtensionResponse", "21646305tAdERG", "3604944PvpUDA", "screenReady", "writable", "USER_VARIABLES_UPDATE", "EXTENSION_RESPONSE", "value", "cmd", "quantity", "Bạn không đủ chip!", "enumerable", "changedVars", "10PjfyTR", "6629VbJsys", "Cannot call a class as a function", "onWatchEmo", "key", "configurable", "onBuyGift", "socket", "signal", "getInt", "SFSEvent", "3674616svmJoV", "getVariable", "emoContent", "32934boyPjx", "BUY_EMO", "screen", "addEventListener", "shop.buyGift", "add", "instance", "avatarContent", "shop.watchGift", "success", "params", "CLOSE", "lang", "user", "sfs", "49TxwbNa", "coin", "shop.watchAvatar", "length", "BUY_GIFT", "GIFT", "onWatchGift", "prototype", "443916VjoVdn", "connect", "connector", "1480Dansdm", "giftContent", "onReward", "onUserVariablesUpdate", "defineProperty", "type", "onAdReward", "isItMe", "closeLoadingPopup"];
		return (uu = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = cu, r = t();;) try {
			if (473338 == parseInt(n(272)) / 1 * (-parseInt(n(257)) / 2) + -parseInt(n(280)) / 3 + -parseInt(n(232)) / 4 + parseInt(n(228)) / 5 + -parseInt(n(254)) / 6 + parseInt(n(244)) / 7 * (-parseInt(n(216)) / 8) + -parseInt(n(231)) / 9 * (-parseInt(n(243)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(uu);
	const hu = function() {
		var t, e, n, r = cu;

		function i(t) {
			var e = cu;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(cu(245))
			})(this, i), this[e(259)] = t, this[e(271)] = CyberInstance[e(250)], this.sfs[e(260)](SFS2X[e(253)][e(236)], this[e(230)], this), this[e(271)][e(260)](SFS2X[e(253)][e(235)], this[e(219)], this), CyberInstance[e(215)][e(251)].add(this.autoConnect, this), Tt[e(263)][e(218)][e(262)](this[e(222)], this)
		}
		return t = i, n = cu, (e = [{
			key: r(227),
			value: function(t) {
				var e = r;
				this.screenReady() && (t ? (this[e(259)][e(224)](), Tt[e(263)].handleReconnect()) : (CyberInstance.connector[e(214)](), this.screen[e(229)]()))
			}
		}, {
			key: r(230),
			value: function(t) {
				var e = r;
				this.screenReady() && (t.cmd == e(261) ? this[e(249)](t.params) : t.cmd == e(265) ? this[e(278)](t.params) : t[e(238)] == e(274) ? this[e(226)](t.params) : "shop.watchEmo" == t[e(238)] && this[e(246)](t[e(267)]))
			}
		}, {
			key: r(249),
			value: function(t) {
				var e = r;
				if (this[e(259)].closeLoadingPopup(), t.containsKey(e(266))) {
					var n = t[e(252)]("id"),
						i = t[e(252)](e(239));
					et[e(263)].updateGift(n, i), new ou(game, {
						type: e(277),
						id: n,
						quantity: i
					})
				} else new G(game, {
					text: e(240),
					buttonText: CyberInstance[e(269)][e(268)],
					hideCloseButton: !0
				})
			}
		}, {
			key: r(278),
			value: function(t) {
				var e = r;
				this.screen[e(224)](), this[e(259)][e(217)][e(278)](t)
			}
		}, {
			key: r(226),
			value: function(t) {
				var e = r;
				this[e(259)][e(224)](), this.screen.avatarContent.onWatchAvatar(t)
			}
		}, {
			key: "onWatchEmo",
			value: function(t) {
				var e = r;
				this[e(259)][e(224)](), this[e(259)].emoContent[e(246)](t)
			}
		}, {
			key: r(222),
			value: function(t) {
				var e = r;
				t[e(221)] == Tt[e(276)] ? this[e(259)][e(217)][e(222)]() : t[e(221)] == Tt.BUY_AVATAR ? this[e(259)][e(264)][e(222)]() : t.type == Tt[e(258)] && this.screen[e(256)][e(222)]()
			}
		}, {
			key: r(219),
			value: function(t) {
				var e = r;
				t[e(270)][e(223)] && this.screenReady() && -1 != t[e(242)].indexOf(e(273)) && this[e(259)][e(225)](t[e(270)][e(255)](e(273))[e(237)])
			}
		}, {
			key: r(233),
			value: function() {
				var t = r;
				return this[t(259)][t(233)]
			}
		}]) && su(t[n(279)], e), Object[n(220)](t, n(279), {
			writable: !1
		}), i
	}();
	var fu = wu;

	function lu(t) {
		var e = wu;
		return (lu = e(394) == typeof Symbol && e(421) == typeof Symbol[e(367)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(394) == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? n(421) : typeof t
		})(t)
	}

	function pu(t, e) {
		for (var n = wu, r = 0; r < e[n(347)]; r++) {
			var i = e[r];
			i.enumerable = i[n(390)] || !1, i[n(415)] = !0, n(369) in i && (i[n(375)] = !0), Object[n(425)](t, i[n(405)], i)
		}
	}

	function yu() {
		var t = ["coin", "inited", "enumerable", "shopScreen", "purchase", "1218265FDLeGj", "function", "130753HyKmhd", "Text", "closeLoadingPopup", "font_undercenter", "999OtEyhQ", "prototype", "close", "formatCoinWithCommas", "getOwnPropertyDescriptor", "make", "key", "lang", "create", "then", "Cannot call a class as a function", "instance", "constructor", "remove", "592304sGQFxa", "replace", "configurable", "Group", "getDuration", "chip", "width", "208165zjhKPu", "symbol", "setPrototypeOf", "payments", "bind", "defineProperty", "percent100", "125390sUUUGe", "9_99", "chip_item", "click", "Derived constructors may only return object or undefined", "loadingPopup", "productID", "percent50", "call", "getPromoMap", "construct", "products", "6cfaeCn", "price", "length", "52824NeIJUz", "game", "CLOSE", "open", "image", "anchor", "addItem", "24pwYihs", "isConsumed", "sham", "759SKpmCr", "PAYMENT_SUCCESS", "getPromotion", "#f8e1d6", "addText", "get", "getPurchasesAsync", "apply", "2273184PGcpfY", "iterator", "openLoadingPopup", "value", "chip_icon", "__proto__", "object", "this hasn't been initialised - super() hasn't been called", "hasOwnProperty", "writable", "undefined", "getDeveloperPayload", "restore", "setTo", "onBuyClick", "getPrototypeOf", "height", "onPurchaseProduct", "destroy", "inputEnabled", "addChild", "round"];
		return (yu = function() {
			return t
		})()
	}

	function du() {
		var t = wu;
		return du = typeof Reflect !== t(376) && Reflect.get ? Reflect[t(363)][t(424)]() : function(e, n, r) {
			var i = t,
				a = vu(e, n);
			if (a) {
				var o = Object[i(403)](a, n);
				return o.get ? o[i(363)][i(341)](arguments[i(347)] < 3 ? e : r) : o.value
			}
		}, du.apply(this, arguments)
	}

	function vu(t, e) {
		for (var n = wu; !Object[n(400)][n(374)].call(t, e) && null !== (t = Iu(t)););
		return t
	}

	function bu(t, e) {
		var n = wu;
		return (bu = Object[n(422)] ? Object[n(422)][n(424)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function gu(t, e) {
		var n = wu;
		if (e && (lu(e) === n(372) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(337));
		return mu(t)
	}

	function mu(t) {
		if (void 0 === t) throw new ReferenceError(wu(373));
		return t
	}

	function Iu(t) {
		var e = wu;
		return (Iu = Object[e(422)] ? Object.getPrototypeOf.bind() : function(t) {
			var n = e;
			return t[n(371)] || Object[n(381)](t)
		})(t)
	}

	function wu(t, e) {
		var n = yu();
		return (wu = function(t, e) {
			return n[t -= 332]
		})(t, e)
	}! function(t, e) {
		for (var n = wu, r = t();;) try {
			if (706624 == -parseInt(n(420)) / 1 * (-parseInt(n(345)) / 2) + parseInt(n(366)) / 3 + parseInt(n(413)) / 4 + parseInt(n(393)) / 5 * (-parseInt(n(355)) / 6) + parseInt(n(395)) / 7 + parseInt(n(348)) / 8 * (-parseInt(n(399)) / 9) + parseInt(n(333)) / 10 * (parseInt(n(358)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(yu);
	const Su = function(t) {
		var e = wu;
		! function(t, e) {
			var n = wu;
			if (typeof e !== n(394) && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(400)] = Object[n(407)](e && e[n(400)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(425)](t, n(400), {
				writable: !1
			}), e && bu(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = wu;
			if (typeof Reflect === t(376) || !Reflect[t(343)]) return !1;
			if (Reflect[t(343)][t(357)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean.prototype.valueOf[t(341)](Reflect[t(343)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = wu,
				n = Iu(a);
			if (o) {
				var r = Iu(this)[e(411)];
				t = Reflect[e(343)](n, arguments, r)
			} else t = n[e(365)](this, arguments);
			return gu(this, t)
		});

		function c(t, e, n) {
			var r, i = wu;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(wu(409))
			})(this, c), r = s.call(this, t);
			var a = e,
				o = n,
				u = 0;
			for (var h in ft[i(410)][i(344)]) 4 == u && (a = e, o = o + 210 + 5), u++, a = a + r[i(354)](ft.instance[i(344)][h], a, o, i(370) + u)[i(419)] + 26;
			return ft[i(410)][i(383)].add(r.onPurchaseProduct, mu(r)), ft.instance[i(389)] && FBInstant[i(423)][i(364)]()[i(408)]((function(t) {
				var e = i;
				if (t[e(347)] > 0)
					for (var n = 0; n < t.length; n++)
						if (0 == t[n][e(356)]) {
							r[e(378)](t[n]);
							break
						}
			})), r
		}
		return n = c, i = wu, (r = [{
			key: e(383),
			value: function(t) {
				var n = e;
				if (this[n(397)](), t.error) new G(game, {
					text: t.errorMsg,
					buttonText: CyberInstance.lang[n(350)],
					hideCloseButton: !0
				});
				else {
					var r = CyberInstance[n(406)][n(359)][n(414)]("%s", u[n(402)](t[n(388)]));
					new G(game, {
						text: r,
						buttonText: CyberInstance[n(406)][n(350)],
						hideCloseButton: !0
					})
				}
			}
		}, {
			key: e(380),
			value: function(t) {
				var n = e;
				this[n(368)](), ft.instance[n(392)](t[n(339)] + "", CyberInstance[n(377)]())
			}
		}, {
			key: "restore",
			value: function(t) {
				var n = e;
				this[n(368)](), ft[n(410)].verifyPayment(t)
			}
		}, {
			key: e(384),
			value: function() {
				var t = e;
				du(Iu(c[t(400)]), t(384), this)[t(341)](this), ft[t(410)][t(383)][t(412)](this.onPurchaseProduct, this)
			}
		}, {
			key: e(354),
			value: function(t, n, r, i) {
				var a = e,
					o = this[a(407)](n, r, a(391), a(335)),
					s = this.game[a(404)][a(352)](o[a(419)] / 2, o[a(382)] / 2 - 15, "shopScreen", i);
				s[a(353)][a(379)](.5), o[a(386)](s);
				var c = 0,
					h = t.chip,
					f = ft[a(410)][a(360)]();
				if (f && f[a(417)]() > 0 && (c = f[a(342)]().get(t[a(339)])) && c > 0) {
					var l = Math[a(387)](t.chip * c / 100);
					h = t[a(418)] + l
				}
				var p = new(Phaser[a(396)])(this[a(349)], o[a(419)] / 2, 9, u[a(402)](h), {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 22,
					fill: "#f5c78a"
				});
				if (p[a(353)][a(379)](.5, 0), o[a(386)](p), c && c > 0) {
					var y = new(Phaser[a(396)])(this[a(349)], o[a(419)] - 20, 45, u[a(402)](t[a(418)]), {
						font: APP_FONT,
						fontWeight: 400,
						fontSize: 16,
						fill: a(361),
						fontStyle: "italic"
					});
					y[a(353)][a(379)](1, 0), o[a(386)](y);
					var d = this.game[a(404)][a(352)](o[a(419)] - 20, 53, a(391), a(398));
					y[a(419)] > 0 && (d.width = y.width), d[a(353)][a(379)](1, 0), o[a(386)](d)
				}
				if (c)
					if (100 == c) {
						var v = this[a(349)][a(404)][a(352)](-20, 20, a(391), a(332));
						o[a(386)](v), t.productID == a(334) && (s.y = o[a(382)] / 2 - 10)
					} else if (50 == c) {
					var b = this[a(349)].make[a(352)](-20, 20, a(391), a(340));
					o[a(386)](b), "9_99" == t[a(339)] && (s.y = o[a(382)] / 2 - 10)
				}
				var g = new Lt(this[a(349)], 0, 0, a(391), "buy_button");
				return g[a(362)](t[a(346)], {
					font: APP_FONT,
					fontWeight: 500,
					fontSize: 21,
					fill: "#692700"
				}), g.x = o.width / 2 - g.width / 2, g.y = o[a(382)] - g[a(382)] - 20, g[a(385)] = !0, g.productID = t.productID, g[a(336)](this[a(380)], this), o[a(386)](g), o
			}
		}, {
			key: "openLoadingPopup",
			value: function(t) {
				var n = e;
				this[n(338)] = new b(game, t), this[n(338)][n(351)]()
			}
		}, {
			key: e(397),
			value: function() {
				var t = e;
				this[t(338)] && (this[t(338)][t(401)](), this[t(338)] = null)
			}
		}]) && pu(n[i(400)], r), Object[i(425)](n, i(400), {
			writable: !1
		}), c
	}(Phaser[fu(416)]);

	function ku(t) {
		var e = Tu;
		return (ku = e(135) == typeof Symbol && e(154) == typeof Symbol[e(146)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(135) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(205)] ? n(154) : typeof t
		})(t)
	}

	function Ou(t, e) {
		for (var n = Tu, r = 0; r < e[n(166)]; r++) {
			var i = e[r];
			i[n(139)] = i[n(139)] || !1, i.configurable = !0, "value" in i && (i[n(169)] = !0), Object.defineProperty(t, i[n(170)], i)
		}
	}

	function Cu(t, e) {
		var n = Tu;
		return (Cu = Object[n(194)] ? Object[n(194)][n(159)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Tu(t, e) {
		var n = Ru();
		return (Tu = function(t, e) {
			return n[t -= 131]
		})(t, e)
	}

	function Pu(t, e) {
		var n = Tu;
		if (e && ("object" === ku(e) || typeof e === n(135))) return e;
		if (void 0 !== e) throw new TypeError(n(193));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Tu(203));
			return t
		}(t)
	}

	function xu(t) {
		var e = Tu;
		return (xu = Object[e(194)] ? Object[e(200)][e(159)]() : function(t) {
			var n = e;
			return t[n(145)] || Object[n(200)](t)
		})(t)
	}! function(t, e) {
		for (var n = Tu, r = t();;) try {
			if (490196 == -parseInt(n(152)) / 1 + parseInt(n(191)) / 2 + -parseInt(n(168)) / 3 * (parseInt(n(175)) / 4) + parseInt(n(144)) / 5 + parseInt(n(185)) / 6 + parseInt(n(164)) / 7 + parseInt(n(172)) / 8 * (-parseInt(n(141)) / 9)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ru);
	const _u = function(t) {
		var e = Tu;
		! function(t, e) {
			var n = Tu;
			if (typeof e !== n(135) && null !== e) throw new TypeError(n(133));
			t.prototype = Object[n(189)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(150)](t, n(205), {
				writable: !1
			}), e && Cu(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Tu;
			if (typeof Reflect === t(158) || !Reflect[t(188)]) return !1;
			if (Reflect[t(188)][t(178)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(205)][t(142)][t(143)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Tu,
				n = xu(a);
			if (o) {
				var r = xu(this)[e(138)];
				t = Reflect[e(188)](n, arguments, r)
			} else t = n[e(173)](this, arguments);
			return Pu(this, t)
		});

		function c(t, e) {
			var n, r = Tu;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Tu(197))
			}(this, c), (n = s[r(143)](this, t, e))[r(207)](), n.addBackground("homeScreen", r(199)), n[r(176)](), n[r(155)](e[r(163)], e[r(184)], e.id, e.quantity), n[r(151)](e), e[r(181)] || n[r(162)](), !0 !== e[r(147)] && n.createTransition(), n
		}
		return n = c, i = Tu, (r = [{
			key: "addButton",
			value: function(t) {
				var e = Tu,
					n = this.game[e(140)][e(167)](0, 0, e(210), e(131));
				n.x = this[e(156)][e(160)] / 2 - n[e(160)] / 2, n.y = this[e(156)][e(196)] - n.height - 15, this[e(156)][e(179)](n);
				var r = this[e(204)][e(183)][e(163)](n[e(160)] / 2, n[e(196)] / 2, t[e(153)], {
					font: APP_FONT,
					fontSize: 24,
					fill: e(192),
					fontWeight: e(202)
				});
				r[e(209)].setTo(.5), n.addChild(r), r[e(134)](t.buttonText), t.actionId && (n[e(195)] = t[e(195)]), n.inputEnabled = !0, t.callback && n.events.onInputDown[e(208)](t[e(198)], t[e(165)]), n[e(161)][e(187)][e(208)](this[e(201)], this)
			}
		}, {
			key: e(201),
			value: function() {
				var t = e;
				CyberInstance[t(186)][t(211)](), this[t(132)]()
			}
		}, {
			key: e(155),
			value: function(t, n, r, i) {
				var a = e,
					o = this[a(204)][a(183)][a(163)](this[a(156)].width / 2, 65, t, {
						font: APP_FONT,
						fontSize: 22,
						fill: a(149),
						fontWeight: 400
					});
				o.anchor[a(190)](.5, 0), this[a(156)][a(179)](o), o[a(134)](t);
				var s = this[a(204)][a(140)][a(180)](this.background[a(160)] / 2, 148, "shopScreen", n);
				if (15 == r ? s[a(206)].setTo(.7) : 17 == r && s[a(206)][a(190)](.8), s[a(209)][a(190)](0, .5), s.x = this[a(156)][a(160)] / 2 - s.width / 2, this.background[a(179)](s), i > 1) {
					var c = this.game.add.text(s.x + s.width + 20, 148, "x" + i, {
						font: APP_FONT,
						fontSize: 26,
						fill: a(149),
						fontWeight: 400
					});
					c[a(209)][a(190)](0, .5), this[a(156)][a(179)](c), c[a(134)]("x" + i)
				}
			}
		}, {
			key: e(176),
			value: function() {
				var t = e,
					n = this[t(204)].add[t(163)](this[t(156)].width / 2, 13, CyberInstance[t(174)][t(177)][t(171)](), {
						font: APP_FONT,
						fontSize: 30,
						fill: t(137),
						fontWeight: t(157)
					});
				n[t(209)][t(190)](.5, 0), this[t(156)][t(179)](n), n[t(134)](CyberInstance[t(174)][t(177)].toUpperCase())
			}
		}, {
			key: e(162),
			value: function() {
				var t = e,
					n = this,
					r = this[t(204)][t(140)][t(167)](0, 0, t(210), t(182));
				r.x = this[t(156)][t(160)] - r[t(160)] / 2 - 10, r.y = -12, r[t(148)] = !0, r[t(161)][t(187)][t(208)]((function() {
					CyberInstance[t(186)].playButtonSound(), n.close()
				}), this), this[t(136)] = r, this[t(156)][t(179)](this[t(136)])
			}
		}]) && Ou(n[i(205)], r), Object[i(150)](n, i(205), {
			writable: !1
		}), c
	}(P);

	function Ru() {
		var t = ["construct", "create", "setTo", "1035374ThVvYM", "#ffffff", "Derived constructors may only return object or undefined", "setPrototypeOf", "actionId", "height", "Cannot call a class as a function", "callback", "bg_popup_medium_484x292", "getPrototypeOf", "onAction", "normal", "this hasn't been initialised - super() hasn't been called", "game", "prototype", "scale", "addOverlay", "addOnce", "anchor", "homeScreen", "playButtonSound", "button_green_197x64", "close", "Super expression must either be null or a function", "setText", "function", "closeButton", "#ebdac0", "constructor", "enumerable", "make", "11943EZZSEh", "valueOf", "call", "260085XsFrMy", "__proto__", "iterator", "hideTransition", "inputEnabled", "#f59eac", "defineProperty", "addButton", "130651IxcXLv", "buttonText", "symbol", "addContent", "background", "bold", "undefined", "bind", "width", "events", "addCloseButton", "text", "2302083cKDadk", "context", "length", "sprite", "69669gTehhO", "writable", "key", "toUpperCase", "2720ewYaNS", "apply", "lang", "4WgecRa", "addTitle", "THONG_BAO", "sham", "addChild", "image", "hideCloseButton", "button_close", "add", "icon", "1180062BaZuAh", "sound", "onInputDown"];
		return (Ru = function() {
			return t
		})()
	}
	var ju = Bu;

	function Eu(t) {
		var e = Bu;
		return (Eu = e(313) == typeof Symbol && e(362) == typeof Symbol[e(269)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(313) == typeof Symbol && t[n(314)] === Symbol && t !== Symbol[n(393)] ? n(362) : typeof t
		})(t)
	}

	function Bu(t, e) {
		var n = Wu();
		return (Bu = function(t, e) {
			return n[t -= 266]
		})(t, e)
	}

	function Au(t, e) {
		for (var n = Bu, r = 0; r < e[n(397)]; r++) {
			var i = e[r];
			i[n(317)] = i.enumerable || !1, i[n(281)] = !0, n(367) in i && (i[n(363)] = !0), Object[n(312)](t, i.key, i)
		}
	}

	function Fu() {
		var t = Bu;
		return Fu = typeof Reflect !== t(368) && Reflect[t(357)] ? Reflect.get[t(319)]() : function(e, n, r) {
			var i = t,
				a = Du(e, n);
			if (a) {
				var o = Object[i(399)](a, n);
				return o[i(357)] ? o.get[i(331)](arguments[i(397)] < 3 ? e : r) : o.value
			}
		}, Fu.apply(this, arguments)
	}

	function Du(t, e) {
		for (var n = Bu; !Object[n(393)][n(343)][n(331)](t, e) && null !== (t = Mu(t)););
		return t
	}

	function Nu(t, e) {
		var n = Bu;
		return (Nu = Object.setPrototypeOf ? Object.setPrototypeOf[n(319)]() : function(t, e) {
			return t[n(299)] = e, t
		})(t, e)
	}

	function Gu(t, e) {
		var n = Bu;
		if (e && ("object" === Eu(e) || typeof e === n(313))) return e;
		if (void 0 !== e) throw new TypeError(n(378));
		return Lu(t)
	}

	function Lu(t) {
		if (void 0 === t) throw new ReferenceError(Bu(366));
		return t
	}

	function Mu(t) {
		var e = Bu;
		return (Mu = Object.setPrototypeOf ? Object[e(283)][e(319)]() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function Wu() {
		var t = ["CLOSE", "icon_complete", "2502594xvpuFX", "getGuserid", "completeIcon", "hasOwnProperty", "gift_item", "instance", "#f5c78a", "disableTimeout", "alphaMask", "watch", "setTo", "image", "listView", "textAmount", "chipText", "no_avatar", "setText", "get", "show", "success", "3474882DXgvpV", "8kntGKY", "symbol", "writable", "#692700", "onWatchGift", "this hasn't been initialised - super() hasn't been called", "value", "undefined", "formatCoinWithCommas", "quantity", "selectedName", "6208194jkOYyt", "width", "visible", "screen", "10KUaqpU", "applyTexture", "Derived constructors may only return object or undefined", "getBool", "anchor", "#f5a3b1", "game", "selectedItem", "shop.buyGift", "rightBg", "addChild", "construct", "valueOf", "onAdReward", "load", "text", "45MrTSsF", "prototype", "onSendBuyItemRequest", "socket", "giftItems", "length", "icon", "getOwnPropertyDescriptor", "overlay", "destroy", "click", "ads", "incButton", "onWatchClick", "input_amout_bg", "378452VEriFL", "iterator", "make", "onBoxClick", "getGiftItems", "watch_button", "updateGift", "loadTexture", "cache", "putInt", "getWatchCount", "152054UCMjur", "GIFT", "configurable", "10077921kISdbU", "getPrototypeOf", "coin_icon", "xemvideo", "Bạn sử dụng ", "chip", "ExtensionRequest", "send", "dec_button", "updateSelectedItem", "add", "addItem", "lang", "BUY_GIFT", "Group", "Super expression must either be null or a function", "shopScreen", "__proto__", "Text", "onIncAmount", "buy_button", "inputBg", "viewList", "bitmapData", "ADS_NOT_READY", "onBuyItemClick", "buyButton", "addText", "19557891CBxloj", "watch_gift_desc_text", "defineProperty", "function", "constructor", "ready", "getInt", "enumerable", "avatar", "bind", "scale", "name", "onDecAmount", "decButton", "MUA NGAY", "height", "sham", "Xem một đoạn video\nquảng cáo ngắn bạn sẽ\nnhận ngay 1 quà tặng\n", "openLoadingPopup", "watch_gift_desc", "inc_button", "call", "avatarKey", "SFSObject", "watchButton", "create", "itemId", "chipIcon"];
		return (Wu = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = Bu, r = t();;) try {
			if (907763 == -parseInt(n(279)) / 1 + -parseInt(n(340)) / 2 + parseInt(n(360)) / 3 + parseInt(n(268)) / 4 * (parseInt(n(392)) / 5) + parseInt(n(372)) / 6 + -parseInt(n(282)) / 7 * (-parseInt(n(361)) / 8) + -parseInt(n(310)) / 9 * (parseInt(n(376)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Wu);
	var zu = null,
		Uu = 12;
	const Vu = function(t) {
		var e = Bu;
		! function(t, e) {
			var n = Bu;
			if (typeof e !== n(313) && null !== e) throw new TypeError(n(297));
			t.prototype = Object[n(335)](e && e[n(393)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, n(393), {
				writable: !1
			}), e && Nu(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Bu;
			if (typeof Reflect === t(368) || !Reflect[t(387)]) return !1;
			if (Reflect.construct[t(326)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean.prototype[t(388)][t(331)](Reflect[t(387)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Mu(a);
			if (o) {
				var n = Mu(this).constructor;
				t = Reflect.construct(e, arguments, n)
			} else t = e.apply(this, arguments);
			return Gu(this, t)
		});

		function c(t, e, n, r) {
			var i, a = Bu;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			})(this, c), (i = s.call(this, t))[a(375)] = r;
			var o = e,
				u = n;
			for (var h in i[a(352)] = new Br({
					x: o,
					y: u,
					column: 4,
					width: 638,
					height: 434,
					rowHeight: 213,
					columnWidth: 155,
					row: 1,
					leftDistance: 0,
					rightDistance: 0,
					distanceBetweenColumns: 6,
					distanceBetweenRows: 4,
					direction: "y"
				}, i.game), i[a(292)](i[a(352)]), null == zu && (zu = et[a(272)]()), i[a(396)] = [], zu) i.giftItems.push(i[a(293)](zu[h]));
			i[a(352)][a(304)] = i[a(396)], i[a(332)] = a(318) + ne.instance[a(341)](), i[a(382)][a(276)].checkImageKey(i.avatarKey) ? (i[a(318)] = i[a(382)][a(270)].image(57, 40, i[a(332)]), i.applyTexture(116)) : (i[a(318)] = i[a(382)][a(270)][a(351)](57, 40, a(298), a(355)), i[a(318)][a(373)] = 116, i.avatar[a(325)] = 116), i.avatar.x = i.screen.rightBg.x + i.avatar.x, i.avatar.y = i[a(375)][a(385)].y + i[a(318)].y, i[a(292)](i[a(318)]), i.selectedName = new(Phaser[a(300)])(i[a(382)], i[a(318)].x + i[a(318)][a(373)] / 2, i.avatar.y + i[a(318)][a(373)] + 30, "", {
				font: APP_FONT,
				fontWeight: 400,
				fontSize: 24,
				fill: a(381)
			}), i[a(371)][a(380)].setTo(.5, 0), i[a(292)](i[a(371)]), i[a(383)] = i.game[a(270)][a(351)](i.avatar.x + i[a(318)][a(373)] / 2, i[a(318)].y + i[a(318)][a(373)] / 2, a(298), a(355)), i[a(383)].anchor[a(350)](.5), i[a(292)](i[a(383)]);
			var f = i[a(382)][a(270)][a(351)](i[a(318)].x + i.avatar[a(373)] / 2, i[a(371)].y + 70, a(298), a(267));
			f.anchor[a(350)](.5, 0), i[a(292)](f);
			var l = new Lt(i[a(382)], 0, f.y - 1, "shopScreen", a(290));
			l.disableTimeout = !0, l.x = f.x - f[a(373)] / 2 - 10, l[a(402)](i[a(322)], Lu(i)), i[a(292)](l);
			var p = new Lt(i.game, 0, f.y - 1, "shopScreen", a(330));
			return p[a(347)] = !0, p.x = f.x + p[a(373)] / 2 + p[a(373)] / 2, p.click(i.onIncAmount, Lu(i)), i[a(292)](p), i[a(353)] = new(Phaser[a(300)])(i.game, i[a(318)].x + i[a(318)].width / 2 - 3, f.y + f[a(325)] / 2, "1", {
				font: APP_FONT,
				fontWeight: 700,
				fontSize: 24,
				fill: a(381)
			}), i.textAmount[a(380)].setTo(.5), i[a(292)](i[a(353)]), i[a(353)][a(356)]("1"), i.chipText = i[a(382)][a(270)][a(391)](0, f.y + 75, "", {
				font: APP_FONT,
				fontWeight: 500,
				fontSize: 20,
				fill: a(346)
			}), i[a(292)](i[a(354)]), i[a(337)] = i.game[a(270)][a(351)](0, f.y + 73, "shopScreen", "coin_icon"), i[a(292)](i.chipIcon), i.buyButton = new Lt(i.game, 0, 0, "shopScreen", a(302)), i[a(292)](i[a(308)]), i[a(308)][a(309)](a(324), {
				font: APP_FONT,
				fontWeight: 700,
				fontSize: 22,
				fill: a(364)
			}), i[a(308)].x = i[a(318)].x + i[a(318)].width / 2 - 5 - i[a(308)][a(373)] / 2, i[a(308)].y = i[a(375)][a(385)].y + i[a(375)][a(385)][a(325)] - i.buyButton.height - 20, i.buyButton[a(402)](i[a(307)], Lu(i)), i[a(329)] = i.game[a(270)][a(351)](i[a(318)].x + i[a(318)][a(373)] / 2 - 5, i[a(371)].y + 100, a(298), "watch_gift_desc"), i[a(329)][a(380)][a(350)](.5), i[a(292)](i.watch_gift_desc), i.watch_gift_desc_text = new Phaser.Text(i[a(382)], 0, 0, "", {
				font: APP_FONT,
				fontWeight: 400,
				fontSize: 17,
				fill: a(381),
				align: "center"
			}), i[a(311)][a(380)][a(350)](.5), i[a(329)][a(386)](i.watch_gift_desc_text), i[a(334)] = new Lt(i[a(382)], i[a(318)].x + i.avatar[a(373)] / 2 - 5, 0, a(298), a(273)), i[a(334)][a(380)][a(350)](.5, 0), i[a(334)].y = i.screen[a(385)].y + i.screen.rightBg[a(325)] - i[a(334)][a(325)] - 20, i.watchButton.click(i[a(266)], Lu(i)), i[a(292)](i[a(334)]), i.inputBg = f, i[a(323)] = l, i[a(404)] = p, i[a(291)](Uu), i
		}
		return n = c, i = Bu, (r = [{
			key: e(266),
			value: function() {
				var t = e;
				Tt.instance[t(315)] ? Tt[t(345)][t(358)](Tt[t(295)]) : new G(game, {
					text: CyberInstance[t(294)][t(306)],
					buttonText: CyberInstance[t(294)][t(338)],
					hideCloseButton: !0
				})
			}
		}, {
			key: e(389),
			value: function() {
				var t = e,
					n = new(SFS2X[t(333)]);
				n[t(277)]("id", Uu), CyberInstance.socket[t(289)](new(SFS2X[t(288)])("shop.watchGift", n)), this[t(375)].openLoadingPopup()
			}
		}, {
			key: e(365),
			value: function(t) {
				for (var n, r = e, i = t[r(316)]("id"), a = zu[i + ""], o = 0; o < this.giftItems[r(397)]; o++)
					if (this[r(396)][o][r(336)] == i) {
						n = this.giftItems[o];
						break
					} if (t[r(379)](r(359))) {
					var s = t.getInt("quantity");
					et[r(345)][r(274)](i, s);
					var c = et[r(345)].getWatchCount(i) + 1;
					et[r(345)].updateWatchCount(i, c), new ou(game, {
						type: r(280),
						id: i,
						quantity: s
					}), et[r(345)][r(278)](i) == a[r(403)] && (n.watch[r(374)] = !1, n[r(342)][r(374)] = !0)
				}
				this[r(291)](i)
			}
		}, {
			key: e(307),
			value: function() {
				var t = e,
					n = zu[Uu + ""],
					r = t(286) + u.shortenLargeNumber(n[t(287)] * parseInt(this[t(353)][t(391)])) + " chip để mua vật phẩm";
				new _u(game, {
					text: r,
					icon: n[t(398)],
					id: Uu,
					quantity: parseInt(this.textAmount[t(391)]),
					buttonText: "Xác nhận",
					hideCloseButton: !1,
					callback: this[t(394)],
					context: this
				})
			}
		}, {
			key: e(394),
			value: function() {
				var t = e,
					n = new(SFS2X[t(333)]);
				n[t(277)]("id", Uu), n[t(277)](t(370), parseInt(this[t(353)][t(391)])), CyberInstance[t(395)][t(289)](new(SFS2X[t(288)])(t(384), n)), this.screen[t(328)]()
			}
		}, {
			key: e(322),
			value: function() {
				var t = e,
					n = parseInt(this[t(353)][t(391)]);
				if (n > 1) {
					n -= n <= 10 ? 1 : 5, this.textAmount[t(356)](n);
					var r = zu[Uu + ""],
						i = parseInt(this.textAmount.text);
					this[t(354)][t(356)](u[t(369)](r[t(287)] * i))
				}
			}
		}, {
			key: e(301),
			value: function() {
				var t = e,
					n = parseInt(this[t(353)][t(391)]);
				n < 1e4 && (n += n < 10 ? 1 : 5, this[t(353)][t(356)](n));
				var r = zu[Uu + ""],
					i = parseInt(this[t(353)][t(391)]);
				this[t(354)][t(356)](u[t(369)](r[t(287)] * i))
			}
		}, {
			key: "addItem",
			value: function(t) {
				var n = e,
					r = new Lt(this.game, 0, 0, n(298), n(344));
				r[n(336)] = t.id, r[n(402)](this[n(271)], this);
				var i = this[n(382)][n(270)][n(351)](0, 0, n(298), "gift_item_active");
				i[n(374)] = Uu == t.id, r[n(386)](i), r[n(400)] = i;
				var a = new(Phaser[n(300)])(this[n(382)], r[n(373)] / 2, 11, t.name, {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 19,
					fill: n(381)
				});
				a[n(380)][n(350)](.5, 0), r[n(386)](a), a.setText(t[n(321)]);
				var o = this.game[n(270)][n(351)](r[n(373)] / 2, r[n(325)] / 2 - 10, n(298), t[n(398)]);
				if (15 == t.id ? o.scale[n(350)](.7) : 17 == t.id && o[n(320)].setTo(.85), o[n(380)][n(350)](.5), r[n(386)](o), t[n(287)]) {
					var s = new(Phaser[n(300)])(this.game, r[n(373)] / 2, 164, "", {
						font: APP_FONT,
						fontWeight: 500,
						fontSize: 18,
						fill: n(346)
					});
					r.addChild(s), s[n(356)](u[n(369)](t.chip));
					var c = s[n(373)],
						h = this.game[n(270)][n(351)](r.width / 2 - c, 162, "shopScreen", n(284));
					r[n(386)](h), c > 0 ? (h.x = r[n(373)] / 2 - (h[n(373)] + 10 + c) / 2, s.x = h.x + h[n(373)] + 10) : (h.x = 30, s.x = h.x + h[n(373)] + 10)
				} else {
					var f = this[n(382)].make[n(351)](0, 158, n(298), n(339));
					f.x = r[n(373)] / 2 - f[n(373)] / 2, r.addChild(f), f.visible = !1, r[n(342)] = f;
					var l = this[n(382)].make[n(351)](0, 166, "shopScreen", n(285));
					l.x = r[n(373)] / 2 - l[n(373)] / 2, r.addChild(l);
					var p = et[n(345)][n(278)](t.id);
					r[n(349)] = l, p >= t[n(403)] && (f.visible = !0, l.visible = !1)
				}
				return r
			}
		}, {
			key: e(271),
			value: function(t) {
				for (var n = e, r = 0; r < this[n(396)][n(397)]; r++)
					if (this.giftItems[r][n(336)] == Uu) {
						this[n(396)][r][n(400)].visible = !1;
						break
					} Uu = t[n(336)], t[n(400)][n(374)] = !0, this.updateSelectedItem(t[n(336)])
			}
		}, {
			key: e(291),
			value: function(t) {
				var n = e,
					r = zu[t + ""];
				if (this[n(383)].loadTexture("shopScreen", r[n(398)]), this.selectedName[n(356)](r[n(321)]), r.chip) {
					this[n(404)].visible = !0, this[n(323)][n(374)] = !0, this[n(303)][n(374)] = !0, this.textAmount[n(374)] = !0, this.chipIcon[n(374)] = !0, this[n(354)].visible = !0, this[n(329)][n(374)] = !1, this[n(334)].visible = !1, this[n(308)][n(374)] = !0;
					var i = parseInt(this[n(353)][n(391)]);
					this[n(354)][n(356)](u[n(369)](r[n(287)] * i));
					var a = this[n(354)][n(373)];
					a > 0 ? (this[n(337)].x = this[n(375)][n(385)].x + this[n(375)][n(385)][n(373)] / 2 - (this[n(337)].width + 15 + a) / 2 - 10, this.chipText.x = this.chipIcon.x + this.chipIcon[n(373)] + 15) : (this[n(337)].x = this.screen[n(385)].x + 50, this[n(354)].x = this[n(337)].x + this.chipIcon[n(373)] + 15)
				} else {
					this[n(404)][n(374)] = !1, this[n(323)][n(374)] = !1, this[n(303)][n(374)] = !1, this[n(353)][n(374)] = !1, this[n(337)][n(374)] = !1, this[n(354)][n(374)] = !1, this[n(308)][n(374)] = !1;
					var o = et[n(345)].getWatchCount(r.id);
					if (r[n(403)] - o > 0) {
						var s = n(327) + r.name;
						this[n(311)].setText(s), this[n(329)][n(374)] = !0, this[n(334)][n(374)] = !0
					} else this[n(334)][n(374)] = !1, this[n(329)][n(374)] = !1
				}
			}
		}, {
			key: e(377),
			value: function(t) {
				var n = e,
					r = new Phaser.Rectangle(0, 0, t, t),
					i = game[n(270)].image(0, 0, n(298), n(355));
				i[n(373)] = t, i.height = t;
				var a = game[n(270)].bitmapData();
				a[n(390)](i), i[n(401)]();
				var o = this[n(382)].make[n(305)](t, t);
				o[n(348)](this[n(332)], a, r), this[n(318)][n(275)](o), this[n(318)][n(373)] = t, this.avatar[n(325)] = t
			}
		}, {
			key: e(401),
			value: function() {
				var t = e;
				Fu(Mu(c[t(393)]), t(401), this)[t(331)](this)
			}
		}]) && Au(n[i(393)], r), Object[i(312)](n, "prototype", {
			writable: !1
		}), c
	}(Phaser[ju(296)]);
	var Hu = Zu;

	function Xu(t) {
		var e = Zu;
		return (Xu = e(497) == typeof Symbol && "symbol" == typeof Symbol[e(519)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(508)] ? n(518) : typeof t
		})(t)
	}

	function qu(t, e) {
		for (var n = Zu, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(570)] = i[n(570)] || !1, i[n(525)] = !0, n(587) in i && (i[n(485)] = !0), Object[n(505)](t, i.key, i)
		}
	}

	function Ku() {
		var t = Zu;
		return Ku = "undefined" != typeof Reflect && Reflect[t(546)] ? Reflect[t(546)].bind() : function(e, n, r) {
			var i = t,
				a = Yu(e, n);
			if (a) {
				var o = Object[i(501)](a, n);
				return o[i(546)] ? o[i(546)][i(592)](arguments[i(527)] < 3 ? e : r) : o[i(587)]
			}
		}, Ku.apply(this, arguments)
	}

	function Yu(t, e) {
		for (var n = Zu; !Object[n(508)][n(583)].call(t, e) && null !== (t = eh(t)););
		return t
	}

	function Ju() {
		var t = ["defineProperty", "inc_button", "image", "prototype", "getWatchCount", "buyButton", "setText", "giftItems", "inputBg", "watch_button", "send", "visible", "setPrototypeOf", "symbol", "iterator", "center", "push", "ready", "completeIcon", "width", "configurable", "chipText", "length", "icon", "applyTexture", "viewList", "BUY_EMO", "addText", "9059855zcZQOC", " quà tặng", "add", "instance", "bitmapData", "apply", "no_avatar", "shopScreen", "watch_gift_desc", "CLOSE", "load", "watchButton", "onIncAmount", "get", "listView", "gift_item", "game", "screen", "updateWatchCount", "loadTexture", "selectedName", "openLoadingPopup", "onBoxClick", "make", "lang", "updateGift", "height", "icon_complete", "watch_gift_desc_text", "getInt", "1kJTLgh", "onBuyItemClick", "chip", "success", "text", "valueOf", "itemId", "enumerable", "name", "shop.watchEmo", "ExtensionRequest", "scale", "socket", "3683124TnKqzV", "dec_button", "SFSObject", "Đây là phần quà miễn\nphí xem ", "getGuserid", "formatCoinWithCommas", "currentItemId", "hasOwnProperty", "__proto__", "construct", "undefined", "value", "onAdReward", "quantity", "5160966bvPALQ", "48813170VAtqhB", "call", "coin_icon", "watch_bage", "click", "onDecAmount", "alphaMask", "chipIcon", "overlay", " video để\nnhận ngay ", "cache", "textAmount", "selectedItem", "sham", "incButton", "#f5a3b1", "putInt", "updateSelectedItem", "Rectangle", "anchor", "9235310TbohVx", "addChild", "rightBg", "destroy", "getBool", "this hasn't been initialised - super() hasn't been called", "avatarKey", "writable", "Group", "8JtxOhx", "3072zFdOvt", "#f5c78a", "buy_button", "object", "avatar", "getEmoItems", "bind", "addItem", "11487654CmaQBw", "function", "onWatchClick", "Text", "ads", "getOwnPropertyDescriptor", "2472ucZnfo", "setTo", "decButton"];
		return (Ju = function() {
			return t
		})()
	}

	function Qu(t, e) {
		var n = Zu;
		return (Qu = Object[n(517)] ? Object[n(517)][n(494)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Zu(t, e) {
		var n = Ju();
		return (Zu = function(t, e) {
			return n[t -= 484]
		})(t, e)
	}

	function $u(t, e) {
		var n = Zu;
		if (e && (Xu(e) === n(491) || typeof e === n(497))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return th(t)
	}

	function th(t) {
		if (void 0 === t) throw new ReferenceError(Zu(616));
		return t
	}

	function eh(t) {
		var e = Zu;
		return (eh = Object[e(517)] ? Object.getPrototypeOf[e(494)]() : function(t) {
			return t[e(584)] || Object.getPrototypeOf(t)
		})(t)
	}! function(t, e) {
		for (var n = Zu, r = t();;) try {
			if (957531 == parseInt(n(563)) / 1 * (-parseInt(n(576)) / 2) + parseInt(n(502)) / 3 * (parseInt(n(488)) / 4) + -parseInt(n(533)) / 5 + -parseInt(n(590)) / 6 + -parseInt(n(611)) / 7 + parseInt(n(487)) / 8 * (parseInt(n(496)) / 9) + parseInt(n(591)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ju);
	var nh = null;
	const rh = function(t) {
		var e = Zu;
		! function(t, e) {
			var n = Zu;
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(508)] = Object.create(e && e[n(508)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(505)](t, n(508), {
				writable: !1
			}), e && Qu(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Zu;
			if (typeof Reflect === t(586) || !Reflect[t(585)]) return !1;
			if (Reflect[t(585)][t(604)]) return !1;
			if (typeof Proxy === t(497)) return !0;
			try {
				return Boolean.prototype[t(568)][t(592)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Zu,
				n = eh(a);
			if (o) {
				var r = eh(this).constructor;
				t = Reflect[e(585)](n, arguments, r)
			} else t = n[e(538)](this, arguments);
			return $u(this, t)
		});

		function c(t, e, n, r) {
			var i, a = Zu;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			})(this, c), (i = s[a(592)](this, t))[a(550)] = r, i[a(582)] = 12;
			var o = e,
				u = n;
			for (var h in i[a(547)] = new Br({
					x: o,
					y: u,
					column: 4,
					width: 638,
					height: 434,
					rowHeight: 213,
					columnWidth: 155,
					row: 1,
					leftDistance: 0,
					rightDistance: 0,
					distanceBetweenColumns: 6,
					distanceBetweenRows: 4,
					direction: "y"
				}, i[a(549)]), i[a(535)](i[a(547)]), null == nh && (nh = et[a(493)]()), i.giftItems = [], nh) i.giftItems[a(521)](i[a(495)](nh[h]));
			i.listView[a(530)] = i[a(512)], i[a(484)] = a(492) + ne[a(536)][a(580)](), i[a(549)][a(601)].checkImageKey(i[a(484)]) ? (i[a(492)] = i[a(549)][a(556)][a(507)](57, 40, i[a(484)]), i.applyTexture(116)) : (i[a(492)] = i[a(549)][a(556)][a(507)](57, 40, a(540), a(539)), i[a(492)][a(524)] = 116, i[a(492)][a(559)] = 116), i[a(492)].x = i.screen[a(613)].x + i[a(492)].x, i[a(492)].y = i[a(550)][a(613)].y + i[a(492)].y, i.add(i[a(492)]), i[a(553)] = new(Phaser[a(499)])(i.game, i.avatar.x + i[a(492)][a(524)] / 2, i[a(492)].y + i[a(492)][a(524)] + 30, "", {
				font: APP_FONT,
				fontWeight: 400,
				fontSize: 24,
				fill: "#f5a3b1"
			}), i[a(553)].anchor[a(503)](.5, 0), i[a(535)](i.selectedName), i[a(603)] = i.game.make.image(i.avatar.x + i[a(492)][a(524)] / 2, i[a(492)].y + i[a(492)][a(524)] / 2, "shopScreen", a(539)), i[a(603)][a(610)][a(503)](.5), i[a(535)](i[a(603)]);
			var f = i[a(549)][a(556)][a(507)](i.avatar.x + i[a(492)].width / 2, i[a(553)].y + 70, a(540), "input_amout_bg");
			f.anchor[a(503)](.5, 0), i.add(f);
			var l = new Lt(i[a(549)], 0, f.y - 1, a(540), a(577));
			l.x = f.x - f[a(524)] / 2 - 10, l[a(595)](i[a(596)], th(i)), i[a(535)](l);
			var p = new Lt(i[a(549)], 0, f.y - 1, a(540), a(506));
			return p.x = f.x + p[a(524)] / 2 + p[a(524)] / 2, p[a(595)](i[a(545)], th(i)), i[a(535)](p), i[a(602)] = new(Phaser[a(499)])(i[a(549)], i.avatar.x + i.avatar[a(524)] / 2 - 3, f.y + f[a(559)] / 2, 10, {
				font: APP_FONT,
				fontWeight: 700,
				fontSize: 24,
				fill: "#f5a3b1"
			}), i[a(602)][a(610)][a(503)](.5), i[a(535)](i[a(602)]), i[a(526)] = i.game[a(556)][a(567)](0, f.y + 75, "", {
				font: APP_FONT,
				fontWeight: 500,
				fontSize: 20,
				fill: "#f5c78a"
			}), i[a(535)](i[a(526)]), i.chipIcon = i[a(549)][a(556)].image(0, f.y + 73, a(540), a(593)), i[a(535)](i[a(598)]), i[a(510)] = new Lt(i[a(549)], 0, 0, "shopScreen", a(490)), i[a(510)][a(532)]("MUA NGAY", {
				font: APP_FONT,
				fontWeight: 700,
				fontSize: 22,
				fill: "#692700"
			}), i.buyButton.x = i[a(492)].x + i[a(492)][a(524)] / 2 - 5 - i[a(510)].width / 2, i[a(510)].y = i[a(550)].rightBg.y + i[a(550)].rightBg[a(559)] - i[a(510)][a(559)] - 20, i[a(535)](i[a(510)]), i.buyButton.click(i[a(564)], th(i)), i.watch_gift_desc = i[a(549)][a(556)][a(507)](i.avatar.x + i.avatar[a(524)] / 2 - 5, i[a(553)].y + 100, a(540), a(541)), i.watch_gift_desc[a(610)][a(503)](.5), i[a(535)](i[a(541)]), i[a(561)] = new(Phaser[a(499)])(i[a(549)], 0, 0, "", {
				font: APP_FONT,
				fontWeight: 400,
				fontSize: 17,
				fill: a(606),
				align: a(520)
			}), i[a(561)][a(610)][a(503)](.5), i[a(541)][a(612)](i.watch_gift_desc_text), i[a(544)] = new Lt(i.game, i.avatar.x + i.avatar[a(524)] / 2 - 5, 0, a(540), a(514)), i.watchButton[a(610)][a(503)](.5, 0), i[a(544)].y = i[a(550)].rightBg.y + i[a(550)][a(613)][a(559)] - i.watchButton[a(559)] - 20, i[a(544)][a(595)](i[a(498)], th(i)), i[a(535)](i[a(544)]), i[a(513)] = f, i[a(504)] = l, i[a(605)] = p, i[a(512)].length > 0 && i.updateSelectedItem(i[a(582)]), i
		}
		return n = c, i = Zu, (r = [{
			key: e(498),
			value: function() {
				var t = e;
				Tt[t(536)][t(522)] ? Tt[t(536)].show(Tt[t(531)]) : new G(game, {
					text: CyberInstance[t(557)].ADS_NOT_READY,
					buttonText: CyberInstance[t(557)][t(542)],
					hideCloseButton: !0
				})
			}
		}, {
			key: e(588),
			value: function() {
				var t = e,
					n = new(SFS2X[t(578)]);
				n[t(607)]("id", this[t(582)]), CyberInstance[t(575)][t(515)](new SFS2X.ExtensionRequest(t(572), n)), this[t(550)].openLoadingPopup()
			}
		}, {
			key: "onWatchEmo",
			value: function(t) {
				for (var n, r = e, i = t[r(562)]("id"), a = nh[i + ""], o = 0; o < this[r(512)][r(527)]; o++)
					if (this.giftItems[o][r(569)] == i) {
						n = this[r(512)][o];
						break
					} if (t[r(615)](r(566))) {
					var s = t[r(562)]("quantity");
					et[r(536)][r(558)](i, s);
					var c = et[r(536)][r(509)](i) + 1;
					et[r(536)][r(551)](i, c), n.watchText.setText(a[r(500)] - et.instance[r(509)](i)), new G(game, {
						text: "Bạn nhận vật phẩm thành công!",
						buttonText: CyberInstance[r(557)][r(542)],
						hideCloseButton: !0
					}), et.instance[r(509)](i) == a.ads && (n.watch.visible = !1, n[r(523)].visible = !0)
				}
				this.updateSelectedItem(i)
			}
		}, {
			key: e(564),
			value: function() {
				var t = e,
					n = new SFS2X.SFSObject;
				n[t(607)]("id", this.currentItemId), n[t(607)](t(589), parseInt(this[t(602)][t(567)])), CyberInstance[t(575)][t(515)](new(SFS2X[t(573)])("shop.buyGift", n)), this[t(550)][t(554)]()
			}
		}, {
			key: "onDecAmount",
			value: function() {
				var t = e,
					n = parseInt(this.textAmount[t(567)]);
				if (n > 0) {
					n -= n <= 10 ? 1 : 5, this[t(602)][t(511)](n);
					var r = nh[this[t(582)] + ""],
						i = parseInt(this[t(602)][t(567)]);
					this[t(526)][t(511)](u[t(581)](r[t(565)] * i))
				}
			}
		}, {
			key: "onIncAmount",
			value: function() {
				var t = e,
					n = parseInt(this[t(602)][t(567)]);
				n < 1e4 && (n += n < 10 ? 1 : 5, this[t(602)][t(511)](n));
				var r = nh[this[t(582)] + ""],
					i = parseInt(this.textAmount.text);
				this[t(526)].setText(u[t(581)](r.chip * i))
			}
		}, {
			key: "addItem",
			value: function(t) {
				var n = e,
					r = new Lt(this[n(549)], 0, 0, n(540), n(548));
				r[n(569)] = t.id, r[n(595)](this[n(555)], this);
				var i = this.game[n(556)][n(507)](0, 0, n(540), "gift_item_active");
				i[n(516)] = this[n(582)] == t.id, r.addChild(i), r[n(599)] = i;
				var a = new Phaser.Text(this[n(549)], r[n(524)] / 2, 11, t[n(571)], {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 19,
					fill: "#f5a3b1"
				});
				a[n(610)][n(503)](.5, 0), r.addChild(a);
				var o = this.game.make[n(507)](r[n(524)] / 2, r[n(559)] / 2 - 10, "shopScreen", t[n(528)]);
				if (15 == t.id ? o[n(574)][n(503)](.7) : 17 == t.id && o[n(574)][n(503)](.85), o[n(610)].setTo(.5), r[n(612)](o), t.chip) {
					var s = new(Phaser[n(499)])(this[n(549)], r[n(524)] / 2, 164, u[n(581)](t.chip), {
						font: APP_FONT,
						fontWeight: 500,
						fontSize: 18,
						fill: n(489)
					});
					r[n(612)](s);
					var c = s[n(524)],
						h = this[n(549)][n(556)][n(507)](r[n(524)] / 2 - c, 162, n(540), n(593));
					r.addChild(h), c > 0 ? (h.x = r.width / 2 - (h[n(524)] + 10 + c) / 2, s.x = h.x + h.width + 10) : (h.x = 30, s.x = h.x + h[n(524)] + 10)
				} else {
					var f = this[n(549)][n(556)][n(507)](0, 158, n(540), n(560));
					f.x = r.width / 2 - f[n(524)] / 2, r[n(612)](f), f.visible = !1, r[n(523)] = f;
					var l = this.game.make.image(0, 162, n(540), n(594));
					l.x = r[n(524)] / 2 - l[n(524)] / 2, r[n(612)](l);
					var p = et[n(536)][n(509)](t.id),
						y = new(Phaser[n(499)])(this[n(549)], 106, 17, t[n(500)] - p, {
							font: APP_FONT,
							fontWeight: 500,
							fontSize: 18,
							fill: "#ffffff"
						});
					y[n(610)][n(503)](.5), l[n(612)](y), r.watchText = y, r.watch = l, p >= t[n(500)] && (f[n(516)] = !0, l[n(516)] = !1)
				}
				return r
			}
		}, {
			key: e(555),
			value: function(t) {
				for (var n = e, r = 0; r < this[n(512)].length; r++)
					if (this[n(512)][r][n(569)] == this.currentItemId) {
						this[n(512)][r][n(599)][n(516)] = !1;
						break
					} this[n(582)] = t[n(569)], t.overlay[n(516)] = !0, this.updateSelectedItem(t.itemId)
			}
		}, {
			key: e(608),
			value: function(t) {
				var n = e,
					r = nh[t + ""];
				if (this[n(603)][n(552)]("shopScreen", r[n(528)]), this[n(553)][n(511)](r[n(571)]), r.chip) {
					this[n(605)].visible = !0, this[n(504)][n(516)] = !0, this[n(513)][n(516)] = !0, this[n(602)][n(516)] = !0, this[n(598)].visible = !0, this.chipText.visible = !0, this[n(541)][n(516)] = !1, this.watchButton.visible = !1, this[n(510)][n(516)] = !0;
					var i = parseInt(this[n(602)][n(567)]);
					this[n(526)].setText(u[n(581)](r[n(565)] * i));
					var a = this[n(526)].width;
					a > 0 ? (this[n(598)].x = this[n(550)].rightBg.x + this[n(550)][n(613)][n(524)] / 2 - (this[n(598)].width + 15 + a) / 2 - 10, this.chipText.x = this[n(598)].x + this.chipIcon.width + 15) : (this[n(598)].x = this.screen[n(613)].x + 50, this[n(526)].x = this[n(598)].x + this[n(598)][n(524)] + 15)
				} else {
					this[n(605)][n(516)] = !1, this[n(504)][n(516)] = !1, this.inputBg.visible = !1, this[n(602)][n(516)] = !1, this.chipIcon[n(516)] = !1, this[n(526)].visible = !1, this.buyButton.visible = !1;
					var o = et[n(536)][n(509)](r.id),
						s = r[n(500)] - o;
					if (s > 0) {
						var c = n(579) + s + n(600) + r[n(589)] * s + n(534);
						this.watch_gift_desc_text[n(511)](c), this[n(541)][n(516)] = !0, this[n(544)][n(516)] = !0
					} else this[n(544)].visible = !1, this[n(541)][n(516)] = !1
				}
			}
		}, {
			key: e(529),
			value: function(t) {
				var n = e,
					r = new(Phaser[n(609)])(0, 0, t, t),
					i = game[n(556)].image(0, 0, "shopScreen", n(539));
				i[n(524)] = t, i.height = t;
				var a = game[n(556)][n(537)]();
				a[n(543)](i), i[n(614)]();
				var o = this[n(549)].make[n(537)](t, t);
				o[n(597)](this[n(484)], a, r), this[n(492)][n(552)](o), this.avatar.width = t, this[n(492)].height = t
			}
		}, {
			key: e(614),
			value: function() {
				var t = e;
				Ku(eh(c.prototype), t(614), this)[t(592)](this)
			}
		}]) && qu(n.prototype, r), Object[i(505)](n, i(508), {
			writable: !1
		}), c
	}(Phaser[Hu(486)]);
	var ih = ph;

	function ah(t) {
		var e = ph;
		return (ah = e(520) == typeof Symbol && e(494) == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(520) == typeof Symbol && t[n(437)] === Symbol && t !== Symbol[n(483)] ? n(494) : typeof t
		})(t)
	}

	function oh(t, e) {
		for (var n = ph, r = 0; r < e[n(491)]; r++) {
			var i = e[r];
			i[n(514)] = i.enumerable || !1, i[n(448)] = !0, n(517) in i && (i.writable = !0), Object[n(418)](t, i[n(410)], i)
		}
	}

	function sh() {
		var t = ph;
		return sh = typeof Reflect !== t(469) && Reflect[t(521)] ? Reflect.get[t(490)]() : function(e, n, r) {
			var i = t,
				a = ch(e, n);
			if (a) {
				var o = Object[i(408)](a, n);
				return o[i(521)] ? o[i(521)][i(527)](arguments[i(491)] < 3 ? e : r) : o[i(517)]
			}
		}, sh[t(487)](this, arguments)
	}

	function ch(t, e) {
		for (var n = ph; !Object[n(483)][n(403)][n(527)](t, e) && null !== (t = lh(t)););
		return t
	}

	function uh(t, e) {
		var n = ph;
		return (uh = Object[n(529)] ? Object[n(529)][n(490)]() : function(t, e) {
			return t[n(478)] = e, t
		})(t, e)
	}

	function hh(t, e) {
		var n = ph;
		if (e && (ah(e) === n(438) || typeof e === n(520))) return e;
		if (void 0 !== e) throw new TypeError(n(452));
		return fh(t)
	}

	function fh(t) {
		if (void 0 === t) throw new ReferenceError(ph(501));
		return t
	}

	function lh(t) {
		var e = ph;
		return (lh = Object[e(529)] ? Object[e(428)].bind() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(428)](t)
		})(t)
	}

	function ph(t, e) {
		var n = yh();
		return (ph = function(t, e) {
			return n[t -= 402]
		})(t, e)
	}

	function yh() {
		var t = ["setTo", "cache", "create", "applyTexture", "no_avatar", "ready", "enumerable", "gift_item", "getGuserid", "value", " video quảng cáo\nngắn bạn sẽ nhận ngay\nkhung avatar ", "selectedName", "function", "get", "add", "12RGCgey", "watch_gift_desc_text", "coin_icon", "#ffffff", "call", "send", "setPrototypeOf", "lang", "buy_button", "#f5c78a", "getAvatarItems", "buyButton", "avatar", "push", "hasOwnProperty", "387764KjRMEA", "construct", "listView", "valueOf", "getOwnPropertyDescriptor", "Cannot call a class as a function", "key", "giftItems", "shop.watchAvatar", "updateAvatar", "watch_button", "loadTexture", "Text", "addItem", "defineProperty", "screen", "load", "ADS_NOT_READY", "chip", "\nsử dụng trong ", "getInt", "addChild", "inputBg", "avatarKey", "getPrototypeOf", "visible", "game", "shopScreen", "image", "destroy", "sham", "chipIcon", "text", "constructor", "object", " ngày", "viewList", "instance", "watch", "Group", "2xdkSQp", "center", "anchor", "SFSObject", "configurable", "ads", "watchButton", "selectedItem", "Derived constructors may only return object or undefined", "formatCoinWithCommas", "overlay", "icon_complete", "bitmapData", "gift_item_active", "updateWatchCount", "rightBg", "CLOSE", "Super expression must either be null or a function", "ExtensionRequest", "socket", "MUA NGAY", "chipText", "success", "2853298mYekWq", "onWatchClick", "undefined", "height", "width", "Rectangle", "onAdReward", "25072929esmTlY", "191530qNHLaR", "getWatchCount", "2697789ZAafox", "__proto__", "quantity", "completeIcon", "addText", "currentItemId", "prototype", "2329OHdHJg", "itemId", "#692700", "apply", "name", "watch_gift_desc", "bind", "length", "#f5a3b1", "setText", "symbol", "watchText", "make", "Xem ", "6065120TDZmpN", "click", "onBoxClick", "this hasn't been initialised - super() hasn't been called", "vip", "BUY_AVATAR", "updateSelectedItem", "getAvatar", "putInt", "10NcwOuQ"];
		return (yh = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = ph, r = t();;) try {
			if (450826 == parseInt(n(484)) / 1 + -parseInt(n(444)) / 2 * (parseInt(n(477)) / 3) + parseInt(n(404)) / 4 + parseInt(n(475)) / 5 + parseInt(n(523)) / 6 * (-parseInt(n(467)) / 7) + -parseInt(n(498)) / 8 + -parseInt(n(474)) / 9 * (-parseInt(n(507)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(yh);
	var dh = null;
	const vh = function(t) {
		var e = ph;
		! function(t, e) {
			var n = ph;
			if (typeof e !== n(520) && null !== e) throw new TypeError(n(461));
			t[n(483)] = Object[n(510)](e && e[n(483)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(418)](t, n(483), {
				writable: !1
			}), e && uh(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = ph;
			if (typeof Reflect === t(469) || !Reflect[t(405)]) return !1;
			if (Reflect[t(405)][t(434)]) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean[t(483)][t(407)][t(527)](Reflect[t(405)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = ph,
				n = lh(a);
			if (o) {
				var r = lh(this).constructor;
				t = Reflect[e(405)](n, arguments, r)
			} else t = n[e(487)](this, arguments);
			return hh(this, t)
		});

		function c(t, e, n, r) {
			var i, a = ph;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(ph(409))
			})(this, c), (i = s[a(527)](this, t))[a(419)] = r, i.currentItemId = 9;
			var o = e,
				u = n;
			for (var h in i[a(406)] = new Br({
					x: o,
					y: u,
					column: 4,
					width: 638,
					height: 434,
					rowHeight: 213,
					columnWidth: 155,
					row: 1,
					leftDistance: 0,
					rightDistance: 0,
					distanceBetweenColumns: 6,
					distanceBetweenRows: 4,
					direction: "y"
				}, i.game), i[a(522)](i.listView), null == dh && (dh = et[a(533)]()), i[a(411)] = [], dh) dh[h][a(502)] || i[a(411)][a(402)](i[a(417)](dh[h]));
			i[a(406)][a(440)] = i[a(411)], i[a(427)] = a(535) + ne[a(441)][a(516)](), i[a(430)][a(509)].checkImageKey(i[a(427)]) ? (i[a(535)] = i[a(430)][a(496)].image(57, 40, i.avatarKey), i[a(511)](116)) : (i[a(535)] = i.game.make[a(432)](57, 40, a(431), "no_avatar"), i[a(535)][a(471)] = 116, i[a(535)][a(470)] = 116), i[a(535)].x = i[a(419)][a(459)].x + i.avatar.x, i[a(535)].y = i[a(419)].rightBg.y + i[a(535)].y, i[a(522)](i[a(535)]), i[a(519)] = new(Phaser[a(416)])(i.game, i[a(535)].x + i[a(535)][a(471)] / 2, i.avatar.y + i[a(535)][a(471)] + 15, "", {
				font: APP_FONT,
				fontWeight: 400,
				fontSize: 24,
				fill: a(492)
			}), i[a(519)][a(446)][a(508)](.5, 0), i[a(522)](i[a(519)]), i.selectedItem = i[a(430)][a(496)][a(432)](i.avatar.x + i[a(535)].width / 2, i.avatar.y + i[a(535)][a(471)] / 2, a(431), a(512)), i[a(451)][a(446)][a(508)](.5), i[a(522)](i[a(451)]);
			var f = i[a(430)][a(496)][a(432)](i.avatar.x + i[a(535)].width / 2, i[a(519)].y + 40, "shopScreen", "watch_gift_desc");
			return f[a(446)][a(508)](.5, 0), i[a(522)](f), i[a(465)] = i[a(430)][a(496)][a(436)](0, f.y + f[a(470)] + 14, "", {
				font: APP_FONT,
				fontWeight: 500,
				fontSize: 20,
				fill: "#f5c78a"
			}), i.add(i[a(465)]), i[a(435)] = i.game[a(496)][a(432)](0, f.y + f[a(470)] + 12, a(431), a(525)), i[a(522)](i[a(435)]), i[a(534)] = new Lt(i.game, 0, 0, "shopScreen", a(531)), i.buyButton[a(481)](a(464), {
				font: APP_FONT,
				fontWeight: 700,
				fontSize: 22,
				fill: a(486)
			}), i[a(534)].x = i[a(535)].x + i[a(535)].width / 2 - 5 - i.buyButton[a(471)] / 2, i[a(534)].y = i[a(419)][a(459)].y + i[a(419)][a(459)][a(470)] - i[a(534)][a(470)] - 20, i.add(i.buyButton), i[a(489)] = i[a(430)][a(496)][a(432)](i[a(535)].x + i[a(535)][a(471)] / 2 - 5, i.selectedName.y + 100, a(431), "watch_gift_desc"), i.watch_gift_desc[a(446)][a(508)](.5), i.add(i[a(489)]), i[a(524)] = new(Phaser[a(416)])(i[a(430)], 0, 0, "", {
				font: APP_FONT,
				fontWeight: 400,
				fontSize: 17,
				fill: "#f5a3b1",
				align: a(445)
			}), i[a(524)].anchor[a(508)](.5), i.watch_gift_desc[a(425)](i[a(524)]), i.watchButton = new Lt(i[a(430)], i[a(535)].x + i[a(535)].width / 2 - 5, 0, a(431), a(414)), i[a(450)][a(446)][a(508)](.5, 0), i[a(450)].y = i[a(419)][a(459)].y + i[a(419)].rightBg[a(470)] - i[a(450)][a(470)] - 20, i.watchButton[a(499)](i[a(468)], fh(i)), i[a(522)](i.watchButton), i.inputBg = f, i[a(504)](i[a(482)]), i
		}
		return n = c, i = ph, (r = [{
			key: e(468),
			value: function() {
				var t = e;
				Tt.instance[t(513)] ? Tt.instance.show(Tt[t(503)]) : new G(game, {
					text: CyberInstance[t(530)][t(421)],
					buttonText: CyberInstance[t(530)][t(460)],
					hideCloseButton: !0
				})
			}
		}, {
			key: e(473),
			value: function() {
				var t = e,
					n = new(SFS2X[t(447)]);
				n[t(506)]("id", this[t(482)]), CyberInstance[t(463)][t(528)](new(SFS2X[t(462)])(t(412), n)), this.screen.openLoadingPopup()
			}
		}, {
			key: "onWatchAvatar",
			value: function(t) {
				for (var n, r = e, i = t[r(424)]("id"), a = dh[i + ""], o = 0; o < this[r(411)].length; o++)
					if (this[r(411)][o][r(485)] == i) {
						n = this[r(411)][o];
						break
					} if (t.containsKey(r(466))) {
					n[r(442)][r(429)] = !1, n.completeIcon[r(429)] = !0;
					var s = 864e5 * a.quantity;
					et[r(441)][r(413)](i, s), new ou(game, {
						type: "AVATAR",
						id: i,
						duration: a.quantity
					})
				} else {
					var c = et[r(441)][r(476)](i) + 1;
					et[r(441)][r(458)](i, c), n[r(495)].setText(a[r(449)] - et[r(441)][r(476)](i))
				}
				this[r(504)](i)
			}
		}, {
			key: e(417),
			value: function(t) {
				var n = e,
					r = new Lt(this[n(430)], 0, 0, n(431), n(515));
				r[n(485)] = t.id, r[n(499)](this[n(500)], this);
				var i = this[n(430)][n(496)][n(432)](0, 0, n(431), n(457));
				i[n(429)] = this[n(482)] == t.id, r[n(425)](i), r.overlay = i;
				var a = new(Phaser[n(416)])(this[n(430)], r[n(471)] / 2, 11, t.name, {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 19,
					fill: n(492)
				});
				a[n(446)][n(508)](.5, 0), r[n(425)](a), a[n(493)](t.name);
				var o = this[n(430)].make[n(432)](r.width / 2, r.height / 2 - 10, "shopScreen", t.icon);
				if (o[n(446)].setTo(.5), r[n(425)](o), t[n(422)]) {
					var s = new(Phaser[n(416)])(this[n(430)], r[n(471)] / 2, 164, u.formatCoinWithCommas(t.chip), {
						font: APP_FONT,
						fontWeight: 500,
						fontSize: 18,
						fill: n(532)
					});
					r[n(425)](s), s.setText(u[n(453)](t[n(422)]));
					var c = s[n(471)],
						h = this.game.make[n(432)](r[n(471)] / 2 - c, 162, n(431), n(525));
					r.addChild(h), c > 0 ? (h.x = r[n(471)] / 2 - (h[n(471)] + 10 + c) / 2, s.x = h.x + h.width + 10) : (h.x = 30, s.x = h.x + h[n(471)] + 10)
				} else {
					var f = this.game[n(496)].image(0, 158, n(431), n(455));
					if (f.x = r[n(471)] / 2 - f[n(471)] / 2, r[n(425)](f), r[n(480)] = f, et[n(441)].getAvatar(t.id)) f[n(429)] = !0;
					else {
						var l = this[n(430)].make[n(432)](0, 162, n(431), "watch_bage");
						l.x = r[n(471)] / 2 - l[n(471)] / 2, r[n(425)](l);
						var p = et[n(441)][n(476)](t.id),
							y = new Phaser.Text(this.game, 106, 17, t[n(449)] - p, {
								font: APP_FONT,
								fontWeight: 500,
								fontSize: 18,
								fill: n(526)
							});
						y[n(446)].setTo(.5), l[n(425)](y), r[n(495)] = y, r.watch = l, f[n(429)] = !1, y.setText(t.ads - p)
					}
				}
				return r
			}
		}, {
			key: e(500),
			value: function(t) {
				for (var n = e, r = 0; r < this[n(411)][n(491)]; r++)
					if (this[n(411)][r][n(485)] == this[n(482)]) {
						this[n(411)][r][n(454)][n(429)] = !1;
						break
					} this[n(482)] = t[n(485)], t[n(454)][n(429)] = !0, this.updateSelectedItem(t[n(485)])
			}
		}, {
			key: "updateSelectedItem",
			value: function(t) {
				var n = e,
					r = dh[t + ""];
				if (this.selectedItem.loadTexture(n(431), r.icon), this.selectedName[n(493)](r[n(488)]), this.selectedItem.scale[n(508)](1.35), r.chip) {
					this[n(426)].visible = !0, this[n(435)][n(429)] = !0, this.chipText[n(429)] = !0, this.watch_gift_desc[n(429)] = !1, this[n(450)][n(429)] = !1, this.chipText.setText(u.formatCoinWithCommas(r.chip));
					var i = this.chipText[n(471)];
					i > 0 ? (this[n(435)].x = this[n(419)].rightBg.x + this[n(419)][n(459)][n(471)] / 2 - (this.chipIcon[n(471)] + 15 + i) / 2 - 10, this[n(465)].x = this[n(435)].x + this[n(435)].width + 15) : (this[n(435)].x = this[n(419)][n(459)].x + 50, this[n(465)].x = this[n(435)].x + this[n(435)][n(471)] + 15)
				} else if (this[n(426)].visible = !1, this[n(435)][n(429)] = !1, this[n(465)][n(429)] = !1, this.buyButton[n(429)] = !1, et[n(441)][n(505)](r.id)) {
					this.watchButton[n(429)] = !1;
					var a = n(497) + r[n(449)] + n(518) + r[n(488)] + "\nsử dụng trong " + r.quantity + n(439);
					this[n(524)][n(493)](a)
				} else {
					this[n(489)][n(429)] = !0, this[n(450)][n(429)] = !0;
					var o = n(497) + r[n(449)] + " video quảng cáo\nngắn bạn sẽ nhận ngay\nkhung avatar " + r[n(488)] + n(423) + r[n(479)] + n(439);
					this[n(524)][n(493)](o)
				}
			}
		}, {
			key: "applyTexture",
			value: function(t) {
				var n = e,
					r = new(Phaser[n(472)])(0, 0, t, t),
					i = game.make[n(432)](0, 0, n(431), n(512));
				i[n(471)] = t, i[n(470)] = t;
				var a = game.make[n(456)]();
				a[n(420)](i), i[n(433)]();
				var o = this[n(430)][n(496)][n(456)](t, t);
				o.alphaMask(this.avatarKey, a, r), this.avatar[n(415)](o), this[n(535)][n(471)] = t, this[n(535)][n(470)] = t
			}
		}, {
			key: e(433),
			value: function() {
				var t = e;
				sh(lh(c[t(483)]), t(433), this)[t(527)](this)
			}
		}]) && oh(n[i(483)], r), Object[i(418)](n, i(483), {
			writable: !1
		}), c
	}(Phaser[ih(443)]);

	function bh(t) {
		var e = Ch;
		return (bh = e(400) == typeof Symbol && e(504) == typeof Symbol[e(442)] ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t[e(389)] === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function gh(t, e) {
		for (var n = Ch, r = 0; r < e[n(401)]; r++) {
			var i = e[r];
			i[n(380)] = i[n(380)] || !1, i[n(515)] = !0, "value" in i && (i[n(492)] = !0), Object[n(419)](t, i[n(469)], i)
		}
	}

	function mh() {
		var t = Ch;
		return mh = "undefined" != typeof Reflect && Reflect[t(431)] ? Reflect[t(431)].bind() : function(e, n, r) {
			var i = t,
				a = Ih(e, n);
			if (a) {
				var o = Object[i(506)](a, n);
				return o[i(431)] ? o.get[i(406)](arguments.length < 3 ? e : r) : o[i(510)]
			}
		}, mh[t(496)](this, arguments)
	}

	function Ih(t, e) {
		for (var n = Ch; !Object[n(407)][n(487)].call(t, e) && null !== (t = kh(t)););
		return t
	}

	function wh(t, e) {
		var n = Ch;
		return (wh = Object[n(505)] ? Object.setPrototypeOf[n(466)]() : function(t, e) {
			return t[n(491)] = e, t
		})(t, e)
	}

	function Sh(t, e) {
		var n = Ch;
		if (e && (bh(e) === n(414) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(495));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Ch(399));
			return t
		}(t)
	}

	function kh(t) {
		var e = Ch;
		return (kh = Object[e(505)] ? Object.getPrototypeOf[e(466)]() : function(t) {
			var n = e;
			return t[n(491)] || Object[n(485)](t)
		})(t)
	}

	function Oh() {
		var t = ["9MmNjDn", "destroy", "#fbafb3", "configurable", "preload", "enumerable", "langCode", "formatCoinWithCommas", "make", "events", "emoji_tab", "avatarKey", "updateContent", "setText", "constructor", "cache", "closeLoadingPopup", "Rectangle", "onTabClick", "addTabs", "right_bg", "#f5c78a", "shutdown", "rightBg", "this hasn't been initialised - super() hasn't been called", "function", "length", "instance", "create", "addChild", "2358719AcLRmO", "call", "prototype", "14808mEPAEa", "giftContent", "#ffc6b7", "avatar", "chipTab", "5650780vVFyUQ", "object", "iapContent", "avatar_tab", "2090316zviqxm", "addOnce", "defineProperty", "avatar_bg", "currentTab", "inputEnabled", "openLoadingPopup", "addText", "giftTab", "height", "state", "game", "addProfileInfo", "background", "get", "homeScreenBG1", "gift_tab_active", "loadTexture", "click", "getDisplayName", "start", "construct", "#bc6f80", "assetUrl", "shopScreen", "iterator", "wrap", "no_avatar", "time", "playButtonSound", "Super expression must either be null or a function", "/atlas/shopScreen/shop.png", "close_icon", "alphaMask", "text", "undefined", "sound", "buttonText", "Tương tác", "checkImageKey", "init", "emoContent", "tabIdx", "gift_tab", "onInputDown", "width", "avatarContent", "462896DwVLwb", "setStyle", "bind", "avatar_tab_active", "world", "key", "screenReady", "Chip", "Quà tặng", "chip_tab", "72tgCMyT", "profileCoin", "_title", "profileGroup", "visible", "7yIelbe", "bitmapData", "emoTab", "sham", "162565LhOUEc", "/bigImage/homeScreenBG2.jpg", "getPrototypeOf", "chip_tab_active", "hasOwnProperty", "wrapBg", "controller", "Khung hình\nđại diện", "__proto__", "writable", "addContents", "load", "Derived constructors may only return object or undefined", "apply", "emoji_tab_active", "setTo", "homeScreenBG2", "add", "112BQvRpm", "657139bhcFVa", "applyTexture", "symbol", "setPrototypeOf", "getOwnPropertyDescriptor", "avatarTab", "group", "260VFumeA", "value", "image"];
		return (Oh = function() {
			return t
		})()
	}

	function Ch(t, e) {
		var n = Oh();
		return (Ch = function(t, e) {
			return n[t -= 379]
		})(t, e)
	}! function(t, e) {
		for (var n = Ch, r = t();;) try {
			if (519581 == -parseInt(n(502)) / 1 + parseInt(n(509)) / 2 * (parseInt(n(408)) / 3) + parseInt(n(501)) / 4 * (-parseInt(n(483)) / 5) + parseInt(n(417)) / 6 * (-parseInt(n(479)) / 7) + -parseInt(n(464)) / 8 + -parseInt(n(512)) / 9 * (-parseInt(n(413)) / 10) + -parseInt(n(405)) / 11 * (-parseInt(n(474)) / 12)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Oh);
	const Th = function(t) {
		var e = Ch;
		! function(t, e) {
			var n = Ch;
			if ("function" != typeof e && null !== e) throw new TypeError(n(447));
			t.prototype = Object.create(e && e[n(407)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(419)](t, n(407), {
				writable: !1
			}), e && wh(t, e)
		}(h, t);
		var n, r, i, o, s, c = (o = h, s = function() {
			var t = Ch;
			if (typeof Reflect === t(452) || !Reflect[t(438)]) return !1;
			if (Reflect[t(438)][t(482)]) return !1;
			if (typeof Proxy === t(400)) return !0;
			try {
				return Boolean[t(407)].valueOf.call(Reflect[t(438)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Ch,
				n = kh(o);
			if (s) {
				var r = kh(this).constructor;
				t = Reflect.construct(n, arguments, r)
			} else t = n[e(496)](this, arguments);
			return Sh(this, t)
		});

		function h() {
			var t = Ch;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, h), c[t(406)](this)
		}
		return n = h, i = Ch, (r = [{
			key: "init",
			value: function() {
				var t = Ch;
				mh(kh(h.prototype), t(457), this).call(this), this[t(489)] || (ft[t(402)].inited ? this[t(421)] = 1 : this[t(421)] = 2, this[t(489)] = new hu(this)), this[t(430)] = this[t(500)][t(511)](0, 0, t(432)), this.background[t(462)] = this[t(428)].width, this[t(430)].height = this.game[t(426)]
			}
		}, {
			key: e(379),
			value: function() {
				var t = e;
				this[t(423)](), this[t(428)][t(390)].checkImageKey("homeScreenBG2") || this[t(494)].image(t(499), window[t(440)] + t(484)), this[t(428)][t(390)][t(456)]("shopScreen") || this.load.atlasJSONHash("shopScreen", window[t(440)] + t(448), window[t(440)] + "/atlas/shopScreen/shop.json")
			}
		}, {
			key: e(403),
			value: function() {
				var t = e;
				this[t(391)](), this[t(430)].loadTexture(t(499)), this.background[t(462)] = this[t(428)][t(462)], this[t(430)][t(426)] = this[t(428)][t(426)], this.add[t(511)](this[t(428)][t(462)] / 2, 20, "shopScreen", CyberInstance[t(381)] + t(476)).anchor[t(498)](.5, 0);
				var n = this.add[t(511)](0, 20, "shopScreen", t(449));
				n.x = this[t(428)][t(462)] - n[t(462)] - 20, n[t(422)] = !0, n[t(384)][t(461)][t(418)]((function() {
					var e = t;
					CyberInstance[e(453)][e(446)](), this[e(428)][e(427)][e(437)]("HomeScreen", !0, !1)
				}), this), this[t(488)] = this[t(500)][t(511)](0, 0, t(441), t(443)), this[t(488)].y = this[t(428)].height / 2 - this[t(488)][t(426)] / 2, this[t(398)] = this[t(500)].image(0, this[t(488)].y, "shopScreen", t(395)), this[t(394)](), this[t(493)](), this[t(429)](), this.game[t(445)][t(384)][t(500)](100, (function() {
					a[t(379)]()
				})), this[t(470)] = !0
			}
		}, {
			key: e(493),
			value: function() {
				var t = e;
				this[t(415)] = new Su(this[t(428)], this.wrapBg.x + 30, this[t(488)].y + 16), this[t(415)][t(478)] = !1, this.game.world[t(500)](this[t(415)]), this[t(409)] = new Vu(this[t(428)], this[t(488)].x + 11, this[t(488)].y + 16, this), this[t(409)][t(478)] = !1, this.game.world[t(500)](this[t(409)]), this[t(463)] = new vh(this.game, this.wrapBg.x + 11, this[t(488)].y + 16, this), this[t(463)][t(478)] = !1, this[t(428)].world[t(500)](this[t(463)]), this.emoContent = new rh(this[t(428)], this[t(488)].x + 11, this[t(488)].y + 16, this), this[t(458)][t(478)] = !1, this.game[t(468)][t(500)](this[t(458)]), this[t(398)][t(478)] = !1, this[t(387)]()
			}
		}, {
			key: "addTabs",
			value: function() {
				var t = e,
					n = this[t(488)].y + 25;
				this[t(412)] = new Lt(this[t(428)], 0, n, t(441), 1 == this[t(421)] ? t(486) : t(473)), this[t(412)][t(424)](t(471), {
					font: APP_FONT,
					fill: 1 == this[t(421)] ? t(410) : "#bc6f80",
					fontWeight: 400,
					fontSize: 24
				}), this[t(412)][t(454)].x = 140, this[t(412)][t(459)] = 1, this[t(412)][t(435)](this[t(393)], this), this[t(428)][t(468)][t(404)](this[t(412)]), this[t(412)].x = this[t(428)][t(462)] / 2 - (this[t(412)][t(462)] + this[t(488)][t(462)]) / 2, this[t(488)].x = this[t(412)].x + this[t(412)][t(462)], this[t(398)].x = this[t(488)].x + this[t(488)][t(462)] - this[t(398)][t(462)], ft[t(402)].inited ? n += this[t(412)][t(426)] + 10 : this[t(412)][t(478)] = !1, this.giftTab = new Lt(this[t(428)], this[t(412)].x, n, t(441), 2 == this[t(421)] ? t(433) : t(460)), this[t(425)][t(424)](t(472), {
					font: APP_FONT,
					fill: 2 == this.currentTab ? t(410) : t(439),
					fontWeight: 400,
					fontSize: 24
				}), this[t(425)].tabIdx = 2, this[t(425)].buttonText.x = 140, this.giftTab[t(435)](this.onTabClick, this), this[t(428)][t(468)][t(404)](this.giftTab), n += this[t(412)][t(426)] + 10, this[t(481)] = new Lt(this[t(428)], this[t(412)].x, n, t(441), 3 == this[t(421)] ? t(497) : t(385)), this[t(481)][t(424)](t(455), {
					font: APP_FONT,
					fill: 3 == this[t(421)] ? t(410) : t(439),
					fontWeight: 400,
					fontSize: 24
				}), this[t(481)].tabIdx = 3, this[t(481)][t(454)].x = 140, this.emoTab[t(435)](this[t(393)], this), this[t(428)][t(468)][t(404)](this[t(481)]), this.emoTab[t(478)] = !1, this[t(507)] = new Lt(this[t(428)], this[t(412)].x, n, t(441), 4 == this[t(421)] ? "avatar_tab_active" : "avatar_tab"), this[t(507)][t(424)](t(490), {
					font: APP_FONT,
					fill: 4 == this[t(421)] ? t(410) : t(439),
					fontWeight: 400,
					fontSize: 24,
					align: "center"
				}), this.avatarTab[t(459)] = 4, this[t(507)][t(454)].x = 140, this[t(507)].click(this[t(393)], this), this.game[t(468)][t(404)](this.avatarTab), n += this[t(412)].height + 10
			}
		}, {
			key: e(393),
			value: function(t) {
				var n = e;
				t.tabIdx != this[n(421)] && (this[n(421)] = t[n(459)], this[n(412)][n(434)](n(441), 1 == this[n(421)] ? "chip_tab_active" : n(473)), this[n(425)][n(434)](n(441), 2 == this[n(421)] ? n(433) : "gift_tab"), this[n(481)][n(434)](n(441), 3 == this[n(421)] ? n(497) : n(385)), this[n(507)][n(434)](n(441), 4 == this.currentTab ? n(467) : n(416)), this[n(412)].buttonText[n(465)]({
					font: APP_FONT,
					fill: 1 == this[n(421)] ? n(410) : n(439),
					fontWeight: 400,
					fontSize: 24
				}), this.giftTab[n(454)][n(465)]({
					font: APP_FONT,
					fill: 2 == this[n(421)] ? n(410) : "#bc6f80",
					fontWeight: 400,
					fontSize: 24
				}), this[n(481)][n(454)][n(465)]({
					font: APP_FONT,
					fill: 3 == this[n(421)] ? "#ffc6b7" : "#bc6f80",
					fontWeight: 400,
					fontSize: 24
				}), this[n(507)].buttonText.setStyle({
					font: APP_FONT,
					fill: 4 == this[n(421)] ? n(410) : n(439),
					fontWeight: 400,
					fontSize: 24
				}), this[n(387)]())
			}
		}, {
			key: e(387),
			value: function() {
				var t = e;
				this[t(415)][t(478)] = 1 == this[t(421)], this[t(409)][t(478)] = 2 == this[t(421)], this.emoContent[t(478)] = 3 == this[t(421)], this[t(463)][t(478)] = 4 == this[t(421)], this.rightBg[t(478)] = 1 != this[t(421)]
			}
		}, {
			key: e(429),
			value: function() {
				var t = e;
				this[t(477)] = this[t(428)][t(500)][t(508)]();
				var n = this[t(477)][t(403)](15, 0, "shopScreen", t(420));
				n.y = this[t(428)][t(426)] - n[t(426)] - 5;
				var r = this[t(428)][t(500)].text(n.x + 105, n.y + 15, ne[t(402)].getDisplayName(), {
					font: APP_FONT,
					fontSize: 26,
					fill: t(514),
					fontWeight: 400
				});
				this[t(477)][t(500)](r), r[t(388)](ne[t(402)][t(436)]()), this.profileCoin = this[t(428)][t(500)][t(451)](r.x, r.y + 35, "", {
					font: APP_FONT,
					fontSize: 24,
					fill: t(396),
					fontWeight: 400
				}), this[t(477)][t(500)](this[t(475)]), this[t(475)][t(388)](u[t(382)](ne.instance.getCoin())), this.avatarKey = t(411) + ne.instance.getGuserid(), this[t(428)][t(390)].checkImageKey(this[t(386)]) ? (this[t(411)] = this.game.make[t(511)](15, 15, this[t(386)]), this[t(503)](88)) : (this[t(411)] = this[t(428)][t(383)][t(511)](15, 15, t(441), "no_avatar"), this[t(411)][t(462)] = 88, this.avatar[t(426)] = 88, this[t(428)].load.image(this.avatarKey, CyberInstance[t(411)]), this[t(428)][t(494)][t(437)]()), this[t(411)].x = n.x + 2, this[t(411)].y = n.y + 2, this[t(477)][t(500)](this.avatar)
			}
		}, {
			key: e(503),
			value: function(t) {
				var n = e,
					r = new(Phaser[n(392)])(0, 0, t, t),
					i = game.make[n(511)](0, 0, n(441), n(444));
				i.width = t, i[n(426)] = t;
				var a = game.make[n(480)]();
				a[n(494)](i), i[n(513)]();
				var o = this.game.make[n(480)](t, t);
				o[n(450)](this[n(386)], a, r), this[n(411)][n(434)](o), this.avatar[n(462)] = t, this[n(411)][n(426)] = t
			}
		}, {
			key: "updateProfileCoin",
			value: function(t) {
				var n = e;
				this[n(475)] && this[n(475)][n(388)](u[n(382)](t))
			}
		}, {
			key: e(397),
			value: function() {
				var t = e;
				mh(kh(h[t(407)]), t(397), this)[t(406)](this)
			}
		}]) && gh(n.prototype, r), Object.defineProperty(n, i(407), {
			writable: !1
		}), h
	}(le);
	var Ph = Nh;

	function xh(t) {
		var e = Nh;
		return (xh = "function" == typeof Symbol && e(424) == typeof Symbol[e(412)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(354) == typeof Symbol && t[n(358)] === Symbol && t !== Symbol[n(390)] ? "symbol" : typeof t
		})(t)
	}

	function _h(t, e) {
		for (var n = Nh, r = 0; r < e[n(406)]; r++) {
			var i = e[r];
			i[n(372)] = i.enumerable || !1, i[n(344)] = !0, n(374) in i && (i[n(375)] = !0), Object[n(411)](t, i[n(334)], i)
		}
	}

	function Rh() {
		var t = Nh;
		return Rh = typeof Reflect !== t(407) && Reflect[t(398)] ? Reflect[t(398)].bind() : function(e, n, r) {
			var i = t,
				a = jh(e, n);
			if (a) {
				var o = Object[i(360)](a, n);
				return o[i(398)] ? o[i(398)][i(349)](arguments[i(406)] < 3 ? e : r) : o[i(374)]
			}
		}, Rh[t(345)](this, arguments)
	}

	function jh(t, e) {
		for (var n = Nh; !Object[n(390)][n(404)][n(349)](t, e) && null !== (t = Ah(t)););
		return t
	}

	function Eh(t, e) {
		var n = Nh;
		return (Eh = Object[n(364)] ? Object.setPrototypeOf[n(348)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Bh(t, e) {
		var n = Nh;
		if (e && (xh(e) === n(367) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(393));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Nh(413));
			return t
		}(t)
	}

	function Ah(t) {
		var e = Nh;
		return (Ah = Object.setPrototypeOf ? Object[e(338)].bind() : function(t) {
			return t[e(337)] || Object.getPrototypeOf(t)
		})(t)
	}

	function Fh() {
		var t = ["onBoxClick", "create", "selectedItem", "defineProperty", "iterator", "this hasn't been initialised - super() hasn't been called", "452vKyVle", "viewList", "Số lượng: ", "sham", "1BvzHxp", "loadTexture", "make", "currentItemId", "rightBg", "push", "symbol", "click", "getGiftItems", "key", "setText", "construct", "__proto__", "getPrototypeOf", "checkImageKey", "instance", "Group", "#f5a3b1", "applyTexture", "configurable", "apply", "screen", "giftItems", "bind", "call", "gift_item", "#f5c78a", "items", "name", "function", "Rectangle", "Cannot call a class as a function", "listView", "constructor", "224UrDQZU", "getOwnPropertyDescriptor", "32728XVtCSV", "selectedName", "Text", "setPrototypeOf", "width", "405292SMSbrn", "object", "icon", "visible", "scale", "destroy", "enumerable", "cache", "value", "writable", "1533465HKDXkQ", "bitmapData", "setTo", "overlay", "image", "20mSgQxf", "4299wlDScY", "alphaMask", "1313904yOaRCw", "gift_item_active", "no_avatar", "add", "avatar", "itemId", "prototype", "game", "anchor", "Derived constructors may only return object or undefined", "5645530cRdaqF", "3991734SbNxSw", "height", "updateSelectedItem", "get", "addChild", "Super expression must either be null or a function", "addItem", "getGuserid", "avatarKey", "hasOwnProperty", "shopScreen", "length", "undefined"];
		return (Fh = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = Nh, r = t();;) try {
			if (261562 == -parseInt(n(418)) / 1 * (parseInt(n(366)) / 2) + -parseInt(n(382)) / 3 * (parseInt(n(414)) / 4) + -parseInt(n(376)) / 5 + parseInt(n(384)) / 6 + parseInt(n(359)) / 7 * (parseInt(n(361)) / 8) + -parseInt(n(395)) / 9 + parseInt(n(381)) / 10 * (parseInt(n(394)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Fh);
	var Dh = null;

	function Nh(t, e) {
		var n = Fh();
		return (Nh = function(t, e) {
			return n[t -= 332]
		})(t, e)
	}
	const Gh = function(t) {
		var e = Nh;
		! function(t, e) {
			var n = Nh;
			if ("function" != typeof e && null !== e) throw new TypeError(n(400));
			t[n(390)] = Object[n(409)](e && e[n(390)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(411)](t, n(390), {
				writable: !1
			}), e && Eh(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Nh;
			if (typeof Reflect === t(407) || !Reflect.construct) return !1;
			if (Reflect[t(336)][t(417)]) return !1;
			if (typeof Proxy === t(354)) return !0;
			try {
				return Boolean[t(390)].valueOf[t(349)](Reflect[t(336)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Nh,
				n = Ah(a);
			if (o) {
				var r = Ah(this)[e(358)];
				t = Reflect[e(336)](n, arguments, r)
			} else t = n[e(345)](this, arguments);
			return Bh(this, t)
		});

		function c(t, e, n, r) {
			var i, a = Nh;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Nh(356))
			})(this, c), (i = s.call(this, t))[a(346)] = r, i[a(421)] = 20;
			var o = e,
				u = n;
			i.listView = new Br({
				x: o,
				y: u,
				column: 4,
				width: 638,
				height: 434,
				rowHeight: 213,
				columnWidth: 155,
				row: 1,
				leftDistance: 0,
				rightDistance: 0,
				distanceBetweenColumns: 6,
				distanceBetweenRows: 4,
				direction: "y"
			}, i.game), i[a(387)](i[a(357)]), null == Dh && (Dh = et[a(333)]()), i[a(347)] = [];
			var h = 0;
			for (var f in Dh) {
				var l = Dh[f];
				et.instance[a(352)].get(l.id) && (0 == h && (i[a(421)] = l.id), i[a(347)][a(423)](i[a(401)](l)), h++)
			}
			return i[a(357)][a(415)] = i.giftItems, i[a(403)] = a(388) + ne[a(340)][a(402)](), i.game[a(373)][a(339)](i[a(403)]) ? (i[a(388)] = i[a(391)].make.image(57, 90, i.avatarKey), i[a(343)](116)) : (i[a(388)] = i.game.make[a(380)](57, 90, a(405), a(386)), i[a(388)][a(365)] = 116, i.avatar[a(396)] = 116), i.avatar.x = i[a(346)][a(422)].x + i[a(388)].x, i[a(388)].y = i[a(346)].rightBg.y + i[a(388)].y, i[a(387)](i[a(388)]), i[a(362)] = new(Phaser[a(363)])(i[a(391)], i[a(388)].x + i[a(388)][a(365)] / 2, i.avatar.y + i[a(388)][a(365)] + 30, "", {
				font: APP_FONT,
				fontWeight: 400,
				fontSize: 24,
				fill: a(342)
			}), i[a(362)].anchor[a(378)](.5, 0), i[a(387)](i[a(362)]), i[a(410)] = i.game[a(420)][a(380)](i[a(388)].x + i.avatar[a(365)] / 2, i[a(388)].y + i[a(388)][a(365)] / 2, a(405), a(386)), i[a(410)][a(392)][a(378)](.5), i[a(387)](i[a(410)]), 0 == h ? (i[a(410)][a(369)] = !1, i[a(410)][a(369)] = !1, i[a(388)][a(369)] = !1) : i[a(397)](i.currentItemId), i
		}
		return n = c, i = Nh, (r = [{
			key: e(401),
			value: function(t) {
				var n = e,
					r = new Lt(this[n(391)], 0, 0, n(405), n(350));
				r.itemId = t.id, r[n(332)](this[n(408)], this);
				var i = this.game.make[n(380)](0, 0, n(405), n(385));
				i[n(369)] = this[n(421)] == t.id, r[n(399)](i), r.overlay = i;
				var a = new Phaser.Text(this.game, r.width / 2, 11, t.name, {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 19,
					fill: "#f5a3b1"
				});
				a[n(392)][n(378)](.5, 0), r[n(399)](a), a.setText(t.name);
				var o = this.game[n(420)][n(380)](r[n(365)] / 2, r[n(396)] / 2 - 10, n(405), t[n(368)]);
				15 == t.id ? o[n(370)].setTo(.7) : 17 == t.id && o[n(370)][n(378)](.85), o[n(392)][n(378)](.5), r[n(399)](o);
				var s = et[n(340)][n(352)][n(398)](t.id);
				s || (s = 0);
				var c = new(Phaser[n(363)])(this[n(391)], r.width / 2, 164, "Số lượng: " + s, {
					font: APP_FONT,
					fontWeight: 500,
					fontSize: 18,
					fill: n(351)
				});
				return c[n(392)][n(378)](.5, 0), r[n(399)](c), c[n(335)](n(416) + s), r
			}
		}, {
			key: e(408),
			value: function(t) {
				for (var n = e, r = 0; r < this.giftItems[n(406)]; r++)
					if (this[n(347)][r][n(389)] == this[n(421)]) {
						this.giftItems[r][n(379)][n(369)] = !1;
						break
					} this.currentItemId = t[n(389)], t.overlay[n(369)] = !0, this[n(397)](t.itemId)
			}
		}, {
			key: e(397),
			value: function(t) {
				var n = e,
					r = Dh[t + ""];
				this[n(410)][n(419)](n(405), r[n(368)]), this[n(362)][n(335)](r[n(353)])
			}
		}, {
			key: e(343),
			value: function(t) {
				var n = e,
					r = new(Phaser[n(355)])(0, 0, t, t),
					i = game[n(420)][n(380)](0, 0, n(405), n(386));
				i.width = t, i[n(396)] = t;
				var a = game[n(420)][n(377)]();
				a.load(i), i.destroy();
				var o = this.game.make[n(377)](t, t);
				o[n(383)](this.avatarKey, a, r), this[n(388)][n(419)](o), this[n(388)].width = t, this[n(388)].height = t
			}
		}, {
			key: e(371),
			value: function() {
				var t = e;
				Rh(Ah(c[t(390)]), t(371), this)[t(349)](this)
			}
		}]) && _h(n.prototype, r), Object[i(411)](n, "prototype", {
			writable: !1
		}), c
	}(Phaser[Ph(341)]);
	var Lh = qh;

	function Mh(t) {
		var e = qh;
		return (Mh = e(430) == typeof Symbol && e(464) == typeof Symbol[e(463)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(430) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(455)] ? n(464) : typeof t
		})(t)
	}

	function Wh(t, e) {
		for (var n = qh, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(433)] = i[n(433)] || !1, i.configurable = !0, n(424) in i && (i[n(411)] = !0), Object[n(438)](t, i[n(472)], i)
		}
	}

	function zh() {
		var t = ["selectedItem", "overlay", "make", "this hasn't been initialised - super() hasn't been called", "831206JdSZRD", "length", "get", "669597QwcmXV", "push", "setTo", "Số lượng: ", "143oJaHIZ", "image", "bitmapData", "rightBg", "game", "addChild", "__proto__", "name", "scale", "load", "writable", "valueOf", "getOwnPropertyDescriptor", "setText", "width", "#f5c78a", "addItem", "viewList", "gift_item", "cache", "loadTexture", "411700mQkFHN", "currentItemId", "value", "height", "giftItems", "1374192syEeGd", "avatarKey", "#f5a3b1", "function", "screen", "72tgxXGe", "enumerable", "onBoxClick", "construct", "1521006CuzRTC", "avatar", "defineProperty", "instance", "listView", "5mshbUB", "add", "9328711ggYXUW", "create", "shopScreen", "3VjafOk", "icon", "getGuserid", "call", "checkImageKey", "Derived constructors may only return object or undefined", "anchor", "click", "setPrototypeOf", "prototype", "Cannot call a class as a function", "Text", "1738228KhcPnW", "alphaMask", "items", "applyTexture", "undefined", "iterator", "symbol", "bind", "destroy", "itemId", "updateSelectedItem", "Group", "visible", "getPrototypeOf", "key", "no_avatar", "selectedName"];
		return (zh = function() {
			return t
		})()
	}

	function Uh() {
		var t = qh;
		return Uh = typeof Reflect !== t(462) && Reflect[t(481)] ? Reflect[t(481)].bind() : function(e, n, r) {
			var i = t,
				a = Vh(e, n);
			if (a) {
				var o = Object[i(413)](a, n);
				return o[i(481)] ? o[i(481)][i(449)](arguments[i(480)] < 3 ? e : r) : o[i(424)]
			}
		}, Uh.apply(this, arguments)
	}

	function Vh(t, e) {
		for (var n = qh; !Object[n(455)].hasOwnProperty.call(t, e) && null !== (t = Kh(t)););
		return t
	}

	function Hh(t, e) {
		var n = qh;
		return (Hh = Object[n(454)] ? Object[n(454)].bind() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function Xh(t, e) {
		var n = qh;
		if (e && ("object" === Mh(e) || typeof e === n(430))) return e;
		if (void 0 !== e) throw new TypeError(n(451));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(qh(478));
			return t
		}(t)
	}

	function qh(t, e) {
		var n = zh();
		return (qh = function(t, e) {
			return n[t -= 405]
		})(t, e)
	}

	function Kh(t) {
		var e = qh;
		return (Kh = Object[e(454)] ? Object[e(471)][e(465)]() : function(t) {
			var n = e;
			return t[n(407)] || Object[n(471)](t)
		})(t)
	}! function(t, e) {
		for (var n = qh, r = t();;) try {
			if (890833 == parseInt(n(482)) / 1 + parseInt(n(479)) / 2 * (parseInt(n(446)) / 3) + -parseInt(n(458)) / 4 * (parseInt(n(441)) / 5) + -parseInt(n(436)) / 6 + parseInt(n(443)) / 7 + parseInt(n(432)) / 8 * (-parseInt(n(427)) / 9) + -parseInt(n(422)) / 10 * (-parseInt(n(486)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(zh);
	var Yh = null;
	const Jh = function(t) {
		var e = qh;
		! function(t, e) {
			var n = qh;
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object[n(444)](e && e[n(455)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(438)](t, n(455), {
				writable: !1
			}), e && Hh(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = qh;
			if (typeof Reflect === t(462) || !Reflect[t(435)]) return !1;
			if (Reflect.construct.sham) return !1;
			if (typeof Proxy === t(430)) return !0;
			try {
				return Boolean[t(455)][t(412)][t(449)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Kh(a);
			if (o) {
				var n = Kh(this).constructor;
				t = Reflect.construct(e, arguments, n)
			} else t = e.apply(this, arguments);
			return Xh(this, t)
		});

		function c(t, e, n, r) {
			var i, a = qh;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(qh(456))
			})(this, c), (i = s[a(449)](this, t))[a(431)] = r, i.currentItemId = 12;
			var o = e,
				u = n;
			i[a(440)] = new Br({
				x: o,
				y: u,
				column: 4,
				width: 638,
				height: 434,
				rowHeight: 213,
				columnWidth: 155,
				row: 1,
				leftDistance: 0,
				rightDistance: 0,
				distanceBetweenColumns: 6,
				distanceBetweenRows: 4,
				direction: "y"
			}, i[a(405)]), i[a(442)](i[a(440)]), null == Yh && (Yh = et.getEmoItems()), i[a(426)] = [];
			var h = 0;
			for (var f in Yh) {
				var l = Yh[f];
				et[a(439)][a(460)][a(481)](l.id) && (0 == h && (i[a(423)] = l.id), i[a(426)][a(483)](i[a(417)](l)), h++)
			}
			return i[a(440)][a(418)] = i.giftItems, i[a(428)] = a(437) + ne[a(439)][a(448)](), i[a(405)][a(420)][a(450)](i[a(428)]) ? (i[a(437)] = i[a(405)][a(477)][a(487)](57, 90, i[a(428)]), i[a(461)](116)) : (i.avatar = i[a(405)][a(477)][a(487)](57, 90, a(445), a(473)), i[a(437)][a(415)] = 116, i[a(437)][a(425)] = 116), i[a(437)].x = i.screen[a(489)].x + i[a(437)].x, i[a(437)].y = i.screen[a(489)].y + i[a(437)].y, i[a(442)](i.avatar), i[a(474)] = new(Phaser[a(457)])(i.game, i.avatar.x + i[a(437)][a(415)] / 2, i[a(437)].y + i[a(437)][a(415)] + 30, "", {
				font: APP_FONT,
				fontWeight: 400,
				fontSize: 24,
				fill: a(429)
			}), i.selectedName[a(452)][a(484)](.5, 0), i[a(442)](i[a(474)]), i[a(475)] = i[a(405)][a(477)][a(487)](i[a(437)].x + i[a(437)][a(415)] / 2, i[a(437)].y + i[a(437)][a(415)] / 2, a(445), "no_avatar"), i[a(475)].anchor.setTo(.5), i[a(442)](i[a(475)]), 0 == h ? (i[a(475)].visible = !1, i[a(475)][a(470)] = !1, i[a(437)].visible = !1) : i[a(468)](i.currentItemId), i
		}
		return n = c, i = qh, (r = [{
			key: e(417),
			value: function(t) {
				var n = e,
					r = new Lt(this[n(405)], 0, 0, n(445), n(419));
				r[n(467)] = t.id, r[n(453)](this[n(434)], this);
				var i = this[n(405)].make[n(487)](0, 0, "shopScreen", "gift_item_active");
				i[n(470)] = this[n(423)] == t.id, r.addChild(i), r[n(476)] = i;
				var a = new(Phaser[n(457)])(this[n(405)], r.width / 2, 11, t.name, {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 19,
					fill: "#f5a3b1"
				});
				a[n(452)].setTo(.5, 0), r[n(406)](a);
				var o = this[n(405)][n(477)][n(487)](r.width / 2, r[n(425)] / 2 - 10, n(445), t[n(447)]);
				o[n(452)][n(484)](.5), r[n(406)](o), 15 == t.id ? o.scale.setTo(.7) : 17 == t.id && o[n(409)][n(484)](.85);
				var s = et.instance.items.get(t.id);
				s || (s = 0);
				var c = new(Phaser[n(457)])(this[n(405)], r[n(415)] / 2, 164, n(485) + s, {
					font: APP_FONT,
					fontWeight: 500,
					fontSize: 18,
					fill: n(416)
				});
				return c[n(452)][n(484)](.5, 0), r[n(406)](c), r
			}
		}, {
			key: e(434),
			value: function(t) {
				for (var n = e, r = 0; r < this.giftItems[n(480)]; r++)
					if (this[n(426)][r][n(467)] == this[n(423)]) {
						this[n(426)][r][n(476)].visible = !1;
						break
					} this[n(423)] = t.itemId, t[n(476)].visible = !0, this.updateSelectedItem(t[n(467)])
			}
		}, {
			key: "updateSelectedItem",
			value: function(t) {
				var n = e,
					r = Yh[t + ""];
				this[n(475)][n(421)]("shopScreen", r[n(447)]), this[n(474)][n(414)](r[n(408)])
			}
		}, {
			key: "applyTexture",
			value: function(t) {
				var n = e,
					r = new Phaser.Rectangle(0, 0, t, t),
					i = game[n(477)][n(487)](0, 0, n(445), "no_avatar");
				i[n(415)] = t, i[n(425)] = t;
				var a = game[n(477)][n(488)]();
				a[n(410)](i), i.destroy();
				var o = this[n(405)][n(477)][n(488)](t, t);
				o[n(459)](this.avatarKey, a, r), this[n(437)].loadTexture(o), this[n(437)][n(415)] = t, this[n(437)].height = t
			}
		}, {
			key: e(466),
			value: function() {
				var t = e;
				Uh(Kh(c[t(455)]), t(466), this)[t(449)](this)
			}
		}]) && Wh(n[i(455)], r), Object[i(438)](n, i(455), {
			writable: !1
		}), c
	}(Phaser[Lh(469)]);

	function Qh(t) {
		return (Qh = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
		})(t)
	}

	function Zh() {
		var t = ["checkImageKey", "icon", "listView", "#f5c78a", "DAYS", "viewList", "giftItems", "putInt", "Cannot call a class as a function", "340yYjmCC", "defineProperty", "no_avatar", "18060IggRDq", "setTo", "formatTime", "applyTexture", "image", "name", "prototype", "selectedName", "Text", "10074544KgDkoD", "19065xyXOlN", "function", "shopScreen", "1ICYspL", "rightBg", "getPrototypeOf", "loadTexture", "configurable", "getOwnPropertyDescriptor", "construct", "floor", "5603248nTYQLd", "1190ImNjre", "gift_item_active", "11Otiker", "dangdung", "currentItemId", "call", "send", "apply", "avatarKey", "onBoxClick", "getAvatar", "setText", "lang", "defaultAvatar", "this hasn't been initialised - super() hasn't been called", "get", "destroy", "addItem", "ExtensionRequest", "key", "length", "value", "valueOf", "26524730ijMZNw", "bitmapData", "setDataAsync", "defaultAvatarId", "socket", "screen", "width", "confirmButton", "anchor", "make", "click", "sudung", "push", "create", "cache", "658224ueanTE", "addChild", "add", "game", "2015654IyYtAn", "then", "avatar", "enumerable", "sham", "overlay", "MINS", "setPrototypeOf", "object", "shop.setDefaultAvatar", "Derived constructors may only return object or undefined", "bind", "visible", "selectedItem", "height", "round", "itemId", "undefined", "getGuserid", "instance", "onChangeDefault", "#f5a3b1", "HOURS", "SFSObject", "closeLoadingPopup", "updateSelectedItem"];
		return (Zh = function() {
			return t
		})()
	}

	function $h(t, e) {
		for (var n = sf, r = 0; r < e[n(468)]; r++) {
			var i = e[r];
			i[n(493)] = i[n(493)] || !1, i[n(545)] = !0, n(469) in i && (i.writable = !0), Object.defineProperty(t, i[n(467)], i)
		}
	}

	function tf() {
		var t = sf;
		return tf = typeof Reflect !== t(507) && Reflect[t(463)] ? Reflect[t(463)][t(501)]() : function(e, n, r) {
			var i = t,
				a = ef(e, n);
			if (a) {
				var o = Object[i(444)](a, n);
				return o.get ? o.get[i(453)](arguments.length < 3 ? e : r) : o[i(469)]
			}
		}, tf[t(455)](this, arguments)
	}

	function ef(t, e) {
		for (var n = sf; !Object[n(534)].hasOwnProperty[n(453)](t, e) && null !== (t = of(t)););
		return t
	}

	function nf(t, e) {
		var n = sf;
		return (nf = Object[n(497)] ? Object[n(497)][n(501)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function rf(t, e) {
		var n = sf;
		if (e && (Qh(e) === n(498) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(500));
		return af(t)
	}

	function af(t) {
		if (void 0 === t) throw new ReferenceError(sf(462));
		return t
	}

	function of(t) {
		var e = sf;
		return (of = Object[e(497)] ? Object[e(543)][e(501)]() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function sf(t, e) {
		var n = Zh();
		return (sf = function(t, e) {
			return n[t -= 444]
		})(t, e)
	}! function(t, e) {
		for (var n = sf, r = t();;) try {
			if (664477 == -parseInt(n(541)) / 1 * (-parseInt(n(490)) / 2) + parseInt(n(538)) / 3 * (-parseInt(n(525)) / 4) + -parseInt(n(448)) / 5 * (-parseInt(n(528)) / 6) + parseInt(n(447)) / 7 + parseInt(n(537)) / 8 + parseInt(n(486)) / 9 + parseInt(n(471)) / 10 * (-parseInt(n(450)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Zh);
	var cf = null;
	const uf = function(t) {
		var e = sf;
		! function(t, e) {
			var n = sf;
			if (typeof e !== n(539) && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object[n(484)](e && e[n(534)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(526)](t, n(534), {
				writable: !1
			}), e && nf(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = sf;
			if (typeof Reflect === t(507) || !Reflect[t(445)]) return !1;
			if (Reflect[t(445)][t(494)]) return !1;
			if (typeof Proxy === t(539)) return !0;
			try {
				return Boolean[t(534)][t(470)][t(453)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = sf,
				n = of(a);
			if (o) {
				var r = of(this).constructor;
				t = Reflect[e(445)](n, arguments, r)
			} else t = n[e(455)](this, arguments);
			return rf(this, t)
		});

		function c(t, e, n, r) {
			var i, a = sf;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(sf(524))
			})(this, c), (i = s.call(this, t))[a(476)] = r, i[a(452)] = 9;
			var o = e,
				u = n;
			i[a(518)] = new Br({
				x: o,
				y: u,
				column: 4,
				width: 638,
				height: 434,
				rowHeight: 213,
				columnWidth: 155,
				row: 1,
				leftDistance: 0,
				rightDistance: 0,
				distanceBetweenColumns: 6,
				distanceBetweenRows: 4,
				direction: "y"
			}, i[a(489)]), i.add(i[a(518)]), null == cf && (cf = et.getAvatarItems()), i[a(522)] = [];
			var h = 0;
			for (var f in cf) {
				var l = cf[f];
				et.instance[a(458)](l.id) && (0 == h && (i[a(452)] = l.id), i.giftItems[a(483)](i[a(465)](l)), h++)
			}
			return i[a(518)][a(521)] = i[a(522)], i.avatarKey = a(492) + ne.instance[a(508)](), i.game[a(485)][a(516)](i[a(456)]) ? (i[a(492)] = i[a(489)][a(480)][a(532)](57, 90, i[a(456)]), i[a(531)](116)) : (i[a(492)] = i[a(489)][a(480)].image(57, 90, a(540), "no_avatar"), i[a(492)][a(477)] = 116, i.avatar.height = 116), i.avatar.x = i[a(476)][a(542)].x + i[a(492)].x, i[a(492)].y = i[a(476)][a(542)].y + i[a(492)].y, i[a(488)](i[a(492)]), i[a(535)] = new(Phaser[a(536)])(i.game, i[a(492)].x + i[a(492)].width / 2, i[a(492)].y + i[a(492)].width + 30, "", {
				font: APP_FONT,
				fontWeight: 400,
				fontSize: 24,
				fill: "#f5a3b1"
			}), i[a(535)][a(479)].setTo(.5, 0), i[a(488)](i[a(535)]), i[a(503)] = i.game[a(480)].image(i[a(492)].x + i[a(492)][a(477)] / 2, i[a(492)].y + i[a(492)][a(477)] / 2, a(540), a(527)), i[a(503)].anchor[a(529)](.5), i[a(488)](i[a(503)]), i[a(478)] = new Lt(i.game, 0, 0, a(540), a(482)), i.confirmButton.x = i[a(492)].x + i[a(492)][a(477)] / 2 - 5 - i[a(478)][a(477)] / 2, i[a(478)].y = i[a(476)][a(542)].y + i.screen.rightBg[a(504)] - i[a(478)][a(504)] - 50, i.confirmButton[a(481)](i[a(510)], af(i)), i[a(488)](i[a(478)]), 0 == h ? (i[a(478)].visible = !1, i[a(503)][a(502)] = !1, i[a(503)][a(502)] = !1, i[a(492)].visible = !1) : i.updateSelectedItem(i[a(452)]), i
		}
		return n = c, i = sf, (r = [{
			key: e(510),
			value: function() {
				var t = e,
					n = this;
				this[t(476)].openLoadingPopup(), FBInstant.player[t(473)]({
					avatar: this[t(452)]
				})[t(491)]((function() {
					var e = t;
					CyberGlobalData[e(474)] = n[e(452)], n[e(476)].closeLoadingPopup(), n[e(515)](n.currentItemId);
					var r = new(SFS2X[e(513)]);
					r[e(523)]("id", CyberGlobalData[e(474)]), CyberInstance[e(475)][e(454)](new(SFS2X[e(466)])(e(499), r));
					for (var i = 0; i < n[e(522)][e(468)]; i++) n.giftItems[i][e(506)] === CyberGlobalData.defaultAvatarId ? n[e(522)][i][e(461)][e(502)] = !0 : n[e(522)][i][e(461)][e(502)] = !1
				})).catch((function() {
					var e = t;
					n[e(476)][e(514)]()
				}))
			}
		}, {
			key: e(464),
			value: function() {
				var t = e;
				tf(of(c.prototype), t(464), this).call(this)
			}
		}, {
			key: e(465),
			value: function(t) {
				var n = e,
					r = new Lt(this[n(489)], 0, 0, n(540), "gift_item");
				r.itemId = t.id, r.click(this.onBoxClick, this);
				var i = this[n(489)].make[n(532)](0, 0, "shopScreen", n(449));
				i[n(502)] = this.currentItemId == t.id, r[n(487)](i), r[n(495)] = i;
				var a = new(Phaser[n(536)])(this[n(489)], r[n(477)] / 2, 11, t.name, {
					font: APP_FONT,
					fontWeight: 400,
					fontSize: 19,
					fill: n(511)
				});
				a.anchor[n(529)](.5, 0), r[n(487)](a), a.setText(t[n(533)]);
				var o = this[n(489)].make[n(532)](r[n(477)] / 2, r[n(504)] / 2 - 10, n(540), t.icon);
				o.anchor[n(529)](.5), r[n(487)](o);
				var s = this[n(489)].make[n(532)](r[n(477)] / 2, r[n(504)] / 2 - 10, n(540), n(451));
				s[n(479)][n(529)](.5), r.addChild(s), s[n(502)] = !1, r[n(461)] = s, CyberGlobalData[n(474)] === t.id && (s[n(502)] = !0);
				var c = et[n(509)][n(458)](t.id),
					u = this.formatTime(c),
					h = new(Phaser[n(536)])(this[n(489)], r.width / 2, 164, u, {
						font: APP_FONT,
						fontWeight: 400,
						fontSize: 18,
						fill: n(519)
					});
				return h[n(479)].setTo(.5, 0), r[n(487)](h), h[n(459)](u), r
			}
		}, {
			key: e(457),
			value: function(t) {
				for (var n = e, r = 0; r < this[n(522)][n(468)]; r++)
					if (this.giftItems[r].itemId == this.currentItemId) {
						this[n(522)][r][n(495)].visible = !1;
						break
					} this.currentItemId = t[n(506)], t[n(495)][n(502)] = !0, this[n(515)](t.itemId)
			}
		}, {
			key: e(515),
			value: function(t) {
				var n = e,
					r = cf[t + ""];
				this[n(503)].loadTexture(n(540), r[n(517)]), this[n(503)].scale.setTo(1.35), this.selectedName.setText(r[n(533)]), CyberGlobalData.defaultAvatarId === t ? this.confirmButton[n(502)] = !1 : this[n(478)][n(502)] = !0
			}
		}, {
			key: e(531),
			value: function(t) {
				var n = e,
					r = new Phaser.Rectangle(0, 0, t, t),
					i = game[n(480)][n(532)](0, 0, "shopScreen", n(527));
				i[n(477)] = t, i[n(504)] = t;
				var a = game.make[n(472)]();
				a.load(i), i.destroy();
				var o = this[n(489)][n(480)][n(472)](t, t);
				o.alphaMask(this[n(456)], a, r), this[n(492)][n(544)](o), this[n(492)].width = t, this[n(492)][n(504)] = t
			}
		}, {
			key: e(530),
			value: function(t) {
				var n, r = e,
					i = 864e5,
					a = 36e5,
					o = Math.floor(t / i),
					s = Math[r(446)]((t - o * i) / a),
					c = Math[r(505)]((t - o * i - s * a) / 6e4);
				return 60 === c && (s++, c = 0), 24 === s && (o++, s = 0), o > 0 ? (n = o + " " + CyberInstance[r(460)][r(520)], s > 0 ? n += " " + s + " " + CyberInstance.lang.HOURS : c > 0 && (n += " " + c + " " + CyberInstance.lang[r(496)])) : s > 0 ? (n = s + " " + CyberInstance[r(460)][r(512)], c > 0 && (n += " " + c + " " + CyberInstance[r(460)][r(496)])) : n = c + " " + CyberInstance[r(460)][r(496)], n
			}
		}]) && $h(n[i(534)], r), Object.defineProperty(n, i(534), {
			writable: !1
		}), c
	}(Phaser.Group);

	function hf(t) {
		var e = bf;
		return (hf = "function" == typeof Symbol && e(367) == typeof Symbol[e(474)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(406)] ? "symbol" : typeof t
		})(t)
	}

	function ff(t, e) {
		for (var n = bf, r = 0; r < e.length; r++) {
			var i = e[r];
			i.enumerable = i[n(380)] || !1, i.configurable = !0, n(391) in i && (i[n(354)] = !0), Object.defineProperty(t, i[n(448)], i)
		}
	}

	function lf() {
		var t = bf;
		return lf = typeof Reflect !== t(475) && Reflect[t(364)] ? Reflect.get[t(365)]() : function(e, n, r) {
			var i = t,
				a = pf(e, n);
			if (a) {
				var o = Object[i(429)](a, n);
				return o[i(364)] ? o[i(364)][i(372)](arguments[i(460)] < 3 ? e : r) : o.value
			}
		}, lf[t(449)](this, arguments)
	}

	function pf(t, e) {
		for (var n = bf; !Object[n(406)][n(353)].call(t, e) && null !== (t = gf(t)););
		return t
	}

	function yf() {
		var t = ["emoContent", "world", "Khung hình\nđại diện", "Tương tác", "atlasJSONHash", "object", "enumerable", "5214629sHJgPQ", "anchor", "Super expression must either be null or a function", "khodo", "currentTab", "avatarContent", "addOnce", "addContents", "giftContent", "/atlas/shopScreen/shop.json", "value", "image", "destroy", "#ffc6b7", "addText", "click", "avatar", "gift_tab", "setPrototypeOf", "1891152vBBQPm", "tabIdx", "18940sOczRU", "16578881CXfatm", "sound", "function", "prototype", "init", "giftTab", "homeScreenBG1", "assetUrl", "create", "updateProfileCoin", "profileCoin", "emoji_tab", "3119344LIMGXp", "loadTexture", "constructor", "rightBg", "construct", "no_avatar", "shopScreen", "5mUuhAJ", "add", "valueOf", "instance", "onInputDown", "start", "make", "getOwnPropertyDescriptor", "playButtonSound", "openLoadingPopup", "onTabClick", "addChild", "close_icon", "getGuserid", "setText", "#bc6f80", "getCoin", "emoji_tab_active", "wrap", "formatCoinWithCommas", "visible", "Quà tặng", "shutdown", "updateContent", "background", "#fbafb3", "key", "apply", "height", "addTabs", "right_bg", "inputEnabled", "getDisplayName", "game", "setTo", "#f5c78a", "defineProperty", "__proto__", "length", "Cannot call a class as a function", "avatarTab", "wrapBg", "sham", "avatar_bg", "4yZQRhN", "this hasn't been initialised - super() hasn't been called", "bitmapData", "1422468UIWoia", "4210632vUnePw", "gift_tab_active", "setStyle", "screenReady", "iterator", "undefined", "width", "applyTexture", "98UOHqJL", "emoTab", "events", "buttonText", "homeScreenBG2", "hasOwnProperty", "writable", "Rectangle", "time", "alphaMask", "shop_button", "avatar_tab_active", "load", "addProfileInfo", "cache", "Derived constructors may only return object or undefined", "get", "bind", "checkImageKey", "symbol", "profileGroup", "10VrXPZP", "avatarKey", "avatar_tab", "call", "state"];
		return (yf = function() {
			return t
		})()
	}

	function df(t, e) {
		var n = bf;
		return (df = Object[n(399)] ? Object[n(399)][n(365)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function vf(t, e) {
		var n = bf;
		if (e && (hf(e) === n(379) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(363));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(bf(467));
			return t
		}(t)
	}

	function bf(t, e) {
		var n = yf();
		return (bf = function(t, e) {
			return n[t -= 349]
		})(t, e)
	}

	function gf(t) {
		var e = bf;
		return (gf = Object[e(399)] ? Object.getPrototypeOf.bind() : function(t) {
			return t[e(459)] || Object.getPrototypeOf(t)
		})(t)
	}! function(t, e) {
		for (var n = bf, r = t();;) try {
			if (573242 == parseInt(n(478)) / 1 * (parseInt(n(402)) / 2) + parseInt(n(469)) / 3 * (-parseInt(n(466)) / 4) + -parseInt(n(422)) / 5 * (-parseInt(n(470)) / 6) + parseInt(n(381)) / 7 + parseInt(n(415)) / 8 + -parseInt(n(400)) / 9 + parseInt(n(369)) / 10 * (-parseInt(n(403)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(yf);
	const mf = function(t) {
		var e = bf;
		! function(t, e) {
			var n = bf;
			if (typeof e !== n(405) && null !== e) throw new TypeError(n(383));
			t[n(406)] = Object.create(e && e[n(406)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(458)](t, n(406), {
				writable: !1
			}), e && df(t, e)
		}(h, t);
		var n, r, i, o, s, c = (o = h, s = function() {
			var t = bf;
			if (typeof Reflect === t(475) || !Reflect[t(419)]) return !1;
			if (Reflect.construct[t(464)]) return !1;
			if (typeof Proxy === t(405)) return !0;
			try {
				return Boolean[t(406)][t(424)][t(372)](Reflect[t(419)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = bf,
				n = gf(o);
			if (s) {
				var r = gf(this)[e(417)];
				t = Reflect[e(419)](n, arguments, r)
			} else t = n[e(449)](this, arguments);
			return vf(this, t)
		});

		function h() {
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(bf(461))
			}(this, h), c.call(this)
		}
		return n = h, i = bf, (r = [{
			key: e(407),
			value: function() {
				var t = e;
				lf(gf(h[t(406)]), t(407), this)[t(372)](this), !this[t(385)] && (this[t(385)] = 2), this[t(446)] = this[t(423)][t(392)](0, 0, t(409)), this[t(446)][t(476)] = this[t(455)][t(476)], this[t(446)][t(450)] = this[t(455)].height
			}
		}, {
			key: "preload",
			value: function() {
				var t = e;
				this[t(431)](), this.game[t(362)][t(366)]("homeScreenBG2") || this[t(360)].image(t(352), window[t(410)] + "/bigImage/homeScreenBG2.jpg"), this[t(455)].cache.checkImageKey(t(421)) || this.load[t(378)](t(421), window[t(410)] + "/atlas/shopScreen/shop.png", window[t(410)] + t(390))
			}
		}, {
			key: e(411),
			value: function() {
				var t = e;
				this.closeLoadingPopup(), this[t(446)][t(416)](t(352)), this[t(446)][t(476)] = this[t(455)].width, this[t(446)][t(450)] = this[t(455)][t(450)], this[t(423)][t(392)](this[t(455)][t(476)] / 2, 20, t(421), t(384))[t(382)][t(456)](.5, 0);
				var n = this[t(423)].image(0, 20, t(421), t(434));
				n.x = this.game[t(476)] - n[t(476)] - 20, n[t(453)] = !0, n[t(350)][t(426)][t(387)]((function() {
					var e = t;
					CyberInstance[e(404)][e(430)](), this[e(455)][e(373)][e(427)]("HomeScreen", !0, !1)
				}), this);
				var r = this[t(423)][t(392)](0, 20, t(421), t(358));
				r.x = this[t(455)][t(476)] - r[t(476)] - 20, r.y = this[t(455)].height - r[t(450)] - 11, r.inputEnabled = !0, r[t(350)][t(426)][t(387)]((function() {
					var e = t;
					CyberInstance[e(404)][e(430)](), this.game[e(373)][e(427)]("ShopScreen", !0, !1)
				}), this), this[t(463)] = this.add[t(392)](0, 0, t(421), t(440)), this[t(463)].y = this[t(455)][t(450)] / 2 - this[t(463)][t(450)] / 2, this.rightBg = this.add.image(0, this[t(463)].y, "shopScreen", t(452)), this.addTabs(), this[t(388)](), this[t(361)](), this[t(455)][t(356)][t(350)][t(423)](100, (function() {
					a.preload()
				})), this[t(473)] = !0
			}
		}, {
			key: e(388),
			value: function() {
				var t = e;
				this[t(389)] = new Gh(this[t(455)], this[t(463)].x + 11, this[t(463)].y + 16, this), this.giftContent.visible = !1, this[t(455)][t(375)][t(423)](this[t(389)]), this.avatarContent = new uf(this[t(455)], this[t(463)].x + 11, this[t(463)].y + 16, this), this[t(386)].visible = !1, this[t(455)].world[t(423)](this[t(386)]), this[t(374)] = new Jh(this[t(455)], this[t(463)].x + 11, this[t(463)].y + 16, this), this.emoContent.visible = !1, this[t(455)][t(375)][t(423)](this[t(374)]), this.rightBg.visible = !0, this.updateContent()
			}
		}, {
			key: e(451),
			value: function() {
				var t = e,
					n = this.wrapBg.y + 25;
				this[t(408)] = new Lt(this[t(455)], 0, n, "shopScreen", 2 == this.currentTab ? t(471) : t(398)), this[t(408)][t(395)](t(443), {
					font: APP_FONT,
					fill: 2 == this[t(385)] ? "#ffc6b7" : "#bc6f80",
					fontWeight: 400,
					fontSize: 24
				}), this[t(408)][t(401)] = 2, this[t(408)][t(351)].x = 140, this[t(408)][t(396)](this[t(432)], this), this[t(455)][t(375)].addChild(this[t(408)]), this[t(408)].x = this.game[t(476)] / 2 - (this[t(408)].width + this[t(463)][t(476)]) / 2, this[t(463)].x = this.giftTab.x + this[t(408)][t(476)], this.rightBg.x = this[t(463)].x + this[t(463)][t(476)] - this[t(418)].width, n += this[t(408)][t(450)] + 10, this[t(349)] = new Lt(this[t(455)], this[t(408)].x, n, t(421), 3 == this[t(385)] ? "emoji_tab_active" : "emoji_tab"), this[t(349)][t(395)](t(377), {
					font: APP_FONT,
					fill: 3 == this.currentTab ? t(394) : t(437),
					fontWeight: 400,
					fontSize: 24
				}), this[t(349)].tabIdx = 3, this[t(349)][t(351)].x = 140, this[t(349)][t(396)](this[t(432)], this), this[t(455)][t(375)].addChild(this.emoTab), this[t(349)][t(442)] = !1, this.avatarTab = new Lt(this[t(455)], this.giftTab.x, n, t(421), 4 == this.currentTab ? t(359) : t(371)), this.avatarTab.addText(t(376), {
					font: APP_FONT,
					fill: 4 == this.currentTab ? "#ffc6b7" : t(437),
					fontWeight: 400,
					fontSize: 24,
					align: "center"
				}), this.avatarTab[t(401)] = 4, this[t(462)][t(351)].x = 140, this[t(462)][t(396)](this[t(432)], this), this[t(455)][t(375)][t(433)](this.avatarTab)
			}
		}, {
			key: e(432),
			value: function(t) {
				var n = e;
				t.tabIdx != this[n(385)] && (this[n(385)] = t.tabIdx, this[n(408)][n(416)](n(421), 2 == this[n(385)] ? n(471) : n(398)), this[n(349)][n(416)]("shopScreen", 3 == this.currentTab ? n(439) : n(414)), this[n(462)].loadTexture(n(421), 4 == this.currentTab ? n(359) : n(371)), this.giftTab.buttonText.setStyle({
					font: APP_FONT,
					fill: 2 == this.currentTab ? n(394) : n(437),
					fontWeight: 400,
					fontSize: 24
				}), this.emoTab[n(351)][n(472)]({
					font: APP_FONT,
					fill: 3 == this[n(385)] ? "#ffc6b7" : n(437),
					fontWeight: 400,
					fontSize: 24
				}), this[n(462)].buttonText[n(472)]({
					font: APP_FONT,
					fill: 4 == this[n(385)] ? n(394) : "#bc6f80",
					fontWeight: 400,
					fontSize: 24
				}), this[n(445)]())
			}
		}, {
			key: e(445),
			value: function() {
				var t = e;
				this.giftContent[t(442)] = 2 == this[t(385)], this[t(374)][t(442)] = 3 == this.currentTab, this[t(386)][t(442)] = 4 == this[t(385)]
			}
		}, {
			key: e(361),
			value: function() {
				var t = e;
				this[t(368)] = this.game[t(423)].group();
				var n = this[t(368)][t(411)](15, 0, t(421), t(465));
				n.y = this[t(455)][t(450)] - n[t(450)] - 5;
				var r = this.game[t(423)].text(n.x + 105, n.y + 15, ne[t(425)][t(454)](), {
					font: APP_FONT,
					fontSize: 26,
					fill: t(447),
					fontWeight: 400
				});
				this[t(368)].add(r), r[t(436)](ne[t(425)][t(454)]()), this[t(413)] = this[t(455)][t(423)].text(r.x, r.y + 35, u[t(441)](ne[t(425)][t(438)]()), {
					font: APP_FONT,
					fontSize: 24,
					fill: t(457),
					fontWeight: 400
				}), this[t(368)].add(this.profileCoin), this.profileCoin[t(436)](u.formatCoinWithCommas(ne[t(425)].getCoin())), this.avatarKey = t(397) + ne[t(425)][t(435)](), this[t(455)][t(362)][t(366)](this[t(370)]) ? (this.avatar = this[t(455)][t(428)][t(392)](15, 15, this[t(370)]), this[t(477)](88)) : (this[t(397)] = this[t(455)][t(428)][t(392)](15, 15, t(421), t(420)), this[t(397)][t(476)] = 88, this[t(397)].height = 88, this[t(455)][t(360)][t(392)](this[t(370)], CyberInstance.avatar), this.game.load[t(427)]()), this[t(397)].x = n.x + 2, this[t(397)].y = n.y + 2, this.profileGroup.add(this[t(397)])
			}
		}, {
			key: "applyTexture",
			value: function(t) {
				var n = e,
					r = new(Phaser[n(355)])(0, 0, t, t),
					i = game[n(428)][n(392)](0, 0, n(421), n(420));
				i[n(476)] = t, i[n(450)] = t;
				var a = game.make[n(468)]();
				a.load(i), i[n(393)]();
				var o = this[n(455)].make[n(468)](t, t);
				o[n(357)](this[n(370)], a, r), this[n(397)][n(416)](o), this.avatar.width = t, this.avatar.height = t
			}
		}, {
			key: e(412),
			value: function(t) {
				var n = e;
				this[n(413)] && this[n(413)][n(436)](u[n(441)](t))
			}
		}, {
			key: e(444),
			value: function() {
				var t = e;
				lf(gf(h[t(406)]), t(444), this).call(this)
			}
		}]) && ff(n[i(406)], r), Object[i(458)](n, i(406), {
			writable: !1
		}), h
	}(le);

	function If(t) {
		var e = Sf;
		return (If = e(328) == typeof Symbol && "symbol" == typeof Symbol[e(289)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(328) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(277)] ? "symbol" : typeof t
		})(t)
	}

	function wf(t, e) {
		for (var n = Sf, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(283)] = i[n(283)] || !1, i.configurable = !0, n(292) in i && (i[n(301)] = !0), Object[n(275)](t, i[n(312)], i)
		}
	}

	function Sf(t, e) {
		var n = Tf();
		return (Sf = function(t, e) {
			return n[t -= 263]
		})(t, e)
	}

	function kf(t, e) {
		var n = Sf;
		return (kf = Object[n(323)] ? Object[n(323)][n(298)]() : function(t, e) {
			return t[n(337)] = e, t
		})(t, e)
	}

	function Of(t, e) {
		var n = Sf;
		if (e && (If(e) === n(271) || typeof e === n(328))) return e;
		if (void 0 !== e) throw new TypeError(n(270));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Sf(274));
			return t
		}(t)
	}

	function Cf(t) {
		var e = Sf;
		return (Cf = Object[e(323)] ? Object.getPrototypeOf[e(298)]() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(282)](t)
		})(t)
	}

	function Tf() {
		var t = ["undefined", "419155NcrfgS", "stage", "ShopScreen", "assets/images", "DisconnectScreen", "HomeScreen", "/bigImage/homeScreenBG1.jpg", "payments", "key", "homeScreenBG1", "/bigImage/preload.png", "indexOf", "instance", "Cannot call a class as a function", "4sqmKLi", "pageAlignHorizontally", "image", "anonymous", "socket", "setPrototypeOf", "isGameAssetPreloaded", "scale", "APP_FONT", "disableVisibilityChange", "function", "onReady", "5500835aKarNn", "init", "call", "5601678UrZAuV", "state", "lobbyScreen", "Super expression must either be null or a function", "__proto__", "constructor", "add", "game", "preload", "2330Kahaia", "LeaderboardScreen", "start", "Derived constructors may only return object or undefined", "object", "Roboto", "LobbyScreen", "this hasn't been initialised - super() hasn't been called", "defineProperty", "1688217GPxzWr", "prototype", "WEB", "PreloaderScreen", "33228mgPWBz", "ScaleManager", "getPrototypeOf", "enumerable", "apply", "purchaseAsync", "load", "getPlatform", "scaleMode", "iterator", "BackpackScreen", "4qYbbUg", "value", "crossOrigin", "assetUrl", "4054526KcPPuA", "construct", "create", "bind", "8971456FAdXnI", "startPreloader", "writable", "SHOW_ALL"];
		return (Tf = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = Sf, r = t();;) try {
			if (862681 == parseInt(n(304)) / 1 + parseInt(n(291)) / 2 * (-parseInt(n(276)) / 3) + parseInt(n(318)) / 4 * (parseInt(n(330)) / 5) + -parseInt(n(333)) / 6 + -parseInt(n(295)) / 7 + parseInt(n(299)) / 8 + -parseInt(n(280)) / 9 * (-parseInt(n(267)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Tf);
	const Pf = function(t) {
		var e = Sf;
		! function(t, e) {
			var n = Sf;
			if (typeof e !== n(328) && null !== e) throw new TypeError(n(336));
			t[n(277)] = Object[n(297)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(275)](t, n(277), {
				writable: !1
			}), e && kf(t, e)
		}(u, t);
		var n, r, i, o, s, c = (o = u, s = function() {
			var t = Sf;
			if (typeof Reflect === t(303) || !Reflect[t(296)]) return !1;
			if (Reflect[t(296)].sham) return !1;
			if (typeof Proxy === t(328)) return !0;
			try {
				return Boolean[t(277)].valueOf[t(332)](Reflect[t(296)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Sf,
				n = Cf(o);
			if (s) {
				var r = Cf(this)[e(263)];
				t = Reflect[e(296)](n, arguments, r)
			} else t = n[e(284)](this, arguments);
			return Of(this, t)
		});

		function u() {
			var t = Sf;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Sf(317))
			}(this, u), c[t(332)](this)
		}
		return n = u, i = Sf, (r = [{
			key: e(331),
			value: function() {
				var t = e;
				this.scale[t(288)] = Phaser[t(281)][t(302)], this[t(325)][t(319)] = !0, this[t(325)].pageAlignVertically = !0, this[t(305)][t(327)] = !0, this[t(286)][t(293)] = t(321), window[t(326)] = t(272), window[t(294)] = t(307), CyberGlobalData[t(335)] = t(309), this[t(265)][t(334)][t(264)](t(279), Ls), this[t(265)][t(334)][t(264)](t(309), xs), this[t(265)].state[t(264)](t(273), Zc), this[t(265)].state[t(264)](t(308), qs), this[t(265)][t(334)][t(264)](t(268), mc), this[t(265)].state.add(t(306), Th), this[t(265)][t(334)][t(264)](t(290), mf), CyberInstance.enableVisibilityChange()
			}
		}, {
			key: e(266),
			value: function() {
				var t = e;
				this[t(286)][t(320)](t(313), assetUrl + t(310)), this[t(286)][t(320)]("preloadBg", assetUrl + t(314))
			}
		}, {
			key: "create",
			value: function() {
				var t = e,
					n = this;
				if (fbInitializeAsyncResolved && null != gameLocale) this[t(300)]();
				else {
					this[t(324)] = !1;
					var r = setInterval((function() {
						var e = t;
						if (fbInitializeAsyncResolved && null != gameLocale) return clearInterval(r), void n[e(300)]();
						!n[e(324)] && (n[e(324)] = !0, a[e(266)]())
					}), 60)
				}
			}
		}, {
			key: e(300),
			value: function() {
				var t = this;
				this.layout(), setTimeout((function() {
					var e = Sf;
					t.game[e(334)][e(269)]("PreloaderScreen", !0, !1);
					var n = FBInstant[e(287)]();
					n && -1 != n[e(315)](e(278)) ? FBInstant[e(311)][e(285)] = {} : FBInstant[e(311)][e(329)]((function() {
						var t = e;
						ft[t(316)].initialize(CyberInstance[t(322)])
					}))
				}), 20)
			}
		}]) && wf(n[i(277)], r), Object[i(275)](n, i(277), {
			writable: !1
		}), u
	}(le);

	function xf(t, e) {
		var n = Rf();
		return (xf = function(t, e) {
			return n[t -= 396]
		})(t, e)
	}

	function _f(t, e) {
		var n = xf;
		if (t) {
			if (typeof t === n(452)) return jf(t, e);
			var r = Object.prototype[n(450)][n(406)](t).slice(8, -1);
			return r === n(421) && t[n(462)] && (r = t.constructor[n(422)]), r === n(434) || r === n(410) ? Array[n(404)](t) : r === n(437) || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/ [n(402)](r) ? jf(t, e) : void 0
		}
	}

	function Rf() {
		var t = ["playWinSound", "assets/sound/gift/kiss.mp3", "loadSounds", "value", "test", "lose", "from", "gift4", "call", "push", "isSoundOn", "defineProperty", "Set", "prototype", "joinRoom", "7qFZwRL", "sounds", "has", "18104zMhXSW", "assets/sound/gift/tomato.mp3", "log", "2156106fjoCww", "225400MpPPeK", "Object", "name", "writable", "playLoseSound", "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "assets/sound/gift/beer1.mp3", "danhbai", "470BwmhpA", "denluot", "add", "key", "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.", "playSound", "Map", "undefined", "gift1", "Arguments", "configurable", "gift6", "clock", "done", "assets/sound/gift/water.mp3", "gift5", "playDiscard", "1669620MCNPAV", "win", "play", "isArray", "return", "toString", "button", "string", "length", "5844720nyWTsJ", "set", "iterator", "gift7", "next", "enumerable", "playYourTurn", "2776860FHbTKt", "constructor", "assets", "assets/sound/gift/kiss_flowers.mp3", "playSound error", "clear", "assets/sound/gift/eggs.mp3", "561794FimPVr", "gift2", "1GQNEWj", "Cannot call a class as a function", "number", "playButtonSound"];
		return (Rf = function() {
			return t
		})()
	}

	function jf(t, e) {
		(null == e || e > t[xf(453)]) && (e = t.length);
		for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
		return r
	}

	function Ef(t, e) {
		for (var n = xf, r = 0; r < e[n(453)]; r++) {
			var i = e[r];
			i[n(459)] = i[n(459)] || !1, i[n(438)] = !0, "value" in i && (i[n(423)] = !0), Object[n(409)](t, i[n(431)], i)
		}
	}! function(t, e) {
		for (var n = xf, r = t();;) try {
			if (300399 == -parseInt(n(470)) / 1 * (-parseInt(n(468)) / 2) + parseInt(n(445)) / 3 + -parseInt(n(416)) / 4 * (parseInt(n(428)) / 5) + parseInt(n(419)) / 6 * (-parseInt(n(413)) / 7) + -parseInt(n(420)) / 8 + -parseInt(n(461)) / 9 + parseInt(n(454)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Rf);
	const Bf = function() {
		var t, e, n, r = xf;

		function i() {
			var t = xf;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(xf(471))
			})(this, i), this[t(414)] = new Map, this.assets = new Map, this[t(430)](t(451), "assets/sound/button/button1.mp3"), this[t(430)](t(436), t(442)), this[t(430)](t(469), t(464)), this.add("gift3", "assets/sound/gift/brick.mp3"), this.add(t(405), t(399)), this[t(430)](t(443), t(417)), this[t(430)](t(439), "assets/sound/gift/Bom.mp3"), this[t(430)](t(457), t(426)), this[t(430)]("gift8", t(467))
		}
		return t = i, e = [{
			key: "add",
			value: function(t, e) {
				var n = xf;
				this[n(463)][n(455)](t, e)
			}
		}, {
			key: r(400),
			value: function() {
				var t, e, n = r;
				if (typeof Howl != n(435) && null !== this.assets) {
					var i, a = function(t, e) {
						var n = xf,
							r = typeof Symbol !== n(435) && t[Symbol[n(456)]] || t["@@iterator"];
						if (!r) {
							if (Array[n(448)](t) || (r = _f(t))) {
								r && (t = r);
								var i = 0,
									a = function() {};
								return {
									s: a,
									n: function() {
										return i >= t[n(453)] ? {
											done: !0
										} : {
											done: !1,
											value: t[i++]
										}
									},
									e: function(t) {
										throw t
									},
									f: a
								}
							}
							throw new TypeError(n(432))
						}
						var o, s = !0,
							c = !1;
						return {
							s: function() {
								r = r[n(406)](t)
							},
							n: function() {
								var t = n,
									e = r[t(458)]();
								return s = e[t(441)], e
							},
							e: function(t) {
								c = !0, o = t
							},
							f: function() {
								var t = n;
								try {
									s || null == r[t(449)] || r[t(449)]()
								} finally {
									if (c) throw o
								}
							}
						}
					}(this[n(463)]);
					try {
						for (a.s(); !(i = a.n())[n(441)];) {
							var o = (t = i[n(401)], e = 2, function(t) {
									if (Array.isArray(t)) return t
								}(t) || function(t, e) {
									var n = xf,
										r = null == t ? null : typeof Symbol !== n(435) && t[Symbol[n(456)]] || t["@@iterator"];
									if (null != r) {
										var i, a, o = [],
											s = !0,
											c = !1;
										try {
											for (r = r[n(406)](t); !(s = (i = r.next())[n(441)]) && (o[n(407)](i.value), !e || o[n(453)] !== e); s = !0);
										} catch (t) {
											c = !0, a = t
										} finally {
											try {
												s || null == r.return || r[n(449)]()
											} finally {
												if (c) throw a
											}
										}
										return o
									}
								}(t, e) || _f(t, e) || function() {
									throw new TypeError(xf(425))
								}()),
								s = o[0],
								c = o[1];
							if (!this[n(414)].has(s)) {
								var u = new Howl({
									src: c,
									volume: s != n(446) ? 1 : .5
								});
								this[n(414)][n(455)](s, u)
							}
						}
					} catch (t) {
						a.e(t)
					} finally {
						a.f()
					}
					this[n(463)][n(466)](), this.assets = null
				}
			}
		}, {
			key: r(433),
			value: function(t) {
				var e = r;
				try {
					CyberInstance[e(408)] && this[e(414)][e(415)](t) && this[e(414)].get(t)[e(447)]()
				} catch (t) {
					console[e(418)](e(465), t)
				}
			}
		}, {
			key: "playClockSound",
			value: function() {
				var t = r;
				this[t(433)](t(440))
			}
		}, {
			key: "playJoinRoomSound",
			value: function() {
				var t = r;
				this[t(433)](t(412))
			}
		}, {
			key: r(424),
			value: function() {
				var t = r;
				this.playSound(t(403))
			}
		}, {
			key: r(398),
			value: function() {
				var t = r;
				this.playSound(t(446))
			}
		}, {
			key: r(397),
			value: function() {
				var t = r;
				this[t(433)](t(451))
			}
		}, {
			key: r(460),
			value: function() {
				var t = r;
				this[t(433)](t(429))
			}
		}, {
			key: r(444),
			value: function() {
				var t = r;
				this.playSound(t(427))
			}
		}], n = xf, e && Ef(t[n(411)], e), Object[n(409)](t, n(411), {
			writable: !1
		}), i
	}();

	function Af(t, e) {
		for (var n = Ff, r = 0; r < e.length; r++) {
			var i = e[r];
			i.enumerable = i[n(348)] || !1, i[n(327)] = !0, n(308) in i && (i[n(311)] = !0), Object[n(293)](t, i[n(305)], i)
		}
	}

	function Ff(t, e) {
		var n = Df();
		return (Ff = function(t, e) {
			return n[t -= 283]
		})(t, e)
	}

	function Df() {
		var t = ["messages", "DIV", "323140xFlElh", "offsetHeight", "createDOMButton", "innerHTML", "add", "show", "their-message", "appendChild", "configurable", "innerWidth", "input", "chat-room__messages", "create", "25iaZWCh", "117RivSjZ", "init", "innerHeight", "addEventListener", "text", "my-message", "125788DRKgIy", "SPAN", "18770DleoIB", "countMessage", "controller", "createDOMItalicText", "209133gxwcBZ", "remove", "playButtonSound", "enumerable", "createElement", "onPublicChatClose", "chatInputText", "publicOverlay", "publicChatWrapper", "createDOMText", "avatar", "cloneNode", "noAvatar", "chat-room-header", "scrollTop", "keyup", "img", "760632tdsXFK", "scrollToLatestMessage", "height", "keyCode", "lastSent", "screenReady", "364648zrlLHe", "IMG", "dispatchEvent", "chat-room", "click", "firstElementChild", "appendMessage", "body", "9130VsxNqV", "onSendMessage", "sendImg", "assets/css/images/send.png", "_controller", "7XTlgQt", "chat-page-message-content", "sendButton", "defineProperty", "text-area-type", "width", "getElementById", "hide", "classList", "src", "name", "inited", "setAttribute", "style", "createDOMDiv", "key", "hasMessage", "getTime", "value", "chat-input", "prototype", "writable", "firstChild", "class", "lang", "98114HeQytv", "sound"];
		return (Df = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = Ff, r = t();;) try {
			if (427640 == -parseInt(n(339)) / 1 + parseInt(n(315)) / 2 + parseInt(n(345)) / 3 + -parseInt(n(319)) / 4 * (parseInt(n(332)) / 5) + -parseInt(n(362)) / 6 * (parseInt(n(290)) / 7) + parseInt(n(368)) / 8 * (-parseInt(n(333)) / 9) + parseInt(n(341)) / 10 * (parseInt(n(285)) / 11)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Df);
	var Nf = null;
	const Gf = function() {
		var t, e, n, r = Ff;

		function i(t) {
			var e = Ff;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, i), !Nf && (this[e(301)] = !1, Nf = this), Nf.controller = t, Nf
		}
		return t = i, n = Ff, (e = [{
			key: r(334),
			value: function() {
				var t = r;
				!this.inited && (this[t(331)](), this.countMessage = 0, this[t(301)] = !0, this[t(366)] = (new Date)[t(307)]())
			}
		}, {
			key: r(324),
			value: function() {
				var t = r;
				document[t(296)](t(353))[t(298)].add(t(324)), document[t(296)](t(352))[t(298)][t(323)](t(324)), Nf.layout(), Nf.scrollToLatestMessage()
			}
		}, {
			key: r(297),
			value: function() {
				var t = r;
				CyberInstance[t(316)][t(347)](), CyberInstance.chat[t(306)] = !1, document.getElementById(t(353))[t(298)][t(346)](t(324)), document[t(296)]("publicOverlay")[t(298)][t(346)](t(324)), p[t(370)](t(350))
			}
		}, {
			key: r(331),
			value: function() {
				var t = r;
				document[t(284)][t(326)](u[t(304)](t(352))), document[t(284)][t(326)](u[t(304)]("publicChatWrapper", t(371)));
				var e = u[t(304)](null, t(309)),
					n = u[t(304)]("chatRoomHeader", t(358));
				n[t(326)](e), document[t(296)](t(353))[t(326)](n);
				var i = u[t(304)](t(317), t(330));
				i[t(298)][t(323)](t(291)), document.getElementById(t(353))[t(326)](i);
				var a = u[t(354)](t(351), CyberInstance[t(314)].WRITE_A_MESSAGE, 100);
				a[t(302)](t(300), "chat-content"), a[t(298)][t(323)](t(329)), a[t(298)][t(323)](t(294)), e[t(326)](a);
				var o = u[t(321)]("sendButton", null);
				o[t(298)][t(323)]("send-button");
				var s = document[t(349)](t(369));
				s.setAttribute(t(299), t(288)), s.setAttribute("alt", "Send"), s[t(298)].add(t(287)), o[t(326)](s), e[t(326)](o), document[t(296)]("publicChatWrapper").style[t(295)] = window[t(328)] + "px", document[t(296)](t(353))[t(303)].height = window[t(335)] + "px", o[t(336)](t(372), (function() {
					Nf[t(286)]()
				})), document.getElementById(t(352))[t(336)]("click", (function() {
					Nf[t(297)]()
				})), document.getElementById("chatInputText").addEventListener(t(360), (function(e) {
					var n = t;
					13 === e[n(365)] && (e.preventDefault(), document[n(296)](n(292))[n(372)]())
				})), this[t(367)] = !0
			}
		}, {
			key: "layout",
			value: function() {
				var t = r;
				document.getElementById(t(353))[t(303)][t(295)] = Math.floor(window.innerWidth / 2.2) + "px", document[t(296)]("publicChatWrapper").style[t(364)] = window[t(335)] + "px";
				var e = document[t(296)]("chatRoomHeader")[t(320)];
				document[t(296)](t(317))[t(303)].height = window[t(335)] - e - 20 + "px"
			}
		}, {
			key: "onSendMessage",
			value: function() {
				var t = r;
				if (!((new Date)[t(307)]() - this.lastSent < 2e3)) {
					var e = document[t(296)](t(351))[t(308)];
					if (!e || 0 == e.trim().length) return !1;
					document[t(296)](t(351))[t(308)] = "", Nf[t(343)].sendPublicMessage(e), this[t(366)] = (new Date)[t(307)]()
				}
			}
		}, {
			key: r(283),
			value: function(t, e, n) {
				var i = r,
					a = document[i(349)](i(318)),
					o = document.createElement(i(340));
				if (o[i(322)] = e, a.appendChild(o), a[i(298)][i(323)](i(337)), n) a[i(298)][i(323)](i(338));
				else if (a[i(298)][i(323)](i(325)), a[i(298)].add("last-consecutive"), a.insertBefore(u[i(344)](t[i(300)]), a[i(312)]), t[i(355)]) {
					var s = document[i(349)](i(361));
					s.src = t[i(355)], s[i(302)](i(313), "sender-avatar"), a.appendChild(s[i(356)](!0))
				} else a.classList[i(323)](i(357));
				document.getElementById(i(317))[i(326)](a), this[i(342)] >= 200 && document[i(296)](i(317))[i(373)][i(346)](), n && this[i(363)](), this[i(342)]++
			}
		}, {
			key: "scrollToLatestMessage",
			value: function() {
				var t = r;
				document.getElementById(t(353))[t(298)].contains(t(324)) && (document[t(296)](t(317))[t(359)] = document[t(296)]("messages").scrollHeight)
			}
		}, {
			key: r(343),
			get: function() {
				return this[r(289)]
			},
			set: function(t) {
				this[r(289)] = t
			}
		}]) && Af(t[n(310)], e), Object[n(293)](t, n(310), {
			writable: !1
		}), i
	}();

	function Lf() {
		var t = ["keyup", "writable", "width", "footer-button-active", "chat-game-header", "createTextNode", "Chơi hay nghỉ đây", "332927kPxEea", "firstChild", "create", "height", "803784msoRsA", "lang", "scrollTop", "sendGameMessage", "data-tabid", "addDEvents", "chatButtons", "text-area-type", "defineProperty", "SPAN", "Hay không bằng hên!", "scrollHeight", "createDOMItalicText", "Thua đi cưng!", "getTime", "innerWidth", "value", "keyCode", "name", "chat", "scrollToLatestMessage", "trim", "appendChild", "addEventListener", "send-button", "lastSent", "configurable", "gameChatInputText", "5058lHZfAy", "Đánh thế ai chơi!", "overlay", "dataset", "2507334WeEqLo", ".button-text", "footerWrapper", "show", "wrapper", "getElementById", "classList", "showChat", "createDOMText", "their-message", "chat-button-row", "innerHTML", "clear-fix", "Tưởng thế nào :v", "createQuickButton", "Ahihi Đồ Ngốc!", "assets/css/images/send.png", "layoured", "style", "msg", "chat-game-messages", "destroy", "countMessage", "body", "sendImg", "hide", "WRITE_A_MESSAGE", "109MyAjwS", "length", "createButtons", "16790JDywSE", "avatar", "my-message", "querySelectorAll", "showHistory", "text", "bottom", "contains", "add", "Send", "alt", "controller", "DIV", "parentNode", "23746YdtfhN", "createDOMDiv", "40qWLLHB", "Nhanh lên má!", "chat-buttons", "src", "cloneNode", "firstElementChild", "chatHistory", "insertBefore", "_controller", "replace", "Cannot call a class as a function", "HISTORY", "gameMessages", "key", "createElement", "setAttribute", "1026xuoqUx", "remove", "IMG", "preventDefault", ".footer-button", "Chat", "onSendMessage", "chat-history", "8110iRTzfC", "gameSendButton", "enumerable", "appendMessage", "chat-game-wrapper", "offsetHeight", "6148857xIZZNU", "img", "footer-button", "last-consecutive", "click", "prototype"];
		return (Lf = function() {
			return t
		})()
	}

	function Mf(t, e) {
		for (var n = Wf, r = 0; r < e[n(257)]; r++) {
			var i = e[r];
			i[n(301)] = i.enumerable || !1, i[n(223)] = !0, n(213) in i && (i[n(312)] = !0), Object[n(205)](t, i[n(288)], i)
		}
	}

	function Wf(t, e) {
		var n = Lf();
		return (Wf = function(t, e) {
			return n[t -= 203]
		})(t, e)
	}! function(t, e) {
		for (var n = Wf, r = t();;) try {
			if (681601 == parseInt(n(256)) / 1 * (parseInt(n(273)) / 2) + -parseInt(n(229)) / 3 + -parseInt(n(322)) / 4 + parseInt(n(299)) / 5 * (parseInt(n(291)) / 6) + -parseInt(n(318)) / 7 * (parseInt(n(275)) / 8) + parseInt(n(225)) / 9 * (parseInt(n(259)) / 10) + -parseInt(n(305)) / 11) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Lf);
	var zf = null;
	const Uf = function() {
		var t, e, n, r = Wf;

		function i(t) {
			var e = Wf;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Wf(285))
			})(this, i), this[e(270)] = t, this.countMessage = 0, this[e(320)](), this[e(327)](), this[e(222)] = (new Date)[e(211)](), zf = this
		}
		return t = i, n = Wf, (e = [{
			key: r(320),
			value: function() {
				var t = r;
				document[t(252)][t(219)](u[t(274)]("chatGameWrapper", t(303))), this[t(233)][t(247)][t(313)] = window[t(212)] + "px", this[t(233)][t(219)](u[t(274)](t(227)));
				var e = u[t(274)](null, "chat-input"),
					n = u[t(274)]("chatGameHeader", t(315));
				n[t(235)][t(267)](t(241)), n[t(219)](e), this[t(233)].appendChild(n);
				var i = u[t(237)]("gameChatInputText", CyberInstance[t(323)][t(255)], 100);
				i.classList[t(267)]("input"), i.classList.add(t(204)), e[t(219)](i);
				var a = u.createDOMButton(t(300), null);
				a.classList[t(267)](t(221));
				var o = document[t(289)](t(293));
				o[t(290)]("src", t(245)), o[t(290)](t(269), t(268)), o.classList.add(t(253)), a[t(219)](o), e[t(219)](a);
				var s = u.createDOMDiv(t(203), t(277));
				s.appendChild(this[t(258)]([t(210), t(244), t(226)])), s.appendChild(this[t(258)]([t(276), t(207), t(242)])), s.appendChild(this[t(258)]([t(317), "Bình tĩnh nào, không nóng!", "Cao thủ !!!"])), this[t(233)].appendChild(s);
				var c = u[t(274)](t(281), t(298));
				c[t(235)][t(267)](t(254));
				var h = u[t(274)]("gameMessages", t(249));
				h[t(235)][t(267)]("chat-page-message-content"), c[t(219)](h), this[t(233)][t(219)](c);
				var f = u[t(274)](t(231), "chat-game-footer");
				f.classList.add("clear-fix");
				var l = document.createElement("DIV");
				l[t(235)][t(267)]("footer-button"), l[t(235)][t(267)](t(314)), l[t(290)](t(326), t(216)), l.appendChild(document[t(316)](t(296))), f[t(219)](l);
				var p = document[t(289)]("DIV");
				p[t(235)].add(t(307)), p.setAttribute("data-tabid", "history"), p[t(219)](document[t(316)](CyberInstance.lang[t(286)])), f[t(219)](p), this[t(233)][t(219)](f)
			}
		}, {
			key: "layout",
			value: function() {
				var t = r;
				if (!this[t(246)]) {
					var e = document[t(234)]("chatGameHeader")[t(304)] + document[t(234)]("chatButtons")[t(304)];
					document.getElementById(t(287))[t(247)][t(321)] = e + "px";
					for (var n = (parseFloat(getComputedStyle(this[t(233)], null).width[t(284)]("px", "")) - 40) / 3 - 30, i = document[t(262)](t(230)), a = 0; a < i[t(257)]; a++) i[a][t(247)][t(313)] = n + "px";
					var o = document.getElementById("footerWrapper")[t(304)];
					document[t(234)](t(281))[t(247)][t(265)] = o + "px", document.getElementById("chatButtons")[t(247)][t(265)] = o + "px", this[t(246)] = !0
				}
			}
		}, {
			key: r(232),
			value: function() {
				var t = r;
				!this[t(233)].classList.contains(t(232)) && (this[t(227)][t(235)][t(267)](t(232)), this.wrapper[t(235)][t(267)](t(232)), this.showChat(), zf.layout())
			}
		}, {
			key: r(254),
			value: function() {
				var t = r;
				this[t(233)][t(235)][t(292)](t(232)), this[t(227)][t(235)].remove(t(232))
			}
		}, {
			key: r(250),
			value: function() {
				var t = r;
				this.wrapper[t(272)].removeChild(this.wrapper), zf = null
			}
		}, {
			key: "showChat",
			value: function() {
				var t = r;
				document.getElementById("chatHistory")[t(235)][t(267)]("hide"), document.getElementById(t(203))[t(235)].remove("hide")
			}
		}, {
			key: "showHistory",
			value: function() {
				var t = r;
				document[t(234)](t(281)).classList[t(292)](t(254)), document[t(234)](t(203))[t(235)][t(267)](t(254)), this[t(217)]()
			}
		}, {
			key: r(327),
			value: function() {
				var t = r;
				document[t(234)](t(300)).addEventListener(t(309), (function() {
					zf[t(297)](), zf.hide()
				})), document[t(234)](t(224))[t(220)](t(311), (function(e) {
					var n = t;
					13 === e[n(214)] && (e[n(294)](), document[n(234)](n(300))[n(309)]())
				})), this[t(227)].addEventListener(t(309), (function() {
					zf[t(254)]()
				}));
				for (var e = document[t(262)](t(230)), n = 0; n < e[t(257)]; n++) e[n][t(220)](t(309), (function() {
					var e = t,
						n = this[e(228)][e(248)];
					zf[e(270)][e(325)](n), zf[e(254)]()
				}));
				var i = document[t(262)](".footer-button");
				for (n = 0; n < i[t(257)]; n++) i[n][t(220)](t(309), (function() {
					var e = t;
					this[e(228)].tabid === e(216) ? zf[e(236)]() : zf[e(263)]();
					for (var n = document[e(262)](e(295)), r = 0; r < n[e(257)]; r++) n[r][e(235)][e(266)](e(314)) && n[r].classList[e(292)]("footer-button-active");
					this[e(235)][e(267)](e(314))
				}))
			}
		}, {
			key: r(297),
			value: function() {
				var t = r;
				if (!((new Date)[t(211)]() - this.lastSent < 2e3)) {
					var e = document[t(234)](t(224))[t(213)];
					if (!e || 0 == e[t(218)]()[t(257)]) return !1;
					document[t(234)](t(224))[t(213)] = "", zf[t(270)][t(325)](e), this[t(222)] = (new Date)[t(211)]()
				}
			}
		}, {
			key: r(302),
			value: function(t, e, n) {
				var i = r,
					a = document[i(289)](i(271)),
					o = document[i(289)](i(206));
				if (o[i(240)] = e, a.appendChild(o), a.classList.add(i(264)), n) a.classList.add(i(261));
				else if (a[i(235)].add(i(238)), a.classList[i(267)](i(308)), a[i(282)](u[i(209)](t[i(215)]), a[i(319)]), t.avatar) {
					var s = document[i(289)](i(306));
					s[i(278)] = t[i(260)], s[i(290)]("class", "sender-avatar"), a.appendChild(s[i(279)](!0))
				} else a[i(235)].add("noAvatar");
				document[i(234)]("gameMessages")[i(219)](a), this[i(251)] >= 200 && document[i(234)](i(287))[i(280)][i(292)](), this[i(217)](), this[i(251)]++
			}
		}, {
			key: r(217),
			value: function() {
				var t = r;
				document[t(234)](t(287))[t(324)] = document[t(234)](t(287))[t(208)]
			}
		}, {
			key: r(258),
			value: function(t) {
				var e = r,
					n = document[e(289)](e(271));
				n.classList[e(267)](e(241)), n[e(235)][e(267)](e(239));
				for (var i = 0; i < t.length; i++) {
					var a = this[e(243)](t[i]);
					n[e(219)](a)
				}
				return n
			}
		}, {
			key: r(243),
			value: function(t) {
				var e = r,
					n = document[e(289)](e(271));
				return n[e(235)][e(267)]("button-text"), n[e(290)]("data-msg", t), n.appendChild(document[e(316)](t)), n
			}
		}, {
			key: "wrapper",
			get: function() {
				return document[r(234)]("chatGameWrapper")
			}
		}, {
			key: r(227),
			get: function() {
				var t = r;
				return document[t(234)](t(227))
			}
		}, {
			key: "controller",
			get: function() {
				return this._controller
			},
			set: function(t) {
				this[r(283)] = t
			}
		}]) && Mf(t[n(310)], e), Object[n(205)](t, "prototype", {
			writable: !1
		}), i
	}();

	function Vf(t, e) {
		var n = Hf();
		return (Vf = function(t, e) {
			return n[t -= 348]
		})(t, e)
	}

	function Hf() {
		var t = ["***", "10003jUEyed", "avatar", "containsVariable", "onJoinRoom", "hide", "USER_EXIT_ROOM", "cặc", "20139534tREuCF", "split", "PUBLIC_MESSAGE", "prototype", "10vNvGdA", "ĐỊt", "key", "chatScreen", "defineProperty", "onGameRoomMsg", "ROOM_JOIN", "isGame", "lastJoinedRoom", "onUserExitRoom", "configurable", "Lồn", "Buồi", "địt", "removeAll", "389329YrEFkR", "sfs", "publicChatScreen", "enumerable", "onPublicMessage", "sendPublicMessage", "show", "sender", "2984990Dhffbl", "send", "lồn", "guserid", "PublicMessageRequest", "Cannot call a class as a function", "length", "message", "isItMe", "addEventListener", "openChatScreen", "value", "room", "4616lWcQHe", "Signal", "sendGameMessage", "mySelf", "join", "703974sokSxo", "SFSEvent", "Địt", "3VZZmEo", "getVariable", "username", "onMessage", "1338548AhuoPt", "3555318jqlaNX", "writable", "toUpperCase", "dispatch", "Cặc"];
		return (Hf = function() {
			return t
		})()
	}

	function Xf(t, e) {
		for (var n = Vf, r = 0; r < e[n(360)]; r++) {
			var i = e[r];
			i.enumerable = i[n(349)] || !1, i[n(407)] = !0, n(365) in i && (i[n(381)] = !0), Object[n(401)](t, i[n(399)], i)
		}
	}! function(t, e) {
		for (var n = Vf, r = t();;) try {
			if (898827 == parseInt(n(412)) / 1 + parseInt(n(380)) / 2 + -parseInt(n(375)) / 3 * (parseInt(n(379)) / 4) + parseInt(n(354)) / 5 + -parseInt(n(372)) / 6 + parseInt(n(386)) / 7 * (parseInt(n(367)) / 8) + -parseInt(n(393)) / 9 * (parseInt(n(397)) / 10)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Hf);
	var qf = function() {
			var t, e, n, r = Vf;

			function i(t) {
				var e = Vf;
				(function(t, e) {
					if (!(t instanceof e)) throw new TypeError(Vf(359))
				})(this, i), this[e(413)] = t, this.sfs.addEventListener(SFS2X[e(373)][e(395)], this[e(350)], this), this[e(413)][e(363)](SFS2X[e(373)][e(403)], this.onJoinRoom, this), this[e(413)][e(363)](SFS2X.SFSEvent[e(391)], this[e(406)], this), this[e(348)] = new Gf(this), this.chatScreen = null, this[e(402)] = new(Phaser[e(368)])
			}
			return t = i, n = Vf, (e = [{
				key: "openPublicChatScreen",
				value: function() {}
			}, {
				key: r(364),
				value: function() {
					var t = r;
					this[t(400)] && this[t(400)][t(352)]()
				}
			}, {
				key: "closeChatScreen",
				value: function() {
					var t = r;
					this.chatScreen && this.chatScreen[t(390)]()
				}
			}, {
				key: r(389),
				value: function(t) {
					var e = r;
					t[e(366)][e(404)] && (this[e(400)] = new Uf(this))
				}
			}, {
				key: r(406),
				value: function(t) {
					var e = r;
					t.user[e(362)] && t[e(366)][e(404)] && (null != this[e(400)] && (this.chatScreen.destroy(), this[e(400)] = null), this[e(402)][e(411)]())
				}
			}, {
				key: r(378),
				value: function(t) {}
			}, {
				key: r(350),
				value: function(t) {
					var e = r,
						n = this[e(413)][e(370)][e(376)]("guserid")[e(365)],
						i = t[e(353)].getVariable(e(357))[e(365)];
					t[e(366)][e(404)] && this[e(400)] && (this[e(400)].appendMessage({
						guserid: i,
						avatar: t.sender.containsVariable("avatar") ? t[e(353)][e(376)](e(387)).value : "assets/images/no_avatar.png",
						name: t.sender[e(388)](e(377)) ? t[e(353)][e(376)]("username")[e(365)] : ""
					}, t[e(361)], i === n), this[e(402)][e(383)](t))
				}
			}, {
				key: r(351),
				value: function(t) {}
			}, {
				key: r(369),
				value: function(t) {
					for (var e = r, n = [e(356), e(408), "LỒn", e(410), e(374), e(398), "buồi", e(409), e(392), e(384)], i = 0; i < n[e(360)]; i++) t = (t = t[e(394)](n[i])[e(371)](e(385)))[e(394)](n[i][e(382)]())[e(371)](e(385));
					this.sfs[e(355)](new(SFS2X[e(358)])(t), null, this.sfs[e(405)])
				}
			}]) && Xf(t[n(396)], e), Object[n(401)](t, n(396), {
				writable: !1
			}), i
		}(),
		Kf = Zf;

	function Yf(t) {
		var e = Zf;
		return (Yf = e(144) == typeof Symbol && e(180) == typeof Symbol[e(167)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(159)] === Symbol && t !== Symbol[n(163)] ? n(180) : typeof t
		})(t)
	}

	function Jf(t, e) {
		for (var n = Zf, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(181)] = i[n(181)] || !1, i[n(183)] = !0, n(171) in i && (i[n(156)] = !0), Object[n(143)](t, i.key, i)
		}
	}

	function Qf(t, e) {
		var n = Zf;
		return (Qf = Object[n(182)] ? Object[n(182)][n(169)]() : function(t, e) {
			return t[n(149)] = e, t
		})(t, e)
	}

	function Zf(t, e) {
		var n = $f();
		return (Zf = function(t, e) {
			return n[t -= 142]
		})(t, e)
	}

	function $f() {
		var t = ["width", "destroy", "Derived constructors may only return object or undefined", "overlayTexture", "game", "construct", "alpha", "paused", "Text", "TAP_TO_RESUME", "getPrototypeOf", "defineProperty", "function", "addOnce", "addChild", "Super expression must either be null or a function", "toUpperCase", "__proto__", "1852060fKnDFU", "apply", "anchor", "1252448AFgHFI", "setTo", "544384MkNlhs", "writable", "9328795qPQOVs", "#ffffff", "constructor", "Sprite", "existing", "dispatch", "prototype", "6420234BcaYIu", "sham", "49832vnUYDl", "iterator", "56544eYWLNr", "bind", "height", "value", "events", "Cannot call a class as a function", "81iPPSeR", "onInputDown", "this hasn't been initialised - super() hasn't been called", "inputEnabled", "add", "4932skqASv", "symbol", "enumerable", "setPrototypeOf", "configurable", "undefined", "onResume", "lang", "call"];
		return ($f = function() {
			return t
		})()
	}

	function tl(t, e) {
		var n = Zf;
		if (e && ("object" === Yf(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(190));
		return el(t)
	}

	function el(t) {
		if (void 0 === t) throw new ReferenceError(Zf(176));
		return t
	}

	function nl(t) {
		var e = Zf;
		return (nl = Object.setPrototypeOf ? Object.getPrototypeOf[e(169)]() : function(t) {
			var n = e;
			return t[n(149)] || Object[n(142)](t)
		})(t)
	}! function(t, e) {
		for (var n = Zf, r = t();;) try {
			if (721572 == parseInt(n(153)) / 1 + -parseInt(n(155)) / 2 + -parseInt(n(174)) / 3 * (-parseInt(n(168)) / 4) + parseInt(n(150)) / 5 + parseInt(n(164)) / 6 + parseInt(n(157)) / 7 + -parseInt(n(166)) / 8 * (parseInt(n(179)) / 9)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}($f);
	const rl = function(t) {
		! function(t, e) {
			var n = Zf;
			if (typeof e !== n(144) && null !== e) throw new TypeError(n(147));
			t[n(163)] = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(143)](t, n(163), {
				writable: !1
			}), e && Qf(t, e)
		}(s, t);
		var e, n, r, i, a, o = (i = s, a = function() {
			var t = Zf;
			if (typeof Reflect === t(184) || !Reflect[t(193)]) return !1;
			if (Reflect[t(193)][t(165)]) return !1;
			if (typeof Proxy === t(144)) return !0;
			try {
				return Boolean.prototype.valueOf[t(187)](Reflect[t(193)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Zf,
				n = nl(i);
			if (a) {
				var r = nl(this)[e(159)];
				t = Reflect.construct(n, arguments, r)
			} else t = n[e(151)](this, arguments);
			return tl(this, t)
		});

		function s(t) {
			var e, n = Zf;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Zf(173))
			})(this, s), (e = o[n(187)](this, t, 0, 0, CyberGlobalData[n(191)]))[n(188)] = e[n(192)].width, e[n(170)] = e[n(192)][n(170)], e[n(194)] = .85, e[n(177)] = !0;
			var r = new(Phaser[n(196)])(e[n(192)], e[n(188)] / 2, e[n(170)] / 2, CyberInstance[n(186)][n(197)][n(148)](), {
				font: APP_FONT,
				fill: n(158),
				fontWeight: 400,
				fontSize: 60
			});
			return r[n(152)][n(154)](.5), e[n(146)](r), e[n(172)][n(175)][n(145)](e[n(185)], el(e)), e.game[n(178)][n(161)](el(e)), e
		}
		return e = s, r = Zf, (n = [{
			key: "onResume",
			value: function() {
				var t = Zf;
				CyberInstance[t(195)] = !1, CyberInstance[t(185)][t(162)](), this[t(189)](!0)
			}
		}]) && Jf(e.prototype, n), Object[r(143)](e, r(163), {
			writable: !1
		}), s
	}(Phaser[Kf(160)]);
	var il = sl;

	function al() {
		var t = ["anchor", "length", "cache", "animation", "play", "construct", "prototype", "base", "key", "2106736XanCHP", "Super expression must either be null or a function", "getImage", "8wWeBJQ", "atlas", "call", "game", "getJSON", "animName", "getPrototypeOf", "configurable", "anim", "33234320YYpwfC", "get", "this hasn't been initialised - super() hasn't been called", "bind", "getOwnPropertyDescriptor", "23874xaLMkX", "value", "665CFEALL", "destroy", "addDBEventListener", "constructor", "EventObject", "hasOwnProperty", "ske", "apply", "addChild", "armature", "buildArmatureDisplay", "30872DVdDSR", "options", "32207JtKrFc", "function", "object", "symbol", "Sprite", "undefined", "PhaserFactory", "213IZawek", "factory", "parseDragonBonesData", "parseTextureAtlasData", "LOOP_COMPLETE", "defineProperty", "Cannot call a class as a function", "enumerable", "stop", "__proto__", "setTo", "setPrototypeOf", "474192anhZKq", "528457mEgteM", "img", "valueOf", "iterator"];
		return (al = function() {
			return t
		})()
	}

	function ol(t) {
		var e = sl;
		return (ol = e(282) == typeof Symbol && e(284) == typeof Symbol[e(239)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && "function" == typeof Symbol && t[n(271)] === Symbol && t !== Symbol[n(246)] ? n(284) : typeof t
		})(t)
	}

	function sl(t, e) {
		var n = al();
		return (sl = function(t, e) {
			return n[t -= 235]
		})(t, e)
	}

	function cl(t, e) {
		if (!(t instanceof e)) throw new TypeError(sl(294))
	}

	function ul(t, e) {
		for (var n = sl, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(295)] = i.enumerable || !1, i[n(259)] = !0, n(267) in i && (i.writable = !0), Object[n(293)](t, i[n(248)], i)
		}
	}

	function hl() {
		var t = sl;
		return hl = typeof Reflect !== t(286) && Reflect[t(262)] ? Reflect[t(262)][t(264)]() : function(e, n, r) {
			var i = t,
				a = fl(e, n);
			if (a) {
				var o = Object[i(265)](a, n);
				return o[i(262)] ? o.get.call(arguments[i(241)] < 3 ? e : r) : o[i(267)]
			}
		}, hl.apply(this, arguments)
	}

	function fl(t, e) {
		for (var n = sl; !Object[n(246)][n(273)][n(254)](t, e) && null !== (t = yl(t)););
		return t
	}

	function ll(t, e) {
		var n = sl;
		return (ll = Object[n(299)] ? Object[n(299)][n(264)]() : function(t, e) {
			return t[n(297)] = e, t
		})(t, e)
	}

	function pl(t, e) {
		var n = sl;
		if (e && (ol(e) === n(283) || typeof e === n(282))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError(sl(263));
			return t
		}(t)
	}

	function yl(t) {
		var e = sl;
		return (yl = Object[e(299)] ? Object[e(258)].bind() : function(t) {
			var n = e;
			return t[n(297)] || Object[n(258)](t)
		})(t)
	}! function(t, e) {
		for (var n = sl, r = t();;) try {
			if (595041 == -parseInt(n(236)) / 1 + parseInt(n(279)) / 2 * (-parseInt(n(288)) / 3) + -parseInt(n(249)) / 4 + -parseInt(n(268)) / 5 * (parseInt(n(266)) / 6) + parseInt(n(281)) / 7 * (parseInt(n(252)) / 8) + -parseInt(n(235)) / 9 + parseInt(n(261)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(al);
	var dl = {};
	const vl = function(t) {
		var e = sl;
		! function(t, e) {
			var n = sl;
			if (typeof e !== n(282) && null !== e) throw new TypeError(n(250));
			t[n(246)] = Object.create(e && e[n(246)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(293)](t, n(246), {
				writable: !1
			}), e && ll(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = sl;
			if (typeof Reflect === t(286) || !Reflect[t(245)]) return !1;
			if (Reflect[t(245)].sham) return !1;
			if (typeof Proxy === t(282)) return !0;
			try {
				return Boolean[t(246)][t(238)][t(254)](Reflect[t(245)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = sl,
				n = yl(a);
			if (o) {
				var r = yl(this).constructor;
				t = Reflect[e(245)](n, arguments, r)
			} else t = n[e(275)](this, arguments);
			return pl(this, t)
		});

		function c(t, e) {
			var n, r = sl,
				i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
				a = arguments[r(241)] > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
				o = arguments[r(241)] > 4 && void 0 !== arguments[4] ? arguments[4] : null,
				u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null;
			cl(this, c), (n = s[r(254)](this, e, i, a, o, u))[r(280)] = t;
			var h = dragonBones[r(287)][r(289)];
			return !dl[n.options.armature] && (h[r(290)](n[r(255)][r(242)].getJSON(n[r(280)][r(274)])), h[r(291)](n[r(255)][r(242)][r(256)](n[r(280)][r(253)]), n[r(255)][r(242)][r(251)](n.options[r(237)], !0)[r(247)]), dl[n[r(280)][r(277)]] = n[r(280)][r(277)]), n[r(260)] = h[r(278)](n[r(280)].armature), n[r(260)].x = n[r(280)].x, n[r(260)].y = n[r(280)].y, n[r(260)][r(240)][r(298)](.5), n[r(276)](n.anim), n
		}
		return n = c, r = [{
			key: "play",
			value: function() {
				var t = sl,
					e = arguments[t(241)] > 0 && void 0 !== arguments[0] && arguments[0],
					n = arguments[t(241)] > 1 && void 0 !== arguments[1] ? arguments[1] : null;
				this[t(260)][t(243)][t(244)](this[t(280)][t(257)]), e || this[t(260)][t(270)](dragonBones[t(272)][t(292)], n)
			}
		}, {
			key: e(296),
			value: function() {
				var t = e;
				this[t(260)][t(243)][t(296)](this[t(280)][t(257)])
			}
		}, {
			key: "destroy",
			value: function() {
				var t = e;
				hl(yl(c[t(246)]), t(269), this)[t(254)](this, !0)
			}
		}], i = sl, r && ul(n[i(246)], r), Object[i(293)](n, i(246), {
			writable: !1
		}), c
	}(Phaser[il(285)]);
	var bl = Il;

	function gl(t) {
		var e = Il;
		return (gl = e(335) == typeof Symbol && e(306) == typeof Symbol[e(336)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(335) == typeof Symbol && t[n(317)] === Symbol && t !== Symbol[n(305)] ? "symbol" : typeof t
		})(t)
	}

	function ml(t, e) {
		for (var n = Il, r = 0; r < e.length; r++) {
			var i = e[r];
			i.enumerable = i[n(322)] || !1, i[n(334)] = !0, "value" in i && (i[n(327)] = !0), Object[n(331)](t, i.key, i)
		}
	}

	function Il(t, e) {
		var n = Ol();
		return (Il = function(t, e) {
			return n[t -= 305]
		})(t, e)
	}

	function wl(t, e) {
		var n = Il;
		return (wl = Object[n(324)] ? Object[n(324)].bind() : function(t, e) {
			return t[n(325)] = e, t
		})(t, e)
	}

	function Sl(t, e) {
		var n = Il;
		if (e && (gl(e) === n(321) || typeof e === n(335))) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Il(312));
			return t
		}(t)
	}

	function kl(t) {
		return (kl = Object[Il(324)] ? Object.getPrototypeOf.bind() : function(t) {
			return t.__proto__ || Object.getPrototypeOf(t)
		})(t)
	}

	function Ol() {
		var t = ["construct", "Super expression must either be null or a function", "767604pKlkrj", "constructor", "30JbFiby", "1799qIfPrs", "8PrMhkA", "object", "enumerable", "629199msuIRG", "setPrototypeOf", "__proto__", "12JZDlRW", "writable", "6612815mRbDDR", "create", "langCode", "defineProperty", "Sprite", "236btAmnr", "configurable", "function", "iterator", "219894qoRSaR", "7oMrQRi", "prototype", "symbol", "1359024sWIePf", "doGetFrame", "valueOf", "call", "531230Ewlelq", "this hasn't been initialised - super() hasn't been called", "undefined"];
		return (Ol = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = Il, r = t();;) try {
			if (115636 == parseInt(n(319)) / 1 * (parseInt(n(333)) / 2) + parseInt(n(337)) / 3 * (parseInt(n(320)) / 4) + parseInt(n(311)) / 5 + parseInt(n(316)) / 6 * (-parseInt(n(338)) / 7) + parseInt(n(307)) / 8 + parseInt(n(323)) / 9 * (parseInt(n(318)) / 10) + -parseInt(n(328)) / 11 * (parseInt(n(326)) / 12)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ol);
	const Cl = function(t) {
		var e = Il;
		! function(t, e) {
			var n = Il;
			if (typeof e !== n(335) && null !== e) throw new TypeError(n(315));
			t[n(305)] = Object[n(329)](e && e[n(305)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(331)](t, "prototype", {
				writable: !1
			}), e && wl(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Il;
			if (typeof Reflect === t(313) || !Reflect[t(314)]) return !1;
			if (Reflect[t(314)].sham) return !1;
			if ("function" == typeof Proxy) return !0;
			try {
				return Boolean.prototype[t(309)][t(310)](Reflect[t(314)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Il,
				n = kl(a);
			if (o) {
				var r = kl(this)[e(317)];
				t = Reflect[e(314)](n, arguments, r)
			} else t = n.apply(this, arguments);
			return Sl(this, t)
		});

		function c(t, e, n, r, i) {
			var a = Il;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), s[a(310)](this, t, e, n, r, i)
		}
		return n = c, i = Il, (r = [{
			key: e(308),
			value: function(t) {
				return CyberInstance[e(330)] + "_" + t
			}
		}]) && ml(n.prototype, r), Object[i(331)](n, i(305), {
			writable: !1
		}), c
	}(Phaser[bl(332)]);
	var Tl = Bl;

	function Pl(t) {
		var e = Bl;
		return (Pl = e(324) == typeof Symbol && e(313) == typeof Symbol[e(311)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(324) == typeof Symbol && t.constructor === Symbol && t !== Symbol[n(312)] ? "symbol" : typeof t
		})(t)
	}

	function xl(t, e) {
		for (var n = Bl, r = 0; r < e[n(326)]; r++) {
			var i = e[r];
			i[n(336)] = i[n(336)] || !1, i[n(353)] = !0, n(302) in i && (i[n(332)] = !0), Object[n(307)](t, i[n(304)], i)
		}
	}

	function _l() {
		var t = ["writable", "tween", "make", "undefined", "enumerable", "setTo", "add", "call", "time", "319vMCtdf", "218765BSXpQf", "#FFFFFF", "this hasn't been initialised - super() hasn't been called", "4480938ukxtsl", "constructor", "Linear", "create", "8915610oOUdpw", "createTexture", "18zGVZZC", "beginFill", "configurable", "value", "destroy", "key", "events", "setPrototypeOf", "defineProperty", "26EEMyDQ", "12OqBtBp", "Group", "iterator", "prototype", "symbol", "362856avdrNd", "616527Ioiujy", "bind", "endFill", "construct", "drawRect", "game", "Text", "Cannot call a class as a function", "valueOf", "function", "generateTexture", "length", "width", "__proto__", "graphics", "anchor", "5770360XdwOOb"];
		return (_l = function() {
			return t
		})()
	}

	function Rl(t, e) {
		var n = Bl;
		return (Rl = Object[n(306)] ? Object.setPrototypeOf[n(316)]() : function(t, e) {
			return t.__proto__ = e, t
		})(t, e)
	}

	function jl(t, e) {
		if (e && ("object" === Pl(e) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
		return El(t)
	}

	function El(t) {
		if (void 0 === t) throw new ReferenceError(Bl(344));
		return t
	}

	function Bl(t, e) {
		var n = _l();
		return (Bl = function(t, e) {
			return n[t -= 302]
		})(t, e)
	}

	function Al(t) {
		var e = Bl;
		return (Al = Object[e(306)] ? Object.getPrototypeOf.bind() : function(t) {
			return t[e(328)] || Object.getPrototypeOf(t)
		})(t)
	}! function(t, e) {
		for (var n = Bl, r = t();;) try {
			if (451588 == -parseInt(n(341)) / 1 * (-parseInt(n(308)) / 2) + -parseInt(n(351)) / 3 * (parseInt(n(314)) / 4) + -parseInt(n(342)) / 5 * (-parseInt(n(309)) / 6) + -parseInt(n(345)) / 7 + parseInt(n(331)) / 8 + -parseInt(n(315)) / 9 + parseInt(n(349)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(_l);
	var Fl = null;
	const Dl = function(t) {
		var e = Bl;
		! function(t, e) {
			var n = Bl;
			if (typeof e !== n(324) && null !== e) throw new TypeError("Super expression must either be null or a function");
			t[n(312)] = Object[n(348)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(307)](t, n(312), {
				writable: !1
			}), e && Rl(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Bl;
			if (typeof Reflect === t(335) || !Reflect[t(318)]) return !1;
			if (Reflect.construct.sham) return !1;
			if (typeof Proxy === t(324)) return !0;
			try {
				return Boolean[t(312)][t(323)][t(339)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Bl,
				n = Al(a);
			if (o) {
				var r = Al(this)[e(346)];
				t = Reflect.construct(n, arguments, r)
			} else t = n.apply(this, arguments);
			return jl(this, t)
		});

		function c(t, e, n) {
			var r, i = Bl;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError(Bl(322))
			})(this, c), (r = s[i(339)](this, t)).y = -75, r[i(348)](0, 0, c.createTexture(t)).alpha = .65;
			var a = new(Phaser[i(321)])(r.game, r[i(320)][i(327)] / 2, 37.5, e, {
				font: APP_FONT,
				fill: i(343),
				fontWeight: 400,
				fontSize: 26
			});
			return a[i(330)][i(337)](.5), r[i(338)](a), r[i(320)][i(338)][i(333)](El(r)).to({
				y: 0
			}, 200, i(347), !0), typeof n != i(335) ? r[i(320)].time[i(305)][i(338)](n, r.destroy, El(r)) : r.game[i(340)][i(305)][i(338)](2e3, r[i(303)], El(r)), r
		}
		return n = c, null, i = Bl, (r = [{
			key: e(350),
			value: function(t) {
				var n = e;
				if (!Fl) {
					var r = t[n(334)][n(329)](0, 0);
					r[n(352)](0), r[n(319)](0, 0, t[n(327)], 75), r[n(317)](), Fl = r[n(325)](), r[n(303)]()
				}
				return Fl
			}
		}]) && xl(n, r), Object[i(307)](n, i(312), {
			writable: !1
		}), c
	}(Phaser[Tl(310)]);
	var Nl = Wl;

	function Gl(t) {
		var e = Wl;
		return (Gl = e(478) == typeof Symbol && e(483) == typeof Symbol[e(467)] ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(478) == typeof Symbol && t[n(437)] === Symbol && t !== Symbol[n(485)] ? n(483) : typeof t
		})(t)
	}

	function Ll() {
		var t = ["call", "29496okBpgu", "11360DIUhZc", "text", "loadTexture", "image", "Player", "make", "4596JLJPpE", "sham", "name", "bind", "enumerable", "setText", "setPrototypeOf", "constructor", "create", "callAll", "1726992XNFuox", "c48", "valueOf", "homeScreen", "cache", "width", "Super expression must either be null or a function", "height", "bitmapData", "add", "no_avatar", "checkImageKey", "Rectangle", "484967ExsDCv", "1638KPkWCX", "939imibQw", "undefined", "key", "load", "getPrototypeOf", "tour", "revive", "36DVpxrT", "12068880dLXCXp", "defineProperty", "avatar", "kill", "iterator", "_hhh", "formatName", "updateAvatar", "construct", "length", "game", "setTo", "anchor", "this hasn't been initialised - super() hasn't been called", "apply", "function", "avatarSize", "writable", "applyTexture", "__proto__", "symbol", "value", "prototype", "alphaMask", "Group", "Derived constructors may only return object or undefined", "1035944dbmOED", "configurable", "destroy"];
		return (Ll = function() {
			return t
		})()
	}

	function Ml(t, e) {
		for (var n = Wl, r = 0; r < e[n(472)]; r++) {
			var i = e[r];
			i.enumerable = i[n(434)] || !1, i[n(490)] = !0, n(484) in i && (i[n(480)] = !0), Object.defineProperty(t, i[n(457)], i)
		}
	}

	function Wl(t, e) {
		var n = Ll();
		return (Wl = function(t, e) {
			return n[t -= 426]
		})(t, e)
	}

	function zl(t, e) {
		var n = Wl;
		return (zl = Object[n(436)] ? Object[n(436)][n(433)]() : function(t, e) {
			return t[n(482)] = e, t
		})(t, e)
	}

	function Ul(t, e) {
		var n = Wl;
		if (e && ("object" === Gl(e) || typeof e === n(478))) return e;
		if (void 0 !== e) throw new TypeError(n(488));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Wl(476));
			return t
		}(t)
	}

	function Vl(t) {
		var e = Wl;
		return (Vl = Object[e(436)] ? Object[e(459)].bind() : function(t) {
			return t[e(482)] || Object.getPrototypeOf(t)
		})(t)
	}! function(t, e) {
		for (var n = Wl, r = t();;) try {
			if (398263 == parseInt(n(453)) / 1 + parseInt(n(430)) / 2 * (parseInt(n(455)) / 3) + -parseInt(n(440)) / 4 + parseInt(n(494)) / 5 * (parseInt(n(462)) / 6) + parseInt(n(489)) / 7 + parseInt(n(493)) / 8 * (parseInt(n(454)) / 9) + -parseInt(n(463)) / 10) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Ll);
	var Hl = function(t) {
		var e = Wl;
		! function(t, e) {
			var n = Wl;
			if (typeof e !== n(478) && null !== e) throw new TypeError(n(446));
			t[n(485)] = Object[n(438)](e && e[n(485)], {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object.defineProperty(t, n(485), {
				writable: !1
			}), e && zl(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Wl;
			if (typeof Reflect === t(456) || !Reflect[t(471)]) return !1;
			if (Reflect[t(471)][t(431)]) return !1;
			if (typeof Proxy === t(478)) return !0;
			try {
				return Boolean[t(485)][t(442)][t(492)](Reflect.construct(Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Wl,
				n = Vl(a);
			if (o) {
				var r = Vl(this)[e(437)];
				t = Reflect[e(471)](n, arguments, r)
			} else t = n[e(477)](this, arguments);
			return Ul(this, t)
		});

		function c(t, e, n) {
			var r, i = Wl;
			(function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			})(this, c), (r = s.call(this, t, 0, 0))[i(432)] = "a" + e.id;
			var a, o = r[i(438)](0, 0, "tour", e.r > 3 ? "srank_item_bg" : "srank_item_bg_" + e.r);
			r[i(468)] = o[i(447)], e.r > 3 && (a = r[i(473)].add[i(495)](27, r[i(447)] / 2 + 2, e.r, {
				font: APP_FONT,
				fontSize: 20,
				fill: "#d2e0fd",
				fontWeight: 500
			}), r[i(449)](a), a.setText(e.r), a[i(475)].setTo(.5)), r[i(465)] = r[i(438)](60, 0, i(443), i(450)), r[i(473)][i(444)][i(451)](r.name) ? r[i(481)](r[i(432)]) : e.a && r.game[i(458)][i(427)](r[i(432)], e.a), r[i(465)][i(445)] = r[i(479)], r[i(465)][i(447)] = r.avatarSize, r.avatar.y = o[i(447)] / 2 - r[i(465)][i(447)] / 2, e.n || (e.n = i(428));
			var u = r[i(473)][i(449)][i(495)](r.avatar.x + r[i(479)] + 20, o[i(447)] / 2 + 2, e.n, {
				font: APP_FONT,
				fontSize: 20,
				fill: "#ffffff",
				fontWeight: 400
			});
			u[i(475)].setTo(0, .5), r[i(449)](u), u[i(435)](CyberHelper[i(469)](e.n, 30));
			var h = r[i(473)][i(449)][i(495)](290, r.height / 2 + 2, e.s, {
				font: APP_FONT,
				fontSize: 20,
				fill: "#ffffff",
				fontWeight: 500
			});
			return h[i(475)][i(474)](.5, .5), r.add(h), h[i(435)](e.s), r
		}
		return n = c, i = Wl, (r = [{
			key: e(470),
			value: function(t) {
				var n = e;
				this[n(465)][n(426)](t), this.avatar[n(445)] = this.avatarSize, this[n(465)][n(447)] = this[n(479)]
			}
		}, {
			key: "applyTexture",
			value: function(t) {
				var n = e;
				try {
					var r = new(Phaser[n(452)])(0, 0, this[n(479)], this[n(479)]),
						i = game.make[n(427)](0, 0, n(460), n(441));
					i[n(445)] = this.avatarSize, i[n(447)] = this[n(479)];
					var a = game[n(429)].bitmapData();
					a.load(i), i[n(491)]();
					var o = this[n(473)][n(429)][n(448)](this.avatarSize, this[n(479)]);
					o[n(486)](t, a, r), this.avatar.loadTexture(o)
				} catch (e) {
					this[n(465)][n(426)](t)
				}
				this[n(465)][n(445)] = this[n(479)], this[n(465)].height = this.avatarSize
			}
		}, {
			key: e(466),
			value: function() {
				var t = e;
				this.callAll(t(466))
			}
		}, {
			key: "revive",
			value: function() {
				var t = e;
				this[t(439)](t(461))
			}
		}, {
			key: e(447),
			get: function() {
				return this[e(468)]
			}
		}, {
			key: e(479),
			get: function() {
				return 32
			}
		}]) && Ml(n.prototype, r), Object[i(464)](n, i(485), {
			writable: !1
		}), c
	}(Phaser[Nl(487)]);

	function Xl(t) {
		var e = Ql;
		return (Xl = e(258) == typeof Symbol && e(254) == typeof Symbol.iterator ? function(t) {
			return typeof t
		} : function(t) {
			var n = e;
			return t && n(258) == typeof Symbol && t[n(265)] === Symbol && t !== Symbol[n(216)] ? n(254) : typeof t
		})(t)
	}

	function ql(t, e) {
		for (var n = Ql, r = 0; r < e.length; r++) {
			var i = e[r];
			i[n(260)] = i.enumerable || !1, i[n(277)] = !0, "value" in i && (i.writable = !0), Object[n(220)](t, i.key, i)
		}
	}

	function Kl(t, e) {
		var n = Ql;
		return (Kl = Object[n(246)] ? Object[n(246)][n(225)]() : function(t, e) {
			return t[n(251)] = e, t
		})(t, e)
	}

	function Yl(t, e) {
		var n = Ql;
		if (e && (Xl(e) === n(238) || "function" == typeof e)) return e;
		if (void 0 !== e) throw new TypeError(n(212));
		return function(t) {
			if (void 0 === t) throw new ReferenceError(Ql(243));
			return t
		}(t)
	}

	function Jl() {
		var t = ["enumerable", "replace", "38081373aQLugQ", "score", "Người dẫn đầu", "constructor", "Rectangle", "group", "getDuration", "_createHText", "events", "alphaMask", "rankList", "background", "game", "onFileComplete", "getByName", "configurable", "make", "Score", "overlay", "checkImageKey", "remove", "anchor", "tour", "avatar", "sranktitle_en", "addColor", "scoreTxt", "isAssetReady", "addChild", "height", "createHeaderTexts", "getPrototypeOf", "1706922sVWnPA", "viewport", "8780uhAZEq", "149988FGFiPX", "destroy", "currentRank", "langCode", "6WsVCRr", "createCurrentRank", "cmd", "currentScore", "formatTimeV3", "rank", "call", "load", "visible", "start", "valueOf", "construct", "createView", "4231976RiZLkl", "cache", "getDisplayName", "smy_bg", "#ffffff", "#d2e0fd", "avatarSize", "7775440EVLbZk", "add", "length", "Derived constructors may only return object or undefined", "setTo", "width", "onDestroyPopup", "prototype", "1153179DNgplH", "text", "c48", "defineProperty", "50cRQcAT", "onUpdateRanking", "onInputDown", "createTransition", "bind", "8vbdtFj", "updateDuration", "create", "TOP", "314onQGxO", "addOverlay", "no_avatar", "onTournamentEvent", "loadTexture", "listViewGroup", "sranktitle_vn", "show", "object", "undefined", "Super expression must either be null or a function", "Điểm", "log", "this hasn't been initialised - super() hasn't been called", "lang", "#de9493", "setPrototypeOf", "onDestroy", "getGuserid", "applyTexture", "createScrollView", "__proto__", "setText", "leaderTxt", "symbol", "sprite", "instance", "apply", "function", "listRanking"];
		return (Jl = function() {
			return t
		})()
	}

	function Ql(t, e) {
		var n = Jl();
		return (Ql = function(t, e) {
			return n[t -= 200]
		})(t, e)
	}

	function Zl(t) {
		var e = Ql;
		return (Zl = Object.setPrototypeOf ? Object[e(293)][e(225)]() : function(t) {
			var n = e;
			return t.__proto__ || Object[n(293)](t)
		})(t)
	}! function(t, e) {
		for (var n = Ql, r = t();;) try {
			if (926321 == -parseInt(n(296)) / 1 * (-parseInt(n(230)) / 2) + -parseInt(n(301)) / 3 * (parseInt(n(297)) / 4) + parseInt(n(209)) / 5 + parseInt(n(294)) / 6 + -parseInt(n(202)) / 7 * (-parseInt(n(226)) / 8) + -parseInt(n(217)) / 9 * (-parseInt(n(221)) / 10) + -parseInt(n(262)) / 11) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(Jl);
	const $l = function(t) {
		var e = Ql;
		! function(t, e) {
			var n = Ql;
			if (typeof e !== n(258) && null !== e) throw new TypeError(n(240));
			t.prototype = Object[n(228)](e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), Object[n(220)](t, n(216), {
				writable: !1
			}), e && Kl(t, e)
		}(c, t);
		var n, r, i, a, o, s = (a = c, o = function() {
			var t = Ql;
			if (typeof Reflect === t(239) || !Reflect[t(200)]) return !1;
			if (Reflect.construct.sham) return !1;
			if (typeof Proxy === t(258)) return !0;
			try {
				return Boolean.prototype[t(311)][t(307)](Reflect[t(200)](Boolean, [], (function() {}))), !0
			} catch (t) {
				return !1
			}
		}(), function() {
			var t, e = Ql,
				n = Zl(a);
			if (o) {
				var r = Zl(this)[e(265)];
				t = Reflect[e(200)](n, arguments, r)
			} else t = n[e(257)](this, arguments);
			return Yl(this, t)
		});

		function c(t) {
			var e = Ql;
			return function(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}(this, c), s[e(307)](this, t)
		}
		return n = c, i = Ql, (r = [{
			key: e(289),
			value: function() {
				var t = e;
				return this[t(274)][t(203)][t(281)](t(284))
			}
		}, {
			key: e(237),
			value: function() {
				var t = e;
				this[t(299)][t(252)](yt.instance[t(306)] > 0 ? yt.instance[t(306)] : "-"), this[t(304)][t(252)](yt[t(256)].score), this[t(309)] = !0
			}
		}, {
			key: e(201),
			value: function() {
				var t = e,
					n = this;
				this[t(247)].add(this[t(215)], this), this[t(274)][t(308)][t(275)][t(210)](this[t(275)], this), this[t(231)](.1), this[t(280)].events[t(223)].add((function() {
					n[t(309)] = !1
				})), this[t(273)] = this[t(228)](0, 5, t(284), "spopupbg");
				var r = this[t(274)][t(278)][t(255)](this[t(273)][t(214)] / 2, 11, t(284), "vn" == CyberInstance[t(300)] ? t(236) : t(286));
				r[t(283)][t(213)](.5, 0), this[t(273)][t(290)](r), this[t(292)](), this[t(250)](), this[t(227)](yt[t(256)][t(268)]()), this[t(302)](), this[t(224)](), yt.instance.refreshRanking();
				var i = yt[t(256)][t(272)];
				if (i[t(211)] > 0) {
					for (var a = 0; a < i[t(211)]; a++) this[t(259)][t(210)](new Hl(this.game, i[a], this[t(295)]));
					game[t(308)][t(310)]()
				} else yt[t(256)][t(270)][t(210)](this.onTournamentEvent, this), yt.instance.sendGetRankingRequest()
			}
		}, {
			key: e(302),
			value: function() {
				var t = e,
					n = this[t(228)](7, 290, "tour", t(205));
				this[t(273)][t(290)](n);
				var r = this[t(274)].make.text(32, n[t(291)] / 2 + 3, "-", {
					font: APP_FONT,
					fontSize: 20,
					fill: t(207),
					fontWeight: 500
				});
				n[t(290)](r), r.setText(yt[t(256)][t(306)] > 0 ? yt[t(256)][t(306)] : "-"), r[t(283)][t(213)](.5), this.currentRank = r;
				var i = "avatar" + ne[t(256)][t(248)]();
				this[t(285)] = this[t(228)](63, 0, "homeScreen", t(232)), this[t(285)][t(214)] = this[t(208)], this[t(285)][t(291)] = this.avatarSize, this[t(274)][t(203)][t(281)](i) && this[t(249)](i), this[t(285)].y = n.height / 2 - this[t(285)][t(291)] / 2, n[t(290)](this[t(285)]);
				var a = this.game.make[t(218)](this[t(285)].x + this[t(208)] + 20, n[t(291)] / 2 + 3, "", {
					font: APP_FONT,
					fontSize: 20,
					fill: t(206),
					fontWeight: 400
				});
				a[t(283)][t(213)](0, .5), n[t(290)](a), a.setText(CyberHelper.formatName(ne[t(256)][t(204)](), 30));
				var o = this[t(274)][t(210)][t(218)](293, n.height / 2 + 3, "0", {
					font: APP_FONT,
					fontSize: 20,
					fill: t(206),
					fontWeight: 500
				});
				o[t(283)].setTo(.5, .5), n[t(290)](o), o[t(252)](yt.instance[t(263)]), this.currentScore = o
			}
		}, {
			key: "onTournamentEvent",
			value: function(t) {
				var n = e;
				if (t[n(303)] == n(222)) {
					var r = yt[n(256)][n(272)];
					if (r[n(211)] > 0) {
						for (var i = 0; i < r.length; i++) this.listRanking[n(210)](new Hl(this[n(274)], r[i], this[n(295)]));
						game[n(308)][n(310)]()
					}
				}
			}
		}, {
			key: e(227),
			value: function(t) {
				var n = e;
				try {
					var r = CyberInstance[n(244)].RESET_IN[n(261)]("%s", u[n(305)](t)),
						i = this.game[n(278)].text(this[n(273)][n(214)] / 2, 50, r, {
							font: APP_FONT,
							fontSize: 19,
							fill: n(245),
							fontWeight: 400,
							wordWrapWidth: this.background[n(214)]
						});
					"vn" == CyberInstance[n(300)] && i[n(287)]("#b7ff00", 18), i[n(283)].setTo(.5, 0), this.background.addChild(i), i[n(252)](r)
				} catch (t) {
					console[n(242)](t)
				}
			}
		}, {
			key: e(292),
			value: function() {
				var t = e;
				this.topTxt = this._createHText(t(229), 30), this[t(253)] = this[t(269)]("vn" == CyberInstance[t(300)] ? t(264) : "Top players", 101), this[t(288)] = this._createHText("vn" == CyberInstance[t(300)] ? t(241) : t(279), 284)
			}
		}, {
			key: e(250),
			value: function() {
				var t = e;
				this[t(295)] = {
					width: 343,
					height: 182
				}, this.listViewGroup = this.game[t(210)][t(267)](), this.listViewGroup.x = 11, this[t(235)].y = 110, this[t(259)] = new kr(this[t(274)], this[t(235)], new Phaser.Rectangle(0, 0, this.viewport.width, this[t(295)][t(291)]), {
					direction: "y",
					padding: 2,
					searchForClicks: !0
				}), this[t(273)].addChild(this[t(235)])
			}
		}, {
			key: e(275),
			value: function(t, n, r) {
				var i = e;
				if (r) {
					var a = this[i(259)].grp[i(276)](n);
					a && a[i(249)](n)
				}
			}
		}, {
			key: e(215),
			value: function() {
				var t = e;
				this[t(247)].remove(this[t(215)], this), this[t(274)][t(308)][t(275)][t(282)](this[t(275)], this), yt[t(256)][t(270)][t(282)](this[t(233)], this);
				try {
					this[t(235)][t(298)](), this[t(259)][t(298)]()
				} catch (e) {
					console[t(242)](e)
				}
			}
		}, {
			key: e(269),
			value: function(t, n) {
				var r = e,
					i = this.game.make[r(218)](n, 85, "", {
						font: APP_FONT,
						fontSize: 18,
						fill: "#de9493",
						fontWeight: 400
					});
				return this.background[r(290)](i), i[r(252)](t), i
			}
		}, {
			key: "applyTexture",
			value: function(t) {
				var n = e;
				try {
					var r = new(Phaser[n(266)])(0, 0, this[n(208)], this.avatarSize),
						i = game[n(278)].image(0, 0, n(284), n(219));
					i[n(214)] = this.avatarSize, i.height = this[n(208)];
					var a = game[n(278)].bitmapData();
					a[n(308)](i), i[n(298)]();
					var o = this[n(274)][n(278)].bitmapData(this[n(208)], this[n(208)]);
					o[n(271)](t, a, r), this[n(285)][n(234)](o)
				} catch (e) {
					this[n(285)][n(234)](t)
				}
				this[n(285)][n(214)] = this.avatarSize, this[n(285)][n(291)] = this.avatarSize
			}
		}, {
			key: e(208),
			get: function() {
				return 32
			}
		}]) && ql(n[i(216)], r), Object[i(220)](n, i(216), {
			writable: !1
		}), c
	}(P);
	var tp = np;

	function ep(t, e) {
		for (var n = np, r = 0; r < e[n(354)]; r++) {
			var i = e[r];
			i[n(263)] = i[n(263)] || !1, i[n(353)] = !0, n(303) in i && (i[n(339)] = !0), Object[n(260)](t, i[n(361)], i)
		}
	}

	function np(t, e) {
		var n = rp();
		return (np = function(t, e) {
			return n[t -= 259]
		})(t, e)
	}

	function rp() {
		var t = ["setRVPlacementIDs", "ShopController", "sectionMap", "canPlay", "938lzeQRQ", "devEnabled", "30XSrYvH", "initPhaser", "1111743FKJonE", "getPlatform", "addSound", "BotImage", "CyberInstance", "onResume", "miniumMoneyCondition", "initIAP", "langCode", "BaseScreen", "CANVAS", "addAtlas", "game", "current", "switchToGameScreen", "instance", "addLobbySection", "lang", "setPort", "set", "version", "connect", "assets/images/no_avatar.png", "enableVisibilityChange", "value", "initialize", "defaultAvatarId", "_isHomeScreenStarted", "1665924nADqyt", "connector", "avatar", "Signal", "setHost", "inited", "onPause", "1787177MxxPFy", "349268juLuaw", "getDeveloperPayload", "start", "professional", "50436SqaVnK", "isDragonBonesReady", "overlayTexture", "1441ZmNSMB", "enableSwitchGameAsync", "maxInterShowAsyncAllowed", "port", "add", "Popup", "addLanguage", "15hAptfk", "setMiniumMoneyCondition", "setDeveloperPayload", "undefined", "setChatURL", "connectAsyncV2", "outOfMoney", "get", "paused", "AUTO", "writable", "addImage", "BootScreen", "setGameScreen", "developerPayload", "enableLanguage", "BaseButton", "Notification", "guserid", "135tPAYGh", "languageEnabled", "9ZxEOeB", "interids", "startGame", "configurable", "length", "maxUsers", "Game", "adEnabled", "playerId", "sound", "switchToLobbyScreen", "key", "7736gsLUEe", "dispatch", "disableAd", "BaseDragonBonesAnim", "signature", "rvids", "Cannot call a class as a function", "gameScreenKey", "TournamentGameRankingPopup", "amateur", "languageMap", "32EKROQs", "prototype", "NewScrollViewYun", "vi_VN", "enableDev", "host", "lobbyScreen", "51428fUaClg", "defineProperty", "has", "BaseSprite", "enumerable", "setMaxUsers", "zone", "BaseCheckBox", "0.9.1", "freeze", "state", "socket"];
		return (rp = function() {
			return t
		})()
	}! function(t, e) {
		for (var n = np, r = t();;) try {
			if (728069 == -parseInt(n(348)) / 1 * (-parseInt(n(362)) / 2) + -parseInt(n(350)) / 3 * (parseInt(n(315)) / 4) + parseInt(n(329)) / 5 * (parseInt(n(307)) / 6) + parseInt(n(314)) / 7 * (-parseInt(n(373)) / 8) + parseInt(n(279)) / 9 * (parseInt(n(277)) / 10) + -parseInt(n(322)) / 11 * (-parseInt(n(319)) / 12) + parseInt(n(259)) / 13 * (-parseInt(n(275)) / 14)) break;
			r.push(r.shift())
		} catch (t) {
			r.push(r.shift())
		}
	}(rp);
	var ip = null,
		ap = function() {
			var t, e, n, r = np;

			function i() {
				var t = np;
				return function(t, e) {
					if (!(t instanceof e)) throw new TypeError(np(368))
				}(this, i), !ip && (this.inited = !1, this[t(276)] = !1, this[t(357)] = !0, this.isSoundOn = !0, this[t(324)] = 3, this.languageEnabled = !1, this[t(309)] = t(301), this[t(299)] = t(267), this.host = null, this[t(325)] = null, this.zone = null, ip = this), ip
			}
			return t = i, n = np, (e = [{
				key: r(304),
				value: function() {
					var t = r;
					this[t(312)] || (this[t(278)](), this[t(270)] = new SFS2X.SmartFox({
						useSSL: !0,
						debug: !1
					}), this[t(308)] = new Rt(this.socket), z[t(294)][t(304)](this.socket), ne[t(294)][t(304)](this[t(270)]), et[t(294)].initialize(this[t(270)]), Yr[t(294)][t(304)](this[t(270)]), this.sound = new Bf, this.chat = new qf(this.socket), this[t(273)] = new Map, this.sectionMap[t(298)]("beginner", []), this[t(273)].set(t(371), []), this[t(273)][t(298)](t(318), []), this[t(273)].set("master", []), this.onHelpClick = new(Phaser[t(310)]), this[t(372)] = new Map, this[t(312)] = !0)
				}
			}, {
				key: r(278),
				value: function() {
					var t = r;
					this[t(291)] = new(Phaser[t(356)])(1136, 640, "WEB" === FBInstant[t(280)]() ? Phaser[t(289)] : Phaser[t(338)]), this.game[t(269)][t(326)](t(341), Pf), this.isHomeScreenStarted = !1, window[t(291)] = this[t(291)]
				}
			}, {
				key: "connectAsyncV2",
				value: function() {
					var t = this,
						e = setInterval((function() {
							var n = np;
							signedPlayerInfo[n(366)] && signedPlayerInfo.playerId && typeof signedPlayerInfo.guserid != n(332) && t[n(265)] && t.port && t[n(378)] && (clearInterval(e), t[n(358)] = signedPlayerInfo[n(358)], t.signature = signedPlayerInfo.signature, t[n(347)] = signedPlayerInfo[n(347)], CyberGlobalData[n(305)] = signedPlayerInfo.avatar, signedPlayerInfo = null, t.connector[n(300)]())
						}), 60)
				}
			}, {
				key: r(302),
				value: function() {
					var t = r,
						e = this;
					this[t(337)] = !1, this[t(284)] = new(Phaser[t(310)]), this[t(313)] = new(Phaser[t(310)]), FBInstant[t(313)]((function() {
						var n = t;
						e.paused || typeof CyberGlobalData[n(321)] == n(332) || (e[n(337)] = !0, e[n(313)][n(363)](), e[n(291)][n(269)][n(292)] === e.gameScreenKey && new rl(e[n(291)]))
					}))
				}
			}, {
				key: r(274),
				value: function(t) {
					return ne.instance.canPlay(t)
				}
			}, {
				key: r(352),
				value: function() {
					var t = r;
					this[t(291)][t(269)][t(317)](t(341))
				}
			}, {
				key: r(360),
				value: function() {
					var t = r;
					this[t(291)][t(269)][t(317)](CyberGlobalData[t(379)], !0, !1)
				}
			}, {
				key: r(293),
				value: function() {
					var t = r;
					this[t(291)][t(269)][t(317)](this.gameScreenKey, !0, !1)
				}
			}, {
				key: r(323),
				value: function() {
					this.switchGameEnabled = !0
				}
			}, {
				key: "setZone",
				value: function(t) {
					return this[r(265)] = t, this
				}
			}, {
				key: r(311),
				value: function(t) {
					return this[r(378)] = t, this
				}
			}, {
				key: r(297),
				value: function(t) {
					return this[r(325)] = t, this
				}
			}, {
				key: r(264),
				value: function(t) {
					return this[r(355)] = t, this
				}
			}, {
				key: r(330),
				value: function(t) {
					return this[r(285)] = t, this
				}
			}, {
				key: r(342),
				value: function(t, e) {
					var n = r;
					!this.gameScreenKey && (this.gameScreenKey = t, Object[n(268)](this[n(369)]), game[n(269)].add(t, e))
				}
			}, {
				key: r(286),
				value: function(t) {
					ft[r(294)].addProducts(t)
				}
			}, {
				key: r(271),
				value: function(t) {
					var e = r;
					return this[e(367)] = t, Object[e(268)](this[e(367)]), this
				}
			}, {
				key: "setInterstitialIDs",
				value: function(t, e) {
					var n = r;
					return this[n(351)] = t, Object.freeze(this[n(351)]), void 0 !== e && (this.maxInterShowAsyncAllowed = e), this
				}
			}, {
				key: r(331),
				value: function(t) {
					return this[r(343)] = t, this
				}
			}, {
				key: r(316),
				value: function() {
					return this[r(343)]
				}
			}, {
				key: r(333),
				value: function(t) {
					return this
				}
			}, {
				key: r(295),
				value: function(t, e) {
					var n = r;
					this[n(273)].has(t) && this[n(273)].get(t).push(e)
				}
			}, {
				key: r(340),
				value: function(t, e) {
					return a[r(340)](t, e), this
				}
			}, {
				key: "addJSON",
				value: function(t, e) {
					return a.addJSON(t, e), this
				}
			}, {
				key: r(290),
				value: function(t, e, n) {
					return a[r(290)](t, e, n), this
				}
			}, {
				key: "addBitmapFont",
				value: function(t, e, n) {
					return a.addBitmapFont(t, e, n), this
				}
			}, {
				key: r(281),
				value: function(t, e) {
					return this[r(359)].add(t, e), this
				}
			}, {
				key: r(320),
				value: function() {
					return a.isDragonBonesReady()
				}
			}, {
				key: "setOutOfMoney",
				value: function(t) {
					this[r(335)] = t
				}
			}, {
				key: r(328),
				value: function(t, e) {
					return this[r(372)].set(t, e), this
				}
			}, {
				key: "setDefaultLanguage",
				value: function(t) {
					var e = r;
					this[e(372)][e(261)](t) && (this[e(296)] = this[e(372)][e(336)](t), this[e(287)] = t == e(376) ? "vn" : "en")
				}
			}, {
				key: r(344),
				value: function() {
					return this[r(349)] = !0, this
				}
			}, {
				key: r(377),
				value: function() {
					this[r(276)] = !0
				}
			}, {
				key: r(364),
				value: function() {
					this[r(357)] = !1
				}
			}, {
				key: "setVersion",
				value: function(t) {
					this[r(299)] = t
				}
			}, {
				key: "isHomeScreenStarted",
				get: function() {
					return this[r(306)]
				},
				set: function(t) {
					this[r(306)] = t
				}
			}]) && ep(t[n(374)], e), Object[n(260)](t, n(374), {
				writable: !1
			}), i
		}();
	window.CyberGlobalData = {
		dailyDays: -1,
		dailyCollected: !1,
		dailyAutoShowEnabled: !0,
		canShowFlashSale: !0
	}, window[tp(283)] = new ap, window.CyberHelper = u, CyberInstance.BasePopup = P, CyberInstance[tp(327)] = G, CyberInstance.LoadingPopup = b, CyberInstance.ListView = kr, CyberInstance[tp(288)] = le, CyberInstance[tp(282)] = zr, CyberInstance[tp(345)] = Lt, CyberInstance[tp(266)] = tn, CyberInstance[tp(262)] = Cl, CyberInstance[tp(346)] = Dl, CyberInstance[tp(365)] = vl, CyberInstance[tp(272)] = et, CyberInstance[tp(375)] = Br, CyberInstance[tp(370)] = $l, CyberInstance[tp(304)](), CyberInstance[tp(334)]()
})();