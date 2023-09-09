'use client'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
 

export default function Page() {
  const router = useRouter()
  useEffect(()=>{
    console.log(router.query)
  },[])
  return <p>Post: {router.query}</p>
}