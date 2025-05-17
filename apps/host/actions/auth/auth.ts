import { repoAxiosInstance } from "@repo/shared";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

interface LoginUserProps {
  emailAddress: string;
  password: string;
}

interface LoginUserResponse {
  value: {
    accessToken: string;
    refreshToken: string;
  };
}

const loginUser = async ({
  emailAddress,
  password,
}: LoginUserProps): Promise<LoginUserResponse> => {
  const response = await repoAxiosInstance.post("/access/login", {
    emailAddress,
    password,
  });
  return response.data;
};

export const useLoginUser = (
  options?: UseMutationOptions<LoginUserResponse, Error, LoginUserProps>
) => {
  return useMutation<LoginUserResponse, Error, LoginUserProps>({
    mutationFn: loginUser,
    ...options,
  });
};
