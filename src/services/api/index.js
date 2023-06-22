const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    products: {
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        allProducts: `${API}/api/${VERSION}/products`,
        addProducts: `${API}/api/${VERSION}/products`,
        getProductId: (id) => `${API}/api/${VERSION}/products/${id}`,
        updateProductId: (id) => `${API}/api/${VERSION}/products/${id}`,
        deleteProductId: (id) => `${API}/api/${VERSION}/products/${id}`,
    },
    users: {
        getUsers: `${API}/api/${VERSION}/users`,
        postUsers: `${API}/api/${VERSION}/users`,
        getUsersId: (id) => `${API}/api/${VERSION}/users/${id}`,
        putUsersId: (id) => `${API}/api/${VERSION}/users/${id}`,
        deleteUsersId: (id) => `${API}/api/${VERSION}/users/${id}`,
    },
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
    },
    categories: {
        getCategories: `${API}/api/${VERSION}/categories`,
        postCategories: `${API}/api/${VERSION}/categories`,
        getCategoriesId: (id) => `${API}/api/${VERSION}/categories/${id}`,
        putCategoriesId: (id) => `${API}/api/${VERSION}/categories/${id}`,
        deleteCategoriesId: (id) => `${API}/api/${VERSION}/categories/${id}`,
    },
    files: {
        upload: `${API}/api/${VERSION}/files/upload`,
        getFile: (filename) => `${API}/api/${VERSION}/files/${filename}`,
    },
};

export default endPoints;
