// // import Navigation from "../../../components/shared/Navigation"
// import Aside from "../shared/Aside"
// import MakeFavoriteModal from "./MakeFavoriteModal"

// const Favorites = () => {

//   return (
//     <>
//       <MakeFavoriteModal />

//       {/* <Navigation /> */}
//       {/* Page content */}
//       <main className="content-wrapper">
//         <div className="container py-5 mt-n2 mt-sm-0">
//           <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">

//             {/* Sidebar navigation that turns into offcanvas on screens < 992px wide (lg breakpoint) */}
//             <Aside />

//             {/* Wishlist content */}
//             <div className="col-lg-9">
//               <div className="ps-lg-3 ps-xl-0">
//                 {/* Page title + Add list button*/}
//                 <div className="d-flex align-items-center justify-content-between pb-3 mb-1 mb-sm-2 mb-md-3">
//                   <h1 className="h2 me-3 mb-0">Favorites</h1>
//                   <div className="nav">
//                     <a className="nav-link animate-underline px-0 py-1 py-ms-2" href="#wishlistModal" data-bs-toggle="modal">
//                       <i className="ci-plus fs-base me-1" />
//                       <span className="animate-target badge text-bg-info rounded-pill">Add favorite.</span>
//                     </a>
//                   </div>
//                 </div>
//                 {/* Wishlist selector */}
//                 <div className="border-bottom pb-4 mb-3">
//                   <div className="row align-items-center justify-content-between">
//                     <div className="col-sm-7 col-md-8 col-xxl-9 d-flex align-items-center mb-3 mb-sm-0">
//                       <h5 className="me-2 mb-0">Interesting offers</h5>
//                       <div className="dropdown ms-auto ms-sm-0">
//                         <button type="button" className="btn btn-icon btn-ghost btn-secondary border-0" id="wishlist-selector" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false" aria-label="Select wishlist">
//                           <i className="ci-more-vertical fs-xl" />
//                         </button>
//                         <div className="dropdown-menu dropdown-menu-end">
//                           <div className="d-flex flex-column gap-1 mb-2">
//                             <div className="form-check">
//                               <input type="radio" className="form-check-input" id="wishlist-1" name="wishlist" defaultChecked />
//                               <label htmlFor="wishlist-1" className="form-check-label text-body">Interesting offers</label>
//                             </div>
//                             <div className="form-check">
//                               <input type="radio" className="form-check-input" id="wishlist-2" name="wishlist" />
//                               <label htmlFor="wishlist-2" className="form-check-label text-body">Top picks collection</label>
//                             </div>
//                             <div className="form-check">
//                               <input type="radio" className="form-check-input" id="wishlist-3" name="wishlist" />
//                               <label htmlFor="wishlist-3" className="form-check-label text-body">Family stuff</label>
//                             </div>
//                             <div className="form-check">
//                               <input type="radio" className="form-check-input" id="wishlist-4" name="wishlist" />
//                               <label htmlFor="wishlist-4" className="form-check-label text-body">My must-haves</label>
//                             </div>
//                             <div className="form-check">
//                               <input type="radio" className="form-check-input" id="wishlist-5" name="wishlist" />
//                               <label htmlFor="wishlist-5" className="form-check-label text-body">For my husband</label>
//                             </div>
//                           </div>
//                           <button type="button" className="btn btn-sm btn-dark w-100" onclick="document.getElementById('wishlist-selector').click()">Select wishlist</button>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="col-sm-5 col-md-4 col-xxl-3">
//                       <select className="form-select" data-select="{&quot;removeItemButton&quot;: false}" aria-label="Wishlist sorting">
//                         <option value="date">By date added</option>
//                         <option value="price-ascend">By price ascending</option>
//                         <option value="price-descend">By price descending</option>
//                         <option value="rating">By rating</option>
//                       </select>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Master checkbox + Action buttons */}
//                 <div className="nav align-items-center mb-4">
//                   <div className="form-checkl nav-link animate-underline fs-lg ps-0 pe-2 py-2 mt-n1 me-4" data-master-checkbox="{&quot;container&quot;: &quot;#wishlistSelection&quot;, &quot;label&quot;: &quot;Select all&quot;, &quot;labelChecked&quot;: &quot;Unselect all&quot;, &quot;showOnCheck&quot;: &quot;#action-buttons&quot;}">
//                     <input type="checkbox" className="form-check-input" id="wishlist-master" defaultChecked />
//                     <label htmlFor="wishlist-master" className="form-check-label animate-target mt-1 ms-2">Unselect all</label>
//                   </div>
//                   <div className="d-flex flex-wrap" id="action-buttons">
//                     <a className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4" href="#!">
//                       <i className="ci-shopping-cart fs-base me-2" />
//                       <span className="animate-target d-none d-md-inline">Add to cart</span>
//                     </a>
//                     <a className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4" href="#!">
//                       <i className="ci-repeat fs-base me-2" />
//                       <span className="animate-target d-none d-md-inline">Relocate</span>
//                     </a>
//                     <a className="nav-link animate-underline px-0 py-2" href="#!">
//                       <i className="ci-trash fs-base me-1" />
//                       <span className="animate-target d-none d-md-inline">Remove selected</span>
//                     </a>
//                   </div>
//                 </div>
//                 {/* Wishlist items (Grid) */}
//                 <div className="row row-cols-2 row-cols-md-3 g-4" id="wishlistSelection">
//                   {/* Item */}
//                   <div className="col">
//                     <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
//                       <div className="position-relative">
//                         <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
//                           <div className="form-check fs-lg">
//                             <input type="checkbox" className="form-check-input select-card-check" defaultChecked />
//                           </div>
//                         </div>
//                         <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
//                           <span className="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">-21%</span>
//                           <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
//                             <img src="/assets/img/shop/electronics/01.png" alt="VR Glasses" />
//                           </div>
//                         </a>
//                       </div>
//                       <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
//                         <div className="d-flex align-items-center gap-2 mb-2">
//                           <div className="d-flex gap-1 fs-xs">
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star text-body-tertiary opacity-75" />
//                           </div>
//                           <span className="text-body-tertiary fs-xs">(123)</span>
//                         </div>
//                         <h3 className="pb-1 mb-2">
//                           <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
//                             <span className="animate-target">VRB01 Virtual Reality Glasses</span>
//                           </a>
//                         </h3>
//                         <div className="d-flex align-items-center justify-content-between">
//                           <div className="h5 lh-1 mb-0">$340.99 <del className="text-body-tertiary fs-sm fw-normal">$430.00</del></div>
//                           <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
//                             <i className="ci-shopping-cart fs-base animate-target" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Item */}
//                   <div className="col">
//                     <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
//                       <div className="position-relative">
//                         <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
//                           <div className="form-check fs-lg">
//                             <input type="checkbox" className="form-check-input select-card-check" defaultChecked />
//                           </div>
//                         </div>
//                         <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
//                           <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
//                             <img src="/assets/img/shop/electronics/02.png" alt="iPhone 14" />
//                           </div>
//                         </a>
//                       </div>
//                       <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
//                         <div className="d-flex align-items-center gap-2 mb-2">
//                           <div className="d-flex gap-1 fs-xs">
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-half text-warning" />
//                           </div>
//                           <span className="text-body-tertiary fs-xs">(142)</span>
//                         </div>
//                         <h3 className="pb-1 mb-2">
//                           <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
//                             <span className="animate-target">Apple iPhone 14 128GB White</span>
//                           </a>
//                         </h3>
//                         <div className="d-flex align-items-center justify-content-between">
//                           <div className="h5 lh-1 mb-0">$899.00</div>
//                           <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
//                             <i className="ci-shopping-cart fs-base animate-target" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Item */}
//                   <div className="col">
//                     <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
//                       <div className="position-relative">
//                         <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
//                           <div className="form-check fs-lg">
//                             <input type="checkbox" className="form-check-input select-card-check" />
//                           </div>
//                         </div>
//                         <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
//                           <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
//                             <img src="/assets/img/shop/electronics/03.png" alt="Smart Watch" />
//                           </div>
//                         </a>
//                       </div>
//                       <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
//                         <div className="d-flex align-items-center gap-2 mb-2">
//                           <div className="d-flex gap-1 fs-xs">
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                           </div>
//                           <span className="text-body-tertiary fs-xs">(67)</span>
//                         </div>
//                         <h3 className="pb-1 mb-2">
//                           <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
//                             <span className="animate-target">Smart Watch Series 7, White</span>
//                           </a>
//                         </h3>
//                         <div className="d-flex align-items-center justify-content-between">
//                           <div className="h5 lh-1 mb-0">$429.00</div>
//                           <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
//                             <i className="ci-shopping-cart fs-base animate-target" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Item */}
//                   <div className="col">
//                     <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
//                       <div className="posittion-relative">
//                         <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
//                           <div className="form-check fs-lg">
//                             <input type="checkbox" className="form-check-input select-card-check" />
//                           </div>
//                         </div>
//                         <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
//                           <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
//                             <img src="/assets/img/shop/electronics/05.png" alt="iPad Air" />
//                           </div>
//                         </a>
//                       </div>
//                       <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
//                         <div className="d-flex align-items-center gap-2 mb-2">
//                           <div className="d-flex gap-1 fs-xs">
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                           </div>
//                           <span className="text-body-tertiary fs-xs">(12)</span>
//                         </div>
//                         <h3 className="pb-1 mb-2">
//                           <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
//                             <span className="animate-target">Tablet Apple iPad Air M1</span>
//                           </a>
//                         </h3>
//                         <div className="d-flex align-items-center justify-content-between">
//                           <div className="h5 lh-1 mb-0">$540.00</div>
//                           <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
//                             <i className="ci-shopping-cart fs-base animate-target" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Item */}
//                   <div className="col">
//                     <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
//                       <div className="position-relative">
//                         <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
//                           <div className="form-check fs-lg">
//                             <input type="checkbox" className="form-check-input select-card-check" />
//                           </div>
//                         </div>
//                         <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
//                           <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
//                             <img src="/assets/img/shop/electronics/06.png" alt="AirPods 2" />
//                           </div>
//                         </a>
//                       </div>
//                       <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
//                         <div className="d-flex align-items-center gap-2 mb-2">
//                           <div className="d-flex gap-1 fs-xs">
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star-filled text-warning" />
//                             <i className="ci-star text-body-tertiary opacity-75" />
//                           </div>
//                           <span className="text-body-tertiary fs-xs">(78)</span>
//                         </div>
//                         <h3 className="pb-1 mb-2">
//                           <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
//                             <span className="animate-target">Headphones Apple AirPods 2 Pro</span>
//                           </a>
//                         </h3>
//                         <div className="d-flex align-items-center justify-content-between">
//                           <div className="h5 lh-1 mb-0">$224.00</div>
//                           <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
//                             <i className="ci-shopping-cart fs-base animate-target" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }

// export default Favorites

// VERSION 02
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FavoritesAxiosService } from '../../../services/net/FavoritesAxiosService';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// import ResponseModal from '../../../components/shared/modals/ResponseModal';
// import { NotificationService } from '../../../services/local/NotificationService';
// import ProductCard from '../../products/ProductCard';
// import Aside from '../shared/Aside';
// import MakeFavoriteModal from './MakeFavoriteModal';

// interface FavoriteList {
//     id: string;
//     name: string;
//     description?: string;
//     privacy: 'private' | 'public' | 'shared';
//     item_count: number;
//     updated_at: string;
// }

// interface FavoriteItem {
//     id: string;
//     product: {
//         id: string;
//         name: string;
//         price: number;
//         original_price?: number;
//         discount?: number;
//         rating: number;
//         review_count: number;
//         image_url: string;
//         slug: string;
//     };
//     added_at: string;
// }

// const Favorites1 = () => {
//     const navigate = useNavigate();
//     const [lists, setLists] = useState<FavoriteList[]>([]);
//     const [selectedList, setSelectedList] = useState<string | null>(null);
//     const [items, setItems] = useState<FavoriteItem[]>([]);
//     const [loading, setLoading] = useState({
//         lists: true,
//         items: false
//     });
//     const [selectedItems, setSelectedItems] = useState<string[]>([]);
//     const [sortOption, setSortOption] = useState('date');
//     const [modalState, setModalState] = useState({ 
//         show: false, 
//         message: '', 
//         type: '' 
//     });

//     useEffect(() => {
//         const observer = (data) => {
//             setModalState(data);
//         };

//         NotificationService.subscribe(observer);
//         return () => {
//             NotificationService.unsubscribe(observer);
//         };
//     }, []);
  
//     useEffect(() => {
//         fetchFavoriteLists();
//     }, []);

//     useEffect(() => {
//         if (selectedList) {
//             fetchFavoriteItems(selectedList);
//         }
//     }, [selectedList, sortOption]);

//     const fetchFavoriteLists = async () => {
//         try {
//             setLoading(prev => ({ ...prev, lists: true }));
//             NotificationService.showDialog("Loading favorite lists...", "primary");
            
//             const response = await FavoritesAxiosService.getFavoriteLists({});
//             setLists(response.data.favorites);
//             setSelectedList(response.data.favorites[0]?.id || null);
            
//             NotificationService.closeDialog();
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load favorite lists';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, lists: false }));
//         }
//     };

//     const fetchFavoriteItems = async (listId: string) => {
//         try {
//             setLoading(prev => ({ ...prev, items: true }));
//             const response = await FavoritesAxiosService.getFavoriteItems(listId, {
//                 sort_by: sortOption as any
//             });
//             setItems(response.data.favorites);
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load favorite items';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, items: false }));
//         }
//     };

//     const handleListCreate = async (name: string, description: string, privacy: string) => {
//         try {
//             NotificationService.showDialog("Creating favorite list...", "primary");
            
//             const response = await FavoritesAxiosService.createFavoriteList({
//                 name,
//                 description,
//                 privacy: privacy as 'private' | 'public' | 'shared'
//             });
            
//             setLists([...lists, response.data]);
//             setSelectedList(response.data.id);
//             NotificationService.showDialog("Favorite list created successfully", "success");
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to create favorite list';
//             NotificationService.showDialog(errorMessage, 'error');
//         }
//     };

//     const handleItemSelect = (itemId: string, isSelected: boolean) => {
//         setSelectedItems(prev =>
//             isSelected
//                 ? [...prev, itemId]
//                 : prev.filter(id => id !== itemId)
//         );
//     };

//     const handleSelectAll = (isSelected: boolean) => {
//         setSelectedItems(isSelected ? items.map(item => item.id) : []);
//     };

//     const handleRemoveSelected = async () => {
//         if (!selectedList || selectedItems.length === 0) return;
        
//         try {
//             NotificationService.showDialog("Removing selected items...", "primary");
            
//             await Promise.all(
//                 selectedItems.map(itemId =>
//                     FavoritesAxiosService.removeFavoriteItem(selectedList, itemId)
//                 )
//             );
            
//             setItems(items.filter(item => !selectedItems.includes(item.id)));
//             setSelectedItems([]);
//             NotificationService.showDialog("Items removed successfully", "success");
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to remove items';
//             NotificationService.showDialog(errorMessage, 'error');
//         }
//     };

//     const handleAddToCart = async () => {
//         try {
//             NotificationService.showDialog("Adding items to cart...", "primary");
            
//             // Implementation for adding to cart would go here
//             // await CartService.addMultipleToCart(selectedItems);
            
//             NotificationService.showDialog("Items added to cart successfully", "success");
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to add items to cart';
//             NotificationService.showDialog(errorMessage, 'error');
//         }
//     };

//     const handleRelocate = async (targetListId: string) => {
//         if (!selectedList || selectedItems.length === 0) return;
        
//         try {
//             NotificationService.showDialog("Moving items...", "primary");
            
//             await FavoritesAxiosService.moveFavoriteItems(
//                 selectedList,
//                 targetListId,
//                 selectedItems
//             );
            
//             setItems(items.filter(item => !selectedItems.includes(item.id)));
//             setSelectedItems([]);
//             NotificationService.showDialog("Items moved successfully", "success");
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to move items';
//             NotificationService.showDialog(errorMessage, 'error');
//         }
//     };

//     const currentList = lists?.find(list => list.id === selectedList);
//     // const favoriteItem = data?.find(item => item.id === selectedId)


//     if (loading.lists && !lists.length) {
//         return <LoadingSpinner fullPage />;
//     }

//     return (
//         <>
//             <MakeFavoriteModal onCreate={handleListCreate} />

//             <ResponseModal 
//                 show={modalState.show} 
//                 message={modalState.message} 
//                 type={modalState.type} 
//             />

//             <main className="content-wrapper">
//                 <div className="container py-5 mt-n2 mt-sm-0">
//                     <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
//                         <Aside />

//                         <div className="col-lg-9">
//                             <div className="ps-lg-3 ps-xl-0">
//                                 <div className="d-flex align-items-center justify-content-between pb-3 mb-1 mb-sm-2 mb-md-3">
//                                     <h1 className="h2 me-3 mb-0">Favorites</h1>
//                                     <div className="nav">
//                                         <button 
//                                             className="nav-link animate-underline px-0 py-1 py-ms-2" 
//                                             data-bs-toggle="modal"
//                                             data-bs-target="#wishlistModal"
//                                         >
//                                             <i className="ci-plus fs-base me-1" />
//                                             <span className="animate-target badge text-bg-info rounded-pill">
//                                                 Add favorite list
//                                             </span>
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* List selection and sorting controls */}
//                                 <div className="border-bottom pb-4 mb-3">
//                                     <div className="row align-items-center justify-content-between">
//                                         <div className="col-sm-7 col-md-8 col-xxl-9 d-flex align-items-center mb-3 mb-sm-0">
//                                             <h5 className="me-2 mb-0">{currentList?.name || 'No list selected'}</h5>
//                                             <div className="dropdown ms-auto ms-sm-0">
//                                                 <button
//                                                     type="button"
//                                                     className="btn btn-icon btn-ghost btn-secondary border-0"
//                                                     id="wishlist-selector"
//                                                     data-bs-toggle="dropdown"
//                                                     aria-expanded="false"
//                                                     disabled={loading.lists}
//                                                 >
//                                                     {loading.lists ? (
//                                                         <span className="spinner-border spinner-border-sm" role="status" />
//                                                     ) : (
//                                                         <i className="ci-more-vertical fs-xl" />
//                                                     )}
//                                                 </button>
//                                                 <div className="dropdown-menu dropdown-menu-end">
//                                                     <div className="d-flex flex-column gap-1 mb-2">
//                                                         {lists?.map(list => (
//                                                             <div className="form-check" key={list.id}>
//                                                                 <input
//                                                                     type="radio"
//                                                                     className="form-check-input"
//                                                                     id={`wishlist-${list.id}`}
//                                                                     name="wishlist"
//                                                                     checked={selectedList === list.id}
//                                                                     onChange={() => setSelectedList(list.id)}
//                                                                     disabled={loading.items}
//                                                                 />
//                                                                 <label
//                                                                     htmlFor={`wishlist-${list.id}`}
//                                                                     className="form-check-label text-body"
//                                                                 >
//                                                                     {list.name} ({list.item_count})
//                                                                 </label>
//                                                             </div>
//                                                         ))}
//                                                     </div>
//                                                     <button
//                                                         type="button"
//                                                         className="btn btn-sm btn-dark w-100"
//                                                         onClick={() => document.getElementById('wishlist-selector')?.click()}
//                                                     >
//                                                         Select list
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="col-sm-5 col-md-4 col-xxl-3">
//                                             <select
//                                                 className="form-select"
//                                                 value={sortOption}
//                                                 onChange={(e) => setSortOption(e.target.value)}
//                                                 disabled={loading.items}
//                                             >
//                                                 <option value="date">By date added</option>
//                                                 <option value="price-ascend">By price ascending</option>
//                                                 <option value="price-descend">By price descending</option>
//                                                 <option value="rating">By rating</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Action buttons */}
//                                 <div className="nav align-items-center mb-4">
//                                     <div className="form-check nav-link animate-underline fs-lg ps-0 pe-2 py-2 mt-n1 me-4">
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             id="wishlist-master"
//                                             checked={selectedItems.length === items.length && items.length > 0}
//                                             onChange={(e) => handleSelectAll(e.target.checked)}
//                                             disabled={loading.items || items.length === 0}
//                                         />
//                                         <label htmlFor="wishlist-master" className="form-check-label animate-target mt-1 ms-2">
//                                             {selectedItems.length === items.length && items.length > 0 ? 'Unselect all' : 'Select all'}
//                                         </label>
//                                     </div>
//                                     <div className="d-flex flex-wrap" id="action-buttons">
//                                         <button
//                                             className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4"
//                                             onClick={handleAddToCart}
//                                             disabled={selectedItems.length === 0 || loading.items}
//                                         >
//                                             {loading.items ? (
//                                                 <span className="spinner-border spinner-border-sm me-2" role="status" />
//                                             ) : (
//                                                 <i className="ci-shopping-cart fs-base me-2" />
//                                             )}
//                                             <span className="animate-target d-none d-md-inline">Add to cart</span>
//                                         </button>
//                                         <div className="dropdown">
//                                             <button
//                                                 className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4 dropdown-toggle"
//                                                 disabled={selectedItems.length === 0 || loading.items}
//                                                 data-bs-toggle="dropdown"
//                                             >
//                                                 {loading.items ? (
//                                                     <span className="spinner-border spinner-border-sm me-2" role="status" />
//                                                 ) : (
//                                                     <i className="ci-repeat fs-base me-2" />
//                                                 )}
//                                                 <span className="animate-target d-none d-md-inline">Relocate</span>
//                                             </button>
//                                             <div className="dropdown-menu">
//                                                 {lists.filter(list => list.id !== selectedList).map(list => (
//                                                     <button
//                                                         key={list.id}
//                                                         className="dropdown-item"
//                                                         onClick={() => handleRelocate(list.id)}
//                                                     >
//                                                         Move to {list.name}
//                                                     </button>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <button
//                                             className="nav-link animate-underline px-0 py-2"
//                                             onClick={handleRemoveSelected}
//                                             disabled={selectedItems.length === 0 || loading.items}
//                                         >
//                                             {loading.items ? (
//                                                 <span className="spinner-border spinner-border-sm me-1" role="status" />
//                                             ) : (
//                                                 <i className="ci-trash fs-base me-1" />
//                                             )}
//                                             <span className="animate-target d-none d-md-inline">Remove selected</span>
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Content area */}
//                                 {loading.items ? (
//                                     <div className="text-center py-5">
//                                         <LoadingSpinner />
//                                     </div>
//                                 ) : items.length === 0 ? (
//                                     <div className="text-center py-5">
//                                         <i className="ci-heart-filled display-4 text-muted mb-4" />
//                                         <h3>No items in this list</h3>
//                                         <p className="text-muted">Add some products to your favorites</p>
//                                     </div>
//                                 ) : (
//                                     <div className="row row-cols-2 row-cols-md-3 g-4">
//                                         {items.map(item => (
//                                             <div className="col" key={item.id}>
//                                                 <ProductCard
//                                                     product={{
//                                                         id: item.product.id,
//                                                         name: item.product.name,
//                                                         price: item.product.price,
//                                                         originalPrice: item.product.original_price,
//                                                         discount: item.product.discount,
//                                                         rating: item.product.rating,
//                                                         reviewCount: item.product.review_count,
//                                                         imageUrl: item.product.image_url,
//                                                         slug: item.product.slug,
//                                                     }}
//                                                     showCheckbox
//                                                     isChecked={selectedItems.includes(item.id)}
//                                                     onCheckChange={(checked) => handleItemSelect(item.id, checked)}
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     );
// };

// export default Favorites1;

// VERSION 03
// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// // import ResponseModal from '../../../components/shared/modals/ResponseModal';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { FavoritesAxiosService } from '../../../services/net/FavoritesAxiosService';
// import ProductCard from '../../products/ProductCard';
// import Aside from '../shared/Aside';
// import MakeFavoriteModal from './MakeFavoriteModal';

// interface FavoriteList {
//     id: string;
//     name: string;
//     description?: string;
//     privacy: 'private' | 'public' | 'shared';
//     item_count: number;
//     updated_at: string;
// }

// interface FavoriteItem {
//     id: string;
//     product: {
//         id: string;
//         name: string;
//         price: number;
//         original_price?: number;
//         discount?: number;
//         rating: number;
//         review_count: number;
//         image_url: string;
//         slug: string;
//     };
//     added_at: string;
// }

// const Favorites = () => {
//     const navigate = useNavigate();
//     const [lists, setLists] = useState<FavoriteList[]>([]);
//     const [selectedList, setSelectedList] = useState<string | null>(null);
//     const [items, setItems] = useState<FavoriteItem[]>([]);
//     const [loading, setLoading] = useState({
//         lists: true,
//         items: false
//     });
//     const [selectedItems, setSelectedItems] = useState<string[]>([]);
//     const [sortOption, setSortOption] = useState('date');
//     const [modalState, setModalState] = useState({ 
//         show: false, 
//         message: '', 
//         type: '' 
//     });

//     useEffect(() => {
//         const observer = (data) => {
//             setModalState(data);
//         };

//         NotificationService.subscribe(observer);
//         return () => {
//             NotificationService.unsubscribe(observer);
//         };
//     }, []);

//     useEffect(() => {
//         fetchFavoriteLists();
//     }, []);

//     useEffect(() => {
//         if (selectedList) {
//             fetchFavoriteItems(selectedList);
//         }
//     }, [selectedList, sortOption]);

//     const fetchFavoriteLists = async () => {
//         try {
//             setLoading(prev => ({ ...prev, lists: true }));
//             NotificationService.showDialog("Loading favorite lists...", "primary");
            
//             const response = await FavoritesAxiosService.getFavoriteLists({});
//             const favoriteLists = response.data?.favorites || [];
//             setLists(favoriteLists);
//             setSelectedList(favoriteLists[0]?.id || null);
            
//             // NotificationService.hideDialog();
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load favorite lists';
//             NotificationService.showDialog(errorMessage, 'error');
//             setLists([]);
//             setSelectedList(null);
//         } finally {
//             setLoading(prev => ({ ...prev, lists: false }));
//         }
//     };

//     const fetchFavoriteItems = async (listId: string) => {
//         try {
//             setLoading(prev => ({ ...prev, items: true }));
//             const response = await FavoritesAxiosService.getFavoriteItems(listId, {
//                 sort_by: sortOption as any
//             });
//             setItems(response.data?.favorite_lists || []);
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load favorite items';
//             NotificationService.showDialog(errorMessage, 'error');
//             setItems([]);
//         } finally {
//             setLoading(prev => ({ ...prev, items: false }));
//         }
//     };

//     // ... (rest of the handler functions remain the same)
    
//     const handleListCreate = async (name: string, description: string, privacy: string) => {
//       try {
//           NotificationService.showDialog("Creating favorite list...", "primary");
          
//           const response = await FavoritesAxiosService.createFavoriteList({
//               name,
//               description,
//               privacy: privacy as 'private' | 'public' | 'shared'
//           });
          
//           setLists([...lists, response.data]);
//           setSelectedList(response.data.id);
//           NotificationService.showDialog("Favorite list created successfully", "success");
//       } catch (err) {
//           const errorMessage = err.response?.data?.error || err.message || 'Failed to create favorite list';
//           NotificationService.showDialog(errorMessage, 'error');
//       }
//   };

//   const handleItemSelect = (itemId: string, isSelected: boolean) => {
//       setSelectedItems(prev =>
//           isSelected
//               ? [...prev, itemId]
//               : prev.filter(id => id !== itemId)
//       );
//   };

//   const handleSelectAll = (isSelected: boolean) => {
//       setSelectedItems(isSelected ? items.map(item => item.id) : []);
//   };

//   const handleRemoveSelected = async () => {
//       if (!selectedList || selectedItems.length === 0) return;
      
//       try {
//           NotificationService.showDialog("Removing selected items...", "primary");
          
//           await Promise.all(
//               selectedItems.map(itemId =>
//                   FavoritesAxiosService.removeFavoriteItem(selectedList, itemId)
//               )
//           );
          
//           setItems(items.filter(item => !selectedItems.includes(item.id)));
//           setSelectedItems([]);
//           NotificationService.showDialog("Items removed successfully", "success");
//       } catch (err) {
//           const errorMessage = err.response?.data?.error || err.message || 'Failed to remove items';
//           NotificationService.showDialog(errorMessage, 'error');
//       }
//   };

//   const handleAddToCart = async () => {
//       try {
//           NotificationService.showDialog("Adding items to cart...", "primary");
          
//           // Implementation for adding to cart would go here
//           // await CartService.addMultipleToCart(selectedItems);
          
//           NotificationService.showDialog("Items added to cart successfully", "success");
//       } catch (err) {
//           const errorMessage = err.response?.data?.error || err.message || 'Failed to add items to cart';
//           NotificationService.showDialog(errorMessage, 'error');
//       }
//   };

//   const handleRelocate = async (targetListId: string) => {
//       if (!selectedList || selectedItems.length === 0) return;
      
//       try {
//           NotificationService.showDialog("Moving items...", "primary");
          
//           await FavoritesAxiosService.moveFavoriteItems(
//               selectedList,
//               targetListId,
//               selectedItems
//           );
          
//           setItems(items.filter(item => !selectedItems.includes(item.id)));
//           setSelectedItems([]);
//           NotificationService.showDialog("Items moved successfully", "success");
//       } catch (err) {
//           const errorMessage = err.response?.data?.error || err.message || 'Failed to move items';
//           NotificationService.showDialog(errorMessage, 'error');
//       }
//   };

//     const currentList = lists?.find(list => list.id === selectedList) || null;

//     if (loading.lists && lists.length === 0) {
//         return <LoadingSpinner fullPage />;
//     }

//     return (
//         <>
//             <MakeFavoriteModal onCreate={handleListCreate} />
//             {/* <ResponseModal 
//                 show={modalState.show} 
//                 message={modalState.message} 
//                 type={modalState.type} 
//             /> */}

//             <main className="content-wrapper">
//                 <div className="container py-5 mt-n2 mt-sm-0">
//                     <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
//                         <Aside />

//                         <div className="col-lg-9">
//                             <div className="ps-lg-3 ps-xl-0">
//                                 <div className="d-flex align-items-center justify-content-between pb-3 mb-1 mb-sm-2 mb-md-3">
//                                     <h1 className="h2 me-3 mb-0">Favorites</h1>
//                                     <div className="nav">
//                                         <button 
//                                             className="nav-link animate-underline px-0 py-1 py-ms-2" 
//                                             data-bs-toggle="modal"
//                                             data-bs-target="#wishlistModal"
//                                         >
//                                             <i className="ci-plus fs-base me-1" />
//                                             <span className="animate-target badge text-bg-info rounded-pill">
//                                                 Add favorite list
//                                             </span>
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* List selection and sorting controls */}
//                                 <div className="border-bottom pb-4 mb-3">
//                                     <div className="row align-items-center justify-content-between">
//                                         <div className="col-sm-7 col-md-8 col-xxl-9 d-flex align-items-center mb-3 mb-sm-0">
//                                             <h5 className="me-2 mb-0">{currentList?.name || 'No list selected'}</h5>
//                                             {lists.length > 0 && (
//                                                 <div className="dropdown ms-auto ms-sm-0">
//                                                     <button
//                                                         type="button"
//                                                         className="btn btn-icon btn-ghost btn-secondary border-0"
//                                                         id="wishlist-selector"
//                                                         data-bs-toggle="dropdown"
//                                                         aria-expanded="false"
//                                                         disabled={loading.lists}
//                                                     >
//                                                         {loading.lists ? (
//                                                             <span className="spinner-border spinner-border-sm" role="status" />
//                                                         ) : (
//                                                             <i className="ci-more-vertical fs-xl" />
//                                                         )}
//                                                     </button>
//                                                     <div className="dropdown-menu dropdown-menu-end">
//                                                         <div className="d-flex flex-column gap-1 mb-2">
//                                                             {lists.map(list => (
//                                                                 <div className="form-check" key={list.id}>
//                                                                     <input
//                                                                         type="radio"
//                                                                         className="form-check-input"
//                                                                         id={`wishlist-${list.id}`}
//                                                                         name="wishlist"
//                                                                         checked={selectedList === list.id}
//                                                                         onChange={() => setSelectedList(list.id)}
//                                                                         disabled={loading.items}
//                                                                     />
//                                                                     <label
//                                                                         htmlFor={`wishlist-${list.id}`}
//                                                                         className="form-check-label text-body"
//                                                                     >
//                                                                         {list.name} ({list.item_count})
//                                                                     </label>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                         <button
//                                                             type="button"
//                                                             className="btn btn-sm btn-dark w-100"
//                                                             onClick={() => document.getElementById('wishlist-selector')?.click()}
//                                                         >
//                                                             Select list
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             )}
//                                         </div>
//                                         <div className="col-sm-5 col-md-4 col-xxl-3">
//                                             <select
//                                                 className="form-select"
//                                                 value={sortOption}
//                                                 onChange={(e) => setSortOption(e.target.value)}
//                                                 disabled={loading.items || items.length === 0}
//                                             >
//                                                 <option value="date">By date added</option>
//                                                 <option value="price-ascend">By price ascending</option>
//                                                 <option value="price-descend">By price descending</option>
//                                                 <option value="rating">By rating</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Rest of the component remains the same */}
//                                {/* Action buttons */}
//                                <div className="nav align-items-center mb-4">
//                                     <div className="form-check nav-link animate-underline fs-lg ps-0 pe-2 py-2 mt-n1 me-4">
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             id="wishlist-master"
//                                             checked={selectedItems.length === items.length && items.length > 0}
//                                             onChange={(e) => handleSelectAll(e.target.checked)}
//                                             disabled={loading.items || items.length === 0}
//                                         />
//                                         <label htmlFor="wishlist-master" className="form-check-label animate-target mt-1 ms-2">
//                                             {selectedItems.length === items.length && items.length > 0 ? 'Unselect all' : 'Select all'}
//                                         </label>
//                                     </div>
//                                     <div className="d-flex flex-wrap" id="action-buttons">
//                                         <button
//                                             className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4"
//                                             onClick={handleAddToCart}
//                                             disabled={selectedItems.length === 0 || loading.items}
//                                         >
//                                             {loading.items ? (
//                                                 <span className="spinner-border spinner-border-sm me-2" role="status" />
//                                             ) : (
//                                                 <i className="ci-shopping-cart fs-base me-2" />
//                                             )}
//                                             <span className="animate-target d-none d-md-inline">Add to cart</span>
//                                         </button>
//                                         <div className="dropdown">
//                                             <button
//                                                 className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4 dropdown-toggle"
//                                                 disabled={selectedItems.length === 0 || loading.items}
//                                                 data-bs-toggle="dropdown"
//                                             >
//                                                 {loading.items ? (
//                                                     <span className="spinner-border spinner-border-sm me-2" role="status" />
//                                                 ) : (
//                                                     <i className="ci-repeat fs-base me-2" />
//                                                 )}
//                                                 <span className="animate-target d-none d-md-inline">Relocate</span>
//                                             </button>
//                                             <div className="dropdown-menu">
//                                                 {lists.filter(list => list.id !== selectedList).map(list => (
//                                                     <button
//                                                         key={list.id}
//                                                         className="dropdown-item"
//                                                         onClick={() => handleRelocate(list.id)}
//                                                     >
//                                                         Move to {list.name}
//                                                     </button>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <button
//                                             className="nav-link animate-underline px-0 py-2"
//                                             onClick={handleRemoveSelected}
//                                             disabled={selectedItems.length === 0 || loading.items}
//                                         >
//                                             {loading.items ? (
//                                                 <span className="spinner-border spinner-border-sm me-1" role="status" />
//                                             ) : (
//                                                 <i className="ci-trash fs-base me-1" />
//                                             )}
//                                             <span className="animate-target d-none d-md-inline">Remove selected</span>
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Content area */}
//                                 {loading.items ? (
//                                     <div className="text-center py-5">
//                                         <LoadingSpinner />
//                                     </div>
//                                 ) : items.length === 0 ? (
//                                     <div className="text-center py-5">
//                                         <i className="ci-heart-filled display-4 text-muted mb-4" />
//                                         <h3>No items in this list</h3>
//                                         <p className="text-muted">Add some products to your favorites</p>
//                                     </div>
//                                 ) : (
//                                     <div className="row row-cols-2 row-cols-md-3 g-4">
//                                         {items.map(item => (
//                                             <div className="col" key={item.id}>
//                                                 <ProductCard
//                                                     product={{
//                                                         id: item.product.id,
//                                                         name: item.product.name,
//                                                         price: item.product.price,
//                                                         originalPrice: item.product.original_price,
//                                                         discount: item.product.discount,
//                                                         rating: item.product.rating,
//                                                         reviewCount: item.product.review_count,
//                                                         imageUrl: item.product.image_url,
//                                                         slug: item.product.slug,
//                                                     }}
//                                                     showCheckbox
//                                                     isChecked={selectedItems.includes(item.id)}
//                                                     onCheckChange={(checked) => handleItemSelect(item.id, checked)}
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     );
// };

// export default Favorites;


// VERSION 04

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// // import ResponseModal from '../../../components/shared/modals/ResponseModal';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { FavoritesAxiosService } from '../../../services/net/FavoritesAxiosService';
// import ProductCard from '../../products/ProductCard';
// import Aside from '../shared/Aside';
// import MakeFavoriteModal from './MakeFavoriteModal';
// import ProductSummary from '../../products/ProductSummary';

// interface FavoriteList {
//     id: string;
//     name: string;
//     description?: string;
//     privacy: 'private' | 'public' | 'shared';
//     item_count: number;
//     updated_at: string;
//     is_default?: boolean;
// }

// interface FavoriteItem {
//     id: string;
//     product: {
//         id: string;
//         name: string;
//         price: number;
//         original_price?: number;
//         discount?: number;
//         rating: number;
//         review_count: number;
//         image_url: string;
//         slug: string;
//     };
//     added_at: string;
// }

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   original_price?: number;
//   discount?: number;
//   rating: number;
//   review_count: number;
//   image_url: string;
//   slug: string;
// }

// interface FavoriteItem {
//   id: string;
//   product: Product | null;  // Make product nullable
//   product_id: string;       // Add product_id
//   created_at: string;
//   updated_at: string;
// }

// const Favorites = () => {
//     const navigate = useNavigate();
//     const [lists, setLists] = useState<FavoriteList[]>([]);
//     const [selectedList, setSelectedList] = useState<string | null>(null);
//     const [items, setItems] = useState<FavoriteItem[]>([]);
//     const [loading, setLoading] = useState({
//         lists: true,
//         items: false
//     });
//     const [selectedItems, setSelectedItems] = useState<string[]>([]);
//     const [sortOption, setSortOption] = useState('date');
//     const [modalState, setModalState] = useState({ 
//         show: false, 
//         message: '', 
//         type: '' 
//     });

//     useEffect(() => {
//         const observer = (data) => {
//             setModalState(data);
//         };

//         NotificationService.subscribe(observer);
//         return () => {
//             NotificationService.unsubscribe(observer);
//         };
//     }, []);

//     useEffect(() => {
//         fetchFavoriteLists();
//     }, []);

//     useEffect(() => {
//         if (selectedList) {
//             fetchFavoriteItems(selectedList);
//         }
//     }, [selectedList, sortOption]);

//     const fetchFavoriteLists = async () => {
//         try {
//             setLoading(prev => ({ ...prev, lists: true }));
//             NotificationService.showDialog("Loading favorite lists...", "primary");
            
//             const response = await FavoritesAxiosService.getFavoriteLists({});

//             // Ensure we're accessing the correct property in the response
//             const favoriteLists = response.data?.favorite_lists || [];
            
//             // If we have lists, select the default list or the first list
//             if (favoriteLists.length > 0) {
//                 const defaultList = favoriteLists.find(list => list.is_default);
//                 setSelectedList(defaultList?.id || favoriteLists[0].id);
//             } else {
//                 setSelectedList(null);
//             }
            
//             setLists(favoriteLists);
//             // NotificationService.hideDialog();
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load favorite lists';
//             NotificationService.showDialog(errorMessage, 'danger');
//             setLists([]);
//             setSelectedList(null);
//         } finally {
//             setLoading(prev => ({ ...prev, lists: false }));
//         }
//     };

//     const fetchFavoriteItems = async (listId: string) => {
//         try {
//             setLoading(prev => ({ ...prev, items: true }));
//             const response = await FavoritesAxiosService.getFavoriteItems(listId, {
//                 sort_by: sortOption
//             });
//             console.log(`response for fetch favorite items: ${JSON.stringify(response)}`)
//             // Ensure we're accessing the correct property in the response
//             setItems(response.data?.favorite_items || []);
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load favorite items';
//             NotificationService.showDialog(errorMessage, 'error');
//             setItems([]);
//         } finally {
//             setLoading(prev => ({ ...prev, items: false }));
//         }
//     };
    
//     const handleListCreate = async (name: string, description: string, privacy: string) => {
//         try {
//             NotificationService.showDialog("Creating favorite list...", "primary");
            
//             const response = await FavoritesAxiosService.createFavoriteList({
//                 name,
//                 description,
//                 privacy: privacy as 'private' | 'public' | 'shared'
//             });
            
//             // Ensure we're accessing the correct property in the response
//             const newList = response.data?.favorite_list;
//             if (newList) {
//                 setLists([...lists, newList]);
//                 setSelectedList(newList.id);
//             }
            
//             NotificationService.showDialog("Favorite list created successfully", "success");
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to create favorite list';
//             NotificationService.showDialog(errorMessage, 'error');
//         }
//     };

//     const handleItemSelect = (itemId: string, isSelected: boolean) => {
//         setSelectedItems(prev =>
//             isSelected
//                 ? [...prev, itemId]
//                 : prev.filter(id => id !== itemId)
//         );
//     };

//     const handleSelectAll = (isSelected: boolean) => {
//         setSelectedItems(isSelected ? items.map(item => item.id) : []);
//     };

//     const handleRemoveSelected = async () => {
//         if (!selectedList || selectedItems.length === 0) return;
        
//         try {
//             NotificationService.showDialog("Removing selected items...", "primary");
            
//             await Promise.all(
//                 selectedItems.map(itemId =>
//                     FavoritesAxiosService.removeFavoriteItem(selectedList, itemId)
//                 )
//             );
            
//             setItems(items.filter(item => !selectedItems.includes(item.id)));
//             setSelectedItems([]);
//             NotificationService.showDialog("Items removed successfully", "success");
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to remove items';
//             NotificationService.showDialog(errorMessage, 'error');
//         }
//     };

//     const handleAddToCart = async () => {
//         try {
//             NotificationService.showDialog("Adding items to cart...", "primary");
            
//             // Implementation for adding to cart would go here
//             // await CartService.addMultipleToCart(selectedItems);
            
//             NotificationService.showDialog("Items added to cart successfully", "success");
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to add items to cart';
//             NotificationService.showDialog(errorMessage, 'error');
//         }
//     };

//     const handleRelocate = async (targetListId: string) => {
//         if (!selectedList || selectedItems.length === 0) return;
        
//         try {
//             NotificationService.showDialog("Moving items...", "primary");
            
//             await FavoritesAxiosService.moveFavoriteItems(
//                 selectedList,
//                 targetListId,
//                 selectedItems
//             );
            
//             setItems(items.filter(item => !selectedItems.includes(item.id)));
//             setSelectedItems([]);
//             NotificationService.showDialog("Items moved successfully", "success");
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to move items';
//             NotificationService.showDialog(errorMessage, 'error');
//         }
//     };

//     const currentList = lists?.find(list => list.id === selectedList) || null;

//     if (loading.lists && lists.length === 0) {
//         return <LoadingSpinner />;
//     }

//     return (
//         <>
//             <MakeFavoriteModal onCreate={handleListCreate} />

//             <main className="content-wrapper">
//                 <div className="container py-5 mt-n2 mt-sm-0">
//                     <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
//                         <Aside />

//                         <div className="col-lg-9">
//                             <div className="ps-lg-3 ps-xl-0">
//                                 <div className="d-flex align-items-center justify-content-between pb-3 mb-1 mb-sm-2 mb-md-3">
//                                     <h1 className="h2 me-3 mb-0">Favorites</h1>
//                                     <div className="nav">
//                                         <button 
//                                             className="nav-link animate-underline px-0 py-1 py-ms-2" 
//                                             data-bs-toggle="modal"
//                                             data-bs-target="#wishlistModal"
//                                         >
//                                             <i className="ci-plus fs-base me-1" />
//                                             <span className="animate-target badge text-bg-info rounded-pill">
//                                                 Add favorite list
//                                             </span>
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* List selection and sorting controls */}
//                                 <div className="border-bottom pb-4 mb-3">
//                                     <div className="row align-items-center justify-content-between">
//                                         <div className="col-sm-7 col-md-8 col-xxl-9 d-flex align-items-center mb-3 mb-sm-0">
//                                             <h5 className="me-2 mb-0">{currentList?.name || 'No list selected'}</h5>
//                                             {lists.length > 0 && (
//                                                 <div className="dropdown ms-auto ms-sm-0">
//                                                     <button
//                                                         type="button"
//                                                         className="btn btn-icon btn-ghost btn-secondary border-0"
//                                                         id="wishlist-selector"
//                                                         data-bs-toggle="dropdown"
//                                                         aria-expanded="false"
//                                                         disabled={loading.lists}
//                                                     >
//                                                         {loading.lists ? (
//                                                             <span className="spinner-border spinner-border-sm" role="status" />
//                                                         ) : (
//                                                             <i className="ci-more-vertical fs-xl" />
//                                                         )}
//                                                     </button>
//                                                     <div className="dropdown-menu dropdown-menu-end">
//                                                         <div className="d-flex flex-column gap-1 mb-2">
//                                                             {lists.map(list => (
//                                                                 <div className="form-check" key={list.id}>
//                                                                     <input
//                                                                         type="radio"
//                                                                         className="form-check-input"
//                                                                         id={`wishlist-${list.id}`}
//                                                                         name="wishlist"
//                                                                         checked={selectedList === list.id}
//                                                                         onChange={() => setSelectedList(list.id)}
//                                                                         disabled={loading.items}
//                                                                     />
//                                                                     <label
//                                                                         htmlFor={`wishlist-${list.id}`}
//                                                                         className="form-check-label text-body"
//                                                                     >
//                                                                         {list.name} ({list.item_count}) {list.is_default && '(Default)'}
//                                                                     </label>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                         <button
//                                                             type="button"
//                                                             className="btn btn-sm btn-dark w-100"
//                                                             onClick={() => document.getElementById('wishlist-selector')?.click()}
//                                                         >
//                                                             Select list
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             )}
//                                         </div>
//                                         <div className="col-sm-5 col-md-4 col-xxl-3">
//                                             <select
//                                                 className="form-select"
//                                                 value={sortOption}
//                                                 onChange={(e) => setSortOption(e.target.value)}
//                                                 disabled={loading.items || items.length === 0}
//                                             >
//                                                 <option value="date">By date added</option>
//                                                 <option value="price_asc">By price ascending</option>
//                                                 <option value="price_desc">By price descending</option>
//                                                 <option value="rating">By rating</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Action buttons */}
//                                 <div className="nav align-items-center mb-4">
//                                     <div className="form-check nav-link animate-underline fs-lg ps-0 pe-2 py-2 mt-n1 me-4">
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             id="wishlist-master"
//                                             checked={selectedItems.length === items.length && items.length > 0}
//                                             onChange={(e) => handleSelectAll(e.target.checked)}
//                                             disabled={loading.items || items.length === 0}
//                                         />
//                                         <label htmlFor="wishlist-master" className="form-check-label animate-target mt-1 ms-2">
//                                             {selectedItems.length === items.length && items.length > 0 ? 'Unselect all' : 'Select all'}
//                                         </label>
//                                     </div>
//                                     <div className="d-flex flex-wrap" id="action-buttons">
//                                         <button
//                                             className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4"
//                                             onClick={handleAddToCart}
//                                             disabled={selectedItems.length === 0 || loading.items}
//                                         >
//                                             {loading.items ? (
//                                                 <span className="spinner-border spinner-border-sm me-2" role="status" />
//                                             ) : (
//                                                 <i className="ci-shopping-cart fs-base me-2" />
//                                             )}
//                                             <span className="animate-target d-none d-md-inline">Add to cart</span>
//                                         </button>
//                                         <div className="dropdown">
//                                             <button
//                                                 className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4 dropdown-toggle"
//                                                 disabled={selectedItems.length === 0 || loading.items}
//                                                 data-bs-toggle="dropdown"
//                                             >
//                                                 {loading.items ? (
//                                                     <span className="spinner-border spinner-border-sm me-2" role="status" />
//                                                 ) : (
//                                                     <i className="ci-repeat fs-base me-2" />
//                                                 )}
//                                                 <span className="animate-target d-none d-md-inline">Relocate</span>
//                                             </button>
//                                             <div className="dropdown-menu">
//                                                 {lists.filter(list => list.id !== selectedList).map(list => (
//                                                     <button
//                                                         key={list.id}
//                                                         className="dropdown-item"
//                                                         onClick={() => handleRelocate(list.id)}
//                                                     >
//                                                         Move to {list.name}
//                                                     </button>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <button
//                                             className="nav-link animate-underline px-0 py-2"
//                                             onClick={handleRemoveSelected}
//                                             disabled={selectedItems.length === 0 || loading.items}
//                                         >
//                                             {loading.items ? (
//                                                 <span className="spinner-border spinner-border-sm me-1" role="status" />
//                                             ) : (
//                                                 <i className="ci-trash fs-base me-1" />
//                                             )}
//                                             <span className="animate-target d-none d-md-inline">Remove selected</span>
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Content area */}
//                                 {loading.items ? (
//                                     <div className="text-center py-5">
//                                         <LoadingSpinner />
//                                     </div>
//                                 ) : items.length === 0 ? (
//                                     <div className="text-center py-5">
//                                         <i className="ci-heart-filled display-4 text-muted mb-4" />
//                                         <h3>No items in this list</h3>
//                                         <p className="text-muted">Add some products to your favorites</p>
//                                     </div>
//                                 ) : (
//                                     <div className="row row-cols-2 row-cols-md-3 g-4">
//                                         {items?.map(item => (
//                                             <div className="col" key={item.products.id}>

//                                                  {/* Item */}
//                                                 {/* <div className="col">
//                                                   <div className="product-card animate-underline hover-effect-opacity bg-body rounded">
//                                                     <div className="position-relative">
//                                                       <div className="position-absolute top-0 end-0 z-1 pt-1 pe-1 mt-2 me-2">
//                                                         <div className="form-check fs-lg">
//                                                           <input type="checkbox" className="form-check-input select-card-check" defaultChecked />
//                                                         </div>
//                                                       </div>
//                                                       <a className="d-block rounded-top overflow-hidden p-3 p-sm-4" href="/products/techa-products-slug">
//                                                         <span className="badge bg-danger position-absolute top-0 start-0 mt-2 ms-2 mt-lg-3 ms-lg-3">-21%</span>
//                                                         <div className="ratio" style={{ "--cz-aspect-ratio": 'calc(240 / 258 * 100%)' }}>
//                                                           <img src="/assets/img/shop/electronics/01.png" alt="VR Glasses" />
//                                                         </div>
//                                                       </a>
//                                                     </div>
//                                                     <div className="w-100 min-w-0 px-1 pb-2 px-sm-3 pb-sm-3">
//                                                       <div className="d-flex align-items-center gap-2 mb-2">
//                                                         <div className="d-flex gap-1 fs-xs">
//                                                           <i className="ci-star-filled text-warning" />
//                                                           <i className="ci-star-filled text-warning" />
//                                                           <i className="ci-star-filled text-warning" />
//                                                           <i className="ci-star-filled text-warning" />
//                                                           <i className="ci-star text-body-tertiary opacity-75" />
//                                                         </div>
//                                                         <span className="text-body-tertiary fs-xs">(123)</span>
//                                                       </div>
//                                                       <h3 className="pb-1 mb-2">
//                                                         <a className="d-block fs-sm fw-medium text-truncate" href="/products/techa-products-slug">
//                                                           <span className="animate-target">VRB01 Virtual Reality Glasses</span>
//                                                         </a>
//                                                       </h3>
//                                                       <div className="d-flex align-items-center justify-content-between">
//                                                         <div className="h5 lh-1 mb-0">$340.99 <del className="text-body-tertiary fs-sm fw-normal">$430.00</del></div>
//                                                         <button type="button" className="product-card-button btn btn-icon btn-secondary animate-slide-end ms-2" aria-label="Add to Cart">
//                                                           <i className="ci-shopping-cart fs-base animate-target" />
//                                                         </button>
//                                                       </div>
//                                                     </div>
//                                                   </div>
//                                                 </div> */}

//                                                 {/* <ProductCard
//                                                     product={{
//                                                         id: item.products.id,
//                                                         name: item.products?.name,
//                                                         price: item.products?.price,
//                                                         originalPrice: item.products?.original_price,
//                                                         discount: item.products?.discount,
//                                                         rating: item.products.reviews,
//                                                         reviewCount: item.products.review_count,
//                                                         imageUrl: item.products?.image_url,
//                                                         slug: item.products.slug,
//                                                     }}
//                                                     showCheckbox
//                                                     isChecked={selectedItems.includes(item.id)}
//                                                     onCheckChange={(checked) => handleItemSelect(item.id, checked)}
//                                                 /> */}

//                                                 {/* <ProductSummary product={item.products} showCheckbox
//                                                     isChecked={selectedItems.includes(item.id)}
//                                                     onCheckChange={(checked) => handleItemSelect(item.id, checked)} /> */}
                                               
//                                                 <ProductSummary 
//                                                   product={item.products} 
//                                                   showCheckbox={true}
//                                                   isChecked={selectedItems.includes(item.id)}
//                                                   onCheckChange={(checked) => handleItemSelect(item.id, checked)} 
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     );
// };

// export default Favorites;


// VERSION 05 - make it add correct product ids when selecting/moving, also displays spinning effect

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner, { LoadingZoom } from '../../../components/shared/LoadingSpinner';
import { NotificationService } from '../../../services/local/NotificationService';
import { FavoritesAxiosService } from '../../../services/net/FavoritesAxiosService';
// import ProductCard from '../../products/ProductCard';
import Aside from '../shared/Aside';
import MakeFavoriteModal from './MakeFavoriteModal';
import ProductSummary from '../../products/ProductSummary_0';
import { BasketAxiosService } from '../../../services/net/BasketAxiosService';

interface FavoriteList {
    id: string;
    name: string;
    description?: string;
    privacy: 'private' | 'public' | 'shared';
    item_count: number;
    updated_at: string;
    is_default?: boolean;
}

interface Product {
  id: string;
  name: string;
  price: number;
  original_price?: number;
  discount?: number;
  rating: number;
  review_count: number;
  image_url: string;
  slug: string;
}

interface FavoriteItem {
  id: string;
  product: Product;
  product_id: string;
  added_at: string;
  created_at: string;
  updated_at: string;
}

const Favorites = () => {
    const [lists, setLists] = useState<FavoriteList[]>([]);
    const [selectedList, setSelectedList] = useState<string | null>(null);
    const [items, setItems] = useState<FavoriteItem[]>([]);
    const [loading, setLoading] = useState({
        lists: true,
        items: false
    });
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [sortOption, setSortOption] = useState('date');
    const [modalState, setModalState] = useState({ 
        show: false, 
        message: '', 
        type: '' 
    });

    useEffect(() => {
        const observer = (data) => {
            setModalState(data);
        };

        NotificationService.subscribe(observer);
        return () => {
            NotificationService.unsubscribe(observer);
        };
    }, []);

    useEffect(() => {
        fetchFavoriteLists();
    }, []);

    useEffect(() => {
        if (selectedList) {
            fetchFavoriteItems(selectedList);
        }
    }, [selectedList, sortOption]);

    const fetchFavoriteLists = async () => {
        try {
            setLoading(prev => ({ ...prev, lists: true }));
            
            const response = await FavoritesAxiosService.getFavoriteLists({});

            // Ensure we're accessing the correct property in the response
            const favoriteLists = response.data?.favorite_lists || [];
            
            // If we have lists, select the default list or the first list
            if (favoriteLists.length > 0) {
                const defaultList = favoriteLists.find(list => list.is_default);
                setSelectedList(defaultList?.id || favoriteLists[0].id);
            } else {
                setSelectedList(null);
            }
            
            setLists(favoriteLists);
        } catch (err) {
            const errorMessage = err.response?.data?.error || err.message || 'Failed to load favorite lists';
            NotificationService.showDialog(errorMessage, 'danger');
            setLists([]);
            setSelectedList(null);
        } finally {
            setLoading(prev => ({ ...prev, lists: false }));
        }
    };

    const fetchFavoriteItems = async (listId: string) => {
        try {
            setLoading(prev => ({ ...prev, items: true }));
            const response = await FavoritesAxiosService.getFavoriteItems(listId, {
                sort_by: sortOption
            });
            
            // Ensure we're accessing the correct property in the response
            setItems(response.data?.favorite_items || []);
            
            // Update the list count in the lists array
            setLists(prevLists => 
                prevLists.map(list => 
                    list.id === listId 
                        ? { ...list, item_count: response.data?.favorite_items?.length || 0 } 
                        : list
                )
            );
        } catch (err) {
            const errorMessage = err.response?.data?.error || err.message || 'Failed to load favorite items';
            NotificationService.showDialog(errorMessage, 'error');
            setItems([]);
        } finally {
            setLoading(prev => ({ ...prev, items: false }));
        }
    };
    
    const handleListCreate = async (name: string, description: string, privacy: string) => {
        try {
            NotificationService.showDialog("Creating favorite list...", "primary");
            
            const response = await FavoritesAxiosService.createFavoriteList({
                name,
                description,
                privacy: privacy as 'private' | 'public' | 'shared'
            });
            
            // Ensure we're accessing the correct property in the response
            const newList = response.data?.favorite_list;
            if (newList) {
                setLists([...lists, newList]);
                setSelectedList(newList.id);
            }
            
            NotificationService.showDialog("Favorite list created successfully", "success");
        } catch (err) {
            const errorMessage = err.response?.data?.error || err.message || 'Failed to create favorite list';
            NotificationService.showDialog(errorMessage, 'error');
        }
    };

    const handleItemSelect = (itemId: string, isSelected: boolean) => {
        setSelectedItems(prev =>
            isSelected
                ? [...prev, itemId]
                : prev.filter(id => id !== itemId)
        );
    };

    const handleSelectAll = (isSelected: boolean) => {
        setSelectedItems(isSelected ? items.map(item => item.id) : []);
    };

    // const handleRemoveSelected = async () => {
    //     if (!selectedList || selectedItems.length === 0) return;
        
    //     try {
    //         NotificationService.showDialog("Removing selected items...", "primary");
            
    //         await Promise.all(
    //             selectedItems.map(itemId =>
    //                 FavoritesAxiosService.removeFavoriteItem(selectedList, itemId)
    //             )
    //         );
            
    //         // Update items list
    //         setItems(items.filter(item => !selectedItems.includes(item.id)));
            
    //         // Update the list count in the lists array
    //         setLists(prevLists => 
    //             prevLists.map(list => 
    //                 list.id === selectedList 
    //                     ? { ...list, item_count: list.item_count - selectedItems.length } 
    //                     : list
    //             )
    //         );
            
    //         setSelectedItems([]);
    //         NotificationService.showDialog(`Items removed successfully`, "success");
    //     } catch (err) {
    //         const errorMessage = err.response?.data?.error || err.message || 'Failed to remove items';
    //         NotificationService.showDialog(errorMessage, 'error');
    //     }
    // };

    // const handleAddToCart = async () => {
    //     try {
    //         NotificationService.showDialog("Adding items to cart...", "primary");
            
    //         // Implementation for adding to cart would go here
    //         // await CartService.addMultipleToCart(selectedItems);
            
    //         NotificationService.showDialog("Items added to cart successfully", "success");
    //     } catch (err) {
    //         const errorMessage = err.response?.data?.error || err.message || 'Failed to add items to cart';
    //         NotificationService.showDialog(errorMessage, 'error');
    //     }
    // };

    // const handleRelocate = async (targetListId: string) => {
    //     if (!selectedList || selectedItems.length === 0) return;
        
    //     try {
    //         NotificationService.showDialog("Moving items...", "primary");
            
    //         // Extract product_ids from the selected items
    //         const productIds = selectedItems.map(itemId => {
    //             const item = items.find(i => i.id === itemId);
    //             return item ? item.product_id : '';
    //         }).filter(id => id !== '');
            
    //         // Make the API call with product_ids array
    //         await FavoritesAxiosService.moveFavoriteItems(
    //             selectedList,
    //             targetListId,
    //             productIds
    //         );
            
    //         // Update items list
    //         setItems(items.filter(item => !selectedItems.includes(item.id)));
            
    //         // Update the list counts in the lists array
    //         setLists(prevLists => 
    //             prevLists.map(list => {
    //                 if (list.id === selectedList) {
    //                     return { ...list, item_count: list.item_count - selectedItems.length };
    //                 } else if (list.id === targetListId) {
    //                     return { ...list, item_count: list.item_count + selectedItems.length };
    //                 }
    //                 return list;
    //             })
    //         );
            
    //         setSelectedItems([]);
    //         NotificationService.showDialog("Items moved successfully", "success");
    //     } catch (err) {
    //         const errorMessage = err.response?.data?.error || err.message || 'Failed to move items';
    //         NotificationService.showDialog(errorMessage, 'error');
    //     }
    // };

    
    const handleRemoveSelected = async () => {
        if (!selectedList || selectedItems.length === 0) {
            NotificationService.showDialog("Please select items to remove", "warning");
            return;
        }
        
        try {
            setLoading(prev => ({ ...prev, action: true }));
            NotificationService.showDialog("Removing selected items...", "primary");
            
            // Get product IDs from selected items
            const selectedItemsData = items.filter(item => selectedItems.includes(item.id));
            const productIds = selectedItemsData.map(item => item.product_id).filter(Boolean);
            
            if (productIds.length === 0) {
                throw new Error("No valid products selected for removal");
            }
            
            // Use batch remove endpoint if available, otherwise fallback to individual removal
            if (FavoritesAxiosService.removeBatchFavoriteItems) {
                await FavoritesAxiosService.removeBatchFavoriteItems(selectedList, productIds);
            } else {
                await Promise.all(
                    productIds.map(productId =>
                        FavoritesAxiosService.removeFavoriteItem(selectedList, productId)
                    )
                );
            }
            
            // Update items list
            setItems(items.filter(item => !selectedItems.includes(item.id)));
            
            // Update the list count in the lists array
            setLists(prevLists => 
                prevLists.map(list => 
                    list.id === selectedList 
                        ? { 
                            ...list, 
                            item_count: Math.max(0, list.item_count - selectedItems.length),
                            updated_at: new Date().toISOString()
                        } 
                        : list
                )
            );
            
            setSelectedItems([]);
            NotificationService.showDialog(
                `Removed ${selectedItems.length} item${selectedItems.length > 1 ? 's' : ''} successfully`, 
                "success"
            );
        } catch (err) {
            console.error("Remove items error:", err);
            
            // Refresh data on error to ensure consistency
            fetchFavoriteItems(selectedList);
            
            const errorMessage = err.response?.data?.error || err.message || 'Failed to remove items';
            NotificationService.showDialog(errorMessage, 'error');
        } finally {
            setLoading(prev => ({ ...prev, action: false }));
        }
    };
    
    const handleAddToBasket = async () => {
      if (selectedItems.length === 0) {
          NotificationService.showDialog("Please select items to add to basket", "warning");
          return;
      }
  
      try {
          NotificationService.showDialog("Adding items to basket...", "primary");
          
          // Get product IDs from selected favorite items
        //   const productIds = selectedItems.map(itemId => {
        //       const item = items.find(i => i.id === itemId);
        //       return item?.product?.id; // Using optional chaining
        //   }).filter(Boolean) as string[]; // Filter out undefined/null and assert as string[]
        
        const productIds = items
        .filter(item => selectedItems.includes(item.id))
        .map(item => item.product_id)
        .filter(Boolean); // Ensure we don't send any null/undefined values
  
        //   if (productIds.length === 0) {
        //       throw new Error("No valid products selected for moving");
        //   }

          if (productIds.length === 0) {
              throw new Error("No valid products selected");
          }
  
          // Add to cart
          await BasketAxiosService.addMultipleToBasket(productIds);
          
          // Update UI
          setSelectedItems([]);
          NotificationService.showDialog(
              `Added ${productIds.length} item${productIds.length > 1 ? 's' : ''} to basket successfully`, 
              "success"
          );
      } catch (err) {
          console.error("Add to basket error:", err);
          const errorMessage = err.response?.data?.error || err.message || 'Failed to add items to basket';
          NotificationService.showDialog(errorMessage, 'error');
      }
  };
  
  const handleRelocate = async (targetListId: string) => {
      if (!selectedList || selectedItems.length === 0) {
          NotificationService.showDialog("Please select items to move", "warning");
          return;
      }else{
        // console.log('selectedList:', selectedList )
      }
  
      if (selectedList === targetListId) {
          NotificationService.showDialog("Cannot move items to the same list", "warning");
          return;
      }
  
      try {
          NotificationService.showDialog("Moving items...", "primary");
          
          // Get product IDs from selected items
          // const productIds = selectedItems.map(itemId => {
          //     const item = items.find(i => i.id === itemId);
          //     if (!item?.product_id) {
          //         console.warn(`No product_id found for favorite item ${itemId}`);
          //         return null;
          //     }
          //     return item.product_id;
          // }).filter(Boolean) as string[];

          // 
          // Get product IDs from selected items
        const productIds = items
        .filter(item => selectedItems.includes(item.id))
        .map(item => item.product_id)
        .filter(Boolean); // Ensure we don't send any null/undefined values
  
          if (productIds.length === 0) {
              throw new Error("No valid products selected for moving");
          }
          
          console.log('productIds:', productIds);
          // Add this debug log before making the API call
          console.log("Items being moved:", {
            selectedItems,
            items: items.map(item => ({
                id: item.id,
                product_id: item.product_id,
                product: item.product ? item.product.id : null
            })),
            productIds: items
                .filter(item => selectedItems.includes(item.id))
                .map(item => item.product_id)
          });

          // Make the API call
          await FavoritesAxiosService.moveFavoriteItems(
              selectedList,
              targetListId,
              productIds
          );
          
          // Optimistic UI updates
          setItems(prevItems => prevItems.filter(item => !selectedItems.includes(item.id)));
          
          setLists(prevLists => 
              prevLists.map(list => {
                  if (list.id === selectedList) {
                      return { 
                          ...list, 
                          item_count: Math.max(0, list.item_count - selectedItems.length),
                          updated_at: new Date().toISOString()
                      };
                  } else if (list.id === targetListId) {
                      return { 
                          ...list, 
                          item_count: list.item_count + selectedItems.length,
                          updated_at: new Date().toISOString()
                      };
                  }
                  return list;
              })
          );
          
          // Reset selection and show success
          setSelectedItems([]);
          NotificationService.showDialog(
              `Moved ${selectedItems.length} item${selectedItems.length > 1 ? 's' : ''} successfully`, 
              "success"
          );
      } catch (err) {
          console.error("Move items error:", err);
          
          // Revert optimistic updates on error
          fetchFavoriteItems(selectedList);
          fetchFavoriteLists();
          
          const errorMessage = err.response?.data?.error || err.message || 'Failed to move items';
          NotificationService.showDialog(errorMessage, 'error');
      }
  };

    const currentList = lists?.find(list => list.id === selectedList) || null;

    if (loading.lists) {
        return (
            <div className="text-center py-5">
                <LoadingSpinner />
                <p className="mt-3">Loading your favorite products...</p>
            </div>
        );
    }

    return (
        <>
            <MakeFavoriteModal onCreate={handleListCreate} />

            <main className="content-wrapper">
                <div className="container py-5 mt-n2 mt-sm-0">
                    <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
                        <Aside />

                        <div className="col-lg-9">
                            <div className="ps-lg-3 ps-xl-0">
                                <div className="d-flex align-items-center justify-content-between pb-3 mb-1 mb-sm-2 mb-md-3">
                                    <h1 className="h2 me-3 mb-0">Favorites</h1>
                                    <div className="nav">

                                        {/* <button className="nav-link animate-scale px-0 p-1 py-1 py-ms-2 - animate-target badge text-bg-info rounded-pill" data-bs-toggle="modal"
                                            data-bs-target="#wishlistModal">
                                            <i className="ci-heart fs-base me-1 animate-scale"/>
                                            Add favorite list
                                        </button> */}

                                        <button className="nav-link animate-scale px-0 py-1 py-ms-2" data-bs-toggle="modal"
                                            data-bs-target="#wishlistModal">
                                            <i className="ci-heart fs-base me-1 animate-scale"/>
                                            <span className="animate-target badge text-bg-info rounded-pill">
                                                Add favorite list
                                            </span>
                                        </button>
                                    </div>
                                </div>

                                {/* List selection and sorting controls */}
                                <div className="border-bottom pb-4 mb-3">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-sm-7 col-md-8 col-xxl-9 d-flex align-items-center mb-3 mb-sm-0">
                                            <h5 className="me-2 mb-0">
                                                {currentList?.name || 'No list selected'} 
                                                {currentList && ` (${currentList.item_count})`}
                                            </h5>
                                            {lists.length > 0 && (
                                                <div className="dropdown ms-auto ms-sm-0">
                                                    <button
                                                        type="button"
                                                        className="btn btn-icon btn-ghost btn-secondary border-0"
                                                        id="wishlist-selector"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                        disabled={loading.lists}
                                                    >
                                                        {loading.lists ? (
                                                            <span className="spinner-border spinner-border-sm" role="status" />
                                                        ) : (
                                                            <i className="ci-more-vertical fs-sm" />
                                                        )}
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end">
                                                        <div className="d-flex flex-column gap-1 mb-2">
                                                            {lists.map(list => (
                                                                <div className="form-check" key={list.id}>
                                                                    <input
                                                                        type="radio"
                                                                        className="form-check-input"
                                                                        id={`wishlist-${list.id}`}
                                                                        name="wishlist"
                                                                        checked={selectedList === list.id}
                                                                        onChange={() => setSelectedList(list.id)}
                                                                        disabled={loading.items}
                                                                    />
                                                                    <label
                                                                        htmlFor={`wishlist-${list.id}`}
                                                                        className="form-check-label text-body"
                                                                    >
                                                                        {list.name} ({list.item_count}) {list.is_default && '(Default)'}
                                                                    </label>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <button type="button" className="btn btn-sm btn-dark w-100"
                                                            onClick={() => document.getElementById('wishlist-selector')?.click()} >
                                                            Select list
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-sm-5 col-md-4 col-xxl-3">
                                            <select className="form-select"
                                                value={sortOption}
                                                onChange={(e) => setSortOption(e.target.value)}
                                                disabled={loading.items || items.length === 0}
                                            >
                                                <option value="date">By date added</option>
                                                <option value="price_asc">By price ascending</option>
                                                <option value="price_desc">By price descending</option>
                                                <option value="rating">By rating</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Action buttons */}
                                <div className="nav align-items-center mb-4">
                                    <div className="form-check nav-link animate-underline fs-lg ps-0 pe-2 py-2 mt-n1 me-4">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="wishlist-master"
                                            checked={selectedItems.length === items.length && items.length > 0}
                                            onChange={(e) => handleSelectAll(e.target.checked)}
                                            disabled={loading.items || items.length === 0}
                                        />
                                        <label htmlFor="wishlist-master" className="form-check-label animate-target mt-1 ms-2">
                                            {selectedItems.length === items.length && items.length > 0 ? 'Unselect all' : 'Select all'}
                                        </label>
                                    </div>
                                    <div className="d-flex flex-wrap" id="action-buttons">
                                        <button
                                            className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4"
                                            onClick={handleAddToBasket}
                                            disabled={selectedItems.length === 0 || loading.items}
                                        >
                                            {loading.items ? (
                                                 <LoadingZoom size="sm" />
                                            ) : (
                                                <i className="ci-shopping-cart fs-base me-2" />
                                            )}
                                            <span className="animate-target d-none d-md-inline">Add to cart</span>
                                        </button>
                                        <div className="dropdown">
                                            <button className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4 dropdown-toggle"
                                                disabled={selectedItems.length === 0 || loading.items}
                                                data-bs-toggle="dropdown" >
                                                {loading.items ? (
                                                     <LoadingZoom size="sm" />
                                                ) : (
                                                    <i className="ci-repeat fs-base me-2" />
                                                )}
                                                <span className="animate-target d-none d-md-inline">Relocate</span>
                                            </button>
                                            <div className="dropdown-menu">
                                                {lists.filter(list => list.id !== selectedList).map(list => (
                                                    <button
                                                        key={list.id}
                                                        className="dropdown-item"
                                                        onClick={() => handleRelocate(list.id)}
                                                    >
                                                        Move to {list.name}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <button
                                            className="nav-link animate-underline px-0 py-2"
                                            onClick={handleRemoveSelected}
                                            disabled={selectedItems.length === 0 || loading.items}
                                        >
                                            {loading.items ? (
                                                <LoadingZoom size="sm" />
                                            ) : (
                                                <i className="ci-trash fs-base me-1" />
                                            )}
                                            <span className="animate-target d-none d-md-inline">Remove selected</span>
                                        </button>
                                    </div>
                                </div>

                                {/* Content area */}
                                {loading.items ? (
                                    <div className="text-center py-5">
                                        <LoadingSpinner />
                                        <p className="mt-3">Loading your favorite products...</p>
                                    </div>
                                ) : items.length === 0 ? (
                                    <div className="text-center py-5">
                                        <i className="ci-heart-filled display-4 text-muted mb-4" />
                                        <h3>No items in this list</h3>
                                        <p className="text-muted">Add some products to your favorites. <Link to="/products">Browse products.</Link></p>
                                    </div>
                                ) : (
                                    <div className="row row-cols-2 row-cols-md-3 g-2">
                                        {/* <div className="overflow-auto pe-3 row-cols-2 row-cols-md-3 g-2 row" data-simplebar style={{maxHeight: "640px"}}> */}
                                        {items.map(item => (
                                            <div className="col" key={item.products.id}>
                                                <ProductSummary 
                                                  product={item.products} 
                                                  showCheckbox={true}
                                                  isChecked={selectedItems.includes(item.id)}
                                                  onCheckChange={(checked) => handleItemSelect(item.id, checked)} 
                                                />
                                            </div>
                                        ))}
                                    {/* </div> */}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Favorites;

// VERSION 06

// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import LoadingSpinner from '../../../components/shared/LoadingSpinner';
// import { NotificationService } from '../../../services/local/NotificationService';
// import { FavoritesAxiosService } from '../../../services/net/FavoritesAxiosService';
// // import ProductCard from '../../products/ProductCard';
// import Aside from '../shared/Aside';
// import MakeFavoriteModal from './MakeFavoriteModal';
// import ProductSummary from '../../products/ProductSummary';
// import { BasketAxiosService } from '../../../services/net/BasketAxiosService';

// interface FavoriteList {
//     id: string;
//     name: string;
//     description?: string;
//     privacy: 'private' | 'public' | 'shared';
//     item_count: number;
//     updated_at: string;
//     is_default?: boolean;
// }

// interface Product {
//   id: string;
//   name: string;
//   price: number;
//   original_price?: number;
//   discount?: number;
//   rating: number;
//   review_count: number;
//   image_url: string;
//   slug: string;
// }

// interface FavoriteItem {
//   id: string;
//   product: Product;
//   product_id: string;
//   added_at: string;
//   created_at: string;
//   updated_at: string;
// }

// const Favorites = () => {
//     const navigate = useNavigate();
//     const [lists, setLists] = useState<FavoriteList[]>([]);
//     const [selectedList, setSelectedList] = useState<string | null>(null);
//     const [items, setItems] = useState<FavoriteItem[]>([]);
//     const [loading, setLoading] = useState({
//         lists: true,
//         items: false,
//         action: false
//     });
//     const [selectedItems, setSelectedItems] = useState<string[]>([]);
//     const [sortOption, setSortOption] = useState('date');
//     const [modalState, setModalState] = useState({ 
//         show: false, 
//         message: '', 
//         type: '' 
//     });

//     useEffect(() => {
//         const observer = (data) => {
//             setModalState(data);
//         };

//         NotificationService.subscribe(observer);
//         return () => {
//             NotificationService.unsubscribe(observer);
//         };
//     }, []);

//     useEffect(() => {
//         fetchFavoriteLists();
//     }, []);

//     useEffect(() => {
//         if (selectedList) {
//             fetchFavoriteItems(selectedList);
//         }
//     }, [selectedList, sortOption]);

//     const fetchFavoriteLists = async () => {
//         try {
//             setLoading(prev => ({ ...prev, lists: true }));
            
//             const response = await FavoritesAxiosService.getFavoriteLists({});

//             // Ensure we're accessing the correct property in the response
//             const favoriteLists = response.data?.favorite_lists || [];
            
//             // If we have lists, select the default list or the first list
//             if (favoriteLists.length > 0) {
//                 const defaultList = favoriteLists.find(list => list.is_default);
//                 setSelectedList(defaultList?.id || favoriteLists[0].id);
//             } else {
//                 setSelectedList(null);
//             }
            
//             setLists(favoriteLists);
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load favorite lists';
//             NotificationService.showDialog(errorMessage, 'danger');
//             setLists([]);
//             setSelectedList(null);
//         } finally {
//             setLoading(prev => ({ ...prev, lists: false }));
//         }
//     };

//     const fetchFavoriteItems = async (listId: string) => {
//         try {
//             setLoading(prev => ({ ...prev, items: true }));
//             const response = await FavoritesAxiosService.getFavoriteItems(listId, {
//                 sort_by: sortOption
//             });
            
//             // Ensure we're accessing the correct property in the response
//             setItems(response.data?.favorite_items || []);
            
//             // Update the list count in the lists array
//             setLists(prevLists => 
//                 prevLists.map(list => 
//                     list.id === listId 
//                         ? { ...list, item_count: response.data?.favorite_items?.length || 0 } 
//                         : list
//                 )
//             );
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to load favorite items';
//             NotificationService.showDialog(errorMessage, 'error');
//             setItems([]);
//         } finally {
//             setLoading(prev => ({ ...prev, items: false }));
//         }
//     };
    
//     const handleListCreate = async (name: string, description: string, privacy: string) => {
//         try {
//             NotificationService.showDialog("Creating favorite list...", "primary");
            
//             const response = await FavoritesAxiosService.createFavoriteList({
//                 name,
//                 description,
//                 privacy: privacy as 'private' | 'public' | 'shared'
//             });
            
//             // Ensure we're accessing the correct property in the response
//             const newList = response.data?.favorite_list;
//             if (newList) {
//                 setLists([...lists, newList]);
//                 setSelectedList(newList.id);
//             }
            
//             NotificationService.showDialog("Favorite list created successfully", "success");
//         } catch (err) {
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to create favorite list';
//             NotificationService.showDialog(errorMessage, 'error');
//         }
//     };

//     const handleItemSelect = (itemId: string, isSelected: boolean) => {
//         setSelectedItems(prev =>
//             isSelected
//                 ? [...prev, itemId]
//                 : prev.filter(id => id !== itemId)
//         );
//     };

//     const handleSelectAll = (isSelected: boolean) => {
//         setSelectedItems(isSelected ? items.map(item => item.id) : []);
//     };

//     const handleRemoveSelected = async () => {
//         if (!selectedList || selectedItems.length === 0) {
//             NotificationService.showDialog("Please select items to remove", "warning");
//             return;
//         }
        
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Removing selected items...", "primary");
            
//             // Get product IDs from selected items
//             const selectedItemsData = items.filter(item => selectedItems.includes(item.id));
//             const productIds = selectedItemsData.map(item => item.product_id).filter(Boolean);
            
//             if (productIds.length === 0) {
//                 throw new Error("No valid products selected for removal");
//             }
            
//             // Use batch remove endpoint if available, otherwise fallback to individual removal
//             if (FavoritesAxiosService.removeBatchFavoriteItems) {
//                 await FavoritesAxiosService.removeBatchFavoriteItems(selectedList, productIds);
//             } else {
//                 await Promise.all(
//                     productIds.map(productId =>
//                         FavoritesAxiosService.removeFavoriteItem(selectedList, productId)
//                     )
//                 );
//             }
            
//             // Update items list
//             setItems(items.filter(item => !selectedItems.includes(item.id)));
            
//             // Update the list count in the lists array
//             setLists(prevLists => 
//                 prevLists.map(list => 
//                     list.id === selectedList 
//                         ? { 
//                             ...list, 
//                             item_count: Math.max(0, list.item_count - selectedItems.length),
//                             updated_at: new Date().toISOString()
//                         } 
//                         : list
//                 )
//             );
            
//             setSelectedItems([]);
//             NotificationService.showDialog(
//                 `Removed ${selectedItems.length} item${selectedItems.length > 1 ? 's' : ''} successfully`, 
//                 "success"
//             );
//         } catch (err) {
//             console.error("Remove items error:", err);
            
//             // Refresh data on error to ensure consistency
//             fetchFavoriteItems(selectedList);
            
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to remove items';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const handleAddToBasket = async () => {
//         if (selectedItems.length === 0) {
//             NotificationService.showDialog("Please select items to add to basket", "warning");
//             return;
//         }
    
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Adding items to basket...", "primary");
            
//             // Get product IDs from selected favorite items
//             const productIds = items
//             .filter(item => selectedItems.includes(item.id))
//             .map(item => item.product_id)
//             .filter(Boolean); // Ensure we don't send any null/undefined values
    
//             if (productIds.length === 0) {
//                 throw new Error("No valid products selected");
//             }
    
//             // Add to cart
//             await BasketAxiosService.addMultipleToBasket(productIds);
            
//             // Update UI
//             setSelectedItems([]);
//             NotificationService.showDialog(
//                 `Added ${productIds.length} item${productIds.length > 1 ? 's' : ''} to basket successfully`, 
//                 "success"
//             );
//         } catch (err) {
//             console.error("Add to basket error:", err);
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to add items to basket';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };
    
//     const handleRelocate = async (targetListId: string) => {
//         if (!selectedList || selectedItems.length === 0) {
//             NotificationService.showDialog("Please select items to move", "warning");
//             return;
//         }
    
//         if (selectedList === targetListId) {
//             NotificationService.showDialog("Cannot move items to the same list", "warning");
//             return;
//         }
    
//         try {
//             setLoading(prev => ({ ...prev, action: true }));
//             NotificationService.showDialog("Moving items...", "primary");
            
//             // Get product IDs from selected items
//             const productIds = items
//                 .filter(item => selectedItems.includes(item.id))
//                 .map(item => item.product_id)
//                 .filter(Boolean); // Ensure we don't send any null/undefined values
    
//             if (productIds.length === 0) {
//                 throw new Error("No valid products selected for moving");
//             }
            
//             // Make the API call
//             await FavoritesAxiosService.moveFavoriteItems(
//                 selectedList,
//                 targetListId,
//                 productIds
//             );
            
//             // Optimistic UI updates
//             setItems(prevItems => prevItems.filter(item => !selectedItems.includes(item.id)));
            
//             setLists(prevLists => 
//                 prevLists.map(list => {
//                     if (list.id === selectedList) {
//                         return { 
//                             ...list, 
//                             item_count: Math.max(0, list.item_count - selectedItems.length),
//                             updated_at: new Date().toISOString()
//                         };
//                     } else if (list.id === targetListId) {
//                         return { 
//                             ...list, 
//                             item_count: list.item_count + selectedItems.length,
//                             updated_at: new Date().toISOString()
//                         };
//                     }
//                     return list;
//                 })
//             );
            
//             // Reset selection and show success
//             setSelectedItems([]);
//             NotificationService.showDialog(
//                 `Moved ${selectedItems.length} item${selectedItems.length > 1 ? 's' : ''} successfully`, 
//                 "success"
//             );
//         } catch (err) {
//             console.error("Move items error:", err);
            
//             // Revert optimistic updates on error
//             fetchFavoriteItems(selectedList);
//             fetchFavoriteLists();
            
//             const errorMessage = err.response?.data?.error || err.message || 'Failed to move items';
//             NotificationService.showDialog(errorMessage, 'error');
//         } finally {
//             setLoading(prev => ({ ...prev, action: false }));
//         }
//     };

//     const currentList = lists?.find(list => list.id === selectedList) || null;

//     if (loading.lists) {
//         return (
//             <div className="text-center py-5">
//                 <LoadingSpinner />
//                 <p className="mt-3">Loading your favorite products...</p>
//             </div>
//         );
//     }

//     return (
//         <>
//             <MakeFavoriteModal onCreate={handleListCreate} />

//             <main className="content-wrapper">
//                 <div className="container py-5 mt-n2 mt-sm-0">
//                     <div className="row pt-md-2 pt-lg-3 pb-sm-2 pb-md-3 pb-lg-4 pb-xl-5">
//                         <Aside />

//                         <div className="col-lg-9">
//                             <div className="ps-lg-3 ps-xl-0">
//                                 <div className="d-flex align-items-center justify-content-between pb-3 mb-1 mb-sm-2 mb-md-3">
//                                     <h1 className="h2 me-3 mb-0">Favorites</h1>
//                                     <div className="nav">
//                                         <button 
//                                             className="nav-link animate-underline px-0 py-1 py-ms-2" 
//                                             data-bs-toggle="modal"
//                                             data-bs-target="#wishlistModal"
//                                         >
//                                             <i className="ci-plus fs-base me-1" />
//                                             <span className="animate-target badge text-bg-info rounded-pill">
//                                                 Add favorite list
//                                             </span>
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* List selection and sorting controls */}
//                                 <div className="border-bottom pb-4 mb-3">
//                                     <div className="row align-items-center justify-content-between">
//                                         <div className="col-sm-7 col-md-8 col-xxl-9 d-flex align-items-center mb-3 mb-sm-0">
//                                             <h5 className="me-2 mb-0">
//                                                 {currentList?.name || 'No list selected'} 
//                                                 {currentList && ` (${currentList.item_count})`}
//                                             </h5>
//                                             {lists.length > 0 && (
//                                                 <div className="dropdown ms-auto ms-sm-0">
//                                                     <button
//                                                         type="button"
//                                                         className="btn btn-icon btn-ghost btn-secondary border-0"
//                                                         id="wishlist-selector"
//                                                         data-bs-toggle="dropdown"
//                                                         aria-expanded="false"
//                                                         disabled={loading.lists}
//                                                     >
//                                                         {loading.lists ? (
//                                                             <span className="spinner-border spinner-border-sm" role="status" />
//                                                         ) : (
//                                                             <i className="ci-more-vertical fs-sm" />
//                                                         )}
//                                                     </button>
//                                                     <div className="dropdown-menu dropdown-menu-end">
//                                                         <div className="d-flex flex-column gap-1 mb-2">
//                                                             {lists.map(list => (
//                                                                 <div className="form-check" key={list.id}>
//                                                                     <input
//                                                                         type="radio"
//                                                                         className="form-check-input"
//                                                                         id={`wishlist-${list.id}`}
//                                                                         name="wishlist"
//                                                                         checked={selectedList === list.id}
//                                                                         onChange={() => setSelectedList(list.id)}
//                                                                         disabled={loading.items}
//                                                                     />
//                                                                     <label
//                                                                         htmlFor={`wishlist-${list.id}`}
//                                                                         className="form-check-label text-body"
//                                                                     >
//                                                                         {list.name} ({list.item_count}) {list.is_default && '(Default)'}
//                                                                     </label>
//                                                                 </div>
//                                                             ))}
//                                                         </div>
//                                                         <button
//                                                             type="button"
//                                                             className="btn btn-sm btn-dark w-100"
//                                                             onClick={() => document.getElementById('wishlist-selector')?.click()}
//                                                         >
//                                                             Select list
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             )}
//                                         </div>
//                                         <div className="col-sm-5 col-md-4 col-xxl-3">
//                                             <select
//                                                 className="form-select"
//                                                 value={sortOption}
//                                                 onChange={(e) => setSortOption(e.target.value)}
//                                                 disabled={loading.items || items.length === 0}
//                                             >
//                                                 <option value="date">By date added</option>
//                                                 <option value="price_asc">By price ascending</option>
//                                                 <option value="price_desc">By price descending</option>
//                                                 <option value="rating">By rating</option>
//                                             </select>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Action buttons */}
//                                 <div className="nav align-items-center mb-4">
//                                     <div className="form-check nav-link animate-underline fs-lg ps-0 pe-2 py-2 mt-n1 me-4">
//                                         <input
//                                             type="checkbox"
//                                             className="form-check-input"
//                                             id="wishlist-master"
//                                             checked={selectedItems.length === items.length && items.length > 0}
//                                             onChange={(e) => handleSelectAll(e.target.checked)}
//                                             disabled={loading.items || items.length === 0}
//                                         />
//                                         <label htmlFor="wishlist-master" className="form-check-label animate-target mt-1 ms-2">
//                                             {selectedItems.length === items.length && items.length > 0 ? 'Unselect all' : 'Select all'}
//                                         </label>
//                                     </div>
//                                     <div className="d-flex flex-wrap" id="action-buttons">
//                                         <button
//                                             className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4"
//                                             onClick={handleAddToBasket}
//                                             disabled={selectedItems.length === 0 || loading.action}
//                                         >
//                                             {loading.action ? (
//                                                 <span className="spinner-border spinner-border-sm me-2" role="status" />
//                                             ) : (
//                                                 <i className="ci-shopping-cart fs-base me-2" />
//                                             )}
//                                             <span className="animate-target d-none d-md-inline">Add to cart</span>
//                                         </button>
//                                         <div className="dropdown">
//                                             <button
//                                                 className="nav-link animate-underline px-0 pe-sm-2 py-2 me-4 dropdown-toggle"
//                                                 disabled={selectedItems.length === 0 || loading.action}
//                                                 data-bs-toggle="dropdown"
//                                             >
//                                                 {loading.action ? (
//                                                     <span className="spinner-border spinner-border-sm me-2" role="status" />
//                                                 ) : (
//                                                     <i className="ci-repeat fs-base me-2" />
//                                                 )}
//                                                 <span className="animate-target d-none d-md-inline">Relocate</span>
//                                             </button>
//                                             <div className="dropdown-menu">
//                                                 {lists.filter(list => list.id !== selectedList).map(list => (
//                                                     <button
//                                                         key={list.id}
//                                                         className="dropdown-item"
//                                                         onClick={() => handleRelocate(list.id)}
//                                                     >
//                                                         Move to {list.name}
//                                                     </button>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                         <button
//                                             className="nav-link animate-underline px-0 py-2"
//                                             onClick={handleRemoveSelected}
//                                             disabled={selectedItems.length === 0 || loading.action}
//                                         >
//                                             {loading.action ? (
//                                                 <span className="spinner-border spinner-border-sm me-1" role="status" />
//                                             ) : (
//                                                 <i className="ci-trash fs-base me-1" />
//                                             )}
//                                             <span className="animate-target d-none d-md-inline">Remove selected</span>
//                                         </button>
//                                     </div>
//                                 </div>

//                                 {/* Content area */}
//                                 {loading.items ? (
//                                     <div className="text-center py-5">
//                                         <LoadingSpinner />
//                                         <p className="mt-3">Loading your favorite products...</p>
//                                     </div>
//                                 ) : items.length === 0 ? (
//                                     <div className="text-center py-5">
//                                         <i className="ci-heart-filled display-4 text-muted mb-4" />
//                                         <h3>No items in this list</h3>
//                                         <p className="text-muted">Add some products to your favorites</p>
//                                     </div>
//                                 ) : (
//                                     <div className="row row-cols-2 row-cols-md-3 g-4">
//                                         {items.map(item => (
//                                             <div className="col" key={item.products.id}>
//                                                 <ProductSummary 
//                                                   product={item.products} 
//                                                   showCheckbox={true}
//                                                   isChecked={selectedItems.includes(item.id)}
//                                                   onCheckChange={(checked) => handleItemSelect(item.id, checked)}
//                                                   disabled={loading.action}
//                                                 />
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     );
// };

// export default Favorites;