import React from "react";
import { Card } from "@repo/ui/src/components/ui/card";
interface RouteWrapperProps {
  id: string | number;
  Component: React.ComponentType<any>;
}

const RouteWrapper = ({ Component, id }: RouteWrapperProps) => {
  if (!id) {
    return <div>Invalid Role ID</div>;
  }

  return (
    <Card className="border-0 p-10">
      <Component id={id} />
    </Card>
  );
};

export default RouteWrapper;
