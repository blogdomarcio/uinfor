import React, { useState } from 'react'
import Link from 'next/link'
import useSRW from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {

    const [sucess, setSuccess] = useState(false)

    const [msgTombo, setMsgTombo] = useState(false)

    const [msgLocal, setMsgLocal] = useState(false)

    const [msgMotivo, setMsgMotivo] = useState(false)

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

            if (form.tombo == '') {
                setMsgTombo(true)
            }
            else if (form.origem == '') {
                setMsgTombo(false)
                setMsgLocal(true)
            }

            else if (form.motivo == '') {
                setMsgTombo(false)
                setMsgLocal(false)
                setMsgMotivo(true)
            }
            else {

                setMsgTombo(false)
                setMsgLocal(false)
                setMsgMotivo(false)
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

                    <div className='mx-auto'>

                        <h1 className='font-bold text-center text-2xl p-2'> Registro de Recolhimento </h1>

                        <p className='p-2'>Digite o Número do Patrimônio</p>
                        <input className='bg-red-100 rounded-md p-2 text-center' type='number' name='tombo' placeholder='Ex. 001.001' onChange={onChange} value={form.tombo} autoComplete="off"></input>

                        <p className='p-2'>Setor de Origem</p>
                        <input className='bg-red-100 rounded-md p-2 text-center' name='origem' placeholder='Ex: UINFOR, Unidade Gestora' onChange={onChange} value={form.origem} autoComplete="off" ></input>

                        <p className='p-2'>Configuração Básica</p>
                        <input className='bg-red-100 rounded-md p-2 text-center' name='config' placeholder='Ex. i3 540 - 4Gb - HD 500' onChange={onChange} value={form.config} autoComplete="off"></input>

                        <p className='p-2'>Motivo Retirada</p>
                        <input className='bg-red-100 rounded-md p-2 text-center' name='motivo' placeholder='Ex. Descarte / Troca' onChange={onChange} value={form.motivo} autoComplete="off"></input>

                        {msgTombo && <p className='font-bold bg-red-900 text-white p-3 rounded-lg mt-5'>Digite o numero de Patrimônio!</p>}

                        {msgLocal && <p className='font-bold bg-red-900 text-white p-3 rounded-lg mt-5'>Digite o local de origem!</p>}

                        {msgMotivo && <p className='font-bold bg-red-900 text-white p-3 rounded-lg mt-5'>Digite o motivo da retirada!</p>}

                        <p className=''> </p>
                        <button className='bg-red-400 px-12  py-4 mt-5 font-bold rounded-lg shadow-lg hover:shadow' onClick={salvar}> Salvar </button>

                    </div>
                }

                {sucess &&

                    <div className='mx-auto'>

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