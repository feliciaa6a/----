let menu=document.getElementById("allmenu");
let avatar=document.getElementById("avatar");
avatar.addEventListener("click",()=>{
    menu.style.visibility="visible";
});
avatar.addEventListener("dblclick",()=>{
    menu.style.visibility="hidden";
});
//实现第一个文章的折叠展开功能
let story1=document.getElementById("story1content");//装outer1的盒子
let readall1=document.getElementById("readall1btn");//阅读全文的按钮
let outer1=document.getElementById("outer1");//装显示的文字的span
let innerbtn=document.createElement("button");//创建一个新的收起按钮
readall1.addEventListener("click",()=>{
    let newimg1=document.createElement("img");
    outer1.innerHTML = '';//清空文字
    let newava=document.createElement("img");
    outer1.appendChild(newava);
    newava.src="./homepics/avatar1.jpg";
    newava.width="35";
    newava.height="35";
    newava.style.borderRadius="3px";
    let newname=document.createElement("div");
    newname.innerHTML="十三州府";
    newname.style.display="inline-block";
    newname.style.fontWeight=600;
    newname.style.color="#444";
    newname.style.marginLeft="5px";
    outer1.appendChild(newname);
    let p0=document.createElement("p");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let p3=document.createElement("p"); 
    let p4=document.createElement("p");
    outer1.appendChild(p0);
    outer1.appendChild(p1);
    outer1.appendChild(p2);
    outer1.appendChild(p3);
    outer1.appendChild(p4);
    p0.innerHTML="24,691 人赞同了该回答";
    p0.style.fontSize="14px";
    p0.style.color="#8590a6";
    p0.style.marginBottom="5px";
    p1.style.marginTop="0px";
    p1.innerHTML="柏邦妮说：心里那么苦的人，要多少甜才能填满啊";
    p2.innerHTML="马东说：心里有很多苦的人，只要一丝甜就能填满。";
    p3.innerHTML="那一刻真的惊艳到了。";
    p3.style.marginBottom="5px";
    p4.innerHTML="发布于 2022-06-06 6:35";
    p4.style.fontSize="14px";
    p4.style.color="#8590a6";
    p4.style.marginTop=0;
    story1.appendChild(outer1);
    readall1.innerHTML='';//去掉阅读全文的按钮
    outer1.appendChild(innerbtn);
    innerbtn.innerHTML="收起";
    innerbtn.style.border=0;
    innerbtn.style.backgroundColor="white";
    innerbtn.style.color= "#8590a6";
    let newspan1=document.createElement("span");
    innerbtn.appendChild(newspan1);
    newspan1.appendChild(newimg1);
    newimg1.src="./homepics/foldlogo.png";
    newimg1.width="20";
    newimg1.height="20";
    newimg1.style.marginBottom="-4px"; 
    newimg1.style.marginLeft="3px";
})
innerbtn.onmouseover=function(){
    this.style.color="grey";
}
innerbtn.onmouseleave=function(){
    this.style.color="#8590a6";
}
innerbtn.addEventListener("click",()=>{
    let newimg2=document.createElement("img");
    outer1.innerHTML='十三州府：柏邦妮说：心里那么苦的人，要多少甜才能填满啊。马东说：心里有很多苦的人…';
    readall1.innerHTML="阅读全文";
    readall1.appendChild(newimg2);
    newimg2.src="./homepics/uplogo.png";
    newimg2.width="15";
    newimg2.height="15";
    newimg2.style.marginBottom="-2px"; 
    newimg2.style.marginLeft="5px";
})
let voteup1=document.getElementById("voteup1");
voteup1.addEventListener("click",()=>{
    voteup1.style.backgroundColor="#056de8";
    voteup1.style.color="white";
    voteup1.innerHTML="已赞同 2.4万";
})
let votedown1=document.getElementById("votedown1");
votedown1.addEventListener("click",()=>{
    votedown1.style.backgroundColor="#056de8";
    votedown1.style.color="white";
})
//page2
let story2=document.getElementById("story2content");
let readall2=document.getElementById("readall2btn");
let outer2=document.getElementById("outer2");
let innerbtn2=document.createElement("button");
readall2.addEventListener("click",()=>{
    let newimg1=document.createElement("img");
    outer2.innerHTML = '';//清空文字
    let newava=document.createElement("img");
    outer2.appendChild(newava);
    newava.src="./homepics/avatar2.jpg";
    newava.width="35";
    newava.height="35";
    newava.style.borderRadius="3px";
    let newname=document.createElement("div");
    newname.innerHTML="madmaxxx";
    newname.style.display="inline-block";
    newname.style.fontWeight=600;
    newname.style.color="#444";
    newname.style.marginLeft="5px";
    outer2.appendChild(newname);
    let p0=document.createElement("p");
    let p1=document.createElement("p");
    let p2=document.createElement("p");
    let p3=document.createElement("p"); 
    let p4=document.createElement("p");
    let p5=document.createElement("p");
    let p6=document.createElement("p");
    let p7=document.createElement("p");
    outer2.appendChild(p0);
    outer2.appendChild(p1);
    outer2.appendChild(p2);
    outer2.appendChild(p3);
    outer2.appendChild(p4);
    outer2.appendChild(p5);
    outer2.appendChild(p6);
    outer2.appendChild(p7);
    p0.innerHTML="2742 人赞同了该回答";
    p0.style.fontSize="14px";
    p0.style.color="#8590a6";
    p0.style.marginBottom="5px";
    p1.style.marginTop="0px";
    p1.innerHTML="我在海外上学，我们班chatgpt普及率可以说是100%，国内没这么多人用主要是给卡在国外手机号上了。。。。别说学生用了，老师都用。平时有30%的人上课常年开着它的界面挂那。";
    p2.innerHTML="这玩意就像手机一样，我可以肯定的说一旦开始使用就离不开了。光翻译功能，就吊打市面上所有软件。。。";
    p3.innerHTML="从作业怎么写到个人情感咨询这玩意都能给出很不错的答案。甚至给项目起名字，策划案怎么做，代码怎么写，想看番玩游戏根据你的要求推荐，我还用它生成过问卷，最近基于这玩意看论文的插件好像也给开发出来了....而且它能够了解上下文语义。它的想象空间实在是太大了，而且是可落地性超级强的那种，比元宇宙实际千倍...总之我觉得这玩意绝对是近20年离科技革命最近的一次。";
    p4.innerHTML="我的建议是newbing或者chatgpt至少试一个，注意辨别国内骗子...真chatgpt没那么容易卡的，我问20句顶多卡一句需要重来这样，而且完全可以处理中文问题中文需求。以及我一分钱没充，用的就是免费版 如果你付费了还没达到10句不卡的水平十有八九是用了盗版...";
    p5.innerHTML="以及前天开始这个问题可能就给盯上了，甚至收到了那种国内盗版的广告私信，建议擦亮眼睛以免上当...最好还是tb上搞个海外电话卡....";
    p6.innerHTML="这样下去真的让人怀疑ai是否可能会发展出自我意识之类的东西，所以另外推荐一个游戏底特律变人。这玩意一个2019年的游戏，从人工智能到ai绘画甚至俄乌冲突都有预言上，最近感觉代入感拉满。b站也有很多视频可以云";
    p7.innerHTML="编辑于 2023-03-15 2:41・IP 属地加拿大";
    p7.style.fontSize="14px";
    outer2.style.lineHeight="1.67";
    p7.style.color="#8590a6";
    p7.style.marginTop=0;
    story2.appendChild(outer2);
    readall2.innerHTML='';//去掉阅读全文的按钮
    outer2.appendChild(innerbtn2);
    innerbtn2.innerHTML="收起";
    innerbtn2.style.border=0;
    innerbtn2.style.backgroundColor="white";
    innerbtn2.style.color= "#8590a6";
    let newspan2=document.createElement("span");
    innerbtn2.appendChild(newspan2);
    newspan2.appendChild(newimg1);
    newimg1.src="./homepics/foldlogo.png";
    newimg1.width="20";
    newimg1.height="20";
    newimg1.style.marginBottom="-4px"; 
    newimg1.style.marginLeft="3px";
})
innerbtn2.addEventListener("click",()=>{
    let newimg2=document.createElement("img");
    outer2.innerHTML='madmaxxx: 我在海外上学，我们班chatgpt普及率可以说是100%，国内没这么多人用主要是给卡在国外手机号上了。别说学生用了，老师都用。平时有3…';
    readall2.innerHTML="阅读全文";
    readall2.appendChild(newimg2);
    newimg2.src="./homepics/uplogo.png";
    newimg2.width="15";
    newimg2.height="15";
    newimg2.style.marginBottom="-2px"; 
    newimg2.style.marginLeft="5px";
})
innerbtn2.onmouseover=function(){
    this.style.color="grey";
}
innerbtn2.onmouseleave=function(){
    this.style.color="#8590a6";
}
let voteup2=document.getElementById("voteup2");
voteup2.addEventListener("click",()=>{
    voteup2.style.backgroundColor="#056de8";
    voteup2.style.color="white";
    voteup2.innerHTML="已赞同 2743";
})
let votedown2=document.getElementById("votedown2");
votedown2.addEventListener("click",()=>{
    votedown2.style.backgroundColor="#056de8";
    votedown2.style.color="white";
})

//page3
let div3=document.getElementById("div3");//获取图片和文字
let readall3=document.getElementById("readall3btn");
let innerbtn3=document.createElement("button");
readall3.addEventListener("click",()=>{
    div3.innerHTML='';//清空元素
    let avatar3=document.createElement("img");
    div3.appendChild(avatar3);
    avatar3.src="./homepics/avatar3.jpg";
    avatar3.width="35";
    avatar3.height="35";
    avatar3.style.borderRadius="3px";   
    let newname=document.createElement("div");
    div3.appendChild(newname);
    newname.innerHTML="PIKA";
    newname.style.display="inline-block";
    newname.style.fontSize="14px";
    newname.style.fontWeight=600;
    newname.style.color="#444";
    newname.style.marginLeft="5px";
    let p0=document.createElement("p");
    let p1=document.createElement("p");
    let pic=document.createElement("img");
    let p2=document.createElement("p");
    div3.appendChild(p0);
    div3.appendChild(p1);
    div3.appendChild(pic);
    div3.appendChild(p2);
    p0.innerHTML="被偷推车的玛卡巴卡等 28,516 人赞同了该回答";
    p0.style.fontSize="14px";
    p0.style.color="#8590a6";
    p0.style.marginBottom="5px";
    p1.innerHTML="如图所示，让静态的雕塑有了动态美的打脸。";
    pic.src="./homepics/page3.jpg";
    pic.width="654";
    pic.height="817";
    p2.innerHTML="编辑于 2022-08-04 11:43・IP 属地美国"
    p2.style.fontSize="14px";
    outer2.style.lineHeight="1.67";
    p2.style.color="#8590a6";
    p2.style.marginTop=0;  
    div3.appendChild(innerbtn3);
    innerbtn3.innerHTML="收起";
    innerbtn3.style.border=0;
    innerbtn3.style.backgroundColor="white";
    innerbtn3.style.color= "#8590a6";
    let newimg1=document.createElement("img");
    let newspan2=document.createElement("span");
    innerbtn3.appendChild(newspan2);
    newspan2.appendChild(newimg1);
    newimg1.src="./homepics/foldlogo.png";
    newimg1.width="20";
    newimg1.height="20";
    newimg1.style.marginBottom="-4px"; 
    newimg1.style.marginLeft="3px";
})
let voteup3=document.getElementById("voteup3");
voteup3.addEventListener("click",()=>{
    voteup3.style.backgroundColor="#056de8";
    voteup3.style.color="white";
    voteup3.innerHTML="已赞同 2.8万";
})
let votedown3=document.getElementById("votedown3");
votedown3.addEventListener("click",()=>{
    votedown3.style.backgroundColor="#056de8";
    votedown3.style.color="white";
})
innerbtn3.onmouseover=function(){
    this.style.color="grey";
}
innerbtn3.onmouseleave=function(){
    this.style.color="#8590a6";
}
innerbtn3.addEventListener("click",()=>{
    div3.innerHTML='';//清空元素
    let picdiv=document.createElement("div");
    div3.appendChild(picdiv);
    let pic=document.createElement("img");
    picdiv.appendChild(pic);
    picdiv.style.display="inline-block";
    pic.src="./homepics/page3.jpg";
    pic.width="190";
    pic.height="195";
    pic.style.borderRadius="3px";
    let textdiv=document.createElement("div");
    div3.appendChild(textdiv);
    textdiv.innerHTML="PIKA:如图所示，让静态的雕塑有了动态美的打脸。...";
    textdiv.style.display="inline-block";
    textdiv.style.position="absolute";
    textdiv.style.marginLeft="3px";
    div3.style.position="relative";
    textdiv.appendChild(readall3);
    let newimg2=document.createElement("img");
    readall3.innerHTML="阅读全文";
    readall3.appendChild(newimg2);
    newimg2.src="./homepics/uplogo.png";
    newimg2.width="15";
    newimg2.height="15";
    newimg2.style.marginBottom="-2px"; 
    newimg2.style.marginLeft="5px";
})


