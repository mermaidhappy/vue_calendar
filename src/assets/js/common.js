import FastClick from './fastclick';

//将body作为fastclick的载体，初始化fastclick
window.addEventListener(
  'load',
  function () {
    FastClick.attach(document.body);
  },
  false
);

//根据浏览器可视区域宽度动态设置HTML字体大小，以实现移动端响应式布局
document.documentElement.style.fontSize =
  document.documentElement.clientWidth / 37.5 + 'px';

//修复移动端多指触控的问题
window.addEventListener(
  'touchmove',
  function (e) {
    e.touches.length > 1 && e.preventDefault();
  },
  false
);
