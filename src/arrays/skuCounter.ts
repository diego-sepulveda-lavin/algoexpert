const orders = [
  {
    lines: [
      { sku: "qwert1", olpn: 35235 },
      { sku: "zxcv52", olpn: 66464 },
    ],
  },
  {
    lines: [
      { sku: "214rz", olpn: 12344 },
      { sku: "6363g", olpn: 55222 },
    ],
  },
];

type orders = {
  lines: {
    sku: string;
    olpn: number;
  }[];
}[];

function countUniqueSkusOlpn(orders: orders) {
  let skus = new Set();
  let olpn = new Set();

  for (const order of orders) {
    for (const line of order.lines) {
      skus.add(line.sku);
      olpn.add(line.olpn);
    }
  }
  return [skus.size, olpn.size];
}

console.log(countUniqueSkusOlpn(orders));
