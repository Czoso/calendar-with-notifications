import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './main-field/add/add.component';
import { DeleteComponent } from './main-field/delete/delete.component';
import { OptionsComponent } from './main-field/options/options.component';
import { PreviewComponent } from './main-field/preview/preview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'preview',
    pathMatch: 'full',
  },
  {
    path: 'preview',
    component: PreviewComponent,
  },
  {
    path: 'delete',
    component: DeleteComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'options',
    component: OptionsComponent,
  },
  { path: '**', component: PreviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
