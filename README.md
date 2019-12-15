# Simple Vue Modal
This extension provides a simple Vue modal component.

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
Make an anchor that targets the modal name:
```html
<a href="#modal-name">Show Modal</a>
```

Add the modal component anywhere in the same page as the trigger anchor:
```html
<modal name="modal-name">
	<p>Sample Text</p>	
	
	<template v-slot:footer>
		<a href="#">Close<a/>
	</template>
</modal>
```
**NOTE** The modal has an optional footer slot. 
