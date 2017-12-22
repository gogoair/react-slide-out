# react-collapsy
Simple lightweight (1.5kb minified+gzipped) accordion component

## Usability
This plugin require for you to have react and font-awesome, after that import react combo select
```javascript
import Accordion from 'react-collapsy';
```
and include css files
```javascript
require('../node_modules/react-collapsy/lib/index.css');
```

## Usage
After you imported libs, somewhere in your component's code:
```javascript
<Accordion>
    <span>Some content</span>
</Accordion>

```
![Image of Collapsy](https://media.giphy.com/media/3o751YjTKVOaBINjzy/giphy.gif)
## props/options

#### isOpen
If passed Accordion will be render expanded
```javascript
<Accordion isOpen />
```

#### onToggle

onToggle will fire after Accordion expands/collapses with boolean value passed in which will indicated if Accordion is open or closed (true, false)
```javascript
<Accordion onToggle={isOpen => console.log('Is Accordion open?:', isOpen) } /> // if expanded true will be passed
```

#### title

If passed title will be displayed
```javascript
<Accordion title='Some title' />
```

#### headerClass/contentWrapperClass

If passed classes will be added to header div and content wrapper div, respectfully. (e.g. 'Accordion__header ' + this.props.headerClass)

```javascript
<Accordion headerClass='YourCustomHeaderClass' contentWrapperClass='YourCustomAccordionContentClass' />
```

## Example project

Clone/download the repo followed by npm (i) install && npm start, so you can check this magnificent component in local. If you have any comment, suggestion, issue, please report it, as I will try to keep this component alive.