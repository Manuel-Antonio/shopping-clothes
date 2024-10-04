import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconButton } from '@angular/material/button';

import { AppComponent } from './app.component';
import { MenuAsideComponent } from './components/menu-aside/menu-aside.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, MenuAsideComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    RouterModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
