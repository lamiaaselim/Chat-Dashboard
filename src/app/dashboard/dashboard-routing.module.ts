import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { InfoComponent } from './components/info/info.component';
import { UserComponent } from './components/user/user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChatsComponent } from './components/chats/chats.component';

const routes: Routes = [
  { path: '', component: WrapperComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      { path: 'info', component: InfoComponent },
      { path: 'user', component: UserComponent },
      { path: 'chats', component: ChatsComponent },
    ]
   },
   { path: ' **',
     redirectTo: '/dashboard',
     pathMatch: 'full'
   }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
