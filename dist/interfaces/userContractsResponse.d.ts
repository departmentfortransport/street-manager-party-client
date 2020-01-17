import { OrganisationSummaryResponse } from './organisationSummaryResponse';
export interface UserContractsResponse {
    organisation_reference: string;
    contracts?: OrganisationSummaryResponse[];
}
