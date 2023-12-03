import { postData } from "../service/global.service";

interface AccessTokenDto {
  email: string;
  refreshToken: string;
}

export async function getAccessToken(accessTokenDto: AccessTokenDto) {
  return await postData<AccessTokenDto, string>(
    "/api/refreshToken",
    accessTokenDto
  );
}
