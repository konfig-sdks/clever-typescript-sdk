/*
Data API

Serves the Clever Data API

The version of the OpenAPI document: 3.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Credentials } from './credentials';
import { Disability } from './disability';
import { Location } from './location';
import { PreferredName } from './preferred-name';
import { SchoolEnrollment } from './school-enrollment';

/**
 * 
 * @export
 * @interface Student
 */
export interface Student {
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'created'?: string;
    /**
     * 
     * @type {Credentials}
     * @memberof Student
     */
    'credentials'?: Credentials;
    /**
     * 
     * @type {Disability}
     * @memberof Student
     */
    'disability'?: Disability;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'dob'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'ell_status'?: StudentEllStatusEnum;
    /**
     * 
     * @type {Array<SchoolEnrollment>}
     * @memberof Student
     */
    'enrollments'?: Array<SchoolEnrollment>;
    /**
     * 
     * @type {object}
     * @memberof Student
     */
    'ext'?: object;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'frl_status'?: StudentFrlStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'gender'?: StudentGenderEnum;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'gifted_status'?: StudentGiftedStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'grade'?: StudentGradeEnum;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'graduation_year'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'hispanic_ethnicity'?: StudentHispanicEthnicityEnum;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'home_language'?: StudentHomeLanguageEnum;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'home_language_code'?: StudentHomeLanguageCodeEnum;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'iep_status'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'last_modified'?: string;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'legacy_id'?: string;
    /**
     * 
     * @type {Location}
     * @memberof Student
     */
    'location'?: Location;
    /**
     * 
     * @type {PreferredName}
     * @memberof Student
     */
    'preferred_name'?: PreferredName;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'race'?: StudentRaceEnum;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'school'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Student
     */
    'schools'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'section_504_status'?: StudentSection504StatusEnum;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'sis_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'state_id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof Student
     */
    'student_number'?: string | null;
}

type StudentEllStatusEnum = 'Y' | 'N' | ''
type StudentFrlStatusEnum = 'Free' | 'Reduced' | 'Paid' | 'Other' | ''
type StudentGenderEnum = 'M' | 'F' | 'X' | ''
type StudentGiftedStatusEnum = 'Y' | 'N' | ''
type StudentGradeEnum = 'InfantToddler' | 'Preschool' | 'PreKindergarten' | 'TransitionalKindergarten' | 'Kindergarten' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12' | '13' | 'PostGraduate' | 'Ungraded' | 'Other' | ''
type StudentHispanicEthnicityEnum = 'Y' | 'N' | ''
type StudentHomeLanguageEnum = 'Basque' | 'Portuguese' | 'Hungarian' | 'Hmong' | 'Urdu' | 'Latvian' | 'Hausa' | 'Slovenian' | 'Chinese (Mandarin)' | 'Russian' | 'Arabic' | 'Telugu' | 'Afrikaans' | 'Tamil' | 'Irish' | 'Uzbek' | 'Norwegian' | 'Serbian' | 'Khmer' | 'Farsi' | 'Lao' | 'Gujarati' | 'Yiddish' | 'Lithuanian' | 'Mongolian' | 'Samoan' | 'Bengali' | 'Corsican' | 'Romanian' | 'Javanese' | 'Danish' | 'Scots Gaelic' | 'Burmese' | 'Kinyarwanda' | 'Swahili' | 'Yoruba' | 'Uyghur' | 'Hindi' | 'Azerbaijani' | 'Cabo Verdean' | 'Haitian Creole' | 'Amharic' | 'Maori' | 'Somali' | 'English' | 'Hawaiian' | 'Maltese' | 'Thai' | 'Slovak' | 'Nepali' | 'Bosnian' | 'Marathi' | 'Frisian' | 'Swedish' | 'Kazakh' | 'German' | 'Turkish' | 'Chinese' | 'Luxembourgish' | 'Armenian' | 'Dari' | 'Macedonian' | 'Karen' | 'Iloko' | 'Igbo' | 'Kannada' | 'Galician' | 'Cebuano' | 'Punjabi' | 'Indonesian' | 'Estonian' | 'Odia' | 'Spanish' | 'Filipino' | 'Albanian' | 'Korean' | 'Croatian' | 'Japanese' | 'Bulgarian' | 'Catalan' | 'Polish' | 'Sinhala' | 'Other' | 'Icelandic' | 'Tatar' | 'Ukrainian' | 'Tajik' | 'Italian' | 'French' | 'Malayalam' | 'Chichewa' | 'Kurdish (Kurmanji)' | 'Czech' | 'Xhosa' | 'Hebrew' | 'Georgian' | 'Oromo' | 'Shona' | 'Sindhi' | 'Sesotho' | 'Tagalog' | 'Malagasy' | 'Tigrinya' | 'Welsh' | 'Turkmen' | 'Malay' | 'Marshallese' | 'Belarusian' | 'Dutch' | 'Finnish' | 'Greek' | 'Kyrgyz' | 'Zulu' | 'Sundanese' | 'Vietnamese' | 'Pashto'
type StudentHomeLanguageCodeEnum = 'hau' | 'ilo' | 'dan' | 'som' | 'xho' | 'slv' | 'bos' | 'cos' | 'ces' | 'mlg' | 'vie' | 'bel' | 'hin' | 'hun' | 'mon' | 'pan' | 'tgk' | 'heb' | 'prs' | 'mlt' | 'pus' | 'tir' | 'eng' | 'mar' | 'nld' | 'est' | 'zho' | 'fas' | 'fry' | 'jpn' | 'aze' | 'rus' | 'gla' | 'yor' | 'cmn' | 'bul' | 'fin' | 'hmn' | 'ita' | 'pol' | 'ara' | 'ell' | 'khm' | 'mkd' | 'cpp' | 'ibo' | 'urd' | 'cym' | 'hat' | 'lao' | 'ltz' | 'snd' | 'swa' | 'mya' | 'ori' | 'kat' | 'smo' | 'spa' | 'kor' | 'nob' | 'ron' | 'tha' | 'ind' | 'fra' | 'tel' | 'hye' | 'guj' | 'isl' | 'msa' | 'slk' | 'swe' | 'tuk' | 'eus' | 'kaz' | 'mal' | 'kan' | 'amh' | 'orm' | 'afr' | 'fil' | 'haw' | 'lav' | 'sin' | 'yid' | 'ben' | 'kir' | 'mri' | 'tam' | 'glg' | 'ceb' | 'tat' | 'zul' | 'lit' | 'nep' | 'por' | 'sot' | 'other' | 'nya' | 'sun' | 'cat' | 'tgl' | 'ukr' | 'uzb' | 'gle' | 'srp' | 'deu' | 'jav' | 'kur' | 'mah' | 'sna' | 'uig' | 'kin' | 'hrv' | 'kar' | 'tur' | 'sqi'
type StudentRaceEnum = 'Caucasian' | 'Asian' | 'Black or African American' | 'American Indian' | 'Hawaiian or Other Pacific Islander' | 'Two or More Races' | 'Unknown' | ''
type StudentSection504StatusEnum = 'Y' | 'N' | ''


