import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { UrlShortenerComponent } from './pages/url-shortener/url-shortener.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RedirectorComponent } from './pages/url-shortener/redirector/redirector.component';
import { AboutComponent } from './pages/about/about.component';
import {SnaccbarModule} from './components/snaccbar/snaccbar.module';
import { PlaygroundComponent } from './pages/playground/playground.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavDrawerComponent } from './layout/sidenav-drawer/sidenav-drawer.component';
import {LiveChatModule} from './pages/live-chat/live-chat.module';
import { RoleplayGameComponent } from './pages/roleplay-game/roleplay-game/roleplay-game.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { PlayerdataEditorComponent } from './pages/roleplay-game/dummies/playerdata-editor/playerdata-editor.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ProjectsComponent,
    UrlShortenerComponent,
    RedirectorComponent,
    AboutComponent,
    PlaygroundComponent,
    SidenavDrawerComponent,
    RoleplayGameComponent,
    PlayerdataEditorComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FlexModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    SnaccbarModule,
    ExtendedModule,
    MatSidenavModule,
    LiveChatModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
  ],
  entryComponents: [
    PlayerdataEditorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
