import { Type } from "@angular/core";

export enum VIEW_MODE {
    LIST = 'LIST',
    TILES = 'TILES',
}

export interface GridListCellDef<T> {
    // Using Extract to ensure field is a string key of T
    field: Extract<keyof T, string>;

    // Header text for the column
    header: string;

    // Width of the column as a percentage
    widthPercentage: number;

    // Optional custom cell component
    customCell?: {
        component: Type<any>;
        inputs?: Record<string, unknown>;
    }
}
