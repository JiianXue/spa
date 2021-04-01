function TimerBtn(){
  let $btn = $('<input type="button" class="timer-button">'),
      cfg = {
        container:'body',
        title:'同意',
        delay:6,
        enabled:false,
        onClick:null
      },
      timer = null;
  /* 
  $btn.css({
    height:'50px',
    width:'150px',
    'font-size':'1.2em'
  });
  */

  //设计时，运行时
  this.show = function(config){
    //gen dom
    $.extend(cfg,config);
    $(cfg.container).append($btn);
    $btn.val(cfg.title + '(' + cfg.delay + 's)');
    $btn.attr('disabled','disabled');

    timer = setInterval(()=>{
      $btn.val(cfg.title+'('+ --cfg.delay + 's)');
      if(cfg.delay === 0){
        clearInterval(timer);
        $btn.val(cfg.title); 
        $btn.removeAttr('disabled');
      }
    },1000);

    //event bind
    
    $btn.click(cfg.onClick);
  }

  this.destroy = function() {
    $btn.remove();
  }

  return{
    show,destroy
  }
}  

let $timerBtn = (function(){
  let $btn = $('<input type="button" class="timer-button">'),
      cfg = {
        container:'body',
        title:'同意',
        delay:6,
        enabled:false,
        onClick:null
      },
      timer = null;
  /* 
  $btn.css({
    height:'50px',
    width:'150px',
    'font-size':'1.2em'
  });
  */

  //设计时，运行时
  function show(config){
    //gen dom
    $.extend(cfg,config);
    $(cfg.container).append($btn);
    $btn.val(cfg.title + '(' + cfg.delay + 's)');
    $btn.attr('disabled','disabled');

    timer = setInterval(()=>{
      $btn.val(cfg.title+'('+ --cfg.delay + 's)');
      if(cfg.delay === 0){
        clearInterval(timer);
        $btn.val(cfg.title); 
        $btn.removeAttr('disabled');
      }
    },1000);

    //event bind
    
    $btn.click(cfg.onClick);
  }

  function destroy() {
    $btn.remove();
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

