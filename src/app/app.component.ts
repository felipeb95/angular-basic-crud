import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { MatDialog } from '@angular/material/dialog';
import { EditEmployeeDialogComponent } from './edit-employee-dialog/edit-employee-dialog.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(public dialog: MatDialog) {}

    inputName = '';
    inputCountry = '';

    employeeArray: Employee[] = [
        {id: 1, name: 'Felipe', country: 'Chile'},
        {id: 2, name: 'John', country: 'USA'},
        {id: 3, name: 'Sophie', country: 'Canada'},
    ];

    addEmployee(): void {
        if (this.inputName !== '' && this.inputCountry !== '') {
            this.employeeArray.push({id: 0, name: this.inputName, country: this.inputCountry});
            this.inputName = '';
            this.inputCountry = '';
        }
    }

    deleteEmployee(id: number): void {
        this.employeeArray = this.employeeArray.filter(emp => emp.id !== id);
    }

    openEditModal(employee: Employee): void {
        const dialogRef = this.dialog.open(EditEmployeeDialogComponent, {
            width: '250px',
            data: {id: employee.id, name: employee.name, country: employee.country}
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result !== undefined) {
                employee = result;
                const searchIndex = (element) => element.id === employee.id;
                const employeeIndex = this.employeeArray.findIndex(searchIndex);
                this.employeeArray.splice(employeeIndex, 1, employee);
            }
        });
    }
}
