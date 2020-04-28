export class Preconditions {
  static checkArgument(checker: boolean, errorMessage: string) {
    if (checker) {
      throw new Error(errorMessage);
    }
  }
}
