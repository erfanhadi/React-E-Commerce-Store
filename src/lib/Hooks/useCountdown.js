import { useEffect, useState } from "react"

const useCountdown = (duration = 120)=>{
    const [timeLeft , setTimeLeft] = useState(0);
    const [isRunning , setIsRunning] = useState(false);

    useEffect(()=>{
        if(!isRunning) return

        if(isRunning <= 0){
            setIsRunning(false);
            return;
        }

        const interval = setInterval(() => {
            setTimeLeft (prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    } , [timeLeft , isRunning]);

    const restart = () => {
        setTimeLeft(duration);
        setIsRunning(true);
    };

    const getFormattedTime = () => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;

        return `${minutes}:${seconds.toString().padStart(2,"0")}`;
    }

    return{
        timeLeft,
        isRunning,
        isExpired: timeLeft === 0,
        restart,
    }
}