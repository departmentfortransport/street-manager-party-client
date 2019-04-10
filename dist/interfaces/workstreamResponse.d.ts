import { WorkstreamStatus } from './referenceTypes';
export interface WorkstreamResponse {
    status: WorkstreamStatus;
    prefix: string;
    name: string;
    description?: string;
    contact_name?: string;
    contact_number?: string;
    contact_email?: string;
}
