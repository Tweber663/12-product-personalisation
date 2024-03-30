import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';

const Product = props => {

const {title, colors, sizes} = props; 

console.log(sizes)

let colorArr = []

colors.forEach((e) => {
 const firstLetter = e.split('')[0].toUpperCase(); 
 const remainingLetters = e.split('').splice(1, e.length).join("");
 colorArr.push(`color${firstLetter}${remainingLetters}`)
})

// console.log(colorArr);

const [selectedColor, setSelectedColor] = useState(colorArr[0]);
const [selectedSize, setSelectedSize] = useState('S')

console.log(selectedSize)

  return (
    <article className={styles.product }>
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`} />
      </div>
      <div>

        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: 20$</span>
        </header>

        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((s, index) => (
                 <li onClick={() => setSelectedSize(s)} key={index}><button type="button" className={clsx(selectedSize === s && styles.active)}>{s.name}</button></li>
              ))}
            </ul>
          </div>
          
  
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colorArr.map((colorClass, index) => (
                <li  onClick={() => setSelectedColor(colorClass)}  key={index}><button type="button" className={clsx(styles[colorClass], selectedColor === colorClass && styles.active)} /></li>
              ))}
            </ul>
          </div>

          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
};

export default Product;