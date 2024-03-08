export interface NavPage{

  previousPage: number;
  actualPage: number;
  nextPage: number;

  first: boolean;
  last: boolean;

  start: number;
  end:number;

  totalPages: number;
  numberOfElements: number;
  totalElements: number;
}
