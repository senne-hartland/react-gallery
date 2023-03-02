import { Dispatch, SetStateAction } from 'react';

type SearchProp = {
	historyText: string[];
	setHistory: Dispatch<SetStateAction<string[]>>;
};
type GalleryProp = {
	images?: string[];
	setImages: Dispatch<SetStateAction<string[]>>;
};

export { SearchProp, GalleryProp };
