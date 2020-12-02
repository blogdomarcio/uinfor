
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/base64'
import moment from 'moment'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {

    try {

        // await doc.useServiceAccountAuth(credentials)

        await doc.useServiceAccountAuth({
            client_email: process.env.SHEET_CLIENT_EMAIL,
            private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
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
            "Data Cadastro": moment().format('HH:mm:ss - DD/MM/YYYY, ')
        })

        res.end(req.body)
    }
    catch (err) {
        console.log(err)
        res.end('erro')
    }
}