# react-slide-out
Simple lightweight (<2kb) slider component

## Usability
```javascript
import Slider from 'react-slide-out';
```
and include css file
```javascript
import 'react-slide-out/lib/index.css';
```

## Usage
After you imported libs, somewhere in your component's code:
```javascript
.
<a href='#' onClick={() => this.setState({isOpen: true}))}>Open Slider</a>
.
<Slider
      title='test title'
      footer={
        <div style={{padding: '15px'}}>
          <a href='#' onClick={() => this.setState({isOpen: false}))}>Close Slider</a>
        </div>
      }
      isOpen={this.state.isOpen}
      onOutsideClick={() => this.setState({isOpen: false}))}>
    <div>...Some heavy scrollable content...</div>
</Slider>

```
![Image of Slider](https://media.giphy.com/media/l49JC918AI62TbfuE/giphy.gif)

You can play with react-slide-out [>>here<<](https://codesandbox.io/s/6w168n6m83)
## props/options

#### isOpen
If passed pane will be render with slide-in animation
```javascript
<Slider isOpen />
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