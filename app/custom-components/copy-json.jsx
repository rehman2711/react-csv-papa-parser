import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { CopyButton } from "@/components/ui/copy-button"
import { Button } from "@/components/ui/button"

export const CopyJSON = ({ handleCopy }) => {
  return (
    <>
      <div className="flex w-full max-w-md flex-col gap-6">
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Copy JSON</ItemTitle>
            <ItemDescription>
              Copy the json format of the csv data .
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="icon" onClick={handleCopy}>
              <CopyButton size="sm" className="text-white" />
            </Button>
          </ItemActions>
        </Item>
      </div>
    </>
  )
}
