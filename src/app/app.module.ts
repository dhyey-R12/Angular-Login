import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/Card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormsModule } from '@angular/forms';
import {MatToolbarModule } from "@angular/material/toolbar";
import { FlexLayoutModule }from "@angular/flex-layout"
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialogExampleComponent } from './mat-dialog-example/mat-dialog-example.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UserbookingsComponent } from './userbookings/userbookings.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './auth.service';
import { MypipPipe } from './mypip.pipe';
import { RealComponent } from './real/real.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    MatDialogExampleComponent,
    UserbookingsComponent,
    MypipPipe,
    RealComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatDatepickerModule
  ],
  providers: [ AuthGuard ,AuthService],
  bootstrap: [AppComponent],
  entryComponents:[MatDialogExampleComponent]
})
export class AppModule { }
