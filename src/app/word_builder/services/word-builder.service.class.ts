import {WordBuilderService} from './word-builder.service.interface';
import {Injectable} from '@angular/core';
import {WordBuilderModule} from '../word-builder.module';

@Injectable({
  providedIn: WordBuilderModule
})
export class WordBuilderServiceImpl implements WordBuilderService {
  somefunc(): any {
    console.log('a');
  }
}
