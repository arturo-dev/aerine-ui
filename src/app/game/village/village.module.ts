import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildComponent } from './build/build.component';
import { VillageComponent } from './village.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    declarations: [
        BuildComponent,
        VillageComponent,
    ],
    exports: [
        VillageComponent
    ]
})
export class VillageModule { }