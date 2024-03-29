/*
Data API

Serves the Clever Data API

The version of the OpenAPI document: 3.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Location } from './location';
import { Principal } from './principal';

/**
 * 
 * @export
 * @interface School
 */
export interface School {
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'created'?: string;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'district'?: string;
    /**
     * 
     * @type {object}
     * @memberof School
     */
    'ext'?: object;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'high_grade'?: SchoolHighGradeEnum;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'last_modified'?: string;
    /**
     * 
     * @type {Location}
     * @memberof School
     */
    'location'?: Location;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'low_grade'?: SchoolLowGradeEnum;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'mdr_number'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'nces_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'phone'?: string | null;
    /**
     * 
     * @type {Principal}
     * @memberof School
     */
    'principal'?: Principal;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'school_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'sis_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof School
     */
    'state_id'?: string | null;
}

type SchoolHighGradeEnum = 'InfantToddler' | 'Preschool' | 'PreKindergarten' | 'TransitionalKindergarten' | 'Kindergarten' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | 'PostGraduate' | 'Ungraded' | 'Other' | ''
type SchoolLowGradeEnum = 'InfantToddler' | 'Preschool' | 'PreKindergarten' | 'TransitionalKindergarten' | 'Kindergarten' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | 'PostGraduate' | 'Ungraded' | 'Other' | ''


