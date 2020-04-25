import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Employee } from '../models/employee';

@Component({
    selector: 'app-edit-employee-dialog',
    templateUrl: './edit-employee-dialog.component.html',
    styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Employee) {}

    ngOnInit(): void {
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    checkForm() {
        return !(this.data.name !== '' && this.data.country !== '');
    }

}
