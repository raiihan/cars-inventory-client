import React, { useEffect, useRef, useState } from 'react';
import img from "../../../Assets/couner-pic.jpg";

const Count = ({ end }) => {
    const [state, setState] = useState(null);
    const ref = useRef(0);

    const accumulator = end / 200;

    const updateCounterState = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + accumulator);
            if (result > end) return setState(end)
            setState(result)
            ref.current = result
        }
        setTimeout(updateCounterState, 50)
    }

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            updateCounterState()
        }
        return () => (isMounted = false);
    }, [end])
    return <div> {state}</div>

}

const TotalCounter = () => {
    return (
        <div>

            <div className='flex flex-col sm:flex-row items-center my-12 justify-around'>
                <div
                    className='h-20 flex flex-col items-center justify-center'>
                    <h2
                        className='text-4xl'>
                        <Count end={1123456} />
                    </h2>

                    <p>Car for sale</p>
                </div>
                <div className='h-20 flex flex-col items-center justify-center'>
                    <h2 className='text-4xl'> <Count end={2956} /></h2>
                    <p>visitor per day</p>
                </div>
                <div className='h-20 flex flex-col items-center justify-center'>
                    <h2 className='text-4xl'><Count end={5123} /></h2>
                    <p>Supplier Review</p>
                </div>
                <div className='h-20 flex flex-col items-center justify-center'>
                    <h2 className='text-4xl'><Count end={1199} /></h2>
                    <p>Verified Supplier</p>
                </div>
            </div>
        </div>
    );
};

export default TotalCounter;