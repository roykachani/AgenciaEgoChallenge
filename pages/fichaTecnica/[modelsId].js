import Head from 'next/head';
import CarHighLights from '../../components/CarHighLights';
import CarInfo from '../../components/CarInfo';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';
import { getAll, getModelById } from '../../services/api';

import styles from '../../styles/FichaTecnica.module.css';

export default function FichaTecnica({ model }) {
  return (
    <>
      <Head>
        <title>Ficha tecnica</title>
        <meta name="description" content={model.title} />
      </Head>
      <div className={styles.main_container}>
        <header className={styles.header_container}>
          <Navbar />
        </header>
        <main>
          <CarInfo model={model} />
          <Slider model={model} />
          <CarHighLights model={model} />
        </main>
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { modelsId } = context.params;
  const model = await getModelById(modelsId);

  if (!model) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      model,
    },
  };
}

export async function getStaticPaths() {
  const res = await getAll();
  const models = res;

  const paths = models.map((model) => ({
    params: { modelsId: `${model.id}` },
  }));

  return {
    paths,
    fallback: false, // fallback to 404 page if no match
  };
}
