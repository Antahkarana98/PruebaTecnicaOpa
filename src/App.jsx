import { useState, useEffect } from 'react'

import Formulario from './components/Formulario'

import casco from './assets/casco.webp'
import pico from './assets/pico.webp'
import cuerda from './assets/cuerda.webp'
import mosqueton from './assets/mosqueton.webp'
import cinturon from './assets/cinturon.webp'

function App() {

  const [pesoMaximo, setPesoMaximo] = useState(0)
  const [caloriasMinimas, setCaloriasMinimas] = useState(0)
  const [resultado, setResultado] = useState([])

  useEffect(() => {
    localStorage.setItem('pesoMaximo', JSON.stringify(pesoMaximo))
    localStorage.setItem('caloriasMinimas', JSON.stringify(caloriasMinimas))
    localStorage.setItem('resultado', JSON.stringify(resultado))
  }, [resultado]);

  useEffect(() => {
    const pesoMaximoLocal = JSON.parse(localStorage.getItem('pesoMaximo'))
    const caloriasMinimasLocal = JSON.parse(localStorage.getItem('caloriasMinimas'))
    const resultadoLocal = JSON.parse(localStorage.getItem('resultado'))

    if (pesoMaximoLocal) {
      setPesoMaximo(pesoMaximoLocal)
    }
    if (caloriasMinimasLocal) {
      setCaloriasMinimas(caloriasMinimasLocal)
    }
    if (resultadoLocal) {
      setResultado(resultadoLocal)
    }
  }, []);


	return (
		<>
			<div className='container mx-auto flex items-center justify-center'>
				<div className='w-2/3 bg-white p-8 shadow-md '>
					<header>
						<h1 className='text-center text-5xl font-bold'>
							¿Estás listo para irte a{' '}
							<span className='text-teal-500 text-6xl'>escalar riscos</span>?
						</h1>
						<p className='my-5 text-xl text-center text-slate-400'>
							Aquí te ayudaremos a escoger el mejor <span className='text-teal-400'>kit de elementos</span> según la
							cantidad de calorías que quieres quemar.
						</p>
					</header>

          <main>
            <section className='grid grid-cols-2 my-5'>
              <div className='grid grid-cols-2 items-center'>
                <img src={casco} alt='casco'className='border-e-2 mb-5' />
                <div className='ps-3'>
                  <p className='font-bold text-lg'>Casco</p>
                  <p className='font-bold'>Peso: 5</p>
                  <p className='font-bold'>Calorias: 3</p>
                </div>
              </div>
              <div className='grid grid-cols-2 items-center'>
                <img src={pico} alt='pico' className='border-e-2 mb-5'/>
                <div className='ps-3'>
                  <p className='font-bold text-lg'>Pico</p>
                  <p className='font-bold'>Peso: 3</p>
                  <p className='font-bold'>Calorias: 5</p>
                </div>
              </div>
              <div className='grid grid-cols-2 items-center'>
                <img src={cuerda} alt='cuerda' className='border-e-2 mb-5'/>
                <div className='ps-3'>
                  <p className='font-bold text-lg'>Cuerda</p>
                  <p className='font-bold'>Peso: 5</p>
                  <p className='font-bold'>Calorias: 2</p>
                </div>
              </div>
              <div className='grid grid-cols-2 items-center'>
                <img src={mosqueton} alt='mosqueton' className='border-e-2 mb-5'/>
                <div className='ps-3'>
                  <p className='font-bold text-lg'>Mosqueton</p>
                  <p className='font-bold'>Peso: 1</p>
                  <p className='font-bold'>Calorias: 8</p>
                </div>
              </div>
              <div className='grid grid-cols-2 items-center'>
                <img src={cinturon} alt='cinturon' className='border-e-2 mb-5'/>
                <div className='ps-3'>
                  <p className='font-bold text-lg'>Cinturon</p>
                  <p className='font-bold'>Peso: 2</p>
                  <p className='font-bold'>Calorias: 3</p>
                </div>
              </div>
            </section>
            <section>
              <Formulario
                caloriasMinimas={caloriasMinimas}
                setCaloriasMinimas={setCaloriasMinimas}
                pesoMaximo={pesoMaximo}
                setPesoMaximo={setPesoMaximo}
                resultado={resultado}
                setResultado={setResultado}
              />
            </section>
            { resultado.length ?  (
              <section className='mt-10'>
                <p className='text-2xl font-bold'>Resultado: </p>
                <p className='text-2xl mt-5'>Peso Maximo: {pesoMaximo}</p>
                <p className='text-2xl my-5'>Caloria Minimas: {caloriasMinimas}</p>
                <div className='grid grid-cols-3'>
                  {resultado.map((elemento, i) => (
                    <div key={i}>
                      {elemento === 'casco' ? (
                        <div className='border mx-1'>
                          <img key={i} src={casco} alt="" className='border-b pb-2'/>
                          <div className='p-2'>
                            <p className='font-bold text-lg'>Casco</p>
                            <p className='font-bold'>Peso: 5</p>
                            <p className='font-bold'>Calorias: 3</p>
                          </div>
                        </div>
                      ) : elemento === 'pico' ? (
                        <div className='border mx-1'>
                          <img key={i} src={pico} alt="" className='border-b pb-2'/>
                          <div className='p-2'>
                            <p className='font-bold text-lg'>Pico</p>
                            <p className='font-bold'>Peso: 5</p>
                            <p className='font-bold'>Calorias: 3</p>
                          </div>
                        </div>
                      ) : elemento === 'cuerda' ? (
                        <div className='border mx-1'>
                          <img key={i} src={cuerda} alt="" className='border-b pb-2'/>
                          <div className='p-2'>
                            <p className='font-bold text-lg'>Cuerda</p>
                            <p className='font-bold'>Peso: 5</p>
                            <p className='font-bold'>Calorias: 3</p>
                          </div>
                        </div>
                      ) : elemento === 'mosqueton' ? (
                        <div className='border mx-1'>
                          <img key={i} src={mosqueton} alt="" className='border-b pb-2'/>
                          <div className='p-2'>
                            <p className='font-bold text-lg'>Mosqueton</p>
                            <p className='font-bold'>Peso: 5</p>
                            <p className='font-bold'>Calorias: 3</p>
                          </div>
                        </div>
                      ) : elemento === 'cinturon' ? (
                        <div className='border mx-1'>
                          <img key={i} src={cinturon} alt="" className='border-b pb-2'/>
                          <div className='p-2'>
                            <p className='font-bold text-lg'>Cinturon</p>
                            <p className='font-bold'>Peso: 5</p>
                            <p className='font-bold'>Calorias: 3</p>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </section>
            ) : null}
          </main>

				</div>
			</div>
		</>
	)
}

export default App
