import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name: string = '';
  age: number = 0;
  salary: number = 0;

  showDetails: boolean = true;

  employees: any[] = [];

  addEmployee() {

    if (!this.name || !this.age || !this.salary) {
      return;
    }

    this.employees.push({
      name: this.name,
      age: this.age,
      salary: this.salary
    });

    this.name = '';
    this.age = 0;
    this.salary = 0;
  }

  getLevel(salary: number) {

    if (salary > 50000) {
      return 'High';
    }
    else if (salary > 30000) {
      return 'Medium';
    }
    else {
      return 'Low';
    }
  }
}