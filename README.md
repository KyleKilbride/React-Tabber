# React Tabber

A configurable tabber component built for vanilla react. 

# Motivation

I found that modern UI designs ofter use tabbed navigation, so I wanted to create something that was reusable throughout the application I am create, and future applications. 

# Configuration
## Use
Add the component to your components folder and import it in any other component you would like.

```javascript 
import Tabber from './tabber' 
```

```javascript 
ReactDOM.render(<Tabber tabs={tabs} styles={styles} />) 
```

## Styling
You can apply custom styles to the tabs, the animated underline, the surrounding box, and the text, using these variables inside the object. Must use css syntax.

```tabColor```:  Changes the color of the tab            
```TabRowColor```: Changes the tab container color  
```underlineColor```: Changes the animated underline color   
```tabHeight```: Changes the tab height   
```textColor```: Changes the text color 

just add a style object to the styles prop.

Example:

```javascript
const styles = {
  tabColor: 'pink',
  tabRowColor: 'white',
  underlineColor: 'blue',
  tabheight: '55px',
  textColor: 'blue',
}
```
## Creating Tabs
To create tabs you can pass an ```array``` of tab ```objects``` to the tab's props. The tabs objects must include at least a ```null```. A callback function is optional, , and defaults to ```null```.

the callback will return the ```index``` of the tab clicked.

```javascript
const changeView = index => {
  console.log(`index of the tab clicked: ${index}`)
}
```

```javascript
const tabs = [
  {
    name: 'Add Customer',
    cb: changeView
  },
  {
    name: 'Customer List',
    cb: changeView
  },
  {
    name: 'Another One',
    cb: null
  }
]
```

# Screenshots

[![https://gyazo.com/ab85b45397e5a93d383bbcb2460c23a9](https://i.gyazo.com/ab85b45397e5a93d383bbcb2460c23a9.gif)](https://gyazo.com/ab85b45397e5a93d383bbcb2460c23a9)