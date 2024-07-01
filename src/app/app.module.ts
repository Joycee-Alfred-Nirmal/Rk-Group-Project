import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule} from '@angular/forms'
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { FeaturesComponent } from './features/features.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { MatMenuModule } from '@angular/material/menu';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { RailwaysComponent } from './railways/railways.component';
import { MatListModule} from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CareersComponent } from './careers/careers.component';


@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      FeaturesComponent,
      ProductsComponent,
      FooterComponent,
      AboutComponent,
      ContactComponent,
      AgricultureComponent,
      RailwaysComponent,
     
      CareersComponent
      

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
      BrowserAnimationsModule,
      HttpClientModule,
    
     
      ],

      

    providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]

})
 
export class  AppModule {

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/facebook.svg'));
    this.matIconRegistry.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/instagram.svg'));
    this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/linkedin.svg'));
  }
}