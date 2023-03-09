const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const stopV = document.getElementById('stopV');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//Play and pause video


//Update play/pause icon


//Update progress & timestamp


// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);


stopV.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
stop.addEventListener('click', stopVideo);

