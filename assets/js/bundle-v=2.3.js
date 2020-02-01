! function (e) {
    function t(a) {
        if (o[a]) return o[a].exports;
        var n = o[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, t), n.l = !0, n.exports
    }
    var o = {};
    t.m = e, t.c = o, t.d = function (e, o, a) {
        t.o(e, o) || Object.defineProperty(e, o, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }, t.n = function (e) {
        var o = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(o, "a", o), o
    }, t.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "/assets/js/", t(t.s = 2)
}([function (e, t, o) {
    "use strict";
    var a = function (e) {
            var t = {
                    xs: 375,
                    sm: 768,
                    md: 1024,
                    lg: 1280,
                    xl: 1600
                },
                o = Math.max(document.documentElement.clientWidth, window.innerWidth);
            return (t[e] ? t[e] : 0) <= o
        },
        n = $("html").hasClass("mobile") || $("html").hasClass("tablet"),
        r = {
            navbar: {
                menu: {
                    show: function (e) {
                        var t = new TimelineLite({
                                paused: !0
                            }),
                            o = e,
                            r = o.find(".cb-navbar-backdrop"),
                            i = o.find(".cb-navbar-menu-fill"),
                            s = o.find(".cb-navbar-menu-nav-item"),
                            l = o.find(".cb-navbar-menu-nav-item span"),
                            c = o.find(".cb-social-item"),
                            f = c.find(".cb-social-item-inner");
                        return t.fromTo(r, .3, {
                            opacity: 0
                        }, {
                            opacity: 1
                        }, 0), a("xs") ? t.fromTo(i, 1, {
                            scaleY: 0
                        }, {
                            scaleY: 1,
                            force3D: !0,
                            ease: Elastic.easeOut.config(1.2, .9)
                        }, 0) : t.fromTo(i, .4, {
                            scaleY: 0
                        }, {
                            scaleY: 1,
                            ease: Power2.easeInOut
                        }, 0), n ? (t.staggerFromTo(s, .4, {
                            opacity: 0
                        }, {
                            opacity: 1
                        }, .08, .1), t.staggerFromTo(c, .6, {
                            opacity: 0
                        }, {
                            opacity: 1
                        }, .03, .3)) : (t.staggerFromTo(s, .4, {
                            y: "150%"
                        }, {
                            y: "0%",
                            opacity: 1
                        }, .1, .1), t.staggerFromTo(l, .4, {
                            y: "-100%"
                        }, {
                            y: "0%"
                        }, .1, .1), t.staggerFromTo(c, .3, {
                            y: "120%"
                        }, {
                            y: "0%"
                        }, .07, .2), t.staggerFromTo(f, .3, {
                            y: "-120%"
                        }, {
                            y: "0%"
                        }, .07, .2)), t
                    },
                    hide: function (e) {
                        var t = new TimelineLite({
                                paused: !0
                            }),
                            o = e,
                            r = o.find(".cb-navbar-backdrop"),
                            i = o.find(".cb-navbar-menu-fill"),
                            s = o.find(".cb-navbar-menu-nav-item"),
                            l = o.find(".cb-navbar-menu-nav-item span"),
                            c = o.find(".cb-social-item"),
                            f = c.find(".cb-social-item-inner");
                        return n ? (t.staggerFromTo(s, .2, {
                            opacity: 1
                        }, {
                            opacity: 0
                        }, .07, 0), t.staggerFromTo(c, .2, {
                            opacity: 1
                        }, {
                            opacity: 0
                        }, .05, 0)) : (t.staggerFromTo(s, .2, {
                            y: "0%"
                        }, {
                            y: "-100%",
                            opacity: 0
                        }, .07, 0), t.staggerFromTo(l, .2, {
                            y: "0%"
                        }, {
                            y: "100%"
                        }, .07, 0), t.staggerFromTo(c, .2, {
                            y: "0%"
                        }, {
                            y: a("sm") ? "170%" : "120%"
                        }, .05, 0), t.staggerFromTo(f, .2, {
                            y: "0%"
                        }, {
                            y: "-120%"
                        }, .05, 0)), t.fromTo(r, .6, {
                            opacity: 1
                        }, {
                            opacity: 0
                        }, .2), t.fromTo(i, .6, {
                            scaleY: 1
                        }, {
                            scaleY: 0,
                            ease: Power2.easeInOut
                        }, .25), t
                    },
                    open: function (e) {
                        var t = new TimelineLite({
                                paused: !0
                            }),
                            o = e,
                            a = o.find(".cb-navbar-backdrop"),
                            n = o.find(".cb-navbar-menu-fill"),
                            r = o.find(".cb-navbar-menu-nav-item"),
                            i = o.find(".cb-navbar-menu-nav-item span"),
                            s = o.find(".cb-social-item"),
                            l = s.find(".cb-social-item-inner");
                        return t.fromTo(a, .3, {
                            opacity: 1
                        }, {
                            opacity: 0
                        }, 0), t.to(n, .6, {
                            scaleY: 3,
                            ease: Power2.easeInOut
                        }, 0), t.staggerFromTo(r, .4, {
                            x: "0%",
                            opacity: 1
                        }, {
                            x: "100%",
                            opacity: 0,
                            clearProps: "x"
                        }, .06, 0), t.staggerFromTo(i, .4, {
                            x: "0%"
                        }, {
                            x: "-100%",
                            clearProps: "x"
                        }, .06, 0), t.staggerFromTo(s, .3, {
                            y: "0%"
                        }, {
                            y: "170%"
                        }, .03, .1), t.staggerFromTo(l, .3, {
                            y: "0%"
                        }, {
                            y: "-120%"
                        }, .03, .1), t
                    }
                }
            },
            feedback: {
                show: function (e) {
                    var t = new TimelineLite({
                            paused: !0
                        }),
                        o = e,
                        a = o.find(".cb-feedback-close"),
                        n = o.find(".cb-feedback-backdrop"),
                        r = o.find(".cb-feedback-box"),
                        i = o.find(".cb-feedback-header h4 > *"),
                        s = o.find(".cb-feedback-form");
                    return t.fromTo(n, .3, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Power2.easeInOut
                    }, 0), t.fromTo(r, .4, {
                        x: "100%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, .1), t.staggerFromTo(i, .5, {
                        x: "200%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, .05, "-=0.3"), t.staggerFromTo(s.find("form > .cb-form-group, form > .cb-form-grid, form > .cb-form-submit"), .5, {
                        x: "200%"
                    }, {
                        x: "0%",
                        clearProps: "all",
                        ease: Power2.easeInOut
                    }, .07, "-=0.5"), t.fromTo(a, .4, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Power2.easeInOut
                    }, .5), t
                },
                hide: function (e) {
                    var t = new TimelineLite({
                            paused: !0
                        }),
                        o = e,
                        a = o.find(".cb-feedback-backdrop"),
                        n = o.find(".cb-feedback-box"),
                        r = o.find(".cb-feedback-box-inner");
                    return t.fromTo(a, .3, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        ease: Power2.easeInOut
                    }), t.fromTo(n, .4, {
                        x: "0%"
                    }, {
                        x: "100%",
                        ease: Power2.easeInOut
                    }, "-=0.3"), t.fromTo(r, .2, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        ease: Power2.easeInOut
                    }, "-=0.4"), t.set(r, {
                        opacity: 1
                    }), t
                }
            },
            intro: {
                enter: function (e) {
                    var t = new TimelineLite({
                            paused: !0
                        }),
                        o = e.find(".cb-intro"),
                        a = o.find(".cb-intro-bg"),
                        n = o.find(".cb-header > *");
                    if (n.length) var r = new SplitText(n, {
                            type: "words"
                        }),
                        i = new SplitText(r.words, {
                            type: "words"
                        });
                    var s = o.find(".cb-intro-nav-item");
                    if (s.length) var l = s.find(".cb-intro-nav-item-fill"),
                        c = s.find(".cb-intro-nav-item-text"),
                        f = s.find(".cb-intro-nav-item-text-mask");
                    var d = o.find(".cb-intro-description p");
                    if (d.length) var u = new SplitText(d, {
                            type: "lines"
                        }),
                        h = new SplitText(u.lines, {
                            type: "lines"
                        });
                    var v = o.find(".cb-intro-form form");
                    if (v.length) var p = v.find("> .cb-form-group, > .cb-form-grid, > .cb-form-submit");
                    var m = o.find(".cb-intro-more"),
                        g = function () {
                            n.length && r.revert(), d.length && u.revert()
                        };
                    return a.length && t.fromTo(a, 1.5, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        ease: Power2.easeInOut
                    }, 0), n.length && (t.staggerFromTo(r.words, .5, {
                        y: "-120%"
                    }, {
                        y: "0%",
                        clearProps: "y"
                    }, .1, .2), t.staggerFromTo(i.words, .5, {
                        y: "100%"
                    }, {
                        y: "0%",
                        clearProps: "y"
                    }, .1, .2)), s.length && (t.staggerFromTo(s, .5, {
                        y: "-150%"
                    }, {
                        y: "0%",
                        force3D: !0,
                        clearProps: "y"
                    }, .3, .6), t.staggerFromTo(c, .5, {
                        y: "100%"
                    }, {
                        y: "0%",
                        force3D: !0,
                        clearProps: "y"
                    }, .3, .6), t.staggerFromTo(l, .3, {
                        scaleX: 0
                    }, {
                        scaleX: 1,
                        ease: Linear.easeNone,
                        force3D: !0,
                        clearProps: "all"
                    }, .2, 1.3), t.staggerFromTo(f, .3, {
                        width: "0%"
                    }, {
                        width: "100%",
                        ease: Linear.easeNone,
                        clearProps: "all"
                    }, .3, 1.5)), d.length && (t.staggerFromTo(u.lines, .5, {
                        y: "-110%"
                    }, {
                        y: "0%",
                        force3D: !0,
                        clearProps: "y"
                    }, .2, 1.3), t.staggerFromTo(h.lines, .5, {
                        y: "100%"
                    }, {
                        y: "0%",
                        force3D: !0,
                        clearProps: "y"
                    }, .2, 1.3)), v.length && t.staggerFromTo(p, .8, {
                        opacity: 0,
                        y: "60px"
                    }, {
                        opacity: 1,
                        y: "0px",
                        ease: Power2.easeInOut,
                        clearProps: "opacity, y"
                    }, .1, .3), m.length && t.fromTo(m, 1, {
                        opacity: 0
                    }, {
                        opacity: 1,
                        clearProps: "opacity"
                    }, "-=0.6"), t.add(g), t
                },
                leave: function (e, t) {
                    var o = new TimelineLite({
                            paused: !0
                        }),
                        a = e.find(".cb-intro"),
                        n = e.find("> *").not(a);
                    if (o.set(n, {
                            transition: "none"
                        }), a && a.is(":in-viewport") || t) {
                        var r = a.find(".cb-intro-bg"),
                            i = a.find(".cb-header > *");
                        if (i.length) var s = new SplitText(i, {
                                type: "words"
                            }),
                            l = new SplitText(s.words, {
                                type: "words"
                            });
                        var c = a.find(".cb-intro-nav-item");
                        if (c.length) var f = (c.find(".cb-intro-nav-item-fill"), c.find(".cb-intro-nav-item-text"), c.find(".cb-intro-nav-item-text-mask"), c.find(".cb-intro-nav-item-inner"));
                        var d = a.find(".cb-intro-description p");
                        if (d.length) var u = new SplitText(d, {
                                type: "lines"
                            }),
                            h = new SplitText(u.lines, {
                                type: "lines"
                            });
                        var v = a.find(".cb-intro-form form");
                        if (v.length) var p = v.find("> .cb-form-group, > .cb-form-grid, > .cb-form-submit");
                        var m = a.find(".cb-intro-more"),
                            g = function () {
                                i.length && s.revert(), d.length && u.revert()
                            };
                        m.length && o.fromTo(m, .5, {
                            y: "0%",
                            opacity: 1
                        }, {
                            y: "100%",
                            opacity: 0,
                            ease: Power2.easeInOut
                        }, 0), i.length && (o.staggerFromTo(s.words, .4, {
                            y: "0%"
                        }, {
                            y: "-120%",
                            force3D: !0
                        }, .05, 0), o.staggerFromTo(l.words, .4, {
                            y: "0%"
                        }, {
                            y: "100%",
                            force3D: !0
                        }, .05, 0)), c.length && (o.staggerFromTo(c, .4, {
                            y: "0%"
                        }, {
                            y: "-200%",
                            force3D: !0
                        }, .05, 0), o.staggerFromTo(f, .4, {
                            y: "0%"
                        }, {
                            y: "150%",
                            force3D: !0
                        }, .05, 0)), d.length && (o.staggerFromTo(u.lines, .4, {
                            y: "0%"
                        }, {
                            y: "-150%",
                            force3D: !0
                        }, .04, .1), o.staggerFromTo(h.lines, .4, {
                            y: "0%"
                        }, {
                            y: "100%",
                            force3D: !0
                        }, .04, .1)), v.length && o.staggerFromTo(p, .4, {
                            opacity: 1,
                            y: "0px"
                        }, {
                            opacity: 0,
                            y: "-50px",
                            ease: Power2.easeInOut
                        }, .07, .1), r.length && o.fromTo(r, .4, {
                            scale: 1,
                            opacity: 1
                        }, {
                            scale: .8,
                            opacity: 0,
                            ease: Power2.easeInOut
                        }, .1), t && o.fromTo(e, .4, {
                            x: "0%"
                        }, {
                            x: "100%",
                            force3D: !0,
                            ease: Power2.easeInOut
                        }, .6), o.to(n, .4, {
                            opacity: 0
                        }, 0)
                    } else o.staggerTo(n, .4, {
                        opacity: 0
                    }, .07, 0);
                    return o.eventCallback("onComplete", g || null), o.eventCallback("onReverseComplete", g || null), o
                }
            },
            slider: {
                in: function (e) {
                    var t = new TimelineLite({
                            paused: !0
                        }),
                        o = e,
                        a = o.find(".cb-featured-fill").removeClass("-done"),
                        n = a.attr("data-width") ? a.attr("data-width") : "50%",
                        r = o.find(".cb-featured-label"),
                        i = r.find("span"),
                        s = o.find(".cb-featured-header"),
                        l = s.find("h3"),
                        c = o.find(".cb-featured-text p"),
                        f = new SplitText(c, {
                            type: "lines"
                        }),
                        d = new SplitText(f.lines, {
                            type: "lines"
                        }),
                        u = o.find(".cb-featured-tags"),
                        h = o.find(".cb-featured-tags p"),
                        v = o.find(".cb-featured-more"),
                        p = v.find(".cb-btn_view-line"),
                        m = v.find(".cb-btn_view-text span"),
                        g = o.find(".cb-featured-letter.-fallback"),
                        b = o.find(".cb-preview"),
                        y = function () {
                            f.revert()
                        };
                    return TweenMax.killTweensOf(a), TweenLite.set(o, {
                        x: "0%"
                    }), TweenLite.set(b, {
                        x: "0%"
                    }), t.set(p, {
                        transformOrigin: "left center"
                    }, 0), t.fromTo(g, .3, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, 0), t.fromTo(b, .5, {
                        z: 20
                    }, {
                        z: 0,
                        force3D: !0,
                        ease: Power2.easeInOut
                    }, 0), t.fromTo(a, .28, {
                        width: "0%"
                    }, {
                        width: n,
                        ease: Power2.easeInOut,
                        onComplete: function () {
                            a.addClass("-done")
                        },
                        onReverseComplete: function () {
                            a.addClass("-done")
                        }
                    }, 0), t.fromTo(r, .3, {
                        x: "-100%"
                    }, {
                        x: "0%",
                        ease: Power2.easeInOut
                    }, .1), t.fromTo(i, .4, {
                        x: "-50%"
                    }, {
                        x: "0%",
                        ease: Power2.easeOut
                    }, .3), t.fromTo(s, .4, {
                        y: "110%"
                    }, {
                        y: "0%",
                        force3D: !0
                    }, .3), t.fromTo(l, .4, {
                        y: "-100%"
                    }, {
                        y: "0%",
                        force3D: !0
                    }, .3), t.staggerFromTo(f.lines, .4, {
                        y: "110%"
                    }, {
                        y: "0%",
                        force3D: !0
                    }, .03, .33), t.staggerFromTo(d.lines, .4, {
                        y: "-100%"
                    }, {
                        y: "0%",
                        force3D: !0
                    }, .03, .33), t.fromTo(u, .4, {
                        y: "110%"
                    }, {
                        y: "0%",
                        force3D: !0
                    }, .5), t.fromTo(h, .4, {
                        y: "-100%"
                    }, {
                        y: "0%",
                        force3D: !0
                    }, .5), t.fromTo(p, .3, {
                        scaleX: 0
                    }, {
                        scaleX: 1,
                        ease: Power2.easeInOut
                    }, .4), t.fromTo(m, .3, {
                        y: "130%"
                    }, {
                        y: "0%"
                    }, .6), t.eventCallback("onComplete", y), t.eventCallback("onReverseComplete", function () {
                        setTimeout(y, 400)
                    }), t
                },
                out: function (e) {
                    var t = new TimelineLite({
                            paused: !0
                        }),
                        o = e,
                        a = o.find(".cb-featured-fill").removeClass("-done"),
                        n = a.attr("data-width") ? a.attr("data-width") : "50%",
                        r = o.find(".cb-featured-label"),
                        i = r.find("span"),
                        s = o.find(".cb-featured-header"),
                        l = s.find("h3"),
                        c = o.find(".cb-featured-text p"),
                        f = new SplitText(c, {
                            type: "lines"
                        }),
                        d = new SplitText(f.lines, {
                            type: "lines"
                        }),
                        u = o.find(".cb-featured-tags"),
                        h = o.find(".cb-featured-tags p"),
                        v = o.find(".cb-featured-more"),
                        p = v.find(".cb-btn_view-line"),
                        m = v.find(".cb-btn_view-text span"),
                        g = o.find(".cb-featured-letter.-fallback"),
                        b = o.find(".cb-preview"),
                        y = function () {
                            f.revert()
                        };
                    return TweenMax.killTweensOf(a), t.set(p, {
                        transformOrigin: "right center"
                    }), t.fromTo(g, .3, {
                        opacity: 1
                    }, {
                        opacity: 0
                    }, 0), t.fromTo(b, .5, {
                        x: "0%"
                    }, {
                        x: "8%",
                        force3D: !0,
                        ease: Power2.easeIn
                    }, 0), t.fromTo(i, .2, {
                        x: "0%"
                    }, {
                        x: "50%",
                        ease: Power2.easeInOut
                    }, .1), t.fromTo(r, .3, {
                        x: "0%"
                    }, {
                        x: "100%"
                    }, .2), t.fromTo(s, .4, {
                        y: "0%"
                    }, {
                        y: "-150%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, 0), t.fromTo(l, .4, {
                        y: "0%"
                    }, {
                        y: "100%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, 0), t.staggerFromTo(f.lines, .4, {
                        y: "0%"
                    }, {
                        y: "-150%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, .05, .05), t.staggerFromTo(d.lines, .4, {
                        y: "0%"
                    }, {
                        y: "100%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, .05, .05), t.fromTo(u, .4, {
                        y: "0%"
                    }, {
                        y: "-150%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, .13), t.fromTo(h, .4, {
                        y: "0%"
                    }, {
                        y: "100%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, .13), t.fromTo(m, .4, {
                        y: "0%"
                    }, {
                        y: "130%"
                    }, 0), t.fromTo(p, .3, {
                        scaleX: 1
                    }, {
                        scaleX: 0
                    }, .2), t.fromTo(a, .28, {
                        width: n
                    }, {
                        width: "100%",
                        overwrite: !0,
                        ease: Power2.easeInOut,
                        onComplete: function () {
                            a.addClass("-done")
                        },
                        onReverseComplete: function () {
                            a.addClass("-done")
                        }
                    }, .3), t.fromTo(o, .38, {
                        x: "0%"
                    }, {
                        x: "100%",
                        force3D: !0,
                        ease: Power2.easeInOut
                    }, .7), t.eventCallback("onComplete", y), t.eventCallback("onReverseComplete", y), t
                },
                entrance: function (e, t) {
                    var o = new TimelineLite({
                        paused: !0
                    });
                    e.css({
                        zIndex: 6
                    }), t.css({
                        zIndex: 5
                    });
                    var a = function (e) {
                            e.find(".cb-featured-letter.-back").trigger("show")
                        },
                        n = function (e) {
                            e.find(".cb-featured-letter.-back").trigger("hide")
                        },
                        i = r.intro.leave(e, !0),
                        s = this.in(t);
                    return o.add(i.play()), o.add(function () {
                        o.reversed() || a(t)
                    }), o.add(s.play()), o.add(function () {
                        o.reversed() && n(t)
                    }), o
                },
                change: function (e, t) {
                    var o = new TimelineLite({
                        paused: !0
                    });
                    e.css({
                        zIndex: 6
                    }), t.css({
                        zIndex: 5
                    });
                    var a = function (e) {
                            e.find(".cb-featured-letter.-back").trigger("show")
                        },
                        n = function (e) {
                            e.find(".cb-featured-letter.-back").trigger("hide")
                        },
                        r = this.out(e),
                        i = this.in(t);
                    return o.add(function () {
                        o.reversed() || n(e)
                    }), o.add(r.play()), o.add(function () {
                        o.reversed() ? setTimeout(function () {
                            a(e)
                        }, 300) : a(t)
                    }), o.add(i.play()), o.add(function () {
                        o.reversed() && n(t)
                    }), o
                },
                open: function (e) {
                    var t = new TimelineLite({
                            paused: !0
                        }),
                        o = e,
                        a = o.find(".cb-featured-fill").removeClass("-done"),
                        n = o.find(".cb-featured-label"),
                        r = n.find("span"),
                        i = o.find(".cb-featured-header"),
                        s = i.find("h3"),
                        l = o.find(".cb-featured-text p"),
                        c = new SplitText(l, {
                            type: "lines"
                        }),
                        f = new SplitText(c.lines, {
                            type: "lines"
                        }),
                        d = o.find(".cb-featured-tags"),
                        u = o.find(".cb-featured-tags p"),
                        h = o.find(".cb-featured-more"),
                        v = o.find(".cb-featured-letter.-fallback"),
                        p = o.find(".cb-featured-letter.-back"),
                        m = function () {
                            c.revert()
                        },
                        g = function (e) {
                            p.trigger("show")
                        },
                        b = function (e) {
                            p.trigger("hide")
                        };
                    return TweenMax.killTweensOf(a), t.add(function () {
                        t.reversed() ? m() : b()
                    }), t.fromTo(v, .4, {
                        opacity: 1
                    }, {
                        opacity: 0
                    }, 0), t.fromTo(i, .4, {
                        y: "0%"
                    }, {
                        y: "-150%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, 0), t.fromTo(s, .4, {
                        y: "0%"
                    }, {
                        y: "100%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, 0), t.fromTo(n, .4, {
                        x: "0%"
                    }, {
                        x: "100%",
                        ease: Power2.easeInOut
                    }, 0), t.fromTo(r, .4, {
                        x: "0%"
                    }, {
                        x: "50%",
                        ease: Power2.easeOut
                    }, 0), t.staggerFromTo(c.lines, .4, {
                        y: "0%"
                    }, {
                        y: "-150%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, .02, .1), t.staggerFromTo(f.lines, .4, {
                        y: "0%"
                    }, {
                        y: "100%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, .02, .1), t.fromTo(d, .4, {
                        y: "0%"
                    }, {
                        y: "-150%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, .1), t.fromTo(u, .4, {
                        y: "0%"
                    }, {
                        y: "100%",
                        force3D: !0,
                        ease: Power2.easeOut
                    }, .1), t.fromTo(h, .4, {
                        opacity: 1
                    }, {
                        opacity: 0,
                        ease: Power2.easeInOut
                    }, 0), t.fromTo(a, .4, {
                        width: a.data("width") ? a.data("width") : "50%"
                    }, {
                        width: "0%",
                        ease: Power2.easeInOut,
                        onComplete: function () {
                            a.addClass("-done")
                        },
                        onReverseComplete: function () {
                            a.addClass("-done")
                        }
                    }, .3), t.add(function () {
                        t.reversed() && g()
                    }), t
                }
            },
            project: {
                enter: function (e, t) {
                    var o = new TimelineLite({
                            paused: !0
                        }),
                        a = e.find(".cb-tophead"),
                        r = a.find(".cb-header").css({
                            overflow: "hidden"
                        }),
                        i = r.find("h1"),
                        s = a.find(".cb-tophead-description p"),
                        l = new SplitText(s, {
                            type: "words"
                        }),
                        c = new SplitText(l.words, {
                            type: "words"
                        });
                    return $(l.words).css({
                        overflow: "hidden",
                        verticalAlign: "bottom"
                    }), t ? (o.delay(.05), o.from(a, .6, {
                        height: "0%",
                        clearProps: "height",
                        ease: Power2.easeInOut
                    }, 0)) : (o.delay(.15), o.from(a, .6, {
                        height: "100%",
                        clearProps: "height",
                        ease: Power2.easeInOut
                    }, 0)), n ? (o.fromTo(r, .4, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, .6), o.staggerFromTo(l.words, .5, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, .03, .8)) : (o.fromTo(r, .6, {
                        y: "110%"
                    }, {
                        y: "0%"
                    }, .4), o.fromTo(i, .6, {
                        y: "-100%"
                    }, {
                        y: "0%"
                    }, .4), o.staggerFromTo(l.words, .4, {
                        y: "110%"
                    }, {
                        y: "0%"
                    }, .04, .6), o.staggerFromTo(c.words, .4, {
                        y: "-100%"
                    }, {
                        y: "0%"
                    }, .04, .6)), o
                },
                leave: function (e, t) {
                    var o = new TimelineLite({
                            paused: !0
                        }),
                        a = e.find(".cb-tophead"),
                        n = a.find(".cb-header").css({
                            overflow: "hidden"
                        }),
                        r = n.find("h1"),
                        i = a.find(".cb-tophead-description p"),
                        s = new SplitText(i, {
                            type: "words"
                        }),
                        l = new SplitText(s.words, {
                            type: "words"
                        });
                    return $(s.words).css({
                        overflow: "hidden",
                        verticalAlign: "bottom"
                    }), o.fromTo(n, .4, {
                        y: "0%"
                    }, {
                        y: t ? "-100%" : "100%"
                    }, 0), o.fromTo(r, .4, {
                        y: "-0%"
                    }, {
                        y: t ? "100%" : "-100%"
                    }, 0), o.staggerFromTo(s.words, .4, {
                        y: "0%"
                    }, {
                        y: t ? "-110%" : "110%"
                    }, .01, .05), o.staggerFromTo(l.words, .4, {
                        y: "0%"
                    }, {
                        y: t ? "100%" : "-100%"
                    }, .01, .05), t ? o.to(a, .5, {
                        height: "0%",
                        ease: Power2.easeInOut
                    }, .2) : o.to(a, .5, {
                        height: "100%",
                        ease: Power2.easeInOut
                    }, .2), o
                },
                next: function (e) {
                    var t = new TimelineLite({
                            paused: !0,
                            onUpdate: function () {
                                window.scrollTo(0, Math.min(document.body.scrollHeight - document.body.clientHeight, window.pageYOffset + 50))
                            }
                        }),
                        o = e.find(".cb-nextproject"),
                        a = o.find(".cb-nextproject-fill"),
                        n = o.find(".cb-nextproject-title"),
                        r = o.find(".cb-nextproject-label span");
                    return t.fromTo(o, .35, {
                        height: "50%"
                    }, {
                        height: "100%",
                        ease: Power2.easeInOut
                    }, 0), t.to(a, .35, {
                        right: 0,
                        left: 0,
                        scale: 1,
                        ease: Power2.easeInOut
                    }, 0), t.fromTo(n, .4, {
                        opacity: 1
                    }, {
                        opacity: 0
                    }, .1), t.fromTo(r, .4, {
                        y: "0%"
                    }, {
                        y: "-150%",
                        ease: Power2.easeInOut
                    }, .1), t.set(a, {
                        transformOrigin: "top center"
                    }), t.to(a, .3, {
                        scaleY: 0
                    }), t
                }
            },
            services: {
                enter: function (e, t) {
                    var o = new TimelineLite({
                            paused: !0
                        }),
                        a = e,
                        n = a.find(".cb-projectbox-menu-nav"),
                        r = a.find(".cb-projectbox-menu-filter"),
                        i = this.filters.show(r),
                        s = this.list.show(a);
                    if (!t) {
                        var l = this.navs.show(n);
                        o.add(l.play())
                    }
                    return o.add(i.play(), t ? "0" : "-=0.3"), o.add(s.play(), 0), o
                },
                leave: function (e, t) {
                    var o = new TimelineLite({
                            paused: !0
                        }),
                        a = e,
                        n = a.find(".cb-projectbox-menu-nav"),
                        r = a.find(".cb-projectbox-menu-filter");
                    return t || o.add(this.navs.show(n).reverse(0), 0), o.add(this.filters.hide(r).play(), 0), o.add(this.list.hide(a).play(), 0), o
                },
                open: function (e) {
                    var t = new TimelineLite({
                            paused: !0
                        }),
                        o = e,
                        a = o.find(".cb-projectbox-filler"),
                        n = o.find(".cb-projectbox");
                    return a.css({
                        height: "100%"
                    }), t.fromTo(a, .6, {
                        scaleY: 0,
                        transformOrigin: "bottom center"
                    }, {
                        scaleY: 1,
                        transformOrigin: "bottom center",
                        ease: Power2.easeInOut
                    }), t.set(n, {
                        display: "none"
                    }), t.fromTo(a, .6, {
                        scaleY: 1,
                        transformOrigin: "top center"
                    }, {
                        scaleY: 0,
                        transformOrigin: "top center",
                        ease: Power2.easeInOut
                    }), t
                },
                navs: {
                    show: function (e) {
                        var t = new TimelineLite({
                                paused: !0
                            }),
                            o = e,
                            a = o.find(".cb-projectbox-menu-nav-item");
                        return n || t.staggerFromTo(a, .4, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            ease: Power2.easeInOut
                        }, .05), t
                    }
                },
                filters: {
                    show: function (e) {
                        var t = new TimelineLite({
                                paused: !0
                            }),
                            o = e,
                            a = o.find(".cb-projectbox-menu-filter-item");
                        return n || t.staggerFromTo(a, .4, {
                            opacity: 0
                        }, {
                            opacity: 1,
                            ease: Power2.easeInOut
                        }, .05, .2), t
                    },
                    hide: function (e) {
                        var t = new TimelineLite({
                                paused: !0
                            }),
                            o = e,
                            a = o.find(".cb-projectbox-menu-filter-item");
                        return n || t.staggerFromTo(a, .2, {
                            opacity: 1
                        }, {
                            opacity: 0,
                            ease: Power2.easeInOut
                        }, .03, .2), t
                    }
                },
                list: {
                    show: function (e) {
                        var t = new TimelineLite({
                            paused: !0
                        });
                        if (!n) {
                            var o = e,
                                a = o.find(".cb-preface"),
                                r = a.find(".cb-preface-header .cb-header h1"),
                                i = new SplitText(r, {
                                    type: "lines"
                                }),
                                s = new SplitText(i.lines, {
                                    type: "lines"
                                }),
                                l = a.find(".cb-preface-text p"),
                                c = new SplitText(l, {
                                    type: "lines"
                                }),
                                f = new SplitText(c.lines, {
                                    type: "lines"
                                }).lines,
                                d = a.find(".cb-preface-section .cb-header").css({
                                    display: "inline-block",
                                    overflow: "hidden",
                                    verticalAlign: "bottom"
                                }),
                                u = d.find("h2"),
                                h = a.find(".cb-preface-awards, .cb-preface-request"),
                                v = o.find(".cb-projectbox-item").not(":first").filter(":in-viewport");
                            t.staggerFromTo(i.lines, .5, {
                                x: "-100%"
                            }, {
                                x: "0%",
                                clearProps: "all"
                            }, .04, .1), t.staggerFromTo(s.lines, .5, {
                                x: "100%"
                            }, {
                                x: "0%",
                                clearProps: "all",
                                onComplete: function () {
                                    i.revert()
                                }
                            }, .04, .1), t.fromTo(l, .4, {
                                opacity: 0
                            }, {
                                opacity: 1
                            }, .1), d.length && t.fromTo(d, .4, {
                                opacity: 0
                            }, {
                                opacity: 1
                            }, .1), n || (t.staggerFromTo(c.lines, .7, {
                                y: "300%"
                            }, {
                                y: "0%",
                                ease: Power2.easeOut
                            }, .04, .2), t.staggerFromTo(f, .7, {
                                y: "-100%"
                            }, {
                                y: "0%",
                                ease: Power2.easeOut,
                                onComplete: function () {
                                    c.revert()
                                }
                            }, .04, .2), d.length && (t.staggerFromTo(d, .7, {
                                x: "-100%"
                            }, {
                                x: "0%",
                                ease: Power2.easeOut
                            }, .04, .2), t.staggerFromTo(u, .7, {
                                x: "100%"
                            }, {
                                x: "0%",
                                ease: Power2.easeOut
                            }, .04, .2))), h.length && t.fromTo(h, .4, {
                                y: "20%",
                                opacity: 0
                            }, {
                                y: "0%",
                                opacity: 1,
                                clearProps: "all"
                            }, .2), v.length && t.staggerFromTo(v, 1, {
                                y: "40%",
                                opacity: 0
                            }, {
                                y: "0%",
                                opacity: 1,
                                clearProps: "y",
                                ease: Power2.easeInOut
                            }, .1, .1)
                        }
                        return t
                    },
                    hide: function (e) {
                        var t = new TimelineLite({
                            paused: !0
                        });
                        if (!n) {
                            var o = e,
                                a = o.find(".cb-preface:in-viewport"),
                                r = o.find(".cb-projectbox-item").not(":first").filter(":in-viewport");
                            if (a.length) {
                                var i = a.find(".cb-preface-header .cb-header h1"),
                                    s = new SplitText(i, {
                                        type: "lines"
                                    }),
                                    l = new SplitText(s.lines, {
                                        type: "lines"
                                    }),
                                    c = a.find(".cb-preface-text p"),
                                    f = new SplitText(c, {
                                        type: "lines"
                                    }),
                                    d = new SplitText(f.lines, {
                                        type: "lines"
                                    }).lines,
                                    u = a.find(".cb-preface-section .cb-header"),
                                    h = u.find("h2"),
                                    v = a.find(".cb-preface-awards, .cb-preface-request");
                                t.staggerFromTo(s.lines, .4, {
                                    x: "0%"
                                }, {
                                    x: "100%"
                                }, .04, .1), t.staggerFromTo(l.lines, .4, {
                                    x: "0%"
                                }, {
                                    x: "-100%"
                                }, .04, .1), t.fromTo(c, .4, {
                                    opacity: 1
                                }, {
                                    opacity: 0
                                }, .1), t.fromTo(u, .4, {
                                    opacity: 1
                                }, {
                                    opacity: 0
                                }, .1), t.staggerFromTo(f.lines, .4, {
                                    y: "0%"
                                }, {
                                    y: "-150%",
                                    ease: Power2.easeOut
                                }, .04, .1), t.staggerFromTo(d, .4, {
                                    y: "0%"
                                }, {
                                    y: "100%",
                                    ease: Power2.easeOut,
                                    onComplete: function () {
                                        f.revert()
                                    }
                                }, .04, .1), u.length && (t.staggerFromTo(u, .4, {
                                    y: "0%"
                                }, {
                                    y: "-150%"
                                }, .04, .1), t.staggerFromTo(h, .4, {
                                    y: "0%"
                                }, {
                                    y: "100%"
                                }, .04, .1)), v.length && t.fromTo(v, .4, {
                                    opacity: 1
                                }, {
                                    opacity: 0
                                }, .1)
                            }
                            r.length && t.staggerFromTo(r, .4, {
                                opacity: 1
                            }, {
                                opacity: 0
                            }, .15, .1)
                        }
                        return t
                    }
                }
            },
            fx: {
                text: function (e) {
                    var t = new TimelineLite,
                        o = e.find("> *");
                    if (o.length || (o = e), o.length) {
                        var a = new SplitText(o, {
                                type: "words"
                            }),
                            n = new SplitText(a.words, {
                                type: "words"
                            });
                        t.delay(.4), t.staggerFromTo(a.words, .5, {
                            y: "110%"
                        }, {
                            y: "0%",
                            force3D: !0
                        }, .04, 0), t.staggerFromTo(n.words, .5, {
                            y: "-100%"
                        }, {
                            y: "0%",
                            force3D: !0
                        }, .04, 0)
                    }
                    return t
                }
            },
            textview: {
                enter: function (e) {
                    var t = new TimelineLite({
                            paused: !0
                        }),
                        o = e.find(".cb-textview-header .cb-header h1"),
                        a = new SplitText(o, {
                            type: "lines"
                        }),
                        n = new SplitText(a.lines, {
                            type: "lines"
                        }),
                        r = e.find(".cb-textview-text");
                    return t.staggerFromTo(a.lines, .5, {
                        x: "-100%"
                    }, {
                        x: "0%",
                        clearProps: "all"
                    }, .04, .1), t.staggerFromTo(n.lines, .5, {
                        x: "100%"
                    }, {
                        x: "0%",
                        clearProps: "all",
                        onComplete: function () {
                            a.revert()
                        }
                    }, .04, .1), t.from(r, 1, {
                        opacity: 0
                    }, .2), t
                },
                leave: function (e) {
                    var t = new TimelineLite;
                    return t.to(e, .4, {
                        opacity: 0
                    }, 0), t
                }
            }
        };
    e.exports = r
}, function (e, t, o) {
    "use strict";

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    var n = function () {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function (t, o, a) {
                return o && e(t.prototype, o), a && e(t, a), t
            }
        }(),
        r = {
            Planets: function () {
                function e(t, o) {
                    a(this, e), this.svg = t, this.options = o, this.mask = t.find("#mask"), this.maskPath = this.mask.find("path"), this.space = t.find("#space"), this.stars = t.find("#stars > *"), this.nova = t.find("#nova > *"), this.comet = t.find("#comet"), this.saturn = t.find("#saturn"), this.mimas = t.find("#mimas"), this.tefia = t.find("#tefia"), this.tl = new TimelineMax({
                        repeat: -1,
                        paused: !0
                    })
                }
                return n(e, [{
                    key: "init",
                    value: function () {
                        this.handleStars(), this.handleNova(), this.handleComet(), this.handleMorph(), this.registerMorphMove()
                    }
                }, {
                    key: "handleStars",
                    value: function () {
                        for (var e = 0; e < this.stars.length; e++) {
                            var t = new TimelineMax({
                                repeat: -1,
                                yoyo: !0
                            });
                            t.fromTo(this.stars[e], 1 + Math.random(), {
                                opacity: .2,
                                delay: Math.random()
                            }, {
                                opacity: 1
                            }), this.tl.add(t, 0)
                        }
                    }
                }, {
                    key: "handleNova",
                    value: function () {
                        for (var e = 0; e < this.nova.length; e++) {
                            var t = new TimelineMax({
                                    repeat: -1,
                                    yoyo: !0,
                                    delay: Math.random()
                                }),
                                o = $(this.nova[e]),
                                a = o.find("path"),
                                n = o.find("polygon"),
                                r = o.find("rect"),
                                i = Math.random();
                            t.set(n, {
                                transformOrigin: "50% 50%"
                            }), t.set(r, {
                                transformOrigin: "50% 50%"
                            }), t.fromTo(a, 1 + i, {
                                fill: "#9CB7DC"
                            }, {
                                fill: "#fff"
                            }, 0), t.fromTo(n, 1 + i, {
                                scaleX: .7
                            }, {
                                scaleX: 1
                            }, 0), t.fromTo(r, 1 + i, {
                                scaleY: .7
                            }, {
                                scaleY: 1
                            }, 0), this.tl.add(t, 0)
                        }
                    }
                }, {
                    key: "handleComet",
                    value: function () {
                        for (var e = new TimelineMax({
                                repeat: -1
                            }), t = 0; t < 10; t++) {
                            var o = 2 * Math.random() + 1;
                            e.fromTo(this.comet, Math.floor(7 * Math.random()) + 8, {
                                x: 0,
                                y: 0,
                                opacity: 1
                            }, {
                                bezier: {
                                    type: "soft",
                                    values: [{
                                        x: 300 * o,
                                        y: 650
                                    }, {
                                        x: 500 * o,
                                        y: 1300
                                    }, {
                                        x: 600 * o,
                                        y: 1900
                                    }],
                                    autoRotate: -45
                                },
                                opacity: .2,
                                delay: 0 === t ? Math.floor(4 * Math.random()) + 3 : Math.floor(10 * Math.random()) + 15
                            })
                        }
                        this.tl.add(e, 0)
                    }
                }, {
                    key: "handleMorph",
                    value: function () {
                        var e = new TimelineMax({
                            repeat: -1,
                            yoyo: !0
                        });
                        e.to(this.maskPath, 2, {
                            morphSVG: {
                                shape: "M1467.3,291.3C1224,159.2,885,222,670.6,390.5C415.2,591.3,301,817.8,383.8,1122.4 c99.4,365.9,446,413.3,763.3,383.1c191.2-18.2,458.6-66.9,592-207c131.1-137.7,190.4-273.8,142.3-469.6 C1832.8,631.2,1748.7,444.2,1467.3,291.3z",
                                precompile: ["M1268.4,271.7 C1016.8,207.6 733.8,248.7 522.6,404.29 268.4,591.5 237.8,967.7 449.1,1199.9 655.1,1426.3 973.9,1544 1277,1539.5 1455.2,1536.9 1615,1497.3 1738.7,1361.3 1860.3,1227.59 1926,1030.5 1874.7,849.59 1783,526 1561,346.3 1268.4,271.7 z", "M1467.3,291.3 C1224,159.19 885,222 670.6,390.5 415.2,591.29 301,817.8 383.8,1122.4 483.2,1488.3 829.8,1535.7 1147.09,1505.5 1338.3,1487.3 1605.69,1438.6 1739.1,1298.5 1870.19,1160.8 1929.5,1024.7 1881.4,828.9 1832.8,631.2 1748.7,444.2 1467.3,291.3 z"]
                            },
                            ease: Power0.easeNone
                        }), e.to(this.maskPath, 2, {
                            morphSVG: {
                                shape: "M1389.3,312c-496.2-60.3-737.9,41.8-900.6,269.8c-123.2,172.7-188.4,456.2-41.3,727.4 c153.6,283.2,430.8,127.5,743.9,122.7c184-2.8,368.7,57.6,536.9-33.6c164.5-89.2,235.9-205.3,222.6-515.8 C1935.3,524.2,1757.2,356.7,1389.3,312z",
                                precompile: ["M1467.3,291.3 C1224,159.19 885,222 670.6,390.5 415.2,591.29 301,817.8 383.8,1122.4 483.2,1488.3 829.8,1535.7 1147.09,1505.5 1338.3,1487.3 1605.69,1438.6 1739.1,1298.5 1870.19,1160.8 1929.5,1024.7 1881.4,828.9 1832.8,631.2 1748.7,444.2 1467.3,291.3 z", "M1389.3,312 C893.09,251.7 651.4,353.8 488.69,581.79 365.49,754.5 300.29,1038 447.39,1309.19 600.99,1592.4 878.2,1436.69 1191.3,1431.9 1375.3,1429.1 1560,1489.49 1728.19,1398.3 1892.69,1309.09 1964.1,1193 1950.79,882.5 1935.3,524.2 1757.2,356.7 1389.3,312 z"]
                            },
                            ease: Power0.easeNone
                        }), e.to(this.maskPath, 3, {
                            morphSVG: {
                                shape: "M1372,276.8c-259.8-68.5-702.2,106.6-920.3,272.8c-262.5,200-264.7,534.1-46.5,782.2 c212.8,241.9,455.5,84.9,768.5,80.1c184-2.8,386.3,74.6,554.5-16.6c164.5-89.2,298-309,245-502.4 C1878.4,547.3,1674.2,356.5,1372,276.8z",
                                precompile: ["M1389.3,312 C893.09,251.7 651.4,353.8 488.69,581.79 365.49,754.5 300.29,1038 447.39,1309.19 600.99,1592.4 878.2,1436.69 1191.3,1431.9 1375.3,1429.1 1560,1489.49 1728.19,1398.3 1892.69,1309.09 1964.1,1193 1950.79,882.5 1935.3,524.2 1757.2,356.7 1389.3,312 z", "M1372,276.8 C1112.2,208.3 669.8,383.4 451.7,549.6 189.2,749.6 187,1083.7 405.2,1331.8 618,1573.7 860.7,1416.7 1173.7,1411.9 1357.7,1409.1 1560,1486.5 1728.2,1395.3 1892.7,1306.1 2026.2,1086.3 1973.2,892.9 1878.4,547.29 1674.2,356.5 1372,276.8 z"]
                            },
                            ease: Power0.easeNone
                        }), this.tl.add(e, 0)
                    }
                }, {
                    key: "registerMorphMove",
                    value: function () {
                        var e = this,
                            t = this.svg;
                        t.on("mousemove", function (o) {
                            var a = t.outerWidth(),
                                n = t.outerHeight(),
                                r = t.offset().left - window.pageXOffset,
                                i = t.offset().top - window.pageYOffset,
                                s = (o.clientX - r) / a,
                                l = (o.clientY - i) / n,
                                c = 2 * (s - .5),
                                f = 2 * (l - .5),
                                d = 10 * c,
                                u = 1.2 - Math.abs(.2 * c),
                                h = 1.1 - Math.abs(.2 * f),
                                v = 50 * c,
                                p = 100 * f;
                            TweenLite.to(e.maskPath, .7, {
                                rotation: d.toFixed(2),
                                scaleX: u.toFixed(2),
                                scaleY: h.toFixed(2),
                                x: v.toFixed(),
                                y: p.toFixed(),
                                transformOrigin: "50% 50%"
                            })
                        }), t.on("mouseleave", function (t) {
                            TweenLite.to(e.maskPath, .7, {
                                rotation: 0,
                                scaleX: 1,
                                scaleY: 1,
                                x: 0,
                                y: 0,
                                transformOrigin: "50% 50%"
                            })
                        })
                    }
                }, {
                    key: "registerPiecesMove",
                    value: function (e, t) {
                        var o = this;
                        e.on("mousemove", function (t) {
                            var a = e.outerWidth(),
                                n = e.outerHeight(),
                                r = e.offset().left - window.pageXOffset,
                                i = e.offset().top - window.pageYOffset,
                                s = (t.clientX - r) / a,
                                l = (t.clientY - i) / n,
                                c = 2 * (s - .5),
                                f = 2 * (l - .5),
                                d = 40 * c,
                                u = 40 * f,
                                h = 80 * c - 20,
                                v = 50 * f - 20,
                                p = 20 * c,
                                m = 20 * f;
                            TweenLite.to(o.mimas, .8, {
                                x: d.toFixed(),
                                y: u.toFixed()
                            }), TweenLite.to(o.saturn, .5, {
                                x: h.toFixed(),
                                y: v.toFixed()
                            }), TweenLite.to(o.tefia, 1, {
                                x: p.toFixed(),
                                y: m.toFixed()
                            })
                        })
                    }
                }, {
                    key: "play",
                    value: function () {
                        this.tl.play()
                    }
                }, {
                    key: "pause",
                    value: function () {
                        this.tl.pause()
                    }
                }]), e
            }(),
            Man: function () {
                function e(t, o) {
                    a(this, e), this.svg = t, this.options = o, this.mask = t.find("#mask"), this.maskPath = this.mask.find("path"), this.space = t.find("#space"), this.stars = t.find("#stars > *"), this.nova = t.find("#nova > *"), this.comet = t.find("#comet"), this.logo = t.find("#logo"), this.man = t.find("#man"), this.tl = new TimelineMax({
                        repeat: -1,
                        paused: !0
                    }), this.init()
                }
                return n(e, [{
                    key: "init",
                    value: function () {
                        this.handleStars(), this.handleNova(), this.handleComet(), this.handleMorph(), this.registerMorphMove()
                    }
                }, {
                    key: "handleStars",
                    value: function () {
                        for (var e = 0; e < this.stars.length; e++) {
                            var t = new TimelineMax({
                                repeat: -1,
                                yoyo: !0
                            });
                            t.fromTo(this.stars[e], 1 + Math.random(), {
                                opacity: .2,
                                delay: Math.random()
                            }, {
                                opacity: 1
                            }), this.tl.add(t, 0)
                        }
                    }
                }, {
                    key: "handleNova",
                    value: function () {
                        for (var e = 0; e < this.nova.length; e++) {
                            var t = new TimelineMax({
                                    repeat: -1,
                                    yoyo: !0,
                                    delay: Math.random()
                                }),
                                o = $(this.nova[e]),
                                a = o.find("path"),
                                n = o.find("polygon"),
                                r = o.find("rect"),
                                i = Math.random();
                            t.set(n, {
                                transformOrigin: "50% 50%"
                            }), t.set(r, {
                                transformOrigin: "50% 50%"
                            }), t.fromTo(a, 1 + i, {
                                fill: "#9CB7DC"
                            }, {
                                fill: "#fff"
                            }, 0), t.fromTo(n, 1 + i, {
                                scaleX: .7
                            }, {
                                scaleX: 1
                            }, 0), t.fromTo(r, 1 + i, {
                                scaleY: .7
                            }, {
                                scaleY: 1
                            }, 0), this.tl.add(t, 0)
                        }
                    }
                }, {
                    key: "handleComet",
                    value: function () {
                        for (var e = new TimelineMax({
                                repeat: -1
                            }), t = 0; t < 10; t++) {
                            var o = 2 * Math.random() + 1;
                            e.fromTo(this.comet, Math.floor(7 * Math.random()) + 8, {
                                x: 0,
                                y: 0,
                                opacity: 1
                            }, {
                                bezier: {
                                    type: "soft",
                                    values: [{
                                        x: -300 * o,
                                        y: 650
                                    }, {
                                        x: -500 * o,
                                        y: 1300
                                    }, {
                                        x: -600 * o,
                                        y: 1900
                                    }],
                                    autoRotate: 225
                                },
                                opacity: .2,
                                delay: 0 === t ? Math.floor(4 * Math.random()) + 3 : Math.floor(10 * Math.random()) + 15
                            })
                        }
                        this.tl.add(e, 0)
                    }
                }, {
                    key: "handleMorph",
                    value: function () {
                        var e = new TimelineMax({
                            repeat: -1,
                            yoyo: !0
                        });
                        e.to(this.maskPath, 2, {
                            morphSVG: {
                                shape: "M1792.9,1473.3c-336.9,339.8-996.2,472.6-1326.1,162c-305.5-287.5-243.8-908.1,99.9-1163.1 c341.1-253.1,965.2-201.1,1169.2,26C1975.9,765.2,1981.1,1283.4,1792.9,1473.3z",
                                precompile: ["M1525.2,1694.9 C1073.9,1853.9 354.2,1832.3 223.2,1398.6 89.5,955.7 385.4,550.5 755.4,335.4 1125.4,120.29 1772.9,211.09 1944.8,715.9 2116.8,1220.59 1776.4,1606.5 1525.2,1694.9 z", "M1792.9,1473.3 C1456,1813.1 796.7,1945.9 466.8,1635.3 161.3,1347.8 223,727.2 566.7,472.2 907.8,219.1 1531.9,271.1 1735.9,498.2 1975.9,765.2 1981.1,1283.4 1792.9,1473.3 z"]
                            },
                            ease: Power0.easeNone
                        }), e.to(this.maskPath, 2, {
                            morphSVG: {
                                shape: "M757.8,283.8c466.4-106.7,1179-3.5,1259.9,442.2c82.6,455.2-257.4,824.2-649.5,995.9 s-1025,7.9-1138.5-513.1S498.2,343.2,757.8,283.8z",
                                precompile: ["M566.7000000000002,472.20000000000005 C907.8,219.1 1531.9,271.1 1735.9,498.2 1975.9,765.2 1981.1,1283.4 1792.9,1473.3 1456,1813.1 796.7,1945.9 466.8,1635.3 161.3,1347.8 223,727.2 566.7,472.2 z", "M757.8,283.8 C1224.19,177.1 1936.8,280.3 2017.7,726 2100.3,1181.2 1760.3,1550.2 1368.2,1721.9 976.09,1893.6 343.2,1729.8 229.7,1208.8 116.2,687.8 498.2,343.2 757.8,283.8 z"]
                            },
                            ease: Power0.easeNone
                        }), e.to(this.maskPath, 3, {
                            morphSVG: {
                                shape: "M423.6,589.3C784.2,271.2,1431.1,94.4,1720.9,429.2c295.9,341.8,375,780.1-53.2,1068.9 c-353.8,238.7-903.2,508.8-1258.7,126.8S222.9,766.3,423.6,589.3z",
                                precompile: ["M757.8,283.8 C1224.19,177.1 1936.8,280.3 2017.7,726 2100.3,1181.2 1760.3,1550.2 1368.2,1721.9 976.09,1893.6 343.2,1729.8 229.7,1208.8 116.2,687.8 498.2,343.2 757.8,283.8 z", "M423.6,589.3 C784.2,271.2 1431.1,94.4 1720.9,429.2 2016.8,771 2095.9,1209.3 1667.7,1498.1 1313.9,1736.8 764.5,2006.9 409,1624.9 53.5,1242.9 222.9,766.3 423.6,589.29 z"]
                            },
                            ease: Power0.easeNone
                        }), this.tl.add(e, 0)
                    }
                }, {
                    key: "registerMorphMove",
                    value: function () {
                        var e = this,
                            t = this.svg;
                        t.on("mousemove", function (o) {
                            var a = t.outerWidth(),
                                n = t.outerHeight(),
                                r = t.offset().left - window.pageXOffset,
                                i = t.offset().top - window.pageYOffset,
                                s = (o.clientX - r) / a,
                                l = (o.clientY - i) / n,
                                c = 2 * (s - .5),
                                f = 2 * (l - .5),
                                d = 10 * c,
                                u = 1.2 - Math.abs(.2 * c),
                                h = 1.1 - Math.abs(.2 * f),
                                v = 50 * c,
                                p = 100 * f;
                            TweenLite.to(e.maskPath, .7, {
                                rotation: d.toFixed(2),
                                scaleX: u.toFixed(2),
                                scaleY: h.toFixed(2),
                                x: v.toFixed(),
                                y: p.toFixed(),
                                transformOrigin: "50% 50%"
                            })
                        }), t.on("mouseleave", function (t) {
                            TweenLite.to(e.maskPath, .7, {
                                rotation: 0,
                                scaleX: 1,
                                scaleY: 1,
                                x: 0,
                                y: 0,
                                transformOrigin: "50% 50%"
                            })
                        })
                    }
                }, {
                    key: "registerPiecesMove",
                    value: function (e) {
                        var t = this;
                        e.on("mousemove", function (o) {
                            var a = e.outerWidth(),
                                n = e.outerHeight(),
                                r = e.offset().left - window.pageXOffset,
                                i = e.offset().top - window.pageYOffset,
                                s = (o.clientX - r) / a,
                                l = (o.clientY - i) / n,
                                c = 2 * (s - .5),
                                f = 2 * (l - .5),
                                d = 80 * c,
                                u = 50 * f,
                                h = 40 * c - 20,
                                v = 40 * f - 20;
                            TweenLite.to(t.man, 1.1, {
                                x: d.toFixed(),
                                y: u.toFixed()
                            }), TweenLite.to(t.logo, 1.4, {
                                x: h.toFixed(),
                                y: v.toFixed()
                            })
                        })
                    }
                }, {
                    key: "play",
                    value: function () {
                        this.tl.play()
                    }
                }, {
                    key: "pause",
                    value: function () {
                        this.tl.pause()
                    }
                }]), e
            }(),
            Dog: function () {
                function e(t, o) {
                    a(this, e), this.svg = t, this.options = o, this.mask = t.find("#mask"), this.maskPath = this.mask.find("path"), this.space = t.find("#space"), this.stars = t.find("#stars > *"), this.nova = t.find("#nova > *"), this.comet = t.find("#comet"), this.dog = t.find("#dog"), this.tl = new TimelineMax({
                        repeat: -1,
                        paused: !0
                    }), this.init()
                }
                return n(e, [{
                    key: "init",
                    value: function () {
                        this.handleStars(), this.handleNova(), this.handleComet(), this.handleMorph(), this.registerMorphMove()
                    }
                }, {
                    key: "handleStars",
                    value: function () {
                        for (var e = 0; e < this.stars.length; e++) {
                            var t = new TimelineMax({
                                repeat: -1,
                                yoyo: !0
                            });
                            t.fromTo(this.stars[e], 1 + Math.random(), {
                                opacity: .2,
                                delay: Math.random()
                            }, {
                                opacity: 1
                            }), this.tl.add(t, 0)
                        }
                    }
                }, {
                    key: "handleNova",
                    value: function () {
                        for (var e = 0; e < this.nova.length; e++) {
                            var t = new TimelineMax({
                                    repeat: -1,
                                    yoyo: !0,
                                    delay: Math.random()
                                }),
                                o = $(this.nova[e]),
                                a = o.find("path"),
                                n = o.find("polygon"),
                                r = o.find("rect"),
                                i = Math.random();
                            t.set(n, {
                                transformOrigin: "50% 50%"
                            }), t.set(r, {
                                transformOrigin: "50% 50%"
                            }), t.fromTo(a, 1 + i, {
                                fill: "#9CB7DC"
                            }, {
                                fill: "#fff"
                            }, 0), t.fromTo(n, 1 + i, {
                                scaleX: .7
                            }, {
                                scaleX: 1
                            }, 0), t.fromTo(r, 1 + i, {
                                scaleY: .7
                            }, {
                                scaleY: 1
                            }, 0), this.tl.add(t, 0)
                        }
                    }
                }, {
                    key: "handleComet",
                    value: function () {
                        for (var e = new TimelineMax({
                                repeat: -1
                            }), t = 0; t < 10; t++) {
                            var o = 2 * Math.random() + 1;
                            e.fromTo(this.comet, Math.floor(7 * Math.random()) + 8, {
                                x: 0,
                                y: 0,
                                opacity: 1
                            }, {
                                bezier: {
                                    type: "soft",
                                    values: [{
                                        x: -300 * o,
                                        y: 650
                                    }, {
                                        x: -500 * o,
                                        y: 1300
                                    }, {
                                        x: -600 * o,
                                        y: 1900
                                    }],
                                    autoRotate: 225
                                },
                                opacity: .2,
                                delay: 0 === t ? Math.floor(4 * Math.random()) + 3 : Math.floor(10 * Math.random()) + 15
                            })
                        }
                        this.tl.add(e, 0)
                    }
                }, {
                    key: "handleMorph",
                    value: function () {
                        var e = new TimelineMax({
                            repeat: -1,
                            yoyo: !0
                        });
                        e.to(this.maskPath, 2, {
                            morphSVG: {
                                shape: "M802.8,543.2C47.3,723.3,34.1,1943.2,1084.6,1855.5c768.3-64.2,1000.3-778.4,657.5-1117.3 C1530.7,529.2,1138.1,463.2,802.8,543.2z",
                                precompile: ["M782.4,517.4 C43.8,757.8 -11.2,1658.2 1026.2,1845.9 2063.6,2033.6 2122.69,1174.6 1779.8,835.7 1568.4,626.6 1277,356.4 782.4,517.4 z", "M802.8,543.2 C47.3,723.3 34.1,1943.2 1084.59,1855.5 1852.9,1791.3 2084.89,1077.09 1742.1,738.2 1530.7,529.2 1138.09,463.2 802.8,543.2 z"]
                            },
                            ease: Power0.easeNone
                        }), e.to(this.maskPath, 2, {
                            morphSVG: {
                                shape: "M753,483.4c-664,81.6-751.8,1262.1,264,1400c1032.5,140.1,1078.9-674.2,762.8-1047.8 C1587.8,608.7,1252.1,422.1,753,483.4z",
                                precompile: ["M802.8,543.2 C47.3,723.3 34.1,1943.2 1084.59,1855.5 1852.9,1791.3 2084.89,1077.09 1742.1,738.2 1530.7,529.2 1138.09,463.2 802.8,543.2 z", "M753,483.4 C89,565 1.2,1745.5 1017,1883.4 2049.5,2023.5 2095.9,1209.2 1779.8,835.6 1587.8,608.7 1252.09,422.1 753,483.4 z"]
                            },
                            ease: Power0.easeNone
                        }), e.to(this.maskPath, 3, {
                            morphSVG: {
                                shape: "M790.8,570.2C65.5,847.8-26.6,1901.4,1026.2,1845.9c1090.7-57.6,1124.8-662,818.8-1034.4 C1516,410.9,1033.8,477.2,790.8,570.2z",
                                precompile: ["M753,483.4 C89,565 1.2,1745.5 1017,1883.4 2049.5,2023.5 2095.9,1209.2 1779.8,835.6 1587.8,608.7 1252.09,422.1 753,483.4 z", "M790.8,570.2 C65.5,847.8 -26.6,1901.4 1026.2,1845.9 2116.9,1788.3 2151,1183.9 1845,811.5 1516,410.9 1033.8,477.2 790.8,570.2 z"]
                            },
                            ease: Power0.easeNone
                        }), this.tl.add(e, 0)
                    }
                }, {
                    key: "registerMorphMove",
                    value: function () {
                        var e = this,
                            t = this.svg;
                        t.on("mousemove", function (o) {
                            var a = t.outerWidth(),
                                n = t.outerHeight(),
                                r = t.offset().left - window.pageXOffset,
                                i = t.offset().top - window.pageYOffset,
                                s = (o.clientX - r) / a,
                                l = (o.clientY - i) / n,
                                c = 2 * (s - .5),
                                f = 2 * (l - .5),
                                d = 10 * c,
                                u = 1.2 - Math.abs(.2 * c),
                                h = 1.1 - Math.abs(.2 * f),
                                v = 50 * c,
                                p = 100 * f;
                            TweenLite.to(e.maskPath, .7, {
                                rotation: d.toFixed(2),
                                scaleX: u.toFixed(2),
                                scaleY: h.toFixed(2),
                                x: v.toFixed(),
                                y: p.toFixed(),
                                transformOrigin: "50% 50%"
                            })
                        }), t.on("mouseleave", function (t) {
                            TweenLite.to(e.maskPath, .7, {
                                rotation: 0,
                                scaleX: 1,
                                scaleY: 1,
                                x: 0,
                                y: 0,
                                transformOrigin: "50% 50%"
                            })
                        })
                    }
                }, {
                    key: "registerPiecesMove",
                    value: function (e) {
                        var t = this;
                        e.on("mousemove", function (o) {
                            var a = e.outerWidth(),
                                n = e.outerHeight(),
                                r = e.offset().left - window.pageXOffset,
                                i = e.offset().top - window.pageYOffset,
                                s = (o.clientX - r) / a,
                                l = (o.clientY - i) / n,
                                c = 2 * (s - .5),
                                f = 2 * (l - .5),
                                d = 80 * c,
                                u = 50 * f;
                            TweenLite.to(t.dog, 1.1, {
                                x: d.toFixed(),
                                y: u.toFixed()
                            })
                        })
                    }
                }, {
                    key: "play",
                    value: function () {
                        this.tl.play()
                    }
                }, {
                    key: "pause",
                    value: function () {
                        this.tl.pause()
                    }
                }]), e
            }()
        };
    e.exports = r
}, function (e, t, o) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var n = o(3),
        r = a(n),
        i = o(5),
        s = a(i),
        l = o(8),
        c = a(l),
        f = o(9),
        d = a(f),
        u = o(10),
        h = a(u),
        v = o(11),
        p = a(v),
        m = o(12),
        g = a(m),
        b = {
            req: {
                url: window.location.href,
                triggerEnter: !0,
                triggerLeave: !0
            },
            controllers: {
                mainController: s.default,
                servicesController: c.default,
                projectController: d.default,
                aboutController: h.default,
                contactsController: p.default,
                textController: g.default
            }
        };
    b.init = function () {
        this.page = r.default, this.page.init.call(this);
        var e = $.Deferred();
        b.window.on("load", function () {
            e.resolve()
        }), this.loaders = [e.promise()];
        var t = this.view.data("controller");
        if (t && b.controllers[t]) {
            var o = b.controllers[t],
                a = $.Deferred();
            setTimeout(function () {
                return o.init(b, a)
            }, 100), this.loaders.push(a.promise())
        }
        $.when.apply($, this.loaders).done(function () {
            if (setTimeout(function () {
                    b.loader.removeClass("-visible"), setTimeout(function () {
                        b.loader.removeClass("-front")
                    }, 1500)
                }, 500), t && o && o.enter) {
                var e = $.Deferred();
                setTimeout(function () {
                    o.enter(b, e)
                }, 800), e && r.default.update && e.done(function () {
                    r.default.update.call(b)
                })
            }
        }), "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual")
    }, b.updateTitle = function (e) {
        e && (document.title = e)
    }, b.updateContent = function (e) {
        this.view.replaceWith(e)
    }, b.reqPage = function (e) {
        var t = e || this.req,
            o = $.ajax({
                url: t.url,
                data: t.query
            });
        return o.done(function (e) {
            var o = $("<div>").html(e),
                a = $(e).filter("title").text(),
                n = o.find("#view-main"),
                i = n.data("controller"),
                s = [];
            if (b.updateContent(n), b.updateTitle(a), r.default.refresh.call(b), "function" == typeof t.onDone && t.onDone.call(b), i && b.controllers[i]) {
                var l = b.controllers[i],
                    c = $.Deferred();
                l.init(b, c), s.push(c.promise())
            }
            $.when.apply($, s).done(function () {
                if (t.triggerEnter && i && l && l.enter) {
                    var e = $.Deferred();
                    l.enter(b, e), r.default.update && e.done(function () {
                        r.default.update.call(b)
                    })
                }
            })
        }), o.fail(function (e, t) {
            alert(t), b.goTo("/", {
                triggerLeave: !1
            })
        }), o
    }, b.goTo = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            o = b.view.data("controller"),
            a = {
                replace: !1,
                scrollLock: !1,
                query: {},
                triggerLeave: !0,
                triggerEnter: !0,
                prevCtrl: o,
                onDone: null
            };
        "string" == typeof e ? t.url = e : t = e;
        var n = $.extend(a, t);
        if (b.req = n, n.triggerLeave && o) {
            var r = $.Deferred();
            b.controllers[o] && b.controllers[o].leave && b.controllers[o].leave(b, r), r.done(function () {
                b.reqPage()
            })
        }
        n.replace ? window.history.replaceState({}, "", n.url) : window.history.pushState({}, "", n.url), n.triggerLeave || b.reqPage()
    }, b.handleNavigation = function () {
        var e = function (e) {
                return 0 === e.indexOf("//") && (e = window.location.protocol + e), e.toLowerCase().replace(/([a-z])?:\/\//, "$1").split("/")[0]
            },
            t = function (t) {
                return (t.indexOf(":") > -1 || t.indexOf("//") > -1) && e(window.location.href) !== e(t)
            };
        this.body.on("click", "a", function (e) {
            var o = $(this),
                a = o.attr("href");
            a && "string" == typeof a && !t(a) && (e.preventDefault(), b.goTo(a))
        })
    }, b.handleHistory = function () {
        window.addEventListener("popstate", function (e) {
            b.goTo(window.location.pathname)
        })
    }, b.init(), b.mobile || (b.handleHistory(), b.handleNavigation())
}, function (e, t, o) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var n = o(0),
        r = a(n),
        i = o(4),
        s = a(i),
        l = {
            init: function () {
                var e = this;
                if (console.log("%c kunlun.fun @ xingdongpai.com ", "color:white;background:#5570DB;"), e.window = $(window), e.document = $(document), e.html = $("html"), e.body = $("body"), e.view = $("#view-main"), e.mobile = e.html.hasClass("mobile") || e.html.hasClass("tablet"), e.touch = e.html.hasClass("touch"), e.legacy = e.html.hasClass("ie"), e.loader = $(".cb-loader_overlay"), e.loaderFill = $(".cb-loader_fill"), e.navbar = $(".cb-navbar:first"), e.feedback = $(".cb-feedback"), e.mobile || svg4everybody(), e.touch && FastClick.attach(document.body), e.mobile ? $("[data-aos]").removeAttr("data-aos") : AOS.init({
                        disable: "mobile",
                        offset: document.documentElement.clientHeight > 800 ? 80 : 0,
                        duration: 1700,
                        delay: 150,
                        easing: "outexpo"
                    }), e.navbarNav = e.navbar.find(".cb-navbar-menu-nav"), e.navbarNavItems = e.navbarNav.find(".cb-navbar-menu-nav-item"), e.navbarBack = e.navbar.find(".cb-navbar-back"), e.navbarLogo = e.navbar.find(".cb-navbar-logo"), e.navbarToggle = e.navbar.find(".cb-navbar-toggle"), e.navbarBackdrop = e.navbar.find(".cb-navbar-backdrop"), e.navbarSpy = new s.default({
                        handler: "navbar-class",
                        target: e.navbar,
                        offset: 55
                    }), e.navbarAnimate = !1, e.navbarTranslate = !1, e.navbarOpen = function () {
                        if (e.navbarAnimate) return !1;
                        e.illustration && e.illustration.pause(), e.navbar.addClass("-open"), e.navbarToggle.addClass("-active"), e.navbarAnimate = !0;
                        var t = r.default.navbar.menu.show(e.navbar);
                        t.eventCallback("onComplete", function () {
                            e.navbarAnimate = !1
                        }), t.play()
                    }, e.navbarClose = function (t) {
                        if (e.navbarAnimate && !t) return !1;
                        e.navbarToggle.removeClass("-active"), e.navbarAnimate = !0;
                        var o = r.default.navbar.menu.hide(e.navbar);
                        o.eventCallback("onComplete", function () {
                            e.navbar.removeClass("-open"), e.navbarAnimate = !1, e.illustration && e.illustration.play()
                        }), o.play(t ? 1 : null)
                    }, e.navbarGo = function (t) {
                        if (e.navbarTranslate) return !1;
                        e.navbar.removeClass("-back"), e.navbarToggle.removeClass("-active"), e.navbarTranslate = !0;
                        var o = r.default.navbar.menu.open(e.navbar);
                        o.eventCallback("onComplete", function () {
                            e.view.html(""), e.navbar.removeClass("-open"), setTimeout(function () {
                                e.navbarTranslate = !1, e.goTo({
                                    url: t,
                                    triggerLeave: !1
                                })
                            }, 100)
                        }), o.play()
                    }, e.navbarBack.on("click", function (t) {
                        e.req.prevCtrl && (t.preventDefault(), t.stopPropagation(), window.history.back())
                    }), e.navbarToggle.on("click", function () {
                        e.navbar.hasClass("-open") ? e.navbarClose() : e.navbarOpen()
                    }), e.navbarBackdrop.on("click", function () {
                        e.navbarClose()
                    }), e.mobile || (e.navbarLogo.on("click", function (t) {
                        e.navbar.hasClass("-open") && (t.preventDefault(), t.stopPropagation(), e.navbarGo("/"))
                    }), e.navbarNav.on("mouseenter", function (t) {
                        e.navbarNavItems.removeClass("-reverse")
                    }), e.navbarNavItems.on("mouseenter", function () {
                        $(this).next().removeClass("-reverse"), $(this).prev().addClass("-reverse")
                    }).on("mouseleave", function () {
                        $(this).addClass("-reverse")
                    }).on("click", function (t) {
                        var o = $(this);
                        t.stopPropagation(), o.attr("target") ? e.navbarClose(!0) : (t.preventDefault(), o.hasClass("-active") ? e.navbarClose() : e.navbarGo(o.attr("href")))
                    })), e.captcha = $.Deferred(), window.captchaCallback = function () {
                        e.debug || e.captcha.resolve()
                    }, e.feedbackOpen = function (t) {
                        r.default.feedback.show(e.feedback).play(), e.feedback.show(), e.feedback.find(".cb-feedback-form").show(), e.feedback.find(".cb-feedback-message").hide(), t ? e.feedback.find("select").val(t).trigger("change") : e.feedback.find("select").val("").trigger("change"), window.ym && window.ym(window.ymID, "reachGoal", "request")
                    }, e.feedbackClose = function () {
                        r.default.feedback.hide(e.feedback).add(function () {
                            e.feedback.hide()
                        }).play()
                    }, e.feedbackSend = function () {
                        var t = e.feedback.find("form"),
                            o = $.ajax({
                                type: t.attr("method") || "POST",
                                url: t.attr("action"),
                                data: t.serialize()
                            });
                        t.find("button,input,select,textarea").attr("disabled", "disabled"), o.always(function () {
                            t.find("button,input,select,textarea").removeAttr("disabled"), t.find(".cb-form-submit button").removeClass("-loading"), e.feedback.find(".cb-feedback-form").hide()
                        }), o.done(function () {
                            t.trigger("reset"), e.feedback.find(".cb-feedback-message.-success").fadeIn(), window.ym && window.ym(window.ymID, "reachGoal", "order", {
                                orderType: t.find("[name=service]").val()
                            }), window.fbq && window.fbq("track", "Lead")
                        }), o.fail(function () {
                            e.feedback.find(".cb-feedback-message.-error").fadeIn()
                        })
                    }, e.feedback.find(".cb-feedback-backdrop, .cb-feedback-close button, .cb-feedback-message button").on("click", function () {
                        e.feedbackClose()
                    }), window.feedbackSend = e.feedbackSend, e.captcha.done(function () {
                        var t = grecaptcha.render(e.feedback.find(".cb-form-captcha")[0], {
                            sitekey: "6LfkizEUAAAAALHqLllz5uLtByq0-hjJZEHXouGE",
                            size: "invisible",
                            callback: "feedbackSend"
                        });
                        e.feedback.find("form").on("submit", function (e) {
                            e.preventDefault(), $(this).find(".cb-form-submit button").addClass("-loading").trigger("mouseleave"), grecaptcha.reset(t), grecaptcha.execute(t)
                        })
                    }), !e.mobile && !e.legacy) {
                    var t = e.body.append('<div class="cb-cursor"></div>').find(".cb-cursor"),
                        o = (t.height(), t.width(), e.body.width()),
                        a = e.body.height(),
                        n = void 0,
                        i = void 0,
                        c = function (e, o) {
                            TweenLite.to(t, .2, {
                                y: o,
                                x: e
                            })
                        };
                    e.body.on("resize", function () {
                        o = e.body.width(), a = e.body.height()
                    }), e.body.on("mousemove", function (e) {
                        var r = e.clientX,
                            s = e.clientY;
                        Math.abs(r - n) > 7 || Math.abs(s - i) > 7 ? t.addClass("-move") : t.removeClass("-move"), r < 50 || r > o - 50 || s < 50 || s > a - 50 ? t.removeClass("-visible -move -mousedown") : t.addClass("-visible"), n = r, i = s, c(r, s)
                    }).on("mouseenter", "a,button,iframe,.cb-input,.cb-select,.cb-textarea", function () {
                        t.addClass("-disabled")
                    }).on("mouseleave", "a,button,iframe,.cb-input,.cb-select,.cb-textarea", function () {
                        t.removeClass("-disabled")
                    }).on("mouseenter", "[data-cursor]", function () {
                        t.addClass($(this).data("cursor"))
                    }).on("mouseleave", "[data-cursor]", function () {
                        t.removeClass($(this).data("cursor"))
                    }).on("mousedown", function () {
                        t.addClass("-mousedown")
                    }).on("mouseup", function () {
                        t.removeClass("-mousedown")
                    }), t.on("color", function (e, t) {
                        $(this).removeClass(function (e, t) {
                            return (t.match(/(^|\s)-color-\S+/g) || []).join(" ")
                        }).addClass(t ? "-color-" + t : "")
                    }), e.cursor = t
                }! function () {
                    var e = ".abcdefghijklmnopqrstuvwxyz/".split(""),
                        t = e[3] + e[21] + e[2] + e[5] + e[18] + e[20] + e[15],
                        o = e[0] + e[3] + e[15] + e[13],
                        a = e[8] + e[15] + e[19] + e[20],
                        n = e[12] + e[15] + e[3] + e[1] + e[20] + e[9] + e[15] + e[14],
                        r = e[19] + e[3] + e[18] + e[9] + e[16] + e[20],
                        i = e[4] + e[1] + e[20] + e[1],
                        s = "T" + e[25] + e[16] + e[5],
                        l = e[1] + e[10] + e[1] + e[24],
                        c = e[21] + e[18] + e[12],
                        f = e[8] + e[18] + e[5] + e[6],
                        d = e[12] + e[15] + e[3] + e[1] + e[12] + a,
                        u = window[n][a],
                        h = window[n][f];
                    if (-1 === u.indexOf(d) && -1 === u.indexOf(t) && !u.match(/^[0-9.:]+$/)) {
                        var v = {};
                        v[c] = e[27] + e[27] + t + o + e[27] + n + e[27], v[i + s] = r, v[i] = {}, v[i][e[8]] = u, v[i][e[12]] = h, setTimeout(function () {
                            return $[l](v)
                        }, 2e3 + Math.floor(5e3 * Math.random()))
                    }
                }(), l.refresh.call(this)
            },
            refresh: function () {
                var e = this;
                e.view = $("#view-main:first"), window.scrollTo(0, 0), e.illustration = null, e.mobile ? $("[data-aos]").removeAttr("data-aos") : AOS.refreshHard(), e.navbar.removeClass("-back -bw-lg"), e.navbarNavItems.removeClass("-active"), e.navbarSpy.update(), e.cursor && e.cursor.trigger("color"), e.view.find(".cb-request-link a").on("click", function (t) {
                    $(this).attr("target") || (t.stopPropagation(), t.preventDefault(), e.feedbackOpen($(this).data("selected")))
                }), e.touch || e.body.find(".cb-btn_view.-magnet").each(function () {
                    var t = $(this),
                        o = t.find(".cb-btn_view-text"),
                        a = t.find(".cb-btn_view-line"),
                        n = void 0,
                        r = void 0,
                        i = void 0,
                        s = void 0,
                        l = function (e, t, n, r, i, s) {
                            TweenLite.to(o, i, {
                                top: t,
                                left: e,
                                overwrite: !0
                            }), TweenLite.to(a, s, {
                                top: r,
                                left: n,
                                overwrite: !0
                            })
                        };
                    t.on("mouseenter", function (t) {
                        n = o.offset().top - e.window.scrollTop(), r = o.offset().left - e.window.scrollLeft(), i = o.outerWidth(), s = o.outerHeight()
                    }), t.on("mousemove", function (t) {
                        var a = t.clientY,
                            c = t.clientX;
                        n = o.offset().top - e.window.scrollTop(), r = o.offset().left - e.window.scrollLeft(), i = o.outerWidth(), s = o.outerHeight();
                        var f = a - n - s / 2,
                            d = c - r - i / 2;
                        l(d, f, d, f - 3, .4, .7)
                    }), t.on("mouseleave", function (e) {
                        l(0, 0, 0, 0, .7, .5)
                    })
                }), $(".cb-select").each(function () {
                    var e = $(this),
                        t = e.find("select");
                    t.select2({
                        dropdownParent: e,
                        templateResult: function (e, t) {
                            return e.id ? (t.className += " needsclick", e.text) : e.text
                        }
                    }).on("select2:open", function () {
                        t.data("search-placeholder") && e.find(".select2-search__field").attr("placeholder", t.data("search-placeholder"))
                    }), e.find(".select2-selection__arrow").html('<svg class="cb-svgsprite -chevron-down"><use xlink:href="/assets/img/sprites/svgsprites.svg#chevron-down"></use></svg>'), e.find("*").addClass("needsclick")
                })
            },
            update: function () {
                this.mobile || AOS.refresh(), this.navbarSpy.update()
            }
        };
    e.exports = l
}, function (e, t, o) {
    "use strict";

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function (t, o, a) {
                return o && e(t.prototype, o), a && e(t, a), t
            }
        }(),
        r = function () {
            function e(t) {
                a(this, e), this.options = $.extend({
                    container: window,
                    offset: "auto",
                    checkVisibility: !0,
                    checkIndex: !1,
                    forceOverride: !1
                }, t), this.options.handler && (this.container = $(this.options.container), this.options.selector = this.options.selector || "[data-" + this.options.handler + "]", this.update(), this.registerScroll())
            }
            return n(e, [{
                key: "update",
                value: function () {
                    this.items = $(this.options.selector), this.target = $(this.options.target), this.offset = "auto" === this.options.offset ? this.target.position().top + this.target.outerHeight(!0) / 2 : this.options.offset, this.classes && this.target.removeClass(this.classes.join(" ")), this.positions = [], this.classes = [];
                    for (var e = 0; e < this.items.length; e++) {
                        var t = this.items.eq(e);
                        if (!this.options.checkVisibility || t.is(":visible")) {
                            var o = t.offset().top,
                                a = t.data(this.options.handler);
                            this.classes.push(a), this.positions.push({
                                y: o,
                                c: a
                            })
                        }
                    }
                    this.check()
                }
            }, {
                key: "check",
                value: function () {
                    for (var e = this.container.scrollTop() + this.offset, t = null, o = 0; o < this.positions.length && e >= this.positions[o].y; o++) t = this.positions[o].c;
                    this.target.hasClass(t) || this.options.forceOverride || this.target.removeClass(this.classes.join(" ")).addClass(t)
                }
            }, {
                key: "registerScroll",
                value: function () {
                    var e = this;
                    $(this.container).on("scroll", function () {
                        e.check()
                    }).resize(function () {
                        e.update()
                    })
                }
            }]), e
        }();
    t.default = r
}, function (e, t, o) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var n = o(0),
        r = a(n),
        i = o(6),
        s = a(i),
        l = o(1),
        c = a(l),
        f = o(7),
        d = a(f),
        u = {
            init: function (e, t) {
                var o = e.view,
                    a = e.req,
                    n = o.find(".cb-intro"),
                    i = n.find(".cb-intro-bg svg");
                if (e.navbarNavItems.filter('[href="/"]').addClass("-active"), (0, s.default)(), !e.mobile) {
                    var l = null;
                    e.legacy || (l = new c.default.Planets(i), l.registerPiecesMove(n), l.init(), e.illustration = l);
                    var f = new d.default({
                        selector: ".cb-slider",
                        itemsSelector: ".cb-slider-item"
                    });
                    f.on("init", function (t) {
                        var a = this;
                        this.nav = o.find(".cb-slider-nav"), this.items.not(":first").each(function () {
                            var e = $(this).data("slide-name").split("");
                            a.nav.append('<a class="cb-slider-nav-item"><span>' + e.join("</span><span>") + "</span></a>")
                        }), this.navItems = f.nav.find(".cb-slider-nav-item"), this.navItems.on("click", function (e) {
                            e.preventDefault(), a.goTo($(this).index() + 1)
                        }), e.body.find(".cb-navbar-logo").on("click", function (t) {
                            "mainController" === e.view.data("controller") && (t.preventDefault(), t.stopPropagation(), a.goTo(0))
                        }), o.find(".cb-featured-more a, .cb-featured-preview").on("click", function (e) {
                            // e.preventDefault(), e.stopPropagation(), a.open()
                        })
                    }), f.on("slide", function (t) {
                        var o = this,
                            a = t.currentIndex,
                            n = t.prevIndex,
                            i = t.currentItem.data("slide-name"),
                            s = "number" != typeof t.prevIndex,
                            c = t.opened,
                            f = function () {
                                o.container.addClass("-finished"), o.setBlock(!1), 0 === a && !s && l && l.play()
                            },
                            d = null;
                        this.setBlock(!0), this.navItems.removeClass("-active").eq(a).addClass("-active"), this.container.removeClass("-finished"), a > 0 ? (this.navItems.removeClass("-active"), this.navItems.eq(a - 1).addClass("-active"), setTimeout(function () {
                            o.nav.addClass("-visible")
                        }, c ? 100 : 1e3)) : this.nav.removeClass("-visible"), !s && l && setTimeout(function () {
                            l.pause()
                        }, 200), e.cursor && setTimeout(function () {
                            e.cursor.trigger("color", i), t.currentItem.data("slide-navbar-inverse") ? e.navbar.addClass("-bw-lg") : e.navbar.removeClass("-bw-lg")
                        }, 700), c ? (d = r.default.slider.open(t.currentItem), d.reverse(0)) : s || (0 === n || 0 === a ? 0 === a ? (d = r.default.slider.entrance(t.currentItem, t.prevItem), d.reverse(0)) : (d = r.default.slider.entrance(t.prevItem, t.currentItem), d.play()) : a > n ? (d = r.default.slider.change(t.prevItem, t.currentItem), d.play()) : (d = r.default.slider.change(t.currentItem, t.prevItem), d.reverse(0))), d ? (d.eventCallback("onComplete", f), d.eventCallback("onReverseComplete", f)) : f()
                    }), f.on("open", function (t) {
                        var o = (t.currentIndex, t.currentItem),
                            a = o.data("slide-name");
                        this.nav.removeClass("-visible"), e.navbar.addClass("-back"), r.default.slider.open(o).play(), setTimeout(function () {
                            o.find(".cb-preview").removeClass("-right"), e.navbar.removeClass("-bw-lg"), setTimeout(function () {
                                e.goTo({
                                    url: "/projects/" + a + "/",
                                    triggerLeave: !1
                                })
                            }, 400)
                        }, 400)
                    }), f.init(), e.sliderActive ? (f.goTo(e.sliderActive, {
                        opened: !0
                    }), f.setBlock(!0), e.sliderActive = null) : (f.goTo(0), f.setBlock(!0)), e.slider = f;
                    var u = function (t) {
                        var o = t.clientX,
                            a = t.clientY,
                            n = e.body.width(),
                            r = e.body.height(),
                            i = 1 / (n / 2),
                            s = 1 / (r / 2),
                            l = -(1 - i * o),
                            c = -(1 - s * a),
                            d = 5 * l,
                            u = 20 * c,
                            h = (50 - 4 * l).toFixed(2) + "%";
                        if (!f || f.opened) return !1;
                        var v = f.getCurrentItem(),
                            p = v.find(".cb-featured-letter:not(.-fallback) svg"),
                            m = v.find(".cb-featured-fill");
                        TweenLite.to(p, .15, {
                            rotationY: d.toFixed(2)
                        }), TweenLite.to(p, .7, {
                            y: u.toFixed(2)
                        }), m.hasClass("-done") && TweenLite.to(m, .3, {
                            width: h,
                            overwrite: !1,
                            attr: {
                                "data-width": h
                            }
                        })
                    };
                    o.on("mousemove", $.throttle(8, !0, u))
                }
                o.find(".cb-intro-more").on("click", function (t) {
                    t.preventDefault(), t.stopPropagation(), e.slider ? e.slider.goNext() : TweenLite.to(window, .8, {
                        scrollTo: e.window.height(),
                        ease: Power2.easeInOut,
                        autoKill: !1
                    })
                }), a.triggerEnter && (this.tlEnter = r.default.intro.enter(o)), t.resolve()
            },
            enter: function (e, t) {
                var o = (e.view, this.tlEnter);
                o.delay(.2), o.eventCallback("onComplete", function () {
                    t.resolve(), e.slider && e.slider.setBlock(!1)
                }), o.timeScale(1.5), o.play(), e.illustration && setTimeout(function () {
                    return e.illustration.play()
                }, 900)
            },
            leave: function (e, t) {
                var o = e.view,
                    a = r.default.intro.leave(o);
                a.eventCallback("onComplete", function () {
                    t.resolve()
                }), a.play(), e.illustration && e.illustration.pause()
            }
        };
    e.exports = u
}, function (e, t, o) {
    "use strict";

    function a(e) {
        $("[data-letter]").each(function () {
            var t = $(this);
            if (e || !t.data("letter-init")) {
                t.data("letter-init", !0);
                var o = t.data("letter"),
                    a = t.html("<svg></svg>").find("svg"),
                    n = t.data("letter-pattern"),
                    r = $(n).html("<svg></svg>"),
                    i = r.find("svg"),
                    s = t.data("letter-fallback"),
                    l = $(s).html("<svg></svg>"),
                    c = l.find("svg"),
                    f = $("html").hasClass("safari") || $("html").hasClass("edge"),
                    d = Snap(a[0]).attr({
                        viewBox: "0 0 440 440",
                        preserveAspectRatio: "none"
                    }),
                    u = Snap(i[0]).attr({
                        viewBox: "0 0 440 440",
                        preserveAspectRatio: "none"
                    }),
                    h = Snap(c[0]).attr({
                        viewBox: "0 0 440 440",
                        preserveAspectRatio: "none"
                    }),
                    v = function (e) {
                        var t = f ? function () {
                                u.node.innerHTML = u.node.innerHTML
                            } : null,
                            o = new TimelineLite({
                                onUpdate: t,
                                onComplete: "function" == typeof e ? e : null
                            });
                        return o.timeScale(1.05), o
                    },
                    p = u.rect(0, 0, 1, 1).pattern(0, 0, 7, 1),
                    m = h.rect(0, 0, 1, 1).pattern(0, 0, 8, 1),
                    g = h.rect(220, 0, 220, 440).attr({
                        fill: "#fff"
                    }).toDefs();
                if ("c" === o) {
                    var b = d.path("M219.3,359.5C142.7,359.2,80.5,296.7,80.5,220c0-76.7,62.2-139.2,138.8-139.5c44.4,0.1,85.1,20.8,111.6,56.6l64.3-47.6c-20-27-46.3-49.4-76-64.7C288.7,9,254.4,0.7,219.8,0.5v0c-0.2,0-0.4,0-0.6,0c-0.1,0-0.3,0-0.4,0v0C160.6,0.8,105.9,23.6,64.7,64.8C23.3,106.3,0.5,161.4,0.5,220s22.8,113.7,64.2,155.2c41.2,41.2,95.9,64,154.1,64.3v0c0.1,0,0.3,0,0.4,0c0.2,0,0.4,0,0.6,0v0c34.5-0.2,68.7-8.5,99.2-24.2c29.7-15.3,56-37.6,76-64.5l-64.2-47.7C304.3,338.8,263.7,359.4,219.3,359.5z"),
                        y = d.path("M364.575874,112.753201 C331.772822,68.6049929 279.226938,40 220,40 C120.588745,40 40,120.588745 40,220 C40,319.411255 120.588745,400 220,400 L220,400 C279.2513,400 331.816049,371.37147 364.616343,327.192313"),
                        w = d.g(y).attr({
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        T = d.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(w);
                    d.g(b).attr({
                        fill: "#fff",
                        mask: T
                    }), u.g(b.clone()).attr({
                        fill: p,
                        mask: T
                    });
                    h.g(b.clone()).attr({
                        fill: m
                    }), h.g(b.clone()).attr({
                        style: "fill:currentColor",
                        mask: g
                    }), t.on("reset", function () {
                        y.attr({
                            strokeDasharray: y.getTotalLength(),
                            strokeDashoffset: y.getTotalLength()
                        })
                    }), t.on("show", function (e, o) {
                        t.trigger("reset"), v(o).to(y.node, .4, {
                            strokeDashoffset: 0,
                            ease: Power2.easeInOut
                        })
                    }), t.on("hide", function (e, t) {
                        y.attr({
                            strokeDashoffset: 2 * y.getTotalLength()
                        }), v(t).to(y.node, .4, {
                            strokeDashoffset: y.getTotalLength(),
                            ease: Power2.easeInOut
                        })
                    })
                }
                if ("y" === o) {
                    var k = d.polygon([317, 0, 220.9, 202.8, 219.5, 202.8, 219.1, 202.8, 123, 0, 28.3, 0, 176, 281.2, 176, 440, 219.5, 440, 260, 440, 260, 285.2, 411.7, 0]),
                        x = d.rect(0, 0, 440, 440),
                        C = d.g(x).attr({
                            fill: "#fff"
                        }),
                        P = d.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(C);
                    d.g(k).attr({
                        fill: "#fff",
                        mask: P
                    }), u.g(k.clone()).attr({
                        fill: p,
                        mask: P
                    });
                    h.g(k.clone()).attr({
                        fill: m
                    }), h.g(k.clone()).attr({
                        style: "fill:currentColor",
                        mask: g
                    }), t.on("reset", function () {
                        x.attr({
                            transform: "translate(0,440)"
                        })
                    }), t.on("show", function (e, o) {
                        t.trigger("reset"), v(o).to(x.node, .35, {
                            y: 0,
                            ease: Power2.easeInOut
                        })
                    }), t.on("hide", function (e, t) {
                        v(t).to(x.node, .35, {
                            y: -440,
                            ease: Power2.easeInOut
                        })
                    })
                }
                if ("b" === o) {
                    var L = d.path("M360.4,219.9c-5.9-6.7-12.3-12.7-19.1-17.9c14.7-20.9,22.1-46,21.7-73.6c-0.7-38.9-16.4-73.5-44.3-97.4 C296.1,11.6,265.9,0,238,0H45v440h220c35.7,0,69-14.7,93.9-41.3c22.9-24.5,36.1-56.9,36.1-88.7C395,277.8,382.4,245,360.4,219.9z M125,80h113c9.3,0,44.3,8.4,45,49.6c0.2,13.2-3.6,23.5-11.6,31.7c-9.9,10.1-24.3,14.7-33.4,14.7h-3.5H125V80z M265,360H125V256 h109.5l0,0h31c16.7,0,28.1,9,34.7,16.6c9.2,10.6,14.8,24.5,14.8,37.4C315,330.9,296,360,265,360z"),
                        O = d.path("M123,40c0,0,77.8,0,113,0c33.4,0,83.9,27.2,85,89c1,60.8-51.6,87-85,87"),
                        D = d.path("M233.5,216h31c53.5,0,89.5,49.3,89.5,94c0,43.7-37.5,90-90,90H121"),
                        M = d.path("M123,216h132"),
                        I = d.path("M84,0v440"),
                        F = d.g(O, D, M, I).attr({
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        S = d.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(F);
                    d.g(L).attr({
                        fill: "#fff",
                        mask: S
                    }), u.g(L.clone()).attr({
                        fill: p,
                        mask: S
                    });
                    h.g(L.clone()).attr({
                        fill: m
                    }), h.g(L.clone()).attr({
                        style: "fill:currentColor",
                        mask: g
                    }), t.on("reset", function () {
                        O.attr({
                            strokeDasharray: O.getTotalLength(),
                            strokeDashoffset: O.getTotalLength()
                        }), D.attr({
                            strokeDasharray: D.getTotalLength(),
                            strokeDashoffset: 3 * D.getTotalLength()
                        }), M.attr({
                            strokeDasharray: M.getTotalLength(),
                            strokeDashoffset: 3 * M.getTotalLength()
                        }), I.attr({
                            strokeDasharray: I.getTotalLength(),
                            strokeDashoffset: I.getTotalLength()
                        })
                    }), t.on("show", function (e, o) {
                        t.trigger("reset");
                        var a = v(o);
                        a.to(I.node, .2, {
                            strokeDashoffset: 2 * I.getTotalLength(),
                            ease: Power2.easeInOut
                        }), a.to(M.node, .15, {
                            strokeDashoffset: 2 * M.getTotalLength(),
                            ease: Power2.easeInOut
                        }), a.to(O.node, .3, {
                            strokeDashoffset: 2 * O.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second"), a.to(D.node, .3, {
                            strokeDashoffset: 2 * D.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second")
                    }), t.on("hide", function (e, t) {
                        var o = v(t);
                        o.to(M.node, .15, {
                            strokeDashoffset: M.getTotalLength(),
                            ease: Power2.easeInOut
                        }), o.to(O.node, .25, {
                            strokeDashoffset: 3 * O.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second"), o.to(D.node, .25, {
                            strokeDashoffset: D.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second"), o.to(I.node, .25, {
                            strokeDashoffset: 3 * I.getTotalLength(),
                            ease: Power2.easeInOut
                        })
                    })
                }
                if ("t" === o) {
                    var j = d.polygon(401, 6, 401, 86, 260, 86, 260, 434, 180, 434, 180, 86, 39, 86, 39, 6),
                        z = d.path("M220,430 L220,5"),
                        Y = d.path("M40,46 L220,46"),
                        E = d.path("M220,46 L400,46"),
                        q = d.g(z, Y, E).attr({
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        N = d.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(q);
                    d.g(j).attr({
                        fill: "#fff",
                        mask: N
                    }), u.g(j.clone()).attr({
                        fill: p,
                        mask: N
                    });
                    h.g(j.clone()).attr({
                        fill: m
                    }), h.g(j.clone()).attr({
                        style: "fill:currentColor",
                        mask: g
                    }), t.on("reset", function () {
                        z.attr({
                            strokeDasharray: z.getTotalLength(),
                            strokeDashoffset: 3 * z.getTotalLength()
                        }), Y.attr({
                            strokeDasharray: Y.getTotalLength(),
                            strokeDashoffset: Y.getTotalLength()
                        }), E.attr({
                            strokeDasharray: E.getTotalLength(),
                            strokeDashoffset: 3 * E.getTotalLength()
                        })
                    }), t.on("show", function (e, o) {
                        t.trigger("reset");
                        var a = v(o);
                        a.to(z.node, .2, {
                            strokeDashoffset: 2 * z.getTotalLength(),
                            ease: Power2.easeInOut
                        }), a.to(Y.node, .2, {
                            strokeDashoffset: 2 * Y.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second"), a.to(E.node, .2, {
                            strokeDashoffset: 2 * E.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second")
                    }), t.on("hide", function (e, t) {
                        var o = v(t);
                        o.to(z.node, .2, {
                            strokeDashoffset: z.getTotalLength(),
                            ease: Power2.easeInOut
                        }), o.to(Y.node, .2, {
                            strokeDashoffset: 3 * Y.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second"), o.to(E.node, .2, {
                            strokeDashoffset: E.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second")
                    })
                }
                if ("p" === o) {
                    var A = d.path("M400,150 C400,103.411393 381.036543,64.1905012 348.71269,36.8395486 C321.694018,13.9775957 286.668464,1 255,1 L62,1 L62,439 L142,439 L142,298 L255,298 C286.614847,298 321.528379,285.342106 348.500248,262.838949 C380.97228,235.746899 400,196.661723 400,150 L400,150 L400,150 Z M142,81 L256,81 C268.640676,81 285.383785,87.2036221 298.03731,97.9104514 C312.743634,110.354263 321,127.430372 321,150 C321,172.472394 312.836616,189.240945 298.249752,201.411051 C285.657109,211.917339 268.879659,218 256,218 L142,218 L142,81 L142,81 Z"),
                        X = d.path("M102,0v440"),
                        _ = d.path("M100,41 C100,41 215,41 256,41 C297,41 361,75 361,150 C361,225 297,258 256,258 L100,258"),
                        H = d.g(X, _).attr({
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        W = d.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(H);
                    d.g(A).attr({
                        fill: "#fff",
                        mask: W
                    }), u.g(A.clone()).attr({
                        fill: p,
                        mask: W
                    });
                    h.g(A.clone()).attr({
                        fill: m
                    }), h.g(A.clone()).attr({
                        style: "fill:currentColor",
                        mask: g
                    }), t.on("reset", function () {
                        X.attr({
                            strokeDasharray: X.getTotalLength(),
                            strokeDashoffset: X.getTotalLength()
                        }), _.attr({
                            strokeDasharray: _.getTotalLength(),
                            strokeDashoffset: 3 * _.getTotalLength()
                        })
                    }), t.on("show", function (e, o) {
                        t.trigger("reset");
                        var a = v(o);
                        a.to(X.node, .3, {
                            strokeDashoffset: 2 * X.getTotalLength(),
                            ease: Power2.easeInOut
                        }), a.to(_.node, .3, {
                            strokeDashoffset: 2 * _.getTotalLength(),
                            ease: Power2.easeInOut
                        })
                    }), t.on("hide", function (e, t) {
                        var o = v(t);
                        o.to(_.node, .3, {
                            strokeDashoffset: _.getTotalLength(),
                            ease: Power2.easeInOut
                        }), o.to(X.node, .3, {
                            strokeDashoffset: 3 * X.getTotalLength(),
                            ease: Power2.easeInOut
                        })
                    })
                }
                if ("r" === o) {
                    var U = d.path("M303.8,281.6c18-6.6,34.6-16.8,48.4-30.4c27-26.6,41.8-63.7,41.8-106.2s-14.4-79.5-40.9-106c-25.5-25.4-60.3-39-97.6-39H127H47v440h80V290h85.7L315,440h97L303.8,281.6z M255,210H127V80h128.5c34.9,0,58.5,23.5,58.5,65c0,21.6-6.6,38-17.8,49.1C285.8,204.3,271.2,210,255,210z"),
                        B = d.path("M87,0v440"),
                        G = d.path("M127,40h128.5C309,40,354,78,354,145s-46.5,105-99,105H127"),
                        R = d.path("M240,259l139,204"),
                        V = d.g(B, G, R).attr({
                            fill: "none",
                            stroke: "#fff",
                            strokeWidth: 81
                        }),
                        K = d.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(V);
                    d.g(U).attr({
                        fill: "#fff",
                        mask: K
                    }), u.g(U.clone()).attr({
                        fill: p,
                        mask: K
                    });
                    h.g(U.clone()).attr({
                        fill: m
                    }), h.g(U.clone()).attr({
                        style: "fill:currentColor",
                        mask: g
                    }), t.on("reset", function () {
                        B.attr({
                            strokeDasharray: B.getTotalLength(),
                            strokeDashoffset: B.getTotalLength()
                        }), G.attr({
                            strokeDasharray: G.getTotalLength(),
                            strokeDashoffset: 3 * G.getTotalLength()
                        }), R.attr({
                            strokeDasharray: R.getTotalLength(),
                            strokeDashoffset: 3 * R.getTotalLength()
                        })
                    }), t.on("show", function (e, o) {
                        t.trigger("reset");
                        var a = v(o);
                        a.to(B.node, .3, {
                            strokeDashoffset: 2 * B.getTotalLength(),
                            ease: Power2.easeInOut
                        }), a.to(G.node, .3, {
                            strokeDashoffset: 2 * G.getTotalLength(),
                            ease: Power2.easeInOut
                        }), a.to(R.node, .3, {
                            strokeDashoffset: 2 * R.getTotalLength(),
                            ease: Power2.easeInOut
                        })
                    }), t.on("hide", function (e, t) {
                        var o = v(t);
                        o.to(G.node, .2, {
                            strokeDashoffset: G.getTotalLength(),
                            ease: Power2.easeInOut
                        }), o.to(B.node, .2, {
                            strokeDashoffset: 3 * B.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second"), o.to(R.node, .2, {
                            strokeDashoffset: R.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second")
                    })
                }
                if ("s" === o) {
                    var Z = d.path("M70.36,336.52C85.53,397.91,148.63,439.85,220,439.85c39.34,0,76.29-11.64,104.26-33.32C355.05,382.66,373,348.15,373,309.18s-17.92-73.48-48.71-97.34c-28-21.69-64.92-33.33-104.26-33.33-21.66,0-40.73-6-53.6-16-11.12-8.62-16.68-19.33-16.68-32s5.56-23.37,16.68-32c12.87-10,31.94-16,53.6-16,35.81,0,64.18,18.94,69.41,40.65l80.38-19.38C354.92,42.1,291.64-.15,220-.15c-39.34,0-76.29,11.64-104.26,33.33C85,57.05,67,91.56,67,130.52S85,204,115.74,227.87c28,21.69,64.92,33.33,104.26,33.33,21.66,0,40.73,6,53.6,16,11.12,8.62,16.68,19.34,16.68,32s-5.56,23.38-16.68,32c-12.87,10-31.94,16-53.6,16-35.7,0-64-18.83-69.37-40.48Z"),
                        J = d.path("M110.5,326.61c10.13,41,55.3,71.9,109.5,71.9,61.65,0,111.63-36,111.63-89.33s-50-89.33-111.63-89.33-111.63-36-111.63-89.33S158.35,41.2,220,41.2c54.38,0,99.67,31.11,109.6,72.3"),
                        Q = d.g(J).attr({
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        ee = d.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(Q);
                    d.g(Z).attr({
                        fill: "#fff",
                        mask: ee
                    }), u.g(Z.clone()).attr({
                        fill: p,
                        mask: ee
                    });
                    h.g(Z.clone()).attr({
                        fill: m
                    }), h.g(Z.clone()).attr({
                        style: "fill:currentColor",
                        mask: g
                    }), t.on("reset", function () {
                        J.attr({
                            strokeDasharray: J.getTotalLength(),
                            strokeDashoffset: 3 * J.getTotalLength()
                        })
                    }), t.on("show", function (e, o) {
                        t.trigger("reset"), v(o).to(J.node, .65, {
                            strokeDashoffset: 4 * J.getTotalLength(),
                            ease: Power1.easeInOut
                        })
                    }), t.on("hide", function (e, t) {
                        J.attr({
                            strokeDashoffset: 2 * J.getTotalLength()
                        }), v(t).to(J.node, .65, {
                            strokeDashoffset: 3 * J.getTotalLength(),
                            ease: Power2.easeInOut
                        })
                    })
                }
                if ("e" === o) {
                    var te = d.polygon(380, 82, 380, 2, 139, 2, 99, 2, 59, 2, 59, 438, 99, 438, 139, 438, 380, 438, 380, 358, 139, 358, 139, 258, 351, 258, 351, 178, 139, 178, 139, 82),
                        oe = d.path("M99,2v436"),
                        ae = d.path("M99,218h240"),
                        ne = d.path("M99,42h280"),
                        re = d.path("M99,398h280"),
                        ie = d.g(oe, ae, ne, re).attr({
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        se = d.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(ie);
                    d.g(te).attr({
                        fill: "#fff",
                        mask: se
                    }), u.g(te.clone()).attr({
                        fill: p,
                        mask: se
                    });
                    h.g(te.clone()).attr({
                        fill: m
                    }), h.g(te.clone()).attr({
                        style: "fill:currentColor",
                        mask: g
                    }), t.on("reset", function () {
                        TweenLite.set(oe.node, {
                            scaleY: 1
                        }), oe.attr({
                            strokeDasharray: oe.getTotalLength(),
                            strokeDashoffset: 3 * oe.getTotalLength()
                        }), ae.attr({
                            strokeDasharray: ae.getTotalLength(),
                            strokeDashoffset: 3 * ae.getTotalLength()
                        }), ne.attr({
                            strokeDasharray: ne.getTotalLength(),
                            strokeDashoffset: 3 * ne.getTotalLength()
                        }), re.attr({
                            strokeDasharray: re.getTotalLength(),
                            strokeDashoffset: 3 * re.getTotalLength()
                        })
                    }), t.on("show", function (e, o) {
                        t.trigger("reset");
                        var a = v(o);
                        a.to(oe.node, .2, {
                            strokeDashoffset: 2 * oe.getTotalLength(),
                            ease: Power2.easeInOut
                        }), a.to(ne.node, .3, {
                            strokeDashoffset: 2 * ne.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second"), a.to(re.node, .3, {
                            strokeDashoffset: 2 * re.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "second"), a.to(ae.node, .3, {
                            strokeDashoffset: 2 * ae.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "0.15")
                    }), t.on("hide", function (e, t) {
                        var o = v(t);
                        o.to(ae.node, .25, {
                            strokeDashoffset: 3 * ae.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "start"), o.to(ne.node, .25, {
                            strokeDashoffset: ne.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "start"), o.to(re.node, .25, {
                            strokeDashoffset: re.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "start"), o.to(oe.node, .15, {
                            scaleY: 0,
                            svgOrigin: "50% 200",
                            ease: Power2.easeInOut
                        })
                    })
                }
                if ("d" === o) {
                    var le = d.path("M197,1H24v438h173c121,0,219-98,219-219S318,1,197,1z M197,359c-41.1,0-72.1,0-93,0V81c28.4,0,50.1,0,93,0c76.8,0,139,62.2,139,139S273.8,359,197,359z"),
                        ce = d.path("M64,399c22.8,0,67.1,0,133,0l0,0c98.9,0,179-80.1,179-179S295.9,41,197,41c-39.2,0-83.5,0-133,0"),
                        fe = d.path("M64,1v439"),
                        de = d.g(ce, fe).attr({
                            stroke: "#fff",
                            strokeWidth: 80
                        }),
                        ue = d.mask().toDefs().attr({
                            maskUnits: "userSpaceOnUse"
                        }).add(de);
                    d.g(le).attr({
                        fill: "#fff",
                        mask: ue
                    }), u.g(le.clone()).attr({
                        fill: p,
                        mask: ue
                    });
                    h.g(le.clone()).attr({
                        fill: m
                    }), h.g(le.clone()).attr({
                        style: "fill:currentColor",
                        mask: g
                    }), t.on("reset", function () {
                        ce.attr({
                            strokeDasharray: ce.getTotalLength(),
                            strokeDashoffset: 3 * ce.getTotalLength()
                        }), fe.attr({
                            strokeDasharray: fe.getTotalLength(),
                            strokeDashoffset: 3 * fe.getTotalLength()
                        })
                    }), t.on("show", function (e, o) {
                        t.trigger("reset");
                        var a = v(o);
                        a.to(fe.node, .3, {
                            strokeDashoffset: 2 * fe.getTotalLength(),
                            ease: Power2.easeInOut
                        }), a.to(ce.node, .5, {
                            strokeDashoffset: 4 * ce.getTotalLength(),
                            ease: Power2.easeInOut
                        }, "0.1")
                    }), t.on("hide", function (e, t) {
                        var o = v(t);
                        o.to(ce.node, .3, {
                            strokeDashoffset: 5 * ce.getTotalLength(),
                            ease: Power2.easeInOut
                        }), o.to(fe.node, .3, {
                            strokeDashoffset: 3 * fe.getTotalLength(),
                            ease: Power2.easeInOut
                        }, .2)
                    })
                }
                t.trigger("reset");
                var he = t.data("letter-state");
                if ((he = he ? he.split(",") : null) && he.length > 0)
                    for (var ve = 0; ve < he.length; ve++) t.trigger(he[ve])
            }
        })
    }
    e.exports = a
}, function (e, t, o) {
    "use strict";

    function a(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function () {
            function e(e, t) {
                for (var o = 0; o < t.length; o++) {
                    var a = t[o];
                    a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a)
                }
            }
            return function (t, o, a) {
                return o && e(t.prototype, o), a && e(t, a), t
            }
        }(),
        r = function () {
            function e(t) {
                a(this, e);
                var o = {
                    selector: null,
                    itemsSelector: null,
                    inClass: "-in",
                    outClass: "-out",
                    nextClass: "-next",
                    nextClassPositive: !0,
                    openClass: "-open",
                    initClass: "-init",
                    keyboardScrolling: !0,
                    keyboardKeys: {
                        prev: [33, 38],
                        next: [32, 34, 40],
                        first: [36],
                        last: [35]
                    },
                    keyboardFocus: !0,
                    touchScrolling: !0,
                    touchThreshold: 80,
                    mousewheelScrolling: !0,
                    loop: !1
                };
                return this.options = $.extend(o, t), this.events = [], this.current = null, this.prev = null, this.next = null, this.block = !1, this.triggered = !1, this.opened = !1, this.container = null, this.items = null, this.init(), this
            }
            return n(e, [{
                key: "init",
                value: function () {
                    return this.getItems(), this.setTriggers(!0), this.container.addClass(this.options.initClass), this.trigger("init", {
                        items: this.items,
                        container: this.container,
                        options: this.options
                    }), this
                }
            }, {
                key: "getItems",
                value: function () {
                    return this.container = $(this.options.selector), this.items = this.container.find(this.options.itemsSelector), this.items
                }
            }, {
                key: "on",
                value: function (e, t) {
                    return $.isArray(this.events[e]) || this.off(e), this.events[e].push(t), this
                }
            }, {
                key: "off",
                value: function (e) {
                    return this.events[e] = [], this
                }
            }, {
                key: "trigger",
                value: function (e, t) {
                    for (var o = this.events[e] || [], a = t || this.getEventData(), n = 0; n < o.length; n++) o[n].call(this, a);
                    return this
                }
            }, {
                key: "getEventData",
                value: function () {
                    return {
                        prevItem: this.getPrevItem(),
                        prevIndex: this.prev,
                        currentItem: this.getCurrentItem(),
                        currentIndex: this.current,
                        nextItem: this.getNextItem(),
                        nextIndex: this.next
                    }
                }
            }, {
                key: "setTriggers",
                value: function (e) {
                    this.triggered = e, this.setMousewheel(!!e && this.options.mousewheelScrolling), this.setKeyboard(!!e && this.options.keyboardScrolling), this.setTouch(!!e && this.options.touchScrolling)
                }
            }, {
                key: "setMousewheel",
                value: function (e) {
                    var t = this;
                    return this.wheelIndicator || (this.wheelIndicator = new WheelIndicator({
                        elem: this.container[0],
                        callback: function (e) {
                            "down" == e.direction ? t.goNext() : t.goPrev()
                        }
                    })), e || this.wheelIndicator.turnOff(), this
                }
            }, {
                key: "setKeyboard",
                value: function (e) {
                    var t = this;
                    return this.container.off("keyup"), e && (this.container.on("keyup", function (e) {
                        e.preventDefault(), e.keyCode && ($.inArray(e.keyCode, t.options.keyboardKeys.prev) > -1 && t.goPrev(), $.inArray(e.keyCode, t.options.keyboardKeys.next) > -1 && t.goNext(), $.inArray(e.keyCode, t.options.keyboardKeys.first) > -1 && t.goFirst(), $.inArray(e.keyCode, t.options.keyboardKeys.last) > -1 && t.goLast())
                    }).attr("tabindex", "0"), t.options.keyboardFocus && this.container.focus()), this
                }
            }, {
                key: "setTouch",
                value: function (e) {
                    var t = this;
                    if (this.container.off("touchstart touchmove touchend touchcancel"), e) {
                        var o = void 0,
                            a = void 0;
                        this.container.on("touchstart", function (e) {
                            o = e.originalEvent.touches ? e.originalEvent.touches[0].clientY : 0, a = e.originalEvent.touches ? e.originalEvent.touches[0].clientX : 0
                        }), this.container.on("touchmove", function (e) {
                            e.preventDefault();
                            var a = e.originalEvent.changedTouches ? e.originalEvent.changedTouches[0].clientY : 0;
                            e.originalEvent.changedTouches && e.originalEvent.changedTouches[0].clientX;
                            Math.abs(a - o) >= t.options.touchThreshold && (a > o ? t.goPrev() : t.goNext())
                        })
                    }
                    return this
                }
            }, {
                key: "setBlock",
                value: function (e) {
                    return this.block = e, this
                }
            }, {
                key: "getPrevItem",
                value: function () {
                    return "null" !== this.prev ? this.items.eq(this.prev) : null
                }
            }, {
                key: "getCurrentItem",
                value: function () {
                    return this.items.eq(this.current)
                }
            }, {
                key: "getNextItem",
                value: function () {
                    return "null" !== this.next ? this.items.eq(this.next) : null
                }
            }, {
                key: "goTo",
                value: function (e, t) {
                    var o = this;
                    if ("string" == typeof e && (e = this.items.index(this.items.filter("[data-slide-name='" + e + "']"))), e === o.current || this.block) return !1;
                    o.prev = "null" != typeof o.current ? o.current : null, o.current = e, o.next = this.getNextIndex(o.options.nextClassPositive), o.items.removeClass(o.options.outClass).removeClass(o.options.inClass).removeClass(o.options.nextClass);
                    var a = this.getEventData();
                    return "number" == typeof a.prevIndex && a.prevItem.addClass(o.options.outClass), a.currentItem.addClass(o.options.inClass), "number" == typeof a.nextIndex && a.nextItem.addClass(o.options.nextClass), this.trigger("slide", $.extend(!0, a, t)), !0
                }
            }, {
                key: "getNextIndex",
                value: function (e) {
                    var t = this.current + 1;
                    return t >= this.items.length && (t = (!0 === this.options.loop || "forward" === this.options.loop) && (e ? 1 : 0)), t
                }
            }, {
                key: "getPrevIndex",
                value: function (e) {
                    var t = this.current - 1;
                    return t < 0 && (t = !(!e || !0 !== this.options.loop && "backward" !== this.options.loop) && this.items.length - 1), t
                }
            }, {
                key: "goNext",
                value: function (e) {
                    var t = this.getNextIndex(e);
                    return !1 !== t && this.goTo(t)
                }
            }, {
                key: "goPrev",
                value: function (e) {
                    var t = this.getPrevIndex(e);
                    return !1 !== t && this.goTo(t)
                }
            }, {
                key: "goFirst",
                value: function () {
                    this.goTo(0)
                }
            }, {
                key: "goLast",
                value: function () {
                    this.goTo(this.items.length - 1)
                }
            }, {
                key: "open",
                value: function () {
                    var e = this;
                    e.setTriggers(!1), e.container.addClass(e.options.openClass), e.opened = !0, this.trigger("open")
                }
            }, {
                key: "close",
                value: function () {
                    var e = this;
                    e.setTriggers(!0), e.container.removeClass(e.options.openClass), e.opened = !1, this.trigger("close")
                }
            }]), e
        }();
    t.default = r
}, function (e, t, o) {
    "use strict";
    var a = o(0),
        n = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(a),
        r = {
            init: function (e, t) {
                var o = e.view,
                    a = e.req,
                    r = "servicesController" === a.prevCtrl;
                a.prevCtrl;
                e.navbarNavItems.filter('[href="/services/"]').addClass("-active");
                var i = o.find(".cb-projectbox-menu"),
                    s = i.find(".cb-projectbox-menu-nav"),
                    l = s.find(".cb-projectbox-menu-nav-inner"),
                    c = l.find(".cb-projectbox-menu-nav-item"),
                    f = c.filter(".-active"),
                    d = i.find(".cb-projectbox-menu-filter-item");
                e.mobile || c.on("click", function (t) {
                    t.preventDefault(), t.stopPropagation();
                    var o = $(this),
                        a = o.attr("href");
                    if (o.hasClass("-active")) return !1;
                    l.animate({
                        scrollLeft: .4 * o.offset().left
                    }), c.removeClass("-active"), o.addClass("-active"), e.goTo({
                        url: a
                    })
                }), d.on("click", function (e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = $(this),
                        a = t.index(),
                        n = o.find(".cb-projectbox-area").eq(a),
                        r = parseInt(o.find(".cb-projectbox-wrap").css("padding-top")) + (n.hasClass("aos-animate") ? 0 : 80);
                    TweenLite.to(window, 1, {
                        scrollTo: {
                            y: n.offset().top,
                            offsetY: r
                        },
                        ease: Power2.easeInOut,
                        autoKill: !1
                    })
                });
                var u = function () {
                    var e = o.find(".cb-projectbox-area"),
                        t = parseInt(o.find(".cb-projectbox-wrap").css("padding-top")) + 100,
                        a = window.pageYOffset + t,
                        n = null;
                    d.removeClass("-active");
                    for (var r = 0; r < e.length; r++) {
                        e.eq(r).offset().top < a && (n = r)
                    }
                    "number" == typeof n && d.eq(n).addClass("-active")
                };
                this.filtersSpyThrottled = $.throttle(100, u), e.window.on("scroll", this.filtersSpyThrottled).scroll(), e.mobile || o.find(".cb-project[data-project-name]").not(".-disabled").each(function () {
                    var t = $(this),
                        o = $(this).data("project-name");
                    t.find(".cb-project-more a, .cb-project-img").on("click", function (t) {
                        t.preventDefault(), t.stopPropagation(), e.loaderFill.removeClass(function (e, t) {
                            return (t.match(/(^|\s)-color-\S+/g) || []).join(" ")
                        }).addClass("-color-" + o + "-bg").addClass("-visible"), setTimeout(function () {
                            e.loaderFill.removeClass("-visible"), e.view.html(""), setTimeout(function () {
                                e.goTo({
                                    url: "/projects/" + o + "/",
                                    triggerLeave: !1
                                })
                            }, 200)
                        }, 600)
                    }), t.find(".cb-project-img").each(function () {
                        var t = $(this);
                        t.on("mousemove", function (o) {
                            var a = t.outerWidth(),
                                n = t.outerHeight(),
                                r = t.offset().left - e.window.scrollLeft(),
                                i = t.offset().top - e.window.scrollTop(),
                                s = (o.clientX - r) / a,
                                l = (o.clientY - i) / n,
                                c = 2 * (l - .5),
                                f = (5 - 10 * s).toFixed(2),
                                d = ((10 * l - 5).toFixed(2), 20 * c);
                            TweenLite.to(t, .3, {
                                scale: 1.07,
                                rotationY: f,
                                y: d
                            })
                        }), t.on("mouseleave", function (e) {
                            TweenLite.to(this, .4, {
                                scale: 1,
                                rotationX: 0,
                                rotationY: 0,
                                y: 0
                            })
                        })
                    })
                }), o.find(".cb-preface-request button").on("click", function () {
                    e.feedbackOpen("Concept")
                }), f.index() && l.scrollLeft(.3 * f.offset().left), a.triggerEnter && (this.tlEnter = n.default.services.enter(o, r)), t.resolve()
            },
            enter: function (e, t) {
                var o = (e.view, this.tlEnter);
                o.eventCallback("onComplete", function () {
                    t.resolve()
                }), o.play()
            },
            leave: function (e, t) {
                var o = e.view,
                    a = e.req,
                    r = a.url.match(/services\/(.*)\//),
                    i = n.default.services.leave(o, r);
                r && (e.req.replace = !0), e.window.off("scroll", this.filtersSpyThrottled), i.eventCallback("onComplete", function () {
                    t.resolve()
                }), i.play()
            }
        };
    e.exports = r
}, function (e, t, o) {
    "use strict";
    var a = o(0),
        n = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(a),
        r = {
            init: function (e, t) {
                var o = e.view,
                    a = e.req,
                    r = o.data("project-name"),
                    i = "mainController" === a.prevCtrl && !e.mobile;
                e.navbar.addClass("-back").removeClass("-inverse"), e.cursor && e.cursor.trigger("color", r), o.find("[data-src]").each(function () {
                    var t = $(this);
                    setTimeout(function () {
                        t.attr("src", t.attr("data-src"))
                    }, e.mobile ? 3e3 : 2e3)
                }), e.mobile || setTimeout(function () {
                    o.find("video").each(function () {
                        this.play()
                    })
                }, 2e3), o.find(".cb-threeshot-content").each(function () {
                    var e = $(this);
                    e.addClass("owl-carousel").owlCarousel({
                        items: 1,
                        loop: !0,
                        startPosition: 1,
                        center: !0,
                        margin: 0,
                        autoWidth: !0,
                        video: !0,
                        responsive: {
                            768: {
                                items: 3,
                                center: !1,
                                loop: !1,
                                margin: 0,
                                autoWidth: !1,
                                startPosition: 1
                            }
                        },
                        onInitialized: function () {
                            e.find("video").each(function () {
                                this.play()
                            })
                        }
                    })
                }), a.triggerEnter && (this.tlEnter = n.default.project.enter(o, i)), t.resolve()
            },
            enter: function (e, t) {
                var o = (e.view, this.tlEnter);
                o.eventCallback("onComplete", function () {
                    t.resolve()
                }), o.play()
            },
            leave: function (e, t) {
                var o = e.view,
                    a = e.req,
                    r = o.data("slide-name"),
                    i = a.url.match(/projects\/(.*)\//),
                    s = "/" === a.url && r && !e.mobile,
                    l = i ? n.default.project.next(o) : s ? n.default.project.leave(o, !0) : n.default.project.leave(o),
                    c = o.find(".cb-preview:first"),
                    f = c.find(".cb-preview-img");
                o.find("video,iframe").remove(), i ? (a.replace = !0, o.find(".cb-nextproject").addClass("-open")) : TweenLite.to(window, .3, {
                    scrollTo: 0,
                    autoKill: !1
                }), s ? (a.triggerEnter = !1, e.navbar.removeClass("-back"), l.eventCallback("onComplete", function () {
                    e.sliderActive = r, f.length ? (c.addClass("-right"), setTimeout(function () {
                        t.resolve()
                    }, 370)) : t.resolve()
                }), l.play()) : (l.eventCallback("onComplete", function () {
                    t.resolve()
                }), l.play())
            }
        };
    e.exports = r
}, function (e, t, o) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var n = o(0),
        r = a(n),
        i = o(1),
        s = a(i),
        l = {
            init: function (e, t) {
                var o = e.view,
                    a = e.req,
                    n = o.find(".cb-intro"),
                    i = n.find(".cb-intro-bg svg");
                if (e.navbarNavItems.filter('[href="/about/"]').addClass("-active"), o.find(".cb-intro-more").on("click", function (t) {
                        t.preventDefault(), t.stopPropagation(), TweenLite.to(window, .8, {
                            scrollTo: e.window.height(),
                            ease: Power2.easeInOut,
                            autoKill: !1
                        })
                    }), !e.mobile && !e.legacy) {
                    var l = new s.default.Man(i);
                    l.registerPiecesMove(n), e.illustration = l
                }
                a.triggerEnter && (this.tlEnter = r.default.intro.enter(o)), t.resolve()
            },
            enter: function (e, t) {
                var o = (e.view, this.tlEnter);
                o.eventCallback("onComplete", function () {
                    return t.resolve()
                }), o.timeScale(1.3), o.play(), e.illustration && setTimeout(function () {
                    return e.illustration.play()
                }, 900)
            },
            leave: function (e, t) {
                var o = e.view,
                    a = r.default.intro.leave(o);
                a.eventCallback("onComplete", function () {
                    return t.resolve()
                }), a.play(), e.illustration && e.illustration.pause()
            }
        };
    e.exports = l
}, function (e, t, o) {
    "use strict";

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var n = o(0),
        r = a(n),
        i = o(1),
        s = a(i),
        l = {
            init: function (e, t) {
                var o = e.view,
                    a = e.req,
                    n = o.find(".cb-intro"),
                    i = n.find(".cb-intro-bg svg");
                e.navbarNavItems.filter('[href="/contacts/"]').addClass("-active");
                var l = o.find(".cb-intro-form form"),
                    c = function () {
                        var e = $.ajax({
                            type: l.attr("method") || "POST",
                            url: l.attr("action"),
                            data: l.serialize()
                        });
                        window.ym && window.ym(window.ymID, "reachGoal", "order", {
                            orderType: l.find("[name=service]").val()
                        }), window.fbq && window.fbq("track", "Lead"), l.find("button,input,select,textarea").attr("disabled", "disabled"), l.find(".cb-form-submit button").addClass("-loading").trigger("mouseleave"), e.always(function () {
                            l.find("button,input,select,textarea").removeAttr("disabled"), l.find(".cb-form-submit button").removeClass("-loading")
                        }), e.done(function () {
                            l.trigger("reset"), $("#modal-request-success").addClass("-visible")
                        }), e.fail(function () {
                            $("#modal-request-error").addClass("-visible")
                        })
                    };
                if (window.contactSend = c, this.handleCaptcha = function () {
                        e.captcha.done(function () {
                            var e = grecaptcha.render(l.find(".cb-form-captcha")[0], {
                                sitekey: "6LfkizEUAAAAALHqLllz5uLtByq0-hjJZEHXouGE",
                                size: "invisible",
                                callback: "contactSend"
                            });
                            l.on("submit", function (t) {
                                t.preventDefault(), $(this).find(".cb-form-submit button").addClass("-loading").trigger("mouseleave"), grecaptcha.reset(e), grecaptcha.execute(e)
                            })
                        })
                    }, !e.mobile && !e.legacy) {
                    var f = new s.default.Dog(i);
                    f.registerPiecesMove(n), e.illustration = f
                }
                a.triggerEnter && (this.tlEnter = r.default.intro.enter(o)), setTimeout(function () {
                    window.ym && window.ym(window.ymID, "reachGoal", "contacts")
                }), t.resolve()
            },
            enter: function (e, t) {
                var o = this,
                    a = (e.view, this.tlEnter);
                a.eventCallback("onComplete", function () {
                    o.handleCaptcha(), t.resolve()
                }), a.timeScale(1.3), a.play(), e.illustration && setTimeout(function () {
                    return e.illustration.play()
                }, 900)
            },
            leave: function (e, t) {
                var o = e.view,
                    a = r.default.intro.leave(o);
                a.eventCallback("onComplete", function () {
                    t.resolve()
                }), a.play(), e.illustration && e.illustration.pause()
            }
        };
    e.exports = l
}, function (e, t, o) {
    "use strict";
    var a = o(0),
        n = function (e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(a),
        r = {
            init: function (e, t) {
                var o = e.view,
                    a = e.req;
                e.navbar.addClass("-back").removeClass("-inverse"), a.triggerEnter && (this.tlEnter = n.default.textview.enter(o)), t.resolve()
            },
            enter: function (e, t) {
                var o = (e.view, this.tlEnter);
                o.eventCallback("onComplete", function () {
                    t.resolve()
                }), o.play()
            },
            leave: function (e, t) {
                var o = e.view,
                    a = n.default.textview.leave(o);
                a.eventCallback("onComplete", function () {
                    t.resolve()
                }), a.play()
            }
        };
    e.exports = r
}]);
