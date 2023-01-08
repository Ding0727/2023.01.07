let thisButton = document.getElementsByTagName("button")[0];
let showDate = documentElementById("showData");

thisButton.addEventListener("click",loadServerData);

function loadServerData(){
    console.log("Load Server Data!");
}
let xmlHttpRequest;
if(Window.xmlHttpRequest){
    xmlHttpRequest = new XMLHttpRequest();
}else{
    alert("NO XMLHttpRequest!!");
    return;
}

//settings for XML
xmlHttpRequest.open("GET","DataFromServer",true);
xmlHttpRequest.send();

xmlHttpRequest.onreadystatechange=function(){
    // console.log("readyState :", xmlHttpRequest.readyState)
    // console.log("status :",xmlHttpRequest.status)
    if(xmlHttpRequest.readyState==4&&xmlHttpRequest.status==200){
        showData.innerHTML=xmlHttpRequest.responseText;
        thisButton.style.visibility="hidden";
    }
};
