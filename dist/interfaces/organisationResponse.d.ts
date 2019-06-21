import { OrganisationType } from './referenceTypes';
export interface OrganisationResponse {
    name: string;
    organisation_reference: string;
    address_line_one: string;
    address_line_two?: string;
    email: string;
    locality?: string;
    phone_number: string;
    postcode: string;
    town?: string;
    prefix: string;
    organisation_type: OrganisationType;
}
