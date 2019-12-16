# Simple Vue Modal
This extension provides a simple Vue modal component.

###Features
* Ability to make an alert modal.
* Auto hide modal after **n** amount of seconds.
* Customize trigger button classes.
* Customize trigger button name.
* Disable page scrolling when a modal is opened.
* Mobile compatible design.
* Clicking outside modal cause it to close.
* Modal footer.


## Installation
First, Install the extension:
```
npm install simple-vue-modal
```

Then import it, and use it as a Vue plugin:
```js
import Modal from 'simple-vue-modal';

window.Vue.use(Modal);
```

## Example Usage

### Standard modal
Make an anchor that targets the modal name:
```html
<modal btn-text="Open Modal">
    <h1>This is a sample modal !</h1>
</modal>
```

### Alert modal
This modal will be shown once the page loaded and will auto close after 5 seconds.
**NOTE** Use the `alert` attribute to mark it as an alert moda.
```html
<modal alert time=5>
    <p>This modal will close after 5 seconds</p>
</modal>
```

### Modal footer
```html
<modal btn-text="Delete">
    <p>Are you sure ?</p>
    <template v-slot:footer>
        <a class="btn" href="/delete">Yes</a>
    </template>
</modal>
```

## Atributes
| Name  | Type  | Description  |
| :------------ | :------------ | :------------ |
| btn-text  |String  | The text inside the trigger button.  |
|  btn-class | String  | Classes applied to the trigger button.  |
| alert  | -  | Mark the modal as an alert to automatically show one the page is loaded.  |
| time  | Integer  | The time interval for alert to auto close.  |
