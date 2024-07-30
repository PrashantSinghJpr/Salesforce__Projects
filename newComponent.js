import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';


export default class NewComponent extends LightningElement {

    myTitle="Salesforce";

    connectedCallback(){
        let callFunction= this.myFunction(10,2);
        window.alert("The output is: "+callFunction);
    }

    myFunction = (divident,divisor) =>{
        return (divident/divisor);

    }
}