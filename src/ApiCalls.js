
 export const fetchData = async () => {
    try {
      const response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      // result.then (data => {
      //   return data
      // })
      return result
    } catch (error) {
        console.log('Something');

    } 
  };

export const fetchMovieVideos = async (id) => {
  try {
    const response = await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    // result.then (data => {
    //   return data
    // })
    return result
  } catch (error) {
      console.log('Something');

  } 
}
  