import { BarraProgressProduct } from '../components/ProgresoProducto'
import { HeaderComponent } from '../components/ui/headerComponent'
import { useFecthMetasData } from '../hooks/useFetchData'
import { sortData } from '../utils/funtions'
import { useAuth } from '../auth/AuthContext'
import { useMemo, useState } from 'react'

function AspDiaPage() {
  const { dataGeneral} = useAuth()

  const codigo = dataGeneral?.codigo!
  const zona = dataGeneral?.sucursal.ZONA!

  const { data, isLoading } = useFecthMetasData('/cumpDiaProd', zona, parseInt(codigo))
  const [isAscending, setIsAscending] = useState(false)

  const sortedData = useMemo(() => {
    return Array.isArray(data) ? sortData(data, isAscending) : []
  }, [data, isAscending])

  return (
    <section className='px-1'>
      <HeaderComponent setIsAscending={setIsAscending} isLoading={isLoading} isAscending={isAscending} text='Día Actual' />
      <article className='grid grid-cols-2 gap-2 px-1 2xl:grid-cols-3 3xl:grid-cols-4'>
        {
          sortedData.map(meta => (
            <BarraProgressProduct
              key={meta.id} pruducto={meta.producto} ventaActual={meta.ventaActual} aspiracionDia={meta.aspiracionDia}
              percentage={parseFloat(meta.porcentaje)} percentage2={parseFloat(meta.porcentaje2)}
            />
          ))
        }
      </article>
    </section>

  )
}

export default AspDiaPage
