import '../styles/Products.css';
import fabImage from '../assets/fab.jfif';
import girlsWearImage from '../assets/girlswear.jfif';
import collectionImage from '../assets/collection.jfif';

const products = [
  {
    id: 'fashion-apparel',
    image: '/images/product_garments.webp',
    title: 'Ladies Wear',
    desc: 'Modern silhouettes for every moment',
  },
  {
    id: 'garments',
    image: girlsWearImage,
    title: 'Girls Wear',
    desc: 'Cute and comfortable dress collections',
  },
  {
    id: 'boys-wear',
    image: fabImage,
    title: 'Boys Wear',
    desc: 'Smart casual looks for young fashion',
  },
  {
    id: 'dress-collection',
    image: collectionImage,
    title: 'Dress Collection',
    desc: 'Elegant styles for every special moment',
  },
];

export default function Products() {
  return (
    <section id="products" className="products" aria-labelledby="products-heading">
      <div className="container">
        <div className="products__header">
          <p className="section-label">Our Products</p>
          <h2 id="products-heading" className="section-title">Explore Our Collections</h2>
          <div className="section-divider"></div>
        </div>

        <div className="products__grid">
          {products.map((product) => (
            <article key={product.id} className="product-card" id={product.id}>
              <div className="product-card__img-wrap">
                <img
                  src={product.image}
                  alt={`Butai Fashion – ${product.title}`}
                  className="product-card__img"
                  width="640"
                  height="480"
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="product-card__overlay">
                  <span className="product-card__view">View Collection</span>
                </div>
              </div>
              <div className="product-card__body">
                <div className="product-card__info">
                  <h3 className="product-card__title">{product.title}</h3>
                  <p className="product-card__desc">{product.desc}</p>
                </div>
                <span className="product-card__arrow" aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
