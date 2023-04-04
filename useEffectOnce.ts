import { EffectCallback, useEffect } from 'react'

function useEffectOnce(effect: EffectCallback) {
  useEffect(()=>{
    if(!effect){console.log("add logic")};
    effect;
  }, [])
}

export default useEffectOnce
