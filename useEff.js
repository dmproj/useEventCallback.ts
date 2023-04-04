function useEffectOnce(effect) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{
    if(!effect){console.log("add logic")};
    effect;
  }, [])
}

export default useEffectOnce
