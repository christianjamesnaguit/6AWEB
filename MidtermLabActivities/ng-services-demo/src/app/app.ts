import { Component, signal } from '@angular/core';
import { email } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { Employee } from './employee';
import { Products } from './products';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ng-services-demo');
  public employees: {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  }[] = [];

  public products: {
    id: number;
    name: string;
    description: string;
    price: number;
  }[] = [];

  constructor(private employeeService: Employee, private productService: Products) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployee();
    this.products = this.productService.getProducts();
  }

  trackEmployeeId(index: number, employee: any): number {
    return employee.id;
  }

  trackProductId(index: number, product: any): number {
    return product.id;
  }
}
