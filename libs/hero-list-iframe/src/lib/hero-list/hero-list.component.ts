import { Component } from '@angular/core';
import * as faker from 'faker'
import tinycolor from 'tinycolor2';
interface IHero {
  name: string;
  color: string;
  breed: string;
  description: string;
  avatar: string;
  power: number;
}
/**
 * Hero List component.
 */
@Component({
  selector: 'angular-print-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent {
  public heros: IHero[]

  constructor() {
    this.heros = this.getFakeData(10);
  }

  private getFakeData(length: number): IHero[] {
    return Array.from({length})
      .map((_, idx) => ({
        name: faker.name.firstName(),
        breed: faker.name.lastName(),
        description: faker.lorem.paragraph(),
        avatar: faker.image.imageUrl() + `?idx=${idx}`,
        color: tinycolor.random().toHexString(),
        power: Math.random() * 10
      } as IHero));
  }
}
