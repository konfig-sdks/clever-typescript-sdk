<div align="center">

[![Visit Clever](./header.png)](https://clever.com)

# [Clever](https://clever.com)<a id="clever"></a>

Serves the Clever Data API

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`clever.courses.getDistrict`](#clevercoursesgetdistrict)
  * [`clever.courses.getList`](#clevercoursesgetlist)
  * [`clever.courses.getResources`](#clevercoursesgetresources)
  * [`clever.courses.getSchools`](#clevercoursesgetschools)
  * [`clever.courses.getSections`](#clevercoursesgetsections)
  * [`clever.courses.getSpecificCourse`](#clevercoursesgetspecificcourse)
  * [`clever.districts.getList`](#cleverdistrictsgetlist)
  * [`clever.districts.getSpecificDistrict`](#cleverdistrictsgetspecificdistrict)
  * [`clever.resources.getById`](#cleverresourcesgetbyid)
  * [`clever.resources.getCourses`](#cleverresourcesgetcourses)
  * [`clever.resources.getList`](#cleverresourcesgetlist)
  * [`clever.resources.getUsers`](#cleverresourcesgetusers)
  * [`clever.resources.listSections`](#cleverresourceslistsections)
  * [`clever.schools.getCourses`](#cleverschoolsgetcourses)
  * [`clever.schools.getDistrict`](#cleverschoolsgetdistrict)
  * [`clever.schools.getSections`](#cleverschoolsgetsections)
  * [`clever.schools.getSpecificSchool`](#cleverschoolsgetspecificschool)
  * [`clever.schools.getTerms`](#cleverschoolsgetterms)
  * [`clever.schools.getUsers`](#cleverschoolsgetusers)
  * [`clever.schools.list`](#cleverschoolslist)
  * [`clever.sections.getCourse`](#cleversectionsgetcourse)
  * [`clever.sections.getDistrict`](#cleversectionsgetdistrict)
  * [`clever.sections.getList`](#cleversectionsgetlist)
  * [`clever.sections.getResources`](#cleversectionsgetresources)
  * [`clever.sections.getSchool`](#cleversectionsgetschool)
  * [`clever.sections.getSpecificSection`](#cleversectionsgetspecificsection)
  * [`clever.sections.getTerm`](#cleversectionsgetterm)
  * [`clever.sections.getUsers`](#cleversectionsgetusers)
  * [`clever.terms.getDistrictById`](#clevertermsgetdistrictbyid)
  * [`clever.terms.getList`](#clevertermsgetlist)
  * [`clever.terms.getSchoolsForTerm`](#clevertermsgetschoolsforterm)
  * [`clever.terms.getSections`](#clevertermsgetsections)
  * [`clever.terms.getSpecificTerm`](#clevertermsgetspecificterm)
  * [`clever.users.getDistrict`](#cleverusersgetdistrict)
  * [`clever.users.getList`](#cleverusersgetlist)
  * [`clever.users.getMyContacts`](#cleverusersgetmycontacts)
  * [`clever.users.getResources`](#cleverusersgetresources)
  * [`clever.users.getSchools`](#cleverusersgetschools)
  * [`clever.users.getSections`](#cleverusersgetsections)
  * [`clever.users.getStudentUsers`](#cleverusersgetstudentusers)
  * [`clever.users.getTeachersForUser`](#cleverusersgetteachersforuser)
  * [`clever.users.getUserById`](#cleverusersgetuserbyid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Clever&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Clever } from "clever-typescript-sdk";

const clever = new Clever({
  // Defining the base path is optional and defaults to https://api.clever.com/v3.1
  // basePath: "https://api.clever.com/v3.1",
});

const getDistrictResponse = await clever.courses.getDistrict({
  id: "id_example",
});

console.log(getDistrictResponse);
```

## Reference<a id="reference"></a>


### `clever.courses.getDistrict`<a id="clevercoursesgetdistrict"></a>

Returns the district for a course

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDistrictResponse = await clever.courses.getDistrict({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DistrictResponse](./models/district-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/courses/{id}/district` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.courses.getList`<a id="clevercoursesgetlist"></a>

Returns a list of courses

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await clever.courses.getList({
  count: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

##### count: `'' | 'true' | 'false' | 'undefined'`<a id="count---true--false--undefined"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CoursesResponse](./models/courses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/courses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.courses.getResources`<a id="clevercoursesgetresources"></a>

Returns the resources for a course

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResourcesResponse = await clever.courses.getResources({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ResourcesResponse](./models/resources-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/courses/{id}/resources` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.courses.getSchools`<a id="clevercoursesgetschools"></a>

Returns the schools for a course

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSchoolsResponse = await clever.courses.getSchools({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SchoolsResponse](./models/schools-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/courses/{id}/schools` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.courses.getSections`<a id="clevercoursesgetsections"></a>

Returns the sections for a course

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSectionsResponse = await clever.courses.getSections({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SectionsResponse](./models/sections-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/courses/{id}/sections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.courses.getSpecificCourse`<a id="clevercoursesgetspecificcourse"></a>

Returns a specific course

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificCourseResponse = await clever.courses.getSpecificCourse({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CourseResponse](./models/course-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/courses/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.districts.getList`<a id="cleverdistrictsgetlist"></a>

Returns a list of districts. In practice this will only return the one district associated with the bearer token

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await clever.districts.getList({
  count: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### count: `'' | 'true' | 'false' | 'undefined'`<a id="count---true--false--undefined"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DistrictsResponse](./models/districts-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/districts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.districts.getSpecificDistrict`<a id="cleverdistrictsgetspecificdistrict"></a>

Returns a specific district

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificDistrictResponse = await clever.districts.getSpecificDistrict({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DistrictResponse](./models/district-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/districts/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.resources.getById`<a id="cleverresourcesgetbyid"></a>

Returns a specific resource

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await clever.resources.getById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ResourceResponse](./models/resource-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/resources/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.resources.getCourses`<a id="cleverresourcesgetcourses"></a>

Returns the courses for a resource

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCoursesResponse = await clever.resources.getCourses({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CoursesResponse](./models/courses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/resources/{id}/courses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.resources.getList`<a id="cleverresourcesgetlist"></a>

Returns a list of resources

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await clever.resources.getList({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ResourcesResponse](./models/resources-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/resources` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.resources.getUsers`<a id="cleverresourcesgetusers"></a>

Returns the student and/or teacher users for a resource

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsersResponse = await clever.resources.getUsers({
  id: "id_example",
  role: "student",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### role: `'student' | 'teacher'`<a id="role-student--teacher"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersResponse](./models/users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/resources/{id}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.resources.listSections`<a id="cleverresourceslistsections"></a>

Returns the sections for a resource

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSectionsResponse = await clever.resources.listSections({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SectionsResponse](./models/sections-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/resources/{id}/sections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.schools.getCourses`<a id="cleverschoolsgetcourses"></a>

Returns the courses for a school

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCoursesResponse = await clever.schools.getCourses({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CoursesResponse](./models/courses-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/schools/{id}/courses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.schools.getDistrict`<a id="cleverschoolsgetdistrict"></a>

Returns the district for a school

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDistrictResponse = await clever.schools.getDistrict({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DistrictResponse](./models/district-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/schools/{id}/district` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.schools.getSections`<a id="cleverschoolsgetsections"></a>

Returns the sections for a school

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSectionsResponse = await clever.schools.getSections({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SectionsResponse](./models/sections-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/schools/{id}/sections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.schools.getSpecificSchool`<a id="cleverschoolsgetspecificschool"></a>

Returns a specific school

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificSchoolResponse = await clever.schools.getSpecificSchool({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SchoolResponse](./models/school-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/schools/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.schools.getTerms`<a id="cleverschoolsgetterms"></a>

Returns the terms for a school

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTermsResponse = await clever.schools.getTerms({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TermsResponse](./models/terms-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/schools/{id}/terms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.schools.getUsers`<a id="cleverschoolsgetusers"></a>

Returns the staff, student, and/or teacher users for a school

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsersResponse = await clever.schools.getUsers({
  id: "id_example",
  role: "staff",
  primary: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### role: `'staff' | 'student' | 'teacher'`<a id="role-staff--student--teacher"></a>

##### primary: `'' | 'true'`<a id="primary---true"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersResponse](./models/users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/schools/{id}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.schools.list`<a id="cleverschoolslist"></a>

Returns a list of schools

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await clever.schools.list({
  count: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

##### count: `'' | 'true' | 'false' | 'undefined'`<a id="count---true--false--undefined"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SchoolsResponse](./models/schools-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/schools` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.sections.getCourse`<a id="cleversectionsgetcourse"></a>

Returns the course for a section

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCourseResponse = await clever.sections.getCourse({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CourseResponse](./models/course-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{id}/course` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.sections.getDistrict`<a id="cleversectionsgetdistrict"></a>

Returns the district for a section

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDistrictResponse = await clever.sections.getDistrict({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DistrictResponse](./models/district-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{id}/district` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.sections.getList`<a id="cleversectionsgetlist"></a>

Returns a list of sections

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await clever.sections.getList({
  count: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

##### count: `'' | 'true' | 'false' | 'undefined'`<a id="count---true--false--undefined"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SectionsResponse](./models/sections-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.sections.getResources`<a id="cleversectionsgetresources"></a>

Returns the resources for a section

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResourcesResponse = await clever.sections.getResources({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ResourcesResponse](./models/resources-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{id}/resources` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.sections.getSchool`<a id="cleversectionsgetschool"></a>

Returns the school for a section

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSchoolResponse = await clever.sections.getSchool({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SchoolResponse](./models/school-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{id}/school` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.sections.getSpecificSection`<a id="cleversectionsgetspecificsection"></a>

Returns a specific section

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificSectionResponse = await clever.sections.getSpecificSection({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SectionResponse](./models/section-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.sections.getTerm`<a id="cleversectionsgetterm"></a>

Returns the term for a section

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTermResponse = await clever.sections.getTerm({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TermResponse](./models/term-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{id}/term` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.sections.getUsers`<a id="cleversectionsgetusers"></a>

Returns the student and/or teacher users for a section

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsersResponse = await clever.sections.getUsers({
  id: "id_example",
  role: "student",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### role: `'student' | 'teacher'`<a id="role-student--teacher"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersResponse](./models/users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/sections/{id}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.terms.getDistrictById`<a id="clevertermsgetdistrictbyid"></a>

Returns the district for a term

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDistrictByIdResponse = await clever.terms.getDistrictById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DistrictResponse](./models/district-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms/{id}/district` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.terms.getList`<a id="clevertermsgetlist"></a>

Returns a list of terms

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await clever.terms.getList({
  count: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

##### count: `'' | 'true' | 'false' | 'undefined'`<a id="count---true--false--undefined"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TermsResponse](./models/terms-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.terms.getSchoolsForTerm`<a id="clevertermsgetschoolsforterm"></a>

Returns the schools for a term

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSchoolsForTermResponse = await clever.terms.getSchoolsForTerm({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SchoolsResponse](./models/schools-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms/{id}/schools` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.terms.getSections`<a id="clevertermsgetsections"></a>

Returns the sections for a term

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSectionsResponse = await clever.terms.getSections({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SectionsResponse](./models/sections-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms/{id}/sections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.terms.getSpecificTerm`<a id="clevertermsgetspecificterm"></a>

Returns a specific term

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificTermResponse = await clever.terms.getSpecificTerm({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[TermResponse](./models/term-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/terms/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.users.getDistrict`<a id="cleverusersgetdistrict"></a>

Returns the district for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDistrictResponse = await clever.users.getDistrict({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DistrictResponse](./models/district-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/district` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.users.getList`<a id="cleverusersgetlist"></a>

Returns a list of contact, district admin, staff, student, and/or teacher users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getListResponse = await clever.users.getList({
  role: "contact",
  count: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

##### role: `'contact' | 'district_admin' | 'staff' | 'student' | 'teacher'`<a id="role-contact--district_admin--staff--student--teacher"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

##### count: `'' | 'true' | 'false' | 'undefined'`<a id="count---true--false--undefined"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersResponse](./models/users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.users.getMyContacts`<a id="cleverusersgetmycontacts"></a>

Returns the contact users for a student user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMyContactsResponse = await clever.users.getMyContacts({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersResponse](./models/users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/mycontacts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.users.getResources`<a id="cleverusersgetresources"></a>

Returns the resources for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResourcesResponse = await clever.users.getResources({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ResourcesResponse](./models/resources-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/resources` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.users.getSchools`<a id="cleverusersgetschools"></a>

Returns the schools for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSchoolsResponse = await clever.users.getSchools({
  id: "id_example",
  primary: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### primary: `'' | 'true'`<a id="primary---true"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SchoolsResponse](./models/schools-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/schools` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.users.getSections`<a id="cleverusersgetsections"></a>

Returns the sections for a user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSectionsResponse = await clever.users.getSections({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SectionsResponse](./models/sections-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/sections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.users.getStudentUsers`<a id="cleverusersgetstudentusers"></a>

Returns the student users for a teacher or contact user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStudentUsersResponse = await clever.users.getStudentUsers({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersResponse](./models/users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/mystudents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.users.getTeachersForUser`<a id="cleverusersgetteachersforuser"></a>

Returns the teacher users for a student user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTeachersForUserResponse = await clever.users.getTeachersForUser({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

##### limit: `number`<a id="limit-number"></a>

##### startingAfter: `string`<a id="startingafter-string"></a>

##### endingBefore: `string`<a id="endingbefore-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UsersResponse](./models/users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}/myteachers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `clever.users.getUserById`<a id="cleverusersgetuserbyid"></a>

Returns a specific user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByIdResponse = await clever.users.getUserById({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[UserResponse](./models/user-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
