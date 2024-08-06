import { LightningElement, track } from 'lwc';
import getContactDetails from '@salesforce/apex/GetChild.getContactDetails';

export default class TreeGridDemo extends LightningElement {


    @track gridColumns = [
        {
            label: 'Name',
            fieldName: 'Name',
            type: 'text'
            
        },
        {
            label: 'Account Name',
            fieldName: 'FirstName',
            type: 'First Name'
        },
        {
            label: 'Last Name',
            fieldName: 'LastName',
            type: 'text'
        }
    ];
    @track gridData;
    connectedCallback() {
        getContactDetails()
            .then(result => {
                //console.log("result:"+JSON.stringify(result));
                var tempContact = JSON.parse(JSON.stringify(result));
                console.log("tempContact:"+JSON.stringify(tempContact));

                for(var i=0; i<tempContact.length; i++){

                    var newContact = tempContact[i]['Contacts'];
                    //console.log("newContact: "+JSON,stringify(newContact));

                    if(newContact){
                        tempContact[i]._children = newContact;
                        //console.log("tempContact[i]._children: "+JSON,stringify(tempContact[i]._children));
                        delete tempContact[i].Contacts;
                    }
                
                }

                this.gridData = tempContact;
                console.log("this.gridData:"+JSON,stringify(this.gridData));

                
            })
            .catch(error => {
                console.error(JSON.stringify(error));
            });
    }

    getselectedRows(event) {
        const selectedRows = event.detail.selectedRows;
        console.log("selectedRows: "+JSON.stringify(selectedRows));
        
    }
}