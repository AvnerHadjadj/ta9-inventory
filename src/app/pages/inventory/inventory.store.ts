import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { InventoryService } from './inventory-service';
import { InventoryEvent, InventoryStoreState, VIEW_MODE } from './inventory.model';

const initialState: InventoryStoreState = {
  events: [],
  currentPage: 1,
  pageSize: 10,
  sortByColumn: 'name',
  sortAscending: true,
  searchByName: '',
  isCreatePanelVisible: false,
  viewMode: VIEW_MODE.LIST,
};

export const InventoryStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((store) => {
    const processedEvents = computed(() => {
      let events = [...store.events()];

      // Apply sorting
      const sortColumn = store.sortByColumn();
      const ascending = store.sortAscending();

      events.sort((a, b) => {
        const aValue = a[sortColumn as keyof InventoryEvent];
        const bValue = b[sortColumn as keyof InventoryEvent];

        if (aValue < bValue) return ascending ? -1 : 1;
        if (aValue > bValue) return ascending ? 1 : -1;
        return 0;
      });

      // Apply filtering
      const searchTerm = store.searchByName();
      if (searchTerm.length >= 1) {
        events = events.filter((event) =>
          event.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      return events;
    });

    const currentPageEvents = computed(() => {
      const processed = processedEvents();
      const page = store.currentPage();
      const size = store.pageSize();
      const startIndex = (page - 1) * size;
      const endIndex = startIndex + size;

      return processed.slice(startIndex, endIndex);
    });

    const pageNumbers = computed(() => {
      const processed = processedEvents();
      const size = store.pageSize();
      const totalPages = Math.ceil(processed.length / size);

      return Array.from({ length: totalPages }, (_, i) => i + 1);
    });

    return {
      processedEvents,
      currentPageEvents,
      pageNumbers,
    };
  }),
  withMethods((store) => ({
    goToPage(pageNumber: number): void {
      patchState(store, { currentPage: pageNumber });
    },

    sortBy(columnName: string): void {
      const ascending = store.sortByColumn() !== columnName || store.sortAscending() === false;

      patchState(store, {
        sortByColumn: columnName,
        sortAscending: ascending,
      });
    },

    createNewEvent(color: string, name: string, description: string): void {
      const currentEvents = store.events();
      const maxId = currentEvents.length > 0
        ? Math.max(...currentEvents.map((e) => e.id))
        : 0;

      const newEvent: InventoryEvent = {
        id: maxId + 1,
        color,
        name,
        description,
        createdAt: new Date(),
        lastUpdatedAt: new Date(),
        createdBy: 'Current User',
      };

      patchState(store, {
        events: [...currentEvents, newEvent],
        isCreatePanelVisible: false,
      });

    },

    updateEvent(
      id: number,
      color: string,
      name: string,
      description: string
    ): void {
      const updatedEvents = store.events().map((event) =>
        event.id === id
          ? {
              ...event,
              color,
              name,
              description,
              lastUpdatedAt: new Date(),
            }
          : event
      );

      patchState(store, { events: updatedEvents });
    },

    setSearchByName(name: string): void {
      patchState(store, { searchByName: name });
    },

    setCreatePanelVisible(value: boolean): void {
      patchState(store, { isCreatePanelVisible: value });
    },

    setViewMode(viewMode: VIEW_MODE ): void {
      patchState(store, { viewMode });
    }
  })),
  withHooks({
    onInit(store) {
      const inventoryService = inject(InventoryService);

      inventoryService.getEvents().subscribe({
        next: (events: InventoryEvent[]) => {
          patchState(store, { events });
        },
        error: (err: any) => {
          console.error('Failed to load events:', err);
        },
      });
    },
  })
);