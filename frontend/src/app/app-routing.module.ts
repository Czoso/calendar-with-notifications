import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AddComponent,
  DeleteComponent,
  LoginPageComponent,
  OptionsComponent,
  PreviewComponent,
} from './components';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
  { path: '**', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
