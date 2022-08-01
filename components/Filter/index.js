import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { SORT } from '../../utils/constants';
import arrow from '../../public/assets/arrow.svg';
import styles from './filter.module.css';

const Filter = ({ models, selectSort, selectFilter, sort, filter }) => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const segmentList = [...new Set(models.map((model) => model.segment))];
  segmentList.unshift('Todos');

  const openSort = () => {
    setOpen(!open);
  };
  const openfilter = () => {
    setIsOpen(!isOpen);
  };

  const handleSort = (type) => {
    setOpen(!open);
    selectSort(type);
    router.push(
      {
        pathname: router.pathname, //add query to url
        query: {
          ...router.query,
          sort: type.value,
        },
      },
      undefined,
      { scroll: false, shallow: true }
      //scroll to top of page cancel, shallow: true to avoid reloading the page
    );
  };

  const handleFilter = (value) => {
    selectFilter(value);
    router.push(
      {
        pathname: router.pathname, //add query to url
        query: {
          ...router.query,
          filter: value,
        },
      },
      undefined,
      { scroll: false, shallow: true }
      //scroll to top of page cancel, shallow: true to avoid reloading the page
    );
  };

  return (
    <>
      <div className={styles.filters_main_container}>
        <div className={styles.filter_container}>
          <p className={`${styles.filters_titles} ${styles.filter_none}`}>
            Filtrar por
          </p>

          {/* title filter mobile */}
          <div
            onClick={openfilter}
            className={`${styles.filter_container} ${styles.filter_list_none}`}
          >
            <p
              className={`${styles.filters_titles} ${styles.filter_list_none}`}
              onClick={openfilter}
            >
              Filtrar por
            </p>
            <Image
              src={arrow}
              alt="arrow"
              width={8}
              height={8}
              onClick={openfilter}
              className={
                !!isOpen
                  ? `${styles.arrow} ${styles.invert_arrow}`
                  : styles.arrow
              }
            />
          </div>
          {/* title filter mobile */}

          <div className={styles.filter_row}>
            {segmentList.map((segment, index) => (
              <div
                key={index}
                className={
                  filter === segment
                    ? `${styles.filter_btn} ${styles.filter_selected}`
                    : styles.filter_btn
                }
                id={segment}
                onClick={(e) => handleFilter(e.target.id)}
              >
                {segment}
              </div>
            ))}
          </div>
          {/* if mobile open menu filter */}
          {!!isOpen && (
            <div
              className={`${styles.filter_options} ${styles.filter_list_none}`}
            >
              <ul className={styles.sort_list}>
                {segmentList.map((segment, index) => (
                  <li
                    key={index}
                    id={segment}
                    className={styles.sort_list_item}
                    onClick={(e) => handleFilter(e.target.id)}
                  >
                    {segment}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {/* if mobile open menu filter */}
        </div>
        <div className={styles.sort_container}>
          <div className={styles.sort_input} onClick={openSort}>
            <span>
              {sort.value === SORT.EMPTY.value ? SORT.EMPTY.html : sort.html}
            </span>
            <Image
              src={arrow}
              alt="arrow"
              width={8}
              height={8}
              className={
                !!open
                  ? `${styles.sort_arrow} ${styles.invert_arrow}`
                  : styles.sort_arrow
              }
            />
          </div>
        </div>
        {!!open && (
          <div className={styles.sort_options}>
            <ul className={styles.sort_list}>
              <li
                className={styles.sort_list_item}
                onClick={() => handleSort(SORT.EMPTY)}
              >
                {SORT.EMPTY.html}
              </li>
              <li
                className={styles.sort_list_item}
                onClick={() => handleSort(SORT.HIGHEST_PRICE)}
              >
                {SORT.HIGHEST_PRICE.html}
              </li>
              <li
                className={styles.sort_list_item}
                onClick={() => handleSort(SORT.LOWEST_PRICE)}
              >
                {SORT.LOWEST_PRICE.html}
              </li>
              <li
                className={styles.sort_list_item}
                onClick={() => handleSort(SORT.NEWEST)}
              >
                {SORT.NEWEST.html}
              </li>
              <li
                className={styles.sort_list_item}
                onClick={() => handleSort(SORT.OLDER)}
              >
                {SORT.OLDER.html}
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
