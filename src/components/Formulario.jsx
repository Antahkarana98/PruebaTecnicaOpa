const Formulario = () => {

	return (
		<>
			<p className='text-center text-xl'>
				Ingresa el <span className='text-teal-500 font-bold'>peso maximo</span>{' '}
				que quieres llevar a tu aventura y las{'  '}
				<span className='text-teal-500 font-bold'>calorias minimas</span> que
				quieres quemar durante la escalada.
			</p>
			<form className='flex  flex-col'>
				<label htmlFor='peso-maximo' className='mt-5 mb-2 font-bold'>
					Peso Maximo:
				</label>
				<input
					type='number'
					id='peso-maximo'
					name='peso-maximo'
					placeholder='Ingresa el peso maximo que quieres cargar'
					className='rounded-xl p-2 border-2 border-gray-200 outline-none focus:border-teal-500'
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
