import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EducationComponent } from './components/education/education.component'

@NgModule({
    declarations: [EducationComponent],
    exports: [EducationComponent],
    imports: [CommonModule],
})
export class EducationModule {}
