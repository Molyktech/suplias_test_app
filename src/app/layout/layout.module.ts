import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MainComponent } from "./main/main.component";
import { LayoutComponent } from "./layout/layout.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainComponent,
    LayoutComponent
  ],
  imports: [CommonModule, RouterModule, NgbModule],
  exports: [LayoutComponent]
})
export class LayoutModule {}
