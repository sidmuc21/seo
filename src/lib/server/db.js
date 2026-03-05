import mysql from 'mysql2/promise';
 
export const db = await mysql.createConnection({
    host: 'htl-datenbank.com',
    user: 'sidmuc21',
    password: '1INSY$data',
    database: 'sidmuc21_seo',
    port: 28474
});