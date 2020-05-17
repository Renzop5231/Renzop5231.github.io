import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  { JpWordListComponent } from './jp-word-list/jp-word-list.component';
import { AltTabsComponent } from './alt-tabs/alt-tabs.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FlashCardsComponent } from './flash-cards/flash-cards.component';
import { WordListComponent } from './word-list/word-list.component';
import { WordBoxComponent } from './word-box/word-box.component';



const routes: Routes = [
  {path: '', component: HomePageComponent},
  {
    path: 'Korean',
    component: AltTabsComponent,
    children: [
      {path: 'flash-cards', component: FlashCardsComponent},
      {path: 'word-lists', component: WordListComponent},
      {path: 'word-box', component: WordBoxComponent}

    ]
  },
  {path: 'Japanese', component: JpWordListComponent}
];

// TO DO LATER, DON'T FORGET
// I need to recreate/rename components to contain the korean and japanese tab pages


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
