import React from "react";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  filterBySerial,
  getAllProducts,
} from "../redux/features/products/services";
import { AppDispatch } from "../redux/store";

const useFilterSearch = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [serial, setSerial] = useState("");

  const debounceRef = useRef<any>();

  const onQueryChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSerial(e.target.value);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }
    if (!e.target.value.trim()) {
      return;
    }
    debounceRef.current = setTimeout(() => {
      dispatch(filterBySerial(e.target.value));
    }, 600);
  };

  const handleClearFilter = () => {
    setSerial("");
    dispatch(getAllProducts({}));
  };

  return {
    serial,
    onQueryChanged,
    handleClearFilter,
  };
};

export default useFilterSearch;
