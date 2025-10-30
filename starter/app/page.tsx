'use server';

import model from "@/ai/model";
import V0Chat from "@/components/V0Chat/V0Chat";

export default async function Home() {
  return (
    <V0Chat
      handleModel={model}
    />
  );
}
