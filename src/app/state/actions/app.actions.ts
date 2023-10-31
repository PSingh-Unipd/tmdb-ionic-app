import { createActionGroup, props, emptyProps } from '@ngrx/store';

/**
 * It's relativly small an app. So, no need to split actions into multiple files
 */

export const ExplorSearchActions = createActionGroup({
  source: `Search`,
  events: {
    search: props<{ query: string }>(),
    searchSuccess: props<{ results: any[] }>(),
    searchFailure: emptyProps(),
  },
});

export const MovieDetailsActions = createActionGroup({
  source: `Movie Details`,
  events: {
    load: props<{ id: string }>(),
    loadSuccess: props<{ details: any }>(),
    loadFailure: emptyProps(),
  },
});

export const ShowDetailsActions = createActionGroup({
  source: `Show Details`,
  events: {
    load: props<{ id: string }>(),
    loadSuccess: props<{ details: any }>(),
    loadFailure: emptyProps(),
  },
});

export const CastDetailsActions = createActionGroup({
  source: `Cast Details`,
  events: {
    load: props<{ id: string }>(),
    loadSuccess: props<{ details: any }>(),
    loadFailure: emptyProps(),
  },
});


