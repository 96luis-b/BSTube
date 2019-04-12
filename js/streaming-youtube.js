 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');
 var search = document.getElementById('search'); 

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 console.log(firstScriptTag);
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 
 var player;
console.log("sdcsdkcks")
 search.onclick = function onYouTubeIframeAPIReady() {
 var link = document.getElementById('string-link')
     
     console.log("dkskcdclsdkmclk");
     console.log(link)
     console.log(link.value)
    var start = link.value.indexOf("=") + 1;
     var end = (link.value.indexOf("=")) + 11;
    var IDVideo = link.value.substring(start, end);
    console.log(IDVideo)
    IDVideo = ""+IDVideo;
   player = new YT.Player('player', {
     height: '360',
     width: '640',
     videoId: "ZhJrKC_xlPc",
     events: {
       'onReady': onPlayerReady,
       'onStateChange': onPlayerStateChange
     }
   });
 }

 // 4. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
     console.log(event);
   event.target.playVideo();
 }

 // 5. The API calls this function when the player's state changes.
 //    The function indicates that when playing a video (state=1),
 //    the player should play for six seconds and then stop.
 var done = false;
 function onPlayerStateChange(event) {
   if (event.data == YT.PlayerState.PLAYING && !done) {
     setTimeout(stopVideo, 6000);
     done = true;
   }
 }
 function stopVideo() {
   player.stopVideo();
 }