import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurCarteComponent } from './pages/our-carte/our-carte.component';
import { YourCarteComponent } from './pages/your-carte/your-carte.component';
import { CreationPizzaComponent } from './pages/creation-pizza/creation-pizza.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateProfileComponent } from './pages/profil/create-profile/create-profile.component';
import { EditProfileComponent } from './pages/profil/edit-profile/edit-profile.component';
import { PanierComponent } from './pages/panier/panier.component';
import { PaiementComponent } from './pages/panier/paiement/paiement.component';
import { DeliveryComponent } from './pages/home-page/delivery/delivery.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IngredientService } from './services/ingredient.service'
import { HttpClientModule } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';



import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule, MatListModule } from '@angular/material';
import { LoginComponent } from './pages/profil/login/login.component';
import { ApiService } from "./services/api.service";
import { AdminComponent } from './admin/admin.component';

import { PanierFlottantComponent } from './pages/panier/panier-flottant/panier-flottant.component';


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
        FooterComponent,
        LoginComponent,
        MainNavComponent,
        AdminComponent,
        PanierFlottantComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatCardModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatGridListModule,
        RouterModule.forRoot(routes),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatMenuModule,
        MatIconModule,
        LayoutModule,
        MatSidenavModule,
        MatListModule,
        FlexLayoutModule,
        MatCheckboxModule,
    ],
    providers: [IngredientService, ApiService],
    bootstrap: [AppComponent]
})
export class AppModule { }

providers: [

]