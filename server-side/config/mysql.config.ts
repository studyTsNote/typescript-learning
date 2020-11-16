const devConfig = {
    host: 'localhost',
    database: 'ts',
    port: 3306,
    user: 'root',
    password: 'mysql123456.'
}

const prodConfig = {
    host: 'mysql.justorez.com',
    database: 'ts',
    port: 3306,
    user: 'root',
    password: ''
}

export default process.env.NODE_ENV === 'development' ? devConfig : prodConfig;
