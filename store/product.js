const defaultState = () => {
    return{
        productName: "",
        price: 0.0,
        category: "",
        supplierName: "",
        quantity: 0,
        imgSrc: ""
    }
};

export const state = () => defaultState();

export const mutations = {
    resetStore: (state) => {
        Object.assign (state,defaultState());
    },
    setProductName: (state,productName) => {
        state.productName = productName;
    },
    setPrice: (state,price)=>{
        state.price = price;
    },
    setCategory: (state,category) => {
        state.category = category;
    },
    setSupplierName: (state,supplierName) => {
        state.supplierName = supplierName;
    },
    setQuantity: (state,quantity) => {
        state.quantity = quantity;
    },
    setImgSrc: (state,imgSrc) => {
        state.imgSrc = imgSrc;
    }

}

export const actions = {

}