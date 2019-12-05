!(function(window) {
	/* 设计图文档宽度 */
	var docWidth = 750
	var doc = window.document,
	  docEl = doc.documentElement,
	  resizeEvt =
	    'orientationchange' in window ? 'orientationchange' : 'resize'
	
	var recalc = (function refreshRem() {
	  var clientWidth = docEl.getBoundingClientRect().width
	
	  /* 8.55：小于320px不再缩小，11.2：大于420px不再放大 */
	  docEl.style.fontSize =
	    Math.max(Math.min(20 * (clientWidth / docWidth), 11.2), 8.55) * 5 +
	    'px'
	
	  return refreshRem
	})()

	window.addEventListener(resizeEvt, recalc, false)
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(window)
