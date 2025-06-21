

const movies = [
      { title: "Inception", description: "A mind-bending thriller about dreams and reality." },
      { title: "The Matrix", description: "A hacker discovers the world is a simulation." },
      { title: "Interstellar", description: "A journey through space to save humanity." },
      { title: "The Godfather", description: "A mafia family struggles for power." },
      { title: "Finding Nemo", description: "An adventurous clownfish searches for his lost son." }
    ];




    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const resultsDiv = document.getElementById("results");

    function normalizeText(text){
        return text.toLowerCase().replace(/[^\w\s]/g,"");

    }

    function searchMovies(query){
        const keywords = normalizeText(query).split(/\s+/).filter(Boolean);
        if(keywords.length === 0) return [];

        return movies.filter(movie =>{
            const desc = normalizeText(movie.description);
            return keywords.some(keyword => desc.includes(keyword));
        });

    }

    function renderResults(results){
        if(results.length === 0){
            resultsDiv.innerHTML = "<p>No movies found.</p>";
            return;
        }

        resultsDiv.innerHTML = results
        .map(movie =>`
            <div class="movie">
            <p class="title">${movie.title}</p>
            <p>${movie.description}</p>
            `).join("");
    }

    searchBtn.addEventListener("click", ()=>{
        const query = searchInput.value.trim();
        if(!query){
            resultsDiv.innerHTML = "<p>Please enter keywords to search.</p>";
            return;
        }

        const results = searchMovies(query);
        renderResults(results);
    });


    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") searchBtn.click();
    });


