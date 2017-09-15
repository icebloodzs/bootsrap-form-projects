$(function(){
  // AOS.init({
  //   duration: 500,
  //   easing: 'ease-in-sine',
  //   //delay: 100,
  // });

  //index 和 qkzp 文件名字做了交换，所有下面注释需要 “颠倒” 看


  //qkzp
  $(function(){
    var _fixed = $(".fixedBox.qkzp");
    var _fixed_hide = $(".fixedBox_con_button_input.qkzp,body");
    var _fixedBox_con = $(".fixedBox_con.qkzp");


    $(".app_header_con_ljzyyh.qkzp").click(function(){
      event.stopPropagation();
      _fixed.addClass("show")
    })

    var _fn_hide= function(event){
       event.stopPropagation();
      _fixed.removeClass("show");
    }

    _fixed_hide.click( _fn_hide );
    _fixedBox_con.click( function(){
      event.stopPropagation();
    } );
  })


  //index
  $(function(){
    var _fixed = $(".fixedBox.index");
    var _fixed_hide = $("body");
    var _fixedBox_con = $(".fixedBox_con.index");

    _fixed_hide.click(function(){
      event.stopPropagation();
      _fixed.addClass("hide")
    })
    var _fn_hide= function(event){
       event.stopPropagation();
    }

    _fixedBox_con.click( _fn_hide );
  })


  //generate`
  $(function(){

    function check() {
      var regC = /[^ -~]+/g;
      var regE = /\D+/g;
      var el = $('.app_header_con_labeledNxsdh');
      var str = el.text();

      if (regC.test(str)){
          el.text = el.text().substr(0,50);
      }

      if(regE.test(str)){
          el.text = el.text().substr(0,100);
      }
    }



    var _data= [
      "支票在我手，还不跟我走？！",
      "听说今天求婚成功率很大，支票额度越高几率越大！",
      "请拿着这张支票速速找我提现，有效期一辈子",
      "不知道，我这张巨额支票能否登上你的那艘豪华游艇",
      "你玩貂蝉我玩吕布，你玩小乔我玩周瑜，你玩赵云我玩张飞，在此支票前立誓，你的王者段位被我承包了",
      "我想成为你签收这张支票的那只圆珠笔",
      "拿着这张支票，去挥霍，去浪费，去剁手，去发福，去旅行，反正别忘了带着我就行了",
      "我全部私房钱都在这张支票上了，我已经做好赖着你一辈子的准备了",
      "快数数这只票上有多少数字，这是我想跟你一起度过的日子",
      "支票和我，你一个都少不了",
    ];
    var result = [];

    //此算法基本避免了产生重复
    function random(){
      if( _data.length === 0 ){
        _data = result;
        result = [];
      }
      var num = _data.splice( Math.floor(( Math.random() * _data.length )),1 );
      result = num.concat( result );

      return result[0]
    }

    var textarea = $(".app_header_con_textBox2_labeledNxsdh");
    $(".app_header_con_textBox2_input").click(function(){
      console.log(random())
      textarea.val(random());
      return false;
    })


    textarea.keyup(check);

    //上传头像

    var tx = $(".app_header_con_tx");



  })


})
