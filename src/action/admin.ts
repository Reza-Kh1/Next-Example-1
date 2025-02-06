import axios from "axios";
const getProducts = async () => {
    const { data } = await axios.get("products")    
    return data
}

const getSingleProduct = async (slug?: string) => {
    const { data } = await axios.get(`products/${slug}`)
    return data
}
export {
    getProducts, getSingleProduct
}