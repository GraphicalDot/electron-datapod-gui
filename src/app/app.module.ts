import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTreeModule, MatCardMdImage, MatCardModule, MatMenuModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatasourceComponent } from './components/datasource/datasource.component';
import { BackupComponent } from './components/backup/backup.component';
import { BankStatementsSummaryComponent } from './components/finance/bank-statements-summary/bank-statements-summary.component';
import { CreditCardsComponent } from './components/finance/credit-cards/credit-cards.component';
import { EWalletsComponent } from './components/finance/e-wallets/e-wallets.component';
import { InvoicesComponent } from './components/finance/invoices/invoices.component';
import { FlightsComponent } from './components/travel/flights/flights.component';
import { CabsComponent } from './components/travel/cabs/cabs.component';
import { RailwaysComponent } from './components/travel/railways/railways.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    NavComponent,
    DatasourceComponent,
    BackupComponent,
    BankStatementsSummaryComponent,
    CreditCardsComponent,
    EWalletsComponent,
    InvoicesComponent,
    FlightsComponent,
    CabsComponent,
    RailwaysComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    MatTreeModule,
    MatCardModule,
    FlexLayoutModule,
    MatMenuModule
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
