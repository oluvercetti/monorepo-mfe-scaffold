import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@repo/ui";

export default function TicketsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <h1 className="text-4xl font-bold">Tickets App</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Ticket</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Ticket</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p>Ticket creation form will go here</p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </main>
  );
}
