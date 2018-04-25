var APP_ID = 'FsKxDQO9qlBKCX3XMDa1bwBK-gzGzoHsz';
var APP_KEY = 'GCXnf8vzPRWy6eSgElzbkXbM';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

 var query = new AV.Query('Message');
  query.find().then(function (todos) {
      //console.log(todos);
      
      var array = todos.map((item)=> item.attributes)
      console.log(array);
      array.forEach((item)=>{
      	 var li = document.createElement('li');
      	 li.innerText = `${item.name}:${item.content}`;
      	let messageList = document.querySelector('#messageList');
      	console.log(li);
      	messageList.appendChild(li);
      })
  }, function (error) {
    // 异常处理
    console.log('failed');
  });

console.log('no error');
    var message = document.querySelector('#messageForm');
        message.addEventListener('submit',function(e){
       e.preventDefault();
      let content =  message.querySelector('input[name=content]').value;
      let name =  message.querySelector('input[name=name]').value;
      let xxx = AV.Object.extend('Message');
      let test = new xxx();
      test.save({
      	'content': content,
      	'name': name
      }).then(function(obj){
      	var li = document.createElement('li')
      	 li.innerText = `${obj.attributes.name}:  ${obj.attributes.content}`;
      	let messageList = document.querySelector('#messageList');
      	messageList.appendChild(li);
      	message.querySelector('input[name=name]').value = '';
      	message.querySelector('input[name=content]').value = '';
      })
  })
/*var xxx = AV.Object.extend('Youki');//创建test
var test = new xxx();//创建新数据
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