import { AboutUsComponent } from './../pages/about-us/about-us.component';
import { PaiementComponent } from './../pages/panier/paiement/paiement.component';
import { PanierComponent } from './../pages/panier/panier.component';
import { EditProfileComponent } from './../pages/profil/edit-profile/edit-profile.component';
import { CreateProfileComponent } from './../pages/profil/create-profile/create-profile.component';
import { YourCarteComponent } from './../pages/your-carte/your-carte.component';
import { OurCarteComponent } from './../pages/our-carte/our-carte.component';
import { CreationPizzaComponent } from './../pages/creation-pizza/creation-pizza.component';
import { ContactComponent } from './../pages/contact/contact.component';
import { HomePageComponent } from './../pages/home-page/home-page.component';
import { AdminComponent } from "./../admin/admin.component";
import { LoginComponent } from "./../pages/profil/login/login.component";
import { LoggedInGuard } from "./../guard/logged-in.guard";
import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'homePage', pathMatch: 'full' },
    { path: 'homePage', component: HomePageComponent },
    { path: 'aboutUs', component: AboutUsComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'ourCarte', component: OurCarteComponent },
    { path: 'yourCarte', component: YourCarteComponent },
    { path: 'creationPizza', /* canActivate: [LoggedInGuard] ,*/ component: CreationPizzaComponent },
    { path: 'panier', component: PanierComponent },
    { path: 'paiement', component: PaiementComponent },
    { path: 'editProfil', component: EditProfileComponent },
    { path: 'createProfil', component: CreateProfileComponent },
    { path: "admin", component: AdminComponent },
    { path: "login", component: LoginComponent }
]

// export default routes;

