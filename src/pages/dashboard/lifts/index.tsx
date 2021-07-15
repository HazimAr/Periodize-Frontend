import React, { ReactElement } from "react";
import Layout from "../../../components/dashboard/layout";
import LiftsList from "../../../components/lifts/liftslist";

interface Props {}

export default function DashHome({}: Props): ReactElement {
  return (
    <Layout>
      <LiftsList />
    </Layout>
  );
}
