import { fetchApi } from '@/action/fetchApi'
import { ProducrtType } from '@/app/type'
import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import React from 'react'
import { FaDollarSign } from 'react-icons/fa6'
import { SlCalender } from "react-icons/sl";

const getData = async (slug: string) => {
    const data = await fetchApi({ url: `/products/${slug}` })
    return data
}
export default async function page({ params }: any) {
    const id = await params
    const data = await getData(id?.slug) as ProducrtType
    console.log(data);
    return (
        <>
            <ContainerHeader firstDark dark={""} light={data.name} text={data.short_description} />
            <main className='main-class'>
                <h1 className='text-white text-2xl font-semibold'>
                    {data.name}
                </h1>
                <section className='p-4 gap-3 md:p-8 flex justify-between flex-col rounded-xl border border-d-60' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
                    <div className='flex flex-col justify-between'>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-1 items-center'>
                                <FaDollarSign className='text-yellow-400' />
                                <span className='text-w-80'>
                                    price : {data.price}$
                                </span>
                            </div>
                            <i className='text-w-80 flex gap-1 items-center'>
                                <SlCalender className='text-yellow-400' />
                                {new Date(data.created_at).toLocaleDateString()}
                            </i>
                        </div>
                        <p className='text-w-90'>{data.short_description}</p>
                    </div>
                    <p className='text-w-90'>{data.description}</p>
                </section>
            </main>
        </>
    )
}
