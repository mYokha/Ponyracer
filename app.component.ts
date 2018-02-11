import { Component } from '@angular/core'
import { RaceService } from './services/race.service'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'ponyracer-app',
  template: `
    <h1>PonyRacer</h1>
    <p>{{ list() }}</p>

  `
})
export class PonyRacerAppComponent {

  // add a constructor with RaceService
  constructor (private raceService: RaceService, title: Title, meta: Meta){
    title.setTitle('PonyRacer - Bet on ponies')
    meta.addTag({ name: 'max', content: '(\'\')' })
  }

  list () {return this.raceService.list()}

}
