import Image from 'next/image';
import parse from 'html-react-parser';

import styles from './carHighLights.module.css';

const CarHighLights = ({ model }) => {
  return (
    <>
      <div className={styles.higthLights_container}>
        {model?.model_highlights &&
          model.model_highlights.map((higth, i) => (
            <div
              key={i}
              className={
                i % 2 === 0
                  ? `${styles.higthLights_box} ${styles.inverter}`
                  : styles.higthLights_box
              }
            >
              <div className={styles.higthLights_image}>
                <Image
                  src={higth.image}
                  alt={higth.title}
                  width={550}
                  height={314}
                  objectFit="contain"
                  priority={true}
                />
              </div>
              <div className={styles.higthLights_info}>
                <h3 className={styles.higthLights_title}>{higth.title}</h3>
                <span className={styles.higthLights_name}>
                  {higth?.content && parse(higth.content)}
                </span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default CarHighLights;
