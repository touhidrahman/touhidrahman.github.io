import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-pill',
    templateUrl: './pill.component.html',
    styleUrls: ['./pill.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PillComponent implements OnInit {
    @Input() text: string;

    constructor() { }

    ngOnInit(): void { }
}
