import dynamic from 'next/dynamic';

const Sim = dynamic(() => import('../components/ConfederacionSim'), {
  ssr: false
});

export default function Home() {
  return (
    <div>
      <Sim />
    </div>
  );
}
