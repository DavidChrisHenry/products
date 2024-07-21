/** @format */

import Product, { IProduct } from "../schema/products.schema";
import { CreateProductDTO, UpdateProductDTO } from "../DTO";

export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    return await Product.find();
  } catch (error) {
    throw new Error(`Failed to fetch product: ${error}`);
  }
};

export const getProductById = async (id: string): Promise<IProduct> => {
  try {
    const user = await Product.findById(id);
    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error(`Failed to fetch user with id ${id}: ${error}`);
  }
};

export const createProduct = async (
  newUser: CreateProductDTO
): Promise<IProduct> => {
  try {
    return await Product.create(newUser);
  } catch (error) {
    throw new Error(`Failed to create user: ${error}`);
  }
};

export const updateProduct = async (
  id: string,
  userData: UpdateProductDTO
): Promise<IProduct> => {
  try {
    const updatedUser = await Product.findByIdAndUpdate(id, userData, {
      new: true,
    });
    if (updatedUser) {
      return updatedUser;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error(`Failed to update user with id ${id}: ${error}`);
  }
};

export const deleteProduct = async (id: string): Promise<IProduct> => {
  try {
    const deletedUser = await Product.findByIdAndDelete(id);
    if (deletedUser) {
      return deletedUser;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    throw new Error(`Failed to delete user with id ${id}: ${error}`);
  }
};
