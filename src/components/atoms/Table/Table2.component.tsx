
//(1)constructor interface propiedades tabla
interface TableProps{
    columns?: columnInterface[], // (3)array para columans y rows para filas (any porque no se conoce el tipo)
    rows?: any[]

}

//(2)contructor interface columnas (que se añade como propiedades a la tabla)
export interface columnInterface{
    text?: string,
    id: string
}

//(4) añadimos las porpiedades a la función entre {}. Recuerda que la porpiedad columns = [], es decir, un array
export const Table2: React.FC<TableProps> = ({columns = [], rows = []}) => {

    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr> 
                        {
                            /*(5)recorremos el array de columnas (propiedad de la tabla) con el método .map.
                            por cada vez que se recorra el array se generará un <th></th>.
                            Se debe asignar un key obligatorio (id o index).
                            El contenido del td será un text (propiedad del columnsInterface)*/
                            columns.map((column)=>(
                                <th key={column.id}>{column.text}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        /*(6)recorremos el array de filas con el método. map.
                        asignamos el key obligatorio, en este caso el index  */
                        rows.map((row, index) => (
                            <tr key={index}>

                                {
                                /*recorremos nuevamente el array de columna para que en cada fila
                                se cree la columna correspondiente al column.id */
                                columns.map((column, index)=>(
                                <td key={`${column.id}-${index}`}>{row[column.id]}</td>
                                ))}
                                
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}