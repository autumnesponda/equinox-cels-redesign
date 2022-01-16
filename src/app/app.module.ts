import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";
import { MdbRippleModule } from "mdb-angular-ui-kit/ripple";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/site-header/header.component';
import { FooterComponent } from './shared/site-footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbRippleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
