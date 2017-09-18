$(function(){
  $("#btnId").click(function(){
      $('#myPosters').ajaxSubmit({
          success: function(responseText){
              alert(responseText);
          }
      });
  });
});
