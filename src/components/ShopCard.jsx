import Button from './Button';

const ShopCard = ({ title, caption, img, price }) => {
   return (
      <div className='shop-card'>
         <div className='title'>{title}</div>
         <div className='desc'>{caption}</div>
         <div className='slider'>
            <figure>
               <img src={img} alt={title} />
            </figure>
         </div>
         <div className='cta'>
            <div className='price'>{price}</div>
            <Button label='Add to cart' />
         </div>
      </div>
   );
};

export default ShopCard;
