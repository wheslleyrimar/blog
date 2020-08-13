import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { ContatoComponent } from './contato/contato.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'feed', component: FeedComponent},
    {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
