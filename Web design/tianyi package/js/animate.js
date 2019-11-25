$(function () {
  var index_div_pro = [{
                 sx: 0,
                 sy: 0,
                 mw: 3,
                 mh: 1,
                 bx: 8.4,
                 by: 10.4,
                 rx: -0.6
         },
         {
                 sx: 35,
                 sy: 0,
                 mw: 3,
                 mh: 0.5,
                 bx: 6.4,
                 by: 8.4,
                 rx: -0.1
         },
         {
                 sx: 785,
                 sy: 90,
                 mw: 0.3,
                 mh: 0.1,
                 bx: 6.5,
                 by: 7.4,
                 rx: -0.1
         }];
         
         var ePageX = null;
         var ePageY = null;
         
         function getMousePos(expression) {
                 if (ePageX == null || ePageY == null) return null;
                 var _x = $(expression).position().left;
                 _x += ePageX - $(expression).parent().position().left;
                 var _y = $(expression).position().top;
                 _y += ePageY - $(expression).parent().position().top;
                 return {
                         x: _x,
                         y: _y
                 }
         };
         
         var index_xh = setInterval(function () {
                 for (var i = 0; i < 3; i++) {
                         var mousepos = getMousePos("#indexg" + i);
                         if (mousepos != null) {
                                 var left = parseInt($("#indexg" + i).css("left"));
                                 var l = left + (index_div_pro[i].sx + index_div_pro[i].mw - (mousepos.x - 100) / index_div_pro[i].bx * index_div_pro[i].rx - left) * 0.2;
                                 var top = parseInt($("#indexg" + i).css("top"));
                                 var t = top + (index_div_pro[i].sy + index_div_pro[i].mh - (mousepos.y - 100) / index_div_pro[i].by - top) * 0.2;
                                 $("#indexg" + i).css({
                                         left: l,
                                         top: t
                                 })
                         }
                 }
         },
         15);
         
         $("body").mousemove(function (event) {
                 event = event || window.event;
                 ePageX = event.pageX;
                 ePageY = event.pageY;
         });
 
 
});