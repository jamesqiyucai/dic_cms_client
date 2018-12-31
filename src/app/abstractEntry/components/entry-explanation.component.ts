import {List, Map} from 'immutable';
import {WordEntryService} from '../../wordEntry/word-entry-service.interface';
import {SenseGroup} from './models/sense-group.class';
import {IDService} from '../../core/id.service.interface';
import {OntologyService} from '../../core/ontology.service.interface';

export abstract class EntryExplanationComponent {
  protected constructor(
    protected wordEntryService: WordEntryService,
    protected idService: IDService,
    protected ontologyService: OntologyService
  ) {
  }
  private explanationModel: List<SenseGroup> = List().push(new SenseGroup(this.idService.getID()));
  get senseGroups() {
    return this.explanationModel;
  }
  public addSenseGroup(pos: number) {
    const newSenseGroup: SenseGroup = new SenseGroup(this.idService.getID(), )
    this.explanationModel.push(newSenseGroup);
  }
  // public baseSenses: List<Sense>;
  // public subSenses: Map<baseSenseID, List<Sense>>;
  // static normalizeSenses(senses: List<Sense>): List<Sense> {
  //   return senses.map((sense, index) => {
  //     sense.firstLevel = index + 1;
  //     sense.secondLevel = 0;
  //     return sense;
  //   });
  // }
  // protected getSensesFn(): (allSenses: Map<senseID, Sense>) => void {
  //   return (allSenses: Map<senseID, Sense>) => {
  //     this.baseSenses = allSenses.filter((sense) => sense.secondLevel === 0).toList().sort((a, b) => {
  //       if (a.firstLevel < b.firstLevel) { return -1; }
  //       if (a.firstLevel > b.firstLevel) { return 1; }
  //     });
  //     const subSenses = Map<senseID, List<Sense>>();
  //     this.baseSenses.forEach(baseSense => subSenses.set(
  //       baseSense.id,
  //       allSenses
  //         .filter(element => baseSense.firstLevel === element.firstLevel)
  //         .filter(element => element.secondLevel > 0).toList().sort((a, b) => {
  //         if (a.secondLevel < b.secondLevel) { return -1; }
  //         if (a.secondLevel > b.secondLevel) { return 1; }
  //       })));
  //     this.subSenses = subSenses;
  //   };
  // }
  // protected normalizeToSensesMap(baseSenses: List<Sense>, subSenses: Map<baseSenseID, List<Sense>>): Map<senseID, Sense> {
  //   const normalizedBaseSenses = EntryExplanationComponent.normalizeSenses(baseSenses);
  //   const normalizedSubSenses = subSenses.map(value => EntryExplanationComponent.normalizeSenses(value));
  //   const sensesMap = Map<senseID, Sense>();
  //   normalizedBaseSenses.forEach(baseSense => {
  //     sensesMap.set(baseSense.id, baseSense);
  //     normalizedSubSenses.get(baseSense.id).forEach(subSense => {
  //       sensesMap.set(subSense.id, subSense);
  //     });
  //   });
  //   return sensesMap;
  // }
  // protected updateModel() {
  //   const event = {
  //     payload: this.normalizeToSensesMap(this.baseSenses, this.subSenses)
  //   };
  //   this.wordEntryService.onSensesChange(event);
  //   this.wordEntryService.broadcastSenses();
  // }
  // public ngOnInit() {
  //   this.wordEntryService.subscribeSensesChange(this.getSensesFn());
  // }
  // public getSubSensesForBaseSense(ID: number): List<Sense> {
  //   return this.subSenses.get(ID);
  // }
}
