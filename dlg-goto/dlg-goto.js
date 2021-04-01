let $gotoDlg = (function(){
  
  let html = `
  <div class="notepad-dlg-goto">
    <div class="notepad-dlgbox">
      <div class="titlebar">
        <p class="title">转到指定行</p>
        <span class="close-btn">×</span>
      </div>
      <div class="main">
        <label>行号(<u>L</u>):</label>
        <br>
        <input class="txt-line-num" type="text" autofocus>
        <br>
        <input type="button" class="btn-goto" value="转到">
        <input type="button" class="btn-cancel" value="取消">
      </div>
    </div>
  </div>
  `
  
  
  
  let $dlg = $(html),
      cfg = {
        container:'body',
        title:'同意',
        delay:6,
        enabled:false,
        onClick:null
      },
      timer = null;


  //设计时，运行时
  function show(config){
    //gen dom
    $.extend(cfg,config);
    $('body').append($dlg);
    //event bind
  }

  function destroy() {
    $dlg.remove();
  }

  return{
    show,destroy
  }
})();  

/*
 UI组件的面向对象封装，两种方式
 1.{}Object
 let $timerBtn = {
  show:function(){}
 }
 2.工厂函数（匿名函数的立即执行表达式+闭包）
 let $timerBtn = (function() {
  function show(){

  }
 return {
    show
 }
 })();
 使用：
 $timerBtn.show();
 3.构造函数
 function TimerBtn() {
  this.show = function() {
  }
 }
 使用：
 let btn = new TimerBtn();
 btn.show();
*/ 

/*
参数化：
1.使用{}，避免参数过多的问题；
2.使用默认参数
3.传的参数和默认参数进行合并
4.使用参数
*/

