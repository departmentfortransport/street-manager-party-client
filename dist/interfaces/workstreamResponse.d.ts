import { WorkstreamStatusResponse } from './referenceTypes';
export interface WorkstreamResponse {
    status: WorkstreamStatusResponse;
    status_string: string;
    prefix: string;
    name: string;
    description?: string;
    contact_name?: string;
    contact_number?: string;
    contact_email?: string;
    organisation_reference: string;
}
