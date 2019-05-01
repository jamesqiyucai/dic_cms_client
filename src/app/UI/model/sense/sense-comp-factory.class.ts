import {SenseCompFactory} from './sense-comp-factory.interface';
import {SenseComp} from './sense-comp.class';
import {SensePositionCompFactory} from '../sense-position/sense-position-comp-factory.interface';
import {Inject, Injectable} from '@angular/core';
import {ExampleCompFactory} from '../example/example-comp-factory.interface';
import {ID_SERVICE} from '../../../service/entity/word_builder/tokens';
import {IDService} from '../../../service/entity/word_builder/id.service.interface';
import {EXAMPLE_FACTORY} from '../example/injection-token';
import {ModelType} from '../../../service/entity/word_builder/model-type.enum';
import {SENSE_POSITION_FACTORY} from '../sense-position/injection-token';

@Injectable()
export class SenseCompFactoryImpl implements SenseCompFactory {
  constructor(
    @Inject(SENSE_POSITION_FACTORY) private sensePositionFactory: SensePositionCompFactory,
    @Inject(EXAMPLE_FACTORY) private exampleFactory: ExampleCompFactory,
    @Inject(ID_SERVICE) private idService: IDService
    ) {}
  public createNewSense(): SenseComp {
    const newPosition = this.sensePositionFactory.createNewSensePosition();
    const newExample = this.exampleFactory.createNewExample();
    const newSense = new SenseComp(
      this.idService.getID(ModelType.sense),
      1,
      newPosition,
      '',
      '',
      [],
      [],
      [newExample],
      []);
    return newSense;
  }
}
