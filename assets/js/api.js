
// {"images":{"base_url":"http://image.tmdb.org/t/p/","secure_base_url":"https://image.tmdb.org/t/p/","backdrop_sizes":["w300","w780","w1280","original"],"logo_sizes":["w45","w92","w154","w185","w300","w500","original"],"poster_sizes":["w92","w154","w185","w342","w500","w780","original"],"profile_sizes":["w45","w185","h632","original"],"still_sizes":["w92","w185","w300","original"]},"change_keys":["adult","air_date","also_known_as","alternative_titles","biography","birthday","budget","cast","certifications","character_names","created_by","crew","deathday","episode","episode_number","episode_run_time","freebase_id","freebase_mid","general","genres","guest_stars","homepage","images","imdb_id","languages","name","network","origin_country","original_name","original_title","overview","parts","place_of_birth","plot_keywords","production_code","production_companies","production_countries","releases","revenue","runtime","season","season_number","season_regular","spoken_languages","status","tagline","title","translations","tvdb_id","tvrage_id","type","video","videos"]}

// fetch('https://api.themoviedb.org/3/configuration?api_key=6f88efd677e821e5e63075bf79e8eb54')
//     .then(res => res.json())
//     .then(completedata =>{
//         let data = '';
//         completedata.map(values){
//             data+= ``
//         }
        
//     }
//     )


    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Zjg4ZWZkNjc3ZTgyMWU1ZTYzMDc1YmY3OWU4ZWI1NCIsInN1YiI6IjYzZDg2MjY3MTJiMTBlMDA5M2U4ZmMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTD7ZVryJwr3RlLfQV-DW8gLrrig1GOgsVwbvkd092M'
        }
      };
      
      fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response =>{
            console.log(response)
        })
        .catch(err => console.error(err));

          
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
         .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));