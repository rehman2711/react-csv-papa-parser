type CsvDataTypes = Record<string, string>

type DataTableProps = {
  headers: string[]
  csvData: Record<string, any>[]
}

export { type CsvDataTypes, type DataTableProps }
