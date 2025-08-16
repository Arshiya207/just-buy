import { ReactNode } from "react";

export default function Badge({ children }: { children: ReactNode }) {
  return <div className="p-2 rounded-full border ">{children}</div>;
}
