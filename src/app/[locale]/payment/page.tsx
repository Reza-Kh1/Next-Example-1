"use client"
import { ProducrtType } from '@/app/type'
import ContainerHeader from '@/components/ContainerHeader/ContainerHeader'
import { Button } from '@heroui/button'
import React, { useEffect, useState } from 'react'
import { MdClose, MdDownload } from 'react-icons/md'
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Image from 'next/image'
import { InputOtp } from '@nextui-org/react'
import { Link } from '@/i18n/routing'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'

export default function page() {
    const [step, setStep] = useState<number>(0)
    const [data, setData] = useState<ProducrtType>()
    const [phone, setPhone] = useState<string>("")
    const route = useRouter()
    const phoneHandler = () => {
        setStep(1)
    }
    const cancelHandler = () => {
        localStorage.setItem("product-shlabs", "")
        route.replace("/en/scripts-hub")
    }
    const purchaseHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        const holder = formData.get("holder");
        const number = formData.get("number");
        const expMonth = formData.get("test1");
        const expYear = formData.get("text2");
        const cvv = formData.get("cvv");
        const body = {
            holder,
            number,
            expMonth,
            expYear,
            cvv
        }
        console.log(body);
        setStep(2)
    }
    const downloadHandler = async () => {
        if (!data?.download_url) return
        try {
            const response = await fetch(data?.download_url);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = blobUrl;
            link.setAttribute("download", data?.name);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(blobUrl);
        } catch (error) {
            toast.error("Downlod in Error")
            console.error("Error in download:", error);
        }
    };
    useEffect(() => {
        const local = localStorage.getItem("product-shlabs")
        if (local) {
            const json = JSON.parse(local as string) as ProducrtType
            setData(json)
        }
    }, [])
    return (
        <>
            <ContainerHeader firstDark dark={"shlabs"} light={"payments"} text={""} />
            <main className='main-class'>
                <div className='p-4 gap-3 mt-12 md:p-8 flex flex-col md:flex-row justify-between rounded-xl border border-d-60' style={{ backgroundImage: 'linear-gradient(204deg, #ffffff0d, #0202028f)' }}>
                    <div className='w-full md:w-4/12 pb-5 md:pr-5 border-b md:border-r border-d-60 flex flex-col items-center justify-center text-center gap-6'>
                        <h1 className='text-white text-3xl font-semibold'>Order Summery</h1>
                        <div className='border p-6 w-full bg-d-80 rounded-xl flex justify-between text-white items-center relative border-d-60'>
                            <span className='font-semibold'>{data?.name}</span>
                            <span>${data?.price}</span>
                            <span onClick={cancelHandler} className='absolute cursor-pointer top-1 right-1 text-white'>
                                <MdClose size={20} />
                            </span>
                        </div>
                        <div className='w-full flex flex-col gap-6'>
                            <div className='flex justify-between w-full items-center text-white'>
                                <span>Subtotal</span>
                                <span>${data?.price}</span>
                            </div>
                            <div className='flex justify-between w-full items-center text-white'>
                                <span>Shipping</span>
                                <span>$5.25</span>
                            </div>
                            <div className='flex justify-between w-full items-center text-red-500 text-2xl font-semibold'>
                                <span>Total</span>
                                <span>${Number(data?.price) + Number(5.25)}</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-8/12 pt-5 md:pl-5 flex flex-col justify-evenly'>
                        <div className='flex items-center mb-8'>
                            <figure className='bg-w-90 p-3 rounded-full'>
                                <Image src={"/icons/phone-call.png"} alt='phone' width={50} height={50} />
                            </figure>
                            <span className={`${step > 0 ? ' bg-w-90' : 'bg-d-50'} block w-full h-1`}></span>
                            <figure className={`${step > 0 ? ' bg-w-90' : 'bg-d-50'} p-3 rounded-full`}>
                                <Image src={"/icons/cvv-card.png"} alt='phone' width={50} height={50} />
                            </figure>
                            <span className={`${step > 1 ? ' bg-w-90' : 'bg-d-50'} block w-full h-1`}></span>
                            <figure className={`${step > 1 ? ' bg-w-90' : 'bg-d-50'} p-3 rounded-full`}>
                                <Image src={"/icons/download.png"} alt='phone' width={50} height={50} />
                            </figure>
                        </div>
                        {step === 0 ? <div className=' flex flex-col justify-evenly items-center'>
                            <label htmlFor="" className='flex flex-col gap-2 w-full md:w-2/3 mx-auto'>
                                <span className='font-semibold text-w-100'>Phone Number</span>
                                <input value={phone} onChange={({ target }) => setPhone(target.value)} type="text" name='phone' placeholder='Enter your Phone Number' title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
                            </label>
                            <div className='flex justify-end mt-6 w-full md:w-2/3 mx-auto'>
                                <Button onPress={phoneHandler} className='px-5 py-3 bg-d-100 rounded-full border border-d-60'>
                                    Next
                                    <i>
                                        <GrFormNextLink size={25} />
                                    </i>
                                </Button>
                            </div>
                        </div> :
                            step === 1 ?
                                <form onSubmit={purchaseHandler} className=' flex flex-col gap-4 justify-evenly items-center'>
                                    <label htmlFor="" className='flex flex-col gap-2 w-full md:w-2/3 mx-auto'>
                                        <span className='font-semibold text-w-100'>card Holder</span>
                                        <input name='holder' type="number" placeholder='Enter your card Holder' title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
                                    </label>
                                    <label htmlFor="" className='flex flex-col gap-2 w-full md:w-2/3 mx-auto'>
                                        <span className='font-semibold text-w-100'>card Number</span>
                                        <input name='number' type="number" placeholder='Enter your card Number' title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
                                    </label>
                                    <div className='flex flex-col gap-4 md:gap-0 md:flex-row w-full md:w-2/3 justify-between'>
                                        <div className='order-2 md:order-2'>
                                            <div className="text-default-500">Exp.Date</div>
                                            <div className='flex items-center text-white'>
                                                <InputOtp className='text-white' color='default' name='test1' length={2} variant="underlined" />
                                                <span className='text-3xl mx-2'>/</span>
                                                <InputOtp className='text-white' color='default' name='text2' length={2} variant="underlined" />
                                            </div>
                                        </div>
                                        <label htmlFor="" className='flex order-1 md:order-2 flex-col gap-2'>
                                            <span className='font-semibold text-w-100'>CVV</span>
                                            <input name='cvv' type="number" placeholder='Enter your CVV' title='Name' className='bg-d-100 border border-d-60 rounded-full p-3 text-w-80' />
                                        </label>
                                    </div>
                                    <div className='flex justify-between w-full md:w-2/3 mt-6'>
                                        <Button onPress={() => setStep(0)} className='px-5 py-3 bg-d-100 rounded-full border border-d-60'>
                                            <i>
                                                <GrFormPreviousLink size={25} />
                                            </i>
                                            Back
                                        </Button>
                                        <Button type='submit' className='px-5 py-3 bg-d-100 rounded-full border border-d-60'>
                                            Purchase
                                            <i>
                                                <GrFormNextLink size={25} />
                                            </i>
                                        </Button>
                                    </div>
                                </form>
                                :
                                <div className='text-center flex flex-col justify-evenly gap-5'>
                                    <span className='text-2xl text-white font-semibold'>{data?.name}</span>
                                    <span className='text-w-80 font-semibold'>Payment was successful</span>
                                    <Button onPress={() => downloadHandler()} className='flex w-2/3 md:w-1/3 rounded-md mx-auto items-center gap-2 justify-center bg-w-90 text-d-100 border border-d-60 shadow-md'>
                                        Download File
                                        <MdDownload size={30} />
                                    </Button>
                                    <div className='flex justify-end mt-6'>
                                        <Link href={"/scripts-hub"} className='px-5 py-3 flex items-center text-white justify-center gap-2 bg-d-100 rounded-full border border-d-60'>
                                            Scrpits Hub Page
                                            <i>
                                                <GrFormNextLink size={25} />
                                            </i>
                                        </Link>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
