import { BookInfo } from '../book-info/bookinfo.model';

export interface Book{
    id?: number,
    nameOfBook?: string,
    libraryId?: number,
    bookInfo?:BookInfo
}