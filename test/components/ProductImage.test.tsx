import React from 'react';
import rendered from 'react-test-renderer';
import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';
describe('ProductImage', () => {
  test('Debe mostrar la imagen personlizada', () => {
    const wrapper = rendered.create(<ProductImage img="htpp:image.com" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('Debe mostrar la imagen del producto ', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
