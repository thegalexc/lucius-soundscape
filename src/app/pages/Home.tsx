import PrimaryLayout from "../layouts/PrimaryLayout";
import { RequestInfo } from "rwsdk/worker";

export function Home({ ctx }: RequestInfo) {
  return (
    <PrimaryLayout>
      <div>Coming soon ...</div>
    </PrimaryLayout>
  );
}
