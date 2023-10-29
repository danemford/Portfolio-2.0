import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { LiaHandPointRightSolid } from 'react-icons/lia'

const Footer = () => {

    return (
        <footer className="border-t-sky-500/75 border-t px-12">
            <div className='flex justify-center my-6'>
                <p className='flex items-center'>You can also find me here<LiaHandPointRightSolid className='h-6 w-6 ml-1'/> </p>
                <div className='flex px-6'>
                    <Link href='https://github.com/danemford'>
                        <AiFillGithub className='h-8 w-8 mr-2'/>
                    </Link>
                    <Link href='https://www.linkedin.com/in/dane-ford/'>
                      <AiFillLinkedin className='h-8 w-8'/>
                    </Link>
                </div>
            </div>

        </footer>
    )
}
export default Footer