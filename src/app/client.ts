import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import * as qs from 'qs'
import { Agent } from 'https'
import { INTERNAL_SERVER_ERROR, OK } from 'http-status-codes'
import { RequestConfig } from '../interfaces/requestConfig'
import { WorkstreamCreateRequest } from '../interfaces/workstreamCreateRequest'
import { WorkstreamCreateResponse } from '../interfaces/workstreamCreateResponse'
import { WorkstreamResponse } from '../interfaces/workstreamResponse'
import { WorkstreamUpdateRequest } from '../interfaces/workstreamUpdateRequest'
import { OrganisationResponse } from '../interfaces/organisationResponse'
import { OrganisationUpdateRequest } from '../interfaces/organisationUpdateRequest'
import { UserCreateRequest } from '../interfaces/userCreateRequest'
import { GetOrganisationsRequest } from '../interfaces/getOrganisationsRequest'
import { OrganisationContractsCreateRequest } from '../interfaces/organisationContractsCreateRequest'
import { UserResponse } from '../interfaces/userResponse'
import { TokenRefreshResponse } from '../interfaces/tokenRefreshResponse'
import { TokenRefreshRequest } from '../interfaces/tokenRefreshRequest'
import { LogoutRequest } from '../interfaces/logoutRequest'
import { UserForgotPasswordRequest } from '../interfaces/userForgotPasswordRequest'
import { UserResetPasswordRequest } from '../interfaces/userResetPasswordRequest'
import { InviteUserRequest } from '../interfaces/inviteUserRequest'
import { SetPasswordRequest } from '../interfaces/setPasswordRequest'
import { SetPasswordResponse } from '../interfaces/setPasswordResponse'
import { RemoveUserRequest } from '../interfaces/removeUserRequest'
import { InviteAdminRequest } from '../interfaces/inviteAdminRequest'
import { OrganisationSummaryResponse } from '../interfaces/organisationSummaryResponse'
import { UpdateUserRolesRequest } from '../interfaces/updateUserRolesRequest'
import { UpdateUserDetailsRequest } from '../interfaces/updateUserDetailsRequest'

export interface StreetManagerPartyClientConfig {
  baseURL: string,
  timeout?: number,
  disableCertificateVerification?: boolean
}

export class StreetManagerPartyClient {
  private axios: AxiosInstance
  constructor(private config: StreetManagerPartyClientConfig) {
    let axiosRequestConfig: AxiosRequestConfig = {
      baseURL: this.config.baseURL,
      timeout: this.config.timeout
    }

    if (this.config.disableCertificateVerification) {
      axiosRequestConfig.httpsAgent = new Agent({
        rejectUnauthorized: false
      })
    }

    this.axios = axios.create(axiosRequestConfig)
  }

  public async isAvailable(): Promise<boolean> {
    try {
      let response: AxiosResponse = await this.axios.get('/status')
      return response.status === OK
    } catch (err) {
      return false
    }
  }

  public async refreshTokens(requestConfig: RequestConfig, tokenRefreshRequest: TokenRefreshRequest): Promise<TokenRefreshResponse> {
    return this.httpHandler<TokenRefreshResponse>(() => this.axios.post('/refresh', tokenRefreshRequest, this.generateRequestConfig(requestConfig)))
  }

  public async logout(requestConfig: RequestConfig, logoutRequest: LogoutRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post('/logout', logoutRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamPrefix: string): Promise<WorkstreamResponse> {
    return this.httpHandler<WorkstreamResponse>(() => this.axios.get(`/organisations/${organisationReference}/workstreams/${workstreamPrefix}`, this.generateRequestConfig(requestConfig)))
  }

  public async getWorkstreams(requestConfig: RequestConfig, organisationReference: string): Promise<WorkstreamResponse[]> {
    return this.httpHandler<WorkstreamResponse[]>(() => this.axios.get(`/organisations/${organisationReference}/workstreams`, this.generateRequestConfig(requestConfig)))
  }

  public async createWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamCreateRequest: WorkstreamCreateRequest): Promise<WorkstreamCreateResponse> {
    return this.httpHandler<WorkstreamCreateResponse>(() => this.axios.post(`/organisations/${organisationReference}/workstreams`, workstreamCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamPrefix: string, workstreamUpdateRequest: WorkstreamUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/organisations/${organisationReference}/workstreams/${workstreamPrefix}`, workstreamUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getOrganisation(requestConfig: RequestConfig, organisationReference: string): Promise<OrganisationResponse> {
    return this.httpHandler<OrganisationResponse>(() => this.axios.get(`/organisations/${organisationReference}`, this.generateRequestConfig(requestConfig)))
  }

  public async getOrganisations(requestConfig: RequestConfig, request: GetOrganisationsRequest): Promise<OrganisationSummaryResponse[]> {
    return this.httpHandler<OrganisationSummaryResponse[]>(() => this.axios.get(`/organisations`, this.generateRequestConfig(requestConfig, request)))
  }

  public async updateOrganisation(requestConfig: RequestConfig, organisationReference: string, organisationUpdateRequest: OrganisationUpdateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/organisations/${organisationReference}`, organisationUpdateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createOrganisationContracts(requestConfig: RequestConfig, organisationReference: string, organisationContractsCreateRequest: OrganisationContractsCreateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/organisations/${organisationReference}/contractors`, organisationContractsCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async createUser(requestConfig: RequestConfig, userCreateRequest: UserCreateRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/users`, userCreateRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getUser(requestConfig: RequestConfig, email: string): Promise<UserResponse> {
    return this.httpHandler<UserResponse>(() => this.axios.get(`/users/${email}`, this.generateRequestConfig(requestConfig)))
  }

  public async forgotPassword(requestConfig: RequestConfig, userForgotPasswordRequest: UserForgotPasswordRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/forgot-password`, userForgotPasswordRequest, this.generateRequestConfig(requestConfig)))
  }

  public async resetPassword(requestConfig: RequestConfig, userResetPasswordRequest: UserResetPasswordRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/reset-password`, userResetPasswordRequest, this.generateRequestConfig(requestConfig)))
  }

  public async deleteOrganisationContract(requestConfig: RequestConfig, organisationReference: string, contractorOrganisationReference: string): Promise<void> {
    return this.httpHandler<void>(() => this.axios.delete(`organisations/${organisationReference}/contractors/${contractorOrganisationReference}`, this.generateRequestConfig(requestConfig)))
  }

  public async inviteUser(requestConfig: RequestConfig, inviteUserRequest: InviteUserRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/invite-user`, inviteUserRequest, this.generateRequestConfig(requestConfig)))
  }

  public async inviteAdmin(requestConfig: RequestConfig, inviteAdminRequest: InviteAdminRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/invite-admin`, inviteAdminRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateUserRoles(requestConfig: RequestConfig, email: string, updateUserRolesRequest: UpdateUserRolesRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/users/${email}/roles`, updateUserRolesRequest, this.generateRequestConfig(requestConfig)))
  }

  public async updateUserDetails(requestConfig: RequestConfig, email: string, updateUserDetailsRequest: UpdateUserDetailsRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.put(`/users/${email}`, updateUserDetailsRequest, this.generateRequestConfig(requestConfig)))
  }

  public async setPassword(requestConfig: RequestConfig, setPasswordRequest: SetPasswordRequest): Promise<SetPasswordResponse> {
    return this.httpHandler<SetPasswordResponse>(() => this.axios.post('/set-password', setPasswordRequest, this.generateRequestConfig(requestConfig)))
  }

  public async removeUser(requestConfig: RequestConfig, removeUserRequest: RemoveUserRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post(`/remove-user`, removeUserRequest, this.generateRequestConfig(requestConfig)))
  }

  private async httpHandler<T>(request: () => AxiosPromise<T>): Promise<T> {
    try {
      let response: AxiosResponse<T> = await request()
      if (response.data) {
        return response.data
      }
    } catch (err) {
      return this.handleError(err)
    }
  }

  private handleError(err) {
    err.status = err.response ? err.response.status : INTERNAL_SERVER_ERROR
    return Promise.reject(err)
  }

  private generateRequestConfig(config: RequestConfig, request?: any): AxiosRequestConfig {
    let requestConfig: AxiosRequestConfig = {
      headers: {
        'x-request-id': config.requestId
      }
    }

    if (config.token) {
      requestConfig.headers.token = config.token
    }

    if (config.frontendToken) {
      requestConfig.headers.frontendToken = config.frontendToken
    }

    if (!request) {
      requestConfig.params = {}
    } else {
      requestConfig.params = request
      requestConfig.paramsSerializer = (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }

    return requestConfig
  }
}
