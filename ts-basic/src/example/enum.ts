enum Status {
    Uploading = 2,
    Success,
    Failed
}
console.log(Status.Uploading, Status.Success, Status.Failed);
console.log(Status[2], Status[3], Status[4]);

enum Result {
    Success = 'Success',
    Error =  'Error'
}
console.log(Result.Success, Result.Error);

enum Indexs {
    zero,
    one,
    two
}

enum ButtonStatus {
    Off,
    On
}
interface Light {
    status: ButtonStatus
}
const light: Light = {
    status: ButtonStatus.Off
}
console.log(light);
