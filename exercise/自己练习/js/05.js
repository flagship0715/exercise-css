function getStyle(obj,attr)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[attr];
    }
    else
    {
        return getComputedStyle(obj,false)[attr];
    }
}
window.onload=function(){
				let docMain=document.getElementsByClassName("img-main")[0];
				let ulImg=document.getElementById("ul_img");
				let ulCon=document.getElementById("ul_cons");
				let dLeft=document.getElementById("left");
				let dRight=document.getElementById("right");
				
				
				
				dLeft.onclick=function(e){
					console.log(e.target);
					let temp=-470;
					let cur=parseInt(getStyle(ulImg,'top'));
					ulImg.style.top=cur+temp+'px';
				}
				dRight.onclick=function(){
					
				}
			}