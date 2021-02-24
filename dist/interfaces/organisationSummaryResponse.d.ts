import { OrganisationStatusResponse } from './referenceTypes';
export interface OrganisationSummaryResponse {
    name: string;
    organisation_reference: string;
    organisation_status?: OrganisationStatusResponse;
    organisation_status_string?: string;
}
