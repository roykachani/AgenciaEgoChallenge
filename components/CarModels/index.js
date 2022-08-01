import { useRouter } from 'next/router';
import Image from 'next/image';

import styles from './CarsModels.module.css';

const CarModels = ({ filterModels }) => {
  const router = useRouter();

  const convertCurrency = (value) => {
    return Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
    }).format(value);
  };

  return (
    <div className={styles.models_container}>
      {filterModels.map((model) => (
        <div
          key={model.id}
          className={styles.model_container}
          onClick={() => router.push(`/fichaTecnica/${model.id}`)}
        >
          <h2 className={styles.model_title}>{model.name}</h2>
          <div className={styles.model_box_info}>
            <span className={styles.text_info}>
              {model.year} | {convertCurrency(model.price)}
            </span>
          </div>
          <Image
            src={model.thumbnail}
            alt={model.name}
            width={212}
            height={132}
            objectFit="contain"
          />
          <div className={styles.model_btn}>Ver Modelo</div>
        </div>
      ))}
    </div>
  );
};

export default CarModels;
