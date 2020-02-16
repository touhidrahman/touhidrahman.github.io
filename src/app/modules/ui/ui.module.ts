import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MenubarModule } from 'primeng/menubar'

const PrimeNGModules = [MenubarModule]

@NgModule({
    declarations: [],
    imports: [CommonModule, ...PrimeNGModules],
    exports: [...PrimeNGModules],
})
export class UiModule {}
