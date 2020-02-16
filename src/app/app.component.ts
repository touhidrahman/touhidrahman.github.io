import { Component, OnInit } from '@angular/core'
import ResumeJson from 'src/assets/resume.json'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    asset: any

    ngOnInit() {
        this.asset = ResumeJson
    }
}
