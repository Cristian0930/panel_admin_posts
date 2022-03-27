import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostsComponent } from './components/posts/posts.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { IsLoggedInGuard } from './is-logged-in.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'signin', pathMatch: 'full'
  },
  {
    path: 'signup', component: SignupComponent, canActivate: [IsLoggedInGuard]
  },
  {
    path: 'signin', component: SigninComponent, canActivate: [IsLoggedInGuard]
  },
  {
    path: 'categories', component: CategoryListComponent, canActivate: [AuthGuard]
  },
  {
    path: 'category/create', component: CategoryFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'category/edit/:id', component: CategoryFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'posts', component: PostsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'post/create', component: PostFormComponent, canActivate: [AuthGuard]
  },
  {
    path: 'post/edit/:id', component: PostFormComponent, canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
