export interface WorkstreamCreateRequest {
    organisation_id: number;
    prefix: number;
    name: string;
    description?: string;
    contact_name?: string;
    contact_number?: string;
    contact_email?: string;
}
