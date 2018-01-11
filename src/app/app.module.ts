import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthService } from './home/auth.service';
import { AuthGuard } from './home/auth-guard.service';

import { UserPageComponent } from './user-page/user-page.component';
import { HeaderComponent } from './header/header.component';
import { DataStorageService } from './user-page/data-storage.service';
import { WordItemComponent } from './user-page/word-item/word-item.component';
import { WordListComponent } from './user-page/word-list/word-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { CategoryListComponent } from './user-page/category-list/category-list.component';
import { WordDetailComponent } from './user-page/word-detail/word-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserPageComponent,
    HeaderComponent,
    WordItemComponent,
    WordListComponent,
    DropdownDirective,
    CategoryListComponent,
    WordDetailComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthService , AuthGuard ,DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
