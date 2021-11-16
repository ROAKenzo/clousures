const facturas = [];
const itemEjem = [
  { id: 1, price: 20, cantidad: 1 },
  { id: 2, price: 15, cantidad: 2 },
];
const nuevaFactura = (id, nombreCliente, fecha, items) => {
  facturas.push({ id, nombreCliente, fecha, items: items });
};

const verFacturas = () => console.log(facturas);

nuevaFactura(001, "Rivaldo", "20/06/2020", [
  { id: 1, price: 20, cantidad: 1 },
]);
nuevaFactura(002, "Juan", "21/06/2020", itemEjem);
verFacturas();
