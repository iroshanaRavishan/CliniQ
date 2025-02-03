import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth',  pathMatch: 'full'},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule) },
  { path: 'password', loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)  },
  { path: 'tabs',  loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
