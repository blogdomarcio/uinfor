
import { GoogleSpreadsheet } from 'google-spreadsheet'
import credentials from '../../credentials.json'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)


export default async (req, res) => {

    try {

        // await doc.useServiceAccountAuth(credentials)

        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: process.env.SHEET_PRIVATE_KEY
        })


        await doc.loadInfo()
        console.log(doc.title)
        const sheet = doc.sheetsByIndex[1]

        const data = JSON.parse(req.body)

        console.log(data)

        await sheet.addRow({
            "Tombo": data.tombo,
            "Origem": data.origem,
            "Configuração": data.config,
            "Motivo": data.motivo,
        })

        res.end(req.body)
    }
    catch (err) {
        console.log(err)
        res.end('erro')
    }
}