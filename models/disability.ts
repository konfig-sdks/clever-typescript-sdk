/*
Data API

Serves the Clever Data API

The version of the OpenAPI document: 3.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface Disability
 */
export interface Disability {
    /**
     * 
     * @type {string}
     * @memberof Disability
     */
    'disability_code'?: DisabilityDisabilityCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof Disability
     */
    'disability_status'?: DisabilityDisabilityStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Disability
     */
    'disability_type'?: DisabilityDisabilityTypeEnum;
}

type DisabilityDisabilityCodeEnum = 'aut' | 'db' | 'dd' | 'emn' | 'hi' | 'id' | 'md' | 'oi' | 'other' | 'ohi' | 'sld' | 'sli' | 'tbi' | 'vi'
type DisabilityDisabilityStatusEnum = 'Y' | 'N' | ''
type DisabilityDisabilityTypeEnum = 'Autism' | 'Deaf-blindness' | 'Developmental delay' | 'Emotional disturbance' | 'Hearing impairment' | 'Intellectual Disability' | 'Multiple disabilities' | 'Orthopedic impairment' | 'Other' | 'Other health impairment' | 'Specific learning disability' | 'Speech or language impairment' | 'Traumatic brain injury' | 'Visual impairment'

