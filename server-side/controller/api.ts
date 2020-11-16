import fileUpload from '../utils/upload';
import apiModelServer from '../model/server/api';

export default {
    upload: async (req: Express.Request) => {
        const file = await fileUpload(req);
        // console.log(file);
        const filePath = file.path;
        const fileKey = filePath.match(/.+upload_(.+?)\..+/)[1];
        return apiModelServer.upload(fileKey, file.name);        
    },
    getList: async (req: Express.Request) => {
        return apiModelServer.getList();
    }
}
