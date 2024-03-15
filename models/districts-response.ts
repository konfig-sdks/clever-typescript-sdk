/*
Data API

Serves the Clever Data API

The version of the OpenAPI document: 3.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DistrictResponse } from './district-response';
import { Link } from './link';

/**
 * 
 * @export
 * @interface DistrictsResponse
 */
export interface DistrictsResponse {
    /**
     * 
     * @type {Array<DistrictResponse>}
     * @memberof DistrictsResponse
     */
    'data'?: Array<DistrictResponse>;
    /**
     * 
     * @type {Array<Link>}
     * @memberof DistrictsResponse
     */
    'links'?: Array<Link>;
}
