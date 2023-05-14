import Card from "./components/Card";
import tlouPost from "/assets/theLastOfUs.webp";
import tlou2Post from "/assets/The-Last-of-Us-2.jpg";

export default function App() {
	return (
		<div className="bg-gradient-to-r from-slate-600  to-blue-950 min-h-screen flex flex-col gap-6 items-center justify-center px-4 py-4 lg:px-16">
			<Card
				img={tlouPost}
				title="The Last of Us"
				description="É quando Joel é contratado para levar Ellie  para fora de uma zona de quarentena - o que deveria ser um simples trabalho para ele se torna uma jornada brutal pelos Estados Unidos, onde ambos dependem um do outro para sobreviver."
			/>

			<Card
				img={tlou2Post}
				title="The Last of Us Parte 2"
				description="Ambientado cinco anos após os eventos de The Last of Us, o jogador assume o papel de duas protagonistas em um Estados Unidos pós-apocalíptico: Ellie, que busca por vingança após um evento traumático, e Abby, uma soldada que se envolve em um conflito entre uma milícia e um culto."
			/>
		</div>
	);
}
