// import {ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
// import {SourceComponent} from './source-component';
// import {ExampleSourceBookComponent} from './example_source_book/example-source-book.component';
// import {ExampleSourceJournalComponent} from './example_source_journal/example-source-journal.component';
//
// export class SourceComponentFactory {
//   constructor(
//     private viewContainerRef: ViewContainerRef,
//     private componentFactoryResolver: ComponentFactoryResolver,
//   ) {}
//   public createSourceComponent(type: string): SourceComponent {
//     this.viewContainerRef.clear();
//     if (type === 'book') {
//       const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceBookComponent);
//       return this.viewContainerRef.createComponent(componentFactory).instance;
//     } else if (type === 'journal') {
//       const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ExampleSourceJournalComponent);
//       return this.viewContainerRef.createComponent(componentFactory).instance;
//     }
//   }
// }
