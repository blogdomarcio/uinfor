import { GoogleSpreadsheet } from 'google-spreadsheet';

const credendials = require('./credentials.json')

const doc = new GoogleSpreadsheet('1o0TlbRoS_0whT9TnWYBftJPBU6F1UUwTDh5Ckj-cSXM');

await doc.useServiceAccountAuth(credendials);

await doc.loadInfo(); // loads document properties and worksheets
console.log(doc.title);