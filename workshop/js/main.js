var Zepto = function() {
		function t(t) {
			return null == t ? String(t) : U[Y.call(t)] || "object"
		}
		function e(e) {
			return "function" == t(e)
		}
		function n(t) {
			return null != t && t == t.window
		}
		function i(t) {
			return null != t && t.nodeType == t.DOCUMENT_NODE
		}
		function r(e) {
			return "object" == t(e)
		}
		function o(t) {
			return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
		}
		function s(t) {
			return "number" == typeof t.length
		}
		function a(t) {
			return O.call(t, function(t) {
				return null != t
			})
		}
		function c(t) {
			return t.length > 0 ? x.fn.concat.apply([], t) : t
		}
		function u(t) {
			return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}
		function l(t) {
			return t in j ? j[t] : j[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
		}
		function h(t, e) {
			return "number" != typeof e || D[u(t)] ? e : e + "px"
		}
		function f(t) {
			var e, n;
			return N[t] || (e = P.createElement(t), P.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), N[t] = n), N[t]
		}
		function p(t) {
			return "children" in t ? k.call(t.children) : x.map(t.childNodes, function(t) {
				return 1 == t.nodeType ? t : void 0
			})
		}
		function d(t, e, n) {
			for (_ in e) n && (o(e[_]) || J(e[_])) ? (o(e[_]) && !o(t[_]) && (t[_] = {}), J(e[_]) && !J(t[_]) && (t[_] = []), d(t[_], e[_], n)) : e[_] !== b && (t[_] = e[_])
		}
		function m(t, e) {
			return null == e ? x(t) : x(t).filter(e)
		}
		function v(t, n, i, r) {
			return e(n) ? n.call(t, i, r) : n
		}
		function g(t, e, n) {
			null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
		}
		function y(t, e) {
			var n = t.className || "",
				i = n && n.baseVal !== b;
			return e === b ? i ? n.baseVal : n : void(i ? n.baseVal = e : t.className = e)
		}
		function T(t) {
			try {
				return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? x.parseJSON(t) : t) : t
			} catch (e) {
				return t
			}
		}
		function w(t, e) {
			e(t);
			for (var n = 0, i = t.childNodes.length; i > n; n++) w(t.childNodes[n], e)
		}
		var b, _, x, E, A, C, S = [],
			k = S.slice,
			O = S.filter,
			P = window.document,
			N = {},
			j = {},
			D = {
				"column-count": 1,
				columns: 1,
				"font-weight": 1,
				"line-height": 1,
				opacity: 1,
				"z-index": 1,
				zoom: 1
			},
			I = /^\s*<(\w+|!)[^>]*>/,
			L = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			X = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			M = /^(?:body|html)$/i,
			R = /([A-Z])/g,
			z = ["val", "css", "html", "text", "data", "width", "height", "offset"],
			W = ["after", "prepend", "before", "append"],
			F = P.createElement("table"),
			Z = P.createElement("tr"),
			q = {
				tr: P.createElement("tbody"),
				tbody: F,
				thead: F,
				tfoot: F,
				td: Z,
				th: Z,
				"*": P.createElement("div")
			},
			$ = /complete|loaded|interactive/,
			H = /^[\w-]*$/,
			U = {},
			Y = U.toString,
			B = {},
			V = P.createElement("div"),
			G = {
				tabindex: "tabIndex",
				readonly: "readOnly",
				"for": "htmlFor",
				"class": "className",
				maxlength: "maxLength",
				cellspacing: "cellSpacing",
				cellpadding: "cellPadding",
				rowspan: "rowSpan",
				colspan: "colSpan",
				usemap: "useMap",
				frameborder: "frameBorder",
				contenteditable: "contentEditable"
			},
			J = Array.isArray ||
		function(t) {
			return t instanceof Array
		};
		return B.matches = function(t, e) {
			if (!e || !t || 1 !== t.nodeType) return !1;
			var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
			if (n) return n.call(t, e);
			var i, r = t.parentNode,
				o = !r;
			return o && (r = V).appendChild(t), i = ~B.qsa(r, e).indexOf(t), o && V.removeChild(t), i
		}, A = function(t) {
			return t.replace(/-+(.)?/g, function(t, e) {
				return e ? e.toUpperCase() : ""
			})
		}, C = function(t) {
			return O.call(t, function(e, n) {
				return t.indexOf(e) == n
			})
		}, B.fragment = function(t, e, n) {
			var i, r, s;
			return L.test(t) && (i = x(P.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(X, "<$1></$2>")), e === b && (e = I.test(t) && RegExp.$1), e in q || (e = "*"), s = q[e], s.innerHTML = "" + t, i = x.each(k.call(s.childNodes), function() {
				s.removeChild(this)
			})), o(n) && (r = x(i), x.each(n, function(t, e) {
				z.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
			})), i
		}, B.Z = function(t, e) {
			return t = t || [], t.__proto__ = x.fn, t.selector = e || "", t
		}, B.isZ = function(t) {
			return t instanceof B.Z
		}, B.init = function(t, n) {
			var i;
			if (!t) return B.Z();
			if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && I.test(t)) i = B.fragment(t, RegExp.$1, n), t = null;
			else {
				if (n !== b) return x(n).find(t);
				i = B.qsa(P, t)
			} else {
				if (e(t)) return x(P).ready(t);
				if (B.isZ(t)) return t;
				if (J(t)) i = a(t);
				else if (r(t)) i = [t], t = null;
				else if (I.test(t)) i = B.fragment(t.trim(), RegExp.$1, n), t = null;
				else {
					if (n !== b) return x(n).find(t);
					i = B.qsa(P, t)
				}
			}
			return B.Z(i, t)
		}, x = function(t, e) {
			return B.init(t, e)
		}, x.extend = function(t) {
			var e, n = k.call(arguments, 1);
			return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
				d(t, n, e)
			}), t
		}, B.qsa = function(t, e) {
			var n, r = "#" == e[0],
				o = !r && "." == e[0],
				s = r || o ? e.slice(1) : e,
				a = H.test(s);
			return i(t) && a && r ? (n = t.getElementById(s)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType ? [] : k.call(a && !r ? o ? t.getElementsByClassName(s) : t.getElementsByTagName(e) : t.querySelectorAll(e))
		}, x.contains = P.documentElement.contains ?
		function(t, e) {
			return t !== e && t.contains(e)
		} : function(t, e) {
			for (; e && (e = e.parentNode);) if (e === t) return !0;
			return !1
		}, x.type = t, x.isFunction = e, x.isWindow = n, x.isArray = J, x.isPlainObject = o, x.isEmptyObject = function(t) {
			var e;
			for (e in t) return !1;
			return !0
		}, x.inArray = function(t, e, n) {
			return S.indexOf.call(e, t, n)
		}, x.camelCase = A, x.trim = function(t) {
			return null == t ? "" : String.prototype.trim.call(t)
		}, x.uuid = 0, x.support = {}, x.expr = {}, x.map = function(t, e) {
			var n, i, r, o = [];
			if (s(t)) for (i = 0; i < t.length; i++) n = e(t[i], i), null != n && o.push(n);
			else for (r in t) n = e(t[r], r), null != n && o.push(n);
			return c(o)
		}, x.each = function(t, e) {
			var n, i;
			if (s(t)) {
				for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
			} else for (i in t) if (e.call(t[i], i, t[i]) === !1) return t;
			return t
		}, x.grep = function(t, e) {
			return O.call(t, e)
		}, window.JSON && (x.parseJSON = JSON.parse), x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
			U["[object " + e + "]"] = e.toLowerCase()
		}), x.fn = {
			forEach: S.forEach,
			reduce: S.reduce,
			push: S.push,
			sort: S.sort,
			indexOf: S.indexOf,
			concat: S.concat,
			map: function(t) {
				return x(x.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			slice: function() {
				return x(k.apply(this, arguments))
			},
			ready: function(t) {
				return $.test(P.readyState) && P.body ? t(x) : P.addEventListener("DOMContentLoaded", function() {
					t(x)
				}, !1), this
			},
			get: function(t) {
				return t === b ? k.call(this) : this[t >= 0 ? t : t + this.length]
			},
			toArray: function() {
				return this.get()
			},
			size: function() {
				return this.length
			},
			remove: function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each: function(t) {
				return S.every.call(this, function(e, n) {
					return t.call(e, n, e) !== !1
				}), this
			},
			filter: function(t) {
				return e(t) ? this.not(this.not(t)) : x(O.call(this, function(e) {
					return B.matches(e, t)
				}))
			},
			add: function(t, e) {
				return x(C(this.concat(x(t, e))))
			},
			is: function(t) {
				return this.length > 0 && B.matches(this[0], t)
			},
			not: function(t) {
				var n = [];
				if (e(t) && t.call !== b) this.each(function(e) {
					t.call(this, e) || n.push(this)
				});
				else {
					var i = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? k.call(t) : x(t);
					this.forEach(function(t) {
						i.indexOf(t) < 0 && n.push(t)
					})
				}
				return x(n)
			},
			has: function(t) {
				return this.filter(function() {
					return r(t) ? x.contains(this, t) : x(this).find(t).size()
				})
			},
			eq: function(t) {
				return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
			},
			first: function() {
				var t = this[0];
				return t && !r(t) ? t : x(t)
			},
			last: function() {
				var t = this[this.length - 1];
				return t && !r(t) ? t : x(t)
			},
			find: function(t) {
				var e, n = this;
				return e = t ? "object" == typeof t ? x(t).filter(function() {
					var t = this;
					return S.some.call(n, function(e) {
						return x.contains(e, t)
					})
				}) : 1 == this.length ? x(B.qsa(this[0], t)) : this.map(function() {
					return B.qsa(this, t)
				}) : x()
			},
			closest: function(t, e) {
				var n = this[0],
					r = !1;
				for ("object" == typeof t && (r = x(t)); n && !(r ? r.indexOf(n) >= 0 : B.matches(n, t));) n = n !== e && !i(n) && n.parentNode;
				return x(n)
			},
			parents: function(t) {
				for (var e = [], n = this; n.length > 0;) n = x.map(n, function(t) {
					return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
				});
				return m(e, t)
			},
			parent: function(t) {
				return m(C(this.pluck("parentNode")), t)
			},
			children: function(t) {
				return m(this.map(function() {
					return p(this)
				}), t)
			},
			contents: function() {
				return this.map(function() {
					return k.call(this.childNodes)
				})
			},
			siblings: function(t) {
				return m(this.map(function(t, e) {
					return O.call(p(e.parentNode), function(t) {
						return t !== e
					})
				}), t)
			},
			empty: function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck: function(t) {
				return x.map(this, function(e) {
					return e[t]
				})
			},
			show: function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = f(this.nodeName))
				})
			},
			replaceWith: function(t) {
				return this.before(t).remove()
			},
			wrap: function(t) {
				var n = e(t);
				if (this[0] && !n) var i = x(t).get(0),
					r = i.parentNode || this.length > 1;
				return this.each(function(e) {
					x(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
				})
			},
			wrapAll: function(t) {
				if (this[0]) {
					x(this[0]).before(t = x(t));
					for (var e;
					(e = t.children()).length;) t = e.first();
					x(t).append(this)
				}
				return this
			},
			wrapInner: function(t) {
				var n = e(t);
				return this.each(function(e) {
					var i = x(this),
						r = i.contents(),
						o = n ? t.call(this, e) : t;
					r.length ? r.wrapAll(o) : i.append(o)
				})
			},
			unwrap: function() {
				return this.parent().each(function() {
					x(this).replaceWith(x(this).children())
				}), this
			},
			clone: function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide: function() {
				return this.css("display", "none")
			},
			toggle: function(t) {
				return this.each(function() {
					var e = x(this);
					(t === b ? "none" == e.css("display") : t) ? e.show() : e.hide()
				})
			},
			prev: function(t) {
				return x(this.pluck("previousElementSibling")).filter(t || "*")
			},
			next: function(t) {
				return x(this.pluck("nextElementSibling")).filter(t || "*")
			},
			html: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = this.innerHTML;
					x(this).empty().append(v(this, t, e, n))
				}) : 0 in this ? this[0].innerHTML : null
			},
			text: function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = v(this, t, e, this.textContent);
					this.textContent = null == n ? "" : "" + n
				}) : 0 in this ? this[0].textContent : null
			},
			attr: function(t, e) {
				var n;
				return "string" != typeof t || 1 in arguments ? this.each(function(n) {
					if (1 === this.nodeType) if (r(t)) for (_ in t) g(this, _, t[_]);
					else g(this, t, v(this, e, n, this.getAttribute(t)))
				}) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : b
			},
			removeAttr: function(t) {
				return this.each(function() {
					1 === this.nodeType && t.split(" ").forEach(function(t) {
						g(this, t)
					}, this)
				})
			},
			prop: function(t, e) {
				return t = G[t] || t, 1 in arguments ? this.each(function(n) {
					this[t] = v(this, e, n, this[t])
				}) : this[0] && this[0][t]
			},
			data: function(t, e) {
				var n = "data-" + t.replace(R, "-$1").toLowerCase(),
					i = 1 in arguments ? this.attr(n, e) : this.attr(n);
				return null !== i ? T(i) : b
			},
			val: function(t) {
				return 0 in arguments ? this.each(function(e) {
					this.value = v(this, t, e, this.value)
				}) : this[0] && (this[0].multiple ? x(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value)
			},
			offset: function(t) {
				if (t) return this.each(function(e) {
					var n = x(this),
						i = v(this, t, e, n.offset()),
						r = n.offsetParent().offset(),
						o = {
							top: i.top - r.top,
							left: i.left - r.left
						};
					"static" == n.css("position") && (o.position = "relative"), n.css(o)
				});
				if (!this.length) return null;
				var e = this[0].getBoundingClientRect();
				return {
					left: e.left + window.pageXOffset,
					top: e.top + window.pageYOffset,
					width: Math.round(e.width),
					height: Math.round(e.height)
				}
			},
			css: function(e, n) {
				if (arguments.length < 2) {
					var i, r = this[0];
					if (!r) return;
					if (i = getComputedStyle(r, ""), "string" == typeof e) return r.style[A(e)] || i.getPropertyValue(e);
					if (J(e)) {
						var o = {};
						return x.each(e, function(t, e) {
							o[e] = r.style[A(e)] || i.getPropertyValue(e)
						}), o
					}
				}
				var s = "";
				if ("string" == t(e)) n || 0 === n ? s = u(e) + ":" + h(e, n) : this.each(function() {
					this.style.removeProperty(u(e))
				});
				else for (_ in e) e[_] || 0 === e[_] ? s += u(_) + ":" + h(_, e[_]) + ";" : this.each(function() {
					this.style.removeProperty(u(_))
				});
				return this.each(function() {
					this.style.cssText += ";" + s
				})
			},
			index: function(t) {
				return t ? this.indexOf(x(t)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass: function(t) {
				return t ? S.some.call(this, function(t) {
					return this.test(y(t))
				}, l(t)) : !1
			},
			addClass: function(t) {
				return t ? this.each(function(e) {
					if ("className" in this) {
						E = [];
						var n = y(this),
							i = v(this, t, e, n);
						i.split(/\s+/g).forEach(function(t) {
							x(this).hasClass(t) || E.push(t)
						}, this), E.length && y(this, n + (n ? " " : "") + E.join(" "))
					}
				}) : this
			},
			removeClass: function(t) {
				return this.each(function(e) {
					if ("className" in this) {
						if (t === b) return y(this, "");
						E = y(this), v(this, t, e, E).split(/\s+/g).forEach(function(t) {
							E = E.replace(l(t), " ")
						}), y(this, E.trim())
					}
				})
			},
			toggleClass: function(t, e) {
				return t ? this.each(function(n) {
					var i = x(this),
						r = v(this, t, n, y(this));
					r.split(/\s+/g).forEach(function(t) {
						(e === b ? !i.hasClass(t) : e) ? i.addClass(t) : i.removeClass(t)
					})
				}) : this
			},
			scrollTop: function(t) {
				if (this.length) {
					var e = "scrollTop" in this[0];
					return t === b ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ?
					function() {
						this.scrollTop = t
					} : function() {
						this.scrollTo(this.scrollX, t)
					})
				}
			},
			scrollLeft: function(t) {
				if (this.length) {
					var e = "scrollLeft" in this[0];
					return t === b ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ?
					function() {
						this.scrollLeft = t
					} : function() {
						this.scrollTo(t, this.scrollY)
					})
				}
			},
			position: function() {
				if (this.length) {
					var t = this[0],
						e = this.offsetParent(),
						n = this.offset(),
						i = M.test(e[0].nodeName) ? {
							top: 0,
							left: 0
						} : e.offset();
					return n.top -= parseFloat(x(t).css("margin-top")) || 0, n.left -= parseFloat(x(t).css("margin-left")) || 0, i.top += parseFloat(x(e[0]).css("border-top-width")) || 0, i.left += parseFloat(x(e[0]).css("border-left-width")) || 0, {
						top: n.top - i.top,
						left: n.left - i.left
					}
				}
			},
			offsetParent: function() {
				return this.map(function() {
					for (var t = this.offsetParent || P.body; t && !M.test(t.nodeName) && "static" == x(t).css("position");) t = t.offsetParent;
					return t
				})
			}
		}, x.fn.detach = x.fn.remove, ["width", "height"].forEach(function(t) {
			var e = t.replace(/./, function(t) {
				return t[0].toUpperCase()
			});
			x.fn[t] = function(r) {
				var o, s = this[0];
				return r === b ? n(s) ? s["inner" + e] : i(s) ? s.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
					s = x(this), s.css(t, v(this, r, e, s[t]()))
				})
			}
		}), W.forEach(function(e, n) {
			var i = n % 2;
			x.fn[e] = function() {
				var e, r, o = x.map(arguments, function(n) {
					return e = t(n), "object" == e || "array" == e || null == n ? n : B.fragment(n)
				}),
					s = this.length > 1;
				return o.length < 1 ? this : this.each(function(t, e) {
					r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
					var a = x.contains(P.documentElement, r);
					o.forEach(function(t) {
						if (s) t = t.cloneNode(!0);
						else if (!r) return x(t).remove();
						r.insertBefore(t, e), a && w(t, function(t) {
							null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
						})
					})
				})
			}, x.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
				return x(t)[e](this), this
			}
		}), B.Z.prototype = x.fn, B.uniq = C, B.deserializeValue = T, x.zepto = B, x
	}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto), function(t) {
	function e(t) {
		return t._zid || (t._zid = f++)
	}
	function n(t, n, o, s) {
		if (n = i(n), n.ns) var a = r(n.ns);
		return (v[e(t)] || []).filter(function(t) {
			return t && (!n.e || t.e == n.e) && (!n.ns || a.test(t.ns)) && (!o || e(t.fn) === e(o)) && (!s || t.sel == s)
		})
	}
	function i(t) {
		var e = ("" + t).split(".");
		return {
			e: e[0],
			ns: e.slice(1).sort().join(" ")
		}
	}
	function r(t) {
		return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
	}
	function o(t, e) {
		return t.del && !y && t.e in T || !! e
	}
	function s(t) {
		return w[t] || y && T[t] || t
	}
	function a(n, r, a, c, l, f, p) {
		var d = e(n),
			m = v[d] || (v[d] = []);
		r.split(/\s/).forEach(function(e) {
			if ("ready" == e) return t(document).ready(a);
			var r = i(e);
			r.fn = a, r.sel = l, r.e in w && (a = function(e) {
				var n = e.relatedTarget;
				return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : void 0
			}), r.del = f;
			var d = f || a;
			r.proxy = function(t) {
				if (t = u(t), !t.isImmediatePropagationStopped()) {
					t.data = c;
					var e = d.apply(n, t._args == h ? [t] : [t].concat(t._args));
					return e === !1 && (t.preventDefault(), t.stopPropagation()), e
				}
			}, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(s(r.e), r.proxy, o(r, p))
		})
	}
	function c(t, i, r, a, c) {
		var u = e(t);
		(i || "").split(/\s/).forEach(function(e) {
			n(t, e, r, a).forEach(function(e) {
				delete v[u][e.i], "removeEventListener" in t && t.removeEventListener(s(e.e), e.proxy, o(e, c))
			})
		})
	}
	function u(e, n) {
		return !n && e.isDefaultPrevented || (n || (n = e), t.each(E, function(t, i) {
			var r = n[t];
			e[t] = function() {
				return this[i] = b, r && r.apply(n, arguments)
			}, e[i] = _
		}), (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = b)), e
	}
	function l(t) {
		var e, n = {
			originalEvent: t
		};
		for (e in t) x.test(e) || t[e] === h || (n[e] = t[e]);
		return u(n, t)
	}
	var h, f = 1,
		p = Array.prototype.slice,
		d = t.isFunction,
		m = function(t) {
			return "string" == typeof t
		},
		v = {},
		g = {},
		y = "onfocusin" in window,
		T = {
			focus: "focusin",
			blur: "focusout"
		},
		w = {
			mouseenter: "mouseover",
			mouseleave: "mouseout"
		};
	g.click = g.mousedown = g.mouseup = g.mousemove = "MouseEvents", t.event = {
		add: a,
		remove: c
	}, t.proxy = function(n, i) {
		var r = 2 in arguments && p.call(arguments, 2);
		if (d(n)) {
			var o = function() {
					return n.apply(i, r ? r.concat(p.call(arguments)) : arguments)
				};
			return o._zid = e(n), o
		}
		if (m(i)) return r ? (r.unshift(n[i], n), t.proxy.apply(null, r)) : t.proxy(n[i], n);
		throw new TypeError("expected function")
	}, t.fn.bind = function(t, e, n) {
		return this.on(t, e, n)
	}, t.fn.unbind = function(t, e) {
		return this.off(t, e)
	}, t.fn.one = function(t, e, n, i) {
		return this.on(t, e, n, i, 1)
	};
	var b = function() {
			return !0
		},
		_ = function() {
			return !1
		},
		x = /^([A-Z]|returnValue$|layer[XY]$)/,
		E = {
			preventDefault: "isDefaultPrevented",
			stopImmediatePropagation: "isImmediatePropagationStopped",
			stopPropagation: "isPropagationStopped"
		};
	t.fn.delegate = function(t, e, n) {
		return this.on(e, t, n)
	}, t.fn.undelegate = function(t, e, n) {
		return this.off(e, t, n)
	}, t.fn.live = function(e, n) {
		return t(document.body).delegate(this.selector, e, n), this
	}, t.fn.die = function(e, n) {
		return t(document.body).undelegate(this.selector, e, n), this
	}, t.fn.on = function(e, n, i, r, o) {
		var s, u, f = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			f.on(t, n, i, e, o)
		}), f) : (m(n) || d(r) || r === !1 || (r = i, i = n, n = h), (d(i) || i === !1) && (r = i, i = h), r === !1 && (r = _), f.each(function(h, f) {
			o && (s = function(t) {
				return c(f, t.type, r), r.apply(this, arguments)
			}), n && (u = function(e) {
				var i, o = t(e.target).closest(n, f).get(0);
				return o && o !== f ? (i = t.extend(l(e), {
					currentTarget: o,
					liveFired: f
				}), (s || r).apply(o, [i].concat(p.call(arguments, 1)))) : void 0
			}), a(f, e, r, i, n, u || s)
		}))
	}, t.fn.off = function(e, n, i) {
		var r = this;
		return e && !m(e) ? (t.each(e, function(t, e) {
			r.off(t, n, e)
		}), r) : (m(n) || d(i) || i === !1 || (i = n, n = h), i === !1 && (i = _), r.each(function() {
			c(this, e, i, n)
		}))
	}, t.fn.trigger = function(e, n) {
		return e = m(e) || t.isPlainObject(e) ? t.Event(e) : u(e), e._args = n, this.each(function() {
			e.type in T && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
		})
	}, t.fn.triggerHandler = function(e, i) {
		var r, o;
		return this.each(function(s, a) {
			r = l(m(e) ? t.Event(e) : e), r._args = i, r.target = a, t.each(n(a, e.type || e), function(t, e) {
				return o = e.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0
			})
		}), o
	}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
		t.fn[e] = function(t) {
			return 0 in arguments ? this.bind(e, t) : this.trigger(e)
		}
	}), t.Event = function(t, e) {
		m(t) || (e = t, t = e.type);
		var n = document.createEvent(g[t] || "Events"),
			i = !0;
		if (e) for (var r in e)"bubbles" == r ? i = !! e[r] : n[r] = e[r];
		return n.initEvent(t, i, !0), u(n)
	}
}(Zepto), function(t) {
	function e(e, n, i) {
		var r = t.Event(n);
		return t(e).trigger(r, i), !r.isDefaultPrevented()
	}
	function n(t, n, i, r) {
		return t.global ? e(n || y, i, r) : void 0
	}
	function i(e) {
		e.global && 0 === t.active++ && n(e, null, "ajaxStart")
	}
	function r(e) {
		e.global && !--t.active && n(e, null, "ajaxStop")
	}
	function o(t, e) {
		var i = e.context;
		return e.beforeSend.call(i, t, e) === !1 || n(e, i, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void n(e, i, "ajaxSend", [t, e])
	}
	function s(t, e, i, r) {
		var o = i.context,
			s = "success";
		i.success.call(o, t, s, e), r && r.resolveWith(o, [t, s, e]), n(i, o, "ajaxSuccess", [e, i, t]), c(s, e, i)
	}
	function a(t, e, i, r, o) {
		var s = r.context;
		r.error.call(s, i, e, t), o && o.rejectWith(s, [i, e, t]), n(r, s, "ajaxError", [i, r, t || e]), c(e, i, r)
	}
	function c(t, e, i) {
		var o = i.context;
		i.complete.call(o, e, t), n(i, o, "ajaxComplete", [e, i]), r(i)
	}
	function u() {}
	function l(t) {
		return t && (t = t.split(";", 2)[0]), t && (t == x ? "html" : t == _ ? "json" : w.test(t) ? "script" : b.test(t) && "xml") || "text"
	}
	function h(t, e) {
		return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
	}
	function f(e) {
		e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = h(e.url, e.data), e.data = void 0)
	}
	function p(e, n, i, r) {
		return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
			url: e,
			data: n,
			success: i,
			dataType: r
		}
	}
	function d(e, n, i, r) {
		var o, s = t.isArray(n),
			a = t.isPlainObject(n);
		t.each(n, function(n, c) {
			o = t.type(c), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(c.name, c.value) : "array" == o || !i && "object" == o ? d(e, c, i, n) : e.add(n, c)
		})
	}
	var m, v, g = 0,
		y = window.document,
		T = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		w = /^(?:text|application)\/javascript/i,
		b = /^(?:text|application)\/xml/i,
		_ = "application/json",
		x = "text/html",
		E = /^\s*$/,
		A = y.createElement("a");
	A.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
		if (!("type" in e)) return t.ajax(e);
		var i, r, c = e.jsonpCallback,
			u = (t.isFunction(c) ? c() : c) || "jsonp" + ++g,
			l = y.createElement("script"),
			h = window[u],
			f = function(e) {
				t(l).triggerHandler("error", e || "abort")
			},
			p = {
				abort: f
			};
		return n && n.promise(p), t(l).on("load error", function(o, c) {
			clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? s(i[0], p, e, n) : a(null, c || "error", p, e, n), window[u] = h, i && t.isFunction(h) && h(i[0]), h = i = void 0
		}), o(p, e) === !1 ? (f("abort"), p) : (window[u] = function() {
			i = arguments
		}, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + u), y.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function() {
			f("timeout")
		}, e.timeout)), p)
	}, t.ajaxSettings = {
		type: "GET",
		beforeSend: u,
		success: u,
		error: u,
		complete: u,
		context: null,
		global: !0,
		xhr: function() {
			return new window.XMLHttpRequest
		},
		accepts: {
			script: "text/javascript, application/javascript, application/x-javascript",
			json: _,
			xml: "application/xml, text/xml",
			html: x,
			text: "text/plain"
		},
		crossDomain: !1,
		timeout: 0,
		processData: !0,
		cache: !0
	}, t.ajax = function(e) {
		var n, r = t.extend({}, e || {}),
			c = t.Deferred && t.Deferred();
		for (m in t.ajaxSettings) void 0 === r[m] && (r[m] = t.ajaxSettings[m]);
		i(r), r.crossDomain || (n = y.createElement("a"), n.href = r.url, n.href = n.href, r.crossDomain = A.protocol + "//" + A.host != n.protocol + "//" + n.host), r.url || (r.url = window.location.toString()), f(r);
		var p = r.dataType,
			d = /\?.+=\?/.test(r.url);
		if (d && (p = "jsonp"), r.cache !== !1 && (e && e.cache === !0 || "script" != p && "jsonp" != p) || (r.url = h(r.url, "_=" + Date.now())), "jsonp" == p) return d || (r.url = h(r.url, r.jsonp ? r.jsonp + "=?" : r.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(r, c);
		var g, T = r.accepts[p],
			w = {},
			b = function(t, e) {
				w[t.toLowerCase()] = [t, e]
			},
			_ = /^([\w-]+:)\/\//.test(r.url) ? RegExp.$1 : window.location.protocol,
			x = r.xhr(),
			C = x.setRequestHeader;
		if (c && c.promise(x), r.crossDomain || b("X-Requested-With", "XMLHttpRequest"), b("Accept", T || "*/*"), (T = r.mimeType || T) && (T.indexOf(",") > -1 && (T = T.split(",", 2)[0]), x.overrideMimeType && x.overrideMimeType(T)), (r.contentType || r.contentType !== !1 && r.data && "GET" != r.type.toUpperCase()) && b("Content-Type", r.contentType || "application/x-www-form-urlencoded"), r.headers) for (v in r.headers) b(v, r.headers[v]);
		if (x.setRequestHeader = b, x.onreadystatechange = function() {
			if (4 == x.readyState) {
				x.onreadystatechange = u, clearTimeout(g);
				var e, n = !1;
				if (x.status >= 200 && x.status < 300 || 304 == x.status || 0 == x.status && "file:" == _) {
					p = p || l(r.mimeType || x.getResponseHeader("content-type")), e = x.responseText;
					try {
						"script" == p ? (0, eval)(e) : "xml" == p ? e = x.responseXML : "json" == p && (e = E.test(e) ? null : t.parseJSON(e))
					} catch (i) {
						n = i
					}
					n ? a(n, "parsererror", x, r, c) : s(e, x, r, c)
				} else a(x.statusText || null, x.status ? "error" : "abort", x, r, c)
			}
		}, o(x, r) === !1) return x.abort(), a(null, "abort", x, r, c), x;
		if (r.xhrFields) for (v in r.xhrFields) x[v] = r.xhrFields[v];
		var S = "async" in r ? r.async : !0;
		x.open(r.type, r.url, S, r.username, r.password);
		for (v in w) C.apply(x, w[v]);
		return r.timeout > 0 && (g = setTimeout(function() {
			x.onreadystatechange = u, x.abort(), a(null, "timeout", x, r, c)
		}, r.timeout)), x.send(r.data ? r.data : null), x
	}, t.get = function() {
		return t.ajax(p.apply(null, arguments))
	}, t.post = function() {
		var e = p.apply(null, arguments);
		return e.type = "POST", t.ajax(e)
	}, t.getJSON = function() {
		var e = p.apply(null, arguments);
		return e.dataType = "json", t.ajax(e)
	}, t.fn.load = function(e, n, i) {
		if (!this.length) return this;
		var r, o = this,
			s = e.split(/\s/),
			a = p(e, n, i),
			c = a.success;
		return s.length > 1 && (a.url = s[0], r = s[1]), a.success = function(e) {
			o.html(r ? t("<div>").html(e.replace(T, "")).find(r) : e), c && c.apply(o, arguments)
		}, t.ajax(a), this
	};
	var C = encodeURIComponent;
	t.param = function(e, n) {
		var i = [];
		return i.add = function(e, n) {
			t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(C(e) + "=" + C(n))
		}, d(i, e, n), i.join("&").replace(/%20/g, "+")
	}
}(Zepto), function(t) {
	t.fn.serializeArray = function() {
		var e, n, i = [],
			r = function(t) {
				return t.forEach ? t.forEach(r) : void i.push({
					name: e,
					value: t
				})
			};
		return this[0] && t.each(this[0].elements, function(i, o) {
			n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
		}), i
	}, t.fn.serialize = function() {
		var t = [];
		return this.serializeArray().forEach(function(e) {
			t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
		}), t.join("&")
	}, t.fn.submit = function(e) {
		if (0 in arguments) this.bind("submit", e);
		else if (this.length) {
			var n = t.Event("submit");
			this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
		}
		return this
	}
}(Zepto), function(t) {
	"__proto__" in {} || t.extend(t.zepto, {
		Z: function(e, n) {
			return e = e || [], t.extend(e, t.fn), e.selector = n || "", e.__Z = !0, e
		},
		isZ: function(e) {
			return "array" === t.type(e) && "__Z" in e
		}
	});
	try {
		getComputedStyle(void 0)
	} catch (e) {
		var n = getComputedStyle;
		window.getComputedStyle = function(t) {
			try {
				return n(t)
			} catch (e) {
				return null
			}
		}
	}
}(Zepto), function(t) {
	function e(t, e) {
		var n = this.os = {},
			i = this.browser = {},
			r = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/),
			o = t.match(/(Android);?[\s\/]+([\d.]+)?/),
			s = !! t.match(/\(Macintosh\; Intel /),
			a = t.match(/(iPad).*OS\s([\d_]+)/),
			c = t.match(/(iPod)(.*OS\s([\d_]+))?/),
			u = !a && t.match(/(iPhone\sOS)\s([\d_]+)/),
			l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),
			h = /Win\d{2}|Windows/.test(e),
			f = t.match(/Windows Phone ([\d.]+)/),
			p = l && t.match(/TouchPad/),
			d = t.match(/Kindle\/([\d.]+)/),
			m = t.match(/Silk\/([\d._]+)/),
			v = t.match(/(BlackBerry).*Version\/([\d.]+)/),
			g = t.match(/(BB10).*Version\/([\d.]+)/),
			y = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/),
			T = t.match(/PlayBook/),
			w = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/),
			b = t.match(/Firefox\/([\d.]+)/),
			_ = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),
			x = !w && t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
			E = x || t.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
		(i.webkit = !! r) && (i.version = r[1]), o && (n.android = !0, n.version = o[2]), u && !c && (n.ios = n.iphone = !0, n.version = u[2].replace(/_/g, ".")), a && (n.ios = n.ipad = !0, n.version = a[2].replace(/_/g, ".")), c && (n.ios = n.ipod = !0, n.version = c[3] ? c[3].replace(/_/g, ".") : null), f && (n.wp = !0, n.version = f[1]), l && (n.webos = !0, n.version = l[2]), p && (n.touchpad = !0), v && (n.blackberry = !0, n.version = v[2]), g && (n.bb10 = !0, n.version = g[2]), y && (n.rimtabletos = !0, n.version = y[2]), T && (i.playbook = !0), d && (n.kindle = !0, n.version = d[1]), m && (i.silk = !0, i.version = m[1]), !m && n.android && t.match(/Kindle Fire/) && (i.silk = !0), w && (i.chrome = !0, i.version = w[1]), b && (i.firefox = !0, i.version = b[1]), _ && (i.ie = !0, i.version = _[1]), E && (s || n.ios || h) && (i.safari = !0, n.ios || (i.version = E[1])), x && (i.webview = !0), n.tablet = !! (a || T || o && !t.match(/Mobile/) || b && t.match(/Tablet/) || _ && !t.match(/Phone/) && t.match(/Touch/)), n.phone = !(n.tablet || n.ipod || !(o || u || l || v || g || w && t.match(/Android/) || w && t.match(/CriOS\/([\d.]+)/) || b && t.match(/Mobile/) || _ && t.match(/Touch/)))
	}
	e.call(t, navigator.userAgent, navigator.platform), t.__detect = e
}(Zepto), function(t, e) {
	function n(t) {
		return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
	}
	function i(t) {
		return r ? r + t : t.toLowerCase()
	}
	var r, o, s, a, c, u, l, h, f, p, d = "",
		m = {
			Webkit: "webkit",
			Moz: "",
			O: "o"
		},
		v = window.document,
		g = v.createElement("div"),
		y = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
		T = {};
	t.each(m, function(t, n) {
		return g.style[t + "TransitionProperty"] !== e ? (d = "-" + t.toLowerCase() + "-", r = n, !1) : void 0
	}), o = d + "transform", T[s = d + "transition-property"] = T[a = d + "transition-duration"] = T[u = d + "transition-delay"] = T[c = d + "transition-timing-function"] = T[l = d + "animation-name"] = T[h = d + "animation-duration"] = T[p = d + "animation-delay"] = T[f = d + "animation-timing-function"] = "", t.fx = {
		off: r === e && g.style.transitionProperty === e,
		speeds: {
			_default: 400,
			fast: 200,
			slow: 600
		},
		cssPrefix: d,
		transitionEnd: i("TransitionEnd"),
		animationEnd: i("AnimationEnd")
	}, t.fn.animate = function(n, i, r, o, s) {
		return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, s = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), s && (s = parseFloat(s) / 1e3), this.anim(n, i, r, o, s)
	}, t.fn.anim = function(i, r, d, m, v) {
		var g, w, b, _ = {},
			x = "",
			E = this,
			A = t.fx.transitionEnd,
			C = !1;
		if (r === e && (r = t.fx.speeds._default / 1e3), v === e && (v = 0), t.fx.off && (r = 0), "string" == typeof i) _[l] = i, _[h] = r + "s", _[p] = v + "s", _[f] = d || "linear", A = t.fx.animationEnd;
		else {
			w = [];
			for (g in i) y.test(g) ? x += g + "(" + i[g] + ") " : (_[g] = i[g], w.push(n(g)));
			x && (_[o] = x, w.push(o)), r > 0 && "object" == typeof i && (_[s] = w.join(", "), _[a] = r + "s", _[u] = v + "s", _[c] = d || "linear")
		}
		return b = function(e) {
			if ("undefined" != typeof e) {
				if (e.target !== e.currentTarget) return;
				t(e.target).unbind(A, b)
			} else t(this).unbind(A, b);
			C = !0, t(this).css(T), m && m.call(this)
		}, r > 0 && (this.bind(A, b), setTimeout(function() {
			C || b.call(E)
		}, 1e3 * (r + v) + 25)), this.size() && this.get(0).clientLeft, this.css(_), 0 >= r && setTimeout(function() {
			E.each(function() {
				b.call(this)
			})
		}, 0), this
	}, g = null
}(Zepto), function(t, e) {
	function n(n, i, r, o, s) {
		"function" != typeof i || s || (s = i, i = e);
		var a = {
			opacity: r
		};
		return o && (a.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(a, i, null, s)
	}
	function i(e, i, r, o) {
		return n(e, i, 0, r, function() {
			s.call(t(this)), o && o.call(this)
		})
	}
	var r = window.document,
		o = (r.documentElement, t.fn.show),
		s = t.fn.hide,
		a = t.fn.toggle;
	t.fn.show = function(t, i) {
		return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i)
	}, t.fn.hide = function(t, n) {
		return t === e ? s.call(this) : i(this, t, "0,0", n)
	}, t.fn.toggle = function(n, i) {
		return n === e || "boolean" == typeof n ? a.call(this, n) : this.each(function() {
			var e = t(this);
			e["none" == e.css("display") ? "show" : "hide"](n, i)
		})
	}, t.fn.fadeTo = function(t, e, i) {
		return n(this, t, e, null, i)
	}, t.fn.fadeIn = function(t, e) {
		var n = this.css("opacity");
		return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
	}, t.fn.fadeOut = function(t, e) {
		return i(this, t, null, e)
	}, t.fn.fadeToggle = function(e, n) {
		return this.each(function() {
			var i = t(this);
			i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
		})
	}
}(Zepto), function(t) {
	var e, n = [];
	t.fn.remove = function() {
		return this.each(function() {
			this.parentNode && ("IMG" === this.tagName && (n.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", e && clearTimeout(e), e = setTimeout(function() {
				n = []
			}, 6e4)), this.parentNode.removeChild(this))
		})
	}
}(Zepto), function(t) {
	function e(e, i) {
		var c = e[a],
			u = c && r[c];
		if (void 0 === i) return u || n(e);
		if (u) {
			if (i in u) return u[i];
			var l = s(i);
			if (l in u) return u[l]
		}
		return o.call(t(e), i)
	}
	function n(e, n, o) {
		var c = e[a] || (e[a] = ++t.uuid),
			u = r[c] || (r[c] = i(e));
		return void 0 !== n && (u[s(n)] = o), u
	}
	function i(e) {
		var n = {};
		return t.each(e.attributes || c, function(e, i) {
			0 == i.name.indexOf("data-") && (n[s(i.name.replace("data-", ""))] = t.zepto.deserializeValue(i.value))
		}), n
	}
	var r = {},
		o = t.fn.data,
		s = t.camelCase,
		a = t.expando = "Zepto" + +new Date,
		c = [];
	t.fn.data = function(i, r) {
		return void 0 === r ? t.isPlainObject(i) ? this.each(function(e, r) {
			t.each(i, function(t, e) {
				n(r, t, e)
			})
		}) : 0 in this ? e(this[0], i) : void 0 : this.each(function() {
			n(this, i, r)
		})
	}, t.fn.removeData = function(e) {
		return "string" == typeof e && (e = e.split(/\s+/)), this.each(function() {
			var n = this[a],
				i = n && r[n];
			i && t.each(e || i, function(t) {
				delete i[e ? s(this) : t]
			})
		})
	}, ["remove", "empty"].forEach(function(e) {
		var n = t.fn[e];
		t.fn[e] = function() {
			var t = this.find("*");
			return "remove" === e && (t = t.add(this)), t.removeData(), n.call(this)
		}
	})
}(Zepto), function(t) {
	function e(n) {
		var i = [
			["resolve", "done", t.Callbacks({
				once: 1,
				memory: 1
			}), "resolved"],
			["reject", "fail", t.Callbacks({
				once: 1,
				memory: 1
			}), "rejected"],
			["notify", "progress", t.Callbacks({
				memory: 1
			})]
		],
			r = "pending",
			o = {
				state: function() {
					return r
				},
				always: function() {
					return s.done(arguments).fail(arguments), this
				},
				then: function() {
					var n = arguments;
					return e(function(e) {
						t.each(i, function(i, r) {
							var a = t.isFunction(n[i]) && n[i];
							s[r[1]](function() {
								var n = a && a.apply(this, arguments);
								if (n && t.isFunction(n.promise)) n.promise().done(e.resolve).fail(e.reject).progress(e.notify);
								else {
									var i = this === o ? e.promise() : this,
										s = a ? [n] : arguments;
									e[r[0] + "With"](i, s)
								}
							})
						}), n = null
					}).promise()
				},
				promise: function(e) {
					return null != e ? t.extend(e, o) : o
				}
			},
			s = {};
		return t.each(i, function(t, e) {
			var n = e[2],
				a = e[3];
			o[e[1]] = n.add, a && n.add(function() {
				r = a
			}, i[1 ^ t][2].disable, i[2][2].lock), s[e[0]] = function() {
				return s[e[0] + "With"](this === s ? o : this, arguments), this
			}, s[e[0] + "With"] = n.fireWith
		}), o.promise(s), n && n.call(s, s), s
	}
	var n = Array.prototype.slice;
	t.when = function(i) {
		var r, o, s, a = n.call(arguments),
			c = a.length,
			u = 0,
			l = 1 !== c || i && t.isFunction(i.promise) ? c : 0,
			h = 1 === l ? i : e(),
			f = function(t, e, i) {
				return function(o) {
					e[t] = this, i[t] = arguments.length > 1 ? n.call(arguments) : o, i === r ? h.notifyWith(e, i) : --l || h.resolveWith(e, i)
				}
			};
		if (c > 1) for (r = new Array(c), o = new Array(c), s = new Array(c); c > u; ++u) a[u] && t.isFunction(a[u].promise) ? a[u].promise().done(f(u, s, a)).fail(h.reject).progress(f(u, o, r)) : --l;
		return l || h.resolveWith(s, a), h.promise()
	}, t.Deferred = e
}(Zepto), function(t) {
	t.Callbacks = function(e) {
		e = t.extend({}, e);
		var n, i, r, o, s, a, c = [],
			u = !e.once && [],
			l = function(t) {
				for (n = e.memory && t, i = !0, a = o || 0, o = 0, s = c.length, r = !0; c && s > a; ++a) if (c[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
					n = !1;
					break
				}
				r = !1, c && (u ? u.length && l(u.shift()) : n ? c.length = 0 : h.disable())
			},
			h = {
				add: function() {
					if (c) {
						var i = c.length,
							a = function(n) {
								t.each(n, function(t, n) {
									"function" == typeof n ? e.unique && h.has(n) || c.push(n) : n && n.length && "string" != typeof n && a(n)
								})
							};
						a(arguments), r ? s = c.length : n && (o = i, l(n))
					}
					return this
				},
				remove: function() {
					return c && t.each(arguments, function(e, n) {
						for (var i;
						(i = t.inArray(n, c, i)) > -1;) c.splice(i, 1), r && (s >= i && --s, a >= i && --a)
					}), this
				},
				has: function(e) {
					return !(!c || !(e ? t.inArray(e, c) > -1 : c.length))
				},
				empty: function() {
					return s = c.length = 0, this
				},
				disable: function() {
					return c = u = n = void 0, this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return u = void 0, n || h.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(t, e) {
					return !c || i && !u || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? u.push(e) : l(e)), this
				},
				fire: function() {
					return h.fireWith(this, arguments)
				},
				fired: function() {
					return !!i
				}
			};
		return h
	}
}(Zepto), function(t) {
	function e(e) {
		return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
	}
	function n(t, e) {
		t = t.replace(/=#\]/g, '="#"]');
		var n, i, r = a.exec(t);
		if (r && r[2] in s && (n = s[r[2]], i = r[3], t = r[1], i)) {
			var o = Number(i);
			i = isNaN(o) ? i.replace(/^["']|["']$/g, "") : o
		}
		return e(t, n, i)
	}
	var i = t.zepto,
		r = i.qsa,
		o = i.matches,
		s = t.expr[":"] = {
			visible: function() {
				return e(this) ? this : void 0
			},
			hidden: function() {
				return e(this) ? void 0 : this
			},
			selected: function() {
				return this.selected ? this : void 0
			},
			checked: function() {
				return this.checked ? this : void 0
			},
			parent: function() {
				return this.parentNode
			},
			first: function(t) {
				return 0 === t ? this : void 0
			},
			last: function(t, e) {
				return t === e.length - 1 ? this : void 0
			},
			eq: function(t, e, n) {
				return t === n ? this : void 0
			},
			contains: function(e, n, i) {
				return t(this).text().indexOf(i) > -1 ? this : void 0
			},
			has: function(t, e, n) {
				return i.qsa(this, n).length ? this : void 0
			}
		},
		a = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
		c = /^\s*>/,
		u = "Zepto" + +new Date;
	i.qsa = function(e, o) {
		return n(o, function(n, s, a) {
			try {
				var l;
				!n && s ? n = "*" : c.test(n) && (l = t(e).addClass(u), n = "." + u + " " + n);
				var h = r(e, n)
			} catch (f) {
				throw console.error("error performing selector: %o", o), f
			} finally {
				l && l.removeClass(u)
			}
			return s ? i.uniq(t.map(h, function(t, e) {
				return s.call(t, e, h, a)
			})) : h
		})
	}, i.matches = function(t, e) {
		return n(e, function(e, n, i) {
			return (!e || o(t, e)) && (!n || n.call(t, null, i) === t)
		})
	}
}(Zepto), function(t) {
	t.fn.end = function() {
		return this.prevObject || t()
	}, t.fn.andSelf = function() {
		return this.add(this.prevObject || t())
	}, "filter,add,not,eq,first,last,find,closest,parents,parent,children,siblings".split(",").forEach(function(e) {
		var n = t.fn[e];
		t.fn[e] = function() {
			var t = n.apply(this, arguments);
			return t.prevObject = this, t
		}
	})
}(Zepto), !
function(t, e, n, i) {
	"use strict";

	function r(t, e, n) {
		return setTimeout(u(t, n), e)
	}
	function o(t, e, n) {
		return Array.isArray(t) ? (s(t, n[e], n), !0) : !1
	}
	function s(t, e, n) {
		var r;
		if (t) if (t.forEach) t.forEach(e, n);
		else if (t.length !== i) for (r = 0; r < t.length;) e.call(n, t[r], r, t), r++;
		else for (r in t) t.hasOwnProperty(r) && e.call(n, t[r], r, t)
	}
	function a(e, n, i) {
		var r = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
		return function() {
			var n = new Error("get-stack-trace"),
				i = n && n.stack ? n.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
				o = t.console && (t.console.warn || t.console.log);
			return o && o.call(t.console, r, i), e.apply(this, arguments)
		}
	}
	function c(t, e, n) {
		var i, r = e.prototype;
		i = t.prototype = Object.create(r), i.constructor = t, i._super = r, n && at(i, n)
	}
	function u(t, e) {
		return function() {
			return t.apply(e, arguments)
		}
	}
	function l(t, e) {
		return typeof t == lt ? t.apply(e ? e[0] || i : i, e) : t
	}
	function h(t, e) {
		return t === i ? e : t
	}
	function f(t, e, n) {
		s(v(e), function(e) {
			t.addEventListener(e, n, !1)
		})
	}
	function p(t, e, n) {
		s(v(e), function(e) {
			t.removeEventListener(e, n, !1)
		})
	}
	function d(t, e) {
		for (; t;) {
			if (t == e) return !0;
			t = t.parentNode
		}
		return !1
	}
	function m(t, e) {
		return t.indexOf(e) > -1
	}
	function v(t) {
		return t.trim().split(/\s+/g)
	}
	function g(t, e, n) {
		if (t.indexOf && !n) return t.indexOf(e);
		for (var i = 0; i < t.length;) {
			if (n && t[i][n] == e || !n && t[i] === e) return i;
			i++
		}
		return -1
	}
	function y(t) {
		return Array.prototype.slice.call(t, 0)
	}
	function T(t, e, n) {
		for (var i = [], r = [], o = 0; o < t.length;) {
			var s = e ? t[o][e] : t[o];
			g(r, s) < 0 && i.push(t[o]), r[o] = s, o++
		}
		return n && (i = e ? i.sort(function(t, n) {
			return t[e] > n[e]
		}) : i.sort()), i
	}
	function w(t, e) {
		for (var n, r, o = e[0].toUpperCase() + e.slice(1), s = 0; s < ct.length;) {
			if (n = ct[s], r = n ? n + o : e, r in t) return r;
			s++
		}
		return i
	}
	function b() {
		return vt++
	}
	function _(e) {
		var n = e.ownerDocument || e;
		return n.defaultView || n.parentWindow || t
	}
	function x(t, e) {
		var n = this;
		this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
			l(t.options.enable, [t]) && n.handler(e)
		}, this.init()
	}
	function E(t) {
		var e, n = t.options.inputClass;
		return new(e = n ? n : Tt ? R : wt ? F : yt ? q : M)(t, A)
	}
	function A(t, e, n) {
		var i = n.pointers.length,
			r = n.changedPointers.length,
			o = e & Ct && i - r === 0,
			s = e & (kt | Ot) && i - r === 0;
		n.isFirst = !! o, n.isFinal = !! s, o && (t.session = {}), n.eventType = e, C(t, n), t.emit("hammer.input", n), t.recognize(n), t.session.prevInput = n
	}
	function C(t, e) {
		var n = t.session,
			i = e.pointers,
			r = i.length;
		n.firstInput || (n.firstInput = O(e)), r > 1 && !n.firstMultiple ? n.firstMultiple = O(e) : 1 === r && (n.firstMultiple = !1);
		var o = n.firstInput,
			s = n.firstMultiple,
			a = s ? s.center : o.center,
			c = e.center = P(i);
		e.timeStamp = pt(), e.deltaTime = e.timeStamp - o.timeStamp, e.angle = I(a, c), e.distance = D(a, c), S(n, e), e.offsetDirection = j(e.deltaX, e.deltaY);
		var u = N(e.deltaTime, e.deltaX, e.deltaY);
		e.overallVelocityX = u.x, e.overallVelocityY = u.y, e.overallVelocity = ft(u.x) > ft(u.y) ? u.x : u.y, e.scale = s ? X(s.pointers, i) : 1, e.rotation = s ? L(s.pointers, i) : 0, e.maxPointers = n.prevInput ? e.pointers.length > n.prevInput.maxPointers ? e.pointers.length : n.prevInput.maxPointers : e.pointers.length, k(n, e);
		var l = t.element;
		d(e.srcEvent.target, l) && (l = e.srcEvent.target), e.target = l
	}
	function S(t, e) {
		var n = e.center,
			i = t.offsetDelta || {},
			r = t.prevDelta || {},
			o = t.prevInput || {};
		(e.eventType === Ct || o.eventType === kt) && (r = t.prevDelta = {
			x: o.deltaX || 0,
			y: o.deltaY || 0
		}, i = t.offsetDelta = {
			x: n.x,
			y: n.y
		}), e.deltaX = r.x + (n.x - i.x), e.deltaY = r.y + (n.y - i.y)
	}
	function k(t, e) {
		var n, r, o, s, a = t.lastInterval || e,
			c = e.timeStamp - a.timeStamp;
		if (e.eventType != Ot && (c > At || a.velocity === i)) {
			var u = e.deltaX - a.deltaX,
				l = e.deltaY - a.deltaY,
				h = N(c, u, l);
			r = h.x, o = h.y, n = ft(h.x) > ft(h.y) ? h.x : h.y, s = j(u, l), t.lastInterval = e
		} else n = a.velocity, r = a.velocityX, o = a.velocityY, s = a.direction;
		e.velocity = n, e.velocityX = r, e.velocityY = o, e.direction = s
	}
	function O(t) {
		for (var e = [], n = 0; n < t.pointers.length;) e[n] = {
			clientX: ht(t.pointers[n].clientX),
			clientY: ht(t.pointers[n].clientY)
		}, n++;
		return {
			timeStamp: pt(),
			pointers: e,
			center: P(e),
			deltaX: t.deltaX,
			deltaY: t.deltaY
		}
	}
	function P(t) {
		var e = t.length;
		if (1 === e) return {
			x: ht(t[0].clientX),
			y: ht(t[0].clientY)
		};
		for (var n = 0, i = 0, r = 0; e > r;) n += t[r].clientX, i += t[r].clientY, r++;
		return {
			x: ht(n / e),
			y: ht(i / e)
		}
	}
	function N(t, e, n) {
		return {
			x: e / t || 0,
			y: n / t || 0
		}
	}
	function j(t, e) {
		return t === e ? Pt : ft(t) >= ft(e) ? 0 > t ? Nt : jt : 0 > e ? Dt : It
	}
	function D(t, e, n) {
		n || (n = Rt);
		var i = e[n[0]] - t[n[0]],
			r = e[n[1]] - t[n[1]];
		return Math.sqrt(i * i + r * r)
	}
	function I(t, e, n) {
		n || (n = Rt);
		var i = e[n[0]] - t[n[0]],
			r = e[n[1]] - t[n[1]];
		return 180 * Math.atan2(r, i) / Math.PI
	}
	function L(t, e) {
		return I(e[1], e[0], zt) + I(t[1], t[0], zt)
	}
	function X(t, e) {
		return D(e[0], e[1], zt) / D(t[0], t[1], zt)
	}
	function M() {
		this.evEl = Ft, this.evWin = Zt, this.allow = !0, this.pressed = !1, x.apply(this, arguments)
	}
	function R() {
		this.evEl = Ht, this.evWin = Ut, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
	}
	function z() {
		this.evTarget = Bt, this.evWin = Vt, this.started = !1, x.apply(this, arguments)
	}
	function W(t, e) {
		var n = y(t.touches),
			i = y(t.changedTouches);
		return e & (kt | Ot) && (n = T(n.concat(i), "identifier", !0)), [n, i]
	}
	function F() {
		this.evTarget = Jt, this.targetIds = {}, x.apply(this, arguments)
	}
	function Z(t, e) {
		var n = y(t.touches),
			i = this.targetIds;
		if (e & (Ct | St) && 1 === n.length) return i[n[0].identifier] = !0, [n, n];
		var r, o, s = y(t.changedTouches),
			a = [],
			c = this.target;
		if (o = n.filter(function(t) {
			return d(t.target, c)
		}), e === Ct) for (r = 0; r < o.length;) i[o[r].identifier] = !0, r++;
		for (r = 0; r < s.length;) i[s[r].identifier] && a.push(s[r]), e & (kt | Ot) && delete i[s[r].identifier], r++;
		return a.length ? [T(o.concat(a), "identifier", !0), a] : void 0
	}
	function q() {
		x.apply(this, arguments);
		var t = u(this.handler, this);
		this.touch = new F(this.manager, t), this.mouse = new M(this.manager, t)
	}
	function $(t, e) {
		this.manager = t, this.set(e)
	}
	function H(t) {
		if (m(t, ie)) return ie;
		var e = m(t, re),
			n = m(t, oe);
		return e && n ? ie : e || n ? e ? re : oe : m(t, ne) ? ne : ee
	}
	function U(t) {
		this.options = at({}, this.defaults, t || {}), this.id = b(), this.manager = null, this.options.enable = h(this.options.enable, !0), this.state = se, this.simultaneous = {}, this.requireFail = []
	}
	function Y(t) {
		return t & he ? "cancel" : t & ue ? "end" : t & ce ? "move" : t & ae ? "start" : ""
	}
	function B(t) {
		return t == It ? "down" : t == Dt ? "up" : t == Nt ? "left" : t == jt ? "right" : ""
	}
	function V(t, e) {
		var n = e.manager;
		return n ? n.get(t) : t
	}
	function G() {
		U.apply(this, arguments)
	}
	function J() {
		G.apply(this, arguments), this.pX = null, this.pY = null
	}
	function K() {
		G.apply(this, arguments)
	}
	function Q() {
		U.apply(this, arguments), this._timer = null, this._input = null
	}
	function tt() {
		G.apply(this, arguments)
	}
	function et() {
		G.apply(this, arguments)
	}
	function nt() {
		U.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
	}
	function it(t, e) {
		return e = e || {}, e.recognizers = h(e.recognizers, it.defaults.preset), new rt(t, e)
	}
	function rt(t, e) {
		this.options = at({}, it.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = t, this.input = E(this), this.touchAction = new $(this, this.options.touchAction), ot(this, !0), s(this.options.recognizers, function(t) {
			var e = this.add(new t[0](t[1]));
			t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
		}, this)
	}
	function ot(t, e) {
		var n = t.element;
		n.style && s(t.options.cssProps, function(t, i) {
			n.style[w(n.style, i)] = e ? t : ""
		})
	}
	function st(t, n) {
		var i = e.createEvent("Event");
		i.initEvent(t, !0, !0), i.gesture = n, n.target.dispatchEvent(i)
	}
	var at, ct = ["", "webkit", "Moz", "MS", "ms", "o"],
		ut = e.createElement("div"),
		lt = "function",
		ht = Math.round,
		ft = Math.abs,
		pt = Date.now;
	at = "function" != typeof Object.assign ?
	function(t) {
		if (t === i || null === t) throw new TypeError("Cannot convert undefined or null to object");
		for (var e = Object(t), n = 1; n < arguments.length; n++) {
			var r = arguments[n];
			if (r !== i && null !== r) for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o])
		}
		return e
	} : Object.assign;
	var dt = a(function(t, e, n) {
		for (var r = Object.keys(e), o = 0; o < r.length;)(!n || n && t[r[o]] === i) && (t[r[o]] = e[r[o]]), o++;
		return t
	}, "extend", "Use `assign`."),
		mt = a(function(t, e) {
			return dt(t, e, !0)
		}, "merge", "Use `assign`."),
		vt = 1,
		gt = /mobile|tablet|ip(ad|hone|od)|android/i,
		yt = "ontouchstart" in t,
		Tt = w(t, "PointerEvent") !== i,
		wt = yt && gt.test(navigator.userAgent),
		bt = "touch",
		_t = "pen",
		xt = "mouse",
		Et = "kinect",
		At = 25,
		Ct = 1,
		St = 2,
		kt = 4,
		Ot = 8,
		Pt = 1,
		Nt = 2,
		jt = 4,
		Dt = 8,
		It = 16,
		Lt = Nt | jt,
		Xt = Dt | It,
		Mt = Lt | Xt,
		Rt = ["x", "y"],
		zt = ["clientX", "clientY"];
	x.prototype = {
		handler: function() {},
		init: function() {
			this.evEl && f(this.element, this.evEl, this.domHandler), this.evTarget && f(this.target, this.evTarget, this.domHandler), this.evWin && f(_(this.element), this.evWin, this.domHandler)
		},
		destroy: function() {
			this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(_(this.element), this.evWin, this.domHandler)
		}
	};
	var Wt = {
		mousedown: Ct,
		mousemove: St,
		mouseup: kt
	},
		Ft = "mousedown",
		Zt = "mousemove mouseup";
	c(M, x, {
		handler: function(t) {
			var e = Wt[t.type];
			e & Ct && 0 === t.button && (this.pressed = !0), e & St && 1 !== t.which && (e = kt), this.pressed && this.allow && (e & kt && (this.pressed = !1), this.callback(this.manager, e, {
				pointers: [t],
				changedPointers: [t],
				pointerType: xt,
				srcEvent: t
			}))
		}
	});
	var qt = {
		pointerdown: Ct,
		pointermove: St,
		pointerup: kt,
		pointercancel: Ot,
		pointerout: Ot
	},
		$t = {
			2: bt,
			3: _t,
			4: xt,
			5: Et
		},
		Ht = "pointerdown",
		Ut = "pointermove pointerup pointercancel";
	t.MSPointerEvent && !t.PointerEvent && (Ht = "MSPointerDown", Ut = "MSPointerMove MSPointerUp MSPointerCancel"), c(R, x, {
		handler: function(t) {
			var e = this.store,
				n = !1,
				i = t.type.toLowerCase().replace("ms", ""),
				r = qt[i],
				o = $t[t.pointerType] || t.pointerType,
				s = o == bt,
				a = g(e, t.pointerId, "pointerId");
			r & Ct && (0 === t.button || s) ? 0 > a && (e.push(t), a = e.length - 1) : r & (kt | Ot) && (n = !0), 0 > a || (e[a] = t, this.callback(this.manager, r, {
				pointers: e,
				changedPointers: [t],
				pointerType: o,
				srcEvent: t
			}), n && e.splice(a, 1))
		}
	});
	var Yt = {
		touchstart: Ct,
		touchmove: St,
		touchend: kt,
		touchcancel: Ot
	},
		Bt = "touchstart",
		Vt = "touchstart touchmove touchend touchcancel";
	c(z, x, {
		handler: function(t) {
			var e = Yt[t.type];
			if (e === Ct && (this.started = !0), this.started) {
				var n = W.call(this, t, e);
				e & (kt | Ot) && n[0].length - n[1].length === 0 && (this.started = !1), this.callback(this.manager, e, {
					pointers: n[0],
					changedPointers: n[1],
					pointerType: bt,
					srcEvent: t
				})
			}
		}
	});
	var Gt = {
		touchstart: Ct,
		touchmove: St,
		touchend: kt,
		touchcancel: Ot
	},
		Jt = "touchstart touchmove touchend touchcancel";
	c(F, x, {
		handler: function(t) {
			var e = Gt[t.type],
				n = Z.call(this, t, e);
			n && this.callback(this.manager, e, {
				pointers: n[0],
				changedPointers: n[1],
				pointerType: bt,
				srcEvent: t
			})
		}
	}), c(q, x, {
		handler: function(t, e, n) {
			var i = n.pointerType == bt,
				r = n.pointerType == xt;
			if (i) this.mouse.allow = !1;
			else if (r && !this.mouse.allow) return;
			e & (kt | Ot) && (this.mouse.allow = !0), this.callback(t, e, n)
		},
		destroy: function() {
			this.touch.destroy(), this.mouse.destroy()
		}
	});
	var Kt = w(ut.style, "touchAction"),
		Qt = Kt !== i,
		te = "compute",
		ee = "auto",
		ne = "manipulation",
		ie = "none",
		re = "pan-x",
		oe = "pan-y";
	$.prototype = {
		set: function(t) {
			t == te && (t = this.compute()), Qt && this.manager.element.style && (this.manager.element.style[Kt] = t), this.actions = t.toLowerCase().trim()
		},
		update: function() {
			this.set(this.manager.options.touchAction)
		},
		compute: function() {
			var t = [];
			return s(this.manager.recognizers, function(e) {
				l(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
			}), H(t.join(" "))
		},
		preventDefaults: function(t) {
			if (!Qt) {
				var e = t.srcEvent,
					n = t.offsetDirection;
				if (this.manager.session.prevented) return void e.preventDefault();
				var i = this.actions,
					r = m(i, ie),
					o = m(i, oe),
					s = m(i, re);
				if (r) {
					var a = 1 === t.pointers.length,
						c = t.distance < 2,
						u = t.deltaTime < 250;
					if (a && c && u) return
				}
				if (!s || !o) return r || o && n & Lt || s && n & Xt ? this.preventSrc(e) : void 0
			}
		},
		preventSrc: function(t) {
			this.manager.session.prevented = !0, t.preventDefault()
		}
	};
	var se = 1,
		ae = 2,
		ce = 4,
		ue = 8,
		le = ue,
		he = 16,
		fe = 32;
	U.prototype = {
		defaults: {},
		set: function(t) {
			return at(this.options, t), this.manager && this.manager.touchAction.update(), this
		},
		recognizeWith: function(t) {
			if (o(t, "recognizeWith", this)) return this;
			var e = this.simultaneous;
			return t = V(t, this), e[t.id] || (e[t.id] = t, t.recognizeWith(this)), this
		},
		dropRecognizeWith: function(t) {
			return o(t, "dropRecognizeWith", this) ? this : (t = V(t, this), delete this.simultaneous[t.id], this)
		},
		requireFailure: function(t) {
			if (o(t, "requireFailure", this)) return this;
			var e = this.requireFail;
			return t = V(t, this), -1 === g(e, t) && (e.push(t), t.requireFailure(this)), this
		},
		dropRequireFailure: function(t) {
			if (o(t, "dropRequireFailure", this)) return this;
			t = V(t, this);
			var e = g(this.requireFail, t);
			return e > -1 && this.requireFail.splice(e, 1), this
		},
		hasRequireFailures: function() {
			return this.requireFail.length > 0
		},
		canRecognizeWith: function(t) {
			return !!this.simultaneous[t.id]
		},
		emit: function(t) {
			function e(e) {
				n.manager.emit(e, t)
			}
			var n = this,
				i = this.state;
			ue > i && e(n.options.event + Y(i)), e(n.options.event), t.additionalEvent && e(t.additionalEvent), i >= ue && e(n.options.event + Y(i))
		},
		tryEmit: function(t) {
			return this.canEmit() ? this.emit(t) : void(this.state = fe)
		},
		canEmit: function() {
			for (var t = 0; t < this.requireFail.length;) {
				if (!(this.requireFail[t].state & (fe | se))) return !1;
				t++
			}
			return !0
		},
		recognize: function(t) {
			var e = at({}, t);
			return l(this.options.enable, [this, e]) ? (this.state & (le | he | fe) && (this.state = se), this.state = this.process(e), void(this.state & (ae | ce | ue | he) && this.tryEmit(e))) : (this.reset(), void(this.state = fe))
		},
		process: function(t) {},
		getTouchAction: function() {},
		reset: function() {}
	}, c(G, U, {
		defaults: {
			pointers: 1
		},
		attrTest: function(t) {
			var e = this.options.pointers;
			return 0 === e || t.pointers.length === e
		},
		process: function(t) {
			var e = this.state,
				n = t.eventType,
				i = e & (ae | ce),
				r = this.attrTest(t);
			return i && (n & Ot || !r) ? e | he : i || r ? n & kt ? e | ue : e & ae ? e | ce : ae : fe
		}
	}), c(J, G, {
		defaults: {
			event: "pan",
			threshold: 10,
			pointers: 1,
			direction: Mt
		},
		getTouchAction: function() {
			var t = this.options.direction,
				e = [];
			return t & Lt && e.push(oe), t & Xt && e.push(re), e
		},
		directionTest: function(t) {
			var e = this.options,
				n = !0,
				i = t.distance,
				r = t.direction,
				o = t.deltaX,
				s = t.deltaY;
			return r & e.direction || (e.direction & Lt ? (r = 0 === o ? Pt : 0 > o ? Nt : jt, n = o != this.pX, i = Math.abs(t.deltaX)) : (r = 0 === s ? Pt : 0 > s ? Dt : It, n = s != this.pY, i = Math.abs(t.deltaY))), t.direction = r, n && i > e.threshold && r & e.direction
		},
		attrTest: function(t) {
			return G.prototype.attrTest.call(this, t) && (this.state & ae || !(this.state & ae) && this.directionTest(t))
		},
		emit: function(t) {
			this.pX = t.deltaX, this.pY = t.deltaY;
			var e = B(t.direction);
			e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
		}
	}), c(K, G, {
		defaults: {
			event: "pinch",
			threshold: 0,
			pointers: 2
		},
		getTouchAction: function() {
			return [ie]
		},
		attrTest: function(t) {
			return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || this.state & ae)
		},
		emit: function(t) {
			if (1 !== t.scale) {
				var e = t.scale < 1 ? "in" : "out";
				t.additionalEvent = this.options.event + e
			}
			this._super.emit.call(this, t)
		}
	}), c(Q, U, {
		defaults: {
			event: "press",
			pointers: 1,
			time: 251,
			threshold: 9
		},
		getTouchAction: function() {
			return [ee]
		},
		process: function(t) {
			var e = this.options,
				n = t.pointers.length === e.pointers,
				i = t.distance < e.threshold,
				o = t.deltaTime > e.time;
			if (this._input = t, !i || !n || t.eventType & (kt | Ot) && !o) this.reset();
			else if (t.eventType & Ct) this.reset(), this._timer = r(function() {
				this.state = le, this.tryEmit()
			}, e.time, this);
			else if (t.eventType & kt) return le;
			return fe
		},
		reset: function() {
			clearTimeout(this._timer)
		},
		emit: function(t) {
			this.state === le && (t && t.eventType & kt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = pt(), this.manager.emit(this.options.event, this._input)))
		}
	}), c(tt, G, {
		defaults: {
			event: "rotate",
			threshold: 0,
			pointers: 2
		},
		getTouchAction: function() {
			return [ie]
		},
		attrTest: function(t) {
			return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || this.state & ae)
		}
	}), c(et, G, {
		defaults: {
			event: "swipe",
			threshold: 10,
			velocity: .3,
			direction: Lt | Xt,
			pointers: 1
		},
		getTouchAction: function() {
			return J.prototype.getTouchAction.call(this)
		},
		attrTest: function(t) {
			var e, n = this.options.direction;
			return n & (Lt | Xt) ? e = t.overallVelocity : n & Lt ? e = t.overallVelocityX : n & Xt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && n & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && ft(e) > this.options.velocity && t.eventType & kt
		},
		emit: function(t) {
			var e = B(t.offsetDirection);
			e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
		}
	}), c(nt, U, {
		defaults: {
			event: "tap",
			pointers: 1,
			taps: 1,
			interval: 300,
			time: 250,
			threshold: 9,
			posThreshold: 10
		},
		getTouchAction: function() {
			return [ne]
		},
		process: function(t) {
			var e = this.options,
				n = t.pointers.length === e.pointers,
				i = t.distance < e.threshold,
				o = t.deltaTime < e.time;
			if (this.reset(), t.eventType & Ct && 0 === this.count) return this.failTimeout();
			if (i && o && n) {
				if (t.eventType != kt) return this.failTimeout();
				var s = this.pTime ? t.timeStamp - this.pTime < e.interval : !0,
					a = !this.pCenter || D(this.pCenter, t.center) < e.posThreshold;
				this.pTime = t.timeStamp, this.pCenter = t.center, a && s ? this.count += 1 : this.count = 1, this._input = t;
				var c = this.count % e.taps;
				if (0 === c) return this.hasRequireFailures() ? (this._timer = r(function() {
					this.state = le, this.tryEmit()
				}, e.interval, this), ae) : le
			}
			return fe
		},
		failTimeout: function() {
			return this._timer = r(function() {
				this.state = fe
			}, this.options.interval, this), fe
		},
		reset: function() {
			clearTimeout(this._timer)
		},
		emit: function() {
			this.state == le && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
		}
	}), it.VERSION = "2.0.6", it.defaults = {
		domEvents: !1,
		touchAction: te,
		enable: !0,
		inputTarget: null,
		inputClass: null,
		preset: [
			[tt,
			{
				enable: !1
			}],
			[K,
			{
				enable: !1
			}, ["rotate"]],
			[et,
			{
				direction: Lt
			}],
			[J,
			{
				direction: Lt
			}, ["swipe"]],
			[nt],
			[nt,
			{
				event: "doubletap",
				taps: 2
			}, ["tap"]],
			[Q]
		],
		cssProps: {
			userSelect: "none",
			touchSelect: "none",
			touchCallout: "none",
			contentZooming: "none",
			userDrag: "none",
			tapHighlightColor: "rgba(0,0,0,0)"
		}
	};
	var pe = 1,
		de = 2;
	rt.prototype = {
		set: function(t) {
			return at(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
		},
		stop: function(t) {
			this.session.stopped = t ? de : pe
		},
		recognize: function(t) {
			var e = this.session;
			if (!e.stopped) {
				this.touchAction.preventDefaults(t);
				var n, i = this.recognizers,
					r = e.curRecognizer;
				(!r || r && r.state & le) && (r = e.curRecognizer = null);
				for (var o = 0; o < i.length;) n = i[o], e.stopped === de || r && n != r && !n.canRecognizeWith(r) ? n.reset() : n.recognize(t), !r && n.state & (ae | ce | ue) && (r = e.curRecognizer = n), o++
			}
		},
		get: function(t) {
			if (t instanceof U) return t;
			for (var e = this.recognizers, n = 0; n < e.length; n++) if (e[n].options.event == t) return e[n];
			return null
		},
		add: function(t) {
			if (o(t, "add", this)) return this;
			var e = this.get(t.options.event);
			return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
		},
		remove: function(t) {
			if (o(t, "remove", this)) return this;
			if (t = this.get(t)) {
				var e = this.recognizers,
					n = g(e, t); - 1 !== n && (e.splice(n, 1), this.touchAction.update())
			}
			return this
		},
		on: function(t, e) {
			var n = this.handlers;
			return s(v(t), function(t) {
				n[t] = n[t] || [], n[t].push(e)
			}), this
		},
		off: function(t, e) {
			var n = this.handlers;
			return s(v(t), function(t) {
				e ? n[t] && n[t].splice(g(n[t], e), 1) : delete n[t]
			}), this
		},
		emit: function(t, e) {
			this.options.domEvents && st(t, e);
			var n = this.handlers[t] && this.handlers[t].slice();
			if (n && n.length) {
				e.type = t, e.preventDefault = function() {
					e.srcEvent.preventDefault()
				};
				for (var i = 0; i < n.length;) n[i](e), i++
			}
		},
		destroy: function() {
			this.element && ot(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
		}
	}, at(it, {
		INPUT_START: Ct,
		INPUT_MOVE: St,
		INPUT_END: kt,
		INPUT_CANCEL: Ot,
		STATE_POSSIBLE: se,
		STATE_BEGAN: ae,
		STATE_CHANGED: ce,
		STATE_ENDED: ue,
		STATE_RECOGNIZED: le,
		STATE_CANCELLED: he,
		STATE_FAILED: fe,
		DIRECTION_NONE: Pt,
		DIRECTION_LEFT: Nt,
		DIRECTION_RIGHT: jt,
		DIRECTION_UP: Dt,
		DIRECTION_DOWN: It,
		DIRECTION_HORIZONTAL: Lt,
		DIRECTION_VERTICAL: Xt,
		DIRECTION_ALL: Mt,
		Manager: rt,
		Input: x,
		TouchAction: $,
		TouchInput: F,
		MouseInput: M,
		PointerEventInput: R,
		TouchMouseInput: q,
		SingleTouchInput: z,
		Recognizer: U,
		AttrRecognizer: G,
		Tap: nt,
		Pan: J,
		Swipe: et,
		Pinch: K,
		Rotate: tt,
		Press: Q,
		on: f,
		off: p,
		each: s,
		merge: mt,
		extend: dt,
		assign: at,
		inherit: c,
		bindFn: u,
		prefixed: w
	});
	var me = "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
	me.Hammer = it, "function" == typeof define && define.amd ? define(function() {
		return it
	}) : "undefined" != typeof module && module.exports ? module.exports = it : t[n] = it
}(window, document, "Hammer"), !
function(t, e, n) {
	var i = navigator.userAgent,
		r = i.indexOf("Android") > -1 || i.indexOf("Linux") > -1,
		o = !! i.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
		s = (/Chrome\//.test(i) && !/Version\/4/.test(i), console),
		a = {
			Android: "hkhealer://platformapi/startapp",
			AndroidChrome: "hkhealer://platformapi/startapp",
			iPhone: "hkhealer://platformapi/startapp",
			AndroidApphome: "hkhealer://platformapi/startapp"
		},
		c = navigator.userAgent,
		u = /Chrome\//.test(c) && !/Version\/4/.test(c),
		l = {
			startApp: function(n, i, r) {
				var o = (new Date).getTime();
				s.log("callNative appurl: " + n + ", appstore: " + i);
				var a = $("#open_app_iframe");
				if (a.length || (a = $("<iframe>"), a.attr("id", "open_app_iframe"), a.attr("name", "open_app_iframe"), a.attr("style", "display:none"), $("body").append(a)), /Chrome/i.test(c) && u) {
					var l = /Chrome\/(\d{2})/i.exec(navigator.userAgent);
					if (l && parseInt(l[1]) < 35) location.href = n;
					else {
						var h = t.open(n);
						setTimeout(function() {
							h.close()
						}, 1e3)
					}
				} else / iPhone OS 9 / i.test(c) ? location.href = n : a.attr("src", n);
				var f = t.setTimeout(function() {
					clearTimeout(f), (new Date).getTime() - o < 2e3 && (r && r(), i && setTimeout(function() {
						e.location = i
					}, 200))
				}, 1e3)
			},
			goToAppHome: function(t, e, n) {
				var i, s = o ? "iPhone" : "Android";
				if (/Chrome/i.test(c) && r && u) {
					var l = /Chrome\/(\d{2})/i.exec(c);
					i = l && parseInt(l[1]) < 35 ? a.AndroidChrome : a.AndroidApphome
				} else i = "iPhone" == s ? a[s] : a.AndroidApphome;
				this.startApp(i, e, n)
			}
		};
	t.openApp = l
}(window, document), !
function(t, e, n) {
	"use strict";
	$(function() {
		function n(n) {
			this.ele = n.ele, this.duration = n.duration || 3e3, this.animateTime = n.animateTime || 300;
			var i = (t.devicePixelRatio, $(t).width()),
				r = ($(t).height(), $(e).width(), $(e).height()),
				o = $(".app-info").height(),
				s = $(".app-footer").height(),
				a = $(".app-cover-wrap"),
				c = parseInt(a.css("padding-top")),
				u = r - o - s,
				l = u - c - 40;
			this._liWidth = 750 * (l / 1334), this._liHeight = l, this._data = n.data, this._initX = -(2 * this._liWidth + 40 - (i - this._liWidth) / 2), this._animated = !1, this._index = 1, this._num = 1, this._timer = null, this._dataLen = this._data.length, this._swipeX = this._liWidth + 20, this.init()
		}
		function i() {
			return !!/micromessenger/.test(a)
		}
		function r(e) {
			var n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),
				i = t.location.search.substr(1).match(n);
			return null != i ? unescape(i[2]) : null
		}
		function o(t) {
			$("#downloadLink").on("click", function(e) {
				var n = "";
				$.os.android ? n = u.android : $.os.ios && (n = u.ios), t ? openApp.goToAppHome("", n) : openApp.startApp("hkhealer://platformapi/qrcode_get_room_info?roomid=" + r("roomid"), n)
			})
		}
		var s = e.querySelector("#app-cover-list");
		n.prototype = {
			renderElement: function() {
				for (var t = "", n = "", i = "", r = 0; r < this._dataLen; r++) 2 > r && (n += '<li class="clone-item" style="width: ' + this._liWidth + "px; height: " + this._liHeight + 'px"><img src="' + this._data[r] + '" width="' + this._liWidth + '" height="' + this._liHeight + '"></li>'), r > this._dataLen - 3 && (i += '<li class="clone-item" style="width: ' + this._liWidth + "px; height: " + this._liHeight + 'px"><img src="' + this._data[r] + '" width="' + this._liWidth + '" height="' + this._liHeight + '"></li>'), t += '<li style="width: ' + this._liWidth + "px; height: " + this._liHeight + 'px"><img src="' + this._data[r] + '" width="' + this._liWidth + '" height="' + this._liHeight + '"></li>';
				t = i + t + n;
				var o = e.createElement("ul");
				o.style.width = this._swipeX * (this._dataLen + 5) + "px", o.style.webkitTransform = "translateX(" + this._initX + "px) translateZ(0)", o.innerHTML = t, this.ele.innerHTML = "", this.ele.appendChild(o), this.slideUl = o
			},
			renderDots: function() {
				for (var t = "", n = 0; n < this._dataLen; n++) t += 0 == n ? '<span class="dot-item active"></span>' : '<span class="dot-item"></span>';
				var i = e.createElement("div");
				i.className = "dots", i.innerHTML = t, this.ele.appendChild(i), this.dotsList = i.childNodes
			},
			showDots: function() {
				for (var t = 0; t < this._dataLen; t++) if ("dot-item active" === this.dotsList[t].className) {
					this.dotsList[t].className = "dot-item";
					break
				}
				this.dotsList[this._index - 1].className = "dot-item active"
			},
			play: function() {
				var t = this;
				t._timer = setInterval(function() {
					t.nextBind()
				}, t.duration)
			},
			stop: function() {
				clearInterval(this._timer)
			},
			goTo: function() {
				function t() {
					e._num == e._dataLen + 1 && (e._num = 1, e.slideUl.style.webkitTransition = "none", e.slideUl.style.webkitTransform = "translateX(" + e._initX + "px) translateZ(0)"), 0 == e._num && (e._num = e._dataLen, e.slideUl.style.webkitTransition = "none", e.slideUl.style.webkitTransform = "translateX(" + (e._initX + (e._num - 1) * -e._swipeX) + "px) translateZ(0)"), e._animated = !1, e.slideUl.removeEventListener("webkitTransitionEnd", t, !1)
				}
				this._animated = !0;
				var e = this;
				this.slideUl.style.webkitTransition = "all ease " + this.animateTime + "ms", this.slideUl.style.webkitTransform = "translateX(" + (this._initX + (this._num - 1) * -this._swipeX) + "px) translateZ(0)", this.slideUl.addEventListener("webkitTransitionEnd", t, !1)
			},
			prevBind: function() {
				this._animated || (1 == this._index ? this._index = this._dataLen : this._index--, 0 == this._num ? this._num = this._dataLen : this._num--, this.goTo(), this.showDots())
			},
			nextBind: function() {
				this._animated || (this._index == this._dataLen ? this._index = 1 : this._index++, this._num == this._dataLen + 1 ? this._num = 1 : this._num++, this.goTo(), this.showDots())
			},
			panBind: function() {
				var t = this,
					e = new Hammer(this.ele, {
						domEvents: !0
					});
				e.on("panleft", function(e) {
					t._animated || (t.slideUl.style.webkitTransition = "none", t.slideUl.style.webkitTransform = "translateX(" + (t._initX + (t._num - 1) * -t._swipeX + e.deltaX) + "px) translateZ(0)")
				}).on("panright", function(e) {
					t._animated || (t.slideUl.style.webkitTransition = "none", t.slideUl.style.webkitTransform = "translateX(" + (t._initX + (t._num - 1) * -t._swipeX + e.deltaX) + "px) translateZ(0)")
				}).on("panstart", function(e) {
					t.stop()
				}).on("panend", function(e) {
					t.play(), e.deltaX < .3 * -t._swipeX && t.nextBind(), e.deltaX > .3 * t._swipeX && t.prevBind(), t.slideUl.style.webkitTransition = "all ease 200ms", t.slideUl.style.webkitTransform = "translateX(" + (t._initX + (t._num - 1) * -t._swipeX) + "px) translateZ(0)"
				})
			},
			init: function() {
				this.renderElement(), this.renderDots(), this.play(), this.panBind()
			}
		}, new n({
			ele: s,
			data: ["./dist/images/yk_cover_01.jpg", "./dist/images/yk_cover_02.jpg", "./dist/images/yk_cover_03.jpg", "./dist/images/yk_cover_04.jpg", "./dist/images/yk_cover_05.jpg"],
			duration: 3e3
		});
		var a = navigator.userAgent.toLowerCase(),
			c = e.querySelectorAll(".app-footer .btn"),
			u = (e.getElementById("downloadLink"), {
				android: "http://www.hk515.com/hk515AndroidDoctor.apk",
				ios: "https://itunes.apple.com/us/app/yi-ke/id736583752?ls=1&mt=8"
			});
		if (i()) {
			var l = e.getElementById("weixin-tip");
			t.location.search.indexOf("qrcode_get_room_info") > 0 && (l.style.display = "block"), Array.prototype.forEach.call(c, function(t) {
				t.onclick = function(t) {
					l.style.display = "block", t.preventDefault()
				}
			}), l.onclick = function(t) {
				this.style.display = "none", t.preventDefault()
			}
		} else t.location.search.indexOf("qrcode_get_room_info") > 0 ? (openApp.startApp("hkhealer://platformapi/qrcode_get_room_info?roomid=" + r("roomid")), o(!1)) : o(!0)
	})
}(window, document);