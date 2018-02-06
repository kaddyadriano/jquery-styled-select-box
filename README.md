V1.0.1 - jQuery Styled Select Box
====================
New in V1.0.1:
- Multiple select boxes on the same page
- Click away to close the select box

Select boxes look so ugly unstyled. This tiny library will fix it for you.

![Select Box closed](https://i.imgur.com/2MDaYFQ.png)

![Select Box Open](https://i.imgur.com/Vc9Z1t7.png)

[VIEW DEMO](https://codepen.io/kadrien/pen/JpKBKO)

Usage
--------

Add this inside the head tag:
```html
<script type="text/javascript" language="javascript" src="jquery.styled-select-box.js"></script>
```
In your code add ``styled`` class to your select box
```html
<select class="styled" name="numbers">
	<option value="1">One</option>
	<option value="2">Two</option>
	<option value="3">Three</option>
</select>
```
If you want to style a select box with a different class name
```javascript
$(".custom").styledSelect();
```
That's it! 
Thank me later!
