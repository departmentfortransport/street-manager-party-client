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
    getWorkstreams(requestConfig: RequestConfig, organisationReference: string): Promise<WorkstreamResponse[]>;
    createWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamCreateRequest: WorkstreamCreateRequest): Promise<WorkstreamCreateResponse>;
    updateWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamPrefix: string, workstreamUpdateRequest: WorkstreamUpdateRequest): Promise<void>;
    getOrganisation(requestConfig: RequestConfig, organisationReference: string): Promise<OrganisationResponse>;
    getOrganisations(requestConfig: RequestConfig, request: GetOrganisationsRequest): Promise<OrganisationResponse[]>;
    updateOrganisation(requestConfig: RequestConfig, organisationReference: string, organisationUpdateRequest: OrganisationUpdateRequest): Promise<void>;
    createOrganisationContracts(requestConfig: RequestConfig, organisationReference: string, organisationContractsCreateRequest: OrganisationContractsCreateRequest): Promise<void>;
    createUser(requestConfig: RequestConfig, userCreateRequest: UserCreateRequest): Promise<void>;
    deleteOrganisationContract(requestConfig: RequestConfig, organisationReference: string, contractorOrganisationReference: string): Promise<void>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
