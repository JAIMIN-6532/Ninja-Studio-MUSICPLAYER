const songs = [
    {id: "s1", sname: "Shape of You", artist: "Ed Sheeran", img:"images/alan.jpg", genre: "pop", source: "Music/FEEL_THE_LOVE___MASHUP__DJ_RHN_ROHAN___2018___ATIF_ASLAM_ARJIT_SINGH(256k).mp3"},
    {id: "s2", sname: "Faded", artist: "Alan Walker", img:"images/arman.jpg", genre: "hiphop", source: "Music/Aashiyan_-_Barfi_Pritam_Shreya_Nikhil_Paul_George_Ranbir_Priyanka(256k).mp3"},
    {id: "s3", sname: "Mighty Raju", artist: "KK", img:"images/kk.jpg", genre: "pop", source: "Music/Locked_Away_Mashup_(Sush_&_Yohan_x_Aaron_Aamir)(256k).mp3"},
    {id: "s4", sname: "Tere Bin", artist: "Kishor", img:"images/kishor.jpg", genre: "rock", source: "Music/Dekha_Ek_Khwab_x_Laila_.mp3"},
    {id: "s5", sname: "Believer", artist: "Imagine Dragons", img:"images/chill.jpg", genre: "hiphop", source: "Music/Something.mp3"}
  ];

  const songselected = document.querySelectorAll(".onesong");
  const footerImage = document.querySelector(".imgfooter");
  const footerSongName = document.querySelector(".songname h3");
  const footerSongArtist = document.querySelector(".songname p");
  const selectedAside = document.querySelector("#AsideQueue");
  const playBtn = document.querySelector(".playPauseBtn");


  let currentaudio = null;

  songselected.forEach((i,index)=>{
    i.addEventListener("click",()=>{
      const clickedSong = i.querySelector("h3").textContent;
      const currentSong = songs.find(i => i.sname === clickedSong);
      if(currentSong){
       
        if(currentaudio){
          currentaudio.pause();
        }
        
        currentaudio = document.createElement("audio");
        currentaudio.src = currentSong.source;
        footerImage.style.backgroundImage = `url(${currentSong.img})`;
        footerSongName.textContent = currentSong.sname;
        currentaudio.play();
       
      }
      else{
        alert("this song is not available!!!")
      }
    })
  })
  playBtn.addEventListener("click",()=>{
    if (currentaudio) {
      if (currentaudio.paused) {
        playBtn.classList.remove("fa-play-circle");
        playBtn.classList.add("fa-pause-circle");
        currentaudio.play();
      } else {
        playBtn.classList.remove("fa-pause-circle");
        playBtn.classList.add("fa-play-circle");
        currentaudio.pause();
      }
    }
  })

  var tl = gsap.timeline();

  tl.from("header",{
    opacity:0,
    top:"-30%",
    duration:0.5,
  })

  gsap.from("aside",{
    opacity:0,
    right:"-40%",
    duration : 0.5, 
  })

  tl.from("main",{
    opacity:0,
  })
  gsap.from("footer",{
    opacity:0,
    bottom:"-20%"
  })