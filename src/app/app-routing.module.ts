import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ProductsComponent } from './products/products.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { RailwaysComponent } from './railways/railways.component';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';



 const routes: Routes = [

      {
        path:'', component: HomeComponent
      },
      {
        path:'register',component: RegisterComponent
      },

      {
        path:'home' , component: HomeComponent
      },
      {
        path:'features', component: FeaturesComponent
      },
      {
        path:'products' , component: ProductsComponent
      },
      {
        path:'footer', component :  FooterComponent
      },
      {
        path:'about' , component : AboutComponent
      },
      {
        path:'contact' , component: ContactComponent
      },
      {
        path:'cart' , component:CartComponent
      },
      {
        path:'login' , component: LoginComponent
      },
      {
        path:'agriculture' , component: AgricultureComponent
      },
      {
        path:'railways' , component: RailwaysComponent
      },
      {
        path:'logout' , component: LogoutComponent
      },
      {
        path:'search' , component: SearchComponent
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {}
