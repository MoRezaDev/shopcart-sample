import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useClickOutside } from "react-click-outside-hook";
import { Link } from "react-router-dom";

import useDebounce from "../hooks/useDebounce";

import styles from "./SearchBar.module.css";

import { shorten } from "../helper/functions";

const SearchBar = ({ products }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, isClickedOutSide] = useClickOutside();
  const [searchQuery, setSearchQuery] = useState("");
  const [resultQuery, setResultQuery] = useState([]);

  const expandHandler = (e) => {
    e.preventDefault();
    setIsExpanded(true);
  };

  const collapsedHandler = () => {
    setIsExpanded(false);
    setSearchQuery("");
    setResultQuery([]);
  };

  const changeHandler = (e) => {
    setSearchQuery(e.target.value);
  };

  const searchProducts = () => {
    if (searchQuery.length === 0) setResultQuery([]);
    const filtered = products.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResultQuery(filtered);
  };

  useDebounce(searchQuery, 600, searchProducts);

  const variants = {
    expanded: {
      height: "7.5em",
    },
    collapsed: {
      height: "2.5em",
    },
  };
  console.log(resultQuery);
  useEffect(() => {
    if (isClickedOutSide) collapsedHandler();
    if (searchQuery.length === 0) setResultQuery([]);
  }, [isClickedOutSide, searchQuery]);
  return (
    <motion.div
      className={styles.searchBarContainer}
      variants={variants}
      animate={isExpanded ? "expanded" : "collapsed"}
      ref={ref}
    >
      <input
        value={searchQuery}
        onChange={changeHandler}
        onFocus={expandHandler}
        placeholder="Search your product"
        type="text"
      />
      {isExpanded && <span className={styles.lineSeperator}></span>}
      {resultQuery.length > 0 &&
        resultQuery.map((item) => (
          <div key={item.id} className={styles.resultsContainer}>
            <img src={item.image} />
            <Link to={`/products/${item.id}`}>
              <h3>{shorten(item.title)}</h3>
            </Link>
          </div>
        ))}
    </motion.div>
  );
};

export default SearchBar;
