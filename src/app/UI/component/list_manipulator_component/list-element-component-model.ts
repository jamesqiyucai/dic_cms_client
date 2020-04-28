export interface ListElementComponentModel<Handle> {
  editable: boolean;
  getHandle(): Handle;
  save(): void;
}
