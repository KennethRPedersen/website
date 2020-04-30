import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ProjectsComponent} from './pages/projects/projects.component';
import {UrlShortenerComponent} from './pages/url-shortener/url-shortener.component';
import {RedirectorComponent} from './pages/url-shortener/redirector/redirector.component';
import {AboutComponent} from './pages/about/about.component';
import {PlaygroundComponent} from './pages/playground/playground.component';
import {LiveChatComponent} from './pages/live-chat/live-chat/live-chat.component';
import {RoleplayGameComponent} from './pages/roleplay-game/roleplay-game/roleplay-game.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'short-url', component: UrlShortenerComponent},
  {path: 's/:url', component: RedirectorComponent},
  {path: 'live-chat', component: LiveChatComponent},
  {path: 'playground', component: PlaygroundComponent},
  {path: 'roleplaygame', component: RoleplayGameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
