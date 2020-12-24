import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ExperienceComponent } from './components/experience/experience.component'

@NgModule({
    declarations: [ExperienceComponent],
    exports: [ExperienceComponent],
    imports: [CommonModule],
})
export class ExperiencesModule {}
