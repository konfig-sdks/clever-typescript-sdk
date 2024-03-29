/*
Data API

Serves the Clever Data API

The version of the OpenAPI document: 3.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Credentials } from './credentials';

/**
 * 
 * @export
 * @interface Staff
 */
export interface Staff {
    /**
     * 
     * @type {string}
     * @memberof Staff
     */
    'title'?: string | null;
    /**
     * 
     * @type {Credentials}
     * @memberof Staff
     */
    'credentials'?: Credentials;
    /**
     * 
     * @type {string}
     * @memberof Staff
     */
    'department'?: string | null;
    /**
     * 
     * @type {object}
     * @memberof Staff
     */
    'ext'?: object;
    /**
     * 
     * @type {string}
     * @memberof Staff
     */
    'legacy_id'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Staff
     */
    'roles'?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof Staff
     */
    'schools'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Staff
     */
    'staff_id'?: string;
}

