import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { MainViewComponent } from './views/main-view/main-view.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
    {
        path: 'home',
        component: MainViewComponent,
        children: [
            {
                path: 'store',
                component: StoreComponent,
            },
            {
                path: 'admin',
                component: AdminComponent,
            },
        ]
    },
    { path: '', redirectTo: 'home/store', pathMatch: 'full' },
    { path: '**', redirectTo: 'home/store' }
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

})
export class AppRoutingModule { }