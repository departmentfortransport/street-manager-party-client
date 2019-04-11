import { RequestConfig } from '../interfaces/requestConfig';
import { WorkstreamCreateRequest } from '../interfaces/workstreamCreateRequest';
import { WorkstreamCreateResponse } from '../interfaces/workstreamCreateResponse';
import { WorkstreamResponse } from '../interfaces/workstreamResponse';
import { OrganisationResponse } from '../interfaces/organisationResponse';
export interface StreetManagerPartyClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerPartyClient {
    private config;
    private axios;
    constructor(config: StreetManagerPartyClientConfig);
    isAvailable(): Promise<boolean>;
    createWorkstream(requestConfig: RequestConfig, organisationId: string, workstreamCreateRequest: WorkstreamCreateRequest): Promise<WorkstreamCreateResponse>;
    getWorkstreamDetails(requestConfig: RequestConfig, organisationId: string, workstreamId: string): Promise<WorkstreamResponse>;
    getOrganisation(requestConfig: RequestConfig, organisationId: string): Promise<OrganisationResponse>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}