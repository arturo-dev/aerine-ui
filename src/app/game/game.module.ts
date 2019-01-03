import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PlayerComponent
    ],
    exports: [
        PlayerComponent
    ]
})
export class GameModule {}