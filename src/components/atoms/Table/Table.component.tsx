interface TableProps{
    headers?: HeaderInterface[], //la fila se define como array del tipo (se debe crear primeramente una interface)
    rows?: any[]
}

//propiedades del array headers
export interface HeaderInterface {
    text?: string
    id: string
}

//las propiedades de interface se pasan como parámetro a la función
export const Table: React.FC<TableProps> = ({headers = [], rows = []}) => {

  return (
    <>
        <table>
            <thead>
                <tr>
                    {
                        //es obligatorio añadir la propiedad key, por defecto pondremos id o index
                        headers.map((header) => (
                            <th key={header.id}>{header.text}</th>
                        ))
                    }              
                </tr>
            </thead>
            <tbody>
                {
                    //la propiedad key la definimos con el índice
                    rows.map((row, index) => (
                        <tr key={index}>{
                            headers.map((header, index) => (
                                <td key={`${header.id}-${index}`}>{row[header.id]}</td>
                            ))
                        }</tr>
                    ))
                }

            </tbody>
        </table>
    </>
  )
}

export default Table

