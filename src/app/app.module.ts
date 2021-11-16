import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListFournisseursComponent } from './list-fournisseurs/list-fournisseurs.component';
import { ProduitComponent } from './produit/produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUserComponent } from './list-user/list-user.component';
import { FactureComponent } from './facture/facture.component';
import { ListFacturesComponent } from './list-factures/list-factures.component';
import { HeaderComponent } from './header/header.component';
import { MainUserComponent } from './main-user/main-user.component';
import { MainProductComponent } from './main-product/main-product.component';
import { MainProviderComponent } from './main-provider/main-provider.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { HomeComponent } from './home/home.component';
import { Facture2Component } from './facture2/facture2.component';
import { AddProductTDComponent } from './add-product-td/add-product-td.component';
import { FormUserComponent } from './form-user/form-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { AddProductRFComponent } from './add-product-rf/add-product-rf.component';
import { InputComponent } from './input/input.component';
import { AddFormRFComponent } from './add-form-rf/add-form-rf.component';
import { ListInvoicesComponent } from './list-invoices/list-invoices.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ErrorsComponent } from './errors/errors.component';
import { VariablesGlobales } from './variablesgolabes';
import { ListComponent } from './list/list.component';
import { PostsComponent } from './posts/posts.component';
import { ListpostsComponent } from './listposts/listposts.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    FournisseurComponent,
    ListFournisseursComponent,
    ProduitComponent,
    ListProduitComponent,
    ListUserComponent,
    FactureComponent,
    ListFacturesComponent,
    HeaderComponent,
    MainUserComponent,
    MainProductComponent,
    MainProviderComponent,
    NotFoundPageComponent,
    MainInvoiceComponent,
    HomeComponent,
    Facture2Component,
    AddProductTDComponent,
    FormUserComponent,
    LoginUserComponent,
    AddProductRFComponent,
    InputComponent,
    AddFormRFComponent,
    ListInvoicesComponent,
    EditInvoiceComponent,
    AddInvoiceComponent,
    AddUserComponent,
    AddProviderComponent,
    ErrorsComponent,
    ListComponent,
    PostsComponent,
    ListpostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [VariablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
