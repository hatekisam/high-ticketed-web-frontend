import React from "react";
import { IPaginatedQuery } from "./base.type";

export interface PaginationState {
  isPaginated: boolean;
  setPaginateOpts: React.Dispatch<
    React.SetStateAction<IPaginatedQuery & { totalPages: number }>
  >;
  paginateOpts: IPaginatedQuery & { totalPages: number };
}
