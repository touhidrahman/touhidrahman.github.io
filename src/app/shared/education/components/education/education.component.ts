import { Component, Input } from '@angular/core'

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
    @Input() program: string
    @Input() major: string
    @Input() university: string
    @Input() period: string
    @Input() location: string
}
