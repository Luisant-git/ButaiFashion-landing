import '../styles/Products.css';

const products = [
  {
    id: 'fashion-jewellery',
    image: '/images/product_jewellery.png',
    title: 'Fashion Jewellery',
    desc: 'Elegant pieces for every occasion',
  },
  {
    id: 'garments',
    image: '/images/product_garments.png',
    title: 'Garments',
    desc: 'Trendy styles, everyday wear',
  },
  {
    id: 'cosmetics',
    image: '/images/product_cosmetics.png',
    title: 'Cosmetics',
    desc: 'Beauty for every you',
  },
  {
    id: 'accessories',
    image: '/images/product_accessories.png',
    title: 'Accessories',
    desc: 'Complete your look',
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
                  loading="lazy"
                />
                <div className="product-card__overlay">
                  <span className="product-card__view">View Collection</span>
                </div>
              </div>
              <div className="product-card__body">
                <h3 className="product-card__title">{product.title}</h3>
                <p className="product-card__desc">{product.desc}</p>
                <span className="product-card__arrow" aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
