import { Button } from "@material-tailwind/react";

export default function ButtonComponent({ onClick, children }) {
  return (
    <Button onClick={onClick} className="outiline-none rounded-sm bg-green-400">
      <span className="text-xs">{children}</span>
    </Button>
  )
}