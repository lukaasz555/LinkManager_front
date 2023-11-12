import { postData } from "@/Global/service/global.service";
import { LoginData } from "./vm/LoginData";

export interface AccountDto {
  email: string;
  password: string;
}

export async function loginUser(
  loginData: AccountDto
): Promise<{ token: string }> {
  return postData<LoginData, { token: string }>("/api/auth/login", loginData);
}

export async function createUserFn(accountDto: AccountDto) {
  return await postData<AccountDto, string>("api/auth/register", accountDto);
}
