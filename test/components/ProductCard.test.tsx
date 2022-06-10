import React from 'react';
import rendered from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product2 } from '../data/products';
const { act } = rendered;
describe('ProductCard', () => {
  test('debe mostrar el componente correctamaente ', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>
        {() => <h1>Product Card</h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('debe incrementar el contador', () => {
    const wrapper = rendered.create(
      <ProductCard product={product2}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}></button>
          </>
        )}
      </ProductCard>
    );
    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();
    act(() => {
      (tree as any).children[2].props.onClick();
    });
    tree = wrapper.toJSON();
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
