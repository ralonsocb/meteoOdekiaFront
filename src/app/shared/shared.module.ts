import { NgModule } from "@angular/core";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PaginacionPipe } from './pipes/paginacion.pipe';

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: [
       BreadcrumbsComponent,
       HeaderComponent,
       NopagefoundComponent,
       SidebarComponent,
       PaginacionPipe
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        NopagefoundComponent,
        SidebarComponent,
        PaginacionPipe
    ]
})

export class SharedModule {}