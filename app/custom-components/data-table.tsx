import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTableProps } from "@/app/types/main-types"

const DataTable = ({ headers, csvData }: DataTableProps) => {
  return (
    <>
      {headers.length === 0 ? (
        <>
          <div className="flex h-1/2 items-center justify-center">
            <h1 className="mt-8 scroll-m-20 text-center text-3xl lg:text-4xl font-extrabold tracking-tight text-balance text-muted">
              No Data
            </h1>
          </div>
        </>
      ) : (
        <>
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/30 hover:bg-primary/30">
                {headers.map((header: string, index: number) => {
                  return (
                    <>
                      <TableHead
                        key={index}
                        className={
                          index === headers.length - 1 ? "text-end" : ""
                        }
                      >
                        {header}
                      </TableHead>
                    </>
                  )
                })}
              </TableRow>
            </TableHeader>
            <TableBody>
              {csvData.map((row: Record<string, any>, rowIndex: number) => (
                <TableRow key={rowIndex}>
                  {headers.map((header, colIndex) => (
                    <TableCell
                      key={colIndex}
                      className={
                        colIndex === headers.length - 1 ? "text-end" : ""
                      }
                    >
                      {row[header]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </>
  )
}

export { DataTable }
