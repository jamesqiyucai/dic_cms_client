// import {Component, Inject, ViewChild} from '@angular/core';
// import {ExampleEditorComponent} from '../example_editor/example-editor.component';
// import {ExampleProposalConstructorComponent} from '../example_proposal_constructor/example-proposal-constructor.component';
// import {EXAMPLE_SERVICE} from '../../../service/entity/example/injection-token';
// import {ExampleService} from '../../../service/entity/example/example-service.interface';
// import {map} from 'rxjs/operators';
// import {Observable} from 'rxjs';
//
// @Component({
//   selector: 'app-illustration-modifier',
//   templateUrl: './example-proposal-modifier.component.html'
// })
// export class ExampleProposalModifierComponent {
//   @ViewChild(ExampleEditorComponent) exampleEditor: ExampleEditorComponent;
//   @ViewChild(ExampleProposalConstructorComponent) exampleProposalConstructor: ExampleProposalConstructorComponent;
//   public proposalLoaded = false;
//   private exampleData: any;
//   private idList: number[];
//   public optionsList: Observable<string>[];
//
//   constructor(@Inject(EXAMPLE_SERVICE) private exampleService: ExampleService) {}
//
//   public getExamples(keyword: string) {
//     this.idList = [];
//     this.optionsList = [];
//     this.exampleService.getPersistentExamplesByKeyword(keyword).subscribe(ids => {
//       this.idList = ids;
//       this.optionsList = ids.map(id => this.exampleService.getPersistentExample(id).pipe(
//         map(exampleData => exampleData.text)
//       ));
//     });
//   }
//
//   public loadExample(id: number) {
//     this.exampleEditor.loadPersistentExample(id);
//   }
//
//   public initializeProposalConstructor() {
//     this.exampleData = this.exampleEditor.getData();
//     this.exampleProposalConstructor.fillData(
//       this.exampleData.exampleId,
//       this.exampleData.text,
//       this.exampleData.italic,
//       this.exampleData.keywords,
//       this.exampleData.translations,
//       this.exampleData.stories,
//       this.exampleData.note,
//       this.exampleData.comment,
//       this.exampleData.source
//     );
//   }
//
//   public refresh() {
//     this.proposalLoaded = false;
//     this.exampleData = undefined;
//     this.idList = [];
//     this.optionsList = [];
//     this.exampleEditor.refresh();
//     this.exampleProposalConstructor.refresh();
//   }
// }
