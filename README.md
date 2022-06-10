#BFPP-Product-Card

Este es un paquete de pruebas de despliegue en NPM

###BYRON PAGUAY

```
import {} from 'bfpd-product-card';
```

```
##Ejemplo
 <ProductCard product={product} initialValues={{ count: 6 }}>
        {({
          reset,
          count,
          increaseBy,
          isMaxCountReached,
          maxCount,
          product,
        }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
