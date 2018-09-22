import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { VideosComponent } from './components/videos/videos.component';
import { MusicComponent } from './components/music/music.component';

const routes: Routes = [
  // { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'music', component: MusicComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        // enableTracing: true,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
