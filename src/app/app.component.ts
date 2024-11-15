import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Product } from './shared/product.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl:'app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productForm: FormGroup;
  products: Product[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 },
    { id: 3, name: 'Product 3', description: 'Description 3', price: "thirty" as any },
    { id: 4, name: 'Product 4', description: 'Description 4', price: 40 },
    { id: 5, name: 'Product 5', description: 'Description 5', price: 50 },
    { id: 6, name: 'Product 6', description: 'Description 6', price: 60 },
    { id: 7, name: 'Product 7', description: 'Description 7', price: 70 }
  ];

  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      price: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.productForm.valid && this.productForm.invalidCheck) {
      const newProduct: Product = this.productForm.value;
      this.products.push({ ...newProduct, id: this.products.length + 1 });
      this.productForm.reset();
    }
  }
}
