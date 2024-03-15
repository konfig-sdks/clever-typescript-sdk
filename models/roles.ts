/*
Data API

Serves the Clever Data API

The version of the OpenAPI document: 3.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Contact } from './contact';
import { DistrictAdmin } from './district-admin';
import { Staff } from './staff';
import { Student } from './student';
import { Teacher } from './teacher';

/**
 * 
 * @export
 * @interface Roles
 */
export interface Roles {
    /**
     * 
     * @type {Contact}
     * @memberof Roles
     */
    'contact'?: Contact;
    /**
     * 
     * @type {DistrictAdmin}
     * @memberof Roles
     */
    'district_admin'?: DistrictAdmin;
    /**
     * 
     * @type {Staff}
     * @memberof Roles
     */
    'staff'?: Staff;
    /**
     * 
     * @type {Student}
     * @memberof Roles
     */
    'student'?: Student;
    /**
     * 
     * @type {Teacher}
     * @memberof Roles
     */
    'teacher'?: Teacher;
}
