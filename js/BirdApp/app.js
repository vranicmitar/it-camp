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

const getVideos = async () => {
  const response = await fetch(
    "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
  );
  const data = await response.json();
  console.log(data);
  const playerId = data.Player.id;
  console.log(playerId);
  const videos = data.Video;
  console.log(videos);
};

getVideos();
