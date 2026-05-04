import { Button } from "@/components/ui/button"
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"

export default function Page() {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]
  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <Field className="w-full">
          <FieldLabel htmlFor="picture">Upload CSV</FieldLabel>
          <Field orientation="horizontal">
            <form
              action="uploadCSV"
              className="flex flex-col gap-2 lg:flex-row"
            >
              <Input id="csv" type="file" />
              <Button type="submit">Submit</Button>

              <Button type="reset" variant="destructive">
                Reset
              </Button>
            </form>
          </Field>
          <FieldDescription className="hidden lg:block">
            Select a csv to upload.
          </FieldDescription>
        </Field>

        <div className="flex w-full max-w-md flex-col gap-6">
          <Item variant="outline">
            <ItemContent>
              <ItemTitle>Copy JSON</ItemTitle>
              <ItemDescription>
                Copy the json format of the csv data .
              </ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="outline" size="sm">
                Action
              </Button>
            </ItemActions>
          </Item>
        </div>
      </div>
      <Separator className="my-10" />

      <>
        <Table>
          <TableHeader>
            <TableRow className="bg-primary/30 hover:bg-primary/30">
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    </>
  )
}
