$(function(){
    $("#myVideo").attr("src","sample-mp4-file.mp4");
    $("#playBtn").on("click",function(){
        if($("#myVideo")[0].paused){
            $("#myVideo")[0].play();
            $("#myVideo").text("Pause");
        }else{
            $("#myVideo")[0].Pause();
            $("#myVideo").text("Play");
        }
    }
    )});
    $("#fullBtn").on("click",function(){
        $("#myVideo")[0].webkitEnterFullscreen();
    });
    $("#lowerVolumeBtn").on("click", downVolume);
    $("#higherVolumeBtn").on("click", upVolume);
    $("#myVideo").on("timeupdate",updateProgress);
    $("#progressBar").on("change",changeProgress);

    function downVolume() {
        varmyVideo=$("#myVideo")[0];
        if(myVideo.volume==0) {
        } else if(myVideo.volume<0.1) {
            myVideo.volume=0;
        }else{
            myVideo.volume=myVideo.volume-0.1;
        }
        volumeDisplay.innerHTML=myVideo.volume.toFixed(2);
    }
    function upVolume() {
        var myVideo=$("#myVideo")[0];
        if(myVideo.volume==1) {
        } else if(myVideo.volume>0.9) {
            myVideo.volume=1;
        } else{
            myVideo.volume=myVideo.volume+0.1;
        }
        volumeDisplay.innerHTML=myVideo.volume.toFixed(2);
    }
    function updateProgress(){
        $("#timeDisplay").text(Math.floor($("#myVideo")[0].currentTime));
        $("#timeDisplay").append(`/${Math.floor($("#myVideo")[0].duration)}秒`);
        $("#progressBar")[0].value =$("#myVideo")[0].currentTime;
    }

    function changeProgress(){
        $("#myVideo")[0].currentTime=$("#progressBar")[0].value;}

    
