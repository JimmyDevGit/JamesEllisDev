import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';

import { ReactiveFormsModule } from '@angular/forms';
import { GamesComponent } from './games/games.component';
import { TitleComponent } from './title/title.component';
import { ToolKitComponent } from './tool-kit/tool-kit.component';
import { LandingComponent } from './landing/landing.component';
import { FullStackComponent } from './full-stack/full-stack.component';
import { PasswordComponent } from './password/password.component';
import { TypingComponent } from './typing/typing.component';
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    GamesComponent,
    TitleComponent,
    ToolKitComponent,
    LandingComponent,
    FullStackComponent,
    PasswordComponent,
    TypingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
