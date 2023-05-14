// eslint-disable-next-line react/prop-types
export default function Button({ text, className }) {
	return (
		<button
			className={`${className} bg-indigo-800 text-white py-3 px-8 rounded-lg font-semibold hover:bg-orange-800 transition-colors`}
		>
			{text}
		</button>
	);
}
