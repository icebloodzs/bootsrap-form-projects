//form 验证规则
function formValidator() {
    $('#myform').bootstrapValidator({
　　　　　　　　message: 'This value is not valid',
        　feedbackIcons: {
            　　　　　　　　valid: 'glyphicon glyphicon-ok',
            　　　　　　　　invalid: 'glyphicon glyphicon-remove',
            　　　　　　　　validating: 'glyphicon glyphicon-refresh'
        　　　　　　　　   },
        fields: {
            select: {
                validators: {
                    notEmpty: {
                        message: '网点名不能为空'
                    }
                }
            },
            salename: {
                validators: {
                    notEmpty: {
                        message: '姓名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 4,
                        message: '姓名长度必须在2到4位之间'
                    }
                }
            },
            salenum: {
                validators: {
                    notEmpty: {
                        message: '工号不能为空'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/,
                        message: '用户名只能包含大写、小写、数字'
                    }

                }
            }
        }
    })
}

//开启验证
$('[name=submit]').click(function(){
    $('#myform').data('bootstrapValidator').validate();  
    if(!$('#myform').data('bootstrapValidator').isValid()){  
    return false;  
    } else{
        $('#myModal').modal('show');
        return true;
    }
})

//初始化表单验证
$(document).ready(function() {
    formValidator();
   });
//Modal验证销毁重构
$('#myModal').on('hidden.bs.modal', function() {
    $("#myform").data('bootstrapValidator').destroy();
    $('#myform').data('bootstrapValidator', null);
    formValidator();
}); 
//确定后ajax表单提交并跳转   
   $('div.modal-footer button:last-child').click(function(){
    $.ajax({
        type: "POST",
        dataType : 'json',
        url: "",
        data: {
            "type" :"0",
            "bankOutlets":$("#bankOutlets").val(),
            "id":$("#saleId").val(),
            "num":$("saleNum").val(),
        },
        success :function(json) {
             
             t.ajax.reload( null, true );
            },
        error :function(e){

        }
      });
    self.location="/app/picture.html"
   });
    
  

   





