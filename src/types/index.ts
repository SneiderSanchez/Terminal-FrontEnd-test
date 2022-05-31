import { Moment } from 'moment';

interface SearchBarFormElementList extends HTMLFormControlsCollection {
  searchInput: HTMLInputElement;
}

// This is to have a clean typing for SearchBarEvent, I'm not a fan of doing assertions or doing a verbose stuff on types
//ref: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
export interface SearchBarFormElements extends HTMLFormElement {
  readonly elements: SearchBarFormElementList;
}

export type PlayerFormatted = {
  lastActivityMoment: Moment;
  winRatio: number;
  uniqueOpponents: number;
  fullName: string;
  avatar?: string;
  flipImageOnMobile?: boolean;
};
