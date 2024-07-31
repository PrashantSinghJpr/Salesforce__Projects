// studentList.js
import { LightningElement, wire, track } from 'lwc';
import getStudents from '@salesforce/apex/StudentController.getStudents';

const COLUMNS = [
    {label: 'Student Id', fieldName: 'Id'},
    { label: 'Name', fieldName: 'Name__c' },
    { label: 'Address', fieldName: 'Address__c' },
    { label: 'EmailID', fieldName: 'Email__c' }

];

export default class StudentList extends LightningElement {
    @track students;
    @track error;

    @wire(getStudents)
    wiredStudents({ error, data }) {
        if (data) { 
            this.students = data; 
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.students = undefined;
        }
    }

    columns = COLUMNS;
}
