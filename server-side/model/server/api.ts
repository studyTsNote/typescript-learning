import { MysqlError } from 'mysql';
import sql from '../';

function sqlCallback(resolve, reject) {
    return (err: MysqlError, res: any) => {
        if (err) {
            return reject(err);
        }
        return resolve(res);
    }
}

interface FileItem {
    id: number,
    file_key: string,
    file_name: string
}

export default {
    upload(key: string, name: string): Promise<void> {
        return new Promise((resolve, reject) => {
            sql.query(
                `insert into image(file_Key, file_name) values("${key}", "${name}")`,
                sqlCallback(resolve, reject)
            );
        })
    },
    getList(): Promise<FileItem[]> {
        return new Promise((resolve, reject) => {
            sql.query(
                `select * from image`,
                sqlCallback(resolve, reject)
            )
        })
    }
}
