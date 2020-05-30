
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
 import {UploadComponent} from './upload/upload.component';
import { FormsModule } from "@angular/forms";
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ReactiveFormsModule } from "@angular/forms";
// import { LoginService } from './service/service.component';
 import { HttpClientModule } from "@angular/common/http";

// import { RouteGuardService } from "./route-guard.service";

// import { LoginService } from "./service/login.service";
// import {LoginService} from './service/login.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UploadComponent
   

   
  ],
  imports: [
    
    BrowserModule,FormsModule,AppRoutingModule,ReactiveFormsModule,HttpClientModule,
    GridAllModule,
 UploaderModule
    
  ],
  providers: [UploadComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
