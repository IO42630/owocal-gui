import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { GraphDisplayComponent } from './graph-display/graph-display.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { GraphVisDirective } from './graph-display/graphvis.directive';

@NgModule({
    declarations: [
        AppComponent,
        GraphDisplayComponent,
        TaskDetailsComponent,
        GraphDisplayComponent,
        GraphVisDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        AppRoutingModule,
        CommonModule,
        MatToolbarModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
