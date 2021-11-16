import { Component, OnInit } from '@angular/core';
import { Invoice } from '../models/invoice';

@Component({
  selector: 'app-list-invoices',
  templateUrl: './list-invoices.component.html',
  styleUrls: ['./list-invoices.component.css']
})
export class ListInvoicesComponent implements OnInit {
  invoices:Invoice[];
  invoiceToEdit:Invoice;
  show=false;
  showAddInvoice=false;
  constructor() { }
  ngOnInit(): void {
    this.invoices =[
      { idInvoice: 1, discountAmount: 20, billAmount: 500, dateBill: "14/07/2021" , Status : true},
      { idInvoice: 2, discountAmount: 10, billAmount: 1000, dateBill: "02/10/2020" , Status : false},
      { idInvoice: 3, discountAmount: 50, billAmount: 200, dateBill: "15/12/2021" , Status : false},
  
      ]
  
  }
  editInvoice(x:Invoice){
    this.show=true;
    this.invoiceToEdit=x;
    //this.index=i (à récupérer depuis html);
  }

  edit(i:Invoice){
    for (let k in this.invoices){
        if (this.invoices[k].idInvoice == i.idInvoice){
          this.invoices[k]=i;
        }
    }
    this.show=false;
    //this.invoices[j]=i;
   //this.invoiceToEdit=i;
   //console.log(this.invoiceToEdit);
  }
  showAdd(){
    this.showAddInvoice=true;
  }
  Add(i:Invoice){ 
this.invoices.push(i);
this.showAddInvoice=false;
  }
}
