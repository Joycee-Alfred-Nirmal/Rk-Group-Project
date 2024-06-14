import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule} from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { FeaturesComponent } from './features/features.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MatMenuModule } from '@angular/material/menu';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { RailwaysComponent } from './railways/railways.component';
import { LogoutComponent } from './logout/logout.component';
import { MatListModule} from '@angular/material/list';
import { SearchComponent } from './search/search.component';


@NgModule({
    declarations: [
      AppComponent,
      RegisterComponent,
      HeaderComponent,
      HomeComponent,
      FeaturesComponent,
      ProductsComponent,
      CartComponent,
      FooterComponent,
      AboutComponent,
      ContactComponent,
      LoginComponent,
      AgricultureComponent,
      RailwaysComponent,
      LogoutComponent,
      SearchComponent
      

    ],

    imports: [
      BrowserModule,
      MatToolbarModule,
      MatIconModule,
      AppRoutingModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatCardModule,
      MatMenuModule,
      MatListModule,
    
     
      ],

      

    providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]

})
 
export class  AppModule {}