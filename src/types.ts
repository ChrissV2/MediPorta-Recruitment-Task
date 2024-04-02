export interface Tag {
  name: string;
  count: number;
}

export interface TagState {
  tags: Tag[];
  loading: boolean;
  error: string | null;
}

export const FETCH_TAGS_REQUEST = 'FETCH_TAGS_REQUEST';
export const FETCH_TAGS_SUCCESS = 'FETCH_TAGS_SUCCESS';
export const FETCH_TAGS_FAILURE = 'FETCH_TAGS_FAILURE';

interface FetchTagsRequestAction {
  type: typeof FETCH_TAGS_REQUEST;
}

interface FetchTagsSuccessAction {
  type: typeof FETCH_TAGS_SUCCESS;
  payload: Tag[];
}

interface FetchTagsFailureAction {
  type: typeof FETCH_TAGS_FAILURE;
  payload: string;
}

export type TagActionTypes = FetchTagsRequestAction | FetchTagsSuccessAction | FetchTagsFailureAction;
