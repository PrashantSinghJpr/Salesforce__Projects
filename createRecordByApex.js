import { LightningElement } from 'lwc';
import CreateRecord from '@salesforce/apex/CreateUpdateRecord.createRecord';

export default class CreateRecordByApex extends LightningElement {

    accountIds;
    accountName;
    accountCourse;

    handleNameChange(event) {
        this.accountName = event.target.value;
    }

    handleCourseChange(event) {
        this.accountCourses = event.target.value;
    }
    onCreateRecord() {
        createRecord({accountNames : this.accountName, accountCourses : this.accountCourse})
        .then(result => {
            this.accountIds = result[0].Id;
        })
        .catch(error => {
            this.error = error;
        })

    }
}