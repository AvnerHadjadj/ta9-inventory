import { VIEW_MODE } from "../../core/grid/grid.model";

export type InventoryEvent = {
  id: string;
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
  viewMode: VIEW_MODE;
  selectedItem: InventoryEvent | null;
};
