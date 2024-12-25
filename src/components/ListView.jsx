const ListView = ({ items }) => {
   function renderItems(items) {
      return items.map((item, i) => (
         <li className='list-item' key={`li-${i}`}>
            {item}
         </li>
      ));
   }

   return <ul className='list'>{renderItems(items)}</ul>;
};

export default ListView;
