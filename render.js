//Populate page
function renderArts(arts){
    let container = document.getElementById("artsContainer");

    //check container exists
    if(!container){
        console.error('Container not found');
        return;
    }

    //clear existing content
    container.innerHTML = '';

    //if no arts are found, show a message
    if(arts.length === 0){
        console.log('No countries found, showing empty messages'); //debug log
        container.innerHTML=`<p>No arts found.</p>`;
        return;
    }

    //use array to collect elements and join them or create container div
    const artElements=[];
    arts.forEach(art=>{
        //validate
        if(!art || typeof art.name !== 'string'){
            console.warn('Invalid art object:', art);
            return;
        }
        const artDiv = document.createElement('div');
        artDiv.className = 'art';
        artDiv.innerHTML=
        `<div class="artHeader">
            <img src="${art.image || ''}" alt="${art.name} by ${art.artist}" class="art-img">
            <h3>${art.name}</h3> 
        </div>
        <p><strong>Artist:</strong> ${art.artist}</p>
        <p><strong>Date created:</strong> ${art.date}</p>
        `;
        artElements.push(artDiv);
        console.log(artElements);
    });

    //append all art cards at once
    artElements.forEach(element=>{
        container.appendChild(element);
    });

    console.log(`Successfully rendered ${arts.length} arts`); //debug log  
}
renderArts(arts);

//initialize search function
function search(){
    renderArts(arts);
    const searchInput = document.getElementById('search');

    //check if search input exists
    if(!searchInput){
        console.error('Search input element not found')
        return;
    }
    
    //real time search
    searchInput.addEventListener('input', function(){
        const searchTerm = this.value.trim().toLowerCase();

        //perform search action on each input
        if(searchInput!==''){
            searchArts(searchTerm);
        }
        else{
            renderArts(arts);
        }
    });

    //add keyboard shortcut for search (enter key)
    searchInput.addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            const searchTerm = searchInput.value.trim().toLowerCase();
            if(searchTerm!==''){
                searchArts(searchTerm);
                saveSearch(searchTerm);
    
                //clear search box after pressing enter
                searchInput.value = "";
            }
        } 
    });
}

//search arts function
function searchArts(searchTerm){
    if(searchTerm === ''){
        renderArts(arts);
        return;
    }

    //validate with regex
    let pattern = /[A-z]/g;
    let result = searchTerm.match(pattern);
    if(!result){
        console.warn("Search term is not a word") //debug log
        alert("Please search for arts with letters, not numbers.")
        searchTerm='';
    }

    //filter arts that match the search term
    const filteredArts = arts.filter(art=>{
        //make sure art and art.name exist and are the correct type
        try{
            if(!art || typeof art.name !== 'string'){
                console.warn('Invalid art object found:', art);
                throw new Error('Invalid art object found: ' + art);
            }
        return art.name.toLowerCase().includes(searchTerm.toLowerCase());
        } catch(error){
            console.warn(error.message)
            throw error
        }
    });

    console.log(`Found ${filteredArts.length} arts matching ${searchTerm}`) //debug log

    //render the filtered arts
    renderArts(filteredArts);
}

//save search function
//term parameter is taken from the search() function's searchInput
function saveSearch(term){
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    //limit history to last 10 searches
    if(searchHistory.length >= 10){
        searchHistory.shift(); //removes the oldest search
    }

    for(let i=0;i<=10;i++){
        //save only if term is not already in history
        if(!searchHistory.includes(term)){
            searchHistory.push(term);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));  
        }
    }
    const recentSearchArea = document.getElementById('recentSearchesOutput')
    recentSearchArea.innerHTML="Recent Searches: " + searchHistory;
}
search();
renderArts(arts);