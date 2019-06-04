# defaultsjs

Most major browser nowadays implements in their DOM model, UI `<input>` components able to manage default values. Anyway, whatever the reason could be, you may find yourself having the need to implement this behaviour on your own. Why waste your time as I did? Just use (or improve and maybe share) this `324 bytes` of JS.

### Do I got you? Here's how it works

At first you reference `defaults.js` wherever you think it best suits your needs:

```html
<script type="text/javascript" src="defaults.js"></script>
```

Then, somewhere in your page layout, you create (at least) one or more HTML `<input ...>` UI component and assign them meaningful `id`s attribute's value:

```html
  <input id="userid" type="text" size="33" />
  ...
  <input id="passid" type="text" size="33" />
```

Now, near the end of your HTML page source code, inside a couple of `<script>` tags, you set the default texts you want be shown as content inside your input components. It's easy... check it out:

```javascript

// First you create an object
var obj = {};

// Then you create an attribute for each id of the input components you want to set default values on
obj.userid = 'Here your username...';
obj.passid = '       ';

// Now call SetDefaults() to set the values on the objects.
SetDefaults(obj);

// You create a function that binds the "default behaviour" to the inputs elements whoose id is has been created in obj as attribute.
function bind(item){
  InputHints(item.target, obj); 
}

// Eventually you set the created function as callback for the focusin and focusout events.
window.addEventListener("focusin", bind);
window.addEventListener("focusout", bind);
```

Pretty short. Isn't it?

### How does it look?

Something like the `gif` below:

![GOT](https://github.com/GiovaLomba/defaultsjs/blob/master/defaults.gif)

### Enjoy

I really hope this will save you some time and makes your days happier!
