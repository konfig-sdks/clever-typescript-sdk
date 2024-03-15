/*
Data API

Serves the Clever Data API

The version of the OpenAPI document: 3.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Link } from './link';
import { UserResponse } from './user-response';

/**
 * 
 * @export
 * @interface UsersResponse
 */
export interface UsersResponse {
    /**
     * 
     * @type {Array<UserResponse>}
     * @memberof UsersResponse
     */
    'data'?: Array<UserResponse>;
    /**
     * 
     * @type {Array<Link>}
     * @memberof UsersResponse
     */
    'links'?: Array<Link>;
}
