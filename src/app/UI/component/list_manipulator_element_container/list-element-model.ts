export interface ListElementModel<ListElementHandle> {
  readonly editable: boolean;
  enableEditing(): void;
  disableEditing(): void;
  getHandle(): ListElementHandle;
}
