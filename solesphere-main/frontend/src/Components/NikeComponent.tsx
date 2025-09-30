import "../CSS/header.scss";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';

interface NikeComponentProps {
    arr: Array<{
        id: number;
        imageURL: string;
        type: string;
        productCategory: string;
        productName: string;
        price: number;
    }>;
    updateCartCount: (count: number) => void;
    updateWishlistCount: (count: number) => void;
}

// Functional Home Component
export default function NikeComponent(props: NikeComponentProps) {

    const addToCart = (item: {
        id: number;
        imageURL: string;
        type: string;
        productCategory: string;
        productName: string;
        price: number;
    }) => {
        let cart = localStorage.getItem("cart");
        if(cart) {
            let products = JSON.parse(cart);
            let filteredItem = products.filter((i: { id: number }) => i.id === item.id);
            if(filteredItem.length === 0) {
                products.push(item);
                localStorage.setItem("cart", JSON.stringify(products));
            }
            props.updateCartCount(products.length);
        } else {
            localStorage.setItem("cart", JSON.stringify([item]));
            props.updateCartCount(1);
        }
    }

    const addToWishList = (item: {
        id: number;
        imageURL: string;
        type: string;
        productCategory: string;
        productName: string;
        price: number;
    }) => {
        let wishlist = localStorage.getItem("wishlist");
        if(wishlist) {
            let products = JSON.parse(wishlist);
            let filteredItem = products.filter((i: { id: number }) => i.id === item.id);
            if(filteredItem.length === 0) {
                products.push(item);
                localStorage.setItem("wishlist", JSON.stringify(products));
            }
            props.updateWishlistCount(products.length);
        } else {
            localStorage.setItem("wishlist", JSON.stringify([item]));
            props.updateWishlistCount(1);
        }
    }
    return (
        <>
         
                    <ul className="nike-product-list has-scrollbar">
                            {props.arr && props.arr.map((item) => (
                                 <li className="product-item puma" key={item.id}>
                                 <div className="product-card" tabIndex={0}>
                                     <figure className="card-banner">
                                         <img
                                         src={item.imageURL}
                                             width="312"
                                             height="350"
                                             loading="lazy"
                                             alt="Running Sneaker Shoes"
                                             className="image-contain"
                                         />
                                            
                                            {item.type === "" ? "" : ( <div className="card-badge">{item.type}</div>)}
                                     
                                         <ul className="card-action-list">
                                             <li className="card-action-item">
                                             <button
                                             aria-labelledby="card-label-2"
                                             id="wl1"
                                                className="card-action-btn"
                                                onClick={() => {addToCart(item)}}
                                             >
                                     <ShoppingCartOutlinedIcon sx={{fontSize:"18px"}}/>
                                 </button>
                                             
                                                 <div className="card-action-tooltip" id="card-label-1">
                                                     Add to Cart
                                                 </div>
                                             </li>
 
                                             <li className="card-action-item">
                                                 <button
                                                     className="card-action-btn"
                                                     aria-labelledby="card-label-2"
                                                     id="wl1"
                                                     onClick={() => {addToWishList(item)}}
                                                 >
                                                     <FavoriteBorderOutlinedIcon sx={{fontSize:"18px"}} />
                                                 </button>
 
                                                 <div className="card-action-tooltip" id="card-label-2">
                                                     Add to Wishlist
                                                 </div>
                                             </li>
 
                                             <li className="card-action-item">
                                                 <button
                                                     className="card-action-btn"
                                                     aria-labelledby="card-label-3"
                                                 >
                                                     <VisibilityOutlinedIcon sx={{fontSize:"18px"}} />
                                                 </button>
 
                                                 <div className="card-action-tooltip" id="card-label-3">
                                                     Quick View
                                                 </div>
                                             </li>
 
                                             <li className="card-action-item">
                                                 <button
                                                     className="card-action-btn"
                                                     aria-labelledby="card-label-4"
                                                 >
                                                     <RepeatOutlinedIcon sx={{fontSize:"18px"}} />
                                                 </button>
 
                                                 <div className="card-action-tooltip" id="card-label-4">
                                                     Compare
                                                 </div>
                                             </li>
                                         </ul>
                                     </figure>
 
                                     <div className="card-content">
                                         <div className="card-cat">
                                         <a href="#" className="card-cat-link">
                                                 {item.productCategory}  
                                             </a>
                                         </div>
 
                                         <h3 className="h3 card-title">
                                             <a href="#">{item.productName}</a>
                                         </h3>
 
                                         <data className="card-price" id="price1" value="180.85">
                                             {item.price}
                                         </data>
                                     </div>
                                 </div>
                             </li>
                            ))}


                        </ul>
        </>
    );
}
