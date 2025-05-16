# CSS Implementation
## 1. Global Reset & Box Model
- ### Universal selector used to create default resets and box-sizing
```CSS
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
```
## 2. CSS Variables
- ### Uses :root variables effectively
```CSS
:root {
  --primary-margin: 10px;
}
```
## 3. Organized CSS Structure
- ### Groups styles logically with comments
```CSS
/*Timer Styles*/
#sessionTimer {
  color: #202c39;
  margin-bottom: 30px;
}

/*Message Styles*/
#longSessionMessage {
  padding: 10px;
  width: 50%;
  margin: 0 auto;
  background-color: white;
  color: #202c39;
  border-radius: 8px;
  text-align: center;
}
#dismissMessage {
  margin-top: var(--primary-margin);
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
```
## 4. Responsive Design
- ### Use of media queries
```CSS
/*Media Queries*/
@media only screen and (max-width: 430px){
  header h1{
    font-size: 2rem;
  }
  input{
    width: 200px;
  }
  .searchArea{
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 320px){
  input{
    width: 100px;
  }
}
```
- ### Use of flexible units
```CSS
.art-img {
  max-width: 100%;
  width: 300px;
  height: 300px;
  object-fit: cover;
}
```
## 5. Typography Styling
- ### Consistent weights, fonts, and spacing
```CSS
font-family: "Inter", sans-serif;

margin-top: var(--primary-margin);
```
## 6. Color Scheme & Contrast
- ### Well-chosen, accessible color combinations
```CSS
color: #202c39;
background-color: #ebebeb;
```
## 7. Flexbox Usage
- ### Layouts utilize `display: flex` correctly
```CSS
#artsContainer {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 50px 20px 50px;
}
```
## 8. Button & Input Styling
- ### Stylish and accessible buttons/inputs
```CSS
button {
  background-color: #427aa1;
  transition: background-color 0.5s;
  padding: 5px 8px;
  border: none;
  border-radius: 4px;
}
button:hover {
  cursor: pointer;
  background-color: #05668d;
}

input {
  width: 300px;
  padding: 5px 5px;
}
```
## 9. Compopnent Reusability
- ### Common classes used multiple times
```CSS
.lightTheme {
  color: #202c39;
  background-color: #ebebeb;
  transition: color 1s, background-color 1s;
}
.darkTheme {
  color: #ebebeb;
  background-color: #202c39;
  transition: color 1s, background-color 1s;
}
```
## 10. CSS Transitions
- ### Smooth transitions used for various elements
```CSS
transition: color 1s, background-color 1s;

transition: color 1s, background-color 1s, border 1s;
```
## 11. Hover/Focus Effects
- ### Visual feedback on interactive states
```CSS
button:hover {
  cursor: pointer;
  background-color: #05668d;
}
```
## 12. Layout Containers
- ### Uses a container effectively (header)
```CSS
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}
```
## 13. Utility Classes
- ### Helpful single-use classes
```CSS
.searchArea {
  display: flex;
  text-align: center;
}
```
## 14. Use Pseudo-classes/elements
- ### Applies pseudo-class
```CSS
button:hover {
  cursor: pointer;
  background-color: #05668d;
}
```
## 15. Shadows & Borders
- ### Use of border properties
```CSS
button {
  background-color: #427aa1;
  transition: background-color 0.5s;
  padding: 5px 8px;
  border: none;
  border-radius: 4px;
}

.art {
  background-color: white;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: var(--primary-margin);
  border-radius: 4px;
  transition: color 1s, background-color 1s, border 1s;
}
```
## 16. Theme Customization
- ### Theme applied or toggled
```CSS
/*Theme Styling*/
.lightTheme,
.lightTheme > * {
  color: #202c39;
  background-color: #ebebeb;
  transition: color 1s, background-color 1s;
}
.darkTheme,
.darkTheme > * {
  color: #ebebeb;
  background-color: #202c39;
  transition: color 1s, background-color 1s;
}
.darkTheme header button {
  color: #ebebeb;
  transition: color 1s, background-color 1s;
}
.darkTheme .art {
  background-color: #333f4c;
  border: 1px solid #1e252b;
  transition: color 1s, background-color 1s, border 1s;
}
.darkTheme #sessionTimer {
  color: #ebebeb;
  transition: color 1s, background-color 1s;
}
.darkTheme #dismissMessage {
  color: white;
  transition: color 1s, background-color 1s;
}
```
## 17. Naming Conventions
- ### Clear, consistent class names
```CSS
#themeToggle {
  margin-bottom: var(--primary-margin);
}
.searchArea {
  display: flex;
  text-align: center;
}
#searchButton {
  margin-left: 5px;
}
```
## 18. Cleanliness & Commenting
- ### Well-commented, no redundent/unused code
```CSS
/*Universal*/
:root {
  --primary-margin: 10px;
}
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
}
.inter-name {
  font-family: "Inter", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}

/*Header Styles*/
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 20px;
}
header h1 {
  font-size: 2.6rem;
  display: flex;
  align-items: center;
}
header > * {
  margin-top: var(--primary-margin);
}
button {
  background-color: #427aa1;
  transition: background-color 0.5s;
  padding: 5px 8px;
  border: none;
  border-radius: 4px;
}
#themeToggle {
  margin-bottom: var(--primary-margin);
}
button:hover {
  cursor: pointer;
  background-color: #05668d;
}
.searchArea {
  display: flex;
  text-align: center;
}
#searchButton {
  margin-left: 5px;
}
input {
  width: 300px;
  padding: 5px 5px;
}
svg {
  margin-right: var(--primary-margin);
}

/*Theme Styling*/
.lightTheme,
.lightTheme > * {
  color: #202c39;
  background-color: #ebebeb;
  transition: color 1s, background-color 1s;
}
.darkTheme,
.darkTheme > * {
  color: #ebebeb;
  background-color: #202c39;
  transition: color 1s, background-color 1s;
}
.darkTheme header button {
  color: #ebebeb;
  transition: color 1s, background-color 1s;
}
.darkTheme .art {
  background-color: #333f4c;
  border: 1px solid #1e252b;
  transition: color 1s, background-color 1s, border 1s;
}
.darkTheme #sessionTimer {
  color: #ebebeb;
  transition: color 1s, background-color 1s;
}
.darkTheme #dismissMessage {
  color: white;
  transition: color 1s, background-color 1s;
}

/*Arts Container & Arts Styles*/
#artsContainer {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  margin: 30px 50px 20px 50px;
}
.art {
  background-color: white;
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: var(--primary-margin);
  border-radius: 4px;
  transition: color 1s, background-color 1s, border 1s;
}
.art > p {
  margin-top: 5px;
}
.art h3 {
  margin-top: var(--primary-margin);
}
.art-img {
  max-width: 100%;
  width: 300px;
  height: 300px;
  object-fit: cover;
}

/*Timer Styles*/
#sessionTimer {
  color: #202c39;
  margin-bottom: 30px;
}

/*Message Styles*/
#longSessionMessage {
  padding: 10px;
  width: 50%;
  margin: 0 auto;
  background-color: white;
  color: #202c39;
  border-radius: 8px;
  text-align: center;
}
#dismissMessage {
  margin-top: var(--primary-margin);
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

/*Media Queries*/
@media only screen and (max-width: 430px){
  header h1{
    font-size: 2rem;
  }
  input{
    width: 200px;
  }
  .searchArea{
    flex-wrap: wrap;
  }
}
@media only screen and (max-width: 320px){
  input{
    width: 100px;
  }
}
```