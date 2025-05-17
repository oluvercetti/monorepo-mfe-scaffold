"use client";

import RoleDetails from "../../../components/roles/RoleDetails";
import RouteWrapper from "../../../components/roles/RouteWrapper";

export default function IdDetails({ id }) {
  if (!id) return <h1>No ID</h1>;

  return <RouteWrapper id={id} Component={RoleDetails} />;
}
