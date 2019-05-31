import { RequestConfig } from '../interfaces/requestConfig';
import { WorkstreamCreateRequest } from '../interfaces/workstreamCreateRequest';
import { WorkstreamCreateResponse } from '../interfaces/workstreamCreateResponse';
import { WorkstreamResponse } from '../interfaces/workstreamResponse';
import { OrganisationResponse } from '../interfaces/organisationResponse';
import { OrganisationUpdateRequest } from '../interfaces/organisationUpdateRequest';
import { UserCreateRequest } from '../interfaces/userCreateRequest';
import { GetOrganisationsRequest } from '../interfaces/getOrganisationsRequest';
export interface StreetManagerPartyClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerPartyClient {
    private config;
    private axios;
    constructor(config: StreetManagerPartyClientConfig);
    isAvailable(): Promise<boolean>;
    getWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamId: number): Promise<WorkstreamResponse>;
    getOrganisation(requestConfig: RequestConfig, organisationReference: string): Promise<OrganisationResponse>;
    getOrganisations(requestConfig: RequestConfig, request: GetOrganisationsRequest): Promise<OrganisationResponse[]>;
    createWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamCreateRequest: WorkstreamCreateRequest): Promise<WorkstreamCreateResponse>;
    updateOrganisation(requestConfig: RequestConfig, organisationReference: string, organisationUpdateRequest: OrganisationUpdateRequest): Promise<void>;
    createUser(requestConfig: RequestConfig, userCreateRequest: UserCreateRequest): Promise<void>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
