import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbListModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SoundListComponent } from './components/sound-list/sound-list.component';
import { SoundDetailComponent } from './components/sound-detail/sound-detail.component';
import{HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http';
import { InterceptionInterceptor } from './interception.interceptor';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SoundDetailComponent,
    SoundListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    HttpClientModule,
    NbButtonModule,
    NbListModule,
    NbCardModule,
    NbInputModule,
    FormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptionInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
