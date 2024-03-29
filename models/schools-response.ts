/*
Data API

Serves the Clever Data API

The version of the OpenAPI document: 3.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Link } from './link';
import { SchoolResponse } from './school-response';

/**
 * 
 * @export
 * @interface SchoolsResponse
 */
export interface SchoolsResponse {
    /**
     * 
     * @type {Array<SchoolResponse>}
     * @memberof SchoolsResponse
     */
    'data'?: Array<SchoolResponse>;
    /**
     * 
     * @type {Array<Link>}
     * @memberof SchoolsResponse
     */
    'links'?: Array<Link>;
}

