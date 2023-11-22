import { postData } from "@/Global/service/global.service";
export interface AccountDto {
  email: string;
  password: string;
}

export async function postAccountDto(accountDto: AccountDto) {
  return await postData<AccountDto, string>("api/auth/register", accountDto);
}
