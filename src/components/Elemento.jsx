// componente que rederiza los elementos de la lista inicial

const Elemento = ({img, titulo, peso, calorias}) => {
  return (
    <>
      <img src={img} alt='casco' className='border-e-2 mb-5' />
      <div className='ps-3'>
        <p className='font-bold text-lg'>{titulo}</p>
        <p className='font-bold'>{peso}</p>
        <p className='font-bold'>{calorias}</p>
      </div>
    </>
  )
}

export default Elemento
