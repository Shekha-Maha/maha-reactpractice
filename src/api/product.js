import connector from "../connector/connector";

export const getProduct = async function(options = {}){

    const limit = options.limit || 20;
    const page = options.page || 1;

    const url = `/api/product?limit=${limit}&page=${page}`;
    return connector.get(url);
}

export default {
    getProduct
}
