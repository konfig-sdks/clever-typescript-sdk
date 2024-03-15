/*
Data API

Serves the Clever Data API

The version of the OpenAPI document: 3.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Name } from './name';

/**
 * 
 * @export
 * @interface DistrictContact
 */
export interface DistrictContact {
    /**
     * 
     * @type {string}
     * @memberof DistrictContact
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof DistrictContact
     */
    'district'?: string;
    /**
     * 
     * @type {string}
     * @memberof DistrictContact
     */
    'email'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof DistrictContact
     */
    'id'?: string;
    /**
     * 
     * @type {Name}
     * @memberof DistrictContact
     */
    'name'?: Name;
}

