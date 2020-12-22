export const getImage = async() => {
    try{
        const apiKey = 'cqDyquoPCZDl2iOHC4dDHzlf80orxefP';
        const apiResponse = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await apiResponse.json();
        const { url } = data.images.original;

        return url;
    }catch(error){
        return 'No se pudo obtener una image';
    }
};