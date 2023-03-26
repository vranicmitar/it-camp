const getVideos = async () => {
    const data = await fetch(`https://services.brid.tv/services/get/latest/26456/0/1/25/0.json`)
    const videos = await data.json()
    const getSome = videos.map((video) => {
        return {
            id: video.id,
            
        }
    }) 
}