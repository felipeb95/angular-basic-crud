import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from '../models/employee';
import { EditEmployeeDialogComponent } from './edit-employee-dialog/edit-employee-dialog.component';
import { CountryService } from '../services/country.service';

@Component({
    selector: 'app-crud',
    templateUrl: './crud.component.html',
    styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

    // * Input values
    inputName = '';
    inputCountry = '';

    // * Employee array dummy
    employeeArray: Employee[] = [
        {id: 1, name: 'Felipe', country: 'Chile'},
        {id: 2, name: 'John', country: 'Peru'},
        {id: 3, name: 'Sophie', country: 'Canada'},
    ];

    // * Countries array
    countriesArray = [];

    constructor(public dialog: MatDialog, private countryService: CountryService) {}

    /**
     * Get countries for the first time
     */
    async ngOnInit() {
        await this.getCountries();
    }

    /**
     * Add an employee to the array
     */
    addEmployee(): void {
        if (this.inputName !== '' && this.inputCountry !== '') {
            this.employeeArray.push({id: 0, name: this.inputName, country: this.inputCountry});
            this.inputName = '';
            this.inputCountry = '';
        }
    }

    /**
     * Deletes selected employee
     * @param id Employee id
     */
    deleteEmployee(id: number): void {
        this.employeeArray = this.employeeArray.filter(emp => emp.id !== id);
    }

    /**
     * Opens a dialog to edit employee data
     * @param employee Selected employee
     */
    openEditModal(employee: Employee): void {
        const dialogRef = this.dialog.open(EditEmployeeDialogComponent, {
            width: '250px',
            data: {id: employee.id, name: employee.name, country: employee.country, countries: this.countriesArray},
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

    /**
     * Calls the country service
     */
    async getCountries() {
        await this.countryService.getCountries()
        .subscribe((data: any[]) => {
            data.forEach(el => this.countriesArray.push(el.name));
        }, error => {
            console.error(error);
        });
    }
}
