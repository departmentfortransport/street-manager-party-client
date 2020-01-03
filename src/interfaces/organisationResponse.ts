import { OrganisationType } from './referenceTypes'
import { OrganisationSummaryResponse } from './organisationSummaryResponse'

export interface OrganisationResponse extends OrganisationSummaryResponse {
  address_line_one: string
  address_line_two?: string
  email: string
  locality?: string
  phone_number: string
  postcode: string
  town?: string
  prefix: string
  organisation_type: OrganisationType
  contractors?: OrganisationSummaryResponse[]
  is_hs2_applicable: boolean
}
