import { ChangeDetectionStrategy, Component, computed, inject, input } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

const ICONS_SVG: Record<string, string> = {
    'list-view':        `<svg width="24" height="22" data-name="List Mode"><path fill="currentColor" d="M0 0h24v4H0z" data-name="Rectangle 535"/><path fill="currentColor" d="M0 18h24v4H0z" data-name="Rectangle 536"/><path fill="currentColor" d="M0 9h24v4H0z" data-name="Rectangle 537"/></svg>`,
    'plus-rounded':     `<svg width="60" height="60"><defs><filter id="a" width="60" height="60" x="0" y="0" filterUnits="userSpaceOnUse"><feOffset dy="3"/><feGaussianBlur result="blur" stdDeviation="3"/><feFlood flood-opacity=".161"/><feComposite in2="blur" operator="in"/><feComposite in="SourceGraphic"/></filter></defs><g data-name="Create New"><g filter="url(#a)"><path fill="currentColor" d="M30 6A21 21 0 1 1 9 27 21 21 0 0 1 30 6Z" data-name="Path 1114"/></g><path fill="#fff" d="M27 16h6v22h-6z" data-name="Rectangle 524"/><path fill="#fff" d="M19 30v-6h22v6z" data-name="Rectangle 525"/></g></svg>`,
    'search':           `<svg width="28.362" height="29.633"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3" transform="rotate(12 2.402 22.858)"><circle cx="11.555" cy="11.555" r="11.555" stroke="none"/><circle cx="11.555" cy="11.555" r="10.055"/></g><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="3.00075" d="m25.957 26.584-4.606-4.856" data-name="Line 3"/></svg>`,
    'sort-arrow-up':    `<svg width="4.603" height="12.275"><path fill="currentColor" d="M4.454 1.94 2.664.15a.511.511 0 0 0-.723 0L.15 1.94a.511.511 0 1 0 .723.723l.917-.917v10.018a.511.511 0 0 0 1.023 0V1.746l.917.917a.511.511 0 1 0 .723-.723Z" data-name="Path 1119"/></svg>`,
    'tiles-view':       `<svg width="24" height="22" data-name="Tiles Mode"><path fill="currentColor" d="M13 12h11v10H13z" data-name="Rectangle 533"/><path fill="currentColor" d="M13 0h11v10H13z" data-name="Rectangle 576"/><path fill="currentColor" d="M0 12h11v10H0z" data-name="Rectangle 575"/><path fill="currentColor" d="M0 0h11v10H0z" data-name="Rectangle 577"/></svg>`,
    'close':            `<svg xmlns="http://www.w3.org/2000/svg" width="37.451" height="37.451"><path fill="#0e4f6e" stroke="#f8f8f8" stroke-width="2" d="m23.005 18.726 6.516 6.516-4.332 4.332-6.516-6.516-6.464 6.463-4.313-4.313 6.464-6.464-6.482-6.482L12.21 7.93l6.48 6.48 6.517-6.515 4.313 4.313Z"/></svg>`,
}

@Component({
    selector: "ta9-icon",
    standalone: true,
    template: `<i [innerHtml]="iconSrc()"></i>`,
    host: {
        '[class.active]': 'active()',
    },
    styles: `
        :host {
            display: inline-block;

            &:not(.active) {
                color: var(--ta9-color-interactive-idle);

                &:hover {
                    color: var(--ta9-color-interactive-hover);
                }
            }
            &.active {
                color: var(--ta9-color-interactive-selected);
            }
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Icon {
    readonly iconName   = input<string>('');
    readonly active     = input<boolean>(false);

    private sanitizer   = inject(DomSanitizer);
    readonly iconSrc    = computed(() => {
        return this.sanitizer.bypassSecurityTrustHtml(ICONS_SVG[this.iconName()] || '');
    });
}
