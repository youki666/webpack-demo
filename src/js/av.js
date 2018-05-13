'use strict';
var APP_ID = 'FsKxDQO9qlBKCX3XMDa1bwBK-gzGzoHsz';
var APP_KEY = 'GCXnf8vzPRWy6eSgElzbkXbM';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find().then(function (todos) {
  //console.log(todos);

  var array = todos.map(function (item) {
    return item.attributes;
  });
  console.log(array);
  array.forEach(function (item) {
    var li = document.createElement('li');
    li.innerText = item.name + ':' + item.content;
    var messageList = document.querySelector('#messageList');
    console.log(li);
    messageList.appendChild(li);
  });
}, function (error) {
  // 异常处理
  console.log('failed');
});

var message = document.querySelector('#messageForm');
message.addEventListener('submit', function (e) {
  e.preventDefault();

  var content = message.querySelector('input[name=content]').value;
  var name = message.querySelector('input[name=name]').value;
  var xxx = AV.Object.extend('Message');
  var test = new xxx();
  if (name !== '' && content !== '') {
    test.save({
      'content': content,
      'name': name
    }).then(function (obj) {
      var li = document.createElement('li');
      li.innerText = obj.attributes.name + ':  ' + obj.attributes.content;
      var messageList = document.querySelector('#messageList');
      messageList.appendChild(li);
      message.querySelector('input[name=name]').value = '';
      message.querySelector('input[name=content]').value = '';
    });
  } else {
    alert('(づ￣3￣)づ╭❤～O(∩_∩)O哈哈~Name and Content can not be null！');
  }
});
/*var xxx = AV.Object.extend('Youki');//创建test
var test = new xxx();//

test.save({//存储新数据
  words: 'youki 666!'
}).then(function(object) {//保存成功则alert.
  console.log(arguments[0]);

})
*/
/*1,引入av.min.js,创建window.av对象
  2，初始化;
  3，新建;
*/
