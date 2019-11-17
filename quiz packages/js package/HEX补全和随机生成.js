function colorPad(color) {
  var reg = /^#?([0-9a-f]{1,3}|[0-9a-f]{6})$/i;
  if (reg.test(color)) {
      return color.replace(reg, function (all, $1) {
          var hex = '';
          if ($1.length === 3) {
              hex = $1.split('').map(function (el) {
                  return el.repeat(2);
              }).join('')
          } else {
              hex = $1.repeat(6 / $1.length);
          }
          return '#' + hex.toLowerCase();
      })
  } else {
      return '#000000'
  }
}


function colorRange(a, b) {
  var _color2Int = str => parseInt(colorPad(str).slice(1), 16);
  var _random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  return (
    "#" +
    _random(_color2Int(a), _color2Int(b))
      .toString(16)
      .padStart(6, "0")
  );
}


// 题目测试： http://quiz.xiliz.com/qunit39.html
