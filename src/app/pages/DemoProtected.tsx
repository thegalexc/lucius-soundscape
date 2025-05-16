import { RequestInfo } from "rwsdk/worker";

export function DemoProtected({ ctx }: RequestInfo) {
  return (
    <div>
      <p>
        {ctx.user?.username
          ? `You are logged in as user ${ctx.user.username}`
          : "You are not logged in"}
      </p>
    </div>
  );
}
