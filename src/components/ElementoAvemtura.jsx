// componente que renderiza los elementos de la lista de resultados
const ElementoAvemtura = ({img, titulo, peso, calorias}) => {
  return (
    <>
      <img src={img} alt="" className='border-b pb-2'/>
      <div className='p-2'>
        <p className='font-bold text-lg'>{titulo}</p>
        <p className='font-bold'>{peso}</p>
        <p className='font-bold'>{calorias}</p>
      </div>
    </>
  )
}

export default ElementoAvemtura
