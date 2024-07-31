import { LightningElement, track } from 'lwc';
import getAccounts from '@salesforce/apex/comboboxDemo.getAccounts';

export default class ComboBoxDemo extends LightningElement {

    @track value= '';
    @track accOption = [];
   // @track data = [];

    get options() {


        return this.accOption;
        
    }

    connectedCallback(){
        getAccounts()
        .then(result=> {
        let arr =[];
        for(var i=0; i<result.length;i++){

            arr.push({label:result[i].Name, value:result[i].Id});
        }
        this.accOption = arr;
        
       
        })
    
    }

    handleChanged(event) {
        this.value = event.target.value;
    }
} 