"use client"
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React from 'react'
import FormProduct from '../FormProduct';
import toast from 'react-hot-toast';
import Cookies from "js-cookie"
import { getSingleProduct } from '@/action/admin';
export default function page() {
    const { slug } = useParams()
    const query = useQueryClient();
    const { data } = useQuery({
        queryKey: ["singleProduct", slug],
        queryFn: () => getSingleProduct(slug as string),
        staleTime: 1000 * 60 * 60 * 24,
        gcTime: 1000 * 60 * 60 * 24,
    });
    const { mutate } = useMutation({
        mutationFn: (body: any) => {
            const token = Cookies.get('authToken')
            return axios.put(`products/${slug}`, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
        },
        onSuccess: ({ data }) => {
            console.log(data);
            toast.success("its good");
            query.invalidateQueries({ queryKey: ['getProducts', slug] });
            query.invalidateQueries({ queryKey: ['getProducts'] });
        },
        onError: (err) => {
            console.log(err);
            toast.error("Update in Error");
        },
    });
    return (
        <div className='p-3 rounded-xl bg-white shadow-md '>
            <FormProduct data={data?.data} submitHandler={mutate} />
        </div>
    )
}
