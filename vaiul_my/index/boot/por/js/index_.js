/**
 * Created by web on 2019/5/11.
 */
(function(){
    //1.���ҵ������¼���Ԫ��
    var sc=document.getElementById("sc");
    //3.���ҵ���Ҫ�޸�Ԫ��
    var input=document.getElementsByClassName("input_search")[0];
    console.dir(input);
    //2.�󶨺��� �����¼�
    sc.onmouseover=function(){
        input.style.width="15rem";

    };
    sc.onmouseout=function(){
        input.style.width="0rem";

    }
})();