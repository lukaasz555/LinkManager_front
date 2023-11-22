import { postData } from "@/Global/service/global.service";
export interface AccountDto {
  email: string;
  password: string;
}

export async function accountRegister(accountDto: AccountDto) {
  return await postData<AccountDto, string>("api/auth/register", accountDto);
}

export async function accountLogin(accountDto: AccountDto) {
  return await postData<AccountDto, string>("api/auth/login", accountDto);
}
