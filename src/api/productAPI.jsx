import axios from "axios";

const BACKEND_URL = "http://localhost:8000/api";

export const addProduct = async (
  { owner, title, unitPrice, quantity, location, description, imgUrl },
  setIsCreationSuccess
) => {
  try {
    await axios
      .post(`${BACKEND_URL}/product/add-product`, {
        owner,
        title,
        unitPrice,
        quantity,
        location,
        description,
        imgUrl,
      })
      .then((result) => {
        setIsCreationSuccess(result.data.success);
      });
  } catch (err) {
    console.log(err);
    setIsCreationSuccess(false);
  }
};

export const viewProductsList = async (setProductList) => {
  try {
    await axios.get(`${BACKEND_URL}/product`).then((result) => {
      if (result) {
        setProductList(result.data.existingProducts);
      } else {
        setProductList([]);
      }
    });
  } catch (err) {
    console.log(err);
    setProductList([]);
  }
};

export const viewProduct = async (productId, setProductDetails) => {
  try {
    await axios.get(`${BACKEND_URL}/product/` + productId).then((result) => {
      console.log(result.data.existingProduct);
      setProductDetails(result.data.existingProduct);
    });
  } catch (err) {
    console.log(err);
    setProductDetails("");
  }
};

export const deleteProduct = async (productId) => {
  try {
    await axios
      .delete(`${BACKEND_URL}/product/` + productId)
      .then(() => {
        console.log("Product deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch {}
};

export const updateProduct = async (
  productId,
  { owner, title, unitPrice, quantity, location, description },
  setIsCreationSuccess
) => {
  const updateProduct = {
    owner,
    title,
    unitPrice,
    quantity,
    location,
    description,
  };
  console.log(updateProduct);
  try {
    await axios
      .put(`${BACKEND_URL}/product/update/` + productId, updateProduct)
      .then((result) => {
        setIsCreationSuccess(result.data.success);
      });
  } catch (err) {
    console.log(err);
    setIsCreationSuccess(false);
  }
};

export const viewProductOnUpdate = async (
  productId,
  setTitle,
  setDescription,
  setOwner,
  setLocation,
  setQty,
  setPrice
) => {
  try {
    await axios.get(`${BACKEND_URL}/product/` + productId).then((result) => {
      setTitle(result.data.existingProduct.title);
      setDescription(result.data.existingProduct.description);
      setOwner(result.data.existingProduct.owner);
      setLocation(result.data.existingProduct.location);
      setQty(result.data.existingProduct.quantity);
      setPrice(result.data.existingProduct.unitPrice);
    });
  } catch (err) {
    console.log(err);
  }
};
