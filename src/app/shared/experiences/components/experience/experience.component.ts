import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent {
    @Input() companyName: string
    @Input() period: string
    @Input() role: string
    @Input() location: string
    @Input() responsibilities: string[]
}
