export interface OrganisationUpdateRequest {
  /** Max length 255 characters
   * Alphanumeric characters only
   */
  address_line_one: string
  /** Max length 255 characters
   * Alphanumeric characters only
   */
  address_line_two?: string
  /** Max length 255 characters
   * Alphanumeric characters only
   */
  locality?: string
  /** Max length 255 characters
   * Alphanumeric characters only
   */
  town?: string
  /** Max length 8 characters
   * Alphanumeric characters only
   */
  postcode: string
  /** Max length 320 characters
   * Must be valid email
   */
  email: string
  /** Max length 20 characters */
  phone_number: string
}
