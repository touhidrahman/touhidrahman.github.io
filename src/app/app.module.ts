import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { UiModule } from './modules/ui/ui.module'

@NgModule({
    declarations: [AppComponent, NavbarComponent],
    imports: [
        BrowserModule,
        UiModule,
        // routing
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
