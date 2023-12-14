import Formulario from './components/Formulario'

import casco from './assets/casco.webp'
import pico from './assets/pico.webp'
import cuerda from './assets/cuerda.webp'
import mosqueton from './assets/mosqueton.webp'
import cinturon from './assets/cinturon.webp'

function App() {

	return (
		<>
			<div className='container mx-auto flex items-center justify-center h-screen'>
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
              <Formulario />
            </section>

            <section>

            </section>
          </main>

				</div>
			</div>
		</>
	)
}

export default App
