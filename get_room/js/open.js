$(function(){
	//DOM 4步
	    //1. 查找触发事件的元素
	    //本例中: 查找按钮
	    $("#open")
	    //2. 绑定事件处理函数
	    .click(function(){
	      //3. 查找要修改的元素
	      // //本例中: 要切换显示隐藏的是>4位置且不是最后一个的所有li
	      $("#list>div:gt(3):not(:last)")
	      // //4. 修改元素
	      .toggle();
	      // //获得当前点击的按钮
	       var $this=$(this);
	       if($this.html()=="展开选项"){
	        //就改为收起选项
	        $this.html(`收起选项`);
					$this.addClass("Img");
	       }else{//否则如果当前按钮的内容是展开所有品牌
	      //   //就改为展开选项
	        $this.html(`展开选项`);
					$this.removeClass("Img");
	      }
	    })
})
