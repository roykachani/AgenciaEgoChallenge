import { useMemo, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';

import { getAll } from '../../services/api';
import { SORT } from '../../utils/constants';
import Filter from '../../components/Filter';
import Navbar from '../../components/Navbar';

import styles from '../../styles/Home.module.css';
import CarModels from '../../components/CarModels';

export default function Home({ models }) {
  const [sort, setSort] = useState(SORT.DEFAULT);
  const [filter, setFilter] = useState('Todos');

  const selectSort = (value) => {
    setSort(value);
  };

  const selectFilter = (value) => {
    setFilter(value);
  };

  const sortModels = useMemo(() => {
    if (sort.value === SORT.HIGHEST_PRICE.value) {
      return [...models].sort((a, b) => b.price - a.price);
    } else if (sort.value === SORT.LOWEST_PRICE.value) {
      return [...models].sort((a, b) => a.price - b.price);
    } else if (sort.value === SORT.NEWEST.value) {
      return [...models].sort((a, b) => b.year - a.year);
    } else if (sort.value === SORT.OLDER.value) {
      return [...models].sort((a, b) => a.year - b.year);
    } else {
      return models;
    }
  }, [models, sort]);

  const filterModels = useMemo(() => {
    if (filter === 'Todos') {
      return sortModels;
    }
    return sortModels.filter((model) => model.segment === filter);
  }, [filter, sortModels]);

  return (
    <>
      <Head>
        <title>AGENCIA EGO CHALLENGE</title>
        <meta name="description" content="challenge para Agencia Ego" />
      </Head>

      <div className={styles.main_home}>
        <header className={styles.header_container}>
          <Navbar />
        </header>
        <main>
          <div className={styles.main_title}>
            <h1 className={styles.title_h1}>Descubrí todos los modelos</h1>
          </div>
          <div className={styles.main_container}>
            <Filter
              models={models}
              selectSort={selectSort}
              selectFilter={selectFilter}
              sort={sort}
              filter={filter}
            />
            <CarModels filterModels={filterModels} />
          </div>
        </main>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const models = await getAll();

  return {
    props: {
      models,
    },
  };
}
