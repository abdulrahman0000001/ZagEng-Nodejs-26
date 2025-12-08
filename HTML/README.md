# HTML
HTML = HyperText Markup Language; describes page structure.
## Basic Structure
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Page title</title>
  </head>
  <body>
    <h1>Main heading</h1>
    <p>Paragraph text.</p>
  </body>
</html>
```
```<!DOCTYPE html>``` declaration defines that this document is an HTML5 document.<br>

## HTML elements
 are defined by a start tag, some content, and an end tag <br>
ex:
```html
 <tagname>content</tagname>
```

```<html>``` element is the root element of an HTML page.<br>

```<head>``` element contains meta information about the HTML page. and contains the metadata and some elements<br>
ex: ```<meta>``` ```<title>```<br>
```<title>``` element defines the title of the document.<br>
```<meta>``` element is used to specify the character set, page description, keywords, author of the document, and viewport settings.<br>
ex: 
```html
<!--charset-->
<meta charset="UTF-8">

<!--description-->
<meta name="description" content="the description">

<!--keywords-->
<meta name="keywords" content="HTMl, CSS, JS">

<!--author-->
<meta name="author" content="name fo the author">

<!--viewport settings-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
## Body
```<body>``` element defines the document's body, and is a container for the visible content.
## Text semantics
 headings ```<h1>–<h6>```, paragraphs ```<p>```. Browsers collapse extra whitespace.
## Media
### image <br>
```html
<img src="image source" alt="alternative text">
```
### video <br>
```html
<video src=""></video>
```
### audio<br>
```html
<audio src=""></audio>
```
## Lists
unordered ```<ul>```, ordered ```<ol>```, description ```<dl>``` with ```<dt>/<dd>```.<br><br>
### Unordered List <br>
```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```
### Ordered List <br>
```html
<ol>
  <li>Open the browser</li>
  <li>Write the code</li>
  <li>View the result</li>
</ol>
```
### Description List <br>
```html
<dl>
  <dt>CPU</dt>
  <dd>The central processing unit of a computer.</dd>

  <dt>HTML</dt>
  <dd>A markup language used for structuring web pages.</dd>
</dl>
```
## Tabels
A table in HTML consists of table cells inside rows and columns.<br>
```<table>``` is used to make a table.<br>
Each table row starts with a ```<tr>``` and ends with a ```</tr>``` tag.<br>
Each table cell is defined by a ```<td>``` and a ```</td>``` tag.<br>
For table header cells we use ```<th>``` instead of ```<td>```.<br>
ex:<br>
```html
<table>
  <tr>                        
    <th>Name</th>              
    <th>Age</th>
    <th>City</th>
  </tr>

  <tr>                        
    <td>Alice</td>             
    <td>30</td>
    <td>Cairo</td>
  </tr>

  <tr>
    <td>Omar</td>
    <td>25</td>
    <td>Alexandria</td>
  </tr>
</table>
```
## Div
```<div>```tag defines a division or a section in an HTML document.<br>
### How to center a div? (:
```html
<center>
  <div>Centered</div>
</center>
```
## Semantic Elements
Semantic element clearly describes its meaning to both the browser and the developer
### Header
```<header>``` element represents a container for introductory content.
```html
<header>
  <h1>My Website</h1>
  <p>Welcome!</p>
</header>
```
### Main
```<main>``` element specifies the main content of a document.
```html
<main>
  <h2>Main Content</h2>
  <p>This is the main part of the webpage</p>
</main>
```
### Footer
```<footer>``` element defines a footer for a document or section.
```html
<footer>
  <p>© 2025 My Website. All rights reserved.</p>
</footer>
```
### Nav
```<nav>``` defines navigation links.
```html
<nav>
  <a href="#home">Home</a> |
  <a href="#about">About</a> |
  <a href="#contact">Contact</a>
</nav>
```
### Section
```<section>``` element defines a section in a document.
```html
<section>
  <h2>About Us</h2>
  <p>This section contains information about our company.</p>
</section>
```
## Anchor tag
```<a>``` tag defines a hyperlink, which is used to show a link or link from one page to another.
### Basic anchor tag
```html
<a href="https://example.com">example.com</a>
```
### Linking to another page
```html 
<a href="about.html">About page</a>
```
### opening link in a new tab
```html
<a href="https://google.com" target="_blank">Open google in a new tab</a>
```
### linking to a section on the same page
```html
<a href="#contact">Jump to Contact Section</a>
```
### Email
```html
<a href="mailto:example@example.com">Send Email</a>
```
### Phone
```html
<a href="tel:+1234567890">Call Us</a>
```
### Download
```html
<a href="/example.pdf" download>Download PDF</a>
```
## Form
```<form>``` element is used to create an HTML form for user input.<br>
It can contain one or more of elements like
```<input>```, ```<label>```, ```<select>```, ```<textarea>```, ```<datalist>```, ```<button>``` and more.<br>
## Form Attributes
### Action
Action attribute defines the action to be performed when the form is submitted.
### Method
Method attribute specifies the HTTP method (get ot post) to be used when submitting the form data.
## Input 
```<input>``` element is used to get input from user.
## Input Types
### text
Defines a single-line text input field.
### password
Defines a password field.
### color
Is used for input fields that should contain a color.
### date
Is used for input fields that should contain a date.
### email
Is used for input fields that should contain an e-mail address.
### file
Defines a file-select field and a "Browse" button for file uploads.
### number
Defines a numeric input field.
### range
Defines a control for entering a number whose exact value is not important.
### search
Is used for search fields.
### tel
Is used for input fields that should contain a telephone number.
### time
Allows the user to select a time .
### week
Allows the user to select a week and year.
### radio
Defines a radio button which let a user select ONLY ONE of a limited number of choices.
### checkbox
Defines a checkbox which let a user select ZERO or MORE options of a limited number of choices.
### submit
Defines a button for submitting form data to a form-handler.
### reset
Defines a reset button that will reset all form values to their default values.
## Input Attributes
### readonly attribute 
Specifies that an input field is read-only. 
### disabled attribute 
Specifies that an input field should be disabled. 
### placeholder attribute 
Specifies a short hint that describes the expected value of an input field.
### required attribute
Specifies that an input field must be filled out before submitting the form.
## Label
```<label>``` element defines a label for several form elements.
## Button
```<button>``` element defines a clickable button.
## Textarea
```<textarea>``` element defines a multi-line input field.
## Select
```<select>``` element defines a drop-down list.<br>
```<option>``` element defines an option that can be selected.
## Datalist
```<datalist>``` element specifies a list of pre-defined options for an ```<input>``` element.
## Eample on Form & Inputs
```html
<form action="..." method="post/get/...">
  <!-- Input Types -->
  <label for="text">Text:</label>
  <input id="text" type="text" placeholder="Enter text" required><br>

  <!-- password -->
  <label for="password">Password:</label>
  <input id="password" type="password" placeholder="Password"><br>

  <!-- color -->
  <label for="color">Color:</label>
  <input id="color" type="color" value="#3366cc"><br>

  <!-- date -->
  <label for="date">Date:</label>
  <input id="date" type="date"><br>

  <!-- email -->
  <label for="email">Email:</label>
  <input id="email" type="email" placeholder="example@example.com" required><br>

  <!-- file -->
  <label for="file">File:</label>
  <input id="file" type="file"><br>

  <!-- number -->
  <label for="number">Number:</label>
  <input id="number" type="number" min="0" max="100" value="10"><br>

  <!-- range -->
  <label for="range">Range:</label>
  <input id="range" type="range" min="0" max="10" value="5"><br>

  <!-- search -->
  <label for="search">Search:</label>
  <input id="search" type="search" placeholder="Search..."><br>

  <!-- tel -->
  <label for="tel">Telephone:</label>
  <input id="tel" type="tel" placeholder="+201234567890"><br>

  <!-- time -->
  <label for="time">Time:</label>
  <input id="time" type="time"><br>

  <!-- week -->
  <label for="week">Week:</label>
  <input id="week" type="week"><br>

  <!-- readonly attribute -->
  <label for="readonly">Read-only:</label>
  <input id="readonly" type="text" value="Can't edit" readonly><br>

  <!-- disabled attribute -->
  <label for="disabled">Disabled:</label>
  <input id="disabled" type="text" value="Disabled" disabled><br>

  <!-- textarea -->
  <label for="message">Message:</label><br>
  <textarea id="message" rows="5" cols="30" placeholder="Type your message"></textarea>
  
  <!-- Select -->
  <label for="country">Choose a country:</label><br>
  <select id="country">
    <option>Egypt</option>
    <option>USA</option>
    <option>UK</option>
    <option>Canada</option>
  
  <!-- datalist -->
  </select>
    <datalist id="browsers">
    <option value="Chrome">
    <option value="Firefox">
    <option value="Edge">
    <option value="Safari">
    <option value="Opera">
  </datalist>

  <div>
    <button type="submit">Submit</button>
    <button type="reset">Reset</button>
  </div>
</form>
```
## Projects
[Project 1](https://github.com/abdulrahman0000001/HTML/blob/main/projects/project1.html)
<br>
[Project 2](https://github.com/abdulrahman0000001/HTML/blob/main/projects/project2.html)
