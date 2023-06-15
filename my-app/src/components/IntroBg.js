import intro_dark_dc_bg from "../image/bg-desktop-dark.jpg";
const IntroBg = () => {
	const background = intro_dark_dc_bg;
	return (
		<div className="introBg position-absolute w-100 top-0 z-n1">
			<div className="image img-fluid">
				<img className="w-100" src={background} />
			</div>
		</div>
	);
};

export default IntroBg;
