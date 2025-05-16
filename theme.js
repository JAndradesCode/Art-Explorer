//Toggle theme
let body = document.getElementById("body");

function toggleTheme(){
    themeToggle = document.getElementById("themeToggle")

     //load theme preference from localStorage
     if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('darkTheme');
      }
}

//eventlistener
themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('darkTheme');

    //save theme preference to localStorage
    if (document.body.classList.contains('darkTheme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }); 

//add keyboard shortcut (shift+D)
document.addEventListener('keydown', function(e){
    if(e.shiftKey && e.key === 'D'){
        themeToggle.click();
    }
  })
toggleTheme();