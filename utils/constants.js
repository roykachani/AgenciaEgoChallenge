export const SORT = {
  DEFAULT: {
    value: 'default',
    html: <b>Ordenar por</b>,
  },
  EMPTY: {
    value: '',
    html: 'Nada',
  },
  HIGHEST_PRICE: {
    value: 'highestPrice',
    html: (
      <span>
        De <b>mayor</b> a <b>menor</b> precio
      </span>
    ),
  },
  LOWEST_PRICE: {
    value: 'lowestPrice',
    html: (
      <span>
        De <b>menor</b> a <b>mayor</b> precio
      </span>
    ),
  },
  NEWEST: {
    value: 'newest',
    html: (
      <span>
        Más <b>nuevos</b> primero
      </span>
    ),
  },
  OLDER: {
    value: 'older',
    html: (
      <span>
        Más <b>viejos</b> primero
      </span>
    ),
  },
};
