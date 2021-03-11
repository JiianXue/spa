$(function(){
  //get elem : progress start stop reset
  let $progress = $('progress'),
      $start = $('#start'),
      $stop = $('#stop'),
      $reset = $('#reset');
  let i = 0;
  let timer;

  //start
  $start.click(()=>{
    timer = setInterval(()=>{
      $progress.val(++i);
    },100);
  });

  //stop
  $stop.click(()=>{
    clearInterval(timer);
  });

  //reset
  $reset.click(()=>{
    $progress.val(0);
    i = 0;
    clearInterval(timer);
  });
  

})
