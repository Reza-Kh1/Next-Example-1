"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { PiArrowsCounterClockwiseLight } from "react-icons/pi";
import axios from 'axios';
import React, { useState } from 'react'
import Cookies from "js-cookie"
import toast from 'react-hot-toast';
import { Pagination } from '@nextui-org/react';
import { Button } from '@heroui/button';
import { FaAngleDown, FaAngleUp, FaDollarSign } from 'react-icons/fa6';
import ImageCustom from '@/components/ImageCustom/ImageCustom';
import FormProduct from './FormProduct';
import Link from 'next/link';
import { getProducts } from '@/action/admin';
export default function page() {
  const [create, setCreate] = useState<boolean>(false)
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24,
  });
  const { mutate } = useMutation({
    mutationFn: (body: any) => {
      const token = Cookies.get('authToken')
      return axios.post("products", body, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
    },
    onSuccess: () => {
      toast.success("Product was Created");
      queryClient.invalidateQueries({ queryKey: ["getProducts"] });
    },
    onError: ({ response }: any) => {
      toast.error(response?.data?.message);
    },
  });
  console.log(data);
  
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-5 p-3 rounded-xl bg-white shadow-md'>
        <div className='flex justify-between items-center'>
          <span>Create Product</span>
          <Button onPress={() => setCreate(prev => !prev)} variant='bordered' className='bg-d-btn rounded-md shadow-md text-white'>
            {create ?
              <>
                Show Less
                <FaAngleDown />
              </>
              :
              <>
                Show More
                <FaAngleUp />
              </>
            }
          </Button>
        </div>
        {create && (
          <FormProduct submitHandler={(value) => mutate(value)} />
        )}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-3 rounded-xl bg-white shadow-md'>
        {data?.data?.map((row: any, index: number) => (
          <Link key={index} href={`/admin/products/${row.id}`} className='border rounded-xl shadow-md p-4 flex flex-col gap-2 cursor-pointer'>
            <ImageCustom src={"/service1.png"} alt={"image"} className='w-full' height={180} width={200} />
            <div className='flex justify-between items-center'>
              <span className='text-xl font-semibold text-b-70'>
                {row.name}
              </span>
              <span className='text-sm text-gray-700'>
                {new Date(row.created_at).toLocaleDateString()}
              </span>
            </div>
            <div className='flex flex-col gap-2'>
              <span className='flex items-center gap-2'><FaDollarSign /> Price :{row.price}$</span>
              <span className='flex items-center gap-2'><PiArrowsCounterClockwiseLight /> Download :{row.download_count}</span>
            </div>
            <p className='cutline cutline-3'>{row.short_description}</p>
          </Link>
        ))}
      </div>
      <div className='bg-white p-3 shadow-md rounded-xl flex items-center justify-center'>
        <Pagination classNames={{ cursor: "bg-o-60" }} onChange={(value) => console.log(value)
        } initialPage={3} boundaries={1} total={1} />
      </div>
    </div>
  )
}
