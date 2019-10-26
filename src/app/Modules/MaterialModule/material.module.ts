import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

const MaterialModules = [
  Material.MatToolbarModule,
  Material.MatButtonModule,
  Material.MatInputModule,
  Material.MatBadgeModule,
  Material.MatIconModule,
  Material.MatDividerModule,
  Material.MatCardModule,
  Material.MatMenuModule,
  Material.MatSidenavModule,
  Material.MatTabsModule,
  Material.MatGridListModule,
  Material.MatProgressSpinnerModule,
  Material.MatListModule,
  Material.MatDialogModule,
  Material.MatDatepickerModule,
  Material.MatProgressSpinnerModule,
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModules
  ]
})
export class MaterialModule { }
