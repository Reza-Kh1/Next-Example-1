"use client"
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
const getData = () => {
  return axios.get("products")
}
export default function page() {
    const query = useQueryClient();
    const { data } = useQuery({
      queryKey: ["getProducts"],
      queryFn: getData,
      staleTime: 1000 * 60 * 60 * 24,
      gcTime: 1000 * 60 * 60 * 24,
    });
    console.log(data);
  return (
    <div>
      
    </div>
  )
}
