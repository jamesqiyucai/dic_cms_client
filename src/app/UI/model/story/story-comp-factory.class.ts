import {StoryCompFactory} from './story-comp-factory.interface';
import {StoryComp} from './story-comp.class';
import {ID_SERVICE} from '../../../service/entity/word_builder/tokens';
import {IDService} from '../../../service/entity/word_builder/id.service.interface';
import {Inject, Injectable} from '@angular/core';
import {ModelType} from '../../../service/entity/word_builder/model-type.enum';

@Injectable()
export class StoryCompFactoryImpl implements StoryCompFactory {
  constructor(@Inject(ID_SERVICE) private idService: IDService) {}
  public createNewStory(): StoryComp {
    return new StoryComp(this.idService.getID(ModelType.story), '', '');
  }
}
