/* tslint:disable */
/* eslint-disable */
/*
Data API

Serves the Clever Data API

The version of the OpenAPI document: 3.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { DistrictResponse } from '../models';
// @ts-ignore
import { NotFound } from '../models';
// @ts-ignore
import { SchoolsResponse } from '../models';
// @ts-ignore
import { SectionsResponse } from '../models';
// @ts-ignore
import { TermResponse } from '../models';
// @ts-ignore
import { TermsResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TermsApi - axios parameter creator
 * @export
 */
export const TermsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the district for a term
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDistrictById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDistrictById', 'id', id)
            const localVarPath = `/terms/{id}/district`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/terms/{id}/district',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of terms
         * @param {number} [limit] 
         * @param {string} [startingAfter] 
         * @param {string} [endingBefore] 
         * @param {'' | 'true' | 'false' | 'undefined'} [count] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList: async (limit?: number, startingAfter?: string, endingBefore?: string, count?: '' | 'true' | 'false' | 'undefined', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/terms`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth", [], configuration)
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (startingAfter !== undefined) {
                localVarQueryParameter['starting_after'] = startingAfter;
            }

            if (endingBefore !== undefined) {
                localVarQueryParameter['ending_before'] = endingBefore;
            }

            if (count !== undefined) {
                localVarQueryParameter['count'] = count;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/terms',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the schools for a term
         * @param {string} id 
         * @param {number} [limit] 
         * @param {string} [startingAfter] 
         * @param {string} [endingBefore] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSchoolsForTerm: async (id: string, limit?: number, startingAfter?: string, endingBefore?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSchoolsForTerm', 'id', id)
            const localVarPath = `/terms/{id}/schools`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth", [], configuration)
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (startingAfter !== undefined) {
                localVarQueryParameter['starting_after'] = startingAfter;
            }

            if (endingBefore !== undefined) {
                localVarQueryParameter['ending_before'] = endingBefore;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/terms/{id}/schools',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the sections for a term
         * @param {string} id 
         * @param {number} [limit] 
         * @param {string} [startingAfter] 
         * @param {string} [endingBefore] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSections: async (id: string, limit?: number, startingAfter?: string, endingBefore?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSections', 'id', id)
            const localVarPath = `/terms/{id}/sections`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth", [], configuration)
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (startingAfter !== undefined) {
                localVarQueryParameter['starting_after'] = startingAfter;
            }

            if (endingBefore !== undefined) {
                localVarQueryParameter['ending_before'] = endingBefore;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/terms/{id}/sections',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a specific term
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificTerm: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSpecificTerm', 'id', id)
            const localVarPath = `/terms/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/terms/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TermsApi - functional programming interface
 * @export
 */
export const TermsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TermsApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the district for a term
         * @param {TermsApiGetDistrictByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDistrictById(requestParameters: TermsApiGetDistrictByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DistrictResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDistrictById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of terms
         * @param {TermsApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getList(requestParameters: TermsApiGetListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TermsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getList(requestParameters.limit, requestParameters.startingAfter, requestParameters.endingBefore, requestParameters.count, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the schools for a term
         * @param {TermsApiGetSchoolsForTermRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSchoolsForTerm(requestParameters: TermsApiGetSchoolsForTermRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SchoolsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSchoolsForTerm(requestParameters.id, requestParameters.limit, requestParameters.startingAfter, requestParameters.endingBefore, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the sections for a term
         * @param {TermsApiGetSectionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSections(requestParameters: TermsApiGetSectionsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SectionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSections(requestParameters.id, requestParameters.limit, requestParameters.startingAfter, requestParameters.endingBefore, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a specific term
         * @param {TermsApiGetSpecificTermRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecificTerm(requestParameters: TermsApiGetSpecificTermRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TermResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecificTerm(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TermsApi - factory interface
 * @export
 */
export const TermsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TermsApiFp(configuration)
    return {
        /**
         * Returns the district for a term
         * @param {TermsApiGetDistrictByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDistrictById(requestParameters: TermsApiGetDistrictByIdRequest, options?: AxiosRequestConfig): AxiosPromise<DistrictResponse> {
            return localVarFp.getDistrictById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of terms
         * @param {TermsApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(requestParameters: TermsApiGetListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<TermsResponse> {
            return localVarFp.getList(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the schools for a term
         * @param {TermsApiGetSchoolsForTermRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSchoolsForTerm(requestParameters: TermsApiGetSchoolsForTermRequest, options?: AxiosRequestConfig): AxiosPromise<SchoolsResponse> {
            return localVarFp.getSchoolsForTerm(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the sections for a term
         * @param {TermsApiGetSectionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSections(requestParameters: TermsApiGetSectionsRequest, options?: AxiosRequestConfig): AxiosPromise<SectionsResponse> {
            return localVarFp.getSections(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a specific term
         * @param {TermsApiGetSpecificTermRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificTerm(requestParameters: TermsApiGetSpecificTermRequest, options?: AxiosRequestConfig): AxiosPromise<TermResponse> {
            return localVarFp.getSpecificTerm(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDistrictById operation in TermsApi.
 * @export
 * @interface TermsApiGetDistrictByIdRequest
 */
export type TermsApiGetDistrictByIdRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof TermsApiGetDistrictById
    */
    readonly id: string
    
}

/**
 * Request parameters for getList operation in TermsApi.
 * @export
 * @interface TermsApiGetListRequest
 */
export type TermsApiGetListRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof TermsApiGetList
    */
    readonly limit?: number
    
    /**
    * 
    * @type {string}
    * @memberof TermsApiGetList
    */
    readonly startingAfter?: string
    
    /**
    * 
    * @type {string}
    * @memberof TermsApiGetList
    */
    readonly endingBefore?: string
    
    /**
    * 
    * @type {'' | 'true' | 'false' | 'undefined'}
    * @memberof TermsApiGetList
    */
    readonly count?: '' | 'true' | 'false' | 'undefined'
    
}

/**
 * Request parameters for getSchoolsForTerm operation in TermsApi.
 * @export
 * @interface TermsApiGetSchoolsForTermRequest
 */
export type TermsApiGetSchoolsForTermRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof TermsApiGetSchoolsForTerm
    */
    readonly id: string
    
    /**
    * 
    * @type {number}
    * @memberof TermsApiGetSchoolsForTerm
    */
    readonly limit?: number
    
    /**
    * 
    * @type {string}
    * @memberof TermsApiGetSchoolsForTerm
    */
    readonly startingAfter?: string
    
    /**
    * 
    * @type {string}
    * @memberof TermsApiGetSchoolsForTerm
    */
    readonly endingBefore?: string
    
}

/**
 * Request parameters for getSections operation in TermsApi.
 * @export
 * @interface TermsApiGetSectionsRequest
 */
export type TermsApiGetSectionsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof TermsApiGetSections
    */
    readonly id: string
    
    /**
    * 
    * @type {number}
    * @memberof TermsApiGetSections
    */
    readonly limit?: number
    
    /**
    * 
    * @type {string}
    * @memberof TermsApiGetSections
    */
    readonly startingAfter?: string
    
    /**
    * 
    * @type {string}
    * @memberof TermsApiGetSections
    */
    readonly endingBefore?: string
    
}

/**
 * Request parameters for getSpecificTerm operation in TermsApi.
 * @export
 * @interface TermsApiGetSpecificTermRequest
 */
export type TermsApiGetSpecificTermRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof TermsApiGetSpecificTerm
    */
    readonly id: string
    
}

/**
 * TermsApiGenerated - object-oriented interface
 * @export
 * @class TermsApiGenerated
 * @extends {BaseAPI}
 */
export class TermsApiGenerated extends BaseAPI {
    /**
     * Returns the district for a term
     * @param {TermsApiGetDistrictByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsApiGenerated
     */
    public getDistrictById(requestParameters: TermsApiGetDistrictByIdRequest, options?: AxiosRequestConfig) {
        return TermsApiFp(this.configuration).getDistrictById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of terms
     * @param {TermsApiGetListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsApiGenerated
     */
    public getList(requestParameters: TermsApiGetListRequest = {}, options?: AxiosRequestConfig) {
        return TermsApiFp(this.configuration).getList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the schools for a term
     * @param {TermsApiGetSchoolsForTermRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsApiGenerated
     */
    public getSchoolsForTerm(requestParameters: TermsApiGetSchoolsForTermRequest, options?: AxiosRequestConfig) {
        return TermsApiFp(this.configuration).getSchoolsForTerm(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the sections for a term
     * @param {TermsApiGetSectionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsApiGenerated
     */
    public getSections(requestParameters: TermsApiGetSectionsRequest, options?: AxiosRequestConfig) {
        return TermsApiFp(this.configuration).getSections(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a specific term
     * @param {TermsApiGetSpecificTermRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TermsApiGenerated
     */
    public getSpecificTerm(requestParameters: TermsApiGetSpecificTermRequest, options?: AxiosRequestConfig) {
        return TermsApiFp(this.configuration).getSpecificTerm(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
