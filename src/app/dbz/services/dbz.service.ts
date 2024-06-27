
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";


@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters :Character[] = [{
    id:uuid(),
    name:'Krilin',
    power:1000
  },
  {
    id:uuid(),
    name:'Goku',
    power:9500
  },
  {
    id:uuid(),
    name:'Vegeta',
    power:7500

  }];


  addCharacter(character:Character):void{
    const newCharacter : Character = {id:uuid(),...character} //los tres puntos se denominan operador de propagacion

  this.characters.push(character);
  }


  /*onDeletedCharacter(index:number){
  this.characters.splice(index,1);
  }*/


deleteCharacterById(id:string){
this.characters = this.characters.filter(character =>character.id != id);
}



constructor() { }

}
