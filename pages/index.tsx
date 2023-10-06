
import {Button} from "@/components/Button"
import { Input } from "@/components/Input"

const PaginaPrincipal = () => {
  return (
    
      <div className="flex flex-col w-full items-center gap-2 p-10">
        <span>Hola mundo</span>
        <Input label='Primer nombre' placeholder='Nombre' />
        <Input label='Apellido' placeholder='Apellido'/> 
        <Input label='Correo' placeholder='test@test.com'/>
        <Input label='password' type='password' />
        <Button/>
      </div>
    
  )
}
export default PaginaPrincipal
