import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../../models/employee';

@Component({
    selector: 'app-edit-employee-dialog',
    templateUrl: './edit-employee-dialog.component.html',
    styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
    }

    /**
     * Close the dialog
     */
    onNoClick(): void {
        this.dialogRef.close();
    }

    /**
     * Check if the form is completed
     */
    checkForm() {
        return !(this.data.name !== '' && this.data.country !== '');
    }

}
