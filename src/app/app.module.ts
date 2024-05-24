import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { SideBarComponent } from 'src/components/side-bar/side-bar.component';
import { FilterCarComponent } from 'src/components/filter-car/filter-car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { IconsModule } from 'src/components/icons/icons.module';
import { NavBarComponent } from 'src/components/nav-bar/nav-bar/nav-bar.component';
import { DetailsCarComponent } from 'src/components/details-car/details-car/details-car.component';
import { LoaderComponent } from './loader/loader/loader.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideBarComponent,
    FilterCarComponent,
    NavBarComponent,
    DetailsCarComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    IconsModule,
    FormsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
