export const addProduct = (product) => {
    return(
        new Promise(async (res, rej) => {
            try {
                const answer = await fetch('https://68100d8c27f2fdac24101f1f.mockapi.io/products', {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                });

                if (!answer.ok) {
                        throw new Error('Error al agregar el producto.');
                }
                const data = await answer.json();
                        console.log('Producto agregado:', data);
                        res(data)
                        //alert('Producto agregado correctamente');
                } catch (error) {
                    console.error(error.message);
                    //alert('Hubo un problema al agregar el producto.');
                    rej(error.message)
                }
        })
    )
    
};


// PUT
export async function updateProduct(id, product) {
  const res = await fetch(`https://68100d8c27f2fdac24101f1f.mockapi.io/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product)
  });
  if (!res.ok) throw new Error("Error al actualizar producto");
  return res.json();
}

// DELETE
export async function deleteProduct(id) {
  const res = await fetch(`https://68100d8c27f2fdac24101f1f.mockapi.io/products/${id}`, {
    method: "DELETE"
  });
  if (!res.ok) throw new Error("Error al eliminar producto");
  return res.json();
}

// GET
export async function getProducts() {
  const res = await fetch("https://68100d8c27f2fdac24101f1f.mockapi.io/products");
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
}