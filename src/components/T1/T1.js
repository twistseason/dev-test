import React from 'react'
import useSWR from 'swr'
import Styles from '@/styles/T1.module.css'
import Image from 'next/image'

export const T1 = () => {

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error } = useSWR('https://picsum.photos/v2/list', fetcher)
    if (error) return <div>failed to load</div>


    console.log(data);
    return (
        <>
            <div className={Styles.container}>
                <span>
                    Evreryone&apos;s photos
                </span>
                {/* grid */}
                <div className={Styles.grid}>
                    {data && data.map((item) => (
                        <Image
                            key={item.id}
                            src={item.download_url}
                            alt={item.author}
                            layout={'responsive'}
                            width={item.width}
                            height={item.height}
                            style={{
                                // maxWidth: 'fit-content',
                                maxHeight: item.width > item.height ? '150px' : '304px',
                                // objectFit: 'contain',
                                gridRow: item.width < item.height ? 'span 2' : 'auto',
                                minHeight: item.width < item.height ? '304px' : '150px',
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}
