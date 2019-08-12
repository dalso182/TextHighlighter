import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TextHighlighterContainerComponent} from './containers/text-highlighter-container/text-highlighter-container.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: TextHighlighterContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
