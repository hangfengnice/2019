// toCamelCase:
function toCamelCase(str) {
  let reg = /\-(\w)/g;
  return str.replace(reg, function($0, $1) {
    return $1.toUpperCase();
  });
}
console.log(toCamelCase("hello-world-day-day-up"));

// toDashJoin:
function toDashJoin(str) {
  let reg = /([A-Z])/g;
  return str.replace(reg, function($0, $1) {
    return "-" + $1.toLowerCase();
  });
}
console.log(toDashJoin("helloWorldDayDayUp"));

// toCapitalize:
function toCapitalize(str) {
  let reg = /(\s+|^)(\w)/g;
  return str.replace(reg, function($0, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}
console.log(toCapitalize("hello world day day up"));

// toBetterUrl:
function toBetterUrl(str) {
  return str.toLowerCase().replace(/\s+/g, "-");
}
console.log(toBetterUrl("Hello world day day up"));

// 测试地址： http://quiz.xiliz.com/qunit40.html
