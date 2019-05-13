import { RequestConfig } from '../interfaces/requestConfig';
import { WorkstreamCreateRequest } from '../interfaces/workstreamCreateRequest';
import { WorkstreamCreateResponse } from '../interfaces/workstreamCreateResponse';
import { WorkstreamResponse } from '../interfaces/workstreamResponse';
import { OrganisationResponse } from '../interfaces/organisationResponse';
import { OrganisationUpdateRequest } from '../interfaces/organisationUpdateRequest';
export interface StreetManagerPartyClientConfig {
    baseURL: string;
    timeout?: number;
}
export declare class StreetManagerPartyClient {
    private config;
    private axios;
    constructor(config: StreetManagerPartyClientConfig);
    isAvailable(): Promise<boolean>;
    getWorkstream(requestConfig: RequestConfig, swaCode: string, workstreamId: number): Promise<WorkstreamResponse>;
    getOrganisation(requestConfig: RequestConfig, swaCode: string): Promise<OrganisationResponse>;
    getWorkstreams(requestConfig: RequestConfig, swaCode: string): Promise<WorkstreamResponse[]>;
    createWorkstream(requestConfig: RequestConfig, swaCode: string, workstreamCreateRequest: WorkstreamCreateRequest): Promise<WorkstreamCreateResponse>;
    updateOrganisation(requestConfig: RequestConfig, swaCode: string, organisationUpdateRequest: OrganisationUpdateRequest): Promise<void>;
    private httpHandler;
    private handleError;
    private generateRequestConfig;
}
