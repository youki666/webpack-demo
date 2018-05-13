'use strict';

var result = '\n               \u9762\u8BD5\u5B98\u4F60\u597D\uFF0C\u6211\u662F\u6768\u8F89\u3002\n               \u6211\u5C06\u4EE5\u52A8\u753B\u7684\u5F62\u5F0F\u6765\u4ECB\u7ECD\u6211\u81EA\u5DF1\u3002\n               \u9996\u5148\u5148\u6765\u51C6\u5907\u70B9\u6837\u5F0F.\n               * {\n                transtion: all 1s;\n               }\n               html {\n                color: rgb(222,222,222);\n                background: rgb(0,43,54);\n                font-size: 16px;\n               }\n               #code{\n                border: 1px solid #f3f;\n                padding: 8px;\n               }\n               /*\u9700\u8981\u4E00\u70B9\u4EE3\u7801\u9AD8\u4EAE\u663E\u793A*/\n               .token.selector {\n                   color: #690;\n               }\n               .token.property{\n                color: #905;\n               }\n               .token.function {\n                   color: #DD4A68;\n               }\n                /*3D\u6548\u679C*/\n\n                #code {\n                   position: fixed;\n                   left: 0;\n                   width: 50%;\n                   height: 100%;\n                }\n                \n          ';
var result2 = '\n                   /* \u4E8E\u662F\u6211\u5C31\u53EF\u4EE5\u5728\u767D\u7EB8\u4E0A\u5199\u5B57\u4E86\uFF0C\u8BF7\u770B\u53F3\u8FB9 */\n               #paper {\n                    position: fixed;\n                    right: 0;\n                    width: 50%;\n                    height: 100%;\n                    background: #111;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    padding: 16px;\n                   }\n                #paper .content{\n                  background: white;\n                  color: black;\n                  width: 100%;\n                  height: 100%;\n                }   \n              /* \u8C22\u8C22\u89C2\u770B */\n                  ';

var md = '\n         \u81EA\u6211\u4ECB\u7ECD\n         \u6211\u53EB \u6768\u8F89\n         1994 \u5E74 2 \u6708\u51FA\u751F\n         \u4E0A\u6D77\u6D77\u4E8B\u5927\u5B66\u6BD5\u4E1A\n         \u81EA\u5B66\u524D\u7AEF\u534A\u5E74\n         \u5E0C\u671B\u5E94\u8058\u524D\u7AEF\u5F00\u53D1\u5C97\u4F4D\n         # \u6280\u80FD\u4ECB\u7ECD\n         \u719F\u6089 JavaScript CSS\n         # \u9879\u76EE\u4ECB\u7ECD\n         1. \u65E0\u7F1D\u8F6E\u64AD\n         2. canvas\u753B\u677F\n         3. vue\u91CD\u6784\u6709\u8D5E\u5546\u57CE\n         # \u8054\u7CFB\u65B9\u5F0F\n         QQ 1060636771\n         Email xiaohuihui1335@163.com\n         \u624B\u673A 15201905984\n          ';
/*code写进style 标签*/
function writeCode(prefix, code, fn) {
  var domCode = document.querySelector('#code');
  domCode.innerHTML = prefix || '';
  var n = 0;
  var styleTag = document.getElementById('styleTag');
  var timer = setInterval(function () {
    n += 1;
    domCode.innerHTML = code.slice(0, n);
    domCode.innerHTML = Prism.highlight(prefix + code.slice(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix + code.slice(0, n);
    domCode.scrollTop = domCode.scrollHeight;
    if (n >= code.length) {
      window.clearInterval(timer);
      fn && fn.call();
    }
  }, 10);
}
function writeMarkdown(markdown, fn) {
  var domPaper = document.querySelector('#paper .content');
  var n = 0;
  var timer = setInterval(function () {
    n += 1;
    domPaper.innerHTML = markdown.substring(0, n);
    domPaper.scrollTop = domPaper.scrollHeight;
    if (n >= markdown.length) {
      window.clearInterval(timer);
      fn && fn.call();
    }
  }, 10);
}

writeCode('', result, function () {
  createPaper(function () {
    console.log('paper has prepare for you');
    writeCode(result, result2, function () {
      writeMarkdown(md, function () {
        console.log('success');
      });
    });
  });
});
function createPaper(fn) {
  var paper = document.createElement('div');
  paper.id = 'paper';
  var content = document.createElement('pre');
  content.className = 'content';
  paper.appendChild(content);
  document.body.appendChild(paper);
  fn && fn.call();
}