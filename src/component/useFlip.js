import { useState } from 'react';

function useFlip() {
    const [flip, setFlip] = useState(true);

    const flipCard = () => {
        setFlip(flip => !flip);
    }

    return [flip, flipCard];

}

export default useFlip;