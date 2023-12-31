import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'meu-perfil',
    loadChildren: () => import('./pages/meu-perfil/meu-perfil.module').then( m => m.MeuPerfilPageModule)
  },
  {
    path: 'list-perfis',
    loadChildren: () => import('./pages/list-perfis/list-perfis.module').then( m => m.ListPerfisPageModule)
  },
  {
    path: 'list-usuarios',
    loadChildren: () => import('./pages/list-usuarios/list-usuarios.module').then( m => m.ListUsuariosPageModule)
  },
  {
    path: 'add-edit-profile',
    loadChildren: () => import('./pages/add-edit-profile/add-edit-profile.module').then( m => m.AddEditProfilePageModule)
  },
  {
    path: 'add-edit-profile/:id',
    loadChildren: () => import('./pages/add-edit-profile/add-edit-profile.module').then( m => m.AddEditProfilePageModule)
  },
  {
    path: 'add-edit-user',
    loadChildren: () => import('./pages/add-edit-user/add-edit-user.module').then( m => m.AddEditUserPageModule)
  },
  {
    path: 'add-edit-user/:id',
    loadChildren: () => import('./pages/add-edit-user/add-edit-user.module').then( m => m.AddEditUserPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
