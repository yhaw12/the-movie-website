// Select the elements within your HTML structure

// MOVIE SECTION API
const tpTrending = document.querySelector('.popular'); 
const mdTrending = document.querySelector('.trendy'); 
const bdTrending = document.querySelector('.upcoming-movies'); 


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Zjg4ZWZkNjc3ZTgyMWU1ZTYzMDc1YmY3OWU4ZWI1NCIsInN1YiI6IjYzZDg2MjY3MTJiMTBlMDA5M2U4ZmMwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MTD7ZVryJwr3RlLfQV-DW8gLrrig1GOgsVwbvkd092M'
  }
};


    // TOP BANNER
   function fetchMovieData(){
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
    .then(response=> response.json())
    .then(data =>{
      let currentIndex = 0;
      const smallImages = data.results.map(movie=> movie.poster_path)


       // Function to update content with the next movie
       function updateContent(index) {
        const movie = data.results[index];
        document.getElementById('bgImage').src = `http://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
        document.getElementById('movieTitle').textContent = movie.title;
        document.getElementById('movieYear').textContent = movie.release_date.split('-')[0];
        document.getElementById('movieRating').textContent = movie.vote_average;
        // document.getElementById('movieGenre').textContent = movie.genres.map(genre => genre.name).join(', ');
        document.getElementById('movieDescription').textContent = movie.overview;
      }

       

       updateContent(currentIndex);
       

        // Set interval to change small images and update content
       setInterval(()=>{
        currentIndex = (currentIndex + 1) ;
        document.getElementById('smallImages').innerHTML = `
            <img src="http://image.tmdb.org/t/p/w185/${smallImages[currentIndex]}">
        `;
        updateContent(currentIndex);
       }, 2500)
    })
    .catch(err => console.error('Error fetching data:', err));
   }

    fetchMovieData();



        // WEEKLY TRENDING
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
          .then(response => response.json())
          .then(data =>{
            console.log(data)
            let trendyMovie ='';

          data.results.forEach((trendy, index)=>{
            trendyMovie+= `
              <div class="card key=${index}  ">
                <div class="card-box">
                <div class="image">
                    <img src="http://image.tmdb.org/t/p/w500/${trendy.poster_path}">
                </div>
                <h3>${trendy.title}</h3>
                  <div class="ratings">
                    <div class="left">
                      <img src="assets/images/star.png">
                          <span>${trendy.vote_average}</span>
                      </div>

                      <div class="right">
                          <span>${trendy.vote_count}</span>
                      </div> 
                    </div>  
                  </div>`
          })

          mdTrending.innerHTML = trendyMovie; 
      
          })
          .catch(err => console.error(err));

         

        // UPCOMING MOVIES
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
         .then(response => response.json())
            .then(data=>{
               let upcomingMovie ='';

               data.results.forEach((up, index)=>{
                upcomingMovie+=`
                <div class="card key=${index}  ">
                   <div class="card-box">
                     <div class="image">
                         <img src="http://image.tmdb.org/t/p/w500/${up.poster_path}">
                     </div>
                     <h3>${up.title}</h3>
                     <div class="ratings">
                       <div class="left">
                         <img src="assets/images/star.png">
                         <span>${up.vote_average}</span>
                     </div>

                     <div class="right">
                         <span>${up.vote_count}</span>
                     </div> 
                 </div>
                  
               </div>`
               })

               bdTrending.innerHTML = upcomingMovie; 

            })
            .catch(err => console.error(err));
