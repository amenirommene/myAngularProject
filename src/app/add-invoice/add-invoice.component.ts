import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Invoice } from '../models/invoice';


@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {
@Output() added = new EventEmitter<Invoice>();
  constructor() { }

  myForm:FormGroup;
  ngOnInit(): void {
    this.myForm=new FormGroup({
      idInvoice:new FormControl('', Validators.required),
      discountAmount: new FormControl(),
      billAmount: new FormControl(),
      dateBill: new FormControl(),
      Status: new FormControl(),
    }) 
  }
  addInvoice(){
    console.log("add");
    this.added.emit(this.myForm.value);
    this.myForm.reset();
  }

}
