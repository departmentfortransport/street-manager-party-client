export interface OrganisationResponse {
  name: string
  swa_code: string
  address_line_one: string
  address_line_two?: string
  email: string
  locality?: string
  phone_number: string
  postcode: string
  town?: string
  prefix: string
}
