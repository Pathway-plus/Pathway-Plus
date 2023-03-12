interface Consultant {
  "_id": string,
  "name": string,
  "email": string,
  "university": string,
  "specialization": string,
  "year": number,
  "country": string,
  "bio": string,
}

interface Session {
  "_id": string,
  "consultant": string,
  "available": boolean,
  "date": Date,
  "start_time": string,
  "end_time": string,
  "createdAt": Date,
  "updatedAt": Date,
}

interface Volunteer {
	"_id": string;
  "id": string;
	"name": string;
	"position": string;
	"department": string;
	"startDate": string;
}

interface AvailableEvent {
  "_id": string;
  "name": string;
  "organizer": string;
  "date": Date;
  "time": string;
  "venue": string;
  "description": string;
  "registerlink": string;
  "createdAt": Date;
  "updatedAt": Date;
}
