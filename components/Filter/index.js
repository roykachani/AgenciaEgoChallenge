import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from './filter.module.css';
import { SORT } from '../../utils/constants';

const Filter = ({ models, selectSort, selectFilter, sort, filter }) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const segmentList = [...new Set(models.map((model) => model.segment))];
  segmentList.unshift('Todos');

  const openSort = () => {
    setOpen(!open);
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
          <p className={styles.filters_titles}>Filtrar por</p>
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
        </div>
        <div className={styles.sort_container}>
          <div className={styles.sort_input} onClick={openSort}>
            <span>
              {sort.value === SORT.EMPTY.value ? SORT.EMPTY.html : sort.html}
            </span>
            <span className={styles.input_span_icon}>▼</span>
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
