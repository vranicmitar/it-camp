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

// const cardContainer = document.querySelector(".container");
// async function getData() {
//   const response = await fetch(
//     "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
//   );
//   const data = await response.json();
//   console.log(data);
//   console.log(data.Video[0]);
//   data.Video.forEach((item, index) => {
//     const card = document.createElement("div");
//     card.className = "item1";
//     const title = document.createElement("h2");
//     title.textContent = item.name;
//     const link = document.createElement("a");
//     link.href = item.source.hd;
//     const image = document.createElement("img");
//     image.src = item.snapshots.sd;
//     link.appendChild(image);
//     link.appendChild(title);
//     card.appendChild(link);
//     cardContainer.appendChild(card);
//     function pretvori(time) {
//       let h = Math.trunc(time / 3600);
//       let m = Math.trunc((time % 3600) / 60);
//       let s = time - (h * 3600 + m * 60);
//       if (m > 9 && s > 9) return `0${h}:${m}:${s}`;
//       else if (m > 9 && s <= 9) return `0${h}:${m}:0${s}`;
//       else if (m <= 9 && s > 9) return `0${h}:0${m}:${s}`;
//       else return `0${h}:0${m}:0${s}`;
//     }
//     let duration = document.createElement("p");
//     duration.textContent = pretvori(Number(item.duration));
//     card.appendChild(duration);
//   });
// }

// getData();
