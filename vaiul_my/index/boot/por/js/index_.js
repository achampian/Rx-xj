/**
 * Created by web on 2019/5/11.
 */
(function(){
    //1.查找到触发事件的元素
    var sc=document.getElementById("sc");
    //3.查找到需要修改元素
    var input=document.getElementsByClassName("input_search")[0];
    console.dir(input);
    //2.绑定函数 处理事件
    sc.onmouseover=function(){
        input.style.width="15rem";

    };
    sc.onmouseout=function(){
        input.style.width="0rem";

    }
})();