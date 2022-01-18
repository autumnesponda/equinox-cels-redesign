import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { GalleryComponent } from "./pages/gallery/gallery.component";
import {EvaGalleryComponent} from "./pages/gallery/eva-gallery/eva-gallery.component";
import {GundamGalleryComponent} from "./pages/gallery/gundam-gallery/gundam-gallery.component";
import {GhostStoriesGalleryComponent} from "./pages/gallery/ghost-stories-gallery/ghost-stories-gallery.component";
import {JojosGalleryComponent} from "./pages/gallery/jojos-gallery/jojos-gallery.component";
import {FmaGalleryComponent} from "./pages/gallery/fma-gallery/fma-gallery.component";
import {OtherGalleryComponent} from "./pages/gallery/other-gallery/other-gallery.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'gallery/evangelion', component: EvaGalleryComponent},
    { path: 'gallery/gundam', component: GundamGalleryComponent},
    { path: 'gallery/ghoststories', component: GhostStoriesGalleryComponent},
    { path: 'gallery/jojos', component: JojosGalleryComponent},
    { path: 'gallery/fma', component: FmaGalleryComponent},
    { path: 'gallery/other', component: OtherGalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
