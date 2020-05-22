import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { StarterPageComponent } from './starter-page/starter-page.component';
import { LogoutComponent } from './logout/logout.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { RouteGuardService } from './services/route-guard.service';
import { UpdateTodoComponent } from './update-todo/update-todo.component';


const routes: Routes = [
  {path:"register", component:RegisterComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[RouteGuardService]},
  {path:"",component:StarterPageComponent},
  {path:"logout",component:LogoutComponent,canActivate:[RouteGuardService]},
  {path:"newTodo",component:TodoPageComponent,canActivate:[RouteGuardService]},
  {path:"updateTodo/:id",component:UpdateTodoComponent,canActivate:[RouteGuardService]},
  {path:"**",component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
