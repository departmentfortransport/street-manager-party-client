import { OrganisationSummaryResponse } from './organisationSummaryResponse';
export interface UserResponse {
    organisation_reference: string;
    contracts?: OrganisationSummaryResponse[];
}
