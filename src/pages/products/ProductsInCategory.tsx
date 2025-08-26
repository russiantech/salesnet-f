// v2
import { useEffect, useState, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
// import ProductSummary from "./ProductSummary_0";
import ProductSummary from "./ProductSummary";
import { ProductAxiosService } from '../../services/net/ProductAxiosService';
import { NotificationService } from "../../services/local/NotificationService";
import LoadingCard from '../../components/shared/LoadingCard';
import Breadcrumb from '../../components/shared/Breadcrumb';
import './Products.css';
import SocialShare from '../../components/shared/SocialShare';
import LoadingSpinner from '../../components/shared/LoadingSpinner';
import { BasketButton } from './interactions/BasketButton';
import { ChatButton } from './interactions/ChatButton';
import { FavoriteButton } from './interactions/FavoriteButton';
import { ShareButton } from './interactions/ShareButton';

interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  image_urls: string[];
  categories: Category[];
}

interface PageMeta {
  current_page_number: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  total_items_count: number;
  total_pages_count: number;
}

const ProductsInCategory = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [subcategories, setSubcategories] = useState<Category[]>([]);
  const [pageMeta, setPageMeta] = useState<PageMeta>({
    current_page_number: 1,
    has_next_page: false,
    has_prev_page: false,
    total_items_count: 0,
    total_pages_count: 0
  });
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  // Extract category info from products
  const extractCategoryData = useCallback((products: Product[]) => {
    // if (products.length === 0) return;
    
    // Always set loading to false even if no products
    if (products.length === 0) {
        setCategory(null); // Explicitly set category to null
        return;
    }

    // Find main category
    // console.log('response product data', products);
    const mainCategory = products[0].categories.find(c => c.slug === slug);
    if (mainCategory) {
      setCategory(mainCategory);
    }
    
    // Get unique subcategories
    const allCategories = products.flatMap(p => p.categories);
    const uniqueSubcategories = allCategories
      .filter(c => c.slug !== slug)
      .filter((cat, index, self) => 
        index === self.findIndex(c => c.id === cat.id)
      );
    setSubcategories(uniqueSubcategories);
  }, [slug]);

  // Fetch products with proper error handling
  const fetchProducts = useCallback(async (pageNumber = 1) => {
    try {
      if (!slug) {
        throw new Error('Category slug is missing');
      }
   
      pageNumber === 1 ? setLoading(true) : setLoadingMore(true);

      const response = await ProductAxiosService.getProductsByCategorySlug(
        slug,
        pageNumber,
        12
      );

      if (pageNumber === 1) {
        setProducts(response.data.products);
        extractCategoryData(response.data.products);
      } else {
        setProducts(prev => [...prev, ...response.data.products]);
      }

      setPageMeta(response.data.page_meta);
    } catch (error) {
      console.error('Error fetching products by category:', error);
      NotificationService.showDialog(
        error.response?.data?.error || 'Failed to load products by categories.'
      );
    } finally {
      pageNumber === 1 ? setLoading(false) : setLoadingMore(false);
    }
  }, [slug, extractCategoryData]);

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Infinite scroll handler
  const handleScroll = useCallback(() => {
    if (
      loadingMore ||
      !pageMeta.has_next_page ||
      window.innerHeight + document.documentElement.scrollTop < 
      document.documentElement.offsetHeight - 500
    ) {
      return;
    }
    fetchProducts(pageMeta.current_page_number + 1);
  }, [loadingMore, pageMeta, fetchProducts]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (loading && products.length === 0) {
    return (
      <main className="content-wrapper">
        <section className="container py-5">
          <Breadcrumb 
            items={[
              { label: 'Home', path: '/' },
              { label: 'Categories', path: '/categories' },
              { label: 'Loading...', path: '#' }
            ]} 
          />
          <div className="row">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="col-6 col-md-4 col-lg-3 mb-4">
                <LoadingCard />
              </div>
            ))}
          </div>
        </section>
      </main>
    );
  }

if (!category && !loading && products.length === 0) {
    return (
      <main className="content-wrapper">
        <section className="container py-5 text-center">
          <h2>Category not found</h2>
          <Link to="/categories" className="btn btn-primary mt-3">
            Browse Categories
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="content-wrapper">
      <section className="container pb-5">

        <Breadcrumb 
          items={[
            { label: 'Home', path: '/' },
            { label: 'Categories', path: '/categories' },
            { label: category?.name || slug, path: `/categories/${slug}` }
          ]} 
        />

        <div className="row">
          <div className="col-lg-12">

            <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="h2 mb-0">{category?.name || 'Category'}</h1>

                <div className="d-flex gap-2">
                                    
                      <BasketButton productId={0} productName={0} className='rounded-pill' />

                      <FavoriteButton productId={0} productName={0} className='rounded-pill' />
  
                      <ChatButton businessId={0} />
  
                        <ShareButton productId={''} productName={''} />
                      
                    </div>

            </div>

            {category?.description && (
              <p className="text-muted mb-4">{category.description}</p>
            )}

            {subcategories.length > 0 && (
              <div className="mb-4">
                {/* <h3 className="h5 mb-3">Subcategories</h3> */}
                <div className="d-flex flex-wrap gap-2">
                  {subcategories.map(subcat => (
                    <Link
                      key={subcat.id}
                      to={`/categories/${subcat.slug}`}
                      className="btn btn-outline-secondary btn-sm rounded-pill"
                    >
                      {subcat.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4">
              {products.map((product, i) => (
                
                <div key={i} className="col">
                  
                   <ProductSummary product={product} showDetails={true}  />

                </div>
              ))}
            </div>

            {loadingMore && (
              <LoadingSpinner size='sm' />
            )}

            {!pageMeta.has_next_page && products.length > 0 && (
              <div className="text-center text-muted py-4">
                You've reached the end of products
              </div>
            )}

            {products.length === 0 && !loading && (
              <div className="text-center py-5">
                <h4>No products found in this category</h4>
                <Link to="/categories" className="btn btn-outline-primary mt-3">
                  Browse Other Categories
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>

  );
};

export default ProductsInCategory;
