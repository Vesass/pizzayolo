import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurCarteComponent } from './pages/our-carte/our-carte.component';
import { YourCarteComponent } from './pages/your-carte/your-carte.component';
import { CreationPizzaComponent } from './pages/creation-pizza/creation-pizza.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateProfileComponent } from './pages/create-profile/create-profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PaiementComponent } from './pages/paiement/paiement.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    OurCarteComponent,
    YourCarteComponent,
    CreationPizzaComponent,
    ContactComponent,
    CreateProfileComponent,
    EditProfileComponent,
    PanierComponent,
    PaiementComponent,
    DeliveryComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
