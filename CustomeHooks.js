import React from 'react';
import { useState } from 'react';
function useCounter(initialvalue = 0) {
    const [count, setCount] = useState(initialvalue)
    const plusCounter = () => setCount(count + 1);
    const minusCounter = () => setCount(count - 1);
    const reset = () => setCount(initialvalue);
    return { count, plusCounter, minusCounter, reset }

}

