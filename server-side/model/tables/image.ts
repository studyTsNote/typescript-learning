import mysql from 'mysql';

export default (sql: mysql.Connection): void => {
    sql.query(
        `CREATE TABLE IF NOT EXISTS \`image\` (
            \`id\` INT NOT NULL AUTO_INCREMENT,
            \`file_key\` VARCHAR(45) NOT NULL,
            \`file_name\` VARCHAR(45) NOT NULL,
            PRIMARY KEY (\`id\`)
        )`
    );
}
