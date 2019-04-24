import { HomeComponent } from './components/home/home.component';
import { DatasourceComponent } from './components/datasource/datasource.component';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackupComponent } from './components/backup/backup.component';
import { BankStatementsSummaryComponent } from './components/finance/bank-statements-summary/bank-statements-summary.component';
import { CreditCardsComponent } from './components/finance/credit-cards/credit-cards.component';
import { EWalletsComponent } from './components/finance/e-wallets/e-wallets.component';
import { InvoicesComponent } from './components/finance/invoices/invoices.component';
import { FlightsComponent } from './components/travel/flights/flights.component';
import { CabsComponent } from './components/travel/cabs/cabs.component';
import { RailwaysComponent } from './components/travel/railways/railways.component';

const routes: Routes = [


    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'datasource',
        component: DatasourceComponent
    },


    {
        path: 'backup',
        component: BackupComponent
    },

    {
        path: 'finance/bank-statements-summary',
        component: BankStatementsSummaryComponent
    },

    {
        path: 'finance/credit-cards',
        component: CreditCardsComponent
    },

    {
        path: 'finance/e-wallets',
        component: EWalletsComponent
    },

    {
        path: 'finance/invoices',
        component: InvoicesComponent
    },


    {
        path: 'travel/flights',
        component: FlightsComponent
    },

    {
        path: 'travel/cabs',
        component: CabsComponent
    },

    {
        path: 'travel/railways',
        component: RailwaysComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
