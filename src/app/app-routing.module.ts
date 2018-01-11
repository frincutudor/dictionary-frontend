import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "./home/auth-guard.service";
import {UserPageComponent} from "./user-page/user-page.component";
import {CategoryListComponent} from "./user-page/category-list/category-list.component";
import {WordDetailComponent} from "./user-page/word-detail/word-detail.component";
const appRoutes : Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'user-page',
        component: UserPageComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: ':id',
                component: WordDetailComponent
            }
        ]
    }, {
        path: 'user-page/:category',
        component: CategoryListComponent,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}