/** @format */

import UserProduct, { IUserProduct } from "../schema/user-product.schema";
import { UserProductDTO } from "../DTO";

export const getAllUserProducts = async (): Promise<IUserProduct[]> => {
  try {
    return await UserProduct.find();
  } catch (error) {
    throw new Error(`Failed to fetch product: ${error}`);
  }
};

export const getUserProductById = async (id: string): Promise<IUserProduct> => {
  try {
    const user = await UserProduct.findById(id);
    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error(`Failed to fetch user with id ${id}: ${error}`);
  }
};

export const createUserProduct = async (
  newUserProductJunction: UserProductDTO
): Promise<IUserProduct> => {
  try {
    return await UserProduct.create(newUserProductJunction);
  } catch (error) {
    throw new Error(`Failed to create user: ${error}`);
  }
};
