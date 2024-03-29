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
import { CourseResponse } from '../models';
// @ts-ignore
import { CoursesResponse } from '../models';
// @ts-ignore
import { DistrictResponse } from '../models';
// @ts-ignore
import { NotFound } from '../models';
// @ts-ignore
import { ResourcesResponse } from '../models';
// @ts-ignore
import { SchoolsResponse } from '../models';
// @ts-ignore
import { SectionsResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CoursesApi - axios parameter creator
 * @export
 */
export const CoursesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the district for a course
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDistrict: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getDistrict', 'id', id)
            const localVarPath = `/courses/{id}/district`
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
                pathTemplate: '/courses/{id}/district',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of courses
         * @param {number} [limit] 
         * @param {string} [startingAfter] 
         * @param {string} [endingBefore] 
         * @param {'' | 'true' | 'false' | 'undefined'} [count] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList: async (limit?: number, startingAfter?: string, endingBefore?: string, count?: '' | 'true' | 'false' | 'undefined', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/courses`;
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
                pathTemplate: '/courses',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the resources for a course
         * @param {string} id 
         * @param {number} [limit] 
         * @param {string} [startingAfter] 
         * @param {string} [endingBefore] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResources: async (id: string, limit?: number, startingAfter?: string, endingBefore?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getResources', 'id', id)
            const localVarPath = `/courses/{id}/resources`
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
                pathTemplate: '/courses/{id}/resources',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the schools for a course
         * @param {string} id 
         * @param {number} [limit] 
         * @param {string} [startingAfter] 
         * @param {string} [endingBefore] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSchools: async (id: string, limit?: number, startingAfter?: string, endingBefore?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSchools', 'id', id)
            const localVarPath = `/courses/{id}/schools`
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
                pathTemplate: '/courses/{id}/schools',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns the sections for a course
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
            const localVarPath = `/courses/{id}/sections`
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
                pathTemplate: '/courses/{id}/sections',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a specific course
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificCourse: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getSpecificCourse', 'id', id)
            const localVarPath = `/courses/{id}`
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
                pathTemplate: '/courses/{id}',
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
 * CoursesApi - functional programming interface
 * @export
 */
export const CoursesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CoursesApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the district for a course
         * @param {CoursesApiGetDistrictRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getDistrict(requestParameters: CoursesApiGetDistrictRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DistrictResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getDistrict(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of courses
         * @param {CoursesApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getList(requestParameters: CoursesApiGetListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CoursesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getList(requestParameters.limit, requestParameters.startingAfter, requestParameters.endingBefore, requestParameters.count, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the resources for a course
         * @param {CoursesApiGetResourcesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getResources(requestParameters: CoursesApiGetResourcesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResourcesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getResources(requestParameters.id, requestParameters.limit, requestParameters.startingAfter, requestParameters.endingBefore, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the schools for a course
         * @param {CoursesApiGetSchoolsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSchools(requestParameters: CoursesApiGetSchoolsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SchoolsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSchools(requestParameters.id, requestParameters.limit, requestParameters.startingAfter, requestParameters.endingBefore, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns the sections for a course
         * @param {CoursesApiGetSectionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSections(requestParameters: CoursesApiGetSectionsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SectionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSections(requestParameters.id, requestParameters.limit, requestParameters.startingAfter, requestParameters.endingBefore, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a specific course
         * @param {CoursesApiGetSpecificCourseRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getSpecificCourse(requestParameters: CoursesApiGetSpecificCourseRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CourseResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSpecificCourse(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CoursesApi - factory interface
 * @export
 */
export const CoursesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CoursesApiFp(configuration)
    return {
        /**
         * Returns the district for a course
         * @param {CoursesApiGetDistrictRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getDistrict(requestParameters: CoursesApiGetDistrictRequest, options?: AxiosRequestConfig): AxiosPromise<DistrictResponse> {
            return localVarFp.getDistrict(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of courses
         * @param {CoursesApiGetListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(requestParameters: CoursesApiGetListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<CoursesResponse> {
            return localVarFp.getList(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the resources for a course
         * @param {CoursesApiGetResourcesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getResources(requestParameters: CoursesApiGetResourcesRequest, options?: AxiosRequestConfig): AxiosPromise<ResourcesResponse> {
            return localVarFp.getResources(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the schools for a course
         * @param {CoursesApiGetSchoolsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSchools(requestParameters: CoursesApiGetSchoolsRequest, options?: AxiosRequestConfig): AxiosPromise<SchoolsResponse> {
            return localVarFp.getSchools(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the sections for a course
         * @param {CoursesApiGetSectionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSections(requestParameters: CoursesApiGetSectionsRequest, options?: AxiosRequestConfig): AxiosPromise<SectionsResponse> {
            return localVarFp.getSections(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a specific course
         * @param {CoursesApiGetSpecificCourseRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSpecificCourse(requestParameters: CoursesApiGetSpecificCourseRequest, options?: AxiosRequestConfig): AxiosPromise<CourseResponse> {
            return localVarFp.getSpecificCourse(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getDistrict operation in CoursesApi.
 * @export
 * @interface CoursesApiGetDistrictRequest
 */
export type CoursesApiGetDistrictRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetDistrict
    */
    readonly id: string
    
}

/**
 * Request parameters for getList operation in CoursesApi.
 * @export
 * @interface CoursesApiGetListRequest
 */
export type CoursesApiGetListRequest = {
    
    /**
    * 
    * @type {number}
    * @memberof CoursesApiGetList
    */
    readonly limit?: number
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetList
    */
    readonly startingAfter?: string
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetList
    */
    readonly endingBefore?: string
    
    /**
    * 
    * @type {'' | 'true' | 'false' | 'undefined'}
    * @memberof CoursesApiGetList
    */
    readonly count?: '' | 'true' | 'false' | 'undefined'
    
}

/**
 * Request parameters for getResources operation in CoursesApi.
 * @export
 * @interface CoursesApiGetResourcesRequest
 */
export type CoursesApiGetResourcesRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetResources
    */
    readonly id: string
    
    /**
    * 
    * @type {number}
    * @memberof CoursesApiGetResources
    */
    readonly limit?: number
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetResources
    */
    readonly startingAfter?: string
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetResources
    */
    readonly endingBefore?: string
    
}

/**
 * Request parameters for getSchools operation in CoursesApi.
 * @export
 * @interface CoursesApiGetSchoolsRequest
 */
export type CoursesApiGetSchoolsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetSchools
    */
    readonly id: string
    
    /**
    * 
    * @type {number}
    * @memberof CoursesApiGetSchools
    */
    readonly limit?: number
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetSchools
    */
    readonly startingAfter?: string
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetSchools
    */
    readonly endingBefore?: string
    
}

/**
 * Request parameters for getSections operation in CoursesApi.
 * @export
 * @interface CoursesApiGetSectionsRequest
 */
export type CoursesApiGetSectionsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetSections
    */
    readonly id: string
    
    /**
    * 
    * @type {number}
    * @memberof CoursesApiGetSections
    */
    readonly limit?: number
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetSections
    */
    readonly startingAfter?: string
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetSections
    */
    readonly endingBefore?: string
    
}

/**
 * Request parameters for getSpecificCourse operation in CoursesApi.
 * @export
 * @interface CoursesApiGetSpecificCourseRequest
 */
export type CoursesApiGetSpecificCourseRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof CoursesApiGetSpecificCourse
    */
    readonly id: string
    
}

/**
 * CoursesApiGenerated - object-oriented interface
 * @export
 * @class CoursesApiGenerated
 * @extends {BaseAPI}
 */
export class CoursesApiGenerated extends BaseAPI {
    /**
     * Returns the district for a course
     * @param {CoursesApiGetDistrictRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoursesApiGenerated
     */
    public getDistrict(requestParameters: CoursesApiGetDistrictRequest, options?: AxiosRequestConfig) {
        return CoursesApiFp(this.configuration).getDistrict(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of courses
     * @param {CoursesApiGetListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoursesApiGenerated
     */
    public getList(requestParameters: CoursesApiGetListRequest = {}, options?: AxiosRequestConfig) {
        return CoursesApiFp(this.configuration).getList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the resources for a course
     * @param {CoursesApiGetResourcesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoursesApiGenerated
     */
    public getResources(requestParameters: CoursesApiGetResourcesRequest, options?: AxiosRequestConfig) {
        return CoursesApiFp(this.configuration).getResources(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the schools for a course
     * @param {CoursesApiGetSchoolsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoursesApiGenerated
     */
    public getSchools(requestParameters: CoursesApiGetSchoolsRequest, options?: AxiosRequestConfig) {
        return CoursesApiFp(this.configuration).getSchools(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns the sections for a course
     * @param {CoursesApiGetSectionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoursesApiGenerated
     */
    public getSections(requestParameters: CoursesApiGetSectionsRequest, options?: AxiosRequestConfig) {
        return CoursesApiFp(this.configuration).getSections(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a specific course
     * @param {CoursesApiGetSpecificCourseRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoursesApiGenerated
     */
    public getSpecificCourse(requestParameters: CoursesApiGetSpecificCourseRequest, options?: AxiosRequestConfig) {
        return CoursesApiFp(this.configuration).getSpecificCourse(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
