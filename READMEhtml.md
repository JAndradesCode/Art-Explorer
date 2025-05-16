# HTML Implementation
## 1. Doctype & HTML Structure
- ### Include proper DOCTYPE declaration
```HTML
<!DOCTYPE html>
```
- ### Use properly nested HTML tags
```HTML
<div class="searchArea">
    <input type="text" id="search" placeholder="Search by name..." />
    <button id="searchButton">Search</button>
</div>
```
## 2. Lang Attribute
- ### Set language attribute on html tag
```HTML
<html lang="en">
```
## 3. Meta Tags
- ### Include charset meta tag
```HTML
<meta charset="UTF-8" />
```
- ### Include description meta tag
```HTML
<meta name="description" content="Web application to explore art" />
```
## 4. Semantic Tags
- ### Use semantic tags for page structure
```HTML
<header>
      <h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-palette" viewBox="0 0 16 16">
        </svg>
        Art Explorer
      </h1>
      <button id="themeToggle" onclick="toggleTheme()">Toggle Theme</button>
      <div class="searchArea">
        <input type="text" id="search" placeholder="Search by name..." />
        <button id="searchButton">Search</button>
      </div>
      <p id="recentSearchesOutput">Recent Searches: </p>
    </header>
```
## 5. Heading Structure
- ### Use logical heading order
```HTML
<h1>Art Explorer</h1>
```
## 6. Alt Text for Images
- ### Include descriptive alt text for images
```HTML
<div class="artHeader">
    <img src="${art.image || ''}" alt="${art.name} by ${art.artist}" class="art-img">
    <h3>${art.name}</h3> 
</div>
```
## 7. Form Structure
- ### Use proper form tags with input associations
```HTML
<input type="text" id="search" placeholder="Search by name..." />
```
## 8. Button & Input Elements
- ### Use type-specific button and inputs
```HTML
<button id="themeToggle" onclick="toggleTheme()">Toggle Theme</button>
<div class="searchArea">
    <input type="text" id="search" placeholder="Search by name..." />
    <button id="searchButton">Search</button>
</div>
```
## 9. Anchor Tags
- ### Use valid href attributes
```HTML
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Asap+Condensed:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"
/>
```
## 10. External CSS/JS Links
- ### Properly link CSS and JS files
```HTML
<link rel="stylesheet" href="styles.css">

<script src="greet.js"></script>
<script src="data.js"></script>
<script src="render.js"></script>
<script src="theme.js"></script>
<script src="timer.js"></script>
```
## 11. Responsive Meta & Layout
- ### Viewport meta tag
```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```
- ### Container elements for responsive layout
```HTML
<div class="searchArea">
    <input type="text" id="search" placeholder="Search by name..." />
    <button id="searchButton">Search</button>
</div>
```
## 12. Responsive Images
- ### Use responsive image techniques
```CSS
.art-img {
  max-width: 100%;
  width: 300px;
  height: 300px;
  object-fit: cover;
}
```
## 13. Comments
- ### Meaningful HTML comments
```HTML
<div id="artsContainer">
    <!--where arts will be populated-->
</div>
```
## 14. Indentation & Formatting
- ### Consistent indentation
```HTML
<div class="searchArea">
    <input type="text" id="search" placeholder="Search by name..." />
    <button id="searchButton">Search</button>
</div>
```
## 15. HTML Validation
- ### HTML passes W3C validation
    - No unclosed tags ✔️
    - No missing required attributes ✔️
    - Properly nested elements ✔️
    - Valid attribute values ✔️
