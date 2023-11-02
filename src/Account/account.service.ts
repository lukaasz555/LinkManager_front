import { postData } from "@/Global/service/global.service";
import { LoginData } from "./vm/LoginData";

interface AccountDto {
  email: string;
  password: string;
}

export async function loginUser(
  loginData: AccountDto
): Promise<{ token: string }> {
  return postData<LoginData, { token: string }>(
    "/api/v1/auth/login",
    loginData
  );
}

export async function registerUser(registerDto: AccountDto): Promise<number> {
  return postData<AccountDto, number>("api/v1/auth/register", registerDto);
}
