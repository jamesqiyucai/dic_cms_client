export class Inflection {
  readonly id: number;
  readonly name: string;
  readonly scope: number[];

  constructor(id: number, name: string, scope: number[]) {
    this.id = id;
    this.name = name;
    this.scope = scope;
  }
}
