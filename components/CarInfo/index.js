import Image from 'next/image';
import parse from 'html-react-parser';

import styles from './carInfo.module.css';

const CarInfo = ({ model }) => {
  return (
    <div className={styles.model_container}>
      <div className={styles.model_box}>
        <div className={styles.model_image}>
          <Image
            src={model.photo}
            alt={model.name}
            width={667}
            height={314}
            objectFit="cover"
            priority={true}
          />
        </div>
        <div className={styles.model_info}>
          <span className={styles.model_name}>{model.name}</span>
          <h1 className={styles.model_title}>{model.title}</h1>
          <span className={styles.model_description}>
            {model?.description && parse(model.description)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
