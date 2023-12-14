import {elementos, elementosValores} from '../data/data'

const Formulario = ({pesoMaximo, setPesoMaximo, caloriasMinimas,setCaloriasMinimas, resultado,setResultado}) => {


  const handleChanges = (e) => {
    const {name, value} = e.target

    if (name === 'peso-maximo') {
      setPesoMaximo(value)
    } else if (name === 'calorias-minimas') {
      setCaloriasMinimas(value)
    }
  }

  const handleSumit = (e) => {
    e.preventDefault()

    let sumaP = 0;
    let sumaC = 0;
    const pesoMaximoNumber = parseInt(pesoMaximo)
    const caloriasMinimasNumber = parseInt(caloriasMinimas)

    const informacion = [pesoMaximoNumber, caloriasMinimasNumber]
    let areegloElementos = [];

    for (let i = 0; i < elementos.length; i++) {
      if(!elementos[i].calorias + sumaC <= informacion[1] && elementos[i].peso + sumaP <= informacion[0]) {
        sumaP += elementos[i].peso
        sumaC += elementos[i].calorias
        areegloElementos = [...areegloElementos, {peso: elementos[i].peso, calorias: elementos[i].calorias}]
      }
    }

    let arregloElementosResultado = []

    areegloElementos.forEach((elemento) => {
      // Comparar con elementosValores y agregar al resultado
      Object.entries(elementosValores).forEach(([key, value]) => {
        if (JSON.stringify(elemento) === JSON.stringify(value)) {
          arregloElementosResultado = [...arregloElementosResultado, key]
        }
      });
    });

    setResultado(arregloElementosResultado)

  }

	return (

		<>
			<p className='text-center text-xl'>
				Ingresa el <span className='text-teal-500 font-bold'>peso maximo</span>{' '}
				que quieres llevar a tu aventura y las{'  '}
				<span className='text-teal-500 font-bold'>calorias minimas</span> que
				quieres quemar durante la escalada.
			</p>
			<form
        className='flex  flex-col'
        onSubmit={handleSumit}
       >
				<label htmlFor='peso-maximo' className='mt-5 mb-2 font-bold'>
					Peso Maximo:
				</label>
				<input
					type='number'
					id='peso-maximo'
					name='peso-maximo'
					placeholder='Ingresa el peso maximo que quieres cargar'
					className='rounded-xl p-2 border-2 border-gray-200 outline-none focus:border-teal-500'
          onChange={handleChanges}

        />
				<label htmlFor='calorias-minimas' className='mt-5 mb-2 font-bold'>
					Calorias Minimas:
				</label>
				<input
					type='number'
					id='calorias-minimas'
					name='calorias-minimas'
					placeholder='Ingresa las calorias minimas que quieres quemar'
					className='rounded-xl p-2 border-2 border-gray-200 outline-none focus:border-teal-500'
          onChange={handleChanges}

        />
				<button
					type='submit'
					className='mt-5 py-3 px-2 bg-teal-500 rounded-xl font-bold uppercase text-white hover:bg-teal-600'
				>
					Calcular
				</button>
			</form>
		</>
	)
}

export default Formulario
