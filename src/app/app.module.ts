import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Routing, components, services
import { AppRoutingModule, routerNavigation } from './app-routing.module';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//HTTP
import { HttpClientModule } from '@angular/common/http';
//Forms
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

//Search Module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [AppComponent, routerNavigation],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
