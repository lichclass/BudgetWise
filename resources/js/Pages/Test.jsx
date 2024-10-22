import { usePage } from '@inertiajs/react'

function Test() {

    const { auth } = usePage().props

    return (

        <div className='text-4xl text-white text-center'>
            {
                auth.user 
                    ? <h1>Is Logged in</h1>
                    : <h1>Is not Logged in</h1>
            }
        </div>


    );

}

export default Test;