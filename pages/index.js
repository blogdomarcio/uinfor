import React, { useState } from 'react'
import Link from 'next/link'
import useSRW from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    const [sucess, setSuccess] = useState(false)

    const [form, setForm] = useState({
        tombo: '',
        origem: '',
        config: '',
        motivo: ''
    })

    // const { data, error } = useSRW('/api/get-promo', fetcher)

    const novo = () => {

        setSuccess(false)

    }

    const salvar = async () => {

        try {


            const response = await fetch('api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = response.json()

            setSuccess(true)

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


            {/* {!data && <p>Carregando</p>} */}

            {/* {data && data.showcupom && <p className='p-2 font-bold text-center'> {data.message} </p>} */}


            <div className='text-center p-2'>

                {!sucess &&

                    <div className='w-1/5 mx-auto'>

                        <h1 className='font-bold text-center text-2xl p-2'> Registro de Recolhimento </h1>

                        <p className='p-2'>Digite o Número do Patrimônio</p>
                        <input className='bg-red-100 rounded-md p-2 text-center' type='number' name='tombo' placeholder='Ex. 001.001' onChange={onChange} value={form.tombo}></input>

                        <p className='p-2'>Setor de Origem</p>
                        <input className='bg-red-100 rounded-md p-2 text-center' name='origem' placeholder='Ex: UINFOR, Unidade Gestora' onChange={onChange} value={form.origem} ></input>

                        <p className='p-2'>Configuração Básica</p>
                        <input className='bg-red-100 rounded-md p-2 text-center' name='config' placeholder='Ex. i3 540 - 4Gb - HD 500' onChange={onChange} value={form.config}></input>

                        <p className='p-2'>Motivo Retirada</p>
                        <input className='bg-red-100 rounded-md p-2 text-center' name='motivo' placeholder='Ex. Subsituição / Defeito / Troca de Setor' onChange={onChange} value={form.motivo}></input>

                        <p className='p-2'> </p>
                        <button className='bg-red-400 px-12  py-4 mt-5 font-bold rounded-lg shadow-lg hover:shadow' onClick={salvar}> Salvar </button>

                    </div>
                }

                {sucess &&

                    <div className='w-2/5 mx-auto'>

                        <p className='mb-2 text-center rounded-lg bg-red-100  mt-5 border-red-500 text-blue-700 px-4 py-3'>Cadastro Realizado com sucesso!.</p>

                        <p className='p-2'> </p>
                        <button className='bg-red-400 px-12  py-4 mt-2 font-bold rounded-lg shadow-lg hover:shadow' onClick={novo}> Novo Cadastro </button>
                    </div>

                }

            </div>

        </>
    )
}

export default Index