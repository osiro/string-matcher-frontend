import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatchEffects } from './store/effects/match.effects';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule }    from '@angular/common/http';
import { reducers, metaReducers } from './store/reducers';
import { StringMatchService } from './services/string-match.services';
import { FormComponent } from './components/form/form.component';
import { ResultComponent } from './components/result/result.component';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    EffectsModule.forRoot([MatchEffects]),
    BrowserAnimationsModule
  ],
  providers: [StringMatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
