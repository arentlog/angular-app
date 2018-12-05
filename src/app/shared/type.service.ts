import { Injectable } from '@angular/core';
import { Type } from './type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  types: Type[] = [];
  empty: Type = {
    typeName: 'empty',
    typeColor: 'black',
    strengths: [],
    weaknesses: []
  };

  constructor() {
    this.types = [
      {
        typeName: 'electric',
        typeColor: 'yellow',
        strengths: ['flying', 'water'],
        weaknesses: []
      },
      {
        typeName: 'fight',
        typeColor: 'darkred',
        strengths: ['normal', 'rock', 'ice', 'dark'],
        weaknesses: []
      },
      {
        typeName: 'water',
        typeColor: 'blue',
        strengths: ['fire', 'rock', 'ground'],
        weaknesses: []
      },
      {
        typeName: 'flying',
        typeColor: 'lightblue',
        strengths: ['fight', 'bug', 'grass'],
        weaknesses: []
      },
      {
        typeName: 'rock',
        typeColor: 'brown',
        strengths: ['flying', 'bug', 'fire', 'ice'],
        weaknesses: []
      }
    ];
  }

  getTypeByName(name: string) {
    this.types.forEach(type => {
      // console.log(type.typeName, "VS", name);
      if (type.typeName === name) {
        console.log("WERE EQUAL UP IN HERE", type.typeName, name, "TYPE:", type);
        return type;
      }
    });
    console.log("EMPTY");
    return this.empty;
  }
}
