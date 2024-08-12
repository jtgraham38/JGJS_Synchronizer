# JG Synchronizer
This utitlity function exists because certain of my libraries, susch as JG Stripe Form, JG Ajax Form, and JG Honeypot Form were incompatible when used on the same form.  The event listeners they set up to perform actions on forms need to be fired in a very specific order in order for all the utility scripts to play nice together.  This script includes a single function, which accepts initializer function handles for each jg.js feature script.  It then calls those functions in the correct order so that all event listeners are added in the correct order.  Here's an example:

```javascript
import honeypot_init from 'jg_honeypot_form';
import stripe_init from 'jg_stripe_form';
import ajax_init from 'jg_ajax_form';
import modal_init from 'jg_modal';
import loader_init from 'jg_loader';
import init_all from 'jg_synchronizer';

document.addEventListener('DOMContentLoaded', (event)=>{
    //create initializers object
    const inits = {
        honeypot_handle: honeypot_init,
        stripe_charge_input_handle: stripe_init,
        ajax_form_handle: ajax_init,
        modal_handle: modal_init,
        loader_handle: loader_init
    }

    //call jg_synchronizer initialization script
    init_all(inits)
})
```

**Note: I still need to test the example above, and the initializer function.**# JGJS_Synchronizer
