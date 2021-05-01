# Experiment with multiline background
Mini script for transform text to multiline-text with separate rows and background.

demo:

### Usage
1. Add line-text.js and line-text.css to your page.
2. Create instance of lineText and add element to change:
```js
const mySuperHeader = document.querySelector("h2.title");

const lines = new LinesText;
lines.addElement(mySuperHeader);
```


3. Add style for this element. If you want add padding to left and right sides, use `--padding-l` and `--padding-r` variables:

```css
/* styled element before change */
.title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 15px;
    padding-bottom: 15px;

    padding-left: 13px;
    padding-right: 13px;
}

/* styled element after change to multi line element */
/* ideally padding after convert should be the same as above */
.title[data-text-lines] {
    --padding-l: 13px;
    --padding-r: 13px;
}

/* single row */
.title[data-text-lines] .line-text__row {
    background: red;
    color: white;
    /*
    if you want style padding-left and padding-right for single row
    change only padding-top padding-bottom or use variables
    */
    padding-top: 20px;
    padding-bottom: 20px;
    /* or */
    padding: 20px var(--padding-r);
    margin-bottom: 5px;
}

/* single word */
.title[data-text-lines] .line-text__word {}
```

If you want change padding for single row:

```css
.title[data-text-lines] .line-text__row {
    margin-bottom: 5px;
    color: #fff;
    background: gold;

    padding-top: 20px;
    padding-bottom: 20px;
    /* or */
    padding: 20px var(--padding-r);
    /* or */
    padding: 20px var(--padding-r) 20px var(--padding-l);
}
```

Look at [demo.css](./demo.css) for more examples.