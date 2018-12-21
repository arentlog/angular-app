import { Component, OnInit } from '@angular/core';
import { Type } from 'src/app/shared/type';
import { TypeService } from 'src/app/shared/type.service';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  types: Type[] = [];
  selectedTypes: Type[] = [];
  seList: Type[] = [];

  constructor(private typeService: TypeService) { }

  ngOnInit() {
    this.types = this.typeService.types;
    console.log(this.types);
  }

  getType(typeName: string) {
    this.typeService.types.forEach(type => {
      if (type.typeName === typeName) {
        return type;
      }
    });
  }

  onCheckboxChange(event: MatCheckboxChange, type: Type) {
    if (event.checked) {
      this.selectedTypes.push(type);
      console.log(type);
    }
    else {
      this.selectedTypes.splice(this.selectedTypes.indexOf(type), 1);
    }

    this.seList = [];
    this.selectedTypes.forEach(type => {
      type.strengths.forEach(s => {
        console.log("selected:", this.selectedTypes, "str:", s);
        let x = this.typeService.getTypeByName(s);
        console.log("x:", x);
        if (!this.seList.includes(x)) {
          console.log("Adding to seList:", x);
          this.seList.push(this.typeService.getTypeByName(s));
        }
      });
    });
    console.log(this.seList);
  }

}
