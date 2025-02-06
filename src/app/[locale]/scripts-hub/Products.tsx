"use client"
import { ProducrtType } from '@/app/type'
import { Link } from '@/i18n/routing'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { FaDollarSign, FaHtml5, FaReact } from 'react-icons/fa6'
import { SiTailwindcss } from 'react-icons/si'
export default function Products() {
    const [dataProduct, setDataProduct] = useState<ProducrtType[]>([])
    const route = useRouter()
    const getData = async () => {
        const response = await fetch('https://shlabs.ir/api/v1/products')
        const data = await response.json()
        setDataProduct(data?.data)
    }
    const payment = (item: ProducrtType) => {
        // const value = localStorage.getItem("product-shlabs")
        // if (value) {
        //     const save = JSON.parse(value)
        //     const products = [
        //         item, ...save
        //     ]
        //     localStorage.setItem("product-shlabs", JSON.stringify(products))
        // } else {
        //     const products = [
        //         item
        //     ]
        //     localStorage.setItem("product-shlabs", JSON.stringify(products))
        // }
        const products = [
            item
        ]
        localStorage.setItem("product-shlabs", JSON.stringify(item))
        route.push(`/en/payment`)
    }
    useEffect(() => {
        getData()
    }, [])
    return dataProduct.map((row, index) => (
        <div onClick={() => payment(row)} key={index} className='p-4 cursor-pointer gap-3 md:p-8 flex justify-between flex-col rounded-xl border border-d-60' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
            <div>
                <span className='text-xl md:text-2xl text-w-100 font-semibold'>{row.name}</span>
                <p className='text-w-50 text-sm md:text-base mt-4'>{row.short_description}</p>
                <p className='text-w-50 text-sm md:text-base mt-4'>{row.description}</p>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 items-center'>
                    {/* <FaDollarSign className='text-yellow-400' /> */}
                    <span className='text-w-80'>
                        price : {row.price}$
                    </span>
                </div>
                <div className='flex gap-4'>
                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                        <SiTailwindcss />
                    </i>
                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                        <FaHtml5 />
                    </i>
                    <i className='p-2 rounded-full bg-d-80 border border-d-60 text-w-100'>
                        <FaReact />
                    </i>
                </div>
            </div>
        </div>
    ))
}
