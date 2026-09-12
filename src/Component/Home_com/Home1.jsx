import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Home1 = () => {
    const stats = [
        {
            value: '248',
            title: 'Total Projects',
            link: '/projects'
        },
        {
            value: '18,420',
            title: 'Land Acquired',
            link: '/land-acquired'
        },
        {
            value: '₹ 1,240 Cr',
            title: 'Compensation Distributed',
            link: '/compensation'
        },
        {
            value: '86%',
            title: 'R&R Progress',
            link: '/rr-progress'
        },
        {
            value: '72%',
            title: 'Projects on Track',
            link: '/projects-on-track'
        }
    ]

    return (
        <div className="w-full text-black p-5 -mt-32">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                {stats.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl p-5 shadow-lg border border-gray-200 
                                   hover:-translate-y-2 hover:shadow-2xl 
                                   transition-all duration-300"
                    >
                        <div className="flex flex-col items-start justify-between gap-3">

                            <span className="text-3xl font-bold text-blue-700">
                                {item.value}
                            </span>

                            <span className="text-sm font-medium text-gray-600">
                                {item.title}
                            </span>

                            <Link
                                to={item.link}
                                className="flex items-center gap-2 text-blue-600 
                                           font-semibold text-sm hover:text-blue-900 
                                           transition-colors duration-200"
                            >
                                <span>View Details</span>
                                <ArrowRight size={18} />
                            </Link>

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Home1