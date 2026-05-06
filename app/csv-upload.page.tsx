"use client"
import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

import { useEffect, useState } from "react"
import Papa from "papaparse"
import { toast } from "sonner"
import { DataTable } from "@/app/custom-components/data-table"
import { CopyJSON } from "@/app/custom-components/copy-json"
import { CsvDataTypes } from "@/app/types/main-types"
import { ModeToggle } from "@/components/ui/theme-toggle"

export default function CSVupload() {
  const [headers, setHeaders] = useState<string[]>([])
  const [csvData, setCsvData] = useState<Record<string, any>[]>([])
  const [error, setError] = useState<string>("Get started with CSV upload")
  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0]

    if (!selectedFile) return

    setFile(selectedFile)
  }

  // Copy

  const handleCopy = () => {
    if (!csvData.length) {
      return showError("Nothing to copy")
    }

    navigator.clipboard
      .writeText(JSON.stringify(csvData))
      .then(() => {
        console.log("Copied!")
        setError("Copied !")
      })
      .catch((err) => {
        console.error("Copy failed:", err)
      })
  }

  // Error Toaster Handling

  const showError = (message: string) => {
    setError(message)
    toast(message, {
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }

  // CSV upload and Papa parser

  const uploadCSV = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!file) {
      showError("No CSV file selected")
      return
    }

    // csv validation
    if (!file.name.endsWith(".csv")) {
      showError("Upload a valid CSV file")
      return
    }

    Papa.parse<CsvDataTypes>(file, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        const data = result.data

        if (!data || data.length === 0) {
          showError("CSV file is empty")
          return
        }

        const headers = Object.keys(data[0])

        setHeaders(headers)
        setCsvData(data)
      },
      error: (err) => {
        console.error("Parsing error:", err)
        showError("Failed to parse CSV")
      },
    })
  }

  // useEffect

  useEffect(() => {
    showError(error)
  }, [error])

  console.log(headers)
  console.log(csvData)
  return (
    <>
      <div className="flex flex-col items-center justify-between gap-6 px-8 md:flex-row lg:px-2">
        <Field className="w-full">
          <FieldLabel htmlFor="picture">Upload CSV</FieldLabel>
          <Field orientation="horizontal">
            <form
              onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
                uploadCSV(e)
              }}
              className="flex flex-col gap-2 lg:flex-row"
            >
              <Input
                id="csv"
                accept=".csv"
                type="file"
                onChange={handleFileChange}
              />
              <Button type="submit">Submit</Button>

              <Button
                type="reset"
                variant="destructive"
                onClick={() => {
                  setFile(null)
                  setCsvData([])
                  setHeaders([])
                }}
              >
                Reset
              </Button>
              <ModeToggle />
            </form>
          </Field>
          <FieldDescription className="hidden lg:block">
            Select a csv to upload.
          </FieldDescription>
        </Field>

        <CopyJSON handleCopy={handleCopy} />
        {/* For Mobile */}
        <Separator className="my-14 lg:hidden" />
      </div>

      {/* For Web */}
      <Separator className="my-10 hidden lg:block" />

      <>
        <DataTable headers={headers} csvData={csvData} />
      </>
    </>
  )
}
