import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './provider/auth/auth.guard';

const routes: Routes = [
  { 
    path: 'game',
    loadChildren: './tabs/tabs.module#TabsPageModule',
    canActivate: [AuthGuard]
  },
  { path: '', loadChildren: './login/login.module#LoginModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
