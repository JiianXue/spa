$(function(){
  //get elem : pwd eye
  let $pwd = $('#pwd'),
      $eye = $('#eye');

  //eyeon change text pwd
  $eye.mouseover(()=>{
    $eye.attr('src','image/password.png');
    $pwd.attr('type','text');
  })
 
  //eyeout
  $eye.mouseout(()=>{
    $eye.attr('src','image/password.png');
    $pwd.attr('type','password');
  })

})
