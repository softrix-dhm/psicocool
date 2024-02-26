import mssql from "mssql"

export const connectMssql = () => {


  console.log(String(process.env.SQL_DATABASE_PRIMARY));

    return mssql.connect({
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        server: process.env.SQL_SERVER,
        database: process.env.SQL_DATABASE_PRIMARY,
        options: {          
            port: 1433,
            trustServerCertificate: true,
          }
    })
}

export const ArrayToTVP = (list = [], head = []) => {
    const tvp = new mssql.Table()
    head.forEach(element => {
        tvp.columns.add(element[0], element[1])
    })
    list.forEach((element = []) => {
        tvp.rows.add(element)
    })
    return tvp
}