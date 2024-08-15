# Stencil Component Starter
El componente de tabla  consume un api, realizado en stencil para proceder a  instalarlo y hacerle arreglos para que se ejecute:
```bash
git clone https://github.com/Ucijessy78/componente-01-jybarberan.git
cd componente-01-jybarberan
```

and run:

```bash
npm install
npm start
```

Para realizar el componente de produccion,  se ejecuta:

```bash
npm run build
```


### Aplicación del componente en tu proyecto

El proyecto se llama `proyecto-ejemplo`, para usar `mi-tabla` en cualquier sitio web,  se inserta  en el index.html:

```html
<mi-tabla api-url="api aqui"></mi-tabla>
```

## Ejemplo 2

Por ejemplo, para usar el componente `<mi-tabla />` en un proyecto de react tu puedes importar el componente directamente asi:

```tsx

function App() {
  return (
    <>
      <div>
        <mi-tabla
          api-url="tu api aqui"
        ></mi-tabla>
      </div>
    </>
  );
}

export default App;
```
