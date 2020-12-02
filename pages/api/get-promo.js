import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'



export default async (req, res) => {

    try {

        const doc = new GoogleSpreadsheet('1o0TlbRoS_0whT9TnWYBftJPBU6F1UUwTDh5Ckj-cSXM')

        await doc.useServiceAccountAuth(credentials)
        await doc.loadInfo()
        // console.log('Nome da Panilha:', doc.title)


        const sheet = doc.sheetsByIndex[2]
        await sheet.loadCells('A2:b2')
        console.log(sheet.title)

        const config = sheet.getCell(1, 0)
        const texto = sheet.getCell(1, 1)

        console.log(config.value, texto.value)

        // console.log(sheet)

        // console.log(sheet)

        res.end(JSON.stringify({
            showcupom: config.value,
            message: texto.value
        }))

        // const texto = sheet.getCell(1, 0)
        // const texto2 = sheet.getCell(2, 1)

    } catch (err) {
        console.log(err, 'DEU ERRO')
    }



}