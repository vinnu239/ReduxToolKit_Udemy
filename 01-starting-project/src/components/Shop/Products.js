import ProductItem from './ProductItem';
import classes from './Products.module.css';
import * as data from '../../Product.json';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
// const DummyProducts =[{
//   id:'p1',
//   price:6,
//   title:'My First Book',
//   description:'My first Redux Project'
// },
// {
//   id:'p2',
//   price:8,
//   title:'My second Book',
//   description:'My second Redux Project with HTTP'
// }
// ]

const DummyProducts= data.dummyProducts;


const Products = (props) => {

  const dispatch=useDispatch();
  const movieHandler=()=>{
    dispatch(cartActions.bookToggle());
  }
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <button onClick={movieHandler}>close</button>
      <ul>
        {DummyProducts.map((item)=>(
          <ProductItem
          key={item.id}
          id={item.id}
        title={item.title}
        price={item.price}
        description={item.description}
      />
        )
        
        )}
        
      </ul>
    </section>
  );
};

export default Products;
