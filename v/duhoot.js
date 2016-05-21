//**************************************************//
//不足：没有用遍历和this，对此不够理解，增加代码量  //
//      图片轮播没有用js                            //      
//--------------------------------------------------//
//版本：duhoot1.0.js 编写时间：05.21-05.21          //      
//                                                  //
//**************************************************//


// ****************加载函数中*****************//
function addLoadEvent(func) {
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = func;
            } else {  
                window.onload = function() {
                oldonload();
                func();
                }
            }
        }
addLoadEvent(mouseEvent);//选择框的选择
// addLoadEvent(closepost);//关闭
addLoadEvent(rotationFoot);//旋转放大logo
addLoadEvent(formRight);//表单验证

// 获取id名为xx的元素,经常用到，减少代码量
function getId(id){
    return document.getElementById(id);
}

// 隐藏和显示下拉选择框
function showList(){
     getId("selectCountry").style.display='block';
}
function hidenList(){
    getId("selectCountry").style.display='none';
 }
function showList2(){
  getId("selectArt").style.display="block";
}
function hidenList2(){
 getId("selectArt").style.display="none";
}

// 绑定鼠标事件，点击选择框时的事件
function mouseEvent(){
    getId("selectCountry").onclick=hidenList;
    getId("chooseCountry").onclick=showList;
    getId("selectArt").onclick=hidenList2;
    getId("chooseArt").onclick=showList2;
    replaceHtml();
}
// 选择时选择框的文本替换成选择的文本
function replaceHtml(){
    var links1,links2;
    var select=getId("selectCountry").getElementsByTagName('li');
    var selectArt=getId("selectArt").getElementsByTagName('li');
    // 遍历
    for(var i = 0;i<select.length;i++){
        links1=select[i].getElementsByTagName('a');
        links2=selectArt[i].getElementsByTagName('a');
        for(var j = 0;j<links1.length;j++){
            links1[j].onclick=function(){
                getId("chooseCountry").innerHTML = this.innerHTML;
                hidenList();
            }
            links2[j].onclick=function(){
                getId("chooseArt").innerHTML = this.innerHTML;
                hidenList();
            }
        }
    }
}


// 登陆框的显示
function show(){
getId("mask").style.display="block";//设置层1显示
getId("mask").style.width=body.clientWidth;//设置层1宽度等于body宽度，width=100%也可以，不过有一些误差，所以最好用这个
getId("mask").style.height=body.clientHeight;//设置层1高度满屏
getId("enter").style.display="inline";//设置层2的显示
getId("enter").style.top=body.clientHeight/2-enter.clientHeight/2;//设置层2的距顶位置居中算法
getId("enter").style.left=body.clientWidth/2-enter.clientWidth/2;//设置层2的距左位置居中算法
}

//关闭登陆框的显示
function closeShow(){
getId("mask").style.display="none";
getId("enter").style.display="none";
}

var state=0;//图片的状态：0为关闭，1为打开
function showpost(){

    getId("postEnlarge").style.display="block";
    state=1;
    console.log("图片状态："+state); //方便检查代码  
    getId("postEnlarge").style.width=body.clientWidth;
    getId("postEnlarge").style.height=body.clientHeight;
    setTimeout("clickpost()",500); 
}



function closepost(){
    state=0;
    // className[tag].style.display='none';
    getId("postEnlarge").style.display='none';
    
    console.log("图片状态："+state);
}
   
    // 获取要放大的图片元素
    // var className = getElementsByClassName('bottomHouse');
    // var imgArr;
    // var tag;
    //转换成数字，方便处理
    // for(var i=0;i<className.length;i++){
    //    imgArr[i] = Number(className[i]);  
    // }

function clickpost(){   
        getId("postEnlarge").onclick=closepost;
        //遍历    
        // for(var i=0;i<imgArr.length;i++){
        //   className[i].onclick=closepost;  
        //   tag=i;
        // }
       
}

//这个方法很麻烦，待修改！！！想用遍历
// function xuanzhuan(element){
//     deg +=360;
//     element.style.transform= "rotate("+deg+"deg)"+"scale(1.2)";
// }
var deg=0;
function rotationFoot(){
    // var imgArr=getId("offer").getElementsByTagName("img");
    // for(var i=0;i<imgArr.length;i++){
    //     imgArr[i].onmouseover=xuanzhuan(imgArr[i]);
    // }


    getId("rotation1").onmouseover = function(){
        deg +=360;
        getId("rotation1").style.transform= "rotate("+deg+"deg)"+"scale(1.2)";
    } 
    getId("rotation1").onmouseout = function(){
        deg -=360;
        getId("rotation1").style.transform= "rotate("+deg+"deg)"+"scale(1)";
    }

     getId("rotation2").onmouseover = function(){
        deg +=360;
        getId("rotation2").style.transform= "rotate("+deg+"deg)"+"scale(1.2)";
    } 
    getId("rotation2").onmouseout = function(){
        deg -=360;
        getId("rotation2").style.transform= "rotate("+deg+"deg)"+"scale(1)";
    }

         getId("rotation3").onmouseover = function(){
        deg +=360;
        getId("rotation3").style.transform= "rotate("+deg+"deg)"+"scale(1.2)";
    } 
    getId("rotation3").onmouseout = function(){
        deg -=360;
        getId("rotation3").style.transform= "rotate("+deg+"deg)"+"scale(1)";
    }

         getId("rotation4").onmouseover = function(){
        deg +=360;
        getId("rotation4").style.transform= "rotate("+deg+"deg)"+"scale(1.2)";
    } 
    getId("rotation4").onmouseout = function(){
        deg -=360;
        getId("rotation4").style.transform= "rotate("+deg+"deg)"+"scale(1)";
    }
         getId("rotation5").onmouseover = function(){
        deg +=360;
        getId("rotation5").style.transform= "rotate("+deg+"deg)"+"scale(1.2)";
    } 
    getId("rotation5").onmouseout = function(){
        deg -=360;
        getId("rotation5").style.transform= "rotate("+deg+"deg)"+"scale(1)";
    }
}
// 方法2：（失败品）
// var deg = 0;
// function rotationFoot(img){
        
//     img.style.transform= "rotate("+deg+"deg)"+"scale(1.2)";
// }
// function rotate(){

//     var rotationImg = getId("fiveLogoList").getElementsByTagName("a").getElementsByTagName("img");
//     for (var i=0;i<5;i++) {
//      rotationImg[i].onmouseover = function(){
//         deg+=360;
//         rotationFoot(this);
//     }
// }
// }



//全局变量，方便使用
var oName;//用户名的输入值
var name_length=0;//用户名的长度
var re = /[^\w\u4e00-\u9fa5]/g;//正则表达式，匹配是中文和英文和数字
// 表单验证函数
function formRight(){

    getId("username").onkeyup = function(){ //onkeyup指键盘输入
       oName=getId('username').value; //获取输入值值 
       name_length = getLength(oName);//获取长度值
       if(name_length!=0){  //计数
        getId("count").style.display="block"; 
       getId("count").innerHTML=name_length+"个字符";
       } else{
        getId("count").style.display="none";
       } 
    }
    //提交表单
    getId("ok").onclick = function(){
        if(oName&&name_length>3){
            alert("登录成功"); 
            getId("login").innerHTML=oName;//替换登录名
            closeShow();
            return false;//使表单不提交，调用closeShow来关闭登录框
        }else{
         alert("登录gg");
         getId("login").innerHTML="login";//不替换登录名
         return false; //使表单不提交  
         // show();
        }
    }
}

function getLength(str){
   return str.replace(/[^\x00-xff]/g,"xx").length;
   //用正则表达式用匹配传入参数，如果是中文，则两个字符，”xx“的作用是表示两个字符
}