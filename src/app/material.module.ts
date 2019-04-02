import { NgModule } from '@angular/core';
import { MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDialogModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

const Materials = [ MatToolbarModule,
    MatButtonModule,
     MatInputModule,
     FormsModule,
     MatBadgeModule,
     MatIconModule,
     MatDividerModule,
     MatCardModule,
     MatMenuModule,
     MatSidenavModule,
     MatTabsModule,
     MatGridListModule,
     MatProgressSpinnerModule,
     MatListModule,
     MatDialogModule
    ];

@NgModule({
    imports: [ Materials ],
    exports: [ Materials ]

})

export class Material {}
