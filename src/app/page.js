"use client";
import Image from 'next/image';
import Home from './hamster/page';
import Chat from './chat';
import { useState } from 'react';

export default function Completion() {

  const [isChatting, setIsChatting] = useState(false);

  return (
    <main>
      <Home isChatting={isChatting} setIsChatting={setIsChatting} />
    </main>
  );
}