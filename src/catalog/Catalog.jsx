import "./Catalog.css";
import { CatalogList } from "./CatalogList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  setSorted,
  sortListByName,
  sortList,
  sortSearch,
  sortListByType,
} from "../slices/listsSlice";
export const Catalog = () => {
  const [filters, setFilters] = useState(false);
  const [page, setPage] = useState(1);
  const catalog = useSelector((state) => state.catalog.catalog);
  const sorted = useSelector((state) => state.sorted.sorted);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSorted(catalog));
  }, [dispatch, catalog]);
  const uniqueProps = [...new Set(catalog.map((item) => item.type))];
  return (
    <div className="catalogPage">
      <CatalogList sortList={sorted} page={page} />
      <div
        className="catalogFilters"
        id={`${filters ? "filter_up" : "filter_down"}`}
      >
        <input
          onChange={(e) => {
            dispatch(sortSearch(e.target.value));
            setPage(1);
          }}
          id="search"
          placeholder="Поиск..."
        />
        <div id="sorters">
          <p>Сортировать по: </p>
          <button
            onClick={() => {
              dispatch(sortList());
            }}
          >
            По цене
          </button>
          <button
            onClick={() => {
              dispatch(sortListByName());

            }}
          >
            По названию
          </button>
        </div>
        <div id="filters">
          <p>Типы запчастей: </p>
          {uniqueProps.map((elem) => {
            return (
              <div className="filter">
                <input
                  onChange={() => {
                    dispatch(sortListByType(elem));
                  }}
                  type="checkbox"
                />
                <label>{elem}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="filterButton"
        onClick={() => {
          setFilters(!filters);
        }}
      >
        Фильтры⠀⠀
      </div>
    </div>
  );
};
