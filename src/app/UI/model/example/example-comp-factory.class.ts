import {ExampleCompFactory} from './example-comp-factory.interface';
import {ExampleComp} from './example-comp.class';
import {List} from 'immutable';
import {Inject, Injectable} from '@angular/core';
import {ID_SERVICE} from '../../../service/word_builder/tokens';
import {IDService} from '../../../service/word_builder/id.service.interface';
import {ModelType} from '../../../service/word_builder/model-type.enum';

@Injectable()
export class ExampleCompFactoryImpl implements ExampleCompFactory {
  constructor(@Inject(ID_SERVICE) private idService: IDService) {}
  public createNewExample(): ExampleComp {
    return new ExampleComp(this.idService.getID(ModelType.example), '', List([]), List([]), '', '');
  }
}
