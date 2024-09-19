let $x = 10;
var _y = 15;

if ($x > 5) {
  var _y = 25;
  let $x = 20;
  console.log({$x});
  console.log({_y});
}
console.log({$x});
console.log({_y});



