// const getVideos = async () => {
//   const data = await fetch(
//     `https://services.brid.tv/services/get/latest/26456/0/1/25/0.json`
//   );
//   let videos = await data.json();
//   const getSome = videos.map((video) => {
//     return {
//       id: video.id,
//     };
//   });
// };

// getVideos();

const videos = document.querySelector(`.videos`);

const getVideos = async () => {
  const response = await fetch(
    `https://services.brid.tv/services/get/latest/26456/0/1/25/0.json`
  );
  const data = await response.json();
  // console.log(videos);
  data.Video.forEach((video) => {
    const videoItem = document.createElement(`div`);
    videoItem.className = `video-item`;
    const slikaVidea = document.createElement(`img`);
    slikaVidea.src = video.snapshots.sd;

    const naslov = document.createElement(`h1`);
    naslov.textContent = video.name;

    const trajanje = document.createElement(`span`);

    const link = document.createElement(`a`);
    link.className = `linkovi`;
    link.href = video.source.hd;

    link.appendChild(slikaVidea);
    link.appendChild(naslov);
    videoItem.appendChild(link);
    videoItem.appendChild(trajanje);
    videos.appendChild(videoItem);

    function pretvaranjeTrajanjeVidea(vreme) {
      const sati = Math.floor(vreme / 3600);
      const minuti = Math.floor((vreme % 3600) / 60);
      const sekunde = Math.floor(vreme % 60);

      return `${sati.toString().padStart(2, "0")}:${minuti
        .toString()
        .padStart(2, "0")}:${sekunde.toString().padStart(2, "0")}`;
    }
    trajanje.textContent = pretvaranjeTrajanjeVidea(+video.duration);
  });
};

getVideos();
