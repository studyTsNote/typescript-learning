import mysql from 'mysql';
import mysqlConfig from '../config/mysql.config';
import ImageTable from './tables/image';

const sql = mysql.createConnection(mysqlConfig);

sql.connect();

ImageTable(sql);

export default sql;
