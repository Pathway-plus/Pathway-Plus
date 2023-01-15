interface Consultant {
  "_id": string,
  "name": string,
  "profile": string,
  "country": string,
  "university": string,
  "major": string,
  "year": string,
  "introduction": string,
  "type": string,
  "__v": number,
}

interface Session {
  "_id": string
  "date": string
  "startTime": Array<string>,
  "endTime": Array<string>,
  "is_available": boolean,
  "consultant": string,
  "weekly": boolean,
  "__v": number,
}

interface Volunteer {
	"_id": string;
	"name": string;
	"role": { name: string };
	"department": { name: string };
	"duration": string;
}

interface AvailableEvent {
  [key: string]: any;
}

interface Careers {
  [key: string]: any;
}

interface BookingForm {
  name: string;
  email: string;
  facebook: string;
  age: string;
  phone: string;
  education: string;
  purpose: string;
}
