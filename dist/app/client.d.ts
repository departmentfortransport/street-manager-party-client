import { RequestConfig } from '../interfaces/requestConfig';
import { WorkstreamCreateRequest } from '../interfaces/workstreamCreateRequest';
import { WorkstreamCreateResponse } from '../interfaces/workstreamCreateResponse';
import { WorkstreamResponse } from '../interfaces/workstreamResponse';
import { WorkstreamUpdateRequest } from '../interfaces/workstreamUpdateRequest';
import { OrganisationResponse } from '../interfaces/organisationResponse';
import { OrganisationUpdateRequest } from '../interfaces/organisationUpdateRequest';
import { UserCreateRequest } from '../interfaces/userCreateRequest';
import { GetOrganisationsRequest } from '../interfaces/getOrganisationsRequest';
import { OrganisationContractsCreateRequest } from '../interfaces/organisationContractsCreateRequest';
import { UserResponse } from '../interfaces/userResponse';
import { TokenRefreshResponse } from '../interfaces/tokenRefreshResponse';
import { TokenRefreshRequest } from '../interfaces/tokenRefreshRequest';
import { LogoutRequest } from '../interfaces/logoutRequest';
import { UserForgotPasswordRequest } from '../interfaces/userForgotPasswordRequest';
import { UserResetPasswordRequest } from '../interfaces/userResetPasswordRequest';
import { InviteUserRequest } from '../interfaces/inviteUserRequest';
import { SetPasswordRequest } from '../interfaces/setPasswordRequest';
import { SetPasswordResponse } from '../interfaces/setPasswordResponse';
import { RemoveUserRequest } from '../interfaces/removeUserRequest';
import { InviteAdminRequest } from '../interfaces/inviteAdminRequest';
import { OrganisationSummaryResponse } from '../interfaces/organisationSummaryResponse';
export interface StreetManagerPartyClientConfig {
    baseURL: string;
    timeout?: number;
    disableCertificateVerification?: boolean;
}
export declare class StreetManagerPartyClient {
    private config;
    private axios;
    constructor(config: StreetManagerPartyClientConfig);
    isAvailable(): Promise<boolean>;
    refreshTokens(requestConfig: RequestConfig, tokenRefreshRequest: TokenRefreshRequest): Promise<TokenRefreshResponse>;
    logout(requestConfig: RequestConfig, logoutRequest: LogoutRequest): Promise<void>;
    getWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamPrefix: string): Promise<WorkstreamResponse>;
    getWorkstreams(requestConfig: RequestConfig, organisationReference: string): Promise<WorkstreamResponse[]>;
    createWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamCreateRequest: WorkstreamCreateRequest): Promise<WorkstreamCreateResponse>;
    updateWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamPrefix: string, workstreamUpdateRequest: WorkstreamUpdateRequest): Promise<void>;
    getOrganisation(requestConfig: RequestConfig, organisationReference: string): Promise<OrganisationResponse>;
    getOrganisations(requestConfig: RequestConfig, request: GetOrganisationsRequest): Promise<OrganisationSummaryResponse[]>;
    updateOrganisation(requestConfig: RequestConfig, organisationReference: string, organisationUpdateRequest: OrganisationUpdateRequest): Promise<void>;
    createOrganisationContracts(requestConfig: RequestConfig, organisationReference: string, organisationContractsCreateRequest: OrganisationContractsCreateRequest): Promise<void>;
    createUser(requestConfig: RequestConfig, userCreateRequest: UserCreateRequest): Promise<void>;
    getUser(requestConfig: RequestConfig, email: string): Promise<UserResponse>;
    forgotPassword(requestConfig: RequestConfig, userForgotPasswordRequest: UserForgotPasswordRequest): Promise<void>;
    resetPassword(requestConfig: RequestConfig, userResetPasswordRequest: UserResetPasswordRequest): Promise<void>;
    deleteOrganisationContract(requestConfig: RequestConfig, organisationReference: string, contractorOrganisationReference: string): Promise<void>;
    inviteUser(requestConfig: RequestConfig, inviteUserRequest: InviteUserRequest): Promise<void>;
    inviteAdmin(requestConfig: RequestConfig, inviteAdminRequest: InviteAdminRequest): Promise<void>;
    setPassword(requestConfig: RequestConfig, setPasswordRequest: SetPasswordRequest): Promise<SetPasswordResponse>;
    removeUser(requestConfig: RequestConfig, removeUserRequest: RemoveUserRequest): Promise<void>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
