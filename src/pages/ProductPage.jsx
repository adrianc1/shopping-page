import FormattedPrice from '../components/FormattedPrice';
import QuantityIncrement from '../components/QuantityIncrement';
import BackToShopBtn from '../components/BackToShopBtn';
import useSingleProduct from '../hooks/useSingleProduct';
import { useParams } from 'react-router';

const ProductPage = () => {
	let params = useParams();
	let id = params.id;

	const { product, error, loading } = useSingleProduct(id);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>A network error was encountered</p>;

	return (
		<div className="flex flex-col items-center mt-4">
			<div className="self-start ml-12 mb-4">
				<BackToShopBtn />
			</div>
			<li className=" border border-gray-200 rounded-2xl flex flex-col h-[550px] drop-shadow-2xl max-w-9/10 ">
				<div className="prd-img-cnt pt-8 flex-1 flex items-center justify-center overflow-hidden bg-gray-50 rounded-t-2xl">
					<img
						src={product.image}
						alt=""
						className="max-w-full max-h-full object-contain "
					/>
				</div>
				<div className="prd-info pt-8 flex flex-col flex-1 p-3 bg-white rounded-b-2xl">
					<span className="font-bold">{product.title}</span>
					<span className="my-2">{product.description}</span>
					<FormattedPrice price={product.price} />
					<QuantityIncrement />
					<span>{product.rating.rate} *</span>
				</div>
			</li>
		</div>
	);
};

export default ProductPage;
