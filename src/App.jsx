import { useState, useEffect } from 'react'

// se importan los componentes
import Formulario from './components/Formulario'

// se importan las imagenes de los elementos
import casco from './assets/casco.webp'
import pico from './assets/pico.webp'
import cuerda from './assets/cuerda.webp'
import mosqueton from './assets/mosqueton.webp'
import cinturon from './assets/cinturon.webp'
import Elemento from './components/Elemento'
import ElementoAvemtura from './components/ElementoAvemtura'

function App() {

  // se crean los estados para guardar los datos de peso maximo, calorias minimas y resultado
  const [pesoMaximo, setPesoMaximo] = useState(0)
  const [caloriasMinimas, setCaloriasMinimas] = useState(0)
  const [resultado, setResultado] = useState([])


  // se guarda en el local storage los datos de peso maximo, calorias minimas y resultado
  useEffect(() => {
    localStorage.setItem('pesoMaximo', JSON.stringify(pesoMaximo))
    localStorage.setItem('caloriasMinimas', JSON.stringify(caloriasMinimas))
    localStorage.setItem('resultado', JSON.stringify(resultado))
  }, [resultado]);


  // se obtiene del local storage los datos de peso maximo, calorias minimas y resultado
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
				<div className='w-11/12 lg:w-2/3 bg-white p-8 shadow-md '>
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

            {/* Se rederiza la lista de elementos */}

            <section className='grid grid-cols-2 my-5'>
              <div className='grid grid-cols-2 items-center'>
                <Elemento
                  img={casco}
                  titulo='Casco'
                  peso='Peso: 5'
                  calorias='Calorias: 3'
                />
              </div>
              <div className='grid grid-cols-2 items-center'>
                <Elemento
                  img={pico}
                  titulo='Pico'
                  peso='Peso: 3'
                  calorias='Calorias: 5'
                />
              </div>
              <div className='grid grid-cols-2 items-center'>
                <Elemento
                  img={cuerda}
                  titulo='Cuerda'
                  peso='Peso: 5'
                  calorias='Calorias: 2'
                />
              </div>
              <div className='grid grid-cols-2 items-center'>
                <Elemento
                  img={mosqueton}
                  titulo='Mosqueton'
                  peso='Peso: 1'
                  calorias='Calorias: 8'
                />
              </div>
              <div className='grid grid-cols-2 items-center'>
                <Elemento
                  img={cinturon}
                  titulo='Cinturon'
                  peso='Peso: 2'
                  calorias='Calorias: 3'
                />
              </div>
            </section>

            {/* Se rederizza el formulario para ingresar los datos */}

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

            {/* Se rederiza el resultado cuando este exista de lo contrario no */}

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
                          <ElementoAvemtura
                            img={casco}
                            titulo='Casco'
                            peso='Peso: 5'
                            calorias='Calorias: 3'
                          />
                        </div>
                      ) : elemento === 'pico' ? (
                        <div className='border mx-1'>
                          <ElementoAvemtura
                            img={pico}
                            titulo='Pico'
                            peso='Peso: 3'
                            calorias='Calorias: 5'
                          />
                        </div>
                      ) : elemento === 'cuerda' ? (
                        <div className='border mx-1'>
                          <ElementoAvemtura
                            img={cuerda}
                            titulo='Cuerda'
                            peso='Peso: 5'
                            calorias='Calorias: 2'
                          />
                        </div>
                      ) : elemento === 'mosqueton' ? (
                        <div className='border mx-1'>
                          <ElementoAvemtura
                            img={mosqueton}
                            titulo='Mosqueton'
                            peso='Peso: 1'
                            calorias='Calorias: 8'
                          />
                        </div>
                      ) : elemento === 'cinturon' ? (
                        <div className='border mx-1'>
                          <ElementoAvemtura
                            img={cinturon}
                            titulo='Cinturon'
                            peso='Peso: 2'
                            calorias='Calorias: 3'
                          />
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
