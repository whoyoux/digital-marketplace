import { H2 } from "@/components/ui/H2";
import { db } from "@/lib/db";
import { test } from "@/lib/db/schema";
import { P } from "@/components/ui/P";
import { auth } from "@/lib/auth";

export default async function Home() {
    // const result = await db.select().from(test).all();
    // await db.insert(test).values({ id: "test", title: "test" }).execute();
    // console.log(result);

    const session = await auth();

    return (
        <main>
            <H2>main page</H2>
            <P>session {JSON.stringify(session)}</P>
        </main>
    );
}
