import {OntologyService} from './ontology.service.interface';
import {Inject, Injectable} from '@angular/core';
import {List, Map} from 'immutable';
import {HttpClient} from '@angular/common/http';
import {PoS} from './pos.class';
import {Variation} from './variation.class';
import {Inflection} from './inflection.class';
import {API_INFLECTIONS, API_POSES, API_VARIATIONS} from './tokens';

@Injectable()
export class OntologyServiceImplementation implements OntologyService {
  private posIDToName: Map<number, string> = Map();
  private posIDToDesc: Map<number, string> = Map();
  private posIDToInflections: Map<number, List<number>> = Map();
  private variationIDToName: Map<number, string> = Map();
  private variationIDToDesc: Map<number, string> = Map();
  private inflectionIDToName: Map<number, string> = Map();

  constructor(
    @Inject(API_POSES) private posesAPI: string,
    @Inject(API_VARIATIONS) private variationsAPI: string,
    @Inject(API_INFLECTIONS) private inflectionsAPI: string,
    private http: HttpClient
  ) {}

  /** Methods called when the core module is loaded. */
  public loadPoses(): Promise<any> {
    return this.http.get<PoS[]>(this.posesAPI)
      .toPromise()
      .then(PoSes => {
        PoSes.forEach((pos) => {
          this.posIDToName = this.posIDToName.set(pos.id, pos.name);
          this.posIDToDesc = this.posIDToDesc.set(pos.id, pos.description);
          this. posIDToInflections = this.posIDToInflections.set(pos.id, List());
        });
        console.log('poses loaded');
      });
  }
  public loadVariations(): Promise<any> {
    return this.http.get<Variation[]>(this.variationsAPI)
      .toPromise()
      .then(variations => {
        variations.forEach(variation => {
          this.variationIDToName = this.variationIDToName.set(variation.id, variation.name);
          this.variationIDToDesc = this.variationIDToDesc.set(variation.id, variation.description);
        });
        console.log('variations loaded');
      });
  }
  public loadInflections(): Promise<any> {
    return this.http.get<Inflection[]>(this.inflectionsAPI)
      .toPromise()
      .then(inflections => {
        inflections.forEach(inflection => {
          this.inflectionIDToName = this.inflectionIDToName.set(inflection.id, inflection.name);
          inflection.scope.forEach(pos => {
            this.posIDToInflections = this.posIDToInflections.set(pos, this.posIDToInflections.get(pos).push(inflection.id));
          });
        });
        console.log('inflections loaded');
      });
  }

  public getPosNameByID(id: number): string {
    return this.posIDToName.get(id);
  }
  public getPosDescByID(id: number): string {
    return this.posIDToDesc.get(id);
  }
  public getVariationNameByID(id: number): string {
    return this.variationIDToName.get(id);
  }
  public getVariationDescByID(id: number): string {
    return this.variationIDToDesc.get(id);
  }
  public getInflectionNameByID(id: number): string {
    return this.inflectionIDToName.get(id);
  }
  public getInflectionsByPos(id: number): List<number> {
    return this.posIDToInflections.get(id);
  }
}
