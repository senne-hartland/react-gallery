import { Dispatch, SetStateAction, RefObject } from 'react';

type SearchProp = {
	historyText: string[];
	setHistory: Dispatch<SetStateAction<string[]>>;
	inputRef: RefObject<HTMLInputElement>;
	outputRef: RefObject<HTMLParagraphElement>;
	setImages: Dispatch<SetStateAction<string[]>>;
};
type GalleryProp = {
	images: string[];
	setImages: Dispatch<SetStateAction<string[]>>;
};

type ShowSuggestionsProp = {
	historyText: string[];
	inputRef: RefObject<HTMLInputElement>;
	onKeyUp?: () => {};
};

export type { SearchProp, GalleryProp, ShowSuggestionsProp };
