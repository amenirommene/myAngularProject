import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {


  @Input() invoiceToEdit:Invoice;
  @Input() invoiceToEdit2:Invoice;
  @Output() edited = new EventEmitter<Invoice>();
  constructor() { }
  myForm:FormGroup;
  ngOnInit(): void {
   this.myForm=new FormGroup({
      idInvoice:new FormControl({"value":this.invoiceToEdit.idInvoice, "disabled":true}),
      discountAmount: new FormControl(this.invoiceToEdit.discountAmount),
      billAmount: new FormControl(this.invoiceToEdit.billAmount),
      dateBill: new FormControl(this.invoiceToEdit.dateBill),
      Status: new FormControl(this.invoiceToEdit.Status),
    }) 
    
  }
  ngOnChanges(changes:SimpleChanges):void{

    let change1=changes.invoiceToEdit;
    let change2=changes.invoiceToEdit2;
   // const invoiceChange = changes['invoiceToEdit'];
    if (change1.firstChange) {
      console.log(" La propriété vient d'être initialisé");
    } else {
      this.myForm.get('idInvoice')?.setValue(this.invoiceToEdit.idInvoice);
      this.myForm.get('discountAmount')?.setValue(this.invoiceToEdit.discountAmount);
      this.myForm.get('billAmount')?.setValue(this.invoiceToEdit.billAmount);
      this.myForm.get('dateBill')?.setValue(this.invoiceToEdit.dateBill);
      this.myForm.get('Status')?.setValue(this.invoiceToEdit.Status);
    }
}
  edit(){
  //this.edited.emit(this.myForm.value);
  this.edited.emit(this.myForm.getRawValue());
  this.myForm.reset();
  
  }
}
