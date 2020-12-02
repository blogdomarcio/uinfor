import React, { useState } from 'react'
import Link from 'next/link'
import useSRW from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    console.log(process.env.VAR1)

    const [form, setForm] = useState({
        tombo: '',
        origem: '',
        config: '',
        motivo: ''
    })

    const { data, error } = useSRW('/api/get-promo', fetcher)

    const salvar = async () => {

        try {


            const response = await fetch('api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = response.json()

            setForm({
                tombo: '',
                origem: '',
                config: '',
                motivo: ''
            })

        }
        catch (err) {

        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name

        setForm(old => ({
            ...old,
            [key]: value
        }))
    }



    return (
        <>


            {!data && <p>Carregando</p>}

            {data && data.showcupom && <p className='p-2 font-bold text-center'> {data.message} </p>}


            <div className='text-center p-2'>
                <h1 className='font-bold text-center text-2xl p-2'> Registro de Recolhimento </h1>

                <p className='p-2'>Digite o Número do TOMBO</p>
                <input className='bg-red-100 rounded-md p-2 text-center' name='tombo' placeholder='Ex. 001.001' onChange={onChange} value={form.tombo}></input>

                <p className='p-2'>Setor de Origem</p>
                <input className='bg-red-100 rounded-md p-2 text-center' name='origem' placeholder='Ex: UINFOR, Unidade Gestora' onChange={onChange} value={form.origem} ></input>

                <p className='p-2'>Configuração Básica</p>
                <input className='bg-red-100 rounded-md p-2 text-center' name='config' placeholder='Ex. i3 540 - 4Gb - HD 500' onChange={onChange} value={form.config}></input>

                <p className='p-2'>Motivo Retirada</p>
                <input className='bg-red-100 rounded-md p-2 text-center' name='motivo' placeholder='Ex. Subsituição / Defeito / Troca de Setor' onChange={onChange} value={form.motivo}></input>

                <p className='p-2'> </p>
                <button className='bg-red-400 px-12  py-4 mt-5 font-bold rounded-lg shadow-lg hover:shadow' onClick={salvar}> Salvar </button>
                {/* <p class="rounded-full text-center py-3 px-6 bg-red-900 mt-12 shadow text-white font-bold">Cadastrar</p> */}
            </div>



        </>
    )
}

export default Index