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
    getWorkstream(requestConfig: RequestConfig, organisationId: string, workstreamId: number): Promise<WorkstreamResponse>;
    getOrganisation(requestConfig: RequestConfig, organisationId: string): Promise<OrganisationResponse>;
    getWorkstreams(requestConfig: RequestConfig, organisationId: string): Promise<WorkstreamResponse[]>;
    createWorkstream(requestConfig: RequestConfig, organisationId: string, workstreamCreateRequest: WorkstreamCreateRequest): Promise<WorkstreamCreateResponse>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
