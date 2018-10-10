import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: process.env.NODE_ENV === 'development' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
