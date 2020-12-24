import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { EducationModule } from '@app/shared/education/education.module'
import { ExperiencesModule } from '@app/shared/experiences/experiences.module'
import { HomePageRoutingModule } from './home-page-routing.module'
import { HomePageComponent } from './home-page.component'

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule, ExperiencesModule, EducationModule, HomePageRoutingModule],
})
export class HomePageModule {}
