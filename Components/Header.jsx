
import Link from 'next/link'
import React, { useContext,useState, useEffect } from 'react'
import { getCategories } from '../services'
const Header = () => {
    

    const [categories, setcategories] = useState([]);
    useEffect(() => {
        getCategories()
            .then((newCategories) => setcategories(newCategories))
    }, []);
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="transition duration-500 cursor-pointer font-bold text-4xl text-white hover:text-blue-500">
                            Geeky Minders
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {categories.map((category) => <Link key={category.slug} href={`/category/${category.slug}`}>
                        <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer transition-all hover:text-green-400 hover:text-xl">
                            {category.name}
                        </span>
                    </Link>)}
                </div>
            </div>
        </div>
    )
}

export default Header