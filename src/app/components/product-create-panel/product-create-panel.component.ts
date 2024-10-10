import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-create-panel',
  templateUrl: './product-create-panel.component.html',
  styleUrls: ['./product-create-panel.component.css']
})
export class ProductCreatePanelComponent implements OnInit {
  
  @Input() modeModify !: string;
  productForm !: FormGroup;
  constructor(private fb : FormBuilder){}
  
  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required, Validators.min(0)],
      stock: [0, Validators.required, Validators.min(0)],
      discount: [0],
      image: [''],
      categoryId: [0, Validators.required],
      branchId: [0, Validators.required],
    });
  }

 


  saveProduct() {
    if (this.productForm.valid) {
      console.log('Producto guardado:', this.productForm.value);
    } else {
      console.log('Formulario inválido');
    }
  }

}
