# JavaScript Implementation 
## 1. Variable Naming & Indentation
- ### Descriptive camelCase variable names
```JavaScript
const hasVisitedBefore = document.cookie.includes('visitedBefore=true');

const searchInput = document.getElementById('search');
```
- ### Consistent indentation
```JavaScript
if (hasVisitedBefore) {
      alert("Welcome back to Art Explorer!");
    } else {
      //set cookies to expire in 7 days
      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 7);
      document.cookie = `visitedBefore=true; expires=${expireDate.toUTCString()}; path=/`;
      alert("Welcome to Art Explorer!");
    }
```
## 2. Function Naming & Modularity
- ### Created functions with clear names
```JavaScript
function greetUser(){
    //check if visitedBefore cookie exists
    const hasVisitedBefore = document.cookie.includes('visitedBefore=true');
  
    if (hasVisitedBefore) {
      alert("Welcome back to Art Explorer!");
    } else {
      //set cookies to expire in 7 days
      const expireDate = new Date();
      expireDate.setDate(expireDate.getDate() + 7);
      document.cookie = `visitedBefore=true; expires=${expireDate.toUTCString()}; path=/`;
      alert("Welcome to Art Explorer!");
    }
}
```
- ### Functions are focused on a single task
```JavaScript
function saveSearch(term){
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    //limit history to last 10 searches
    if(searchHistory.length >= 10){
        searchHistory.shift(); //removes the oldest search
    }

    //save only if term is not already in history
    if(!searchHistory.includes(term)){
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        
    }
    const recentSearchArea = document.getElementById('recentSearchesOutput')
    recentSearchArea.innerHTML="Recent Searches: " + searchHistory;
}
```
## 3. Arrays & Objects Usage
- ### Arrays used for collections
```JavaScript
let arts=[
    {
        image:"monalisa.jpg",
        name: "Mona Lisa",
        artist: "Leonardo Da Vinci",
        date: 1503,
    },
    {
        image:"birthofvenus.jpg",
        name: "The Birth of Venus",
        artist: "Sandro Botticelli",
        date: 1486,
    },
    {
        image:"girlpearlearring.webp",
        name: "Girl With a Pearl Earring",
        artist: "Johannes Vermeer",
        date: 1665,
    },
    {
        image:"persistanceofmemory.webp",
        name: "The Persistance of Memory",
        artist: "Salvador Dali",
        date: 1931,
    },
    {
        image:"towerbabel.jpg",
        name: "The Tower of Babel",
        artist: "Pieter Bruegel",
        date: 1563,
    },
    {
        image:"gardenearth.webp",
        name: "The Garden of Earthly Delights",
        artist: "Hieronymus Bosch",
        date: 1500,
    },
    {
        image:"bluedancers.jpg",
        name: "Blue Dancers",
        artist: "Edgar Degas",
        date: 1897,
    },
    {
        image:"thekiss.webp",
        name: "The Kiss",
        artist: "Gustav Klimt",
        date: 1907,
    },
    {
        image:"impression.jpg",
        name: "Impression, Sunrise",
        artist: "Claude Monet",
        date: 1872,
    },
    {
        image:"thescream.webp",
        name: "The Scream",
        artist: "Edvard Munch",
        date: 1893,
    },
    {
        image:"starrynight.jpg",
        name: "The Starry Night",
        artist: "Vincent Van Gogh",
        date: 1889,
    },
    {
        image:"greatwave.webp",
        name: "The Great Wave of Kanagawa",
        artist: "Katsushika Hokusai",
        date: 1831,
    }
];
```
- ### Create objects with properties
```JavaScript
    {
        image:"monalisa.jpg",
        name: "Mona Lisa",
        artist: "Leonardo Da Vinci",
        date: 1503,
    },
    {
        image:"birthofvenus.jpg",
        name: "The Birth of Venus",
        artist: "Sandro Botticelli",
        date: 1486,
    },
    {
        image:"girlpearlearring.webp",
        name: "Girl With a Pearl Earring",
        artist: "Johannes Vermeer",
        date: 1665,
    },
    {
        image:"persistanceofmemory.webp",
        name: "The Persistance of Memory",
        artist: "Salvador Dali",
        date: 1931,
    }
```
## 4. Array Methods
- ### Use filter to select items
```JavaScript
const filteredArts = arts.filter(art=>{
    //make sure art and art.name exist and are the correct type
    if(!art || typeof art.name !== 'string'){
        console.warn('Invalid art object found:', art);
        return false;
    }
    return art.name.toLowerCase().includes(searchTerm.toLowerCase());
});
```
- ### Use forEach to iterate
```JavaScript
artElements.forEach(element=>{
    container.appendChild(element);
});
```
## 5. Looping/Iteration
- ### For loops
```JavaScript
for(let i=0;i<=10;i++){
        //save only if term is not already in history
        if(!searchHistory.includes(term)){
            searchHistory.push(term);
            localStorage.setItem('searchHistory', JSON.stringify(searchHistory));  
        }
    }
```
## 6. JSON Handling
- ### Parse JSON strings
```JavaScript
let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
```
- ### Convert objects to JSON
```JavaScript
localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
```
## 7. Web Storage (local/session)
- ### Use of localStorage
```JavaScript
localStorage.setItem('theme', 'dark');
localStorage.setItem('theme', 'light');
```
- ### Use of sessionStorage
```JavaScript
sessionStorage.setItem('timeOnPage', sessonSeconds.toString());
```
## 8. Saving/Retrieving Data
- ### Save user preferences
```JavaScript
//save theme preference to localStorage
    if (document.body.classList.contains('darkTheme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
```
- ### Load saved data
```JavaScript
//load theme preference from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('darkTheme');
    }
```
## 9. Cookies with Expiry
- ### Set cookies with expiration
```JavaScript
const expireDate = new Date();
expireDate.setDate(expireDate.getDate() + 7);
document.cookie = `visitedBefore=true; expires=${expireDate.toUTCString()}; path=/`;
alert("Welcome to Art Explorer!");
```
- ### Read cookies
```JavaScript
document.cookie = `visitedBefore=true; expires=${expireDate.toUTCString()}; path=/`;

const hasVisitedBefore = document.cookie.includes('visitedBefore=true');

if (hasVisitedBefore) {
    alert("Welcome back to Art Explorer!");
}
```
## 10. DOM Manipulation
- ### Create elements
```JavaScript
const artDiv = document.createElement('div');
```
- ### Add elements to page
```JavaScript
container.appendChild(element);
```
- ### Remove elements
```JavaScript
if(message){
    message.remove();
}
```
## 11. CSS Manipulation via JS
- ### Add/remove CSS classes
```JavaScript
document.body.classList.add('darkTheme');
```
- ### Change styles directly
```JavaScript
timerElement.style.marginTop = "20px";
timerElement.style.textAlign = "center";
```
## 12. Theme Preference
- ### Toggle theme
```JavaScript
function toggleTheme(){
    themeToggle = document.getElementById("themeToggle")

     //load theme preference from localStorage
     if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('darkTheme');
      }
}
```
- ### Save theme preferences
```JavaScript
//save theme preference to localStorage
    if (document.body.classList.contains('darkTheme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
```
## 13. Comments & Code Readability
- ### Descriptive comments
```JavaScript
 //filter arts that match the search term
    const filteredArts = arts.filter(art=>{
        //make sure art and art.name exist and are the correct type
        if(!art || typeof art.name !== 'string'){
            console.warn('Invalid art object found:', art);
            return false;
        }
        return art.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
```
- ### Document function parameters
```JavaScript
//term parameter is taken from the search() function's searchInput
function saveSearch(term){
    ...
}
```
- ### Debugging in console.log
```JavaScript
console.log("Starting session timer"); //debug log

console.log(`Found ${filteredArts.length} arts matching ${searchTerm}`) //debug log
```
## 14. Error Handling & Debugging
- ### Try/catch blocks
```JavaScript
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
```
- ### Validate input
```JavaScript
//validate
    if(!art || typeof art.name !== 'string'){
        console.warn('Invalid art object:', art);
        return;
    }
```
## 15. Regex Validation
- ### Use regex for searching
```JavaScript
//validate with regex
    let pattern = /[A-z]/g;
    let result = searchTerm.match(pattern);
    if(!result){
        console.warn("Search term is not a word") //debug log
        alert("Please search for arts with letters, not numbers.")
        searchTerm='';
    }
```
## 16. Timer Object
- ### Implement timer
```JavaScript
    let timerInterval = setInterval(()=>{
        sessonSeconds++;
        updateTimerDisplay(timerElement, sessonSeconds);

        //store current time in sessionStorage (automatically cleared when tab closes)
        sessionStorage.setItem('timeOnPage', sessonSeconds.toString());

        //trigger special message for long sessions (over 5 minutes)
        if(sessonSeconds===300){
            showLongSessionMessage();
        }
    }, 1000);
```
## 17. Math, String, Random Methods
- ### Use Math functions
```JavaScript
const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
```
- ### Use string methods
```JavaScript
const searchTerm = this.value.trim().toLowerCase();
```
## 18. Event Listeners & Shortcuts
- ### Click events
```JavaScript
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('darkTheme');

    //save theme preference to localStorage
    if (document.body.classList.contains('darkTheme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
}); 
```
- ### Keyboard events
```JavaScript
document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key === 'D'){
        themeToggle.click();
    }
});
```
## 19. Real-time Search & History
- ### Search function
```JavaScript
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
```
- ### Track search history
```JavaScript
//save search function
//term parameter is taken from the search() function's searchInput
function saveSearch(term){
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    
    //limit history to last 10 searches
    if(searchHistory.length >= 10){
        searchHistory.shift(); //removes the oldest search
    }

    //save only if term is not already in history
    if(!searchHistory.includes(term)){
        searchHistory.push(term);
        localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
        
    }
    const recentSearchArea = document.getElementById('recentSearchesOutput')
    recentSearchArea.innerHTML="Recent Searches: " + searchHistory;
}
```
## 20. CRUD Functionality
- ### Create items
```JavaScript
searchHistory.push(term);
```
- ### Read items 
```JavaScript
const filteredArts = arts.filter(art=>{
    //make sure art and art.name exist and are the correct type
    if(!art || typeof art.name !== 'string'){
        console.warn('Invalid art object found:', art);
        return false;
    }
    return art.name.toLowerCase().includes(searchTerm.toLowerCase());
});
```
- ### Update items
```JavaScript
renderArts(filteredArts);
```
- ### Delete items
```JavaScript
searchHistory.shift();
```