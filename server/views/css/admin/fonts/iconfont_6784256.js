;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="yypt-icon-right" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M346.572832 893.846708c-6.771217 0-13.476943-2.349511-18.61394-7.070023-10.259668-9.348925-10.259668-24.524556 0-33.883715L703.835631 510.090511 327.958892 167.219489c-10.259668-9.360182-10.259668-24.535813 0-33.884738 10.273994-9.360182 26.89044-9.360182 37.163411 0l394.477376 359.77297c10.260691 9.360182 10.260691 24.534789 0 33.895995L365.122303 886.775662C359.985306 891.497197 353.27958 893.846708 346.572832 893.846708L346.572832 893.846708z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="yypt-icon-close" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128l-265.344 263.936-263.04-263.84C236.64 191.584 216.384 191.52 203.84 204 191.328 216.48 191.296 236.736 203.776 249.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248 6.24 6.272 14.464 9.44 22.688 9.44 8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408 8.192 0 16.352-3.136 22.592-9.344 12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)