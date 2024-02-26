import { Category } from "@/Main/models/Category";
import { getData, postData } from "@/Global/service/global.service";

export async function getCategories(): Promise<Category[]> {
  return await getData<Category[]>("/categories");
}

interface PostCategoryDto {
  name: string;
  color: string;
}

export async function addCategory(data: PostCategoryDto) {
  return await postData<PostCategoryDto, Category[]>("/categories", data);
}
