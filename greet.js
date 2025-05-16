//Greet user when they open the application
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
greetUser();