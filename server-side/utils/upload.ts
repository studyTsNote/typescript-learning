import path, { resolve } from 'path';
import formidable from 'formidable';
import { IncomingMessage } from 'http';

export default (req: Express.Request): Promise<formidable.File> => {
    return new Promise((resolve, reject) => {
        const form = new formidable.IncomingForm();
        form.encoding = 'utf-8';
        form.uploadDir = path.join(__dirname, '../files');
        form.keepExtensions = true;
        form.parse(req as IncomingMessage, (err, fields, files) => {
            const { file } = files;
            return !err ? resolve(file) : reject(err);
        });
    });
}
