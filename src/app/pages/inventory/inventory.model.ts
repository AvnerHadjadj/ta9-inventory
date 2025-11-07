export type InventoryEvent = {
  id: number;
  color: string;
  name: string;
  description: string;
  createdAt: Date;
  lastUpdatedAt: Date;
  createdBy: string;
};

export type InventoryStoreState = {
  events: InventoryEvent[];
  currentPage: number;
  pageSize: number;
  sortByColumn: string;
  sortAscending: boolean;
  searchByName: string;
  isCreatePanelVisible: boolean;
};