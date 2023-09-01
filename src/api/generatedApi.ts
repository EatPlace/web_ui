import { splitApi as api } from './splitApi';
export const addTagTypes = ['auth', 'users', 'product', 'eat_lists', 'user_products', 'profile'] as const;
const injectedRtkApi = api
    .enhanceEndpoints({
        addTagTypes,
    })
    .injectEndpoints({
        endpoints: (build) => ({
            authenticatedRouteAuthenticatedRouteGet: build.query<
                AuthenticatedRouteAuthenticatedRouteGetApiResponse,
                AuthenticatedRouteAuthenticatedRouteGetApiArg
            >({
                query: () => ({ url: `/authenticated-route` }),
            }),
            authRedisLoginAuthLoginPost: build.mutation<
                AuthRedisLoginAuthLoginPostApiResponse,
                AuthRedisLoginAuthLoginPostApiArg
            >({
                query: (queryArg) => ({
                    url: `/auth/login`,
                    method: 'POST',
                    body: queryArg.bodyAuthRedisLoginAuthLoginPost,
                }),
                invalidatesTags: ['auth'],
            }),
            authRedisLogoutAuthLogoutPost: build.mutation<
                AuthRedisLogoutAuthLogoutPostApiResponse,
                AuthRedisLogoutAuthLogoutPostApiArg
            >({
                query: () => ({ url: `/auth/logout`, method: 'POST' }),
                invalidatesTags: ['auth'],
            }),
            registerRegisterAuthRegisterPost: build.mutation<
                RegisterRegisterAuthRegisterPostApiResponse,
                RegisterRegisterAuthRegisterPostApiArg
            >({
                query: (queryArg) => ({ url: `/auth/register`, method: 'POST', body: queryArg.userCreate }),
                invalidatesTags: ['auth'],
            }),
            resetForgotPasswordAuthForgotPasswordPost: build.mutation<
                ResetForgotPasswordAuthForgotPasswordPostApiResponse,
                ResetForgotPasswordAuthForgotPasswordPostApiArg
            >({
                query: (queryArg) => ({
                    url: `/auth/forgot-password`,
                    method: 'POST',
                    body: queryArg.bodyResetForgotPasswordAuthForgotPasswordPost,
                }),
                invalidatesTags: ['auth'],
            }),
            resetResetPasswordAuthResetPasswordPost: build.mutation<
                ResetResetPasswordAuthResetPasswordPostApiResponse,
                ResetResetPasswordAuthResetPasswordPostApiArg
            >({
                query: (queryArg) => ({
                    url: `/auth/reset-password`,
                    method: 'POST',
                    body: queryArg.bodyResetResetPasswordAuthResetPasswordPost,
                }),
                invalidatesTags: ['auth'],
            }),
            verifyRequestTokenAuthRequestVerifyTokenPost: build.mutation<
                VerifyRequestTokenAuthRequestVerifyTokenPostApiResponse,
                VerifyRequestTokenAuthRequestVerifyTokenPostApiArg
            >({
                query: (queryArg) => ({
                    url: `/auth/request-verify-token`,
                    method: 'POST',
                    body: queryArg.bodyVerifyRequestTokenAuthRequestVerifyTokenPost,
                }),
                invalidatesTags: ['auth'],
            }),
            verifyVerifyAuthVerifyPost: build.mutation<
                VerifyVerifyAuthVerifyPostApiResponse,
                VerifyVerifyAuthVerifyPostApiArg
            >({
                query: (queryArg) => ({
                    url: `/auth/verify`,
                    method: 'POST',
                    body: queryArg.bodyVerifyVerifyAuthVerifyPost,
                }),
                invalidatesTags: ['auth'],
            }),
            oauthGoogleRedisAuthorizeAuthGoogleAuthorizeGet: build.query<
                OauthGoogleRedisAuthorizeAuthGoogleAuthorizeGetApiResponse,
                OauthGoogleRedisAuthorizeAuthGoogleAuthorizeGetApiArg
            >({
                query: (queryArg) => ({ url: `/auth/google/authorize`, params: { scopes: queryArg.scopes } }),
                providesTags: ['auth'],
            }),
            oauthGoogleRedisCallbackAuthGoogleCallbackGet: build.query<
                OauthGoogleRedisCallbackAuthGoogleCallbackGetApiResponse,
                OauthGoogleRedisCallbackAuthGoogleCallbackGetApiArg
            >({
                query: (queryArg) => ({
                    url: `/auth/google/callback`,
                    params: {
                        code: queryArg.code,
                        code_verifier: queryArg.codeVerifier,
                        state: queryArg.state,
                        error: queryArg.error,
                    },
                }),
                providesTags: ['auth'],
            }),
            usersCurrentUserUsersMeGet: build.query<
                UsersCurrentUserUsersMeGetApiResponse,
                UsersCurrentUserUsersMeGetApiArg
            >({
                query: () => ({ url: `/users/me` }),
                providesTags: ['users'],
            }),
            usersPatchCurrentUserUsersMePatch: build.mutation<
                UsersPatchCurrentUserUsersMePatchApiResponse,
                UsersPatchCurrentUserUsersMePatchApiArg
            >({
                query: (queryArg) => ({ url: `/users/me`, method: 'PATCH', body: queryArg.userUpdate }),
                invalidatesTags: ['users'],
            }),
            usersUserUsersIdGet: build.query<UsersUserUsersIdGetApiResponse, UsersUserUsersIdGetApiArg>({
                query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
                providesTags: ['users'],
            }),
            usersPatchUserUsersIdPatch: build.mutation<
                UsersPatchUserUsersIdPatchApiResponse,
                UsersPatchUserUsersIdPatchApiArg
            >({
                query: (queryArg) => ({ url: `/users/${queryArg.id}`, method: 'PATCH', body: queryArg.userUpdate }),
                invalidatesTags: ['users'],
            }),
            usersDeleteUserUsersIdDelete: build.mutation<
                UsersDeleteUserUsersIdDeleteApiResponse,
                UsersDeleteUserUsersIdDeleteApiArg
            >({
                query: (queryArg) => ({ url: `/users/${queryArg.id}`, method: 'DELETE' }),
                invalidatesTags: ['users'],
            }),
            getProductsProductsGet: build.query<GetProductsProductsGetApiResponse, GetProductsProductsGetApiArg>({
                query: (queryArg) => ({ url: `/products`, params: { skip: queryArg.skip, limit: queryArg.limit } }),
                providesTags: ['product'],
            }),
            createNewProductProductsPost: build.mutation<
                CreateNewProductProductsPostApiResponse,
                CreateNewProductProductsPostApiArg
            >({
                query: (queryArg) => ({ url: `/products`, method: 'POST', body: queryArg.productCreate }),
                invalidatesTags: ['product'],
            }),
            getProductByIdProductsProductIdGet: build.query<
                GetProductByIdProductsProductIdGetApiResponse,
                GetProductByIdProductsProductIdGetApiArg
            >({
                query: (queryArg) => ({ url: `/products/${queryArg.productId}` }),
                providesTags: ['product'],
            }),
            deleteExistingProductProductsProductIdDelete: build.mutation<
                DeleteExistingProductProductsProductIdDeleteApiResponse,
                DeleteExistingProductProductsProductIdDeleteApiArg
            >({
                query: (queryArg) => ({ url: `/products/${queryArg.productId}`, method: 'DELETE' }),
                invalidatesTags: ['product'],
            }),
            getEatListsEatListsGet: build.query<GetEatListsEatListsGetApiResponse, GetEatListsEatListsGetApiArg>({
                query: (queryArg) => ({ url: `/eat_lists`, params: { skip: queryArg.skip, limit: queryArg.limit } }),
                providesTags: ['eat_lists'],
            }),
            createNewEatListEatListsPost: build.mutation<
                CreateNewEatListEatListsPostApiResponse,
                CreateNewEatListEatListsPostApiArg
            >({
                query: (queryArg) => ({ url: `/eat_lists`, method: 'POST', body: queryArg.eatListCreate }),
                invalidatesTags: ['eat_lists'],
            }),
            getEatListByIdEatListsListIdGet: build.query<
                GetEatListByIdEatListsListIdGetApiResponse,
                GetEatListByIdEatListsListIdGetApiArg
            >({
                query: (queryArg) => ({ url: `/eat_lists/${queryArg.listId}` }),
                providesTags: ['eat_lists'],
            }),
            deleteExistingEatListEatListsListIdDelete: build.mutation<
                DeleteExistingEatListEatListsListIdDeleteApiResponse,
                DeleteExistingEatListEatListsListIdDeleteApiArg
            >({
                query: (queryArg) => ({ url: `/eat_lists/${queryArg.listId}`, method: 'DELETE' }),
                invalidatesTags: ['eat_lists'],
            }),
            getListProductsEatListsListIdProductsGet: build.query<
                GetListProductsEatListsListIdProductsGetApiResponse,
                GetListProductsEatListsListIdProductsGetApiArg
            >({
                query: (queryArg) => ({ url: `/eat_lists/${queryArg.listId}/products` }),
                providesTags: ['eat_lists'],
            }),
            createNewListProductEatListsListIdProductsPost: build.mutation<
                CreateNewListProductEatListsListIdProductsPostApiResponse,
                CreateNewListProductEatListsListIdProductsPostApiArg
            >({
                query: (queryArg) => ({
                    url: `/eat_lists/${queryArg.listId}/products`,
                    method: 'POST',
                    body: queryArg.eatListProductCreate,
                }),
                invalidatesTags: ['eat_lists'],
            }),
            getUserProductsUserProductsGet: build.query<
                GetUserProductsUserProductsGetApiResponse,
                GetUserProductsUserProductsGetApiArg
            >({
                query: (queryArg) => ({
                    url: `/user_products`,
                    params: { skip: queryArg.skip, limit: queryArg.limit },
                }),
                providesTags: ['user_products'],
            }),
            createNewUserProductUserProductsPost: build.mutation<
                CreateNewUserProductUserProductsPostApiResponse,
                CreateNewUserProductUserProductsPostApiArg
            >({
                query: (queryArg) => ({ url: `/user_products`, method: 'POST', body: queryArg.userProductCreate }),
                invalidatesTags: ['user_products'],
            }),
            getUserProductByIdUserProductsProductIdGet: build.query<
                GetUserProductByIdUserProductsProductIdGetApiResponse,
                GetUserProductByIdUserProductsProductIdGetApiArg
            >({
                query: (queryArg) => ({ url: `/user_products/${queryArg.productId}` }),
                providesTags: ['user_products'],
            }),
            deleteExistingUserProductUserProductsProductIdDelete: build.mutation<
                DeleteExistingUserProductUserProductsProductIdDeleteApiResponse,
                DeleteExistingUserProductUserProductsProductIdDeleteApiArg
            >({
                query: (queryArg) => ({ url: `/user_products/${queryArg.productId}`, method: 'DELETE' }),
                invalidatesTags: ['user_products'],
            }),
            getProfileProfileGet: build.query<GetProfileProfileGetApiResponse, GetProfileProfileGetApiArg>({
                query: () => ({ url: `/profile` }),
                providesTags: ['profile'],
            }),
            getProfileEatListProfileListIdGet: build.query<
                GetProfileEatListProfileListIdGetApiResponse,
                GetProfileEatListProfileListIdGetApiArg
            >({
                query: (queryArg) => ({ url: `/profile/${queryArg.listId}` }),
                providesTags: ['profile'],
            }),
        }),
        overrideExisting: false,
    });
export { injectedRtkApi as TSTApi };
export type AuthenticatedRouteAuthenticatedRouteGetApiResponse = /** status 200 Successful Response */ any;
export type AuthenticatedRouteAuthenticatedRouteGetApiArg = void;
export type AuthRedisLoginAuthLoginPostApiResponse = /** status 200 Successful Response */ BearerResponse;
export type AuthRedisLoginAuthLoginPostApiArg = {
    bodyAuthRedisLoginAuthLoginPost: BodyAuthRedisLoginAuthLoginPost;
};
export type AuthRedisLogoutAuthLogoutPostApiResponse = /** status 200 Successful Response */ any;
export type AuthRedisLogoutAuthLogoutPostApiArg = void;
export type RegisterRegisterAuthRegisterPostApiResponse = /** status 201 Successful Response */ UserRead;
export type RegisterRegisterAuthRegisterPostApiArg = {
    userCreate: UserCreate;
};
export type ResetForgotPasswordAuthForgotPasswordPostApiResponse = /** status 202 Successful Response */ any;
export type ResetForgotPasswordAuthForgotPasswordPostApiArg = {
    bodyResetForgotPasswordAuthForgotPasswordPost: BodyResetForgotPasswordAuthForgotPasswordPost;
};
export type ResetResetPasswordAuthResetPasswordPostApiResponse = /** status 200 Successful Response */ any;
export type ResetResetPasswordAuthResetPasswordPostApiArg = {
    bodyResetResetPasswordAuthResetPasswordPost: BodyResetResetPasswordAuthResetPasswordPost;
};
export type VerifyRequestTokenAuthRequestVerifyTokenPostApiResponse = /** status 202 Successful Response */ any;
export type VerifyRequestTokenAuthRequestVerifyTokenPostApiArg = {
    bodyVerifyRequestTokenAuthRequestVerifyTokenPost: BodyVerifyRequestTokenAuthRequestVerifyTokenPost;
};
export type VerifyVerifyAuthVerifyPostApiResponse = /** status 200 Successful Response */ UserRead;
export type VerifyVerifyAuthVerifyPostApiArg = {
    bodyVerifyVerifyAuthVerifyPost: BodyVerifyVerifyAuthVerifyPost;
};
export type OauthGoogleRedisAuthorizeAuthGoogleAuthorizeGetApiResponse =
    /** status 200 Successful Response */ OAuth2AuthorizeResponse;
export type OauthGoogleRedisAuthorizeAuthGoogleAuthorizeGetApiArg = {
    scopes?: string[];
};
export type OauthGoogleRedisCallbackAuthGoogleCallbackGetApiResponse = /** status 200 Successful Response */ any;
export type OauthGoogleRedisCallbackAuthGoogleCallbackGetApiArg = {
    code?: string | null;
    codeVerifier?: string | null;
    state?: string | null;
    error?: string | null;
};
export type UsersCurrentUserUsersMeGetApiResponse = /** status 200 Successful Response */ UserRead;
export type UsersCurrentUserUsersMeGetApiArg = void;
export type UsersPatchCurrentUserUsersMePatchApiResponse = /** status 200 Successful Response */ UserRead;
export type UsersPatchCurrentUserUsersMePatchApiArg = {
    userUpdate: UserUpdate;
};
export type UsersUserUsersIdGetApiResponse = /** status 200 Successful Response */ UserRead;
export type UsersUserUsersIdGetApiArg = {
    id: string;
};
export type UsersPatchUserUsersIdPatchApiResponse = /** status 200 Successful Response */ UserRead;
export type UsersPatchUserUsersIdPatchApiArg = {
    id: string;
    userUpdate: UserUpdate;
};
export type UsersDeleteUserUsersIdDeleteApiResponse = /** status 204 Successful Response */ undefined;
export type UsersDeleteUserUsersIdDeleteApiArg = {
    id: string;
};
export type GetProductsProductsGetApiResponse = /** status 200 Successful Response */ ProductRead[];
export type GetProductsProductsGetApiArg = {
    skip?: number;
    limit?: number;
};
export type CreateNewProductProductsPostApiResponse = /** status 201 Successful Response */ ProductRead;
export type CreateNewProductProductsPostApiArg = {
    productCreate: ProductCreate;
};
export type GetProductByIdProductsProductIdGetApiResponse = /** status 200 Successful Response */ ProductRead;
export type GetProductByIdProductsProductIdGetApiArg = {
    productId: number;
};
export type DeleteExistingProductProductsProductIdDeleteApiResponse = /** status 200 Successful Response */ any;
export type DeleteExistingProductProductsProductIdDeleteApiArg = {
    productId: number;
};
export type GetEatListsEatListsGetApiResponse = /** status 200 Successful Response */ EatListRead[];
export type GetEatListsEatListsGetApiArg = {
    skip?: number;
    limit?: number;
};
export type CreateNewEatListEatListsPostApiResponse = /** status 201 Successful Response */ EatListRead;
export type CreateNewEatListEatListsPostApiArg = {
    eatListCreate: EatListCreate;
};
export type GetEatListByIdEatListsListIdGetApiResponse = /** status 200 Successful Response */ EatListRead;
export type GetEatListByIdEatListsListIdGetApiArg = {
    listId: number;
};
export type DeleteExistingEatListEatListsListIdDeleteApiResponse = /** status 200 Successful Response */ any;
export type DeleteExistingEatListEatListsListIdDeleteApiArg = {
    listId: number;
};
export type GetListProductsEatListsListIdProductsGetApiResponse =
    /** status 200 Successful Response */ EatListProductRead[];
export type GetListProductsEatListsListIdProductsGetApiArg = {
    listId: number;
};
export type CreateNewListProductEatListsListIdProductsPostApiResponse =
    /** status 201 Successful Response */ EatListProductRead;
export type CreateNewListProductEatListsListIdProductsPostApiArg = {
    listId: number;
    eatListProductCreate: EatListProductCreate;
};
export type GetUserProductsUserProductsGetApiResponse = /** status 200 Successful Response */ UserProductRead[];
export type GetUserProductsUserProductsGetApiArg = {
    skip?: number;
    limit?: number;
};
export type CreateNewUserProductUserProductsPostApiResponse = /** status 201 Successful Response */ UserProductRead;
export type CreateNewUserProductUserProductsPostApiArg = {
    userProductCreate: UserProductCreate;
};
export type GetUserProductByIdUserProductsProductIdGetApiResponse =
    /** status 200 Successful Response */ UserProductRead;
export type GetUserProductByIdUserProductsProductIdGetApiArg = {
    productId: number;
};
export type DeleteExistingUserProductUserProductsProductIdDeleteApiResponse = /** status 200 Successful Response */ any;
export type DeleteExistingUserProductUserProductsProductIdDeleteApiArg = {
    productId: number;
};
export type GetProfileProfileGetApiResponse = /** status 200 Successful Response */ ProfileRead;
export type GetProfileProfileGetApiArg = void;
export type GetProfileEatListProfileListIdGetApiResponse = /** status 200 Successful Response */ ProfileProductList;
export type GetProfileEatListProfileListIdGetApiArg = {
    listId: number;
};
export type BearerResponse = {
    access_token: string;
    token_type: string;
};
export type ErrorModel = {
    detail:
        | string
        | {
              [key: string]: string;
          };
};
export type ValidationError = {
    loc: (string | number)[];
    msg: string;
    type: string;
};
export type HttpValidationError = {
    detail?: ValidationError[];
};
export type BodyAuthRedisLoginAuthLoginPost = {
    grant_type?: string | null;
    username: string;
    password: string;
    scope?: string;
    client_id?: string | null;
    client_secret?: string | null;
};
export type UserRead = {
    id: string;
    email: string;
    is_active: boolean;
    is_superuser: boolean;
    is_verified: boolean;
    username: string | null;
};
export type UserCreate = {
    email: string;
    password: string;
    is_active?: boolean | null;
    is_superuser?: boolean | null;
    is_verified?: boolean | null;
    username: string | null;
};
export type BodyResetForgotPasswordAuthForgotPasswordPost = {
    email: string;
};
export type BodyResetResetPasswordAuthResetPasswordPost = {
    token: string;
    password: string;
};
export type BodyVerifyRequestTokenAuthRequestVerifyTokenPost = {
    email: string;
};
export type BodyVerifyVerifyAuthVerifyPost = {
    token: string;
};
export type OAuth2AuthorizeResponse = {
    authorization_url: string;
};
export type UserUpdate = {
    password?: string | null;
    email?: string | null;
    is_active?: boolean | null;
    is_superuser?: boolean | null;
    is_verified?: boolean | null;
    username?: string | null;
};
export type ProductRead = {
    name: string;
    price: number;
    weight: number;
    link: string;
    currency_id: number;
    type_id: number;
    source_id: number;
    calories: number | null;
    total_fat: number | null;
    total_carb: number | null;
    total_protein: number | null;
    vitamin_d: number | null;
    calcium: number | null;
    iron: number | null;
    potassium: number | null;
    available: boolean | null;
    id: number;
};
export type ProductCreate = {
    name: string;
    price: number;
    weight: number;
    link: string;
    currency_id: number;
    type_id: number;
    source_id: number;
    calories: number | null;
    total_fat: number | null;
    total_carb: number | null;
    total_protein: number | null;
    vitamin_d: number | null;
    calcium: number | null;
    iron: number | null;
    potassium: number | null;
    available: boolean | null;
};
export type EatListRead = {
    name: string;
    id: number;
    user_id: string;
};
export type EatListCreate = {
    name: string;
};
export type EatListProductRead = {
    price: number;
    count: number;
    product_id: number;
    id: number;
    eat_list_id: number;
};
export type EatListProductCreate = {
    price: number;
    count: number;
    product_id: number;
};
export type UserProductRead = {
    product_id: number;
    special_name: string | null;
    like: boolean | null;
    recommend: boolean | null;
    reason: string | null;
    id: number;
    user_id: string;
};
export type UserProductCreate = {
    product_id: number;
    special_name: string | null;
    like: boolean | null;
    recommend: boolean | null;
    reason: string | null;
};
export type ProfileInfo = {
    weight: number | null;
    age: number | null;
    activity: number | null;
};
export type ProfileEatList = {
    id: number;
    name: string;
    total_price_per_month: number | null;
    currency: string | null;
    available: boolean | null;
    calories_per_month: number | null;
    total_fat_per_month: number | null;
    total_carb_per_month: number | null;
    total_protein_per_month: number | null;
    vitamin_d_per_month: number | null;
    calcium_per_month: number | null;
    iron_per_month: number | null;
    potassium_per_month: number | null;
};
export type ProfileRead = {
    username: string;
    info: ProfileInfo | null;
    lists: ProfileEatList[];
};
export type ProfileProduct = {
    id: number;
    name: string;
    price: number;
    count: number;
    currency: string | null;
    available: boolean | null;
    calories_per_month: number | null;
    total_fat_per_month: number | null;
    total_carb_per_month: number | null;
    total_protein_per_month: number | null;
    vitamin_d_per_month: number | null;
    calcium_per_month: number | null;
    iron_per_month: number | null;
    potassium_per_month: number | null;
};
export type ProfileProductList = {
    name: string;
    products: ProfileProduct[];
};
export const {
    useAuthenticatedRouteAuthenticatedRouteGetQuery,
    useAuthRedisLoginAuthLoginPostMutation,
    useAuthRedisLogoutAuthLogoutPostMutation,
    useRegisterRegisterAuthRegisterPostMutation,
    useResetForgotPasswordAuthForgotPasswordPostMutation,
    useResetResetPasswordAuthResetPasswordPostMutation,
    useVerifyRequestTokenAuthRequestVerifyTokenPostMutation,
    useVerifyVerifyAuthVerifyPostMutation,
    useOauthGoogleRedisAuthorizeAuthGoogleAuthorizeGetQuery,
    useOauthGoogleRedisCallbackAuthGoogleCallbackGetQuery,
    useUsersCurrentUserUsersMeGetQuery,
    useUsersPatchCurrentUserUsersMePatchMutation,
    useUsersUserUsersIdGetQuery,
    useUsersPatchUserUsersIdPatchMutation,
    useUsersDeleteUserUsersIdDeleteMutation,
    useGetProductsProductsGetQuery,
    useCreateNewProductProductsPostMutation,
    useGetProductByIdProductsProductIdGetQuery,
    useDeleteExistingProductProductsProductIdDeleteMutation,
    useGetEatListsEatListsGetQuery,
    useCreateNewEatListEatListsPostMutation,
    useGetEatListByIdEatListsListIdGetQuery,
    useDeleteExistingEatListEatListsListIdDeleteMutation,
    useGetListProductsEatListsListIdProductsGetQuery,
    useCreateNewListProductEatListsListIdProductsPostMutation,
    useGetUserProductsUserProductsGetQuery,
    useCreateNewUserProductUserProductsPostMutation,
    useGetUserProductByIdUserProductsProductIdGetQuery,
    useDeleteExistingUserProductUserProductsProductIdDeleteMutation,
    useGetProfileProfileGetQuery,
    useGetProfileEatListProfileListIdGetQuery,
} = injectedRtkApi;
