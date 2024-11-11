import React, { ComponentProps } from 'react';
import {Button} from "./Button";

export default function Practice1()
{
    return(
        <>
		<div className='mt-14 mb-50 flex space-x-20 items-center justify-center'>
        <Button title='button1' className={'bg-red-400 border-red-400'}>button1 </Button>
        <Button title='button2' className={'bg-amber-400 border-amber-400'}>button2 </Button>
        <Button title='button3' className={'bg-green-400 border-green-400'}>button3 </Button>
		</div>
        </>

    );
}
