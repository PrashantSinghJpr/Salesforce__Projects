import { LightningElement,track } from 'lwc';
import getAccountsForCombobox from '@salesforce/apex/ComboboxWithDatatableClass.getAccountsForCombobox';
import getContacts from '@salesforce/apex/ComboboxWithDatatableClass.getContacts';

//Define columns for datatable;
const columns = [
    {label: 'Name', fieldName: 'Name'},
    {label: 'Phone', fieldName: 'Phone'},
    {label: 'Email', fieldName: 'Email'},
   
]

export default class ComboboxWithDatatableDemo extends LightningElement {

    @track value='';
    @track optionsArray = []; //This aaray will store the options for combobox;
    @track cardVisible= false;
    @track data = [];
    @track columns=columns;

    //Now store option by returning the optionsArray
    get options(){
        return this.optionsArray;
    }

    //call apex method to get account stored in Salesforce org Database;
    connectedCallback() {
        getAccountsForCombobox()
            .then(response => {
                let arr = [];
                for(var i=0; i<response.length; i++){

                    arr.push({label : response[i].Name, value: response[i].Id});
                }

                // stoire the array objects into optionsArray;
                this.optionsArray = arr;
            })
           
    }
    //Get Selected Account recordId
    handleChangedValue(event) {
        this.cardVisible = true;
        
        //stores selected accountId in value property;
        this.value = event.detail.value;
        //call apex method to get the contacts of selected Account;

        getContacts({selectedAccountId: this.value})
            .then(result => {
                this.data = result;
            })
            .catch(error => {
                window.alert("error: "+error);
            });
    }
}