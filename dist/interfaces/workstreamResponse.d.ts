import { WorkstreamStatus } from './referenceTypes';
export interface WorkstreamResponse {
    workstream_id: number;
    status: WorkstreamStatus;
    prefix: string;
    name: string;
    description?: string;
    contact_name?: string;
    contact_number?: string;
    contact_email?: string;
}
