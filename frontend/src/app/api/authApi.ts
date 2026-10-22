import type { IAuthPayLoad } from "@/shared/interface/auth/authPayLoad.interface";
import { privateApi } from "@/app/api/axiosInstance";
import type { IUser } from "@/shared/interface/auth/user.interface";

export class AuthApiService {
  private async graphqlRequest<T>(
    query: string,
    variables?: Record<string, any>,
  ): Promise<T> {
    const response = await privateApi.post("/graphql", {
      query,
      variables,
    });

    if (response.data.errors && response.data.errors.length > 0) {
      const errorMessage = response.data.errors
        .map((err: any) => err.message)
        .join(", ");
      throw new Error(errorMessage || "GraphQL Error");
    }

    return response.data.data;
  }

  async register(
    email: string,
    password: string,
    first_name: string | null,
    last_name: string,
  ): Promise<IAuthPayLoad> {
    const mutation = `
      mutation Register($email: String!, $password: String!, $first_name: String, $last_name: String!){
        register(input: {email: $email, password: $password, first_name: $first_name, last_name: $last_name}){
          access_token
          user{
            id
            email
            first_name
            last_name
            role
            created_at
            updated_at
          }
        }
      }
    `;
    const data = await this.graphqlRequest<{ register: IAuthPayLoad }>(
      mutation,
      { email, password, first_name, last_name },
    );
    return data.register;
  }

  async login(email: string, password: string): Promise<IAuthPayLoad> {
    const mutation = `
      mutation Login($email: String!, $password: String!){
        login(input: {email: $email, password: $password}){
          access_token
          user{
            id
            email
            first_name
            last_name
            role
            created_at
            updated_at
          }
        }
      }
    `;
    const data = await this.graphqlRequest<{ login: IAuthPayLoad }>(mutation, {
      email,
      password,
    });
    return data.login;
  }

  async refreshToken(): Promise<IAuthPayLoad> {
    const mutation = `
      mutation RefreshToken{
        refreshToken{
          access_token
          user{
            id
            email
            first_name
            last_name
            role
            created_at
            updated_at
          }
       }
      }
    `;
    const data = await this.graphqlRequest<{ refreshToken: IAuthPayLoad }>(
      mutation,
    );
    return data.refreshToken;
  }

  async logout(): Promise<boolean> {
    const mutation = `
      mutation Logout{
        logout
      }
    `;
    const data = await this.graphqlRequest<{ logout: boolean }>(mutation);
    return data.logout;
  }

  async queryMe(): Promise<IUser> {
    const query = `
      query Me{
        me{
          id
          email
          first_name
          last_name
          role
          created_at
          updated_at
        }
      }
    `;
    const data = await this.graphqlRequest<{ me: IUser }>(query);
    return data.me;
  }
}

export const authApi = new AuthApiService();
