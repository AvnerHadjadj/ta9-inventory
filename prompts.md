Hi Claude, can you please draft a typescript file, using Angular 20.2 and NgRX Signal Store ?
* I need the signal store to use withState of type InventoryStoreState.
* With hook OnInit that will loads initial events as InventoryEvent[] from an existing service  DataService , using method getEvents. Use patchState from  "@ngrx/signals" in order to update the events from store with loaded events.
* Using withComputed, to compute:
   * the array of processedEvents, which represents the events from store, sorted by columnName in ascending direction depending on sortAscending from store, then filtered depending on event name containing the value from searchByName . If searchByName is not at least one character long, then no filter should be applied.
   * the current page list of event, based on computed processedEvents, sliced  according to currentPage, pageSize from state
   * an array of page number from 1 to the number of pages available (will help display a paginator)
* Using withMethods:
   * goToPage(pageNumber: number) that updates the currentPage in store with given pageNumber
   * sortBy(columnName: string,  ascending: boolean) that updates the sortByColumn and  sortAscending in store with the given columnName and ascending parameter
   * createNewEvent(color: string, name: string, description: string) that creates a new InventoryEvent, with given color, name and description, and assigning an incremental id, the current Date as createdAt and as lastUpdatedAt, and 'Current User' as createdBy field. The new InventoryEvent is then added to the events in store using patchState. Then method setCreatePanelVisible(false) should be called.
   * updateEvent(id:number, color: string, name: string, description: string) that  updates the event with given id from events in store.
   * setSearchByName(name: string) that updates the searchByName value in store
   * setCreatePanelVisible(value: boolean) that updates the value of isCreatePanelVisible in store

Following are the types definitions to rely on:


type InventoryEvent = {
    id: number;
    color: string;
    name: string;
    description: string;
    createdAt: Date;
    lastUpdatedAt: Date;
    createdBy: string;
}

type InventoryStoreState = {
  events: InventoryEvent[];
  currentPage: number;
  pageSize: number;
  sortByColumn: string;
  sortAscending: boolean;
  searchByName: string;
  isCreatePanelVisible: boolean;
};