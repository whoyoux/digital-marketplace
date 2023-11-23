import { H2 } from "@/components/ui/H2";
import { db } from "@/lib/db";
import { users, test } from "@/lib/db/schema";

export default async function Home() {
    const result = await db.select().from(test).all();
    // await db.insert(test).values({ id: "test", title: "test" }).execute();
    console.log(result);

    return (
        <main>
            <H2>main page</H2>
        </main>
    );
}
