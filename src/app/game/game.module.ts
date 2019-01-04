import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { VillageComponent } from './village/village.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BuildComponent } from './village/build/build.component';
import { AppCommonModule } from '../common/common.module';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
        TranslateModule.forChild(),
        AppCommonModule
    ],
    declarations: [
        PlayerComponent,
        VillageComponent,
        BuildComponent
    ],
    exports: [
        PlayerComponent
    ]
})
export class GameModule {}