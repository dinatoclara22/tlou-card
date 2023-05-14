import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function Card({ title, description, img }) {
	return (
		<div className="h-full flex flex-col md:flex-row items-center gap-10 bg-slate-200 py-10 px-10 rounded-lg ">
			<div className="">
				<img className="rounded-lg w-[40rem]" src={img} alt={title} />
			</div>
			<div>
				<h1 className="font-sans text-3xl font-bold mb-5">{title}</h1>
				<p className="mb-5 break-normal">{description}</p>
				<Button text="Comprar agora" />
			</div>
		</div>
	);
}
