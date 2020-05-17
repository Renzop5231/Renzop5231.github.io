import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

//angular material module imports
import { MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

//component imports
import { AppComponent } from './app.component';
import { WordBoxComponent } from './word-box/word-box.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { AltTabsComponent } from './alt-tabs/alt-tabs.component';
import { WordListComponent } from './word-list/word-list.component';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import { JpWordListComponent } from './jp-word-list/jp-word-list.component';
import { HomePageComponent } from './home-page/home-page.component';


@NgModule({
  declarations: [
    AppComponent,
    WordBoxComponent,
    MainNavComponent,
    AltTabsComponent,
    WordListComponent,
    FlashCardsComponent,
    JpWordListComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatGridListModule,
    MatDividerModule,
    MatMenuModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
