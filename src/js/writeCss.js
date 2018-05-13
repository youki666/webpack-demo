'use strict';

!function () {
  var duration = 50;
  $('.actions').on('click', 'button', function (e) {
    var $button = $(e.currentTarget); // button
    var speed = $button.attr('data-speed');
    $button.addClass('active').siblings('.active').removeClass('active');
    switch (speed) {
      case 'slow':
        duration = 50;
        break;
      case 'normal':
        duration = 25;
        break;
      case 'fast':
        duration = 1;
        break;
    }
  });
  function writeCode(prefix, code, fn) {
    var container = document.querySelector('#code');
    var styleTag = document.querySelector('#styleTag');
    var n = 0;
    var id = void 0;
    id = setTimeout(function run() {
      n += 1;
      container.innerHTML = code.substring(0, n);
      container.innerHTML = Prism.highlight(prefix + code.slice(0, n), Prism.languages.css);

      styleTag.innerHTML = code.substring(0, n);
      container.scrollTop = container.scrollHeight;
      if (n < code.length) {
        id = setTimeout(run, duration);
      } else {
        fn && fn.call();
      }
    }, duration);
  }
  var code = '\n\n/*\u76AE\u5361\u4E18\u7684\u76AE*/\n#pikachu {\n    position: absolute;\n    width: 4.2em;\n    height: 2.35em;\n     left:50%;\n     top:50%;\n     -webkit-transform:translateY(-50%) translateX(-50%);\n     -moz-transform:translateY(-50%) translateX(-50%);\n     -ms-transform:translateY(-50%) translateX(-50%);\n     transform:translateY(-50%) translateX(-50%);\n  }\n  /*\u76AE\u5361\u4E18\u7684\u773C*/\n  .eye {\n    width: .57em;\n    height: .57em;\n    border: .03em solid black;\n    background: #2e2e2e;\n    border-radius: 100%;\n    position: absolute;\n    margin-left: .6em;\n  }\n  .eye:after {\n    width: .25em;\n    height: .25em;\n    border: .03em solid black;\n    background: #fff;\n    content: \'\';\n    display: block;\n    position: absolute;\n    border-radius: 100%;\n    margin-left: .07em;\n    margin-top: -.02em;\n  }\n  .eye.right {\n    right: .6em;\n  }\n  /*\u76AE\u5361\u4E18\u7684\u9F3B\u5B50*/\n  .nose {\n    position: absolute;\n    margin: .3em calc(50% - .11em);\n    margin-top: .38em;\n    width: 0;\n    height: 0;\n     z-index: 1; /* Thanks for the solution to @440design */\n    border-top:.09em solid black;\n    border-left:.11em solid transparent;\n    border-right:.11em solid transparent;\n     box-shadow: 0 -.01em 0 black;\n  }\n  .nose:before {\n    content: \'\';\n    display: block;\n    position: absolute;\n    width: .22em;\n    height: .05em;\n    background: black;\n    border-top-left-radius: .11em .05em;\n    border-top-right-radius: .11em .05em;\n    margin-top: -.14em;\n    margin-left: -.11em;\n  }\n  .nose:hover {\n    -webkit-animation:nose .23s infinite linear;\n    -moz-animation:nose .23s infinite;\n    -ms-animation:nose .23s infinite;\n    animation:nose .23s infinite linear;\n  }\n  /*\u76AE\u5361\u4E18\u7684\u5927\u5634\u5DF4*/\n  .ridiculousMouth {\n    position: absolute;\n    width: 2.28em;\n    height: 1.8em;\n    margin-top: .65em;\n    margin-left: calc(50% - 1.18em);\n    overflow: hidden;\n  }\n  .ridiculousMouth:after {\n    content: \'\';\n    display: block;\n    position: absolute;\n    width: .8em;\n    height: .25em;\n    background: #FFE600;\n    border: .03em solid black;\n    border-top: none;\n    border-left: none;\n    right: .25em;\n    top: -.05em;\n    -webkit-transform:rotate(25deg);\n    -moz-transform:rotate(25deg);\n    -ms-transform:rotate(25deg);\n    transform:rotate(25deg);\n    border-bottom-right-radius: .6em .3em;\n    box-shadow: 0 -.1em 0 #FFE600, -.05em -.03em 0 #FFE600;\n  }\n  .ridiculousMouth:before {\n    content: \'\';\n    display: block;\n    position: absolute;\n    width: .8em;\n    height: .25em;\n    background: #FFE600;\n    border: .03em solid black;\n    border-top: none;\n    border-right: none;\n    left: .35em;\n    top: -.05em;\n    -webkit-transform:rotate(-25deg);\n    -moz-transform:rotate(-25deg);\n    -ms-transform:rotate(-25deg);\n    transform:rotate(-25deg);\n    border-bottom-left-radius: .6em .3em;\n    box-shadow: 0 -.1em 0 #FFE600, .05em -.03em 0 #FFE600;\n    z-index: 1;\n  }\n  .ridiculousMouth > div {\n    position: absolute;\n    background: #FF485F;\n    width: 2.28em;\n    height: 8em;\n    border: .04em solid black;\n    border-bottom-left-radius: 1.18em 8em;\n    border-bottom-right-radius: 1.18em 8em;\n    margin-top: -6.37em;\n    overflow: hidden;\n  }\n  .ridiculousMouth > div:after {\n    content: \'\';\n    position: absolute;\n    display: block;\n    width: 1.3em;\n    height: 1em;\n    box-shadow: 0 -.7em 0 #9B000A;\n    bottom: .35em;\n    margin-left: .49em;\n    border-top-left-radius: 100%;\n    border-top-right-radius: 100%;\n  }\n  /*\u76AE\u5361\u4E18\u7684\u8138\u988A*/\n  .cheek {\n    width: .82em;\n    height: .82em;\n    border: .03em solid black;\n    border-radius: 100%;\n    position: absolute;\n    margin-top: 1.1em;\n    background: #F00;\n  }\n  .cheek.right {\n    right: 0;\n  }\n/*\u76AE\u5361\u4E18\u9F3B\u5B50hover\u52A8\u753B*/\n@-webkit-keyframes nose {\n  0% { -webkit-transform:rotate(0deg); }\n  33% { -webkit-transform:rotate(-5deg); }\n  67% { -webkit-transform:rotate(5deg); }\n  100% { -webkit-transform:rotate(0deg); }\n}\n@-moz-keyframes nose {\n  0% { -moz-transform:rotate(0deg); }\n  33% { -moz-transform:rotate(-5deg); }\n  67% { -moz-transform:rotate(5deg); }\n  100% { -moz-transform:rotate(0deg); }\n}\n@-ms-keyframes nose {\n  0% { -ms-transform:rotate(0deg); }\n  33% { -ms-transform:rotate(-5deg); }\n  67% { -ms-transform:rotate(5deg); }\n  100% { -ms-transform:rotate(0deg); }\n}\n@keyframes nose {\n  0% { transform:rotate(0deg); }\n  33% { transform:rotate(-5deg); }\n  67% { transform:rotate(5deg); }\n  100% { transform:rotate(0deg); }\n}\n';
  writeCode('', code);
}.call();