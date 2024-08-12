
export default function sync_inits(event, {
    honeypot_form_handle = null,
    stripe_form_handle = null, 
    ajax_form_handle = null,
    modal_handle = null, 
    loader_handle = null, 
    alerts_handle = null
}) {
        /*
    Note: in order to make jg_honeypot.js, jg_stripe_charge_input.js, and jg_ajax_form.js work, they are loaded in the order specified below.
    This is because the event listeners in each script need to be added with jg_honeypot.js first, then jg_stripe_charge_input.js, then jg_ajax_form.js
    since they all involve form submission and the event listeners are added in the order the initializer functions are called.
    */


    //init jg_honeypot
    if (honeypot_form_handle){
        try{
            honeypot_form_handle(event)
        } catch (error) {
            console.error("Error initializing JG Honeypots:", error);
        }
    }
    //init jg_stripe_charge_input
    if (stripe_form_handle){
        try{
            stripe_form_handle(event)
        } catch (error) {
            console.error("Error initializing JG Stripe Charge Inputs:", error);
        }
    }
    //init jg_ajax_form
    if (ajax_form_handle){
        try{
            ajax_form_handle(event)
        } catch (error) {
            console.error("Error initializing JG Ajax Forms:", error);
        }
    }
    //init jg_modal
    if (modal_handle){
        try {
            modal_handle(event);
        } catch (error) {
            console.error("Error initializing JG Modals:", error);
        }
    }
    //init jg_loader
    if (loader_handle){
        try{
            loader_handle(event)
        } catch (error) {
            console.error("Error initializing JG Loaders:", error);
        }
    }
    //init jg_alerts
    if (alerts_handle){
        try{
            alerts_handle(event)
        } catch (error) {
            console.error("Error initializing JG Alerts:", error);
        }
    }
}