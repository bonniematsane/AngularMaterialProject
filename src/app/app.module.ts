import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProComponent } from './pro/pro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSliderModule} from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatBadgeModule} from '@angular/material/badge';
import { RegisterComponent } from './register/register.component';
import { TableComponent } from './table/table.component';
import { Table2Component } from './table2/table2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProComponent,
    RegisterComponent,
    TableComponent,
    Table2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    FlexLayoutModule,
    MatSliderModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatBadgeModule,
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
