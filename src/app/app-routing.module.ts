import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import {EditComponent} from './edit/edit.component';
import {CommentComponent} from './comment/comment.component';
import {ViewComponent} from './view/view.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'list', component: ListComponent },
  { path: 'edit/:bookid', component: EditComponent },
  { path:'comment/:bookid', component:CommentComponent},
  { path:'view/:bookid',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
