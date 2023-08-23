var allimg=document.images;
console.log(allimg);
for(i=0;i<=allimg.length-1;i++)
{
    allimg[i].src=`./images/${i}.jpg`
    console.log(i)
}

var imageFilePath;
function imageContainer(imagePath)
{
    document.querySelector("#biggerImageContainer").style.display="flex";
     document.querySelector("#image").style.backgroundImage=`url(${imagePath})`;
     imageFilePath=imagePath;
}
function closeImageContainer()
{
    document.querySelector("#biggerImageContainer").style.display="none";
    
}
function editWindowEnable(){
    document.querySelector("#editContainer").style.display="flex"
    document.getElementById("imageTag").style.backgroundImage=`URL(${imageFilePath})`
    console.log(imageFilePath)
}

function effects()
{
    var blurValue=document.getElementById("blurVal").value
    var brightnessVal=document.getElementById("brightnessVal").value;
    var constVal=document.getElementById("constVal").value;
    var grayVal=document.getElementById("grayVal").value;
    var hueVal=document.getElementById("hueVal").value;
    var invVal=document.getElementById("invVal").value;
    var opaVal=document.getElementById("opaVal").value;
    var satVal=document.getElementById("satVal").value;
    var sepVal=document.getElementById("sepVal").value;
    var rotZVal=document.getElementById("rotZVal").value;
    var rotXVal=document.getElementById("rotXVal").value;
    var rotYVal=document.getElementById("rotYVal").value;
    var scaleVal=document.getElementById("scaleVal").value;
    var scaleXVal=document.getElementById("scaleXVal").value;
    var scaleYVal=document.getElementById("scaleYVal").value;
    var skewVal=document.getElementById("skewVal").value;
    var skewXVal=document.getElementById("skewXVal").value;
    var skewYVal=document.getElementById("skewYVal").value;

    document.getElementById("imageTag").style.transform=`rotateZ(${rotZVal}deg)
    rotateX(${rotXVal}deg) rotateY(${rotYVal}deg) scale(${scaleVal}) scale(${scaleXVal})
    scale(${scaleYVal}) skew(${skewVal}deg) skew(${skewXVal}deg) skew(${skewYVal}deg)`

    document.getElementById("imageTag").style.filter=`blur(${blurValue}px) 
    brightness(${brightnessVal}%) contrast(${constVal}%) grayscale(${grayVal}%)
    hue-rotate(${hueVal}deg) invert(${invVal}%) opacity(${opaVal}%) saturate(${satVal}%) sepia(${sepVal}%)`
}
function editWindowClose()
{
    document.getElementById("editContainer").style.display="none"
}