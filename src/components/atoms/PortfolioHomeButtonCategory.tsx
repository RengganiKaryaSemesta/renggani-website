import { categoryActived } from "src/stores/portfolioHomeStore"
import { useStore } from '@nanostores/react';
const PortfolioHomeButtonCategory = ({ category }: {
    category: string
}) => {
    const isActive = useStore(categoryActived);
    return (<button onClick={() => categoryActived.set(category)}
        className={` ${category == isActive ? 'text-white bg-blue-800 dark:bg-gray-800' : 'bg-white dark:text-gray-200 dark:bg-gray-700 text-blue-800'} focus:outline-none px-6 py-2 text-sm lg:text-base rounded-full font-roboto text-nowrap shadow-lg`}
    >{category} </button>)
}
export default PortfolioHomeButtonCategory