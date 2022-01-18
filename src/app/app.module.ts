import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";
import { MdbRippleModule } from "mdb-angular-ui-kit/ripple";
import { IvyCarouselModule } from "angular-responsive-carousel";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/site-header/header.component';
import { FooterComponent } from './shared/site-footer/footer.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { GalleryPageImageComponent } from './shared/components/gallery-page-image/gallery-page-image.component';
import { EvaGalleryComponent } from './pages/gallery/eva-gallery/eva-gallery.component';
import { GundamGalleryComponent } from './pages/gallery/gundam-gallery/gundam-gallery.component';
import { GhostStoriesGalleryComponent } from './pages/gallery/ghost-stories-gallery/ghost-stories-gallery.component';
import { JojosGalleryComponent } from './pages/gallery/jojos-gallery/jojos-gallery.component';
import { FmaGalleryComponent } from './pages/gallery/fma-gallery/fma-gallery.component';
import { OtherGalleryComponent } from './pages/gallery/other-gallery/other-gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    GalleryPageImageComponent,
    EvaGalleryComponent,
    GundamGalleryComponent,
    GhostStoriesGalleryComponent,
    JojosGalleryComponent,
    FmaGalleryComponent,
    OtherGalleryComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbRippleModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
