
    // const products = 
    //   {
    //     _id: '1',
    //     name: 'Hiskywin Full Zip Running Shirts Thermal Workout',
    //     category: 'Shirts',
    //     image: '/images/product-1.jpg',
    //     price: 59,
    //     brand: 'Hiskywin',
    //     rating: 4.5,
    //     numReviews: 10,
    //     countInStock: 6,
    //     canteenName: {
    //         cname: "Canteenname",
    //     }
    //   };
    

export default {
    products: [
        {
            _id: '1',
            name: 'Hiskywin Full Zip Running Shirts Thermal Workout',
            category: 'Shirts',
            image: '/images/product-1.jpg',
            price: 59,
            brand: 'Hiskywin',
            rating: 4.5,
            numReviews: 10,
            countInStock: 6,
            canteenName: {
                cname: "Canteenname",
            },
    ],
}

  console.log(products.canteenName.cname);