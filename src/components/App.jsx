import { useState } from 'react';
import ShopCard from './ShopCard';
import ShopItem from './ShopItem';
import CardsView from './CardsView';
import ListView from './ListView';
import IconSwitch from './IconSwitch';

const VIEW_LIST = 'view_list';
const VIEW_MODULE = 'view_module';

const App = ({ layout, products }) => {
   const [viewIcon, setViewIcon] = useState(VIEW_MODULE);

   function renderLayout(viewIcon) {
      if (viewIcon === VIEW_MODULE) {
         return <CardsView layout={layout} cards={getShopItems(products, viewIcon)} />;
      }
      return <ListView items={getShopItems(products, viewIcon)} />;
   }

   function getShopItems(products, viewIcon) {
      return products.map((product) => {
         let cardProps = {
            title: product.name,
            caption: product.color,
            img: product.img,
            price: `$${product.price}`,
         };

         return viewIcon === VIEW_LIST ? <ShopCard {...cardProps} /> : <ShopItem {...cardProps} />;
      });
   }

   function handlerSwitch(viewIcon) {
      viewIcon === VIEW_MODULE ? setViewIcon(VIEW_LIST) : setViewIcon(VIEW_MODULE);
      console.log('сменился тип вывода');
   }

   return (
      <div>
         <div className='toolbar'>
            <IconSwitch icon={viewIcon} onSwitch={() => handlerSwitch(viewIcon)} />
         </div>
         {renderLayout(viewIcon)}
      </div>
   );
};

export default App;
