import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaprincipalComponent } from './principal/paginaprincipal.component'

const routes: Routes = [
  {
    path:'',
    component:PaginaprincipalComponent
    
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/paginaprincipal.module').then(m => m.PaginaprincipalModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
