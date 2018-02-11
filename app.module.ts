import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { PonyRacerAppComponent } from './app.component'
import { RaceService } from './services/race.service'
import { FakeRaceService } from './services/fakerace.service'
import { ApiService } from './services/api.service'

const IS_PROD = false

@NgModule({
  imports: [BrowserModule],
  declarations: [PonyRacerAppComponent],
  providers: [
    ApiService,
    { provide: RaceService, useClass: IS_PROD ? RaceService : FakeRaceService }
  ],
  bootstrap: [PonyRacerAppComponent]
})
export class AppModule {
}
