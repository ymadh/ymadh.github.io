import React, {  useState, useEffect } from 'react';

export default function useCounter(initialCount = 0) {

    const [count, setCount] = useState(0);

    return [count, setCount];
}