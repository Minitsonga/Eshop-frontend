import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./auth.module').then(m => m.AuthModule) },
  { path: 'register', loadChildren: () => import('./auth.module').then(m => m.AuthModule) },
  { path: 'products', loadChildren: () => import('../products/products.module').then(m => m.ProductsModule) },
  { path: 'users', loadChildren: () => import('../users/users.module').then(m => m.UsersModule) },
  { path: '**', loadChildren: () => import('../shared/not-found/not-found.component').then(m => m.NotFoundComponent) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
