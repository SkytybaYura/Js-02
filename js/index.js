// // for (let i = 0; i<100; i = i + 2) {
// //     if(i % 2 == 0)console.log(i);
// // }

// let  i = 0;
// // while (i < 100) {
// //     console.log(i);
// //     i++;
// // }


// do {
//     console.log(i);
//     i++;
// }
// while (i < 100)

const product = ['Tesla X', 'Ford F150'];
// console.log(product[1]);
product[2] = 'Audi A6';
product.push('bmw');
product.push('skoda');
product[10] = 'lexus nx ';

console.log(product.length);

// for(let i = 0; 1 < product.length; i++){
//     console.log(product[i]);
// }

product.forEach(el => console.log(el));

