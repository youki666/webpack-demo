           var result = `
               面试官你好，我是杨辉。
               我将以动画的形式来介绍我自己。
               首先先来准备点样式.
               * {
                transtion: all 1s;
               }
               html {
                color: rgb(222,222,222);
                background: rgb(0,43,54);
                font-size: 16px;
               }
               #code{
                border: 1px solid #f3f;
                padding: 8px;
               }
               /*需要一点代码高亮显示*/
               .token.selector {
                   color: #690;
               }
               .token.property{
                color: #905;
               }
               .token.function {
                   color: #DD4A68;
               }
                /*3D效果*/

                #code {
                   position: fixed;
                   left: 0;
                   width: 50%;
                   height: 100%;
                }
                
          `;
       var result2 = `
                   /* 于是我就可以在白纸上写字了，请看右边 */
               #paper {
                    position: fixed;
                    right: 0;
                    width: 50%;
                    height: 100%;
                    background: #111;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 16px;
                   }
                #paper .content{
                  background: white;
                  color: black;
                  width: 100%;
                  height: 100%;
                }   
              /* 谢谢观看 */
                  `

         var md = `
         自我介绍
         我叫 杨辉
         1994 年 2 月出生
         上海海事大学毕业
         自学前端半年
         希望应聘前端开发岗位
         # 技能介绍
         熟悉 JavaScript CSS
         # 项目介绍
         1. 无缝轮播
         2. canvas画板
         3. vue重构有赞商城
         # 联系方式
         QQ 1060636771
         Email xiaohuihui1335@163.com
         手机 15201905984
          `
  /*code写进style 标签*/
function writeCode(prefix,code, fn){
  var domCode = document.querySelector('#code');
    domCode.innerHTML = prefix || '';
  var n = 0;
  var styleTag = document.getElementById('styleTag');
   var timer = setInterval(()=>{
    n +=1;
    domCode.innerHTML=code.slice(0,n);
    domCode.innerHTML = Prism.highlight(prefix + code.slice(0,n), Prism.languages.css);
    styleTag.innerHTML= prefix + code.slice(0,n);
    domCode.scrollTop = domCode.scrollHeight;
    if(n >= code.length){
      window.clearInterval(timer);
       fn && fn.call()
    }
  },10);
}
  function writeMarkdown(markdown,fn){
       let domPaper = document.querySelector('#paper .content');
        var n = 0;
        var timer = setInterval(()=>{
          n +=1;
          domPaper.innerHTML= markdown.substring(0,n);
          domPaper.scrollTop = domPaper.scrollHeight;
        if(n >=markdown.length){
         window.clearInterval(timer);
          fn && fn.call()
          }
      },10)
  }

            writeCode('', result,()=>{
              createPaper(()=>{
                   console.log('paper has prepare for you');
                   writeCode(result,result2,()=>{
                       writeMarkdown(md,()=>{
                            console.log('success')
                       })
                   });
              });
            });
             function createPaper(fn){
              var paper = document.createElement('div');
              paper.id = 'paper';
              var content = document.createElement('pre')
               content.className = 'content'
                paper.appendChild(content)
               document.body.appendChild(paper)
                fn && fn.call()
             }