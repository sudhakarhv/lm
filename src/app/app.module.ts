import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlashbarComponent } from './flashbar/flashbar.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatInput, MatToolbarModule, MatSidenavModule, MatListModule } from '@angular/material';
import { AppMainNavComponent } from './components/app-main-nav/app-main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FlashbarComponent, CreateAccountComponent, AppMainNavComponent, ProductsDashboardComponent],
  imports: [BrowserModule,
            BrowserAnimationsModule,
            MatMenuModule,
            MatIconModule,
            MatGridListModule,
            MatButtonModule,
            MatCardModule,
            MatFormFieldModule,
            ReactiveFormsModule,
            MatInputModule,
            LayoutModule,
            MatToolbarModule,
            MatSidenavModule,
            MatListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
