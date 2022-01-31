import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";
import { MdbCollapseModule } from "mdb-angular-ui-kit/collapse";
import { MdbDropdownModule } from "mdb-angular-ui-kit/dropdown";
import { MdbModalModule } from "mdb-angular-ui-kit/modal";
import { MdbRippleModule } from "mdb-angular-ui-kit/ripple";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { LightboxModule } from "ngx-lightbox";

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
import { EvaVideoCardComponent } from './shared/components/eva-video-card/eva-video-card.component';
import { EvaModalGalleryComponent } from './shared/components/eva-modal-gallery/eva-modal-gallery.component';
import { EvaBasicCardComponent } from './shared/components/eva-basic-card/eva-basic-card.component';

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
    EvaVideoCardComponent,
    EvaModalGalleryComponent,
    EvaBasicCardComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MdbCarouselModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbModalModule,
    MdbRippleModule,
    IvyCarouselModule,
    LightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
