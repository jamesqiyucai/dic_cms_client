export class Preconditions {
  static checkArgumentNullOrUndefined(argument: any) {
    if (argument === null || argument === undefined) {
      throw new Error('Argument Shall Not be Undefined or Null');
    }
  }
}
