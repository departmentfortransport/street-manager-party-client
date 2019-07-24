import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios'
import * as qs from 'qs'
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
import { TokenRefereshRequest } from '../interfaces/tokenRefreshRequest'
import { LogoutRequest } from '../interfaces/logoutRequest'

export interface StreetManagerPartyClientConfig {
  baseURL: string,
  timeout?: number
}

export class StreetManagerPartyClient {
  private axios: AxiosInstance
  constructor(private config: StreetManagerPartyClientConfig) {
    this.axios = axios.create({
      baseURL: this.config.baseURL,
      timeout: this.config.timeout
    })
  }

  public async isAvailable(): Promise<boolean> {
    try {
      let response: AxiosResponse = await this.axios.get('/status')
      return response.status === OK
    } catch (err) {
      return false
    }
  }

  public async refreshToken(requestConfig: RequestConfig, tokenRefreshRequest: TokenRefereshRequest): Promise<TokenRefreshResponse> {
    return this.httpHandler<TokenRefreshResponse>(() => this.axios.post('/refresh', tokenRefreshRequest, this.generateRequestConfig(requestConfig)))
  }

  public async logout(requestConfig: RequestConfig, logoutRequest: LogoutRequest): Promise<void> {
    return this.httpHandler<void>(() => this.axios.post('/logout', logoutRequest, this.generateRequestConfig(requestConfig)))
  }

  public async getWorkstream(requestConfig: RequestConfig, organisationReference: string, workstreamId: number): Promise<WorkstreamResponse> {
    return this.httpHandler<WorkstreamResponse>(() => this.axios.get(`/organisations/${organisationReference}/workstreams/${workstreamId}`, this.generateRequestConfig(requestConfig)))
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

  public async getOrganisations(requestConfig: RequestConfig, request: GetOrganisationsRequest): Promise<OrganisationResponse[]> {
    return this.httpHandler<OrganisationResponse[]>(() => this.axios.get(`/organisations`, this.generateRequestConfig(requestConfig, request)))
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

  public async deleteOrganisationContract(requestConfig: RequestConfig, organisationReference: string, contractorOrganisationReference: string): Promise<void> {
    return this.httpHandler<void>(() => this.axios.delete(`organisations/${organisationReference}/contractors/${contractorOrganisationReference}`, this.generateRequestConfig(requestConfig)))
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
