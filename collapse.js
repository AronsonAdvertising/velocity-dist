const mobile = document.querySelector(".mobile");
if (!mobile) {
  if ("undefined" == typeof jQuery)
    throw new Error("Bootstrap's JavaScript requires jQuery");
  !(function () {
    "use strict";
    var t = jQuery.fn.jquery.split(" ")[0].split(".");
    if (
      (t[0] < 2 && t[1] < 9) ||
      (1 == t[0] && 9 == t[1] && t[2] < 1) ||
      3 < t[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4"
      );
  })(),
    (function (a) {
      "use strict";
      function i(t) {
        var e =
          t.attr("data-target") ||
          ((e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
        return a(document).find(e);
      }
      function n(s) {
        return this.each(function () {
          var t = a(this),
            e = t.data("bs.collapse"),
            i = a.extend({}, o.DEFAULTS, t.data(), "object" == typeof s && s);
          !e && i.toggle && /show|hide/.test(s) && (i.toggle = !1),
            e || t.data("bs.collapse", (e = new o(this, i))),
            "string" == typeof s && e[s]();
        });
      }
      var o = function (t, e) {
        (this.$element = a(t)),
          (this.options = a.extend({}, o.DEFAULTS, e)),
          (this.$trigger = a(
            '[data-toggle="collapse"][href="#' +
              t.id +
              '"],[data-toggle="collapse"][data-target="#' +
              t.id +
              '"]'
          )),
          (this.transitioning = null),
          this.options.parent
            ? (this.$parent = this.getParent())
            : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
          this.options.toggle && this.toggle();
      };
      (o.VERSION = "3.4.1"),
        (o.TRANSITION_DURATION = 350),
        (o.DEFAULTS = { toggle: !0 }),
        (o.prototype.dimension = function () {
          return this.$element.hasClass("width") ? "width" : "height";
        }),
        (o.prototype.show = function () {
          if (!this.transitioning && !this.$element.hasClass("in")) {
            var t =
              this.$parent &&
              this.$parent.children(".panel").children(".in, .collapsing");
            if (
              !(t && t.length && (s = t.data("bs.collapse")) && s.transitioning)
            ) {
              var e = a.Event("show.bs.collapse");
              if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
                t &&
                  t.length &&
                  (n.call(t, "hide"), s || t.data("bs.collapse", null));
                var i = this.dimension();
                this.$element
                  .removeClass("collapse")
                  .addClass("collapsing")
                  [i](0)
                  .attr("aria-expanded", !0),
                  this.$trigger
                    .removeClass("collapsed")
                    .attr("aria-expanded", !0),
                  (this.transitioning = 1);
                var s = function () {
                  this.$element
                    .removeClass("collapsing")
                    .addClass("collapse in")
                    [i](""),
                    (this.transitioning = 0),
                    this.$element.trigger("shown.bs.collapse");
                };
                if (!a.support.transition) return s.call(this);
                t = a.camelCase(["scroll", i].join("-"));
                this.$element
                  .one("bsTransitionEnd", a.proxy(s, this))
                  .emulateTransitionEnd(o.TRANSITION_DURATION)
                  [i](this.$element[0][t]);
              }
            }
          }
        }),
        (o.prototype.hide = function () {
          if (!this.transitioning && this.$element.hasClass("in")) {
            var t = a.Event("hide.bs.collapse");
            if ((this.$element.trigger(t), !t.isDefaultPrevented())) {
              var e = this.dimension();
              this.$element[e](this.$element[e]())[0].offsetHeight,
                this.$element
                  .addClass("collapsing")
                  .removeClass("collapse in")
                  .attr("aria-expanded", !1),
                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                (this.transitioning = 1);
              t = function () {
                (this.transitioning = 0),
                  this.$element
                    .removeClass("collapsing")
                    .addClass("collapse")
                    .trigger("hidden.bs.collapse");
              };
              return a.support.transition
                ? void this.$element[e](0)
                    .one("bsTransitionEnd", a.proxy(t, this))
                    .emulateTransitionEnd(o.TRANSITION_DURATION)
                : t.call(this);
            }
          }
        }),
        (o.prototype.toggle = function () {
          this[this.$element.hasClass("in") ? "hide" : "show"]();
        }),
        (o.prototype.getParent = function () {
          return a(document)
            .find(this.options.parent)
            .find(
              '[data-toggle="collapse"][data-parent="' +
                this.options.parent +
                '"]'
            )
            .each(
              a.proxy(function (t, e) {
                e = a(e);
                this.addAriaAndCollapsedClass(i(e), e);
              }, this)
            )
            .end();
        }),
        (o.prototype.addAriaAndCollapsedClass = function (t, e) {
          var i = t.hasClass("in");
          t.attr("aria-expanded", i),
            e.toggleClass("collapsed", !i).attr("aria-expanded", i);
        });
      var t = a.fn.collapse;
      (a.fn.collapse = n),
        (a.fn.collapse.Constructor = o),
        (a.fn.collapse.noConflict = function () {
          return (a.fn.collapse = t), this;
        }),
        a(document).on(
          "click.bs.collapse.data-api",
          '[data-toggle="collapse"]',
          function (t) {
            var e = a(this);
            e.attr("data-target") || t.preventDefault();
            (t = i(e)), (e = t.data("bs.collapse") ? "toggle" : e.data());
            n.call(t, e);
          }
        );
    })(jQuery);
}
